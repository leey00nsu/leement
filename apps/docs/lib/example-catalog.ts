import type { items } from "./items";

export type AdditionalExample = { id: string; title: string; description: string; file: string };

export const additionalExamples: Partial<Record<keyof typeof items, AdditionalExample[]>> = {
  "select": [
    {
      "id": "groups",
      "title": "Groups",
      "description": "Organize choices with group labels and separators. The field label names the input.",
      "file": "select-groups"
    },
    {
      "id": "states",
      "title": "Sizes, errors and positioning",
      "description": "Compare compact and standard controls. Invalid fields explain the error, and disabled fields remain unavailable.",
      "file": "select-states"
    },
    {
      "id": "scroll",
      "title": "Long option lists",
      "description": "The popup scrolls within its available height and keeps keyboard selection on the active option.",
      "file": "select-scroll"
    }
  ],
  "native-select": [
    {
      "id": "groups",
      "title": "Grouped native options",
      "description": "Native optgroups, a compact control, and an invalid field retain browser selection and form submission.",
      "file": "native-select-groups"
    }
  ],
  "input-group": [
    {
      "id": "compositions",
      "title": "Search, units and multiline",
      "description": "Addons and buttons belong to the same control. The application owns search results and disables both input and action.",
      "file": "input-group-compositions"
    }
  ],
  "field": [
    {
      "id": "fieldset",
      "title": "Related fields and form values",
      "description": "Use a legend for the group, labels for each control, and a local submission result. No form engine is required.",
      "file": "field-fieldset"
    }
  ],
  "tabs": [
    {
      "id": "variants",
      "title": "Variants and controlled selection",
      "description": "Default, line and segmented lists use the same selection model. Vertical lists use vertical keyboard navigation.",
      "file": "tabs-variants"
    }
  ],
  "dropdown-menu": [
    {
      "id": "selection",
      "title": "Checkbox, radio and nested actions",
      "description": "Persist menu choices in application state. Shortcut hints describe commands; they do not register keyboard shortcuts.",
      "file": "dropdown-menu-selection"
    }
  ],
  "chart": [
    {
      "id": "series",
      "title": "Multiple series and legend",
      "description": "Compare two series with a line chart, semantic colors, a legend and formatted tooltip values. The text summary remains available without hovering.",
      "file": "chart-series"
    }
  ],
  "progress": [
    {
      "id": "states",
      "title": "Determinate and indeterminate",
      "description": "Known progress shows its percentage, including zero and completion. Unknown progress omits an invented percentage.",
      "file": "progress-states"
    }
  ],
  "toast": [
    {
      "id": "feedback",
      "title": "Types, promise and action",
      "description": "One Toaster is mounted in the representative preview above. These triggers share it; promise work and undo callbacks are owned by the application.",
      "file": "toast-feedback"
    }
  ],
  "avatar": [
    {
      "id": "images",
      "title": "Images, fallback and sizes",
      "description": "Loaded images use informative alternative text. Failed images fall back to initials; size is controlled with className.",
      "file": "avatar-images"
    }
  ],
  "table": [
    {
      "id": "native",
      "title": "Native composition and empty results",
      "description": "Table parts preserve HTML semantics. Use the Data Table pattern when sorting, filtering and selection must work together.",
      "file": "table-native"
    }
  ],
  "dropzone": [
    {
      "id": "files",
      "title": "Single, multiple and disabled",
      "description": "Read selected files locally to show names and sizes. Selecting a file does not upload it to a server.",
      "file": "dropzone-files"
    }
  ],
  "editor": [
    {
      "id": "readonly",
      "title": "Read-only mode and change output",
      "description": "Toggle editing and inspect the application\u2019s HTML result. Rendering stored HTML elsewhere requires your own sanitization policy.",
      "file": "editor-readonly"
    }
  ]
};

export function getAdditionalExamples(name: keyof typeof items) {
 return additionalExamples[name] ?? [];
}
