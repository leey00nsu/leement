"use client";

import { lazy, Suspense } from "react";

const examples = {
  "select-groups": lazy(() => import("../examples/select-groups")),
  "select-states": lazy(() => import("../examples/select-states")),
  "select-scroll": lazy(() => import("../examples/select-scroll")),
  "native-select-groups": lazy(
    () => import("../examples/native-select-groups"),
  ),
  "input-group-compositions": lazy(
    () => import("../examples/input-group-compositions"),
  ),
  "field-fieldset": lazy(() => import("../examples/field-fieldset")),
  "tabs-variants": lazy(() => import("../examples/tabs-variants")),
  "dropdown-menu-selection": lazy(
    () => import("../examples/dropdown-menu-selection"),
  ),
  "chart-series": lazy(() => import("../examples/chart-series")),
  "progress-states": lazy(() => import("../examples/progress-states")),
  "toast-feedback": lazy(() => import("../examples/toast-feedback")),
  "avatar-images": lazy(() => import("../examples/avatar-images")),
  "table-native": lazy(() => import("../examples/table-native")),
  "dropzone-files": lazy(() => import("../examples/dropzone-files")),
  "editor-readonly": lazy(() => import("../examples/editor-readonly")),
  "aspect-ratio-media": lazy(() => import("../examples/aspect-ratio-media")),
  "button-group-orientation": lazy(
    () => import("../examples/button-group-orientation"),
  ),
  "accordion-multiple": lazy(() => import("../examples/accordion-multiple")),
  "toggle-group-vertical": lazy(
    () => import("../examples/toggle-group-vertical"),
  ),
  "toggle-controlled": lazy(() => import("../examples/toggle-controlled")),
  "radio-group-form": lazy(() => import("../examples/radio-group-form")),
  "checkbox-select-all": lazy(() => import("../examples/checkbox-select-all")),
  "rotating-content-external-control": lazy(
    () => import("../examples/rotating-content-external-control"),
  ),
  "text-reveal-timing": lazy(() => import("../examples/text-reveal-timing")),
  "button-sizes": lazy(() => import("../examples/button-sizes")),
  "input-types": lazy(() => import("../examples/input-types")),
  "switch-states": lazy(() => import("../examples/switch-states")),
  "label-controls": lazy(() => import("../examples/label-controls")),
  "textarea-states": lazy(() => import("../examples/textarea-states")),
  "card-media": lazy(() => import("../examples/card-media")),
  "separator-vertical": lazy(() => import("../examples/separator-vertical")),
  "dialog-controlled": lazy(() => import("../examples/dialog-controlled")),
  "popover-positioning": lazy(() => import("../examples/popover-positioning")),
  "sheet-sides": lazy(() => import("../examples/sheet-sides")),
  "tooltip-sides": lazy(() => import("../examples/tooltip-sides")),
  "brand-gradient-text-motion": lazy(
    () => import("../examples/brand-gradient-text-motion"),
  ),
  "status-notice-actions": lazy(
    () => import("../examples/status-notice-actions"),
  ),
  "reveal-content-variants": lazy(
    () => import("../examples/reveal-content-variants"),
  ),
  "collapsible-controlled": lazy(
    () => import("../examples/collapsible-controlled"),
  ),
  "avatar-stack-animated": lazy(
    () => import("../examples/avatar-stack-animated"),
  ),
  "calendar-constraints": lazy(
    () => import("../examples/calendar-constraints"),
  ),
  "list-custom-rows": lazy(() => import("../examples/list-custom-rows")),
  "code-block-plain": lazy(() => import("../examples/code-block-plain")),
  "contribution-graph-selection": lazy(
    () => import("../examples/contribution-graph-selection"),
  ),
  "choicebox-form": lazy(() => import("../examples/choicebox-form")),
  "combobox-controlled": lazy(() => import("../examples/combobox-controlled")),
  "tags-controlled": lazy(() => import("../examples/tags-controlled")),
  "image-crop-aspect": lazy(() => import("../examples/image-crop-aspect")),
  "ticker-card": lazy(() => import("../examples/ticker-card")),
  "stories-viewer": lazy(() => import("../examples/stories-viewer")),
  "announcement-static": lazy(() => import("../examples/announcement-static")),
  "banner-subtle": lazy(() => import("../examples/banner-subtle")),
  "typography-semantics": lazy(
    () => import("../examples/typography-semantics"),
  ),
  "color-picker-controlled": lazy(
    () => import("../examples/color-picker-controlled"),
  ),
  "glimpse-text-only": lazy(() => import("../examples/glimpse-text-only")),
  "pill-locked": lazy(() => import("../examples/pill-locked")),
  "spinner-sizes": lazy(() => import("../examples/spinner-sizes")),
};

export function AdditionalExamplePreview({ file }: { file: string }) {
  const Example = examples[file as keyof typeof examples];
  if (!Example) throw new Error(`Missing example preview: ${file}`);
  return (
    <div
      data-additional-example={file}
      className="flex min-w-0 w-full items-center justify-center text-foreground"
    >
      <Suspense
        fallback={
          <p role="status" className="text-sm text-muted-foreground">
            Loading example…
          </p>
        }
      >
        <Example />
      </Suspense>
    </div>
  );
}
