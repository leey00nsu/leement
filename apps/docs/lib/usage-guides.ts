import type { UsageSection } from "../components/usage-guide";
// Adapted from the fixed shadcn Base docs (MIT), with Leement contracts.
export const usageGuides: Record<string, UsageSection[]> = {
  accordion: [
    {
      id: "guide-usage-1",
      title: "Usage",
      blocks: [
        {
          kind: "code",
          language: "tsx",
          value:
            'import {\n  Accordion,\n  AccordionContent,\n  AccordionItem,\n  AccordionTrigger,\n} from "@/components/ui/accordion"',
        },
        {
          kind: "code",
          language: "tsx",
          value:
            '<Accordion defaultValue={["item-1"]}>\n  <AccordionItem value="item-1">\n    <AccordionTrigger>Is it accessible?</AccordionTrigger>\n    <AccordionContent>\n      Yes. It adheres to the WAI-ARIA design pattern.\n    </AccordionContent>\n  </AccordionItem>\n</Accordion>',
        },
      ],
    },
    {
      id: "guide-composition-2",
      title: "Composition",
      blocks: [
        {
          kind: "text",
          value: "Use the following composition to build an `Accordion`:",
        },
        {
          kind: "code",
          language: "text",
          value:
            "Accordion\n\u251c\u2500\u2500 AccordionItem\n\u2502   \u251c\u2500\u2500 AccordionTrigger\n\u2502   \u2514\u2500\u2500 AccordionContent\n\u2514\u2500\u2500 AccordionItem\n    \u251c\u2500\u2500 AccordionTrigger\n    \u2514\u2500\u2500 AccordionContent",
        },
      ],
    },
    {
      id: "guide-basic-3",
      title: "Basic",
      blocks: [
        {
          kind: "text",
          value:
            "A basic accordion that shows one item at a time. The first item is open by default.",
        },
      ],
    },
    {
      id: "guide-multiple-4",
      title: "Multiple",
      blocks: [
        {
          kind: "text",
          value:
            "Use the `multiple` prop to allow multiple items to be open at the same time.",
        },
      ],
    },
    {
      id: "guide-disabled-5",
      title: "Disabled",
      blocks: [
        {
          kind: "text",
          value:
            "Use the `disabled` prop on `AccordionItem` to disable individual items.",
        },
      ],
    },
    {
      id: "guide-borders-6",
      title: "Borders",
      blocks: [
        {
          kind: "text",
          value:
            "Add `border` to the `Accordion` and `border-b last:border-b-0` to the `AccordionItem` to add borders to the items.",
        },
      ],
    },
    {
      id: "guide-card-7",
      title: "Card",
      blocks: [
        {
          kind: "text",
          value: "Wrap the `Accordion` in a `Card` component.",
        },
      ],
    },
  ],
  "alert-dialog": [
    {
      id: "guide-usage-1",
      title: "Usage",
      blocks: [
        {
          kind: "code",
          language: "tsx",
          value:
            'import {\n  AlertDialog,\n  AlertDialogAction,\n  AlertDialogCancel,\n  AlertDialogContent,\n  AlertDialogDescription,\n  AlertDialogFooter,\n  AlertDialogHeader,\n  AlertDialogTitle,\n  AlertDialogTrigger,\n} from "@/components/ui/alert-dialog"',
        },
        {
          kind: "code",
          language: "tsx",
          value:
            '<AlertDialog>\n  <AlertDialogTrigger render={<Button variant="outline" />}>\n    Show Dialog\n  </AlertDialogTrigger>\n  <AlertDialogContent>\n    <AlertDialogHeader>\n      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>\n      <AlertDialogDescription>\n        This action cannot be undone. This will permanently delete your account\n        from our servers.\n      </AlertDialogDescription>\n    </AlertDialogHeader>\n    <AlertDialogFooter>\n      <AlertDialogCancel>Cancel</AlertDialogCancel>\n      <AlertDialogAction>Continue</AlertDialogAction>\n    </AlertDialogFooter>\n  </AlertDialogContent>\n</AlertDialog>',
        },
      ],
    },
    {
      id: "guide-composition-2",
      title: "Composition",
      blocks: [
        {
          kind: "text",
          value: "Use the following composition to build an `AlertDialog`:",
        },
        {
          kind: "code",
          language: "text",
          value:
            "AlertDialog\n\u251c\u2500\u2500 AlertDialogTrigger\n\u2514\u2500\u2500 AlertDialogContent\n    \u251c\u2500\u2500 AlertDialogHeader\n    \u2502   \u251c\u2500\u2500 AlertDialogMedia\n    \u2502   \u251c\u2500\u2500 AlertDialogTitle\n    \u2502   \u2514\u2500\u2500 AlertDialogDescription\n    \u2514\u2500\u2500 AlertDialogFooter\n        \u251c\u2500\u2500 AlertDialogCancel\n        \u2514\u2500\u2500 AlertDialogAction",
        },
      ],
    },
    {
      id: "guide-basic-3",
      title: "Basic",
      blocks: [
        {
          kind: "text",
          value:
            "A basic alert dialog with a title, description, and cancel and continue buttons.",
        },
      ],
    },
    {
      id: "guide-small-4",
      title: "Small",
      blocks: [
        {
          kind: "text",
          value: 'Use the `size="sm"` prop to make the alert dialog smaller.',
        },
      ],
    },
    {
      id: "guide-media-5",
      title: "Media",
      blocks: [
        {
          kind: "text",
          value:
            "Use the `AlertDialogMedia` component to add a media element such as an icon or image to the alert dialog.",
        },
      ],
    },
    {
      id: "guide-small-with-media-6",
      title: "Small with Media",
      blocks: [
        {
          kind: "text",
          value:
            'Use the `size="sm"` prop to make the alert dialog smaller and the `AlertDialogMedia` component to add a media element such as an icon or image to the alert dialog.',
        },
      ],
    },
    {
      id: "guide-destructive-7",
      title: "Destructive",
      blocks: [
        {
          kind: "text",
          value:
            "Use the `AlertDialogAction` component to add a destructive action button to the alert dialog.",
        },
      ],
    },
  ],
  "status-notice": [
    {
      id: "guide-usage-1",
      title: "Usage",
      blocks: [
        {
          kind: "code",
          language: "tsx",
          value:
            'import {\n  Alert,\n  AlertAction,\n  AlertDescription,\n  AlertTitle,\n} from "@/components/ui/status-notice"',
        },
        {
          kind: "code",
          language: "tsx",
          value:
            '<Alert>\n  <InfoIcon />\n  <AlertTitle>Heads up!</AlertTitle>\n  <AlertDescription>\n    You can add components and dependencies to your app using the cli.\n  </AlertDescription>\n  <AlertAction>\n    <Button variant="outline">Enable</Button>\n  </AlertAction>\n</Alert>',
        },
      ],
    },
    {
      id: "guide-composition-2",
      title: "Composition",
      blocks: [
        {
          kind: "text",
          value: "Use the following composition to build an `Alert`:",
        },
        {
          kind: "code",
          language: "text",
          value:
            "Alert\n\u251c\u2500\u2500 Icon\n\u251c\u2500\u2500 AlertTitle\n\u251c\u2500\u2500 AlertDescription\n\u2514\u2500\u2500 AlertAction",
        },
      ],
    },
    {
      id: "guide-basic-3",
      title: "Basic",
      blocks: [
        {
          kind: "text",
          value: "A basic alert with an icon, title and description.",
        },
      ],
    },
    {
      id: "guide-destructive-4",
      title: "Destructive",
      blocks: [
        {
          kind: "text",
          value: 'Use `variant="destructive"` to create a destructive alert.',
        },
      ],
    },
    {
      id: "guide-action-5",
      title: "Action",
      blocks: [
        {
          kind: "text",
          value:
            "Use `AlertAction` to add a button or other action element to the alert.",
        },
      ],
    },
    {
      id: "guide-custom-colors-6",
      title: "Custom Colors",
      blocks: [
        {
          kind: "text",
          value:
            "You can customize the alert colors by adding custom classes such as `bg-amber-50 dark:bg-amber-950` to the `Alert` component.",
        },
      ],
    },
  ],
  "aspect-ratio": [
    {
      id: "guide-usage-1",
      title: "Usage",
      blocks: [
        {
          kind: "code",
          language: "tsx",
          value: 'import { AspectRatio } from "@/components/ui/aspect-ratio"',
        },
        {
          kind: "code",
          language: "tsx",
          value:
            '<AspectRatio ratio={16 / 9}>\n  <Image src="..." alt="Image" className="rounded-md object-cover" />\n</AspectRatio>',
        },
      ],
    },
    {
      id: "guide-square-2",
      title: "Square",
      blocks: [
        {
          kind: "text",
          value:
            "A square aspect ratio component using the `ratio={1 / 1}` prop. This is useful for displaying images in a square format.",
        },
      ],
    },
    {
      id: "guide-portrait-3",
      title: "Portrait",
      blocks: [
        {
          kind: "text",
          value:
            "A portrait aspect ratio component using the `ratio={9 / 16}` prop. This is useful for displaying images in a portrait format.",
        },
      ],
    },
  ],
  attachment: [
    {
      id: "guide-composition-notes-1",
      title: "Composition notes",
      blocks: [
        {
          kind: "text",
          value:
            "The `Attachment` component displays a file or image attachment, its media, name, and metadata, with optional actions and upload state. Use it for files and images in chat composers, message threads, and upload lists.",
        },
      ],
    },
    {
      id: "guide-usage-2",
      title: "Usage",
      blocks: [
        {
          kind: "code",
          language: "tsx",
          value:
            'import {\n  Attachment,\n  AttachmentAction,\n  AttachmentActions,\n  AttachmentContent,\n  AttachmentDescription,\n  AttachmentMedia,\n  AttachmentTitle,\n} from "@/components/ui/attachment"',
        },
        {
          kind: "code",
          language: "tsx",
          value:
            '<Attachment>\n  <AttachmentMedia>\n    <FileTextIcon />\n  </AttachmentMedia>\n  <AttachmentContent>\n    <AttachmentTitle>sales-dashboard.pdf</AttachmentTitle>\n    <AttachmentDescription>PDF \u00b7 2.4 MB</AttachmentDescription>\n  </AttachmentContent>\n  <AttachmentActions>\n    <AttachmentAction aria-label="Remove sales-dashboard.pdf">\n      <XIcon />\n    </AttachmentAction>\n  </AttachmentActions>\n</Attachment>',
        },
      ],
    },
    {
      id: "guide-composition-3",
      title: "Composition",
      blocks: [
        {
          kind: "text",
          value: "Use the following composition to build an attachment:",
        },
        {
          kind: "code",
          language: "text",
          value:
            "Attachment\n\u251c\u2500\u2500 AttachmentMedia\n\u251c\u2500\u2500 AttachmentContent\n\u2502   \u251c\u2500\u2500 AttachmentTitle\n\u2502   \u2514\u2500\u2500 AttachmentDescription\n\u251c\u2500\u2500 AttachmentActions\n\u2502   \u2514\u2500\u2500 AttachmentAction\n\u2514\u2500\u2500 AttachmentTrigger",
        },
        {
          kind: "text",
          value:
            "Use `AttachmentGroup` to lay out multiple attachments in a scrollable row:",
        },
        {
          kind: "code",
          language: "text",
          value:
            "AttachmentGroup\n\u251c\u2500\u2500 Attachment\n\u2514\u2500\u2500 Attachment",
        },
      ],
    },
    {
      id: "guide-features-4",
      title: "Features",
      blocks: [
        {
          kind: "text",
          value:
            "- Icon and image media through `AttachmentMedia`\n- Upload states: `idle`, `uploading`, `processing`, `error`, and `done` with built-in styling and a shimmer while in progress\n- Three sizes and horizontal or vertical orientation\n- A full-card `AttachmentTrigger` that opens a link or dialog while the actions stay independently clickable\n- Scrollable, snapping `AttachmentGroup` with an edge fade\n- Customizable styling through the `className` prop on every part",
        },
      ],
    },
    {
      id: "guide-image-5",
      title: "Image",
      blocks: [
        {
          kind: "text",
          value:
            'Set `variant="image"` on `AttachmentMedia` and render an `<img>` inside it. Use `orientation="vertical"` to stack the media above the content.',
        },
      ],
    },
    {
      id: "guide-states-6",
      title: "States",
      blocks: [
        {
          kind: "text",
          value:
            "Set `state` to reflect the upload lifecycle. `uploading` and `processing` shimmer the title, and `error` switches to a destructive treatment.",
        },
      ],
    },
    {
      id: "guide-sizes-7",
      title: "Sizes",
      blocks: [
        {
          kind: "text",
          value: "Use `size` to switch between `default`, `sm`, and `xs`.",
        },
      ],
    },
    {
      id: "guide-group-8",
      title: "Group",
      blocks: [
        {
          kind: "text",
          value:
            "Wrap attachments in `AttachmentGroup` to lay them out in a horizontally scrollable, snapping row with an edge fade.",
        },
      ],
    },
    {
      id: "guide-trigger-9",
      title: "Trigger",
      blocks: [
        {
          kind: "text",
          value:
            "Add an `AttachmentTrigger` to make the whole card open a link or dialog. It fills the card behind the actions, so the actions stay clickable.",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            '<Dialog>\n  <Attachment>\n    {/* media, content, actions */}\n    <DialogTrigger\n      render={<AttachmentTrigger aria-label="Preview research-summary.pdf" />}\n    />\n  </Attachment>\n  <DialogContent>{/* ... */}</DialogContent>\n</Dialog>',
        },
      ],
    },
    {
      id: "guide-accessibility-10",
      title: "Labels and keyboard",
      blocks: [
        {
          kind: "text",
          value:
            "`AttachmentAction` renders a `Button`, and `AttachmentTrigger` renders a real `<button>` (or your element via `render`). Follow the guidance below so both are operable and announced.\n\n### Label icon-only actions\n\n`AttachmentAction` is usually icon-only, so give each one an `aria-label` describing the action and its target.",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            '<AttachmentAction aria-label="Remove sales-dashboard.pdf">\n  <XIcon />\n</AttachmentAction>',
        },
        {
          kind: "text",
          value:
            "### Label the trigger\n\n`AttachmentTrigger` covers the card with no text of its own, so give it an `aria-label` for what activating it does.",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            '<AttachmentTrigger\n  render={\n    <a\n      href={url}\n      target="_blank"\n      rel="noreferrer"\n      aria-label="Open workspace.png"\n    />\n  }\n/>',
        },
        {
          kind: "text",
          value:
            'The trigger sits behind the actions in the stacking order, so an `AttachmentAction` and the `AttachmentTrigger` never trap each other \u2014 both remain separately focusable and clickable.\n\n### Keyboard scrolling\n\nAn `AttachmentGroup` scrolls horizontally. When its attachments are interactive: a trigger or actions, keyboard users reach off-screen items by tabbing to them. For a row of presentational attachments, make the group itself focusable and scrollable by adding `tabIndex={0}`, `role="group"`, and an `aria-label`.\n\n### Meaning beyond color\n\nThe `error` state uses a destructive color. Keep the failure reason in `AttachmentDescription` so the state is not conveyed by color alone.',
        },
      ],
    },
  ],
  avatar: [
    {
      id: "guide-usage-1",
      title: "Usage",
      blocks: [
        {
          kind: "code",
          language: "tsx",
          value:
            'import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"',
        },
        {
          kind: "code",
          language: "tsx",
          value:
            '<Avatar>\n  <AvatarImage src="https://github.com/shadcn.png" />\n  <AvatarFallback>CN</AvatarFallback>\n</Avatar>',
        },
      ],
    },
    {
      id: "guide-composition-2",
      title: "Composition",
      blocks: [
        {
          kind: "text",
          value: "Use the following composition to build an `Avatar`:",
        },
        {
          kind: "code",
          language: "text",
          value:
            "Avatar\n\u251c\u2500\u2500 AvatarImage\n\u251c\u2500\u2500 AvatarFallback\n\u2514\u2500\u2500 AvatarBadge",
        },
        {
          kind: "text",
          value: "Use the following composition to build an `AvatarGroup`:",
        },
        {
          kind: "code",
          language: "text",
          value:
            "AvatarGroup\n\u251c\u2500\u2500 Avatar\n\u2502   \u251c\u2500\u2500 AvatarImage\n\u2502   \u251c\u2500\u2500 AvatarFallback\n\u2502   \u2514\u2500\u2500 AvatarBadge\n\u251c\u2500\u2500 Avatar\n\u2502   \u251c\u2500\u2500 AvatarImage\n\u2502   \u251c\u2500\u2500 AvatarFallback\n\u2502   \u2514\u2500\u2500 AvatarBadge\n\u2514\u2500\u2500 AvatarGroupCount",
        },
      ],
    },
    {
      id: "guide-basic-3",
      title: "Basic",
      blocks: [
        {
          kind: "text",
          value: "A basic avatar component with an image and a fallback.",
        },
      ],
    },
    {
      id: "guide-badge-4",
      title: "Badge",
      blocks: [
        {
          kind: "text",
          value:
            "Use the `AvatarBadge` component to add a badge to the avatar. The badge is positioned at the bottom right of the avatar.\n\n\n\nUse the `className` prop to add custom styles to the badge such as custom colors, sizes, etc.",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            '<Avatar>\n  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />\n  <AvatarFallback>CN</AvatarFallback>\n  <AvatarBadge className="bg-green-600 dark:bg-green-800" />\n</Avatar>',
        },
      ],
    },
    {
      id: "guide-badge-with-icon-5",
      title: "Badge with Icon",
      blocks: [
        {
          kind: "text",
          value: "You can also use an icon inside `<AvatarBadge>`.",
        },
      ],
    },
    {
      id: "guide-avatar-group-6",
      title: "Avatar Group",
      blocks: [
        {
          kind: "text",
          value: "Use the `AvatarGroup` component to add a group of avatars.",
        },
      ],
    },
    {
      id: "guide-avatar-group-count-7",
      title: "Avatar Group Count",
      blocks: [
        {
          kind: "text",
          value: "Use `<AvatarGroupCount>` to add a count to the group.",
        },
      ],
    },
    {
      id: "guide-avatar-group-with-icon-8",
      title: "Avatar Group with Icon",
      blocks: [
        {
          kind: "text",
          value: "You can also use an icon inside `<AvatarGroupCount>`.",
        },
      ],
    },
    {
      id: "guide-sizes-9",
      title: "Sizes",
      blocks: [
        {
          kind: "text",
          value: "Use the `size` prop to change the size of the avatar.",
        },
      ],
    },
    {
      id: "guide-dropdown-10",
      title: "Dropdown",
      blocks: [
        {
          kind: "text",
          value:
            "You can use the `Avatar` component as a trigger for a dropdown menu.",
        },
      ],
    },
  ],
  badge: [
    {
      id: "guide-usage-1",
      title: "Usage",
      blocks: [
        {
          kind: "code",
          language: "tsx",
          value: 'import { Badge } from "@/components/ui/badge"',
        },
        {
          kind: "code",
          language: "tsx",
          value:
            '<Badge variant="default | outline | secondary | destructive">Badge</Badge>',
        },
      ],
    },
    {
      id: "guide-variants-2",
      title: "Variants",
      blocks: [
        {
          kind: "text",
          value: "Use the `variant` prop to change the variant of the badge.",
        },
      ],
    },
    {
      id: "guide-with-icon-3",
      title: "With Icon",
      blocks: [
        {
          kind: "text",
          value:
            'You can render an icon inside the badge. Use `data-icon="inline-start"` to render the icon on the left and `data-icon="inline-end"` to render the icon on the right.',
        },
      ],
    },
    {
      id: "guide-with-spinner-4",
      title: "With Spinner",
      blocks: [
        {
          kind: "text",
          value:
            'You can render a spinner inside the badge. Remember to add the `data-icon="inline-start"` or `data-icon="inline-end"` prop to the spinner.',
        },
      ],
    },
    {
      id: "guide-link-5",
      title: "Link",
      blocks: [
        {
          kind: "text",
          value: "Use the `render` prop to render a link as a badge.",
        },
      ],
    },
    {
      id: "guide-custom-colors-6",
      title: "Custom Colors",
      blocks: [
        {
          kind: "text",
          value:
            "You can customize the colors of a badge by adding custom classes such as `bg-green-50 dark:bg-green-800` to the `Badge` component.",
        },
      ],
    },
  ],
  breadcrumb: [
    {
      id: "guide-usage-1",
      title: "Usage",
      blocks: [
        {
          kind: "code",
          language: "tsx",
          value:
            'import {\n  Breadcrumb,\n  BreadcrumbItem,\n  BreadcrumbLink,\n  BreadcrumbList,\n  BreadcrumbPage,\n  BreadcrumbSeparator,\n} from "@/components/ui/breadcrumb"',
        },
        {
          kind: "code",
          language: "tsx",
          value:
            '<Breadcrumb>\n  <BreadcrumbList>\n    <BreadcrumbItem>\n      <BreadcrumbLink render={<a href="/" />}>Home</BreadcrumbLink>\n    </BreadcrumbItem>\n    <BreadcrumbSeparator />\n    <BreadcrumbItem>\n      <BreadcrumbLink render={<a href="/components" />}>\n        Components\n      </BreadcrumbLink>\n    </BreadcrumbItem>\n    <BreadcrumbSeparator />\n    <BreadcrumbItem>\n      <BreadcrumbPage>Breadcrumb</BreadcrumbPage>\n    </BreadcrumbItem>\n  </BreadcrumbList>\n</Breadcrumb>',
        },
      ],
    },
    {
      id: "guide-composition-2",
      title: "Composition",
      blocks: [
        {
          kind: "text",
          value: "Use the following composition to build a `Breadcrumb`:",
        },
        {
          kind: "code",
          language: "text",
          value:
            "Breadcrumb\n\u2514\u2500\u2500 BreadcrumbList\n    \u251c\u2500\u2500 BreadcrumbItem\n    \u2502   \u2514\u2500\u2500 BreadcrumbLink\n    \u251c\u2500\u2500 BreadcrumbSeparator\n    \u251c\u2500\u2500 BreadcrumbItem\n    \u2502   \u2514\u2500\u2500 BreadcrumbLink\n    \u251c\u2500\u2500 BreadcrumbSeparator\n    \u2514\u2500\u2500 BreadcrumbItem\n        \u2514\u2500\u2500 BreadcrumbPage",
        },
      ],
    },
    {
      id: "guide-basic-3",
      title: "Basic",
      blocks: [
        {
          kind: "text",
          value: "A basic breadcrumb with a home link and a components link.",
        },
      ],
    },
    {
      id: "guide-custom-separator-4",
      title: "Custom separator",
      blocks: [
        {
          kind: "text",
          value:
            "Use a custom component as `children` for `<BreadcrumbSeparator />` to create a custom separator.",
        },
      ],
    },
    {
      id: "guide-dropdown-5",
      title: "Dropdown",
      blocks: [
        {
          kind: "text",
          value:
            "You can compose `<BreadcrumbItem />` with a `<DropdownMenu />` to create a dropdown in the breadcrumb.",
        },
      ],
    },
    {
      id: "guide-collapsed-6",
      title: "Collapsed",
      blocks: [
        {
          kind: "text",
          value:
            "We provide a `<BreadcrumbEllipsis />` component to show a collapsed state when the breadcrumb is too long.",
        },
      ],
    },
    {
      id: "guide-link-component-7",
      title: "Link component",
      blocks: [
        {
          kind: "text",
          value:
            "To use a custom link component from your routing library, you can use the `render` prop on `<BreadcrumbLink />`.",
        },
      ],
    },
  ],
  bubble: [
    {
      id: "guide-composition-notes-1",
      title: "Composition notes",
      blocks: [
        {
          kind: "text",
          value:
            "The `Bubble` component displays framed conversational content. Use it for chat text, short structured output, quoted replies, suggestions, and reactions.\n\nFor full-featured chat interfaces, use the [`Message`](/components/message) component. `Bubble` is intentionally scoped to the bubble surface. Place avatars, names, timestamps, metadata, and message-level actions in [`Message`](/components/message).",
        },
      ],
    },
    {
      id: "guide-usage-2",
      title: "Usage",
      blocks: [
        {
          kind: "code",
          language: "tsx",
          value:
            'import { Bubble, BubbleContent, BubbleReactions } from "@/components/ui/bubble"',
        },
        {
          kind: "code",
          language: "tsx",
          value:
            "<Bubble>\n  <BubbleContent>\n    I checked the registry output and removed the stale route.\n  </BubbleContent>\n  <BubbleReactions>\n    <span>\ud83d\udc4d</span>\n  </BubbleReactions>\n</Bubble>",
        },
      ],
    },
    {
      id: "guide-composition-3",
      title: "Composition",
      blocks: [
        {
          kind: "text",
          value: "Use the following composition to build a bubble:",
        },
        {
          kind: "code",
          language: "text",
          value:
            "Bubble\n\u251c\u2500\u2500 BubbleContent\n\u2514\u2500\u2500 BubbleReactions",
        },
        {
          kind: "text",
          value:
            "Use `BubbleGroup` to group consecutive bubbles from the same sender:",
        },
        {
          kind: "code",
          language: "text",
          value:
            "BubbleGroup\n\u251c\u2500\u2500 Bubble\n\u2502   \u2514\u2500\u2500 BubbleContent\n\u2514\u2500\u2500 Bubble\n    \u2514\u2500\u2500 BubbleContent",
        },
      ],
    },
    {
      id: "guide-features-4",
      title: "Features",
      blocks: [
        {
          kind: "text",
          value:
            "- Seven visual variants, from a strong primary bubble to unframed ghost content\n- Start and end alignment for sender and receiver bubbles\n- Reactions that anchor to the bubble edge with configurable side and alignment\n- Bubbles size to their content, up to 80% of the container width\n- Polymorphic content via `render` for link and button bubbles\n- Customizable styling through the `className` prop on every part",
        },
      ],
    },
    {
      id: "guide-variants-5",
      title: "Variants",
      blocks: [
        {
          kind: "text",
          value:
            "Use `variant` to change the visual treatment of the bubble.\n\n\n\n| Variant       | Description                                            |\n| ------------- | ------------------------------------------------------ |\n| `default`     | A strong primary bubble, usually for the current user. |\n| `secondary`   | The standard neutral bubble for conversation content.  |\n| `muted`       | A lower-emphasis bubble for quiet supporting content.  |\n| `tinted`      | A subtle primary-tinted bubble.                        |\n| `outline`     | A bordered bubble for secondary or rich content.       |\n| `ghost`       | Unframed content for assistant text or rich content.   |\n| `destructive` | A destructive bubble for error or failed actions.      |\n\nA bubble sizes to its content, up to 80% of the container width. The `ghost` variant removes the max-width so assistant text and rich content can span the full row.",
        },
      ],
    },
    {
      id: "guide-alignment-6",
      title: "Alignment",
      blocks: [
        {
          kind: "text",
          value:
            "Use `align` on `Bubble` to align the bubble to the start or end of the conversation.\n\n\n\n| align   | Description                                        |\n| ------- | -------------------------------------------------- |\n| `start` | Align the bubble to the start of the conversation. |\n| `end`   | Align the bubble to the end of the conversation.   |\n\n**Note:** When building chat interfaces, you probably want to use alignment on the `Message` component itself, not the `Bubble` component. You can use the `role` prop on the `Message` component to automatically align the bubble to the start or end of the conversation.",
        },
      ],
    },
    {
      id: "guide-bubble-group-7",
      title: "Bubble Group",
      blocks: [
        {
          kind: "text",
          value:
            "Use `BubbleGroup` to group consecutive bubbles from the same sender. Note the `align` prop should be set on the `Bubble` component itself, not the `BubbleGroup` component.",
        },
        {
          kind: "code",
          language: "text",
          value:
            "BubbleGroup\n\u251c\u2500\u2500 Bubble\n\u2502   \u2514\u2500\u2500 BubbleContent\n\u2514\u2500\u2500 Bubble\n    \u2514\u2500\u2500 BubbleContent",
        },
      ],
    },
    {
      id: "guide-links-and-buttons-8",
      title: "Links and Buttons",
      blocks: [
        {
          kind: "text",
          value:
            "You can turn a bubble into a link or button by using the `render` prop on `BubbleContent`.",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            'import { Bubble, BubbleContent } from "@/components/ui/bubble"\n\nexport function BubbleLinkDemo() {\n  return (\n    <Bubble variant="muted">\n      <BubbleContent render={<button />}>Click here</BubbleContent>\n    </Bubble>\n  )\n}',
        },
      ],
    },
    {
      id: "guide-reactions-9",
      title: "Reactions",
      blocks: [
        {
          kind: "text",
          value:
            'Use `BubbleReactions` for bubble reactions. You can use it to display reactions or quick action buttons. Use `side` and `align` to position the row \u2014 `side="top"` anchors it to the upper edge. Reactions overlap the bubble edge, so leave vertical space between rows \u2014 the examples below use a larger `gap` for this reason.',
        },
      ],
    },
    {
      id: "guide-show-more-collapsible-10",
      title: "Show More / Collapsible",
      blocks: [
        {
          kind: "text",
          value:
            "Long bubble content can be composed with [`Collapsible`](/components/collapsible) to allow for a show more or show less interaction. Use the `CollapsibleTrigger` component to trigger the collapsible content.",
        },
      ],
    },
    {
      id: "guide-tooltip-11",
      title: "Tooltip",
      blocks: [
        {
          kind: "text",
          value:
            "Wrap a bubble in a [`Tooltip`](/components/tooltip) to reveal metadata on hover, such as when a message was read.",
        },
      ],
    },
    {
      id: "guide-popover-12",
      title: "Popover",
      blocks: [
        {
          kind: "text",
          value:
            "Pair a bubble with a [`Popover`](/components/popover) to surface more information on demand, such as the full error message for a failed action.",
        },
      ],
    },
    {
      id: "guide-accessibility-13",
      title: "Labels and keyboard",
      blocks: [
        {
          kind: "text",
          value:
            '`Bubble` renders the presentational message surface. Keep conversation-level semantics on the surrounding container and follow the guidelines below.\n\n### Labeling Reactions\n\nReactions render as a row of emoji. A screen reader reads each glyph with no context, and counters like `+8` are announced as "plus eight". Group the row as a single image with a descriptive `aria-label` so it announces once. `role="img"` also hides the individual emoji from assistive tech, so no `aria-hidden` is needed.',
        },
        {
          kind: "code",
          language: "tsx",
          value:
            '<BubbleReactions role="img" aria-label="Reactions: thumbs up, fire, and 8 more">\n  <span>\ud83d\udc4d</span>\n  <span>\ud83d\udd25</span>\n  <span>+8</span>\n</BubbleReactions>',
        },
        {
          kind: "text",
          value:
            "When reactions are interactive, render buttons instead and give icon-only buttons an `aria-label`.",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            '<BubbleReactions>\n  <Button aria-label="Thumbs up" variant="secondary" size="icon-xs">\n    <ThumbsUpIcon />\n  </Button>\n</BubbleReactions>',
        },
        {
          kind: "text",
          value:
            "### Interactive Bubbles\n\nWhen a bubble is clickable, render it as a real `<button>` or `<a>` with the `render` prop so it is focusable and exposes the correct role. `BubbleContent` ships a visible focus ring for interactive elements, and the accessible name comes from the bubble text. No extra label is needed.",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            '<Bubble variant="muted" align="end">\n  <BubbleContent render={<button type="button" onClick={onReply} />}>\n    I forgot my password\n  </BubbleContent>\n</Bubble>',
        },
        {
          kind: "text",
          value:
            "### Meaning Beyond Color\n\nBubble variants signal role and tone with color. Pair them with text, alignment, or icons so meaning is not conveyed by color alone. For a `destructive` bubble, keep the error context in the message text rather than relying on the color treatment.",
        },
      ],
    },
  ],
  "button-group": [
    {
      id: "guide-usage-1",
      title: "Usage",
      blocks: [
        {
          kind: "code",
          language: "tsx",
          value:
            'import {\n  ButtonGroup,\n  ButtonGroupSeparator,\n  ButtonGroupText,\n} from "@/components/ui/button-group"',
        },
        {
          kind: "code",
          language: "tsx",
          value:
            "<ButtonGroup>\n  <Button>Button 1</Button>\n  <Button>Button 2</Button>\n</ButtonGroup>",
        },
      ],
    },
    {
      id: "guide-composition-2",
      title: "Composition",
      blocks: [
        {
          kind: "text",
          value: "Use the following composition to build a `ButtonGroup`:",
        },
        {
          kind: "code",
          language: "text",
          value:
            "ButtonGroup\n\u251c\u2500\u2500 Button or Input\n\u251c\u2500\u2500 ButtonGroupSeparator\n\u2514\u2500\u2500 ButtonGroupText",
        },
      ],
    },
    {
      id: "guide-accessibility-3",
      title: "Labels and keyboard",
      blocks: [
        {
          kind: "text",
          value:
            "- The `ButtonGroup` component has the `role` attribute set to `group`.\n- Use Tab to navigate between the buttons in the group.\n- Use `aria-label` or `aria-labelledby` to label the button group.",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            '<ButtonGroup aria-label="Button group">\n  <Button>Button 1</Button>\n  <Button>Button 2</Button>\n</ButtonGroup>',
        },
      ],
    },
    {
      id: "guide-buttongroup-vs-togglegroup-4",
      title: "ButtonGroup vs ToggleGroup",
      blocks: [
        {
          kind: "text",
          value:
            "- Use the `ButtonGroup` component when you want to group buttons that perform an action.\n- Use the `ToggleGroup` component when you want to group buttons that toggle a state.",
        },
      ],
    },
    {
      id: "guide-orientation-5",
      title: "Orientation",
      blocks: [
        {
          kind: "text",
          value:
            "Set the `orientation` prop to change the button group layout.",
        },
      ],
    },
    {
      id: "guide-size-6",
      title: "Size",
      blocks: [
        {
          kind: "text",
          value:
            "Control the size of buttons using the `size` prop on individual buttons.",
        },
      ],
    },
    {
      id: "guide-nested-7",
      title: "Nested",
      blocks: [
        {
          kind: "text",
          value:
            "Nest `<ButtonGroup>` components to create button groups with spacing.",
        },
      ],
    },
    {
      id: "guide-separator-8",
      title: "Separator",
      blocks: [
        {
          kind: "text",
          value:
            "The `ButtonGroupSeparator` component visually divides buttons within a group.\n\nButtons with variant `outline` do not need a separator since they have a border. For other variants, a separator is recommended to improve the visual hierarchy.",
        },
      ],
    },
    {
      id: "guide-split-9",
      title: "Split",
      blocks: [
        {
          kind: "text",
          value:
            "Create a split button group by adding two buttons separated by a `ButtonGroupSeparator`.",
        },
      ],
    },
    {
      id: "guide-input-10",
      title: "Input",
      blocks: [
        {
          kind: "text",
          value: "Wrap an `Input` component with buttons.",
        },
      ],
    },
    {
      id: "guide-input-group-11",
      title: "Input Group",
      blocks: [
        {
          kind: "text",
          value:
            "Wrap an `InputGroup` component to create complex input layouts.",
        },
      ],
    },
    {
      id: "guide-dropdown-menu-12",
      title: "Dropdown Menu",
      blocks: [
        {
          kind: "text",
          value: "Create a split button group with a `DropdownMenu` component.",
        },
      ],
    },
    {
      id: "guide-select-13",
      title: "Select",
      blocks: [
        {
          kind: "text",
          value: "Pair with a `Select` component.",
        },
      ],
    },
    {
      id: "guide-popover-14",
      title: "Popover",
      blocks: [
        {
          kind: "text",
          value: "Use with a `Popover` component.",
        },
      ],
    },
  ],
  button: [
    {
      id: "guide-usage-1",
      title: "Usage",
      blocks: [
        {
          kind: "code",
          language: "tsx",
          value: 'import { Button } from "@/components/ui/button"',
        },
        {
          kind: "code",
          language: "tsx",
          value: '<Button variant="outline">Button</Button>',
        },
      ],
    },
    {
      id: "guide-cursor-2",
      title: "Cursor",
      blocks: [
        {
          kind: "text",
          value:
            "Tailwind v4 [switched](https://tailwindcss.com/docs/upgrade-guide#buttons-use-the-default-cursor) from `cursor: pointer` to `cursor: default` for the button component.\n\nIf you want to keep the `cursor: pointer` behavior, add the following code to your CSS file:\n\nYou can also enable this during project setup with `npx Leement@latest init --pointer`.",
        },
        {
          kind: "code",
          language: "css",
          value:
            '@layer base {\n  button:not(:disabled),\n  [role="button"]:not(:disabled) {\n    cursor: pointer;\n  }\n}',
        },
      ],
    },
    {
      id: "guide-size-3",
      title: "Size",
      blocks: [
        {
          kind: "text",
          value: "Use the `size` prop to change the size of the button.",
        },
      ],
    },
    {
      id: "guide-with-icon-4",
      title: "With Icon",
      blocks: [
        {
          kind: "text",
          value:
            'Remember to add the `data-icon="inline-start"` or `data-icon="inline-end"` attribute to the icon for the correct spacing.',
        },
      ],
    },
    {
      id: "guide-rounded-5",
      title: "Rounded",
      blocks: [
        {
          kind: "text",
          value: "Use the `rounded-full` class to make the button rounded.",
        },
      ],
    },
    {
      id: "guide-spinner-6",
      title: "Spinner",
      blocks: [
        {
          kind: "text",
          value:
            'Render a `<Spinner />` component inside the button to show a loading state. Remember to add the `data-icon="inline-start"` or `data-icon="inline-end"` attribute to the spinner for the correct spacing.',
        },
      ],
    },
    {
      id: "guide-button-group-7",
      title: "Button Group",
      blocks: [
        {
          kind: "text",
          value:
            "To create a button group, use the `ButtonGroup` component. See the [Button Group](/components/button-group) documentation for more details.",
        },
      ],
    },
    {
      id: "guide-as-link-8",
      title: "As Link",
      blocks: [
        {
          kind: "text",
          value:
            'You can use the `buttonVariants` helper to make a link look like a button.\n\n**Do not use `<Button render={<a />} nativeButton={false} />` for links.** The Base UI `Button` component always applies `role="button"`, which overrides the semantic link role on `<a>` elements. Use `buttonVariants` with a plain `<a>` tag instead.',
        },
      ],
    },
  ],
  calendar: [
    {
      id: "guide-usage-1",
      title: "Usage",
      blocks: [
        {
          kind: "code",
          language: "tsx",
          value: 'import { Calendar } from "@/components/ui/calendar"',
        },
        {
          kind: "code",
          language: "tsx",
          value:
            'const [date, setDate] = React.useState<Date | undefined>(new Date())\n\nreturn (\n  <Calendar\n    mode="single"\n    selected={date}\n    onSelect={setDate}\n    className="rounded-lg border"\n  />\n)',
        },
        {
          kind: "text",
          value:
            "See the [React DayPicker](https://react-day-picker.js.org) documentation for more information.",
        },
      ],
    },
    {
      id: "guide-about-2",
      title: "About",
      blocks: [
        {
          kind: "text",
          value:
            "The `Calendar` component is built on top of [React DayPicker](https://react-day-picker.js.org).",
        },
      ],
    },
    {
      id: "guide-date-picker-3",
      title: "Date Picker",
      blocks: [
        {
          kind: "text",
          value:
            "You can use the `<Calendar>` component to build a date picker. See the [Date Picker](/patterns/date-picker) page for more information.",
        },
      ],
    },
    {
      id: "guide-persian-hijri-jalali-calendar-4",
      title: "Persian / Hijri / Jalali Calendar",
      blocks: [
        {
          kind: "text",
          value:
            "To use the Persian calendar, edit `components/ui/calendar.tsx` and replace `react-day-picker` with `react-day-picker/persian`.",
        },
        {
          kind: "code",
          language: "diff",
          value:
            '- import { DayPicker } from "react-day-picker"\n+ import { DayPicker } from "react-day-picker/persian"',
        },
      ],
    },
    {
      id: "guide-selected-date-with-timezone-5",
      title: "Selected Date (With TimeZone)",
      blocks: [
        {
          kind: "text",
          value:
            "The Calendar component accepts a `timeZone` prop to ensure dates are displayed and selected in the user's local timezone.",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            'export function CalendarWithTimezone() {\n  const [date, setDate] = React.useState<Date | undefined>(undefined)\n  const [timeZone, setTimeZone] = React.useState<string | undefined>(undefined)\n\n  React.useEffect(() => {\n    setTimeZone(Intl.DateTimeFormat().resolvedOptions().timeZone)\n  }, [])\n\n  return (\n    <Calendar\n      mode="single"\n      selected={date}\n      onSelect={setDate}\n      timeZone={timeZone}\n    />\n  )\n}',
        },
        {
          kind: "text",
          value:
            "**Note:** If you notice a selected date offset (for example, selecting the 20th highlights the 19th), make sure the `timeZone` prop is set to the user's local timezone.\n\n**Why client-side?** The timezone is detected using `Intl.DateTimeFormat().resolvedOptions().timeZone` inside a `useEffect` to ensure compatibility with server-side rendering. Detecting the timezone during render would cause hydration mismatches, as the server and client may be in different timezones.",
        },
      ],
    },
    {
      id: "guide-basic-6",
      title: "Basic",
      blocks: [
        {
          kind: "text",
          value:
            'A basic calendar component. We used `className="rounded-lg border"` to style the calendar.',
        },
      ],
    },
    {
      id: "guide-range-calendar-7",
      title: "Range Calendar",
      blocks: [
        {
          kind: "text",
          value: 'Use the `mode="range"` prop to enable range selection.',
        },
      ],
    },
    {
      id: "guide-month-and-year-selector-8",
      title: "Month and Year Selector",
      blocks: [
        {
          kind: "text",
          value:
            'Use `captionLayout="dropdown"` to show month and year dropdowns.',
        },
      ],
    },
    {
      id: "guide-custom-cell-size-9",
      title: "Custom Cell Size",
      blocks: [
        {
          kind: "text",
          value:
            "You can customize the size of calendar cells using the `--cell-size` CSS variable. You can also make it responsive by using breakpoint-specific values:",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            '<Calendar\n  mode="single"\n  selected={date}\n  onSelect={setDate}\n  className="rounded-lg border [--cell-size:--spacing(11)] md:[--cell-size:--spacing(12)]"\n/>',
        },
        {
          kind: "text",
          value: "Or use fixed values:",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            '<Calendar\n  mode="single"\n  selected={date}\n  onSelect={setDate}\n  className="rounded-lg border [--cell-size:2.75rem] md:[--cell-size:3rem]"\n/>',
        },
      ],
    },
    {
      id: "guide-week-numbers-10",
      title: "Week Numbers",
      blocks: [
        {
          kind: "text",
          value: "Use `showWeekNumber` to show week numbers.",
        },
      ],
    },
  ],
  card: [
    {
      id: "guide-usage-1",
      title: "Usage",
      blocks: [
        {
          kind: "code",
          language: "tsx",
          value:
            'import {\n  Card,\n  CardAction,\n  CardContent,\n  CardDescription,\n  CardFooter,\n  CardHeader,\n  CardTitle,\n} from "@/components/ui/card"',
        },
        {
          kind: "code",
          language: "tsx",
          value:
            "<Card>\n  <CardHeader>\n    <CardTitle>Card Title</CardTitle>\n    <CardDescription>Card Description</CardDescription>\n    <CardAction>Card Action</CardAction>\n  </CardHeader>\n  <CardContent>\n    <p>Card Content</p>\n  </CardContent>\n  <CardFooter>\n    <p>Card Footer</p>\n  </CardFooter>\n</Card>",
        },
      ],
    },
    {
      id: "guide-composition-2",
      title: "Composition",
      blocks: [
        {
          kind: "text",
          value: "Use the following composition to build a `Card`:",
        },
        {
          kind: "code",
          language: "text",
          value:
            "Card\n\u251c\u2500\u2500 CardHeader\n\u2502   \u251c\u2500\u2500 CardTitle\n\u2502   \u251c\u2500\u2500 CardDescription\n\u2502   \u2514\u2500\u2500 CardAction\n\u251c\u2500\u2500 CardContent\n\u2514\u2500\u2500 CardFooter",
        },
      ],
    },
    {
      id: "guide-size-3",
      title: "Size",
      blocks: [
        {
          kind: "text",
          value:
            'Use the `size="sm"` prop to set the size of the card to small. The small size variant uses smaller spacing.',
        },
      ],
    },
    {
      id: "guide-spacing-4",
      title: "Spacing",
      blocks: [
        {
          kind: "text",
          value:
            "In addition to the `size` prop, you can use the `--card-spacing` CSS variable to control the spacing between sections and the inset of card parts.\n\n\n\nUse negative margins with `-mx-(--card-spacing)` to make content go edge to edge while keeping it aligned with the card inset. When the edge-to-edge content sits above a footer, use `-mb-(--card-spacing)` on `CardContent` to remove the section gap.",
        },
      ],
    },
    {
      id: "guide-image-5",
      title: "Image",
      blocks: [
        {
          kind: "text",
          value:
            "Add an image before the card header to create a card with an image.",
        },
      ],
    },
  ],
  carousel: [
    {
      id: "guide-about-1",
      title: "About",
      blocks: [
        {
          kind: "text",
          value:
            "The carousel component is built using the [Embla Carousel](https://www.embla-carousel.com/) library.",
        },
      ],
    },
    {
      id: "guide-usage-2",
      title: "Usage",
      blocks: [
        {
          kind: "code",
          language: "tsx",
          value:
            'import {\n  Carousel,\n  CarouselContent,\n  CarouselItem,\n  CarouselNext,\n  CarouselPrevious,\n} from "@/components/ui/carousel"',
        },
        {
          kind: "code",
          language: "tsx",
          value:
            "<Carousel>\n  <CarouselContent>\n    <CarouselItem>...</CarouselItem>\n    <CarouselItem>...</CarouselItem>\n    <CarouselItem>...</CarouselItem>\n  </CarouselContent>\n  <CarouselPrevious />\n  <CarouselNext />\n</Carousel>",
        },
      ],
    },
    {
      id: "guide-composition-3",
      title: "Composition",
      blocks: [
        {
          kind: "text",
          value: "Use the following composition to build a `Carousel`:",
        },
        {
          kind: "code",
          language: "text",
          value:
            "Carousel\n\u251c\u2500\u2500 CarouselContent\n\u2502   \u251c\u2500\u2500 CarouselItem\n\u2502   \u2514\u2500\u2500 CarouselItem\n\u251c\u2500\u2500 CarouselPrevious\n\u2514\u2500\u2500 CarouselNext",
        },
      ],
    },
    {
      id: "guide-sizes-4",
      title: "Sizes",
      blocks: [
        {
          kind: "text",
          value:
            "To set the size of the items, you can use the `basis` utility class on the `<CarouselItem />`.",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            '// 33% of the carousel width.\n<Carousel>\n  <CarouselContent>\n    <CarouselItem className="basis-1/3">...</CarouselItem>\n    <CarouselItem className="basis-1/3">...</CarouselItem>\n    <CarouselItem className="basis-1/3">...</CarouselItem>\n  </CarouselContent>\n</Carousel>',
        },
        {
          kind: "code",
          language: "tsx",
          value:
            '// 50% on small screens and 33% on larger screens.\n<Carousel>\n  <CarouselContent>\n    <CarouselItem className="md:basis-1/2 lg:basis-1/3">...</CarouselItem>\n    <CarouselItem className="md:basis-1/2 lg:basis-1/3">...</CarouselItem>\n    <CarouselItem className="md:basis-1/2 lg:basis-1/3">...</CarouselItem>\n  </CarouselContent>\n</Carousel>',
        },
      ],
    },
    {
      id: "guide-spacing-5",
      title: "Spacing",
      blocks: [
        {
          kind: "text",
          value:
            "To set the spacing between the items, we use a `pl-[VALUE]` utility on the `<CarouselItem />` and a negative `-ml-[VALUE]` on the `<CarouselContent />`.",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            '<Carousel>\n  <CarouselContent className="-ml-4">\n    <CarouselItem className="pl-4">...</CarouselItem>\n    <CarouselItem className="pl-4">...</CarouselItem>\n    <CarouselItem className="pl-4">...</CarouselItem>\n  </CarouselContent>\n</Carousel>',
        },
        {
          kind: "code",
          language: "tsx",
          value:
            '<Carousel>\n  <CarouselContent className="-ml-2 md:-ml-4">\n    <CarouselItem className="pl-2 md:pl-4">...</CarouselItem>\n    <CarouselItem className="pl-2 md:pl-4">...</CarouselItem>\n    <CarouselItem className="pl-2 md:pl-4">...</CarouselItem>\n  </CarouselContent>\n</Carousel>',
        },
      ],
    },
    {
      id: "guide-orientation-6",
      title: "Orientation",
      blocks: [
        {
          kind: "text",
          value:
            "Use the `orientation` prop to set the orientation of the carousel.",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            '<Carousel orientation="vertical | horizontal">\n  <CarouselContent>\n    <CarouselItem>...</CarouselItem>\n    <CarouselItem>...</CarouselItem>\n    <CarouselItem>...</CarouselItem>\n  </CarouselContent>\n</Carousel>',
        },
      ],
    },
    {
      id: "guide-options-7",
      title: "Options",
      blocks: [
        {
          kind: "text",
          value:
            "You can pass options to the carousel using the `opts` prop. See the [Embla Carousel docs](https://www.embla-carousel.com/api/options/) for more information.",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            '<Carousel\n  opts={{\n    align: "start",\n    loop: true,\n  }}\n>\n  <CarouselContent>\n    <CarouselItem>...</CarouselItem>\n    <CarouselItem>...</CarouselItem>\n    <CarouselItem>...</CarouselItem>\n  </CarouselContent>\n</Carousel>',
        },
      ],
    },
    {
      id: "guide-api-8",
      title: "API",
      blocks: [
        {
          kind: "text",
          value:
            "Use a state and the `setApi` prop to get an instance of the carousel API.",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            'import { type CarouselApi } from "@/components/ui/carousel"\n\nexport function Example() {\n  const [api, setApi] = React.useState<CarouselApi>()\n  const [current, setCurrent] = React.useState(0)\n  const [count, setCount] = React.useState(0)\n\n  React.useEffect(() => {\n    if (!api) {\n      return\n    }\n\n    setCount(api.scrollSnapList().length)\n    setCurrent(api.selectedScrollSnap() + 1)\n\n    api.on("select", () => {\n      setCurrent(api.selectedScrollSnap() + 1)\n    })\n  }, [api])\n\n  return (\n    <Carousel setApi={setApi}>\n      <CarouselContent>\n        <CarouselItem>...</CarouselItem>\n        <CarouselItem>...</CarouselItem>\n        <CarouselItem>...</CarouselItem>\n      </CarouselContent>\n    </Carousel>\n  )\n}',
        },
      ],
    },
    {
      id: "guide-events-9",
      title: "Events",
      blocks: [
        {
          kind: "text",
          value:
            "You can listen to events using the api instance from `setApi`.",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            'import { type CarouselApi } from "@/components/ui/carousel"\n\nexport function Example() {\n  const [api, setApi] = React.useState<CarouselApi>()\n\n  React.useEffect(() => {\n    if (!api) {\n      return\n    }\n\n    api.on("select", () => {\n      // Do something on select.\n    })\n  }, [api])\n\n  return (\n    <Carousel setApi={setApi}>\n      <CarouselContent>\n        <CarouselItem>...</CarouselItem>\n        <CarouselItem>...</CarouselItem>\n        <CarouselItem>...</CarouselItem>\n      </CarouselContent>\n    </Carousel>\n  )\n}',
        },
        {
          kind: "text",
          value:
            "See the [Embla Carousel docs](https://www.embla-carousel.com/api/events/) for more information on using events.",
        },
      ],
    },
    {
      id: "guide-plugins-10",
      title: "Plugins",
      blocks: [
        {
          kind: "text",
          value:
            "You can use the `plugins` prop to add plugins to the carousel.",
        },
        {
          kind: "code",
          language: "ts",
          value:
            'import Autoplay from "embla-carousel-autoplay"\n\nexport function Example() {\n  return (\n    <Carousel\n      plugins={[\n        Autoplay({\n          delay: 2000,\n        }),\n      ]}\n    >\n      // ...\n    </Carousel>\n  )\n}',
        },
      ],
    },
  ],
  chart: [
    {
      id: "guide-composition-notes-1",
      title: "Composition notes",
      blocks: [
        {
          kind: "text",
          value:
            "**Updated:** The `chart` component now uses Recharts v3. If you're upgrading existing chart code, see [Updating to Recharts v3](#updating-to-recharts-v3).\n\n\n\n\n\nIntroducing **Charts**. A collection of chart components that you can copy and paste into your apps.\n\nCharts are designed to look great out of the box. They work well with the other components and are fully customizable to fit your project.\n\n[Browse the Charts Library](/charts).",
        },
      ],
    },
    {
      id: "guide-component-2",
      title: "Component",
      blocks: [
        {
          kind: "text",
          value:
            "We use [Recharts](https://recharts.org/) under the hood.\n\nWe designed the `chart` component with composition in mind. **You build your charts using Recharts components and only bring in custom components, such as `ChartTooltip`, when and where you need it**.",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            'import { Bar, BarChart } from "recharts"\n\nimport { ChartContainer, ChartTooltipContent } from "@/components/ui/chart"\n\nexport function MyChart() {\n  return (\n    <ChartContainer>\n      <BarChart data={data}>\n        <Bar isAnimationActive={false} dataKey="value" />\n        <ChartTooltip content={<ChartTooltipContent />} />\n      </BarChart>\n    </ChartContainer>\n  )\n}',
        },
        {
          kind: "text",
          value:
            "We do not wrap Recharts. This means you're not locked into an abstraction. When a new Recharts version is released, you can follow the official upgrade path to upgrade your charts.\n\n**The components are yours**.",
        },
      ],
    },
    {
      id: "guide-updating-to-recharts-v3-3",
      title: "Updating to Recharts v3",
      blocks: [
        {
          kind: "text",
          value:
            "If you're updating older chart code to Recharts v3:\n\n- Use `var(--chart-1)` instead of `hsl(var(--chart-1))` when you reference chart tokens from your CSS variables.\n- Use `ChartTooltip.defaultIndex` for initial tooltip state only. Keep persistent active shapes in your own chart state.\n- Remove `layout` from `<Bar>` when the parent `<BarChart>` already defines it.\n- Keep a height, `min-h-*`, or `aspect-*` on `ChartContainer` so `ResponsiveContainer` can measure on first render.",
        },
      ],
    },
    {
      id: "guide-your-first-chart-4",
      title: "Your First Chart",
      blocks: [
        {
          kind: "text",
          value:
            "Let's build your first chart. We'll build a bar chart, add a grid, axis, tooltip and legend.\n\n\n\nStart by defining your data\n\nThe following data represents the number of desktop and mobile users for each month.\n\n\n\n**Note:** Your data can be in any shape. You are not limited to the shape of the data below. Use the `dataKey` prop to map your data to the chart.",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            'const chartData = [\n  { month: "January", desktop: 186, mobile: 80 },\n  { month: "February", desktop: 305, mobile: 200 },\n  { month: "March", desktop: 237, mobile: 120 },\n  { month: "April", desktop: 73, mobile: 190 },\n  { month: "May", desktop: 209, mobile: 130 },\n  { month: "June", desktop: 214, mobile: 140 },\n]',
        },
        {
          kind: "text",
          value:
            "Define your chart config\n\nThe chart config holds configuration for the chart. This is where you place human-readable strings, such as labels, icons and color tokens for theming.",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            'import { type ChartConfig } from "@/components/ui/chart"\n\nconst chartConfig = {\n  desktop: {\n    label: "Desktop",\n    color: "var(--chart-1)",\n  },\n  mobile: {\n    label: "Mobile",\n    color: "var(--chart-2)",\n  },\n} satisfies ChartConfig',
        },
        {
          kind: "text",
          value:
            "Build your chart\n\nYou can now build your chart using Recharts components.\n\n\n\n**Important:** Remember to set a `min-h-[VALUE]` on the `ChartContainer` component. This is required for the chart to be responsive.\n\n\n\n\n\n\n\n### Add a Grid\n\nLet's add a grid to the chart.\n\n\n\nImport the `CartesianGrid` component.",
        },
        {
          kind: "code",
          language: "tsx",
          value: 'import { Bar, BarChart, CartesianGrid } from "recharts"',
        },
        {
          kind: "text",
          value: "Add the `CartesianGrid` component to your chart.",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            '<ChartContainer config={chartConfig} className="min-h-[200px] w-full">\n  <BarChart accessibilityLayer data={chartData}>\n    <CartesianGrid vertical={false} />\n    <Bar isAnimationActive={false} dataKey="desktop" fill="var(--color-desktop)" radius={4} />\n    <Bar isAnimationActive={false} dataKey="mobile" fill="var(--color-mobile)" radius={4} />\n  </BarChart>\n</ChartContainer>',
        },
        {
          kind: "text",
          value:
            "### Add an Axis\n\nTo add an x-axis to the chart, we'll use the `XAxis` component.\n\n\n\nImport the `XAxis` component.",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            'import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"',
        },
        {
          kind: "text",
          value: "Add the `XAxis` component to your chart.",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            '<ChartContainer config={chartConfig} className="h-[200px] w-full">\n  <BarChart accessibilityLayer data={chartData}>\n    <CartesianGrid vertical={false} />\n    <XAxis\n      dataKey="month"\n      tickLine={false}\n      tickMargin={10}\n      axisLine={false}\n      tickFormatter={(value) => value.slice(0, 3)}\n    />\n    <Bar isAnimationActive={false} dataKey="desktop" fill="var(--color-desktop)" radius={4} />\n    <Bar isAnimationActive={false} dataKey="mobile" fill="var(--color-mobile)" radius={4} />\n  </BarChart>\n</ChartContainer>',
        },
        {
          kind: "text",
          value:
            "### Add Tooltip\n\nSo far we've only used components from Recharts. They look great out of the box thanks to some customization in the `chart` component.\n\nTo add a tooltip, we'll use the custom `ChartTooltip` and `ChartTooltipContent` components from `chart`.\n\n\n\nImport the `ChartTooltip` and `ChartTooltipContent` components.",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            'import { ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"',
        },
        {
          kind: "text",
          value: "Add the components to your chart.",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            '<ChartContainer config={chartConfig} className="h-[200px] w-full">\n  <BarChart accessibilityLayer data={chartData}>\n    <CartesianGrid vertical={false} />\n    <XAxis\n      dataKey="month"\n      tickLine={false}\n      tickMargin={10}\n      axisLine={false}\n      tickFormatter={(value) => value.slice(0, 3)}\n    />\n    <ChartTooltip content={<ChartTooltipContent />} />\n    <Bar isAnimationActive={false} dataKey="desktop" fill="var(--color-desktop)" radius={4} />\n    <Bar isAnimationActive={false} dataKey="mobile" fill="var(--color-mobile)" radius={4} />\n  </BarChart>\n</ChartContainer>',
        },
        {
          kind: "text",
          value:
            "Hover to see the tooltips. Easy, right? Two components, and we've got a beautiful tooltip.\n\n\n\n### Add Legend\n\nWe'll do the same for the legend. We'll use the `ChartLegend` and `ChartLegendContent` components from `chart`.\n\n\n\nImport the `ChartLegend` and `ChartLegendContent` components.",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            'import { ChartLegend, ChartLegendContent } from "@/components/ui/chart"',
        },
        {
          kind: "text",
          value: "Add the components to your chart.",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            '<ChartContainer config={chartConfig} className="h-[200px] w-full">\n  <BarChart accessibilityLayer data={chartData}>\n    <CartesianGrid vertical={false} />\n    <XAxis\n      dataKey="month"\n      tickLine={false}\n      tickMargin={10}\n      axisLine={false}\n      tickFormatter={(value) => value.slice(0, 3)}\n    />\n    <ChartTooltip content={<ChartTooltipContent />} />\n    <ChartLegend content={<ChartLegendContent />} />\n    <Bar isAnimationActive={false} dataKey="desktop" fill="var(--color-desktop)" radius={4} />\n    <Bar isAnimationActive={false} dataKey="mobile" fill="var(--color-mobile)" radius={4} />\n  </BarChart>\n</ChartContainer>',
        },
        {
          kind: "text",
          value:
            "Done. You've built your first chart! What's next?\n\n- [Themes and Colors](/docs/components/chart#theming)\n- [Tooltip](/docs/components/chart#tooltip)\n- [Legend](/docs/components/chart#legend)",
        },
      ],
    },
    {
      id: "guide-chart-config-5",
      title: "Chart Config",
      blocks: [
        {
          kind: "text",
          value:
            "The chart config is where you define the labels, icons and colors for a chart.\n\nIt is intentionally decoupled from chart data.\n\nThis allows you to share config and color tokens between charts. It can also work independently for cases where your data or color tokens live remotely or in a different format.",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            'import { Monitor } from "lucide-react"\n\nimport { type ChartConfig } from "@/components/ui/chart"\n\nconst chartConfig = {\n  desktop: {\n    label: "Desktop",\n    icon: Monitor,\n    // A color like \'hsl(220, 98%, 61%)\' or \'var(--color-name)\'\n    color: "var(--chart-1)",\n    // OR a theme object with \'light\' and \'dark\' keys\n    theme: {\n      light: "var(--chart-1)",\n      dark: "#dc2626",\n    },\n  },\n} satisfies ChartConfig',
        },
      ],
    },
    {
      id: "guide-theming-6",
      title: "Theming",
      blocks: [
        {
          kind: "text",
          value:
            "Charts have built-in support for theming. You can use css variables (recommended) or color values in any color format, such as hex, hsl or oklch.\n\n### CSS Variables\n\n\n\nDefine your colors in your css file",
        },
        {
          kind: "code",
          language: "css",
          value:
            '/* @leement/theme provides light and dark chart colors. */\n@import "@leement/theme";\n/* Optional project override */\n:root { --chart-1: var(--lm-color-brand-accent); }\n.dark { --chart-1: var(--lm-color-brand-accent); }',
        },
        {
          kind: "text",
          value: "Add the color to your `chartConfig`",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            'const chartConfig = {\n  desktop: {\n    label: "Desktop",\n    color: "var(--chart-1)",\n  },\n  mobile: {\n    label: "Mobile",\n    color: "var(--chart-2)",\n  },\n} satisfies ChartConfig',
        },
        {
          kind: "text",
          value:
            "### hex, hsl or oklch\n\nYou can also define your colors directly in the chart config. Use the color format you prefer.",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            'const chartConfig = {\n  desktop: {\n    label: "Desktop",\n    color: "var(--chart-1)",\n  },\n  mobile: {\n    label: "Mobile",\n    color: "var(--chart-1)",\n  },\n  tablet: {\n    label: "Tablet",\n    color: "var(--chart-1)",\n  },\n  laptop: {\n    label: "Laptop",\n    color: "var(--chart-2)",\n  },\n} satisfies ChartConfig',
        },
        {
          kind: "text",
          value:
            "### Using Colors\n\nTo use the theme colors in your chart, reference the colors using the format `var(--color-KEY)`.\n\n#### Components",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            '<Bar isAnimationActive={false} dataKey="desktop" fill="var(--color-desktop)" />',
        },
        {
          kind: "text",
          value: "#### Chart Data",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            'const chartData = [\n  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },\n  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },\n]',
        },
        {
          kind: "text",
          value: "#### Tailwind",
        },
        {
          kind: "code",
          language: "tsx",
          value: '<LabelList className="fill-(--color-desktop)" />',
        },
      ],
    },
    {
      id: "guide-tooltip-7",
      title: "Tooltip",
      blocks: [
        {
          kind: "text",
          value:
            "A chart tooltip contains a label, name, indicator and value. You can use a combination of these to customize your tooltip.\n\n\n\nYou can turn on/off any of these using the `hideLabel`, `hideIndicator` props and customize the indicator style using the `indicator` prop.\n\nUse `labelKey` and `nameKey` to use a custom key for the tooltip label and name.\n\nChart comes with the `<ChartTooltip>` and `<ChartTooltipContent>` components. You can use these two components to add custom tooltips to your chart.",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            'import { ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"',
        },
        {
          kind: "code",
          language: "tsx",
          value: "<ChartTooltip content={<ChartTooltipContent />} />",
        },
        {
          kind: "text",
          value:
            "### Props\n\nUse the following props to customize the tooltip.\n\n| Prop            | Type                     | Description                                  |\n| :-------------- | :----------------------- | :------------------------------------------- |\n| `labelKey`      | string                   | The config or data key to use for the label. |\n| `nameKey`       | string                   | The config or data key to use for the name.  |\n| `indicator`     | `dot` `line` or `dashed` | The indicator style for the tooltip.         |\n| `hideLabel`     | boolean                  | Whether to hide the label.                   |\n| `hideIndicator` | boolean                  | Whether to hide the indicator.               |\n\n### Colors\n\nColors are automatically referenced from the chart config.\n\n### Custom\n\nTo use a custom key for tooltip label and names, use the `labelKey` and `nameKey` props.",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            'const chartData = [\n  { browser: "chrome", visitors: 187, fill: "var(--color-chrome)" },\n  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },\n]\n\nconst chartConfig = {\n  visitors: {\n    label: "Total Visitors",\n  },\n  chrome: {\n    label: "Chrome",\n    color: "var(--chart-1)",\n  },\n  safari: {\n    label: "Safari",\n    color: "var(--chart-2)",\n  },\n} satisfies ChartConfig',
        },
        {
          kind: "code",
          language: "tsx",
          value:
            '<ChartTooltip\n  content={<ChartTooltipContent labelKey="visitors" nameKey="browser" />}\n/>',
        },
        {
          kind: "text",
          value:
            "This will use `Total Visitors` for label and `Chrome` and `Safari` for the tooltip names.",
        },
      ],
    },
    {
      id: "guide-legend-8",
      title: "Legend",
      blocks: [
        {
          kind: "text",
          value:
            "You can use the custom `<ChartLegend>` and `<ChartLegendContent>` components to add a legend to your chart.",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            'import { ChartLegend, ChartLegendContent } from "@/components/ui/chart"',
        },
        {
          kind: "code",
          language: "tsx",
          value: "<ChartLegend content={<ChartLegendContent />} />",
        },
        {
          kind: "text",
          value:
            "### Colors\n\nColors are automatically referenced from the chart config.\n\n### Custom\n\nTo use a custom key for legend names, use the `nameKey` prop.",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            'const chartData = [\n  { browser: "chrome", visitors: 187, fill: "var(--color-chrome)" },\n  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },\n]\n\nconst chartConfig = {\n  chrome: {\n    label: "Chrome",\n    color: "var(--chart-1)",\n  },\n  safari: {\n    label: "Safari",\n    color: "var(--chart-2)",\n  },\n} satisfies ChartConfig',
        },
        {
          kind: "code",
          language: "tsx",
          value:
            '<ChartLegend content={<ChartLegendContent nameKey="browser" />} />',
        },
        {
          kind: "text",
          value: "This will use `Chrome` and `Safari` for the legend names.",
        },
      ],
    },
    {
      id: "guide-accessibility-9",
      title: "Labels and keyboard",
      blocks: [
        {
          kind: "text",
          value:
            "You can turn on the `accessibilityLayer` prop to add an accessible layer to your chart.\n\nThis prop adds keyboard access and screen reader support to your charts.",
        },
        {
          kind: "code",
          language: "tsx",
          value: "<LineChart accessibilityLayer />",
        },
      ],
    },
  ],
  checkbox: [
    {
      id: "guide-usage-1",
      title: "Usage",
      blocks: [
        {
          kind: "code",
          language: "tsx",
          value: 'import { Checkbox } from "@/components/ui/checkbox"',
        },
        {
          kind: "code",
          language: "tsx",
          value: "<Checkbox />",
        },
      ],
    },
    {
      id: "guide-checked-state-2",
      title: "Checked State",
      blocks: [
        {
          kind: "text",
          value:
            "Use `defaultChecked` for uncontrolled checkboxes, or `checked` and\n`onCheckedChange` to control the state.",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            'import * as React from "react"\n\nexport function Example() {\n  const [checked, setChecked] = React.useState(false)\n\n  return <Checkbox checked={checked} onCheckedChange={setChecked} />\n}',
        },
      ],
    },
    {
      id: "guide-invalid-state-3",
      title: "Invalid State",
      blocks: [
        {
          kind: "text",
          value:
            "Set `aria-invalid` on the checkbox and `data-invalid` on the field wrapper to\nshow the invalid styles.",
        },
      ],
    },
    {
      id: "guide-basic-4",
      title: "Basic",
      blocks: [
        {
          kind: "text",
          value:
            "Pair the checkbox with `Field` and `FieldLabel` for proper layout and labeling.",
        },
      ],
    },
    {
      id: "guide-description-5",
      title: "Description",
      blocks: [
        {
          kind: "text",
          value: "Use `FieldContent` and `FieldDescription` for helper text.",
        },
      ],
    },
    {
      id: "guide-disabled-6",
      title: "Disabled",
      blocks: [
        {
          kind: "text",
          value:
            "Use the `disabled` prop to prevent interaction and add the `data-disabled` attribute to the `<Field>` component for disabled styles.",
        },
      ],
    },
    {
      id: "guide-group-7",
      title: "Group",
      blocks: [
        {
          kind: "text",
          value: "Use multiple fields to create a checkbox list.",
        },
      ],
    },
  ],
  collapsible: [
    {
      id: "guide-usage-1",
      title: "Usage",
      blocks: [
        {
          kind: "code",
          language: "tsx",
          value:
            'import {\n  Collapsible,\n  CollapsibleContent,\n  CollapsibleTrigger,\n} from "@/components/ui/collapsible"',
        },
        {
          kind: "code",
          language: "tsx",
          value:
            "<Collapsible>\n  <CollapsibleTrigger>Can I use this in my project?</CollapsibleTrigger>\n  <CollapsibleContent>\n    Yes. Free to use for personal and commercial projects. No attribution\n    required.\n  </CollapsibleContent>\n</Collapsible>",
        },
      ],
    },
    {
      id: "guide-composition-2",
      title: "Composition",
      blocks: [
        {
          kind: "text",
          value: "Use the following composition to build a `Collapsible`:",
        },
        {
          kind: "code",
          language: "text",
          value:
            "Collapsible\n\u251c\u2500\u2500 CollapsibleTrigger\n\u2514\u2500\u2500 CollapsibleContent",
        },
      ],
    },
    {
      id: "guide-controlled-state-3",
      title: "Controlled State",
      blocks: [
        {
          kind: "text",
          value:
            "Use the `open` and `onOpenChange` props to control the state.",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            'import * as React from "react"\n\nexport function Example() {\n  const [open, setOpen] = React.useState(false)\n\n  return (\n    <Collapsible open={open} onOpenChange={setOpen}>\n      <CollapsibleTrigger>Toggle</CollapsibleTrigger>\n      <CollapsibleContent>Content</CollapsibleContent>\n    </Collapsible>\n  )\n}',
        },
      ],
    },
    {
      id: "guide-settings-panel-4",
      title: "Settings Panel",
      blocks: [
        {
          kind: "text",
          value: "Use a trigger button to reveal additional settings.",
        },
      ],
    },
    {
      id: "guide-file-tree-5",
      title: "File Tree",
      blocks: [
        {
          kind: "text",
          value: "Use nested collapsibles to build a file tree.",
        },
      ],
    },
  ],
  combobox: [
    {
      id: "guide-usage-1",
      title: "Usage",
      blocks: [
        {
          kind: "code",
          language: "tsx",
          value:
            'import {\n  Combobox,\n  ComboboxContent,\n  ComboboxEmpty,\n  ComboboxInput,\n  ComboboxItem,\n  ComboboxList,\n} from "@/components/ui/combobox"',
        },
        {
          kind: "code",
          language: "tsx",
          value:
            'const frameworks = ["Next.js", "SvelteKit", "Nuxt.js", "Remix", "Astro"]\n\nexport function ExampleCombobox() {\n  return (\n    <Combobox items={frameworks}>\n      <ComboboxInput placeholder="Select a framework" />\n      <ComboboxContent>\n        <ComboboxEmpty>No items found.</ComboboxEmpty>\n        <ComboboxList>\n          {(item) => (\n            <ComboboxItem key={item} value={item}>\n              {item}\n            </ComboboxItem>\n          )}\n        </ComboboxList>\n      </ComboboxContent>\n    </Combobox>\n  )\n}',
        },
      ],
    },
    {
      id: "guide-composition-2",
      title: "Composition",
      blocks: [
        {
          kind: "text",
          value:
            "### Simple\n\nA single-line input and a flat list (see [Basic](#basic)).",
        },
        {
          kind: "code",
          language: "text",
          value:
            "Combobox\n\u251c\u2500\u2500 ComboboxInput\n\u2514\u2500\u2500 ComboboxContent\n    \u251c\u2500\u2500 ComboboxEmpty\n    \u2514\u2500\u2500 ComboboxList\n        \u251c\u2500\u2500 ComboboxItem\n        \u2514\u2500\u2500 ComboboxItem",
        },
        {
          kind: "text",
          value:
            "### With chips\n\nMulti-select with `multiple`, chips, and a chips input (see [Multiple](#multiple)).",
        },
        {
          kind: "code",
          language: "text",
          value:
            "Combobox\n\u251c\u2500\u2500 ComboboxChips\n\u2502   \u251c\u2500\u2500 ComboboxValue\n\u2502   \u2502   \u2514\u2500\u2500 ComboboxChip\n\u2502   \u2514\u2500\u2500 ComboboxChipsInput\n\u2514\u2500\u2500 ComboboxContent\n    \u251c\u2500\u2500 ComboboxEmpty\n    \u2514\u2500\u2500 ComboboxList\n        \u251c\u2500\u2500 ComboboxItem\n        \u2514\u2500\u2500 ComboboxItem",
        },
        {
          kind: "text",
          value:
            "### With groups and collection\n\nNested items per group using `ComboboxCollection` inside each `ComboboxGroup`, with a separator between groups (see [Groups](#groups)).",
        },
        {
          kind: "code",
          language: "text",
          value:
            "Combobox\n\u251c\u2500\u2500 ComboboxInput\n\u2514\u2500\u2500 ComboboxContent\n    \u251c\u2500\u2500 ComboboxEmpty\n    \u2514\u2500\u2500 ComboboxList\n        \u251c\u2500\u2500 ComboboxGroup\n        \u2502   \u251c\u2500\u2500 ComboboxLabel\n        \u2502   \u2514\u2500\u2500 ComboboxCollection\n        \u2502       \u251c\u2500\u2500 ComboboxItem\n        \u2502       \u2514\u2500\u2500 ComboboxItem\n        \u251c\u2500\u2500 ComboboxSeparator\n        \u2514\u2500\u2500 ComboboxGroup\n            \u251c\u2500\u2500 ComboboxLabel\n            \u2514\u2500\u2500 ComboboxCollection\n                \u251c\u2500\u2500 ComboboxItem\n                \u2514\u2500\u2500 ComboboxItem",
        },
      ],
    },
    {
      id: "guide-custom-items-3",
      title: "Custom Items",
      blocks: [
        {
          kind: "text",
          value: "Use `itemToStringValue` when your items are objects.",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            'import * as React from "react"\n\nimport {\n  Combobox,\n  ComboboxContent,\n  ComboboxEmpty,\n  ComboboxInput,\n  ComboboxItem,\n  ComboboxList,\n} from "@/components/ui/combobox"\n\ntype Framework = {\n  label: string\n  value: string\n}\n\nconst frameworks: Framework[] = [\n  { label: "Next.js", value: "next" },\n  { label: "SvelteKit", value: "sveltekit" },\n  { label: "Nuxt", value: "nuxt" },\n]\n\nexport function ExampleComboboxCustomItems() {\n  return (\n    <Combobox\n      items={frameworks}\n      itemToStringValue={(framework) => framework.label}\n    >\n      <ComboboxInput placeholder="Select a framework" />\n      <ComboboxContent>\n        <ComboboxEmpty>No items found.</ComboboxEmpty>\n        <ComboboxList>\n          {(framework) => (\n            <ComboboxItem key={framework.value} value={framework}>\n              {framework.label}\n            </ComboboxItem>\n          )}\n        </ComboboxList>\n      </ComboboxContent>\n    </Combobox>\n  )\n}',
        },
      ],
    },
    {
      id: "guide-multiple-selection-4",
      title: "Multiple Selection",
      blocks: [
        {
          kind: "text",
          value: "Use `multiple` with chips for multi-select behavior.",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            'import * as React from "react"\n\nimport {\n  Combobox,\n  ComboboxChip,\n  ComboboxChips,\n  ComboboxChipsInput,\n  ComboboxContent,\n  ComboboxEmpty,\n  ComboboxInput,\n  ComboboxItem,\n  ComboboxList,\n  ComboboxValue,\n} from "@/components/ui/combobox"\n\nconst frameworks = ["Next.js", "SvelteKit", "Nuxt.js", "Remix", "Astro"]\n\nexport function ExampleComboboxMultiple() {\n  const [value, setValue] = React.useState<string[]>([])\n\n  return (\n    <Combobox\n      items={frameworks}\n      multiple\n      value={value}\n      onValueChange={setValue}\n    >\n      <ComboboxChips>\n        <ComboboxValue>\n          {value.map((item) => (\n            <ComboboxChip key={item}>{item}</ComboboxChip>\n          ))}\n        </ComboboxValue>\n        <ComboboxChipsInput placeholder="Add framework" />\n      </ComboboxChips>\n      <ComboboxContent>\n        <ComboboxEmpty>No items found.</ComboboxEmpty>\n        <ComboboxList>\n          {(item) => (\n            <ComboboxItem key={item} value={item}>\n              {item}\n            </ComboboxItem>\n          )}\n        </ComboboxList>\n      </ComboboxContent>\n    </Combobox>\n  )\n}',
        },
      ],
    },
    {
      id: "guide-basic-5",
      title: "Basic",
      blocks: [
        {
          kind: "text",
          value: "A simple combobox with a list of frameworks.",
        },
      ],
    },
    {
      id: "guide-multiple-6",
      title: "Multiple",
      blocks: [
        {
          kind: "text",
          value:
            "A combobox with multiple selection using `multiple` and `ComboboxChips`.",
        },
      ],
    },
    {
      id: "guide-clear-button-7",
      title: "Clear Button",
      blocks: [
        {
          kind: "text",
          value: "Use the `showClear` prop to show a clear button.",
        },
      ],
    },
    {
      id: "guide-groups-8",
      title: "Groups",
      blocks: [
        {
          kind: "text",
          value: "Use `ComboboxGroup` and `ComboboxSeparator` to group items.",
        },
      ],
    },
    {
      id: "guide-custom-items-9",
      title: "Custom Items",
      blocks: [
        {
          kind: "text",
          value: "You can render a custom component inside `ComboboxItem`.",
        },
      ],
    },
    {
      id: "guide-invalid-10",
      title: "Invalid",
      blocks: [
        {
          kind: "text",
          value: "Use the `aria-invalid` prop to make the combobox invalid.",
        },
      ],
    },
    {
      id: "guide-disabled-11",
      title: "Disabled",
      blocks: [
        {
          kind: "text",
          value: "Use the `disabled` prop to disable the combobox.",
        },
      ],
    },
    {
      id: "guide-auto-highlight-12",
      title: "Auto Highlight",
      blocks: [
        {
          kind: "text",
          value:
            "Use the `autoHighlight` prop to automatically highlight the first item on filter.",
        },
      ],
    },
    {
      id: "guide-popup-13",
      title: "Popup",
      blocks: [
        {
          kind: "text",
          value:
            "You can trigger the combobox from a button or any other component by using the `render` prop. Move the `ComboboxInput` inside the `ComboboxContent`.",
        },
      ],
    },
    {
      id: "guide-input-group-14",
      title: "Input Group",
      blocks: [
        {
          kind: "text",
          value:
            "You can add an addon to the combobox by using the `InputGroupAddon` component inside the `ComboboxInput`.",
        },
      ],
    },
  ],
  command: [
    {
      id: "guide-about-1",
      title: "About",
      blocks: [
        {
          kind: "text",
          value:
            "The `<Command />` component uses the [`cmdk`](https://github.com/dip/cmdk) component by [Dip](https://www.dip.org/).",
        },
      ],
    },
    {
      id: "guide-usage-2",
      title: "Usage",
      blocks: [
        {
          kind: "code",
          language: "tsx",
          value:
            'import {\n  Command,\n  CommandDialog,\n  CommandEmpty,\n  CommandGroup,\n  CommandInput,\n  CommandItem,\n  CommandList,\n  CommandSeparator,\n  CommandShortcut,\n} from "@/components/ui/command"',
        },
        {
          kind: "code",
          language: "tsx",
          value:
            '<Command className="max-w-sm rounded-lg border">\n  <CommandInput placeholder="Type a command or search..." />\n  <CommandList>\n    <CommandEmpty>No results found.</CommandEmpty>\n    <CommandGroup heading="Suggestions">\n      <CommandItem>Calendar</CommandItem>\n      <CommandItem>Search Emoji</CommandItem>\n      <CommandItem>Calculator</CommandItem>\n    </CommandGroup>\n    <CommandSeparator />\n    <CommandGroup heading="Settings">\n      <CommandItem>Profile</CommandItem>\n      <CommandItem>Billing</CommandItem>\n      <CommandItem>Settings</CommandItem>\n    </CommandGroup>\n  </CommandList>\n</Command>',
        },
      ],
    },
    {
      id: "guide-composition-3",
      title: "Composition",
      blocks: [
        {
          kind: "text",
          value: "Use the following composition to build a `Command`:",
        },
        {
          kind: "code",
          language: "text",
          value:
            "Command\n\u251c\u2500\u2500 CommandInput\n\u2514\u2500\u2500 CommandList\n    \u251c\u2500\u2500 CommandEmpty\n    \u251c\u2500\u2500 CommandGroup\n    \u2502   \u251c\u2500\u2500 CommandItem\n    \u2502   \u2514\u2500\u2500 CommandItem\n    \u251c\u2500\u2500 CommandSeparator\n    \u2514\u2500\u2500 CommandGroup\n        \u251c\u2500\u2500 CommandItem\n        \u2514\u2500\u2500 CommandItem",
        },
      ],
    },
    {
      id: "guide-basic-4",
      title: "Basic",
      blocks: [
        {
          kind: "text",
          value: "A simple command menu in a dialog.",
        },
      ],
    },
    {
      id: "guide-groups-5",
      title: "Groups",
      blocks: [
        {
          kind: "text",
          value: "A command menu with groups, icons and separators.",
        },
      ],
    },
    {
      id: "guide-scrollable-6",
      title: "Scrollable",
      blocks: [
        {
          kind: "text",
          value: "Scrollable command menu with multiple items.",
        },
      ],
    },
  ],
  "context-menu": [
    {
      id: "guide-usage-1",
      title: "Usage",
      blocks: [
        {
          kind: "code",
          language: "tsx",
          value:
            'import {\n  ContextMenu,\n  ContextMenuContent,\n  ContextMenuItem,\n  ContextMenuTrigger,\n} from "@/components/ui/context-menu"',
        },
        {
          kind: "code",
          language: "tsx",
          value:
            "<ContextMenu>\n  <ContextMenuTrigger>Right click here</ContextMenuTrigger>\n  <ContextMenuContent>\n    <ContextMenuItem>Profile</ContextMenuItem>\n    <ContextMenuItem>Billing</ContextMenuItem>\n    <ContextMenuItem>Team</ContextMenuItem>\n    <ContextMenuItem>Subscription</ContextMenuItem>\n  </ContextMenuContent>\n</ContextMenu>",
        },
      ],
    },
    {
      id: "guide-composition-2",
      title: "Composition",
      blocks: [
        {
          kind: "text",
          value: "Use the following composition to build a `ContextMenu`:",
        },
        {
          kind: "code",
          language: "text",
          value:
            "ContextMenu\n\u251c\u2500\u2500 ContextMenuTrigger\n\u2514\u2500\u2500 ContextMenuContent\n    \u251c\u2500\u2500 ContextMenuGroup\n    \u2502   \u251c\u2500\u2500 ContextMenuLabel\n    \u2502   \u251c\u2500\u2500 ContextMenuItem\n    \u2502   \u2514\u2500\u2500 ContextMenuItem\n    \u251c\u2500\u2500 ContextMenuSeparator\n    \u251c\u2500\u2500 ContextMenuGroup\n    \u2502   \u251c\u2500\u2500 ContextMenuLabel\n    \u2502   \u251c\u2500\u2500 ContextMenuCheckboxItem\n    \u2502   \u2514\u2500\u2500 ContextMenuCheckboxItem\n    \u251c\u2500\u2500 ContextMenuSeparator\n    \u251c\u2500\u2500 ContextMenuGroup\n    \u2502   \u251c\u2500\u2500 ContextMenuLabel\n    \u2502   \u2514\u2500\u2500 ContextMenuRadioGroup\n    \u2502       \u251c\u2500\u2500 ContextMenuRadioItem\n    \u2502       \u2514\u2500\u2500 ContextMenuRadioItem\n    \u2514\u2500\u2500 ContextMenuSub\n        \u251c\u2500\u2500 ContextMenuSubTrigger\n        \u2514\u2500\u2500 ContextMenuSubContent\n            \u2514\u2500\u2500 ContextMenuGroup\n                \u251c\u2500\u2500 ContextMenuItem\n                \u2514\u2500\u2500 ContextMenuItem",
        },
      ],
    },
    {
      id: "guide-basic-3",
      title: "Basic",
      blocks: [
        {
          kind: "text",
          value: "A simple context menu with a few actions.",
        },
      ],
    },
    {
      id: "guide-submenu-4",
      title: "Submenu",
      blocks: [
        {
          kind: "text",
          value: "Use `ContextMenuSub` to nest secondary actions.",
        },
      ],
    },
    {
      id: "guide-shortcuts-5",
      title: "Shortcuts",
      blocks: [
        {
          kind: "text",
          value: "Add `ContextMenuShortcut` to show keyboard hints.",
        },
      ],
    },
    {
      id: "guide-groups-6",
      title: "Groups",
      blocks: [
        {
          kind: "text",
          value: "Group related actions and separate them with dividers.",
        },
      ],
    },
    {
      id: "guide-icons-7",
      title: "Icons",
      blocks: [
        {
          kind: "text",
          value: "Combine icons with labels for quick scanning.",
        },
      ],
    },
    {
      id: "guide-checkboxes-8",
      title: "Checkboxes",
      blocks: [
        {
          kind: "text",
          value: "Use `ContextMenuCheckboxItem` for toggles.",
        },
      ],
    },
    {
      id: "guide-radio-9",
      title: "Radio",
      blocks: [
        {
          kind: "text",
          value: "Use `ContextMenuRadioItem` for exclusive choices.",
        },
      ],
    },
    {
      id: "guide-destructive-10",
      title: "Destructive",
      blocks: [
        {
          kind: "text",
          value:
            'Use `variant="destructive"` to style the menu item as destructive.',
        },
      ],
    },
    {
      id: "guide-sides-11",
      title: "Sides",
      blocks: [
        {
          kind: "text",
          value: "Control submenu placement with side and align props.",
        },
      ],
    },
  ],
  "data-table": [
    {
      id: "guide-table-version",
      title: "Build your own data table",
      blocks: [
        {
          kind: "text",
          value:
            "This guide adapts the pinned upstream v9 recipe to the v8 version used by Leement. The runtime example is the full Table composition. AdvancedDataTable is an optional convenience pattern. DataTableColumnHeader, DataTablePagination and DataTableViewOptions are editable parts of @leement/data-table.",
        },
      ],
    },
    {
      id: "guide-prerequisites-1",
      title: "Prerequisites",
      blocks: [
        {
          kind: "text",
          value:
            "We are going to build a table to show recent payments. Here's what our data looks like:",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            'type Payment = {\n  id: string\n  amount: number\n  status: "pending" | "processing" | "success" | "failed"\n  email: string\n}\n\nexport const payments: Payment[] = [\n  {\n    id: "728ed52f",\n    amount: 100,\n    status: "pending",\n    email: "m@example.com",\n  },\n  {\n    id: "489e1d42",\n    amount: 125,\n    status: "processing",\n    email: "example@gmail.com",\n  },\n  // ...\n]',
        },
      ],
    },
    {
      id: "guide-project-structure-2",
      title: "Project Structure",
      blocks: [
        {
          kind: "text",
          value: "Start by creating the following file structure:",
        },
        {
          kind: "code",
          language: "txt",
          value:
            "app\n\u2514\u2500\u2500 payments\n    \u251c\u2500\u2500 columns.tsx\n    \u251c\u2500\u2500 data-table-features.ts\n    \u251c\u2500\u2500 data-table.tsx\n    \u2514\u2500\u2500 page.tsx",
        },
        {
          kind: "text",
          value:
            "I'm using a Next.js example here but this works for any other React framework.\n\n- `columns.tsx` (client component) will contain our column definitions.\n- `data-table-models.ts` will contain the shared `features` object that tells TanStack Table which behavior to enable.\n- `data-table.tsx` (client component) will contain our `<DataTable />` component.\n- `page.tsx` (server component) is where we'll fetch data and render our table.",
        },
      ],
    },
    {
      id: "guide-set-up-table-features-3",
      title: "Set up Table Features",
      blocks: [
        {
          kind: "text",
          value:
            "Use TanStack Table v8 in this recipe. Supply the appropriate row models to useReactTable. The complete example includes all sorting, filtering, selection, visibility and pagination controls.",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            'import { getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel } from "@tanstack/react-table";\n// TanStack Table v8: add row models to useReactTable.\nexport const rowModels = {\n  getCoreRowModel: getCoreRowModel(),\n  getFilteredRowModel: getFilteredRowModel(),\n  getPaginationRowModel: getPaginationRowModel(),\n  getSortedRowModel: getSortedRowModel(),\n};',
        },
        {
          kind: "text",
          value:
            "Use TanStack Table v8 in this recipe. Supply the appropriate row models to useReactTable. The complete example includes all sorting, filtering, selection, visibility and pagination controls.",
        },
      ],
    },
    {
      id: "guide-basic-table-4",
      title: "Basic Table",
      blocks: [
        {
          kind: "text",
          value:
            "Let's start by building a basic table.\n\n\n\n### Column Definitions\n\nFirst, we'll define our columns.",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            '"use client"\n\nimport { createColumnHelper } from "@tanstack/react-table"\n\nimport { type DataTableFeatures } from "./data-table-features"\n\n// This type is used to define the shape of our data.\n// You can use a Zod schema here if you want.\nexport type Payment = {\n  id: string\n  amount: number\n  status: "pending" | "processing" | "success" | "failed"\n  email: string\n}\n\n// Use `accessor` for data columns and `display` for columns without one.\nconst columnHelper = createColumnHelper<Payment>()\n\nexport const columns = [\n  columnHelper.accessor("status", {\n    header: "Status",\n  }),\n  columnHelper.accessor("email", {\n    header: "Email",\n  }),\n  columnHelper.accessor("amount", {\n    header: "Amount",\n  }),\n]',
        },
        {
          kind: "text",
          value:
            "**Note:** Columns are where you define the core of what your table\nwill look like. They define the data that will be displayed, how it will be\nformatted, sorted and filtered.\n\n\n\n### `<DataTable />` component\n\nNext, we'll create a `<DataTable />` component to render our table.",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            '"use client"\n\nimport { useReactTable, flexRender, type ColumnDef, type RowData } from "@tanstack/react-table"\n\nimport {\n  Table,\n  TableBody,\n  TableCell,\n  TableHead,\n  TableHeader,\n  TableRow,\n} from "@/components/ui/table"\n\nimport { features, type DataTableFeatures } from "./data-table-features"\n\ninterface DataTableProps<TData extends RowData> {\n  columns: ColumnDef<TData>[]\n  data: TData[]\n}\n\nexport function DataTable<TData extends RowData>({\n  columns,\n  data,\n}: DataTableProps<TData>) {\n  const table = useReactTable({\n    ...rowModels,\n    data,\n    columns,\n  })\n\n  return (\n    <div className="overflow-hidden rounded-md border">\n      <Table>\n        <TableHeader>\n          {table.getHeaderGroups().map((headerGroup) => (\n            <TableRow key={headerGroup.id}>\n              {headerGroup.headers.map((header) => {\n                return (\n                  <TableHead key={header.id}>\n                    {header.isPlaceholder ? null : (\n                      flexRender(header.column.columnDef.header, header.getContext())\n                    )}\n                  </TableHead>\n                )\n              })}\n            </TableRow>\n          ))}\n        </TableHeader>\n        <TableBody>\n          {table.getRowModel().rows?.length ? (\n            table.getRowModel().rows.map((row) => (\n              <TableRow\n                key={row.id}\n                data-state={row.getIsSelected() && "selected"}\n              >\n                {row.getVisibleCells().map((cell) => (\n                  <TableCell key={cell.id}>\n                    flexRender(cell.column.columnDef.cell, cell.getContext())\n                  </TableCell>\n                ))}\n              </TableRow>\n            ))\n          ) : (\n            <TableRow>\n              <TableCell colSpan={columns.length} className="h-24 text-center">\n                No results.\n              </TableCell>\n            </TableRow>\n          )}\n        </TableBody>\n      </Table>\n    </div>\n  )\n}',
        },
        {
          kind: "text",
          value:
            "Use TanStack Table v8 in this recipe. Supply the appropriate row models to useReactTable. The complete example includes all sorting, filtering, selection, visibility and pagination controls.",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            'import { columns, Payment } from "./columns"\nimport { DataTable } from "./data-table"\n\nasync function getData(): Promise<Payment[]> {\n  // Fetch data from your API here.\n  return [\n    {\n      id: "728ed52f",\n      amount: 100,\n      status: "pending",\n      email: "m@example.com",\n    },\n    // ...\n  ]\n}\n\nexport default async function DemoPage() {\n  const data = await getData()\n\n  return (\n    <div className="container mx-auto py-10">\n      <DataTable columns={columns} data={data} />\n    </div>\n  )\n}',
        },
      ],
    },
    {
      id: "guide-cell-formatting-5",
      title: "Cell Formatting",
      blocks: [
        {
          kind: "text",
          value:
            "Let's format the amount cell to display the dollar amount. We'll also align the cell to the right.\n\n\n\n### Update columns definition\n\nUpdate the `header` and `cell` definitions for amount as follows:",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            'export const columns = [\n  columnHelper.accessor("amount", {\n    header: () => <div className="text-right">Amount</div>,\n    cell: ({ row }) => {\n      const amount = parseFloat(row.getValue("amount"))\n      const formatted = new Intl.NumberFormat("en-US", {\n        style: "currency",\n        currency: "USD",\n      }).format(amount)\n\n      return <div className="text-right font-medium">{formatted}</div>\n    },\n  }),\n]',
        },
        {
          kind: "text",
          value:
            "You can use the same approach to format other cells and headers.",
        },
      ],
    },
    {
      id: "guide-row-actions-6",
      title: "Row Actions",
      blocks: [
        {
          kind: "text",
          value:
            "Let's add row actions to our table. We'll use a `<DropdownMenu />` component for this.\n\n\n\n### Update columns definition\n\nUpdate our columns definition to add a new `actions` column. The `actions` cell returns a `<DropdownMenu />` component.",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            '"use client"\n\nimport { createColumnHelper } from "@tanstack/react-table"\nimport { MoreHorizontal } from "lucide-react"\n\nimport { Button } from "@/components/ui/button"\nimport {\n  DropdownMenu,\n  DropdownMenuContent,\n  DropdownMenuItem,\n  DropdownMenuLabel,\n  DropdownMenuSeparator,\n  DropdownMenuTrigger,\n} from "@/components/ui/dropdown-menu"\n\nexport const columns = [\n  // ...\n  columnHelper.display({\n    id: "actions",\n    cell: ({ row }) => {\n      const payment = row.original\n\n      return (\n        <DropdownMenu>\n          <DropdownMenuTrigger\n            render={<Button variant="ghost" className="h-8 w-8 p-0" />}\n          >\n            <span className="sr-only">Open menu</span>\n            <MoreHorizontal className="h-4 w-4" />\n          </DropdownMenuTrigger>\n          <DropdownMenuContent align="end">\n            <DropdownMenuLabel>Actions</DropdownMenuLabel>\n            <DropdownMenuItem\n              onClick={() => navigator.clipboard.writeText(payment.id)}\n            >\n              Copy payment ID\n            </DropdownMenuItem>\n            <DropdownMenuSeparator />\n            <DropdownMenuItem>View customer</DropdownMenuItem>\n            <DropdownMenuItem>View payment details</DropdownMenuItem>\n          </DropdownMenuContent>\n        </DropdownMenu>\n      )\n    },\n  }),\n  // ...\n]',
        },
        {
          kind: "text",
          value:
            "You can access the row data using `row.original` in the `cell` function. Use this to handle actions for your row eg. use the `id` to make a DELETE call to your API.",
        },
      ],
    },
    {
      id: "guide-pagination-7",
      title: "Pagination",
      blocks: [
        {
          kind: "text",
          value:
            "Use TanStack Table v8 in this recipe. Supply the appropriate row models to useReactTable. The complete example includes all sorting, filtering, selection, visibility and pagination controls.",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            'import { Button } from "@/components/ui/button"\n\nexport function DataTable<TData extends RowData>({\n  columns,\n  data,\n}: DataTableProps<TData>) {\n  const table = useReactTable({\n    ...rowModels,\n    data,\n    columns,\n  })\n\n  return (\n    <div>\n      <div className="overflow-hidden rounded-md border">\n        <Table>\n          { // .... }\n        </Table>\n      </div>\n      <div className="flex items-center justify-end space-x-2 py-4">\n        <Button\n          variant="outline"\n          size="sm"\n          onClick={() => table.previousPage()}\n          disabled={!table.getCanPreviousPage()}\n        >\n          Previous\n        </Button>\n        <Button\n          variant="outline"\n          size="sm"\n          onClick={() => table.nextPage()}\n          disabled={!table.getCanNextPage()}\n        >\n          Next\n        </Button>\n      </div>\n    </div>\n  )\n}',
        },
        {
          kind: "text",
          value:
            "See [Reusable Components](#reusable-components) section for a more advanced pagination component.",
        },
      ],
    },
    {
      id: "guide-sorting-8",
      title: "Sorting",
      blocks: [
        {
          kind: "text",
          value:
            "Use TanStack Table v8 in this recipe. Supply the appropriate row models to useReactTable. The complete example includes all sorting, filtering, selection, visibility and pagination controls.",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            '"use client"\n\nimport * as React from "react"\nimport {\n  useReactTable, flexRender,\n  type ColumnDef,\n  type RowData,\n  type SortingState,\n} from "@tanstack/react-table"\n\nexport function DataTable<TData extends RowData>({\n  columns,\n  data,\n}: DataTableProps<TData>) {\n  const [sorting, setSorting] = React.useState<SortingState>([])\n\n  const table = useReactTable({\n    ...rowModels,\n    data,\n    columns,\n    onSortingChange: setSorting,\n    state: {\n      sorting,\n    },\n  })\n\n  return (\n    <div>\n      <div className="overflow-hidden rounded-md border">\n        <Table>{ ... }</Table>\n      </div>\n    </div>\n  )\n}',
        },
        {
          kind: "text",
          value:
            "### Make header cell sortable\n\nWe can now update the `email` header cell to add sorting controls.",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            '"use client"\n\nimport { createColumnHelper } from "@tanstack/react-table"\nimport { ArrowUpDown } from "lucide-react"\n\nexport const columns = [\n  columnHelper.accessor("email", {\n    header: ({ column }) => {\n      return (\n        <Button\n          variant="ghost"\n          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}\n        >\n          Email\n          <ArrowUpDown className="ml-2 h-4 w-4" />\n        </Button>\n      )\n    },\n  }),\n]',
        },
        {
          kind: "text",
          value:
            "This will automatically sort the table (asc and desc) when the user toggles on the header cell.",
        },
      ],
    },
    {
      id: "guide-filtering-9",
      title: "Filtering",
      blocks: [
        {
          kind: "text",
          value:
            "Use TanStack Table v8 in this recipe. Supply the appropriate row models to useReactTable. The complete example includes all sorting, filtering, selection, visibility and pagination controls.",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            '"use client"\n\nimport * as React from "react"\nimport {\n  useReactTable, flexRender,\n  type ColumnDef,\n  type ColumnFiltersState,\n  type RowData,\n  type SortingState,\n} from "@tanstack/react-table"\n\nimport { Button } from "@/components/ui/button"\nimport { Input } from "@/components/ui/input"\n\nexport function DataTable<TData extends RowData>({\n  columns,\n  data,\n}: DataTableProps<TData>) {\n  const [sorting, setSorting] = React.useState<SortingState>([])\n  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(\n    []\n  )\n\n  const table = useReactTable({\n    ...rowModels,\n    data,\n    columns,\n    onSortingChange: setSorting,\n    onColumnFiltersChange: setColumnFilters,\n    state: {\n      sorting,\n      columnFilters,\n    },\n  })\n\n  return (\n    <div>\n      <div className="flex items-center py-4">\n        <Input\n          placeholder="Filter emails..."\n          value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}\n          onChange={(event) =>\n            table.getColumn("email")?.setFilterValue(event.target.value)\n          }\n          className="max-w-sm"\n        />\n      </div>\n      <div className="overflow-hidden rounded-md border">\n        <Table>{ ... }</Table>\n      </div>\n    </div>\n  )\n}',
        },
        {
          kind: "text",
          value:
            "Filtering is now enabled for the `email` column. You can add filters to other columns as well. See the [filtering docs](https://tanstack.com/table/latest/docs/framework/react/guide/column-filtering) for more information on customizing filters.",
        },
      ],
    },
    {
      id: "guide-visibility-10",
      title: "Visibility",
      blocks: [
        {
          kind: "text",
          value:
            "Adding column visibility is fairly simple using `@tanstack/react-table` visibility API.\n\n\n\n### Update `<DataTable>`",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            '"use client"\n\nimport * as React from "react"\nimport {\n  useReactTable, flexRender,\n  type ColumnDef,\n  type ColumnFiltersState,\n  type ColumnVisibilityState,\n  type RowData,\n  type SortingState,\n} from "@tanstack/react-table"\n\nimport { Button } from "@/components/ui/button"\nimport {\n  DropdownMenu,\n  DropdownMenuCheckboxItem,\n  DropdownMenuContent,\n  DropdownMenuTrigger,\n} from "@/components/ui/dropdown-menu"\n\nexport function DataTable<TData extends RowData>({\n  columns,\n  data,\n}: DataTableProps<TData>) {\n  const [sorting, setSorting] = React.useState<SortingState>([])\n  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(\n    []\n  )\n  const [columnVisibility, setColumnVisibility] =\n    React.useState<ColumnVisibilityState>({})\n\n  const table = useReactTable({\n    ...rowModels,\n    data,\n    columns,\n    onSortingChange: setSorting,\n    onColumnFiltersChange: setColumnFilters,\n    onColumnVisibilityChange: setColumnVisibility,\n    state: {\n      sorting,\n      columnFilters,\n      columnVisibility,\n    },\n  })\n\n  return (\n    <div>\n      <div className="flex items-center py-4">\n        <Input\n          placeholder="Filter emails..."\n          value={table.getColumn("email")?.getFilterValue() as string}\n          onChange={(event) =>\n            table.getColumn("email")?.setFilterValue(event.target.value)\n          }\n          className="max-w-sm"\n        />\n        <DropdownMenu>\n          <DropdownMenuTrigger render={<Button variant="outline" className="ml-auto" />}>\n            Columns\n          </DropdownMenuTrigger>\n          <DropdownMenuContent align="end">\n            {table\n              .getAllColumns()\n              .filter(\n                (column) => column.getCanHide()\n              )\n              .map((column) => {\n                return (\n                  <DropdownMenuCheckboxItem\n                    key={column.id}\n                    className="capitalize"\n                    checked={column.getIsVisible()}\n                    onCheckedChange={(value) =>\n                      column.toggleVisibility(!!value)\n                    }\n                  >\n                    {column.id}\n                  </DropdownMenuCheckboxItem>\n                )\n              })}\n          </DropdownMenuContent>\n        </DropdownMenu>\n      </div>\n      <div className="overflow-hidden rounded-md border">\n        <Table>{ ... }</Table>\n      </div>\n    </div>\n  )\n}',
        },
        {
          kind: "text",
          value:
            "This adds a dropdown menu that you can use to toggle column visibility.",
        },
      ],
    },
    {
      id: "guide-row-selection-11",
      title: "Row Selection",
      blocks: [
        {
          kind: "text",
          value:
            "Next, we're going to add row selection to our table.\n\n\n\n### Update column definitions",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            '"use client"\n\nimport { createColumnHelper } from "@tanstack/react-table"\n\nimport { Badge } from "@/components/ui/badge"\nimport { Checkbox } from "@/components/ui/checkbox"\n\nexport const columns = [\n  columnHelper.display({\n    id: "select",\n    header: ({ table }) => (\n      <Checkbox\n        checked={table.getIsAllPageRowsSelected()}\n        indeterminate={\n          table.getIsSomePageRowsSelected() && !table.getIsAllPageRowsSelected()\n        }\n        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}\n        aria-label="Select all"\n      />\n    ),\n    cell: ({ row }) => (\n      <Checkbox\n        checked={row.getIsSelected()}\n        onCheckedChange={(value) => row.toggleSelected(!!value)}\n        aria-label="Select row"\n      />\n    ),\n    enableSorting: false,\n    enableHiding: false,\n  }),\n]',
        },
        {
          kind: "text",
          value: "### Update `<DataTable>`",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            'export function DataTable<TData extends RowData>({\n  columns,\n  data,\n}: DataTableProps<TData>) {\n  const [sorting, setSorting] = React.useState<SortingState>([])\n  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(\n    []\n  )\n  const [columnVisibility, setColumnVisibility] =\n    React.useState<ColumnVisibilityState>({})\n  const [rowSelection, setRowSelection] = React.useState({})\n\n  const table = useReactTable({\n    ...rowModels,\n    data,\n    columns,\n    onSortingChange: setSorting,\n    onColumnFiltersChange: setColumnFilters,\n    onColumnVisibilityChange: setColumnVisibility,\n    onRowSelectionChange: setRowSelection,\n    state: {\n      sorting,\n      columnFilters,\n      columnVisibility,\n      rowSelection,\n    },\n  })\n\n  return (\n    <div>\n      <div className="overflow-hidden rounded-md border">\n        <Table />\n      </div>\n    </div>\n  )\n}',
        },
        {
          kind: "text",
          value:
            "This adds a checkbox to each row and a checkbox in the header to select all rows.\n\n### Show selected rows\n\nYou can show the number of selected rows using the `table.getFilteredSelectedRowModel()` API.",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            '<div className="flex-1 text-sm text-muted-foreground">\n  {table.getFilteredSelectedRowModel().rows.length} of{" "}\n  {table.getFilteredRowModel().rows.length} row(s) selected.\n</div>',
        },
      ],
    },
    {
      id: "guide-reusable-components-12",
      title: "Reusable Components",
      blocks: [
        {
          kind: "text",
          value:
            "Use TanStack Table v8 in this recipe. Supply the appropriate row models to useReactTable. The complete example includes all sorting, filtering, selection, visibility and pagination controls.",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            'export const columns = [\n  columnHelper.accessor("email", {\n    header: ({ column }) => (\n      <DataTableColumnHeader column={column} title="Email" />\n    ),\n  }),\n]',
        },
        {
          kind: "text",
          value:
            "### Pagination\n\nAdd pagination controls to your table including page size and selection count.",
        },
        {
          kind: "code",
          language: "tsx",
          value: "<DataTablePagination table={table} />",
        },
        {
          kind: "text",
          value:
            "### Column toggle\n\nA component to toggle column visibility.",
        },
        {
          kind: "code",
          language: "tsx",
          value: "<DataTableViewOptions table={table} />",
        },
      ],
    },
  ],
  "date-picker": [
    {
      id: "guide-usage-1",
      title: "Usage",
      blocks: [
        {
          kind: "code",
          language: "tsx",
          value:
            '"use client"\n\nimport * as React from "react"\nimport { cn } from "@/lib/utils"\nimport { format } from "date-fns"\nimport { Calendar as CalendarIcon } from "lucide-react"\n\nimport { Button } from "@/components/ui/button"\nimport { Calendar } from "@/components/ui/calendar"\nimport {\n  Popover,\n  PopoverContent,\n  PopoverTrigger,\n} from "@/components/ui/popover"\n\nexport function DatePickerDemo() {\n  const [date, setDate] = React.useState<Date>()\n\n  return (\n    <Popover>\n      <PopoverTrigger\n        render={\n          <Button\n            variant="outline"\n            data-empty={!date}\n            className="justify-start text-left font-normal data-[empty=true]:text-muted-foreground"\n          />\n        }\n      >\n        <CalendarIcon />\n        {date ? format(date, "PPP") : <span>Pick a date</span>}\n      </PopoverTrigger>\n      <PopoverContent className="w-auto p-0">\n        <Calendar mode="single" selected={date} onSelect={setDate} />\n      </PopoverContent>\n    </Popover>\n  )\n}',
        },
        {
          kind: "text",
          value:
            "See the [React DayPicker](https://react-day-picker.js.org) documentation for more information.",
        },
      ],
    },
    {
      id: "guide-composition-2",
      title: "Composition",
      blocks: [
        {
          kind: "text",
          value:
            "A date picker is built from `Popover` and `Calendar` (there is no `DatePicker` root component):",
        },
        {
          kind: "code",
          language: "text",
          value:
            "Popover\n\u251c\u2500\u2500 PopoverTrigger\n\u2514\u2500\u2500 PopoverContent\n    \u2514\u2500\u2500 Calendar",
        },
      ],
    },
    {
      id: "guide-basic-3",
      title: "Basic",
      blocks: [
        {
          kind: "text",
          value: "A basic date picker component.",
        },
      ],
    },
    {
      id: "guide-range-picker-4",
      title: "Range Picker",
      blocks: [
        {
          kind: "text",
          value: "A date picker component for selecting a range of dates.",
        },
      ],
    },
    {
      id: "guide-date-of-birth-5",
      title: "Date of Birth",
      blocks: [
        {
          kind: "text",
          value:
            "A date picker component for selecting a date of birth. This component includes a dropdown caption layout for date and month selection.",
        },
      ],
    },
    {
      id: "guide-input-6",
      title: "Input",
      blocks: [
        {
          kind: "text",
          value:
            "A date picker component with an input field for selecting a date.",
        },
      ],
    },
    {
      id: "guide-time-picker-7",
      title: "Time Picker",
      blocks: [
        {
          kind: "text",
          value:
            "A date picker component with a time input field for selecting a time.",
        },
      ],
    },
    {
      id: "guide-natural-language-picker-8",
      title: "Natural Language Picker",
      blocks: [
        {
          kind: "text",
          value:
            "This component uses the `chrono-node` library to parse natural language dates.",
        },
      ],
    },
  ],
  dialog: [
    {
      id: "guide-usage-1",
      title: "Usage",
      blocks: [
        {
          kind: "code",
          language: "tsx",
          value:
            'import {\n  Dialog,\n  DialogContent,\n  DialogDescription,\n  DialogHeader,\n  DialogTitle,\n  DialogTrigger,\n} from "@/components/ui/dialog"',
        },
        {
          kind: "code",
          language: "tsx",
          value:
            "<Dialog>\n  <DialogTrigger>Open</DialogTrigger>\n  <DialogContent>\n    <DialogHeader>\n      <DialogTitle>Are you absolutely sure?</DialogTitle>\n      <DialogDescription>\n        This action cannot be undone. This will permanently delete your account\n        and remove your data from our servers.\n      </DialogDescription>\n    </DialogHeader>\n  </DialogContent>\n</Dialog>",
        },
      ],
    },
    {
      id: "guide-composition-2",
      title: "Composition",
      blocks: [
        {
          kind: "text",
          value: "Use the following composition to build a `Dialog`:",
        },
        {
          kind: "code",
          language: "text",
          value:
            "Dialog\n\u251c\u2500\u2500 DialogTrigger\n\u2514\u2500\u2500 DialogContent\n    \u251c\u2500\u2500 DialogHeader\n    \u2502   \u251c\u2500\u2500 DialogTitle\n    \u2502   \u2514\u2500\u2500 DialogDescription\n    \u2514\u2500\u2500 DialogFooter",
        },
      ],
    },
    {
      id: "guide-custom-close-button-3",
      title: "Custom Close Button",
      blocks: [
        {
          kind: "text",
          value: "Replace the default close control with your own button.",
        },
      ],
    },
    {
      id: "guide-no-close-button-4",
      title: "No Close Button",
      blocks: [
        {
          kind: "text",
          value: "Use `showCloseButton={false}` to hide the close button.",
        },
      ],
    },
    {
      id: "guide-sticky-footer-5",
      title: "Sticky Footer",
      blocks: [
        {
          kind: "text",
          value: "Keep actions visible while the content scrolls.",
        },
      ],
    },
    {
      id: "guide-scrollable-content-6",
      title: "Scrollable Content",
      blocks: [
        {
          kind: "text",
          value: "Long content can scroll while the header stays in view.",
        },
      ],
    },
  ],
  direction: [
    {
      id: "guide-composition-notes-1",
      title: "Composition notes",
      blocks: [
        {
          kind: "text",
          value:
            "The `DirectionProvider` component is used to set the text direction (`ltr` or `rtl`) for your application. This is essential for supporting right-to-left languages like Arabic, Hebrew, and Persian.\n\nHere's a preview of the component in RTL mode. Use the language selector to switch the language. To see more examples, look for the RTL section on components pages.",
        },
      ],
    },
    {
      id: "guide-usage-2",
      title: "Usage",
      blocks: [
        {
          kind: "code",
          language: "tsx",
          value:
            'import { DirectionProvider } from "@/components/ui/direction"',
        },
        {
          kind: "code",
          language: "tsx",
          value:
            '<html dir="rtl">\n  <body>\n    <DirectionProvider direction="rtl">\n      {/* Your app content */}\n    </DirectionProvider>\n  </body>\n</html>',
        },
      ],
    },
    {
      id: "guide-usedirection-3",
      title: "useDirection",
      blocks: [
        {
          kind: "text",
          value:
            "The `useDirection` hook is used to get the current direction of the application.",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            'import { useDirection } from "@/components/ui/direction"\n\nfunction MyComponent() {\n  const direction = useDirection()\n  return <div>Current direction: {direction}</div>\n}',
        },
      ],
    },
  ],
  drawer: [
    {
      id: "guide-composition-notes-1",
      title: "Composition notes",
      blocks: [
        {
          kind: "text",
          value:
            "The drawer component now uses [Base\n  UI](https://base-ui.com/react/components/drawer) instead of Vaul. If you\n  installed the previous version, see the [migration\n  guide](#migrating-from-vaul).",
        },
      ],
    },
    {
      id: "guide-usage-2",
      title: "Usage",
      blocks: [
        {
          kind: "code",
          language: "tsx",
          value:
            'import {\n  Drawer,\n  DrawerClose,\n  DrawerContent,\n  DrawerDescription,\n  DrawerFooter,\n  DrawerHeader,\n  DrawerTitle,\n  DrawerTrigger,\n} from "@/components/ui/drawer"',
        },
        {
          kind: "code",
          language: "tsx",
          value:
            '<Drawer>\n  <DrawerTrigger render={<Button variant="outline" />}>Open</DrawerTrigger>\n  <DrawerContent>\n    <DrawerHeader>\n      <DrawerTitle>Are you absolutely sure?</DrawerTitle>\n      <DrawerDescription>This action cannot be undone.</DrawerDescription>\n    </DrawerHeader>\n    <div className="p-4">{/* Content here */}</div>\n    <DrawerFooter>\n      <Button>Submit</Button>\n      <DrawerClose render={<Button variant="outline" />}>Cancel</DrawerClose>\n    </DrawerFooter>\n  </DrawerContent>\n</Drawer>',
        },
      ],
    },
    {
      id: "guide-composition-3",
      title: "Composition",
      blocks: [
        {
          kind: "text",
          value: "Use the following composition to build a `Drawer`:",
        },
        {
          kind: "code",
          language: "text",
          value:
            "Drawer\n\u251c\u2500\u2500 DrawerTrigger\n\u2514\u2500\u2500 DrawerContent\n    \u251c\u2500\u2500 DrawerHeader\n    \u2502   \u251c\u2500\u2500 DrawerTitle\n    \u2502   \u2514\u2500\u2500 DrawerDescription\n    \u2514\u2500\u2500 DrawerFooter",
        },
        {
          kind: "text",
          value:
            "`DrawerContent` composes the portal, overlay, viewport, and popup from Base UI. For lower-level control, `DrawerPortal`, `DrawerOverlay`, and `DrawerSwipeHandle` are also exported.",
        },
      ],
    },
    {
      id: "guide-custom-sizes-4",
      title: "Custom Sizes",
      blocks: [
        {
          kind: "text",
          value:
            "A vertical drawer sizes itself to its content and is capped at `calc(100dvh - 6rem)` by default. A side drawer spans `75%` of the viewport width, or `24rem` on larger screens.\n\nTo customize the height of a vertical drawer, use the `h-*` and `max-h-*` utilities on `DrawerContent`.",
        },
        {
          kind: "code",
          language: "tsx",
          value: '<DrawerContent className="h-[50vh]">',
        },
        {
          kind: "text",
          value:
            "To customize the width of a side drawer, use the `w-*` and `max-w-*` utilities on `DrawerContent`.",
        },
        {
          kind: "code",
          language: "tsx",
          value: '<DrawerContent className="w-96">',
        },
        {
          kind: "text",
          value:
            "When the same component renders in multiple directions, scope an override to one axis using the `data-[swipe-axis=*]` variants.",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            '<DrawerContent className="data-[swipe-axis=y]:max-h-[50vh] data-[swipe-axis=x]:w-96">',
        },
        {
          kind: "text",
          value:
            "To make a region of the drawer scrollable, make the scroll container a flex item. Avoid `h-full`, which does not resolve inside a content-sized drawer.",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            '<DrawerContent>\n  <DrawerHeader>...</DrawerHeader>\n  <div className="flex-1 overflow-y-auto p-4">{/* Scrollable content */}</div>\n  <DrawerFooter>...</DrawerFooter>\n</DrawerContent>',
        },
      ],
    },
    {
      id: "guide-styling-5",
      title: "Styling",
      blocks: [
        {
          kind: "text",
          value:
            "The drawer exposes CSS variables for style-level customization. Set the sizing variables on `DrawerContent`. Set the overlay variable on `[data-slot=drawer-overlay]` in your CSS.\n\n| Variable                       | Default                | Description                                                             |\n| ------------------------------ | ---------------------- | ----------------------------------------------------------------------- |\n| `--drawer-inset`               | `0px`                  | Floats the drawer from the viewport edges.                              |\n| `--drawer-bleed-background`    | `var(--color-popover)` | Fills the gap behind the drawer on swipe overshoot.                     |\n| `--drawer-overlay-min-opacity` | `0`                    | Minimum overlay opacity. Defaults to `0.5` when snap points are active. |\n\nThe drawer also sets data attributes you can target with variants such as `data-[swipe-direction=down]:` on `DrawerContent`, or `group-data-[swipe-axis=y]/drawer-popup:` on its descendants.\n\n| Attribute                 | Values                        | Set when                              |\n| ------------------------- | ----------------------------- | ------------------------------------- |\n| `data-swipe-direction`    | `up`, `right`, `down`, `left` | Always.                               |\n| `data-swipe-axis`         | `x`, `y`                      | Always.                               |\n| `data-snap-points`        | Present                       | The drawer has snap points.           |\n| `data-expanded`           | Present                       | The drawer is at the full snap point. |\n| `data-swiping`            | Present                       | A swipe is in progress.               |\n| `data-nested-drawer-open` | Present                       | A nested drawer is open on top.       |",
        },
      ],
    },
    {
      id: "guide-position-6",
      title: "Position",
      blocks: [
        {
          kind: "text",
          value:
            "Use the `swipeDirection` prop to set the side of the drawer.\n\nAvailable options are `up`, `right`, `down`, and `left`.",
        },
      ],
    },
    {
      id: "guide-swipe-handle-7",
      title: "Swipe Handle",
      blocks: [
        {
          kind: "text",
          value: "Use `showSwipeHandle` on `Drawer` to render a swipe handle.",
        },
      ],
    },
    {
      id: "guide-nested-8",
      title: "Nested",
      blocks: [
        {
          kind: "text",
          value:
            "Open drawers from inside another drawer. Parent drawers stay mounted and stack behind the frontmost drawer.",
        },
      ],
    },
    {
      id: "guide-non-modal-9",
      title: "Non Modal",
      blocks: [
        {
          kind: "text",
          value:
            'Set `modal={false}` to allow interaction with the rest of the page while the drawer is open. Combine with `disablePointerDismissal` to prevent the drawer from closing on outside presses. Use `modal="trap-focus"` to keep focus inside the drawer while leaving scroll and pointer interaction unrestricted.',
        },
      ],
    },
    {
      id: "guide-snap-points-10",
      title: "Snap Points",
      blocks: [
        {
          kind: "text",
          value:
            "Use `snapPoints` to snap a drawer to preset heights. Numbers between `0` and `1` represent fractions of the viewport. Numbers greater than `1` are treated as pixel values. String values support `px` and `rem` units. Snap points apply to vertical drawers.\n\nTrack the active snap point with the controlled `snapPoint` and `onSnapPointChange` props. At the full snap point, the drawer gets a `data-expanded` attribute you can style with the `data-expanded:` variant.",
        },
      ],
    },
    {
      id: "guide-responsive-11",
      title: "Responsive",
      blocks: [
        {
          kind: "text",
          value:
            "You can combine the `Dialog` and `Drawer` components to create a responsive dialog. This renders a `Dialog` component on desktop and a `Drawer` on mobile.",
        },
      ],
    },
    {
      id: "guide-migrating-from-vaul-12",
      title: "Migrating from Vaul",
      blocks: [
        {
          kind: "text",
          value:
            "The base drawer now uses [Base UI](https://base-ui.com/react/components/drawer)\ninstead of Vaul. If you installed the previous base drawer, update your usage\nto the Base UI API.\n\n\n\nUpdate the dependency.",
        },
        {
          kind: "code",
          language: "diff",
          value: "- npm install vaul\n+ npm install @base-ui/react",
        },
        {
          kind: "text",
          value:
            "Replace `direction` with `swipeDirection`.\n\nUse `down` instead of `bottom`, and `up` instead of `top`. `left` and `right`\nstay the same.",
        },
        {
          kind: "code",
          language: "diff",
          value:
            '- <Drawer direction="bottom">\n+ <Drawer swipeDirection="down">',
        },
        {
          kind: "text",
          value:
            "Replace `asChild` with `render`.\n\nFor `DrawerTrigger`, pass the trigger element to the `render` prop.",
        },
        {
          kind: "code",
          language: "diff",
          value:
            '- <DrawerTrigger asChild>\n-   <Button variant="outline">Open</Button>\n- </DrawerTrigger>\n+ <DrawerTrigger render={<Button variant="outline" />}>\n+   Open\n+ </DrawerTrigger>',
        },
        {
          kind: "text",
          value:
            "For `DrawerClose`, pass the close element to the `render` prop.",
        },
        {
          kind: "code",
          language: "diff",
          value:
            '- <DrawerClose asChild>\n-   <Button variant="outline">Cancel</Button>\n- </DrawerClose>\n+ <DrawerClose render={<Button variant="outline" />}>\n+   Cancel\n+ </DrawerClose>',
        },
        {
          kind: "text",
          value:
            "Update snap point props.\n\nIf you use snap points, rename the controlled snap point props and the sequential\nsnap point prop.",
        },
        {
          kind: "code",
          language: "diff",
          value:
            "<Drawer\n    snapPoints={[0.25, 0.5, 1]}\n-   activeSnapPoint={snapPoint}\n-   setActiveSnapPoint={setSnapPoint}\n-   snapToSequentialPoint\n+   snapPoint={snapPoint}\n+   onSnapPointChange={setSnapPoint}\n+   snapToSequentialPoints\n  >",
        },
        {
          kind: "text",
          value: "Update animation and focus props.",
        },
        {
          kind: "code",
          language: "diff",
          value:
            "- <Drawer onAnimationEnd={(open) => setDone(open)}>\n+ <Drawer onOpenChangeComplete={(open) => setDone(open)}>",
        },
        {
          kind: "code",
          language: "diff",
          value:
            "- <DrawerContent onOpenAutoFocus={(event) => event.preventDefault()}>\n+ <DrawerContent initialFocus={false}>",
        },
        {
          kind: "text",
          value:
            "Review Vaul-only props.\n\nVaul props like `handleOnly`, `repositionInputs`, and\n`shouldScaleBackground` do not have one-to-one replacements in the base drawer\nAPI. Use Base UI props such as `disablePointerDismissal`, `modal`, `snapPoints`,\nor controlled `open` state for the behavior you need.",
        },
        {
          kind: "code",
          language: "diff",
          value:
            "- <Drawer handleOnly repositionInputs={false} shouldScaleBackground>\n+ <Drawer>",
        },
        {
          kind: "code",
          language: "diff",
          value:
            "- <Drawer dismissible={false}>\n+ <Drawer disablePointerDismissal>",
        },
        {
          kind: "text",
          value:
            "Update custom data attribute selectors.\n\nReplace Vaul's `data-vaul-drawer-direction` selectors with Base UI's\n`data-swipe-direction` selectors.",
        },
        {
          kind: "code",
          language: "diff",
          value:
            '- <DrawerContent className="data-[vaul-drawer-direction=bottom]:max-h-[50vh]">\n+ <DrawerContent className="data-[swipe-direction=down]:max-h-[50vh]">',
        },
        {
          kind: "text",
          value:
            "Base UI also exposes attributes like `data-swiping`, `data-starting-style`, and\n`data-ending-style` for swipe and transition states. Descendants inside\n`DrawerContent` can use `group-data-[swipe-axis=x]/drawer-popup` and\n`group-data-[swipe-axis=y]/drawer-popup` for axis-specific styling.",
        },
      ],
    },
  ],
  "dropdown-menu": [
    {
      id: "guide-usage-1",
      title: "Usage",
      blocks: [
        {
          kind: "code",
          language: "tsx",
          value:
            'import { Button } from "@/components/ui/button"\nimport {\n  DropdownMenu,\n  DropdownMenuContent,\n  DropdownMenuGroup,\n  DropdownMenuItem,\n  DropdownMenuLabel,\n  DropdownMenuSeparator,\n  DropdownMenuTrigger,\n} from "@/components/ui/dropdown-menu"',
        },
        {
          kind: "code",
          language: "tsx",
          value:
            '<DropdownMenu>\n  <DropdownMenuTrigger render={<Button variant="outline" />}>\n    Open\n  </DropdownMenuTrigger>\n  <DropdownMenuContent>\n    <DropdownMenuGroup>\n      <DropdownMenuLabel>My Account</DropdownMenuLabel>\n      <DropdownMenuItem>Profile</DropdownMenuItem>\n      <DropdownMenuItem>Billing</DropdownMenuItem>\n    </DropdownMenuGroup>\n    <DropdownMenuSeparator />\n    <DropdownMenuGroup>\n      <DropdownMenuItem>Team</DropdownMenuItem>\n      <DropdownMenuItem>Subscription</DropdownMenuItem>\n    </DropdownMenuGroup>\n  </DropdownMenuContent>\n</DropdownMenu>',
        },
      ],
    },
    {
      id: "guide-composition-2",
      title: "Composition",
      blocks: [
        {
          kind: "text",
          value: "Use the following composition to build a `DropdownMenu`:",
        },
        {
          kind: "code",
          language: "text",
          value:
            "DropdownMenu\n\u251c\u2500\u2500 DropdownMenuTrigger\n\u2514\u2500\u2500 DropdownMenuContent\n    \u251c\u2500\u2500 DropdownMenuGroup\n    \u2502   \u251c\u2500\u2500 DropdownMenuLabel\n    \u2502   \u251c\u2500\u2500 DropdownMenuItem\n    \u2502   \u2514\u2500\u2500 DropdownMenuItem\n    \u251c\u2500\u2500 DropdownMenuSeparator\n    \u251c\u2500\u2500 DropdownMenuGroup\n    \u2502   \u251c\u2500\u2500 DropdownMenuLabel\n    \u2502   \u251c\u2500\u2500 DropdownMenuCheckboxItem\n    \u2502   \u2514\u2500\u2500 DropdownMenuCheckboxItem\n    \u251c\u2500\u2500 DropdownMenuSeparator\n    \u251c\u2500\u2500 DropdownMenuGroup\n    \u2502   \u251c\u2500\u2500 DropdownMenuLabel\n    \u2502   \u2514\u2500\u2500 DropdownMenuRadioGroup\n    \u2502       \u251c\u2500\u2500 DropdownMenuRadioItem\n    \u2502       \u2514\u2500\u2500 DropdownMenuRadioItem\n    \u2514\u2500\u2500 DropdownMenuSub\n        \u251c\u2500\u2500 DropdownMenuSubTrigger\n        \u2514\u2500\u2500 DropdownMenuSubContent\n            \u2514\u2500\u2500 DropdownMenuGroup\n                \u251c\u2500\u2500 DropdownMenuLabel\n                \u251c\u2500\u2500 DropdownMenuItem\n                \u2514\u2500\u2500 DropdownMenuItem",
        },
      ],
    },
    {
      id: "guide-basic-3",
      title: "Basic",
      blocks: [
        {
          kind: "text",
          value: "A basic dropdown menu with labels and separators.",
        },
      ],
    },
    {
      id: "guide-submenu-4",
      title: "Submenu",
      blocks: [
        {
          kind: "text",
          value: "Use `DropdownMenuSub` to nest secondary actions.",
        },
      ],
    },
    {
      id: "guide-shortcuts-5",
      title: "Shortcuts",
      blocks: [
        {
          kind: "text",
          value: "Add `DropdownMenuShortcut` to show keyboard hints.",
        },
      ],
    },
    {
      id: "guide-icons-6",
      title: "Icons",
      blocks: [
        {
          kind: "text",
          value: "Combine icons with labels for quick scanning.",
        },
      ],
    },
    {
      id: "guide-checkboxes-7",
      title: "Checkboxes",
      blocks: [
        {
          kind: "text",
          value: "Use `DropdownMenuCheckboxItem` for toggles.",
        },
      ],
    },
    {
      id: "guide-checkboxes-icons-8",
      title: "Checkboxes Icons",
      blocks: [
        {
          kind: "text",
          value: "Add icons to checkbox items.",
        },
      ],
    },
    {
      id: "guide-radio-group-9",
      title: "Radio Group",
      blocks: [
        {
          kind: "text",
          value: "Use `DropdownMenuRadioGroup` for exclusive choices.",
        },
      ],
    },
    {
      id: "guide-radio-icons-10",
      title: "Radio Icons",
      blocks: [
        {
          kind: "text",
          value: "Show radio options with icons.",
        },
      ],
    },
    {
      id: "guide-destructive-11",
      title: "Destructive",
      blocks: [
        {
          kind: "text",
          value: 'Use `variant="destructive"` for irreversible actions.',
        },
      ],
    },
    {
      id: "guide-avatar-12",
      title: "Avatar",
      blocks: [
        {
          kind: "text",
          value: "An account switcher dropdown triggered by an avatar.",
        },
      ],
    },
    {
      id: "guide-complex-13",
      title: "Complex",
      blocks: [
        {
          kind: "text",
          value: "A richer example combining groups, icons, and submenus.",
        },
      ],
    },
  ],
  "empty-state": [
    {
      id: "guide-usage-1",
      title: "Usage",
      blocks: [
        {
          kind: "code",
          language: "tsx",
          value:
            'import {\n  Empty,\n  EmptyContent,\n  EmptyDescription,\n  EmptyHeader,\n  EmptyMedia,\n  EmptyTitle,\n} from "@/components/patterns/empty-state"',
        },
        {
          kind: "code",
          language: "tsx",
          value:
            '<Empty>\n  <EmptyHeader>\n    <EmptyMedia variant="icon">\n      <Icon />\n    </EmptyMedia>\n    <EmptyTitle>No data</EmptyTitle>\n    <EmptyDescription>No data found</EmptyDescription>\n  </EmptyHeader>\n  <EmptyContent>\n    <Button>Add data</Button>\n  </EmptyContent>\n</Empty>',
        },
      ],
    },
    {
      id: "guide-composition-2",
      title: "Composition",
      blocks: [
        {
          kind: "text",
          value: "Use the following composition to build an `Empty` state:",
        },
        {
          kind: "code",
          language: "text",
          value:
            "Empty\n\u251c\u2500\u2500 EmptyHeader\n\u2502   \u251c\u2500\u2500 EmptyMedia\n\u2502   \u251c\u2500\u2500 EmptyTitle\n\u2502   \u2514\u2500\u2500 EmptyDescription\n\u2514\u2500\u2500 EmptyContent",
        },
      ],
    },
    {
      id: "guide-outline-3",
      title: "Outline",
      blocks: [
        {
          kind: "text",
          value:
            "Use the `border` utility class to create an outline empty state.",
        },
      ],
    },
    {
      id: "guide-background-4",
      title: "Background",
      blocks: [
        {
          kind: "text",
          value:
            "Use the `bg-*` and `bg-gradient-*` utilities to add a background to the empty state.",
        },
      ],
    },
    {
      id: "guide-avatar-5",
      title: "Avatar",
      blocks: [
        {
          kind: "text",
          value:
            "Use the `EmptyMedia` component to display an avatar in the empty state.",
        },
      ],
    },
    {
      id: "guide-avatar-group-6",
      title: "Avatar Group",
      blocks: [
        {
          kind: "text",
          value:
            "Use the `EmptyMedia` component to display an avatar group in the empty state.",
        },
      ],
    },
    {
      id: "guide-inputgroup-7",
      title: "InputGroup",
      blocks: [
        {
          kind: "text",
          value:
            "You can add an `InputGroup` component to the `EmptyContent` component.",
        },
      ],
    },
  ],
  field: [
    {
      id: "guide-usage-1",
      title: "Usage",
      blocks: [
        {
          kind: "code",
          language: "tsx",
          value:
            'import {\n  Field,\n  FieldContent,\n  FieldDescription,\n  FieldError,\n  FieldGroup,\n  FieldLabel,\n  FieldLegend,\n  FieldSeparator,\n  FieldSet,\n  FieldTitle,\n} from "@/components/ui/field"',
        },
        {
          kind: "code",
          language: "tsx",
          value:
            '<FieldSet>\n  <FieldLegend>Profile</FieldLegend>\n  <FieldDescription>This appears on invoices and emails.</FieldDescription>\n  <FieldGroup>\n    <Field>\n      <FieldLabel htmlFor="name">Full name</FieldLabel>\n      <Input id="name" autoComplete="off" placeholder="Evil Rabbit" />\n      <FieldDescription>This appears on invoices and emails.</FieldDescription>\n    </Field>\n    <Field>\n      <FieldLabel htmlFor="username">Username</FieldLabel>\n      <Input id="username" autoComplete="off" aria-invalid />\n      <FieldError>Choose another username.</FieldError>\n    </Field>\n    <Field orientation="horizontal">\n      <Switch id="newsletter" />\n      <FieldLabel htmlFor="newsletter">Subscribe to the newsletter</FieldLabel>\n    </Field>\n  </FieldGroup>\n</FieldSet>',
        },
      ],
    },
    {
      id: "guide-composition-2",
      title: "Composition",
      blocks: [
        {
          kind: "text",
          value:
            "### Field\n\nA single control with label, helper text, and validation.",
        },
        {
          kind: "code",
          language: "text",
          value:
            "Field\n\u251c\u2500\u2500 FieldLabel\n\u251c\u2500\u2500 Input / Textarea / Switch / Select\n\u251c\u2500\u2500 FieldDescription\n\u2514\u2500\u2500 FieldError",
        },
        {
          kind: "text",
          value:
            "### FieldGroup\n\nRelated fields in one group. Use `FieldSeparator` between sections when needed.",
        },
        {
          kind: "code",
          language: "text",
          value:
            "FieldGroup\n\u251c\u2500\u2500 Field\n\u2502   \u251c\u2500\u2500 FieldLabel\n\u2502   \u251c\u2500\u2500 Input / Textarea / Switch / Select\n\u2502   \u251c\u2500\u2500 FieldDescription\n\u2502   \u2514\u2500\u2500 FieldError\n\u251c\u2500\u2500 FieldSeparator\n\u2514\u2500\u2500 Field\n    \u251c\u2500\u2500 FieldLabel\n    \u2514\u2500\u2500 Input / Textarea / Switch / Select",
        },
        {
          kind: "text",
          value:
            "### FieldSet\n\nSemantic grouping with a legend and description, usually containing a `FieldGroup`.",
        },
        {
          kind: "code",
          language: "text",
          value:
            "FieldSet\n\u251c\u2500\u2500 FieldLegend\n\u251c\u2500\u2500 FieldDescription\n\u2514\u2500\u2500 FieldGroup\n    \u251c\u2500\u2500 Field\n    \u2502   \u251c\u2500\u2500 FieldLabel\n    \u2502   \u251c\u2500\u2500 Input / Textarea / Switch / Select\n    \u2502   \u251c\u2500\u2500 FieldDescription\n    \u2502   \u2514\u2500\u2500 FieldError\n    \u2514\u2500\u2500 Field\n        \u251c\u2500\u2500 FieldLabel\n        \u2514\u2500\u2500 Input / Textarea / Switch / Select",
        },
      ],
    },
    {
      id: "guide-anatomy-3",
      title: "Composition tree",
      blocks: [
        {
          kind: "text",
          value:
            "The `Field` family is designed for composing accessible forms. A typical field is structured as follows:",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            '<Field>\n  <FieldLabel htmlFor="input-id">Label</FieldLabel>\n  {/* Input, Select, Switch, etc. */}\n  <FieldDescription>Optional helper text.</FieldDescription>\n  <FieldError>Validation message.</FieldError>\n</Field>',
        },
        {
          kind: "text",
          value:
            "- `Field` is the core wrapper for a single field.\n- `FieldContent` is a flex column that groups label and description. Not required if you have no description.\n- Wrap related fields with `FieldGroup`, and use `FieldSet` with `FieldLegend` for semantic grouping.",
        },
      ],
    },
    {
      id: "guide-form-4",
      title: "Form",
      blocks: [
        {
          kind: "text",
          value:
            "See the [Form](/docs/forms) documentation for building forms with the `Field` component and [React Hook Form](/docs/forms/react-hook-form), [Tanstack Form](/docs/forms/tanstack-form), or [Formisch](/docs/forms/formisch).",
        },
      ],
    },
    {
      id: "guide-choice-card-5",
      title: "Choice Card",
      blocks: [
        {
          kind: "text",
          value:
            "Wrap `Field` components inside `FieldLabel` to create selectable field groups. This works with `RadioItem`, `Checkbox` and `Switch` components.",
        },
      ],
    },
    {
      id: "guide-field-group-6",
      title: "Field Group",
      blocks: [
        {
          kind: "text",
          value:
            "Stack `Field` components with `FieldGroup`. Add `FieldSeparator` to divide them.",
        },
      ],
    },
    {
      id: "guide-responsive-layout-7",
      title: "Responsive Layout",
      blocks: [
        {
          kind: "text",
          value:
            '- **Vertical fields:** Default orientation stacks label, control, and helper text\u2014ideal for mobile-first layouts.\n- **Horizontal fields:** Set `orientation="horizontal"` on `Field` to align the label and control side-by-side. Pair with `FieldContent` to keep descriptions aligned.\n- **Responsive fields:** Set `orientation="responsive"` for automatic column layouts inside container-aware parents. Apply `@container/field-group` classes on `FieldGroup` to switch orientations at specific breakpoints.',
        },
      ],
    },
    {
      id: "guide-validation-and-errors-8",
      title: "Validation and Errors",
      blocks: [
        {
          kind: "text",
          value:
            "- Add `data-invalid` to `Field` to switch the entire block into an error state.\n- Add `aria-invalid` on the input itself for assistive technologies.\n- Render `FieldError` immediately after the control or inside `FieldContent` to keep error messages aligned with the field.",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            '<Field data-invalid>\n  <FieldLabel htmlFor="email">Email</FieldLabel>\n  <Input id="email" type="email" aria-invalid />\n  <FieldError>Enter a valid email address.</FieldError>\n</Field>',
        },
      ],
    },
    {
      id: "guide-accessibility-9",
      title: "Labels and keyboard",
      blocks: [
        {
          kind: "text",
          value:
            '- `FieldSet` and `FieldLegend` keep related controls grouped for keyboard and assistive tech users.\n- `Field` outputs `role="group"` so nested controls inherit labeling from `FieldLabel` and `FieldLegend` when combined.\n- Apply `FieldSeparator` sparingly to ensure screen readers encounter clear section boundaries.',
        },
      ],
    },
  ],
  "hover-card": [
    {
      id: "guide-usage-1",
      title: "Usage",
      blocks: [
        {
          kind: "code",
          language: "tsx",
          value:
            'import {\n  HoverCard,\n  HoverCardContent,\n  HoverCardTrigger,\n} from "@/components/ui/hover-card"',
        },
        {
          kind: "code",
          language: "tsx",
          value:
            "<HoverCard>\n  <HoverCardTrigger>Hover</HoverCardTrigger>\n  <HoverCardContent>\n    The React Framework \u2013 created and maintained by @vercel.\n  </HoverCardContent>\n</HoverCard>",
        },
      ],
    },
    {
      id: "guide-composition-2",
      title: "Composition",
      blocks: [
        {
          kind: "text",
          value: "Use the following composition to build a `HoverCard`:",
        },
        {
          kind: "code",
          language: "text",
          value:
            "HoverCard\n\u251c\u2500\u2500 HoverCardTrigger\n\u2514\u2500\u2500 HoverCardContent",
        },
      ],
    },
    {
      id: "guide-trigger-delays-3",
      title: "Trigger Delays",
      blocks: [
        {
          kind: "text",
          value:
            "Use `delay` and `closeDelay` on the trigger to control when the card opens and\ncloses.",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            "<HoverCard>\n  <HoverCardTrigger delay={100} closeDelay={200}>\n    Hover\n  </HoverCardTrigger>\n  <HoverCardContent>Content</HoverCardContent>\n</HoverCard>",
        },
      ],
    },
    {
      id: "guide-positioning-4",
      title: "Positioning",
      blocks: [
        {
          kind: "text",
          value:
            "Use the `side` and `align` props on `HoverCardContent` to control placement.",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            '<HoverCard>\n  <HoverCardTrigger>Hover</HoverCardTrigger>\n  <HoverCardContent side="top" align="start">\n    Content\n  </HoverCardContent>\n</HoverCard>',
        },
      ],
    },
  ],
  "input-group": [
    {
      id: "guide-usage-1",
      title: "Usage",
      blocks: [
        {
          kind: "code",
          language: "tsx",
          value:
            'import {\n  InputGroup,\n  InputGroupAddon,\n  InputGroupButton,\n  InputGroupInput,\n  InputGroupText,\n  InputGroupTextarea,\n} from "@/components/ui/input-group"',
        },
        {
          kind: "code",
          language: "tsx",
          value:
            '<InputGroup>\n  <InputGroupInput placeholder="Search..." />\n  <InputGroupAddon>\n    <SearchIcon />\n  </InputGroupAddon>\n</InputGroup>',
        },
      ],
    },
    {
      id: "guide-composition-2",
      title: "Composition",
      blocks: [
        {
          kind: "text",
          value: "Use the following composition to build an `InputGroup`:",
        },
        {
          kind: "code",
          language: "text",
          value:
            "InputGroup\n\u251c\u2500\u2500 InputGroupInput or InputGroupTextarea\n\u251c\u2500\u2500 InputGroupAddon\n\u251c\u2500\u2500 InputGroupButton\n\u2514\u2500\u2500 InputGroupText",
        },
      ],
    },
    {
      id: "guide-align-3",
      title: "Align",
      blocks: [
        {
          kind: "text",
          value:
            'Use the `align` prop on `InputGroupAddon` to position the addon relative to the input.\n\n\n  For proper focus management, `InputGroupAddon` should always be placed after\n  `InputGroupInput` or `InputGroupTextarea` in the DOM. Use the `align` prop to\n  visually position the addon.\n\n\n### inline-start\n\nUse `align="inline-start"` to position the addon at the start of the input. This is the default.\n\n\n\n### inline-end\n\nUse `align="inline-end"` to position the addon at the end of the input.\n\n\n\n### block-start\n\nUse `align="block-start"` to position the addon above the input.\n\n\n\n### block-end\n\nUse `align="block-end"` to position the addon below the input.',
        },
      ],
    },
    {
      id: "guide-custom-input-4",
      title: "Custom Input",
      blocks: [
        {
          kind: "text",
          value:
            'Add the `data-slot="input-group-control"` attribute to your custom input for automatic focus state handling.\n\nHere\'s an example of a custom resizable textarea from a third-party library.',
        },
      ],
    },
  ],
  "input-otp": [
    {
      id: "guide-about-1",
      title: "About",
      blocks: [
        {
          kind: "text",
          value:
            "Input OTP is built on top of [input-otp](https://github.com/guilhermerodz/input-otp) by [@guilherme_rodz](https://twitter.com/guilherme_rodz).",
        },
      ],
    },
    {
      id: "guide-usage-2",
      title: "Usage",
      blocks: [
        {
          kind: "code",
          language: "tsx",
          value:
            'import {\n  InputOTP,\n  InputOTPGroup,\n  InputOTPSeparator,\n  InputOTPSlot,\n} from "@/components/ui/input-otp"',
        },
        {
          kind: "code",
          language: "tsx",
          value:
            "<InputOTP maxLength={6}>\n  <InputOTPGroup>\n    <InputOTPSlot index={0} />\n    <InputOTPSlot index={1} />\n    <InputOTPSlot index={2} />\n  </InputOTPGroup>\n  <InputOTPSeparator />\n  <InputOTPGroup>\n    <InputOTPSlot index={3} />\n    <InputOTPSlot index={4} />\n    <InputOTPSlot index={5} />\n  </InputOTPGroup>\n</InputOTP>",
        },
      ],
    },
    {
      id: "guide-composition-3",
      title: "Composition",
      blocks: [
        {
          kind: "text",
          value: "Use the following composition to build an `InputOTP`:",
        },
        {
          kind: "code",
          language: "text",
          value:
            "InputOTP\n\u251c\u2500\u2500 InputOTPGroup\n\u2502   \u251c\u2500\u2500 InputOTPSlot\n\u2502   \u251c\u2500\u2500 InputOTPSlot\n\u2502   \u2514\u2500\u2500 InputOTPSlot\n\u251c\u2500\u2500 InputOTPSeparator\n\u251c\u2500\u2500 InputOTPGroup\n\u2502   \u251c\u2500\u2500 InputOTPSlot\n\u2502   \u251c\u2500\u2500 InputOTPSlot\n\u2502   \u2514\u2500\u2500 InputOTPSlot\n\u251c\u2500\u2500 InputOTPSeparator\n\u2514\u2500\u2500 InputOTPGroup\n    \u251c\u2500\u2500 InputOTPSlot\n    \u2514\u2500\u2500 InputOTPSlot",
        },
      ],
    },
    {
      id: "guide-pattern-4",
      title: "Pattern",
      blocks: [
        {
          kind: "text",
          value:
            "Use the `pattern` prop to define a custom pattern for the OTP input.",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            'import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp"\n\n;<InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>\n  ...\n</InputOTP>',
        },
      ],
    },
    {
      id: "guide-separator-5",
      title: "Separator",
      blocks: [
        {
          kind: "text",
          value:
            "Use the `<InputOTPSeparator />` component to add a separator between input groups.",
        },
      ],
    },
    {
      id: "guide-disabled-6",
      title: "Disabled",
      blocks: [
        {
          kind: "text",
          value: "Use the `disabled` prop to disable the input.",
        },
      ],
    },
    {
      id: "guide-controlled-7",
      title: "Controlled",
      blocks: [
        {
          kind: "text",
          value:
            "Use the `value` and `onChange` props to control the input value.",
        },
      ],
    },
    {
      id: "guide-invalid-8",
      title: "Invalid",
      blocks: [
        {
          kind: "text",
          value: "Use `aria-invalid` on the slots to show an error state.",
        },
      ],
    },
    {
      id: "guide-four-digits-9",
      title: "Four Digits",
      blocks: [
        {
          kind: "text",
          value:
            "A common pattern for PIN codes. This uses the `pattern={REGEXP_ONLY_DIGITS}` prop.",
        },
      ],
    },
    {
      id: "guide-alphanumeric-10",
      title: "Alphanumeric",
      blocks: [
        {
          kind: "text",
          value:
            "Use `REGEXP_ONLY_DIGITS_AND_CHARS` to accept both letters and numbers.",
        },
      ],
    },
  ],
  input: [
    {
      id: "guide-usage-1",
      title: "Usage",
      blocks: [
        {
          kind: "code",
          language: "tsx",
          value: 'import { Input } from "@/components/ui/input"',
        },
        {
          kind: "code",
          language: "tsx",
          value: "<Input />",
        },
      ],
    },
    {
      id: "guide-field-2",
      title: "Field",
      blocks: [
        {
          kind: "text",
          value:
            "Use `Field`, `FieldLabel`, and `FieldDescription` to create an input with a\nlabel and description.",
        },
      ],
    },
    {
      id: "guide-field-group-3",
      title: "Field Group",
      blocks: [
        {
          kind: "text",
          value:
            "Use `FieldGroup` to show multiple `Field` blocks and to build forms.",
        },
      ],
    },
    {
      id: "guide-disabled-4",
      title: "Disabled",
      blocks: [
        {
          kind: "text",
          value:
            "Use the `disabled` prop to disable the input. To style the disabled state, add the `data-disabled` attribute to the `Field` component.",
        },
      ],
    },
    {
      id: "guide-invalid-5",
      title: "Invalid",
      blocks: [
        {
          kind: "text",
          value:
            "Use the `aria-invalid` prop to mark the input as invalid. To style the invalid state, add the `data-invalid` attribute to the `Field` component.",
        },
      ],
    },
    {
      id: "guide-file-6",
      title: "File",
      blocks: [
        {
          kind: "text",
          value: 'Use the `type="file"` prop to create a file input.',
        },
      ],
    },
    {
      id: "guide-inline-7",
      title: "Inline",
      blocks: [
        {
          kind: "text",
          value:
            'Use `Field` with `orientation="horizontal"` to create an inline input.\nPair with `Button` to create a search input with a button.',
        },
      ],
    },
    {
      id: "guide-grid-8",
      title: "Grid",
      blocks: [
        {
          kind: "text",
          value: "Use a grid layout to place multiple inputs side by side.",
        },
      ],
    },
    {
      id: "guide-required-9",
      title: "Required",
      blocks: [
        {
          kind: "text",
          value: "Use the `required` attribute to indicate required inputs.",
        },
      ],
    },
    {
      id: "guide-badge-10",
      title: "Badge",
      blocks: [
        {
          kind: "text",
          value: "Use `Badge` in the label to highlight a recommended field.",
        },
      ],
    },
    {
      id: "guide-input-group-11",
      title: "Input Group",
      blocks: [
        {
          kind: "text",
          value:
            "To add icons, text, or buttons inside an input, use the `InputGroup` component. See the [Input Group](/components/input-group) component for more examples.",
        },
      ],
    },
    {
      id: "guide-button-group-12",
      title: "Button Group",
      blocks: [
        {
          kind: "text",
          value:
            "To add buttons to an input, use the `ButtonGroup` component. See the [Button Group](/components/button-group) component for more examples.",
        },
      ],
    },
    {
      id: "guide-form-13",
      title: "Form",
      blocks: [
        {
          kind: "text",
          value:
            "A full form example with multiple inputs, a select, and a button.",
        },
      ],
    },
  ],
  item: [
    {
      id: "guide-composition-notes-1",
      title: "Composition notes",
      blocks: [
        {
          kind: "text",
          value:
            "The `Item` component is a straightforward flex container that can house nearly any type of content. Use it to display a title, description, and actions. Group it with the `ItemGroup` component to create a list of items.",
        },
      ],
    },
    {
      id: "guide-usage-2",
      title: "Usage",
      blocks: [
        {
          kind: "code",
          language: "tsx",
          value:
            'import {\n  Item,\n  ItemActions,\n  ItemContent,\n  ItemDescription,\n  ItemMedia,\n  ItemTitle,\n} from "@/components/ui/item"',
        },
        {
          kind: "code",
          language: "tsx",
          value:
            '<Item>\n  <ItemMedia variant="icon">\n    <Icon />\n  </ItemMedia>\n  <ItemContent>\n    <ItemTitle>Title</ItemTitle>\n    <ItemDescription>Description</ItemDescription>\n  </ItemContent>\n  <ItemActions>\n    <Button>Action</Button>\n  </ItemActions>\n</Item>',
        },
      ],
    },
    {
      id: "guide-composition-3",
      title: "Composition",
      blocks: [
        {
          kind: "text",
          value: "Use the following composition to build an `Item`:",
        },
        {
          kind: "code",
          language: "text",
          value:
            "ItemGroup\n\u2514\u2500\u2500 Item\n    \u251c\u2500\u2500 ItemHeader\n    \u251c\u2500\u2500 ItemMedia\n    \u251c\u2500\u2500 ItemContent\n    \u2502   \u251c\u2500\u2500 ItemTitle\n    \u2502   \u2514\u2500\u2500 ItemDescription\n    \u251c\u2500\u2500 ItemActions\n    \u2514\u2500\u2500 ItemFooter",
        },
      ],
    },
    {
      id: "guide-item-vs-field-4",
      title: "Item vs Field",
      blocks: [
        {
          kind: "text",
          value:
            "Use `Field` if you need to display a form input such as a checkbox, input, radio, or select.\n\nIf you only need to display content such as a title, description, and actions, use `Item`.",
        },
      ],
    },
    {
      id: "guide-variant-5",
      title: "Variant",
      blocks: [
        {
          kind: "text",
          value:
            "Use the `variant` prop to change the visual style of the item.",
        },
      ],
    },
    {
      id: "guide-size-6",
      title: "Size",
      blocks: [
        {
          kind: "text",
          value:
            "Use the `size` prop to change the size of the item. Available sizes are `default`, `sm`, and `xs`.",
        },
      ],
    },
    {
      id: "guide-icon-7",
      title: "Icon",
      blocks: [
        {
          kind: "text",
          value: 'Use `ItemMedia` with `variant="icon"` to display an icon.',
        },
      ],
    },
    {
      id: "guide-avatar-8",
      title: "Avatar",
      blocks: [
        {
          kind: "text",
          value:
            'You can use `ItemMedia` with `variant="avatar"` to display an avatar.',
        },
      ],
    },
    {
      id: "guide-image-9",
      title: "Image",
      blocks: [
        {
          kind: "text",
          value: 'Use `ItemMedia` with `variant="image"` to display an image.',
        },
      ],
    },
    {
      id: "guide-group-10",
      title: "Group",
      blocks: [
        {
          kind: "text",
          value: "Use `ItemGroup` to group related items together.",
        },
      ],
    },
    {
      id: "guide-header-11",
      title: "Header",
      blocks: [
        {
          kind: "text",
          value: "Use `ItemHeader` to add a header above the item content.",
        },
      ],
    },
    {
      id: "guide-link-12",
      title: "Link",
      blocks: [
        {
          kind: "text",
          value:
            "Use the `render` prop to render the item as a link. The hover and focus states will be applied to the anchor element.",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            '<Item render={<a href="/dashboard" />}>\n  <ItemMedia variant="icon">\n    <HomeIcon />\n  </ItemMedia>\n  <ItemContent>\n    <ItemTitle>Dashboard</ItemTitle>\n    <ItemDescription>Overview of your account and activity.</ItemDescription>\n  </ItemContent>\n</Item>',
        },
      ],
    },
  ],
  kbd: [
    {
      id: "guide-usage-1",
      title: "Usage",
      blocks: [
        {
          kind: "code",
          language: "tsx",
          value: 'import { Kbd } from "@/components/ui/kbd"',
        },
        {
          kind: "code",
          language: "tsx",
          value: "<Kbd>Ctrl</Kbd>",
        },
      ],
    },
    {
      id: "guide-composition-2",
      title: "Composition",
      blocks: [
        {
          kind: "text",
          value: "Use the following composition to build `Kbd` and `KbdGroup`:",
        },
        {
          kind: "code",
          language: "text",
          value:
            "Kbd\nKbdGroup\n\u251c\u2500\u2500 Kbd\n\u2514\u2500\u2500 Kbd",
        },
      ],
    },
    {
      id: "guide-group-3",
      title: "Group",
      blocks: [
        {
          kind: "text",
          value:
            "Use the `KbdGroup` component to group keyboard keys together.",
        },
      ],
    },
    {
      id: "guide-button-4",
      title: "Button",
      blocks: [
        {
          kind: "text",
          value:
            "Use the `Kbd` component inside a `Button` component to display a keyboard key inside a button.",
        },
      ],
    },
    {
      id: "guide-tooltip-5",
      title: "Tooltip",
      blocks: [
        {
          kind: "text",
          value:
            "You can use the `Kbd` component inside a `Tooltip` component to display a tooltip with a keyboard key.",
        },
      ],
    },
    {
      id: "guide-input-group-6",
      title: "Input Group",
      blocks: [
        {
          kind: "text",
          value:
            "You can use the `Kbd` component inside a `InputGroupAddon` component to display a keyboard key inside an input group.",
        },
      ],
    },
  ],
  label: [
    {
      id: "guide-composition-notes-1",
      title: "Composition notes",
      blocks: [
        {
          kind: "text",
          value:
            "For form fields, use the [Field](/components/field) component which\n  includes built-in label, description, and error handling.",
        },
      ],
    },
    {
      id: "guide-usage-2",
      title: "Usage",
      blocks: [
        {
          kind: "code",
          language: "tsx",
          value: 'import { Label } from "@/components/ui/label"',
        },
        {
          kind: "code",
          language: "tsx",
          value: '<Label htmlFor="email">Your email address</Label>',
        },
      ],
    },
    {
      id: "guide-label-in-field-3",
      title: "Label in Field",
      blocks: [
        {
          kind: "text",
          value:
            "For form fields, use the [Field](/components/field) component which\nincludes built-in `FieldLabel`, `FieldDescription`, and `FieldError` components.",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            '<Field>\n  <FieldLabel htmlFor="email">Your email address</FieldLabel>\n  <Input id="email" />\n</Field>',
        },
      ],
    },
  ],
  marker: [
    {
      id: "guide-composition-notes-1",
      title: "Composition notes",
      blocks: [
        {
          kind: "text",
          value:
            "The `Marker` component displays inline conversation markers such as status updates, system notes, bordered rows, and labeled separators. Compose it with [`Message`](/components/message) in a conversation thread.",
        },
      ],
    },
    {
      id: "guide-usage-2",
      title: "Usage",
      blocks: [
        {
          kind: "code",
          language: "tsx",
          value:
            'import { Marker, MarkerContent, MarkerIcon } from "@/components/ui/marker"',
        },
        {
          kind: "code",
          language: "tsx",
          value:
            "<Marker>\n  <MarkerIcon>\n    <CheckIcon />\n  </MarkerIcon>\n  <MarkerContent>Explored 4 files</MarkerContent>\n</Marker>",
        },
      ],
    },
    {
      id: "guide-composition-3",
      title: "Composition",
      blocks: [
        {
          kind: "text",
          value: "Use the following composition to build a marker:",
        },
        {
          kind: "code",
          language: "text",
          value:
            "Marker\n\u251c\u2500\u2500 MarkerIcon\n\u2514\u2500\u2500 MarkerContent",
        },
      ],
    },
    {
      id: "guide-features-4",
      title: "Features",
      blocks: [
        {
          kind: "text",
          value:
            "- Inline marker, bordered row, and labeled separator variants\n- Decorative icon slot that is hidden from assistive tech\n- Polymorphic root via `render` for link and button markers\n- Pairs with the [`shimmer`](/docs/utils/shimmer) utility for streaming status text\n- Customizable styling through the `className` prop on every part",
        },
      ],
    },
    {
      id: "guide-variants-5",
      title: "Variants",
      blocks: [
        {
          kind: "text",
          value:
            "Use `variant` to switch between an inline marker, bordered row, and labeled separator.\n\n\n\n| Variant     | Description                                          |\n| ----------- | ---------------------------------------------------- |\n| `default`   | An inline marker for status, notes, and actions.     |\n| `border`    | A default marker with a bottom border under the row. |\n| `separator` | A centered label with divider lines on each side.    |",
        },
      ],
    },
    {
      id: "guide-status-6",
      title: "Status",
      blocks: [
        {
          kind: "text",
          value:
            'Set `role="status"` and include a [`Spinner`](/components/spinner) for streaming or in-progress markers so updates are announced.',
        },
      ],
    },
    {
      id: "guide-shimmer-7",
      title: "Shimmer",
      blocks: [
        {
          kind: "text",
          value:
            "Add the [`shimmer`](/docs/utils/shimmer) utility class to `MarkerContent` for an animated streaming-text effect. The utility ships with the `Leement` package \u2014 see the shimmer docs for installation.",
        },
      ],
    },
    {
      id: "guide-separator-8",
      title: "Separator",
      blocks: [
        {
          kind: "text",
          value:
            "Use the `separator` variant for labeled dividers, such as dates or section breaks, in a conversation.",
        },
      ],
    },
    {
      id: "guide-border-9",
      title: "Border",
      blocks: [
        {
          kind: "text",
          value:
            "Use the `border` variant for status rows that should keep the default marker alignment while separating the next row.",
        },
      ],
    },
    {
      id: "guide-with-icon-10",
      title: "With Icon",
      blocks: [
        {
          kind: "text",
          value:
            "Use `MarkerIcon` to render an icon alongside the content. Use `flex-col` to stack the icon above the content.",
        },
      ],
    },
    {
      id: "guide-links-and-buttons-11",
      title: "Links and Buttons",
      blocks: [
        {
          kind: "text",
          value:
            "Turn a marker into a link or button with the `render` prop on `Marker`.",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            'import { Marker, MarkerContent } from "@/components/ui/marker"\n\nexport function MarkerLinkDemo() {\n  return (\n    <Marker render={<a href="#" />}>\n      <MarkerContent>View the pull request</MarkerContent>\n    </Marker>\n  )\n}',
        },
      ],
    },
    {
      id: "guide-accessibility-12",
      title: "Labels and keyboard",
      blocks: [
        {
          kind: "text",
          value:
            '`Marker` is presentational by default. The correct semantics depend on how you use it, so choose the role based on intent rather than relying on a single default.\n\n### Status and Progress\n\nFor streaming or progress markers such as "Thinking..." or a running tool, set `role="status"` so assistive tech announces the update as it appears. `Marker` forwards `role` to the underlying element.',
        },
        {
          kind: "code",
          language: "tsx",
          value:
            '<Marker role="status">\n  <MarkerIcon>\n    <Spinner />\n  </MarkerIcon>\n  <MarkerContent>Compacting conversation</MarkerContent>\n</Marker>',
        },
        {
          kind: "text",
          value:
            "### Labeled Separators\n\nA separator that carries text, such as a date or a section label, needs no role. The divider lines are decorative CSS pseudo-elements, and the text is announced as ordinary content.",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            '<Marker variant="separator">\n  <MarkerContent>Today</MarkerContent>\n</Marker>',
        },
        {
          kind: "text",
          value:
            '**Note:** Do not add `role="separator"` to a labeled divider. A separator\n  takes its accessible name from `aria-label`, not from its text, and its\n  contents are treated as presentational, so the visible label would not be\n  announced. Reserve `role="separator"` for a divider with no meaningful text.\n\n\n### Bordered Markers\n\nA bordered marker keeps the same semantics as the default marker. The bottom border is decorative, so choose `role="status"`, `render`, or no role based on the marker\'s purpose.',
        },
        {
          kind: "code",
          language: "tsx",
          value:
            '<Marker variant="border">\n  <MarkerIcon>\n    <FileTextIcon />\n  </MarkerIcon>\n  <MarkerContent>Opened implementation notes</MarkerContent>\n</Marker>',
        },
        {
          kind: "text",
          value:
            "### Decorative Icons\n\n`MarkerIcon` is decorative and hidden from assistive tech with `aria-hidden`, so the adjacent `MarkerContent` carries the meaning. For an icon-only marker, provide an `aria-label` or visible text so it is not announced as empty.",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            '<Marker aria-label="Synced">\n  <MarkerIcon>\n    <CheckIcon />\n  </MarkerIcon>\n</Marker>',
        },
        {
          kind: "text",
          value:
            "### Interactive Markers\n\nWhen a marker links or triggers an action, render it as a real `<button>` or `<a>` with the `render` prop so it is focusable and exposes the correct role. The accessible name comes from the marker text.",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            '<Marker render={<a href="/files" />}>\n  <MarkerIcon>\n    <FileTextIcon />\n  </MarkerIcon>\n  <MarkerContent>Explored 4 files</MarkerContent>\n</Marker>',
        },
      ],
    },
  ],
  menubar: [
    {
      id: "guide-usage-1",
      title: "Usage",
      blocks: [
        {
          kind: "code",
          language: "tsx",
          value:
            'import {\n  Menubar,\n  MenubarContent,\n  MenubarGroup,\n  MenubarItem,\n  MenubarMenu,\n  MenubarSeparator,\n  MenubarShortcut,\n  MenubarTrigger,\n} from "@/components/ui/menubar"',
        },
        {
          kind: "code",
          language: "tsx",
          value:
            "<Menubar>\n  <MenubarMenu>\n    <MenubarTrigger>File</MenubarTrigger>\n    <MenubarContent>\n      <MenubarGroup>\n        <MenubarItem>\n          New Tab <MenubarShortcut>\u2318T</MenubarShortcut>\n        </MenubarItem>\n        <MenubarItem>New Window</MenubarItem>\n      </MenubarGroup>\n      <MenubarSeparator />\n      <MenubarGroup>\n        <MenubarItem>Share</MenubarItem>\n        <MenubarItem>Print</MenubarItem>\n      </MenubarGroup>\n    </MenubarContent>\n  </MenubarMenu>\n</Menubar>",
        },
      ],
    },
    {
      id: "guide-composition-2",
      title: "Composition",
      blocks: [
        {
          kind: "text",
          value: "Use the following composition to build a `Menubar`:",
        },
        {
          kind: "code",
          language: "text",
          value:
            "Menubar\n\u251c\u2500\u2500 MenubarMenu\n\u2502   \u251c\u2500\u2500 MenubarTrigger\n\u2502   \u2514\u2500\u2500 MenubarContent\n\u2502       \u251c\u2500\u2500 MenubarGroup\n\u2502       \u2502   \u251c\u2500\u2500 MenubarLabel\n\u2502       \u2502   \u251c\u2500\u2500 MenubarItem\n\u2502       \u2502   \u2514\u2500\u2500 MenubarItem\n\u2502       \u251c\u2500\u2500 MenubarSeparator\n\u2502       \u251c\u2500\u2500 MenubarGroup\n\u2502       \u2502   \u251c\u2500\u2500 MenubarLabel\n\u2502       \u2502   \u251c\u2500\u2500 MenubarCheckboxItem\n\u2502       \u2502   \u2514\u2500\u2500 MenubarCheckboxItem\n\u2502       \u251c\u2500\u2500 MenubarSeparator\n\u2502       \u251c\u2500\u2500 MenubarGroup\n\u2502       \u2502   \u251c\u2500\u2500 MenubarLabel\n\u2502       \u2502   \u2514\u2500\u2500 MenubarRadioGroup\n\u2502       \u2502       \u251c\u2500\u2500 MenubarRadioItem\n\u2502       \u2502       \u2514\u2500\u2500 MenubarRadioItem\n\u2502       \u2514\u2500\u2500 MenubarSub\n\u2502           \u251c\u2500\u2500 MenubarSubTrigger\n\u2502           \u2514\u2500\u2500 MenubarSubContent\n\u2502               \u2514\u2500\u2500 MenubarGroup\n\u2502                   \u251c\u2500\u2500 MenubarLabel\n\u2502                   \u251c\u2500\u2500 MenubarItem\n\u2502                   \u2514\u2500\u2500 MenubarItem\n\u2514\u2500\u2500 MenubarMenu\n    \u251c\u2500\u2500 MenubarTrigger\n    \u2514\u2500\u2500 MenubarContent\n        \u2514\u2500\u2500 MenubarGroup\n            \u251c\u2500\u2500 MenubarLabel\n            \u251c\u2500\u2500 MenubarItem\n            \u2514\u2500\u2500 MenubarItem",
        },
      ],
    },
    {
      id: "guide-checkbox-3",
      title: "Checkbox",
      blocks: [
        {
          kind: "text",
          value: "Use `MenubarCheckboxItem` for toggleable options.",
        },
      ],
    },
    {
      id: "guide-radio-4",
      title: "Radio",
      blocks: [
        {
          kind: "text",
          value:
            "Use `MenubarRadioGroup` and `MenubarRadioItem` for single-select options.",
        },
      ],
    },
    {
      id: "guide-submenu-5",
      title: "Submenu",
      blocks: [
        {
          kind: "text",
          value:
            "Use `MenubarSub`, `MenubarSubTrigger`, and `MenubarSubContent` for nested menus.",
        },
      ],
    },
  ],
  "message-scroller": [
    {
      id: "guide-what-makes-a-great-streaming-chat-experience-1",
      title: "What Makes a Great Streaming Chat Experience",
      blocks: [
        {
          kind: "text",
          value:
            "Building a chat interface used to be simple. You create an inverted list with\nan input. Type a message, it appends at the bottom. When a reply comes in, the\nlist grows and scrolls. Done.\n\nStreaming breaks that model. Messages arrive in chunks while you may still be\nreading, scrolling, or looking somewhere else entirely.\n\nNow the challenge is preserving the reader's place while the conversation keeps\nchanging. Get that wrong and the experience feels jumpy: people are pulled to\nthe bottom, lose context, and have to find their way back.\n\nIn practice, this comes down to scroll: when to follow, when to hold, and when\nto let the reader decide. A great streaming chat should:\n\n1. **Move only when the reader asked to move.** If someone is reading, don\u2019t pull them somewhere else. Auto-scroll should never be the default.\n2. **Follow only while they\u2019re following.** If they\u2019re at the live edge, keep the stream in view. If they scroll away, leave them there.\n3. **Every interaction is a signal.** Scrolling is not the only one. Selecting text, using the keyboard, opening a link, or searching should all stop the interface from moving.\n4. **Start a new turn near the top of the viewport.** This gives the new turn somewhere it can be read from the beginning.\n5. **Then stream in the answer.** The answer should grow into the screen, not immediately push everything away.\n6. **Keep part of the previous conversation in context.** The prompt and reply should stay visually connected, and enough of the previous turn should remain visible so the reader knows where they are.\n7. **Let new content arrive offscreen.** The conversation can keep streaming without changing what the reader is looking at.\n8. **Show what\u2019s happening out of view.** Make it clear when a response is still streaming or when new messages have arrived.\n9. **Make it easy to return to the latest reply.** A \u201cJump to latest\u201d action should bring the reader back and resume following.\n10. **Let people jump anywhere in the conversation.** Long threads need message links, search, unread markers, and direct navigation.\n11. **Reopen where the reader left off.** A saved conversation should open at the last meaningful turn. Often this is the last user message. Not the absolute bottom.\n12. **Keep the reader\u2019s place when layout changes.** Images load. Markdown expands. Code blocks render. Older messages appear above. None of that should make the reader lose their place.\n13. **Handle interruptions without stealing position.** Stopping, retrying, regenerating, branching, or errors should not unexpectedly move the conversation.\n14. **Stay responsive in long threads.** Streaming text, markdown, code, images, and long history should still feel responsive.\n15. **Be accessible without the noise.** Keep the transcript navigable, preserve keyboard focus, and announce important events at a comfortable pace.\n\n**Never move the reader against their intent.**",
        },
      ],
    },
    {
      id: "guide-messagescroller-2",
      title: "MessageScroller",
      blocks: [
        {
          kind: "text",
          value:
            "MessageScroller is a chat transcript scroller built for these behaviors.\n`MessageScrollerProvider` owns the scroll state and transcript-row behavior:\nopening position, streamed output, new-turn anchoring, prepended history,\nvisibility, and scroll controls. `MessageScroller` is the styled frame that\nrenders inside it.\n\nMessageScroller is scoped to the scroll viewport. It does not own messages, AI state,\ntransport, persistence, branching, or model state. Your product code stays\nfocused on composing messages, markers, tools, attachments, and prompt inputs.\n\nIt gives you the scroll behavior that chat needs, without taking over the rest\nof the chat UI. And it stays fast, even in long conversations with rich\nmarkdown.",
        },
      ],
    },
    {
      id: "guide-usage-3",
      title: "Usage",
      blocks: [
        {
          kind: "code",
          language: "tsx",
          value:
            'import { Message } from "@/components/ui/message"\nimport {\n  MessageScroller,\n  MessageScrollerButton,\n  MessageScrollerContent,\n  MessageScrollerItem,\n  MessageScrollerProvider,\n  MessageScrollerViewport,\n} from "@/components/ui/message-scroller"',
        },
        {
          kind: "code",
          language: "tsx",
          value:
            '<MessageScrollerProvider>\n  <MessageScroller>\n    <MessageScrollerViewport>\n      <MessageScrollerContent>\n        {messages.map((message) => (\n          <MessageScrollerItem\n            key={message.id}\n            messageId={message.id}\n            scrollAnchor={message.role === "user"}\n          >\n            <Message />\n          </MessageScrollerItem>\n        ))}\n      </MessageScrollerContent>\n    </MessageScrollerViewport>\n    <MessageScrollerButton />\n  </MessageScroller>\n</MessageScrollerProvider>',
        },
        {
          kind: "text",
          value:
            "`MessageScroller` fills its parent, so place it inside a height-constrained\ncontainer.",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            '<div className="flex h-screen flex-col">\n  <MessageScrollerProvider>\n    <MessageScroller className="flex-1">{/* transcript */}</MessageScroller>\n  </MessageScrollerProvider>\n</div>',
        },
      ],
    },
    {
      id: "guide-composition-4",
      title: "Composition",
      blocks: [
        {
          kind: "code",
          language: "tsx",
          value:
            "<MessageScrollerProvider>\n  <MessageScroller>\n    <MessageScrollerViewport>\n      <MessageScrollerContent>\n        <MessageScrollerItem>\n          {/* a message, marker, or row */}\n        </MessageScrollerItem>\n        <MessageScrollerItem />\n        <MessageScrollerItem />\n      </MessageScrollerContent>\n    </MessageScrollerViewport>\n    <MessageScrollerButton />\n  </MessageScroller>\n</MessageScrollerProvider>",
        },
        {
          kind: "text",
          value:
            '- **`MessageScrollerProvider`** \u2014 the headless root. Owns scroll state and the\n  behavior props for opening position, auto-scroll, anchoring, scroll commands,\n  and visibility tracking.\n- **`MessageScroller`** \u2014 the styled frame. Lays out the viewport, content, and\n  controls inside the provider.\n- **`MessageScrollerViewport`** \u2014 the scrollable element. Receives native scroll\n  events and preserves the visible row when older messages are prepended.\n- **`MessageScrollerContent`** \u2014 the transcript container. Holds the rows and\n  provides the live-region defaults for new messages.\n- **`MessageScrollerItem`** \u2014 the transcript row boundary. Wrap every direct\n  child of the content so the scroller can measure, anchor, preserve position,\n  track visibility, and jump to it. An item can be a message, marker, typing\n  indicator, separator, join/leave event, or "load earlier" row.\n- **`MessageScrollerButton`** \u2014 the scroll control. Scrolls to the start or end of the transcript and is inert until there is content in its direction.',
        },
      ],
    },
    {
      id: "guide-core-concepts-5",
      title: "Core Concepts",
      blocks: [
        {
          kind: "text",
          value:
            "### Anchoring Turns\n\nA turn is the part of the conversation that starts a new exchange. In a simple\nAI chat, that is usually the user's message and the assistant reply that follows.\n\nAn anchor is the row the viewport should treat as the start of that turn. Mark\nthat row with `scrollAnchor`. When a new anchor is appended, the viewport moves\nit near the top and keeps a peek of the previous item above it, so the new turn\ndoes not feel detached from its context.",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            '// This tells the scroller to anchor the user\'s message for the next turn.\n<MessageScrollerItem\n  messageId={message.id}\n  scrollAnchor={message.role === "user"}\n/>',
        },
        {
          kind: "text",
          value:
            'Scroll anchors are not tied to message role. You can turn any row into an anchor:\na user message, a system marker, a handoff event, or anything else that starts a\nmeaningful turn. `MessageScroller` only needs to know which row should anchor the\nviewport.\n\nIn the following example, the user\'s message is anchored. When you send a new message, the viewport anchors it near the top and appends the assistant reply below it. Toggle the anchor to the assistant\'s message to see the difference.\n\n\n\n### Group Chat\n\nIn a group chat, the turn boundary is more specific than "the user message". It is often\nthe message that asks the model to respond, or a marker like "Marcus joined the\nchat". Typing indicators and history controls usually should not anchor.\n\nBecause anchoring is role-independent, you can anchor a marker just as easily as\na message.',
        },
        {
          kind: "code",
          language: "tsx",
          value:
            '<MessageScrollerItem messageId="marcus-joined" scrollAnchor>\n  <Marker variant="separator">\n    <MarkerContent>Marcus joined the chat</MarkerContent>\n  </Marker>\n</MessageScrollerItem>',
        },
        {
          kind: "text",
          value:
            "### Keeping Context Visible\n\nWhen a new turn starts, it should still feel like part of the same continuous\nthread. `scrollPreviousItemPeek` keeps a slice of the previous item visible\nabove the anchor, so the reader keeps their context instead of feeling like the\nconversation restarted on a blank page.",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            "// Keep 64px of the previous turn visible above the newly anchored row.\n<MessageScrollerProvider scrollPreviousItemPeek={64}>\n  <MessageScroller>{/* anchored turns */}</MessageScroller>\n</MessageScrollerProvider>",
        },
        {
          kind: "text",
          value:
            "Adjust the peek amount in the example below to see how it affects the conversation.\n\n\n\n### Following the Live Edge\n\nWhen the reader is at the live edge, either because they stayed there or\nreturned there, `autoScroll` keeps streamed replies in view as they grow.\nScrolling away from the live edge releases the view, whether by wheel, touch,\nkeyboard scroll keys, or dragging the scrollbar. An explicit message jump\nreleases it too. New chunks can then arrive without moving the reader.\n\n`autoScroll` composes with turn anchoring. When a new turn anchors near the\ntop, the view stays put while the reply streams into the room below it. Once\nthe reply fills the viewport, the reader is back at the live edge and\nfollow-output takes over from the anchor.",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            "<MessageScrollerProvider autoScroll>\n  <MessageScroller>{/* streamed turns */}</MessageScroller>\n</MessageScrollerProvider>",
        },
        {
          kind: "text",
          value:
            'Calling `scrollToEnd`, or pressing `MessageScrollerButton`, re-engages\nfollow-output when `autoScroll` is enabled, so a reader who scrolled away can\nreturn to the live edge and keep following. The root and viewport expose\n`data-autoscrolling` while that programmatic scroll to the latest message runs,\nso you can conditionally apply styles during the transition.\n\n### Opening Saved Threads\n\nIt can seem reasonable to reopen a saved thread at the absolute end of the\ntranscript, but that often drops the reader into the conversation without enough\ncontext. A better default is `"last-anchor"`: show the last meaningful turn,\nlike the user\'s latest message, with the reply below it.\n\nThat gives the reader an immediate place in the thread. They can see what they\nasked, where the answer starts, and continue from there without reconstructing\nthe conversation from the bottom edge.',
        },
        {
          kind: "code",
          language: "tsx",
          value:
            '<MessageScrollerProvider defaultScrollPosition="last-anchor">\n  <MessageScroller>{/* transcript */}</MessageScroller>\n</MessageScrollerProvider>',
        },
        {
          kind: "text",
          value:
            '`"last-anchor"` is keyed on `scrollAnchor`, not message role. If no anchor\nexists, or the last anchored turn already fits in the viewport, it falls back to\n`"end"`.\n\nUse `"start"` when you want to resume at the beginning of a conversation, or\n`"end"` when the absolute latest message is the right place to land.\n\n### Avoiding a Flash on Reload\n\nA scroll container always opens at the top. HTML has no way to set `scrollTop`,\nso a server-rendered transcript shows the oldest messages first. After\nJavaScript runs, `defaultScrollPosition` moves the view, and you see a jump.\n\nWhen `defaultScrollPosition` is `"end"` or `"last-anchor"`, the viewport has\n`data-pending-scroll` until that position is applied. The styled viewport stays\nhidden while the attribute is present, so you see the frame instead of the jump.\n`"start"` does not need this.\n\nIf you want `"end"` visible on first paint, add an inline script right after the\nviewport. Give the viewport an `id`, scroll it to the bottom, and remove\n`data-pending-scroll`.',
        },
        {
          kind: "code",
          language: "tsx",
          value:
            'const scrollToEndScript = `(function () {\n  var viewport = document.getElementById("messages")\n  if (!viewport) {\n    return\n  }\n  viewport.scrollTop = viewport.scrollHeight\n  viewport.removeAttribute("data-pending-scroll")\n})()`\n\n<MessageScroller>\n  <MessageScrollerViewport id="messages" suppressHydrationWarning>\n    <MessageScrollerContent>{/* transcript */}</MessageScrollerContent>\n  </MessageScrollerViewport>\n  <script dangerouslySetInnerHTML={{ __html: scrollToEndScript }} />\n  <MessageScrollerButton />\n</MessageScroller>',
        },
        {
          kind: "text",
          value:
            'Put the script in your page, not in the scroller. It only works for `"end"`, and\nonly when the messages are already in the HTML. Add `suppressHydrationWarning` on\nthe viewport. If you use a Content Security Policy, pass a `nonce`.\n\nDo not use this script with `"last-anchor"`. Skip it when messages load on the\nclient.\n\n### Loading Earlier Messages\n\nLoading earlier messages should not move the conversation the reader is already\nlooking at. When older rows are prepended above the current transcript,\n`MessageScrollerViewport` preserves the visible row so the reader stays in the\nsame place while history loads above them.\n\nThis is enabled by default through `preserveScrollOnPrepend`.\n\n\n\nUse stable `messageId` values for message rows. That gives the scroller a\nspecific row to preserve instead of guessing from whichever pixel happens to sit\nat the viewport edge.\n\n### Animating New Messages\n\n`MessageScrollerItem` can be animated directly. Create a motion version of the\nitem, keep `messageId` and `scrollAnchor` on it, and use transform and opacity\nfor the entrance.\n\nA common chat pattern is to animate the user\'s message when it is sent, then let\nthe assistant reply stream into a regular row below it. Start the user row below\nits final position so it feels like it rises from the live edge of the viewport.',
        },
        {
          kind: "code",
          language: "tsx",
          value:
            "const MotionMessageScrollerItem = motion.create(MessageScrollerItem)",
        },
        {
          kind: "text",
          value:
            "Avoid animating height, margin, or padding for row entrances; those changes can\nfight the scroller's positioning work. If the reader prefers reduced motion,\nskip the entrance animation and keep the scroll behavior the same.\n\n### Jumping to Messages\n\nSearch results, permalinks, outline items, and toolbar buttons often need to\ndrive the transcript from outside the message list. Use `useMessageScroller` for\nthose controls. Because the hooks read from `MessageScrollerProvider`, they work\nin any component inside the provider, including controls rendered outside the\n`MessageScroller` frame.",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            'import { useMessageScroller } from "@/components/ui/message-scroller"',
        },
        {
          kind: "code",
          language: "tsx",
          value:
            "const { scrollToMessage, scrollToEnd, scrollToStart } = useMessageScroller()",
        },
        {
          kind: "text",
          value:
            "`scrollToMessage` targets the `messageId` on `MessageScrollerItem`, so rows that\nneed to be addressable should have stable ids. `scrollToMessage` returns `false`\nwhen the target is not mounted and cannot be queued.\n\n`scrollToMessage` can queue a target before items exist, which covers\nclient-resolved permalinks while the transcript mounts. After rows have mounted,\na missing id returns `false` instead of starting a guessed retry loop. A `true`\nresult means the scroll ran or was queued, not that the row is already in view.\n\n### Tracking the Reader's Position\n\nUse `useMessageScrollerVisibility` to track the reader's position in the\nconversation. A common example is a table-of-contents or a jump menu that\nhighlights the current anchored turn.",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            'import { useMessageScrollerVisibility } from "@/components/ui/message-scroller"',
        },
        {
          kind: "code",
          language: "tsx",
          value:
            "const { currentAnchorId, visibleMessageIds } = useMessageScrollerVisibility()",
        },
        {
          kind: "text",
          value:
            '`currentAnchorId` answers "where am I" by reporting the current anchored turn,\nand it stays set after that anchor scrolls above the viewport. `visibleMessageIds`\nanswers "what is on screen", in document order.\n\nVisibility is pay-for-what-you-use. Tracking only runs while something\nsubscribes to `useMessageScrollerVisibility`, and rows need a `messageId` to\nparticipate.\n\n### Reading Scroll State\n\nUse `useMessageScrollerScrollable` when you need scroll state in JavaScript, such\nas a status indicator or a custom "jump to latest" control. It reports which\nedges the viewport can still scroll toward; "at the start/end" is the negation\n(`!start` / `!end`), and "scrollable at all" is `start || end`. For styling the\nscroller itself, prefer the `data-scrollable` attribute.',
        },
        {
          kind: "code",
          language: "tsx",
          value:
            'import { useMessageScrollerScrollable } from "@/components/ui/message-scroller"',
        },
        {
          kind: "code",
          language: "tsx",
          value: "const { start, end } = useMessageScrollerScrollable()",
        },
      ],
    },
    {
      id: "guide-performance-6",
      title: "Performance",
      blocks: [
        {
          kind: "text",
          value:
            "`MessageScroller` is benchmarked against large transcripts with markdown and\ncomposed message rows.\n\nOur performance goal for `MessageScroller` is to keep the scroll hot path outside of React state: no React rerenders for\ntranscript rows, no forced layout on every scroll, and as little off-screen paint\nwork as the browser can avoid.\n\nScroll position, anchoring, and follow-output are tracked imperatively and mirrored onto the root and viewport through `data-*` attributes, so scrolling and streaming do not rerender transcript rows.\n\nThe styled `MessageScrollerItem` also ships with `content-visibility: auto` and\n`contain-intrinsic-size`. Rows stay in the DOM for selection, copy,\nfind-in-page, SSR, and assistive tech, but the browser can skip rendering work\nfor rows far outside the viewport.\n\nVisibility tracking is pay-for-what-you-use. A jump menu or active\nturn indicator costs nothing until something subscribes to\n`useMessageScrollerVisibility`.\n\nThis is comfortable for the expected range of a chat transcript: hundreds to low\nthousands of turns, including messages with markdown and composed components.",
        },
      ],
    },
    {
      id: "guide-virtualization-7",
      title: "Virtualization",
      blocks: [
        {
          kind: "text",
          value:
            "Virtualization is intentionally left outside the primitive. `MessageScroller`\nrenders real DOM rows and stays fast well into the thousands of turns (see\n[Performance](#performance)), so most transcripts never need it.\n\nWhen a transcript is large enough to need virtualization, use\n`MessageScrollerViewport` as the scroll element and let the virtualizer own the\nrows.",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            'import * as React from "react"\nimport { useVirtualizer } from "@tanstack/react-virtual"\n\nfunction VirtualizedTranscript({\n  messages,\n}: {\n  messages: Array<{ id: string; content: React.ReactNode }>\n}) {\n  const viewportRef = React.useRef<HTMLDivElement>(null)\n\n  const virtualizer = useVirtualizer({\n    count: messages.length,\n    getScrollElement: () => viewportRef.current,\n    estimateSize: () => 86,\n    getItemKey: (index) => messages[index]?.id ?? index,\n    overscan: 8,\n  })\n\n  return (\n    <MessageScrollerProvider>\n      <MessageScroller>\n        <MessageScrollerViewport ref={viewportRef}>\n          <MessageScrollerContent className="block min-h-full">\n            <div\n              className="relative w-full"\n              style={{ height: virtualizer.getTotalSize() }}\n            >\n              {virtualizer.getVirtualItems().map((virtualItem) => {\n                const message = messages[virtualItem.index]\n\n                if (!message) {\n                  return null\n                }\n\n                return (\n                  <div\n                    key={virtualItem.key}\n                    ref={virtualizer.measureElement}\n                    data-index={virtualItem.index}\n                    className="absolute start-0 top-0 w-full"\n                    style={{\n                      transform: `translateY(${virtualItem.start}px)`,\n                    }}\n                  >\n                    <Message>{message.content}</Message>\n                  </div>\n                )\n              })}\n            </div>\n          </MessageScrollerContent>\n        </MessageScrollerViewport>\n        <MessageScrollerButton />\n      </MessageScroller>\n    </MessageScrollerProvider>\n  )\n}',
        },
      ],
    },
    {
      id: "guide-accessibility-8",
      title: "Labels and keyboard",
      blocks: [
        {
          kind: "text",
          value:
            '`MessageScroller` keeps the scroll container keyboard reachable and the\ntranscript announceable without forcing a specific message UI.\n\n`MessageScrollerViewport` is a labelled, keyboard-focusable scroll region by\ndefault. It uses `role="region"`, `aria-label="Messages"`, and `tabIndex={0}`,\nso keyboard users can focus the transcript and scroll it directly.\n\n`MessageScrollerContent` marks the transcript as a live region with\n`role="log"` and `aria-relevant="additions"`. New rows can be announced, but\nstreamed text mutations do not have to be announced token by token.',
        },
        {
          kind: "code",
          language: "tsx",
          value:
            '<MessageScrollerContent aria-busy={status === "streaming"}>\n  {/* messages */}\n</MessageScrollerContent>',
        },
        {
          kind: "text",
          value:
            'Pass `aria-busy` while a turn streams if announcements should wait for the\ncompleted message row.\n\n`MessageScrollerButton` renders a real button. When there is nothing to scroll\ntoward, it sets `inert`, uses `tabIndex={-1}`, and exposes `data-active="false"`\nso inactive scroll controls do not create extra focus stops.',
        },
      ],
    },
    {
      id: "guide-unstyled-9",
      title: "Unstyled",
      blocks: [
        {
          kind: "text",
          value:
            "The behavior in `MessageScroller` comes from the `@Leement/react` package. To use\nit directly with your own markup and styles, see\n[Message Scroller](/docs/react/message-scroller) under @Leement/react.",
        },
      ],
    },
  ],
  message: [
    {
      id: "guide-composition-notes-1",
      title: "Composition notes",
      blocks: [
        {
          kind: "text",
          value:
            "The `Message` component lays out a single message in a conversation. It handles the avatar, alignment, header, and footer around the message surface.\n\nFor AI apps, you can render reasoning steps, tool calls and assistant messages using the `Message` component.",
        },
      ],
    },
    {
      id: "guide-usage-2",
      title: "Usage",
      blocks: [
        {
          kind: "code",
          language: "tsx",
          value:
            'import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"\nimport { Bubble, BubbleContent } from "@/components/ui/bubble"\nimport { Message, MessageAvatar, MessageContent } from "@/components/ui/message"',
        },
        {
          kind: "code",
          language: "tsx",
          value:
            '<Message>\n  <MessageAvatar>\n    <Avatar>\n      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />\n      <AvatarFallback>CN</AvatarFallback>\n    </Avatar>\n  </MessageAvatar>\n  <MessageContent>\n    <Bubble>\n      <BubbleContent>How can I help you today?</BubbleContent>\n    </Bubble>\n  </MessageContent>\n</Message>',
        },
        {
          kind: "text",
          value:
            "**Note:** `Message` owns the row layout\u2014avatar, alignment, header, and footer.\nRender the visible message surface inside it with\n[`Bubble`](/components/bubble). For the scroll container around a\nconversation, use [`MessageScroller`](/components/message-scroller).",
        },
      ],
    },
    {
      id: "guide-composition-3",
      title: "Composition",
      blocks: [
        {
          kind: "text",
          value: "Use the following composition to build a message:",
        },
        {
          kind: "code",
          language: "text",
          value:
            "Message\n\u251c\u2500\u2500 MessageAvatar\n\u2514\u2500\u2500 MessageContent\n    \u251c\u2500\u2500 MessageHeader\n    \u251c\u2500\u2500 Bubble\n    \u2514\u2500\u2500 MessageFooter",
        },
        {
          kind: "text",
          value:
            "Use `MessageGroup` to stack consecutive messages from the same sender:",
        },
        {
          kind: "code",
          language: "text",
          value:
            "MessageGroup\n\u251c\u2500\u2500 Message\n\u2514\u2500\u2500 Message",
        },
      ],
    },
    {
      id: "guide-features-4",
      title: "Features",
      blocks: [
        {
          kind: "text",
          value:
            '- Start and end alignment for sender and receiver rows via the `align` prop\n- Avatar slot that anchors to the bottom of the message and stays clear of the footer\n- Header and footer slots for sender names, status, and message actions\n- Footer follows the message side; actions stay aligned on `align="end"` rows\n- Group wrapper for stacking consecutive messages from the same sender\n- Customizable styling through the `className` prop on every part',
        },
      ],
    },
    {
      id: "guide-avatar-5",
      title: "Avatar",
      blocks: [
        {
          kind: "text",
          value:
            'Use `MessageAvatar` to render an avatar next to the message. Set `align="end"` on the message to align the avatar to the end of the message.\n\n\n\n| align   | Description                                         |\n| ------- | --------------------------------------------------- |\n| `start` | Align the message to the start of the conversation. |\n| `end`   | Align the message to the end of the conversation.   |',
        },
      ],
    },
    {
      id: "guide-group-6",
      title: "Group",
      blocks: [
        {
          kind: "text",
          value:
            "Use `MessageGroup` to stack consecutive messages from the same sender. Render an empty `MessageAvatar` on the earlier messages to keep them aligned with the avatar on the last one.",
        },
      ],
    },
    {
      id: "guide-header-and-footer-7",
      title: "Header and Footer",
      blocks: [
        {
          kind: "text",
          value:
            "Use `MessageHeader` for a sender name and `MessageFooter` for metadata such as a delivery or read status.",
        },
      ],
    },
    {
      id: "guide-actions-8",
      title: "Actions",
      blocks: [
        {
          kind: "text",
          value:
            "Place message-level actions in `MessageFooter`, such as copy, retry, or feedback buttons.",
        },
      ],
    },
    {
      id: "guide-accessibility-9",
      title: "Labels and keyboard",
      blocks: [
        {
          kind: "text",
          value:
            "`Message` is a presentational layout wrapper. Accessibility comes from the content you place inside it.\n\n### Label icon-only actions\n\nAction buttons in `MessageFooter` are usually icon-only, so give each one an `aria-label`.",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            '<MessageFooter>\n  <Button variant="ghost" size="icon" aria-label="Copy">\n    <CopyIcon />\n  </Button>\n</MessageFooter>',
        },
        {
          kind: "text",
          value:
            '### Status updates\n\nFor in-progress messages, use a [`Marker`](/components/marker) with `role="status"` so assistive tech announces the update as it appears.',
        },
        {
          kind: "code",
          language: "tsx",
          value:
            '<Message>\n  <Marker role="status">\n    <MarkerIcon>\n      <Spinner />\n    </MarkerIcon>\n    <MarkerContent>Checking the logs...</MarkerContent>\n  </Marker>\n</Message>',
        },
      ],
    },
  ],
  "navigation-menu": [
    {
      id: "guide-usage-1",
      title: "Usage",
      blocks: [
        {
          kind: "code",
          language: "tsx",
          value:
            'import {\n  NavigationMenu,\n  NavigationMenuContent,\n  NavigationMenuItem,\n  NavigationMenuLink,\n  NavigationMenuList,\n  NavigationMenuTrigger,\n} from "@/components/ui/navigation-menu"',
        },
        {
          kind: "code",
          language: "tsx",
          value:
            "<NavigationMenu>\n  <NavigationMenuList>\n    <NavigationMenuItem>\n      <NavigationMenuTrigger>Item One</NavigationMenuTrigger>\n      <NavigationMenuContent>\n        <NavigationMenuLink>Link</NavigationMenuLink>\n      </NavigationMenuContent>\n    </NavigationMenuItem>\n  </NavigationMenuList>\n</NavigationMenu>",
        },
      ],
    },
    {
      id: "guide-composition-2",
      title: "Composition",
      blocks: [
        {
          kind: "text",
          value: "Use the following composition to build a `NavigationMenu`:",
        },
        {
          kind: "code",
          language: "text",
          value:
            "NavigationMenu\n\u251c\u2500\u2500 NavigationMenuList\n\u2502   \u251c\u2500\u2500 NavigationMenuItem\n\u2502   \u2502   \u251c\u2500\u2500 NavigationMenuTrigger\n\u2502   \u2502   \u2514\u2500\u2500 NavigationMenuContent\n\u2502   \u2502       \u251c\u2500\u2500 NavigationMenuLink\n\u2502   \u2502       \u2514\u2500\u2500 NavigationMenuLink\n\u2502   \u2514\u2500\u2500 NavigationMenuItem\n\u2502       \u2514\u2500\u2500 NavigationMenuLink\n\u2514\u2500\u2500 NavigationMenuIndicator",
        },
      ],
    },
    {
      id: "guide-link-component-3",
      title: "Link Component",
      blocks: [
        {
          kind: "text",
          value:
            "Use the `render` prop to compose a custom link component such as Next.js `Link`.",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            'import Link from "next/link"\n\nimport {\n  NavigationMenuItem,\n  NavigationMenuLink,\n  navigationMenuTriggerStyle,\n} from "@/components/ui/navigation-menu"\n\nexport function NavigationMenuDemo() {\n  return (\n    <NavigationMenuItem>\n      <NavigationMenuLink\n        render={<Link href="/docs" />}\n        className={navigationMenuTriggerStyle()}\n      >\n        Documentation\n      </NavigationMenuLink>\n    </NavigationMenuItem>\n  )\n}',
        },
      ],
    },
  ],
  pagination: [
    {
      id: "guide-usage-1",
      title: "Usage",
      blocks: [
        {
          kind: "code",
          language: "tsx",
          value:
            'import {\n  Pagination,\n  PaginationContent,\n  PaginationEllipsis,\n  PaginationItem,\n  PaginationLink,\n  PaginationNext,\n  PaginationPrevious,\n} from "@/components/ui/pagination"',
        },
        {
          kind: "code",
          language: "tsx",
          value:
            '<Pagination>\n  <PaginationContent>\n    <PaginationItem>\n      <PaginationPrevious href="#" />\n    </PaginationItem>\n    <PaginationItem>\n      <PaginationLink href="#">1</PaginationLink>\n    </PaginationItem>\n    <PaginationItem>\n      <PaginationLink href="#" isActive>\n        2\n      </PaginationLink>\n    </PaginationItem>\n    <PaginationItem>\n      <PaginationLink href="#">3</PaginationLink>\n    </PaginationItem>\n    <PaginationItem>\n      <PaginationEllipsis />\n    </PaginationItem>\n    <PaginationItem>\n      <PaginationNext href="#" />\n    </PaginationItem>\n  </PaginationContent>\n</Pagination>',
        },
      ],
    },
    {
      id: "guide-composition-2",
      title: "Composition",
      blocks: [
        {
          kind: "text",
          value: "Use the following composition to build a `Pagination`:",
        },
        {
          kind: "code",
          language: "text",
          value:
            "Pagination\n\u2514\u2500\u2500 PaginationContent\n    \u251c\u2500\u2500 PaginationItem\n    \u2502   \u2514\u2500\u2500 PaginationPrevious\n    \u251c\u2500\u2500 PaginationItem\n    \u2502   \u2514\u2500\u2500 PaginationLink\n    \u251c\u2500\u2500 PaginationItem\n    \u2502   \u2514\u2500\u2500 PaginationEllipsis\n    \u2514\u2500\u2500 PaginationItem\n        \u2514\u2500\u2500 PaginationNext",
        },
      ],
    },
    {
      id: "guide-simple-3",
      title: "Simple",
      blocks: [
        {
          kind: "text",
          value: "A simple pagination with only page numbers.",
        },
      ],
    },
    {
      id: "guide-icons-only-4",
      title: "Icons Only",
      blocks: [
        {
          kind: "text",
          value:
            "Use just the previous and next buttons without page numbers. This is useful for data tables with a rows per page selector.",
        },
      ],
    },
    {
      id: "guide-next-js-5",
      title: "Next.js",
      blocks: [
        {
          kind: "text",
          value:
            "By default the `<PaginationLink />` component will render an `<a />` tag.\n\nTo use the Next.js `<Link />` component, make the following updates to `pagination.tsx`.",
        },
        {
          kind: "code",
          language: "diff",
          value:
            '+ import Link from "next/link"\n\n- type PaginationLinkProps = ... & React.ComponentProps<"a">\n+ type PaginationLinkProps = ... & React.ComponentProps<typeof Link>\n\nconst PaginationLink = ({...props }: ) => (\n  <PaginationItem>\n-   <a>\n+   <Link>\n      // ...\n-   </a>\n+   </Link>\n  </PaginationItem>\n)',
        },
        {
          kind: "text",
          value:
            "**Note:** We are making updates to the cli to automatically do this for you.",
        },
      ],
    },
    {
      id: "guide-changelog-6",
      title: "Changelog",
      blocks: [
        {
          kind: "text",
          value:
            "### RTL Support\n\nIf you're upgrading from a previous version of the `Pagination` component, you'll need to apply the following updates to add the `text` prop:\n\n\n\nUpdate `PaginationPrevious`.",
        },
        {
          kind: "code",
          language: "diff",
          value:
            'function PaginationPrevious({\n    className,\n+   text = "Previous",\n    ...props\n- }: React.ComponentProps<typeof PaginationLink>) {\n+ }: React.ComponentProps<typeof PaginationLink> & { text?: string }) {\n    return (\n      <PaginationLink\n        aria-label="Go to previous page"\n        size="default"\n        className={cn("cn-pagination-previous", className)}\n        {...props}\n      >\n        <ChevronLeftIcon />\n        <span className="cn-pagination-previous-text hidden sm:block">\n-         Previous\n+         {text}\n        </span>\n      </PaginationLink>\n    )\n  }',
        },
        {
          kind: "text",
          value: "Update `PaginationNext`.",
        },
        {
          kind: "code",
          language: "diff",
          value:
            'function PaginationNext({\n    className,\n+   text = "Next",\n    ...props\n- }: React.ComponentProps<typeof PaginationLink>) {\n+ }: React.ComponentProps<typeof PaginationLink> & { text?: string }) {\n    return (\n      <PaginationLink\n        aria-label="Go to next page"\n        size="default"\n        className={cn("cn-pagination-next", className)}\n        {...props}\n      >\n-       <span className="cn-pagination-next-text hidden sm:block">Next</span>\n+       <span className="cn-pagination-next-text hidden sm:block">{text}</span>\n        <ChevronRightIcon />\n      </PaginationLink>\n    )\n  }',
        },
      ],
    },
  ],
  popover: [
    {
      id: "guide-usage-1",
      title: "Usage",
      blocks: [
        {
          kind: "code",
          language: "tsx",
          value:
            'import {\n  Popover,\n  PopoverContent,\n  PopoverDescription,\n  PopoverHeader,\n  PopoverTitle,\n  PopoverTrigger,\n} from "@/components/ui/popover"',
        },
        {
          kind: "code",
          language: "tsx",
          value:
            '<Popover>\n  <PopoverTrigger render={<Button variant="outline" />}>\n    Open Popover\n  </PopoverTrigger>\n  <PopoverContent>\n    <PopoverHeader>\n      <PopoverTitle>Title</PopoverTitle>\n      <PopoverDescription>Description text here.</PopoverDescription>\n    </PopoverHeader>\n  </PopoverContent>\n</Popover>',
        },
      ],
    },
    {
      id: "guide-composition-2",
      title: "Composition",
      blocks: [
        {
          kind: "text",
          value: "Use the following composition to build a `Popover`:",
        },
        {
          kind: "code",
          language: "text",
          value:
            "Popover\n\u251c\u2500\u2500 PopoverTrigger\n\u2514\u2500\u2500 PopoverContent",
        },
      ],
    },
    {
      id: "guide-basic-3",
      title: "Basic",
      blocks: [
        {
          kind: "text",
          value: "A simple popover with a header, title, and description.",
        },
      ],
    },
    {
      id: "guide-align-4",
      title: "Align",
      blocks: [
        {
          kind: "text",
          value:
            "Use the `align` prop on `PopoverContent` to control the horizontal alignment.",
        },
      ],
    },
    {
      id: "guide-with-form-5",
      title: "With Form",
      blocks: [
        {
          kind: "text",
          value: "A popover with form fields inside.",
        },
      ],
    },
  ],
  progress: [
    {
      id: "guide-usage-1",
      title: "Usage",
      blocks: [
        {
          kind: "code",
          language: "tsx",
          value: 'import { Progress } from "@/components/ui/progress"',
        },
        {
          kind: "code",
          language: "tsx",
          value: "<Progress value={33} />",
        },
      ],
    },
    {
      id: "guide-composition-2",
      title: "Composition",
      blocks: [
        {
          kind: "text",
          value:
            "### With label and value\n\nUse `ProgressLabel` and `ProgressValue` to add a label and value display.",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            'import {\n  Progress,\n  ProgressLabel,\n  ProgressValue,\n} from "@/components/ui/progress"\n\n;<Progress value={56} className="w-full max-w-sm">\n  <ProgressLabel>Upload progress</ProgressLabel>\n  <ProgressValue />\n</Progress>',
        },
        {
          kind: "code",
          language: "text",
          value:
            "Progress\n\u251c\u2500\u2500 ProgressLabel\n\u251c\u2500\u2500 ProgressValue\n\u2514\u2500\u2500 ProgressTrack\n    \u2514\u2500\u2500 ProgressIndicator",
        },
      ],
    },
    {
      id: "guide-label-3",
      title: "Label",
      blocks: [
        {
          kind: "text",
          value:
            "Use `ProgressLabel` and `ProgressValue` to add a label and value display.",
        },
      ],
    },
    {
      id: "guide-controlled-4",
      title: "Controlled",
      blocks: [
        {
          kind: "text",
          value: "A progress bar that can be controlled by a slider.",
        },
      ],
    },
  ],
  questionnaire: [
    {
      id: "guide-usage-1",
      title: "Usage",
      blocks: [
        {
          kind: "code",
          language: "tsx",
          value:
            'import {\n  Questionnaire,\n  QuestionnaireActions,\n  QuestionnaireChoice,\n  QuestionnaireChoices,\n  QuestionnaireDescription,\n  QuestionnaireError,\n  QuestionnaireInput,\n  QuestionnaireItem,\n  QuestionnaireNext,\n  QuestionnairePrevious,\n  QuestionnaireProgress,\n  QuestionnaireSkip,\n  QuestionnaireSubmit,\n  QuestionnaireTitle,\n} from "@/components/ui/questionnaire"',
        },
        {
          kind: "code",
          language: "tsx",
          value:
            'const items = [\n  {\n    name: "direction",\n    required: true,\n    prompt: "What should we prototype next?",\n    description: "Choose a direction or write your own.",\n    choices: [\n      {\n        value: "delegation",\n        label: "Delegation",\n        description: "Show how work moves to a specialist.",\n      },\n      {\n        value: "questions",\n        label: "Question prompts",\n        description: "Show choices while the interface waits.",\n      },\n      { value: "both", label: "Both together" },\n    ],\n    input: { label: "Another answer", placeholder: "Type another answer\u2026" },\n  },\n  {\n    name: "detail",\n    required: false,\n    prompt: "How much detail should it include?",\n    description: "Skip this if you are not sure yet.",\n    choices: [\n      { value: "focused", label: "Focused" },\n      { value: "complete", label: "Complete flow" },\n    ],\n  },\n] as const',
        },
        {
          kind: "text",
          value:
            "Define the collection once: pass it to `Questionnaire` for server-rendered\nprogress, actions, and shortcuts, then map it into the parts.",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            '<Questionnaire items={items} onSubmit={handleSubmit}>\n  <QuestionnaireProgress />\n  {items.map((question) => (\n    <QuestionnaireItem\n      key={question.name}\n      name={question.name}\n      required={question.required}\n    >\n      <QuestionnaireTitle>{question.prompt}</QuestionnaireTitle>\n      <QuestionnaireDescription>\n        {question.description}\n      </QuestionnaireDescription>\n      <QuestionnaireChoices>\n        {question.choices.map((choice) => (\n          <QuestionnaireChoice key={choice.value} value={choice.value}>\n            <span className="font-medium">{choice.label}</span>\n            {"description" in choice ? (\n              <span className="text-muted-foreground">\n                {choice.description}\n              </span>\n            ) : null}\n          </QuestionnaireChoice>\n        ))}\n        {"input" in question ? (\n          <QuestionnaireInput\n            aria-label={question.input.label}\n            placeholder={question.input.placeholder}\n          />\n        ) : null}\n      </QuestionnaireChoices>\n      <QuestionnaireError />\n    </QuestionnaireItem>\n  ))}\n  <QuestionnaireActions>\n    <QuestionnairePrevious />\n    <QuestionnaireSkip />\n    <QuestionnaireNext />\n    <QuestionnaireSubmit />\n  </QuestionnaireActions>\n</Questionnaire>',
        },
        {
          kind: "code",
          language: "tsx",
          value:
            'function handleSubmit(event: React.FormEvent<HTMLFormElement>) {\n  event.preventDefault()\n  const answers = new FormData(event.currentTarget)\n  // answers.get("direction"), answers.getAll(...) for multiple items.\n}',
        },
      ],
    },
    {
      id: "guide-composition-2",
      title: "Composition",
      blocks: [
        {
          kind: "code",
          language: "text",
          value:
            "Questionnaire\n\u251c\u2500\u2500 QuestionnaireProgress\n\u251c\u2500\u2500 QuestionnaireItem\n\u2502   \u251c\u2500\u2500 QuestionnaireTitle\n\u2502   \u251c\u2500\u2500 QuestionnaireDescription\n\u2502   \u251c\u2500\u2500 QuestionnaireChoices\n\u2502   \u2502   \u251c\u2500\u2500 QuestionnaireChoice\n\u2502   \u2502   \u2514\u2500\u2500 QuestionnaireInput\n\u2502   \u2514\u2500\u2500 QuestionnaireError\n\u2514\u2500\u2500 QuestionnaireActions\n    \u251c\u2500\u2500 QuestionnairePrevious\n    \u251c\u2500\u2500 QuestionnaireSkip\n    \u251c\u2500\u2500 QuestionnaireNext\n    \u2514\u2500\u2500 QuestionnaireSubmit",
        },
        {
          kind: "text",
          value:
            "Questionnaire owns the ordered items, active item, answer state, validation,\nprogress, and navigation. The containing page, card, dialog, or drawer owns\nclose and cancellation behavior, persistence, transport, and branching.",
        },
      ],
    },
    {
      id: "guide-server-rendering-3",
      title: "Server Rendering",
      blocks: [
        {
          kind: "text",
          value:
            "Pass `items` to server-render the active item, progress, actions, and answer\nshortcuts. See the\n[headless Questionnaire](/docs/react/questionnaire) for the complete behavior.",
        },
      ],
    },
    {
      id: "guide-multiple-selection-4",
      title: "Multiple Selection",
      blocks: [
        {
          kind: "text",
          value:
            "Use `multiple` for an item that accepts more than one fixed answer.",
        },
      ],
    },
    {
      id: "guide-freeform-answer-5",
      title: "Freeform Answer",
      blocks: [
        {
          kind: "text",
          value:
            "Compose `QuestionnaireInput` with fixed choices when the user can provide another answer.",
        },
      ],
    },
    {
      id: "guide-explicit-skip-6",
      title: "Explicit Skip",
      blocks: [
        {
          kind: "text",
          value:
            "Add `QuestionnaireSkip` when an optional item may be intentionally left unanswered.",
        },
      ],
    },
    {
      id: "guide-shortcuts-7",
      title: "Shortcuts",
      blocks: [
        {
          kind: "text",
          value:
            "Assign a letter or number key to each answer with `shortcuts`.",
        },
      ],
    },
    {
      id: "guide-custom-validation-8",
      title: "Custom Validation",
      blocks: [
        {
          kind: "text",
          value:
            "Combine controlled navigation with an external schema such as Zod to return to an invalid item and present its error.",
        },
      ],
    },
    {
      id: "guide-controlled-9",
      title: "Controlled",
      blocks: [
        {
          kind: "text",
          value:
            "Control the active item from host state, such as returning to an invalid step.",
        },
      ],
    },
    {
      id: "guide-resume-10",
      title: "Resume",
      blocks: [
        {
          kind: "text",
          value:
            "Restore a saved active item and default answers, then reset changes back to that saved state.",
        },
      ],
    },
    {
      id: "guide-conditional-items-11",
      title: "Conditional Items",
      blocks: [
        {
          kind: "text",
          value:
            "Disable items that do not apply to the user's earlier answers.",
        },
      ],
    },
    {
      id: "guide-navigation-state-12",
      title: "Navigation State",
      blocks: [
        {
          kind: "text",
          value:
            "Read item status to opt into disabled navigation and custom action styling.",
        },
      ],
    },
    {
      id: "guide-custom-progress-13",
      title: "Custom Progress",
      blocks: [
        {
          kind: "text",
          value:
            "Use the Progress render state to build a custom progress indicator.",
        },
      ],
    },
    {
      id: "guide-animated-items-14",
      title: "Animated Items",
      blocks: [
        {
          kind: "text",
          value:
            "Animate the active item while keeping progress and navigation stationary.",
        },
      ],
    },
    {
      id: "guide-card-15",
      title: "Card",
      blocks: [
        {
          kind: "text",
          value:
            "Compose Questionnaire with Card slots while keeping the question title and description semantic.",
        },
      ],
    },
    {
      id: "guide-dialog-16",
      title: "Dialog",
      blocks: [
        {
          kind: "text",
          value:
            "Compose Questionnaire inside a Dialog while keeping cancellation and dismissal host-owned.",
        },
      ],
    },
    {
      id: "guide-accessibility-17",
      title: "Labels and keyboard",
      blocks: [
        {
          kind: "text",
          value:
            "`QuestionnaireItem` renders a `fieldset`, and `QuestionnaireTitle` renders its\n`legend`. Descriptions and active errors are associated with the current item,\nand invalid items and answer controls expose `aria-invalid`.\n\nFixed choices preserve native radio and checkbox behavior. Progress is exposed\nas a named progressbar, navigation uses real buttons, and inactive items and\nactions are hidden and inert. Successful navigation focuses the newly active\nitem; failed validation focuses an available answer control.\n\nAlways give `QuestionnaireInput` an accessible name with a visible label,\n`aria-label`, or `aria-labelledby`. A placeholder is not a label. See the\n[Questionnaire accessibility guide](/docs/react/questionnaire#accessibility)\nfor labeling custom compositions and the complete keyboard behavior.",
        },
      ],
    },
    {
      id: "guide-unstyled-18",
      title: "Unstyled",
      blocks: [
        {
          kind: "text",
          value:
            "The behavior in `Questionnaire` comes from the `@Leement/react` package. To use\nit directly with your own markup and styles, see\n[Questionnaire](/docs/react/questionnaire) under @Leement/react.",
        },
      ],
    },
  ],
  "radio-group": [
    {
      id: "guide-usage-1",
      title: "Usage",
      blocks: [
        {
          kind: "code",
          language: "tsx",
          value:
            'import { Label } from "@/components/ui/label"\nimport { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"',
        },
        {
          kind: "code",
          language: "tsx",
          value:
            '<RadioGroup defaultValue="option-one">\n  <div className="flex items-center gap-3">\n    <RadioGroupItem value="option-one" id="option-one" />\n    <Label htmlFor="option-one">Option One</Label>\n  </div>\n  <div className="flex items-center gap-3">\n    <RadioGroupItem value="option-two" id="option-two" />\n    <Label htmlFor="option-two">Option Two</Label>\n  </div>\n</RadioGroup>',
        },
      ],
    },
    {
      id: "guide-composition-2",
      title: "Composition",
      blocks: [
        {
          kind: "text",
          value: "Use the following composition to build a `RadioGroup`:",
        },
        {
          kind: "code",
          language: "text",
          value:
            "RadioGroup\n\u251c\u2500\u2500 RadioGroupItem\n\u2514\u2500\u2500 RadioGroupItem",
        },
      ],
    },
    {
      id: "guide-description-3",
      title: "Description",
      blocks: [
        {
          kind: "text",
          value:
            "Radio group items with a description using the `Field` component.",
        },
      ],
    },
    {
      id: "guide-choice-card-4",
      title: "Choice Card",
      blocks: [
        {
          kind: "text",
          value:
            "Use `FieldLabel` to wrap the entire `Field` for a clickable card-style selection.",
        },
      ],
    },
    {
      id: "guide-fieldset-5",
      title: "Fieldset",
      blocks: [
        {
          kind: "text",
          value:
            "Use `FieldSet` and `FieldLegend` to group radio items with a label and description.",
        },
      ],
    },
    {
      id: "guide-disabled-6",
      title: "Disabled",
      blocks: [
        {
          kind: "text",
          value:
            "Use the `disabled` prop on `RadioGroup` to disable all items.",
        },
      ],
    },
    {
      id: "guide-invalid-7",
      title: "Invalid",
      blocks: [
        {
          kind: "text",
          value:
            "Use `aria-invalid` on `RadioGroupItem` and `data-invalid` on `Field` to show validation errors.",
        },
      ],
    },
  ],
  resizable: [
    {
      id: "guide-about-1",
      title: "About",
      blocks: [
        {
          kind: "text",
          value:
            "The `Resizable` component is built on top of [react-resizable-panels](https://github.com/bvaughn/react-resizable-panels) by [bvaughn](https://github.com/bvaughn).",
        },
      ],
    },
    {
      id: "guide-usage-2",
      title: "Usage",
      blocks: [
        {
          kind: "code",
          language: "tsx",
          value:
            'import {\n  ResizableHandle,\n  ResizablePanel,\n  ResizablePanelGroup,\n} from "@/components/ui/resizable"',
        },
        {
          kind: "code",
          language: "tsx",
          value:
            '<ResizablePanelGroup orientation="horizontal">\n  <ResizablePanel>One</ResizablePanel>\n  <ResizableHandle />\n  <ResizablePanel>Two</ResizablePanel>\n</ResizablePanelGroup>',
        },
      ],
    },
    {
      id: "guide-composition-3",
      title: "Composition",
      blocks: [
        {
          kind: "text",
          value:
            "Use the following composition to build a `ResizablePanelGroup`:",
        },
        {
          kind: "code",
          language: "text",
          value:
            "ResizablePanelGroup\n\u251c\u2500\u2500 ResizablePanel\n\u251c\u2500\u2500 ResizableHandle\n\u2514\u2500\u2500 ResizablePanel",
        },
      ],
    },
    {
      id: "guide-vertical-4",
      title: "Vertical",
      blocks: [
        {
          kind: "text",
          value: 'Use `orientation="vertical"` for vertical resizing.',
        },
      ],
    },
    {
      id: "guide-handle-5",
      title: "Handle",
      blocks: [
        {
          kind: "text",
          value:
            "Use the `withHandle` prop on `ResizableHandle` to show a visible handle.",
        },
      ],
    },
  ],
  "scroll-area": [
    {
      id: "guide-usage-1",
      title: "Usage",
      blocks: [
        {
          kind: "code",
          language: "tsx",
          value:
            'import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"',
        },
        {
          kind: "code",
          language: "tsx",
          value:
            '<ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">\n  Your scrollable content here.\n</ScrollArea>',
        },
      ],
    },
    {
      id: "guide-composition-2",
      title: "Composition",
      blocks: [
        {
          kind: "text",
          value: "Use the following composition to build a `ScrollArea`:",
        },
        {
          kind: "code",
          language: "text",
          value: "ScrollArea\n\u2514\u2500\u2500 ScrollBar",
        },
      ],
    },
    {
      id: "guide-horizontal-3",
      title: "Horizontal",
      blocks: [
        {
          kind: "text",
          value:
            'Use `ScrollBar` with `orientation="horizontal"` for horizontal scrolling.',
        },
      ],
    },
  ],
  select: [
    {
      id: "guide-usage-1",
      title: "Usage",
      blocks: [
        {
          kind: "code",
          language: "tsx",
          value:
            'import {\n  Select,\n  SelectContent,\n  SelectGroup,\n  SelectItem,\n  SelectTrigger,\n  SelectValue,\n} from "@/components/ui/select"',
        },
        {
          kind: "code",
          language: "tsx",
          value:
            'const items = [\n  { label: "Light", value: "light" },\n  { label: "Dark", value: "dark" },\n  { label: "System", value: "system" },\n]\n\n<Select items={items}>\n  <SelectTrigger className="w-[180px]">\n    <SelectValue placeholder="Theme" />\n  </SelectTrigger>\n  <SelectContent>\n    <SelectGroup>\n      {items.map((item) => (\n        <SelectItem key={item.value} value={item.value}>\n          {item.label}\n        </SelectItem>\n      ))}\n    </SelectGroup>\n  </SelectContent>\n</Select>',
        },
      ],
    },
    {
      id: "guide-composition-2",
      title: "Composition",
      blocks: [
        {
          kind: "text",
          value: "Use the following composition to build a `Select`:",
        },
        {
          kind: "code",
          language: "text",
          value:
            "Select\n\u251c\u2500\u2500 SelectTrigger\n\u2502   \u2514\u2500\u2500 SelectValue\n\u2514\u2500\u2500 SelectContent\n    \u251c\u2500\u2500 SelectGroup\n    \u2502   \u251c\u2500\u2500 SelectLabel\n    \u2502   \u251c\u2500\u2500 SelectItem\n    \u2502   \u2514\u2500\u2500 SelectItem\n    \u251c\u2500\u2500 SelectSeparator\n    \u2514\u2500\u2500 SelectGroup\n        \u251c\u2500\u2500 SelectLabel\n        \u251c\u2500\u2500 SelectItem\n        \u2514\u2500\u2500 SelectItem",
        },
      ],
    },
    {
      id: "guide-align-item-with-trigger-3",
      title: "Align Item With Trigger",
      blocks: [
        {
          kind: "text",
          value:
            "Use `alignItemWithTrigger` on `SelectContent` to control whether the selected item aligns with the trigger. When `true` (default), the popup positions so the selected item appears over the trigger. When `false`, the popup aligns to the trigger edge.",
        },
      ],
    },
    {
      id: "guide-groups-4",
      title: "Groups",
      blocks: [
        {
          kind: "text",
          value:
            "Use `SelectGroup`, `SelectLabel`, and `SelectSeparator` to organize items.",
        },
      ],
    },
    {
      id: "guide-scrollable-5",
      title: "Scrollable",
      blocks: [
        {
          kind: "text",
          value: "A select with many items that scrolls.",
        },
      ],
    },
    {
      id: "guide-invalid-6",
      title: "Invalid",
      blocks: [
        {
          kind: "text",
          value:
            "Add the `data-invalid` attribute to the `Field` component and the `aria-invalid` attribute to the `SelectTrigger` component to show an error state.",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            "<Field data-invalid>\n  <FieldLabel>Fruit</FieldLabel>\n  <SelectTrigger aria-invalid>\n    <SelectValue />\n  </SelectTrigger>\n</Field>",
        },
      ],
    },
  ],
  separator: [
    {
      id: "guide-usage-1",
      title: "Usage",
      blocks: [
        {
          kind: "code",
          language: "tsx",
          value: 'import { Separator } from "@/components/ui/separator"',
        },
        {
          kind: "code",
          language: "tsx",
          value: "<Separator />",
        },
      ],
    },
    {
      id: "guide-vertical-2",
      title: "Vertical",
      blocks: [
        {
          kind: "text",
          value: 'Use `orientation="vertical"` for a vertical separator.',
        },
      ],
    },
    {
      id: "guide-menu-3",
      title: "Menu",
      blocks: [
        {
          kind: "text",
          value: "Vertical separators between menu items with descriptions.",
        },
      ],
    },
    {
      id: "guide-list-4",
      title: "List",
      blocks: [
        {
          kind: "text",
          value: "Horizontal separators between list items.",
        },
      ],
    },
  ],
  sheet: [
    {
      id: "guide-usage-1",
      title: "Usage",
      blocks: [
        {
          kind: "code",
          language: "tsx",
          value:
            'import {\n  Sheet,\n  SheetClose,\n  SheetContent,\n  SheetDescription,\n  SheetFooter,\n  SheetHeader,\n  SheetTitle,\n  SheetTrigger,\n} from "@/components/ui/sheet"',
        },
        {
          kind: "code",
          language: "tsx",
          value:
            "<Sheet>\n  <SheetTrigger>Open</SheetTrigger>\n  <SheetContent>\n    <SheetHeader>\n      <SheetTitle>Are you absolutely sure?</SheetTitle>\n      <SheetDescription>This action cannot be undone.</SheetDescription>\n    </SheetHeader>\n  </SheetContent>\n</Sheet>",
        },
      ],
    },
    {
      id: "guide-composition-2",
      title: "Composition",
      blocks: [
        {
          kind: "text",
          value: "Use the following composition to build a `Sheet`:",
        },
        {
          kind: "code",
          language: "text",
          value:
            "Sheet\n\u251c\u2500\u2500 SheetTrigger\n\u2514\u2500\u2500 SheetContent\n    \u251c\u2500\u2500 SheetHeader\n    \u2502   \u251c\u2500\u2500 SheetTitle\n    \u2502   \u2514\u2500\u2500 SheetDescription\n    \u2514\u2500\u2500 SheetFooter",
        },
      ],
    },
    {
      id: "guide-side-3",
      title: "Side",
      blocks: [
        {
          kind: "text",
          value:
            "Use the `side` prop on `SheetContent` to set the edge of the screen where the sheet appears. Values are `top`, `right`, `bottom`, or `left`.",
        },
      ],
    },
    {
      id: "guide-no-close-button-4",
      title: "No Close Button",
      blocks: [
        {
          kind: "text",
          value:
            "Use `showCloseButton={false}` on `SheetContent` to hide the close button.",
        },
      ],
    },
  ],
  sidebar: [
    {
      id: "guide-composition-notes-1",
      title: "Composition notes",
      blocks: [
        {
          kind: "text",
          value:
            '<figure className="flex flex-col gap-4">\n  \n  <figcaption className="text-center text-sm text-gray-500">\n    A sidebar that collapses to icons.\n  </figcaption>\n</figure>\n\nSidebars are one of the most complex components to build. They are central\nto any application and often contain a lot of moving parts.\n\nWe now have a solid foundation to build on top of. Composable. Themeable.\nCustomizable.\n\n[Browse the Blocks Library](/blocks).',
        },
      ],
    },
    {
      id: "guide-usage-2",
      title: "Usage",
      blocks: [
        {
          kind: "code",
          language: "tsx",
          value:
            'import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"\nimport { AppSidebar } from "@/components/app-sidebar"\n\nexport default function Layout({ children }: { children: React.ReactNode }) {\n  return (\n    <SidebarProvider>\n      <AppSidebar />\n      <main>\n        <SidebarTrigger />\n        {children}\n      </main>\n    </SidebarProvider>\n  )\n}',
        },
        {
          kind: "code",
          language: "tsx",
          value:
            'import {\n  Sidebar,\n  SidebarContent,\n  SidebarFooter,\n  SidebarGroup,\n  SidebarHeader,\n} from "@/components/ui/sidebar"\n\nexport function AppSidebar() {\n  return (\n    <Sidebar>\n      <SidebarHeader />\n      <SidebarContent>\n        <SidebarGroup />\n        <SidebarGroup />\n      </SidebarContent>\n      <SidebarFooter />\n    </Sidebar>\n  )\n}',
        },
      ],
    },
    {
      id: "guide-composition-3",
      title: "Composition",
      blocks: [
        {
          kind: "text",
          value: "Use the following composition to build a `Sidebar` layout:",
        },
        {
          kind: "code",
          language: "text",
          value:
            "SidebarProvider\n\u251c\u2500\u2500 Sidebar\n\u2502   \u251c\u2500\u2500 SidebarHeader\n\u2502   \u251c\u2500\u2500 SidebarContent\n\u2502   \u2502   \u251c\u2500\u2500 SidebarGroup\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 SidebarGroupLabel\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 SidebarGroupAction\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 SidebarGroupContent\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 SidebarMenu\n\u2502   \u2502   \u2502       \u251c\u2500\u2500 SidebarMenuItem\n\u2502   \u2502   \u2502       \u2502   \u251c\u2500\u2500 SidebarMenuButton\n\u2502   \u2502   \u2502       \u2502   \u251c\u2500\u2500 SidebarMenuAction\n\u2502   \u2502   \u2502       \u2502   \u2514\u2500\u2500 SidebarMenuBadge\n\u2502   \u2502   \u2502       \u2514\u2500\u2500 SidebarMenuItem\n\u2502   \u2502   \u2502           \u251c\u2500\u2500 SidebarMenuButton\n\u2502   \u2502   \u2502           \u2514\u2500\u2500 SidebarMenuSub\n\u2502   \u2502   \u2502               \u251c\u2500\u2500 SidebarMenuSubItem\n\u2502   \u2502   \u2502               \u2514\u2500\u2500 SidebarMenuSubItem\n\u2502   \u2502   \u2514\u2500\u2500 SidebarGroup\n\u2502   \u2502       \u2514\u2500\u2500 SidebarMenu\n\u2502   \u2502           \u251c\u2500\u2500 SidebarMenuItem\n\u2502   \u2502           \u2514\u2500\u2500 SidebarMenuItem\n\u2502   \u251c\u2500\u2500 SidebarFooter\n\u2502   \u2514\u2500\u2500 SidebarRail\n\u251c\u2500\u2500 SidebarInset\n\u2514\u2500\u2500 SidebarTrigger",
        },
      ],
    },
    {
      id: "guide-structure-4",
      title: "Structure",
      blocks: [
        {
          kind: "text",
          value:
            "- **SidebarProvider** \u2014 Handles collapsible state and provides sidebar context to child components.\n- **Sidebar** \u2014 The main collapsible sidebar panel.\n- **SidebarHeader** \u2014 Sticky at the top; use for branding, titles, or workspace switchers.\n- **SidebarFooter** \u2014 Sticky at the bottom; use for user menus, settings, or actions.\n- **SidebarContent** \u2014 Scrollable region between the header and footer.\n- **SidebarGroup** \u2014 Groups related navigation with optional label, action, and content areas.\n- **SidebarMenu** / **SidebarMenuItem** \u2014 Menu structure for links, badges, actions, and nested submenus.\n- **SidebarRail** \u2014 Optional toggle hit area along the sidebar edge.\n- **SidebarInset** \u2014 Wraps main content when using the `inset` variant.\n- **SidebarTrigger** \u2014 Control that toggles the sidebar open or collapsed.",
        },
      ],
    },
    {
      id: "guide-sidebarprovider-5",
      title: "SidebarProvider",
      blocks: [
        {
          kind: "text",
          value:
            "The `SidebarProvider` component is used to provide the sidebar context to the `Sidebar` component. You should always wrap your application in a `SidebarProvider` component.\n\n### Props\n\n| Name           | Type                      | Description                                  |\n| -------------- | ------------------------- | -------------------------------------------- |\n| `defaultOpen`  | `boolean`                 | Default open state of the sidebar.           |\n| `open`         | `boolean`                 | Open state of the sidebar (controlled).      |\n| `onOpenChange` | `(open: boolean) => void` | Sets open state of the sidebar (controlled). |\n\n### Width\n\nIf you have a single sidebar in your application, you can use the `SIDEBAR_WIDTH` and `SIDEBAR_WIDTH_MOBILE` variables in `sidebar.tsx` to set the width of the sidebar.",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            'const SIDEBAR_WIDTH = "16rem"\nconst SIDEBAR_WIDTH_MOBILE = "18rem"',
        },
        {
          kind: "text",
          value:
            "For multiple sidebars in your application, you can use the `--sidebar-width` and `--sidebar-width-mobile` CSS variables in the `style` prop.",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            '<SidebarProvider\n  style={\n    {\n      "--sidebar-width": "20rem",\n      "--sidebar-width-mobile": "20rem",\n    } as React.CSSProperties\n  }\n>\n  <Sidebar />\n</SidebarProvider>',
        },
        {
          kind: "text",
          value:
            "### Keyboard Shortcut\n\nTo trigger the sidebar, you use the `cmd+b` keyboard shortcut on Mac and `ctrl+b` on Windows.",
        },
        {
          kind: "code",
          language: "tsx",
          value: 'const SIDEBAR_KEYBOARD_SHORTCUT = "b"',
        },
      ],
    },
    {
      id: "guide-sidebar-6",
      title: "Sidebar",
      blocks: [
        {
          kind: "text",
          value:
            "The main `Sidebar` component used to render a collapsible sidebar.\n\n### Props\n\n| Property      | Type                              | Description                       |\n| ------------- | --------------------------------- | --------------------------------- |\n| `side`        | `left` or `right`                 | The side of the sidebar.          |\n| `variant`     | `sidebar`, `floating`, or `inset` | The variant of the sidebar.       |\n| `collapsible` | `offcanvas`, `icon`, or `none`    | Collapsible state of the sidebar. |\n\n| Prop        | Description                                                  |\n| ----------- | ------------------------------------------------------------ |\n| `offcanvas` | A collapsible sidebar that slides in from the left or right. |\n| `icon`      | A sidebar that collapses to icons.                           |\n| `none`      | A non-collapsible sidebar.                                   |\n\n\n  **Note:** If you use the `inset` variant, remember to wrap your main content\n  in a `SidebarInset` component.",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            '<SidebarProvider>\n  <Sidebar variant="inset" />\n  <SidebarInset>\n    <main>{children}</main>\n  </SidebarInset>\n</SidebarProvider>',
        },
      ],
    },
    {
      id: "guide-usesidebar-7",
      title: "useSidebar",
      blocks: [
        {
          kind: "text",
          value: "The `useSidebar` hook is used to control the sidebar.",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            'import { useSidebar } from "@/components/ui/sidebar"\n\nexport function AppSidebar() {\n  const {\n    state,\n    open,\n    setOpen,\n    openMobile,\n    setOpenMobile,\n    isMobile,\n    toggleSidebar,\n  } = useSidebar()\n}',
        },
        {
          kind: "text",
          value:
            "| Property        | Type                      | Description                                   |\n| --------------- | ------------------------- | --------------------------------------------- |\n| `state`         | `expanded` or `collapsed` | The current state of the sidebar.             |\n| `open`          | `boolean`                 | Whether the sidebar is open.                  |\n| `setOpen`       | `(open: boolean) => void` | Sets the open state of the sidebar.           |\n| `openMobile`    | `boolean`                 | Whether the sidebar is open on mobile.        |\n| `setOpenMobile` | `(open: boolean) => void` | Sets the open state of the sidebar on mobile. |\n| `isMobile`      | `boolean`                 | Whether the sidebar is on mobile.             |\n| `toggleSidebar` | `() => void`              | Toggles the sidebar. Desktop and mobile.      |",
        },
      ],
    },
    {
      id: "guide-sidebarheader-8",
      title: "SidebarHeader",
      blocks: [
        {
          kind: "text",
          value:
            "Use the `SidebarHeader` component to add a sticky header to the sidebar.",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            '<Sidebar>\n  <SidebarHeader>\n    <SidebarMenu>\n      <SidebarMenuItem>\n        <DropdownMenu>\n          <DropdownMenuTrigger render={<SidebarMenuButton />}>\n            Select Workspace\n            <ChevronDown className="ml-auto" />\n          </DropdownMenuTrigger>\n          <DropdownMenuContent>\n            <DropdownMenuItem>\n              <span>Acme Inc</span>\n            </DropdownMenuItem>\n          </DropdownMenuContent>\n        </DropdownMenu>\n      </SidebarMenuItem>\n    </SidebarMenu>\n  </SidebarHeader>\n</Sidebar>',
        },
      ],
    },
    {
      id: "guide-sidebarfooter-9",
      title: "SidebarFooter",
      blocks: [
        {
          kind: "text",
          value:
            "Use the `SidebarFooter` component to add a sticky footer to the sidebar.",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            "<Sidebar>\n  <SidebarFooter>\n    <SidebarMenu>\n      <SidebarMenuItem>\n        <SidebarMenuButton>\n          <User2 /> Username\n        </SidebarMenuButton>\n      </SidebarMenuItem>\n    </SidebarMenu>\n  </SidebarFooter>\n</Sidebar>",
        },
      ],
    },
    {
      id: "guide-sidebarcontent-10",
      title: "SidebarContent",
      blocks: [
        {
          kind: "text",
          value:
            "The `SidebarContent` component is used to wrap the content of the sidebar. This is where you add your `SidebarGroup` components. It is scrollable.",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            "<Sidebar>\n  <SidebarContent>\n    <SidebarGroup />\n    <SidebarGroup />\n  </SidebarContent>\n</Sidebar>",
        },
      ],
    },
    {
      id: "guide-sidebargroup-11",
      title: "SidebarGroup",
      blocks: [
        {
          kind: "text",
          value:
            "Use the `SidebarGroup` component to create a section within the sidebar.\n\nA `SidebarGroup` has a `SidebarGroupLabel`, a `SidebarGroupContent` and an optional `SidebarGroupAction`.",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            '<SidebarGroup>\n  <SidebarGroupLabel>Application</SidebarGroupLabel>\n  <SidebarGroupAction>\n    <Plus /> <span className="sr-only">Add Project</span>\n  </SidebarGroupAction>\n  <SidebarGroupContent></SidebarGroupContent>\n</SidebarGroup>',
        },
        {
          kind: "text",
          value:
            "To make a `SidebarGroup` collapsible, wrap it in a `Collapsible`.",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            '<Collapsible defaultOpen className="group/collapsible">\n  <SidebarGroup>\n    <SidebarGroupLabel render={<CollapsibleTrigger />}>\n      Help\n      <ChevronDown className="ml-auto  group-data-open/collapsible:rotate-180" />\n    </SidebarGroupLabel>\n    <CollapsibleContent>\n      <SidebarGroupContent />\n    </CollapsibleContent>\n  </SidebarGroup>\n</Collapsible>',
        },
      ],
    },
    {
      id: "guide-sidebarmenu-12",
      title: "SidebarMenu",
      blocks: [
        {
          kind: "text",
          value:
            "The `SidebarMenu` component is used for building a menu within a `SidebarGroup`.",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            "<SidebarMenu>\n  {projects.map((project) => (\n    <SidebarMenuItem key={project.name}>\n      <SidebarMenuButton render={<a href={project.url} />}>\n        <project.icon />\n        <span>{project.name}</span>\n      </SidebarMenuButton>\n    </SidebarMenuItem>\n  ))}\n</SidebarMenu>",
        },
      ],
    },
    {
      id: "guide-sidebarmenubutton-13",
      title: "SidebarMenuButton",
      blocks: [
        {
          kind: "text",
          value:
            "The `SidebarMenuButton` component is used to render a menu button within a `SidebarMenuItem`.\n\nBy default, the `SidebarMenuButton` renders a button but you can use the `render` prop to render a different component such as a `Link` or an `a` tag.\n\nUse the `isActive` prop to mark a menu item as active.",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            '<SidebarMenuButton render={<a href="#" />} isActive>\n  Home\n</SidebarMenuButton>',
        },
      ],
    },
    {
      id: "guide-sidebarmenuaction-14",
      title: "SidebarMenuAction",
      blocks: [
        {
          kind: "text",
          value:
            "The `SidebarMenuAction` component is used to render a menu action within a `SidebarMenuItem`.",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            '<SidebarMenuItem>\n  <SidebarMenuButton render={<a href="#" />}>\n    <Home />\n    <span>Home</span>\n  </SidebarMenuButton>\n  <SidebarMenuAction>\n    <Plus /> <span className="sr-only">Add Project</span>\n  </SidebarMenuAction>\n</SidebarMenuItem>',
        },
      ],
    },
    {
      id: "guide-sidebarmenusub-15",
      title: "SidebarMenuSub",
      blocks: [
        {
          kind: "text",
          value:
            "The `SidebarMenuSub` component is used to render a submenu within a `SidebarMenu`.",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            "<SidebarMenuItem>\n  <SidebarMenuButton />\n  <SidebarMenuSub>\n    <SidebarMenuSubItem>\n      <SidebarMenuSubButton />\n    </SidebarMenuSubItem>\n  </SidebarMenuSub>\n</SidebarMenuItem>",
        },
      ],
    },
    {
      id: "guide-sidebarmenubadge-16",
      title: "SidebarMenuBadge",
      blocks: [
        {
          kind: "text",
          value:
            "The `SidebarMenuBadge` component is used to render a badge within a `SidebarMenuItem`.",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            "<SidebarMenuItem>\n  <SidebarMenuButton />\n  <SidebarMenuBadge>24</SidebarMenuBadge>\n</SidebarMenuItem>",
        },
      ],
    },
    {
      id: "guide-sidebarmenuskeleton-17",
      title: "SidebarMenuSkeleton",
      blocks: [
        {
          kind: "text",
          value:
            "The `SidebarMenuSkeleton` component is used to render a skeleton for a `SidebarMenu`.",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            "<SidebarMenu>\n  {Array.from({ length: 5 }).map((_, index) => (\n    <SidebarMenuItem key={index}>\n      <SidebarMenuSkeleton />\n    </SidebarMenuItem>\n  ))}\n</SidebarMenu>",
        },
      ],
    },
    {
      id: "guide-sidebartrigger-18",
      title: "SidebarTrigger",
      blocks: [
        {
          kind: "text",
          value:
            "Use the `SidebarTrigger` component to render a button that toggles the sidebar.",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            'import { useSidebar } from "@/components/ui/sidebar"\n\nexport function CustomTrigger() {\n  const { toggleSidebar } = useSidebar()\n\n  return <button onClick={toggleSidebar}>Toggle Sidebar</button>\n}',
        },
      ],
    },
    {
      id: "guide-sidebarrail-19",
      title: "SidebarRail",
      blocks: [
        {
          kind: "text",
          value:
            "The `SidebarRail` component is used to render a rail within a `Sidebar`. This rail can be used to toggle the sidebar.",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            "<Sidebar>\n  <SidebarHeader />\n  <SidebarContent>\n    <SidebarGroup />\n  </SidebarContent>\n  <SidebarFooter />\n  <SidebarRail />\n</Sidebar>",
        },
      ],
    },
    {
      id: "guide-controlled-sidebar-20",
      title: "Controlled Sidebar",
      blocks: [
        {
          kind: "text",
          value:
            "Use the `open` and `onOpenChange` props to control the sidebar.",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            "export function AppSidebar() {\n  const [open, setOpen] = React.useState(false)\n\n  return (\n    <SidebarProvider open={open} onOpenChange={setOpen}>\n      <Sidebar />\n    </SidebarProvider>\n  )\n}",
        },
      ],
    },
    {
      id: "guide-theming-21",
      title: "Theming",
      blocks: [
        {
          kind: "text",
          value: "We use the following CSS variables to theme the sidebar.",
        },
        {
          kind: "code",
          language: "css",
          value:
            "@layer base {\n  :root {\n    --sidebar-background: 0 0% 98%;\n    --sidebar-foreground: 240 5.3% 26.1%;\n    --sidebar-primary: 240 5.9% 10%;\n    --sidebar-primary-foreground: 0 0% 98%;\n    --sidebar-accent: 240 4.8% 95.9%;\n    --sidebar-accent-foreground: 240 5.9% 10%;\n    --sidebar-border: 220 13% 91%;\n    --sidebar-ring: 217.2 91.2% 59.8%;\n  }\n\n  .dark {\n    --sidebar-background: 240 5.9% 10%;\n    --sidebar-foreground: 240 4.8% 95.9%;\n    --sidebar-primary: 0 0% 98%;\n    --sidebar-primary-foreground: 240 5.9% 10%;\n    --sidebar-accent: 240 3.7% 15.9%;\n    --sidebar-accent-foreground: 240 4.8% 95.9%;\n    --sidebar-border: 240 3.7% 15.9%;\n    --sidebar-ring: 217.2 91.2% 59.8%;\n  }\n}",
        },
      ],
    },
    {
      id: "guide-styling-22",
      title: "Styling",
      blocks: [
        {
          kind: "text",
          value:
            "Here are some tips for styling the sidebar based on different states.",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            '<Sidebar collapsible="icon">\n  <SidebarContent>\n    <SidebarGroup className="group-data-[collapsible=icon]:hidden" />\n  </SidebarContent>\n</Sidebar>',
        },
        {
          kind: "code",
          language: "tsx",
          value:
            '<SidebarMenuItem>\n  <SidebarMenuButton />\n  <SidebarMenuAction className="peer-data-[active=true]/menu-button:opacity-100" />\n</SidebarMenuItem>',
        },
      ],
    },
    {
      id: "guide-changelog-23",
      title: "Changelog",
      blocks: [
        {
          kind: "text",
          value:
            "### RTL Support\n\nIf you're upgrading from a previous version of the `Sidebar` component, you'll need to apply the following updates to add RTL support:\n\n\n\nAdd `dir` prop to Sidebar component.\n\nAdd `dir` to the destructured props and pass it to `SheetContent` for mobile:",
        },
        {
          kind: "code",
          language: "diff",
          value:
            'function Sidebar({\n    side = "left",\n    variant = "sidebar",\n    collapsible = "offcanvas",\n    className,\n    children,\n+   dir,\n    ...props\n  }: React.ComponentProps<"div"> & {\n    side?: "left" | "right"\n    variant?: "sidebar" | "floating" | "inset"\n    collapsible?: "offcanvas" | "icon" | "none"\n  }) {',
        },
        {
          kind: "text",
          value: "Then pass it to `SheetContent` in the mobile view:",
        },
        {
          kind: "code",
          language: "diff",
          value:
            '<Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}>\n    <SheetContent\n+     dir={dir}\n      data-sidebar="sidebar"\n      data-slot="sidebar"\n      data-mobile="true"',
        },
        {
          kind: "text",
          value:
            "Add `data-side` attribute to sidebar container.\n\nAdd `data-side={side}` to the sidebar container element:",
        },
        {
          kind: "code",
          language: "diff",
          value:
            '<div\n    data-slot="sidebar-container"\n+   data-side={side}\n    className={cn(',
        },
        {
          kind: "text",
          value:
            "Update sidebar container positioning classes.\n\nReplace JavaScript ternary conditional classes with CSS data attribute selectors:",
        },
        {
          kind: "code",
          language: "diff",
          value:
            'className={cn(\n-   "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width)    md:flex",\n-   side === "left"\n-     ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]"\n-     : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",\n+   "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width)    md:flex data-[side=left]:left-0 data-[side=right]:right-0 data-[side=left]:group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)] data-[side=right]:group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",',
        },
        {
          kind: "text",
          value:
            "Update SidebarRail positioning classes.\n\nUpdate the `SidebarRail` component to use physical positioning for the rail:",
        },
        {
          kind: "code",
          language: "diff",
          value:
            'className={cn(\n-   "hover:after:bg-sidebar-border absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2   group-data-[side=left]:-end-4 group-data-[side=right]:start-0 after:absolute after:inset-y-0 after:start-1/2 after:w-[2px] sm:flex",\n+   "hover:after:bg-sidebar-border absolute inset-y-0 z-20 hidden w-4 ltr:-translate-x-1/2 rtl:-translate-x-1/2   group-data-[side=left]:-right-4 group-data-[side=right]:left-0 after:absolute after:inset-y-0 after:start-1/2 after:w-[2px] sm:flex",',
        },
        {
          kind: "text",
          value:
            'Add RTL flip to SidebarTrigger icon.\n\nAdd `className="rtl:rotate-180"` to the icon in `SidebarTrigger` to flip it in RTL mode:',
        },
        {
          kind: "code",
          language: "diff",
          value:
            '<Button ...>\n-   <PanelLeftIcon />\n+   <PanelLeftIcon className="rtl:rotate-180" />\n    <span className="sr-only">Toggle Sidebar</span>\n  </Button>',
        },
        {
          kind: "text",
          value:
            "After applying these changes, you can use the `dir` prop to set the direction:",
        },
        {
          kind: "code",
          language: "tsx",
          value: '<Sidebar dir="rtl" side="right">\n  {/* ... */}\n</Sidebar>',
        },
        {
          kind: "text",
          value:
            "The sidebar will correctly position itself and handle interactions in both LTR and RTL layouts.",
        },
      ],
    },
  ],
  skeleton: [
    {
      id: "guide-usage-1",
      title: "Usage",
      blocks: [
        {
          kind: "code",
          language: "tsx",
          value: 'import { Skeleton } from "@/components/ui/skeleton"',
        },
        {
          kind: "code",
          language: "tsx",
          value: '<Skeleton className="h-[20px] w-[100px] rounded-full" />',
        },
      ],
    },
  ],
  slider: [
    {
      id: "guide-usage-1",
      title: "Usage",
      blocks: [
        {
          kind: "code",
          language: "tsx",
          value: 'import { Slider } from "@/components/ui/slider"',
        },
        {
          kind: "code",
          language: "tsx",
          value: "<Slider defaultValue={[33]} max={100} step={1} />",
        },
      ],
    },
    {
      id: "guide-range-2",
      title: "Range",
      blocks: [
        {
          kind: "text",
          value: "Use an array with two values for a range slider.",
        },
      ],
    },
    {
      id: "guide-multiple-thumbs-3",
      title: "Multiple Thumbs",
      blocks: [
        {
          kind: "text",
          value: "Use an array with multiple values for multiple thumbs.",
        },
      ],
    },
    {
      id: "guide-vertical-4",
      title: "Vertical",
      blocks: [
        {
          kind: "text",
          value: 'Use `orientation="vertical"` for a vertical slider.',
        },
      ],
    },
    {
      id: "guide-disabled-5",
      title: "Disabled",
      blocks: [
        {
          kind: "text",
          value: "Use the `disabled` prop to disable the slider.",
        },
      ],
    },
  ],
  spinner: [
    {
      id: "guide-usage-1",
      title: "Usage",
      blocks: [
        {
          kind: "code",
          language: "tsx",
          value: 'import { Spinner } from "@/components/ui/spinner"',
        },
        {
          kind: "code",
          language: "tsx",
          value: "<Spinner />",
        },
      ],
    },
    {
      id: "guide-customization-2",
      title: "Customization",
      blocks: [
        {
          kind: "text",
          value:
            "You can replace the default spinner icon with any other icon by editing the `Spinner` component.",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            'import { cn } from "@/lib/utils"\nimport { LoaderIcon } from "lucide-react"\n\nfunction Spinner({ className, ...props }: React.ComponentProps<"svg">) {\n  return (\n    <LoaderIcon\n      role="status"\n      aria-label="Loading"\n      className={cn("size-4 ", className)}\n      {...props}\n    />\n  )\n}\n\nexport { Spinner }',
        },
      ],
    },
    {
      id: "guide-size-3",
      title: "Size",
      blocks: [
        {
          kind: "text",
          value:
            "Use the `size-*` utility class to change the size of the spinner.",
        },
      ],
    },
    {
      id: "guide-button-4",
      title: "Button",
      blocks: [
        {
          kind: "text",
          value:
            'Add a spinner to a button to indicate a loading state. Place the `<Spinner />` before the label with `data-icon="inline-start"` for a start position, or after the label with `data-icon="inline-end"` for an end position.',
        },
      ],
    },
    {
      id: "guide-badge-5",
      title: "Badge",
      blocks: [
        {
          kind: "text",
          value:
            'Add a spinner to a badge to indicate a loading state. Place the `<Spinner />` before the label with `data-icon="inline-start"` for a start position, or after the label with `data-icon="inline-end"` for an end position.',
        },
      ],
    },
  ],
  switch: [
    {
      id: "guide-usage-1",
      title: "Usage",
      blocks: [
        {
          kind: "code",
          language: "tsx",
          value: 'import { Switch } from "@/components/ui/switch"',
        },
        {
          kind: "code",
          language: "tsx",
          value: "<Switch />",
        },
      ],
    },
    {
      id: "guide-choice-card-2",
      title: "Choice Card",
      blocks: [
        {
          kind: "text",
          value:
            "Card-style selection where `FieldLabel` wraps the entire `Field` for a clickable card pattern.",
        },
      ],
    },
    {
      id: "guide-disabled-3",
      title: "Disabled",
      blocks: [
        {
          kind: "text",
          value:
            "Add the `disabled` prop to the `Switch` component to disable the switch. Add the `data-disabled` prop to the `Field` component for styling.",
        },
      ],
    },
    {
      id: "guide-invalid-4",
      title: "Invalid",
      blocks: [
        {
          kind: "text",
          value:
            "Add the `aria-invalid` prop to the `Switch` component to indicate an invalid state. Add the `data-invalid` prop to the `Field` component for styling.",
        },
      ],
    },
    {
      id: "guide-size-5",
      title: "Size",
      blocks: [
        {
          kind: "text",
          value: "Use the `size` prop to change the size of the switch.",
        },
      ],
    },
  ],
  table: [
    {
      id: "guide-usage-1",
      title: "Usage",
      blocks: [
        {
          kind: "code",
          language: "tsx",
          value:
            'import {\n  Table,\n  TableBody,\n  TableCaption,\n  TableCell,\n  TableHead,\n  TableHeader,\n  TableRow,\n} from "@/components/ui/table"',
        },
        {
          kind: "code",
          language: "tsx",
          value:
            '<Table>\n  <TableCaption>A list of your recent invoices.</TableCaption>\n  <TableHeader>\n    <TableRow>\n      <TableHead className="w-[100px]">Invoice</TableHead>\n      <TableHead>Status</TableHead>\n      <TableHead>Method</TableHead>\n      <TableHead className="text-right">Amount</TableHead>\n    </TableRow>\n  </TableHeader>\n  <TableBody>\n    <TableRow>\n      <TableCell className="font-medium">INV001</TableCell>\n      <TableCell>Paid</TableCell>\n      <TableCell>Credit Card</TableCell>\n      <TableCell className="text-right">$250.00</TableCell>\n    </TableRow>\n  </TableBody>\n</Table>',
        },
      ],
    },
    {
      id: "guide-composition-2",
      title: "Composition",
      blocks: [
        {
          kind: "text",
          value: "Use the following composition to build a `Table`:",
        },
        {
          kind: "code",
          language: "text",
          value:
            "Table\n\u251c\u2500\u2500 TableCaption\n\u251c\u2500\u2500 TableHeader\n\u2502   \u2514\u2500\u2500 TableRow\n\u2502       \u251c\u2500\u2500 TableHead\n\u2502       \u251c\u2500\u2500 TableHead\n\u2502       \u251c\u2500\u2500 TableHead\n\u2502       \u2514\u2500\u2500 TableHead\n\u251c\u2500\u2500 TableBody\n\u2502   \u251c\u2500\u2500 TableRow\n\u2502   \u2502   \u251c\u2500\u2500 TableCell\n\u2502   \u2502   \u251c\u2500\u2500 TableCell\n\u2502   \u2502   \u251c\u2500\u2500 TableCell\n\u2502   \u2502   \u2514\u2500\u2500 TableCell\n\u2502   \u2514\u2500\u2500 TableRow\n\u2502       \u251c\u2500\u2500 TableCell\n\u2502       \u251c\u2500\u2500 TableCell\n\u2502       \u251c\u2500\u2500 TableCell\n\u2502       \u2514\u2500\u2500 TableCell\n\u2514\u2500\u2500 TableFooter",
        },
      ],
    },
    {
      id: "guide-footer-3",
      title: "Footer",
      blocks: [
        {
          kind: "text",
          value:
            "Use the `<TableFooter />` component to add a footer to the table.",
        },
      ],
    },
    {
      id: "guide-actions-4",
      title: "Actions",
      blocks: [
        {
          kind: "text",
          value:
            "A table showing actions for each row using a `<DropdownMenu />` component.",
        },
      ],
    },
    {
      id: "guide-data-table-5",
      title: "Data Table",
      blocks: [
        {
          kind: "text",
          value:
            "You can use the `<Table />` component to build more complex data tables. Combine it with [@tanstack/react-table](https://tanstack.com/table/latest) to create tables with sorting, filtering and pagination.\n\nSee the [Data Table](/patterns/data-table) documentation for more information.\n\nYou can also see an example of a data table in the [Tasks](/examples/tasks) demo.",
        },
      ],
    },
  ],
  tabs: [
    {
      id: "guide-usage-1",
      title: "Usage",
      blocks: [
        {
          kind: "code",
          language: "tsx",
          value:
            'import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"',
        },
        {
          kind: "code",
          language: "tsx",
          value:
            '<Tabs defaultValue="account" className="w-[400px]">\n  <TabsList>\n    <TabsTrigger value="account">Account</TabsTrigger>\n    <TabsTrigger value="password">Password</TabsTrigger>\n  </TabsList>\n  <TabsContent value="account">Make changes to your account here.</TabsContent>\n  <TabsContent value="password">Change your password here.</TabsContent>\n</Tabs>',
        },
      ],
    },
    {
      id: "guide-composition-2",
      title: "Composition",
      blocks: [
        {
          kind: "text",
          value: "Use the following composition to build `Tabs`:",
        },
        {
          kind: "code",
          language: "text",
          value:
            "Tabs\n\u251c\u2500\u2500 TabsList\n\u2502   \u251c\u2500\u2500 TabsTrigger\n\u2502   \u2514\u2500\u2500 TabsTrigger\n\u251c\u2500\u2500 TabsContent\n\u2514\u2500\u2500 TabsContent",
        },
      ],
    },
    {
      id: "guide-line-3",
      title: "Line",
      blocks: [
        {
          kind: "text",
          value:
            'Use the `variant="line"` prop on `TabsList` for a line style.',
        },
      ],
    },
    {
      id: "guide-vertical-4",
      title: "Vertical",
      blocks: [
        {
          kind: "text",
          value: 'Use `orientation="vertical"` for vertical tabs.',
        },
      ],
    },
  ],
  textarea: [
    {
      id: "guide-usage-1",
      title: "Usage",
      blocks: [
        {
          kind: "code",
          language: "tsx",
          value: 'import { Textarea } from "@/components/ui/textarea"',
        },
        {
          kind: "code",
          language: "tsx",
          value: "<Textarea />",
        },
      ],
    },
    {
      id: "guide-field-2",
      title: "Field",
      blocks: [
        {
          kind: "text",
          value:
            "Use `Field`, `FieldLabel`, and `FieldDescription` to create a textarea with a label and description.",
        },
      ],
    },
    {
      id: "guide-disabled-3",
      title: "Disabled",
      blocks: [
        {
          kind: "text",
          value:
            "Use the `disabled` prop to disable the textarea. To style the disabled state, add the `data-disabled` attribute to the `Field` component.",
        },
      ],
    },
    {
      id: "guide-invalid-4",
      title: "Invalid",
      blocks: [
        {
          kind: "text",
          value:
            "Use the `aria-invalid` prop to mark the textarea as invalid. To style the invalid state, add the `data-invalid` attribute to the `Field` component.",
        },
      ],
    },
    {
      id: "guide-button-5",
      title: "Button",
      blocks: [
        {
          kind: "text",
          value:
            "Pair with `Button` to create a textarea with a submit button.",
        },
      ],
    },
  ],
  toast: [
    {
      id: "guide-usage-1",
      title: "Usage",
      blocks: [
        {
          kind: "code",
          language: "tsx",
          value: 'import { toast } from "@/components/ui/toast"',
        },
        {
          kind: "code",
          language: "tsx",
          value:
            'toast.add({\n  title: "Event created",\n  description: "Sunday, December 3 at 9:00 AM",\n})',
        },
      ],
    },
    {
      id: "guide-types-2",
      title: "Types",
      blocks: [
        {
          kind: "text",
          value:
            "Set the `type` option to render a status icon. The built-in renderer recognizes\n`success`, `info`, `warning`, `error`, and `loading`.",
        },
      ],
    },
    {
      id: "guide-action-3",
      title: "Action",
      blocks: [
        {
          kind: "text",
          value: "Pass button props with `actionProps` to render an action.",
        },
        {
          kind: "code",
          language: "tsx",
          value:
            'const id = toast.add({\n  title: "Event created",\n  actionProps: {\n    children: "Undo",\n    onClick() {\n      toast.close(id)\n    },\n  },\n})',
        },
      ],
    },
    {
      id: "guide-promise-4",
      title: "Promise",
      blocks: [
        {
          kind: "text",
          value:
            "Use `toast.promise` to update one toast as an asynchronous task moves through\nloading, success, and error states.",
        },
      ],
    },
  ],
  "toggle-group": [
    {
      id: "guide-usage-1",
      title: "Usage",
      blocks: [
        {
          kind: "code",
          language: "tsx",
          value:
            'import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"',
        },
        {
          kind: "code",
          language: "tsx",
          value:
            '<ToggleGroup type="single">\n  <ToggleGroupItem value="a">A</ToggleGroupItem>\n  <ToggleGroupItem value="b">B</ToggleGroupItem>\n  <ToggleGroupItem value="c">C</ToggleGroupItem>\n</ToggleGroup>',
        },
      ],
    },
    {
      id: "guide-composition-2",
      title: "Composition",
      blocks: [
        {
          kind: "text",
          value: "Use the following composition to build a `ToggleGroup`:",
        },
        {
          kind: "code",
          language: "text",
          value:
            "ToggleGroup\n\u251c\u2500\u2500 ToggleGroupItem\n\u2514\u2500\u2500 ToggleGroupItem",
        },
      ],
    },
    {
      id: "guide-outline-3",
      title: "Outline",
      blocks: [
        {
          kind: "text",
          value: 'Use `variant="outline"` for an outline style.',
        },
      ],
    },
    {
      id: "guide-size-4",
      title: "Size",
      blocks: [
        {
          kind: "text",
          value: "Use the `size` prop to change the size of the toggle group.",
        },
      ],
    },
    {
      id: "guide-spacing-5",
      title: "Spacing",
      blocks: [
        {
          kind: "text",
          value: "Use `spacing` to add spacing between toggle group items.",
        },
      ],
    },
    {
      id: "guide-vertical-6",
      title: "Vertical",
      blocks: [
        {
          kind: "text",
          value: 'Use `orientation="vertical"` for vertical toggle groups.',
        },
      ],
    },
    {
      id: "guide-custom-7",
      title: "Custom",
      blocks: [
        {
          kind: "text",
          value: "A custom toggle group example.",
        },
      ],
    },
  ],
  toggle: [
    {
      id: "guide-usage-1",
      title: "Usage",
      blocks: [
        {
          kind: "code",
          language: "tsx",
          value: 'import { Toggle } from "@/components/ui/toggle"',
        },
        {
          kind: "code",
          language: "tsx",
          value: "<Toggle>Toggle</Toggle>",
        },
      ],
    },
    {
      id: "guide-outline-2",
      title: "Outline",
      blocks: [
        {
          kind: "text",
          value: 'Use `variant="outline"` for an outline style.',
        },
      ],
    },
    {
      id: "guide-size-3",
      title: "Size",
      blocks: [
        {
          kind: "text",
          value: "Use the `size` prop to change the size of the toggle.",
        },
      ],
    },
  ],
  tooltip: [
    {
      id: "guide-usage-1",
      title: "Usage",
      blocks: [
        {
          kind: "code",
          language: "tsx",
          value:
            'import {\n  Tooltip,\n  TooltipContent,\n  TooltipTrigger,\n} from "@/components/ui/tooltip"',
        },
        {
          kind: "code",
          language: "tsx",
          value:
            "<Tooltip>\n  <TooltipTrigger>Hover</TooltipTrigger>\n  <TooltipContent>\n    <p>Add to library</p>\n  </TooltipContent>\n</Tooltip>",
        },
      ],
    },
    {
      id: "guide-composition-2",
      title: "Composition",
      blocks: [
        {
          kind: "text",
          value: "Use the following composition to build a `Tooltip`:",
        },
        {
          kind: "code",
          language: "text",
          value:
            "Tooltip\n\u251c\u2500\u2500 TooltipTrigger\n\u2514\u2500\u2500 TooltipContent",
        },
      ],
    },
    {
      id: "guide-side-3",
      title: "Side",
      blocks: [
        {
          kind: "text",
          value: "Use the `side` prop to change the position of the tooltip.",
        },
      ],
    },
    {
      id: "guide-disabled-button-4",
      title: "Disabled Button",
      blocks: [
        {
          kind: "text",
          value:
            "Show a tooltip on a disabled button by wrapping it with a span.",
        },
      ],
    },
  ],
  typography: [
    {
      id: "guide-native-typography",
      title: "Native elements and utility classes",
      blocks: [
        {
          kind: "text",
          value:
            "The examples use native headings, paragraphs, blockquotes, lists and tables with semantic utility classes. The Leement Typography helper is optional. Pretendard and the mono font come from the theme.",
        },
      ],
    },
  ],
};
