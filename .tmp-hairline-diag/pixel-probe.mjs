import { chromium } from "playwright";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const outDir = path.dirname(fileURLToPath(import.meta.url));
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 1,
});
await page.goto("http://localhost:3000/", { waitUntil: "networkidle" });
await page.waitForTimeout(800);

const heroBottom = await page.evaluate(() => {
  const hero = document.querySelector("section.hero-bg-color");
  return hero.getBoundingClientRect().bottom + window.scrollY;
});

await page.evaluate((y) => window.scrollTo(0, Math.max(0, y - 300)), heroBottom);
await page.waitForTimeout(200);

const seamY = await page.evaluate((y) => y - window.scrollY, heroBottom);

// Capture a tall strip straddling the seam, then sample every row
const client = await page.context().newCDPSession(page);
const stripH = 20;
const stripY = Math.max(0, seamY - 10);
const { data } = await client.send("Page.captureScreenshot", {
  format: "png",
  clip: { x: 0, y: stripY, width: 1440, height: stripH, scale: 1 },
  fromSurface: true,
  captureBeyondViewport: true,
});

const analysis = await page.evaluate(
  async ({ b64, w, h, stripY, seamY }) => {
    const img = new Image();
    await new Promise((res, rej) => {
      img.onload = res;
      img.onerror = rej;
      img.src = "data:image/png;base64," + b64;
    });
    const canvas = document.createElement("canvas");
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    function sample(x, y) {
      const [r, g, b, a] = ctx.getImageData(x, y, 1, 1).data;
      return {
        x,
        localY: y,
        pageApprox: stripY + y,
        vsSeam: stripY + y - seamY,
        hex:
          "#" +
          [r, g, b].map((n) => n.toString(16).padStart(2, "0")).join(""),
        rgba: [r, g, b, a],
      };
    }

    // For each row, sample x=800 (flat horizontal edge, away from diagonal)
    const rows = [];
    for (let y = 0; y < h; y++) {
      rows.push(sample(800, y));
    }

    // Detect transitions: rows that aren't near navy and aren't near #f0f3fc
    function dist(hex, target) {
      const parse = (h) =>
        [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));
      const a = parse(hex);
      const b = parse(target);
      return Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2]);
    }

    const classified = rows.map((r) => {
      const toNavy = dist(r.hex, "#031237");
      const toLight = dist(r.hex, "#f0f3fc");
      const toWhite = dist(r.hex, "#ffffff");
      let kind = "other";
      if (toLight < 12) kind = "about-light";
      else if (toNavy < 40) kind = "hero-navy";
      else if (toWhite < 12) kind = "body-white";
      return { ...r, kind, toNavy, toLight, toWhite };
    });

    return { classified, seamY, stripY };
  },
  { b64: data, w: 1440, h: stripH, stripY, seamY },
);

// Also measure Difference top edge SVG height precisely + CSS var resolution
const more = await page.evaluate(() => {
  const root = document.documentElement;
  const cs = getComputedStyle(root);
  const varRaw = cs.getPropertyValue("--section-edge-height").trim();

  // Resolve via a probe element
  const probe = document.createElement("div");
  probe.style.height = "var(--section-edge-height)";
  probe.style.position = "absolute";
  probe.style.visibility = "hidden";
  document.body.appendChild(probe);
  const resolved = getComputedStyle(probe).height;
  const resolvedNum = probe.getBoundingClientRect().height;
  probe.remove();

  const hero = document.querySelector("section.hero-bg-color");
  const heroEdge = hero.querySelector("svg.section-edge");
  const about = Array.from(document.querySelectorAll("section")).find((s) =>
    Array.from(s.querySelectorAll("span")).some(
      (sp) => sp.textContent?.trim() === "About Paragon",
    ),
  );
  const diff = Array.from(document.querySelectorAll("section")).find((s) =>
    s.querySelector("h2")?.textContent?.includes("Paragon difference"),
  );
  const diffEdge = diff?.querySelector("svg.section-edge");
  const services = document.querySelector("section.services-section");

  const path = heroEdge?.querySelector("path");
  const pathD = path?.getAttribute("d");

  // Check if path covers y=0..96 fully at bottom
  // getBBox already showed y=24..96

  // SVG overflow + computed
  const svgCS = getComputedStyle(heroEdge);
  const hostCS = getComputedStyle(hero.querySelector(".section-edge-host"));

  return {
    varRaw,
    resolved,
    resolvedNum,
    remPx: parseFloat(getComputedStyle(root).fontSize),
    vwAt1440_6_67: (6.67 / 100) * window.innerWidth,
    heroEdgeHeight: heroEdge.getBoundingClientRect().height,
    diffEdgeHeight: diffEdge?.getBoundingClientRect().height,
    diffEdgePageTop: diffEdge
      ? diffEdge.getBoundingClientRect().top + window.scrollY
      : null,
    diffEdgePageBottom: diffEdge
      ? diffEdge.getBoundingClientRect().bottom + window.scrollY
      : null,
    aboutPageBottom: about.getBoundingClientRect().bottom + window.scrollY,
    aboutPageTop: about.getBoundingClientRect().top + window.scrollY,
    diffPageTop: diff.getBoundingClientRect().top + window.scrollY,
    // How far does light edge cover into about from below?
    // For hero path: bottom of light fill should equal hero bottom
    pathD,
    pathBBox: (() => {
      try {
        const b = path.getBBox();
        return { x: b.x, y: b.y, w: b.width, h: b.height };
      } catch (e) {
        return String(e);
      }
    })(),
    svgOverflow: svgCS.overflow,
    svgHeight: svgCS.height,
    hostTransform: hostCS.transform,
    hostBottom: hostCS.bottom,
    hostTop: hostCS.top,
    servicesMarginTop: getComputedStyle(services).marginTop,
    servicesMarginTopNum: parseFloat(getComputedStyle(services).marginTop),
    // Does path include bottom edge at device pixels?
    // Map viewBox y=96 to CSS: scaleY = 96/96 = 1, so y=96 is bottom edge
    viewBoxToCss: {
      scaleY: heroEdge.getBoundingClientRect().height / 96,
      pathBottomCss:
        (path.getBBox().y + path.getBBox().height) *
        (heroEdge.getBoundingClientRect().height / 96),
      svgHeight: heroEdge.getBoundingClientRect().height,
      uncoveredAtBottom:
        heroEdge.getBoundingClientRect().height -
        (path.getBBox().y + path.getBBox().height) *
          (heroEdge.getBoundingClientRect().height / 96),
    },
  };
});

fs.writeFileSync(
  path.join(outDir, "pixel-analysis.json"),
  JSON.stringify({ analysis, more }, null, 2),
);
console.log(JSON.stringify({ analysis, more }, null, 2));
await browser.close();
