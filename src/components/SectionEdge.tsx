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
};

export default function SectionEdge({
  variant,
  className = "",
  fill: fillOverride,
}: SectionEdgeProps) {
  const preset = SECTION_EDGE_PRESETS[variant];
  const { path, fill: presetFill, position, accentLine } = preset;
  const fill = fillOverride ?? presetFill;
  const underlayPath = "underlayPath" in preset ? preset.underlayPath : undefined;
  const underlayFill =
    "underlayFill" in preset ? preset.underlayFill : GEOMETRY_COLORS.navy;
  const positionClass = position === "bottom" ? "bottom-0" : "top-0";
  const hostPositionClass =
    position === "top" ? "section-edge-host--top" : "";

  return (
    <div
      className={`section-edge-host pointer-events-none absolute inset-x-0 ${positionClass} z-10 leading-[0] ${hostPositionClass} ${className}`}
    >
      <svg
        className="section-edge block w-full"
        viewBox={SECTION_EDGE_VIEWBOX}
        preserveAspectRatio="none"
        shapeRendering="auto"
        aria-hidden
      >
        {underlayPath && <path fill={underlayFill} d={underlayPath} />}
        <path fill={fill} d={path} />
        {accentLine && (
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
