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

/** Full-width light cap under hero/services wedges — kills flat-edge hairlines */
export const HERO_BOTTOM_LIGHT_CAP_PATH = "M0 90 H1440 V100 H0 Z";

/**
 * Hero / Services-top light wedge.
 * Flat span uses y=94→96 so the strip has real fill across the full width.
 */
export const HERO_BOTTOM_WHITE_PATH =
  "M0 24 L216 24 L288 94 H1440 V96 H0 Z";

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

/** Process→Reputation bottom — thicker flat light band to kill hairlines */
export const REPUTATION_BOTTOM_WHITE_PATH =
  "M0 24 L216 24 L288 88 H1440 V98 H0 Z";

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
