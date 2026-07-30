/**
 * Paragon geometric design system
 * — 45° notched section dividers, chamfered corners, angular shapes
 * — All built with SVG paths or clip-path (no raster images)
 *
 * Desktop (1440) diagonal cut: 280×58.5 (mirrored L/R). ViewBox height 96 is
 * stretched into --section-edge-height; X coords sized for a 45° screen angle.
 */

export const SECTION_EDGE_VIEWBOX = "0 0 1440 96";

/**
 * Shared cut at 1440: width 280, height 58.5 → 45° span = 58.5, flat tab = 221.5.
 * Left notch and right slope are mirrors of the same numbers.
 */
export const EDGE_CUT_WIDTH = 280;
export const EDGE_CUT_HEIGHT = 58.5;
export const EDGE_CUT_SPAN = EDGE_CUT_HEIGHT;
export const EDGE_CUT_TAB = EDGE_CUT_WIDTH - EDGE_CUT_SPAN;

/** @deprecated Use EDGE_CUT_* — kept for call sites */
export const NOTCH_INSET = EDGE_CUT_TAB;
export const NOTCH_DEPTH = EDGE_CUT_SPAN;
export const ABOUT_SLOPE_CUT_WIDTH = EDGE_CUT_WIDTH;
export const ABOUT_SLOPE_HEIGHT = EDGE_CUT_HEIGHT;
export const ABOUT_SLOPE_SPAN = EDGE_CUT_SPAN;
export const ABOUT_SLOPE_BOTTOM_INSET = EDGE_CUT_TAB;

const LEFT_TAB_X = EDGE_CUT_TAB;
const LEFT_DIAG_END_X = EDGE_CUT_WIDTH;
const ABOUT_SLOPE_TOP_X = 1440 - EDGE_CUT_WIDTH;
const ABOUT_SLOPE_BOTTOM_X = 1440 - EDGE_CUT_TAB;

export const GEOMETRY_COLORS = {
  navy: "#050a18",
  difference: "#000C22",
  white: "#ffffff",
  sectionLight: "#F0F3FC",
  services: "#F0F3FC",
  reputation: "#F0F3FC",
  blue: "#4585ff",
} as const;

/** Full-width light cap under hero/services wedges — kills flat-edge hairlines */
export const HERO_BOTTOM_LIGHT_CAP_PATH = "M0 90 H1440 V100 H0 Z";

/**
 * Hero / Services-top light wedge — left notch mirroring the right About cut.
 * Raised tab 0→221.5 at y=0, 45° diagonal to 280 at y=96.
 */
export const HERO_BOTTOM_WHITE_PATH = `M0 -1 L${LEFT_TAB_X} -1 L${LEFT_DIAG_END_X} 96 H1440 V96 H0 Z`;

/** About bottom — navy fill on the left of the edge strip.
 *  Top edge starts at y=-1 so AA blends inside the path (avoids a 1px divider). */
export const ABOUT_BOTTOM_NAVY_PATH = `M0 -1 L${ABOUT_SLOPE_TOP_X} -1 L${ABOUT_SLOPE_BOTTOM_X} 96 L0 96 Z`;

/** About bottom — light tab on the right, single \ diagonal (no corner kink) */
export const ABOUT_BOTTOM_WHITE_PATH = `M1440 -1 L${ABOUT_SLOPE_TOP_X} -1 L${ABOUT_SLOPE_BOTTOM_X} 96 H1440 V-1 Z`;

/** Difference top — same geometry as about-bottom (navy left + light right wedge) */
export const DIFFERENCE_TOP_WHITE_PATH = ABOUT_BOTTOM_WHITE_PATH;
export const DIFFERENCE_TOP_NAVY_PATH = ABOUT_BOTTOM_NAVY_PATH;

/** Services top — hero-bottom wedge; light fill comes from section bg */
export const SERVICES_TOP_WHITE_PATH = HERO_BOTTOM_WHITE_PATH;

/** Process→Reputation bottom — same left notch as hero-bottom */
export const REPUTATION_BOTTOM_WHITE_PATH = HERO_BOTTOM_WHITE_PATH;

/** Blue accent line along the base of a section edge strip */
export const SECTION_EDGE_ACCENT_PATH = "M0 96 H1440";

export type SectionEdgeVariant =
  | "hero-bottom"
  | "about-bottom"
  | "difference-top"
  | "services-top"
  | "reputation-bottom"
  | "reputation-top";

export const SECTION_EDGE_PRESETS = {
  "hero-bottom": {
    path: HERO_BOTTOM_WHITE_PATH,
    fill: GEOMETRY_COLORS.sectionLight,
    position: "bottom" as const,
    accentLine: false,
    underlayPath: HERO_BOTTOM_LIGHT_CAP_PATH,
    underlayFill: GEOMETRY_COLORS.sectionLight,
  },
  "about-bottom": {
    path: ABOUT_BOTTOM_WHITE_PATH,
    fill: GEOMETRY_COLORS.sectionLight,
    underlayPath: ABOUT_BOTTOM_NAVY_PATH,
    underlayFill: GEOMETRY_COLORS.difference,
    position: "bottom" as const,
    accentLine: false,
  },
  "difference-top": {
    path: DIFFERENCE_TOP_WHITE_PATH,
    fill: GEOMETRY_COLORS.sectionLight,
    underlayPath: DIFFERENCE_TOP_NAVY_PATH,
    underlayFill: GEOMETRY_COLORS.difference,
    position: "top" as const,
    accentLine: false,
  },
  "services-top": {
    path: SERVICES_TOP_WHITE_PATH,
    fill: GEOMETRY_COLORS.services,
    position: "top" as const,
    accentLine: false,
    underlayPath: HERO_BOTTOM_LIGHT_CAP_PATH,
    underlayFill: GEOMETRY_COLORS.services,
  },
  "reputation-bottom": {
    path: REPUTATION_BOTTOM_WHITE_PATH,
    fill: GEOMETRY_COLORS.reputation,
    position: "bottom" as const,
    accentLine: false,
    underlayPath: HERO_BOTTOM_LIGHT_CAP_PATH,
    underlayFill: GEOMETRY_COLORS.reputation,
  },
  "reputation-top": {
    path: DIFFERENCE_TOP_WHITE_PATH,
    fill: GEOMETRY_COLORS.reputation,
    position: "top" as const,
    accentLine: false,
    underlayPath: undefined,
  },
} as const;
