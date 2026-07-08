/**
 * Paragon geometric design system
 * — 45° notched section dividers, chamfered corners, angular shapes
 * — All built with SVG paths or clip-path (no raster images)
 */

export const SECTION_EDGE_VIEWBOX = "0 0 1440 96";

/** 45° notch: 216px inset at 1440 reference width, 72px depth */
export const NOTCH_INSET = 216;
export const NOTCH_DEPTH = 72;

/** About/Services bottom-right \ slope (1440 reference) */
export const ABOUT_SLOPE_BOTTOM_INSET = 216;
export const ABOUT_SLOPE_SPAN = 48;

const ABOUT_SLOPE_TOP_X = 1440 - ABOUT_SLOPE_BOTTOM_INSET - ABOUT_SLOPE_SPAN;
const ABOUT_SLOPE_BOTTOM_X = 1440 - ABOUT_SLOPE_BOTTOM_INSET;

export const GEOMETRY_COLORS = {
  navy: "#050a18",
  difference: "#000C22",
  white: "#ffffff",
  sectionLight: "#F0F3FC",
  services: "#F0F3FC",
  reputation: "#F0F3FC",
  blue: "#4585ff",
} as const;

/** Hero bottom — light wedge cuts in from bottom-left */
export const HERO_BOTTOM_WHITE_PATH =
  "M0 24 L216 24 L288 96 H1440 V96 H0 Z";

/** About bottom — navy fill on the left of the edge strip */
export const ABOUT_BOTTOM_NAVY_PATH = `M0 0 L${ABOUT_SLOPE_TOP_X} 0 L${ABOUT_SLOPE_BOTTOM_X} 96 L0 96 Z`;

/** About bottom — light tab on the right, single \ diagonal (no corner kink) */
export const ABOUT_BOTTOM_WHITE_PATH = `M1440 0 L${ABOUT_SLOPE_TOP_X} 0 L${ABOUT_SLOPE_BOTTOM_X} 96 H1440 V0 Z`;

/** Difference top — white wedge only (dark fill comes from section bg + decor) */
export const DIFFERENCE_TOP_WHITE_PATH = ABOUT_BOTTOM_WHITE_PATH;

/** Services top — hero-bottom wedge; light fill comes from section bg */
export const SERVICES_TOP_WHITE_PATH = HERO_BOTTOM_WHITE_PATH;

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
    underlayPath: undefined,
  },
  "about-bottom": {
    path: ABOUT_BOTTOM_WHITE_PATH,
    fill: GEOMETRY_COLORS.sectionLight,
    underlayPath: ABOUT_BOTTOM_NAVY_PATH,
    underlayFill: GEOMETRY_COLORS.navy,
    position: "bottom" as const,
    accentLine: false,
  },
  "difference-top": {
    path: DIFFERENCE_TOP_WHITE_PATH,
    fill: GEOMETRY_COLORS.sectionLight,
    position: "top" as const,
    accentLine: false,
    underlayPath: undefined,
  },
  "services-top": {
    path: SERVICES_TOP_WHITE_PATH,
    fill: GEOMETRY_COLORS.services,
    position: "top" as const,
    accentLine: false,
    underlayPath: undefined,
  },
  "reputation-bottom": {
    path: HERO_BOTTOM_WHITE_PATH,
    fill: GEOMETRY_COLORS.reputation,
    position: "bottom" as const,
    accentLine: false,
    underlayPath: undefined,
  },
  "reputation-top": {
    path: DIFFERENCE_TOP_WHITE_PATH,
    fill: GEOMETRY_COLORS.reputation,
    position: "top" as const,
    accentLine: false,
    underlayPath: undefined,
  },
} as const;
