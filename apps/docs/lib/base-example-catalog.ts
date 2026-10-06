import type { AdditionalExample } from "./example-catalog";
export const baseExamples: Record<string, AdditionalExample[]> = {
  accordion: [
    {
      id: "base-demo",
      title: "Overview example",
      description: "",
      file: "base-accordion-demo",
    },
    {
      id: "base-basic",
      title: "Basic",
      description:
        "A basic accordion that shows one item at a time. The first item is open by default.",
      file: "base-accordion-basic",
    },
    {
      id: "base-multiple",
      title: "Multiple",
      description:
        "Use the `multiple` prop to allow multiple items to be open at the same time.",
      file: "base-accordion-multiple",
    },
    {
      id: "base-disabled",
      title: "Disabled",
      description:
        "Use the `disabled` prop on `AccordionItem` to disable individual items.",
      file: "base-accordion-disabled",
    },
    {
      id: "base-borders",
      title: "Borders",
      description:
        "Add `border` to the `Accordion` and `border-b last:border-b-0` to the `AccordionItem` to add borders to the items.",
      file: "base-accordion-borders",
    },
    {
      id: "base-card",
      title: "Card",
      description: "Wrap the `Accordion` in a `Card` component.",
      file: "base-accordion-card",
    },
    {
      id: "base-rtl",
      title: "RTL",
      description:
        "Switch between English, Arabic and Hebrew. Direction is provided to the controls and their portals.",
      file: "base-accordion-rtl",
    },
  ],
  "alert-dialog": [
    {
      id: "base-demo",
      title: "Overview example",
      description: "",
      file: "base-alert-dialog-demo",
    },
    {
      id: "base-basic",
      title: "Basic",
      description:
        "A basic alert dialog with a title, description, and cancel and continue buttons.",
      file: "base-alert-dialog-basic",
    },
    {
      id: "base-small",
      title: "Small",
      description: 'Use the `size="sm"` prop to make the alert dialog smaller.',
      file: "base-alert-dialog-small",
    },
    {
      id: "base-media",
      title: "Media",
      description:
        "Use the `AlertDialogMedia` component to add a media element such as an icon or image to the alert dialog.",
      file: "base-alert-dialog-media",
    },
    {
      id: "base-small-media",
      title: "Small with Media",
      description:
        'Use the `size="sm"` prop to make the alert dialog smaller and the `AlertDialogMedia` component to add a media element such as an icon or image to the alert dialog.',
      file: "base-alert-dialog-small-media",
    },
    {
      id: "base-destructive",
      title: "Destructive",
      description:
        "Use the `AlertDialogAction` component to add a destructive action button to the alert dialog.",
      file: "base-alert-dialog-destructive",
    },
    {
      id: "base-rtl",
      title: "RTL",
      description:
        "Switch between English, Arabic and Hebrew. Direction is provided to the controls and their portals.",
      file: "base-alert-dialog-rtl",
    },
  ],
  "status-notice": [
    {
      id: "base-demo",
      title: "Overview example",
      description: "",
      file: "base-alert-demo",
    },
    {
      id: "base-basic",
      title: "Basic",
      description: "A basic alert with an icon, title and description.",
      file: "base-alert-basic",
    },
    {
      id: "base-destructive",
      title: "Destructive",
      description: 'Use `variant="destructive"` to create a destructive alert.',
      file: "base-alert-destructive",
    },
    {
      id: "base-action",
      title: "Action",
      description:
        "Use `AlertAction` to add a button or other action element to the alert.",
      file: "base-alert-action",
    },
    {
      id: "base-colors",
      title: "Custom Colors",
      description:
        "Use semantic surface, foreground and border utilities to customize the notice while keeping its meaning and contrast.",
      file: "base-alert-colors",
    },
    {
      id: "base-rtl",
      title: "RTL",
      description:
        "Switch between English, Arabic and Hebrew. Direction is provided to the controls and their portals.",
      file: "base-alert-rtl",
    },
  ],
  "aspect-ratio": [
    {
      id: "base-demo",
      title: "Overview example",
      description: "",
      file: "base-aspect-ratio-demo",
    },
    {
      id: "base-square",
      title: "Square",
      description:
        "A square aspect ratio component using the `ratio={1 / 1}` prop. This is useful for displaying images in a square format.",
      file: "base-aspect-ratio-square",
    },
    {
      id: "base-portrait",
      title: "Portrait",
      description:
        "A portrait aspect ratio component using the `ratio={9 / 16}` prop. This is useful for displaying images in a portrait format.",
      file: "base-aspect-ratio-portrait",
    },
    {
      id: "base-rtl",
      title: "RTL",
      description:
        "Switch between English, Arabic and Hebrew. Direction is provided to the controls and their portals.",
      file: "base-aspect-ratio-rtl",
    },
  ],
  attachment: [
    {
      id: "base-demo",
      title: "Overview example",
      description: "",
      file: "base-attachment-demo",
    },
    {
      id: "base-image",
      title: "Image",
      description:
        'Set `variant="image"` on `AttachmentMedia` and render an `<img>` inside it. Use `orientation="vertical"` to stack the media above the content.',
      file: "base-attachment-image",
    },
    {
      id: "base-states",
      title: "States",
      description:
        "Set `state` to reflect the upload lifecycle. `uploading` and `processing` shimmer the title, and `error` switches to a destructive treatment.",
      file: "base-attachment-states",
    },
    {
      id: "base-sizes",
      title: "Sizes",
      description: "Use `size` to switch between `default`, `sm`, and `xs`.",
      file: "base-attachment-sizes",
    },
    {
      id: "base-group",
      title: "Group",
      description:
        "Wrap attachments in `AttachmentGroup` to lay them out in a horizontally scrollable, snapping row with an edge fade.",
      file: "base-attachment-group",
    },
    {
      id: "base-trigger",
      title: "Trigger",
      description:
        "Add an `AttachmentTrigger` to make the whole card open a link or dialog. It fills the card behind the actions, so the actions stay clickable.",
      file: "base-attachment-trigger",
    },
  ],
  avatar: [
    {
      id: "base-demo",
      title: "Overview example",
      description: "",
      file: "base-avatar-demo",
    },
    {
      id: "base-basic",
      title: "Basic",
      description: "A basic avatar component with an image and a fallback.",
      file: "base-avatar-basic",
    },
    {
      id: "base-badge",
      title: "Badge",
      description:
        "Use the `AvatarBadge` component to add a badge to the avatar. The badge is positioned at the bottom right of the avatar.\n\nUse the `className` prop to add custom styles to the badge such as custom colors, sizes, etc.",
      file: "base-avatar-badge",
    },
    {
      id: "base-badge-icon",
      title: "Badge with Icon",
      description: "You can also use an icon inside `<AvatarBadge>`.",
      file: "base-avatar-badge-icon",
    },
    {
      id: "base-group",
      title: "Avatar Group",
      description: "Use the `AvatarGroup` component to add a group of avatars.",
      file: "base-avatar-group",
    },
    {
      id: "base-group-count",
      title: "Avatar Group Count",
      description: "Use `<AvatarGroupCount>` to add a count to the group.",
      file: "base-avatar-group-count",
    },
    {
      id: "base-group-count-icon",
      title: "Avatar Group with Icon",
      description: "You can also use an icon inside `<AvatarGroupCount>`.",
      file: "base-avatar-group-count-icon",
    },
    {
      id: "base-size",
      title: "Sizes",
      description: "Use the `size` prop to change the size of the avatar.",
      file: "base-avatar-size",
    },
    {
      id: "base-dropdown",
      title: "Dropdown",
      description:
        "You can use the `Avatar` component as a trigger for a dropdown menu.",
      file: "base-avatar-dropdown",
    },
    {
      id: "base-rtl",
      title: "RTL",
      description:
        "Switch between English, Arabic and Hebrew. Direction is provided to the controls and their portals.",
      file: "base-avatar-rtl",
    },
  ],
  badge: [
    {
      id: "base-demo",
      title: "Overview example",
      description: "",
      file: "base-badge-demo",
    },
    {
      id: "base-variants",
      title: "Variants",
      description: "Use the `variant` prop to change the variant of the badge.",
      file: "base-badge-variants",
    },
    {
      id: "base-icon",
      title: "With Icon",
      description:
        'You can render an icon inside the badge. Use `data-icon="inline-start"` to render the icon on the left and `data-icon="inline-end"` to render the icon on the right.',
      file: "base-badge-icon",
    },
    {
      id: "base-spinner",
      title: "With Spinner",
      description:
        'You can render a spinner inside the badge. Remember to add the `data-icon="inline-start"` or `data-icon="inline-end"` prop to the spinner.',
      file: "base-badge-spinner",
    },
    {
      id: "base-link",
      title: "Link",
      description: "Use the `render` prop to render a link as a badge.",
      file: "base-badge-link",
    },
    {
      id: "base-colors",
      title: "Custom Colors",
      description:
        "Customize the badge using semantic surface and foreground utilities; preserve readable contrast in both themes.",
      file: "base-badge-colors",
    },
    {
      id: "base-rtl",
      title: "RTL",
      description:
        "Switch between English, Arabic and Hebrew. Direction is provided to the controls and their portals.",
      file: "base-badge-rtl",
    },
  ],
  breadcrumb: [
    {
      id: "base-demo",
      title: "Overview example",
      description: "",
      file: "base-breadcrumb-demo",
    },
    {
      id: "base-basic",
      title: "Basic",
      description: "A basic breadcrumb with a home link and a components link.",
      file: "base-breadcrumb-basic",
    },
    {
      id: "base-separator",
      title: "Custom separator",
      description:
        "Use a custom component as `children` for `<BreadcrumbSeparator />` to create a custom separator.",
      file: "base-breadcrumb-separator",
    },
    {
      id: "base-dropdown",
      title: "Dropdown",
      description:
        "You can compose `<BreadcrumbItem />` with a `<DropdownMenu />` to create a dropdown in the breadcrumb.",
      file: "base-breadcrumb-dropdown",
    },
    {
      id: "base-ellipsis",
      title: "Collapsed",
      description:
        "We provide a `<BreadcrumbEllipsis />` component to show a collapsed state when the breadcrumb is too long.",
      file: "base-breadcrumb-ellipsis",
    },
    {
      id: "base-link",
      title: "Link component",
      description:
        "To use a custom link component from your routing library, you can use the `render` prop on `<BreadcrumbLink />`.",
      file: "base-breadcrumb-link",
    },
    {
      id: "base-rtl",
      title: "RTL",
      description:
        "Switch between English, Arabic and Hebrew. Direction is provided to the controls and their portals.",
      file: "base-breadcrumb-rtl",
    },
  ],
  bubble: [
    {
      id: "base-demo",
      title: "Overview example",
      description: "",
      file: "base-bubble-demo",
    },
    {
      id: "base-variants",
      title: "Variants",
      description:
        "Use variant for the message surface. Bubbles fit their content up to 80% of the container; ghost removes that limit for rich content. The app supplies the text and Streamdown content.",
      file: "base-bubble-variants",
    },
    {
      id: "base-alignment",
      title: "Alignment",
      description:
        'Use align="start" or align="end" for a standalone Bubble. In a transcript, set alignment on Message so the avatar, footer and surface stay together.',
      file: "base-bubble-alignment",
    },
    {
      id: "base-group-demo",
      title: "Bubble Group",
      description:
        "Use `BubbleGroup` to group consecutive bubbles from the same sender. Note the `align` prop should be set on the `Bubble` component itself, not the `BubbleGroup` component.",
      file: "base-bubble-group-demo",
    },
    {
      id: "base-link-button",
      title: "Links and Buttons",
      description:
        "You can turn a bubble into a link or button by using the `render` prop on `BubbleContent`.",
      file: "base-bubble-link-button",
    },
    {
      id: "base-reactions",
      title: "Reactions",
      description:
        'Use `BubbleReactions` for bubble reactions. You can use it to display reactions or quick action buttons. Use `side` and `align` to position the row \u2014 `side="top"` anchors it to the upper edge. Reactions overlap the bubble edge, so leave vertical space between rows \u2014 the examples below use a larger `gap` for this reason.',
      file: "base-bubble-reactions",
    },
    {
      id: "base-collapsible",
      title: "Show More / Collapsible",
      description:
        "Long bubble content can be composed with [`Collapsible`](/components/collapsible) to allow for a show more or show less interaction. Use the `CollapsibleTrigger` component to trigger the collapsible content.",
      file: "base-bubble-collapsible",
    },
    {
      id: "base-tooltip",
      title: "Tooltip",
      description:
        "Wrap a bubble in a [`Tooltip`](/components/tooltip) to reveal metadata on hover, such as when a message was read.",
      file: "base-bubble-tooltip",
    },
    {
      id: "base-popover",
      title: "Popover",
      description:
        "Pair a bubble with a [`Popover`](/components/popover) to surface more information on demand, such as the full error message for a failed action.",
      file: "base-bubble-popover",
    },
  ],
  "button-group": [
    {
      id: "base-demo",
      title: "Overview example",
      description: "",
      file: "base-button-group-demo",
    },
    {
      id: "base-orientation",
      title: "Orientation",
      description:
        "Set the `orientation` prop to change the button group layout.",
      file: "base-button-group-orientation",
    },
    {
      id: "base-size",
      title: "Size",
      description:
        "Control the size of buttons using the `size` prop on individual buttons.",
      file: "base-button-group-size",
    },
    {
      id: "base-nested",
      title: "Nested",
      description: "Nest `<ButtonGroup>` components to create button groups with spacing.",
      file: "base-button-group-nested",
    },
    {
      id: "base-separator",
      title: "Separator",
      description:
        "The `ButtonGroupSeparator` component visually divides buttons within a group.\n\nButtons with variant `outline` do not need a separator since they have a border. For other variants, a separator is recommended to improve the visual hierarchy.",
      file: "base-button-group-separator",
    },
    {
      id: "base-split",
      title: "Split",
      description:
        "Create a split button group by adding two buttons separated by a `ButtonGroupSeparator`.",
      file: "base-button-group-split",
    },
    {
      id: "base-input",
      title: "Input",
      description: "Wrap an `Input` component with buttons.",
      file: "base-button-group-input",
    },
    {
      id: "base-input-group",
      title: "Input Group",
      description:
        "Wrap an `InputGroup` component to create complex input layouts.",
      file: "base-button-group-input-group",
    },
    {
      id: "base-dropdown",
      title: "Dropdown Menu",
      description:
        "Create a split button group with a `DropdownMenu` component.",
      file: "base-button-group-dropdown",
    },
    {
      id: "base-select",
      title: "Select",
      description: "Pair with a `Select` component.",
      file: "base-button-group-select",
    },
    {
      id: "base-popover",
      title: "Popover",
      description: "Use with a `Popover` component.",
      file: "base-button-group-popover",
    },
    {
      id: "base-rtl",
      title: "RTL",
      description:
        "Switch between English, Arabic and Hebrew. Direction is provided to the controls and their portals.",
      file: "base-button-group-rtl",
    },
  ],
  button: [
    {
      id: "base-demo",
      title: "Overview example",
      description: "",
      file: "base-button-demo",
    },
    {
      id: "base-size",
      title: "Size",
      description: "Use the `size` prop to change the size of the button.",
      file: "base-button-size",
    },
    {
      id: "base-default",
      title: "Default",
      description: "Use the primary button for the main action.",
      file: "base-button-default",
    },
    {
      id: "base-outline",
      title: "Outline",
      description: "Use outline for a bordered secondary action.",
      file: "base-button-outline",
    },
    {
      id: "base-secondary",
      title: "Secondary",
      description: "Use secondary for an action on a neutral filled surface.",
      file: "base-button-secondary",
    },
    {
      id: "base-ghost",
      title: "Ghost",
      description: "Use ghost for a quiet action without a persistent background.",
      file: "base-button-ghost",
    },
    {
      id: "base-destructive",
      title: "Destructive",
      description: "Use destructive for an action that removes or discards data.",
      file: "base-button-destructive",
    },
    {
      id: "base-link",
      title: "Link",
      description: "Use the link variant for a button action styled as text. For navigation, use a native anchor with buttonVariants.",
      file: "base-button-link",
    },
    {
      id: "base-icon",
      title: "Icon",
      description: "Give an icon-only button an accessible name with aria-label.",
      file: "base-button-icon",
    },
    {
      id: "base-with-icon",
      title: "With Icon",
      description:
        'Remember to add the `data-icon="inline-start"` or `data-icon="inline-end"` attribute to the icon for the correct spacing.',
      file: "base-button-with-icon",
    },
    {
      id: "base-rounded",
      title: "Rounded",
      description: "Use the `rounded-full` class to make the button rounded.",
      file: "base-button-rounded",
    },
    {
      id: "base-spinner",
      title: "Spinner",
      description:
        'Render a `<Spinner />` component inside the button to show a loading state. Remember to add the `data-icon="inline-start"` or `data-icon="inline-end"` attribute to the spinner for the correct spacing.',
      file: "base-button-spinner",
    },
    {
      id: "base-group-demo",
      title: "Button Group",
      description:
        "To create a button group, use the `ButtonGroup` component. See the [Button Group](/components/button-group) documentation for more details.",
      file: "base-button-group-demo",
    },
    {
      id: "base-render",
      title: "As Link",
      description:
        'You can use the `buttonVariants` helper to make a link look like a button.\n\n**Do not use `<Button render={<a />} nativeButton={false} />` for links.** The Base UI `Button` component always applies `role="button"`, which overrides the semantic link role on `<a>` elements. Use `buttonVariants` with a plain `<a>` tag instead.',
      file: "base-button-render",
    },
    {
      id: "base-rtl",
      title: "RTL",
      description:
        "Switch between English, Arabic and Hebrew. Direction is provided to the controls and their portals.",
      file: "base-button-rtl",
    },
  ],
  calendar: [
    {
      id: "base-demo",
      title: "Overview example",
      description: "",
      file: "base-calendar-demo",
    },
    {
      id: "base-hijri",
      title: "Persian / Hijri / Jalali Calendar",
      description:
        "To use the Persian calendar, edit `components/ui/calendar.tsx` and replace `react-day-picker` with `react-day-picker/persian`.",
      file: "base-calendar-hijri",
    },
    {
      id: "base-basic",
      title: "Basic",
      description:
        'A basic calendar component. We used `className="rounded-lg border"` to style the calendar.',
      file: "base-calendar-basic",
    },
    {
      id: "base-range",
      title: "Range Calendar",
      description: 'Use the `mode="range"` prop to enable range selection.',
      file: "base-calendar-range",
    },
    {
      id: "base-caption",
      title: "Month and Year Selector",
      description:
        'Use `captionLayout="dropdown"` to show month and year dropdowns.',
      file: "base-calendar-caption",
    },
    {
      id: "base-presets",
      title: "Presets",
      description: "Select a preset date or pick a date from the same controlled Calendar.",
      file: "base-calendar-presets",
    },
    {
      id: "base-time",
      title: "Date and Time Picker",
      description: "Combine Calendar with a labelled time input; the app combines date and time values.",
      file: "base-calendar-time",
    },
    {
      id: "base-booked-dates",
      title: "Booked dates",
      description: "Disable booked dates so they remain visible without being selectable.",
      file: "base-calendar-booked-dates",
    },
    {
      id: "base-custom-days",
      title: "Custom Cell Size",
      description: "You can customize the size of calendar cells using the `--cell-size` CSS variable. You can also make it responsive by using breakpoint-specific values:\n\nOr use fixed values:",
      file: "base-calendar-custom-days",
    },
    {
      id: "base-week-numbers",
      title: "Week Numbers",
      description: "Use `showWeekNumber` to show week numbers.",
      file: "base-calendar-week-numbers",
    },
    {
      id: "base-rtl",
      title: "RTL",
      description:
        "Switch between English, Arabic and Hebrew. Direction is provided to the controls and their portals.",
      file: "base-calendar-rtl",
    },
  ],
  card: [
    {
      id: "base-demo",
      title: "Overview example",
      description: "",
      file: "base-card-demo",
    },
    {
      id: "base-small",
      title: "Size",
      description:
        'Use the `size="sm"` prop to set the size of the card to small. The small size variant uses smaller spacing.',
      file: "base-card-small",
    },
    {
      id: "base-spacing",
      title: "Spacing",
      description:
        "In addition to the `size` prop, you can use the `--card-spacing` CSS variable to control the spacing between sections and the inset of card parts.\n\nUse negative margins with `-mx-(--card-spacing)` to make content go edge to edge while keeping it aligned with the card inset. When the edge-to-edge content sits above a footer, use `-mb-(--card-spacing)` on `CardContent` to remove the section gap.",
      file: "base-card-spacing",
    },
    {
      id: "base-edge-to-edge",
      title: "Spacing",
      description:
        "In addition to the `size` prop, you can use the `--card-spacing` CSS variable to control the spacing between sections and the inset of card parts.\n\nUse negative margins with `-mx-(--card-spacing)` to make content go edge to edge while keeping it aligned with the card inset. When the edge-to-edge content sits above a footer, use `-mb-(--card-spacing)` on `CardContent` to remove the section gap.",
      file: "base-card-edge-to-edge",
    },
    {
      id: "base-image",
      title: "Image",
      description:
        "Add an image before the card header to create a card with an image.",
      file: "base-card-image",
    },
    {
      id: "base-rtl",
      title: "RTL",
      description:
        "Switch between English, Arabic and Hebrew. Direction is provided to the controls and their portals.",
      file: "base-card-rtl",
    },
  ],
  carousel: [
    {
      id: "base-demo",
      title: "Overview example",
      description: "",
      file: "base-carousel-demo",
    },
    {
      id: "base-size",
      title: "Sizes",
      description:
        "To set the size of the items, you can use the `basis` utility class on the `<CarouselItem />`.",
      file: "base-carousel-size",
    },
    {
      id: "base-spacing",
      title: "Spacing",
      description:
        "To set the spacing between the items, we use a `pl-[VALUE]` utility on the `<CarouselItem />` and a negative `-ml-[VALUE]` on the `<CarouselContent />`.",
      file: "base-carousel-spacing",
    },
    {
      id: "base-orientation",
      title: "Orientation",
      description:
        "Use the `orientation` prop to set the orientation of the carousel.",
      file: "base-carousel-orientation",
    },
    {
      id: "base-api",
      title: "API",
      description:
        "Use a state and the `setApi` prop to get an instance of the carousel API. Subscribe to the Embla select event through setApi and clean up listeners on unmount. Pass opts for axis/alignment behavior; see the linked Embla API for supported options.",
      file: "base-carousel-api",
    },
    {
      id: "base-plugin",
      title: "Plugins",
      description:
        "You can use the `plugins` prop to add plugins to the carousel.",
      file: "base-carousel-plugin",
    },
    {
      id: "base-rtl",
      title: "RTL",
      description:
        "Switch between English, Arabic and Hebrew. Direction is provided to the controls and their portals.",
      file: "base-carousel-rtl",
    },
  ],
  chart: [
    {
      id: "base-demo",
      title: "Overview example",
      description: "",
      file: "base-chart-demo",
    },
    {
      id: "base-example",
      title: "Basic bar chart",
      description:
        "Define data and ChartConfig, then map Bar dataKey to the config. Give ChartContainer a minimum height.",
      file: "base-chart-example",
    },
    {
      id: "base-example-grid",
      title: "Add a grid",
      description:
        "Add CartesianGrid; vertical={false} keeps only horizontal guides.",
      file: "base-chart-example-grid",
    },
    {
      id: "base-example-axis",
      title: "Add an axis",
      description:
        "Add XAxis with the category dataKey. Format tick values without changing the underlying data.",
      file: "base-chart-example-axis",
    },
    {
      id: "base-example-tooltip",
      title: "Add a tooltip",
      description:
        "Compose ChartTooltip and ChartTooltipContent for labels, indicators and formatted values.",
      file: "base-chart-example-tooltip",
    },
    {
      id: "base-example-legend",
      title: "Add a legend",
      description:
        "Compose ChartLegend and ChartLegendContent with the same ChartConfig used by the series.",
      file: "base-chart-example-legend",
    },
    {
      id: "base-tooltip",
      title: "Tooltip",
      description:
        "Use hideLabel, hideIndicator and indicator to control tooltip content and appearance. labelKey and nameKey select the matching data/config keys; see API Reference for the props.",
      file: "base-chart-tooltip",
    },
    {
      id: "base-rtl",
      title: "RTL",
      description:
        "Switch between English, Arabic and Hebrew. Direction is provided to the controls and their portals.",
      file: "base-chart-rtl",
    },
  ],
  checkbox: [
    {
      id: "base-demo",
      title: "Overview example",
      description: "",
      file: "base-checkbox-demo",
    },
    {
      id: "base-invalid",
      title: "Invalid State",
      description:
        "Set `aria-invalid` on the checkbox and `data-invalid` on the field wrapper to\nshow the invalid styles.",
      file: "base-checkbox-invalid",
    },
    {
      id: "base-basic",
      title: "Basic",
      description:
        "Pair the checkbox with `Field` and `FieldLabel` for proper layout and labeling.",
      file: "base-checkbox-basic",
    },
    {
      id: "base-description",
      title: "Description",
      description: "Use `FieldContent` and `FieldDescription` for helper text.",
      file: "base-checkbox-description",
    },
    {
      id: "base-disabled",
      title: "Disabled",
      description:
        "Use the `disabled` prop to prevent interaction and add the `data-disabled` attribute to the `<Field>` component for disabled styles.",
      file: "base-checkbox-disabled",
    },
    {
      id: "base-group",
      title: "Group",
      description: "Use multiple fields to create a checkbox list.",
      file: "base-checkbox-group",
    },
    {
      id: "base-table",
      title: "Table",
      description: "Use labelled checkboxes for row selection and an indeterminate header checkbox for a partly selected table.",
      file: "base-checkbox-table",
    },
    {
      id: "base-rtl",
      title: "RTL",
      description:
        "Switch between English, Arabic and Hebrew. Direction is provided to the controls and their portals.",
      file: "base-checkbox-rtl",
    },
  ],
  collapsible: [
    {
      id: "base-demo",
      title: "Overview example",
      description: "",
      file: "base-collapsible-demo",
    },
    {
      id: "base-basic",
      title: "Basic",
      description: "Compose a trigger and content panel. Keep padding and borders on the inner box so the measured Motion height opens smoothly.",
      file: "base-collapsible-basic",
    },
    {
      id: "base-settings",
      title: "Settings Panel",
      description: "Use a trigger button to reveal additional settings.",
      file: "base-collapsible-settings",
    },
    {
      id: "base-file-tree",
      title: "File Tree",
      description: "Use nested collapsibles to build a file tree.",
      file: "base-collapsible-file-tree",
    },
    {
      id: "base-rtl",
      title: "RTL",
      description:
        "Switch between English, Arabic and Hebrew. Direction is provided to the controls and their portals.",
      file: "base-collapsible-rtl",
    },
  ],
  combobox: [
    {
      id: "base-demo",
      title: "Overview example",
      description: "",
      file: "base-combobox-demo",
    },
    {
      id: "base-basic",
      title: "Basic",
      description: "A simple combobox with a list of frameworks.",
      file: "base-combobox-basic",
    },
    {
      id: "base-multiple",
      title: "Multiple",
      description:
        "A combobox with multiple selection using `multiple` and `ComboboxChips`. Compose ComboboxChips and ComboboxChip with ComboboxChipsInput for selected values.",
      file: "base-combobox-multiple",
    },
    {
      id: "base-clear",
      title: "Clear Button",
      description: "Use the `showClear` prop to show a clear button.",
      file: "base-combobox-clear",
    },
    {
      id: "base-groups",
      title: "Groups",
      description:
        "Use `ComboboxGroup` and `ComboboxSeparator` to group items.",
      file: "base-combobox-groups",
    },
    {
      id: "base-custom",
      title: "Custom Items",
      description: "Use itemToStringValue for object items and render the matching content inside ComboboxItem.",
      file: "base-combobox-custom",
    },
    {
      id: "base-invalid",
      title: "Invalid",
      description: "Use the `aria-invalid` prop to make the combobox invalid.",
      file: "base-combobox-invalid",
    },
    {
      id: "base-disabled",
      title: "Disabled",
      description: "Use the `disabled` prop to disable the combobox.",
      file: "base-combobox-disabled",
    },
    {
      id: "base-auto-highlight",
      title: "Auto Highlight",
      description:
        "Use the `autoHighlight` prop to automatically highlight the first item on filter.",
      file: "base-combobox-auto-highlight",
    },
    {
      id: "base-popup",
      title: "Popup",
      description:
        "You can trigger the combobox from a button or any other component by using the `render` prop. Move the `ComboboxInput` inside the `ComboboxContent`.",
      file: "base-combobox-popup",
    },
    {
      id: "base-input-group",
      title: "Input Group",
      description:
        "You can add an addon to the combobox by using the `InputGroupAddon` component inside the `ComboboxInput`.",
      file: "base-combobox-input-group",
    },
    {
      id: "base-rtl",
      title: "RTL",
      description:
        "Switch between English, Arabic and Hebrew. Direction is provided to the controls and their portals.",
      file: "base-combobox-rtl",
    },
  ],
  command: [
    {
      id: "base-demo",
      title: "Overview example",
      description: "",
      file: "base-command-demo",
    },
    {
      id: "base-basic",
      title: "Basic",
      description: "A simple command menu in a dialog.",
      file: "base-command-basic",
    },
    {
      id: "base-shortcuts",
      title: "Shortcuts",
      description: "Show shortcut hints beside command items; the app owns the matching keyboard command.",
      file: "base-command-shortcuts",
    },
    {
      id: "base-groups",
      title: "Groups",
      description: "A command menu with groups, icons and separators.",
      file: "base-command-groups",
    },
    {
      id: "base-scrollable",
      title: "Scrollable",
      description: "Scrollable command menu with multiple items.",
      file: "base-command-scrollable",
    },
    {
      id: "base-rtl",
      title: "RTL",
      description:
        "Switch between English, Arabic and Hebrew. Direction is provided to the controls and their portals.",
      file: "base-command-rtl",
    },
  ],
  "context-menu": [
    {
      id: "base-demo",
      title: "Overview example",
      description: "",
      file: "base-context-menu-demo",
    },
    {
      id: "base-basic",
      title: "Basic",
      description: "A simple context menu with a few actions.",
      file: "base-context-menu-basic",
    },
    {
      id: "base-submenu",
      title: "Submenu",
      description: "Use `ContextMenuSub` to nest secondary actions.",
      file: "base-context-menu-submenu",
    },
    {
      id: "base-shortcuts",
      title: "Shortcuts",
      description: "Add `ContextMenuShortcut` to show keyboard hints.",
      file: "base-context-menu-shortcuts",
    },
    {
      id: "base-groups",
      title: "Groups",
      description: "Group related actions and separate them with dividers.",
      file: "base-context-menu-groups",
    },
    {
      id: "base-icons",
      title: "Icons",
      description: "Combine icons with labels for quick scanning.",
      file: "base-context-menu-icons",
    },
    {
      id: "base-checkboxes",
      title: "Checkboxes",
      description: "Use `ContextMenuCheckboxItem` for toggles.",
      file: "base-context-menu-checkboxes",
    },
    {
      id: "base-radio",
      title: "Radio",
      description: "Use `ContextMenuRadioItem` for exclusive choices.",
      file: "base-context-menu-radio",
    },
    {
      id: "base-destructive",
      title: "Destructive",
      description:
        'Use `variant="destructive"` to style the menu item as destructive.',
      file: "base-context-menu-destructive",
    },
    {
      id: "base-sides",
      title: "Sides",
      description: "Control submenu placement with side and align props.",
      file: "base-context-menu-sides",
    },
    {
      id: "base-rtl",
      title: "RTL",
      description:
        "Switch between English, Arabic and Hebrew. Direction is provided to the controls and their portals.",
      file: "base-context-menu-rtl",
    },
  ],
  "data-table": [
    {
      id: "base-demo",
      title: "Overview example",
      description:
        " Uses TanStack Table v8 sorting, filtering, visibility, pagination and selection APIs.",
      file: "base-data-table-demo",
    },
    {
      id: "base-rtl",
      title: "RTL",
      description:
        "Switch between English, Arabic and Hebrew. Direction is provided to the controls and their portals. Uses TanStack Table v8 sorting, filtering, visibility, pagination and selection APIs.",
      file: "base-data-table-rtl",
    },
  ],
  "date-picker": [
    {
      id: "base-demo",
      title: "Overview example",
      description: "",
      file: "base-date-picker-demo",
    },
    {
      id: "base-basic",
      title: "Basic",
      description: "A basic date picker component.",
      file: "base-date-picker-basic",
    },
    {
      id: "base-range",
      title: "Range Picker",
      description: "A date picker component for selecting a range of dates.",
      file: "base-date-picker-range",
    },
    {
      id: "base-dob",
      title: "Date of Birth",
      description:
        "A date picker component for selecting a date of birth. This component includes a dropdown caption layout for date and month selection.",
      file: "base-date-picker-dob",
    },
    {
      id: "base-input",
      title: "Input",
      description:
        "A date picker component with an input field for selecting a date.",
      file: "base-date-picker-input",
    },
    {
      id: "base-time",
      title: "Time Picker",
      description:
        "A date picker component with a time input field for selecting a time.",
      file: "base-date-picker-time",
    },
    {
      id: "base-natural-language",
      title: "Natural Language Picker",
      description:
        "This component uses the `chrono-node` library to parse natural language dates.",
      file: "base-date-picker-natural-language",
    },
    {
      id: "base-rtl",
      title: "RTL",
      description:
        "Switch between English, Arabic and Hebrew. Direction is provided to the controls and their portals.",
      file: "base-date-picker-rtl",
    },
  ],
  dialog: [
    {
      id: "base-demo",
      title: "Overview example",
      description: "",
      file: "base-dialog-demo",
    },
    {
      id: "base-close-button",
      title: "Custom Close Button",
      description: "Replace the default close control with your own button.",
      file: "base-dialog-close-button",
    },
    {
      id: "base-no-close-button",
      title: "No Close Button",
      description: "Use `showCloseButton={false}` to hide the close button.",
      file: "base-dialog-no-close-button",
    },
    {
      id: "base-sticky-footer",
      title: "Sticky Footer",
      description: "Keep actions visible while the content scrolls.",
      file: "base-dialog-sticky-footer",
    },
    {
      id: "base-scrollable-content",
      title: "Scrollable Content",
      description: "Long content can scroll while the header stays in view.",
      file: "base-dialog-scrollable-content",
    },
    {
      id: "base-rtl",
      title: "RTL",
      description:
        "Switch between English, Arabic and Hebrew. Direction is provided to the controls and their portals.",
      file: "base-dialog-rtl",
    },
  ],
  direction: [
    {
      id: "base-card-rtl",
      title: "Overview example",
      description:
        "Switch between English, Arabic and Hebrew. Direction is provided to the controls and their portals.",
      file: "base-card-rtl",
    },
  ],
  drawer: [
    {
      id: "base-demo",
      title: "Overview example",
      description: "",
      file: "base-drawer-demo",
    },
    {
      id: "base-sides",
      title: "Position",
      description:
        "Use the `swipeDirection` prop to set the side of the drawer.\n\nAvailable options are `up`, `right`, `down`, and `left`.",
      file: "base-drawer-sides",
    },
    {
      id: "base-swipe-handle",
      title: "Swipe Handle",
      description:
        "Use `showSwipeHandle` on `Drawer` to render a swipe handle.",
      file: "base-drawer-swipe-handle",
    },
    {
      id: "base-nested",
      title: "Nested",
      description:
        "Open drawers from inside another drawer. Parent drawers stay mounted and stack behind the frontmost drawer.",
      file: "base-drawer-nested",
    },
    {
      id: "base-non-modal",
      title: "Non Modal",
      description:
        'Set `modal={false}` to allow interaction with the rest of the page while the drawer is open. Combine with `disablePointerDismissal` to prevent the drawer from closing on outside presses. Use `modal="trap-focus"` to keep focus inside the drawer while leaving scroll and pointer interaction unrestricted.',
      file: "base-drawer-non-modal",
    },
    {
      id: "base-snap-points",
      title: "Snap Points",
      description:
        "Use `snapPoints` to snap a drawer to preset heights. Numbers between `0` and `1` represent fractions of the viewport. Numbers greater than `1` are treated as pixel values. String values support `px` and `rem` units. Snap points apply to vertical drawers.\n\nTrack the active snap point with the controlled `snapPoint` and `onSnapPointChange` props. At the full snap point, the drawer gets a `data-expanded` attribute you can style with the `data-expanded:` variant.",
      file: "base-drawer-snap-points",
    },
    {
      id: "base-dialog",
      title: "Responsive",
      description:
        "You can combine the `Dialog` and `Drawer` components to create a responsive dialog. This renders a `Dialog` component on desktop and a `Drawer` on mobile.",
      file: "base-drawer-dialog",
    },
  ],
  "dropdown-menu": [
    {
      id: "base-demo",
      title: "Overview example",
      description: "",
      file: "base-dropdown-menu-demo",
    },
    {
      id: "base-basic",
      title: "Basic",
      description: "A basic dropdown menu with labels and separators.",
      file: "base-dropdown-menu-basic",
    },
    {
      id: "base-submenu",
      title: "Submenu",
      description: "Use `DropdownMenuSub` to nest secondary actions.",
      file: "base-dropdown-menu-submenu",
    },
    {
      id: "base-shortcuts",
      title: "Shortcuts",
      description: "Add `DropdownMenuShortcut` to show keyboard hints.",
      file: "base-dropdown-menu-shortcuts",
    },
    {
      id: "base-icons",
      title: "Icons",
      description: "Combine icons with labels for quick scanning.",
      file: "base-dropdown-menu-icons",
    },
    {
      id: "base-checkboxes",
      title: "Checkboxes",
      description: "Use `DropdownMenuCheckboxItem` for toggles.",
      file: "base-dropdown-menu-checkboxes",
    },
    {
      id: "base-checkboxes-icons",
      title: "Checkboxes Icons",
      description: "Add icons to checkbox items.",
      file: "base-dropdown-menu-checkboxes-icons",
    },
    {
      id: "base-radio-group",
      title: "Radio Group",
      description: "Use `DropdownMenuRadioGroup` for exclusive choices.",
      file: "base-dropdown-menu-radio-group",
    },
    {
      id: "base-radio-icons",
      title: "Radio Icons",
      description: "Show radio options with icons.",
      file: "base-dropdown-menu-radio-icons",
    },
    {
      id: "base-destructive",
      title: "Destructive",
      description: 'Use `variant="destructive"` for irreversible actions.',
      file: "base-dropdown-menu-destructive",
    },
    {
      id: "base-avatar",
      title: "Avatar",
      description: "An account switcher dropdown triggered by an avatar.",
      file: "base-dropdown-menu-avatar",
    },
    {
      id: "base-complex",
      title: "Complex",
      description: "A richer example combining groups, icons, and submenus.",
      file: "base-dropdown-menu-complex",
    },
    {
      id: "base-rtl",
      title: "RTL",
      description:
        "Switch between English, Arabic and Hebrew. Direction is provided to the controls and their portals.",
      file: "base-dropdown-menu-rtl",
    },
  ],
  "empty-state": [
    {
      id: "base-demo",
      title: "Overview example",
      description: "",
      file: "base-empty-demo",
    },
    {
      id: "base-outline",
      title: "Outline",
      description:
        "Use the `border` utility class to create an outline empty state.",
      file: "base-empty-outline",
    },
    {
      id: "base-background",
      title: "Background",
      description:
        "Use the `bg-*` and `bg-gradient-*` utilities to add a background to the empty state.",
      file: "base-empty-background",
    },
    {
      id: "base-avatar",
      title: "Avatar",
      description:
        "Use the `EmptyMedia` component to display an avatar in the empty state.",
      file: "base-empty-avatar",
    },
    {
      id: "base-avatar-group",
      title: "Avatar Group",
      description:
        "Use the `EmptyMedia` component to display an avatar group in the empty state.",
      file: "base-empty-avatar-group",
    },
    {
      id: "base-input-group",
      title: "InputGroup",
      description:
        "You can add an `InputGroup` component to the `EmptyContent` component.",
      file: "base-empty-input-group",
    },
    {
      id: "base-rtl",
      title: "RTL",
      description:
        "Switch between English, Arabic and Hebrew. Direction is provided to the controls and their portals.",
      file: "base-empty-rtl",
    },
  ],
  field: [
    {
      id: "base-demo",
      title: "Overview example",
      description: "",
      file: "base-field-demo",
    },
    {
      id: "base-input",
      title: "Input",
      description: "Associate FieldLabel, Input and optional FieldDescription within one Field.",
      file: "base-field-input",
    },
    {
      id: "base-textarea",
      title: "Textarea",
      description: "Pair Textarea with its label, description and validation message.",
      file: "base-field-textarea",
    },
    {
      id: "base-select",
      title: "Select",
      description: "Place a labelled Select within Field; keep the label associated with the trigger.",
      file: "base-field-select",
    },
    {
      id: "base-slider",
      title: "Slider",
      description: "Give Slider a field label and expose the current value alongside the control.",
      file: "base-field-slider",
    },
    {
      id: "base-fieldset",
      title: "Fieldset",
      description: "Use FieldSet and FieldLegend to name a set of related controls.",
      file: "base-field-fieldset",
    },
    {
      id: "base-checkbox",
      title: "Checkbox",
      description: "Compose FieldLabel and Checkbox; use FieldContent when the option needs a description.",
      file: "base-field-checkbox",
    },
    {
      id: "base-radio",
      title: "Radio",
      description: "Group exclusive options with RadioGroup and a shared FieldLegend.",
      file: "base-field-radio",
    },
    {
      id: "base-switch",
      title: "Switch",
      description: "Pair Switch with its label and supporting description in a horizontal Field.",
      file: "base-field-switch",
    },
    {
      id: "base-choice-card",
      title: "Choice Card",
      description:
        "Wrap `Field` components inside `FieldLabel` to create selectable field groups. This works with `RadioGroupItem`, `Checkbox` and `Switch` components.",
      file: "base-field-choice-card",
    },
    {
      id: "base-group",
      title: "Field Group",
      description:
        "Stack `Field` components with `FieldGroup`. Add `FieldSeparator` to divide them.",
      file: "base-field-group",
    },
    {
      id: "base-rtl",
      title: "RTL",
      description:
        "Switch between English, Arabic and Hebrew. Direction is provided to the controls and their portals.",
      file: "base-field-rtl",
    },
    {
      id: "base-responsive",
      title: "Responsive Layout",
      description:
        '- **Vertical fields:** Default orientation stacks label, control, and helper text\u2014ideal for mobile-first layouts.\n- **Horizontal fields:** Set `orientation="horizontal"` on `Field` to align the label and control side-by-side. Pair with `FieldContent` to keep descriptions aligned.\n- **Responsive fields:** Set `orientation="responsive"` for automatic column layouts inside container-aware parents. Apply `@container/field-group` classes on `FieldGroup` to switch orientations at specific breakpoints.',
      file: "base-field-responsive",
    },
  ],
  "hover-card": [
    {
      id: "base-demo",
      title: "Overview example",
      description: "",
      file: "base-hover-card-demo",
    },
    {
      id: "base-sides",
      title: "Sides",
      description: "Use side and align on HoverCardContent to choose placement. delay and closeDelay belong on HoverCardTrigger.",
      file: "base-hover-card-sides",
    },
    {
      id: "base-rtl",
      title: "RTL",
      description:
        "Switch between English, Arabic and Hebrew. Direction is provided to the controls and their portals.",
      file: "base-hover-card-rtl",
    },
  ],
  "input-group": [
    {
      id: "base-demo",
      title: "Overview example",
      description: "",
      file: "base-input-group-demo",
    },
    {
      id: "base-inline-start",
      title: "Align",
      description:
        'Use the `align` prop on `InputGroupAddon` to position the addon relative to the input.\n\n  For proper focus management, `InputGroupAddon` should always be placed after\n  `InputGroupInput` or `InputGroupTextarea` in the DOM. Use the `align` prop to\n  visually position the addon.\n\n### inline-start\n\nUse `align="inline-start"` to position the addon at the start of the input. This is the default.\n\n### inline-end\n\nUse `align="inline-end"` to position the addon at the end of the input.\n\n### block-start\n\nUse `align="block-start"` to position the addon above the input.\n\n### block-end\n\nUse `align="block-end"` to position the addon below the input.',
      file: "base-input-group-inline-start",
    },
    {
      id: "base-inline-end",
      title: "Align",
      description:
        'Use the `align` prop on `InputGroupAddon` to position the addon relative to the input.\n\n  For proper focus management, `InputGroupAddon` should always be placed after\n  `InputGroupInput` or `InputGroupTextarea` in the DOM. Use the `align` prop to\n  visually position the addon.\n\n### inline-start\n\nUse `align="inline-start"` to position the addon at the start of the input. This is the default.\n\n### inline-end\n\nUse `align="inline-end"` to position the addon at the end of the input.\n\n### block-start\n\nUse `align="block-start"` to position the addon above the input.\n\n### block-end\n\nUse `align="block-end"` to position the addon below the input.',
      file: "base-input-group-inline-end",
    },
    {
      id: "base-block-start",
      title: "Align",
      description:
        'Use the `align` prop on `InputGroupAddon` to position the addon relative to the input.\n\n  For proper focus management, `InputGroupAddon` should always be placed after\n  `InputGroupInput` or `InputGroupTextarea` in the DOM. Use the `align` prop to\n  visually position the addon.\n\n### inline-start\n\nUse `align="inline-start"` to position the addon at the start of the input. This is the default.\n\n### inline-end\n\nUse `align="inline-end"` to position the addon at the end of the input.\n\n### block-start\n\nUse `align="block-start"` to position the addon above the input.\n\n### block-end\n\nUse `align="block-end"` to position the addon below the input.',
      file: "base-input-group-block-start",
    },
    {
      id: "base-block-end",
      title: "Align",
      description:
        'Use the `align` prop on `InputGroupAddon` to position the addon relative to the input.\n\n  For proper focus management, `InputGroupAddon` should always be placed after\n  `InputGroupInput` or `InputGroupTextarea` in the DOM. Use the `align` prop to\n  visually position the addon.\n\n### inline-start\n\nUse `align="inline-start"` to position the addon at the start of the input. This is the default.\n\n### inline-end\n\nUse `align="inline-end"` to position the addon at the end of the input.\n\n### block-start\n\nUse `align="block-start"` to position the addon above the input.\n\n### block-end\n\nUse `align="block-end"` to position the addon below the input.',
      file: "base-input-group-block-end",
    },
    {
      id: "base-icon",
      title: "Icon",
      description: "Place a decorative icon in InputGroupAddon and keep a separate label for the input.",
      file: "base-input-group-icon",
    },
    {
      id: "base-text",
      title: "Text",
      description: "Use an addon for units, prefixes or suffixes without including them in the input value.",
      file: "base-input-group-text",
    },
    {
      id: "base-button",
      title: "Button",
      description: "Compose InputGroupButton for an action within the control; label icon-only actions.",
      file: "base-input-group-button",
    },
    {
      id: "base-kbd",
      title: "Kbd",
      description: "Use Kbd in an addon to show a shortcut hint. The app owns shortcut handling.",
      file: "base-input-group-kbd",
    },
    {
      id: "base-dropdown",
      title: "Dropdown",
      description: "Use an addon button as the dropdown trigger while the input retains its label and focus behavior.",
      file: "base-input-group-dropdown",
    },
    {
      id: "base-spinner",
      title: "Spinner",
      description: "Show Spinner while work is pending; keep loading text available to assistive technology.",
      file: "base-input-group-spinner",
    },
    {
      id: "base-textarea",
      title: "Textarea",
      description: "Use InputGroupTextarea for multiline input with block-start or block-end addons.",
      file: "base-input-group-textarea",
    },
    {
      id: "base-custom",
      title: "Custom Input",
      description:
        "Add the `data-slot=\"input-group-control\"` attribute to your custom input for automatic focus state handling.\n\nHere's an example of a custom resizable textarea from a third-party library.",
      file: "base-input-group-custom",
    },
    {
      id: "base-rtl",
      title: "RTL",
      description:
        "Switch between English, Arabic and Hebrew. Direction is provided to the controls and their portals.",
      file: "base-input-group-rtl",
    },
  ],
  "input-otp": [
    {
      id: "base-demo",
      title: "Overview example",
      description: "",
      file: "base-input-otp-demo",
    },
    {
      id: "base-pattern",
      title: "Pattern",
      description:
        "Use the `pattern` prop to define a custom pattern for the OTP input.",
      file: "base-input-otp-pattern",
    },
    {
      id: "base-separator",
      title: "Separator",
      description:
        "Use the `<InputOTPSeparator />` component to add a separator between input groups.",
      file: "base-input-otp-separator",
    },
    {
      id: "base-disabled",
      title: "Disabled",
      description: "Use the `disabled` prop to disable the input.",
      file: "base-input-otp-disabled",
    },
    {
      id: "base-controlled",
      title: "Controlled",
      description:
        "Use the `value` and `onChange` props to control the input value.",
      file: "base-input-otp-controlled",
    },
    {
      id: "base-invalid",
      title: "Invalid",
      description: "Use `aria-invalid` on the slots to show an error state.",
      file: "base-input-otp-invalid",
    },
    {
      id: "base-four-digits",
      title: "Four Digits",
      description:
        "A common pattern for PIN codes. This uses the `pattern={REGEXP_ONLY_DIGITS}` prop.",
      file: "base-input-otp-four-digits",
    },
    {
      id: "base-alphanumeric",
      title: "Alphanumeric",
      description:
        "Use `REGEXP_ONLY_DIGITS_AND_CHARS` to accept both letters and numbers.",
      file: "base-input-otp-alphanumeric",
    },
    {
      id: "base-form",
      title: "Form",
      description: "Use the OTP value with a labelled form and submit action; the app owns verification and errors.",
      file: "base-input-otp-form",
    },
    {
      id: "base-rtl",
      title: "RTL",
      description:
        "Switch between English, Arabic and Hebrew. Direction is provided to the controls and their portals.",
      file: "base-input-otp-rtl",
    },
  ],
  input: [
    {
      id: "base-demo",
      title: "Overview example",
      description: "",
      file: "base-input-demo",
    },
    {
      id: "base-basic",
      title: "Basic",
      description: "Use a native input type with an associated label and an appropriate placeholder.",
      file: "base-input-basic",
    },
    {
      id: "base-field",
      title: "Field",
      description:
        "Use `Field`, `FieldLabel`, and `FieldDescription` to create an input with a\nlabel and description.",
      file: "base-input-field",
    },
    {
      id: "base-fieldgroup",
      title: "Field Group",
      description:
        "Use `FieldGroup` to show multiple `Field` blocks and to build forms.",
      file: "base-input-fieldgroup",
    },
    {
      id: "base-disabled",
      title: "Disabled",
      description:
        "Use the `disabled` prop to disable the input. To style the disabled state, add the `data-disabled` attribute to the `Field` component.",
      file: "base-input-disabled",
    },
    {
      id: "base-invalid",
      title: "Invalid",
      description:
        "Use the `aria-invalid` prop to mark the input as invalid. To style the invalid state, add the `data-invalid` attribute to the `Field` component.",
      file: "base-input-invalid",
    },
    {
      id: "base-file",
      title: "File",
      description: 'Use the `type="file"` prop to create a file input.',
      file: "base-input-file",
    },
    {
      id: "base-inline",
      title: "Inline",
      description:
        'Use `Field` with `orientation="horizontal"` to create an inline input.\nPair with `Button` to create a search input with a button.',
      file: "base-input-inline",
    },
    {
      id: "base-grid",
      title: "Grid",
      description: "Use a grid layout to place multiple inputs side by side.",
      file: "base-input-grid",
    },
    {
      id: "base-required",
      title: "Required",
      description: "Use the `required` attribute to indicate required inputs.",
      file: "base-input-required",
    },
    {
      id: "base-badge",
      title: "Badge",
      description: "Use `Badge` in the label to highlight a recommended field.",
      file: "base-input-badge",
    },
    {
      id: "base-input-group",
      title: "Input Group",
      description:
        "To add icons, text, or buttons inside an input, use the `InputGroup` component. See the [Input Group](/components/input-group) component for more examples.",
      file: "base-input-input-group",
    },
    {
      id: "base-button-group",
      title: "Button Group",
      description:
        "To add buttons to an input, use the `ButtonGroup` component. See the [Button Group](/components/button-group) component for more examples.",
      file: "base-input-button-group",
    },
    {
      id: "base-form",
      title: "Form",
      description:
        "A full form example with multiple inputs, a select, and a button.",
      file: "base-input-form",
    },
    {
      id: "base-rtl",
      title: "RTL",
      description:
        "Switch between English, Arabic and Hebrew. Direction is provided to the controls and their portals.",
      file: "base-input-rtl",
    },
  ],
  item: [
    {
      id: "base-demo",
      title: "Overview example",
      description: "",
      file: "base-item-demo",
    },
    {
      id: "base-variant",
      title: "Variant",
      description:
        "Use the `variant` prop to change the visual style of the item.",
      file: "base-item-variant",
    },
    {
      id: "base-size",
      title: "Size",
      description:
        "Use the `size` prop to change the size of the item. Available sizes are `default`, `sm`, and `xs`.",
      file: "base-item-size",
    },
    {
      id: "base-icon",
      title: "Icon",
      description: 'Use `ItemMedia` with `variant="icon"` to display an icon.',
      file: "base-item-icon",
    },
    {
      id: "base-avatar",
      title: "Avatar",
      description:
        'You can use `ItemMedia` with `variant="avatar"` to display an avatar.',
      file: "base-item-avatar",
    },
    {
      id: "base-image",
      title: "Image",
      description:
        'Use `ItemMedia` with `variant="image"` to display an image.',
      file: "base-item-image",
    },
    {
      id: "base-group",
      title: "Group",
      description: "Use `ItemGroup` to group related items together.",
      file: "base-item-group",
    },
    {
      id: "base-header",
      title: "Header",
      description: "Use `ItemHeader` to add a header above the item content.",
      file: "base-item-header",
    },
    {
      id: "base-link",
      title: "Link",
      description:
        "Use the `render` prop to render the item as a link. The hover and focus states will be applied to the anchor element.",
      file: "base-item-link",
    },
    {
      id: "base-dropdown",
      title: "Dropdown",
      description: "Place the dropdown trigger in ItemActions so its interaction stays separate from the content.",
      file: "base-item-dropdown",
    },
    {
      id: "base-rtl",
      title: "RTL",
      description:
        "Switch between English, Arabic and Hebrew. Direction is provided to the controls and their portals.",
      file: "base-item-rtl",
    },
  ],
  kbd: [
    {
      id: "base-demo",
      title: "Overview example",
      description: "",
      file: "base-kbd-demo",
    },
    {
      id: "base-group",
      title: "Group",
      description:
        "Use the `KbdGroup` component to group keyboard keys together.",
      file: "base-kbd-group",
    },
    {
      id: "base-button",
      title: "Button",
      description:
        "Use the `Kbd` component inside a `Button` component to display a keyboard key inside a button.",
      file: "base-kbd-button",
    },
    {
      id: "base-tooltip",
      title: "Tooltip",
      description:
        "You can use the `Kbd` component inside a `Tooltip` component to display a tooltip with a keyboard key.",
      file: "base-kbd-tooltip",
    },
    {
      id: "base-input-group",
      title: "Input Group",
      description:
        "You can use the `Kbd` component inside a `InputGroupAddon` component to display a keyboard key inside an input group.",
      file: "base-kbd-input-group",
    },
    {
      id: "base-rtl",
      title: "RTL",
      description:
        "Switch between English, Arabic and Hebrew. Direction is provided to the controls and their portals.",
      file: "base-kbd-rtl",
    },
  ],
  label: [
    {
      id: "base-demo",
      title: "Overview example",
      description: "",
      file: "base-label-demo",
    },
    {
      id: "base-field-demo",
      title: "Label in Field",
      description:
        "For form fields, use the [Field](/components/field) component which\nincludes built-in `FieldLabel`, `FieldDescription`, and `FieldError` components.",
      file: "base-field-demo",
    },
    {
      id: "base-rtl",
      title: "RTL",
      description:
        "Switch between English, Arabic and Hebrew. Direction is provided to the controls and their portals.",
      file: "base-label-rtl",
    },
  ],
  marker: [
    {
      id: "base-demo",
      title: "Overview example",
      description: "",
      file: "base-marker-demo",
    },
    {
      id: "base-variants",
      title: "Variants",
      description:
        "Use default for an inline marker, border for a separated status row, or separator for a labelled divider.",
      file: "base-marker-variants",
    },
    {
      id: "base-status",
      title: "Status",
      description:
        'Set `role="status"` and include a [`Spinner`](/components/spinner) for streaming or in-progress markers so updates are announced.',
      file: "base-marker-status",
    },
    {
      id: "base-shimmer",
      title: "Shimmer",
      description:
        "This example uses Motion with reduced-motion support for streaming emphasis. Copy the example source; no shimmer CSS utility or separate package is required.",
      file: "base-marker-shimmer",
    },
    {
      id: "base-separator",
      title: "Separator",
      description:
        "Use the `separator` variant for labeled dividers, such as dates or section breaks, in a conversation.",
      file: "base-marker-separator",
    },
    {
      id: "base-border",
      title: "Border",
      description:
        "Use the `border` variant for status rows that should keep the default marker alignment while separating the next row.",
      file: "base-marker-border",
    },
    {
      id: "base-icon",
      title: "With Icon",
      description:
        "Use `MarkerIcon` to render an icon alongside the content. Use `flex-col` to stack the icon above the content.",
      file: "base-marker-icon",
    },
    {
      id: "base-link-button",
      title: "Links and Buttons",
      description:
        "Turn a marker into a link or button with the `render` prop on `Marker`.",
      file: "base-marker-link-button",
    },
  ],
  menubar: [
    {
      id: "base-demo",
      title: "Overview example",
      description: "",
      file: "base-menubar-demo",
    },
    {
      id: "base-checkbox",
      title: "Checkbox",
      description: "Use `MenubarCheckboxItem` for toggleable options.",
      file: "base-menubar-checkbox",
    },
    {
      id: "base-radio",
      title: "Radio",
      description:
        "Use `MenubarRadioGroup` and `MenubarRadioItem` for single-select options.",
      file: "base-menubar-radio",
    },
    {
      id: "base-submenu",
      title: "Submenu",
      description:
        "Use `MenubarSub`, `MenubarSubTrigger`, and `MenubarSubContent` for nested menus.",
      file: "base-menubar-submenu",
    },
    {
      id: "base-icons",
      title: "With Icons",
      description: "Add decorative icons beside menu labels while retaining text names and keyboard navigation.",
      file: "base-menubar-icons",
    },
    {
      id: "base-rtl",
      title: "RTL",
      description:
        "Switch between English, Arabic and Hebrew. Direction is provided to the controls and their portals.",
      file: "base-menubar-rtl",
    },
  ],
  "message-scroller": [
    {
      id: "base-demo",
      title: "Overview example",
      description:
        " The chat transport is a local scripted demo; connect your own service in an application.",
      file: "base-message-scroller-demo",
    },
    {
      id: "base-anchoring",
      title: "Anchoring turns",
      description:
        "Set scrollAnchor on the row that starts a turn. Stable messageId values identify rows as messages arrive. Transport in these examples is a local scripted demo; connect your own service in the app.",
      file: "base-message-scroller-anchoring",
    },
    {
      id: "base-group-chat",
      title: "Group conversations",
      description:
        "Compose mixed participants and system rows in one transcript. Anchoring is independent of the sender role. Transport in these examples is a local scripted demo; connect your own service in the app.",
      file: "base-message-scroller-group-chat",
    },
    {
      id: "base-previous-context",
      title: "Previous context",
      description:
        "Keep a peek of the previous turn above the current scroll anchor for context. Transport in these examples is a local scripted demo; connect your own service in the app.",
      file: "base-message-scroller-previous-context",
    },
    {
      id: "base-streaming",
      title: "Streaming updates",
      description:
        "Append streamed content to the current row; follow output when the reader is at the end and preserve their position when they scroll away. Transport in these examples is a local scripted demo; connect your own service in the app.",
      file: "base-message-scroller-streaming",
    },
    {
      id: "base-opening-position",
      title: "Opening position",
      description:
        "Choose the initial transcript position without changing subsequent reader-controlled scrolling. Transport in these examples is a local scripted demo; connect your own service in the app.",
      file: "base-message-scroller-opening-position",
    },
    {
      id: "base-load-history",
      title: "Prepend history",
      description:
        "Prepend older rows with stable message IDs and preserve the visible row and its offset. Transport in these examples is a local scripted demo; connect your own service in the app.",
      file: "base-message-scroller-load-history",
    },
    {
      id: "base-animation",
      title: "Animated rows",
      description:
        "Compose Motion with transcript rows while keeping measurements and scroll state in MessageScroller. Reduced motion remains supported. Transport in these examples is a local scripted demo; connect your own service in the app.",
      file: "base-message-scroller-animation",
    },
    {
      id: "base-commands",
      title: "Scroll commands",
      description:
        "Use the provider’s scroll commands to jump to a row or transcript boundary. Transport in these examples is a local scripted demo; connect your own service in the app.",
      file: "base-message-scroller-commands",
    },
    {
      id: "base-visibility",
      title: "Row visibility",
      description:
        "Read visibility callbacks to observe transcript rows without changing the content or transport. Transport in these examples is a local scripted demo; connect your own service in the app.",
      file: "base-message-scroller-visibility",
    },
    {
      id: "base-scrollable",
      title: "Nested scrollable content",
      description:
        "Keep code and other wide content internally scrollable while the transcript retains its vertical scroll region. Transport in these examples is a local scripted demo; connect your own service in the app.",
      file: "base-message-scroller-scrollable",
    },
  ],
  message: [
    {
      id: "base-demo",
      title: "Overview example",
      description: "",
      file: "base-message-demo",
    },
    {
      id: "base-avatar",
      title: "Avatar",
      description:
        'Use MessageAvatar next to the message. Set align="start" or align="end" on Message to align the entire row.',
      file: "base-message-avatar",
    },
    {
      id: "base-group",
      title: "Group",
      description:
        "Use `MessageGroup` to stack consecutive messages from the same sender. Render an empty `MessageAvatar` on the earlier messages to keep them aligned with the avatar on the last one.",
      file: "base-message-group",
    },
    {
      id: "base-header-footer",
      title: "Header and Footer",
      description:
        "Use `MessageHeader` for a sender name and `MessageFooter` for metadata such as a delivery or read status.",
      file: "base-message-header-footer",
    },
    {
      id: "base-actions",
      title: "Actions",
      description:
        "Place message-level actions in `MessageFooter`, such as copy, retry, or feedback buttons.",
      file: "base-message-actions",
    },
    {
      id: "base-attachment",
      title: "Attachment",
      description: "Compose Attachment inside a Message; the app supplies file data and file actions.",
      file: "base-message-attachment",
    },
  ],
  "navigation-menu": [
    {
      id: "base-demo",
      title: "Overview example",
      description: "",
      file: "base-navigation-menu-demo",
    },
    {
      id: "base-rtl",
      title: "RTL",
      description:
        "Switch between English, Arabic and Hebrew. Direction is provided to the controls and their portals.",
      file: "base-navigation-menu-rtl",
    },
  ],
  pagination: [
    {
      id: "base-demo",
      title: "Overview example",
      description: "",
      file: "base-pagination-demo",
    },
    {
      id: "base-simple",
      title: "Simple",
      description: "A simple pagination with only page numbers.",
      file: "base-pagination-simple",
    },
    {
      id: "base-icons-only",
      title: "Icons Only",
      description:
        "Use just the previous and next buttons without page numbers. This is useful for data tables with a rows per page selector.",
      file: "base-pagination-icons-only",
    },
    {
      id: "base-rtl",
      title: "RTL",
      description:
        "Switch between English, Arabic and Hebrew. Direction is provided to the controls and their portals.",
      file: "base-pagination-rtl",
    },
  ],
  popover: [
    {
      id: "base-demo",
      title: "Overview example",
      description: "",
      file: "base-popover-demo",
    },
    {
      id: "base-basic",
      title: "Basic",
      description: "A simple popover with a header, title, and description.",
      file: "base-popover-basic",
    },
    {
      id: "base-alignments",
      title: "Align",
      description:
        "Use the `align` prop on `PopoverContent` to control the horizontal alignment.",
      file: "base-popover-alignments",
    },
    {
      id: "base-form",
      title: "With Form",
      description: "A popover with form fields inside.",
      file: "base-popover-form",
    },
    {
      id: "base-rtl",
      title: "RTL",
      description:
        "Switch between English, Arabic and Hebrew. Direction is provided to the controls and their portals.",
      file: "base-popover-rtl",
    },
  ],
  progress: [
    {
      id: "base-demo",
      title: "Overview example",
      description: "",
      file: "base-progress-demo",
    },
    {
      id: "base-label",
      title: "Label",
      description:
        "Use `ProgressLabel` and `ProgressValue` to add a label and value display.",
      file: "base-progress-label",
    },
    {
      id: "base-controlled",
      title: "Controlled",
      description: "A progress bar that can be controlled by a slider.",
      file: "base-progress-controlled",
    },
    {
      id: "base-rtl",
      title: "RTL",
      description:
        "Switch between English, Arabic and Hebrew. Direction is provided to the controls and their portals.",
      file: "base-progress-rtl",
    },
  ],
  questionnaire: [
    {
      id: "base-demo",
      title: "Overview example",
      description: "",
      file: "base-questionnaire-demo",
    },
    {
      id: "base-multiple",
      title: "Multiple Selection",
      description:
        "Use `multiple` for an item that accepts more than one fixed answer.",
      file: "base-questionnaire-multiple",
    },
    {
      id: "base-freeform",
      title: "Freeform Answer",
      description:
        "Compose `QuestionnaireInput` with fixed choices when the user can provide another answer.",
      file: "base-questionnaire-freeform",
    },
    {
      id: "base-skip",
      title: "Explicit Skip",
      description:
        "Add `QuestionnaireSkip` when an optional item may be intentionally left unanswered.",
      file: "base-questionnaire-skip",
    },
    {
      id: "base-shortcuts",
      title: "Shortcuts",
      description:
        "Assign a letter or number key to each answer with `shortcuts`.",
      file: "base-questionnaire-shortcuts",
    },
    {
      id: "base-validation",
      title: "Custom Validation",
      description:
        "Combine controlled navigation with an external schema such as Zod to return to an invalid item and present its error.",
      file: "base-questionnaire-validation",
    },
    {
      id: "base-controlled",
      title: "Controlled",
      description:
        "Control the active item from host state, such as returning to an invalid step.",
      file: "base-questionnaire-controlled",
    },
    {
      id: "base-resume",
      title: "Resume",
      description:
        "Restore a saved active item and default answers, then reset changes back to that saved state.",
      file: "base-questionnaire-resume",
    },
    {
      id: "base-conditional",
      title: "Conditional Items",
      description:
        "Disable items that do not apply to the user's earlier answers.",
      file: "base-questionnaire-conditional",
    },
    {
      id: "base-navigation-state",
      title: "Navigation State",
      description:
        "Read item status to opt into disabled navigation and custom action styling.",
      file: "base-questionnaire-navigation-state",
    },
    {
      id: "base-progress",
      title: "Custom Progress",
      description:
        "Use the Progress render state to build a custom progress indicator.",
      file: "base-questionnaire-progress",
    },
    {
      id: "base-animated",
      title: "Animated Items",
      description:
        "Animate the active item while keeping progress and navigation stationary.",
      file: "base-questionnaire-animated",
    },
    {
      id: "base-card",
      title: "Card",
      description:
        "Compose Questionnaire with Card slots while keeping the question title and description semantic.",
      file: "base-questionnaire-card",
    },
    {
      id: "base-dialog",
      title: "Dialog",
      description:
        "Compose Questionnaire inside a Dialog while keeping cancellation and dismissal host-owned.",
      file: "base-questionnaire-dialog",
    },
  ],
  "radio-group": [
    {
      id: "base-demo",
      title: "Overview example",
      description: "",
      file: "base-radio-group-demo",
    },
    {
      id: "base-description",
      title: "Description",
      description:
        "Radio group items with a description using the `Field` component.",
      file: "base-radio-group-description",
    },
    {
      id: "base-choice-card",
      title: "Choice Card",
      description:
        "Use `FieldLabel` to wrap the entire `Field` for a clickable card-style selection.",
      file: "base-radio-group-choice-card",
    },
    {
      id: "base-fieldset",
      title: "Fieldset",
      description:
        "Use `FieldSet` and `FieldLegend` to group radio items with a label and description.",
      file: "base-radio-group-fieldset",
    },
    {
      id: "base-disabled",
      title: "Disabled",
      description:
        "Use the `disabled` prop on `RadioGroup` to disable all items.",
      file: "base-radio-group-disabled",
    },
    {
      id: "base-invalid",
      title: "Invalid",
      description:
        "Use `aria-invalid` on `RadioGroupItem` and `data-invalid` on `Field` to show validation errors.",
      file: "base-radio-group-invalid",
    },
    {
      id: "base-rtl",
      title: "RTL",
      description:
        "Switch between English, Arabic and Hebrew. Direction is provided to the controls and their portals.",
      file: "base-radio-group-rtl",
    },
  ],
  resizable: [
    {
      id: "base-demo",
      title: "Overview example",
      description: "",
      file: "base-resizable-demo",
    },
    {
      id: "base-vertical",
      title: "Vertical",
      description: 'Use `orientation="vertical"` for vertical resizing.',
      file: "base-resizable-vertical",
    },
    {
      id: "base-handle",
      title: "Handle",
      description:
        "Use the `withHandle` prop on `ResizableHandle` to show a visible handle.",
      file: "base-resizable-handle",
    },
    {
      id: "base-rtl",
      title: "RTL",
      description:
        "Switch between English, Arabic and Hebrew. Direction is provided to the controls and their portals.",
      file: "base-resizable-rtl",
    },
  ],
  "scroll-area": [
    {
      id: "base-demo",
      title: "Overview example",
      description: "",
      file: "base-scroll-area-demo",
    },
    {
      id: "base-horizontal-demo",
      title: "Horizontal",
      description:
        'Use `ScrollBar` with `orientation="horizontal"` for horizontal scrolling.',
      file: "base-scroll-area-horizontal-demo",
    },
    {
      id: "base-rtl",
      title: "RTL",
      description:
        "Switch between English, Arabic and Hebrew. Direction is provided to the controls and their portals.",
      file: "base-scroll-area-rtl",
    },
  ],
  select: [
    {
      id: "base-demo",
      title: "Overview example",
      description: "",
      file: "base-select-demo",
    },
    {
      id: "base-align-item",
      title: "Align Item With Trigger",
      description:
        "Use `alignItemWithTrigger` on `SelectContent` to control whether the selected item aligns with the trigger. When `true` (default), the popup positions so the selected item appears over the trigger. When `false`, the popup aligns to the trigger edge.",
      file: "base-select-align-item",
    },
    {
      id: "base-groups",
      title: "Groups",
      description:
        "Use `SelectGroup`, `SelectLabel`, and `SelectSeparator` to organize items.",
      file: "base-select-groups",
    },
    {
      id: "base-scrollable",
      title: "Scrollable",
      description: "A select with many items that scrolls.",
      file: "base-select-scrollable",
    },
    {
      id: "base-disabled",
      title: "Disabled",
      description: "Set disabled on Select to prevent interaction while preserving the displayed value.",
      file: "base-select-disabled",
    },
    {
      id: "base-invalid",
      title: "Invalid",
      description:
        "Add the `data-invalid` attribute to the `Field` component and the `aria-invalid` attribute to the `SelectTrigger` component to show an error state.",
      file: "base-select-invalid",
    },
    {
      id: "base-rtl",
      title: "RTL",
      description:
        "Switch between English, Arabic and Hebrew. Direction is provided to the controls and their portals.",
      file: "base-select-rtl",
    },
  ],
  separator: [
    {
      id: "base-demo",
      title: "Overview example",
      description: "",
      file: "base-separator-demo",
    },
    {
      id: "base-vertical",
      title: "Vertical",
      description: 'Use `orientation="vertical"` for a vertical separator.',
      file: "base-separator-vertical",
    },
    {
      id: "base-menu",
      title: "Menu",
      description: "Vertical separators between menu items with descriptions.",
      file: "base-separator-menu",
    },
    {
      id: "base-list",
      title: "List",
      description: "Horizontal separators between list items.",
      file: "base-separator-list",
    },
    {
      id: "base-rtl",
      title: "RTL",
      description:
        "Switch between English, Arabic and Hebrew. Direction is provided to the controls and their portals.",
      file: "base-separator-rtl",
    },
  ],
  sheet: [
    {
      id: "base-demo",
      title: "Overview example",
      description: "",
      file: "base-sheet-demo",
    },
    {
      id: "base-side",
      title: "Side",
      description:
        "Use the `side` prop on `SheetContent` to set the edge of the screen where the sheet appears. Values are `top`, `right`, `bottom`, or `left`.",
      file: "base-sheet-side",
    },
    {
      id: "base-no-close-button",
      title: "No Close Button",
      description:
        "Use `showCloseButton={false}` on `SheetContent` to hide the close button.",
      file: "base-sheet-no-close-button",
    },
    {
      id: "base-rtl",
      title: "RTL",
      description:
        "Switch between English, Arabic and Hebrew. Direction is provided to the controls and their portals.",
      file: "base-sheet-rtl",
    },
  ],
  sidebar: [
    {
      id: "base-demo",
      title: "Overview example",
      description: "",
      file: "base-sidebar-demo",
    },
  ],
  skeleton: [
    {
      id: "base-demo",
      title: "Overview example",
      description: "",
      file: "base-skeleton-demo",
    },
    {
      id: "base-avatar",
      title: "Avatar",
      description: "Match a loading placeholder to the avatar and nearby text layout.",
      file: "base-skeleton-avatar",
    },
    {
      id: "base-card",
      title: "Card",
      description: "Reserve the image, title and body layout while card content loads.",
      file: "base-skeleton-card",
    },
    {
      id: "base-text",
      title: "Text",
      description: "Use varied line widths to represent loading text without announcing each placeholder.",
      file: "base-skeleton-text",
    },
    {
      id: "base-form",
      title: "Form",
      description: "Reserve label and control space while the form loads.",
      file: "base-skeleton-form",
    },
    {
      id: "base-table",
      title: "Table",
      description: "Reserve rows and columns while table data loads.",
      file: "base-skeleton-table",
    },
    {
      id: "base-rtl",
      title: "RTL",
      description:
        "Switch between English, Arabic and Hebrew. Direction is provided to the controls and their portals.",
      file: "base-skeleton-rtl",
    },
  ],
  slider: [
    {
      id: "base-demo",
      title: "Overview example",
      description: "",
      file: "base-slider-demo",
    },
    {
      id: "base-range",
      title: "Range",
      description: "Use an array with two values for a range slider.",
      file: "base-slider-range",
    },
    {
      id: "base-multiple",
      title: "Multiple Thumbs",
      description: "Use an array with multiple values for multiple thumbs.",
      file: "base-slider-multiple",
    },
    {
      id: "base-vertical",
      title: "Vertical",
      description: 'Use `orientation="vertical"` for a vertical slider.',
      file: "base-slider-vertical",
    },
    {
      id: "base-controlled",
      title: "Controlled",
      description: "Control value and onValueChange from app state; show the current numeric value beside the slider.",
      file: "base-slider-controlled",
    },
    {
      id: "base-disabled",
      title: "Disabled",
      description: "Use the `disabled` prop to disable the slider.",
      file: "base-slider-disabled",
    },
    {
      id: "base-rtl",
      title: "RTL",
      description:
        "Switch between English, Arabic and Hebrew. Direction is provided to the controls and their portals.",
      file: "base-slider-rtl",
    },
  ],
  spinner: [
    {
      id: "base-demo",
      title: "Overview example",
      description: "",
      file: "base-spinner-demo",
    },
    {
      id: "base-custom",
      title: "Customization",
      description:
        "You can replace the default spinner icon with any other icon by editing the `Spinner` component.",
      file: "base-spinner-custom",
    },
    {
      id: "base-size",
      title: "Size",
      description:
        "Use the `size-*` utility class to change the size of the spinner.",
      file: "base-spinner-size",
    },
    {
      id: "base-button",
      title: "Button",
      description:
        'Add a spinner to a button to indicate a loading state. Place the `<Spinner />` before the label with `data-icon="inline-start"` for a start position, or after the label with `data-icon="inline-end"` for an end position.',
      file: "base-spinner-button",
    },
    {
      id: "base-badge",
      title: "Badge",
      description:
        'Add a spinner to a badge to indicate a loading state. Place the `<Spinner />` before the label with `data-icon="inline-start"` for a start position, or after the label with `data-icon="inline-end"` for an end position.',
      file: "base-spinner-badge",
    },
    {
      id: "base-input-group",
      title: "Input Group",
      description: "Place Spinner in an input addon while the input action is processing.",
      file: "base-spinner-input-group",
    },
    {
      id: "base-empty",
      title: "Empty",
      description: "Compose Spinner with an empty/loading surface and a readable status message.",
      file: "base-spinner-empty",
    },
    {
      id: "base-rtl",
      title: "RTL",
      description:
        "Switch between English, Arabic and Hebrew. Direction is provided to the controls and their portals.",
      file: "base-spinner-rtl",
    },
  ],
  switch: [
    {
      id: "base-demo",
      title: "Overview example",
      description: "",
      file: "base-switch-demo",
    },
    {
      id: "base-description",
      title: "Description",
      description: "Use FieldContent to group the switch label and supporting description.",
      file: "base-switch-description",
    },
    {
      id: "base-choice-card",
      title: "Choice Card",
      description:
        "Card-style selection where `FieldLabel` wraps the entire `Field` for a clickable card pattern.",
      file: "base-switch-choice-card",
    },
    {
      id: "base-disabled",
      title: "Disabled",
      description:
        "Add the `disabled` prop to the `Switch` component to disable the switch. Add the `data-disabled` prop to the `Field` component for styling.",
      file: "base-switch-disabled",
    },
    {
      id: "base-invalid",
      title: "Invalid",
      description:
        "Add the `aria-invalid` prop to the `Switch` component to indicate an invalid state. Add the `data-invalid` prop to the `Field` component for styling.",
      file: "base-switch-invalid",
    },
    {
      id: "base-sizes",
      title: "Size",
      description: "Use the `size` prop to change the size of the switch.",
      file: "base-switch-sizes",
    },
    {
      id: "base-rtl",
      title: "RTL",
      description:
        "Switch between English, Arabic and Hebrew. Direction is provided to the controls and their portals.",
      file: "base-switch-rtl",
    },
  ],
  table: [
    {
      id: "base-demo",
      title: "Overview example",
      description: "",
      file: "base-table-demo",
    },
    {
      id: "base-footer",
      title: "Footer",
      description: "Use the `<TableFooter />` component to add a footer to the table.",
      file: "base-table-footer",
    },
    {
      id: "base-actions",
      title: "Actions",
      description: "A table showing actions for each row using a `<DropdownMenu />` component.",
      file: "base-table-actions",
    },
    {
      id: "base-rtl",
      title: "RTL",
      description:
        "Switch between English, Arabic and Hebrew. Direction is provided to the controls and their portals.",
      file: "base-table-rtl",
    },
  ],
  tabs: [
    {
      id: "base-demo",
      title: "Overview example",
      description: "",
      file: "base-tabs-demo",
    },
    {
      id: "base-line",
      title: "Line",
      description:
        'Use the `variant="line"` prop on `TabsList` for a line style.',
      file: "base-tabs-line",
    },
    {
      id: "base-vertical",
      title: "Vertical",
      description: 'Use `orientation="vertical"` for vertical tabs.',
      file: "base-tabs-vertical",
    },
    {
      id: "base-disabled",
      title: "Disabled",
      description: "Set disabled on an individual TabsTrigger so it cannot be selected.",
      file: "base-tabs-disabled",
    },
    {
      id: "base-icons",
      title: "Icons",
      description: "Add decorative icons to named tab triggers; keep the visible text label.",
      file: "base-tabs-icons",
    },
    {
      id: "base-rtl",
      title: "RTL",
      description:
        "Switch between English, Arabic and Hebrew. Direction is provided to the controls and their portals.",
      file: "base-tabs-rtl",
    },
  ],
  textarea: [
    {
      id: "base-demo",
      title: "Overview example",
      description: "",
      file: "base-textarea-demo",
    },
    {
      id: "base-field",
      title: "Field",
      description:
        "Use `Field`, `FieldLabel`, and `FieldDescription` to create a textarea with a label and description.",
      file: "base-textarea-field",
    },
    {
      id: "base-disabled",
      title: "Disabled",
      description:
        "Use the `disabled` prop to disable the textarea. To style the disabled state, add the `data-disabled` attribute to the `Field` component.",
      file: "base-textarea-disabled",
    },
    {
      id: "base-invalid",
      title: "Invalid",
      description:
        "Use the `aria-invalid` prop to mark the textarea as invalid. To style the invalid state, add the `data-invalid` attribute to the `Field` component.",
      file: "base-textarea-invalid",
    },
    {
      id: "base-button",
      title: "Button",
      description:
        "Pair with `Button` to create a textarea with a submit button.",
      file: "base-textarea-button",
    },
    {
      id: "base-rtl",
      title: "RTL",
      description:
        "Switch between English, Arabic and Hebrew. Direction is provided to the controls and their portals.",
      file: "base-textarea-rtl",
    },
  ],
  toast: [
    {
      id: "base-demo",
      title: "Overview example",
      description: "",
      file: "base-toast-demo",
    },
    {
      id: "base-types",
      title: "Types",
      description:
        "Set the `type` option to render a status icon. The built-in renderer recognizes\n`success`, `info`, `warning`, `error`, and `loading`.",
      file: "base-toast-types",
    },
    {
      id: "base-promise",
      title: "Promise",
      description:
        "Use `toast.promise` to update one toast as an asynchronous task moves through\nloading, success, and error states.",
      file: "base-toast-promise",
    },
  ],
  "toggle-group": [
    {
      id: "base-demo",
      title: "Overview example",
      description: "",
      file: "base-toggle-group-demo",
    },
    {
      id: "base-outline",
      title: "Outline",
      description: 'Use `variant="outline"` for an outline style.',
      file: "base-toggle-group-outline",
    },
    {
      id: "base-sizes",
      title: "Size",
      description:
        "Use the `size` prop to change the size of the toggle group.",
      file: "base-toggle-group-sizes",
    },
    {
      id: "base-spacing",
      title: "Spacing",
      description: "Use `spacing` to add spacing between toggle group items.",
      file: "base-toggle-group-spacing",
    },
    {
      id: "base-vertical",
      title: "Vertical",
      description: 'Use `orientation="vertical"` for vertical toggle groups.',
      file: "base-toggle-group-vertical",
    },
    {
      id: "base-disabled",
      title: "Disabled",
      description: "Disable the group or an individual item while retaining the current selection.",
      file: "base-toggle-group-disabled",
    },
    {
      id: "base-font-weight-selector",
      title: "Custom",
      description: "A custom toggle group example.",
      file: "base-toggle-group-font-weight-selector",
    },
    {
      id: "base-rtl",
      title: "RTL",
      description:
        "Switch between English, Arabic and Hebrew. Direction is provided to the controls and their portals.",
      file: "base-toggle-group-rtl",
    },
  ],
  toggle: [
    {
      id: "base-demo",
      title: "Overview example",
      description: "",
      file: "base-toggle-demo",
    },
    {
      id: "base-outline",
      title: "Outline",
      description: 'Use `variant="outline"` for an outline style.',
      file: "base-toggle-outline",
    },
    {
      id: "base-text",
      title: "With Text",
      description: "Combine an icon and text in a toggle with an accessible pressed state.",
      file: "base-toggle-text",
    },
    {
      id: "base-sizes",
      title: "Size",
      description: "Use the `size` prop to change the size of the toggle.",
      file: "base-toggle-sizes",
    },
    {
      id: "base-disabled",
      title: "Disabled",
      description: "Set disabled to prevent the toggle state from changing.",
      file: "base-toggle-disabled",
    },
    {
      id: "base-rtl",
      title: "RTL",
      description:
        "Switch between English, Arabic and Hebrew. Direction is provided to the controls and their portals.",
      file: "base-toggle-rtl",
    },
  ],
  tooltip: [
    {
      id: "base-demo",
      title: "Overview example",
      description: "",
      file: "base-tooltip-demo",
    },
    {
      id: "base-sides",
      title: "Side",
      description: "Use the `side` prop to change the position of the tooltip.",
      file: "base-tooltip-sides",
    },
    {
      id: "base-keyboard",
      title: "With Keyboard Shortcut",
      description: "Show a shortcut hint with Kbd in TooltipContent. The trigger must have its own accessible name.",
      file: "base-tooltip-keyboard",
    },
    {
      id: "base-disabled",
      title: "Disabled Button",
      description:
        "Show a tooltip on a disabled button by wrapping it with a span.",
      file: "base-tooltip-disabled",
    },
    {
      id: "base-rtl",
      title: "RTL",
      description:
        "Switch between English, Arabic and Hebrew. Direction is provided to the controls and their portals.",
      file: "base-tooltip-rtl",
    },
  ],
  typography: [
    {
      id: "base-demo",
      title: "Overview example",
      description: "",
      file: "base-typography-demo",
    },
    {
      id: "base-h1",
      title: "h1",
      description: "Use semantic <h1> with the appropriate typography utilities; choose headings by document hierarchy.",
      file: "base-typography-h1",
    },
    {
      id: "base-h2",
      title: "h2",
      description: "Use semantic <h2> with the appropriate typography utilities; choose headings by document hierarchy.",
      file: "base-typography-h2",
    },
    {
      id: "base-h3",
      title: "h3",
      description: "Use semantic <h3> with the appropriate typography utilities; choose headings by document hierarchy.",
      file: "base-typography-h3",
    },
    {
      id: "base-h4",
      title: "h4",
      description: "Use semantic <h4> with the appropriate typography utilities; choose headings by document hierarchy.",
      file: "base-typography-h4",
    },
    {
      id: "base-p",
      title: "p",
      description: "Use semantic <p> with the appropriate typography utilities; choose headings by document hierarchy.",
      file: "base-typography-p",
    },
    {
      id: "base-blockquote",
      title: "blockquote",
      description: "Use semantic <blockquote> with the appropriate typography utilities; choose headings by document hierarchy.",
      file: "base-typography-blockquote",
    },
    {
      id: "base-table",
      title: "table",
      description: "Use semantic <table> with the appropriate typography utilities; choose headings by document hierarchy.",
      file: "base-typography-table",
    },
    {
      id: "base-list",
      title: "list",
      description: "Use semantic list elements with the appropriate typography utilities; choose headings by document hierarchy.",
      file: "base-typography-list",
    },
    {
      id: "base-inline-code",
      title: "Inline code",
      description: "Use inline code utilities for emphasis while preserving the native element’s meaning.",
      file: "base-typography-inline-code",
    },
    {
      id: "base-lead",
      title: "Lead",
      description: "Use lead utilities for emphasis while preserving the native element’s meaning.",
      file: "base-typography-lead",
    },
    {
      id: "base-large",
      title: "Large",
      description: "Use large utilities for emphasis while preserving the native element’s meaning.",
      file: "base-typography-large",
    },
    {
      id: "base-small",
      title: "Small",
      description: "Use small utilities for emphasis while preserving the native element’s meaning.",
      file: "base-typography-small",
    },
    {
      id: "base-muted",
      title: "Muted",
      description: "Use muted utilities for emphasis while preserving the native element’s meaning.",
      file: "base-typography-muted",
    },
    {
      id: "base-rtl",
      title: "RTL",
      description:
        "Switch between English, Arabic and Hebrew. Direction is provided to the controls and their portals.",
      file: "base-typography-rtl",
    },
  ],
};
