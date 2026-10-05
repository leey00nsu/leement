"use client";
import { lazy, Suspense, type ComponentType } from "react";
import type { ChartName } from "../lib/chart-catalog";
const recipes: Record<ChartName, ComponentType> = {
  "chart-area-axes": lazy(() =>
    import("../../../registry/blocks/charts/chart-area-axes").then(
      (module) => ({ default: module.ChartAreaAxes }),
    ),
  ),
  "chart-area-default": lazy(() =>
    import("../../../registry/blocks/charts/chart-area-default").then(
      (module) => ({ default: module.ChartAreaDefault }),
    ),
  ),
  "chart-area-gradient": lazy(() =>
    import("../../../registry/blocks/charts/chart-area-gradient").then(
      (module) => ({ default: module.ChartAreaGradient }),
    ),
  ),
  "chart-area-icons": lazy(() =>
    import("../../../registry/blocks/charts/chart-area-icons").then(
      (module) => ({ default: module.ChartAreaIcons }),
    ),
  ),
  "chart-area-interactive": lazy(() =>
    import("../../../registry/blocks/charts/chart-area-interactive").then(
      (module) => ({ default: module.ChartAreaInteractive }),
    ),
  ),
  "chart-area-legend": lazy(() =>
    import("../../../registry/blocks/charts/chart-area-legend").then(
      (module) => ({ default: module.ChartAreaLegend }),
    ),
  ),
  "chart-area-linear": lazy(() =>
    import("../../../registry/blocks/charts/chart-area-linear").then(
      (module) => ({ default: module.ChartAreaLinear }),
    ),
  ),
  "chart-area-stacked-expand": lazy(() =>
    import("../../../registry/blocks/charts/chart-area-stacked-expand").then(
      (module) => ({ default: module.ChartAreaStackedExpand }),
    ),
  ),
  "chart-area-stacked": lazy(() =>
    import("../../../registry/blocks/charts/chart-area-stacked").then(
      (module) => ({ default: module.ChartAreaStacked }),
    ),
  ),
  "chart-area-step": lazy(() =>
    import("../../../registry/blocks/charts/chart-area-step").then(
      (module) => ({ default: module.ChartAreaStep }),
    ),
  ),
  "chart-bar-active": lazy(() =>
    import("../../../registry/blocks/charts/chart-bar-active").then(
      (module) => ({ default: module.ChartBarActive }),
    ),
  ),
  "chart-bar-default": lazy(() =>
    import("../../../registry/blocks/charts/chart-bar-default").then(
      (module) => ({ default: module.ChartBarDefault }),
    ),
  ),
  "chart-bar-horizontal": lazy(() =>
    import("../../../registry/blocks/charts/chart-bar-horizontal").then(
      (module) => ({ default: module.ChartBarHorizontal }),
    ),
  ),
  "chart-bar-interactive": lazy(() =>
    import("../../../registry/blocks/charts/chart-bar-interactive").then(
      (module) => ({ default: module.ChartBarInteractive }),
    ),
  ),
  "chart-bar-label-custom": lazy(() =>
    import("../../../registry/blocks/charts/chart-bar-label-custom").then(
      (module) => ({ default: module.ChartBarLabelCustom }),
    ),
  ),
  "chart-bar-label": lazy(() =>
    import("../../../registry/blocks/charts/chart-bar-label").then(
      (module) => ({ default: module.ChartBarLabel }),
    ),
  ),
  "chart-bar-mixed": lazy(() =>
    import("../../../registry/blocks/charts/chart-bar-mixed").then(
      (module) => ({ default: module.ChartBarMixed }),
    ),
  ),
  "chart-bar-multiple": lazy(() =>
    import("../../../registry/blocks/charts/chart-bar-multiple").then(
      (module) => ({ default: module.ChartBarMultiple }),
    ),
  ),
  "chart-bar-negative": lazy(() =>
    import("../../../registry/blocks/charts/chart-bar-negative").then(
      (module) => ({ default: module.ChartBarNegative }),
    ),
  ),
  "chart-bar-stacked": lazy(() =>
    import("../../../registry/blocks/charts/chart-bar-stacked").then(
      (module) => ({ default: module.ChartBarStacked }),
    ),
  ),
  "chart-line-default": lazy(() =>
    import("../../../registry/blocks/charts/chart-line-default").then(
      (module) => ({ default: module.ChartLineDefault }),
    ),
  ),
  "chart-line-dots-colors": lazy(() =>
    import("../../../registry/blocks/charts/chart-line-dots-colors").then(
      (module) => ({ default: module.ChartLineDotsColors }),
    ),
  ),
  "chart-line-dots-custom": lazy(() =>
    import("../../../registry/blocks/charts/chart-line-dots-custom").then(
      (module) => ({ default: module.ChartLineDotsCustom }),
    ),
  ),
  "chart-line-dots": lazy(() =>
    import("../../../registry/blocks/charts/chart-line-dots").then(
      (module) => ({ default: module.ChartLineDots }),
    ),
  ),
  "chart-line-interactive": lazy(() =>
    import("../../../registry/blocks/charts/chart-line-interactive").then(
      (module) => ({ default: module.ChartLineInteractive }),
    ),
  ),
  "chart-line-label-custom": lazy(() =>
    import("../../../registry/blocks/charts/chart-line-label-custom").then(
      (module) => ({ default: module.ChartLineLabelCustom }),
    ),
  ),
  "chart-line-label": lazy(() =>
    import("../../../registry/blocks/charts/chart-line-label").then(
      (module) => ({ default: module.ChartLineLabel }),
    ),
  ),
  "chart-line-linear": lazy(() =>
    import("../../../registry/blocks/charts/chart-line-linear").then(
      (module) => ({ default: module.ChartLineLinear }),
    ),
  ),
  "chart-line-multiple": lazy(() =>
    import("../../../registry/blocks/charts/chart-line-multiple").then(
      (module) => ({ default: module.ChartLineMultiple }),
    ),
  ),
  "chart-line-step": lazy(() =>
    import("../../../registry/blocks/charts/chart-line-step").then(
      (module) => ({ default: module.ChartLineStep }),
    ),
  ),
  "chart-pie-donut-active": lazy(() =>
    import("../../../registry/blocks/charts/chart-pie-donut-active").then(
      (module) => ({ default: module.ChartPieDonutActive }),
    ),
  ),
  "chart-pie-donut-text": lazy(() =>
    import("../../../registry/blocks/charts/chart-pie-donut-text").then(
      (module) => ({ default: module.ChartPieDonutText }),
    ),
  ),
  "chart-pie-donut": lazy(() =>
    import("../../../registry/blocks/charts/chart-pie-donut").then(
      (module) => ({ default: module.ChartPieDonut }),
    ),
  ),
  "chart-pie-interactive": lazy(() =>
    import("../../../registry/blocks/charts/chart-pie-interactive").then(
      (module) => ({ default: module.ChartPieInteractive }),
    ),
  ),
  "chart-pie-label-custom": lazy(() =>
    import("../../../registry/blocks/charts/chart-pie-label-custom").then(
      (module) => ({ default: module.ChartPieLabelCustom }),
    ),
  ),
  "chart-pie-label-list": lazy(() =>
    import("../../../registry/blocks/charts/chart-pie-label-list").then(
      (module) => ({ default: module.ChartPieLabelList }),
    ),
  ),
  "chart-pie-label": lazy(() =>
    import("../../../registry/blocks/charts/chart-pie-label").then(
      (module) => ({ default: module.ChartPieLabel }),
    ),
  ),
  "chart-pie-legend": lazy(() =>
    import("../../../registry/blocks/charts/chart-pie-legend").then(
      (module) => ({ default: module.ChartPieLegend }),
    ),
  ),
  "chart-pie-separator-none": lazy(() =>
    import("../../../registry/blocks/charts/chart-pie-separator-none").then(
      (module) => ({ default: module.ChartPieSeparatorNone }),
    ),
  ),
  "chart-pie-simple": lazy(() =>
    import("../../../registry/blocks/charts/chart-pie-simple").then(
      (module) => ({ default: module.ChartPieSimple }),
    ),
  ),
  "chart-pie-stacked": lazy(() =>
    import("../../../registry/blocks/charts/chart-pie-stacked").then(
      (module) => ({ default: module.ChartPieStacked }),
    ),
  ),
  "chart-radar-default": lazy(() =>
    import("../../../registry/blocks/charts/chart-radar-default").then(
      (module) => ({ default: module.ChartRadarDefault }),
    ),
  ),
  "chart-radar-dots": lazy(() =>
    import("../../../registry/blocks/charts/chart-radar-dots").then(
      (module) => ({ default: module.ChartRadarDots }),
    ),
  ),
  "chart-radar-grid-circle-fill": lazy(() =>
    import("../../../registry/blocks/charts/chart-radar-grid-circle-fill").then(
      (module) => ({ default: module.ChartRadarGridCircleFill }),
    ),
  ),
  "chart-radar-grid-circle-no-lines": lazy(() =>
    import("../../../registry/blocks/charts/chart-radar-grid-circle-no-lines").then(
      (module) => ({ default: module.ChartRadarGridCircleNoLines }),
    ),
  ),
  "chart-radar-grid-circle": lazy(() =>
    import("../../../registry/blocks/charts/chart-radar-grid-circle").then(
      (module) => ({ default: module.ChartRadarGridCircle }),
    ),
  ),
  "chart-radar-grid-custom": lazy(() =>
    import("../../../registry/blocks/charts/chart-radar-grid-custom").then(
      (module) => ({ default: module.ChartRadarGridCustom }),
    ),
  ),
  "chart-radar-grid-fill": lazy(() =>
    import("../../../registry/blocks/charts/chart-radar-grid-fill").then(
      (module) => ({ default: module.ChartRadarGridFill }),
    ),
  ),
  "chart-radar-grid-none": lazy(() =>
    import("../../../registry/blocks/charts/chart-radar-grid-none").then(
      (module) => ({ default: module.ChartRadarGridNone }),
    ),
  ),
  "chart-radar-icons": lazy(() =>
    import("../../../registry/blocks/charts/chart-radar-icons").then(
      (module) => ({ default: module.ChartRadarIcons }),
    ),
  ),
  "chart-radar-label-custom": lazy(() =>
    import("../../../registry/blocks/charts/chart-radar-label-custom").then(
      (module) => ({ default: module.ChartRadarLabelCustom }),
    ),
  ),
  "chart-radar-legend": lazy(() =>
    import("../../../registry/blocks/charts/chart-radar-legend").then(
      (module) => ({ default: module.ChartRadarLegend }),
    ),
  ),
  "chart-radar-lines-only": lazy(() =>
    import("../../../registry/blocks/charts/chart-radar-lines-only").then(
      (module) => ({ default: module.ChartRadarLinesOnly }),
    ),
  ),
  "chart-radar-multiple": lazy(() =>
    import("../../../registry/blocks/charts/chart-radar-multiple").then(
      (module) => ({ default: module.ChartRadarMultiple }),
    ),
  ),
  "chart-radar-radius": lazy(() =>
    import("../../../registry/blocks/charts/chart-radar-radius").then(
      (module) => ({ default: module.ChartRadarRadius }),
    ),
  ),
  "chart-radial-grid": lazy(() =>
    import("../../../registry/blocks/charts/chart-radial-grid").then(
      (module) => ({ default: module.ChartRadialGrid }),
    ),
  ),
  "chart-radial-label": lazy(() =>
    import("../../../registry/blocks/charts/chart-radial-label").then(
      (module) => ({ default: module.ChartRadialLabel }),
    ),
  ),
  "chart-radial-shape": lazy(() =>
    import("../../../registry/blocks/charts/chart-radial-shape").then(
      (module) => ({ default: module.ChartRadialShape }),
    ),
  ),
  "chart-radial-simple": lazy(() =>
    import("../../../registry/blocks/charts/chart-radial-simple").then(
      (module) => ({ default: module.ChartRadialSimple }),
    ),
  ),
  "chart-radial-stacked": lazy(() =>
    import("../../../registry/blocks/charts/chart-radial-stacked").then(
      (module) => ({ default: module.ChartRadialStacked }),
    ),
  ),
  "chart-radial-text": lazy(() =>
    import("../../../registry/blocks/charts/chart-radial-text").then(
      (module) => ({ default: module.ChartRadialText }),
    ),
  ),
  "chart-tooltip-advanced": lazy(() =>
    import("../../../registry/blocks/charts/chart-tooltip-advanced").then(
      (module) => ({ default: module.ChartTooltipAdvanced }),
    ),
  ),
  "chart-tooltip-default": lazy(() =>
    import("../../../registry/blocks/charts/chart-tooltip-default").then(
      (module) => ({ default: module.ChartTooltipDefault }),
    ),
  ),
  "chart-tooltip-formatter": lazy(() =>
    import("../../../registry/blocks/charts/chart-tooltip-formatter").then(
      (module) => ({ default: module.ChartTooltipFormatter }),
    ),
  ),
  "chart-tooltip-icons": lazy(() =>
    import("../../../registry/blocks/charts/chart-tooltip-icons").then(
      (module) => ({ default: module.ChartTooltipIcons }),
    ),
  ),
  "chart-tooltip-indicator-line": lazy(() =>
    import("../../../registry/blocks/charts/chart-tooltip-indicator-line").then(
      (module) => ({ default: module.ChartTooltipIndicatorLine }),
    ),
  ),
  "chart-tooltip-indicator-none": lazy(() =>
    import("../../../registry/blocks/charts/chart-tooltip-indicator-none").then(
      (module) => ({ default: module.ChartTooltipIndicatorNone }),
    ),
  ),
  "chart-tooltip-label-custom": lazy(() =>
    import("../../../registry/blocks/charts/chart-tooltip-label-custom").then(
      (module) => ({ default: module.ChartTooltipLabelCustom }),
    ),
  ),
  "chart-tooltip-label-formatter": lazy(() =>
    import("../../../registry/blocks/charts/chart-tooltip-label-formatter").then(
      (module) => ({ default: module.ChartTooltipLabelFormatter }),
    ),
  ),
  "chart-tooltip-label-none": lazy(() =>
    import("../../../registry/blocks/charts/chart-tooltip-label-none").then(
      (module) => ({ default: module.ChartTooltipLabelNone }),
    ),
  ),
};
export function ChartPreview({ name }: { name: ChartName }) {
  const Recipe = recipes[name];
  return (
    <div
      data-preview-name={name}
      className="flex w-full min-w-0 items-center justify-center"
    >
      <Suspense fallback={<p role="status">Loading chart…</p>}>
        <Recipe />
      </Suspense>
    </div>
  );
}
