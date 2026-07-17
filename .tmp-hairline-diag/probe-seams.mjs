import { chromium } from "playwright";

const widths = [390, 768, 900, 1024, 1195, 1440];

const browser = await chromium.launch({ headless: true });

for (const width of widths) {
  const page = await browser.newPage({
    viewport: { width, height: 900 },
    deviceScaleFactor: 1,
  });
  await page.goto("http://localhost:3000/", { waitUntil: "networkidle" });
  await page.waitForTimeout(400);

  const result = await page.evaluate(() => {
    const hero = document.querySelector("section.hero-bg-color");
    const about = Array.from(document.querySelectorAll("section")).find((s) =>
      s.textContent?.includes("About Paragon"),
    );
    const diff = Array.from(document.querySelectorAll("section")).find((s) =>
      s.textContent?.includes("What makes us different"),
    );
    const edgeH = getComputedStyle(document.documentElement).getPropertyValue(
      "--section-edge-height",
    );
    const hr = hero.getBoundingClientRect();
    const ar = about.getBoundingClientRect();
    const dr = diff.getBoundingClientRect();
    return {
      edgeH: edgeH.trim(),
      heroBottom: hr.bottom + window.scrollY,
      aboutTop: ar.top + window.scrollY,
      aboutBottom: ar.bottom + window.scrollY,
      diffTop: dr.top + window.scrollY,
      gapHeroAbout: ar.top - hr.bottom,
      // diff has negative margin; layout top vs about bottom
      aboutDiffLayoutGap: dr.top - ar.bottom,
      diffMarginTop: getComputedStyle(diff).marginTop,
    };
  });

  console.log(JSON.stringify({ width, ...result }));
  await page.close();
}

await browser.close();
