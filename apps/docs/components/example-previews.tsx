"use client";

import { lazy, Suspense } from "react";

const examples = {
 "select-groups": lazy(() => import("../examples/select-groups")),
 "select-states": lazy(() => import("../examples/select-states")),
 "select-scroll": lazy(() => import("../examples/select-scroll")),
 "native-select-groups": lazy(() => import("../examples/native-select-groups")),
 "input-group-compositions": lazy(() => import("../examples/input-group-compositions")),
 "field-fieldset": lazy(() => import("../examples/field-fieldset")),
 "tabs-variants": lazy(() => import("../examples/tabs-variants")),
 "dropdown-menu-selection": lazy(() => import("../examples/dropdown-menu-selection")),
 "chart-series": lazy(() => import("../examples/chart-series")),
 "progress-states": lazy(() => import("../examples/progress-states")),
 "toast-feedback": lazy(() => import("../examples/toast-feedback")),
 "avatar-images": lazy(() => import("../examples/avatar-images")),
 "table-native": lazy(() => import("../examples/table-native")),
 "dropzone-files": lazy(() => import("../examples/dropzone-files")),
 "editor-readonly": lazy(() => import("../examples/editor-readonly")),
};

export function AdditionalExamplePreview({ file }: { file: string }) {
 const Example = examples[file as keyof typeof examples];
 if (!Example) throw new Error(`Missing example preview: ${file}`);
 return <div data-additional-example={file} className="flex min-w-0 w-full items-center justify-center text-foreground"><Suspense fallback={<p role="status" className="text-sm text-muted-foreground">Loading example…</p>}><Example /></Suspense></div>;
}
