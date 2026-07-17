import {
  GEOMETRY_COLORS,
  SECTION_EDGE_ACCENT_PATH,
  SECTION_EDGE_PRESETS,
  SECTION_EDGE_VIEWBOX,
  type SectionEdgeVariant,
} from "@/lib/geometry";

type SectionEdgeProps = {
  variant: SectionEdgeVariant;
  className?: string;
  fill?: string;
  /** full = underlay+fill (default); underlay/fill = split layers for decor stacking */
  layer?: "full" | "underlay" | "fill";
};

export default function SectionEdge({
  variant,
  className = "",
  fill: fillOverride,
  layer = "full",
}: SectionEdgeProps) {
  const preset = SECTION_EDGE_PRESETS[variant];
  const { path, fill: presetFill, position, accentLine } = preset;
  const fill = fillOverride ?? presetFill;
  const underlayPath = "underlayPath" in preset ? preset.underlayPath : undefined;
  const underlayFill =
    "underlayFill" in preset ? preset.underlayFill : GEOMETRY_COLORS.difference;
  const positionClass = position === "bottom" ? "bottom-0" : "top-0";
  const hostPositionClass =
    position === "top"
      ? "section-edge-host--top"
      : "section-edge-host--bottom";
  const showUnderlay =
    Boolean(underlayPath) && (layer === "full" || layer === "underlay");
  const showFill = layer === "full" || layer === "fill";

  return (
    <div
      className={`section-edge-host pointer-events-none absolute inset-x-0 ${positionClass} z-10 leading-[0] ${hostPositionClass} ${className}`}
    >
      <svg
        className="section-edge block w-full"
        viewBox={SECTION_EDGE_VIEWBOX}
        preserveAspectRatio="none"
        shapeRendering="auto"
        overflow="visible"
        aria-hidden
      >
        {showUnderlay && underlayPath && (
          <path fill={underlayFill} d={underlayPath} />
        )}
        {showFill && <path fill={fill} d={path} />}
        {showFill && accentLine && (
          <path
            d={SECTION_EDGE_ACCENT_PATH}
            fill="none"
            stroke={GEOMETRY_COLORS.blue}
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
          />
        )}
      </svg>
    </div>
  );
}
