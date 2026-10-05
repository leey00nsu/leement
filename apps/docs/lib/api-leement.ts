import type { ApiReference } from "./api-reference";

/** Public source signatures; native HTML attributes are forwarded as declared. */
export const leementApiReferences = {
  "brand-action": {
    parts: [
      {
        name: "BrandAction",
        description:
          "Public BrandAction part. Native semantics and composition follow the editable source.",
        props: [
          {
            name: "focusableWhenDisabled",
            type: "boolean | undefined",
            required: false,
            description:
              "focusable When Disabled supplied by the application. See the exact type and editable source.",
          },
          {
            name: "nativeButton",
            type: "boolean | undefined",
            required: false,
            description:
              "native Button supplied by the application. See the exact type and editable source.",
          },
          {
            name: "form",
            type: "string | undefined",
            required: false,
            description:
              "form supplied by the application. See the exact type and editable source.",
          },
          {
            name: "title",
            type: "string | undefined",
            required: false,
            description:
              "Visible heading or native title, according to the declared type.",
          },
          {
            name: "ref",
            type: "React.Ref<HTMLButtonElement> | undefined",
            required: false,
            description: "Ref to the rendered element.",
          },
          {
            name: "key",
            type: "React.Key | null | undefined",
            required: false,
            description:
              "key supplied by the application. See the exact type and editable source.",
          },
          {
            name: "disabled",
            type: "boolean | undefined",
            required: false,
            description: "Disables the control or the documented interaction.",
          },
          {
            name: "formAction",
            type: "string | ((formData: FormData) => void | Promise<void>) | undefined",
            required: false,
            description:
              "form Action supplied by the application. See the exact type and editable source.",
          },
          {
            name: "formEncType",
            type: "string | undefined",
            required: false,
            description:
              "form Enc Type supplied by the application. See the exact type and editable source.",
          },
          {
            name: "formMethod",
            type: "string | undefined",
            required: false,
            description:
              "form Method supplied by the application. See the exact type and editable source.",
          },
          {
            name: "formNoValidate",
            type: "boolean | undefined",
            required: false,
            description:
              "form No Validate supplied by the application. See the exact type and editable source.",
          },
          {
            name: "formTarget",
            type: "string | undefined",
            required: false,
            description:
              "form Target supplied by the application. See the exact type and editable source.",
          },
          {
            name: "name",
            type: "string | undefined",
            required: false,
            description: "Native form field name.",
          },
          {
            name: "type",
            type: '"button" | "submit" | "reset" | undefined',
            required: false,
            description:
              "type supplied by the application. See the exact type and editable source.",
          },
          {
            name: "value",
            type: "string | number | readonly string[] | undefined",
            required: false,
            description:
              "Controlled value. Update it through the matching change callback.",
          },
          {
            name: "id",
            type: "string | undefined",
            required: false,
            description:
              "Stable element ID for label and description associations.",
          },
          {
            name: "role",
            type: "React.AriaRole | undefined",
            required: false,
            description:
              "role supplied by the application. See the exact type and editable source.",
          },
          {
            name: "aria-describedby",
            type: "string | undefined",
            required: false,
            description: "IDs of supporting descriptions.",
          },
          {
            name: "aria-invalid",
            type: 'boolean | "true" | "false" | "grammar" | "spelling" | undefined',
            required: false,
            description: "Marks invalid input alongside readable feedback.",
          },
          {
            name: "aria-label",
            type: "string | undefined",
            required: false,
            description:
              "Accessible name for an icon-only or otherwise unnamed control.",
          },
          {
            name: "children",
            type: "React.ReactNode",
            required: false,
            description: "Content composed inside this part.",
          },
          {
            name: "onChange",
            type: "((event: BaseUIEvent<React.ChangeEvent<HTMLButtonElement, Element>>) => void) | undefined",
            required: false,
            description: "Native value change handler.",
          },
          {
            name: "onClick",
            type: "((event: BaseUIEvent<React.MouseEvent<HTMLButtonElement, MouseEvent>>) => void) | undefined",
            required: false,
            description:
              "Native activation handler; respects the component disabled behavior.",
          },
          {
            name: "className",
            type: "string | ((state: ButtonState) => string | undefined) | undefined",
            required: false,
            description: "Additional classes on the rendered element.",
          },
          {
            name: "render",
            type: "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, ButtonState> | undefined",
            required: false,
            description:
              "render supplied by the application. See the exact type and editable source.",
          },
          {
            name: "variant",
            type: '"default" | "link" | "primary" | "secondary" | "outline" | "ghost" | "destructive" | null | undefined',
            required: false,
            description: "Visual variant declared by this part.",
          },
          {
            name: "size",
            type: '"default" | "xs" | "sm" | "lg" | "icon" | "icon-sm" | "icon-xs" | "icon-lg" | null | undefined',
            required: false,
            description: "Size declared by this part.",
          },
          {
            name: "asChild",
            type: "boolean | undefined",
            required: false,
            description:
              "as Child supplied by the application. See the exact type and editable source.",
          },
          {
            name: "loading",
            type: "boolean | undefined",
            required: false,
            description:
              "Displays the loading state and the documented busy/disabled behavior.",
          },
          {
            name: "animated",
            type: "boolean | undefined",
            required: false,
            default: "true",
            description: "Enables the optional decorative Motion effect.",
          },
          {
            name: "paused",
            type: "boolean | undefined",
            required: false,
            default: "false",
            description: "Pauses decorative Motion playback.",
          },
        ],
      },
    ],
    notes: [
      "Native Button behavior, focus and aria-busy are preserved. Loading/disabled, reduced motion, hidden documents and offscreen elements pause animation.",
      "BrandActionProps extends ButtonProps with animated and paused. Motion animates consumer brand gradient roles and --lm-motion-cycle-brand-surface. The consumer owns callbacks, wording and generation logic.",
      "Native HTML attributes and event handlers are forwarded where declared by the part type. Your application owns data, destinations, persistence and localization.",
    ],
  },
  "rotating-content": {
    parts: [
      {
        name: "RotatingContent",
        description:
          "Public RotatingContent part. Native semantics and composition follow the editable source.",
        props: [
          {
            name: "ref",
            type: "React.Ref<HTMLSpanElement> | undefined",
            required: false,
            description: "Ref to the rendered element.",
          },
          {
            name: "key",
            type: "React.Key | null | undefined",
            required: false,
            description:
              "key supplied by the application. See the exact type and editable source.",
          },
          {
            name: "defaultChecked",
            type: "boolean | undefined",
            required: false,
            description: "Initial uncontrolled checked state.",
          },
          {
            name: "defaultValue",
            type: "string | number | readonly string[] | undefined",
            required: false,
            description: "Initial uncontrolled value.",
          },
          {
            name: "className",
            type: "string | undefined",
            required: false,
            description: "Additional classes on the rendered element.",
          },
          {
            name: "id",
            type: "string | undefined",
            required: false,
            description:
              "Stable element ID for label and description associations.",
          },
          {
            name: "title",
            type: "string | undefined",
            required: false,
            description:
              "Visible heading or native title, according to the declared type.",
          },
          {
            name: "role",
            type: "React.AriaRole | undefined",
            required: false,
            description:
              "role supplied by the application. See the exact type and editable source.",
          },
          {
            name: "aria-describedby",
            type: "string | undefined",
            required: false,
            description: "IDs of supporting descriptions.",
          },
          {
            name: "aria-invalid",
            type: 'boolean | "true" | "false" | "grammar" | "spelling" | undefined',
            required: false,
            description: "Marks invalid input alongside readable feedback.",
          },
          {
            name: "aria-label",
            type: "string | undefined",
            required: false,
            description:
              "Accessible name for an icon-only or otherwise unnamed control.",
          },
          {
            name: "children",
            type: "ReactNode",
            required: false,
            description: "Content composed inside this part.",
          },
          {
            name: "onChange",
            type: "React.ChangeEventHandler<HTMLSpanElement, Element> | undefined",
            required: false,
            description: "Native value change handler.",
          },
          {
            name: "onClick",
            type: "React.MouseEventHandler<HTMLSpanElement> | undefined",
            required: false,
            description:
              "Native activation handler; respects the component disabled behavior.",
          },
          {
            name: "items",
            type: "ReactNode[]",
            required: true,
            description:
              "items supplied by the application. See the exact type and editable source.",
          },
          {
            name: "label",
            type: "string",
            required: true,
            description:
              "Visible or accessible name. Provide a meaningful application label.",
          },
          {
            name: "interval",
            type: "number | undefined",
            required: false,
            description:
              "interval supplied by the application. See the exact type and editable source.",
          },
          {
            name: "paused",
            type: "boolean | undefined",
            required: false,
            description: "Pauses decorative Motion playback.",
          },
          {
            name: "defaultPaused",
            type: "boolean | undefined",
            required: false,
            default: "false",
            description:
              "default Paused supplied by the application. See the exact type and editable source.",
          },
          {
            name: "onPausedChange",
            type: "((paused: boolean) => void) | undefined",
            required: false,
            description:
              "Receives paused change updates using the exact callback signature below. Application data stays app-owned.",
          },
          {
            name: "controls",
            type: "boolean | undefined",
            required: false,
            default: "true",
            description:
              "controls supplied by the application. See the exact type and editable source.",
          },
        ],
      },
    ],
    notes: [
      "A fixed group label is read once. Rotating layers are decorative and inert; no recurring live announcement. Named pause is keyboard reachable. Reduced motion starts static.",
      "Native span props, including object or callback ref to the root without disabling motion. RotatingContent accepts items: ReactNode[], label, interval in ms, paused/defaultPaused and onPausedChange. Motion handles the visual transition; theme cycle-rotate is the default. Nonpositive intervals are static. controls=false requires controlled paused state and a caller-owned, keyboard reachable pause control; place that control outside decorative aria-hidden headings. Cleanup stops timers; consumers changing JS timing variables during runtime may dispatch leement:motion-change to refresh immediately.",
      "Native HTML attributes and event handlers are forwarded where declared by the part type. Your application owns data, destinations, persistence and localization.",
    ],
  },
  "media-reveal": {
    parts: [
      {
        name: "MediaReveal",
        description:
          "Public MediaReveal part. Native semantics and composition follow the editable source.",
        props: [
          {
            name: "ref",
            type: "React.Ref<HTMLDivElement> | undefined",
            required: false,
            description: "Ref to the rendered element.",
          },
          {
            name: "key",
            type: "React.Key | null | undefined",
            required: false,
            description:
              "key supplied by the application. See the exact type and editable source.",
          },
          {
            name: "defaultChecked",
            type: "boolean | undefined",
            required: false,
            description: "Initial uncontrolled checked state.",
          },
          {
            name: "defaultValue",
            type: "string | number | readonly string[] | undefined",
            required: false,
            description: "Initial uncontrolled value.",
          },
          {
            name: "className",
            type: "string | undefined",
            required: false,
            description: "Additional classes on the rendered element.",
          },
          {
            name: "id",
            type: "string | undefined",
            required: false,
            description:
              "Stable element ID for label and description associations.",
          },
          {
            name: "title",
            type: "string | undefined",
            required: false,
            description:
              "Visible heading or native title, according to the declared type.",
          },
          {
            name: "role",
            type: "React.AriaRole | undefined",
            required: false,
            description:
              "role supplied by the application. See the exact type and editable source.",
          },
          {
            name: "aria-describedby",
            type: "string | undefined",
            required: false,
            description: "IDs of supporting descriptions.",
          },
          {
            name: "aria-invalid",
            type: 'boolean | "true" | "false" | "grammar" | "spelling" | undefined',
            required: false,
            description: "Marks invalid input alongside readable feedback.",
          },
          {
            name: "aria-label",
            type: "string | undefined",
            required: false,
            description:
              "Accessible name for an icon-only or otherwise unnamed control.",
          },
          {
            name: "children",
            type: "ReactNode",
            required: false,
            description: "Content composed inside this part.",
          },
          {
            name: "onChange",
            type: "React.ChangeEventHandler<HTMLDivElement, Element> | undefined",
            required: false,
            description: "Native value change handler.",
          },
          {
            name: "onClick",
            type: "React.MouseEventHandler<HTMLDivElement> | undefined",
            required: false,
            description:
              "Native activation handler; respects the component disabled behavior.",
          },
          {
            name: "status",
            type: '"loading" | "ready" | "error"',
            required: true,
            description:
              "status supplied by the application. See the exact type and editable source.",
          },
          {
            name: "label",
            type: "string | undefined",
            required: false,
            default: '"Media preview"',
            description:
              "Visible or accessible name. Provide a meaningful application label.",
          },
          {
            name: "loading",
            type: "ReactNode",
            required: false,
            description:
              "Displays the loading state and the documented busy/disabled behavior.",
          },
          {
            name: "error",
            type: "ReactNode",
            required: false,
            description:
              "error supplied by the application. See the exact type and editable source.",
          },
        ],
      },
    ],
    notes: [
      "Visible media retains its alt text. Hidden layers are inert and aria-hidden; loading has a named status. Supply an actionable error slot where recovery is possible.",
      "MediaReveal accepts native div props, status, label, loading/error ReactNode slots and children. Motion handles the media fade; default loader is Skeleton. The app supplies readiness and retry callbacks; --lm-motion-duration-media controls the fade.",
      "Native HTML attributes and event handlers are forwarded where declared by the part type. Your application owns data, destinations, persistence and localization.",
    ],
  },
  "text-reveal": {
    parts: [
      {
        name: "TextReveal",
        description:
          "Public TextReveal part. Native semantics and composition follow the editable source.",
        props: [
          {
            name: "ref",
            type: "React.Ref<HTMLSpanElement> | undefined",
            required: false,
            description: "Ref to the rendered element.",
          },
          {
            name: "key",
            type: "React.Key | null | undefined",
            required: false,
            description:
              "key supplied by the application. See the exact type and editable source.",
          },
          {
            name: "defaultChecked",
            type: "boolean | undefined",
            required: false,
            description: "Initial uncontrolled checked state.",
          },
          {
            name: "defaultValue",
            type: "string | number | readonly string[] | undefined",
            required: false,
            description: "Initial uncontrolled value.",
          },
          {
            name: "className",
            type: "string | undefined",
            required: false,
            description: "Additional classes on the rendered element.",
          },
          {
            name: "id",
            type: "string | undefined",
            required: false,
            description:
              "Stable element ID for label and description associations.",
          },
          {
            name: "title",
            type: "string | undefined",
            required: false,
            description:
              "Visible heading or native title, according to the declared type.",
          },
          {
            name: "role",
            type: "React.AriaRole | undefined",
            required: false,
            description:
              "role supplied by the application. See the exact type and editable source.",
          },
          {
            name: "aria-describedby",
            type: "string | undefined",
            required: false,
            description: "IDs of supporting descriptions.",
          },
          {
            name: "aria-invalid",
            type: 'boolean | "true" | "false" | "grammar" | "spelling" | undefined',
            required: false,
            description: "Marks invalid input alongside readable feedback.",
          },
          {
            name: "aria-label",
            type: "string | undefined",
            required: false,
            description:
              "Accessible name for an icon-only or otherwise unnamed control.",
          },
          {
            name: "children",
            type: "React.ReactNode",
            required: false,
            description: "Content composed inside this part.",
          },
          {
            name: "onChange",
            type: "React.ChangeEventHandler<HTMLSpanElement, Element> | undefined",
            required: false,
            description: "Native value change handler.",
          },
          {
            name: "onClick",
            type: "React.MouseEventHandler<HTMLSpanElement> | undefined",
            required: false,
            description:
              "Native activation handler; respects the component disabled behavior.",
          },
          {
            name: "duration",
            type: "number | undefined",
            required: false,
            description:
              "Explicit Motion duration override; reduced motion takes precedence.",
          },
          {
            name: "stagger",
            type: "number | undefined",
            required: false,
            description:
              "stagger supplied by the application. See the exact type and editable source.",
          },
        ],
      },
      {
        name: "TextReveal.Item",
        description:
          "Public TextReveal.Item part. Native semantics and composition follow the editable source.",
        props: [
          {
            name: "ref",
            type: "React.Ref<HTMLSpanElement> | undefined",
            required: false,
            description: "Ref to the rendered element.",
          },
          {
            name: "key",
            type: "React.Key | null | undefined",
            required: false,
            description:
              "key supplied by the application. See the exact type and editable source.",
          },
          {
            name: "defaultChecked",
            type: "boolean | undefined",
            required: false,
            description: "Initial uncontrolled checked state.",
          },
          {
            name: "defaultValue",
            type: "string | number | readonly string[] | undefined",
            required: false,
            description: "Initial uncontrolled value.",
          },
          {
            name: "className",
            type: "string | undefined",
            required: false,
            description: "Additional classes on the rendered element.",
          },
          {
            name: "id",
            type: "string | undefined",
            required: false,
            description:
              "Stable element ID for label and description associations.",
          },
          {
            name: "title",
            type: "string | undefined",
            required: false,
            description:
              "Visible heading or native title, according to the declared type.",
          },
          {
            name: "role",
            type: "React.AriaRole | undefined",
            required: false,
            description:
              "role supplied by the application. See the exact type and editable source.",
          },
          {
            name: "aria-describedby",
            type: "string | undefined",
            required: false,
            description: "IDs of supporting descriptions.",
          },
          {
            name: "aria-invalid",
            type: 'boolean | "true" | "false" | "grammar" | "spelling" | undefined',
            required: false,
            description: "Marks invalid input alongside readable feedback.",
          },
          {
            name: "aria-label",
            type: "string | undefined",
            required: false,
            description:
              "Accessible name for an icon-only or otherwise unnamed control.",
          },
          {
            name: "children",
            type: "React.ReactNode",
            required: false,
            description: "Content composed inside this part.",
          },
          {
            name: "onChange",
            type: "React.ChangeEventHandler<HTMLSpanElement, Element> | undefined",
            required: false,
            description: "Native value change handler.",
          },
          {
            name: "onClick",
            type: "React.MouseEventHandler<HTMLSpanElement> | undefined",
            required: false,
            description:
              "Native activation handler; respects the component disabled behavior.",
          },
          {
            name: "index",
            type: "number | undefined",
            required: false,
            description:
              "index supplied by the application. See the exact type and editable source.",
          },
        ],
      },
      {
        name: "TextRevealItem",
        description:
          "Public TextRevealItem part. Native semantics and composition follow the editable source.",
        props: [
          {
            name: "ref",
            type: "React.Ref<HTMLSpanElement> | undefined",
            required: false,
            description: "Ref to the rendered element.",
          },
          {
            name: "key",
            type: "React.Key | null | undefined",
            required: false,
            description:
              "key supplied by the application. See the exact type and editable source.",
          },
          {
            name: "defaultChecked",
            type: "boolean | undefined",
            required: false,
            description: "Initial uncontrolled checked state.",
          },
          {
            name: "defaultValue",
            type: "string | number | readonly string[] | undefined",
            required: false,
            description: "Initial uncontrolled value.",
          },
          {
            name: "className",
            type: "string | undefined",
            required: false,
            description: "Additional classes on the rendered element.",
          },
          {
            name: "id",
            type: "string | undefined",
            required: false,
            description:
              "Stable element ID for label and description associations.",
          },
          {
            name: "title",
            type: "string | undefined",
            required: false,
            description:
              "Visible heading or native title, according to the declared type.",
          },
          {
            name: "role",
            type: "React.AriaRole | undefined",
            required: false,
            description:
              "role supplied by the application. See the exact type and editable source.",
          },
          {
            name: "aria-describedby",
            type: "string | undefined",
            required: false,
            description: "IDs of supporting descriptions.",
          },
          {
            name: "aria-invalid",
            type: 'boolean | "true" | "false" | "grammar" | "spelling" | undefined',
            required: false,
            description: "Marks invalid input alongside readable feedback.",
          },
          {
            name: "aria-label",
            type: "string | undefined",
            required: false,
            description:
              "Accessible name for an icon-only or otherwise unnamed control.",
          },
          {
            name: "children",
            type: "React.ReactNode",
            required: false,
            description: "Content composed inside this part.",
          },
          {
            name: "onChange",
            type: "React.ChangeEventHandler<HTMLSpanElement, Element> | undefined",
            required: false,
            description: "Native value change handler.",
          },
          {
            name: "onClick",
            type: "React.MouseEventHandler<HTMLSpanElement> | undefined",
            required: false,
            description:
              "Native activation handler; respects the component disabled behavior.",
          },
          {
            name: "index",
            type: "number | undefined",
            required: false,
            default: "0",
            description:
              "index supplied by the application. See the exact type and editable source.",
          },
        ],
      },
    ],
    notes: [
      "Original text is read once. Content is visible before hydration and without JavaScript; reduced motion removes blur and movement.",
      "TextReveal accepts span props (including object or callback ref without disabling entrance), duration and stagger in milliseconds. Compose Item children and literal spaces/line breaks; Item index can override sequence order. Theme variables supply defaults; replay by remounting with a new key.",
      "Native HTML attributes and event handlers are forwarded where declared by the part type. Your application owns data, destinations, persistence and localization.",
    ],
  },
  "audio-player": {
    parts: [
      {
        name: "AudioPlayer",
        description:
          "Public AudioPlayer part. Native semantics and composition follow the editable source.",
        props: [
          {
            name: "className",
            type: "string | undefined",
            required: false,
            description: "Additional classes on the rendered element.",
          },
          {
            name: "defaultValue",
            type: "string | number | readonly string[] | undefined",
            required: false,
            description: "Initial uncontrolled value.",
          },
          {
            name: "defaultChecked",
            type: "boolean | undefined",
            required: false,
            description: "Initial uncontrolled checked state.",
          },
          {
            name: "title",
            type: "string",
            required: true,
            description:
              "Visible heading or native title, according to the declared type.",
          },
          {
            name: "ref",
            type: "React.Ref<HTMLDivElement> | undefined",
            required: false,
            description: "Ref to the rendered element.",
          },
          {
            name: "key",
            type: "React.Key | null | undefined",
            required: false,
            description:
              "key supplied by the application. See the exact type and editable source.",
          },
          {
            name: "id",
            type: "string | undefined",
            required: false,
            description:
              "Stable element ID for label and description associations.",
          },
          {
            name: "role",
            type: "React.AriaRole | undefined",
            required: false,
            description:
              "role supplied by the application. See the exact type and editable source.",
          },
          {
            name: "aria-describedby",
            type: "string | undefined",
            required: false,
            description: "IDs of supporting descriptions.",
          },
          {
            name: "aria-invalid",
            type: 'boolean | "true" | "false" | "grammar" | "spelling" | undefined',
            required: false,
            description: "Marks invalid input alongside readable feedback.",
          },
          {
            name: "aria-label",
            type: "string | undefined",
            required: false,
            description:
              "Accessible name for an icon-only or otherwise unnamed control.",
          },
          {
            name: "onChange",
            type: "React.ChangeEventHandler<HTMLDivElement, Element> | undefined",
            required: false,
            description: "Native value change handler.",
          },
          {
            name: "onClick",
            type: "React.MouseEventHandler<HTMLDivElement> | undefined",
            required: false,
            description:
              "Native activation handler; respects the component disabled behavior.",
          },
          {
            name: "src",
            type: "string",
            required: true,
            description: "Application-owned media or image URL.",
          },
          {
            name: "peaks",
            type: "(Float32Array<ArrayBufferLike> | number[])[] | undefined",
            required: false,
            description:
              "peaks supplied by the application. See the exact type and editable source.",
          },
          {
            name: "duration",
            type: "number | undefined",
            required: false,
            description:
              "Explicit Motion duration override; reduced motion takes precedence.",
          },
          {
            name: "brand",
            type: "boolean | undefined",
            required: false,
            description:
              "brand supplied by the application. See the exact type and editable source.",
          },
        ],
      },
    ],
    notes: [
      "Waveform supports ArrowLeft/Right (5 seconds), Home/End and Space. Controls have names, focus and disabled states; popovers retain Escape/focus. Static HTML and decode failures retain native controls. Supply a transcript for speech. Reduced motion stops decoration, not user-started media.",
      "AudioPlayer accepts src, title, optional peaks: Array<Float32Array | number[]>, duration (seconds, with peaks), brand (default false), and native root div props/ref. Source changes reset state and clean up the renderer. For long audio provide precomputed peaks and duration; URLs must allow waveform fetching. Native audio can remain usable if decoding or CORS prevents waveform rendering. A 15-second waveform preparation timeout exposes the native fallback. Runtime stylesheet changes may dispatch leement:theme-change; scoped ancestor class/style changes are observed automatically. Labels are English in the installed source; consumers can localize their owned controls.",
      "Native HTML attributes and event handlers are forwarded where declared by the part type. Your application owns data, destinations, persistence and localization.",
    ],
  },
  "brand-logo": {
    parts: [
      {
        name: "BrandLogo",
        description:
          "Public BrandLogo part. Native semantics and composition follow the editable source.",
        props: [
          {
            name: "className",
            type: "string | undefined",
            required: false,
            description: "Additional classes on the rendered element.",
          },
          {
            name: "defaultValue",
            type: "string | number | readonly string[] | undefined",
            required: false,
            description: "Initial uncontrolled value.",
          },
          {
            name: "defaultChecked",
            type: "boolean | undefined",
            required: false,
            description: "Initial uncontrolled checked state.",
          },
          {
            name: "title",
            type: "string | undefined",
            required: false,
            description:
              "Visible heading or native title, according to the declared type.",
          },
          {
            name: "ref",
            type: "React.Ref<HTMLSpanElement> | undefined",
            required: false,
            description: "Ref to the rendered element.",
          },
          {
            name: "key",
            type: "React.Key | null | undefined",
            required: false,
            description:
              "key supplied by the application. See the exact type and editable source.",
          },
          {
            name: "id",
            type: "string | undefined",
            required: false,
            description:
              "Stable element ID for label and description associations.",
          },
          {
            name: "role",
            type: "React.AriaRole | undefined",
            required: false,
            description:
              "role supplied by the application. See the exact type and editable source.",
          },
          {
            name: "aria-describedby",
            type: "string | undefined",
            required: false,
            description: "IDs of supporting descriptions.",
          },
          {
            name: "aria-invalid",
            type: 'boolean | "true" | "false" | "grammar" | "spelling" | undefined',
            required: false,
            description: "Marks invalid input alongside readable feedback.",
          },
          {
            name: "aria-label",
            type: "string | undefined",
            required: false,
            description:
              "Accessible name for an icon-only or otherwise unnamed control.",
          },
          {
            name: "onChange",
            type: "React.ChangeEventHandler<HTMLSpanElement, Element> | undefined",
            required: false,
            description: "Native value change handler.",
          },
          {
            name: "onClick",
            type: "React.MouseEventHandler<HTMLSpanElement> | undefined",
            required: false,
            description:
              "Native activation handler; respects the component disabled behavior.",
          },
          {
            name: "name",
            type: "string",
            required: true,
            description: "Native form field name.",
          },
          {
            name: "mark",
            type: "React.ReactNode",
            required: true,
            description:
              "mark supplied by the application. See the exact type and editable source.",
          },
          {
            name: "variant",
            type: '"icon" | "full" | undefined',
            required: false,
            default: '"full"',
            description: "Visual variant declared by this part.",
          },
          {
            name: "size",
            type: '"sm" | "lg" | "md" | undefined',
            required: false,
            default: '"md"',
            description: "Size declared by this part.",
          },
          {
            name: "markClassName",
            type: "string | undefined",
            required: false,
            description:
              "mark Class Name supplied by the application. See the exact type and editable source.",
          },
          {
            name: "textClassName",
            type: "string | undefined",
            required: false,
            description:
              "text Class Name supplied by the application. See the exact type and editable source.",
          },
        ],
      },
    ],
    notes: [
      "The full logo reads its visible name once; its mark is decorative. An icon-only logo has an image role and the supplied name. Keep the outer link focus-visible and provide a nonempty product name.",
      "BrandLogoProps: name: string, mark: ReactNode, variant?, size?, markClassName?, textClassName? and native span attributes. Default font is Paperlogy 700 through --lm-typography-family-brand. The theme bundles the font; override the family after loading your own font. Copy the Leement SVG into your public folder only if you use that example asset; consumer identity remains yours.",
      "Native HTML attributes and event handlers are forwarded where declared by the part type. Your application owns data, destinations, persistence and localization.",
    ],
  },
  switch: {
    parts: [
      {
        name: "Switch",
        description:
          "Public Switch part. Native semantics and composition follow the editable source.",
        props: [
          {
            name: "id",
            type: "string | undefined",
            required: false,
            description:
              "Stable element ID for label and description associations.",
          },
          {
            name: "checked",
            type: "boolean | undefined",
            required: false,
            description: "Controlled checked state.",
          },
          {
            name: "defaultChecked",
            type: "boolean | undefined",
            required: false,
            description: "Initial uncontrolled checked state.",
          },
          {
            name: "disabled",
            type: "boolean | undefined",
            required: false,
            description: "Disables the control or the documented interaction.",
          },
          {
            name: "inputRef",
            type: "React.Ref<HTMLInputElement> | undefined",
            required: false,
            description:
              "input Ref supplied by the application. See the exact type and editable source.",
          },
          {
            name: "name",
            type: "string | undefined",
            required: false,
            description: "Native form field name.",
          },
          {
            name: "form",
            type: "string | undefined",
            required: false,
            description:
              "form supplied by the application. See the exact type and editable source.",
          },
          {
            name: "onCheckedChange",
            type: "((checked: boolean, eventDetails: SwitchPrimitive.Root.ChangeEventDetails) => void) | undefined",
            required: false,
            description:
              "Receives checked change updates using the exact callback signature below. Application data stays app-owned.",
          },
          {
            name: "readOnly",
            type: "boolean | undefined",
            required: false,
            description:
              "read Only supplied by the application. See the exact type and editable source.",
          },
          {
            name: "required",
            type: "boolean | undefined",
            required: false,
            description: "Marks the native form value as required.",
          },
          {
            name: "value",
            type: "string | undefined",
            required: false,
            description:
              "Native form value submitted when checked. Control the switch through checked/onCheckedChange.",
          },
          {
            name: "uncheckedValue",
            type: "string | undefined",
            required: false,
            description:
              "Optional native form value submitted when unchecked.",
          },
          {
            name: "nativeButton",
            type: "boolean | undefined",
            required: false,
            description:
              "native Button supplied by the application. See the exact type and editable source.",
          },
          {
            name: "className",
            type: "string | ((state: SwitchRootState) => string | undefined) | undefined",
            required: false,
            description: "Additional classes on the rendered element.",
          },
          {
            name: "title",
            type: "string | undefined",
            required: false,
            description:
              "Visible heading or native title, according to the declared type.",
          },
          {
            name: "ref",
            type: "React.Ref<HTMLSpanElement> | undefined",
            required: false,
            description: "Ref to the rendered element.",
          },
          {
            name: "key",
            type: "React.Key | null | undefined",
            required: false,
            description:
              "key supplied by the application. See the exact type and editable source.",
          },
          {
            name: "role",
            type: "React.AriaRole | undefined",
            required: false,
            description:
              "role supplied by the application. See the exact type and editable source.",
          },
          {
            name: "aria-describedby",
            type: "string | undefined",
            required: false,
            description: "IDs of supporting descriptions.",
          },
          {
            name: "aria-invalid",
            type: 'boolean | "true" | "false" | "grammar" | "spelling" | undefined',
            required: false,
            description: "Marks invalid input alongside readable feedback.",
          },
          {
            name: "aria-label",
            type: "string | undefined",
            required: false,
            description:
              "Accessible name for an icon-only or otherwise unnamed control.",
          },
          {
            name: "children",
            type: "React.ReactNode",
            required: false,
            description: "Content composed inside this part.",
          },
          {
            name: "onClick",
            type: "((event: BaseUIEvent<React.MouseEvent<HTMLSpanElement, MouseEvent>>) => void) | undefined",
            required: false,
            description:
              "Native activation handler; respects the component disabled behavior.",
          },
          {
            name: "render",
            type: "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, SwitchRootState> | undefined",
            required: false,
            description:
              "render supplied by the application. See the exact type and editable source.",
          },
          {
            name: "size",
            type: '"default" | "sm" | undefined',
            required: false,
            default: '"default"',
            description: "Size declared by this part.",
          },
        ],
      },
    ],
    notes: [
      "Base UI supplies switch role and keyboard behavior. Give every switch a visible label.",
      "Base UI Switch.Root props plus size.",
      "Native HTML attributes and event handlers are forwarded where declared by the part type. Your application owns data, destinations, persistence and localization.",
    ],
    links: [
      {
        label: "Base UI switch API",
        href: "https://base-ui.com/react/components/switch",
      },
    ],
  },
  "brand-gradient-text": {
    parts: [
      {
        name: "BrandGradientText",
        description:
          "Public BrandGradientText part. Native semantics and composition follow the editable source.",
        props: [
          {
            name: "ref",
            type: "React.Ref<HTMLSpanElement> | undefined",
            required: false,
            description: "Ref to the rendered element.",
          },
          {
            name: "key",
            type: "React.Key | null | undefined",
            required: false,
            description:
              "key supplied by the application. See the exact type and editable source.",
          },
          {
            name: "defaultChecked",
            type: "boolean | undefined",
            required: false,
            description: "Initial uncontrolled checked state.",
          },
          {
            name: "defaultValue",
            type: "string | number | readonly string[] | undefined",
            required: false,
            description: "Initial uncontrolled value.",
          },
          {
            name: "className",
            type: "string | undefined",
            required: false,
            description: "Additional classes on the rendered element.",
          },
          {
            name: "id",
            type: "string | undefined",
            required: false,
            description:
              "Stable element ID for label and description associations.",
          },
          {
            name: "title",
            type: "string | undefined",
            required: false,
            description:
              "Visible heading or native title, according to the declared type.",
          },
          {
            name: "role",
            type: "React.AriaRole | undefined",
            required: false,
            description:
              "role supplied by the application. See the exact type and editable source.",
          },
          {
            name: "aria-describedby",
            type: "string | undefined",
            required: false,
            description: "IDs of supporting descriptions.",
          },
          {
            name: "aria-invalid",
            type: 'boolean | "true" | "false" | "grammar" | "spelling" | undefined',
            required: false,
            description: "Marks invalid input alongside readable feedback.",
          },
          {
            name: "aria-label",
            type: "string | undefined",
            required: false,
            description:
              "Accessible name for an icon-only or otherwise unnamed control.",
          },
          {
            name: "children",
            type: "React.ReactNode",
            required: false,
            description: "Content composed inside this part.",
          },
          {
            name: "onChange",
            type: "React.ChangeEventHandler<HTMLSpanElement, Element> | undefined",
            required: false,
            description: "Native value change handler.",
          },
          {
            name: "onClick",
            type: "React.MouseEventHandler<HTMLSpanElement> | undefined",
            required: false,
            description:
              "Native activation handler; respects the component disabled behavior.",
          },
          {
            name: "animated",
            type: "boolean | undefined",
            required: false,
            default: "true",
            description: "Enables the optional decorative Motion effect.",
          },
          {
            name: "paused",
            type: "boolean | undefined",
            required: false,
            default: "false",
            description: "Pauses decorative Motion playback.",
          },
        ],
      },
    ],
    notes: [
      "Text remains real selectable content. Repeating animation stops for reduced motion; check contrast over the surface.",
      "Native span props plus animated and paused booleans. Motion repetition stops offscreen, when the document is hidden and under reduced motion.",
      "Native HTML attributes and event handlers are forwarded where declared by the part type. Your application owns data, destinations, persistence and localization.",
    ],
  },
  "reveal-content": {
    parts: [
      {
        name: "RevealContent",
        description:
          "Public RevealContent part. Native semantics and composition follow the editable source.",
        props: [
          {
            name: "className",
            type: "string | undefined",
            required: false,
            description: "Additional classes on the rendered element.",
          },
          {
            name: "defaultValue",
            type: "string | number | readonly string[] | undefined",
            required: false,
            description: "Initial uncontrolled value.",
          },
          {
            name: "defaultChecked",
            type: "boolean | undefined",
            required: false,
            description: "Initial uncontrolled checked state.",
          },
          {
            name: "title",
            type: "string | undefined",
            required: false,
            description:
              "Visible heading or native title, according to the declared type.",
          },
          {
            name: "ref",
            type: "React.Ref<HTMLDivElement> | undefined",
            required: false,
            description: "Ref to the rendered element.",
          },
          {
            name: "key",
            type: "React.Key | null | undefined",
            required: false,
            description:
              "key supplied by the application. See the exact type and editable source.",
          },
          {
            name: "id",
            type: "string | undefined",
            required: false,
            description:
              "Stable element ID for label and description associations.",
          },
          {
            name: "role",
            type: "React.AriaRole | undefined",
            required: false,
            description:
              "role supplied by the application. See the exact type and editable source.",
          },
          {
            name: "aria-describedby",
            type: "string | undefined",
            required: false,
            description: "IDs of supporting descriptions.",
          },
          {
            name: "aria-invalid",
            type: 'boolean | "true" | "false" | "grammar" | "spelling" | undefined',
            required: false,
            description: "Marks invalid input alongside readable feedback.",
          },
          {
            name: "aria-label",
            type: "string | undefined",
            required: false,
            description:
              "Accessible name for an icon-only or otherwise unnamed control.",
          },
          {
            name: "onChange",
            type: "React.ChangeEventHandler<HTMLDivElement, Element> | undefined",
            required: false,
            description: "Native value change handler.",
          },
          {
            name: "onClick",
            type: "React.MouseEventHandler<HTMLDivElement> | undefined",
            required: false,
            description:
              "Native activation handler; respects the component disabled behavior.",
          },
          {
            name: "children",
            type: "React.ReactNode | MotionValue<number> | MotionValue<string>",
            required: false,
            description: "Content composed inside this part.",
          },
          {
            name: "propagate",
            type: "PropagateOptions | undefined",
            required: false,
            description:
              "propagate supplied by the application. See the exact type and editable source.",
          },
          {
            name: "initial",
            type: "boolean | TargetAndTransition | VariantLabels | undefined",
            required: false,
            description:
              "initial supplied by the application. See the exact type and editable source.",
          },
          {
            name: "animate",
            type: "boolean | TargetAndTransition | VariantLabels | LegacyAnimationControls | undefined",
            required: false,
            description:
              "animate supplied by the application. See the exact type and editable source.",
          },
          {
            name: "exit",
            type: "TargetAndTransition | VariantLabels | undefined",
            required: false,
            description:
              "exit supplied by the application. See the exact type and editable source.",
          },
          {
            name: "variants",
            type: "Variants | undefined",
            required: false,
            description:
              "variants supplied by the application. See the exact type and editable source.",
          },
          {
            name: "transition",
            type: "Transition<any> | undefined",
            required: false,
            description:
              "transition supplied by the application. See the exact type and editable source.",
          },
          {
            name: "onUpdate",
            type: "((latest: ResolvedValues) => void) | undefined",
            required: false,
            description:
              "Receives update updates using the exact callback signature below. Application data stays app-owned.",
          },
          {
            name: "onAnimationComplete",
            type: "((definition: AnimationDefinition) => void) | undefined",
            required: false,
            description:
              "Receives animation complete updates using the exact callback signature below. Application data stays app-owned.",
          },
          {
            name: "onBeforeLayoutMeasure",
            type: "((box: Box) => void) | undefined",
            required: false,
            description:
              "Receives before layout measure updates using the exact callback signature below. Application data stays app-owned.",
          },
          {
            name: "onLayoutMeasure",
            type: "((box: Box, prevBox: Box) => void) | undefined",
            required: false,
            description:
              "Receives layout measure updates using the exact callback signature below. Application data stays app-owned.",
          },
          {
            name: "onLayoutAnimationStart",
            type: "(() => void) | undefined",
            required: false,
            description:
              "Receives layout animation start updates using the exact callback signature below. Application data stays app-owned.",
          },
          {
            name: "onLayoutAnimationComplete",
            type: "(() => void) | undefined",
            required: false,
            description:
              "Receives layout animation complete updates using the exact callback signature below. Application data stays app-owned.",
          },
          {
            name: "onPan",
            type: "((event: PointerEvent, info: PanInfo) => void) | undefined",
            required: false,
            description:
              "Receives pan updates using the exact callback signature below. Application data stays app-owned.",
          },
          {
            name: "onPanStart",
            type: "((event: PointerEvent, info: PanInfo) => void) | undefined",
            required: false,
            description:
              "Receives pan start updates using the exact callback signature below. Application data stays app-owned.",
          },
          {
            name: "onPanSessionStart",
            type: "((event: PointerEvent, info: EventInfo) => void) | undefined",
            required: false,
            description:
              "Receives pan session start updates using the exact callback signature below. Application data stays app-owned.",
          },
          {
            name: "onPanEnd",
            type: "((event: PointerEvent, info: PanInfo) => void) | undefined",
            required: false,
            description:
              "Receives pan end updates using the exact callback signature below. Application data stays app-owned.",
          },
          {
            name: "onTap",
            type: "((event: MouseEvent | TouchEvent | PointerEvent, info: TapInfo) => void) | undefined",
            required: false,
            description:
              "Receives tap updates using the exact callback signature below. Application data stays app-owned.",
          },
          {
            name: "onTapStart",
            type: "((event: MouseEvent | TouchEvent | PointerEvent, info: TapInfo) => void) | undefined",
            required: false,
            description:
              "Receives tap start updates using the exact callback signature below. Application data stays app-owned.",
          },
          {
            name: "onTapCancel",
            type: "((event: MouseEvent | TouchEvent | PointerEvent, info: TapInfo) => void) | undefined",
            required: false,
            description:
              "Receives tap cancel updates using the exact callback signature below. Application data stays app-owned.",
          },
          {
            name: "whileTap",
            type: "TargetAndTransition | VariantLabels | undefined",
            required: false,
            description:
              "while Tap supplied by the application. See the exact type and editable source.",
          },
          {
            name: "globalTapTarget",
            type: "boolean | undefined",
            required: false,
            description:
              "global Tap Target supplied by the application. See the exact type and editable source.",
          },
          {
            name: "whileHover",
            type: "TargetAndTransition | VariantLabels | undefined",
            required: false,
            description:
              "while Hover supplied by the application. See the exact type and editable source.",
          },
          {
            name: "onHoverStart",
            type: "((event: PointerEvent, info: EventInfo) => void) | undefined",
            required: false,
            description:
              "Receives hover start updates using the exact callback signature below. Application data stays app-owned.",
          },
          {
            name: "onHoverEnd",
            type: "((event: PointerEvent, info: EventInfo) => void) | undefined",
            required: false,
            description:
              "Receives hover end updates using the exact callback signature below. Application data stays app-owned.",
          },
          {
            name: "whileFocus",
            type: "TargetAndTransition | VariantLabels | undefined",
            required: false,
            description:
              "while Focus supplied by the application. See the exact type and editable source.",
          },
          {
            name: "whileInView",
            type: "TargetAndTransition | VariantLabels | undefined",
            required: false,
            description:
              "while In View supplied by the application. See the exact type and editable source.",
          },
          {
            name: "onViewportEnter",
            type: "ViewportEventHandler | undefined",
            required: false,
            description:
              "Receives viewport enter updates using the exact callback signature below. Application data stays app-owned.",
          },
          {
            name: "onViewportLeave",
            type: "ViewportEventHandler | undefined",
            required: false,
            description:
              "Receives viewport leave updates using the exact callback signature below. Application data stays app-owned.",
          },
          {
            name: "viewport",
            type: "ViewportOptions | undefined",
            required: false,
            description:
              "viewport supplied by the application. See the exact type and editable source.",
          },
          {
            name: "onDirectionLock",
            type: '((axis: "x" | "y") => void) | undefined',
            required: false,
            description:
              "Receives direction lock updates using the exact callback signature below. Application data stays app-owned.",
          },
          {
            name: "onDragTransitionEnd",
            type: "(() => void) | undefined",
            required: false,
            description:
              "Receives drag transition end updates using the exact callback signature below. Application data stays app-owned.",
          },
          {
            name: "drag",
            type: 'boolean | "x" | "y" | undefined',
            required: false,
            description:
              "drag supplied by the application. See the exact type and editable source.",
          },
          {
            name: "whileDrag",
            type: "TargetAndTransition | VariantLabels | undefined",
            required: false,
            description:
              "while Drag supplied by the application. See the exact type and editable source.",
          },
          {
            name: "dragDirectionLock",
            type: "boolean | undefined",
            required: false,
            description:
              "drag Direction Lock supplied by the application. See the exact type and editable source.",
          },
          {
            name: "dragPropagation",
            type: "boolean | undefined",
            required: false,
            description:
              "drag Propagation supplied by the application. See the exact type and editable source.",
          },
          {
            name: "dragConstraints",
            type: "false | Partial<BoundingBox> | { current: Element | null; } | undefined",
            required: false,
            description:
              "drag Constraints supplied by the application. See the exact type and editable source.",
          },
          {
            name: "dragElastic",
            type: "DragElastic | undefined",
            required: false,
            description:
              "drag Elastic supplied by the application. See the exact type and editable source.",
          },
          {
            name: "dragMomentum",
            type: "boolean | undefined",
            required: false,
            description:
              "drag Momentum supplied by the application. See the exact type and editable source.",
          },
          {
            name: "dragTransition",
            type: "InertiaOptions | undefined",
            required: false,
            description:
              "drag Transition supplied by the application. See the exact type and editable source.",
          },
          {
            name: "dragControls",
            type: "any",
            required: false,
            description:
              "drag Controls supplied by the application. See the exact type and editable source.",
          },
          {
            name: "dragSnapToOrigin",
            type: 'boolean | "x" | "y" | undefined',
            required: false,
            description:
              "drag Snap To Origin supplied by the application. See the exact type and editable source.",
          },
          {
            name: "dragListener",
            type: "boolean | undefined",
            required: false,
            description:
              "drag Listener supplied by the application. See the exact type and editable source.",
          },
          {
            name: "onMeasureDragConstraints",
            type: "((constraints: BoundingBox) => BoundingBox | void) | undefined",
            required: false,
            description:
              "Receives measure drag constraints updates using the exact callback signature below. Application data stays app-owned.",
          },
          {
            name: "_dragX",
            type: "MotionValue<number> | undefined",
            required: false,
            description:
              "_drag X supplied by the application. See the exact type and editable source.",
          },
          {
            name: "_dragY",
            type: "MotionValue<number> | undefined",
            required: false,
            description:
              "_drag Y supplied by the application. See the exact type and editable source.",
          },
          {
            name: "layout",
            type: 'boolean | "size" | "position" | "x" | "y" | "preserve-aspect" | undefined',
            required: false,
            description:
              "layout supplied by the application. See the exact type and editable source.",
          },
          {
            name: "layoutId",
            type: "string | undefined",
            required: false,
            description:
              "layout Id supplied by the application. See the exact type and editable source.",
          },
          {
            name: "layoutDependency",
            type: "any",
            required: false,
            description:
              "layout Dependency supplied by the application. See the exact type and editable source.",
          },
          {
            name: "layoutScroll",
            type: "boolean | undefined",
            required: false,
            description:
              "layout Scroll supplied by the application. See the exact type and editable source.",
          },
          {
            name: "layoutRoot",
            type: "boolean | undefined",
            required: false,
            description:
              "layout Root supplied by the application. See the exact type and editable source.",
          },
          {
            name: "layoutAnchor",
            type: "false | { x: number; y: number; } | undefined",
            required: false,
            description:
              "layout Anchor supplied by the application. See the exact type and editable source.",
          },
          {
            name: "data-framer-portal-id",
            type: "string | undefined",
            required: false,
            description:
              "data-framer-portal-id supplied by the application. See the exact type and editable source.",
          },
          {
            name: "layoutCrossfade",
            type: "boolean | undefined",
            required: false,
            description:
              "layout Crossfade supplied by the application. See the exact type and editable source.",
          },
          {
            name: "custom",
            type: "any",
            required: false,
            description:
              "custom supplied by the application. See the exact type and editable source.",
          },
          {
            name: "inherit",
            type: "boolean | undefined",
            required: false,
            description:
              "inherit supplied by the application. See the exact type and editable source.",
          },
          {
            name: "ignoreStrict",
            type: "boolean | undefined",
            required: false,
            description:
              "ignore Strict supplied by the application. See the exact type and editable source.",
          },
          {
            name: "transformTemplate",
            type: "TransformTemplate | undefined",
            required: false,
            description:
              "transform Template supplied by the application. See the exact type and editable source.",
          },
          {
            name: "data-framer-appear-id",
            type: "string | undefined",
            required: false,
            description:
              "data-framer-appear-id supplied by the application. See the exact type and editable source.",
          },
          {
            name: "delay",
            type: "number | undefined",
            required: false,
            default: "0",
            description:
              "Motion delay override; reduced motion takes precedence.",
          },
          {
            name: "distance",
            type: "number | undefined",
            required: false,
            description:
              "distance supplied by the application. See the exact type and editable source.",
          },
          {
            name: "duration",
            type: "number | undefined",
            required: false,
            description:
              "Explicit Motion duration override; reduced motion takes precedence.",
          },
          {
            name: "fromOpacity",
            type: "number | undefined",
            required: false,
            description:
              "from Opacity supplied by the application. See the exact type and editable source.",
          },
          {
            name: "variant",
            type: '"default" | "section" | "line" | "group" | "fade" | "stagger" | undefined',
            required: false,
            default: '"default"',
            description: "Visual variant declared by this part.",
          },
        ],
      },
    ],
    notes: [
      "Reduced motion and no-script users see content immediately.",
      "HTMLMotionProps plus variant, delay, distance, duration and fromOpacity. Object or callback ref receives the root div while internal viewport observation stays active.",
      "Native HTML attributes and event handlers are forwarded where declared by the part type. Your application owns data, destinations, persistence and localization.",
    ],
  },
  "avatar-stack": {
    parts: [
      {
        name: "AvatarStack",
        description:
          "Public AvatarStack part. Native semantics and composition follow the editable source.",
        props: [
          {
            name: "ref",
            type: "React.Ref<HTMLDivElement> | undefined",
            required: false,
            description: "Ref to the rendered element.",
          },
          {
            name: "key",
            type: "React.Key | null | undefined",
            required: false,
            description:
              "key supplied by the application. See the exact type and editable source.",
          },
          {
            name: "defaultChecked",
            type: "boolean | undefined",
            required: false,
            description: "Initial uncontrolled checked state.",
          },
          {
            name: "defaultValue",
            type: "string | number | readonly string[] | undefined",
            required: false,
            description: "Initial uncontrolled value.",
          },
          {
            name: "className",
            type: "string | undefined",
            required: false,
            description: "Additional classes on the rendered element.",
          },
          {
            name: "id",
            type: "string | undefined",
            required: false,
            description:
              "Stable element ID for label and description associations.",
          },
          {
            name: "title",
            type: "string | undefined",
            required: false,
            description:
              "Visible heading or native title, according to the declared type.",
          },
          {
            name: "role",
            type: "React.AriaRole | undefined",
            required: false,
            description:
              "role supplied by the application. See the exact type and editable source.",
          },
          {
            name: "aria-describedby",
            type: "string | undefined",
            required: false,
            description: "IDs of supporting descriptions.",
          },
          {
            name: "aria-invalid",
            type: 'boolean | "true" | "false" | "grammar" | "spelling" | undefined',
            required: false,
            description: "Marks invalid input alongside readable feedback.",
          },
          {
            name: "aria-label",
            type: "string | undefined",
            required: false,
            description:
              "Accessible name for an icon-only or otherwise unnamed control.",
          },
          {
            name: "children",
            type: "ReactNode",
            required: true,
            description: "Content composed inside this part.",
          },
          {
            name: "onChange",
            type: "React.ChangeEventHandler<HTMLDivElement, Element> | undefined",
            required: false,
            description: "Native value change handler.",
          },
          {
            name: "onClick",
            type: "React.MouseEventHandler<HTMLDivElement> | undefined",
            required: false,
            description:
              "Native activation handler; respects the component disabled behavior.",
          },
          {
            name: "animate",
            type: "boolean | undefined",
            required: false,
            default: "false",
            description:
              "animate supplied by the application. See the exact type and editable source.",
          },
          {
            name: "size",
            type: "number | undefined",
            required: false,
            default: "40",
            description: "Size declared by this part.",
          },
        ],
      },
    ],
    notes: [
      "Name the group and keep individual identity available in text or a member list.",
      "AvatarStack accepts native div props plus animate and size.",
      "Native HTML attributes and event handlers are forwarded where declared by the part type. Your application owns data, destinations, persistence and localization.",
    ],
  },
  cursor: {
    parts: [
      {
        name: "Cursor",
        description:
          "Public Cursor part. Native semantics and composition follow the editable source.",
        props: [
          {
            name: "defaultChecked",
            type: "boolean | undefined",
            required: false,
            description: "Initial uncontrolled checked state.",
          },
          {
            name: "defaultValue",
            type: "string | number | readonly string[] | undefined",
            required: false,
            description: "Initial uncontrolled value.",
          },
          {
            name: "className",
            type: "string | undefined",
            required: false,
            description: "Additional classes on the rendered element.",
          },
          {
            name: "id",
            type: "string | undefined",
            required: false,
            description:
              "Stable element ID for label and description associations.",
          },
          {
            name: "title",
            type: "string | undefined",
            required: false,
            description:
              "Visible heading or native title, according to the declared type.",
          },
          {
            name: "role",
            type: "React.AriaRole | undefined",
            required: false,
            description:
              "role supplied by the application. See the exact type and editable source.",
          },
          {
            name: "aria-describedby",
            type: "string | undefined",
            required: false,
            description: "IDs of supporting descriptions.",
          },
          {
            name: "aria-invalid",
            type: 'boolean | "true" | "false" | "grammar" | "spelling" | undefined',
            required: false,
            description: "Marks invalid input alongside readable feedback.",
          },
          {
            name: "aria-label",
            type: "string | undefined",
            required: false,
            description:
              "Accessible name for an icon-only or otherwise unnamed control.",
          },
          {
            name: "children",
            type: "React.ReactNode",
            required: false,
            description: "Content composed inside this part.",
          },
          {
            name: "onChange",
            type: "React.ChangeEventHandler<HTMLSpanElement, Element> | undefined",
            required: false,
            description: "Native value change handler.",
          },
          {
            name: "onClick",
            type: "React.MouseEventHandler<HTMLSpanElement> | undefined",
            required: false,
            description:
              "Native activation handler; respects the component disabled behavior.",
          },
        ],
      },
      {
        name: "CursorPointer",
        description:
          "Public CursorPointer part. Native semantics and composition follow the editable source.",
        props: [
          {
            name: "className",
            type: "string | undefined",
            required: false,
            description: "Additional classes on the rendered element.",
          },
          {
            name: "id",
            type: "string | undefined",
            required: false,
            description:
              "Stable element ID for label and description associations.",
          },
          {
            name: "name",
            type: "string | undefined",
            required: false,
            description: "Native form field name.",
          },
          {
            name: "type",
            type: "string | undefined",
            required: false,
            description:
              "type supplied by the application. See the exact type and editable source.",
          },
          {
            name: "role",
            type: "React.AriaRole | undefined",
            required: false,
            description:
              "role supplied by the application. See the exact type and editable source.",
          },
          {
            name: "aria-describedby",
            type: "string | undefined",
            required: false,
            description: "IDs of supporting descriptions.",
          },
          {
            name: "aria-invalid",
            type: 'boolean | "true" | "false" | "grammar" | "spelling" | undefined',
            required: false,
            description: "Marks invalid input alongside readable feedback.",
          },
          {
            name: "aria-label",
            type: "string | undefined",
            required: false,
            description:
              "Accessible name for an icon-only or otherwise unnamed control.",
          },
          {
            name: "children",
            type: "React.ReactNode",
            required: false,
            description: "Content composed inside this part.",
          },
          {
            name: "onChange",
            type: "React.ChangeEventHandler<SVGSVGElement, Element> | undefined",
            required: false,
            description: "Native value change handler.",
          },
          {
            name: "onClick",
            type: "React.MouseEventHandler<SVGSVGElement> | undefined",
            required: false,
            description:
              "Native activation handler; respects the component disabled behavior.",
          },
          {
            name: "ref",
            type: "React.Ref<SVGSVGElement> | undefined",
            required: false,
            description: "Ref to the rendered element.",
          },
          {
            name: "key",
            type: "React.Key | null | undefined",
            required: false,
            description:
              "key supplied by the application. See the exact type and editable source.",
          },
        ],
      },
      {
        name: "CursorBody",
        description:
          "Public CursorBody part. Native semantics and composition follow the editable source.",
        props: [
          {
            name: "defaultChecked",
            type: "boolean | undefined",
            required: false,
            description: "Initial uncontrolled checked state.",
          },
          {
            name: "defaultValue",
            type: "string | number | readonly string[] | undefined",
            required: false,
            description: "Initial uncontrolled value.",
          },
          {
            name: "className",
            type: "string | undefined",
            required: false,
            description: "Additional classes on the rendered element.",
          },
          {
            name: "id",
            type: "string | undefined",
            required: false,
            description:
              "Stable element ID for label and description associations.",
          },
          {
            name: "title",
            type: "string | undefined",
            required: false,
            description:
              "Visible heading or native title, according to the declared type.",
          },
          {
            name: "role",
            type: "React.AriaRole | undefined",
            required: false,
            description:
              "role supplied by the application. See the exact type and editable source.",
          },
          {
            name: "aria-describedby",
            type: "string | undefined",
            required: false,
            description: "IDs of supporting descriptions.",
          },
          {
            name: "aria-invalid",
            type: 'boolean | "true" | "false" | "grammar" | "spelling" | undefined',
            required: false,
            description: "Marks invalid input alongside readable feedback.",
          },
          {
            name: "aria-label",
            type: "string | undefined",
            required: false,
            description:
              "Accessible name for an icon-only or otherwise unnamed control.",
          },
          {
            name: "children",
            type: "React.ReactNode",
            required: false,
            description: "Content composed inside this part.",
          },
          {
            name: "onChange",
            type: "React.ChangeEventHandler<HTMLSpanElement, Element> | undefined",
            required: false,
            description: "Native value change handler.",
          },
          {
            name: "onClick",
            type: "React.MouseEventHandler<HTMLSpanElement> | undefined",
            required: false,
            description:
              "Native activation handler; respects the component disabled behavior.",
          },
        ],
      },
      {
        name: "CursorName",
        description:
          "Public CursorName part. Native semantics and composition follow the editable source.",
        props: [
          {
            name: "defaultChecked",
            type: "boolean | undefined",
            required: false,
            description: "Initial uncontrolled checked state.",
          },
          {
            name: "defaultValue",
            type: "string | number | readonly string[] | undefined",
            required: false,
            description: "Initial uncontrolled value.",
          },
          {
            name: "className",
            type: "string | undefined",
            required: false,
            description: "Additional classes on the rendered element.",
          },
          {
            name: "id",
            type: "string | undefined",
            required: false,
            description:
              "Stable element ID for label and description associations.",
          },
          {
            name: "title",
            type: "string | undefined",
            required: false,
            description:
              "Visible heading or native title, according to the declared type.",
          },
          {
            name: "role",
            type: "React.AriaRole | undefined",
            required: false,
            description:
              "role supplied by the application. See the exact type and editable source.",
          },
          {
            name: "aria-describedby",
            type: "string | undefined",
            required: false,
            description: "IDs of supporting descriptions.",
          },
          {
            name: "aria-invalid",
            type: 'boolean | "true" | "false" | "grammar" | "spelling" | undefined',
            required: false,
            description: "Marks invalid input alongside readable feedback.",
          },
          {
            name: "aria-label",
            type: "string | undefined",
            required: false,
            description:
              "Accessible name for an icon-only or otherwise unnamed control.",
          },
          {
            name: "children",
            type: "React.ReactNode",
            required: false,
            description: "Content composed inside this part.",
          },
          {
            name: "onChange",
            type: "React.ChangeEventHandler<HTMLSpanElement, Element> | undefined",
            required: false,
            description: "Native value change handler.",
          },
          {
            name: "onClick",
            type: "React.MouseEventHandler<HTMLSpanElement> | undefined",
            required: false,
            description:
              "Native activation handler; respects the component disabled behavior.",
          },
        ],
      },
      {
        name: "CursorMessage",
        description:
          "Public CursorMessage part. Native semantics and composition follow the editable source.",
        props: [
          {
            name: "defaultChecked",
            type: "boolean | undefined",
            required: false,
            description: "Initial uncontrolled checked state.",
          },
          {
            name: "defaultValue",
            type: "string | number | readonly string[] | undefined",
            required: false,
            description: "Initial uncontrolled value.",
          },
          {
            name: "className",
            type: "string | undefined",
            required: false,
            description: "Additional classes on the rendered element.",
          },
          {
            name: "id",
            type: "string | undefined",
            required: false,
            description:
              "Stable element ID for label and description associations.",
          },
          {
            name: "title",
            type: "string | undefined",
            required: false,
            description:
              "Visible heading or native title, according to the declared type.",
          },
          {
            name: "role",
            type: "React.AriaRole | undefined",
            required: false,
            description:
              "role supplied by the application. See the exact type and editable source.",
          },
          {
            name: "aria-describedby",
            type: "string | undefined",
            required: false,
            description: "IDs of supporting descriptions.",
          },
          {
            name: "aria-invalid",
            type: 'boolean | "true" | "false" | "grammar" | "spelling" | undefined',
            required: false,
            description: "Marks invalid input alongside readable feedback.",
          },
          {
            name: "aria-label",
            type: "string | undefined",
            required: false,
            description:
              "Accessible name for an icon-only or otherwise unnamed control.",
          },
          {
            name: "children",
            type: "React.ReactNode",
            required: false,
            description: "Content composed inside this part.",
          },
          {
            name: "onChange",
            type: "React.ChangeEventHandler<HTMLSpanElement, Element> | undefined",
            required: false,
            description: "Native value change handler.",
          },
          {
            name: "onClick",
            type: "React.MouseEventHandler<HTMLSpanElement> | undefined",
            required: false,
            description:
              "Native activation handler; respects the component disabled behavior.",
          },
        ],
      },
    ],
    notes: [
      "Decorative cursor is aria-hidden; expose collaborator presence elsewhere in text.",
      "Cursor, CursorPointer, CursorBody, CursorName and CursorMessage accept native props.",
      "Native HTML attributes and event handlers are forwarded where declared by the part type. Your application owns data, destinations, persistence and localization.",
    ],
  },
  list: {
    parts: [
      {
        name: "List",
        description:
          "Public List part. Native semantics and composition follow the editable source.",
        props: [
          {
            name: "className",
            type: "string | undefined",
            required: false,
            description: "Additional classes on the rendered element.",
          },
          {
            name: "defaultValue",
            type: "string | number | readonly string[] | undefined",
            required: false,
            description: "Initial uncontrolled value.",
          },
          {
            name: "defaultChecked",
            type: "boolean | undefined",
            required: false,
            description: "Initial uncontrolled checked state.",
          },
          {
            name: "title",
            type: "string | undefined",
            required: false,
            description:
              "Visible heading or native title, according to the declared type.",
          },
          {
            name: "ref",
            type: "React.Ref<HTMLOListElement> | undefined",
            required: false,
            description: "Ref to the rendered element.",
          },
          {
            name: "key",
            type: "React.Key | null | undefined",
            required: false,
            description:
              "key supplied by the application. See the exact type and editable source.",
          },
          {
            name: "type",
            type: '"a" | "i" | "1" | "A" | "I" | undefined',
            required: false,
            description:
              "type supplied by the application. See the exact type and editable source.",
          },
          {
            name: "id",
            type: "string | undefined",
            required: false,
            description:
              "Stable element ID for label and description associations.",
          },
          {
            name: "role",
            type: "React.AriaRole | undefined",
            required: false,
            description:
              "role supplied by the application. See the exact type and editable source.",
          },
          {
            name: "aria-describedby",
            type: "string | undefined",
            required: false,
            description: "IDs of supporting descriptions.",
          },
          {
            name: "aria-invalid",
            type: 'boolean | "true" | "false" | "grammar" | "spelling" | undefined',
            required: false,
            description: "Marks invalid input alongside readable feedback.",
          },
          {
            name: "aria-label",
            type: "string | undefined",
            required: false,
            description:
              "Accessible name for an icon-only or otherwise unnamed control.",
          },
          {
            name: "onChange",
            type: "React.ChangeEventHandler<HTMLOListElement, Element> | undefined",
            required: false,
            description: "Native value change handler.",
          },
          {
            name: "onClick",
            type: "React.MouseEventHandler<HTMLOListElement> | undefined",
            required: false,
            description:
              "Native activation handler; respects the component disabled behavior.",
          },
          {
            name: "reversed",
            type: "boolean | undefined",
            required: false,
            description:
              "reversed supplied by the application. See the exact type and editable source.",
          },
          {
            name: "start",
            type: "number | undefined",
            required: false,
            description:
              "start supplied by the application. See the exact type and editable source.",
          },
          {
            name: "items",
            type: "T[]",
            required: true,
            description:
              "items supplied by the application. See the exact type and editable source.",
          },
          {
            name: "onItemsChange",
            type: "(items: T[]) => void",
            required: true,
            description:
              "Receives items change updates using the exact callback signature below. Application data stays app-owned.",
          },
          {
            name: "renderItem",
            type: "((item: T) => React.ReactNode) | undefined",
            required: false,
            description:
              "render Item supplied by the application. See the exact type and editable source.",
          },
        ],
      },
    ],
    notes: [
      "Move up/down buttons provide a keyboard path alongside pointer drag.",
      "List accepts items, onItemsChange and optional renderItem.",
      "Native HTML attributes and event handlers are forwarded where declared by the part type. Your application owns data, destinations, persistence and localization.",
    ],
  },
  "page-header": {
    parts: [
      {
        name: "PageHeader",
        description:
          "Public PageHeader part. Native semantics and composition follow the editable source.",
        props: [
          {
            name: "ref",
            type: "React.Ref<HTMLElement> | undefined",
            required: false,
            description: "Ref to the rendered element.",
          },
          {
            name: "key",
            type: "React.Key | null | undefined",
            required: false,
            description:
              "key supplied by the application. See the exact type and editable source.",
          },
          {
            name: "defaultChecked",
            type: "boolean | undefined",
            required: false,
            description: "Initial uncontrolled checked state.",
          },
          {
            name: "defaultValue",
            type: "string | number | readonly string[] | undefined",
            required: false,
            description: "Initial uncontrolled value.",
          },
          {
            name: "className",
            type: "string | undefined",
            required: false,
            description: "Additional classes on the rendered element.",
          },
          {
            name: "id",
            type: "string | undefined",
            required: false,
            description:
              "Stable element ID for label and description associations.",
          },
          {
            name: "title",
            type: "string | undefined",
            required: false,
            description:
              "Visible heading or native title, according to the declared type.",
          },
          {
            name: "role",
            type: "React.AriaRole | undefined",
            required: false,
            description:
              "role supplied by the application. See the exact type and editable source.",
          },
          {
            name: "aria-describedby",
            type: "string | undefined",
            required: false,
            description: "IDs of supporting descriptions.",
          },
          {
            name: "aria-invalid",
            type: 'boolean | "true" | "false" | "grammar" | "spelling" | undefined',
            required: false,
            description: "Marks invalid input alongside readable feedback.",
          },
          {
            name: "aria-label",
            type: "string | undefined",
            required: false,
            description:
              "Accessible name for an icon-only or otherwise unnamed control.",
          },
          {
            name: "children",
            type: "React.ReactNode",
            required: false,
            description: "Content composed inside this part.",
          },
          {
            name: "onChange",
            type: "React.ChangeEventHandler<HTMLElement, Element> | undefined",
            required: false,
            description: "Native value change handler.",
          },
          {
            name: "onClick",
            type: "React.MouseEventHandler<HTMLElement> | undefined",
            required: false,
            description:
              "Native activation handler; respects the component disabled behavior.",
          },
        ],
      },
      {
        name: "PageHeader.Content",
        description:
          "Public PageHeader.Content part. Native semantics and composition follow the editable source.",
        props: [
          {
            name: "ref",
            type: "React.Ref<HTMLDivElement> | undefined",
            required: false,
            description: "Ref to the rendered element.",
          },
          {
            name: "key",
            type: "React.Key | null | undefined",
            required: false,
            description:
              "key supplied by the application. See the exact type and editable source.",
          },
          {
            name: "defaultChecked",
            type: "boolean | undefined",
            required: false,
            description: "Initial uncontrolled checked state.",
          },
          {
            name: "defaultValue",
            type: "string | number | readonly string[] | undefined",
            required: false,
            description: "Initial uncontrolled value.",
          },
          {
            name: "className",
            type: "string | undefined",
            required: false,
            description: "Additional classes on the rendered element.",
          },
          {
            name: "id",
            type: "string | undefined",
            required: false,
            description:
              "Stable element ID for label and description associations.",
          },
          {
            name: "title",
            type: "string | undefined",
            required: false,
            description:
              "Visible heading or native title, according to the declared type.",
          },
          {
            name: "role",
            type: "React.AriaRole | undefined",
            required: false,
            description:
              "role supplied by the application. See the exact type and editable source.",
          },
          {
            name: "aria-describedby",
            type: "string | undefined",
            required: false,
            description: "IDs of supporting descriptions.",
          },
          {
            name: "aria-invalid",
            type: 'boolean | "true" | "false" | "grammar" | "spelling" | undefined',
            required: false,
            description: "Marks invalid input alongside readable feedback.",
          },
          {
            name: "aria-label",
            type: "string | undefined",
            required: false,
            description:
              "Accessible name for an icon-only or otherwise unnamed control.",
          },
          {
            name: "children",
            type: "React.ReactNode",
            required: false,
            description: "Content composed inside this part.",
          },
          {
            name: "onChange",
            type: "React.ChangeEventHandler<HTMLDivElement, Element> | undefined",
            required: false,
            description: "Native value change handler.",
          },
          {
            name: "onClick",
            type: "React.MouseEventHandler<HTMLDivElement> | undefined",
            required: false,
            description:
              "Native activation handler; respects the component disabled behavior.",
          },
        ],
      },
      {
        name: "PageHeader.Title",
        description:
          "Public PageHeader.Title part. Native semantics and composition follow the editable source.",
        props: [
          {
            name: "ref",
            type: "React.Ref<HTMLHeadingElement> | undefined",
            required: false,
            description: "Ref to the rendered element.",
          },
          {
            name: "key",
            type: "React.Key | null | undefined",
            required: false,
            description:
              "key supplied by the application. See the exact type and editable source.",
          },
          {
            name: "defaultChecked",
            type: "boolean | undefined",
            required: false,
            description: "Initial uncontrolled checked state.",
          },
          {
            name: "defaultValue",
            type: "string | number | readonly string[] | undefined",
            required: false,
            description: "Initial uncontrolled value.",
          },
          {
            name: "className",
            type: "string | undefined",
            required: false,
            description: "Additional classes on the rendered element.",
          },
          {
            name: "id",
            type: "string | undefined",
            required: false,
            description:
              "Stable element ID for label and description associations.",
          },
          {
            name: "title",
            type: "string | undefined",
            required: false,
            description:
              "Visible heading or native title, according to the declared type.",
          },
          {
            name: "role",
            type: "React.AriaRole | undefined",
            required: false,
            description:
              "role supplied by the application. See the exact type and editable source.",
          },
          {
            name: "aria-describedby",
            type: "string | undefined",
            required: false,
            description: "IDs of supporting descriptions.",
          },
          {
            name: "aria-invalid",
            type: 'boolean | "true" | "false" | "grammar" | "spelling" | undefined',
            required: false,
            description: "Marks invalid input alongside readable feedback.",
          },
          {
            name: "aria-label",
            type: "string | undefined",
            required: false,
            description:
              "Accessible name for an icon-only or otherwise unnamed control.",
          },
          {
            name: "children",
            type: "React.ReactNode",
            required: false,
            description: "Content composed inside this part.",
          },
          {
            name: "onChange",
            type: "React.ChangeEventHandler<HTMLHeadingElement, Element> | undefined",
            required: false,
            description: "Native value change handler.",
          },
          {
            name: "onClick",
            type: "React.MouseEventHandler<HTMLHeadingElement> | undefined",
            required: false,
            description:
              "Native activation handler; respects the component disabled behavior.",
          },
        ],
      },
      {
        name: "PageHeader.Description",
        description:
          "Public PageHeader.Description part. Native semantics and composition follow the editable source.",
        props: [
          {
            name: "ref",
            type: "React.Ref<HTMLParagraphElement> | undefined",
            required: false,
            description: "Ref to the rendered element.",
          },
          {
            name: "key",
            type: "React.Key | null | undefined",
            required: false,
            description:
              "key supplied by the application. See the exact type and editable source.",
          },
          {
            name: "defaultChecked",
            type: "boolean | undefined",
            required: false,
            description: "Initial uncontrolled checked state.",
          },
          {
            name: "defaultValue",
            type: "string | number | readonly string[] | undefined",
            required: false,
            description: "Initial uncontrolled value.",
          },
          {
            name: "className",
            type: "string | undefined",
            required: false,
            description: "Additional classes on the rendered element.",
          },
          {
            name: "id",
            type: "string | undefined",
            required: false,
            description:
              "Stable element ID for label and description associations.",
          },
          {
            name: "title",
            type: "string | undefined",
            required: false,
            description:
              "Visible heading or native title, according to the declared type.",
          },
          {
            name: "role",
            type: "React.AriaRole | undefined",
            required: false,
            description:
              "role supplied by the application. See the exact type and editable source.",
          },
          {
            name: "aria-describedby",
            type: "string | undefined",
            required: false,
            description: "IDs of supporting descriptions.",
          },
          {
            name: "aria-invalid",
            type: 'boolean | "true" | "false" | "grammar" | "spelling" | undefined',
            required: false,
            description: "Marks invalid input alongside readable feedback.",
          },
          {
            name: "aria-label",
            type: "string | undefined",
            required: false,
            description:
              "Accessible name for an icon-only or otherwise unnamed control.",
          },
          {
            name: "children",
            type: "React.ReactNode",
            required: false,
            description: "Content composed inside this part.",
          },
          {
            name: "onChange",
            type: "React.ChangeEventHandler<HTMLParagraphElement, Element> | undefined",
            required: false,
            description: "Native value change handler.",
          },
          {
            name: "onClick",
            type: "React.MouseEventHandler<HTMLParagraphElement> | undefined",
            required: false,
            description:
              "Native activation handler; respects the component disabled behavior.",
          },
        ],
      },
      {
        name: "PageHeader.Actions",
        description:
          "Public PageHeader.Actions part. Native semantics and composition follow the editable source.",
        props: [
          {
            name: "ref",
            type: "React.Ref<HTMLDivElement> | undefined",
            required: false,
            description: "Ref to the rendered element.",
          },
          {
            name: "key",
            type: "React.Key | null | undefined",
            required: false,
            description:
              "key supplied by the application. See the exact type and editable source.",
          },
          {
            name: "defaultChecked",
            type: "boolean | undefined",
            required: false,
            description: "Initial uncontrolled checked state.",
          },
          {
            name: "defaultValue",
            type: "string | number | readonly string[] | undefined",
            required: false,
            description: "Initial uncontrolled value.",
          },
          {
            name: "className",
            type: "string | undefined",
            required: false,
            description: "Additional classes on the rendered element.",
          },
          {
            name: "id",
            type: "string | undefined",
            required: false,
            description:
              "Stable element ID for label and description associations.",
          },
          {
            name: "title",
            type: "string | undefined",
            required: false,
            description:
              "Visible heading or native title, according to the declared type.",
          },
          {
            name: "role",
            type: "React.AriaRole | undefined",
            required: false,
            description:
              "role supplied by the application. See the exact type and editable source.",
          },
          {
            name: "aria-describedby",
            type: "string | undefined",
            required: false,
            description: "IDs of supporting descriptions.",
          },
          {
            name: "aria-invalid",
            type: 'boolean | "true" | "false" | "grammar" | "spelling" | undefined',
            required: false,
            description: "Marks invalid input alongside readable feedback.",
          },
          {
            name: "aria-label",
            type: "string | undefined",
            required: false,
            description:
              "Accessible name for an icon-only or otherwise unnamed control.",
          },
          {
            name: "children",
            type: "React.ReactNode",
            required: false,
            description: "Content composed inside this part.",
          },
          {
            name: "onChange",
            type: "React.ChangeEventHandler<HTMLDivElement, Element> | undefined",
            required: false,
            description: "Native value change handler.",
          },
          {
            name: "onClick",
            type: "React.MouseEventHandler<HTMLDivElement> | undefined",
            required: false,
            description:
              "Native activation handler; respects the component disabled behavior.",
          },
        ],
      },
      {
        name: "PageHeaderContent",
        description:
          "Public PageHeaderContent part. Native semantics and composition follow the editable source.",
        props: [
          {
            name: "ref",
            type: "React.Ref<HTMLDivElement> | undefined",
            required: false,
            description: "Ref to the rendered element.",
          },
          {
            name: "key",
            type: "React.Key | null | undefined",
            required: false,
            description:
              "key supplied by the application. See the exact type and editable source.",
          },
          {
            name: "defaultChecked",
            type: "boolean | undefined",
            required: false,
            description: "Initial uncontrolled checked state.",
          },
          {
            name: "defaultValue",
            type: "string | number | readonly string[] | undefined",
            required: false,
            description: "Initial uncontrolled value.",
          },
          {
            name: "className",
            type: "string | undefined",
            required: false,
            description: "Additional classes on the rendered element.",
          },
          {
            name: "id",
            type: "string | undefined",
            required: false,
            description:
              "Stable element ID for label and description associations.",
          },
          {
            name: "title",
            type: "string | undefined",
            required: false,
            description:
              "Visible heading or native title, according to the declared type.",
          },
          {
            name: "role",
            type: "React.AriaRole | undefined",
            required: false,
            description:
              "role supplied by the application. See the exact type and editable source.",
          },
          {
            name: "aria-describedby",
            type: "string | undefined",
            required: false,
            description: "IDs of supporting descriptions.",
          },
          {
            name: "aria-invalid",
            type: 'boolean | "true" | "false" | "grammar" | "spelling" | undefined',
            required: false,
            description: "Marks invalid input alongside readable feedback.",
          },
          {
            name: "aria-label",
            type: "string | undefined",
            required: false,
            description:
              "Accessible name for an icon-only or otherwise unnamed control.",
          },
          {
            name: "children",
            type: "React.ReactNode",
            required: false,
            description: "Content composed inside this part.",
          },
          {
            name: "onChange",
            type: "React.ChangeEventHandler<HTMLDivElement, Element> | undefined",
            required: false,
            description: "Native value change handler.",
          },
          {
            name: "onClick",
            type: "React.MouseEventHandler<HTMLDivElement> | undefined",
            required: false,
            description:
              "Native activation handler; respects the component disabled behavior.",
          },
        ],
      },
      {
        name: "PageHeaderTitle",
        description:
          "Public PageHeaderTitle part. Native semantics and composition follow the editable source.",
        props: [
          {
            name: "ref",
            type: "React.Ref<HTMLHeadingElement> | undefined",
            required: false,
            description: "Ref to the rendered element.",
          },
          {
            name: "key",
            type: "React.Key | null | undefined",
            required: false,
            description:
              "key supplied by the application. See the exact type and editable source.",
          },
          {
            name: "defaultChecked",
            type: "boolean | undefined",
            required: false,
            description: "Initial uncontrolled checked state.",
          },
          {
            name: "defaultValue",
            type: "string | number | readonly string[] | undefined",
            required: false,
            description: "Initial uncontrolled value.",
          },
          {
            name: "className",
            type: "string | undefined",
            required: false,
            description: "Additional classes on the rendered element.",
          },
          {
            name: "id",
            type: "string | undefined",
            required: false,
            description:
              "Stable element ID for label and description associations.",
          },
          {
            name: "title",
            type: "string | undefined",
            required: false,
            description:
              "Visible heading or native title, according to the declared type.",
          },
          {
            name: "role",
            type: "React.AriaRole | undefined",
            required: false,
            description:
              "role supplied by the application. See the exact type and editable source.",
          },
          {
            name: "aria-describedby",
            type: "string | undefined",
            required: false,
            description: "IDs of supporting descriptions.",
          },
          {
            name: "aria-invalid",
            type: 'boolean | "true" | "false" | "grammar" | "spelling" | undefined',
            required: false,
            description: "Marks invalid input alongside readable feedback.",
          },
          {
            name: "aria-label",
            type: "string | undefined",
            required: false,
            description:
              "Accessible name for an icon-only or otherwise unnamed control.",
          },
          {
            name: "children",
            type: "React.ReactNode",
            required: false,
            description: "Content composed inside this part.",
          },
          {
            name: "onChange",
            type: "React.ChangeEventHandler<HTMLHeadingElement, Element> | undefined",
            required: false,
            description: "Native value change handler.",
          },
          {
            name: "onClick",
            type: "React.MouseEventHandler<HTMLHeadingElement> | undefined",
            required: false,
            description:
              "Native activation handler; respects the component disabled behavior.",
          },
        ],
      },
      {
        name: "PageHeaderDescription",
        description:
          "Public PageHeaderDescription part. Native semantics and composition follow the editable source.",
        props: [
          {
            name: "ref",
            type: "React.Ref<HTMLParagraphElement> | undefined",
            required: false,
            description: "Ref to the rendered element.",
          },
          {
            name: "key",
            type: "React.Key | null | undefined",
            required: false,
            description:
              "key supplied by the application. See the exact type and editable source.",
          },
          {
            name: "defaultChecked",
            type: "boolean | undefined",
            required: false,
            description: "Initial uncontrolled checked state.",
          },
          {
            name: "defaultValue",
            type: "string | number | readonly string[] | undefined",
            required: false,
            description: "Initial uncontrolled value.",
          },
          {
            name: "className",
            type: "string | undefined",
            required: false,
            description: "Additional classes on the rendered element.",
          },
          {
            name: "id",
            type: "string | undefined",
            required: false,
            description:
              "Stable element ID for label and description associations.",
          },
          {
            name: "title",
            type: "string | undefined",
            required: false,
            description:
              "Visible heading or native title, according to the declared type.",
          },
          {
            name: "role",
            type: "React.AriaRole | undefined",
            required: false,
            description:
              "role supplied by the application. See the exact type and editable source.",
          },
          {
            name: "aria-describedby",
            type: "string | undefined",
            required: false,
            description: "IDs of supporting descriptions.",
          },
          {
            name: "aria-invalid",
            type: 'boolean | "true" | "false" | "grammar" | "spelling" | undefined',
            required: false,
            description: "Marks invalid input alongside readable feedback.",
          },
          {
            name: "aria-label",
            type: "string | undefined",
            required: false,
            description:
              "Accessible name for an icon-only or otherwise unnamed control.",
          },
          {
            name: "children",
            type: "React.ReactNode",
            required: false,
            description: "Content composed inside this part.",
          },
          {
            name: "onChange",
            type: "React.ChangeEventHandler<HTMLParagraphElement, Element> | undefined",
            required: false,
            description: "Native value change handler.",
          },
          {
            name: "onClick",
            type: "React.MouseEventHandler<HTMLParagraphElement> | undefined",
            required: false,
            description:
              "Native activation handler; respects the component disabled behavior.",
          },
        ],
      },
      {
        name: "PageHeaderActions",
        description:
          "Public PageHeaderActions part. Native semantics and composition follow the editable source.",
        props: [
          {
            name: "ref",
            type: "React.Ref<HTMLDivElement> | undefined",
            required: false,
            description: "Ref to the rendered element.",
          },
          {
            name: "key",
            type: "React.Key | null | undefined",
            required: false,
            description:
              "key supplied by the application. See the exact type and editable source.",
          },
          {
            name: "defaultChecked",
            type: "boolean | undefined",
            required: false,
            description: "Initial uncontrolled checked state.",
          },
          {
            name: "defaultValue",
            type: "string | number | readonly string[] | undefined",
            required: false,
            description: "Initial uncontrolled value.",
          },
          {
            name: "className",
            type: "string | undefined",
            required: false,
            description: "Additional classes on the rendered element.",
          },
          {
            name: "id",
            type: "string | undefined",
            required: false,
            description:
              "Stable element ID for label and description associations.",
          },
          {
            name: "title",
            type: "string | undefined",
            required: false,
            description:
              "Visible heading or native title, according to the declared type.",
          },
          {
            name: "role",
            type: "React.AriaRole | undefined",
            required: false,
            description:
              "role supplied by the application. See the exact type and editable source.",
          },
          {
            name: "aria-describedby",
            type: "string | undefined",
            required: false,
            description: "IDs of supporting descriptions.",
          },
          {
            name: "aria-invalid",
            type: 'boolean | "true" | "false" | "grammar" | "spelling" | undefined',
            required: false,
            description: "Marks invalid input alongside readable feedback.",
          },
          {
            name: "aria-label",
            type: "string | undefined",
            required: false,
            description:
              "Accessible name for an icon-only or otherwise unnamed control.",
          },
          {
            name: "children",
            type: "React.ReactNode",
            required: false,
            description: "Content composed inside this part.",
          },
          {
            name: "onChange",
            type: "React.ChangeEventHandler<HTMLDivElement, Element> | undefined",
            required: false,
            description: "Native value change handler.",
          },
          {
            name: "onClick",
            type: "React.MouseEventHandler<HTMLDivElement> | undefined",
            required: false,
            description:
              "Native activation handler; respects the component disabled behavior.",
          },
        ],
      },
    ],
    notes: [
      "Title is an h1. Actions remain native interactive controls.",
      "Compound PageHeader parts accept native element props.",
      "Native HTML attributes and event handlers are forwarded where declared by the part type. Your application owns data, destinations, persistence and localization.",
    ],
  },
  "state-panel": {
    parts: [
      {
        name: "StatePanel",
        description:
          "Public StatePanel part. Native semantics and composition follow the editable source.",
        props: [
          {
            name: "ref",
            type: "React.Ref<HTMLElement> | undefined",
            required: false,
            description: "Ref to the rendered element.",
          },
          {
            name: "key",
            type: "React.Key | null | undefined",
            required: false,
            description:
              "key supplied by the application. See the exact type and editable source.",
          },
          {
            name: "defaultChecked",
            type: "boolean | undefined",
            required: false,
            description: "Initial uncontrolled checked state.",
          },
          {
            name: "defaultValue",
            type: "string | number | readonly string[] | undefined",
            required: false,
            description: "Initial uncontrolled value.",
          },
          {
            name: "className",
            type: "string | undefined",
            required: false,
            description: "Additional classes on the rendered element.",
          },
          {
            name: "id",
            type: "string | undefined",
            required: false,
            description:
              "Stable element ID for label and description associations.",
          },
          {
            name: "title",
            type: "string | (string & React.ReactElement<unknown, string | React.JSXElementConstructor<any>>) | (string & Iterable<React.ReactNode>) | (string & React.ReactPortal) | (string & Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined>) | undefined",
            required: true,
            description:
              "Visible heading or native title, according to the declared type.",
          },
          {
            name: "role",
            type: "React.AriaRole | undefined",
            required: false,
            description:
              "role supplied by the application. See the exact type and editable source.",
          },
          {
            name: "aria-describedby",
            type: "string | undefined",
            required: false,
            description: "IDs of supporting descriptions.",
          },
          {
            name: "aria-invalid",
            type: 'boolean | "true" | "false" | "grammar" | "spelling" | undefined',
            required: false,
            description: "Marks invalid input alongside readable feedback.",
          },
          {
            name: "aria-label",
            type: "string | undefined",
            required: false,
            description:
              "Accessible name for an icon-only or otherwise unnamed control.",
          },
          {
            name: "children",
            type: "React.ReactNode",
            required: false,
            description: "Content composed inside this part.",
          },
          {
            name: "onChange",
            type: "React.ChangeEventHandler<HTMLElement, Element> | undefined",
            required: false,
            description: "Native value change handler.",
          },
          {
            name: "onClick",
            type: "React.MouseEventHandler<HTMLElement> | undefined",
            required: false,
            description:
              "Native activation handler; respects the component disabled behavior.",
          },
          {
            name: "tone",
            type: '"destructive" | "neutral" | "success" | "warning" | null | undefined',
            required: false,
            default: '"neutral"',
            description:
              "tone supplied by the application. See the exact type and editable source.",
          },
          {
            name: "action",
            type: "React.ReactNode",
            required: false,
            description:
              "action supplied by the application. See the exact type and editable source.",
          },
          {
            name: "description",
            type: "React.ReactNode",
            required: false,
            description:
              "description supplied by the application. See the exact type and editable source.",
          },
          {
            name: "headingLevel",
            type: '"h1" | "h2" | undefined',
            required: false,
            default: '"h2"',
            description:
              "heading Level supplied by the application. See the exact type and editable source.",
          },
          {
            name: "icon",
            type: "React.ReactNode",
            required: false,
            description:
              "icon supplied by the application. See the exact type and editable source.",
          },
        ],
      },
    ],
    notes: [
      "Choose h1 or h2 for the region hierarchy; icon is decorative and tone is conveyed in text.",
      "StatePanelProps adds title, description, action, icon, tone and headingLevel.",
      "Native HTML attributes and event handlers are forwarded where declared by the part type. Your application owns data, destinations, persistence and localization.",
    ],
  },
  "product-page-intro": {
    parts: [
      {
        name: "ProductPageIntro",
        description:
          "Public ProductPageIntro part. Native semantics and composition follow the editable source.",
        props: [
          {
            name: "ref",
            type: "React.Ref<HTMLElement> | undefined",
            required: false,
            description: "Ref to the rendered element.",
          },
          {
            name: "key",
            type: "React.Key | null | undefined",
            required: false,
            description:
              "key supplied by the application. See the exact type and editable source.",
          },
          {
            name: "defaultChecked",
            type: "boolean | undefined",
            required: false,
            description: "Initial uncontrolled checked state.",
          },
          {
            name: "defaultValue",
            type: "string | number | readonly string[] | undefined",
            required: false,
            description: "Initial uncontrolled value.",
          },
          {
            name: "className",
            type: "string | undefined",
            required: false,
            description: "Additional classes on the rendered element.",
          },
          {
            name: "id",
            type: "string | undefined",
            required: false,
            description:
              "Stable element ID for label and description associations.",
          },
          {
            name: "title",
            type: "string | (string & React.ReactElement<unknown, string | React.JSXElementConstructor<any>>) | (string & Iterable<ReactNode>) | (string & React.ReactPortal) | (string & Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined>) | undefined",
            required: true,
            description:
              "Visible heading or native title, according to the declared type.",
          },
          {
            name: "role",
            type: "React.AriaRole | undefined",
            required: false,
            description:
              "role supplied by the application. See the exact type and editable source.",
          },
          {
            name: "aria-describedby",
            type: "string | undefined",
            required: false,
            description: "IDs of supporting descriptions.",
          },
          {
            name: "aria-invalid",
            type: 'boolean | "true" | "false" | "grammar" | "spelling" | undefined',
            required: false,
            description: "Marks invalid input alongside readable feedback.",
          },
          {
            name: "aria-label",
            type: "string | undefined",
            required: false,
            description:
              "Accessible name for an icon-only or otherwise unnamed control.",
          },
          {
            name: "children",
            type: "ReactNode",
            required: false,
            description: "Content composed inside this part.",
          },
          {
            name: "onChange",
            type: "React.ChangeEventHandler<HTMLElement, Element> | undefined",
            required: false,
            description: "Native value change handler.",
          },
          {
            name: "onClick",
            type: "React.MouseEventHandler<HTMLElement> | undefined",
            required: false,
            description:
              "Native activation handler; respects the component disabled behavior.",
          },
          {
            name: "variant",
            type: '"index" | "detail" | "task" | null | undefined',
            required: false,
            default: '"index"',
            description: "Visual variant declared by this part.",
          },
          {
            name: "aside",
            type: "ReactNode",
            required: false,
            description:
              "aside supplied by the application. See the exact type and editable source.",
          },
          {
            name: "description",
            type: "ReactNode",
            required: false,
            description:
              "description supplied by the application. See the exact type and editable source.",
          },
          {
            name: "eyebrow",
            type: "ReactNode",
            required: true,
            description:
              "eyebrow supplied by the application. See the exact type and editable source.",
          },
          {
            name: "meta",
            type: "ReactNode",
            required: false,
            description:
              "meta supplied by the application. See the exact type and editable source.",
          },
        ],
      },
    ],
    notes: [
      "One h1 provides the page name; actions retain native semantics.",
      "ProductPageIntroProps accepts variant, eyebrow, title, description, meta and aside.",
      "Native HTML attributes and event handlers are forwarded where declared by the part type. Your application owns data, destinations, persistence and localization.",
    ],
  },
  "resource-row-link": {
    parts: [
      {
        name: "ResourceRow",
        description:
          "Public ResourceRow part. Native semantics and composition follow the editable source.",
        props: [
          {
            name: "ref",
            type: "React.Ref<HTMLDivElement> | undefined",
            required: false,
            description: "Ref to the rendered element.",
          },
          {
            name: "key",
            type: "React.Key | null | undefined",
            required: false,
            description:
              "key supplied by the application. See the exact type and editable source.",
          },
          {
            name: "defaultChecked",
            type: "boolean | undefined",
            required: false,
            description: "Initial uncontrolled checked state.",
          },
          {
            name: "defaultValue",
            type: "string | number | readonly string[] | undefined",
            required: false,
            description: "Initial uncontrolled value.",
          },
          {
            name: "className",
            type: "string | undefined",
            required: false,
            description: "Additional classes on the rendered element.",
          },
          {
            name: "id",
            type: "string | undefined",
            required: false,
            description:
              "Stable element ID for label and description associations.",
          },
          {
            name: "title",
            type: "string | undefined",
            required: false,
            description:
              "Visible heading or native title, according to the declared type.",
          },
          {
            name: "role",
            type: "React.AriaRole | undefined",
            required: false,
            description:
              "role supplied by the application. See the exact type and editable source.",
          },
          {
            name: "aria-describedby",
            type: "string | undefined",
            required: false,
            description: "IDs of supporting descriptions.",
          },
          {
            name: "aria-invalid",
            type: 'boolean | "true" | "false" | "grammar" | "spelling" | undefined',
            required: false,
            description: "Marks invalid input alongside readable feedback.",
          },
          {
            name: "aria-label",
            type: "string | undefined",
            required: false,
            description:
              "Accessible name for an icon-only or otherwise unnamed control.",
          },
          {
            name: "children",
            type: "React.ReactNode",
            required: false,
            description: "Content composed inside this part.",
          },
          {
            name: "onChange",
            type: "React.ChangeEventHandler<HTMLDivElement, Element> | undefined",
            required: false,
            description: "Native value change handler.",
          },
          {
            name: "onClick",
            type: "React.MouseEventHandler<HTMLDivElement> | undefined",
            required: false,
            description:
              "Native activation handler; respects the component disabled behavior.",
          },
        ],
      },
      {
        name: "ResourceRowLink",
        description:
          "Public ResourceRowLink part. Native semantics and composition follow the editable source.",
        props: [
          {
            name: "ref",
            type: "React.Ref<HTMLAnchorElement> | undefined",
            required: false,
            description: "Ref to the rendered element.",
          },
          {
            name: "key",
            type: "React.Key | null | undefined",
            required: false,
            description:
              "key supplied by the application. See the exact type and editable source.",
          },
          {
            name: "download",
            type: "any",
            required: false,
            description:
              "download supplied by the application. See the exact type and editable source.",
          },
          {
            name: "hrefLang",
            type: "string | undefined",
            required: false,
            description:
              "href Lang supplied by the application. See the exact type and editable source.",
          },
          {
            name: "ping",
            type: "string | undefined",
            required: false,
            description:
              "ping supplied by the application. See the exact type and editable source.",
          },
          {
            name: "type",
            type: "string | undefined",
            required: false,
            description:
              "type supplied by the application. See the exact type and editable source.",
          },
          {
            name: "referrerPolicy",
            type: "React.HTMLAttributeReferrerPolicy | undefined",
            required: false,
            description:
              "referrer Policy supplied by the application. See the exact type and editable source.",
          },
          {
            name: "defaultChecked",
            type: "boolean | undefined",
            required: false,
            description: "Initial uncontrolled checked state.",
          },
          {
            name: "defaultValue",
            type: "string | number | readonly string[] | undefined",
            required: false,
            description: "Initial uncontrolled value.",
          },
          {
            name: "className",
            type: "string | undefined",
            required: false,
            description: "Additional classes on the rendered element.",
          },
          {
            name: "id",
            type: "string | undefined",
            required: false,
            description:
              "Stable element ID for label and description associations.",
          },
          {
            name: "title",
            type: "string | undefined",
            required: false,
            description:
              "Visible heading or native title, according to the declared type.",
          },
          {
            name: "role",
            type: "React.AriaRole | undefined",
            required: false,
            description:
              "role supplied by the application. See the exact type and editable source.",
          },
          {
            name: "aria-describedby",
            type: "string | undefined",
            required: false,
            description: "IDs of supporting descriptions.",
          },
          {
            name: "aria-invalid",
            type: 'boolean | "true" | "false" | "grammar" | "spelling" | undefined',
            required: false,
            description: "Marks invalid input alongside readable feedback.",
          },
          {
            name: "aria-label",
            type: "string | undefined",
            required: false,
            description:
              "Accessible name for an icon-only or otherwise unnamed control.",
          },
          {
            name: "children",
            type: "React.ReactNode",
            required: false,
            description: "Content composed inside this part.",
          },
          {
            name: "onChange",
            type: "React.ChangeEventHandler<HTMLAnchorElement, Element> | undefined",
            required: false,
            description: "Native value change handler.",
          },
          {
            name: "onClick",
            type: "React.MouseEventHandler<HTMLAnchorElement> | undefined",
            required: false,
            description:
              "Native activation handler; respects the component disabled behavior.",
          },
        ],
      },
      {
        name: "ResourceRowButton",
        description:
          "Public ResourceRowButton part. Native semantics and composition follow the editable source.",
        props: [
          {
            name: "ref",
            type: "React.Ref<HTMLButtonElement> | undefined",
            required: false,
            description: "Ref to the rendered element.",
          },
          {
            name: "key",
            type: "React.Key | null | undefined",
            required: false,
            description:
              "key supplied by the application. See the exact type and editable source.",
          },
          {
            name: "disabled",
            type: "boolean | undefined",
            required: false,
            description: "Disables the control or the documented interaction.",
          },
          {
            name: "form",
            type: "string | undefined",
            required: false,
            description:
              "form supplied by the application. See the exact type and editable source.",
          },
          {
            name: "formAction",
            type: "string | ((formData: FormData) => void | Promise<void>) | undefined",
            required: false,
            description:
              "form Action supplied by the application. See the exact type and editable source.",
          },
          {
            name: "formEncType",
            type: "string | undefined",
            required: false,
            description:
              "form Enc Type supplied by the application. See the exact type and editable source.",
          },
          {
            name: "formMethod",
            type: "string | undefined",
            required: false,
            description:
              "form Method supplied by the application. See the exact type and editable source.",
          },
          {
            name: "formNoValidate",
            type: "boolean | undefined",
            required: false,
            description:
              "form No Validate supplied by the application. See the exact type and editable source.",
          },
          {
            name: "formTarget",
            type: "string | undefined",
            required: false,
            description:
              "form Target supplied by the application. See the exact type and editable source.",
          },
          {
            name: "name",
            type: "string | undefined",
            required: false,
            description: "Native form field name.",
          },
          {
            name: "type",
            type: '"button" | "submit" | "reset" | undefined',
            required: false,
            default: '"button"',
            description:
              "type supplied by the application. See the exact type and editable source.",
          },
          {
            name: "value",
            type: "string | number | readonly string[] | undefined",
            required: false,
            description:
              "Controlled value. Update it through the matching change callback.",
          },
          {
            name: "defaultChecked",
            type: "boolean | undefined",
            required: false,
            description: "Initial uncontrolled checked state.",
          },
          {
            name: "defaultValue",
            type: "string | number | readonly string[] | undefined",
            required: false,
            description: "Initial uncontrolled value.",
          },
          {
            name: "className",
            type: "string | undefined",
            required: false,
            description: "Additional classes on the rendered element.",
          },
          {
            name: "id",
            type: "string | undefined",
            required: false,
            description:
              "Stable element ID for label and description associations.",
          },
          {
            name: "title",
            type: "string | undefined",
            required: false,
            description:
              "Visible heading or native title, according to the declared type.",
          },
          {
            name: "role",
            type: "React.AriaRole | undefined",
            required: false,
            description:
              "role supplied by the application. See the exact type and editable source.",
          },
          {
            name: "aria-describedby",
            type: "string | undefined",
            required: false,
            description: "IDs of supporting descriptions.",
          },
          {
            name: "aria-invalid",
            type: 'boolean | "true" | "false" | "grammar" | "spelling" | undefined',
            required: false,
            description: "Marks invalid input alongside readable feedback.",
          },
          {
            name: "aria-label",
            type: "string | undefined",
            required: false,
            description:
              "Accessible name for an icon-only or otherwise unnamed control.",
          },
          {
            name: "children",
            type: "React.ReactNode",
            required: false,
            description: "Content composed inside this part.",
          },
          {
            name: "onChange",
            type: "React.ChangeEventHandler<HTMLButtonElement, Element> | undefined",
            required: false,
            description: "Native value change handler.",
          },
          {
            name: "onClick",
            type: "React.MouseEventHandler<HTMLButtonElement> | undefined",
            required: false,
            description:
              "Native activation handler; respects the component disabled behavior.",
          },
        ],
      },
    ],
    notes: [
      "Native anchor/button semantics and visible focus cover the row. Keep one primary interactive target.",
      "ResourceRow, ResourceRowLink (native anchor), ResourceRowButton.",
      "Native HTML attributes and event handlers are forwarded where declared by the part type. Your application owns data, destinations, persistence and localization.",
    ],
  },
  "page-skeleton": {
    parts: [
      {
        name: "PageSkeleton",
        description:
          "Public PageSkeleton part. Native semantics and composition follow the editable source.",
        props: [
          {
            name: "ref",
            type: "React.Ref<HTMLDivElement> | undefined",
            required: false,
            description: "Ref to the rendered element.",
          },
          {
            name: "key",
            type: "React.Key | null | undefined",
            required: false,
            description:
              "key supplied by the application. See the exact type and editable source.",
          },
          {
            name: "defaultChecked",
            type: "boolean | undefined",
            required: false,
            description: "Initial uncontrolled checked state.",
          },
          {
            name: "defaultValue",
            type: "string | number | readonly string[] | undefined",
            required: false,
            description: "Initial uncontrolled value.",
          },
          {
            name: "className",
            type: "string | undefined",
            required: false,
            description: "Additional classes on the rendered element.",
          },
          {
            name: "id",
            type: "string | undefined",
            required: false,
            description:
              "Stable element ID for label and description associations.",
          },
          {
            name: "title",
            type: "string | undefined",
            required: false,
            description:
              "Visible heading or native title, according to the declared type.",
          },
          {
            name: "role",
            type: "React.AriaRole | undefined",
            required: false,
            description:
              "role supplied by the application. See the exact type and editable source.",
          },
          {
            name: "aria-describedby",
            type: "string | undefined",
            required: false,
            description: "IDs of supporting descriptions.",
          },
          {
            name: "aria-invalid",
            type: 'boolean | "true" | "false" | "grammar" | "spelling" | undefined',
            required: false,
            description: "Marks invalid input alongside readable feedback.",
          },
          {
            name: "aria-label",
            type: "string | undefined",
            required: false,
            description:
              "Accessible name for an icon-only or otherwise unnamed control.",
          },
          {
            name: "children",
            type: "React.ReactNode",
            required: false,
            description: "Content composed inside this part.",
          },
          {
            name: "onChange",
            type: "React.ChangeEventHandler<HTMLDivElement, Element> | undefined",
            required: false,
            description: "Native value change handler.",
          },
          {
            name: "onClick",
            type: "React.MouseEventHandler<HTMLDivElement> | undefined",
            required: false,
            description:
              "Native activation handler; respects the component disabled behavior.",
          },
          {
            name: "label",
            type: "string | undefined",
            required: false,
            default: '"Loading page"',
            description:
              "Visible or accessible name. Provide a meaningful application label.",
          },
          {
            name: "rows",
            type: "number | undefined",
            required: false,
            default: "3",
            description:
              "rows supplied by the application. See the exact type and editable source.",
          },
        ],
      },
    ],
    notes: [
      "The region has aria-busy, status role and an accessible loading label.",
      "Native div props plus label and rows.",
      "Native HTML attributes and event handlers are forwarded where declared by the part type. Your application owns data, destinations, persistence and localization.",
    ],
  },
  "filter-toolbar": {
    parts: [
      {
        name: "FilterToolbar",
        description:
          "Public FilterToolbar part. Native semantics and composition follow the editable source.",
        props: [
          {
            name: "ref",
            type: "React.Ref<HTMLDivElement> | undefined",
            required: false,
            description: "Ref to the rendered element.",
          },
          {
            name: "key",
            type: "React.Key | null | undefined",
            required: false,
            description:
              "key supplied by the application. See the exact type and editable source.",
          },
          {
            name: "defaultChecked",
            type: "boolean | undefined",
            required: false,
            description: "Initial uncontrolled checked state.",
          },
          {
            name: "defaultValue",
            type: "string | number | readonly string[] | undefined",
            required: false,
            description: "Initial uncontrolled value.",
          },
          {
            name: "className",
            type: "string | undefined",
            required: false,
            description: "Additional classes on the rendered element.",
          },
          {
            name: "id",
            type: "string | undefined",
            required: false,
            description:
              "Stable element ID for label and description associations.",
          },
          {
            name: "title",
            type: "string | undefined",
            required: false,
            description:
              "Visible heading or native title, according to the declared type.",
          },
          {
            name: "role",
            type: "React.AriaRole | undefined",
            required: false,
            description:
              "role supplied by the application. See the exact type and editable source.",
          },
          {
            name: "aria-describedby",
            type: "string | undefined",
            required: false,
            description: "IDs of supporting descriptions.",
          },
          {
            name: "aria-invalid",
            type: 'boolean | "true" | "false" | "grammar" | "spelling" | undefined',
            required: false,
            description: "Marks invalid input alongside readable feedback.",
          },
          {
            name: "aria-label",
            type: "string | undefined",
            required: false,
            description:
              "Accessible name for an icon-only or otherwise unnamed control.",
          },
          {
            name: "children",
            type: "React.ReactNode",
            required: false,
            description: "Content composed inside this part.",
          },
          {
            name: "onChange",
            type: "React.ChangeEventHandler<HTMLDivElement, Element> | undefined",
            required: false,
            description: "Native value change handler.",
          },
          {
            name: "onClick",
            type: "React.MouseEventHandler<HTMLDivElement> | undefined",
            required: false,
            description:
              "Native activation handler; respects the component disabled behavior.",
          },
        ],
      },
      {
        name: "FilterGroup",
        description:
          "Public FilterGroup part. Native semantics and composition follow the editable source.",
        props: [
          {
            name: "ref",
            type: "React.Ref<HTMLDivElement> | undefined",
            required: false,
            description: "Ref to the rendered element.",
          },
          {
            name: "key",
            type: "React.Key | null | undefined",
            required: false,
            description:
              "key supplied by the application. See the exact type and editable source.",
          },
          {
            name: "defaultChecked",
            type: "boolean | undefined",
            required: false,
            description: "Initial uncontrolled checked state.",
          },
          {
            name: "defaultValue",
            type: "string | number | readonly string[] | undefined",
            required: false,
            description: "Initial uncontrolled value.",
          },
          {
            name: "className",
            type: "string | undefined",
            required: false,
            description: "Additional classes on the rendered element.",
          },
          {
            name: "id",
            type: "string | undefined",
            required: false,
            description:
              "Stable element ID for label and description associations.",
          },
          {
            name: "title",
            type: "string | undefined",
            required: false,
            description:
              "Visible heading or native title, according to the declared type.",
          },
          {
            name: "role",
            type: "React.AriaRole | undefined",
            required: false,
            description:
              "role supplied by the application. See the exact type and editable source.",
          },
          {
            name: "aria-describedby",
            type: "string | undefined",
            required: false,
            description: "IDs of supporting descriptions.",
          },
          {
            name: "aria-invalid",
            type: 'boolean | "true" | "false" | "grammar" | "spelling" | undefined',
            required: false,
            description: "Marks invalid input alongside readable feedback.",
          },
          {
            name: "aria-label",
            type: "string | undefined",
            required: false,
            description:
              "Accessible name for an icon-only or otherwise unnamed control.",
          },
          {
            name: "children",
            type: "React.ReactNode",
            required: false,
            description: "Content composed inside this part.",
          },
          {
            name: "onChange",
            type: "React.ChangeEventHandler<HTMLDivElement, Element> | undefined",
            required: false,
            description: "Native value change handler.",
          },
          {
            name: "onClick",
            type: "React.MouseEventHandler<HTMLDivElement> | undefined",
            required: false,
            description:
              "Native activation handler; respects the component disabled behavior.",
          },
        ],
      },
      {
        name: "FilterToggle",
        description:
          "Public FilterToggle part. Native semantics and composition follow the editable source.",
        props: [
          {
            name: "className",
            type: "string | ((state: ButtonState) => string | undefined) | undefined",
            required: false,
            description: "Additional classes on the rendered element.",
          },
          {
            name: "size",
            type: '"default" | "xs" | "sm" | "lg" | "icon" | "icon-sm" | "icon-xs" | "icon-lg" | null | undefined',
            required: false,
            description: "Size declared by this part.",
          },
          {
            name: "form",
            type: "string | undefined",
            required: false,
            description:
              "form supplied by the application. See the exact type and editable source.",
          },
          {
            name: "title",
            type: "string | undefined",
            required: false,
            description:
              "Visible heading or native title, according to the declared type.",
          },
          {
            name: "ref",
            type: "React.Ref<HTMLButtonElement> | undefined",
            required: false,
            description: "Ref to the rendered element.",
          },
          {
            name: "key",
            type: "React.Key | null | undefined",
            required: false,
            description:
              "key supplied by the application. See the exact type and editable source.",
          },
          {
            name: "disabled",
            type: "boolean | undefined",
            required: false,
            description: "Disables the control or the documented interaction.",
          },
          {
            name: "formAction",
            type: "string | ((formData: FormData) => void | Promise<void>) | undefined",
            required: false,
            description:
              "form Action supplied by the application. See the exact type and editable source.",
          },
          {
            name: "formEncType",
            type: "string | undefined",
            required: false,
            description:
              "form Enc Type supplied by the application. See the exact type and editable source.",
          },
          {
            name: "formMethod",
            type: "string | undefined",
            required: false,
            description:
              "form Method supplied by the application. See the exact type and editable source.",
          },
          {
            name: "formNoValidate",
            type: "boolean | undefined",
            required: false,
            description:
              "form No Validate supplied by the application. See the exact type and editable source.",
          },
          {
            name: "formTarget",
            type: "string | undefined",
            required: false,
            description:
              "form Target supplied by the application. See the exact type and editable source.",
          },
          {
            name: "name",
            type: "string | undefined",
            required: false,
            description: "Native form field name.",
          },
          {
            name: "type",
            type: '"button" | "submit" | "reset" | undefined',
            required: false,
            description:
              "type supplied by the application. See the exact type and editable source.",
          },
          {
            name: "value",
            type: "string | number | readonly string[] | undefined",
            required: false,
            description:
              "Controlled value. Update it through the matching change callback.",
          },
          {
            name: "id",
            type: "string | undefined",
            required: false,
            description:
              "Stable element ID for label and description associations.",
          },
          {
            name: "role",
            type: "React.AriaRole | undefined",
            required: false,
            description:
              "role supplied by the application. See the exact type and editable source.",
          },
          {
            name: "aria-describedby",
            type: "string | undefined",
            required: false,
            description: "IDs of supporting descriptions.",
          },
          {
            name: "aria-invalid",
            type: 'boolean | "true" | "false" | "grammar" | "spelling" | undefined',
            required: false,
            description: "Marks invalid input alongside readable feedback.",
          },
          {
            name: "aria-label",
            type: "string | undefined",
            required: false,
            description:
              "Accessible name for an icon-only or otherwise unnamed control.",
          },
          {
            name: "children",
            type: "React.ReactNode",
            required: false,
            description: "Content composed inside this part.",
          },
          {
            name: "onChange",
            type: "((event: BaseUIEvent<React.ChangeEvent<HTMLButtonElement, Element>>) => void) | undefined",
            required: false,
            description: "Native value change handler.",
          },
          {
            name: "onClick",
            type: "((event: BaseUIEvent<React.MouseEvent<HTMLButtonElement, MouseEvent>>) => void) | undefined",
            required: false,
            description:
              "Native activation handler; respects the component disabled behavior.",
          },
          {
            name: "loading",
            type: "boolean | undefined",
            required: false,
            description:
              "Displays the loading state and the documented busy/disabled behavior.",
          },
          {
            name: "render",
            type: "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, ButtonState> | undefined",
            required: false,
            description:
              "render supplied by the application. See the exact type and editable source.",
          },
          {
            name: "focusableWhenDisabled",
            type: "boolean | undefined",
            required: false,
            description:
              "focusable When Disabled supplied by the application. See the exact type and editable source.",
          },
          {
            name: "nativeButton",
            type: "boolean | undefined",
            required: false,
            description:
              "native Button supplied by the application. See the exact type and editable source.",
          },
          {
            name: "asChild",
            type: "boolean | undefined",
            required: false,
            description:
              "as Child supplied by the application. See the exact type and editable source.",
          },
          {
            name: "pressed",
            type: "boolean | undefined",
            required: false,
            default: "false",
            description:
              "pressed supplied by the application. See the exact type and editable source.",
          },
        ],
      },
    ],
    notes: [
      "Each filter toggle exposes aria-pressed; search and sort need visible or programmatic labels; results need an announced count.",
      "FilterToolbar and FilterGroup accept div props; FilterToggle accepts Button props and pressed.",
      "Native HTML attributes and event handlers are forwarded where declared by the part type. Your application owns data, destinations, persistence and localization.",
    ],
  },
  "form-section": {
    parts: [
      {
        name: "FormSection",
        description:
          "Public FormSection part. Native semantics and composition follow the editable source.",
        props: [
          {
            name: "ref",
            type: "React.Ref<HTMLElement> | undefined",
            required: false,
            description: "Ref to the rendered element.",
          },
          {
            name: "key",
            type: "React.Key | null | undefined",
            required: false,
            description:
              "key supplied by the application. See the exact type and editable source.",
          },
          {
            name: "defaultChecked",
            type: "boolean | undefined",
            required: false,
            description: "Initial uncontrolled checked state.",
          },
          {
            name: "defaultValue",
            type: "string | number | readonly string[] | undefined",
            required: false,
            description: "Initial uncontrolled value.",
          },
          {
            name: "className",
            type: "string | undefined",
            required: false,
            description: "Additional classes on the rendered element.",
          },
          {
            name: "id",
            type: "string | undefined",
            required: false,
            description:
              "Stable element ID for label and description associations.",
          },
          {
            name: "title",
            type: "string",
            required: true,
            description:
              "Visible heading or native title, according to the declared type.",
          },
          {
            name: "role",
            type: "React.AriaRole | undefined",
            required: false,
            description:
              "role supplied by the application. See the exact type and editable source.",
          },
          {
            name: "aria-describedby",
            type: "string | undefined",
            required: false,
            description: "IDs of supporting descriptions.",
          },
          {
            name: "aria-invalid",
            type: 'boolean | "true" | "false" | "grammar" | "spelling" | undefined',
            required: false,
            description: "Marks invalid input alongside readable feedback.",
          },
          {
            name: "aria-label",
            type: "string | undefined",
            required: false,
            description:
              "Accessible name for an icon-only or otherwise unnamed control.",
          },
          {
            name: "children",
            type: "React.ReactNode",
            required: false,
            description: "Content composed inside this part.",
          },
          {
            name: "onChange",
            type: "React.ChangeEventHandler<HTMLElement, Element> | undefined",
            required: false,
            description: "Native value change handler.",
          },
          {
            name: "onClick",
            type: "React.MouseEventHandler<HTMLElement> | undefined",
            required: false,
            description:
              "Native activation handler; respects the component disabled behavior.",
          },
          {
            name: "description",
            type: "string | undefined",
            required: false,
            description:
              "description supplied by the application. See the exact type and editable source.",
          },
        ],
      },
    ],
    notes: [
      "Fields still need their own labels; section title is an h2.",
      "title, description?, children, native section props.",
      "Native HTML attributes and event handlers are forwarded where declared by the part type. Your application owns data, destinations, persistence and localization.",
    ],
  },
  "search-field": {
    parts: [
      {
        name: "SearchField",
        description:
          "Public SearchField part. Native semantics and composition follow the editable source.",
        props: [
          {
            name: "onValueChange",
            type: "((value: string, eventDetails: Input.ChangeEventDetails) => void) | undefined",
            required: false,
            description:
              "Receives value change updates using the exact callback signature below. Application data stays app-owned.",
          },
          {
            name: "defaultValue",
            type: "string | number | readonly string[] | undefined",
            required: false,
            description: "Initial uncontrolled value.",
          },
          {
            name: "value",
            type: "string | number | readonly string[] | undefined",
            required: false,
            description:
              "Controlled value. Update it through the matching change callback.",
          },
          {
            name: "size",
            type: "number | undefined",
            required: false,
            description: "Size declared by this part.",
          },
          {
            name: "form",
            type: "string | undefined",
            required: false,
            description:
              "form supplied by the application. See the exact type and editable source.",
          },
          {
            name: "title",
            type: "string | undefined",
            required: false,
            description:
              "Visible heading or native title, according to the declared type.",
          },
          {
            name: "pattern",
            type: "string | undefined",
            required: false,
            description:
              "pattern supplied by the application. See the exact type and editable source.",
          },
          {
            name: "ref",
            type: "React.Ref<HTMLInputElement> | undefined",
            required: false,
            description: "Ref to the rendered element.",
          },
          {
            name: "key",
            type: "React.Key | null | undefined",
            required: false,
            description:
              "key supplied by the application. See the exact type and editable source.",
          },
          {
            name: "disabled",
            type: "boolean | undefined",
            required: false,
            description: "Disables the control or the documented interaction.",
          },
          {
            name: "formAction",
            type: "string | ((formData: FormData) => void | Promise<void>) | undefined",
            required: false,
            description:
              "form Action supplied by the application. See the exact type and editable source.",
          },
          {
            name: "formEncType",
            type: "string | undefined",
            required: false,
            description:
              "form Enc Type supplied by the application. See the exact type and editable source.",
          },
          {
            name: "formMethod",
            type: "string | undefined",
            required: false,
            description:
              "form Method supplied by the application. See the exact type and editable source.",
          },
          {
            name: "formNoValidate",
            type: "boolean | undefined",
            required: false,
            description:
              "form No Validate supplied by the application. See the exact type and editable source.",
          },
          {
            name: "formTarget",
            type: "string | undefined",
            required: false,
            description:
              "form Target supplied by the application. See the exact type and editable source.",
          },
          {
            name: "name",
            type: "string | undefined",
            required: false,
            description: "Native form field name.",
          },
          {
            name: "type",
            type: "React.HTMLInputTypeAttribute | undefined",
            required: false,
            description:
              "type supplied by the application. See the exact type and editable source.",
          },
          {
            name: "id",
            type: "string | undefined",
            required: false,
            description:
              "Stable element ID for label and description associations.",
          },
          {
            name: "role",
            type: "React.AriaRole | undefined",
            required: false,
            description:
              "role supplied by the application. See the exact type and editable source.",
          },
          {
            name: "aria-describedby",
            type: "string | undefined",
            required: false,
            description: "IDs of supporting descriptions.",
          },
          {
            name: "aria-invalid",
            type: 'boolean | "true" | "false" | "grammar" | "spelling" | undefined',
            required: false,
            description: "Marks invalid input alongside readable feedback.",
          },
          {
            name: "aria-label",
            type: "string | undefined",
            required: false,
            description:
              "Accessible name for an icon-only or otherwise unnamed control.",
          },
          {
            name: "children",
            type: "React.ReactNode",
            required: false,
            description: "Content composed inside this part.",
          },
          {
            name: "onChange",
            type: "((event: BaseUIEvent<React.ChangeEvent<HTMLInputElement, HTMLInputElement>>) => void) | undefined",
            required: false,
            description: "Native value change handler.",
          },
          {
            name: "onClick",
            type: "((event: BaseUIEvent<React.MouseEvent<HTMLInputElement, MouseEvent>>) => void) | undefined",
            required: false,
            description:
              "Native activation handler; respects the component disabled behavior.",
          },
          {
            name: "list",
            type: "string | undefined",
            required: false,
            description:
              "list supplied by the application. See the exact type and editable source.",
          },
          {
            name: "accept",
            type: "string | undefined",
            required: false,
            description:
              "accept supplied by the application. See the exact type and editable source.",
          },
          {
            name: "alt",
            type: "string | undefined",
            required: false,
            description:
              "Image alternative text; use an empty string for decoration.",
          },
          {
            name: "autoComplete",
            type: "React.HTMLInputAutoCompleteAttribute | undefined",
            required: false,
            description:
              "auto Complete supplied by the application. See the exact type and editable source.",
          },
          {
            name: "capture",
            type: 'boolean | "user" | "environment" | undefined',
            required: false,
            description:
              "capture supplied by the application. See the exact type and editable source.",
          },
          {
            name: "checked",
            type: "boolean | undefined",
            required: false,
            description: "Controlled checked state.",
          },
          {
            name: "maxLength",
            type: "number | undefined",
            required: false,
            description:
              "max Length supplied by the application. See the exact type and editable source.",
          },
          {
            name: "minLength",
            type: "number | undefined",
            required: false,
            description:
              "min Length supplied by the application. See the exact type and editable source.",
          },
          {
            name: "multiple",
            type: "boolean | undefined",
            required: false,
            description:
              "multiple supplied by the application. See the exact type and editable source.",
          },
          {
            name: "placeholder",
            type: "string | undefined",
            required: false,
            description:
              "placeholder supplied by the application. See the exact type and editable source.",
          },
          {
            name: "readOnly",
            type: "boolean | undefined",
            required: false,
            description:
              "read Only supplied by the application. See the exact type and editable source.",
          },
          {
            name: "required",
            type: "boolean | undefined",
            required: false,
            description: "Marks the native form value as required.",
          },
          {
            name: "src",
            type: "string | undefined",
            required: false,
            description: "Application-owned media or image URL.",
          },
          {
            name: "step",
            type: "string | number | undefined",
            required: false,
            description:
              "step supplied by the application. See the exact type and editable source.",
          },
          {
            name: "className",
            type: "string | ((state: InputState) => string | undefined) | undefined",
            required: false,
            description: "Additional classes on the rendered element.",
          },
          {
            name: "render",
            type: "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, InputState> | undefined",
            required: false,
            description:
              "render supplied by the application. See the exact type and editable source.",
          },
          {
            name: "inputClassName",
            type: "string | undefined",
            required: false,
            description:
              "input Class Name supplied by the application. See the exact type and editable source.",
          },
        ],
      },
    ],
    notes: [
      "Defaults to aria-label Search; override with a contextual label and announce result changes.",
      "Input props plus wrapper className and inputClassName.",
      "Native HTML attributes and event handlers are forwarded where declared by the part type. Your application owns data, destinations, persistence and localization.",
    ],
  },
  "stat-card": {
    parts: [
      {
        name: "StatCard",
        description:
          "Public StatCard part. Native semantics and composition follow the editable source.",
        props: [
          {
            name: "ref",
            type: "React.Ref<HTMLDivElement> | undefined",
            required: false,
            description: "Ref to the rendered element.",
          },
          {
            name: "key",
            type: "React.Key | null | undefined",
            required: false,
            description:
              "key supplied by the application. See the exact type and editable source.",
          },
          {
            name: "defaultChecked",
            type: "boolean | undefined",
            required: false,
            description: "Initial uncontrolled checked state.",
          },
          {
            name: "defaultValue",
            type: "string | number | readonly string[] | undefined",
            required: false,
            description: "Initial uncontrolled value.",
          },
          {
            name: "className",
            type: "string | undefined",
            required: false,
            description: "Additional classes on the rendered element.",
          },
          {
            name: "id",
            type: "string | undefined",
            required: false,
            description:
              "Stable element ID for label and description associations.",
          },
          {
            name: "title",
            type: "string | undefined",
            required: false,
            description:
              "Visible heading or native title, according to the declared type.",
          },
          {
            name: "role",
            type: "React.AriaRole | undefined",
            required: false,
            description:
              "role supplied by the application. See the exact type and editable source.",
          },
          {
            name: "aria-describedby",
            type: "string | undefined",
            required: false,
            description: "IDs of supporting descriptions.",
          },
          {
            name: "aria-invalid",
            type: 'boolean | "true" | "false" | "grammar" | "spelling" | undefined',
            required: false,
            description: "Marks invalid input alongside readable feedback.",
          },
          {
            name: "aria-label",
            type: "string | undefined",
            required: false,
            description:
              "Accessible name for an icon-only or otherwise unnamed control.",
          },
          {
            name: "children",
            type: "React.ReactNode",
            required: false,
            description: "Content composed inside this part.",
          },
          {
            name: "onChange",
            type: "React.ChangeEventHandler<HTMLDivElement, Element> | undefined",
            required: false,
            description: "Native value change handler.",
          },
          {
            name: "onClick",
            type: "React.MouseEventHandler<HTMLDivElement> | undefined",
            required: false,
            description:
              "Native activation handler; respects the component disabled behavior.",
          },
          {
            name: "label",
            type: "string",
            required: true,
            description:
              "Visible or accessible name. Provide a meaningful application label.",
          },
          {
            name: "value",
            type: "React.ReactNode",
            required: true,
            description:
              "Controlled value. Update it through the matching change callback.",
          },
          {
            name: "detail",
            type: "React.ReactNode",
            required: false,
            description:
              "detail supplied by the application. See the exact type and editable source.",
          },
        ],
      },
    ],
    notes: [
      "Label and detail describe the value in text.",
      "label, value, detail?, native div props.",
      "Native HTML attributes and event handlers are forwarded where declared by the part type. Your application owns data, destinations, persistence and localization.",
    ],
  },
  "settings-section": {
    parts: [
      {
        name: "SettingsSection",
        description:
          "Public SettingsSection part. Native semantics and composition follow the editable source.",
        props: [
          {
            name: "title",
            type: "string",
            required: true,
            description:
              "Visible heading or native title, according to the declared type.",
          },
          {
            name: "description",
            type: "string | undefined",
            required: false,
            description:
              "description supplied by the application. See the exact type and editable source.",
          },
          {
            name: "children",
            type: "React.ReactNode",
            required: true,
            description: "Content composed inside this part.",
          },
        ],
      },
    ],
    notes: [
      "Children remain responsible for field labels and result status.",
      "title, description?, children.",
      "Native HTML attributes and event handlers are forwarded where declared by the part type. Your application owns data, destinations, persistence and localization.",
    ],
  },
  "bento-grid": {
    parts: [
      {
        name: "BentoGrid",
        description:
          "Public BentoGrid part. Native semantics and composition follow the editable source.",
        props: [
          {
            name: "defaultChecked",
            type: "boolean | undefined",
            required: false,
            description: "Initial uncontrolled checked state.",
          },
          {
            name: "defaultValue",
            type: "string | number | readonly string[] | undefined",
            required: false,
            description: "Initial uncontrolled value.",
          },
          {
            name: "className",
            type: "string | undefined",
            required: false,
            description: "Additional classes on the rendered element.",
          },
          {
            name: "id",
            type: "string | undefined",
            required: false,
            description:
              "Stable element ID for label and description associations.",
          },
          {
            name: "title",
            type: "string | undefined",
            required: false,
            description:
              "Visible heading or native title, according to the declared type.",
          },
          {
            name: "role",
            type: "React.AriaRole | undefined",
            required: false,
            description:
              "role supplied by the application. See the exact type and editable source.",
          },
          {
            name: "aria-describedby",
            type: "string | undefined",
            required: false,
            description: "IDs of supporting descriptions.",
          },
          {
            name: "aria-invalid",
            type: 'boolean | "true" | "false" | "grammar" | "spelling" | undefined',
            required: false,
            description: "Marks invalid input alongside readable feedback.",
          },
          {
            name: "aria-label",
            type: "string | undefined",
            required: false,
            description:
              "Accessible name for an icon-only or otherwise unnamed control.",
          },
          {
            name: "children",
            type: "ReactNode",
            required: false,
            description: "Content composed inside this part.",
          },
          {
            name: "onChange",
            type: "React.ChangeEventHandler<HTMLDivElement, Element> | undefined",
            required: false,
            description: "Native value change handler.",
          },
          {
            name: "onClick",
            type: "React.MouseEventHandler<HTMLDivElement> | undefined",
            required: false,
            description:
              "Native activation handler; respects the component disabled behavior.",
          },
        ],
      },
      {
        name: "BentoGridItem",
        description:
          "Public BentoGridItem part. Native semantics and composition follow the editable source.",
        props: [
          {
            name: "defaultChecked",
            type: "boolean | undefined",
            required: false,
            description: "Initial uncontrolled checked state.",
          },
          {
            name: "defaultValue",
            type: "string | number | readonly string[] | undefined",
            required: false,
            description: "Initial uncontrolled value.",
          },
          {
            name: "className",
            type: "string | undefined",
            required: false,
            description: "Additional classes on the rendered element.",
          },
          {
            name: "id",
            type: "string | undefined",
            required: false,
            description:
              "Stable element ID for label and description associations.",
          },
          {
            name: "title",
            type: "string | (string & React.ReactElement<unknown, string | React.JSXElementConstructor<any>>) | (string & Iterable<ReactNode>) | (string & React.ReactPortal) | (string & Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined>) | undefined",
            required: true,
            description:
              "Visible heading or native title, according to the declared type.",
          },
          {
            name: "role",
            type: "React.AriaRole | undefined",
            required: false,
            description:
              "role supplied by the application. See the exact type and editable source.",
          },
          {
            name: "aria-describedby",
            type: "string | undefined",
            required: false,
            description: "IDs of supporting descriptions.",
          },
          {
            name: "aria-invalid",
            type: 'boolean | "true" | "false" | "grammar" | "spelling" | undefined',
            required: false,
            description: "Marks invalid input alongside readable feedback.",
          },
          {
            name: "aria-label",
            type: "string | undefined",
            required: false,
            description:
              "Accessible name for an icon-only or otherwise unnamed control.",
          },
          {
            name: "children",
            type: "ReactNode",
            required: false,
            description: "Content composed inside this part.",
          },
          {
            name: "onChange",
            type: "React.ChangeEventHandler<HTMLElement, Element> | undefined",
            required: false,
            description: "Native value change handler.",
          },
          {
            name: "onClick",
            type: "React.MouseEventHandler<HTMLElement> | undefined",
            required: false,
            description:
              "Native activation handler; respects the component disabled behavior.",
          },
          {
            name: "eyebrow",
            type: "ReactNode",
            required: false,
            description:
              "eyebrow supplied by the application. See the exact type and editable source.",
          },
        ],
      },
    ],
    notes: [
      "Each item is an article with a readable title; interactive children keep their own labels.",
      "BentoGrid native div props; BentoGridItem adds title and eyebrow.",
      "Native HTML attributes and event handlers are forwarded where declared by the part type. Your application owns data, destinations, persistence and localization.",
    ],
  },
  gantt: {
    parts: [
      {
        name: "Gantt",
        description:
          "Public Gantt part. Native semantics and composition follow the editable source.",
        props: [
          {
            name: "className",
            type: "string | undefined",
            required: false,
            description: "Additional classes on the rendered element.",
          },
          {
            name: "defaultValue",
            type: "string | number | readonly string[] | undefined",
            required: false,
            description: "Initial uncontrolled value.",
          },
          {
            name: "defaultChecked",
            type: "boolean | undefined",
            required: false,
            description: "Initial uncontrolled checked state.",
          },
          {
            name: "title",
            type: "string | undefined",
            required: false,
            description:
              "Visible heading or native title, according to the declared type.",
          },
          {
            name: "ref",
            type: "React.Ref<HTMLDivElement> | undefined",
            required: false,
            description: "Ref to the rendered element.",
          },
          {
            name: "key",
            type: "React.Key | null | undefined",
            required: false,
            description:
              "key supplied by the application. See the exact type and editable source.",
          },
          {
            name: "id",
            type: "string | undefined",
            required: false,
            description:
              "Stable element ID for label and description associations.",
          },
          {
            name: "role",
            type: "React.AriaRole | undefined",
            required: false,
            description:
              "role supplied by the application. See the exact type and editable source.",
          },
          {
            name: "aria-describedby",
            type: "string | undefined",
            required: false,
            description: "IDs of supporting descriptions.",
          },
          {
            name: "aria-invalid",
            type: 'boolean | "true" | "false" | "grammar" | "spelling" | undefined',
            required: false,
            description: "Marks invalid input alongside readable feedback.",
          },
          {
            name: "aria-label",
            type: "string | undefined",
            required: false,
            description:
              "Accessible name for an icon-only or otherwise unnamed control.",
          },
          {
            name: "onChange",
            type: "React.ChangeEventHandler<HTMLDivElement, Element> | undefined",
            required: false,
            description: "Native value change handler.",
          },
          {
            name: "onClick",
            type: "React.MouseEventHandler<HTMLDivElement> | undefined",
            required: false,
            description:
              "Native activation handler; respects the component disabled behavior.",
          },
          {
            name: "items",
            type: "GanttItem[]",
            required: true,
            description:
              "items supplied by the application. See the exact type and editable source.",
          },
          {
            name: "onItemsChange",
            type: "(items: GanttItem[]) => void",
            required: true,
            description:
              "Receives items change updates using the exact callback signature below. Application data stays app-owned.",
          },
          {
            name: "startDate",
            type: "Date | undefined",
            required: false,
            description:
              "start Date supplied by the application. See the exact type and editable source.",
          },
          {
            name: "days",
            type: "number | undefined",
            required: false,
            default: "14",
            description:
              "days supplied by the application. See the exact type and editable source.",
          },
          {
            name: "locale",
            type: "string | undefined",
            required: false,
            default: '"en-US"',
            description:
              "locale supplied by the application. See the exact type and editable source.",
          },
        ],
      },
    ],
    notes: [
      "Each bar names its date range. Arrow keys move it; Shift+Arrow changes duration.",
      "Gantt accepts items, onItemsChange, startDate, days and locale.",
      "Native HTML attributes and event handlers are forwarded where declared by the part type. Your application owns data, destinations, persistence and localization.",
    ],
  },
  kanban: {
    parts: [
      {
        name: "Kanban",
        description:
          "Public Kanban part. Native semantics and composition follow the editable source.",
        props: [
          {
            name: "className",
            type: "string | undefined",
            required: false,
            description: "Additional classes on the rendered element.",
          },
          {
            name: "defaultValue",
            type: "string | number | readonly string[] | undefined",
            required: false,
            description: "Initial uncontrolled value.",
          },
          {
            name: "defaultChecked",
            type: "boolean | undefined",
            required: false,
            description: "Initial uncontrolled checked state.",
          },
          {
            name: "title",
            type: "string | undefined",
            required: false,
            description:
              "Visible heading or native title, according to the declared type.",
          },
          {
            name: "ref",
            type: "React.Ref<HTMLDivElement> | undefined",
            required: false,
            description: "Ref to the rendered element.",
          },
          {
            name: "key",
            type: "React.Key | null | undefined",
            required: false,
            description:
              "key supplied by the application. See the exact type and editable source.",
          },
          {
            name: "id",
            type: "string | undefined",
            required: false,
            description:
              "Stable element ID for label and description associations.",
          },
          {
            name: "role",
            type: "React.AriaRole | undefined",
            required: false,
            description:
              "role supplied by the application. See the exact type and editable source.",
          },
          {
            name: "aria-describedby",
            type: "string | undefined",
            required: false,
            description: "IDs of supporting descriptions.",
          },
          {
            name: "aria-invalid",
            type: 'boolean | "true" | "false" | "grammar" | "spelling" | undefined',
            required: false,
            description: "Marks invalid input alongside readable feedback.",
          },
          {
            name: "aria-label",
            type: "string | undefined",
            required: false,
            description:
              "Accessible name for an icon-only or otherwise unnamed control.",
          },
          {
            name: "onChange",
            type: "React.ChangeEventHandler<HTMLDivElement, Element> | undefined",
            required: false,
            description: "Native value change handler.",
          },
          {
            name: "onClick",
            type: "React.MouseEventHandler<HTMLDivElement> | undefined",
            required: false,
            description:
              "Native activation handler; respects the component disabled behavior.",
          },
          {
            name: "columns",
            type: "KanbanColumn[]",
            required: true,
            description:
              "columns supplied by the application. See the exact type and editable source.",
          },
          {
            name: "cards",
            type: "T[]",
            required: true,
            description:
              "cards supplied by the application. See the exact type and editable source.",
          },
          {
            name: "onCardsChange",
            type: "(cards: T[]) => void",
            required: true,
            description:
              "Receives cards change updates using the exact callback signature below. Application data stays app-owned.",
          },
          {
            name: "renderCard",
            type: "((card: T) => React.ReactNode) | undefined",
            required: false,
            description:
              "render Card supplied by the application. See the exact type and editable source.",
          },
        ],
      },
    ],
    notes: [
      "Labeled move controls and a live status announce changes for keyboard users.",
      "Kanban accepts columns, cards, onCardsChange and optional renderCard.",
      "Native HTML attributes and event handlers are forwarded where declared by the part type. Your application owns data, destinations, persistence and localization.",
    ],
  },
  "code-block": {
    parts: [
      {
        name: "CodeBlock",
        description:
          "Public CodeBlock part. Native semantics and composition follow the editable source.",
        props: [
          {
            name: "ref",
            type: "React.Ref<HTMLDivElement> | undefined",
            required: false,
            description: "Ref to the rendered element.",
          },
          {
            name: "key",
            type: "React.Key | null | undefined",
            required: false,
            description:
              "key supplied by the application. See the exact type and editable source.",
          },
          {
            name: "defaultChecked",
            type: "boolean | undefined",
            required: false,
            description: "Initial uncontrolled checked state.",
          },
          {
            name: "defaultValue",
            type: "string | number | readonly string[] | undefined",
            required: false,
            description: "Initial uncontrolled value.",
          },
          {
            name: "className",
            type: "string | undefined",
            required: false,
            description: "Additional classes on the rendered element.",
          },
          {
            name: "id",
            type: "string | undefined",
            required: false,
            description:
              "Stable element ID for label and description associations.",
          },
          {
            name: "title",
            type: "string | undefined",
            required: false,
            description:
              "Visible heading or native title, according to the declared type.",
          },
          {
            name: "role",
            type: "React.AriaRole | undefined",
            required: false,
            description:
              "role supplied by the application. See the exact type and editable source.",
          },
          {
            name: "aria-describedby",
            type: "string | undefined",
            required: false,
            description: "IDs of supporting descriptions.",
          },
          {
            name: "aria-invalid",
            type: 'boolean | "true" | "false" | "grammar" | "spelling" | undefined',
            required: false,
            description: "Marks invalid input alongside readable feedback.",
          },
          {
            name: "aria-label",
            type: "string | undefined",
            required: false,
            description:
              "Accessible name for an icon-only or otherwise unnamed control.",
          },
          {
            name: "children",
            type: "React.ReactNode",
            required: false,
            description: "Content composed inside this part.",
          },
          {
            name: "onChange",
            type: "React.ChangeEventHandler<HTMLDivElement, Element> | undefined",
            required: false,
            description: "Native value change handler.",
          },
          {
            name: "onClick",
            type: "React.MouseEventHandler<HTMLDivElement> | undefined",
            required: false,
            description:
              "Native activation handler; respects the component disabled behavior.",
          },
          {
            name: "code",
            type: "string | undefined",
            required: false,
            default: '""',
            description:
              "code supplied by the application. See the exact type and editable source.",
          },
          {
            name: "language",
            type: "string | undefined",
            required: false,
            default: '"text"',
            description:
              "language supplied by the application. See the exact type and editable source.",
          },
          {
            name: "filename",
            type: "string | undefined",
            required: false,
            description:
              "filename supplied by the application. See the exact type and editable source.",
          },
          {
            name: "samples",
            type: "CodeSample[] | undefined",
            required: false,
            description:
              "samples supplied by the application. See the exact type and editable source.",
          },
          {
            name: "showLineNumbers",
            type: "boolean | undefined",
            required: false,
            default: "false",
            description:
              "show Line Numbers supplied by the application. See the exact type and editable source.",
          },
        ],
      },
    ],
    notes: [
      "Base UI Select supports keyboard switching; copy button is named, line numbers are decorative and code keeps whitespace semantics.",
      "CodeBlock accepts code, language, filename, optional samples ({ label, code, language, filename }) and showLineNumbers. Highlighting covers JS/TS, JSON, CSS, HTML and Bash; unknown languages render as plain text.",
      "Native HTML attributes and event handlers are forwarded where declared by the part type. Your application owns data, destinations, persistence and localization.",
    ],
  },
  "contribution-graph": {
    parts: [
      {
        name: "ContributionGraph",
        description:
          "Public ContributionGraph part. Native semantics and composition follow the editable source.",
        props: [
          {
            name: "className",
            type: "string | undefined",
            required: false,
            description: "Additional classes on the rendered element.",
          },
          {
            name: "defaultValue",
            type: "string | number | readonly string[] | undefined",
            required: false,
            description: "Initial uncontrolled value.",
          },
          {
            name: "defaultChecked",
            type: "boolean | undefined",
            required: false,
            description: "Initial uncontrolled checked state.",
          },
          {
            name: "title",
            type: "string | undefined",
            required: false,
            description:
              "Visible heading or native title, according to the declared type.",
          },
          {
            name: "ref",
            type: "React.Ref<HTMLDivElement> | undefined",
            required: false,
            description: "Ref to the rendered element.",
          },
          {
            name: "key",
            type: "React.Key | null | undefined",
            required: false,
            description:
              "key supplied by the application. See the exact type and editable source.",
          },
          {
            name: "id",
            type: "string | undefined",
            required: false,
            description:
              "Stable element ID for label and description associations.",
          },
          {
            name: "role",
            type: "React.AriaRole | undefined",
            required: false,
            description:
              "role supplied by the application. See the exact type and editable source.",
          },
          {
            name: "aria-describedby",
            type: "string | undefined",
            required: false,
            description: "IDs of supporting descriptions.",
          },
          {
            name: "aria-invalid",
            type: 'boolean | "true" | "false" | "grammar" | "spelling" | undefined',
            required: false,
            description: "Marks invalid input alongside readable feedback.",
          },
          {
            name: "aria-label",
            type: "string | undefined",
            required: false,
            description:
              "Accessible name for an icon-only or otherwise unnamed control.",
          },
          {
            name: "children",
            type: "React.ReactNode",
            required: false,
            description: "Content composed inside this part.",
          },
          {
            name: "onChange",
            type: "React.ChangeEventHandler<HTMLDivElement, Element> | undefined",
            required: false,
            description: "Native value change handler.",
          },
          {
            name: "onClick",
            type: "React.MouseEventHandler<HTMLDivElement> | undefined",
            required: false,
            description:
              "Native activation handler; respects the component disabled behavior.",
          },
          {
            name: "data",
            type: "Contribution[]",
            required: true,
            description:
              "data supplied by the application. See the exact type and editable source.",
          },
          {
            name: "startDate",
            type: "string",
            required: true,
            description:
              "start Date supplied by the application. See the exact type and editable source.",
          },
          {
            name: "endDate",
            type: "string",
            required: true,
            description:
              "end Date supplied by the application. See the exact type and editable source.",
          },
          {
            name: "locale",
            type: "string | undefined",
            required: false,
            default: '"en-US"',
            description:
              "locale supplied by the application. See the exact type and editable source.",
          },
        ],
      },
    ],
    notes: [
      "Each day is a named button; selected count is announced as status.",
      "ContributionGraph accepts data, startDate, endDate, locale and onSelect.",
      "Native HTML attributes and event handlers are forwarded where declared by the part type. Your application owns data, destinations, persistence and localization.",
    ],
  },
  sandbox: {
    parts: [
      {
        name: "Sandbox",
        description:
          "Public Sandbox part. Native semantics and composition follow the editable source.",
        props: [
          {
            name: "ref",
            type: "React.Ref<HTMLDivElement> | undefined",
            required: false,
            description: "Ref to the rendered element.",
          },
          {
            name: "key",
            type: "React.Key | null | undefined",
            required: false,
            description:
              "key supplied by the application. See the exact type and editable source.",
          },
          {
            name: "defaultChecked",
            type: "boolean | undefined",
            required: false,
            description: "Initial uncontrolled checked state.",
          },
          {
            name: "defaultValue",
            type: "string | number | readonly string[] | undefined",
            required: false,
            description: "Initial uncontrolled value.",
          },
          {
            name: "className",
            type: "string | undefined",
            required: false,
            description: "Additional classes on the rendered element.",
          },
          {
            name: "id",
            type: "string | undefined",
            required: false,
            description:
              "Stable element ID for label and description associations.",
          },
          {
            name: "title",
            type: "string | undefined",
            required: false,
            description:
              "Visible heading or native title, according to the declared type.",
          },
          {
            name: "role",
            type: "React.AriaRole | undefined",
            required: false,
            description:
              "role supplied by the application. See the exact type and editable source.",
          },
          {
            name: "aria-describedby",
            type: "string | undefined",
            required: false,
            description: "IDs of supporting descriptions.",
          },
          {
            name: "aria-invalid",
            type: 'boolean | "true" | "false" | "grammar" | "spelling" | undefined',
            required: false,
            description: "Marks invalid input alongside readable feedback.",
          },
          {
            name: "aria-label",
            type: "string | undefined",
            required: false,
            description:
              "Accessible name for an icon-only or otherwise unnamed control.",
          },
          {
            name: "children",
            type: "React.ReactNode",
            required: false,
            description: "Content composed inside this part.",
          },
          {
            name: "onChange",
            type: "React.ChangeEventHandler<HTMLDivElement, Element> | undefined",
            required: false,
            description: "Native value change handler.",
          },
          {
            name: "onClick",
            type: "React.MouseEventHandler<HTMLDivElement> | undefined",
            required: false,
            description:
              "Native activation handler; respects the component disabled behavior.",
          },
          {
            name: "files",
            type: "Record<string, string>",
            required: true,
            description:
              "files supplied by the application. See the exact type and editable source.",
          },
          {
            name: "template",
            type: '"react" | "react-ts" | "vanilla" | "vanilla-ts" | undefined',
            required: false,
            default: '"react"',
            description:
              "template supplied by the application. See the exact type and editable source.",
          },
          {
            name: "showConsole",
            type: "boolean | undefined",
            required: false,
            default: "true",
            description:
              "show Console supplied by the application. See the exact type and editable source.",
          },
        ],
      },
    ],
    notes: [
      "Arrow keys move between tabs; active panel is labelled by its tab. Sandpack owns editor and preview behavior.",
      "Sandbox accepts files, template and showConsole (default true). Sandpack is an item-scoped dependency. Its decorative CSS cube and fades are static; the editor and preview execution stay with Sandpack.",
      "Native HTML attributes and event handlers are forwarded where declared by the part type. Your application owns data, destinations, persistence and localization.",
    ],
    links: [
      {
        label: "Sandpack API",
        href: "https://sandpack.codesandbox.io/docs",
      },
    ],
  },
  snippet: {
    parts: [
      {
        name: "Snippet",
        description:
          "Public Snippet part. Native semantics and composition follow the editable source.",
        props: [
          {
            name: "ref",
            type: "React.Ref<HTMLDivElement> | undefined",
            required: false,
            description: "Ref to the rendered element.",
          },
          {
            name: "key",
            type: "React.Key | null | undefined",
            required: false,
            description:
              "key supplied by the application. See the exact type and editable source.",
          },
          {
            name: "defaultChecked",
            type: "boolean | undefined",
            required: false,
            description: "Initial uncontrolled checked state.",
          },
          {
            name: "defaultValue",
            type: "string | number | readonly string[] | undefined",
            required: false,
            description: "Initial uncontrolled value.",
          },
          {
            name: "className",
            type: "string | undefined",
            required: false,
            description: "Additional classes on the rendered element.",
          },
          {
            name: "id",
            type: "string | undefined",
            required: false,
            description:
              "Stable element ID for label and description associations.",
          },
          {
            name: "title",
            type: "string | undefined",
            required: false,
            description:
              "Visible heading or native title, according to the declared type.",
          },
          {
            name: "role",
            type: "React.AriaRole | undefined",
            required: false,
            description:
              "role supplied by the application. See the exact type and editable source.",
          },
          {
            name: "aria-describedby",
            type: "string | undefined",
            required: false,
            description: "IDs of supporting descriptions.",
          },
          {
            name: "aria-invalid",
            type: 'boolean | "true" | "false" | "grammar" | "spelling" | undefined',
            required: false,
            description: "Marks invalid input alongside readable feedback.",
          },
          {
            name: "aria-label",
            type: "string | undefined",
            required: false,
            description:
              "Accessible name for an icon-only or otherwise unnamed control.",
          },
          {
            name: "children",
            type: "React.ReactNode",
            required: false,
            description: "Content composed inside this part.",
          },
          {
            name: "onChange",
            type: "React.ChangeEventHandler<HTMLDivElement, Element> | undefined",
            required: false,
            description: "Native value change handler.",
          },
          {
            name: "onClick",
            type: "React.MouseEventHandler<HTMLDivElement> | undefined",
            required: false,
            description:
              "Native activation handler; respects the component disabled behavior.",
          },
          {
            name: "options",
            type: "SnippetOption[]",
            required: true,
            description:
              "options supplied by the application. See the exact type and editable source.",
          },
          {
            name: "label",
            type: "string | undefined",
            required: false,
            default: '"Command"',
            description:
              "Visible or accessible name. Provide a meaningful application label.",
          },
        ],
      },
    ],
    notes: [
      "Tabs support arrow-key selection and label the active panel.",
      "Snippet accepts options and label.",
      "Native HTML attributes and event handlers are forwarded where declared by the part type. Your application owns data, destinations, persistence and localization.",
    ],
  },
  choicebox: {
    parts: [
      {
        name: "Choicebox",
        description:
          "Public Choicebox part. Native semantics and composition follow the editable source.",
        props: [
          {
            name: "className",
            type: "string | undefined",
            required: false,
            description: "Additional classes on the rendered element.",
          },
          {
            name: "defaultValue",
            type: "string | (readonly string[] & string) | undefined",
            required: false,
            description: "Initial uncontrolled value.",
          },
          {
            name: "defaultChecked",
            type: "boolean | undefined",
            required: false,
            description: "Initial uncontrolled checked state.",
          },
          {
            name: "form",
            type: "string | undefined",
            required: false,
            description:
              "form supplied by the application. See the exact type and editable source.",
          },
          {
            name: "title",
            type: "string | undefined",
            required: false,
            description:
              "Visible heading or native title, according to the declared type.",
          },
          {
            name: "ref",
            type: "React.Ref<HTMLFieldSetElement> | undefined",
            required: false,
            description: "Ref to the rendered element.",
          },
          {
            name: "key",
            type: "React.Key | null | undefined",
            required: false,
            description:
              "key supplied by the application. See the exact type and editable source.",
          },
          {
            name: "disabled",
            type: "boolean | undefined",
            required: false,
            description: "Disables the control or the documented interaction.",
          },
          {
            name: "name",
            type: "string | undefined",
            required: false,
            description: "Native form field name.",
          },
          {
            name: "id",
            type: "string | undefined",
            required: false,
            description:
              "Stable element ID for label and description associations.",
          },
          {
            name: "role",
            type: "React.AriaRole | undefined",
            required: false,
            description:
              "role supplied by the application. See the exact type and editable source.",
          },
          {
            name: "aria-describedby",
            type: "string | undefined",
            required: false,
            description: "IDs of supporting descriptions.",
          },
          {
            name: "aria-invalid",
            type: 'boolean | "true" | "false" | "grammar" | "spelling" | undefined',
            required: false,
            description: "Marks invalid input alongside readable feedback.",
          },
          {
            name: "aria-label",
            type: "string | undefined",
            required: false,
            description:
              "Accessible name for an icon-only or otherwise unnamed control.",
          },
          {
            name: "children",
            type: "React.ReactNode",
            required: false,
            description: "Content composed inside this part.",
          },
          {
            name: "onClick",
            type: "React.MouseEventHandler<HTMLFieldSetElement> | undefined",
            required: false,
            description:
              "Native activation handler; respects the component disabled behavior.",
          },
          {
            name: "legend",
            type: "string",
            required: true,
            description:
              "legend supplied by the application. See the exact type and editable source.",
          },
          {
            name: "choices",
            type: "Choice[]",
            required: true,
            description:
              "choices supplied by the application. See the exact type and editable source.",
          },
          {
            name: "value",
            type: "string | undefined",
            required: false,
            description:
              "Controlled value. Update it through the matching change callback.",
          },
          {
            name: "onValueChange",
            type: "((value: string) => void) | undefined",
            required: false,
            description:
              "Receives value change updates using the exact callback signature below. Application data stays app-owned.",
          },
        ],
      },
    ],
    notes: [
      "Native fieldset and radio keyboard behavior; legend names the set and disabled choices remain visible.",
      "Choicebox accepts legend, choices, controlled or default value and onValueChange.",
      "Native HTML attributes and event handlers are forwarded where declared by the part type. Your application owns data, destinations, persistence and localization.",
    ],
  },
  dropzone: {
    parts: [
      {
        name: "Dropzone",
        description:
          "Public Dropzone part. Native semantics and composition follow the editable source.",
        props: [
          {
            name: "className",
            type: "string | undefined",
            required: false,
            description: "Additional classes on the rendered element.",
          },
          {
            name: "defaultValue",
            type: "string | number | readonly string[] | undefined",
            required: false,
            description: "Initial uncontrolled value.",
          },
          {
            name: "defaultChecked",
            type: "boolean | undefined",
            required: false,
            description: "Initial uncontrolled checked state.",
          },
          {
            name: "title",
            type: "string | undefined",
            required: false,
            description:
              "Visible heading or native title, according to the declared type.",
          },
          {
            name: "ref",
            type: "React.Ref<HTMLDivElement> | undefined",
            required: false,
            description: "Ref to the rendered element.",
          },
          {
            name: "key",
            type: "React.Key | null | undefined",
            required: false,
            description:
              "key supplied by the application. See the exact type and editable source.",
          },
          {
            name: "id",
            type: "string | undefined",
            required: false,
            description:
              "Stable element ID for label and description associations.",
          },
          {
            name: "role",
            type: "React.AriaRole | undefined",
            required: false,
            description:
              "role supplied by the application. See the exact type and editable source.",
          },
          {
            name: "aria-describedby",
            type: "string | undefined",
            required: false,
            description: "IDs of supporting descriptions.",
          },
          {
            name: "aria-invalid",
            type: 'boolean | "true" | "false" | "grammar" | "spelling" | undefined',
            required: false,
            description: "Marks invalid input alongside readable feedback.",
          },
          {
            name: "aria-label",
            type: "string | undefined",
            required: false,
            description:
              "Accessible name for an icon-only or otherwise unnamed control.",
          },
          {
            name: "children",
            type: "React.ReactNode",
            required: false,
            description: "Content composed inside this part.",
          },
          {
            name: "onChange",
            type: "React.ChangeEventHandler<HTMLDivElement, Element> | undefined",
            required: false,
            description: "Native value change handler.",
          },
          {
            name: "onClick",
            type: "React.MouseEventHandler<HTMLDivElement> | undefined",
            required: false,
            description:
              "Native activation handler; respects the component disabled behavior.",
          },
          {
            name: "label",
            type: "string",
            required: true,
            description:
              "Visible or accessible name. Provide a meaningful application label.",
          },
          {
            name: "accept",
            type: "string | undefined",
            required: false,
            description:
              "accept supplied by the application. See the exact type and editable source.",
          },
          {
            name: "multiple",
            type: "boolean | undefined",
            required: false,
            default: "false",
            description:
              "multiple supplied by the application. See the exact type and editable source.",
          },
          {
            name: "disabled",
            type: "boolean | undefined",
            required: false,
            description: "Disables the control or the documented interaction.",
          },
          {
            name: "onFiles",
            type: "(files: File[]) => void",
            required: true,
            description:
              "Receives files updates using the exact callback signature below. Application data stays app-owned.",
          },
        ],
      },
    ],
    notes: [
      "Browse button is keyboard accessible and chosen or rejected filenames are announced.",
      "Dropzone accepts label, accept, multiple, disabled and onFiles. Unsupported files do not call onFiles.",
      "Native HTML attributes and event handlers are forwarded where declared by the part type. Your application owns data, destinations, persistence and localization.",
    ],
  },
  "mini-calendar": {
    parts: [
      {
        name: "MiniCalendar",
        description:
          "Public MiniCalendar part. Native semantics and composition follow the editable source.",
        props: [
          {
            name: "className",
            type: "string | undefined",
            required: false,
            description: "Additional classes on the rendered element.",
          },
          {
            name: "defaultChecked",
            type: "boolean | undefined",
            required: false,
            description: "Initial uncontrolled checked state.",
          },
          {
            name: "title",
            type: "string | undefined",
            required: false,
            description:
              "Visible heading or native title, according to the declared type.",
          },
          {
            name: "ref",
            type: "React.Ref<HTMLDivElement> | undefined",
            required: false,
            description: "Ref to the rendered element.",
          },
          {
            name: "key",
            type: "React.Key | null | undefined",
            required: false,
            description:
              "key supplied by the application. See the exact type and editable source.",
          },
          {
            name: "id",
            type: "string | undefined",
            required: false,
            description:
              "Stable element ID for label and description associations.",
          },
          {
            name: "role",
            type: "React.AriaRole | undefined",
            required: false,
            description:
              "role supplied by the application. See the exact type and editable source.",
          },
          {
            name: "aria-describedby",
            type: "string | undefined",
            required: false,
            description: "IDs of supporting descriptions.",
          },
          {
            name: "aria-invalid",
            type: 'boolean | "true" | "false" | "grammar" | "spelling" | undefined',
            required: false,
            description: "Marks invalid input alongside readable feedback.",
          },
          {
            name: "aria-label",
            type: "string | undefined",
            required: false,
            description:
              "Accessible name for an icon-only or otherwise unnamed control.",
          },
          {
            name: "children",
            type: "React.ReactNode",
            required: false,
            description: "Content composed inside this part.",
          },
          {
            name: "onChange",
            type: "React.ChangeEventHandler<HTMLDivElement, Element> | undefined",
            required: false,
            description: "Native value change handler.",
          },
          {
            name: "onClick",
            type: "React.MouseEventHandler<HTMLDivElement> | undefined",
            required: false,
            description:
              "Native activation handler; respects the component disabled behavior.",
          },
          {
            name: "value",
            type: "Date | undefined",
            required: false,
            description:
              "Controlled value. Update it through the matching change callback.",
          },
          {
            name: "defaultValue",
            type: "Date | undefined",
            required: false,
            description: "Initial uncontrolled value.",
          },
          {
            name: "onValueChange",
            type: "((date: Date) => void) | undefined",
            required: false,
            description:
              "Receives value change updates using the exact callback signature below. Application data stays app-owned.",
          },
          {
            name: "locale",
            type: "string | undefined",
            required: false,
            default: '"en-US"',
            description:
              "locale supplied by the application. See the exact type and editable source.",
          },
        ],
      },
    ],
    notes: [
      "Every day has a full date label; arrows move focus across days and the visible range is announced.",
      "MiniCalendar accepts value/defaultValue, onValueChange and locale.",
      "Native HTML attributes and event handlers are forwarded where declared by the part type. Your application owns data, destinations, persistence and localization.",
    ],
  },
  tags: {
    parts: [
      {
        name: "Tags",
        description:
          "Public Tags part. Native semantics and composition follow the editable source.",
        props: [
          {
            name: "className",
            type: "string | undefined",
            required: false,
            description: "Additional classes on the rendered element.",
          },
          {
            name: "defaultChecked",
            type: "boolean | undefined",
            required: false,
            description: "Initial uncontrolled checked state.",
          },
          {
            name: "title",
            type: "string | undefined",
            required: false,
            description:
              "Visible heading or native title, according to the declared type.",
          },
          {
            name: "ref",
            type: "React.Ref<HTMLDivElement> | undefined",
            required: false,
            description: "Ref to the rendered element.",
          },
          {
            name: "key",
            type: "React.Key | null | undefined",
            required: false,
            description:
              "key supplied by the application. See the exact type and editable source.",
          },
          {
            name: "id",
            type: "string | undefined",
            required: false,
            description:
              "Stable element ID for label and description associations.",
          },
          {
            name: "role",
            type: "React.AriaRole | undefined",
            required: false,
            description:
              "role supplied by the application. See the exact type and editable source.",
          },
          {
            name: "aria-describedby",
            type: "string | undefined",
            required: false,
            description: "IDs of supporting descriptions.",
          },
          {
            name: "aria-invalid",
            type: 'boolean | "true" | "false" | "grammar" | "spelling" | undefined',
            required: false,
            description: "Marks invalid input alongside readable feedback.",
          },
          {
            name: "aria-label",
            type: "string | undefined",
            required: false,
            description:
              "Accessible name for an icon-only or otherwise unnamed control.",
          },
          {
            name: "children",
            type: "React.ReactNode",
            required: false,
            description: "Content composed inside this part.",
          },
          {
            name: "onClick",
            type: "React.MouseEventHandler<HTMLDivElement> | undefined",
            required: false,
            description:
              "Native activation handler; respects the component disabled behavior.",
          },
          {
            name: "label",
            type: "string",
            required: true,
            description:
              "Visible or accessible name. Provide a meaningful application label.",
          },
          {
            name: "value",
            type: "string[] | undefined",
            required: false,
            description:
              "Controlled value. Update it through the matching change callback.",
          },
          {
            name: "defaultValue",
            type: "string[] | undefined",
            required: false,
            default: "[]",
            description: "Initial uncontrolled value.",
          },
          {
            name: "onValueChange",
            type: "((tags: string[]) => void) | undefined",
            required: false,
            description:
              "Receives value change updates using the exact callback signature below. Application data stays app-owned.",
          },
          {
            name: "suggestions",
            type: "string[] | undefined",
            required: false,
            default: "[]",
            description:
              "suggestions supplied by the application. See the exact type and editable source.",
          },
          {
            name: "disabled",
            type: "boolean | undefined",
            required: false,
            description: "Disables the control or the documented interaction.",
          },
        ],
      },
    ],
    notes: [
      "Each removal button names its tag; status announces count.",
      "Tags accepts label, value/defaultValue, suggestions, max and onValueChange.",
      "Native HTML attributes and event handlers are forwarded where declared by the part type. Your application owns data, destinations, persistence and localization.",
    ],
  },
  "image-crop": {
    parts: [
      {
        name: "ImageCrop",
        description:
          "Public ImageCrop part. Native semantics and composition follow the editable source.",
        props: [
          {
            name: "className",
            type: "string | undefined",
            required: false,
            description: "Additional classes on the rendered element.",
          },
          {
            name: "defaultValue",
            type: "string | number | readonly string[] | undefined",
            required: false,
            description: "Initial uncontrolled value.",
          },
          {
            name: "defaultChecked",
            type: "boolean | undefined",
            required: false,
            description: "Initial uncontrolled checked state.",
          },
          {
            name: "title",
            type: "string | undefined",
            required: false,
            description:
              "Visible heading or native title, according to the declared type.",
          },
          {
            name: "ref",
            type: "React.Ref<HTMLDivElement> | undefined",
            required: false,
            description: "Ref to the rendered element.",
          },
          {
            name: "key",
            type: "React.Key | null | undefined",
            required: false,
            description:
              "key supplied by the application. See the exact type and editable source.",
          },
          {
            name: "id",
            type: "string | undefined",
            required: false,
            description:
              "Stable element ID for label and description associations.",
          },
          {
            name: "role",
            type: "React.AriaRole | undefined",
            required: false,
            description:
              "role supplied by the application. See the exact type and editable source.",
          },
          {
            name: "aria-describedby",
            type: "string | undefined",
            required: false,
            description: "IDs of supporting descriptions.",
          },
          {
            name: "aria-invalid",
            type: 'boolean | "true" | "false" | "grammar" | "spelling" | undefined',
            required: false,
            description: "Marks invalid input alongside readable feedback.",
          },
          {
            name: "aria-label",
            type: "string | undefined",
            required: false,
            description:
              "Accessible name for an icon-only or otherwise unnamed control.",
          },
          {
            name: "children",
            type: "React.ReactNode",
            required: false,
            description: "Content composed inside this part.",
          },
          {
            name: "onClick",
            type: "React.MouseEventHandler<HTMLDivElement> | undefined",
            required: false,
            description:
              "Native activation handler; respects the component disabled behavior.",
          },
          {
            name: "src",
            type: "string",
            required: true,
            description: "Application-owned media or image URL.",
          },
          {
            name: "alt",
            type: "string",
            required: true,
            description:
              "Image alternative text; use an empty string for decoration.",
          },
          {
            name: "aspect",
            type: "number | undefined",
            required: false,
            description:
              "aspect supplied by the application. See the exact type and editable source.",
          },
          {
            name: "onApply",
            type: "(crop: PercentCrop) => void",
            required: true,
            description:
              "Receives apply updates using the exact callback signature below. Application data stays app-owned.",
          },
        ],
      },
    ],
    notes: [
      "Crop library supports focusable handles; reset and apply are named native buttons.",
      "ImageCrop accepts src, alt, aspect and onApply(percentCrop). The crop boundary is a static dashed outline; focusable handles keep the library behavior.",
      "Native HTML attributes and event handlers are forwarded where declared by the part type. Your application owns data, destinations, persistence and localization.",
    ],
    links: [
      {
        label: "React Image Crop API",
        href: "https://github.com/dominictobias/react-image-crop",
      },
    ],
  },
  "image-zoom": {
    parts: [
      {
        name: "ImageZoom",
        description:
          "Public ImageZoom part. Native semantics and composition follow the editable source.",
        props: [
          {
            name: "className",
            type: "string | undefined",
            required: false,
            description: "Additional classes on the rendered element.",
          },
          {
            name: "defaultValue",
            type: "string | number | readonly string[] | undefined",
            required: false,
            description: "Initial uncontrolled value.",
          },
          {
            name: "defaultChecked",
            type: "boolean | undefined",
            required: false,
            description: "Initial uncontrolled checked state.",
          },
          {
            name: "form",
            type: "string | undefined",
            required: false,
            description:
              "form supplied by the application. See the exact type and editable source.",
          },
          {
            name: "title",
            type: "string | undefined",
            required: false,
            description:
              "Visible heading or native title, according to the declared type.",
          },
          {
            name: "ref",
            type: "React.Ref<HTMLButtonElement> | undefined",
            required: false,
            description: "Ref to the rendered element.",
          },
          {
            name: "key",
            type: "React.Key | null | undefined",
            required: false,
            description:
              "key supplied by the application. See the exact type and editable source.",
          },
          {
            name: "disabled",
            type: "boolean | undefined",
            required: false,
            description: "Disables the control or the documented interaction.",
          },
          {
            name: "formAction",
            type: "string | ((formData: FormData) => void | Promise<void>) | undefined",
            required: false,
            description:
              "form Action supplied by the application. See the exact type and editable source.",
          },
          {
            name: "formEncType",
            type: "string | undefined",
            required: false,
            description:
              "form Enc Type supplied by the application. See the exact type and editable source.",
          },
          {
            name: "formMethod",
            type: "string | undefined",
            required: false,
            description:
              "form Method supplied by the application. See the exact type and editable source.",
          },
          {
            name: "formNoValidate",
            type: "boolean | undefined",
            required: false,
            description:
              "form No Validate supplied by the application. See the exact type and editable source.",
          },
          {
            name: "formTarget",
            type: "string | undefined",
            required: false,
            description:
              "form Target supplied by the application. See the exact type and editable source.",
          },
          {
            name: "name",
            type: "string | undefined",
            required: false,
            description: "Native form field name.",
          },
          {
            name: "type",
            type: '"button" | "submit" | "reset" | undefined',
            required: false,
            description:
              "type supplied by the application. See the exact type and editable source.",
          },
          {
            name: "value",
            type: "string | number | readonly string[] | undefined",
            required: false,
            description:
              "Controlled value. Update it through the matching change callback.",
          },
          {
            name: "id",
            type: "string | undefined",
            required: false,
            description:
              "Stable element ID for label and description associations.",
          },
          {
            name: "role",
            type: "React.AriaRole | undefined",
            required: false,
            description:
              "role supplied by the application. See the exact type and editable source.",
          },
          {
            name: "aria-describedby",
            type: "string | undefined",
            required: false,
            description: "IDs of supporting descriptions.",
          },
          {
            name: "aria-invalid",
            type: 'boolean | "true" | "false" | "grammar" | "spelling" | undefined',
            required: false,
            description: "Marks invalid input alongside readable feedback.",
          },
          {
            name: "aria-label",
            type: "string | undefined",
            required: false,
            description:
              "Accessible name for an icon-only or otherwise unnamed control.",
          },
          {
            name: "onChange",
            type: "React.ChangeEventHandler<HTMLButtonElement, Element> | undefined",
            required: false,
            description: "Native value change handler.",
          },
          {
            name: "onClick",
            type: "React.MouseEventHandler<HTMLButtonElement> | undefined",
            required: false,
            description:
              "Native activation handler; respects the component disabled behavior.",
          },
          {
            name: "src",
            type: "string",
            required: true,
            description: "Application-owned media or image URL.",
          },
          {
            name: "alt",
            type: "string",
            required: true,
            description:
              "Image alternative text; use an empty string for decoration.",
          },
          {
            name: "caption",
            type: "string | undefined",
            required: false,
            description:
              "caption supplied by the application. See the exact type and editable source.",
          },
        ],
      },
    ],
    notes: [
      "Radix manages focus, Escape and return; trigger and close have names.",
      "ImageZoom accepts src, alt and optional caption.",
      "Native HTML attributes and event handlers are forwarded where declared by the part type. Your application owns data, destinations, persistence and localization.",
    ],
    links: [
      {
        label: "Radix dialog API",
        href: "https://www.radix-ui.com/primitives/docs/components/dialog",
      },
    ],
  },
  "credit-card": {
    parts: [
      {
        name: "CreditCard",
        description:
          "Public CreditCard part. Native semantics and composition follow the editable source.",
        props: [
          {
            name: "className",
            type: "string | undefined",
            required: false,
            description: "Additional classes on the rendered element.",
          },
          {
            name: "defaultValue",
            type: "string | number | readonly string[] | undefined",
            required: false,
            description: "Initial uncontrolled value.",
          },
          {
            name: "defaultChecked",
            type: "boolean | undefined",
            required: false,
            description: "Initial uncontrolled checked state.",
          },
          {
            name: "title",
            type: "string | undefined",
            required: false,
            description:
              "Visible heading or native title, according to the declared type.",
          },
          {
            name: "ref",
            type: "React.Ref<HTMLDivElement> | undefined",
            required: false,
            description: "Ref to the rendered element.",
          },
          {
            name: "key",
            type: "React.Key | null | undefined",
            required: false,
            description:
              "key supplied by the application. See the exact type and editable source.",
          },
          {
            name: "id",
            type: "string | undefined",
            required: false,
            description:
              "Stable element ID for label and description associations.",
          },
          {
            name: "role",
            type: "React.AriaRole | undefined",
            required: false,
            description:
              "role supplied by the application. See the exact type and editable source.",
          },
          {
            name: "aria-describedby",
            type: "string | undefined",
            required: false,
            description: "IDs of supporting descriptions.",
          },
          {
            name: "aria-invalid",
            type: 'boolean | "true" | "false" | "grammar" | "spelling" | undefined',
            required: false,
            description: "Marks invalid input alongside readable feedback.",
          },
          {
            name: "aria-label",
            type: "string | undefined",
            required: false,
            description:
              "Accessible name for an icon-only or otherwise unnamed control.",
          },
          {
            name: "onChange",
            type: "React.ChangeEventHandler<HTMLDivElement, Element> | undefined",
            required: false,
            description: "Native value change handler.",
          },
          {
            name: "onClick",
            type: "React.MouseEventHandler<HTMLDivElement> | undefined",
            required: false,
            description:
              "Native activation handler; respects the component disabled behavior.",
          },
          {
            name: "brand",
            type: "string",
            required: true,
            description:
              "brand supplied by the application. See the exact type and editable source.",
          },
          {
            name: "holder",
            type: "string",
            required: true,
            description:
              "holder supplied by the application. See the exact type and editable source.",
          },
          {
            name: "last4",
            type: "string",
            required: true,
            description:
              "last4 supplied by the application. See the exact type and editable source.",
          },
          {
            name: "expiry",
            type: "string",
            required: true,
            description:
              "expiry supplied by the application. See the exact type and editable source.",
          },
          {
            name: "backNote",
            type: "string | undefined",
            required: false,
            default:
              '"Your card details are managed securely by your payment provider."',
            description:
              "back Note supplied by the application. See the exact type and editable source.",
          },
          {
            name: "network",
            type: "string | undefined",
            required: false,
            default: '"CARD"',
            description:
              "network supplied by the application. See the exact type and editable source.",
          },
        ],
      },
    ],
    notes: [
      "Group and flip button name the card and state; sensitive data remains masked.",
      "CreditCard accepts brand, holder, last4, expiry, optional network and backNote. network is a display label, not payment processing.",
      "Native HTML attributes and event handlers are forwarded where declared by the part type. Your application owns data, destinations, persistence and localization.",
    ],
  },
  ticker: {
    parts: [
      {
        name: "Ticker",
        description:
          "Public Ticker part. Native semantics and composition follow the editable source.",
        props: [
          {
            name: "className",
            type: "string | undefined",
            required: false,
            description: "Additional classes on the rendered element.",
          },
          {
            name: "defaultValue",
            type: "string | number | readonly string[] | undefined",
            required: false,
            description: "Initial uncontrolled value.",
          },
          {
            name: "defaultChecked",
            type: "boolean | undefined",
            required: false,
            description: "Initial uncontrolled checked state.",
          },
          {
            name: "title",
            type: "string | undefined",
            required: false,
            description:
              "Visible heading or native title, according to the declared type.",
          },
          {
            name: "ref",
            type: "React.Ref<HTMLDivElement> | undefined",
            required: false,
            description: "Ref to the rendered element.",
          },
          {
            name: "key",
            type: "React.Key | null | undefined",
            required: false,
            description:
              "key supplied by the application. See the exact type and editable source.",
          },
          {
            name: "id",
            type: "string | undefined",
            required: false,
            description:
              "Stable element ID for label and description associations.",
          },
          {
            name: "role",
            type: "React.AriaRole | undefined",
            required: false,
            description:
              "role supplied by the application. See the exact type and editable source.",
          },
          {
            name: "aria-describedby",
            type: "string | undefined",
            required: false,
            description: "IDs of supporting descriptions.",
          },
          {
            name: "aria-invalid",
            type: 'boolean | "true" | "false" | "grammar" | "spelling" | undefined',
            required: false,
            description: "Marks invalid input alongside readable feedback.",
          },
          {
            name: "aria-label",
            type: "string | undefined",
            required: false,
            description:
              "Accessible name for an icon-only or otherwise unnamed control.",
          },
          {
            name: "onChange",
            type: "React.ChangeEventHandler<HTMLDivElement, Element> | undefined",
            required: false,
            description: "Native value change handler.",
          },
          {
            name: "onClick",
            type: "React.MouseEventHandler<HTMLDivElement> | undefined",
            required: false,
            description:
              "Native activation handler; respects the component disabled behavior.",
          },
          {
            name: "symbol",
            type: "string",
            required: true,
            description:
              "symbol supplied by the application. See the exact type and editable source.",
          },
          {
            name: "name",
            type: "string",
            required: true,
            description: "Native form field name.",
          },
          {
            name: "price",
            type: "number",
            required: true,
            description:
              "price supplied by the application. See the exact type and editable source.",
          },
          {
            name: "changePercent",
            type: "number",
            required: true,
            description:
              "change Percent supplied by the application. See the exact type and editable source.",
          },
          {
            name: "currency",
            type: "string | undefined",
            required: false,
            default: '"USD"',
            description:
              "currency supplied by the application. See the exact type and editable source.",
          },
          {
            name: "locale",
            type: "string | undefined",
            required: false,
            default: '"en-US"',
            description:
              "locale supplied by the application. See the exact type and editable source.",
          },
          {
            name: "high",
            type: "number | undefined",
            required: false,
            description:
              "high supplied by the application. See the exact type and editable source.",
          },
          {
            name: "low",
            type: "number | undefined",
            required: false,
            description:
              "low supplied by the application. See the exact type and editable source.",
          },
          {
            name: "layout",
            type: '"inline" | "card" | undefined',
            required: false,
            default: '"inline"',
            description:
              "layout supplied by the application. See the exact type and editable source.",
          },
        ],
      },
    ],
    notes: [
      "Accessible button reads direction and magnitude in words, not color alone.",
      "Ticker accepts symbol, name, price, changePercent, currency, locale, high, low and layout (inline or card).",
      "Native HTML attributes and event handlers are forwarded where declared by the part type. Your application owns data, destinations, persistence and localization.",
    ],
  },
  stories: {
    parts: [
      {
        name: "Stories",
        description:
          "Public Stories part. Native semantics and composition follow the editable source.",
        props: [
          {
            name: "className",
            type: "string | undefined",
            required: false,
            description: "Additional classes on the rendered element.",
          },
          {
            name: "defaultValue",
            type: "string | number | readonly string[] | undefined",
            required: false,
            description: "Initial uncontrolled value.",
          },
          {
            name: "defaultChecked",
            type: "boolean | undefined",
            required: false,
            description: "Initial uncontrolled checked state.",
          },
          {
            name: "title",
            type: "string | undefined",
            required: false,
            description:
              "Visible heading or native title, according to the declared type.",
          },
          {
            name: "ref",
            type: "React.Ref<HTMLDivElement> | undefined",
            required: false,
            description: "Ref to the rendered element.",
          },
          {
            name: "key",
            type: "React.Key | null | undefined",
            required: false,
            description:
              "key supplied by the application. See the exact type and editable source.",
          },
          {
            name: "id",
            type: "string | undefined",
            required: false,
            description:
              "Stable element ID for label and description associations.",
          },
          {
            name: "role",
            type: "React.AriaRole | undefined",
            required: false,
            description:
              "role supplied by the application. See the exact type and editable source.",
          },
          {
            name: "aria-describedby",
            type: "string | undefined",
            required: false,
            description: "IDs of supporting descriptions.",
          },
          {
            name: "aria-invalid",
            type: 'boolean | "true" | "false" | "grammar" | "spelling" | undefined',
            required: false,
            description: "Marks invalid input alongside readable feedback.",
          },
          {
            name: "aria-label",
            type: "string | undefined",
            required: false,
            description:
              "Accessible name for an icon-only or otherwise unnamed control.",
          },
          {
            name: "onChange",
            type: "React.ChangeEventHandler<HTMLDivElement, Element> | undefined",
            required: false,
            description: "Native value change handler.",
          },
          {
            name: "onClick",
            type: "React.MouseEventHandler<HTMLDivElement> | undefined",
            required: false,
            description:
              "Native activation handler; respects the component disabled behavior.",
          },
          {
            name: "items",
            type: "StoryItem[]",
            required: true,
            description:
              "items supplied by the application. See the exact type and editable source.",
          },
          {
            name: "autoAdvanceMs",
            type: "number | undefined",
            required: false,
            description:
              "auto Advance Ms supplied by the application. See the exact type and editable source.",
          },
          {
            name: "presentation",
            type: '"triggers" | "viewer" | undefined',
            required: false,
            default: '"triggers"',
            description:
              "presentation supplied by the application. See the exact type and editable source.",
          },
        ],
      },
    ],
    notes: [
      "Radix dialog restores focus on close; previous, next and pause controls are named; auto advance respects reduced motion.",
      "Stories accepts items with optional video poster, autoAdvanceMs and presentation (triggers or viewer).",
      "Native HTML attributes and event handlers are forwarded where declared by the part type. Your application owns data, destinations, persistence and localization.",
    ],
    links: [
      {
        label: "Radix dialog API",
        href: "https://www.radix-ui.com/primitives/docs/components/dialog",
      },
    ],
  },
  reel: {
    parts: [
      {
        name: "Reel",
        description:
          "Public Reel part. Native semantics and composition follow the editable source.",
        props: [
          {
            name: "className",
            type: "string | undefined",
            required: false,
            description: "Additional classes on the rendered element.",
          },
          {
            name: "defaultValue",
            type: "string | number | readonly string[] | undefined",
            required: false,
            description: "Initial uncontrolled value.",
          },
          {
            name: "defaultChecked",
            type: "boolean | undefined",
            required: false,
            description: "Initial uncontrolled checked state.",
          },
          {
            name: "title",
            type: "string | undefined",
            required: false,
            description:
              "Visible heading or native title, according to the declared type.",
          },
          {
            name: "ref",
            type: "React.Ref<HTMLDivElement> | undefined",
            required: false,
            description: "Ref to the rendered element.",
          },
          {
            name: "key",
            type: "React.Key | null | undefined",
            required: false,
            description:
              "key supplied by the application. See the exact type and editable source.",
          },
          {
            name: "id",
            type: "string | undefined",
            required: false,
            description:
              "Stable element ID for label and description associations.",
          },
          {
            name: "role",
            type: "React.AriaRole | undefined",
            required: false,
            description:
              "role supplied by the application. See the exact type and editable source.",
          },
          {
            name: "aria-describedby",
            type: "string | undefined",
            required: false,
            description: "IDs of supporting descriptions.",
          },
          {
            name: "aria-invalid",
            type: 'boolean | "true" | "false" | "grammar" | "spelling" | undefined',
            required: false,
            description: "Marks invalid input alongside readable feedback.",
          },
          {
            name: "aria-label",
            type: "string | undefined",
            required: false,
            description:
              "Accessible name for an icon-only or otherwise unnamed control.",
          },
          {
            name: "onChange",
            type: "React.ChangeEventHandler<HTMLDivElement, Element> | undefined",
            required: false,
            description: "Native value change handler.",
          },
          {
            name: "onClick",
            type: "React.MouseEventHandler<HTMLDivElement> | undefined",
            required: false,
            description:
              "Native activation handler; respects the component disabled behavior.",
          },
          {
            name: "items",
            type: "ReelItem[]",
            required: true,
            description:
              "items supplied by the application. See the exact type and editable source.",
          },
        ],
      },
    ],
    notes: [
      "Up/down arrows and explicit buttons move the feed; reduced motion starts paused and manual play remains available.",
      "Reel accepts video items with src, title, author, poster and caption.",
      "Native HTML attributes and event handlers are forwarded where declared by the part type. Your application owns data, destinations, persistence and localization.",
    ],
  },
  "video-player": {
    parts: [
      {
        name: "VideoPlayer",
        description:
          "Public VideoPlayer part. Native semantics and composition follow the editable source.",
        props: [
          {
            name: "className",
            type: "string | undefined",
            required: false,
            description: "Additional classes on the rendered element.",
          },
          {
            name: "defaultValue",
            type: "string | number | readonly string[] | undefined",
            required: false,
            description: "Initial uncontrolled value.",
          },
          {
            name: "defaultChecked",
            type: "boolean | undefined",
            required: false,
            description: "Initial uncontrolled checked state.",
          },
          {
            name: "title",
            type: "string",
            required: true,
            description:
              "Visible heading or native title, according to the declared type.",
          },
          {
            name: "ref",
            type: "React.Ref<HTMLDivElement> | undefined",
            required: false,
            description: "Ref to the rendered element.",
          },
          {
            name: "key",
            type: "React.Key | null | undefined",
            required: false,
            description:
              "key supplied by the application. See the exact type and editable source.",
          },
          {
            name: "id",
            type: "string | undefined",
            required: false,
            description:
              "Stable element ID for label and description associations.",
          },
          {
            name: "role",
            type: "React.AriaRole | undefined",
            required: false,
            description:
              "role supplied by the application. See the exact type and editable source.",
          },
          {
            name: "aria-describedby",
            type: "string | undefined",
            required: false,
            description: "IDs of supporting descriptions.",
          },
          {
            name: "aria-invalid",
            type: 'boolean | "true" | "false" | "grammar" | "spelling" | undefined',
            required: false,
            description: "Marks invalid input alongside readable feedback.",
          },
          {
            name: "aria-label",
            type: "string | undefined",
            required: false,
            description:
              "Accessible name for an icon-only or otherwise unnamed control.",
          },
          {
            name: "onChange",
            type: "React.ChangeEventHandler<HTMLDivElement, Element> | undefined",
            required: false,
            description: "Native value change handler.",
          },
          {
            name: "onClick",
            type: "React.MouseEventHandler<HTMLDivElement> | undefined",
            required: false,
            description:
              "Native activation handler; respects the component disabled behavior.",
          },
          {
            name: "src",
            type: "string",
            required: true,
            description: "Application-owned media or image URL.",
          },
          {
            name: "poster",
            type: "string | undefined",
            required: false,
            description:
              "poster supplied by the application. See the exact type and editable source.",
          },
          {
            name: "captionsSrc",
            type: "string | undefined",
            required: false,
            description:
              "captions Src supplied by the application. See the exact type and editable source.",
          },
          {
            name: "captionsLang",
            type: "string | undefined",
            required: false,
            description:
              "captions Lang supplied by the application. See the exact type and editable source.",
          },
          {
            name: "captionsLabel",
            type: "string | undefined",
            required: false,
            description:
              "captions Label supplied by the application. See the exact type and editable source.",
          },
        ],
      },
    ],
    notes: [
      "Named controls, visible focus and disabled seek before finite metadata. Provide captions for speech. Native controls work before hydration/without JavaScript; media errors expose retry.",
      "VideoPlayer accepts src, title, poster, captionsSrc, captionsLang (default en), captionsLabel and native root div props/ref. Source changes reset playback state. Fullscreen is exposed when the browser supports it. Keep transcripts and media URL authentication in your app.",
      "Native HTML attributes and event handlers are forwarded where declared by the part type. Your application owns data, destinations, persistence and localization.",
    ],
  },
  announcement: {
    parts: [
      {
        name: "Announcement",
        description:
          "Public Announcement part. Native semantics and composition follow the editable source.",
        props: [
          {
            name: "ref",
            type: "React.Ref<HTMLDivElement> | undefined",
            required: false,
            description: "Ref to the rendered element.",
          },
          {
            name: "key",
            type: "React.Key | null | undefined",
            required: false,
            description:
              "key supplied by the application. See the exact type and editable source.",
          },
          {
            name: "defaultChecked",
            type: "boolean | undefined",
            required: false,
            description: "Initial uncontrolled checked state.",
          },
          {
            name: "defaultValue",
            type: "string | number | readonly string[] | undefined",
            required: false,
            description: "Initial uncontrolled value.",
          },
          {
            name: "className",
            type: "string | undefined",
            required: false,
            description: "Additional classes on the rendered element.",
          },
          {
            name: "id",
            type: "string | undefined",
            required: false,
            description:
              "Stable element ID for label and description associations.",
          },
          {
            name: "title",
            type: "string",
            required: true,
            description:
              "Visible heading or native title, according to the declared type.",
          },
          {
            name: "role",
            type: "React.AriaRole | undefined",
            required: false,
            description:
              "role supplied by the application. See the exact type and editable source.",
          },
          {
            name: "aria-describedby",
            type: "string | undefined",
            required: false,
            description: "IDs of supporting descriptions.",
          },
          {
            name: "aria-invalid",
            type: 'boolean | "true" | "false" | "grammar" | "spelling" | undefined',
            required: false,
            description: "Marks invalid input alongside readable feedback.",
          },
          {
            name: "aria-label",
            type: "string | undefined",
            required: false,
            description:
              "Accessible name for an icon-only or otherwise unnamed control.",
          },
          {
            name: "children",
            type: "React.ReactNode",
            required: false,
            description: "Content composed inside this part.",
          },
          {
            name: "onChange",
            type: "React.ChangeEventHandler<HTMLDivElement, Element> | undefined",
            required: false,
            description: "Native value change handler.",
          },
          {
            name: "onClick",
            type: "React.MouseEventHandler<HTMLDivElement> | undefined",
            required: false,
            description:
              "Native activation handler; respects the component disabled behavior.",
          },
          {
            name: "label",
            type: "string | undefined",
            required: false,
            description:
              "Visible or accessible name. Provide a meaningful application label.",
          },
          {
            name: "dismissible",
            type: "boolean | undefined",
            required: false,
            default: "false",
            description:
              "dismissible supplied by the application. See the exact type and editable source.",
          },
          {
            name: "onDismiss",
            type: "(() => void) | undefined",
            required: false,
            description:
              "Receives dismiss updates using the exact callback signature below. Application data stays app-owned.",
          },
        ],
      },
    ],
    notes: [
      "Link and dismiss button have separate names; status text is visible.",
      "Announcement accepts label, title, href, dismissible and onDismiss.",
      "Native HTML attributes and event handlers are forwarded where declared by the part type. Your application owns data, destinations, persistence and localization.",
    ],
  },
  banner: {
    parts: [
      {
        name: "Banner",
        description:
          "Public Banner part. Native semantics and composition follow the editable source.",
        props: [
          {
            name: "ref",
            type: "React.Ref<HTMLElement> | undefined",
            required: false,
            description: "Ref to the rendered element.",
          },
          {
            name: "key",
            type: "React.Key | null | undefined",
            required: false,
            description:
              "key supplied by the application. See the exact type and editable source.",
          },
          {
            name: "defaultChecked",
            type: "boolean | undefined",
            required: false,
            description: "Initial uncontrolled checked state.",
          },
          {
            name: "defaultValue",
            type: "string | number | readonly string[] | undefined",
            required: false,
            description: "Initial uncontrolled value.",
          },
          {
            name: "className",
            type: "string | undefined",
            required: false,
            description: "Additional classes on the rendered element.",
          },
          {
            name: "id",
            type: "string | undefined",
            required: false,
            description:
              "Stable element ID for label and description associations.",
          },
          {
            name: "title",
            type: "string",
            required: true,
            description:
              "Visible heading or native title, according to the declared type.",
          },
          {
            name: "role",
            type: "React.AriaRole | undefined",
            required: false,
            description:
              "role supplied by the application. See the exact type and editable source.",
          },
          {
            name: "aria-describedby",
            type: "string | undefined",
            required: false,
            description: "IDs of supporting descriptions.",
          },
          {
            name: "aria-invalid",
            type: 'boolean | "true" | "false" | "grammar" | "spelling" | undefined',
            required: false,
            description: "Marks invalid input alongside readable feedback.",
          },
          {
            name: "aria-label",
            type: "string | undefined",
            required: false,
            description:
              "Accessible name for an icon-only or otherwise unnamed control.",
          },
          {
            name: "children",
            type: "React.ReactNode",
            required: false,
            description: "Content composed inside this part.",
          },
          {
            name: "onChange",
            type: "React.ChangeEventHandler<HTMLElement, Element> | undefined",
            required: false,
            description: "Native value change handler.",
          },
          {
            name: "onClick",
            type: "React.MouseEventHandler<HTMLElement> | undefined",
            required: false,
            description:
              "Native activation handler; respects the component disabled behavior.",
          },
          {
            name: "description",
            type: "string",
            required: true,
            description:
              "description supplied by the application. See the exact type and editable source.",
          },
          {
            name: "action",
            type: "React.ReactNode",
            required: false,
            description:
              "action supplied by the application. See the exact type and editable source.",
          },
          {
            name: "tone",
            type: '"prominent" | "subtle" | undefined',
            required: false,
            default: '"prominent"',
            description:
              "tone supplied by the application. See the exact type and editable source.",
          },
          {
            name: "dismissible",
            type: "boolean | undefined",
            required: false,
            default: "false",
            description:
              "dismissible supplied by the application. See the exact type and editable source.",
          },
          {
            name: "onDismiss",
            type: "(() => void) | undefined",
            required: false,
            description:
              "Receives dismiss updates using the exact callback signature below. Application data stays app-owned.",
          },
        ],
      },
    ],
    notes: [
      "Named section heading and distinct action/close controls; dismiss control keeps visible focus in both tones.",
      "Banner accepts title, description, action, tone (prominent or subtle), dismissible and onDismiss. Choose an action style with contrast against the selected tone.",
      "Native HTML attributes and event handlers are forwarded where declared by the part type. Your application owns data, destinations, persistence and localization.",
    ],
  },
  "color-picker": {
    parts: [
      {
        name: "ColorPicker",
        description:
          "Public ColorPicker part. Native semantics and composition follow the editable source.",
        props: [
          {
            name: "className",
            type: "string | undefined",
            required: false,
            description: "Additional classes on the rendered element.",
          },
          {
            name: "defaultChecked",
            type: "boolean | undefined",
            required: false,
            description: "Initial uncontrolled checked state.",
          },
          {
            name: "title",
            type: "string | undefined",
            required: false,
            description:
              "Visible heading or native title, according to the declared type.",
          },
          {
            name: "ref",
            type: "React.Ref<HTMLDivElement> | undefined",
            required: false,
            description: "Ref to the rendered element.",
          },
          {
            name: "key",
            type: "React.Key | null | undefined",
            required: false,
            description:
              "key supplied by the application. See the exact type and editable source.",
          },
          {
            name: "id",
            type: "string | undefined",
            required: false,
            description:
              "Stable element ID for label and description associations.",
          },
          {
            name: "role",
            type: "React.AriaRole | undefined",
            required: false,
            description:
              "role supplied by the application. See the exact type and editable source.",
          },
          {
            name: "aria-describedby",
            type: "string | undefined",
            required: false,
            description: "IDs of supporting descriptions.",
          },
          {
            name: "aria-invalid",
            type: 'boolean | "true" | "false" | "grammar" | "spelling" | undefined',
            required: false,
            description: "Marks invalid input alongside readable feedback.",
          },
          {
            name: "aria-label",
            type: "string | undefined",
            required: false,
            description:
              "Accessible name for an icon-only or otherwise unnamed control.",
          },
          {
            name: "children",
            type: "React.ReactNode",
            required: false,
            description: "Content composed inside this part.",
          },
          {
            name: "onClick",
            type: "React.MouseEventHandler<HTMLDivElement> | undefined",
            required: false,
            description:
              "Native activation handler; respects the component disabled behavior.",
          },
          {
            name: "label",
            type: "string",
            required: true,
            description:
              "Visible or accessible name. Provide a meaningful application label.",
          },
          {
            name: "value",
            type: "string | undefined",
            required: false,
            description:
              "Controlled value. Update it through the matching change callback.",
          },
          {
            name: "defaultValue",
            type: "string | undefined",
            required: false,
            description: "Initial uncontrolled value.",
          },
          {
            name: "onValueChange",
            type: "((hex: string) => void) | undefined",
            required: false,
            description:
              "Receives value change updates using the exact callback signature below. Application data stays app-owned.",
          },
          {
            name: "swatches",
            type: "string[] | undefined",
            required: false,
            default: "[]",
            description:
              "swatches supplied by the application. See the exact type and editable source.",
          },
          {
            name: "disabled",
            type: "boolean | undefined",
            required: false,
            description: "Disables the control or the documented interaction.",
          },
        ],
      },
    ],
    notes: [
      "Plane has equivalent named numeric controls; native sliders handle arrows; HEX entry validates; presets are named buttons.",
      "ColorPicker accepts label, value/defaultValue, onValueChange, swatches and disabled. onValueChange emits #RRGGBB when opaque and #RRGGBBAA when translucent; RGB/HSL are read-only display formats.",
      "Native HTML attributes and event handlers are forwarded where declared by the part type. Your application owns data, destinations, persistence and localization.",
    ],
  },
  comparison: {
    parts: [
      {
        name: "Comparison",
        description:
          "Public Comparison part. Native semantics and composition follow the editable source.",
        props: [
          {
            name: "className",
            type: "string | undefined",
            required: false,
            description: "Additional classes on the rendered element.",
          },
          {
            name: "defaultValue",
            type: "number | (readonly string[] & number) | undefined",
            required: false,
            default: "50",
            description: "Initial uncontrolled value.",
          },
          {
            name: "defaultChecked",
            type: "boolean | undefined",
            required: false,
            description: "Initial uncontrolled checked state.",
          },
          {
            name: "title",
            type: "string | undefined",
            required: false,
            description:
              "Visible heading or native title, according to the declared type.",
          },
          {
            name: "ref",
            type: "React.Ref<HTMLDivElement> | undefined",
            required: false,
            description: "Ref to the rendered element.",
          },
          {
            name: "key",
            type: "React.Key | null | undefined",
            required: false,
            description:
              "key supplied by the application. See the exact type and editable source.",
          },
          {
            name: "id",
            type: "string | undefined",
            required: false,
            description:
              "Stable element ID for label and description associations.",
          },
          {
            name: "role",
            type: "React.AriaRole | undefined",
            required: false,
            description:
              "role supplied by the application. See the exact type and editable source.",
          },
          {
            name: "aria-describedby",
            type: "string | undefined",
            required: false,
            description: "IDs of supporting descriptions.",
          },
          {
            name: "aria-invalid",
            type: 'boolean | "true" | "false" | "grammar" | "spelling" | undefined',
            required: false,
            description: "Marks invalid input alongside readable feedback.",
          },
          {
            name: "aria-label",
            type: "string | undefined",
            required: false,
            description:
              "Accessible name for an icon-only or otherwise unnamed control.",
          },
          {
            name: "children",
            type: "React.ReactNode",
            required: false,
            description: "Content composed inside this part.",
          },
          {
            name: "onClick",
            type: "React.MouseEventHandler<HTMLDivElement> | undefined",
            required: false,
            description:
              "Native activation handler; respects the component disabled behavior.",
          },
          {
            name: "beforeSrc",
            type: "string",
            required: true,
            description:
              "before Src supplied by the application. See the exact type and editable source.",
          },
          {
            name: "afterSrc",
            type: "string",
            required: true,
            description:
              "after Src supplied by the application. See the exact type and editable source.",
          },
          {
            name: "beforeAlt",
            type: "string",
            required: true,
            description:
              "before Alt supplied by the application. See the exact type and editable source.",
          },
          {
            name: "afterAlt",
            type: "string",
            required: true,
            description:
              "after Alt supplied by the application. See the exact type and editable source.",
          },
          {
            name: "value",
            type: "number | undefined",
            required: false,
            description:
              "Controlled value. Update it through the matching change callback.",
          },
          {
            name: "onValueChange",
            type: "((value: number) => void) | undefined",
            required: false,
            description:
              "Receives value change updates using the exact callback signature below. Application data stays app-owned.",
          },
        ],
      },
    ],
    notes: [
      "Native range supports arrow keys and announces the visible percentage.",
      "Comparison accepts beforeSrc/afterSrc, alt texts, value/defaultValue and onValueChange.",
      "Native HTML attributes and event handlers are forwarded where declared by the part type. Your application owns data, destinations, persistence and localization.",
    ],
  },
  deck: {
    parts: [
      {
        name: "Deck",
        description:
          "Public Deck part. Native semantics and composition follow the editable source.",
        props: [
          {
            name: "className",
            type: "string | undefined",
            required: false,
            description: "Additional classes on the rendered element.",
          },
          {
            name: "defaultValue",
            type: "string | number | readonly string[] | undefined",
            required: false,
            description: "Initial uncontrolled value.",
          },
          {
            name: "defaultChecked",
            type: "boolean | undefined",
            required: false,
            description: "Initial uncontrolled checked state.",
          },
          {
            name: "title",
            type: "string | undefined",
            required: false,
            description:
              "Visible heading or native title, according to the declared type.",
          },
          {
            name: "ref",
            type: "React.Ref<HTMLElement> | undefined",
            required: false,
            description: "Ref to the rendered element.",
          },
          {
            name: "key",
            type: "React.Key | null | undefined",
            required: false,
            description:
              "key supplied by the application. See the exact type and editable source.",
          },
          {
            name: "id",
            type: "string | undefined",
            required: false,
            description:
              "Stable element ID for label and description associations.",
          },
          {
            name: "role",
            type: "React.AriaRole | undefined",
            required: false,
            description:
              "role supplied by the application. See the exact type and editable source.",
          },
          {
            name: "aria-describedby",
            type: "string | undefined",
            required: false,
            description: "IDs of supporting descriptions.",
          },
          {
            name: "aria-invalid",
            type: 'boolean | "true" | "false" | "grammar" | "spelling" | undefined',
            required: false,
            description: "Marks invalid input alongside readable feedback.",
          },
          {
            name: "aria-label",
            type: "string | undefined",
            required: false,
            description:
              "Accessible name for an icon-only or otherwise unnamed control.",
          },
          {
            name: "onChange",
            type: "React.ChangeEventHandler<HTMLElement, Element> | undefined",
            required: false,
            description: "Native value change handler.",
          },
          {
            name: "onClick",
            type: "React.MouseEventHandler<HTMLElement> | undefined",
            required: false,
            description:
              "Native activation handler; respects the component disabled behavior.",
          },
          {
            name: "slides",
            type: "DeckSlide[]",
            required: true,
            description:
              "slides supplied by the application. See the exact type and editable source.",
          },
          {
            name: "onSlideChange",
            type: "((index: number) => void) | undefined",
            required: false,
            description:
              "Receives slide change updates using the exact callback signature below. Application data stays app-owned.",
          },
        ],
      },
    ],
    notes: [
      "Arrow keys and named buttons navigate; live count announces position.",
      "Deck accepts slides and onSlideChange.",
      "Native HTML attributes and event handlers are forwarded where declared by the part type. Your application owns data, destinations, persistence and localization.",
    ],
  },
  "dialog-stack": {
    parts: [
      {
        name: "DialogStack",
        description:
          "Public DialogStack part. Native semantics and composition follow the editable source.",
        props: [
          {
            name: "triggerLabel",
            type: "string",
            required: true,
            description:
              "trigger Label supplied by the application. See the exact type and editable source.",
          },
          {
            name: "pages",
            type: "DialogStackPage[]",
            required: true,
            description:
              "pages supplied by the application. See the exact type and editable source.",
          },
          {
            name: "onFinish",
            type: "(() => void) | undefined",
            required: false,
            description:
              "Receives finish updates using the exact callback signature below. Application data stays app-owned.",
          },
          {
            name: "className",
            type: "string | undefined",
            required: false,
            description: "Additional classes on the rendered element.",
          },
        ],
      },
    ],
    notes: [
      "Radix traps focus and restores it on close; each step has a title and the current step count is visible.",
      "DialogStack accepts triggerLabel, pages and onFinish. Keep step data in the parent when moving back and forth.",
      "Native HTML attributes and event handlers are forwarded where declared by the part type. Your application owns data, destinations, persistence and localization.",
    ],
    links: [
      {
        label: "Radix dialog API",
        href: "https://www.radix-ui.com/primitives/docs/components/dialog",
      },
    ],
  },
  editor: {
    parts: [
      {
        name: "Editor",
        description:
          "Public Editor part. Native semantics and composition follow the editable source.",
        props: [
          {
            name: "className",
            type: "string | undefined",
            required: false,
            description: "Additional classes on the rendered element.",
          },
          {
            name: "defaultValue",
            type: "string | number | readonly string[] | undefined",
            required: false,
            description: "Initial uncontrolled value.",
          },
          {
            name: "defaultChecked",
            type: "boolean | undefined",
            required: false,
            description: "Initial uncontrolled checked state.",
          },
          {
            name: "title",
            type: "string | undefined",
            required: false,
            description:
              "Visible heading or native title, according to the declared type.",
          },
          {
            name: "ref",
            type: "React.Ref<HTMLDivElement> | undefined",
            required: false,
            description: "Ref to the rendered element.",
          },
          {
            name: "key",
            type: "React.Key | null | undefined",
            required: false,
            description:
              "key supplied by the application. See the exact type and editable source.",
          },
          {
            name: "id",
            type: "string | undefined",
            required: false,
            description:
              "Stable element ID for label and description associations.",
          },
          {
            name: "role",
            type: "React.AriaRole | undefined",
            required: false,
            description:
              "role supplied by the application. See the exact type and editable source.",
          },
          {
            name: "aria-describedby",
            type: "string | undefined",
            required: false,
            description: "IDs of supporting descriptions.",
          },
          {
            name: "aria-invalid",
            type: 'boolean | "true" | "false" | "grammar" | "spelling" | undefined',
            required: false,
            description: "Marks invalid input alongside readable feedback.",
          },
          {
            name: "aria-label",
            type: "string | undefined",
            required: false,
            description:
              "Accessible name for an icon-only or otherwise unnamed control.",
          },
          {
            name: "children",
            type: "React.ReactNode",
            required: false,
            description: "Content composed inside this part.",
          },
          {
            name: "onClick",
            type: "React.MouseEventHandler<HTMLDivElement> | undefined",
            required: false,
            description:
              "Native activation handler; respects the component disabled behavior.",
          },
          {
            name: "label",
            type: "string",
            required: true,
            description:
              "Visible or accessible name. Provide a meaningful application label.",
          },
          {
            name: "initialContent",
            type: "string | undefined",
            required: false,
            default: '""',
            description:
              "initial Content supplied by the application. See the exact type and editable source.",
          },
          {
            name: "onChange",
            type: "((html: string) => void) | undefined",
            required: false,
            description: "Native value change handler.",
          },
          {
            name: "readOnly",
            type: "boolean | undefined",
            required: false,
            default: "false",
            description:
              "read Only supplied by the application. See the exact type and editable source.",
          },
        ],
      },
    ],
    notes: [
      "Named textbox and formatting toolbar; Tiptap handles editing commands.",
      "Editor accepts label, initialContent, onChange(html) and readOnly. Toolbar includes headings, strong/emphasis, lists and quote. Supply trusted initial HTML.",
      "Native HTML attributes and event handlers are forwarded where declared by the part type. Your application owns data, destinations, persistence and localization.",
    ],
    links: [
      {
        label: "Tiptap API",
        href: "https://tiptap.dev/docs",
      },
    ],
  },
  glimpse: {
    parts: [
      {
        name: "Glimpse",
        description:
          "Public Glimpse part. Native semantics and composition follow the editable source.",
        props: [
          {
            name: "label",
            type: "string",
            required: true,
            description:
              "Visible or accessible name. Provide a meaningful application label.",
          },
          {
            name: "title",
            type: "string",
            required: true,
            description:
              "Visible heading or native title, according to the declared type.",
          },
          {
            name: "description",
            type: "string",
            required: true,
            description:
              "description supplied by the application. See the exact type and editable source.",
          },
          {
            name: "imageSrc",
            type: "string | undefined",
            required: false,
            description:
              "image Src supplied by the application. See the exact type and editable source.",
          },
          {
            name: "imageAlt",
            type: "string | undefined",
            required: false,
            default: '""',
            description:
              "image Alt supplied by the application. See the exact type and editable source.",
          },
          {
            name: "className",
            type: "string | undefined",
            required: false,
            description: "Additional classes on the rendered element.",
          },
        ],
      },
    ],
    notes: [
      "The link remains usable alone; Base UI exposes preview on pointer and keyboard focus.",
      "Glimpse accepts href, label, title, description and optional imageSrc/imageAlt.",
      "Native HTML attributes and event handlers are forwarded where declared by the part type. Your application owns data, destinations, persistence and localization.",
    ],
  },
  marquee: {
    parts: [
      {
        name: "Marquee",
        description:
          "Public Marquee part. Native semantics and composition follow the editable source.",
        props: [
          {
            name: "className",
            type: "string | undefined",
            required: false,
            description: "Additional classes on the rendered element.",
          },
          {
            name: "defaultValue",
            type: "string | number | readonly string[] | undefined",
            required: false,
            description: "Initial uncontrolled value.",
          },
          {
            name: "defaultChecked",
            type: "boolean | undefined",
            required: false,
            description: "Initial uncontrolled checked state.",
          },
          {
            name: "title",
            type: "string | undefined",
            required: false,
            description:
              "Visible heading or native title, according to the declared type.",
          },
          {
            name: "ref",
            type: "React.Ref<HTMLDivElement> | undefined",
            required: false,
            description: "Ref to the rendered element.",
          },
          {
            name: "key",
            type: "React.Key | null | undefined",
            required: false,
            description:
              "key supplied by the application. See the exact type and editable source.",
          },
          {
            name: "id",
            type: "string | undefined",
            required: false,
            description:
              "Stable element ID for label and description associations.",
          },
          {
            name: "role",
            type: "React.AriaRole | undefined",
            required: false,
            description:
              "role supplied by the application. See the exact type and editable source.",
          },
          {
            name: "aria-describedby",
            type: "string | undefined",
            required: false,
            description: "IDs of supporting descriptions.",
          },
          {
            name: "aria-invalid",
            type: 'boolean | "true" | "false" | "grammar" | "spelling" | undefined',
            required: false,
            description: "Marks invalid input alongside readable feedback.",
          },
          {
            name: "aria-label",
            type: "string | undefined",
            required: false,
            description:
              "Accessible name for an icon-only or otherwise unnamed control.",
          },
          {
            name: "onChange",
            type: "React.ChangeEventHandler<HTMLDivElement, Element> | undefined",
            required: false,
            description: "Native value change handler.",
          },
          {
            name: "onClick",
            type: "React.MouseEventHandler<HTMLDivElement> | undefined",
            required: false,
            description:
              "Native activation handler; respects the component disabled behavior.",
          },
          {
            name: "items",
            type: "React.ReactNode[]",
            required: true,
            description:
              "items supplied by the application. See the exact type and editable source.",
          },
          {
            name: "label",
            type: "string",
            required: true,
            description:
              "Visible or accessible name. Provide a meaningful application label.",
          },
          {
            name: "duration",
            type: "number | undefined",
            required: false,
            description:
              "Explicit Motion duration override; reduced motion takes precedence.",
          },
        ],
      },
    ],
    notes: [
      "Duplicate content is hidden from assistive technology; motion stops and pause control is disabled under reduced-motion preference.",
      "Marquee accepts items, label and optional duration in seconds; the default reads cycle-marquee. Motion repetition pauses on hover, on request, offscreen and when the document is hidden.",
      "Native HTML attributes and event handlers are forwarded where declared by the part type. Your application owns data, destinations, persistence and localization.",
    ],
  },
  pill: {
    parts: [
      {
        name: "Pill",
        description:
          "Public Pill part. Native semantics and composition follow the editable source.",
        props: [
          {
            name: "className",
            type: "string | undefined",
            required: false,
            description: "Additional classes on the rendered element.",
          },
          {
            name: "defaultValue",
            type: "string | number | readonly string[] | undefined",
            required: false,
            description: "Initial uncontrolled value.",
          },
          {
            name: "defaultChecked",
            type: "boolean | undefined",
            required: false,
            description: "Initial uncontrolled checked state.",
          },
          {
            name: "title",
            type: "string | undefined",
            required: false,
            description:
              "Visible heading or native title, according to the declared type.",
          },
          {
            name: "ref",
            type: "React.Ref<HTMLSpanElement> | undefined",
            required: false,
            description: "Ref to the rendered element.",
          },
          {
            name: "key",
            type: "React.Key | null | undefined",
            required: false,
            description:
              "key supplied by the application. See the exact type and editable source.",
          },
          {
            name: "id",
            type: "string | undefined",
            required: false,
            description:
              "Stable element ID for label and description associations.",
          },
          {
            name: "role",
            type: "React.AriaRole | undefined",
            required: false,
            description:
              "role supplied by the application. See the exact type and editable source.",
          },
          {
            name: "aria-describedby",
            type: "string | undefined",
            required: false,
            description: "IDs of supporting descriptions.",
          },
          {
            name: "aria-invalid",
            type: 'boolean | "true" | "false" | "grammar" | "spelling" | undefined',
            required: false,
            description: "Marks invalid input alongside readable feedback.",
          },
          {
            name: "aria-label",
            type: "string | undefined",
            required: false,
            description:
              "Accessible name for an icon-only or otherwise unnamed control.",
          },
          {
            name: "onChange",
            type: "React.ChangeEventHandler<HTMLSpanElement, Element> | undefined",
            required: false,
            description: "Native value change handler.",
          },
          {
            name: "onClick",
            type: "React.MouseEventHandler<HTMLSpanElement> | undefined",
            required: false,
            description:
              "Native activation handler; respects the component disabled behavior.",
          },
          {
            name: "label",
            type: "string",
            required: true,
            description:
              "Visible or accessible name. Provide a meaningful application label.",
          },
          {
            name: "onRemove",
            type: "(() => void) | undefined",
            required: false,
            description:
              "Receives remove updates using the exact callback signature below. Application data stays app-owned.",
          },
          {
            name: "disabled",
            type: "boolean | undefined",
            required: false,
            description: "Disables the control or the documented interaction.",
          },
          {
            name: "leading",
            type: "React.ReactNode",
            required: false,
            description:
              "leading supplied by the application. See the exact type and editable source.",
          },
          {
            name: "trailing",
            type: "React.ReactNode",
            required: false,
            description:
              "trailing supplied by the application. See the exact type and editable source.",
          },
          {
            name: "tone",
            type: '"neutral" | "success" | "warning" | "danger" | undefined',
            required: false,
            default: '"neutral"',
            description:
              "tone supplied by the application. See the exact type and editable source.",
          },
        ],
      },
    ],
    notes: [
      "Visible text carries meaning beyond tone; remove button names the value and disabled blocks removal.",
      "Pill accepts label, leading, trailing, tone, onRemove and disabled. Decorative cues are hidden from assistive technology.",
      "Native HTML attributes and event handlers are forwarded where declared by the part type. Your application owns data, destinations, persistence and localization.",
    ],
  },
  "qr-code": {
    parts: [
      {
        name: "QRCode",
        description:
          "Public QRCode part. Native semantics and composition follow the editable source.",
        props: [
          {
            name: "className",
            type: "string | undefined",
            required: false,
            description: "Additional classes on the rendered element.",
          },
          {
            name: "defaultValue",
            type: "string | number | readonly string[] | undefined",
            required: false,
            description: "Initial uncontrolled value.",
          },
          {
            name: "defaultChecked",
            type: "boolean | undefined",
            required: false,
            description: "Initial uncontrolled checked state.",
          },
          {
            name: "title",
            type: "string | undefined",
            required: false,
            description:
              "Visible heading or native title, according to the declared type.",
          },
          {
            name: "ref",
            type: "React.Ref<HTMLDivElement> | undefined",
            required: false,
            description: "Ref to the rendered element.",
          },
          {
            name: "key",
            type: "React.Key | null | undefined",
            required: false,
            description:
              "key supplied by the application. See the exact type and editable source.",
          },
          {
            name: "id",
            type: "string | undefined",
            required: false,
            description:
              "Stable element ID for label and description associations.",
          },
          {
            name: "role",
            type: "React.AriaRole | undefined",
            required: false,
            description:
              "role supplied by the application. See the exact type and editable source.",
          },
          {
            name: "aria-describedby",
            type: "string | undefined",
            required: false,
            description: "IDs of supporting descriptions.",
          },
          {
            name: "aria-invalid",
            type: 'boolean | "true" | "false" | "grammar" | "spelling" | undefined',
            required: false,
            description: "Marks invalid input alongside readable feedback.",
          },
          {
            name: "aria-label",
            type: "string | undefined",
            required: false,
            description:
              "Accessible name for an icon-only or otherwise unnamed control.",
          },
          {
            name: "onChange",
            type: "React.ChangeEventHandler<HTMLDivElement, Element> | undefined",
            required: false,
            description: "Native value change handler.",
          },
          {
            name: "onClick",
            type: "React.MouseEventHandler<HTMLDivElement> | undefined",
            required: false,
            description:
              "Native activation handler; respects the component disabled behavior.",
          },
          {
            name: "value",
            type: "string",
            required: true,
            description:
              "Controlled value. Update it through the matching change callback.",
          },
          {
            name: "label",
            type: "string",
            required: true,
            description:
              "Visible or accessible name. Provide a meaningful application label.",
          },
          {
            name: "size",
            type: "number | undefined",
            required: false,
            default: "160",
            description: "Size declared by this part.",
          },
          {
            name: "showCopy",
            type: "boolean | undefined",
            required: false,
            default: "true",
            description:
              "show Copy supplied by the application. See the exact type and editable source.",
          },
        ],
      },
    ],
    notes: [
      "Image has a name and the encoded value remains available through copy action.",
      "QRCode accepts value, label, size and showCopy.",
      "Native HTML attributes and event handlers are forwarded where declared by the part type. Your application owns data, destinations, persistence and localization.",
    ],
    links: [
      {
        label: "qrcode.react API",
        href: "https://github.com/zpao/qrcode.react",
      },
    ],
  },
  rating: {
    parts: [
      {
        name: "Rating",
        description:
          "Public Rating part. Native semantics and composition follow the editable source.",
        props: [
          {
            name: "className",
            type: "string | undefined",
            required: false,
            description: "Additional classes on the rendered element.",
          },
          {
            name: "defaultChecked",
            type: "boolean | undefined",
            required: false,
            description: "Initial uncontrolled checked state.",
          },
          {
            name: "title",
            type: "string | undefined",
            required: false,
            description:
              "Visible heading or native title, according to the declared type.",
          },
          {
            name: "ref",
            type: "React.Ref<HTMLDivElement> | undefined",
            required: false,
            description: "Ref to the rendered element.",
          },
          {
            name: "key",
            type: "React.Key | null | undefined",
            required: false,
            description:
              "key supplied by the application. See the exact type and editable source.",
          },
          {
            name: "id",
            type: "string | undefined",
            required: false,
            description:
              "Stable element ID for label and description associations.",
          },
          {
            name: "role",
            type: "React.AriaRole | undefined",
            required: false,
            description:
              "role supplied by the application. See the exact type and editable source.",
          },
          {
            name: "aria-describedby",
            type: "string | undefined",
            required: false,
            description: "IDs of supporting descriptions.",
          },
          {
            name: "aria-invalid",
            type: 'boolean | "true" | "false" | "grammar" | "spelling" | undefined',
            required: false,
            description: "Marks invalid input alongside readable feedback.",
          },
          {
            name: "aria-label",
            type: "string | undefined",
            required: false,
            description:
              "Accessible name for an icon-only or otherwise unnamed control.",
          },
          {
            name: "children",
            type: "React.ReactNode",
            required: false,
            description: "Content composed inside this part.",
          },
          {
            name: "onClick",
            type: "React.MouseEventHandler<HTMLDivElement> | undefined",
            required: false,
            description:
              "Native activation handler; respects the component disabled behavior.",
          },
          {
            name: "label",
            type: "string",
            required: true,
            description:
              "Visible or accessible name. Provide a meaningful application label.",
          },
          {
            name: "value",
            type: "number | undefined",
            required: false,
            description:
              "Controlled value. Update it through the matching change callback.",
          },
          {
            name: "defaultValue",
            type: "number | undefined",
            required: false,
            default: "0",
            description: "Initial uncontrolled value.",
          },
          {
            name: "onValueChange",
            type: "((value: number) => void) | undefined",
            required: false,
            description:
              "Receives value change updates using the exact callback signature below. Application data stays app-owned.",
          },
          {
            name: "readOnly",
            type: "boolean | undefined",
            required: false,
            default: "false",
            description:
              "read Only supplied by the application. See the exact type and editable source.",
          },
        ],
      },
    ],
    notes: [
      "Editable arrows/Home/End move selection; read-only display announces one image label with the score.",
      "Rating accepts label, value/defaultValue, onValueChange, max and readOnly.",
      "Native HTML attributes and event handlers are forwarded where declared by the part type. Your application owns data, destinations, persistence and localization.",
    ],
  },
  "relative-time": {
    parts: [
      {
        name: "RelativeTime",
        description:
          "Public RelativeTime part. Native semantics and composition follow the editable source.",
        props: [
          {
            name: "className",
            type: "string | undefined",
            required: false,
            description: "Additional classes on the rendered element.",
          },
          {
            name: "defaultValue",
            type: "string | number | readonly string[] | undefined",
            required: false,
            description: "Initial uncontrolled value.",
          },
          {
            name: "defaultChecked",
            type: "boolean | undefined",
            required: false,
            description: "Initial uncontrolled checked state.",
          },
          {
            name: "title",
            type: "string | undefined",
            required: false,
            description:
              "Visible heading or native title, according to the declared type.",
          },
          {
            name: "ref",
            type: "React.Ref<HTMLTimeElement> | undefined",
            required: false,
            description: "Ref to the rendered element.",
          },
          {
            name: "key",
            type: "React.Key | null | undefined",
            required: false,
            description:
              "key supplied by the application. See the exact type and editable source.",
          },
          {
            name: "id",
            type: "string | undefined",
            required: false,
            description:
              "Stable element ID for label and description associations.",
          },
          {
            name: "role",
            type: "React.AriaRole | undefined",
            required: false,
            description:
              "role supplied by the application. See the exact type and editable source.",
          },
          {
            name: "aria-describedby",
            type: "string | undefined",
            required: false,
            description: "IDs of supporting descriptions.",
          },
          {
            name: "aria-invalid",
            type: 'boolean | "true" | "false" | "grammar" | "spelling" | undefined',
            required: false,
            description: "Marks invalid input alongside readable feedback.",
          },
          {
            name: "aria-label",
            type: "string | undefined",
            required: false,
            description:
              "Accessible name for an icon-only or otherwise unnamed control.",
          },
          {
            name: "children",
            type: "React.ReactNode",
            required: false,
            description: "Content composed inside this part.",
          },
          {
            name: "onChange",
            type: "React.ChangeEventHandler<HTMLTimeElement, Element> | undefined",
            required: false,
            description: "Native value change handler.",
          },
          {
            name: "onClick",
            type: "React.MouseEventHandler<HTMLTimeElement> | undefined",
            required: false,
            description:
              "Native activation handler; respects the component disabled behavior.",
          },
          {
            name: "date",
            type: "string | Date",
            required: true,
            description:
              "date supplied by the application. See the exact type and editable source.",
          },
          {
            name: "now",
            type: "Date | undefined",
            required: false,
            description:
              "now supplied by the application. See the exact type and editable source.",
          },
          {
            name: "locale",
            type: "string | undefined",
            required: false,
            default: '"en-US"',
            description:
              "locale supplied by the application. See the exact type and editable source.",
          },
        ],
      },
    ],
    notes: [
      "Full date and time are exposed alongside the relative phrase.",
      "RelativeTime accepts date, locale and optional now for deterministic display.",
      "Native HTML attributes and event handlers are forwarded where declared by the part type. Your application owns data, destinations, persistence and localization.",
    ],
  },
  status: {
    parts: [
      {
        name: "Status",
        description:
          "Public Status part. Native semantics and composition follow the editable source.",
        props: [
          {
            name: "className",
            type: "string | undefined",
            required: false,
            description: "Additional classes on the rendered element.",
          },
          {
            name: "defaultValue",
            type: "string | number | readonly string[] | undefined",
            required: false,
            description: "Initial uncontrolled value.",
          },
          {
            name: "defaultChecked",
            type: "boolean | undefined",
            required: false,
            description: "Initial uncontrolled checked state.",
          },
          {
            name: "title",
            type: "string | undefined",
            required: false,
            description:
              "Visible heading or native title, according to the declared type.",
          },
          {
            name: "ref",
            type: "React.Ref<HTMLSpanElement> | undefined",
            required: false,
            description: "Ref to the rendered element.",
          },
          {
            name: "key",
            type: "React.Key | null | undefined",
            required: false,
            description:
              "key supplied by the application. See the exact type and editable source.",
          },
          {
            name: "id",
            type: "string | undefined",
            required: false,
            description:
              "Stable element ID for label and description associations.",
          },
          {
            name: "role",
            type: "React.AriaRole | undefined",
            required: false,
            description:
              "role supplied by the application. See the exact type and editable source.",
          },
          {
            name: "aria-describedby",
            type: "string | undefined",
            required: false,
            description: "IDs of supporting descriptions.",
          },
          {
            name: "aria-invalid",
            type: 'boolean | "true" | "false" | "grammar" | "spelling" | undefined',
            required: false,
            description: "Marks invalid input alongside readable feedback.",
          },
          {
            name: "aria-label",
            type: "string | undefined",
            required: false,
            description:
              "Accessible name for an icon-only or otherwise unnamed control.",
          },
          {
            name: "onChange",
            type: "React.ChangeEventHandler<HTMLSpanElement, Element> | undefined",
            required: false,
            description: "Native value change handler.",
          },
          {
            name: "onClick",
            type: "React.MouseEventHandler<HTMLSpanElement> | undefined",
            required: false,
            description:
              "Native activation handler; respects the component disabled behavior.",
          },
          {
            name: "tone",
            type: "StatusTone | undefined",
            required: false,
            default: '"neutral"',
            description:
              "tone supplied by the application. See the exact type and editable source.",
          },
          {
            name: "label",
            type: "string | undefined",
            required: false,
            description:
              "Visible or accessible name. Provide a meaningful application label.",
          },
          {
            name: "children",
            type: "React.ReactNode",
            required: false,
            description: "Content composed inside this part.",
          },
        ],
      },
      {
        name: "StatusIndicator",
        description:
          "Public StatusIndicator part. Native semantics and composition follow the editable source.",
        props: [
          {
            name: "ref",
            type: "React.Ref<HTMLSpanElement> | undefined",
            required: false,
            description: "Ref to the rendered element.",
          },
          {
            name: "key",
            type: "React.Key | null | undefined",
            required: false,
            description:
              "key supplied by the application. See the exact type and editable source.",
          },
          {
            name: "defaultChecked",
            type: "boolean | undefined",
            required: false,
            description: "Initial uncontrolled checked state.",
          },
          {
            name: "defaultValue",
            type: "string | number | readonly string[] | undefined",
            required: false,
            description: "Initial uncontrolled value.",
          },
          {
            name: "className",
            type: "string | undefined",
            required: false,
            description: "Additional classes on the rendered element.",
          },
          {
            name: "id",
            type: "string | undefined",
            required: false,
            description:
              "Stable element ID for label and description associations.",
          },
          {
            name: "title",
            type: "string | undefined",
            required: false,
            description:
              "Visible heading or native title, according to the declared type.",
          },
          {
            name: "role",
            type: "React.AriaRole | undefined",
            required: false,
            description:
              "role supplied by the application. See the exact type and editable source.",
          },
          {
            name: "aria-describedby",
            type: "string | undefined",
            required: false,
            description: "IDs of supporting descriptions.",
          },
          {
            name: "aria-invalid",
            type: 'boolean | "true" | "false" | "grammar" | "spelling" | undefined',
            required: false,
            description: "Marks invalid input alongside readable feedback.",
          },
          {
            name: "aria-label",
            type: "string | undefined",
            required: false,
            description:
              "Accessible name for an icon-only or otherwise unnamed control.",
          },
          {
            name: "children",
            type: "React.ReactNode",
            required: false,
            description: "Content composed inside this part.",
          },
          {
            name: "onChange",
            type: "React.ChangeEventHandler<HTMLSpanElement, Element> | undefined",
            required: false,
            description: "Native value change handler.",
          },
          {
            name: "onClick",
            type: "React.MouseEventHandler<HTMLSpanElement> | undefined",
            required: false,
            description:
              "Native activation handler; respects the component disabled behavior.",
          },
          {
            name: "pulse",
            type: "boolean | undefined",
            required: false,
            default: "false",
            description:
              "pulse supplied by the application. See the exact type and editable source.",
          },
        ],
      },
      {
        name: "StatusLabel",
        description:
          "Public StatusLabel part. Native semantics and composition follow the editable source.",
        props: [
          {
            name: "ref",
            type: "React.Ref<HTMLSpanElement> | undefined",
            required: false,
            description: "Ref to the rendered element.",
          },
          {
            name: "key",
            type: "React.Key | null | undefined",
            required: false,
            description:
              "key supplied by the application. See the exact type and editable source.",
          },
          {
            name: "defaultChecked",
            type: "boolean | undefined",
            required: false,
            description: "Initial uncontrolled checked state.",
          },
          {
            name: "defaultValue",
            type: "string | number | readonly string[] | undefined",
            required: false,
            description: "Initial uncontrolled value.",
          },
          {
            name: "className",
            type: "string | undefined",
            required: false,
            description: "Additional classes on the rendered element.",
          },
          {
            name: "id",
            type: "string | undefined",
            required: false,
            description:
              "Stable element ID for label and description associations.",
          },
          {
            name: "title",
            type: "string | undefined",
            required: false,
            description:
              "Visible heading or native title, according to the declared type.",
          },
          {
            name: "role",
            type: "React.AriaRole | undefined",
            required: false,
            description:
              "role supplied by the application. See the exact type and editable source.",
          },
          {
            name: "aria-describedby",
            type: "string | undefined",
            required: false,
            description: "IDs of supporting descriptions.",
          },
          {
            name: "aria-invalid",
            type: 'boolean | "true" | "false" | "grammar" | "spelling" | undefined',
            required: false,
            description: "Marks invalid input alongside readable feedback.",
          },
          {
            name: "aria-label",
            type: "string | undefined",
            required: false,
            description:
              "Accessible name for an icon-only or otherwise unnamed control.",
          },
          {
            name: "children",
            type: "React.ReactNode",
            required: false,
            description: "Content composed inside this part.",
          },
          {
            name: "onChange",
            type: "React.ChangeEventHandler<HTMLSpanElement, Element> | undefined",
            required: false,
            description: "Native value change handler.",
          },
          {
            name: "onClick",
            type: "React.MouseEventHandler<HTMLSpanElement> | undefined",
            required: false,
            description:
              "Native activation handler; respects the component disabled behavior.",
          },
        ],
      },
    ],
    notes: [
      "Visible text carries the state; color is secondary. Pulse stops under reduced motion.",
      "Status accepts label and tone as before, or composed StatusIndicator (pulse?) and StatusLabel children.",
      "Native HTML attributes and event handlers are forwarded where declared by the part type. Your application owns data, destinations, persistence and localization.",
    ],
  },
  "theme-switcher": {
    parts: [
      {
        name: "ThemeSwitcher",
        description:
          "Public ThemeSwitcher part. Native semantics and composition follow the editable source.",
        props: [
          {
            name: "className",
            type: "string | undefined",
            required: false,
            description: "Additional classes on the rendered element.",
          },
          {
            name: "defaultChecked",
            type: "boolean | undefined",
            required: false,
            description: "Initial uncontrolled checked state.",
          },
          {
            name: "form",
            type: "string | undefined",
            required: false,
            description:
              "form supplied by the application. See the exact type and editable source.",
          },
          {
            name: "title",
            type: "string | undefined",
            required: false,
            description:
              "Visible heading or native title, according to the declared type.",
          },
          {
            name: "ref",
            type: "React.Ref<HTMLButtonElement> | undefined",
            required: false,
            description: "Ref to the rendered element.",
          },
          {
            name: "key",
            type: "React.Key | null | undefined",
            required: false,
            description:
              "key supplied by the application. See the exact type and editable source.",
          },
          {
            name: "disabled",
            type: "boolean | undefined",
            required: false,
            description: "Disables the control or the documented interaction.",
          },
          {
            name: "formAction",
            type: "string | ((formData: FormData) => void | Promise<void>) | undefined",
            required: false,
            description:
              "form Action supplied by the application. See the exact type and editable source.",
          },
          {
            name: "formEncType",
            type: "string | undefined",
            required: false,
            description:
              "form Enc Type supplied by the application. See the exact type and editable source.",
          },
          {
            name: "formMethod",
            type: "string | undefined",
            required: false,
            description:
              "form Method supplied by the application. See the exact type and editable source.",
          },
          {
            name: "formNoValidate",
            type: "boolean | undefined",
            required: false,
            description:
              "form No Validate supplied by the application. See the exact type and editable source.",
          },
          {
            name: "formTarget",
            type: "string | undefined",
            required: false,
            description:
              "form Target supplied by the application. See the exact type and editable source.",
          },
          {
            name: "name",
            type: "string | undefined",
            required: false,
            description: "Native form field name.",
          },
          {
            name: "type",
            type: '"button" | "submit" | "reset" | undefined',
            required: false,
            description:
              "type supplied by the application. See the exact type and editable source.",
          },
          {
            name: "id",
            type: "string | undefined",
            required: false,
            description:
              "Stable element ID for label and description associations.",
          },
          {
            name: "role",
            type: "React.AriaRole | undefined",
            required: false,
            description:
              "role supplied by the application. See the exact type and editable source.",
          },
          {
            name: "aria-describedby",
            type: "string | undefined",
            required: false,
            description: "IDs of supporting descriptions.",
          },
          {
            name: "aria-invalid",
            type: 'boolean | "true" | "false" | "grammar" | "spelling" | undefined',
            required: false,
            description: "Marks invalid input alongside readable feedback.",
          },
          {
            name: "aria-label",
            type: "string | undefined",
            required: false,
            description:
              "Accessible name for an icon-only or otherwise unnamed control.",
          },
          {
            name: "children",
            type: "React.ReactNode",
            required: false,
            description: "Content composed inside this part.",
          },
          {
            name: "onClick",
            type: "React.MouseEventHandler<HTMLButtonElement> | undefined",
            required: false,
            description:
              "Native activation handler; respects the component disabled behavior.",
          },
          {
            name: "value",
            type: "Theme | undefined",
            required: false,
            description:
              "Controlled value. Update it through the matching change callback.",
          },
          {
            name: "defaultValue",
            type: "Theme | undefined",
            required: false,
            default: '"light"',
            description: "Initial uncontrolled value.",
          },
          {
            name: "onValueChange",
            type: "((theme: Theme) => void) | undefined",
            required: false,
            description:
              "Receives value change updates using the exact callback signature below. Application data stays app-owned.",
          },
          {
            name: "applyToDocument",
            type: "boolean | undefined",
            required: false,
            default: "true",
            description:
              "apply To Document supplied by the application. See the exact type and editable source.",
          },
        ],
      },
    ],
    notes: [
      "Button announces target mode and pressed state.",
      "ThemeSwitcher accepts value/defaultValue, onValueChange and applyToDocument.",
      "Native HTML attributes and event handlers are forwarded where declared by the part type. Your application owns data, destinations, persistence and localization.",
    ],
  },
  tree: {
    parts: [
      {
        name: "Tree",
        description:
          "Public Tree part. Native semantics and composition follow the editable source.",
        props: [
          {
            name: "className",
            type: "string | undefined",
            required: false,
            description: "Additional classes on the rendered element.",
          },
          {
            name: "defaultChecked",
            type: "boolean | undefined",
            required: false,
            description: "Initial uncontrolled checked state.",
          },
          {
            name: "title",
            type: "string | undefined",
            required: false,
            description:
              "Visible heading or native title, according to the declared type.",
          },
          {
            name: "ref",
            type: "React.Ref<HTMLDivElement> | undefined",
            required: false,
            description: "Ref to the rendered element.",
          },
          {
            name: "key",
            type: "React.Key | null | undefined",
            required: false,
            description:
              "key supplied by the application. See the exact type and editable source.",
          },
          {
            name: "id",
            type: "string | undefined",
            required: false,
            description:
              "Stable element ID for label and description associations.",
          },
          {
            name: "role",
            type: "React.AriaRole | undefined",
            required: false,
            description:
              "role supplied by the application. See the exact type and editable source.",
          },
          {
            name: "aria-describedby",
            type: "string | undefined",
            required: false,
            description: "IDs of supporting descriptions.",
          },
          {
            name: "aria-invalid",
            type: 'boolean | "true" | "false" | "grammar" | "spelling" | undefined',
            required: false,
            description: "Marks invalid input alongside readable feedback.",
          },
          {
            name: "aria-label",
            type: "string | undefined",
            required: false,
            description:
              "Accessible name for an icon-only or otherwise unnamed control.",
          },
          {
            name: "children",
            type: "React.ReactNode",
            required: false,
            description: "Content composed inside this part.",
          },
          {
            name: "onChange",
            type: "React.ChangeEventHandler<HTMLDivElement, Element> | undefined",
            required: false,
            description: "Native value change handler.",
          },
          {
            name: "onClick",
            type: "React.MouseEventHandler<HTMLDivElement> | undefined",
            required: false,
            description:
              "Native activation handler; respects the component disabled behavior.",
          },
          {
            name: "label",
            type: "string",
            required: true,
            description:
              "Visible or accessible name. Provide a meaningful application label.",
          },
          {
            name: "nodes",
            type: "TreeNode[]",
            required: true,
            description:
              "nodes supplied by the application. See the exact type and editable source.",
          },
          {
            name: "selectedId",
            type: "string | undefined",
            required: false,
            description:
              "selected Id supplied by the application. See the exact type and editable source.",
          },
          {
            name: "defaultSelectedId",
            type: "string | undefined",
            required: false,
            description:
              "default Selected Id supplied by the application. See the exact type and editable source.",
          },
          {
            name: "expandedIds",
            type: "string[] | undefined",
            required: false,
            description:
              "expanded Ids supplied by the application. See the exact type and editable source.",
          },
          {
            name: "defaultExpandedIds",
            type: "string[] | undefined",
            required: false,
            default: "[]",
            description:
              "default Expanded Ids supplied by the application. See the exact type and editable source.",
          },
          {
            name: "onExpandedChange",
            type: "((ids: string[]) => void) | undefined",
            required: false,
            description:
              "Receives expanded change updates using the exact callback signature below. Application data stays app-owned.",
          },
        ],
      },
    ],
    notes: [
      "Tree roles, levels, expanded/selected state and arrow/Home/End navigation.",
      "Tree accepts nodes, label, selection and expansion controlled/default props.",
      "Native HTML attributes and event handlers are forwarded where declared by the part type. Your application owns data, destinations, persistence and localization.",
    ],
  },
} satisfies Record<string, ApiReference>;
