import { chromium } from "playwright";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = __dirname;
fs.mkdirSync(outDir, { recursive: true });

function rgbToHex(rgb) {
  if (!rgb) return null;
  const m = rgb.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
  if (!m) return rgb;
  return (
    "#" +
    [m[1], m[2], m[3]]
      .map((x) => Number(x).toString(16).padStart(2, "0"))
      .join("")
  );
}

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 1,
});

await page.goto("http://localhost:3000/", { waitUntil: "networkidle" });
await page.waitForTimeout(1000);

const report = await page.evaluate(() => {
  function box(el) {
    if (!el) return null;
    const r = el.getBoundingClientRect();
    const cs = getComputedStyle(el);
    return {
      tag: el.tagName.toLowerCase(),
      className: (el.className || "").toString().slice(0, 200),
      top: r.top,
      bottom: r.bottom,
      left: r.left,
      right: r.right,
      width: r.width,
      height: r.height,
      pageTop: r.top + window.scrollY,
      pageBottom: r.bottom + window.scrollY,
      marginTop: cs.marginTop,
      marginBottom: cs.marginBottom,
      paddingTop: cs.paddingTop,
      paddingBottom: cs.paddingBottom,
      heightCSS: cs.height,
      overflow: cs.overflow,
      overflowX: cs.overflowX,
      overflowY: cs.overflowY,
      position: cs.position,
      topCSS: cs.top,
      bottomCSS: cs.bottom,
      transform: cs.transform,
      backgroundColor: cs.backgroundColor,
      zIndex: cs.zIndex,
      lineHeight: cs.lineHeight,
      display: cs.display,
    };
  }

  function isSubpixel(n) {
    return Math.abs(n - Math.round(n)) > 0.001;
  }

  const hero = document.querySelector("section.hero-bg-color");
  const aboutEl = Array.from(document.querySelectorAll("section")).find((s) => {
    const spans = Array.from(s.querySelectorAll("span"));
    return spans.some((sp) => sp.textContent?.trim() === "About Paragon");
  });

  const edgeHost = hero?.querySelector(".section-edge-host");
  const edgeSvg = hero?.querySelector("svg.section-edge");
  const edgePath = edgeSvg?.querySelector("path");

  const edgeCssVar = getComputedStyle(document.documentElement)
    .getPropertyValue("--section-edge-height")
    .trim();

  const heroBox = box(hero);
  const aboutBox = box(aboutEl);
  const hostBox = box(edgeHost);
  const svgBox = box(edgeSvg);

  const gap =
    aboutBox && heroBox ? aboutBox.pageTop - heroBox.pageBottom : null;

  const pathFill = edgePath?.getAttribute("fill") || null;
  const viewBox = edgeSvg?.getAttribute("viewBox");
  const preserve = edgeSvg?.getAttribute("preserveAspectRatio");
  const pathD = edgePath?.getAttribute("d");
  const shapeRendering =
    edgeSvg?.getAttribute("shape-rendering") ||
    (edgeSvg ? getComputedStyle(edgeSvg).shapeRendering : null);

  const overflowChain = [];
  let node = edgeHost;
  while (node && node !== document.documentElement) {
    const cs = getComputedStyle(node);
    overflowChain.push({
      tag: node.tagName.toLowerCase(),
      className: (node.className || "").toString().slice(0, 120),
      overflow: cs.overflow,
      overflowX: cs.overflowX,
      overflowY: cs.overflowY,
      transform: cs.transform,
    });
    node = node.parentElement;
  }

  let pathBBox = null;
  if (edgePath) {
    try {
      const b = edgePath.getBBox();
      pathBBox = { x: b.x, y: b.y, width: b.width, height: b.height };
    } catch (e) {
      pathBBox = { error: String(e) };
    }
  }

  let svgBBox = null;
  if (edgeSvg) {
    try {
      const b = edgeSvg.getBBox();
      svgBBox = { x: b.x, y: b.y, width: b.width, height: b.height };
    } catch (e) {
      svgBBox = { error: String(e) };
    }
  }

  return {
    dpr: window.devicePixelRatio,
    viewport: { w: window.innerWidth, h: window.innerHeight },
    sectionEdgeHeightVar: edgeCssVar,
    edgeHeightComputed: edgeSvg ? getComputedStyle(edgeSvg).height : null,
    gapHeroBottomToAboutTop: gap,
    hero: heroBox,
    about: aboutBox,
    edgeHost: hostBox,
    edgeSvg: svgBox,
    pathFill,
    pathD,
    viewBox,
    preserveAspectRatio: preserve,
    shapeRendering,
    pathBBox,
    svgBBox,
    aboutBg: aboutBox?.backgroundColor,
    heroBg: heroBox?.backgroundColor,
    subpixel: {
      heroHeight: heroBox ? isSubpixel(heroBox.height) : null,
      heroBottom: heroBox ? isSubpixel(heroBox.pageBottom) : null,
      aboutTop: aboutBox ? isSubpixel(aboutBox.pageTop) : null,
      aboutHeight: aboutBox ? isSubpixel(aboutBox.height) : null,
      edgeHostTop: hostBox ? isSubpixel(hostBox.pageTop) : null,
      edgeHostBottom: hostBox ? isSubpixel(hostBox.pageBottom) : null,
      edgeSvgHeight: svgBox ? isSubpixel(svgBox.height) : null,
      edgeSvgBottom: svgBox ? isSubpixel(svgBox.pageBottom) : null,
    },
    rawNumbers: {
      heroPageBottom: heroBox?.pageBottom,
      aboutPageTop: aboutBox?.pageTop,
      edgeHostPageTop: hostBox?.pageTop,
      edgeHostPageBottom: hostBox?.pageBottom,
      edgeSvgHeight: svgBox?.height,
      edgeSvgPageTop: svgBox?.pageTop,
      edgeSvgPageBottom: svgBox?.pageBottom,
    },
    overflowChain,
    hostVsHero:
      hostBox && heroBox
        ? {
            hostBottomMinusHeroBottom:
              hostBox.pageBottom - heroBox.pageBottom,
            hostTop: hostBox.pageTop,
            expectedHostTop: heroBox.pageBottom - (svgBox?.height || 0),
          }
        : null,
  };
});

