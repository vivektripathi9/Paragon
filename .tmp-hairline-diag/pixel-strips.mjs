import { chromium } from "playwright";
import fs from "fs";

// Use screenshot buffer via playwright + manual pixel read without pngjs if needed
const browser = await chromium.launch({ headless: true });

async function probe(width) {
  const page = await browser.newPage({
    viewport: { width, height: 900 },
    deviceScaleFactor: 1,
  });
  await page.goto("http://localhost:3000/", { waitUntil: "networkidle" });
  await page.waitForTimeout(400);

  const yInfo = await page.evaluate(() => {
    const hero = document.querySelector("section.hero-bg-color");
    const about = Array.from(document.querySelectorAll("section")).find((s) =>
      s.textContent?.includes("About Paragon"),
    );
    const diff = Array.from(document.querySelectorAll("section")).find((s) =>
      s.textContent?.includes("What makes us different"),
    );
    return {
      heroBottomView: hero.getBoundingClientRect().bottom,
      aboutTopView: about.getBoundingClientRect().top,
      aboutBottomView: about.getBoundingClientRect().bottom,
      diffTopView: diff.getBoundingClientRect().top,
      heroBottomPage: hero.getBoundingClientRect().bottom + window.scrollY,
      diffTopPage: diff.getBoundingClientRect().top + window.scrollY,
    };
  });

  // Scroll so hero-about seam is mid-viewport
  await page.evaluate((y) => window.scrollTo(0, Math.max(0, y - 450)), yInfo.heroBottomPage);
  await page.waitForTimeout(100);

  const heroSeam = await page.evaluate(() => {
    const hero = document.querySelector("section.hero-bg-color");
    const y = Math.round(hero.getBoundingClientRect().bottom) - 1;
    const samples = [];
    for (const x of [50, 200, 400, 700, widthMid()]) {
      const el = document.elementFromPoint(x, y);
      // read via canvas? skip — use getComputedStyle of element
      samples.push({
        x,
        y,
        tag: el?.tagName,
        cls: el?.className?.toString?.().slice(0, 80),
      });
    }
    function widthMid() {
      return Math.floor(window.innerWidth / 2);
    }
    // Paint probe using Offscreen-like: draw? Use caret? 
    return { y, samples, aboutTop: document.querySelectorAll("section")[1] };
  });

  // Pixel-level: screenshot a thin strip
  const heroBottom = await page.evaluate(() =>
    Math.round(document.querySelector("section.hero-bg-color").getBoundingClientRect().bottom),
  );

  const strip = await page.screenshot({
    type: "png",
    clip: { x: 0, y: Math.max(0, heroBottom - 3), width, height: 6 },
  });

  // Parse PNG without deps — check IHDR and raw is hard; use page.evaluate with canvas
  const colors = await page.evaluate(async ({ y, w }) => {
    // Can't easily read pixels without canvas draw from screenshot
    return { y, w };
  }, { y: heroBottom, w: width });

  // Use CDP for pixel read
  const client = await page.context().newCDPSession(page);
  const { data, format } = await client.send("Page.captureScreenshot", {
    format: "png",
    clip: {
      x: 0,
      y: Math.max(0, heroBottom - 2),
      width,
      height: 5,
      scale: 1,
    },
    fromSurface: true,
  });

  const buf = Buffer.from(data, "base64");
  fs.writeFileSync(`C:/Cursor/Paragon/.tmp-hairline-diag/strip-hero-${width}.png`, buf);

  // About-diff strip
  await page.evaluate((y) => window.scrollTo(0, Math.max(0, y - 400)), yInfo.diffTopPage);
  await page.waitForTimeout(100);
  const diffTop = await page.evaluate(() =>
    Math.round(
      Array.from(document.querySelectorAll("section"))
        .find((s) => s.textContent?.includes("What makes us different"))
        .getBoundingClientRect().top,
    ),
  );
  const { data: data2 } = await client.send("Page.captureScreenshot", {
    format: "png",
    clip: {
      x: 0,
      y: Math.max(0, diffTop - 2),
      width,
      height: 5,
      scale: 1,
    },
    fromSurface: true,
  });
  fs.writeFileSync(
    `C:/Cursor/Paragon/.tmp-hairline-diag/strip-diff-${width}.png`,
    Buffer.from(data2, "base64"),
  );

  console.log(JSON.stringify({ width, heroBottom, diffTop, aboutOverlap: yInfo.aboutTopView - yInfo.heroBottomView }));
  await page.close();
}

for (const w of [900, 1440]) await probe(w);
await browser.close();
