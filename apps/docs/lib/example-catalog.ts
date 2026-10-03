import type { items } from "./items";

export type AdditionalExample = {
  id: string;
  title: string;
  description: string;
  file: string;
};

export const additionalExamples: Partial<
  Record<keyof typeof items, AdditionalExample[]>
> = {
  select: [
    {
      id: "groups",
      title: "Groups",
      description:
        "Organize choices with group labels and separators. The field label names the input.",
      file: "select-groups",
    },
    {
      id: "states",
      title: "Sizes, errors and positioning",
      description:
        "Compare compact and standard controls. Invalid fields explain the error, and disabled fields remain unavailable.",
      file: "select-states",
    },
    {
      id: "scroll",
      title: "Long option lists",
      description:
        "The popup scrolls within its available height and keeps keyboard selection on the active option.",
      file: "select-scroll",
    },
  ],
  "native-select": [
    {
      id: "groups",
      title: "Grouped native options",
      description:
        "Native optgroups, a compact control, and an invalid field retain browser selection and form submission.",
      file: "native-select-groups",
    },
  ],
  "input-group": [
    {
      id: "compositions",
      title: "Search, units and multiline",
      description:
        "Addons and buttons belong to the same control. The application owns search results and disables both input and action.",
      file: "input-group-compositions",
    },
  ],
  field: [
    {
      id: "fieldset",
      title: "Related fields and form values",
      description:
        "Use a legend for the group, labels for each control, and a local submission result. No form engine is required.",
      file: "field-fieldset",
    },
  ],
  tabs: [
    {
      id: "variants",
      title: "Variants and controlled selection",
      description:
        "Default, line and segmented lists use the same selection model. Vertical lists use vertical keyboard navigation.",
      file: "tabs-variants",
    },
  ],
  "dropdown-menu": [
    {
      id: "selection",
      title: "Checkbox, radio and nested actions",
      description:
        "Persist menu choices in application state. Shortcut hints describe commands; they do not register keyboard shortcuts.",
      file: "dropdown-menu-selection",
    },
  ],
  chart: [
    {
      id: "series",
      title: "Multiple series and legend",
      description:
        "Compare two series with a line chart, semantic colors, a legend and formatted tooltip values. The text summary remains available without hovering.",
      file: "chart-series",
    },
  ],
  progress: [
    {
      id: "states",
      title: "Determinate and indeterminate",
      description:
        "Known progress shows its percentage, including zero and completion. Unknown progress omits an invented percentage.",
      file: "progress-states",
    },
  ],
  toast: [
    {
      id: "feedback",
      title: "Types, promise and action",
      description:
        "One Toaster is mounted in the representative preview above. These triggers share it; promise work and undo callbacks are owned by the application.",
      file: "toast-feedback",
    },
  ],
  avatar: [
    {
      id: "images",
      title: "Images, fallback and sizes",
      description:
        "Loaded images use informative alternative text. Failed images fall back to initials; size is controlled with className.",
      file: "avatar-images",
    },
  ],
  table: [
    {
      id: "native",
      title: "Native composition and empty results",
      description:
        "Table parts preserve HTML semantics. Use the Data Table pattern when sorting, filtering and selection must work together.",
      file: "table-native",
    },
  ],
  dropzone: [
    {
      id: "files",
      title: "Single, multiple and disabled",
      description:
        "Read selected files locally to show names and sizes. Selecting a file does not upload it to a server.",
      file: "dropzone-files",
    },
  ],
  editor: [
    {
      id: "readonly",
      title: "Read-only mode and change output",
      description:
        "Toggle editing and inspect the application\u2019s HTML result. Rendering stored HTML elsewhere requires your own sanitization policy.",
      file: "editor-readonly",
    },
  ],
  "aspect-ratio": [
    {
      id: "media",
      title: "Square and widescreen media",
      description:
        "The ratio controls the frame; object-fit controls how the image fills it.",
      file: "aspect-ratio-media",
    },
  ],
  "button-group": [
    {
      id: "orientation",
      title: "Vertical and icon actions",
      description:
        "Use a group label and individual accessible names. Grouping does not turn buttons into a menu or tab list.",
      file: "button-group-orientation",
    },
  ],
  accordion: [
    {
      id: "multiple",
      title: "Multiple open sections",
      description:
        "Control the array of open sections when the application needs to observe or reset expansion.",
      file: "accordion-multiple",
    },
  ],
  "toggle-group": [
    {
      id: "vertical",
      title: "Vertical controlled selection",
      description:
        "Multiple selection uses an array of values. The result belongs to the application.",
      file: "toggle-group-vertical",
    },
  ],
  toggle: [
    {
      id: "controlled",
      title: "Compact controlled toggle",
      description:
        "A toggle expresses an on/off preference for an action; it does not submit a checkbox value.",
      file: "toggle-controlled",
    },
  ],
  "radio-group": [
    {
      id: "form",
      title: "Form selection and invalid state",
      description:
        "Radio values share one form name. An invalid group describes how to correct the selection.",
      file: "radio-group-form",
    },
  ],
  checkbox: [
    {
      id: "select-all",
      title: "Derived mixed selection",
      description:
        "The parent is indeterminate when only some children are selected. Form submission contains the checked child values.",
      file: "checkbox-select-all",
    },
  ],
  "rotating-content": [
    {
      id: "external-control",
      title: "An external pause control",
      description:
        "When controls are hidden, supply controlled paused state and an accessible control outside the decorative text.",
      file: "rotating-content-external-control",
    },
  ],
  "text-reveal": [
    {
      id: "timing",
      title: "Duration, stagger and replay",
      description:
        "Short and slower timings use the same readable text. Replay remounts the example rather than adding a component replay API.",
      file: "text-reveal-timing",
    },
  ],
  button: [
    {
      id: "sizes",
      title: "Sizes, icon names and links",
      description:
        "Choose control size consistently. Icon buttons still need labels; navigation keeps an anchor element.",
      file: "button-sizes",
    },
  ],
  input: [
    {
      id: "types",
      title: "Input types and validation feedback",
      description:
        "Native types preserve browser behavior. Associate error text with the invalid input.",
      file: "input-types",
    },
  ],
  switch: [
    {
      id: "states",
      title: "Sizes and unavailable settings",
      description:
        "Controlled state can update a visible result. Disabled switches are excluded from interaction; invalid switches explain the constraint.",
      file: "switch-states",
    },
  ],
  label: [
    {
      id: "controls",
      title: "Labels for binary controls",
      description:
        "A label names its control and enlarges the target. A disabled control remains disabled when its label is clicked.",
      file: "label-controls",
    },
  ],
  textarea: [
    {
      id: "states",
      title: "Character feedback, read-only and disabled",
      description:
        "Character limits and validation are application rules. Keep help and error text connected to the field.",
      file: "textarea-states",
    },
  ],
  card: [
    {
      id: "media",
      title: "Compact cards and media",
      description:
        "Card sizes change content density. A leading image can share the card boundary while actions keep normal control semantics.",
      file: "card-media",
    },
  ],
  separator: [
    {
      id: "vertical",
      title: "Vertical and semantic separation",
      description:
        "Vertical separators need a container height. Decorative rules do not announce a separator to assistive technology.",
      file: "separator-vertical",
    },
  ],
  dialog: [
    {
      id: "controlled",
      title: "Controlled dialog with scrollable content",
      description:
        "Explicit close actions stay available when the corner close button is hidden. Escape and focus return remain primitive behavior.",
      file: "dialog-controlled",
    },
  ],
  popover: [
    {
      id: "positioning",
      title: "Positioning and controlled state",
      description:
        "Positioners may flip to fit the viewport. Controlled state still preserves trigger, Escape and focus behavior.",
      file: "popover-positioning",
    },
  ],
  sheet: [
    {
      id: "sides",
      title: "Sides and long content",
      description:
        "Choose a side for the task. The content region scrolls while header and explicit close action stay accessible.",
      file: "sheet-sides",
    },
  ],
  tooltip: [
    {
      id: "sides",
      title: "Placement and accessible icon targets",
      description:
        "Tooltips supplement labels. Icon buttons must remain named even when the tooltip is closed.",
      file: "tooltip-sides",
    },
  ],
  "brand-gradient-text": [
    {
      id: "motion",
      title: "Static and paused gradients",
      description:
        "A static gradient keeps the brand treatment without animation. A paused gradient can resume through an external button.",
      file: "brand-gradient-text-motion",
    },
  ],
  "status-notice": [
    {
      id: "actions",
      title: "Recovery and contextual actions",
      description:
        "Pair a notice with a useful next step. Application callbacks own retry and completion state.",
      file: "status-notice-actions",
    },
  ],
  "reveal-content": [
    {
      id: "variants",
      title: "Reveal variants and child markers",
      description:
        "Line and stagger variants animate marked children. Replay resets the demo; reduced motion shows content immediately.",
      file: "reveal-content-variants",
    },
  ],
  collapsible: [
    {
      id: "controlled",
      title: "Controlled expansion and disabled trigger",
      description:
        "Control expansion when another action must open the details. Put padding inside the animated content rather than on the height container.",
      file: "collapsible-controlled",
    },
  ],
  "avatar-stack": [
    {
      id: "animated",
      title: "Images, sizes and expansion",
      description:
        "Animate the stack on hover without adding automatic overflow rules. The application chooses which people to include.",
      file: "avatar-stack-animated",
    },
  ],
  calendar: [
    {
      id: "constraints",
      title: "Locale, unavailable dates and range limits",
      description:
        "Start weeks on Monday and prevent ranges that cross an unavailable day. The application owns availability data.",
      file: "calendar-constraints",
    },
  ],
  list: [
    {
      id: "custom-rows",
      title: "Custom row content",
      description:
        "Custom rendering changes row content while built-in drag and move controls keep ownership of reordering.",
      file: "list-custom-rows",
    },
  ],
  "code-block": [
    {
      id: "plain",
      title: "Single code and plain-text fallback",
      description:
        "A single source does not need a language selector. Unknown languages render safely as plain text, with line numbers omitted.",
      file: "code-block-plain",
    },
  ],
  "contribution-graph": [
    {
      id: "selection",
      title: "Localized interval and selection",
      description:
        "Use a short reporting interval and read the selected day through the application callback.",
      file: "contribution-graph-selection",
    },
  ],
  choicebox: [
    {
      id: "form",
      title: "Controlled choice and form submission",
      description:
        "The controlled selection remains a native radio value. Disabling the fieldset locks all choices.",
      file: "choicebox-form",
    },
  ],
  combobox: [
    {
      id: "controlled",
      title: "Controlled assignment and disabled field",
      description:
        "Observe the selected option in application state. Disabling the whole combobox differs from disabling individual options.",
      file: "combobox-controlled",
    },
  ],
  tags: [
    {
      id: "controlled",
      title: "Controlled tags and locked values",
      description:
        "Read tag changes outside the control. Disabled tags cannot be added or removed.",
      file: "tags-controlled",
    },
  ],
  "image-crop": [
    {
      id: "aspect",
      title: "Fixed crop ratios",
      description:
        "Choose a square or widescreen crop. The callback returns percentages; creating or uploading the resulting image is application work.",
      file: "image-crop-aspect",
    },
  ],
  ticker: [
    {
      id: "card",
      title: "Negative change and localized currency",
      description:
        "A card layout supports more context. Currency formatting and sign convey the value without relying on color alone.",
      file: "ticker-card",
    },
  ],
  stories: [
    {
      id: "viewer",
      title: "Embedded viewer and automatic advance",
      description:
        "Use an embedded viewer when thumbnails are unnecessary. Playback controls pause automatic advance; reduced motion avoids autoplay.",
      file: "stories-viewer",
    },
  ],
  announcement: [
    {
      id: "static",
      title: "Static and persistent announcement",
      description:
        "Informational announcements can omit a link and dismissal. Use a link only when there is a destination.",
      file: "announcement-static",
    },
  ],
  banner: [
    {
      id: "subtle",
      title: "Subtle contextual banner",
      description:
        "Use a quiet surface for secondary guidance and an outlined action for a clear, readable next step.",
      file: "banner-subtle",
    },
  ],
  typography: [
    {
      id: "semantics",
      title: "Visual hierarchy and HTML meaning",
      description:
        "The same heading element can use different visual variants. Small text remains legible supporting content.",
      file: "typography-semantics",
    },
  ],
  "color-picker": [
    {
      id: "controlled",
      title: "Controlled color and transparency",
      description:
        "Change a local illustration fill to observe the selected color, including alpha. These example values belong to content, not the system palette.",
      file: "color-picker-controlled",
    },
  ],
  glimpse: [
    {
      id: "text-only",
      title: "Text-only preview",
      description:
        "A link preview can contain just a title and description. Navigation remains available without opening the hover card.",
      file: "glimpse-text-only",
    },
  ],
  pill: [
    {
      id: "locked",
      title: "Trailing content and locked removal",
      description:
        "A trailing slot can show supplemental metadata. Disabled removal keeps a required value present.",
      file: "pill-locked",
    },
  ],
  spinner: [
    {
      id: "sizes",
      title: "Spinner sizes",
      description:
        "Match the spinner to its context. Each instance keeps an accessible loading label.",
      file: "spinner-sizes",
    },
  ],
};

export function getAdditionalExamples(name: keyof typeof items) {
  return additionalExamples[name] ?? [];
}