report.aboutBgHex = rgbToHex(report.aboutBg);
report.heroBgHex = rgbToHex(report.heroBg);

const heroBottom = report.rawNumbers.heroPageBottom;
await page.evaluate((y) => window.scrollTo(0, Math.max(0, y - 200)), heroBottom);
await page.waitForTimeout(300);

const seamYInViewport = await page.evaluate(
  (y) => y - window.scrollY,
  heroBottom,
);

await page.screenshot({
  path: path.join(outDir, "hero-about-boundary-1440.png"),
  clip: {
    x: 0,
    y: Math.max(0, seamYInViewport - 40),
    width: 1440,
    height: 120,
  },
});

await page.screenshot({
  path: path.join(outDir, "hero-about-boundary-zoom-left.png"),
  clip: {
    x: 0,
    y: Math.max(0, seamYInViewport - 20),
    width: 400,
    height: 60,
  },
});

await page.screenshot({
  path: path.join(outDir, "hero-about-boundary-zoom-center.png"),
  clip: {
    x: 520,
    y: Math.max(0, seamYInViewport - 20),
    width: 400,
    height: 60,
  },
});

// Pixel-color probe via screenshot + sharp? Use CDP instead.
const client = await page.context().newCDPSession(page);
const { data, format } = await client.send("Page.captureScreenshot", {
  format: "png",
  clip: {
    x: 0,
    y: Math.max(0, seamYInViewport - 5),
    width: 1440,
    height: 12,
    scale: 1,
  },
  fromSurface: true,
  captureBeyondViewport: true,
});
fs.writeFileSync(path.join(outDir, "seam-strip.png"), Buffer.from(data, "base64"));

// Decode PNG rows with a tiny parser: use playwright to draw image into canvas in-page
const pixelRows = await page.evaluate(async ({ b64, w, h }) => {
  const img = new Image();
  const loaded = new Promise((res, rej) => {
    img.onload = res;
    img.onerror = rej;
  });
  img.src = "data:image/png;base64," + b64;
  await loaded;
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);
  const rows = [];
  // Sample mid-x columns across the seam strip (strip is 12px tall; seam ~ y=5)
  for (const y of [0, 3, 4, 5, 6, 7, 11]) {
    const cols = [];
    for (const x of [50, 200, 400, 700, 1000, 1200, 1400]) {
      const [r, g, b, a] = ctx.getImageData(x, y, 1, 1).data;
      cols.push({
        x,
        y,
        rgba: [r, g, b, a],
        hex:
          "#" +
          [r, g, b].map((n) => n.toString(16).padStart(2, "0")).join(""),
      });
    }
    rows.push({ y, cols });
  }
  return rows;
}, { b64: data, w: 1440, h: 12 });

const aboutDiff = await page.evaluate(() => {
  const about = Array.from(document.querySelectorAll("section")).find((s) => {
    const spans = Array.from(s.querySelectorAll("span"));
    return spans.some((sp) => sp.textContent?.trim() === "About Paragon");
  });
  const diff = Array.from(document.querySelectorAll("section")).find((s) =>
    s.querySelector("h2")?.textContent?.includes("Paragon difference"),
  );
  const services = document.querySelector("section.services-section");
  const reputation = document.querySelector("section.reputation-section");
  if (!about || !diff) return null;
  const a = about.getBoundingClientRect();
  const d = diff.getBoundingClientRect();
  const s = services?.getBoundingClientRect();
  const r = reputation?.getBoundingClientRect();
  return {
    aboutBottom: a.bottom + window.scrollY,
    aboutHeight: a.height,
    aboutOverflow: getComputedStyle(about).overflow,
    diffTop: d.top + window.scrollY,
    diffHeight: d.height,
    diffOverflow: getComputedStyle(diff).overflow,
    gapAboutToDiff: d.top + window.scrollY - (a.bottom + window.scrollY),
    servicesTop: s ? s.top + window.scrollY : null,
    servicesMarginTop: services ? getComputedStyle(services).marginTop : null,
    servicesOverflow: services ? getComputedStyle(services).overflow : null,
    reputationTop: r ? r.top + window.scrollY : null,
    reputationOverflow: reputation
      ? getComputedStyle(reputation).overflow
      : null,
    gapServicesToReputation:
      s && r ? r.top + window.scrollY - (s.bottom + window.scrollY) : null,
  };
});

const elementFromPoint = await page.evaluate((yPage) => {
  const y = yPage - window.scrollY;
  const samples = [];
  for (const dy of [-2, -1, 0, 1, 2]) {
    for (const x of [100, 400, 720, 1100, 1300]) {
      const el = document.elementFromPoint(x, y + dy);
      const cs = el ? getComputedStyle(el) : null;
      samples.push({
        x,
        viewportY: y + dy,
        dy,
        tag: el?.tagName?.toLowerCase(),
        className: (el?.className || "").toString().slice(0, 100),
        bg: cs?.backgroundColor,
        fill: el?.getAttribute?.("fill") || null,
      });
    }
  }
  return samples;
}, heroBottom);

const full = { report, aboutDiff, pixelRows, elementFromPoint, format };
fs.writeFileSync(path.join(outDir, "report.json"), JSON.stringify(full, null, 2));
console.log(JSON.stringify(full, null, 2));
await browser.close();
