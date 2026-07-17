import { chromium } from "playwright";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const outDir = path.dirname(fileURLToPath(import.meta.url));
const widths = [768, 900, 1195, 1440];

function sampleRow(data, width, y, x0, x1) {
  const colors = new Map();
  for (let x = x0; x <= x1; x++) {
    const i = (y * width + x) * 4;
    const key = `${data[i]},${data[i + 1]},${data[i + 2]}`;
    colors.set(key, (colors.get(key) || 0) + 1);
  }
  return [...colors.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 4)
    .map(([k, n]) => `${k}×${n}`);
}

const browser = await chromium.launch({ headless: true });

for (const width of widths) {
  const page = await browser.newPage({
    viewport: { width, height: 900 },
    deviceScaleFactor: 1,
  });
  await page.goto("http://localhost:3000/", { waitUntil: "networkidle" });
  await page.waitForTimeout(500);

  const meta = await page.evaluate(() => {
    const hero = document.querySelector("section.hero-bg-color");
    const about = Array.from(document.querySelectorAll("section")).find((s) =>
      s.textContent?.includes("About Paragon"),
    );
    const diff = Array.from(document.querySelectorAll("section")).find((s) =>
      s.textContent?.includes("What makes us different"),
    );
    return {
      heroBottom: hero.getBoundingClientRect().bottom + window.scrollY,
      aboutTop: about.getBoundingClientRect().top + window.scrollY,
      aboutBottom: about.getBoundingClientRect().bottom + window.scrollY,
      diffTop: diff.getBoundingClientRect().top + window.scrollY,
      edgeH: getComputedStyle(document.documentElement)
        .getPropertyValue("--section-edge-height")
        .trim(),
      seam: getComputedStyle(document.documentElement)
        .getPropertyValue("--section-edge-seam")
        .trim(),
    };
  });

  // Hero→About seam
  await page.evaluate(
    (y) => window.scrollTo(0, Math.max(0, y - 400)),
    meta.heroBottom,
  );
  await page.waitForTimeout(150);
  const heroShot = await page.screenshot({ type: "png" });
  // About→Difference seam
  await page.evaluate(
    (y) => window.scrollTo(0, Math.max(0, y - 350)),
    meta.diffTop,
  );
  await page.waitForTimeout(150);
  const diffShot = await page.screenshot({
    path: path.join(outDir, `after-${width}-about-diff.png`),
    type: "png",
  });
  fs.writeFileSync(path.join(outDir, `after-${width}-hero-about.png`), heroShot);

  console.log(JSON.stringify({ width, ...meta }));
  await page.close();
}

await browser.close();
console.log("done");
