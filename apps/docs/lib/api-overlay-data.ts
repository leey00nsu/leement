import type { ApiReference } from "./api-reference";
export const overlayDataApiReferences: Record<string, ApiReference> = {
  "dialog": {
    "parts": [
      {
        "name": "Dialog",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "open",
            "type": "boolean | undefined",
            "description": "Whether the dialog is currently open."
          },
          {
            "name": "defaultOpen",
            "type": "boolean | undefined",
            "description": "Whether the dialog is initially open.\n\nTo render a controlled dialog, use the `open` prop instead.",
            "default": "false"
          },
          {
            "name": "modal",
            "type": "boolean | \"trap-focus\" | undefined",
            "description": "Determines if the dialog enters a modal state when open.\n- `true`: user interaction is limited to just the dialog: focus is trapped, document page scroll is locked, and pointer interactions on outside elements are disabled.\n- `false`: user interaction with the rest of the document is allowed.\n- `'trap-focus'`: focus is trapped inside the dialog, but document page scroll is not locked and pointer interactions outside of it remain enabled.\n\nWhen `modal` is `true` or `'trap-focus'`, render `<Dialog.Close>` inside `<Dialog.Popup>` so\ntouch screen readers can escape the popup.",
            "default": "true"
          },
          {
            "name": "onOpenChange",
            "type": "((open: boolean, eventDetails: DialogRoot.ChangeEventDetails) => void) | undefined",
            "description": "Event handler called when the dialog is opened or closed."
          },
          {
            "name": "onOpenChangeComplete",
            "type": "((open: boolean) => void) | undefined",
            "description": "Event handler called after any animations complete when the dialog is opened or closed."
          },
          {
            "name": "disablePointerDismissal",
            "type": "boolean | undefined",
            "description": "Whether to prevent the dialog from closing on outside presses.\nFor non-modal dialogs, this also prevents the dialog from closing when focus moves outside of it.",
            "default": "false"
          },
          {
            "name": "actionsRef",
            "type": "React.RefObject<DialogRootActions | null> | undefined",
            "description": "A ref to imperative actions.\n- `unmount`: Manually unmounts the dialog.\nCall this after any externally controlled closing animation finishes.\n- `close`: Closes the dialog imperatively when called."
          },
          {
            "name": "handle",
            "type": "DialogHandle<Payload> | undefined",
            "description": "A handle to associate the dialog with a trigger.\nIf specified, allows external triggers to control the dialog's open state.\nCan be created with the Dialog.createHandle() method."
          },
          {
            "name": "children",
            "type": "React.ReactNode | PayloadChildRenderFunction<Payload>",
            "description": "The content of the dialog.\nThis can be a regular React node or a render function that receives the `payload` of the active trigger."
          },
          {
            "name": "triggerId",
            "type": "string | null | undefined",
            "description": "ID of the trigger that the dialog is associated with.\nThis is useful in conjunction with the `open` prop to create a controlled dialog.\nThere's no need to specify this prop when the dialog is uncontrolled (that is, when the `open` prop is not set)."
          },
          {
            "name": "defaultTriggerId",
            "type": "string | null | undefined",
            "description": "ID of the trigger that the dialog is associated with.\nThis is useful in conjunction with the `defaultOpen` prop to create an initially open dialog."
          }
        ]
      },
      {
        "name": "DialogClose",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "nativeButton",
            "type": "boolean | undefined",
            "description": "Whether the component renders a native `<button>` element when replacing it\nvia the `render` prop.\nSet to `false` if the rendered element is not a button (for example, `<div>`).",
            "default": "true"
          },
          {
            "name": "ref",
            "type": "Ref<HTMLButtonElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "disabled",
            "type": "boolean | undefined",
            "description": "Native disabled attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "name",
            "type": "string | undefined",
            "description": "Native name attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "type",
            "type": "\"button\" | \"submit\" | \"reset\" | undefined",
            "description": "Native type attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "value",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native value attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLButtonElement, Element>>) => void) | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "((event: BaseUIEvent<SubmitEvent<HTMLButtonElement>>) => void) | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "((event: BaseUIEvent<KeyboardEvent<HTMLButtonElement>>) => void) | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "((event: BaseUIEvent<MouseEvent<HTMLButtonElement, globalThis.MouseEvent>>) => void) | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | ((state: AlertDialogCloseState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, AlertDialogCloseState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: AlertDialogCloseState) => React.CSSProperties | undefined) | undefined",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          },
          {
            "name": "asChild",
            "type": "boolean | undefined",
            "description": "Native asChild attribute or callback; forwarded to the rendered element."
          }
        ]
      },
      {
        "name": "DialogContent",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "initialFocus",
            "type": "boolean | React.RefObject<HTMLElement | null> | ((openType: InteractionType) => boolean | HTMLElement | null | void) | undefined",
            "description": "Determines the element to focus when the dialog is opened.\nBy default, focus moves to the first tabbable element inside the popup, except when the dialog\nis opened by touch \u2014 then the popup itself is focused to avoid opening the virtual keyboard.\n\n- `false`: Do not move focus.\n- `true`: Move focus based on the default behavior (first tabbable element or popup).\n- `RefObject`: Move focus to the ref element.\n- `function`: Called with the interaction type (`mouse`, `touch`, `pen`, or `keyboard`).\n  Return an element to focus, `true` to use the default behavior, `null` to fall back to the default behavior, or `false`/`undefined` to do nothing."
          },
          {
            "name": "finalFocus",
            "type": "boolean | React.RefObject<HTMLElement | null> | ((closeType: InteractionType) => boolean | HTMLElement | null | void) | undefined",
            "description": "Determines the element to focus when the dialog is closed.\n\n- `false`: Do not move focus.\n- `true`: Move focus based on the default behavior (trigger or previously focused element).\n- `RefObject`: Move focus to the ref element.\n- `function`: Called with the interaction type (`mouse`, `touch`, `pen`, or `keyboard`).\n  Return an element to focus, `true` to use the default behavior, `null` to fall back to the default behavior, or `false`/`undefined` to do nothing."
          },
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLDivElement, Element>>) => void) | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "((event: BaseUIEvent<SubmitEvent<HTMLDivElement>>) => void) | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "((event: BaseUIEvent<KeyboardEvent<HTMLDivElement>>) => void) | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "((event: BaseUIEvent<MouseEvent<HTMLDivElement, globalThis.MouseEvent>>) => void) | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | ((state: AlertDialogPopupState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, AlertDialogPopupState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: AlertDialogPopupState) => React.CSSProperties | undefined) | undefined",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          },
          {
            "name": "showCloseButton",
            "type": "boolean | undefined",
            "description": "Native showCloseButton attribute or callback; forwarded to the rendered element.",
            "default": "true"
          }
        ]
      },
      {
        "name": "DialogDescription",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLParagraphElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLParagraphElement, Element>>) => void) | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "((event: BaseUIEvent<SubmitEvent<HTMLParagraphElement>>) => void) | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "((event: BaseUIEvent<KeyboardEvent<HTMLParagraphElement>>) => void) | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "((event: BaseUIEvent<MouseEvent<HTMLParagraphElement, globalThis.MouseEvent>>) => void) | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | ((state: AlertDialogDescriptionState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, AlertDialogDescriptionState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: AlertDialogDescriptionState) => React.CSSProperties | undefined) | undefined",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          }
        ]
      },
      {
        "name": "DialogFooter",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "defaultChecked",
            "type": "boolean | undefined",
            "description": "Native defaultChecked attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "style",
            "type": "CSSProperties | undefined",
            "description": "Native style attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "ChangeEventHandler<HTMLDivElement, Element> | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "SubmitEventHandler<HTMLDivElement> | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "KeyboardEventHandler<HTMLDivElement> | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "MouseEventHandler<HTMLDivElement> | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "showCloseButton",
            "type": "boolean | undefined",
            "description": "Native showCloseButton attribute or callback; forwarded to the rendered element.",
            "default": "false"
          }
        ]
      },
      {
        "name": "DialogHeader",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "defaultChecked",
            "type": "boolean | undefined",
            "description": "Native defaultChecked attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "style",
            "type": "CSSProperties | undefined",
            "description": "Native style attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "ChangeEventHandler<HTMLDivElement, Element> | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "SubmitEventHandler<HTMLDivElement> | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "KeyboardEventHandler<HTMLDivElement> | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "MouseEventHandler<HTMLDivElement> | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          }
        ]
      },
      {
        "name": "DialogOverlay",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "forceRender",
            "type": "boolean | undefined",
            "description": "Whether the backdrop is forced to render even when nested.",
            "default": "false"
          },
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLDivElement, Element>>) => void) | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "((event: BaseUIEvent<SubmitEvent<HTMLDivElement>>) => void) | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "((event: BaseUIEvent<KeyboardEvent<HTMLDivElement>>) => void) | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "((event: BaseUIEvent<MouseEvent<HTMLDivElement, globalThis.MouseEvent>>) => void) | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | ((state: AlertDialogBackdropState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, AlertDialogBackdropState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: AlertDialogBackdropState) => React.CSSProperties | undefined) | undefined",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          }
        ]
      },
      {
        "name": "DialogPortal",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "keepMounted",
            "type": "boolean | undefined",
            "description": "Whether to keep the portal mounted in the DOM while the popup is hidden.",
            "default": "false"
          },
          {
            "name": "container",
            "type": "HTMLElement | ShadowRoot | React.RefObject<HTMLElement | ShadowRoot | null> | null | undefined",
            "description": "A parent element to render the portal element into."
          },
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLDivElement, Element>>) => void) | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "((event: BaseUIEvent<SubmitEvent<HTMLDivElement>>) => void) | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "((event: BaseUIEvent<KeyboardEvent<HTMLDivElement>>) => void) | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "((event: BaseUIEvent<MouseEvent<HTMLDivElement, globalThis.MouseEvent>>) => void) | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | ((state: AlertDialogPortalState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, AlertDialogPortalState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: AlertDialogPortalState) => React.CSSProperties | undefined) | undefined",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          }
        ]
      },
      {
        "name": "DialogTitle",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLHeadingElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLHeadingElement, Element>>) => void) | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "((event: BaseUIEvent<SubmitEvent<HTMLHeadingElement>>) => void) | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "((event: BaseUIEvent<KeyboardEvent<HTMLHeadingElement>>) => void) | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "((event: BaseUIEvent<MouseEvent<HTMLHeadingElement, globalThis.MouseEvent>>) => void) | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | ((state: AlertDialogTitleState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, AlertDialogTitleState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: AlertDialogTitleState) => React.CSSProperties | undefined) | undefined",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          }
        ]
      },
      {
        "name": "DialogTrigger",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "handle",
            "type": "DialogHandle<unknown> | undefined",
            "description": "A handle to associate the trigger with a dialog.\nCan be created with the Dialog.createHandle() method."
          },
          {
            "name": "payload",
            "type": "unknown",
            "description": "A payload to pass to the dialog when it is opened."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "ID of the trigger. In addition to being forwarded to the rendered element,\nit is also used to specify the active trigger for the dialog in controlled mode (with the DialogRoot `triggerId` prop)."
          },
          {
            "name": "nativeButton",
            "type": "boolean | undefined",
            "description": "Whether the component renders a native `<button>` element when replacing it\nvia the `render` prop.\nSet to `false` if the rendered element is not a button (for example, `<div>`).",
            "default": "true"
          },
          {
            "name": "ref",
            "type": "Ref<HTMLButtonElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "disabled",
            "type": "boolean | undefined",
            "description": "Native disabled attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "name",
            "type": "string | undefined",
            "description": "Native name attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "type",
            "type": "\"button\" | \"submit\" | \"reset\" | undefined",
            "description": "Native type attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "value",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native value attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLButtonElement, Element>>) => void) | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "((event: BaseUIEvent<SubmitEvent<HTMLButtonElement>>) => void) | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "((event: BaseUIEvent<KeyboardEvent<HTMLButtonElement>>) => void) | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "((event: BaseUIEvent<MouseEvent<HTMLButtonElement, globalThis.MouseEvent>>) => void) | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | ((state: DialogTriggerState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, DialogTriggerState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: DialogTriggerState) => React.CSSProperties | undefined) | undefined",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          },
          {
            "name": "asChild",
            "type": "boolean | undefined",
            "description": "Native asChild attribute or callback; forwarded to the rendered element."
          }
        ]
      }
    ],
    "links": [
      {
        "label": "shadcn Base dialog reference",
        "href": "https://ui.shadcn.com/docs/components/base/dialog"
      },
      {
        "label": "Base UI dialog API",
        "href": "https://base-ui.com/react/components/dialog#api-reference"
      }
    ],
    "notes": [
      "Base UI owns focus trapping, initialFocus/finalFocus, nested dialogs, Escape, modal behavior, controlled state and payload triggers. Root actionsRef forwards close/unmount. Motion handles entry/exit and closing retention.",
      "Trigger/Close expose render and retain the legacy asChild spelling. Popup portals stay inside their containing modal subtree. Supply a Title and a Description when useful.",
      "DialogContent showCloseButton defaults to true; Footer showCloseButton defaults to false. Content retains the Leement 512px maximum and semantic surface."
    ]
  },
  "alert-dialog": {
    "parts": [
      {
        "name": "AlertDialog",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "onOpenChange",
            "type": "((open: boolean, eventDetails: AlertDialogRoot.ChangeEventDetails) => void) | undefined",
            "description": "Event handler called when the alert dialog is opened or closed."
          },
          {
            "name": "actionsRef",
            "type": "React.RefObject<DialogRootActions | null> | undefined",
            "description": "A ref to imperative actions.\n- `unmount`: Manually unmounts the alert dialog.\nCall this after any externally controlled closing animation finishes.\n- `close`: Closes the alert dialog imperatively when called."
          },
          {
            "name": "handle",
            "type": "AlertDialogHandle<Payload> | undefined",
            "description": "A handle to associate the alert dialog with a trigger.\nIf specified, allows external triggers to control the alert dialog's open state.\nCan be created with the AlertDialog.createHandle() method."
          },
          {
            "name": "children",
            "type": "React.ReactNode | PayloadChildRenderFunction<Payload>",
            "description": "The content of the dialog.\nThis can be a regular React node or a render function that receives the `payload` of the active trigger."
          },
          {
            "name": "open",
            "type": "boolean | undefined",
            "description": "Whether the dialog is currently open."
          },
          {
            "name": "defaultOpen",
            "type": "boolean | undefined",
            "description": "Whether the dialog is initially open.\n\nTo render a controlled dialog, use the `open` prop instead.",
            "default": "false"
          },
          {
            "name": "onOpenChangeComplete",
            "type": "((open: boolean) => void) | undefined",
            "description": "Event handler called after any animations complete when the dialog is opened or closed."
          },
          {
            "name": "triggerId",
            "type": "string | null | undefined",
            "description": "ID of the trigger that the dialog is associated with.\nThis is useful in conjunction with the `open` prop to create a controlled dialog.\nThere's no need to specify this prop when the dialog is uncontrolled (that is, when the `open` prop is not set)."
          },
          {
            "name": "defaultTriggerId",
            "type": "string | null | undefined",
            "description": "ID of the trigger that the dialog is associated with.\nThis is useful in conjunction with the `defaultOpen` prop to create an initially open dialog."
          }
        ]
      },
      {
        "name": "AlertDialogAction",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "focusableWhenDisabled",
            "type": "boolean | undefined",
            "description": "Whether the button should be focusable when disabled.",
            "default": "false"
          },
          {
            "name": "nativeButton",
            "type": "boolean | undefined",
            "description": "Whether the component renders a native `<button>` element when replacing it\nvia the `render` prop.\nSet to `false` if the rendered element is not a button (for example, `<div>`).",
            "default": "true"
          },
          {
            "name": "ref",
            "type": "Ref<HTMLButtonElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "disabled",
            "type": "boolean | undefined",
            "description": "Native disabled attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "name",
            "type": "string | undefined",
            "description": "Native name attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "type",
            "type": "\"button\" | \"submit\" | \"reset\" | undefined",
            "description": "Native type attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "value",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native value attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLButtonElement, Element>>) => void) | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "((event: BaseUIEvent<SubmitEvent<HTMLButtonElement>>) => void) | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "((event: BaseUIEvent<KeyboardEvent<HTMLButtonElement>>) => void) | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "((event: BaseUIEvent<MouseEvent<HTMLButtonElement, globalThis.MouseEvent>>) => void) | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | ((state: ButtonState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, ButtonState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: ButtonState) => React.CSSProperties | undefined) | undefined",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          },
          {
            "name": "variant",
            "type": "\"link\" | \"default\" | \"primary\" | \"secondary\" | \"outline\" | \"ghost\" | \"destructive\" | null | undefined",
            "description": "Native variant attribute or callback; forwarded to the rendered element.",
            "default": "\"destructive\""
          },
          {
            "name": "size",
            "type": "\"default\" | \"xs\" | \"sm\" | \"lg\" | \"icon\" | \"icon-sm\" | \"icon-xs\" | \"icon-lg\" | null | undefined",
            "description": "Native size attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "asChild",
            "type": "boolean | undefined",
            "description": "Native asChild attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "loading",
            "type": "boolean | undefined",
            "description": "Native loading attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "closeOnClick",
            "type": "boolean | undefined",
            "description": "Native closeOnClick attribute or callback; forwarded to the rendered element.",
            "default": "true"
          }
        ]
      },
      {
        "name": "AlertDialogCancel",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "nativeButton",
            "type": "boolean | undefined",
            "description": "Whether the component renders a native `<button>` element when replacing it\nvia the `render` prop.\nSet to `false` if the rendered element is not a button (for example, `<div>`).",
            "default": "true"
          },
          {
            "name": "ref",
            "type": "Ref<HTMLButtonElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "disabled",
            "type": "boolean | undefined",
            "description": "Native disabled attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "name",
            "type": "string | undefined",
            "description": "Native name attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "type",
            "type": "\"button\" | \"submit\" | \"reset\" | undefined",
            "description": "Native type attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "value",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native value attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLButtonElement, Element>>) => void) | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "((event: BaseUIEvent<SubmitEvent<HTMLButtonElement>>) => void) | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "((event: BaseUIEvent<KeyboardEvent<HTMLButtonElement>>) => void) | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "((event: BaseUIEvent<MouseEvent<HTMLButtonElement, globalThis.MouseEvent>>) => void) | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | ((state: AlertDialogCloseState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, AlertDialogCloseState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: AlertDialogCloseState) => React.CSSProperties | undefined) | undefined",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          },
          {
            "name": "variant",
            "type": "\"link\" | \"default\" | \"primary\" | \"secondary\" | \"outline\" | \"ghost\" | \"destructive\" | null | undefined",
            "description": "Native variant attribute or callback; forwarded to the rendered element.",
            "default": "\"outline\""
          },
          {
            "name": "size",
            "type": "\"default\" | \"xs\" | \"sm\" | \"lg\" | \"icon\" | \"icon-sm\" | \"icon-xs\" | \"icon-lg\" | null | undefined",
            "description": "Native size attribute or callback; forwarded to the rendered element.",
            "default": "\"default\""
          }
        ]
      },
      {
        "name": "AlertDialogContent",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "initialFocus",
            "type": "boolean | React.RefObject<HTMLElement | null> | ((openType: InteractionType) => boolean | HTMLElement | null | void) | undefined",
            "description": "Determines the element to focus when the dialog is opened.\nBy default, focus moves to the first tabbable element inside the popup, except when the dialog\nis opened by touch \u2014 then the popup itself is focused to avoid opening the virtual keyboard.\n\n- `false`: Do not move focus.\n- `true`: Move focus based on the default behavior (first tabbable element or popup).\n- `RefObject`: Move focus to the ref element.\n- `function`: Called with the interaction type (`mouse`, `touch`, `pen`, or `keyboard`).\n  Return an element to focus, `true` to use the default behavior, `null` to fall back to the default behavior, or `false`/`undefined` to do nothing."
          },
          {
            "name": "finalFocus",
            "type": "boolean | React.RefObject<HTMLElement | null> | ((closeType: InteractionType) => boolean | HTMLElement | null | void) | undefined",
            "description": "Determines the element to focus when the dialog is closed.\n\n- `false`: Do not move focus.\n- `true`: Move focus based on the default behavior (trigger or previously focused element).\n- `RefObject`: Move focus to the ref element.\n- `function`: Called with the interaction type (`mouse`, `touch`, `pen`, or `keyboard`).\n  Return an element to focus, `true` to use the default behavior, `null` to fall back to the default behavior, or `false`/`undefined` to do nothing."
          },
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLDivElement, Element>>) => void) | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "((event: BaseUIEvent<SubmitEvent<HTMLDivElement>>) => void) | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "((event: BaseUIEvent<KeyboardEvent<HTMLDivElement>>) => void) | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "((event: BaseUIEvent<MouseEvent<HTMLDivElement, globalThis.MouseEvent>>) => void) | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | ((state: AlertDialogPopupState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, AlertDialogPopupState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: AlertDialogPopupState) => React.CSSProperties | undefined) | undefined",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          },
          {
            "name": "size",
            "type": "\"default\" | \"sm\" | undefined",
            "description": "Native size attribute or callback; forwarded to the rendered element.",
            "default": "\"default\""
          }
        ]
      },
      {
        "name": "AlertDialogDescription",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "className",
            "type": "string | ((state: AlertDialogDescriptionState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: AlertDialogDescriptionState) => React.CSSProperties | undefined) | undefined",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLParagraphElement, Element>>) => void) | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "((event: BaseUIEvent<SubmitEvent<HTMLParagraphElement>>) => void) | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "((event: BaseUIEvent<KeyboardEvent<HTMLParagraphElement>>) => void) | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "((event: BaseUIEvent<MouseEvent<HTMLParagraphElement, globalThis.MouseEvent>>) => void) | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, AlertDialogDescriptionState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          },
          {
            "name": "ref",
            "type": "Ref<HTMLParagraphElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          }
        ]
      },
      {
        "name": "AlertDialogFooter",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "defaultChecked",
            "type": "boolean | undefined",
            "description": "Native defaultChecked attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "style",
            "type": "CSSProperties | undefined",
            "description": "Native style attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "ChangeEventHandler<HTMLDivElement, Element> | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "SubmitEventHandler<HTMLDivElement> | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "KeyboardEventHandler<HTMLDivElement> | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "MouseEventHandler<HTMLDivElement> | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          }
        ]
      },
      {
        "name": "AlertDialogHeader",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "defaultChecked",
            "type": "boolean | undefined",
            "description": "Native defaultChecked attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "style",
            "type": "CSSProperties | undefined",
            "description": "Native style attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "ChangeEventHandler<HTMLDivElement, Element> | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "SubmitEventHandler<HTMLDivElement> | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "KeyboardEventHandler<HTMLDivElement> | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "MouseEventHandler<HTMLDivElement> | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          }
        ]
      },
      {
        "name": "AlertDialogMedia",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "defaultChecked",
            "type": "boolean | undefined",
            "description": "Native defaultChecked attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "style",
            "type": "CSSProperties | undefined",
            "description": "Native style attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "ChangeEventHandler<HTMLDivElement, Element> | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "SubmitEventHandler<HTMLDivElement> | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "KeyboardEventHandler<HTMLDivElement> | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "MouseEventHandler<HTMLDivElement> | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          }
        ]
      },
      {
        "name": "AlertDialogOverlay",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "forceRender",
            "type": "boolean | undefined",
            "description": "Whether the backdrop is forced to render even when nested.",
            "default": "false"
          },
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLDivElement, Element>>) => void) | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "((event: BaseUIEvent<SubmitEvent<HTMLDivElement>>) => void) | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "((event: BaseUIEvent<KeyboardEvent<HTMLDivElement>>) => void) | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "((event: BaseUIEvent<MouseEvent<HTMLDivElement, globalThis.MouseEvent>>) => void) | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | ((state: AlertDialogBackdropState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, AlertDialogBackdropState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: AlertDialogBackdropState) => React.CSSProperties | undefined) | undefined",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          }
        ]
      },
      {
        "name": "AlertDialogPortal",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "keepMounted",
            "type": "boolean | undefined",
            "description": "Whether to keep the portal mounted in the DOM while the popup is hidden.",
            "default": "false"
          },
          {
            "name": "container",
            "type": "HTMLElement | ShadowRoot | React.RefObject<HTMLElement | ShadowRoot | null> | null | undefined",
            "description": "A parent element to render the portal element into."
          },
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLDivElement, Element>>) => void) | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "((event: BaseUIEvent<SubmitEvent<HTMLDivElement>>) => void) | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "((event: BaseUIEvent<KeyboardEvent<HTMLDivElement>>) => void) | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "((event: BaseUIEvent<MouseEvent<HTMLDivElement, globalThis.MouseEvent>>) => void) | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | ((state: AlertDialogPortalState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, AlertDialogPortalState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: AlertDialogPortalState) => React.CSSProperties | undefined) | undefined",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          }
        ]
      },
      {
        "name": "AlertDialogTitle",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "className",
            "type": "string | ((state: AlertDialogTitleState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: AlertDialogTitleState) => React.CSSProperties | undefined) | undefined",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLHeadingElement, Element>>) => void) | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "((event: BaseUIEvent<SubmitEvent<HTMLHeadingElement>>) => void) | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "((event: BaseUIEvent<KeyboardEvent<HTMLHeadingElement>>) => void) | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "((event: BaseUIEvent<MouseEvent<HTMLHeadingElement, globalThis.MouseEvent>>) => void) | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, AlertDialogTitleState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          },
          {
            "name": "ref",
            "type": "Ref<HTMLHeadingElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          }
        ]
      },
      {
        "name": "AlertDialogTrigger",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "handle",
            "type": "AlertDialogHandle<unknown> | undefined",
            "description": "A handle to associate the trigger with an alert dialog.\nCan be created with the AlertDialog.createHandle() method."
          },
          {
            "name": "className",
            "type": "string | ((state: DialogTriggerState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: DialogTriggerState) => React.CSSProperties | undefined) | undefined",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          },
          {
            "name": "ref",
            "type": "Ref<HTMLButtonElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "disabled",
            "type": "boolean | undefined",
            "description": "Native disabled attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "name",
            "type": "string | undefined",
            "description": "Native name attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "type",
            "type": "\"button\" | \"submit\" | \"reset\" | undefined",
            "description": "Native type attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "value",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native value attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "ID of the trigger. In addition to being forwarded to the rendered element,\nit is also used to specify the active trigger for the dialog in controlled mode (with the DialogRoot `triggerId` prop)."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLButtonElement, Element>>) => void) | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "((event: BaseUIEvent<SubmitEvent<HTMLButtonElement>>) => void) | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "((event: BaseUIEvent<KeyboardEvent<HTMLButtonElement>>) => void) | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "((event: BaseUIEvent<MouseEvent<HTMLButtonElement, globalThis.MouseEvent>>) => void) | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "nativeButton",
            "type": "boolean | undefined",
            "description": "Whether the component renders a native `<button>` element when replacing it\nvia the `render` prop.\nSet to `false` if the rendered element is not a button (for example, `<div>`).",
            "default": "true"
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, DialogTriggerState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          },
          {
            "name": "payload",
            "type": "unknown",
            "description": "A payload to pass to the dialog when it is opened."
          },
          {
            "name": "asChild",
            "type": "boolean | undefined",
            "description": "Native asChild attribute or callback; forwarded to the rendered element."
          }
        ]
      }
    ],
    "links": [
      {
        "label": "shadcn Base alert-dialog reference",
        "href": "https://ui.shadcn.com/docs/components/base/alert-dialog"
      },
      {
        "label": "Base UI alert-dialog API",
        "href": "https://base-ui.com/react/components/alert-dialog#api-reference"
      }
    ],
    "notes": [
      "Base UI AlertDialog parts include size default/sm and Header/Media/Footer compositions. Give a title, description and explicit cancel action.",
      "AlertDialogAction retains the existing destructive/auto-close default. Set closeOnClick=false while awaiting an app mutation, then close the controlled root on success. loading/disabled prevents closing and activation. Base shadcn uses a plain Button action; Leement exposes this choice explicitly."
    ]
  },
  "tooltip": {
    "parts": [
      {
        "name": "Tooltip",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "defaultOpen",
            "type": "boolean | undefined",
            "description": "Whether the tooltip is initially open.\n\nTo render a controlled tooltip, use the `open` prop instead.",
            "default": "false"
          },
          {
            "name": "open",
            "type": "boolean | undefined",
            "description": "Whether the tooltip is currently open."
          },
          {
            "name": "onOpenChange",
            "type": "((open: boolean, eventDetails: TooltipRoot.ChangeEventDetails) => void) | undefined",
            "description": "Event handler called when the tooltip is opened or closed."
          },
          {
            "name": "onOpenChangeComplete",
            "type": "((open: boolean) => void) | undefined",
            "description": "Event handler called after any animations complete when the tooltip is opened or closed."
          },
          {
            "name": "disableHoverablePopup",
            "type": "boolean | undefined",
            "description": "Whether the tooltip contents can be hovered without closing the tooltip.",
            "default": "false"
          },
          {
            "name": "trackCursorAxis",
            "type": "\"none\" | \"x\" | \"y\" | \"both\" | undefined",
            "description": "Determines which axis the tooltip should track the cursor on.",
            "default": "'none'"
          },
          {
            "name": "actionsRef",
            "type": "React.RefObject<TooltipRootActions | null> | undefined",
            "description": "A ref to imperative actions.\n- `unmount`: Unmounts the tooltip popup.\n- `close`: Closes the tooltip imperatively when called."
          },
          {
            "name": "disabled",
            "type": "boolean | undefined",
            "description": "Whether the tooltip is disabled.",
            "default": "false"
          },
          {
            "name": "handle",
            "type": "TooltipHandle<Payload> | undefined",
            "description": "A handle to associate the tooltip with a trigger.\nIf specified, allows external triggers to control the tooltip's open state.\nCan be created with the Tooltip.createHandle() method."
          },
          {
            "name": "children",
            "type": "React.ReactNode | PayloadChildRenderFunction<Payload>",
            "description": "The content of the tooltip.\nThis can be a regular React node or a render function that receives the `payload` of the active trigger."
          },
          {
            "name": "triggerId",
            "type": "string | null | undefined",
            "description": "ID of the trigger that the tooltip is associated with.\nThis is useful in conjunction with the `open` prop to create a controlled tooltip.\nThere's no need to specify this prop when the tooltip is uncontrolled (that is, when the `open` prop is not set)."
          },
          {
            "name": "defaultTriggerId",
            "type": "string | null | undefined",
            "description": "ID of the trigger that the tooltip is associated with.\nThis is useful in conjunction with the `defaultOpen` prop to create an initially open tooltip."
          },
          {
            "name": "delayDuration",
            "type": "number | undefined",
            "description": "Native delayDuration attribute or callback; forwarded to the rendered element."
          }
        ]
      },
      {
        "name": "TooltipTrigger",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "handle",
            "type": "TooltipHandle<unknown> | undefined",
            "description": "A handle to associate the trigger with a tooltip."
          },
          {
            "name": "payload",
            "type": "unknown",
            "description": "A payload to pass to the tooltip when it is opened."
          },
          {
            "name": "delay",
            "type": "number | undefined",
            "description": "How long to wait before opening the tooltip on hover. Specified in milliseconds.",
            "default": "600"
          },
          {
            "name": "closeOnClick",
            "type": "boolean | undefined",
            "description": "Whether the tooltip should close when this trigger is clicked.",
            "default": "true"
          },
          {
            "name": "closeDelay",
            "type": "number | undefined",
            "description": "How long to wait before closing the tooltip. Specified in milliseconds.",
            "default": "0"
          },
          {
            "name": "disabled",
            "type": "boolean | undefined",
            "description": "If `true`, the tooltip will not open when interacting with this trigger.\nNote that this doesn't apply the `disabled` attribute to the trigger element.\nIf you want to disable the trigger element itself, you can pass the `disabled` prop to the trigger element via the `render` prop.",
            "default": "false"
          },
          {
            "name": "ref",
            "type": "Ref<HTMLButtonElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "name",
            "type": "string | undefined",
            "description": "Native name attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "type",
            "type": "\"button\" | \"submit\" | \"reset\" | undefined",
            "description": "Native type attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "value",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native value attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLButtonElement, Element>>) => void) | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "((event: BaseUIEvent<SubmitEvent<HTMLButtonElement>>) => void) | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "((event: BaseUIEvent<KeyboardEvent<HTMLButtonElement>>) => void) | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "((event: BaseUIEvent<MouseEvent<HTMLButtonElement, globalThis.MouseEvent>>) => void) | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | ((state: TooltipTriggerState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, TooltipTriggerState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: TooltipTriggerState) => React.CSSProperties | undefined) | undefined",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          },
          {
            "name": "asChild",
            "type": "boolean | undefined",
            "description": "Native asChild attribute or callback; forwarded to the rendered element."
          }
        ]
      },
      {
        "name": "TooltipContent",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLDivElement, Element>>) => void) | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "((event: BaseUIEvent<SubmitEvent<HTMLDivElement>>) => void) | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "((event: BaseUIEvent<KeyboardEvent<HTMLDivElement>>) => void) | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "((event: BaseUIEvent<MouseEvent<HTMLDivElement, globalThis.MouseEvent>>) => void) | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | ((state: TooltipPopupState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, TooltipPopupState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: TooltipPopupState) => React.CSSProperties | undefined) | undefined",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          },
          {
            "name": "align",
            "type": "Align | undefined",
            "description": "How to align the popup relative to the specified side.",
            "default": "\"center\""
          },
          {
            "name": "alignOffset",
            "type": "number | OffsetFunction | undefined",
            "description": "Additional offset along the alignment axis in pixels.\nAlso accepts a function that returns the offset to read the dimensions of the anchor\nand positioner elements, along with its side and alignment.\n\nThe function takes a `data` object parameter with the following properties:\n- `data.anchor`: the dimensions of the anchor element with properties `width` and `height`.\n- `data.positioner`: the dimensions of the positioner element with properties `width` and `height`.\n- `data.side`: which side of the anchor element the positioner is aligned against.\n- `data.align`: how the positioner is aligned relative to the specified side.",
            "default": "0"
          },
          {
            "name": "side",
            "type": "Side | undefined",
            "description": "Which side of the anchor element to align the popup against.\nMay automatically change to avoid collisions.",
            "default": "\"top\""
          },
          {
            "name": "sideOffset",
            "type": "number | OffsetFunction | undefined",
            "description": "Distance between the anchor and the popup in pixels.\nAlso accepts a function that returns the distance to read the dimensions of the anchor\nand positioner elements, along with its side and alignment.\n\nThe function takes a `data` object parameter with the following properties:\n- `data.anchor`: the dimensions of the anchor element with properties `width` and `height`.\n- `data.positioner`: the dimensions of the positioner element with properties `width` and `height`.\n- `data.side`: which side of the anchor element the positioner is aligned against.\n- `data.align`: how the positioner is aligned relative to the specified side.",
            "default": "4"
          }
        ]
      },
      {
        "name": "TooltipProvider",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "children",
            "type": "React.ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "delay",
            "type": "number | undefined",
            "description": "How long to wait before opening the tooltip on hover. Specified in milliseconds."
          },
          {
            "name": "closeDelay",
            "type": "number | undefined",
            "description": "How long to wait before closing a tooltip. Specified in milliseconds."
          },
          {
            "name": "timeout",
            "type": "number | undefined",
            "description": "Another tooltip will open instantly if the previous tooltip\nis closed within this timeout. Specified in milliseconds.",
            "default": "400"
          },
          {
            "name": "delayDuration",
            "type": "number | undefined",
            "description": "Native delayDuration attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "skipDelayDuration",
            "type": "number | undefined",
            "description": "Native skipDelayDuration attribute or callback; forwarded to the rendered element."
          }
        ]
      }
    ],
    "links": [
      {
        "label": "shadcn Base tooltip reference",
        "href": "https://ui.shadcn.com/docs/components/base/tooltip"
      },
      {
        "label": "Base UI tooltip API",
        "href": "https://base-ui.com/react/components/tooltip#api-reference"
      }
    ]
  },
  "hover-card": {
    "parts": [
      {
        "name": "HoverCard",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "defaultOpen",
            "type": "boolean | undefined",
            "description": "Whether the preview card is initially open.\n\nTo render a controlled preview card, use the `open` prop instead.",
            "default": "false"
          },
          {
            "name": "open",
            "type": "boolean | undefined",
            "description": "Whether the preview card is currently open."
          },
          {
            "name": "onOpenChange",
            "type": "((open: boolean, eventDetails: PreviewCardRoot.ChangeEventDetails) => void) | undefined",
            "description": "Event handler called when the preview card is opened or closed."
          },
          {
            "name": "onOpenChangeComplete",
            "type": "((open: boolean) => void) | undefined",
            "description": "Event handler called after any animations complete when the preview card is opened or closed."
          },
          {
            "name": "actionsRef",
            "type": "React.RefObject<PreviewCardRootActions | null> | undefined",
            "description": "A ref to imperative actions.\n- `unmount`: Unmounts the preview card popup.\n- `close`: Closes the preview card imperatively when called."
          },
          {
            "name": "handle",
            "type": "PreviewCardHandle<Payload> | undefined",
            "description": "A handle to associate the preview card with a trigger.\nIf specified, allows external triggers to control the card's open state.\nCan be created with the PreviewCard.createHandle() method."
          },
          {
            "name": "children",
            "type": "React.ReactNode | PayloadChildRenderFunction<Payload>",
            "description": "The content of the preview card.\nThis can be a regular React node or a render function that receives the `payload` of the active trigger."
          },
          {
            "name": "triggerId",
            "type": "string | null | undefined",
            "description": "ID of the trigger that the preview card is associated with.\nThis is useful in conjunction with the `open` prop to create a controlled preview card.\nThere's no need to specify this prop when the preview card is uncontrolled (that is, when the `open` prop is not set)."
          },
          {
            "name": "defaultTriggerId",
            "type": "string | null | undefined",
            "description": "ID of the trigger that the preview card is associated with.\nThis is useful in conjunction with the `defaultOpen` prop to create an initially open preview card."
          },
          {
            "name": "openDelay",
            "type": "number | undefined",
            "description": "Native openDelay attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "closeDelay",
            "type": "number | undefined",
            "description": "Native closeDelay attribute or callback; forwarded to the rendered element."
          }
        ]
      },
      {
        "name": "HoverCardTrigger",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "handle",
            "type": "PreviewCardHandle<unknown> | undefined",
            "description": "A handle to associate the trigger with a preview card."
          },
          {
            "name": "payload",
            "type": "unknown",
            "description": "A payload to pass to the preview card when it is opened."
          },
          {
            "name": "delay",
            "type": "number | undefined",
            "description": "How long to wait before the preview card opens. Specified in milliseconds.",
            "default": "600"
          },
          {
            "name": "closeDelay",
            "type": "number | undefined",
            "description": "How long to wait before closing the preview card. Specified in milliseconds.",
            "default": "300"
          },
          {
            "name": "ref",
            "type": "Ref<HTMLAnchorElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "type",
            "type": "string | undefined",
            "description": "Native type attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLAnchorElement, Element>>) => void) | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "((event: BaseUIEvent<SubmitEvent<HTMLAnchorElement>>) => void) | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "((event: BaseUIEvent<KeyboardEvent<HTMLAnchorElement>>) => void) | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "((event: BaseUIEvent<MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>>) => void) | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "href",
            "type": "string | undefined",
            "description": "Native href attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | ((state: PreviewCardTriggerState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, PreviewCardTriggerState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: PreviewCardTriggerState) => React.CSSProperties | undefined) | undefined",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          },
          {
            "name": "asChild",
            "type": "boolean | undefined",
            "description": "Native asChild attribute or callback; forwarded to the rendered element."
          }
        ]
      },
      {
        "name": "HoverCardContent",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLDivElement, Element>>) => void) | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "((event: BaseUIEvent<SubmitEvent<HTMLDivElement>>) => void) | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "((event: BaseUIEvent<KeyboardEvent<HTMLDivElement>>) => void) | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "((event: BaseUIEvent<MouseEvent<HTMLDivElement, globalThis.MouseEvent>>) => void) | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | ((state: PreviewCardPopupState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, PreviewCardPopupState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: PreviewCardPopupState) => React.CSSProperties | undefined) | undefined",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          },
          {
            "name": "align",
            "type": "Align | undefined",
            "description": "How to align the popup relative to the specified side.",
            "default": "\"center\""
          },
          {
            "name": "alignOffset",
            "type": "number | OffsetFunction | undefined",
            "description": "Additional offset along the alignment axis in pixels.\nAlso accepts a function that returns the offset to read the dimensions of the anchor\nand positioner elements, along with its side and alignment.\n\nThe function takes a `data` object parameter with the following properties:\n- `data.anchor`: the dimensions of the anchor element with properties `width` and `height`.\n- `data.positioner`: the dimensions of the positioner element with properties `width` and `height`.\n- `data.side`: which side of the anchor element the positioner is aligned against.\n- `data.align`: how the positioner is aligned relative to the specified side.",
            "default": "4"
          },
          {
            "name": "side",
            "type": "Side | undefined",
            "description": "Which side of the anchor element to align the popup against.\nMay automatically change to avoid collisions.",
            "default": "\"bottom\""
          },
          {
            "name": "sideOffset",
            "type": "number | OffsetFunction | undefined",
            "description": "Distance between the anchor and the popup in pixels.\nAlso accepts a function that returns the distance to read the dimensions of the anchor\nand positioner elements, along with its side and alignment.\n\nThe function takes a `data` object parameter with the following properties:\n- `data.anchor`: the dimensions of the anchor element with properties `width` and `height`.\n- `data.positioner`: the dimensions of the positioner element with properties `width` and `height`.\n- `data.side`: which side of the anchor element the positioner is aligned against.\n- `data.align`: how the positioner is aligned relative to the specified side.",
            "default": "4"
          }
        ]
      }
    ],
    "links": [
      {
        "label": "shadcn Base hover-card reference",
        "href": "https://ui.shadcn.com/docs/components/base/hover-card"
      },
      {
        "label": "Base UI preview-card API",
        "href": "https://base-ui.com/react/components/preview-card#api-reference"
      }
    ],
    "notes": [
      "Uses Base UI PreviewCard, replacing Radix. Trigger renders a native link and accepts delay/closeDelay/render. Legacy root openDelay/closeDelay and Trigger asChild remain supported.",
      "Provide essential information in the original content or destination as well. A hover preview does not replace an accessible form or dialog."
    ]
  },
  "popover": {
    "parts": [
      {
        "name": "Popover",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "defaultOpen",
            "type": "boolean | undefined",
            "description": "Whether the popover is initially open.\n\nTo render a controlled popover, use the `open` prop instead.",
            "default": "false"
          },
          {
            "name": "open",
            "type": "boolean | undefined",
            "description": "Whether the popover is currently open."
          },
          {
            "name": "onOpenChange",
            "type": "((open: boolean, eventDetails: PopoverRoot.ChangeEventDetails) => void) | undefined",
            "description": "Event handler called when the popover is opened or closed."
          },
          {
            "name": "onOpenChangeComplete",
            "type": "((open: boolean) => void) | undefined",
            "description": "Event handler called after any animations complete when the popover is opened or closed."
          },
          {
            "name": "actionsRef",
            "type": "React.RefObject<PopoverRootActions | null> | undefined",
            "description": "A ref to imperative actions.\n- `unmount`: Manually unmounts the popover.\nCall this after any externally controlled closing animation finishes.\n- `close`: Closes the popover imperatively when called."
          },
          {
            "name": "modal",
            "type": "boolean | \"trap-focus\" | undefined",
            "description": "Determines if the popover enters a modal state when open.\n- `true`: user interaction is limited to the popover: document page scroll is locked, and pointer interactions on outside elements are disabled.\n- `false`: user interaction with the rest of the document is allowed.\n- `'trap-focus'`: focus is trapped inside the popover, but document page scroll is not locked and pointer interactions outside of it remain enabled.\n\nOn touch devices, a `true` modal blocks outside taps but leaves the page scrollable unless the popup spans nearly the full viewport width, matching native iOS behavior.\n\nWhen `modal` is `true`, focus trapping is enabled only if `<Popover.Close>` is rendered\ninside `<Popover.Popup>`. It can be visually hidden with your own CSS if needed, such as\nTailwind's `sr-only` utility.\n\nWhen `modal` is `'trap-focus'`, render `<Popover.Close>` inside `<Popover.Popup>` so touch\nscreen readers can escape the popup.",
            "default": "false"
          },
          {
            "name": "triggerId",
            "type": "string | null | undefined",
            "description": "ID of the trigger that the popover is associated with.\nThis is useful in conjunction with the `open` prop to create a controlled popover.\nThere's no need to specify this prop when the popover is uncontrolled (that is, when the `open` prop is not set)."
          },
          {
            "name": "defaultTriggerId",
            "type": "string | null | undefined",
            "description": "ID of the trigger that the popover is associated with.\nThis is useful in conjunction with the `defaultOpen` prop to create an initially open popover."
          },
          {
            "name": "handle",
            "type": "PopoverHandle<Payload> | undefined",
            "description": "A handle to associate the popover with a trigger.\nIf specified, allows external triggers to control the popover's open state."
          },
          {
            "name": "children",
            "type": "React.ReactNode | PayloadChildRenderFunction<Payload>",
            "description": "The content of the popover.\nThis can be a regular React node or a render function that receives the `payload` of the active trigger."
          }
        ]
      },
      {
        "name": "PopoverContent",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "initialFocus",
            "type": "boolean | React.RefObject<HTMLElement | null> | ((openType: InteractionType) => void | boolean | HTMLElement | null) | undefined",
            "description": "Determines the element to focus when the popover is opened.\nBy default, focus moves to the first tabbable element inside the popup, except when the popover\nis opened by touch \u2014 then the popup itself is focused to avoid opening the virtual keyboard.\n\n- `false`: Do not move focus.\n- `true`: Move focus based on the default behavior (first tabbable element or popup).\n- `RefObject`: Move focus to the ref element.\n- `function`: Called with the interaction type (`mouse`, `touch`, `pen`, or `keyboard`).\n  Return an element to focus, `true` to use the default behavior, `null` to fall back to the default behavior, or `false`/`undefined` to do nothing."
          },
          {
            "name": "finalFocus",
            "type": "boolean | React.RefObject<HTMLElement | null> | ((closeType: InteractionType) => void | boolean | HTMLElement | null) | undefined",
            "description": "Determines the element to focus when the popover is closed.\n\n- `false`: Do not move focus.\n- `true`: Move focus based on the default behavior (trigger or previously focused element).\n- `RefObject`: Move focus to the ref element.\n- `function`: Called with the interaction type (`mouse`, `touch`, `pen`, or `keyboard`).\n  Return an element to focus, `true` to use the default behavior, `null` to fall back to the default behavior, or `false`/`undefined` to do nothing."
          },
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLDivElement, Element>>) => void) | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "((event: BaseUIEvent<SubmitEvent<HTMLDivElement>>) => void) | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "((event: BaseUIEvent<KeyboardEvent<HTMLDivElement>>) => void) | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "((event: BaseUIEvent<MouseEvent<HTMLDivElement, globalThis.MouseEvent>>) => void) | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | ((state: PopoverPopupState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, PopoverPopupState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: PopoverPopupState) => React.CSSProperties | undefined) | undefined",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          },
          {
            "name": "align",
            "type": "Align | undefined",
            "description": "How to align the popup relative to the specified side.",
            "default": "\"center\""
          },
          {
            "name": "alignOffset",
            "type": "number | OffsetFunction | undefined",
            "description": "Additional offset along the alignment axis in pixels.\nAlso accepts a function that returns the offset to read the dimensions of the anchor\nand positioner elements, along with its side and alignment.\n\nThe function takes a `data` object parameter with the following properties:\n- `data.anchor`: the dimensions of the anchor element with properties `width` and `height`.\n- `data.positioner`: the dimensions of the positioner element with properties `width` and `height`.\n- `data.side`: which side of the anchor element the positioner is aligned against.\n- `data.align`: how the positioner is aligned relative to the specified side.",
            "default": "0"
          },
          {
            "name": "side",
            "type": "Side | undefined",
            "description": "Which side of the anchor element to align the popup against.\nMay automatically change to avoid collisions.",
            "default": "\"bottom\""
          },
          {
            "name": "sideOffset",
            "type": "number | OffsetFunction | undefined",
            "description": "Distance between the anchor and the popup in pixels.\nAlso accepts a function that returns the distance to read the dimensions of the anchor\nand positioner elements, along with its side and alignment.\n\nThe function takes a `data` object parameter with the following properties:\n- `data.anchor`: the dimensions of the anchor element with properties `width` and `height`.\n- `data.positioner`: the dimensions of the positioner element with properties `width` and `height`.\n- `data.side`: which side of the anchor element the positioner is aligned against.\n- `data.align`: how the positioner is aligned relative to the specified side.",
            "default": "6"
          }
        ]
      },
      {
        "name": "PopoverDescription",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLParagraphElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLParagraphElement, Element>>) => void) | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "((event: BaseUIEvent<SubmitEvent<HTMLParagraphElement>>) => void) | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "((event: BaseUIEvent<KeyboardEvent<HTMLParagraphElement>>) => void) | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "((event: BaseUIEvent<MouseEvent<HTMLParagraphElement, globalThis.MouseEvent>>) => void) | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | ((state: PopoverDescriptionState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, PopoverDescriptionState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: PopoverDescriptionState) => React.CSSProperties | undefined) | undefined",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          }
        ]
      },
      {
        "name": "PopoverTitle",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLHeadingElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLHeadingElement, Element>>) => void) | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "((event: BaseUIEvent<SubmitEvent<HTMLHeadingElement>>) => void) | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "((event: BaseUIEvent<KeyboardEvent<HTMLHeadingElement>>) => void) | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "((event: BaseUIEvent<MouseEvent<HTMLHeadingElement, globalThis.MouseEvent>>) => void) | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | ((state: PopoverTitleState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, PopoverTitleState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: PopoverTitleState) => React.CSSProperties | undefined) | undefined",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          }
        ]
      },
      {
        "name": "PopoverHeader",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "defaultChecked",
            "type": "boolean | undefined",
            "description": "Native defaultChecked attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "style",
            "type": "CSSProperties | undefined",
            "description": "Native style attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "ChangeEventHandler<HTMLDivElement, Element> | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "SubmitEventHandler<HTMLDivElement> | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "KeyboardEventHandler<HTMLDivElement> | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "MouseEventHandler<HTMLDivElement> | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          }
        ]
      },
      {
        "name": "PopoverTrigger",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "nativeButton",
            "type": "boolean | undefined",
            "description": "Whether the component renders a native `<button>` element when replacing it\nvia the `render` prop.\nSet to `false` if the rendered element is not a button (for example, `<div>`).\nWhether the component renders a native `<button>` element when replacing it\nvia the `render` prop.\nSet to `false` if the rendered element is not a button (e.g. `<div>`).",
            "default": "true"
          },
          {
            "name": "ref",
            "type": "Ref<HTMLButtonElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "disabled",
            "type": "boolean | undefined",
            "description": "Native disabled attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "name",
            "type": "string | undefined",
            "description": "Native name attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "type",
            "type": "\"button\" | \"submit\" | \"reset\" | undefined",
            "description": "Native type attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "value",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native value attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "ID of the trigger. In addition to being forwarded to the rendered element,\nit is also used to specify the active trigger for the popover in controlled mode (with the PopoverRoot `triggerId` prop)."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLButtonElement, Element>>) => void) | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "((event: BaseUIEvent<SubmitEvent<HTMLButtonElement>>) => void) | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "((event: BaseUIEvent<KeyboardEvent<HTMLButtonElement>>) => void) | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "((event: BaseUIEvent<MouseEvent<HTMLButtonElement, globalThis.MouseEvent>>) => void) | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | ((state: PopoverTriggerState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, PopoverTriggerState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: PopoverTriggerState) => React.CSSProperties | undefined) | undefined",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          },
          {
            "name": "handle",
            "type": "PopoverHandle<unknown> | undefined",
            "description": "A handle to associate the trigger with a popover."
          },
          {
            "name": "payload",
            "type": "unknown",
            "description": "A payload to pass to the popover when it is opened."
          },
          {
            "name": "openOnHover",
            "type": "boolean | undefined",
            "description": "Whether the popover should also open when the trigger is hovered.",
            "default": "false"
          },
          {
            "name": "delay",
            "type": "number | undefined",
            "description": "How long to wait before the popover may be opened on hover. Specified in milliseconds.\n\nRequires the `openOnHover` prop.",
            "default": "300"
          },
          {
            "name": "closeDelay",
            "type": "number | undefined",
            "description": "How long to wait before closing the popover that was opened on hover.\nSpecified in milliseconds.\n\nRequires the `openOnHover` prop.",
            "default": "0"
          }
        ]
      }
    ],
    "links": [
      {
        "label": "shadcn Base popover reference",
        "href": "https://ui.shadcn.com/docs/components/base/popover"
      },
      {
        "label": "Base UI popover API",
        "href": "https://base-ui.com/react/components/popover#api-reference"
      }
    ],
    "notes": [
      "Base UI Root/Trigger/Popup with Leement Motion and nested portal scope. Content adds align/alignOffset/side/sideOffset; default sideOffset remains 6px.",
      "PopoverHeader is a native layout wrapper. Title/Description associate with the popup; use render to compose triggers."
    ]
  },
  "sheet": {
    "parts": [
      {
        "name": "SheetPortal",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "keepMounted",
            "type": "boolean | undefined",
            "description": "Whether to keep the portal mounted in the DOM while the popup is hidden.",
            "default": "false"
          },
          {
            "name": "container",
            "type": "HTMLElement | ShadowRoot | React.RefObject<HTMLElement | ShadowRoot | null> | null | undefined",
            "description": "A parent element to render the portal element into."
          },
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLDivElement, Element>>) => void) | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "((event: BaseUIEvent<SubmitEvent<HTMLDivElement>>) => void) | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "((event: BaseUIEvent<KeyboardEvent<HTMLDivElement>>) => void) | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "((event: BaseUIEvent<MouseEvent<HTMLDivElement, globalThis.MouseEvent>>) => void) | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | ((state: AlertDialogPortalState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, AlertDialogPortalState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: AlertDialogPortalState) => React.CSSProperties | undefined) | undefined",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          }
        ]
      },
      {
        "name": "SheetOverlay",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "forceRender",
            "type": "boolean | undefined",
            "description": "Whether the backdrop is forced to render even when nested.",
            "default": "false"
          },
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLDivElement, Element>>) => void) | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "((event: BaseUIEvent<SubmitEvent<HTMLDivElement>>) => void) | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "((event: BaseUIEvent<KeyboardEvent<HTMLDivElement>>) => void) | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "((event: BaseUIEvent<MouseEvent<HTMLDivElement, globalThis.MouseEvent>>) => void) | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | ((state: AlertDialogBackdropState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, AlertDialogBackdropState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: AlertDialogBackdropState) => React.CSSProperties | undefined) | undefined",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          }
        ]
      },
      {
        "name": "Sheet",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "open",
            "type": "boolean | undefined",
            "description": "Whether the dialog is currently open."
          },
          {
            "name": "defaultOpen",
            "type": "boolean | undefined",
            "description": "Whether the dialog is initially open.\n\nTo render a controlled dialog, use the `open` prop instead.",
            "default": "false"
          },
          {
            "name": "modal",
            "type": "boolean | \"trap-focus\" | undefined",
            "description": "Determines if the dialog enters a modal state when open.\n- `true`: user interaction is limited to just the dialog: focus is trapped, document page scroll is locked, and pointer interactions on outside elements are disabled.\n- `false`: user interaction with the rest of the document is allowed.\n- `'trap-focus'`: focus is trapped inside the dialog, but document page scroll is not locked and pointer interactions outside of it remain enabled.\n\nWhen `modal` is `true` or `'trap-focus'`, render `<Dialog.Close>` inside `<Dialog.Popup>` so\ntouch screen readers can escape the popup.",
            "default": "true"
          },
          {
            "name": "onOpenChange",
            "type": "((open: boolean, eventDetails: DialogRoot.ChangeEventDetails) => void) | undefined",
            "description": "Event handler called when the dialog is opened or closed."
          },
          {
            "name": "onOpenChangeComplete",
            "type": "((open: boolean) => void) | undefined",
            "description": "Event handler called after any animations complete when the dialog is opened or closed."
          },
          {
            "name": "disablePointerDismissal",
            "type": "boolean | undefined",
            "description": "Whether to prevent the dialog from closing on outside presses.\nFor non-modal dialogs, this also prevents the dialog from closing when focus moves outside of it.",
            "default": "false"
          },
          {
            "name": "actionsRef",
            "type": "React.RefObject<DialogRootActions | null> | undefined",
            "description": "A ref to imperative actions.\n- `unmount`: Manually unmounts the dialog.\nCall this after any externally controlled closing animation finishes.\n- `close`: Closes the dialog imperatively when called."
          },
          {
            "name": "handle",
            "type": "DialogHandle<Payload> | undefined",
            "description": "A handle to associate the dialog with a trigger.\nIf specified, allows external triggers to control the dialog's open state.\nCan be created with the Dialog.createHandle() method."
          },
          {
            "name": "children",
            "type": "React.ReactNode | PayloadChildRenderFunction<Payload>",
            "description": "The content of the dialog.\nThis can be a regular React node or a render function that receives the `payload` of the active trigger."
          },
          {
            "name": "triggerId",
            "type": "string | null | undefined",
            "description": "ID of the trigger that the dialog is associated with.\nThis is useful in conjunction with the `open` prop to create a controlled dialog.\nThere's no need to specify this prop when the dialog is uncontrolled (that is, when the `open` prop is not set)."
          },
          {
            "name": "defaultTriggerId",
            "type": "string | null | undefined",
            "description": "ID of the trigger that the dialog is associated with.\nThis is useful in conjunction with the `defaultOpen` prop to create an initially open dialog."
          }
        ]
      },
      {
        "name": "SheetClose",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "nativeButton",
            "type": "boolean | undefined",
            "description": "Whether the component renders a native `<button>` element when replacing it\nvia the `render` prop.\nSet to `false` if the rendered element is not a button (for example, `<div>`).",
            "default": "true"
          },
          {
            "name": "ref",
            "type": "Ref<HTMLButtonElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "disabled",
            "type": "boolean | undefined",
            "description": "Native disabled attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "name",
            "type": "string | undefined",
            "description": "Native name attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "type",
            "type": "\"button\" | \"submit\" | \"reset\" | undefined",
            "description": "Native type attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "value",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native value attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLButtonElement, Element>>) => void) | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "((event: BaseUIEvent<SubmitEvent<HTMLButtonElement>>) => void) | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "((event: BaseUIEvent<KeyboardEvent<HTMLButtonElement>>) => void) | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "((event: BaseUIEvent<MouseEvent<HTMLButtonElement, globalThis.MouseEvent>>) => void) | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | ((state: AlertDialogCloseState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, AlertDialogCloseState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: AlertDialogCloseState) => React.CSSProperties | undefined) | undefined",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          }
        ]
      },
      {
        "name": "SheetContent",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "initialFocus",
            "type": "boolean | React.RefObject<HTMLElement | null> | ((openType: InteractionType) => boolean | HTMLElement | null | void) | undefined",
            "description": "Determines the element to focus when the dialog is opened.\nBy default, focus moves to the first tabbable element inside the popup, except when the dialog\nis opened by touch \u2014 then the popup itself is focused to avoid opening the virtual keyboard.\n\n- `false`: Do not move focus.\n- `true`: Move focus based on the default behavior (first tabbable element or popup).\n- `RefObject`: Move focus to the ref element.\n- `function`: Called with the interaction type (`mouse`, `touch`, `pen`, or `keyboard`).\n  Return an element to focus, `true` to use the default behavior, `null` to fall back to the default behavior, or `false`/`undefined` to do nothing."
          },
          {
            "name": "finalFocus",
            "type": "boolean | React.RefObject<HTMLElement | null> | ((closeType: InteractionType) => boolean | HTMLElement | null | void) | undefined",
            "description": "Determines the element to focus when the dialog is closed.\n\n- `false`: Do not move focus.\n- `true`: Move focus based on the default behavior (trigger or previously focused element).\n- `RefObject`: Move focus to the ref element.\n- `function`: Called with the interaction type (`mouse`, `touch`, `pen`, or `keyboard`).\n  Return an element to focus, `true` to use the default behavior, `null` to fall back to the default behavior, or `false`/`undefined` to do nothing."
          },
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLDivElement, Element>>) => void) | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "((event: BaseUIEvent<SubmitEvent<HTMLDivElement>>) => void) | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "((event: BaseUIEvent<KeyboardEvent<HTMLDivElement>>) => void) | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "((event: BaseUIEvent<MouseEvent<HTMLDivElement, globalThis.MouseEvent>>) => void) | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | ((state: AlertDialogPopupState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, AlertDialogPopupState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: AlertDialogPopupState) => React.CSSProperties | undefined) | undefined",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          },
          {
            "name": "side",
            "type": "\"top\" | \"bottom\" | \"left\" | \"right\" | undefined",
            "description": "Native side attribute or callback; forwarded to the rendered element.",
            "default": "\"right\""
          },
          {
            "name": "showCloseButton",
            "type": "boolean | undefined",
            "description": "Native showCloseButton attribute or callback; forwarded to the rendered element.",
            "default": "true"
          }
        ]
      },
      {
        "name": "SheetDescription",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLParagraphElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLParagraphElement, Element>>) => void) | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "((event: BaseUIEvent<SubmitEvent<HTMLParagraphElement>>) => void) | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "((event: BaseUIEvent<KeyboardEvent<HTMLParagraphElement>>) => void) | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "((event: BaseUIEvent<MouseEvent<HTMLParagraphElement, globalThis.MouseEvent>>) => void) | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | ((state: AlertDialogDescriptionState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, AlertDialogDescriptionState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: AlertDialogDescriptionState) => React.CSSProperties | undefined) | undefined",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          }
        ]
      },
      {
        "name": "SheetFooter",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "defaultChecked",
            "type": "boolean | undefined",
            "description": "Native defaultChecked attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "style",
            "type": "CSSProperties | undefined",
            "description": "Native style attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "ChangeEventHandler<HTMLDivElement, Element> | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "SubmitEventHandler<HTMLDivElement> | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "KeyboardEventHandler<HTMLDivElement> | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "MouseEventHandler<HTMLDivElement> | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          }
        ]
      },
      {
        "name": "SheetHeader",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "defaultChecked",
            "type": "boolean | undefined",
            "description": "Native defaultChecked attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "style",
            "type": "CSSProperties | undefined",
            "description": "Native style attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "ChangeEventHandler<HTMLDivElement, Element> | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "SubmitEventHandler<HTMLDivElement> | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "KeyboardEventHandler<HTMLDivElement> | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "MouseEventHandler<HTMLDivElement> | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          }
        ]
      },
      {
        "name": "SheetTitle",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLHeadingElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLHeadingElement, Element>>) => void) | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "((event: BaseUIEvent<SubmitEvent<HTMLHeadingElement>>) => void) | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "((event: BaseUIEvent<KeyboardEvent<HTMLHeadingElement>>) => void) | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "((event: BaseUIEvent<MouseEvent<HTMLHeadingElement, globalThis.MouseEvent>>) => void) | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | ((state: AlertDialogTitleState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, AlertDialogTitleState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: AlertDialogTitleState) => React.CSSProperties | undefined) | undefined",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          }
        ]
      },
      {
        "name": "SheetTrigger",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "handle",
            "type": "DialogHandle<unknown> | undefined",
            "description": "A handle to associate the trigger with a dialog.\nCan be created with the Dialog.createHandle() method."
          },
          {
            "name": "payload",
            "type": "unknown",
            "description": "A payload to pass to the dialog when it is opened."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "ID of the trigger. In addition to being forwarded to the rendered element,\nit is also used to specify the active trigger for the dialog in controlled mode (with the DialogRoot `triggerId` prop)."
          },
          {
            "name": "nativeButton",
            "type": "boolean | undefined",
            "description": "Whether the component renders a native `<button>` element when replacing it\nvia the `render` prop.\nSet to `false` if the rendered element is not a button (for example, `<div>`).",
            "default": "true"
          },
          {
            "name": "ref",
            "type": "Ref<HTMLButtonElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "disabled",
            "type": "boolean | undefined",
            "description": "Native disabled attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "name",
            "type": "string | undefined",
            "description": "Native name attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "type",
            "type": "\"button\" | \"submit\" | \"reset\" | undefined",
            "description": "Native type attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "value",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native value attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLButtonElement, Element>>) => void) | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "((event: BaseUIEvent<SubmitEvent<HTMLButtonElement>>) => void) | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "((event: BaseUIEvent<KeyboardEvent<HTMLButtonElement>>) => void) | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "((event: BaseUIEvent<MouseEvent<HTMLButtonElement, globalThis.MouseEvent>>) => void) | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | ((state: DialogTriggerState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, DialogTriggerState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: DialogTriggerState) => React.CSSProperties | undefined) | undefined",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          }
        ]
      }
    ],
    "links": [
      {
        "label": "shadcn Base sheet reference",
        "href": "https://ui.shadcn.com/docs/components/base/sheet"
      },
      {
        "label": "Base UI dialog API",
        "href": "https://base-ui.com/react/components/dialog#api-reference"
      }
    ],
    "notes": [
      "Uses Base UI Dialog and Motion. Content supports top/right/bottom/left and showCloseButton=true. Portal/Overlay are public parts as in the baseline.",
      "Choose initialFocus/finalFocus and controlled root props using the official Dialog API. Content has native overflow and a bounded mobile width."
    ]
  },
  "dropdown-menu": {
    "parts": [
      {
        "name": "DropdownMenu",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "defaultOpen",
            "type": "boolean | undefined",
            "description": "Whether the menu is initially open.\n\nTo render a controlled menu, use the `open` prop instead.",
            "default": "false"
          },
          {
            "name": "loopFocus",
            "type": "boolean | undefined",
            "description": "Whether to loop keyboard focus back to the first item\nwhen the end of the list is reached while using the arrow keys.",
            "default": "true"
          },
          {
            "name": "highlightItemOnHover",
            "type": "boolean | undefined",
            "description": "Whether moving the pointer over items should highlight them.\nDisabling this prop allows CSS `:hover` to be differentiated from the `:focus` (`data-highlighted`) state.",
            "default": "true"
          },
          {
            "name": "modal",
            "type": "boolean | undefined",
            "description": "Determines if the menu enters a modal state when open.\n- `true`: user interaction is limited to the menu: document page scroll is locked and pointer interactions on outside elements are disabled.\n- `false`: user interaction with the rest of the document is allowed.\n\nOn touch devices, a `true` modal blocks outside taps but leaves the page scrollable unless the popup spans nearly the full viewport width, matching native iOS behavior.\n\nNested menus ignore this prop, and menus opened by hover are never modal.",
            "default": "true"
          },
          {
            "name": "onOpenChange",
            "type": "((open: boolean, eventDetails: MenuRoot.ChangeEventDetails) => void) | undefined",
            "description": "Event handler called when the menu is opened or closed."
          },
          {
            "name": "onOpenChangeComplete",
            "type": "((open: boolean) => void) | undefined",
            "description": "Event handler called after any animations complete when the menu is opened or closed."
          },
          {
            "name": "open",
            "type": "boolean | undefined",
            "description": "Whether the menu is currently open."
          },
          {
            "name": "orientation",
            "type": "MenuRootOrientation | undefined",
            "description": "The visual orientation of the menu.\nControls whether roving focus uses up/down or left/right arrow keys.",
            "default": "'vertical'"
          },
          {
            "name": "disabled",
            "type": "boolean | undefined",
            "description": "Whether the component should ignore user interaction.",
            "default": "false"
          },
          {
            "name": "closeParentOnEsc",
            "type": "boolean | undefined",
            "description": "When in a submenu, determines whether pressing the Escape key\ncloses the entire menu, or only the current child menu.",
            "default": "false"
          },
          {
            "name": "actionsRef",
            "type": "React.RefObject<MenuRootActions | null> | undefined",
            "description": "A ref to imperative actions.\n- `unmount`: Manually unmounts the menu.\n  Call this after any externally controlled closing animation finishes.\n- `close`: When specified, the menu can be closed imperatively."
          },
          {
            "name": "triggerId",
            "type": "string | null | undefined",
            "description": "ID of the trigger that the menu is associated with.\nThis is useful in conjunction with the `open` prop to create a controlled menu.\nThere's no need to specify this prop when the menu is uncontrolled (that is, when the `open` prop is not set)."
          },
          {
            "name": "defaultTriggerId",
            "type": "string | null | undefined",
            "description": "ID of the trigger that the menu is associated with.\nThis is useful in conjunction with the `defaultOpen` prop to create an initially open menu."
          },
          {
            "name": "handle",
            "type": "MenuHandle<Payload> | undefined",
            "description": "A handle to associate the menu with a trigger.\nIf specified, allows external triggers to control the menu's open state."
          },
          {
            "name": "children",
            "type": "React.ReactNode | PayloadChildRenderFunction<Payload>",
            "description": "The content of the menu.\nThis can be a regular React node or a render function that receives the `payload` of the active trigger."
          }
        ]
      },
      {
        "name": "DropdownMenuCheckboxItem",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "checked",
            "type": "boolean | undefined",
            "description": "Whether the checkbox item is currently ticked.\n\nTo render an uncontrolled checkbox item, use the `defaultChecked` prop instead."
          },
          {
            "name": "defaultChecked",
            "type": "boolean | undefined",
            "description": "Whether the checkbox item is initially ticked.\n\nTo render a controlled checkbox item, use the `checked` prop instead.",
            "default": "false"
          },
          {
            "name": "onCheckedChange",
            "type": "((checked: boolean, eventDetails: MenuCheckboxItem.ChangeEventDetails) => void) | undefined",
            "description": "Event handler called when the checkbox item is ticked or unticked."
          },
          {
            "name": "onClick",
            "type": "((event: BaseUIEvent<React.MouseEvent<HTMLDivElement, MouseEvent>>) => void) | undefined",
            "description": "The click handler for the menu item."
          },
          {
            "name": "disabled",
            "type": "boolean | undefined",
            "description": "Whether the component should ignore user interaction.",
            "default": "false"
          },
          {
            "name": "label",
            "type": "string | undefined",
            "description": "Overrides the text label to use when the item is matched during keyboard text navigation."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "closeOnClick",
            "type": "boolean | undefined",
            "description": "Whether to close the menu when the item is clicked.",
            "default": "false"
          },
          {
            "name": "nativeButton",
            "type": "boolean | undefined",
            "description": "Whether the component renders a native `<button>` element when replacing it\nvia the `render` prop.\nSet to `true` if the rendered element is a native button.",
            "default": "false"
          },
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLDivElement, Element>>) => void) | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "((event: BaseUIEvent<SubmitEvent<HTMLDivElement>>) => void) | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "((event: BaseUIEvent<KeyboardEvent<HTMLDivElement>>) => void) | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | ((state: ContextMenuCheckboxItemState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, ContextMenuCheckboxItemState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: ContextMenuCheckboxItemState) => React.CSSProperties | undefined) | undefined",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          },
          {
            "name": "inset",
            "type": "boolean | undefined",
            "description": "Native inset attribute or callback; forwarded to the rendered element."
          }
        ]
      },
      {
        "name": "DropdownMenuContent",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "children",
            "type": "React.ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "finalFocus",
            "type": "boolean | React.RefObject<HTMLElement | null> | ((closeType: InteractionType) => boolean | HTMLElement | null | void) | undefined",
            "description": "Determines the element to focus when the menu is closed.\n\n- `false`: Do not move focus.\n- `true`: Move focus based on the default behavior (trigger or previously focused element).\n- `RefObject`: Move focus to the ref element.\n- `function`: Called with the interaction type (`mouse`, `touch`, `pen`, or `keyboard`).\n  Return an element to focus, `true` to use the default behavior, or `false`/`undefined` to do nothing."
          },
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLDivElement, Element>>) => void) | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "((event: BaseUIEvent<SubmitEvent<HTMLDivElement>>) => void) | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "((event: BaseUIEvent<KeyboardEvent<HTMLDivElement>>) => void) | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "((event: BaseUIEvent<MouseEvent<HTMLDivElement, globalThis.MouseEvent>>) => void) | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | ((state: ContextMenuPopupState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, ContextMenuPopupState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: ContextMenuPopupState) => React.CSSProperties | undefined) | undefined",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          },
          {
            "name": "align",
            "type": "Align | undefined",
            "description": "How to align the popup relative to the specified side.",
            "default": "\"start\""
          },
          {
            "name": "alignOffset",
            "type": "number | OffsetFunction | undefined",
            "description": "Additional offset along the alignment axis in pixels.\nAlso accepts a function that returns the offset to read the dimensions of the anchor\nand positioner elements, along with its side and alignment.\n\nThe function takes a `data` object parameter with the following properties:\n- `data.anchor`: the dimensions of the anchor element with properties `width` and `height`.\n- `data.positioner`: the dimensions of the positioner element with properties `width` and `height`.\n- `data.side`: which side of the anchor element the positioner is aligned against.\n- `data.align`: how the positioner is aligned relative to the specified side.",
            "default": "0"
          },
          {
            "name": "side",
            "type": "Side | undefined",
            "description": "Which side of the anchor element to align the popup against.\nMay automatically change to avoid collisions.",
            "default": "\"bottom\""
          },
          {
            "name": "sideOffset",
            "type": "number | OffsetFunction | undefined",
            "description": "Distance between the anchor and the popup in pixels.\nAlso accepts a function that returns the distance to read the dimensions of the anchor\nand positioner elements, along with its side and alignment.\n\nThe function takes a `data` object parameter with the following properties:\n- `data.anchor`: the dimensions of the anchor element with properties `width` and `height`.\n- `data.positioner`: the dimensions of the positioner element with properties `width` and `height`.\n- `data.side`: which side of the anchor element the positioner is aligned against.\n- `data.align`: how the positioner is aligned relative to the specified side.",
            "default": "4"
          }
        ]
      },
      {
        "name": "DropdownMenuGroup",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "children",
            "type": "React.ReactNode",
            "description": "The content of the component."
          },
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLDivElement, Element>>) => void) | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "((event: BaseUIEvent<SubmitEvent<HTMLDivElement>>) => void) | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "((event: BaseUIEvent<KeyboardEvent<HTMLDivElement>>) => void) | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "((event: BaseUIEvent<MouseEvent<HTMLDivElement, globalThis.MouseEvent>>) => void) | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | ((state: ContextMenuGroupState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, ContextMenuGroupState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: ContextMenuGroupState) => React.CSSProperties | undefined) | undefined",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          }
        ]
      },
      {
        "name": "DropdownMenuItem",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "onClick",
            "type": "((event: BaseUIEvent<React.MouseEvent<HTMLDivElement, MouseEvent>>) => void) | undefined",
            "description": "The click handler for the menu item."
          },
          {
            "name": "disabled",
            "type": "boolean | undefined",
            "description": "Whether the component should ignore user interaction.",
            "default": "false"
          },
          {
            "name": "label",
            "type": "string | undefined",
            "description": "Overrides the text label to use when the item is matched during keyboard text navigation."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "closeOnClick",
            "type": "boolean | undefined",
            "description": "Whether to close the menu when the item is clicked.",
            "default": "true"
          },
          {
            "name": "nativeButton",
            "type": "boolean | undefined",
            "description": "Whether the component renders a native `<button>` element when replacing it\nvia the `render` prop.\nSet to `true` if the rendered element is a native button.",
            "default": "false"
          },
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLDivElement, Element>>) => void) | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "((event: BaseUIEvent<SubmitEvent<HTMLDivElement>>) => void) | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "((event: BaseUIEvent<KeyboardEvent<HTMLDivElement>>) => void) | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | ((state: ContextMenuItemState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, ContextMenuItemState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: ContextMenuItemState) => React.CSSProperties | undefined) | undefined",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          },
          {
            "name": "inset",
            "type": "boolean | undefined",
            "description": "Native inset attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "variant",
            "type": "\"default\" | \"destructive\" | undefined",
            "description": "Native variant attribute or callback; forwarded to the rendered element.",
            "default": "\"default\""
          }
        ]
      },
      {
        "name": "DropdownMenuLabel",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLDivElement, Element>>) => void) | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "((event: BaseUIEvent<SubmitEvent<HTMLDivElement>>) => void) | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "((event: BaseUIEvent<KeyboardEvent<HTMLDivElement>>) => void) | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "((event: BaseUIEvent<MouseEvent<HTMLDivElement, globalThis.MouseEvent>>) => void) | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | ((state: ContextMenuGroupLabelState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, ContextMenuGroupLabelState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: ContextMenuGroupLabelState) => React.CSSProperties | undefined) | undefined",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          },
          {
            "name": "inset",
            "type": "boolean | undefined",
            "description": "Native inset attribute or callback; forwarded to the rendered element."
          }
        ]
      },
      {
        "name": "DropdownMenuPortal",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "keepMounted",
            "type": "boolean | undefined",
            "description": "Whether to keep the portal mounted in the DOM while the popup is hidden.",
            "default": "false"
          },
          {
            "name": "container",
            "type": "HTMLElement | ShadowRoot | React.RefObject<HTMLElement | ShadowRoot | null> | null | undefined",
            "description": "A parent element to render the portal element into."
          },
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLDivElement, Element>>) => void) | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "((event: BaseUIEvent<SubmitEvent<HTMLDivElement>>) => void) | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "((event: BaseUIEvent<KeyboardEvent<HTMLDivElement>>) => void) | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "((event: BaseUIEvent<MouseEvent<HTMLDivElement, globalThis.MouseEvent>>) => void) | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | ((state: ContextMenuPortalState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, ContextMenuPortalState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: ContextMenuPortalState) => React.CSSProperties | undefined) | undefined",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          }
        ]
      },
      {
        "name": "DropdownMenuRadioGroup",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "children",
            "type": "React.ReactNode",
            "description": "The content of the component."
          },
          {
            "name": "value",
            "type": "any",
            "description": "The controlled value of the radio item that should be currently selected.\n\nTo render an uncontrolled radio group, use the `defaultValue` prop instead."
          },
          {
            "name": "defaultValue",
            "type": "any",
            "description": "The uncontrolled value of the radio item that should be initially selected.\n\nTo render a controlled radio group, use the `value` prop instead."
          },
          {
            "name": "onValueChange",
            "type": "((value: any, eventDetails: MenuRadioGroup.ChangeEventDetails) => void) | undefined",
            "description": "Function called when the selected value changes."
          },
          {
            "name": "disabled",
            "type": "boolean | undefined",
            "description": "Whether the component should ignore user interaction.",
            "default": "false"
          },
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLDivElement, Element>>) => void) | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "((event: BaseUIEvent<SubmitEvent<HTMLDivElement>>) => void) | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "((event: BaseUIEvent<KeyboardEvent<HTMLDivElement>>) => void) | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "((event: BaseUIEvent<MouseEvent<HTMLDivElement, globalThis.MouseEvent>>) => void) | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | ((state: ContextMenuRadioGroupState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, ContextMenuRadioGroupState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: ContextMenuRadioGroupState) => React.CSSProperties | undefined) | undefined",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          }
        ]
      },
      {
        "name": "DropdownMenuRadioItem",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "value",
            "type": "any",
            "description": "Value of the radio item.\nThis is the value that will be set in the MenuRadioGroup when the item is selected.",
            "required": true
          },
          {
            "name": "onClick",
            "type": "((event: BaseUIEvent<React.MouseEvent<HTMLDivElement, MouseEvent>>) => void) | undefined",
            "description": "The click handler for the menu item."
          },
          {
            "name": "disabled",
            "type": "boolean | undefined",
            "description": "Whether the component should ignore user interaction.",
            "default": "false"
          },
          {
            "name": "label",
            "type": "string | undefined",
            "description": "Overrides the text label to use when the item is matched during keyboard text navigation."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "closeOnClick",
            "type": "boolean | undefined",
            "description": "Whether to close the menu when the item is clicked.",
            "default": "false"
          },
          {
            "name": "nativeButton",
            "type": "boolean | undefined",
            "description": "Whether the component renders a native `<button>` element when replacing it\nvia the `render` prop.\nSet to `true` if the rendered element is a native button.",
            "default": "false"
          },
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLDivElement, Element>>) => void) | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "((event: BaseUIEvent<SubmitEvent<HTMLDivElement>>) => void) | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "((event: BaseUIEvent<KeyboardEvent<HTMLDivElement>>) => void) | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | ((state: ContextMenuRadioItemState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, ContextMenuRadioItemState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: ContextMenuRadioItemState) => React.CSSProperties | undefined) | undefined",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          },
          {
            "name": "inset",
            "type": "boolean | undefined",
            "description": "Native inset attribute or callback; forwarded to the rendered element."
          }
        ]
      },
      {
        "name": "DropdownMenuSeparator",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "orientation",
            "type": "Orientation | undefined",
            "description": "The orientation of the separator.",
            "default": "'horizontal'"
          },
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLDivElement, Element>>) => void) | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "((event: BaseUIEvent<SubmitEvent<HTMLDivElement>>) => void) | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "((event: BaseUIEvent<KeyboardEvent<HTMLDivElement>>) => void) | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "((event: BaseUIEvent<MouseEvent<HTMLDivElement, globalThis.MouseEvent>>) => void) | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | ((state: SeparatorState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, SeparatorState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: SeparatorState) => React.CSSProperties | undefined) | undefined",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          }
        ]
      },
      {
        "name": "DropdownMenuShortcut",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLSpanElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "defaultChecked",
            "type": "boolean | undefined",
            "description": "Native defaultChecked attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "style",
            "type": "CSSProperties | undefined",
            "description": "Native style attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "ChangeEventHandler<HTMLSpanElement, Element> | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "SubmitEventHandler<HTMLSpanElement> | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "KeyboardEventHandler<HTMLSpanElement> | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "MouseEventHandler<HTMLSpanElement> | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          }
        ]
      },
      {
        "name": "DropdownMenuSub",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "onOpenChange",
            "type": "((open: boolean, eventDetails: MenuSubmenuRoot.ChangeEventDetails) => void) | undefined",
            "description": "Event handler called when the menu is opened or closed."
          },
          {
            "name": "closeParentOnEsc",
            "type": "boolean | undefined",
            "description": "When in a submenu, determines whether pressing the Escape key\ncloses the entire menu, or only the current child menu.",
            "default": "false"
          },
          {
            "name": "children",
            "type": "React.ReactNode",
            "description": "The content of the submenu."
          },
          {
            "name": "disabled",
            "type": "boolean | undefined",
            "description": "Whether the component should ignore user interaction.",
            "default": "false"
          },
          {
            "name": "actionsRef",
            "type": "React.RefObject<MenuRootActions | null> | undefined",
            "description": "A ref to imperative actions.\n- `unmount`: Manually unmounts the menu.\n  Call this after any externally controlled closing animation finishes.\n- `close`: When specified, the menu can be closed imperatively."
          },
          {
            "name": "open",
            "type": "boolean | undefined",
            "description": "Whether the menu is currently open."
          },
          {
            "name": "defaultOpen",
            "type": "boolean | undefined",
            "description": "Whether the menu is initially open.\n\nTo render a controlled menu, use the `open` prop instead.",
            "default": "false"
          },
          {
            "name": "onOpenChangeComplete",
            "type": "((open: boolean) => void) | undefined",
            "description": "Event handler called after any animations complete when the menu is opened or closed."
          },
          {
            "name": "loopFocus",
            "type": "boolean | undefined",
            "description": "Whether to loop keyboard focus back to the first item\nwhen the end of the list is reached while using the arrow keys.",
            "default": "true"
          },
          {
            "name": "highlightItemOnHover",
            "type": "boolean | undefined",
            "description": "Whether moving the pointer over items should highlight them.\nDisabling this prop allows CSS `:hover` to be differentiated from the `:focus` (`data-highlighted`) state.",
            "default": "true"
          },
          {
            "name": "orientation",
            "type": "MenuRootOrientation | undefined",
            "description": "The visual orientation of the menu.\nControls whether roving focus uses up/down or left/right arrow keys.",
            "default": "'vertical'"
          }
        ]
      },
      {
        "name": "DropdownMenuSubContent",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "children",
            "type": "React.ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "finalFocus",
            "type": "boolean | React.RefObject<HTMLElement | null> | ((closeType: InteractionType) => boolean | HTMLElement | null | void) | undefined",
            "description": "Determines the element to focus when the menu is closed.\n\n- `false`: Do not move focus.\n- `true`: Move focus based on the default behavior (trigger or previously focused element).\n- `RefObject`: Move focus to the ref element.\n- `function`: Called with the interaction type (`mouse`, `touch`, `pen`, or `keyboard`).\n  Return an element to focus, `true` to use the default behavior, or `false`/`undefined` to do nothing."
          },
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLDivElement, Element>>) => void) | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "((event: BaseUIEvent<SubmitEvent<HTMLDivElement>>) => void) | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "((event: BaseUIEvent<KeyboardEvent<HTMLDivElement>>) => void) | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "((event: BaseUIEvent<MouseEvent<HTMLDivElement, globalThis.MouseEvent>>) => void) | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | ((state: ContextMenuPopupState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, ContextMenuPopupState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: ContextMenuPopupState) => React.CSSProperties | undefined) | undefined",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          },
          {
            "name": "align",
            "type": "Align | undefined",
            "description": "How to align the popup relative to the specified side.",
            "default": "\"start\""
          },
          {
            "name": "alignOffset",
            "type": "number | OffsetFunction | undefined",
            "description": "Additional offset along the alignment axis in pixels.\nAlso accepts a function that returns the offset to read the dimensions of the anchor\nand positioner elements, along with its side and alignment.\n\nThe function takes a `data` object parameter with the following properties:\n- `data.anchor`: the dimensions of the anchor element with properties `width` and `height`.\n- `data.positioner`: the dimensions of the positioner element with properties `width` and `height`.\n- `data.side`: which side of the anchor element the positioner is aligned against.\n- `data.align`: how the positioner is aligned relative to the specified side.",
            "default": "-3"
          },
          {
            "name": "side",
            "type": "Side | undefined",
            "description": "Which side of the anchor element to align the popup against.\nMay automatically change to avoid collisions.",
            "default": "\"right\""
          },
          {
            "name": "sideOffset",
            "type": "number | OffsetFunction | undefined",
            "description": "Distance between the anchor and the popup in pixels.\nAlso accepts a function that returns the distance to read the dimensions of the anchor\nand positioner elements, along with its side and alignment.\n\nThe function takes a `data` object parameter with the following properties:\n- `data.anchor`: the dimensions of the anchor element with properties `width` and `height`.\n- `data.positioner`: the dimensions of the positioner element with properties `width` and `height`.\n- `data.side`: which side of the anchor element the positioner is aligned against.\n- `data.align`: how the positioner is aligned relative to the specified side.",
            "default": "0"
          }
        ]
      },
      {
        "name": "DropdownMenuSubTrigger",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "onClick",
            "type": "((event: BaseUIEvent<React.MouseEvent<HTMLDivElement, MouseEvent>>) => void) | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "label",
            "type": "string | undefined",
            "description": "Overrides the text label to use when the item is matched during keyboard text navigation."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "disabled",
            "type": "boolean | undefined",
            "description": "Whether the component should ignore user interaction.",
            "default": "false"
          },
          {
            "name": "delay",
            "type": "number | undefined",
            "description": "How long to wait before the menu may be opened on hover. Specified in milliseconds.\n\nRequires the `openOnHover` prop.",
            "default": "100"
          },
          {
            "name": "closeDelay",
            "type": "number | undefined",
            "description": "How long to wait before closing the menu that was opened on hover.\nSpecified in milliseconds.\n\nRequires the `openOnHover` prop.",
            "default": "0"
          },
          {
            "name": "openOnHover",
            "type": "boolean | undefined",
            "description": "Whether the menu should also open when the trigger is hovered."
          },
          {
            "name": "nativeButton",
            "type": "boolean | undefined",
            "description": "Whether the component renders a native `<button>` element when replacing it\nvia the `render` prop.\nSet to `true` if the rendered element is a native button.",
            "default": "false"
          },
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLDivElement, Element>>) => void) | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "((event: BaseUIEvent<SubmitEvent<HTMLDivElement>>) => void) | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "((event: BaseUIEvent<KeyboardEvent<HTMLDivElement>>) => void) | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | ((state: ContextMenuSubmenuTriggerState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, ContextMenuSubmenuTriggerState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: ContextMenuSubmenuTriggerState) => React.CSSProperties | undefined) | undefined",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          },
          {
            "name": "inset",
            "type": "boolean | undefined",
            "description": "Native inset attribute or callback; forwarded to the rendered element."
          }
        ]
      },
      {
        "name": "DropdownMenuTrigger",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "children",
            "type": "React.ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "disabled",
            "type": "boolean | undefined",
            "description": "Whether the component should ignore user interaction.",
            "default": "false"
          },
          {
            "name": "handle",
            "type": "MenuHandle<unknown> | undefined",
            "description": "A handle to associate the trigger with a menu."
          },
          {
            "name": "payload",
            "type": "unknown",
            "description": "A payload to pass to the menu when it is opened."
          },
          {
            "name": "delay",
            "type": "number | undefined",
            "description": "How long to wait before the menu may be opened on hover. Specified in milliseconds.\n\nRequires the `openOnHover` prop.",
            "default": "100"
          },
          {
            "name": "closeDelay",
            "type": "number | undefined",
            "description": "How long to wait before closing the menu that was opened on hover.\nSpecified in milliseconds.\n\nRequires the `openOnHover` prop.",
            "default": "0"
          },
          {
            "name": "openOnHover",
            "type": "boolean | undefined",
            "description": "Whether the menu should also open when the trigger is hovered."
          },
          {
            "name": "nativeButton",
            "type": "boolean | undefined",
            "description": "Whether the component renders a native `<button>` element when replacing it\nvia the `render` prop.\nSet to `false` if the rendered element is not a button (for example, `<div>`).",
            "default": "true"
          },
          {
            "name": "ref",
            "type": "Ref<HTMLButtonElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "name",
            "type": "string | undefined",
            "description": "Native name attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "type",
            "type": "\"button\" | \"submit\" | \"reset\" | undefined",
            "description": "Native type attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "value",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native value attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLButtonElement, Element>>) => void) | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "((event: BaseUIEvent<SubmitEvent<HTMLButtonElement>>) => void) | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "((event: BaseUIEvent<KeyboardEvent<HTMLButtonElement>>) => void) | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "((event: BaseUIEvent<MouseEvent<HTMLButtonElement, globalThis.MouseEvent>>) => void) | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | ((state: MenuTriggerState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, MenuTriggerState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: MenuTriggerState) => React.CSSProperties | undefined) | undefined",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          }
        ]
      }
    ],
    "links": [
      {
        "label": "shadcn Base dropdown-menu reference",
        "href": "https://ui.shadcn.com/docs/components/base/dropdown-menu"
      },
      {
        "label": "Base UI menu API",
        "href": "https://base-ui.com/react/components/menu#api-reference"
      }
    ],
    "notes": [
      "Uses Base UI Menu. Checkbox/radio groups, submenus, render composition, labels, disabled state and controlled callbacks retain primitive behavior.",
      "Styled parts preserve className(state). Each submenu has its own Motion exit completion. Shortcut text is a hint; the consumer owns shortcut handlers."
    ]
  },
  "accordion": {
    "parts": [
      {
        "name": "Accordion",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "value",
            "type": "AccordionValue<Value> | undefined",
            "description": "The controlled value of the item(s) that should be expanded.\n\nTo render an uncontrolled accordion, use the `defaultValue` prop instead."
          },
          {
            "name": "defaultValue",
            "type": "AccordionValue<Value> | undefined",
            "description": "The uncontrolled value of the item(s) that should be initially expanded.\n\nTo render a controlled accordion, use the `value` prop instead."
          },
          {
            "name": "disabled",
            "type": "boolean | undefined",
            "description": "Whether the component should ignore user interaction.",
            "default": "false"
          },
          {
            "name": "hiddenUntilFound",
            "type": "boolean | undefined",
            "description": "Allows the browser's built-in page search to find and expand the panel contents.\n\nOverrides the `keepMounted` prop and uses `hidden=\"until-found\"`\nto hide the element without removing it from the DOM.",
            "default": "false"
          },
          {
            "name": "keepMounted",
            "type": "boolean | undefined",
            "description": "Whether to keep the element in the DOM while the panel is closed.\nThis prop is ignored when `hiddenUntilFound` is used.",
            "default": "false"
          },
          {
            "name": "loopFocus",
            "type": "boolean | undefined",
            "description": "Deprecated following the [APG guidance update](https://github.com/w3c/aria-practices/pull/3434)\nto remove roving focus.\n\nThis prop no longer affects keyboard focus behavior."
          },
          {
            "name": "onValueChange",
            "type": "((value: AccordionValue<Value>, eventDetails: AccordionRootChangeEventDetails) => void) | undefined",
            "description": "Event handler called when an accordion item is expanded or collapsed.\nProvides the new value as an argument."
          },
          {
            "name": "multiple",
            "type": "boolean | undefined",
            "description": "Whether multiple items can be open at the same time.",
            "default": "false"
          },
          {
            "name": "orientation",
            "type": "Orientation | undefined",
            "description": "Deprecated following the [APG guidance update](https://github.com/w3c/aria-practices/pull/3434)\nto remove roving focus.\n\nThis prop no longer affects keyboard focus behavior.",
            "default": "'vertical'"
          },
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLDivElement, Element>>) => void) | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "((event: BaseUIEvent<SubmitEvent<HTMLDivElement>>) => void) | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "((event: BaseUIEvent<KeyboardEvent<HTMLDivElement>>) => void) | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "((event: BaseUIEvent<MouseEvent<HTMLDivElement, globalThis.MouseEvent>>) => void) | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | ((state: AccordionRoot.State<Value>) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, AccordionRoot.State<Value>> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: AccordionRoot.State<Value>) => React.CSSProperties | undefined) | undefined",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          }
        ]
      },
      {
        "name": "AccordionItem",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "value",
            "type": "any",
            "description": "A unique value that identifies this accordion item.\nIf no value is provided, a unique ID will be generated automatically.\nUse when controlling the accordion programmatically, or to set an initial\nopen state."
          },
          {
            "name": "onOpenChange",
            "type": "((open: boolean, eventDetails: AccordionItem.ChangeEventDetails) => void) | undefined",
            "description": "Event handler called when the panel is opened or closed."
          },
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLDivElement, Element>>) => void) | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "((event: BaseUIEvent<SubmitEvent<HTMLDivElement>>) => void) | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "((event: BaseUIEvent<KeyboardEvent<HTMLDivElement>>) => void) | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "((event: BaseUIEvent<MouseEvent<HTMLDivElement, globalThis.MouseEvent>>) => void) | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | ((state: AccordionItemState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, AccordionItemState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: AccordionItemState) => React.CSSProperties | undefined) | undefined",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          },
          {
            "name": "disabled",
            "type": "boolean | undefined",
            "description": "Whether the component should ignore user interaction.",
            "default": "false"
          }
        ]
      },
      {
        "name": "AccordionTrigger",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "nativeButton",
            "type": "boolean | undefined",
            "description": "Whether the component renders a native `<button>` element when replacing it\nvia the `render` prop.\nSet to `false` if the rendered element is not a button (for example, `<div>`).",
            "default": "true"
          },
          {
            "name": "ref",
            "type": "Ref<HTMLButtonElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "disabled",
            "type": "boolean | undefined",
            "description": "Native disabled attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "name",
            "type": "string | undefined",
            "description": "Native name attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "type",
            "type": "\"button\" | \"submit\" | \"reset\" | undefined",
            "description": "Native type attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "value",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native value attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLButtonElement, Element>>) => void) | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "((event: BaseUIEvent<SubmitEvent<HTMLButtonElement>>) => void) | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "((event: BaseUIEvent<KeyboardEvent<HTMLButtonElement>>) => void) | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "((event: BaseUIEvent<MouseEvent<HTMLButtonElement, globalThis.MouseEvent>>) => void) | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | ((state: AccordionTriggerState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, AccordionTriggerState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: AccordionTriggerState) => React.CSSProperties | undefined) | undefined",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          }
        ]
      },
      {
        "name": "AccordionContent",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLDivElement, Element>>) => void) | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "((event: BaseUIEvent<SubmitEvent<HTMLDivElement>>) => void) | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "((event: BaseUIEvent<KeyboardEvent<HTMLDivElement>>) => void) | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "((event: BaseUIEvent<MouseEvent<HTMLDivElement, globalThis.MouseEvent>>) => void) | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | ((state: AccordionPanelState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, AccordionPanelState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: AccordionPanelState) => React.CSSProperties | undefined) | undefined",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          },
          {
            "name": "hiddenUntilFound",
            "type": "boolean | undefined",
            "description": "Allows the browser's built-in page search to find and expand the panel contents.\n\nOverrides the `keepMounted` prop and uses `hidden=\"until-found\"`\nto hide the element without removing it from the DOM.",
            "default": "false"
          },
          {
            "name": "keepMounted",
            "type": "boolean | undefined",
            "description": "Whether to keep the element in the DOM while the panel is closed.\nThis prop is ignored when `hiddenUntilFound` is used.",
            "default": "false"
          }
        ]
      }
    ],
    "links": [
      {
        "label": "shadcn Base accordion reference",
        "href": "https://ui.shadcn.com/docs/components/base/accordion"
      },
      {
        "label": "Base UI accordion API",
        "href": "https://base-ui.com/react/components/accordion#api-reference"
      }
    ],
    "notes": [
      "Uses Base UI values as an array and multiple to allow several panels. The native heading wraps each trigger; named item values identify panels.",
      "Motion measures the panel height and preserves keepMounted when requested. Padding remains inside the measured content to avoid an opening jump."
    ]
  },
  "collapsible": {
    "parts": [
      {
        "name": "Collapsible",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "open",
            "type": "boolean | undefined",
            "description": "Whether the collapsible panel is currently open.\n\nTo render an uncontrolled collapsible, use the `defaultOpen` prop instead."
          },
          {
            "name": "defaultOpen",
            "type": "boolean | undefined",
            "description": "Whether the collapsible panel is initially open.\n\nTo render a controlled collapsible, use the `open` prop instead.",
            "default": "false"
          },
          {
            "name": "onOpenChange",
            "type": "((open: boolean, eventDetails: CollapsibleRootChangeEventDetails) => void) | undefined",
            "description": "Event handler called when the panel is opened or closed."
          },
          {
            "name": "disabled",
            "type": "boolean | undefined",
            "description": "Whether the component should ignore user interaction.",
            "default": "false"
          },
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLDivElement, Element>>) => void) | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "((event: BaseUIEvent<SubmitEvent<HTMLDivElement>>) => void) | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "((event: BaseUIEvent<KeyboardEvent<HTMLDivElement>>) => void) | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "((event: BaseUIEvent<MouseEvent<HTMLDivElement, globalThis.MouseEvent>>) => void) | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | ((state: CollapsibleRootState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, CollapsibleRootState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: CollapsibleRootState) => React.CSSProperties | undefined) | undefined",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          }
        ]
      },
      {
        "name": "CollapsibleContent",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "hiddenUntilFound",
            "type": "boolean | undefined",
            "description": "Allows the browser's built-in page search to find and expand the panel contents.\n\nOverrides the `keepMounted` prop and uses `hidden=\"until-found\"`\nto hide the element without removing it from the DOM.",
            "default": "false"
          },
          {
            "name": "keepMounted",
            "type": "boolean | undefined",
            "description": "Whether to keep the element in the DOM while the panel is hidden.\nThis prop is ignored when `hiddenUntilFound` is used.",
            "default": "false"
          },
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLDivElement, Element>>) => void) | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "((event: BaseUIEvent<SubmitEvent<HTMLDivElement>>) => void) | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "((event: BaseUIEvent<KeyboardEvent<HTMLDivElement>>) => void) | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "((event: BaseUIEvent<MouseEvent<HTMLDivElement, globalThis.MouseEvent>>) => void) | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | ((state: CollapsiblePanelState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, CollapsiblePanelState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: CollapsiblePanelState) => React.CSSProperties | undefined) | undefined",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          }
        ]
      },
      {
        "name": "CollapsibleTrigger",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "nativeButton",
            "type": "boolean | undefined",
            "description": "Whether the component renders a native `<button>` element when replacing it\nvia the `render` prop.\nSet to `false` if the rendered element is not a button (for example, `<div>`).",
            "default": "true"
          },
          {
            "name": "ref",
            "type": "Ref<HTMLButtonElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "disabled",
            "type": "boolean | undefined",
            "description": "Native disabled attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "name",
            "type": "string | undefined",
            "description": "Native name attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "type",
            "type": "\"button\" | \"submit\" | \"reset\" | undefined",
            "description": "Native type attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "value",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native value attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLButtonElement, Element>>) => void) | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "((event: BaseUIEvent<SubmitEvent<HTMLButtonElement>>) => void) | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "((event: BaseUIEvent<KeyboardEvent<HTMLButtonElement>>) => void) | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "((event: BaseUIEvent<MouseEvent<HTMLButtonElement, globalThis.MouseEvent>>) => void) | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | ((state: CollapsibleTriggerState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, CollapsibleTriggerState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: CollapsibleTriggerState) => React.CSSProperties | undefined) | undefined",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          }
        ]
      }
    ],
    "links": [
      {
        "label": "shadcn Base collapsible reference",
        "href": "https://ui.shadcn.com/docs/components/base/collapsible"
      },
      {
        "label": "Base UI collapsible API",
        "href": "https://base-ui.com/react/components/collapsible#api-reference"
      }
    ],
    "notes": [
      "Base UI open/defaultOpen/onOpenChange and render composition remain available. Content preserves keepMounted and uses Motion for measured height.",
      "Keep padding on a child inside the panel when composing your own content."
    ]
  },
  "tabs": {
    "parts": [
      {
        "name": "Tabs",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "value",
            "type": "any",
            "description": "The value of the currently active `Tab`. Use when the component is controlled.\nWhen the value is `null`, no Tab will be active."
          },
          {
            "name": "defaultValue",
            "type": "any",
            "description": "The default value. Use when the component is not controlled.\nWhen the value is `null`, no Tab will be active.",
            "default": "0"
          },
          {
            "name": "orientation",
            "type": "BaseOrientation | undefined",
            "description": "The component orientation (layout flow direction).",
            "default": "\"horizontal\""
          },
          {
            "name": "onValueChange",
            "type": "((value: TabsTab.Value, eventDetails: TabsRoot.ChangeEventDetails) => void) | undefined",
            "description": "Callback invoked when new value is being set.\n\nThe event `reason` is `'none'` for user-initiated changes, such as a click\nor keyboard navigation; `'initial'` for the first automatic selection or\nfallback in uncontrolled roots when `defaultValue` is omitted or\n`undefined`, including when the implicit initial value is disabled or\nmissing; `'disabled'` for automatic fallback when the selected tab becomes\ndisabled in uncontrolled roots; or `'missing'` for automatic fallback when\nthe selected tab is removed, or when an explicit `defaultValue` never\nmatches a mounted tab in uncontrolled roots.\n\nFor automatic changes, the selected value can be `null` when no enabled Tab\nis available as a fallback.\n\nAutomatic changes cannot be canceled; calling `eventDetails.cancel()` for\n`'initial'`, `'disabled'`, or `'missing'` has no effect."
          },
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLDivElement, Element>>) => void) | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "((event: BaseUIEvent<SubmitEvent<HTMLDivElement>>) => void) | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "((event: BaseUIEvent<KeyboardEvent<HTMLDivElement>>) => void) | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "((event: BaseUIEvent<MouseEvent<HTMLDivElement, globalThis.MouseEvent>>) => void) | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | ((state: TabsRootState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, TabsRootState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: TabsRootState) => React.CSSProperties | undefined) | undefined",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          }
        ]
      },
      {
        "name": "TabsContent",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "value",
            "type": "any",
            "description": "The value of the TabPanel. It will be shown when the Tab with the corresponding value is active.",
            "required": true
          },
          {
            "name": "keepMounted",
            "type": "boolean | undefined",
            "description": "Whether to keep the HTML element in the DOM while the panel is hidden.",
            "default": "false"
          },
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLDivElement, Element>>) => void) | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "((event: BaseUIEvent<SubmitEvent<HTMLDivElement>>) => void) | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "((event: BaseUIEvent<KeyboardEvent<HTMLDivElement>>) => void) | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "((event: BaseUIEvent<MouseEvent<HTMLDivElement, globalThis.MouseEvent>>) => void) | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | ((state: TabsPanelState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, TabsPanelState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: TabsPanelState) => React.CSSProperties | undefined) | undefined",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          }
        ]
      },
      {
        "name": "TabsList",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "activateOnFocus",
            "type": "boolean | undefined",
            "description": "Whether to automatically change the active tab on arrow key focus.\nOtherwise, tabs will be activated using <kbd>Enter</kbd> or <kbd>Space</kbd> key press.",
            "default": "false"
          },
          {
            "name": "loopFocus",
            "type": "boolean | undefined",
            "description": "Whether to loop keyboard focus back to the first item\nwhen the end of the list is reached while using the arrow keys.",
            "default": "true"
          },
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLDivElement, Element>>) => void) | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "((event: BaseUIEvent<SubmitEvent<HTMLDivElement>>) => void) | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "((event: BaseUIEvent<KeyboardEvent<HTMLDivElement>>) => void) | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "((event: BaseUIEvent<MouseEvent<HTMLDivElement, globalThis.MouseEvent>>) => void) | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | ((state: TabsListState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, TabsListState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: TabsListState) => React.CSSProperties | undefined) | undefined",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          },
          {
            "name": "variant",
            "type": "\"line\" | \"default\" | \"segmented\" | null | undefined",
            "description": "Native variant attribute or callback; forwarded to the rendered element.",
            "default": "\"default\""
          }
        ]
      },
      {
        "name": "TabsTrigger",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "value",
            "type": "any",
            "description": "The value of the Tab.",
            "required": true
          },
          {
            "name": "disabled",
            "type": "boolean | undefined",
            "description": "Whether the Tab is disabled.\n\nIf a first Tab on a `<Tabs.List>` is disabled, it won't initially be selected.\nInstead, the next enabled Tab will be selected.\nHowever, it does not work like this during server-side rendering, as it is not known\nduring pre-rendering which Tabs are disabled.\nTo work around it, ensure that `defaultValue` or `value` on `<Tabs.Root>` is set to an enabled Tab's value."
          },
          {
            "name": "nativeButton",
            "type": "boolean | undefined",
            "description": "Whether the component renders a native `<button>` element when replacing it\nvia the `render` prop.\nSet to `false` if the rendered element is not a button (for example, `<div>`).",
            "default": "true"
          },
          {
            "name": "ref",
            "type": "Ref<HTMLButtonElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "name",
            "type": "string | undefined",
            "description": "Native name attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "type",
            "type": "\"button\" | \"submit\" | \"reset\" | undefined",
            "description": "Native type attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLButtonElement, Element>>) => void) | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "((event: BaseUIEvent<SubmitEvent<HTMLButtonElement>>) => void) | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "((event: BaseUIEvent<KeyboardEvent<HTMLButtonElement>>) => void) | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "((event: BaseUIEvent<MouseEvent<HTMLButtonElement, globalThis.MouseEvent>>) => void) | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | ((state: TabsTabState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, TabsTabState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: TabsTabState) => React.CSSProperties | undefined) | undefined",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          }
        ]
      }
    ],
    "links": [
      {
        "label": "shadcn Base tabs reference",
        "href": "https://ui.shadcn.com/docs/components/base/tabs"
      },
      {
        "label": "Base UI tabs API",
        "href": "https://base-ui.com/react/components/tabs#api-reference"
      }
    ],
    "notes": [
      "Leement adds default/line/segmented list variants while preserving Base UI value/orientation and keyboard relationships. Styled parts accept className(state)."
    ]
  },
  "breadcrumb": {
    "parts": [
      {
        "name": "Breadcrumb",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "defaultChecked",
            "type": "boolean | undefined",
            "description": "Native defaultChecked attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "style",
            "type": "CSSProperties | undefined",
            "description": "Native style attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "ChangeEventHandler<HTMLElement, Element> | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "SubmitEventHandler<HTMLElement> | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "KeyboardEventHandler<HTMLElement> | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "MouseEventHandler<HTMLElement> | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          }
        ]
      },
      {
        "name": "BreadcrumbList",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLOListElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "type",
            "type": "\"a\" | \"i\" | \"1\" | \"A\" | \"I\" | undefined",
            "description": "Native type attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "defaultChecked",
            "type": "boolean | undefined",
            "description": "Native defaultChecked attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "style",
            "type": "CSSProperties | undefined",
            "description": "Native style attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "ChangeEventHandler<HTMLOListElement, Element> | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "SubmitEventHandler<HTMLOListElement> | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "KeyboardEventHandler<HTMLOListElement> | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "MouseEventHandler<HTMLOListElement> | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          }
        ]
      },
      {
        "name": "BreadcrumbItem",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLLIElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "value",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native value attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "defaultChecked",
            "type": "boolean | undefined",
            "description": "Native defaultChecked attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "style",
            "type": "CSSProperties | undefined",
            "description": "Native style attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "ChangeEventHandler<HTMLLIElement, Element> | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "SubmitEventHandler<HTMLLIElement> | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "KeyboardEventHandler<HTMLLIElement> | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "MouseEventHandler<HTMLLIElement> | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          }
        ]
      },
      {
        "name": "BreadcrumbLink",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLAnchorElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "href",
            "type": "string | undefined",
            "description": "Native href attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "type",
            "type": "string | undefined",
            "description": "Native type attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "defaultChecked",
            "type": "boolean | undefined",
            "description": "Native defaultChecked attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "style",
            "type": "CSSProperties | undefined",
            "description": "Native style attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "ChangeEventHandler<HTMLAnchorElement, Element> | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "SubmitEventHandler<HTMLAnchorElement> | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "KeyboardEventHandler<HTMLAnchorElement> | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "MouseEventHandler<HTMLAnchorElement> | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, {}> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          },
          {
            "name": "asChild",
            "type": "boolean | undefined",
            "description": "Native asChild attribute or callback; forwarded to the rendered element.",
            "default": "false"
          }
        ]
      },
      {
        "name": "BreadcrumbPage",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLSpanElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "defaultChecked",
            "type": "boolean | undefined",
            "description": "Native defaultChecked attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "style",
            "type": "CSSProperties | undefined",
            "description": "Native style attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "ChangeEventHandler<HTMLSpanElement, Element> | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "SubmitEventHandler<HTMLSpanElement> | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "KeyboardEventHandler<HTMLSpanElement> | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "MouseEventHandler<HTMLSpanElement> | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          }
        ]
      },
      {
        "name": "BreadcrumbSeparator",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLLIElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "value",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native value attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "defaultChecked",
            "type": "boolean | undefined",
            "description": "Native defaultChecked attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "style",
            "type": "CSSProperties | undefined",
            "description": "Native style attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "ChangeEventHandler<HTMLLIElement, Element> | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "SubmitEventHandler<HTMLLIElement> | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "KeyboardEventHandler<HTMLLIElement> | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "MouseEventHandler<HTMLLIElement> | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          }
        ]
      },
      {
        "name": "BreadcrumbEllipsis",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLSpanElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "defaultChecked",
            "type": "boolean | undefined",
            "description": "Native defaultChecked attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "style",
            "type": "CSSProperties | undefined",
            "description": "Native style attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "ChangeEventHandler<HTMLSpanElement, Element> | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "SubmitEventHandler<HTMLSpanElement> | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "KeyboardEventHandler<HTMLSpanElement> | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "MouseEventHandler<HTMLSpanElement> | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          }
        ]
      }
    ],
    "links": [
      {
        "label": "shadcn Base breadcrumb reference",
        "href": "https://ui.shadcn.com/docs/components/base/breadcrumb"
      },
      {
        "label": "Native HTML elements (MDN)",
        "href": "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements"
      }
    ],
    "notes": [
      "Native nav/ol/li and links remain explicit. BreadcrumbLink supports Base useRender and the legacy asChild spelling with one owned link.",
      "Choose native heading levels in the destination. BreadcrumbPage exposes aria-current=page; separators/ellipsis are decorative."
    ]
  },
  "pagination": {
    "parts": [
      {
        "name": "Pagination",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "defaultChecked",
            "type": "boolean | undefined",
            "description": "Native defaultChecked attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "style",
            "type": "CSSProperties | undefined",
            "description": "Native style attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "ChangeEventHandler<HTMLElement, Element> | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "SubmitEventHandler<HTMLElement> | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "KeyboardEventHandler<HTMLElement> | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "MouseEventHandler<HTMLElement> | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          }
        ]
      },
      {
        "name": "PaginationContent",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLUListElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "defaultChecked",
            "type": "boolean | undefined",
            "description": "Native defaultChecked attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "style",
            "type": "CSSProperties | undefined",
            "description": "Native style attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "ChangeEventHandler<HTMLUListElement, Element> | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "SubmitEventHandler<HTMLUListElement> | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "KeyboardEventHandler<HTMLUListElement> | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "MouseEventHandler<HTMLUListElement> | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          }
        ]
      },
      {
        "name": "PaginationItem",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLLIElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "value",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native value attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "defaultChecked",
            "type": "boolean | undefined",
            "description": "Native defaultChecked attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "style",
            "type": "CSSProperties | undefined",
            "description": "Native style attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "ChangeEventHandler<HTMLLIElement, Element> | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "SubmitEventHandler<HTMLLIElement> | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "KeyboardEventHandler<HTMLLIElement> | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "MouseEventHandler<HTMLLIElement> | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          }
        ]
      },
      {
        "name": "PaginationLink",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLAnchorElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "href",
            "type": "string | undefined",
            "description": "Native href attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "type",
            "type": "string | undefined",
            "description": "Native type attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "defaultChecked",
            "type": "boolean | undefined",
            "description": "Native defaultChecked attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "style",
            "type": "CSSProperties | undefined",
            "description": "Native style attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "ChangeEventHandler<HTMLAnchorElement, Element> | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "SubmitEventHandler<HTMLAnchorElement> | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "KeyboardEventHandler<HTMLAnchorElement> | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "MouseEventHandler<HTMLAnchorElement> | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "isActive",
            "type": "boolean | undefined",
            "description": "Native isActive attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "disabled",
            "type": "boolean | undefined",
            "description": "Native disabled attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "size",
            "type": "\"default\" | \"xs\" | \"sm\" | \"lg\" | \"icon\" | \"icon-sm\" | \"icon-xs\" | \"icon-lg\" | null | undefined",
            "description": "Native size attribute or callback; forwarded to the rendered element.",
            "default": "\"icon\""
          }
        ]
      },
      {
        "name": "PaginationPrevious",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLAnchorElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "href",
            "type": "string | undefined",
            "description": "Native href attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "type",
            "type": "string | undefined",
            "description": "Native type attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "defaultChecked",
            "type": "boolean | undefined",
            "description": "Native defaultChecked attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "style",
            "type": "CSSProperties | undefined",
            "description": "Native style attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "ChangeEventHandler<HTMLAnchorElement, Element> | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "SubmitEventHandler<HTMLAnchorElement> | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "KeyboardEventHandler<HTMLAnchorElement> | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "MouseEventHandler<HTMLAnchorElement> | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "isActive",
            "type": "boolean | undefined",
            "description": "Native isActive attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "disabled",
            "type": "boolean | undefined",
            "description": "Native disabled attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "size",
            "type": "\"default\" | \"xs\" | \"sm\" | \"lg\" | \"icon\" | \"icon-sm\" | \"icon-xs\" | \"icon-lg\" | null | undefined",
            "description": "Native size attribute or callback; forwarded to the rendered element."
          }
        ]
      },
      {
        "name": "PaginationNext",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLAnchorElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "href",
            "type": "string | undefined",
            "description": "Native href attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "type",
            "type": "string | undefined",
            "description": "Native type attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "defaultChecked",
            "type": "boolean | undefined",
            "description": "Native defaultChecked attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "style",
            "type": "CSSProperties | undefined",
            "description": "Native style attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "ChangeEventHandler<HTMLAnchorElement, Element> | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "SubmitEventHandler<HTMLAnchorElement> | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "KeyboardEventHandler<HTMLAnchorElement> | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "MouseEventHandler<HTMLAnchorElement> | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "isActive",
            "type": "boolean | undefined",
            "description": "Native isActive attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "disabled",
            "type": "boolean | undefined",
            "description": "Native disabled attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "size",
            "type": "\"default\" | \"xs\" | \"sm\" | \"lg\" | \"icon\" | \"icon-sm\" | \"icon-xs\" | \"icon-lg\" | null | undefined",
            "description": "Native size attribute or callback; forwarded to the rendered element."
          }
        ]
      },
      {
        "name": "PaginationEllipsis",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLSpanElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "defaultChecked",
            "type": "boolean | undefined",
            "description": "Native defaultChecked attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "style",
            "type": "CSSProperties | undefined",
            "description": "Native style attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "ChangeEventHandler<HTMLSpanElement, Element> | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "SubmitEventHandler<HTMLSpanElement> | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "KeyboardEventHandler<HTMLSpanElement> | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "MouseEventHandler<HTMLSpanElement> | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          }
        ]
      }
    ],
    "links": [
      {
        "label": "shadcn Base pagination reference",
        "href": "https://ui.shadcn.com/docs/components/base/pagination"
      },
      {
        "label": "Native HTML elements (MDN)",
        "href": "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements"
      }
    ],
    "notes": [
      "PaginationLink remains a native anchor; disabled removes the destination/tab stop and prevents activation. Previous/Next allow custom content, and Ellipsis forwards native span props.",
      "The app owns page state and destinations. aria-current marks the current page."
    ]
  },
  "table": {
    "parts": [
      {
        "name": "Table",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLTableElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "defaultChecked",
            "type": "boolean | undefined",
            "description": "Native defaultChecked attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "style",
            "type": "CSSProperties | undefined",
            "description": "Native style attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "ChangeEventHandler<HTMLTableElement, Element> | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "SubmitEventHandler<HTMLTableElement> | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "KeyboardEventHandler<HTMLTableElement> | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "MouseEventHandler<HTMLTableElement> | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          }
        ]
      },
      {
        "name": "TableHeader",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLTableSectionElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "defaultChecked",
            "type": "boolean | undefined",
            "description": "Native defaultChecked attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "style",
            "type": "CSSProperties | undefined",
            "description": "Native style attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "ChangeEventHandler<HTMLTableSectionElement, Element> | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "SubmitEventHandler<HTMLTableSectionElement> | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "KeyboardEventHandler<HTMLTableSectionElement> | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "MouseEventHandler<HTMLTableSectionElement> | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          }
        ]
      },
      {
        "name": "TableBody",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLTableSectionElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "defaultChecked",
            "type": "boolean | undefined",
            "description": "Native defaultChecked attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "style",
            "type": "CSSProperties | undefined",
            "description": "Native style attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "ChangeEventHandler<HTMLTableSectionElement, Element> | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "SubmitEventHandler<HTMLTableSectionElement> | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "KeyboardEventHandler<HTMLTableSectionElement> | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "MouseEventHandler<HTMLTableSectionElement> | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          }
        ]
      },
      {
        "name": "TableFooter",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLTableSectionElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "defaultChecked",
            "type": "boolean | undefined",
            "description": "Native defaultChecked attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "style",
            "type": "CSSProperties | undefined",
            "description": "Native style attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "ChangeEventHandler<HTMLTableSectionElement, Element> | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "SubmitEventHandler<HTMLTableSectionElement> | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "KeyboardEventHandler<HTMLTableSectionElement> | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "MouseEventHandler<HTMLTableSectionElement> | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          }
        ]
      },
      {
        "name": "TableRow",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLTableRowElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "defaultChecked",
            "type": "boolean | undefined",
            "description": "Native defaultChecked attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "style",
            "type": "CSSProperties | undefined",
            "description": "Native style attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "ChangeEventHandler<HTMLTableRowElement, Element> | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "SubmitEventHandler<HTMLTableRowElement> | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "KeyboardEventHandler<HTMLTableRowElement> | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "MouseEventHandler<HTMLTableRowElement> | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          }
        ]
      },
      {
        "name": "TableHead",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLTableHeaderCellElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "defaultChecked",
            "type": "boolean | undefined",
            "description": "Native defaultChecked attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "style",
            "type": "CSSProperties | undefined",
            "description": "Native style attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "ChangeEventHandler<HTMLTableHeaderCellElement, Element> | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "SubmitEventHandler<HTMLTableHeaderCellElement> | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "KeyboardEventHandler<HTMLTableHeaderCellElement> | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "MouseEventHandler<HTMLTableHeaderCellElement> | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          }
        ]
      },
      {
        "name": "TableCell",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLTableDataCellElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "defaultChecked",
            "type": "boolean | undefined",
            "description": "Native defaultChecked attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "style",
            "type": "CSSProperties | undefined",
            "description": "Native style attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "ChangeEventHandler<HTMLTableDataCellElement, Element> | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "SubmitEventHandler<HTMLTableDataCellElement> | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "KeyboardEventHandler<HTMLTableDataCellElement> | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "MouseEventHandler<HTMLTableDataCellElement> | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          }
        ]
      },
      {
        "name": "TableCaption",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "defaultChecked",
            "type": "boolean | undefined",
            "description": "Native defaultChecked attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "style",
            "type": "CSSProperties | undefined",
            "description": "Native style attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "ChangeEventHandler<HTMLElement, Element> | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "SubmitEventHandler<HTMLElement> | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "KeyboardEventHandler<HTMLElement> | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "MouseEventHandler<HTMLElement> | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          }
        ]
      },
      {
        "name": "DataTable",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "data",
            "type": "T[]",
            "description": "Native data attribute or callback; forwarded to the rendered element.",
            "required": true
          },
          {
            "name": "columns",
            "type": "TableColumn<T>[]",
            "description": "Native columns attribute or callback; forwarded to the rendered element.",
            "required": true
          },
          {
            "name": "rowId",
            "type": "(row: T) => string",
            "description": "Native rowId attribute or callback; forwarded to the rendered element.",
            "required": true
          },
          {
            "name": "caption",
            "type": "string",
            "description": "Native caption attribute or callback; forwarded to the rendered element.",
            "required": true
          },
          {
            "name": "emptyMessage",
            "type": "string | undefined",
            "description": "Native emptyMessage attribute or callback; forwarded to the rendered element.",
            "default": "\"No results\""
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          }
        ]
      }
    ],
    "links": [
      {
        "label": "shadcn Base table reference",
        "href": "https://ui.shadcn.com/docs/components/base/table"
      },
      {
        "label": "Native HTML elements (MDN)",
        "href": "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements"
      }
    ]
  },
  "calendar": {
    "parts": [
      {
        "name": "Calendar",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "mode",
            "type": "undefined",
            "description": "Enable the selection of a single day, multiple days, or a range of days."
          },
          {
            "name": "required",
            "type": "undefined",
            "description": "Whether the selection is required."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Class name to add to the root element."
          },
          {
            "name": "classNames",
            "type": "(Partial<ClassNames> & Partial<DeprecatedUI<string>>) | undefined",
            "description": "Change the class names used by DayPicker.\n\nUse this prop when you need to change the default class names \u2014 for\nexample, when importing the style via CSS modules or when using a CSS\nframework."
          },
          {
            "name": "modifiersClassNames",
            "type": "ModifiersClassNames | undefined",
            "description": "Change the class name for the day matching the `modifiers`."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | undefined",
            "description": "Style to apply to the root element."
          },
          {
            "name": "styles",
            "type": "(Partial<Styles> & Partial<DeprecatedUI<React.CSSProperties>>) | undefined",
            "description": "Change the inline styles of the HTML elements."
          },
          {
            "name": "modifiersStyles",
            "type": "ModifiersStyles | undefined",
            "description": "Change the class name for the day matching the {@link modifiers}."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "A unique id to add to the root element."
          },
          {
            "name": "defaultMonth",
            "type": "Date | undefined",
            "description": "The initial month to show in the calendar.\n\nUse this prop to let DayPicker control the current month. If you need to\nset the month programmatically, use {@link month} and {@link onMonthChange}."
          },
          {
            "name": "month",
            "type": "Date | undefined",
            "description": "The month displayed in the calendar.\n\nAs opposed to `defaultMonth`, use this prop with `onMonthChange` to change\nthe month programmatically."
          },
          {
            "name": "numberOfMonths",
            "type": "number | undefined",
            "description": "The number of displayed months."
          },
          {
            "name": "startMonth",
            "type": "Date | undefined",
            "description": "The earliest month to start the month navigation."
          },
          {
            "name": "fromDate",
            "type": "Date | undefined",
            "description": "Native fromDate attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "fromMonth",
            "type": "Date | undefined",
            "description": "Native fromMonth attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "fromYear",
            "type": "number | undefined",
            "description": "Native fromYear attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "endMonth",
            "type": "Date | undefined",
            "description": "The latest month to end the month navigation."
          },
          {
            "name": "toDate",
            "type": "Date | undefined",
            "description": "Native toDate attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "toMonth",
            "type": "Date | undefined",
            "description": "Native toMonth attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "toYear",
            "type": "number | undefined",
            "description": "Native toYear attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "pagedNavigation",
            "type": "boolean | undefined",
            "description": "Paginate the month navigation displaying the `numberOfMonths` at a time."
          },
          {
            "name": "reverseMonths",
            "type": "boolean | undefined",
            "description": "Render the months in reversed order (when {@link numberOfMonths} is set) to\ndisplay the most recent month first."
          },
          {
            "name": "hideNavigation",
            "type": "boolean | undefined",
            "description": "Hide the navigation buttons. This prop won't disable the navigation: to\ndisable the navigation, use {@link disableNavigation}."
          },
          {
            "name": "disableNavigation",
            "type": "boolean | undefined",
            "description": "Disable the navigation between months. This prop won't hide the navigation:\nto hide the navigation, use {@link hideNavigation}."
          },
          {
            "name": "captionLayout",
            "type": "\"label\" | \"dropdown\" | \"dropdown-months\" | \"dropdown-years\" | undefined",
            "description": "Show dropdowns to navigate between months or years.\n\n- `label`: Displays the month and year as a label. Default value.\n- `dropdown`: Displays dropdowns for both month and year navigation.\n- `dropdown-months`: Displays a dropdown only for the month navigation.\n- `dropdown-years`: Displays a dropdown only for the year navigation.\n\n**Note:** By default, showing the dropdown will set the {@link startMonth}\nto 100 years ago and {@link endMonth} to the end of the current year. You\ncan override this behavior by explicitly setting `startMonth` and\n`endMonth`.",
            "default": "\"label\""
          },
          {
            "name": "reverseYears",
            "type": "boolean | undefined",
            "description": "Reverse the order of years in the dropdown when using\n`captionLayout=\"dropdown\"` or `captionLayout=\"dropdown-years\"`."
          },
          {
            "name": "navLayout",
            "type": "\"around\" | \"after\" | undefined",
            "description": "Adjust the positioning of the navigation buttons.\n\n- `around`: Displays the buttons on either side of the caption.\n- `after`: Displays the buttons after the caption. This ensures the tab order\n  matches the visual order.\n\nIf not set, the buttons default to being displayed after the caption, but\nthe tab order may not align with the visual order."
          },
          {
            "name": "fixedWeeks",
            "type": "boolean | undefined",
            "description": "Display always 6 weeks per each month, regardless of the month\u2019s number of\nweeks. Weeks will be filled with the days from the next month."
          },
          {
            "name": "hideWeekdays",
            "type": "boolean | undefined",
            "description": "Hide the row displaying the weekday row header."
          },
          {
            "name": "showOutsideDays",
            "type": "boolean | undefined",
            "description": "Show the outside days (days falling in the next or the previous month).\n\n**Note:** when a {@link broadcastCalendar} is set, this prop defaults to\ntrue.",
            "default": "true"
          },
          {
            "name": "showWeekNumber",
            "type": "boolean | undefined",
            "description": "Show the week numbers column. Weeks are numbered according to the local\nweek index."
          },
          {
            "name": "animate",
            "type": "boolean | undefined",
            "description": "Animate a month-caption change with Leement Motion; disables the upstream CSS animation.",
            "default": "false"
          },
          {
            "name": "broadcastCalendar",
            "type": "boolean | undefined",
            "description": "Display the weeks in the month following the broadcast calendar. Setting\nthis prop will ignore {@link weekStartsOn} (always Monday) and\n{@link showOutsideDays} will default to true."
          },
          {
            "name": "ISOWeek",
            "type": "boolean | undefined",
            "description": "Use ISO week dates instead of the locale setting. Setting this prop will\nignore `weekStartsOn` and `firstWeekContainsDate`."
          },
          {
            "name": "timeZone",
            "type": "string | undefined",
            "description": "The time zone (IANA or UTC offset) to use in the calendar (experimental).\n\nSee\n[Wikipedia](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)\nfor the possible values."
          },
          {
            "name": "noonSafe",
            "type": "boolean | undefined",
            "description": "Keep calendar math at noon in the configured {@link timeZone} to avoid\nhistorical second-level offsets drifting dates across midnight.\n\nThis prop sets the time of the dates to noon (12:00)."
          },
          {
            "name": "components",
            "type": "Partial<CustomComponents> | undefined",
            "description": "Change the components used for rendering the calendar elements."
          },
          {
            "name": "footer",
            "type": "React.ReactNode",
            "description": "Add a footer to the calendar, acting as a live region.\n\nUse this prop to communicate the calendar's status to screen readers.\nPrefer strings over complex UI elements."
          },
          {
            "name": "autoFocus",
            "type": "boolean | undefined",
            "description": "When a selection mode is set, DayPicker will focus the first selected day\n(if set) or today's date (if not disabled).\n\nUse this prop when you need to focus DayPicker after a user action, for\nimproved accessibility."
          },
          {
            "name": "initialFocus",
            "type": "boolean | undefined",
            "description": "Native initialFocus attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "disabled",
            "type": "Matcher | Matcher[] | undefined",
            "description": "Apply the `disabled` modifier to the matching days. Disabled days cannot be\nselected when in a selection mode is set."
          },
          {
            "name": "hidden",
            "type": "Matcher | Matcher[] | undefined",
            "description": "Apply the `hidden` modifier to the matching days. Will hide them from the\ncalendar."
          },
          {
            "name": "today",
            "type": "Date | undefined",
            "description": "The today\u2019s date. Default is the current date. This date will get the\n`today` modifier to style the day."
          },
          {
            "name": "modifiers",
            "type": "Record<string, Matcher | Matcher[] | undefined> | undefined",
            "description": "Add modifiers to the matching days."
          },
          {
            "name": "labels",
            "type": "Partial<Labels> | undefined",
            "description": "Labels creators to override the defaults. Use this prop to customize the\naria-label attributes in DayPicker."
          },
          {
            "name": "formatters",
            "type": "Partial<Formatters> | undefined",
            "description": "Formatters used to format dates to strings. Use this prop to override the\ndefault functions."
          },
          {
            "name": "dir",
            "type": "string | undefined",
            "description": "The text direction of the calendar. Use `ltr` for left-to-right (default)\nor `rtl` for right-to-left."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "The aria-label attribute to add to the container element."
          },
          {
            "name": "aria-labelledby",
            "type": "string | undefined",
            "description": "The aria-labelledby attribute to add to the container element."
          },
          {
            "name": "role",
            "type": "\"dialog\" | \"application\" | undefined",
            "description": "The role attribute to add to the container element."
          },
          {
            "name": "nonce",
            "type": "string | undefined",
            "description": "A cryptographic nonce (\"number used once\") which can be used by Content\nSecurity Policy for the inline `style` attributes."
          },
          {
            "name": "title",
            "type": "string | undefined",
            "description": "Add a `title` attribute to the container element."
          },
          {
            "name": "lang",
            "type": "string | undefined",
            "description": "Add the language tag to the container element.\n\nWhen omitted, DayPicker uses the active locale code (`locale.code`).\nSet this prop to override the language tag."
          },
          {
            "name": "locale",
            "type": "Partial<DayPickerLocale> | undefined",
            "description": "The locale object used to localize dates. Pass a locale from\n`react-day-picker/locale` to localize the calendar."
          },
          {
            "name": "numerals",
            "type": "Numerals | undefined",
            "description": "The numeral system to use when formatting dates.\n\n- `latn`: Latin (Western Arabic)\n- `arab`: Arabic-Indic\n- `arabext`: Eastern Arabic-Indic (Persian)\n- `deva`: Devanagari\n- `beng`: Bengali\n- `guru`: Gurmukhi\n- `gujr`: Gujarati\n- `orya`: Oriya\n- `tamldec`: Tamil\n- `telu`: Telugu\n- `knda`: Kannada\n- `mlym`: Malayalam"
          },
          {
            "name": "weekStartsOn",
            "type": "0 | 1 | 2 | 3 | 4 | 5 | 6 | undefined",
            "description": "The index of the first day of the week (0 - Sunday). Overrides the locale's\ndefault."
          },
          {
            "name": "firstWeekContainsDate",
            "type": "1 | 4 | undefined",
            "description": "The day of January that is always in the first week of the year."
          },
          {
            "name": "useAdditionalWeekYearTokens",
            "type": "boolean | undefined",
            "description": "Enable `DD` and `DDDD` for week year tokens when formatting or parsing\ndates."
          },
          {
            "name": "useAdditionalDayOfYearTokens",
            "type": "boolean | undefined",
            "description": "Enable `YY` and `YYYY` for day of year tokens when formatting or parsing\ndates."
          },
          {
            "name": "onMonthChange",
            "type": "MonthChangeEventHandler | undefined",
            "description": "Event fired when the user navigates between months."
          },
          {
            "name": "onNextClick",
            "type": "MonthChangeEventHandler | undefined",
            "description": "Event handler when the next month button is clicked."
          },
          {
            "name": "onPrevClick",
            "type": "MonthChangeEventHandler | undefined",
            "description": "Event handler when the previous month button is clicked."
          },
          {
            "name": "onWeekNumberClick",
            "type": "any",
            "description": "Event handler when a week number is clicked."
          },
          {
            "name": "onDayClick",
            "type": "DayEventHandler<React.MouseEvent<Element, MouseEvent>> | undefined",
            "description": "Event handler when a day is clicked."
          },
          {
            "name": "onDayFocus",
            "type": "DayEventHandler<React.FocusEvent<Element, Element>> | undefined",
            "description": "Event handler when a day is focused."
          },
          {
            "name": "onDayBlur",
            "type": "DayEventHandler<React.FocusEvent<Element, Element>> | undefined",
            "description": "Event handler when a day is blurred."
          },
          {
            "name": "onDayKeyDown",
            "type": "DayEventHandler<React.KeyboardEvent<Element>> | undefined",
            "description": "Event handler when a key is pressed on a day."
          },
          {
            "name": "onDayMouseEnter",
            "type": "DayEventHandler<React.MouseEvent<Element, MouseEvent>> | undefined",
            "description": "Event handler when the mouse enters a day."
          },
          {
            "name": "onDayMouseLeave",
            "type": "DayEventHandler<React.MouseEvent<Element, MouseEvent>> | undefined",
            "description": "Event handler when the mouse leaves a day."
          },
          {
            "name": "dateLib",
            "type": "Partial<DateLib> | undefined",
            "description": "Replace the default date library with a custom one. Experimental: not\nguaranteed to be stable (may not respect semver)."
          },
          {
            "name": "onDayKeyUp",
            "type": "DayEventHandler<React.KeyboardEvent<Element>> | undefined",
            "description": "Native onDayKeyUp attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onDayKeyPress",
            "type": "DayEventHandler<React.KeyboardEvent<Element>> | undefined",
            "description": "Native onDayKeyPress attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onDayPointerEnter",
            "type": "DayEventHandler<React.PointerEvent<Element>> | undefined",
            "description": "Native onDayPointerEnter attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onDayPointerLeave",
            "type": "DayEventHandler<React.PointerEvent<Element>> | undefined",
            "description": "Native onDayPointerLeave attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onDayTouchCancel",
            "type": "DayEventHandler<React.TouchEvent<Element>> | undefined",
            "description": "Native onDayTouchCancel attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onDayTouchEnd",
            "type": "DayEventHandler<React.TouchEvent<Element>> | undefined",
            "description": "Native onDayTouchEnd attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onDayTouchMove",
            "type": "DayEventHandler<React.TouchEvent<Element>> | undefined",
            "description": "Native onDayTouchMove attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onDayTouchStart",
            "type": "DayEventHandler<React.TouchEvent<Element>> | undefined",
            "description": "Native onDayTouchStart attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "selected",
            "type": "DateRange | undefined",
            "description": "The selected range.",
            "required": true
          },
          {
            "name": "onSelect",
            "type": "OnSelectHandler<DateRange> | undefined",
            "description": "Event handler when a range is selected."
          },
          {
            "name": "buttonVariant",
            "type": "\"link\" | \"default\" | \"primary\" | \"secondary\" | \"outline\" | \"ghost\" | \"destructive\" | null | undefined",
            "description": "Native buttonVariant attribute or callback; forwarded to the rendered element.",
            "default": "\"ghost\""
          },
          {
            "name": "ref",
            "type": "React.Ref<HTMLDivElement> | undefined",
            "description": "Forward a ref to the rendered element."
          },
          {
            "name": "min",
            "type": "number | undefined",
            "description": "The minimum number of days to include in the range."
          },
          {
            "name": "max",
            "type": "number | undefined",
            "description": "The maximum number of days to include in the range."
          },
          {
            "name": "excludeDisabled",
            "type": "boolean | undefined",
            "description": "When `true`, the range will reset when including a disabled day."
          },
          {
            "name": "resetOnSelect",
            "type": "boolean | undefined",
            "description": "When `true`, clicking a day starts a new range if there is no current start\ndate or if a range is already complete. In those cases, the clicked day\nbecomes the start of the new range."
          }
        ]
      },
      {
        "name": "CalendarDayButton",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "day",
            "type": "CalendarDay",
            "description": "The day to render.",
            "required": true
          },
          {
            "name": "modifiers",
            "type": "Modifiers",
            "description": "The modifiers to apply to the day.",
            "required": true
          },
          {
            "name": "disabled",
            "type": "boolean | undefined",
            "description": "Native disabled attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "name",
            "type": "string | undefined",
            "description": "Native name attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "type",
            "type": "\"button\" | \"submit\" | \"reset\" | undefined",
            "description": "Native type attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "value",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native value attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "defaultChecked",
            "type": "boolean | undefined",
            "description": "Native defaultChecked attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "style",
            "type": "CSSProperties | undefined",
            "description": "Native style attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "ChangeEventHandler<HTMLButtonElement, Element> | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "SubmitEventHandler<HTMLButtonElement> | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "KeyboardEventHandler<HTMLButtonElement> | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "MouseEventHandler<HTMLButtonElement> | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "locale",
            "type": "Partial<DayPickerLocale> | undefined",
            "description": "Native locale attribute or callback; forwarded to the rendered element."
          }
        ]
      },
      {
        "name": "Calendar legacy schedule API",
        "description": "Compatibility overload selected only by the legacy props described below.",
        "props": [
          {
            "name": "variant",
            "type": "\"schedule\" | \"date\"",
            "default": "\"schedule\"",
            "description": "Schedule displays event cells; date is the compact picker."
          },
          {
            "name": "value / defaultValue / onValueChange",
            "type": "Date / Date / (date: Date) => void",
            "description": "Controlled or initial single date."
          },
          {
            "name": "range / defaultRange / onRangeChange",
            "type": "{ from: Date; to?: Date } / (range: DateRange) => void",
            "description": "Single/range API uses mode=\"range\" and normalizes reversed endpoints."
          },
          {
            "name": "events",
            "type": "Array<{ id: string; title: string; startAt: Date; endAt?: Date }>",
            "default": "[]",
            "description": "App-supplied schedule entries."
          },
          {
            "name": "min / max / disabled",
            "type": "Date / Date / boolean | ((date: Date) => boolean)",
            "description": "Bounds and unavailable dates; ranges cannot span excluded dates."
          },
          {
            "name": "locale / startDay",
            "type": "string / 0 | 1",
            "default": "\"en-US\" / 0",
            "description": "Formatting locale and Sunday/Monday first weekday."
          }
        ]
      }
    ],
    "links": [
      {
        "label": "shadcn Base calendar reference",
        "href": "https://ui.shadcn.com/docs/components/base/calendar"
      },
      {
        "label": "DayPicker 9.14 API",
        "href": "https://daypicker.dev/v9/api"
      }
    ],
    "notes": [
      "Calendar now supports DayPicker 9.14 mode/selected/onSelect, multiple selection, ranges, numberOfMonths, controlled month, captionLayout, custom classNames/components/formatters/labels, locales and timeZone. Caption dropdowns use Leement Select.",
      "CalendarDayButton forwards its button props and focuses the day selected by DayPicker. DayPicker owns navigation and disabled-date semantics.",
      "Legacy value/defaultValue/onValueChange, range/defaultRange/onRangeChange, variant, events, min/max, startDay and string locale select the existing schedule/date API. They cannot be mixed with DayPicker selected/onSelect. DatePicker continues using this API.",
      "animate requests a token-based Motion fade when the caption month changes; DayPicker CSS animation is disabled. No animation stylesheet is required."
    ]
  },
  "chart": {
    "parts": [
      {
        "name": "ChartContainer",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "defaultChecked",
            "type": "boolean | undefined",
            "description": "Native defaultChecked attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "style",
            "type": "CSSProperties | undefined",
            "description": "Native style attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part.",
            "required": true
          },
          {
            "name": "onChange",
            "type": "ChangeEventHandler<HTMLDivElement, Element> | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "SubmitEventHandler<HTMLDivElement> | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "KeyboardEventHandler<HTMLDivElement> | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "MouseEventHandler<HTMLDivElement> | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "config",
            "type": "ChartConfig",
            "description": "Native config attribute or callback; forwarded to the rendered element.",
            "required": true
          },
          {
            "name": "initialDimension",
            "type": "{ width: number; height: number; } | undefined",
            "description": "Native initialDimension attribute or callback; forwarded to the rendered element.",
            "default": "INITIAL_DIMENSION"
          }
        ]
      },
      {
        "name": "ChartLegend",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "style",
            "type": "CSSProperties | undefined",
            "description": "Native style attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "name",
            "type": "string | undefined",
            "description": "Native name attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "type",
            "type": "string | undefined",
            "description": "Native type attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "dangerouslySetInnerHTML",
            "type": "{ __html: string; } | undefined",
            "description": "Native dangerouslySetInnerHTML attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onCopy",
            "type": "AdaptChildClipboardEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onCopy attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onCopyCapture",
            "type": "AdaptChildClipboardEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onCopyCapture attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onCut",
            "type": "AdaptChildClipboardEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onCut attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onCutCapture",
            "type": "AdaptChildClipboardEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onCutCapture attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onPaste",
            "type": "AdaptChildClipboardEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onPaste attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onPasteCapture",
            "type": "AdaptChildClipboardEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onPasteCapture attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onCompositionEnd",
            "type": "AdaptChildCompositionEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onCompositionEnd attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onCompositionEndCapture",
            "type": "AdaptChildCompositionEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onCompositionEndCapture attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onCompositionStart",
            "type": "AdaptChildCompositionEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onCompositionStart attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onCompositionStartCapture",
            "type": "AdaptChildCompositionEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onCompositionStartCapture attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onCompositionUpdate",
            "type": "AdaptChildCompositionEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onCompositionUpdate attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onCompositionUpdateCapture",
            "type": "AdaptChildCompositionEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onCompositionUpdateCapture attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onFocus",
            "type": "AdaptChildFocusEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onFocus attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onFocusCapture",
            "type": "AdaptChildFocusEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onFocusCapture attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onBlur",
            "type": "AdaptChildFocusEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onBlur attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onBlurCapture",
            "type": "AdaptChildFocusEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onBlurCapture attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onChange",
            "type": "AdaptChildFormEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onChangeCapture",
            "type": "AdaptChildFormEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onChangeCapture attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onBeforeInput",
            "type": "AdaptChildFormEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onBeforeInput attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onBeforeInputCapture",
            "type": "AdaptChildFormEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onBeforeInputCapture attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onInput",
            "type": "AdaptChildFormEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onInput attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onInputCapture",
            "type": "AdaptChildFormEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onInputCapture attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onReset",
            "type": "AdaptChildFormEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onReset attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onResetCapture",
            "type": "AdaptChildFormEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onResetCapture attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "AdaptChildFormEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmitCapture",
            "type": "AdaptChildFormEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onSubmitCapture attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onInvalid",
            "type": "AdaptChildFormEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onInvalid attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onInvalidCapture",
            "type": "AdaptChildFormEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onInvalidCapture attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onLoad",
            "type": "AdaptChildReactEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onLoad attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onLoadCapture",
            "type": "AdaptChildReactEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onLoadCapture attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onError",
            "type": "AdaptChildReactEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onError attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onErrorCapture",
            "type": "AdaptChildReactEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onErrorCapture attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "AdaptChildKeyboardEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDownCapture",
            "type": "AdaptChildKeyboardEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onKeyDownCapture attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyPress",
            "type": "AdaptChildKeyboardEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onKeyPress attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyPressCapture",
            "type": "AdaptChildKeyboardEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onKeyPressCapture attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyUp",
            "type": "AdaptChildKeyboardEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onKeyUp attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyUpCapture",
            "type": "AdaptChildKeyboardEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onKeyUpCapture attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onAbort",
            "type": "AdaptChildReactEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onAbort attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onAbortCapture",
            "type": "AdaptChildReactEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onAbortCapture attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onCanPlay",
            "type": "AdaptChildReactEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onCanPlay attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onCanPlayCapture",
            "type": "AdaptChildReactEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onCanPlayCapture attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onCanPlayThrough",
            "type": "AdaptChildReactEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onCanPlayThrough attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onCanPlayThroughCapture",
            "type": "AdaptChildReactEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onCanPlayThroughCapture attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onDurationChange",
            "type": "AdaptChildReactEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onDurationChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onDurationChangeCapture",
            "type": "AdaptChildReactEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onDurationChangeCapture attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onEmptied",
            "type": "AdaptChildReactEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onEmptied attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onEmptiedCapture",
            "type": "AdaptChildReactEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onEmptiedCapture attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onEncrypted",
            "type": "AdaptChildReactEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onEncrypted attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onEncryptedCapture",
            "type": "AdaptChildReactEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onEncryptedCapture attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onEnded",
            "type": "AdaptChildReactEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onEnded attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onEndedCapture",
            "type": "AdaptChildReactEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onEndedCapture attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onLoadedData",
            "type": "AdaptChildReactEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onLoadedData attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onLoadedDataCapture",
            "type": "AdaptChildReactEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onLoadedDataCapture attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onLoadedMetadata",
            "type": "AdaptChildReactEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onLoadedMetadata attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onLoadedMetadataCapture",
            "type": "AdaptChildReactEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onLoadedMetadataCapture attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onLoadStart",
            "type": "AdaptChildReactEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onLoadStart attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onLoadStartCapture",
            "type": "AdaptChildReactEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onLoadStartCapture attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onPause",
            "type": "AdaptChildReactEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onPause attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onPauseCapture",
            "type": "AdaptChildReactEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onPauseCapture attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onPlay",
            "type": "AdaptChildReactEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onPlay attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onPlayCapture",
            "type": "AdaptChildReactEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onPlayCapture attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onPlaying",
            "type": "AdaptChildReactEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onPlaying attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onPlayingCapture",
            "type": "AdaptChildReactEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onPlayingCapture attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onProgress",
            "type": "AdaptChildReactEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onProgress attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onProgressCapture",
            "type": "AdaptChildReactEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onProgressCapture attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onRateChange",
            "type": "AdaptChildReactEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onRateChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onRateChangeCapture",
            "type": "AdaptChildReactEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onRateChangeCapture attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSeeked",
            "type": "AdaptChildReactEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onSeeked attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSeekedCapture",
            "type": "AdaptChildReactEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onSeekedCapture attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSeeking",
            "type": "AdaptChildReactEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onSeeking attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSeekingCapture",
            "type": "AdaptChildReactEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onSeekingCapture attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onStalled",
            "type": "AdaptChildReactEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onStalled attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onStalledCapture",
            "type": "AdaptChildReactEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onStalledCapture attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSuspend",
            "type": "AdaptChildReactEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onSuspend attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSuspendCapture",
            "type": "AdaptChildReactEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onSuspendCapture attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onTimeUpdate",
            "type": "AdaptChildReactEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onTimeUpdate attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onTimeUpdateCapture",
            "type": "AdaptChildReactEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onTimeUpdateCapture attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onVolumeChange",
            "type": "AdaptChildReactEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onVolumeChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onVolumeChangeCapture",
            "type": "AdaptChildReactEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onVolumeChangeCapture attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onWaiting",
            "type": "AdaptChildReactEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onWaiting attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onWaitingCapture",
            "type": "AdaptChildReactEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onWaitingCapture attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onAuxClick",
            "type": "AdaptChildMouseEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onAuxClick attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onAuxClickCapture",
            "type": "AdaptChildMouseEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onAuxClickCapture attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "((data: LegendPayload, index: number, event: MouseEvent<HTMLElement>) => void) | undefined",
            "description": "The customized event handler of click on the items in this group"
          },
          {
            "name": "onClickCapture",
            "type": "AdaptChildMouseEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onClickCapture attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onContextMenu",
            "type": "AdaptChildMouseEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onContextMenu attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onContextMenuCapture",
            "type": "AdaptChildMouseEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onContextMenuCapture attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onDoubleClick",
            "type": "AdaptChildMouseEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onDoubleClick attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onDoubleClickCapture",
            "type": "AdaptChildMouseEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onDoubleClickCapture attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onDrag",
            "type": "AdaptChildDragEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onDrag attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onDragCapture",
            "type": "AdaptChildDragEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onDragCapture attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onDragEnd",
            "type": "AdaptChildDragEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onDragEnd attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onDragEndCapture",
            "type": "AdaptChildDragEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onDragEndCapture attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onDragEnter",
            "type": "AdaptChildDragEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onDragEnter attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onDragEnterCapture",
            "type": "AdaptChildDragEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onDragEnterCapture attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onDragExit",
            "type": "AdaptChildDragEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onDragExit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onDragExitCapture",
            "type": "AdaptChildDragEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onDragExitCapture attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onDragLeave",
            "type": "AdaptChildDragEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onDragLeave attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onDragLeaveCapture",
            "type": "AdaptChildDragEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onDragLeaveCapture attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onDragOver",
            "type": "AdaptChildDragEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onDragOver attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onDragOverCapture",
            "type": "AdaptChildDragEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onDragOverCapture attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onDragStart",
            "type": "AdaptChildDragEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onDragStart attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onDragStartCapture",
            "type": "AdaptChildDragEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onDragStartCapture attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onDrop",
            "type": "AdaptChildDragEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onDrop attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onDropCapture",
            "type": "AdaptChildDragEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onDropCapture attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onMouseDown",
            "type": "AdaptChildMouseEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onMouseDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onMouseDownCapture",
            "type": "AdaptChildMouseEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onMouseDownCapture attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onMouseEnter",
            "type": "((data: LegendPayload, index: number, event: MouseEvent<HTMLElement>) => void) | undefined",
            "description": "The customized event handler of mouseenter on the items in this group"
          },
          {
            "name": "onMouseLeave",
            "type": "((data: LegendPayload, index: number, event: MouseEvent<HTMLElement>) => void) | undefined",
            "description": "The customized event handler of mouseleave on the items in this group"
          },
          {
            "name": "onMouseMove",
            "type": "AdaptChildMouseEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onMouseMove attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onMouseMoveCapture",
            "type": "AdaptChildMouseEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onMouseMoveCapture attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onMouseOut",
            "type": "AdaptChildMouseEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onMouseOut attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onMouseOutCapture",
            "type": "AdaptChildMouseEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onMouseOutCapture attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onMouseOver",
            "type": "AdaptChildMouseEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onMouseOver attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onMouseOverCapture",
            "type": "AdaptChildMouseEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onMouseOverCapture attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onMouseUp",
            "type": "AdaptChildMouseEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onMouseUp attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onMouseUpCapture",
            "type": "AdaptChildMouseEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onMouseUpCapture attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSelect",
            "type": "AdaptChildReactEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onSelect attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSelectCapture",
            "type": "AdaptChildReactEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onSelectCapture attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onTouchCancel",
            "type": "AdaptChildTouchEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onTouchCancel attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onTouchCancelCapture",
            "type": "AdaptChildTouchEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onTouchCancelCapture attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onTouchEnd",
            "type": "AdaptChildTouchEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onTouchEnd attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onTouchEndCapture",
            "type": "AdaptChildTouchEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onTouchEndCapture attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onTouchMove",
            "type": "AdaptChildTouchEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onTouchMove attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onTouchMoveCapture",
            "type": "AdaptChildTouchEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onTouchMoveCapture attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onTouchStart",
            "type": "AdaptChildTouchEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onTouchStart attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onTouchStartCapture",
            "type": "AdaptChildTouchEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onTouchStartCapture attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onPointerDown",
            "type": "AdaptChildPointerEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onPointerDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onPointerDownCapture",
            "type": "AdaptChildPointerEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onPointerDownCapture attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onPointerMove",
            "type": "AdaptChildPointerEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onPointerMove attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onPointerMoveCapture",
            "type": "AdaptChildPointerEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onPointerMoveCapture attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onPointerUp",
            "type": "AdaptChildPointerEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onPointerUp attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onPointerUpCapture",
            "type": "AdaptChildPointerEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onPointerUpCapture attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onPointerCancel",
            "type": "AdaptChildPointerEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onPointerCancel attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onPointerCancelCapture",
            "type": "AdaptChildPointerEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onPointerCancelCapture attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onPointerEnter",
            "type": "AdaptChildPointerEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onPointerEnter attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onPointerLeave",
            "type": "AdaptChildPointerEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onPointerLeave attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onPointerOver",
            "type": "AdaptChildPointerEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onPointerOver attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onPointerOverCapture",
            "type": "AdaptChildPointerEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onPointerOverCapture attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onPointerOut",
            "type": "AdaptChildPointerEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onPointerOut attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onPointerOutCapture",
            "type": "AdaptChildPointerEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onPointerOutCapture attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onGotPointerCapture",
            "type": "AdaptChildPointerEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onGotPointerCapture attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onGotPointerCaptureCapture",
            "type": "AdaptChildPointerEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onGotPointerCaptureCapture attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onLostPointerCapture",
            "type": "AdaptChildPointerEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onLostPointerCapture attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onLostPointerCaptureCapture",
            "type": "AdaptChildPointerEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onLostPointerCaptureCapture attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onScroll",
            "type": "AdaptChildUIEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onScroll attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onScrollCapture",
            "type": "AdaptChildUIEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onScrollCapture attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onWheel",
            "type": "AdaptChildWheelEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onWheel attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onWheelCapture",
            "type": "AdaptChildWheelEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onWheelCapture attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onAnimationStart",
            "type": "AdaptChildAnimationEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onAnimationStart attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onAnimationStartCapture",
            "type": "AdaptChildAnimationEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onAnimationStartCapture attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onAnimationEnd",
            "type": "AdaptChildAnimationEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onAnimationEnd attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onAnimationEndCapture",
            "type": "AdaptChildAnimationEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onAnimationEndCapture attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onAnimationIteration",
            "type": "AdaptChildAnimationEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onAnimationIteration attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onAnimationIterationCapture",
            "type": "AdaptChildAnimationEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onAnimationIterationCapture attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onTransitionEnd",
            "type": "AdaptChildTransitionEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onTransitionEnd attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onTransitionEndCapture",
            "type": "AdaptChildTransitionEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onTransitionEndCapture attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "align",
            "type": "HorizontalAlignmentType | undefined",
            "description": "Horizontal alignment of the whole Legend container:\n\n- `left`: shows the Legend to the left of the chart, and chart width reduces automatically to make space for it.\n- `right` shows the Legend to the right of the chart, and chart width reduces automatically.\n- `center` shows the Legend in the middle of chart, and chart width remains unchanged.\n\nThe exact behavior changes depending on 'verticalAlign' prop."
          },
          {
            "name": "href",
            "type": "string | undefined",
            "description": "Native href attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "orientation",
            "type": "string | number | undefined",
            "description": "Native orientation attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onPointerEnterCapture",
            "type": "AdaptChildPointerEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onPointerEnterCapture attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onPointerLeaveCapture",
            "type": "AdaptChildPointerEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onPointerLeaveCapture attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "height",
            "type": "string | number | undefined",
            "description": "Height of the legend.\nAccept CSS style string values like `100%` or `fit-content`, or number values like `400`."
          },
          {
            "name": "width",
            "type": "string | number | undefined",
            "description": "Width of the legend.\nAccept CSS style string values like `100%` or `fit-content`, or number values like `400`."
          },
          {
            "name": "iconSize",
            "type": "number | undefined",
            "description": "The size of icon in each legend item."
          },
          {
            "name": "iconType",
            "type": "LegendType | undefined",
            "description": "The type of icon in each legend item."
          },
          {
            "name": "layout",
            "type": "CartesianLayout | undefined",
            "description": "The layout of legend items inside the legend container."
          },
          {
            "name": "inactiveColor",
            "type": "string | undefined",
            "description": "The color of the icon when the item is inactive."
          },
          {
            "name": "formatter",
            "type": "Formatter | undefined",
            "description": "Function to customize how content is serialized before rendering.\n\nThis should return HTML elements, or strings."
          },
          {
            "name": "labelStyle",
            "type": "React.CSSProperties | undefined",
            "description": "The style of each text label which is a span element."
          },
          {
            "name": "content",
            "type": "ContentType | undefined",
            "description": "Renders the content of the legend.\n\nThis should return HTML elements, not SVG elements.\n\n- If not set, the {@link DefaultLegendContent } component is used.\n- If set to a React element, this element will be cloned and extra props will be passed in.\n- If set to a function, the function will be called and should return HTML elements."
          },
          {
            "name": "wrapperStyle",
            "type": "React.CSSProperties | undefined",
            "description": "CSS styles to be applied to the wrapper `div` element."
          },
          {
            "name": "payloadUniqBy",
            "type": "UniqueOption<LegendPayload> | undefined",
            "description": "Native payloadUniqBy attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onBBoxUpdate",
            "type": "((box: ElementOffset | null) => void) | undefined",
            "description": "Native onBBoxUpdate attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "portal",
            "type": "HTMLElement | null | undefined",
            "description": "If portal is defined, then Legend will use this element as a target\nfor rendering using React Portal.\n\nIf this is undefined then Legend renders inside the recharts-wrapper element."
          },
          {
            "name": "itemSorter",
            "type": "LegendItemSorter | null | undefined",
            "description": "Sorts Legend items. Defaults to `value` which means it will sort alphabetically\nby the label.\n\nIf `null` is provided then the payload is not sorted. Be aware that without sort,\nthe order of items may change between renders!"
          },
          {
            "name": "verticalAlign",
            "type": "VerticalAlignmentType | undefined",
            "description": "The alignment of the whole Legend container:\n\n- `bottom`: shows the Legend below chart, and chart height reduces automatically to make space for it.\n- `top`: shows the Legend above chart, and chart height reduces automatically.\n- `middle`:  shows the Legend in the middle of chart, covering other content, and chart height remains unchanged.\nThe exact behavior changes depending on `align` prop."
          }
        ]
      },
      {
        "name": "ChartLegendContent",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "ref",
            "type": "((((instance: HTMLDivElement | null) => void | (() => VoidOrUndefinedOnly) | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | RefObject<HTMLDivElement | null>) & (((instance: ReactElement<unknown, string | JSXElementConstructor<any>> | null) => void | (() => VoidOrUndefinedOnly) | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | RefObject<ReactElement<unknown, string | JSXElementConstructor<any>> | null>)) | null | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "defaultChecked",
            "type": "boolean | undefined",
            "description": "Native defaultChecked attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "style",
            "type": "CSSProperties | undefined",
            "description": "Native style attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "(ChangeEventHandler<HTMLDivElement, Element> & ((data: any, index: number, event: FormEvent<ReactElement<unknown, string | JSXElementConstructor<any>>>) => void)) | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "(SubmitEventHandler<HTMLDivElement> & ((data: any, index: number, event: FormEvent<ReactElement<unknown, string | JSXElementConstructor<any>>>) => void)) | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "(KeyboardEventHandler<HTMLDivElement> & ((data: any, index: number, event: KeyboardEvent<ReactElement<unknown, string | JSXElementConstructor<any>>>) => void)) | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "(MouseEventHandler<HTMLDivElement> & ((data: LegendPayload, index: number, event: MouseEvent<HTMLElement>) => void)) | undefined",
            "description": "The customized event handler of click on the items in this group"
          },
          {
            "name": "hideIcon",
            "type": "boolean | undefined",
            "description": "Native hideIcon attribute or callback; forwarded to the rendered element.",
            "default": "false"
          },
          {
            "name": "nameKey",
            "type": "string | undefined",
            "description": "Native nameKey attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "iconSize",
            "type": "number | undefined",
            "description": "The size of icon in each legend item."
          },
          {
            "name": "iconType",
            "type": "LegendType | undefined",
            "description": "The type of icon in each legend item."
          },
          {
            "name": "layout",
            "type": "CartesianLayout | undefined",
            "description": "The layout of legend items inside the legend container."
          },
          {
            "name": "align",
            "type": "HorizontalAlignmentType | undefined",
            "description": "Horizontal alignment of the whole Legend container:\n\n- `left`: shows the Legend to the left of the chart, and chart width reduces automatically to make space for it.\n- `right` shows the Legend to the right of the chart, and chart width reduces automatically.\n- `center` shows the Legend in the middle of chart, and chart width remains unchanged.\n\nThe exact behavior changes depending on 'verticalAlign' prop."
          },
          {
            "name": "verticalAlign",
            "type": "VerticalAlignmentType | undefined",
            "description": "Vertical alignment of the whole Legend container:\n\n- `bottom`: shows the Legend below chart, and chart height reduces automatically to make space for it.\n- `top`: shows the Legend above chart, and chart height reduces automatically.\n- `middle`:  shows the Legend in the middle of chart, covering other content, and chart height remains unchanged.\nThe exact behavior changes depending on `align` prop.",
            "default": "\"bottom\""
          },
          {
            "name": "inactiveColor",
            "type": "string | undefined",
            "description": "The color of the icon when the item is inactive."
          },
          {
            "name": "formatter",
            "type": "Formatter | undefined",
            "description": "Function to customize how content is serialized before rendering.\n\nThis should return HTML elements, or strings."
          },
          {
            "name": "payload",
            "type": "readonly LegendPayload[] | undefined",
            "description": "DefaultLegendContent.payload is omitted from Legend props.\nA custom payload can be passed here if desired, or it can be passed from the Legend \"content\" callback."
          },
          {
            "name": "labelStyle",
            "type": "React.CSSProperties | undefined",
            "description": "The style of each text label which is a span element."
          },
          {
            "name": "name",
            "type": "string | undefined",
            "description": "Native name attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "type",
            "type": "string | undefined",
            "description": "Native type attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "href",
            "type": "string | undefined",
            "description": "Native href attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "orientation",
            "type": "string | number | undefined",
            "description": "Native orientation attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onPointerEnterCapture",
            "type": "AdaptChildPointerEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onPointerEnterCapture attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onPointerLeaveCapture",
            "type": "AdaptChildPointerEventHandler<any, ReactElement<unknown, string | JSXElementConstructor<any>>> | undefined",
            "description": "Native onPointerLeaveCapture attribute or callback; forwarded to the rendered element."
          }
        ]
      },
      {
        "name": "ChartStyle",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "id",
            "type": "string",
            "description": "Native id attribute or callback; forwarded to the rendered element.",
            "required": true
          },
          {
            "name": "config",
            "type": "ChartConfig",
            "description": "Native config attribute or callback; forwarded to the rendered element.",
            "required": true
          }
        ]
      },
      {
        "name": "ChartTooltip",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "formatter",
            "type": "(Formatter<ValueType, NameType> & ((value: ValueType, name: NameType, item: TooltipPayloadEntry, index: number, payload: TooltipPayload) => ReactNode | [ReactNode, ReactNode])) | undefined",
            "description": "Function to customize the value in the tooltip.\nIf you return an array, the first entry will be the formatted \"value\", and the second entry will be the formatted \"name\""
          },
          {
            "name": "labelStyle",
            "type": "React.CSSProperties | undefined",
            "description": "The style of default tooltip label which is a p element."
          },
          {
            "name": "separator",
            "type": "string | undefined",
            "description": "The separator between name and value."
          },
          {
            "name": "wrapperClassName",
            "type": "string | undefined",
            "description": "Native wrapperClassName attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "labelClassName",
            "type": "string | undefined",
            "description": "Native labelClassName attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "contentStyle",
            "type": "React.CSSProperties | undefined",
            "description": "The style of tooltip content which is a dom element."
          },
          {
            "name": "itemStyle",
            "type": "React.CSSProperties | undefined",
            "description": "The style of default tooltip content item which is a li element."
          },
          {
            "name": "labelFormatter",
            "type": "(((label: ReactNode, payload: readonly TooltipPayloadEntry<ValueType, NameType>[]) => ReactNode) & ((label: any, payload: TooltipPayload) => ReactNode)) | undefined",
            "description": "The formatter function of label in tooltip."
          },
          {
            "name": "itemSorter",
            "type": "(TooltipItemSorter<ValueType, NameType> & TooltipItemSorter) | undefined",
            "description": "Sorts tooltip items.\nDefaults to 'name' which means it sorts alphabetically by graphical item `name` property."
          },
          {
            "name": "active",
            "type": "boolean | undefined",
            "description": "If true, then Tooltip is always displayed, once an activeIndex is set by mouse over, or programmatically.\nIf false, then Tooltip is never displayed.\nIf undefined, Recharts will control when the Tooltip displays. This includes mouse and keyboard controls."
          },
          {
            "name": "allowEscapeViewBox",
            "type": "AllowInDimension | undefined",
            "description": "This option allows the tooltip to extend beyond the viewBox of the chart itself."
          },
          {
            "name": "animationDuration",
            "type": "number | undefined",
            "description": "Specifies the duration of animation, the unit of this option is ms."
          },
          {
            "name": "animationEasing",
            "type": "AnimationTiming | undefined",
            "description": "The type of easing function."
          },
          {
            "name": "axisId",
            "type": "AxisId | undefined",
            "description": "Tooltip always attaches itself to the \"Tooltip\" axis. Which axis is it? Depends on the layout:\n- horizontal layout -> X axis\n- vertical layout -> Y axis\n- radial layout -> radial axis\n- centric layout -> angle axis\n\nTooltip will use the default axis for the layout, unless you specify an axisId."
          },
          {
            "name": "content",
            "type": "ContentType<ValueType, NameType> | undefined",
            "description": "Renders the content of the tooltip.\n\nThis should return HTML elements, not SVG elements.\n\n- If not set, the {@link DefaultTooltipContent } component is used.\n- If set to a React element, this element will be cloned and extra props will be passed in.\n- If set to a function, the function will be called and should return HTML elements."
          },
          {
            "name": "cursor",
            "type": "CursorDefinition | undefined",
            "description": "If set false, no cursor will be drawn when tooltip is active.\nIf set a object, the option is the configuration of cursor.\nIf set a React element, the option is the custom react element of drawing cursor."
          },
          {
            "name": "defaultIndex",
            "type": "number | TooltipIndex | undefined",
            "description": "Native defaultIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "filterNull",
            "type": "boolean | undefined",
            "description": "When an item of the payload has value null or undefined, this item won't be displayed."
          },
          {
            "name": "includeHidden",
            "type": "boolean | undefined",
            "description": "If true, the tooltip will display information about hidden series.\nDefaults to false.\nInteracting with the hide property of Area, Bar, Line, Scatter."
          },
          {
            "name": "isAnimationActive",
            "type": "boolean | \"auto\" | undefined",
            "description": "If set false, animation of tooltip will be disabled.\nIf set \"auto\", the animation will be disabled in SSR and will respect the user's prefers-reduced-motion system preference for accessibility."
          },
          {
            "name": "offset",
            "type": "number | Coordinate | undefined",
            "description": "The offset size between the position of tooltip and the mouse cursor position.\nWhen a number is provided, the same offset is applied to both x and y axes.\n\nWhen a Coordinate object is provided, you can specify different offsets for each axis (x and y as numbers)"
          },
          {
            "name": "payloadUniqBy",
            "type": "UniqueOption<TooltipPayloadEntry> | undefined",
            "description": "Native payloadUniqBy attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "portal",
            "type": "HTMLElement | null | undefined",
            "description": "If portal is defined, then Tooltip will use this element as a target\nfor rendering using React Portal: https://react.dev/reference/react-dom/createPortal\n\nIf this is undefined then Tooltip renders inside the recharts-wrapper element."
          },
          {
            "name": "position",
            "type": "Partial<Coordinate> | undefined",
            "description": "If this field is set, the tooltip will be displayed at the specified position\nregardless of the mouse position.\n\nYou can set a single field (x or y) and let the other field be calculated automatically based\non the mouse position."
          },
          {
            "name": "reverseDirection",
            "type": "AllowInDimension | undefined",
            "description": "Native reverseDirection attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "shared",
            "type": "boolean | undefined",
            "description": "Defines whether the tooltip is reacting to the current data point,\nor to all data points at the current axis coordinate.\n\n- `true`: tooltip will appear on top of all bars on an axis tick.\n- `false`: tooltip will appear on individual bars.\n\nDifferent chart types allow different modes, and have different defaults."
          },
          {
            "name": "trigger",
            "type": "TooltipTrigger | undefined",
            "description": "If `hover` then the Tooltip shows on mouse enter and hides on mouse leave.\n\nIf `click` then the Tooltip shows after clicking and stays active."
          },
          {
            "name": "useTranslate3d",
            "type": "boolean | undefined",
            "description": "Native useTranslate3d attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "wrapperStyle",
            "type": "React.CSSProperties | undefined",
            "description": "CSS styles to be applied to the wrapper `div` element."
          }
        ]
      },
      {
        "name": "ChartTooltipContent",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "formatter",
            "type": "(Formatter<ValueType, NameType> & ((value: ValueType, name: NameType, item: TooltipPayloadEntry, index: number, payload: TooltipPayload) => ReactNode | [ReactNode, ReactNode]) & Formatter<ValueType, string | number>) | undefined",
            "description": "Function to customize the value in the tooltip.\nIf you return an array, the first entry will be the formatted \"value\", and the second entry will be the formatted \"name\""
          },
          {
            "name": "labelStyle",
            "type": "React.CSSProperties | undefined",
            "description": "The style of default tooltip label which is a p element."
          },
          {
            "name": "separator",
            "type": "string | undefined",
            "description": "The separator between name and value."
          },
          {
            "name": "wrapperClassName",
            "type": "string | undefined",
            "description": "Native wrapperClassName attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "labelClassName",
            "type": "string | undefined",
            "description": "Native labelClassName attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "contentStyle",
            "type": "React.CSSProperties | undefined",
            "description": "The style of tooltip content which is a dom element."
          },
          {
            "name": "itemStyle",
            "type": "React.CSSProperties | undefined",
            "description": "The style of default tooltip content item which is a li element."
          },
          {
            "name": "labelFormatter",
            "type": "(((label: ReactNode, payload: readonly TooltipPayloadEntry<ValueType, NameType>[]) => ReactNode) & ((label: any, payload: TooltipPayload) => ReactNode) & ((label: ReactNode, payload: readonly TooltipPayloadEntry<ValueType, string | number>[]) => ReactNode)) | undefined",
            "description": "The formatter function of label in tooltip."
          },
          {
            "name": "itemSorter",
            "type": "(TooltipItemSorter<ValueType, NameType> & (TooltipItemSorter & TooltipItemSorter<ValueType, string | number>)) | undefined",
            "description": "Sorts tooltip items.\nDefaults to 'name' which means it sorts alphabetically by graphical item `name` property."
          },
          {
            "name": "active",
            "type": "boolean | undefined",
            "description": "If true, then Tooltip is always displayed, once an activeIndex is set by mouse over, or programmatically.\nIf false, then Tooltip is never displayed.\nIf undefined, Recharts will control when the Tooltip displays. This includes mouse and keyboard controls."
          },
          {
            "name": "allowEscapeViewBox",
            "type": "AllowInDimension | undefined",
            "description": "This option allows the tooltip to extend beyond the viewBox of the chart itself."
          },
          {
            "name": "animationDuration",
            "type": "number | undefined",
            "description": "Specifies the duration of animation, the unit of this option is ms."
          },
          {
            "name": "animationEasing",
            "type": "AnimationTiming | undefined",
            "description": "The type of easing function."
          },
          {
            "name": "axisId",
            "type": "AxisId | undefined",
            "description": "Tooltip always attaches itself to the \"Tooltip\" axis. Which axis is it? Depends on the layout:\n- horizontal layout -> X axis\n- vertical layout -> Y axis\n- radial layout -> radial axis\n- centric layout -> angle axis\n\nTooltip will use the default axis for the layout, unless you specify an axisId."
          },
          {
            "name": "content",
            "type": "(ContentType<ValueType, NameType> & string) | undefined",
            "description": "Renders the content of the tooltip.\n\nThis should return HTML elements, not SVG elements.\n\n- If not set, the {@link DefaultTooltipContent } component is used.\n- If set to a React element, this element will be cloned and extra props will be passed in.\n- If set to a function, the function will be called and should return HTML elements."
          },
          {
            "name": "cursor",
            "type": "CursorDefinition | undefined",
            "description": "If set false, no cursor will be drawn when tooltip is active.\nIf set a object, the option is the configuration of cursor.\nIf set a React element, the option is the custom react element of drawing cursor."
          },
          {
            "name": "defaultIndex",
            "type": "number | TooltipIndex | undefined",
            "description": "Native defaultIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "filterNull",
            "type": "boolean | undefined",
            "description": "When an item of the payload has value null or undefined, this item won't be displayed."
          },
          {
            "name": "includeHidden",
            "type": "boolean | undefined",
            "description": "If true, the tooltip will display information about hidden series.\nDefaults to false.\nInteracting with the hide property of Area, Bar, Line, Scatter."
          },
          {
            "name": "isAnimationActive",
            "type": "boolean | \"auto\" | undefined",
            "description": "If set false, animation of tooltip will be disabled.\nIf set \"auto\", the animation will be disabled in SSR and will respect the user's prefers-reduced-motion system preference for accessibility."
          },
          {
            "name": "offset",
            "type": "number | Coordinate | undefined",
            "description": "The offset size between the position of tooltip and the mouse cursor position.\nWhen a number is provided, the same offset is applied to both x and y axes.\n\nWhen a Coordinate object is provided, you can specify different offsets for each axis (x and y as numbers)"
          },
          {
            "name": "payloadUniqBy",
            "type": "UniqueOption<TooltipPayloadEntry> | undefined",
            "description": "Native payloadUniqBy attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "portal",
            "type": "HTMLElement | null | undefined",
            "description": "If portal is defined, then Tooltip will use this element as a target\nfor rendering using React Portal: https://react.dev/reference/react-dom/createPortal\n\nIf this is undefined then Tooltip renders inside the recharts-wrapper element."
          },
          {
            "name": "position",
            "type": "Partial<Coordinate> | undefined",
            "description": "If this field is set, the tooltip will be displayed at the specified position\nregardless of the mouse position.\n\nYou can set a single field (x or y) and let the other field be calculated automatically based\non the mouse position."
          },
          {
            "name": "reverseDirection",
            "type": "AllowInDimension | undefined",
            "description": "Native reverseDirection attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "shared",
            "type": "boolean | undefined",
            "description": "Defines whether the tooltip is reacting to the current data point,\nor to all data points at the current axis coordinate.\n\n- `true`: tooltip will appear on top of all bars on an axis tick.\n- `false`: tooltip will appear on individual bars.\n\nDifferent chart types allow different modes, and have different defaults."
          },
          {
            "name": "trigger",
            "type": "TooltipTrigger | undefined",
            "description": "If `hover` then the Tooltip shows on mouse enter and hides on mouse leave.\n\nIf `click` then the Tooltip shows after clicking and stays active."
          },
          {
            "name": "useTranslate3d",
            "type": "boolean | undefined",
            "description": "Native useTranslate3d attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "wrapperStyle",
            "type": "React.CSSProperties | undefined",
            "description": "CSS styles to be applied to the wrapper `div` element."
          },
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "defaultChecked",
            "type": "boolean | undefined",
            "description": "Native defaultChecked attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "style",
            "type": "CSSProperties | undefined",
            "description": "Native style attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "ChangeEventHandler<HTMLDivElement, Element> | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "SubmitEventHandler<HTMLDivElement> | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "KeyboardEventHandler<HTMLDivElement> | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "MouseEventHandler<HTMLDivElement> | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "hideLabel",
            "type": "boolean | undefined",
            "description": "Native hideLabel attribute or callback; forwarded to the rendered element.",
            "default": "false"
          },
          {
            "name": "hideIndicator",
            "type": "boolean | undefined",
            "description": "Native hideIndicator attribute or callback; forwarded to the rendered element.",
            "default": "false"
          },
          {
            "name": "indicator",
            "type": "\"line\" | \"dot\" | \"dashed\" | undefined",
            "description": "Native indicator attribute or callback; forwarded to the rendered element.",
            "default": "\"dot\""
          },
          {
            "name": "nameKey",
            "type": "string | undefined",
            "description": "Native nameKey attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "labelKey",
            "type": "string | undefined",
            "description": "Native labelKey attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "label",
            "type": "React.ReactNode",
            "description": "Native label attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "payload",
            "type": "readonly Payload<ValueType, string | number>[] | undefined",
            "description": "Native payload attribute or callback; forwarded to the rendered element."
          }
        ]
      }
    ],
    "links": [
      {
        "label": "shadcn Base chart reference",
        "href": "https://ui.shadcn.com/docs/components/base/chart"
      },
      {
        "label": "Recharts API",
        "href": "https://recharts.github.io/en-US/api/"
      }
    ],
    "notes": [
      "ChartConfig describes labels/icons and color or per-theme color mappings. ChartContainer scopes CSS variables to its generated ID; use semantic token variables for colors.",
      "Tooltip and legend resolve labels/icons through config. Tooltip indicators support dot/line/dashed and native formatter/labelFormatter contracts. ResponsiveContainer accepts initialDimension for SSR.",
      "Leement disables Recharts tooltip animation and uses Motion for chart entrance. Set isAnimationActive=false on the graph series when composing new chart recipes."
    ]
  },
  "command": {
    "parts": [
      {
        "name": "Command",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "children",
            "type": "React.ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "defaultValue",
            "type": "string | (readonly string[] & string) | undefined",
            "description": "Optional default item value when it is initially rendered."
          },
          {
            "name": "defaultChecked",
            "type": "boolean | undefined",
            "description": "Native defaultChecked attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "style",
            "type": "CSSProperties | undefined",
            "description": "Native style attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "onChange",
            "type": "ChangeEventHandler<HTMLDivElement, Element> | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "SubmitEventHandler<HTMLDivElement> | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "KeyboardEventHandler<HTMLDivElement> | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "MouseEventHandler<HTMLDivElement> | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "asChild",
            "type": "boolean | undefined",
            "description": "Native asChild attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "label",
            "type": "string | undefined",
            "description": "Accessible label for this command menu. Not shown visibly."
          },
          {
            "name": "shouldFilter",
            "type": "boolean | undefined",
            "description": "Optionally set to `false` to turn off the automatic filtering and sorting.\nIf `false`, you must conditionally render valid items based on the search query yourself."
          },
          {
            "name": "filter",
            "type": "CommandFilter | undefined",
            "description": "Custom filter function for whether each command menu item should matches the given search query.\nIt should return a number between 0 and 1, with 1 being the best match and 0 being hidden entirely.\nBy default, uses the `command-score` library."
          },
          {
            "name": "value",
            "type": "string | undefined",
            "description": "Optional controlled state of the selected command menu item."
          },
          {
            "name": "onValueChange",
            "type": "((value: string) => void) | undefined",
            "description": "Event handler called when the selected item of the menu changes."
          },
          {
            "name": "loop",
            "type": "boolean | undefined",
            "description": "Optionally set to `true` to turn on looping around when using the arrow keys."
          },
          {
            "name": "disablePointerSelection",
            "type": "boolean | undefined",
            "description": "Optionally set to `true` to disable selection via pointer events."
          },
          {
            "name": "vimBindings",
            "type": "boolean | undefined",
            "description": "Set to `false` to disable ctrl+n/j/p/k shortcuts. Defaults to `true`."
          },
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          }
        ]
      },
      {
        "name": "CommandDialog",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "modal",
            "type": "boolean | \"trap-focus\" | undefined",
            "description": "Determines if the dialog enters a modal state when open.\n- `true`: user interaction is limited to just the dialog: focus is trapped, document page scroll is locked, and pointer interactions on outside elements are disabled.\n- `false`: user interaction with the rest of the document is allowed.\n- `'trap-focus'`: focus is trapped inside the dialog, but document page scroll is not locked and pointer interactions outside of it remain enabled.\n\nWhen `modal` is `true` or `'trap-focus'`, render `<Dialog.Close>` inside `<Dialog.Popup>` so\ntouch screen readers can escape the popup.",
            "default": "true"
          },
          {
            "name": "disablePointerDismissal",
            "type": "boolean | undefined",
            "description": "Whether to prevent the dialog from closing on outside presses.\nFor non-modal dialogs, this also prevents the dialog from closing when focus moves outside of it.",
            "default": "false"
          },
          {
            "name": "onOpenChange",
            "type": "((open: boolean, eventDetails: DialogRoot.ChangeEventDetails) => void) | undefined",
            "description": "Event handler called when the dialog is opened or closed."
          },
          {
            "name": "actionsRef",
            "type": "React.RefObject<DialogRootActions | null> | undefined",
            "description": "A ref to imperative actions.\n- `unmount`: Manually unmounts the dialog.\nCall this after any externally controlled closing animation finishes.\n- `close`: Closes the dialog imperatively when called."
          },
          {
            "name": "handle",
            "type": "DialogHandle<unknown> | undefined",
            "description": "A handle to associate the dialog with a trigger.\nIf specified, allows external triggers to control the dialog's open state.\nCan be created with the Dialog.createHandle() method."
          },
          {
            "name": "open",
            "type": "boolean | undefined",
            "description": "Whether the dialog is currently open."
          },
          {
            "name": "defaultOpen",
            "type": "boolean | undefined",
            "description": "Whether the dialog is initially open.\n\nTo render a controlled dialog, use the `open` prop instead.",
            "default": "false"
          },
          {
            "name": "onOpenChangeComplete",
            "type": "((open: boolean) => void) | undefined",
            "description": "Event handler called after any animations complete when the dialog is opened or closed."
          },
          {
            "name": "triggerId",
            "type": "string | null | undefined",
            "description": "ID of the trigger that the dialog is associated with.\nThis is useful in conjunction with the `open` prop to create a controlled dialog.\nThere's no need to specify this prop when the dialog is uncontrolled (that is, when the `open` prop is not set)."
          },
          {
            "name": "defaultTriggerId",
            "type": "string | null | undefined",
            "description": "ID of the trigger that the dialog is associated with.\nThis is useful in conjunction with the `defaultOpen` prop to create an initially open dialog."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "title",
            "type": "string | undefined",
            "description": "Native title attribute or callback; forwarded to the rendered element.",
            "default": "\"Command menu\""
          },
          {
            "name": "description",
            "type": "string | undefined",
            "description": "Native description attribute or callback; forwarded to the rendered element.",
            "default": "\"Search and select a command.\""
          },
          {
            "name": "trigger",
            "type": "ReactNode",
            "description": "Native trigger attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "showCloseButton",
            "type": "boolean | undefined",
            "description": "Native showCloseButton attribute or callback; forwarded to the rendered element.",
            "default": "false"
          }
        ]
      },
      {
        "name": "CommandInput",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "defaultChecked",
            "type": "boolean | undefined",
            "description": "Native defaultChecked attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "style",
            "type": "CSSProperties | undefined",
            "description": "Native style attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "pattern",
            "type": "string | undefined",
            "description": "Native pattern attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "disabled",
            "type": "boolean | undefined",
            "description": "Native disabled attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "name",
            "type": "string | undefined",
            "description": "Native name attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onSubmit",
            "type": "SubmitEventHandler<HTMLInputElement> | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "KeyboardEventHandler<HTMLInputElement> | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "MouseEventHandler<HTMLInputElement> | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "multiple",
            "type": "boolean | undefined",
            "description": "Native multiple attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "asChild",
            "type": "boolean | undefined",
            "description": "Native asChild attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "alt",
            "type": "string | undefined",
            "description": "Native alt attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "checked",
            "type": "boolean | undefined",
            "description": "Native checked attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "placeholder",
            "type": "string | undefined",
            "description": "Native placeholder attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "readOnly",
            "type": "boolean | undefined",
            "description": "Native readOnly attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "required",
            "type": "boolean | undefined",
            "description": "Native required attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "src",
            "type": "string | undefined",
            "description": "Native src attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "value",
            "type": "string | undefined",
            "description": "Optional controlled state for the value of the search input."
          },
          {
            "name": "onValueChange",
            "type": "((search: string) => void) | undefined",
            "description": "Event handler called when the search value changes."
          },
          {
            "name": "ref",
            "type": "Ref<HTMLInputElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          }
        ]
      },
      {
        "name": "CommandList",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "children",
            "type": "React.ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "defaultChecked",
            "type": "boolean | undefined",
            "description": "Native defaultChecked attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "style",
            "type": "CSSProperties | undefined",
            "description": "Native style attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "onChange",
            "type": "ChangeEventHandler<HTMLDivElement, Element> | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "SubmitEventHandler<HTMLDivElement> | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "KeyboardEventHandler<HTMLDivElement> | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "MouseEventHandler<HTMLDivElement> | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "asChild",
            "type": "boolean | undefined",
            "description": "Native asChild attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "label",
            "type": "string | undefined",
            "description": "Accessible label for this List of suggestions. Not shown visibly."
          },
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          }
        ]
      },
      {
        "name": "CommandEmpty",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "children",
            "type": "React.ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "defaultChecked",
            "type": "boolean | undefined",
            "description": "Native defaultChecked attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "style",
            "type": "CSSProperties | undefined",
            "description": "Native style attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "onChange",
            "type": "ChangeEventHandler<HTMLDivElement, Element> | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "SubmitEventHandler<HTMLDivElement> | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "KeyboardEventHandler<HTMLDivElement> | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "MouseEventHandler<HTMLDivElement> | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "asChild",
            "type": "boolean | undefined",
            "description": "Native asChild attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          }
        ]
      },
      {
        "name": "CommandGroup",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "children",
            "type": "React.ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "defaultChecked",
            "type": "boolean | undefined",
            "description": "Native defaultChecked attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "style",
            "type": "CSSProperties | undefined",
            "description": "Native style attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "onChange",
            "type": "ChangeEventHandler<HTMLDivElement, Element> | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "SubmitEventHandler<HTMLDivElement> | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "KeyboardEventHandler<HTMLDivElement> | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "MouseEventHandler<HTMLDivElement> | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "asChild",
            "type": "boolean | undefined",
            "description": "Native asChild attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "heading",
            "type": "React.ReactNode",
            "description": "Optional heading to render for this group."
          },
          {
            "name": "value",
            "type": "string | undefined",
            "description": "If no heading is provided, you must provide a value that is unique for this group."
          },
          {
            "name": "forceMount",
            "type": "boolean | undefined",
            "description": "Whether this group is forcibly rendered regardless of filtering."
          },
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          }
        ]
      },
      {
        "name": "CommandItem",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "children",
            "type": "React.ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "defaultChecked",
            "type": "boolean | undefined",
            "description": "Native defaultChecked attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "style",
            "type": "CSSProperties | undefined",
            "description": "Native style attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "onChange",
            "type": "ChangeEventHandler<HTMLDivElement, Element> | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "SubmitEventHandler<HTMLDivElement> | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "KeyboardEventHandler<HTMLDivElement> | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "MouseEventHandler<HTMLDivElement> | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "asChild",
            "type": "boolean | undefined",
            "description": "Native asChild attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "disabled",
            "type": "boolean | undefined",
            "description": "Whether this item is currently disabled."
          },
          {
            "name": "onSelect",
            "type": "((value: string) => void) | undefined",
            "description": "Event handler for when this item is selected, either via click or keyboard selection."
          },
          {
            "name": "value",
            "type": "string | undefined",
            "description": "A unique value for this item.\nIf no value is provided, it will be inferred from `children` or the rendered `textContent`. If your `textContent` changes between renders, you _must_ provide a stable, unique `value`."
          },
          {
            "name": "keywords",
            "type": "string[] | undefined",
            "description": "Optional keywords to match against when filtering."
          },
          {
            "name": "forceMount",
            "type": "boolean | undefined",
            "description": "Whether this item is forcibly rendered regardless of filtering."
          },
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          }
        ]
      },
      {
        "name": "CommandSeparator",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "defaultChecked",
            "type": "boolean | undefined",
            "description": "Native defaultChecked attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "style",
            "type": "CSSProperties | undefined",
            "description": "Native style attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "ChangeEventHandler<HTMLDivElement, Element> | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "SubmitEventHandler<HTMLDivElement> | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "KeyboardEventHandler<HTMLDivElement> | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "MouseEventHandler<HTMLDivElement> | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "asChild",
            "type": "boolean | undefined",
            "description": "Native asChild attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "alwaysRender",
            "type": "boolean | undefined",
            "description": "Whether this separator should always be rendered. Useful if you disable automatic filtering."
          },
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          }
        ]
      },
      {
        "name": "CommandShortcut",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLSpanElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "defaultChecked",
            "type": "boolean | undefined",
            "description": "Native defaultChecked attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "style",
            "type": "CSSProperties | undefined",
            "description": "Native style attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "ChangeEventHandler<HTMLSpanElement, Element> | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "SubmitEventHandler<HTMLSpanElement> | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "KeyboardEventHandler<HTMLSpanElement> | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "MouseEventHandler<HTMLSpanElement> | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          }
        ]
      }
    ],
    "links": [
      {
        "label": "shadcn Base command reference",
        "href": "https://ui.shadcn.com/docs/components/base/command"
      },
      {
        "label": "cmdk API",
        "href": "https://github.com/pacocoursey/cmdk#parts-and-styling"
      }
    ],
    "notes": [
      "Uses cmdk for filtering/keyboard/disabled items and Base Dialog for the modal. CommandDialog accepts controlled root props, an optional legacy trigger, className and showCloseButton=false.",
      "Render Command children inside CommandDialog. Give CommandInput a visible or accessible name; cmdk owns item selection and filtering callbacks."
    ]
  },
  "progress": {
    "parts": [
      {
        "name": "Progress",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "aria-valuetext",
            "type": "string | undefined",
            "description": "A string value that provides a user-friendly name for `aria-valuenow`, the current value of the progress bar."
          },
          {
            "name": "format",
            "type": "Intl.NumberFormatOptions | undefined",
            "description": "Options to format the value."
          },
          {
            "name": "getAriaValueText",
            "type": "((formattedValue: string, value: number | null) => string) | undefined",
            "description": "Accepts a function which returns a string value that provides a human-readable text alternative for the current value of the progress bar."
          },
          {
            "name": "locale",
            "type": "Intl.LocalesArgument",
            "description": "The locale used by `Intl.NumberFormat` when formatting the value.\nDefaults to the user's runtime locale."
          },
          {
            "name": "max",
            "type": "number | undefined",
            "description": "The maximum value.",
            "default": "100"
          },
          {
            "name": "min",
            "type": "number | undefined",
            "description": "The minimum value.",
            "default": "0"
          },
          {
            "name": "value",
            "type": "number | null",
            "description": "The current value. The component is indeterminate when value is `null`.",
            "required": true
          },
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLDivElement, Element>>) => void) | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "((event: BaseUIEvent<SubmitEvent<HTMLDivElement>>) => void) | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "((event: BaseUIEvent<KeyboardEvent<HTMLDivElement>>) => void) | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "((event: BaseUIEvent<MouseEvent<HTMLDivElement, globalThis.MouseEvent>>) => void) | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | ((state: ProgressRootState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, ProgressRootState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: ProgressRootState) => React.CSSProperties | undefined) | undefined",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          }
        ]
      },
      {
        "name": "ProgressIndicator",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLDivElement, Element>>) => void) | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "((event: BaseUIEvent<SubmitEvent<HTMLDivElement>>) => void) | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "((event: BaseUIEvent<KeyboardEvent<HTMLDivElement>>) => void) | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "((event: BaseUIEvent<MouseEvent<HTMLDivElement, globalThis.MouseEvent>>) => void) | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | ((state: ProgressIndicatorState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, ProgressIndicatorState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: ProgressIndicatorState) => React.CSSProperties | undefined) | undefined",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          }
        ]
      },
      {
        "name": "ProgressLabel",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLSpanElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLSpanElement, Element>>) => void) | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "((event: BaseUIEvent<SubmitEvent<HTMLSpanElement>>) => void) | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "((event: BaseUIEvent<KeyboardEvent<HTMLSpanElement>>) => void) | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "((event: BaseUIEvent<MouseEvent<HTMLSpanElement, globalThis.MouseEvent>>) => void) | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | ((state: ProgressLabelState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, ProgressLabelState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: ProgressLabelState) => React.CSSProperties | undefined) | undefined",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          }
        ]
      },
      {
        "name": "ProgressTrack",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLDivElement, Element>>) => void) | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "((event: BaseUIEvent<SubmitEvent<HTMLDivElement>>) => void) | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "((event: BaseUIEvent<KeyboardEvent<HTMLDivElement>>) => void) | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "((event: BaseUIEvent<MouseEvent<HTMLDivElement, globalThis.MouseEvent>>) => void) | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | ((state: ProgressTrackState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, ProgressTrackState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: ProgressTrackState) => React.CSSProperties | undefined) | undefined",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          }
        ]
      },
      {
        "name": "ProgressValue",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "children",
            "type": "((formattedValue: string | null, value: number | null) => React.ReactNode) | null | undefined",
            "description": "Content rendered by this part."
          },
          {
            "name": "className",
            "type": "string | ((state: ProgressValueState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: ProgressValueState) => React.CSSProperties | undefined) | undefined",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          },
          {
            "name": "ref",
            "type": "Ref<HTMLSpanElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLSpanElement, Element>>) => void) | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "((event: BaseUIEvent<SubmitEvent<HTMLSpanElement>>) => void) | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "((event: BaseUIEvent<KeyboardEvent<HTMLSpanElement>>) => void) | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "((event: BaseUIEvent<MouseEvent<HTMLSpanElement, globalThis.MouseEvent>>) => void) | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, ProgressValueState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          }
        ]
      }
    ],
    "links": [
      {
        "label": "shadcn Base progress reference",
        "href": "https://ui.shadcn.com/docs/components/base/progress"
      },
      {
        "label": "Base UI progress API",
        "href": "https://base-ui.com/react/components/progress#api-reference"
      }
    ],
    "notes": [
      "Base UI root accepts value=null for indeterminate state, min/max and label/value compositions. Leement indeterminate pulse uses Motion."
    ]
  },
  "slider": {
    "parts": [
      {
        "name": "Slider",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "defaultValue",
            "type": "number | readonly number[] | undefined",
            "description": "The uncontrolled value of the slider when it's initially rendered.\n\nTo render a controlled slider, use the `value` prop instead."
          },
          {
            "name": "disabled",
            "type": "boolean | undefined",
            "description": "Whether the slider should ignore user interaction.",
            "default": "false"
          },
          {
            "name": "format",
            "type": "Intl.NumberFormatOptions | undefined",
            "description": "Options to format the value."
          },
          {
            "name": "locale",
            "type": "Intl.LocalesArgument",
            "description": "The locale used by `Intl.NumberFormat` when formatting the value.\nDefaults to the user's runtime locale."
          },
          {
            "name": "max",
            "type": "number | undefined",
            "description": "The maximum allowed value of the slider.\nShould not be equal to min.",
            "default": "100"
          },
          {
            "name": "min",
            "type": "number | undefined",
            "description": "The minimum allowed value of the slider.\nShould not be equal to max.",
            "default": "0"
          },
          {
            "name": "minStepsBetweenValues",
            "type": "number | undefined",
            "description": "The minimum steps between values in a range slider.",
            "default": "0"
          },
          {
            "name": "name",
            "type": "string | undefined",
            "description": "Identifies the field when a form is submitted."
          },
          {
            "name": "form",
            "type": "string | undefined",
            "description": "Identifies the form that owns the slider inputs.\nUseful when the slider is rendered outside the form."
          },
          {
            "name": "orientation",
            "type": "Orientation | undefined",
            "description": "The component orientation.",
            "default": "'horizontal'"
          },
          {
            "name": "step",
            "type": "number | undefined",
            "description": "The granularity with which the slider can step through values. (A \"discrete\" slider.)\nThe `min` prop serves as the origin for the valid values.\nWe recommend (max - min) to be evenly divisible by the step.",
            "default": "1"
          },
          {
            "name": "largeStep",
            "type": "number | undefined",
            "description": "The granularity with which the slider can step through values when using Page Up/Page Down or Shift + Arrow Up/Arrow Down.",
            "default": "10"
          },
          {
            "name": "thumbAlignment",
            "type": "\"center\" | \"edge\" | \"edge-client-only\" | undefined",
            "description": "How the thumb(s) are aligned relative to `Slider.Control` when the value is at `min` or `max`:\n- `center`: The center of the thumb is aligned with the control edge\n- `edge`: The thumb is inset within the control such that its edge is aligned with the control edge\n- `edge-client-only`: Same as `edge` but renders after React hydration on the client, reducing bundle size in return",
            "default": "'center'"
          },
          {
            "name": "thumbCollisionBehavior",
            "type": "\"none\" | \"push\" | \"swap\" | undefined",
            "description": "Controls how thumbs behave when they collide during pointer interactions.\n\n- `'push'` (default): Thumbs push each other without restoring their previous positions when dragged back.\n- `'swap'`: Thumbs swap places when dragged past each other.\n- `'none'`: Thumbs cannot move past each other; excess movement is ignored.",
            "default": "'push'"
          },
          {
            "name": "value",
            "type": "number | readonly number[] | undefined",
            "description": "The value of the slider.\nFor range sliders, provide an array with one value per thumb."
          },
          {
            "name": "onValueChange",
            "type": "((value: number | readonly number[], eventDetails: SliderRoot.ChangeEventDetails) => void) | undefined",
            "description": "Callback function that is fired when the slider's value changed.\nReceives the new value as the first argument; the originating event is\navailable as `eventDetails.event`. The value is also reflected on\n`eventDetails.event.target.value` for form integration.\n\nThe `eventDetails.reason` indicates what triggered the change:\n\n- `'input-change'` when the hidden range input emits a change event (for example, via form integration)\n- `'track-press'` when the control track is pressed\n- `'drag'` while dragging a thumb\n- `'keyboard'` for keyboard input\n- `'none'` when the change is triggered without a specific interaction"
          },
          {
            "name": "onValueCommitted",
            "type": "((value: number | readonly number[], eventDetails: SliderRoot.CommitEventDetails) => void) | undefined",
            "description": "Callback function that is fired when a value change is committed.\nDoes not fire if the value did not change, or if the change was canceled.\n**Warning**: This is a generic event, not a change event.\n\nThe `eventDetails.reason` indicates what triggered the commit:\n\n- `'drag'` while dragging a thumb\n- `'track-press'` when the control track is pressed\n- `'keyboard'` for keyboard input\n- `'input-change'` when the hidden range input emits a change event (for example, via form integration)\n- `'none'` when the commit occurs without a specific interaction"
          },
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLDivElement, Element>>) => void) | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "((event: BaseUIEvent<SubmitEvent<HTMLDivElement>>) => void) | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "((event: BaseUIEvent<KeyboardEvent<HTMLDivElement>>) => void) | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "((event: BaseUIEvent<MouseEvent<HTMLDivElement, globalThis.MouseEvent>>) => void) | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | ((state: SliderRootState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, SliderRootState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: SliderRootState) => React.CSSProperties | undefined) | undefined",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          }
        ]
      }
    ],
    "links": [
      {
        "label": "shadcn Base slider reference",
        "href": "https://ui.shadcn.com/docs/components/base/slider"
      },
      {
        "label": "Base UI slider API",
        "href": "https://base-ui.com/react/components/slider#api-reference"
      }
    ],
    "notes": [
      "Base UI owns pointer movement, value/array values, controlled callbacks, bounds and keyboard behavior. A scalar creates one thumb; arrays create one thumb per value.",
      "Each thumb owns its Motion color/focus ref; drag position updates are immediate. Name the input and distinguish range endpoints using the aria-label supplied to the root."
    ]
  },
  "separator": {
    "parts": [
      {
        "name": "Separator",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "orientation",
            "type": "Orientation | undefined",
            "description": "The orientation of the separator.",
            "default": "\"horizontal\""
          },
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLDivElement, Element>>) => void) | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "((event: BaseUIEvent<SubmitEvent<HTMLDivElement>>) => void) | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "((event: BaseUIEvent<KeyboardEvent<HTMLDivElement>>) => void) | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "((event: BaseUIEvent<MouseEvent<HTMLDivElement, globalThis.MouseEvent>>) => void) | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | ((state: SeparatorState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, SeparatorState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: SeparatorState) => React.CSSProperties | undefined) | undefined",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          },
          {
            "name": "decorative",
            "type": "boolean | undefined",
            "description": "Native decorative attribute or callback; forwarded to the rendered element.",
            "default": "true"
          }
        ]
      }
    ],
    "links": [
      {
        "label": "shadcn Base separator reference",
        "href": "https://ui.shadcn.com/docs/components/base/separator"
      },
      {
        "label": "Base UI separator API",
        "href": "https://base-ui.com/react/components/separator#api-reference"
      }
    ],
    "notes": [
      "Uses Base UI Separator. Leement retains decorative=true as its default: presentation role and hidden from the accessibility tree. Set decorative=false for a semantic separator."
    ]
  },
  "toast": {
    "parts": [
      {
        "name": "Toaster",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "children",
            "type": "React.ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "timeout",
            "type": "number | undefined",
            "description": "The default amount of time (in ms) before a toast is auto dismissed.\nA value of `0` will prevent the toast from being dismissed automatically.",
            "default": "5000"
          },
          {
            "name": "limit",
            "type": "number | undefined",
            "description": "The maximum number of toasts that can be displayed at once.\nWhen the limit is exceeded, the oldest toasts are marked as `limited` (via the `data-limited`\nattribute) rather than removed, so they can be hidden or animated out.",
            "default": "3"
          },
          {
            "name": "toastManager",
            "type": "ToastManager<any> | undefined",
            "description": "A global manager for toasts to use outside of a React component.",
            "default": "toast"
          },
          {
            "name": "position",
            "type": "\"top-left\" | \"top-center\" | \"top-right\" | \"bottom-left\" | \"bottom-center\" | \"bottom-right\" | undefined",
            "description": "Native position attribute or callback; forwarded to the rendered element.",
            "default": "\"bottom-right\""
          },
          {
            "name": "theme",
            "type": "\"light\" | \"dark\" | \"system\" | undefined",
            "description": "Native theme attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          }
        ]
      },
      {
        "name": "Toast",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "toast",
            "type": "ToastRootToastObject<any>",
            "description": "The toast to render.",
            "required": true
          },
          {
            "name": "swipeDirection",
            "type": "\"left\" | \"right\" | \"up\" | \"down\" | (\"left\" | \"right\" | \"up\" | \"down\")[] | undefined",
            "description": "Direction(s) in which the toast can be swiped to dismiss.",
            "default": "['down', 'right']"
          },
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLDivElement, Element>>) => void) | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "((event: BaseUIEvent<SubmitEvent<HTMLDivElement>>) => void) | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "((event: BaseUIEvent<KeyboardEvent<HTMLDivElement>>) => void) | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "((event: BaseUIEvent<MouseEvent<HTMLDivElement, globalThis.MouseEvent>>) => void) | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | ((state: ToastRootState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, ToastRootState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: ToastRootState) => React.CSSProperties | undefined) | undefined",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          }
        ]
      },
      {
        "name": "ToastAction",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "nativeButton",
            "type": "boolean | undefined",
            "description": "Whether the component renders a native `<button>` element when replacing it\nvia the `render` prop.\nSet to `false` if the rendered element is not a button (for example, `<div>`).",
            "default": "true"
          },
          {
            "name": "ref",
            "type": "Ref<HTMLButtonElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "disabled",
            "type": "boolean | undefined",
            "description": "Native disabled attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "name",
            "type": "string | undefined",
            "description": "Native name attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "type",
            "type": "\"button\" | \"submit\" | \"reset\" | undefined",
            "description": "Native type attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "value",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native value attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLButtonElement, Element>>) => void) | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "((event: BaseUIEvent<SubmitEvent<HTMLButtonElement>>) => void) | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "((event: BaseUIEvent<KeyboardEvent<HTMLButtonElement>>) => void) | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "((event: BaseUIEvent<MouseEvent<HTMLButtonElement, globalThis.MouseEvent>>) => void) | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | ((state: ToastActionState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, ToastActionState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element.",
            "default": "<Button variant=\"outline\" size=\"sm\" />"
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: ToastActionState) => React.CSSProperties | undefined) | undefined",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          }
        ]
      },
      {
        "name": "ToastClose",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "nativeButton",
            "type": "boolean | undefined",
            "description": "Whether the component renders a native `<button>` element when replacing it\nvia the `render` prop.\nSet to `false` if the rendered element is not a button (for example, `<div>`).",
            "default": "true"
          },
          {
            "name": "ref",
            "type": "Ref<HTMLButtonElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "disabled",
            "type": "boolean | undefined",
            "description": "Native disabled attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "name",
            "type": "string | undefined",
            "description": "Native name attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "type",
            "type": "\"button\" | \"submit\" | \"reset\" | undefined",
            "description": "Native type attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "value",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native value attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLButtonElement, Element>>) => void) | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "((event: BaseUIEvent<SubmitEvent<HTMLButtonElement>>) => void) | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "((event: BaseUIEvent<KeyboardEvent<HTMLButtonElement>>) => void) | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "((event: BaseUIEvent<MouseEvent<HTMLButtonElement, globalThis.MouseEvent>>) => void) | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | ((state: ToastCloseState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, ToastCloseState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element.",
            "default": "<Button variant=\"ghost\" size=\"icon-sm\" />"
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: ToastCloseState) => React.CSSProperties | undefined) | undefined",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          }
        ]
      },
      {
        "name": "ToastContent",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLDivElement, Element>>) => void) | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "((event: BaseUIEvent<SubmitEvent<HTMLDivElement>>) => void) | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "((event: BaseUIEvent<KeyboardEvent<HTMLDivElement>>) => void) | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "((event: BaseUIEvent<MouseEvent<HTMLDivElement, globalThis.MouseEvent>>) => void) | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | ((state: ToastContentState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, ToastContentState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: ToastContentState) => React.CSSProperties | undefined) | undefined",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          }
        ]
      },
      {
        "name": "ToastDescription",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLParagraphElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLParagraphElement, Element>>) => void) | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "((event: BaseUIEvent<SubmitEvent<HTMLParagraphElement>>) => void) | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "((event: BaseUIEvent<KeyboardEvent<HTMLParagraphElement>>) => void) | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "((event: BaseUIEvent<MouseEvent<HTMLParagraphElement, globalThis.MouseEvent>>) => void) | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | ((state: ToastDescriptionState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, ToastDescriptionState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: ToastDescriptionState) => React.CSSProperties | undefined) | undefined",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          }
        ]
      },
      {
        "name": "ToastPortal",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "container",
            "type": "HTMLElement | ShadowRoot | React.RefObject<HTMLElement | ShadowRoot | null> | null | undefined",
            "description": "A parent element to render the portal element into."
          },
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLDivElement, Element>>) => void) | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "((event: BaseUIEvent<SubmitEvent<HTMLDivElement>>) => void) | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "((event: BaseUIEvent<KeyboardEvent<HTMLDivElement>>) => void) | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "((event: BaseUIEvent<MouseEvent<HTMLDivElement, globalThis.MouseEvent>>) => void) | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | ((state: ToastPortalState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, ToastPortalState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: ToastPortalState) => React.CSSProperties | undefined) | undefined",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          }
        ]
      },
      {
        "name": "ToastProvider",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "children",
            "type": "React.ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "timeout",
            "type": "number | undefined",
            "description": "The default amount of time (in ms) before a toast is auto dismissed.\nA value of `0` will prevent the toast from being dismissed automatically.",
            "default": "5000"
          },
          {
            "name": "limit",
            "type": "number | undefined",
            "description": "The maximum number of toasts that can be displayed at once.\nWhen the limit is exceeded, the oldest toasts are marked as `limited` (via the `data-limited`\nattribute) rather than removed, so they can be hidden or animated out.",
            "default": "3"
          },
          {
            "name": "toastManager",
            "type": "ToastManager<any> | undefined",
            "description": "A global manager for toasts to use outside of a React component."
          }
        ]
      },
      {
        "name": "ToastTitle",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLHeadingElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLHeadingElement, Element>>) => void) | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "((event: BaseUIEvent<SubmitEvent<HTMLHeadingElement>>) => void) | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "((event: BaseUIEvent<KeyboardEvent<HTMLHeadingElement>>) => void) | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "((event: BaseUIEvent<MouseEvent<HTMLHeadingElement, globalThis.MouseEvent>>) => void) | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | ((state: ToastTitleState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, ToastTitleState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: ToastTitleState) => React.CSSProperties | undefined) | undefined",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          }
        ]
      },
      {
        "name": "ToastViewport",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLDivElement, Element>>) => void) | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "((event: BaseUIEvent<SubmitEvent<HTMLDivElement>>) => void) | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "((event: BaseUIEvent<KeyboardEvent<HTMLDivElement>>) => void) | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "((event: BaseUIEvent<MouseEvent<HTMLDivElement, globalThis.MouseEvent>>) => void) | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | ((state: ToastViewportState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, ToastViewportState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: ToastViewportState) => React.CSSProperties | undefined) | undefined",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          }
        ]
      },
      {
        "name": "toast / createToastManager",
        "description": "Global toast manager or a new isolated manager; pass the latter to Toaster/ToastProvider.",
        "props": [
          {
            "name": "add",
            "type": "(options: ToastManagerAddOptions) => string",
            "description": "Create a notification; returned ID can be updated or closed."
          },
          {
            "name": "update",
            "type": "(id: string, options: ToastManagerUpdateOptions) => void",
            "description": "Update a single notification in place."
          },
          {
            "name": "close",
            "type": "(id?: string) => void",
            "description": "Close one notification or all when omitted."
          },
          {
            "name": "promise",
            "type": "<Value>(promise: Promise<Value>, { loading, success, error }) => Promise<Value>",
            "description": "Update one notification as a Promise settles. Each message is a string/options object or completion callback."
          },
          {
            "name": "title / description / type / actionProps",
            "type": "ReactNode / ReactNode / string / native button props",
            "description": "Visible content, status icon category and recovery action."
          },
          {
            "name": "timeout / priority / data / onClose / onRemove",
            "type": "number / \"low\" | \"high\" / object / callbacks",
            "description": "Lifetime, polite/urgent announcement, consumer data and lifecycle callbacks."
          }
        ]
      },
      {
        "name": "useToastManager",
        "description": "Read toasts and add/update/close/promise methods inside ToastProvider. A manager with no provider cannot display a notification.",
        "props": []
      }
    ],
    "links": [
      {
        "label": "shadcn Base toast reference",
        "href": "https://ui.shadcn.com/docs/components/base/toast"
      },
      {
        "label": "Base UI toast API",
        "href": "https://base-ui.com/react/components/toast#api-reference"
      }
    ],
    "notes": [
      "Uses Base UI Toast Provider/parts/manager instead of Sonner. Mount one Toaster per app or isolated preview. toast.add/update/close/promise, createToastManager and useToastManager are the canonical API.",
      "Existing toast(title,{description,duration,action}), success/info/warning/error/loading and dismiss conveniences share the same Base manager. The full Sonner-specific API is not supported; use Base options such as timeout/limit/actionProps/priority.",
      "Toaster keeps optional theme/position/className convenience props. Compose ToastProvider/Portal/Viewport for custom layouts. Status announcements, timeout pausing, focus, dismiss and swipe are primitive behavior; Motion handles visual changes."
    ],
    "usage": "import { Toaster, toast } from \"@/components/ui/toast\";\n\n// Mount one host in your application layout.\n<Toaster />;\n\nconst id = toast.add({ title: \"Saved\", type: \"success\", actionProps: { children: \"Undo\", onClick: () => toast.close(id) } });"
  },
  "status-notice": {
    "parts": [
      {
        "name": "StatusNotice",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "defaultChecked",
            "type": "boolean | undefined",
            "description": "Native defaultChecked attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "style",
            "type": "CSSProperties | undefined",
            "description": "Native style attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "ChangeEventHandler<HTMLDivElement, Element> | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "SubmitEventHandler<HTMLDivElement> | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "KeyboardEventHandler<HTMLDivElement> | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "MouseEventHandler<HTMLDivElement> | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "action",
            "type": "React.ReactNode",
            "description": "Native action attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "description",
            "type": "React.ReactNode",
            "description": "Native description attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "icon",
            "type": "React.ReactNode",
            "description": "Native icon attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "title",
            "type": "React.ReactNode",
            "description": "Native title attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tone",
            "type": "StatusNoticeTone | undefined",
            "description": "Native tone attribute or callback; forwarded to the rendered element.",
            "default": "\"neutral\""
          }
        ]
      },
      {
        "name": "Alert",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "defaultChecked",
            "type": "boolean | undefined",
            "description": "Native defaultChecked attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "style",
            "type": "CSSProperties | undefined",
            "description": "Native style attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "ChangeEventHandler<HTMLDivElement, Element> | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "SubmitEventHandler<HTMLDivElement> | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "KeyboardEventHandler<HTMLDivElement> | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "MouseEventHandler<HTMLDivElement> | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "variant",
            "type": "\"default\" | \"destructive\" | null | undefined",
            "description": "Native variant attribute or callback; forwarded to the rendered element."
          }
        ]
      },
      {
        "name": "AlertTitle",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "defaultChecked",
            "type": "boolean | undefined",
            "description": "Native defaultChecked attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "style",
            "type": "CSSProperties | undefined",
            "description": "Native style attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "ChangeEventHandler<HTMLDivElement, Element> | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "SubmitEventHandler<HTMLDivElement> | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "KeyboardEventHandler<HTMLDivElement> | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "MouseEventHandler<HTMLDivElement> | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          }
        ]
      },
      {
        "name": "AlertDescription",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "defaultChecked",
            "type": "boolean | undefined",
            "description": "Native defaultChecked attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "style",
            "type": "CSSProperties | undefined",
            "description": "Native style attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "ChangeEventHandler<HTMLDivElement, Element> | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "SubmitEventHandler<HTMLDivElement> | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "KeyboardEventHandler<HTMLDivElement> | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "MouseEventHandler<HTMLDivElement> | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          }
        ]
      },
      {
        "name": "AlertAction",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "defaultChecked",
            "type": "boolean | undefined",
            "description": "Native defaultChecked attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "style",
            "type": "CSSProperties | undefined",
            "description": "Native style attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "ChangeEventHandler<HTMLDivElement, Element> | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "SubmitEventHandler<HTMLDivElement> | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "KeyboardEventHandler<HTMLDivElement> | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "MouseEventHandler<HTMLDivElement> | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          }
        ]
      }
    ],
    "links": [
      {
        "label": "shadcn Base alert reference",
        "href": "https://ui.shadcn.com/docs/components/base/alert"
      },
      {
        "label": "Native HTML elements (MDN)",
        "href": "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements"
      }
    ],
    "notes": [
      "The concise StatusNotice API remains available. Alert/Title/Description/Action exports add the baseline compound callout composition in the same installed source. Alert supports default/destructive; StatusNotice also supports success/warning."
    ]
  },
  "typography": {
    "parts": [
      {
        "name": "Typography",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "defaultChecked",
            "type": "boolean | undefined",
            "description": "Native defaultChecked attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "style",
            "type": "CSSProperties | undefined",
            "description": "Native style attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "ChangeEventHandler<HTMLElement, Element> | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "SubmitEventHandler<HTMLElement> | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "KeyboardEventHandler<HTMLElement> | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "MouseEventHandler<HTMLElement> | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "as",
            "type": "React.ElementType<any, keyof React.JSX.IntrinsicElements> | undefined",
            "description": "Native as attribute or callback; forwarded to the rendered element.",
            "default": "\"p\""
          },
          {
            "name": "variant",
            "type": "TypographyVariant | undefined",
            "description": "Native variant attribute or callback; forwarded to the rendered element.",
            "default": "\"body\""
          }
        ]
      }
    ],
    "links": [
      {
        "label": "shadcn Base typography reference",
        "href": "https://ui.shadcn.com/docs/components/base/typography"
      },
      {
        "label": "Native HTML elements (MDN)",
        "href": "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements"
      }
    ]
  },
  "empty-state": {
    "parts": [
      {
        "name": "EmptyState",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "defaultChecked",
            "type": "boolean | undefined",
            "description": "Native defaultChecked attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "style",
            "type": "CSSProperties | undefined",
            "description": "Native style attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "ChangeEventHandler<HTMLDivElement, Element> | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "SubmitEventHandler<HTMLDivElement> | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "KeyboardEventHandler<HTMLDivElement> | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "MouseEventHandler<HTMLDivElement> | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "icon",
            "type": "React.ReactNode",
            "description": "Native icon attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "description",
            "type": "string | undefined",
            "description": "Native description attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "action",
            "type": "React.ReactNode",
            "description": "Native action attribute or callback; forwarded to the rendered element."
          }
        ]
      },
      {
        "name": "Empty",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "defaultChecked",
            "type": "boolean | undefined",
            "description": "Native defaultChecked attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "style",
            "type": "CSSProperties | undefined",
            "description": "Native style attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "ChangeEventHandler<HTMLDivElement, Element> | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "SubmitEventHandler<HTMLDivElement> | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "KeyboardEventHandler<HTMLDivElement> | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "MouseEventHandler<HTMLDivElement> | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          }
        ]
      },
      {
        "name": "EmptyHeader",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "defaultChecked",
            "type": "boolean | undefined",
            "description": "Native defaultChecked attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "style",
            "type": "CSSProperties | undefined",
            "description": "Native style attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "ChangeEventHandler<HTMLDivElement, Element> | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "SubmitEventHandler<HTMLDivElement> | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "KeyboardEventHandler<HTMLDivElement> | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "MouseEventHandler<HTMLDivElement> | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          }
        ]
      },
      {
        "name": "EmptyTitle",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "defaultChecked",
            "type": "boolean | undefined",
            "description": "Native defaultChecked attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "style",
            "type": "CSSProperties | undefined",
            "description": "Native style attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "ChangeEventHandler<HTMLDivElement, Element> | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "SubmitEventHandler<HTMLDivElement> | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "KeyboardEventHandler<HTMLDivElement> | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "MouseEventHandler<HTMLDivElement> | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          }
        ]
      },
      {
        "name": "EmptyDescription",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLParagraphElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "defaultChecked",
            "type": "boolean | undefined",
            "description": "Native defaultChecked attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "style",
            "type": "CSSProperties | undefined",
            "description": "Native style attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "ChangeEventHandler<HTMLParagraphElement, Element> | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "SubmitEventHandler<HTMLParagraphElement> | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "KeyboardEventHandler<HTMLParagraphElement> | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "MouseEventHandler<HTMLParagraphElement> | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          }
        ]
      },
      {
        "name": "EmptyContent",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "defaultChecked",
            "type": "boolean | undefined",
            "description": "Native defaultChecked attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "style",
            "type": "CSSProperties | undefined",
            "description": "Native style attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "ChangeEventHandler<HTMLDivElement, Element> | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "SubmitEventHandler<HTMLDivElement> | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "KeyboardEventHandler<HTMLDivElement> | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "MouseEventHandler<HTMLDivElement> | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          }
        ]
      },
      {
        "name": "EmptyMedia",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "defaultChecked",
            "type": "boolean | undefined",
            "description": "Native defaultChecked attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "style",
            "type": "CSSProperties | undefined",
            "description": "Native style attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "aria-label",
            "type": "string | undefined",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "ChangeEventHandler<HTMLDivElement, Element> | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "SubmitEventHandler<HTMLDivElement> | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "KeyboardEventHandler<HTMLDivElement> | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "MouseEventHandler<HTMLDivElement> | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "variant",
            "type": "\"default\" | \"icon\" | null | undefined",
            "description": "Native variant attribute or callback; forwarded to the rendered element.",
            "default": "\"default\""
          }
        ]
      }
    ],
    "links": [
      {
        "label": "shadcn Base empty reference",
        "href": "https://ui.shadcn.com/docs/components/base/empty"
      },
      {
        "label": "Native HTML elements (MDN)",
        "href": "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements"
      }
    ],
    "notes": [
      "The existing EmptyState icon/title/description/action shortcut remains available. Empty/Header/Media/Title/Description/Content exports add the baseline native composition without another registry item."
    ]
  },
  "date-picker": {
    "parts": [
      {
        "name": "DatePicker",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "label",
            "type": "string | undefined",
            "description": "Native label attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "placeholder",
            "type": "string | undefined",
            "description": "Native placeholder attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "disabled",
            "type": "boolean | undefined",
            "description": "Native disabled attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "min",
            "type": "Date | undefined",
            "description": "Native min attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "max",
            "type": "Date | undefined",
            "description": "Native max attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "disabledDate",
            "type": "((date: Date) => boolean) | undefined",
            "description": "Native disabledDate attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "locale",
            "type": "string | undefined",
            "description": "Native locale attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "startDay",
            "type": "0 | 1 | undefined",
            "description": "Native startDay attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"false\" | \"true\" | \"grammar\" | \"spelling\" | undefined",
            "description": "Indicates the entered value does not conform to the format expected by the application."
          },
          {
            "name": "mode",
            "type": "\"range\"",
            "description": "Native mode attribute or callback; forwarded to the rendered element.",
            "required": true
          },
          {
            "name": "value",
            "type": "Date | undefined",
            "description": "Native value attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "defaultValue",
            "type": "Date | undefined",
            "description": "Native defaultValue attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onValueChange",
            "type": "((date: Date) => void) | undefined",
            "description": "Native onValueChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "range",
            "type": "DateRange | undefined",
            "description": "Native range attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "defaultRange",
            "type": "DateRange | undefined",
            "description": "Native defaultRange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onRangeChange",
            "type": "((range: DateRange) => void) | undefined",
            "description": "Native onRangeChange attribute or callback; forwarded to the rendered element."
          }
        ]
      }
    ],
    "links": [
      {
        "label": "shadcn Base date-picker reference",
        "href": "https://ui.shadcn.com/docs/components/base/date-picker"
      },
      {
        "label": "Native HTML elements (MDN)",
        "href": "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements"
      }
    ],
    "notes": [
      "This convenience pattern retains the single/range controlled APIs and disabled/bounded date behavior. For multiple/time/custom-calendar use cases compose Calendar with Popover as shown in the Base examples.",
      "The popover closes after one date or a completed range and restores focus. The consumer owns date formatting and timezone choices for custom compositions."
    ]
  },
  "data-table": {
    "parts": [
      {
        "name": "AdvancedDataTable",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "data",
            "type": "T[]",
            "description": "Native data attribute or callback; forwarded to the rendered element.",
            "required": true
          },
          {
            "name": "columns",
            "type": "ColumnDef<T, TValue>[]",
            "description": "Native columns attribute or callback; forwarded to the rendered element.",
            "required": true
          },
          {
            "name": "getRowId",
            "type": "(row: T) => string",
            "description": "Native getRowId attribute or callback; forwarded to the rendered element.",
            "required": true
          },
          {
            "name": "caption",
            "type": "string",
            "description": "Native caption attribute or callback; forwarded to the rendered element.",
            "required": true
          },
          {
            "name": "searchColumn",
            "type": "string | undefined",
            "description": "Native searchColumn attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "searchLabel",
            "type": "string | undefined",
            "description": "Native searchLabel attribute or callback; forwarded to the rendered element.",
            "default": "\"Filter rows\""
          },
          {
            "name": "pageSize",
            "type": "number | undefined",
            "description": "Native pageSize attribute or callback; forwarded to the rendered element.",
            "default": "10"
          },
          {
            "name": "enableRowSelection",
            "type": "boolean | undefined",
            "description": "Native enableRowSelection attribute or callback; forwarded to the rendered element.",
            "default": "true"
          },
          {
            "name": "rowSelection",
            "type": "RowSelectionState | undefined",
            "description": "Native rowSelection attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onRowSelectionChange",
            "type": "OnChangeFn<RowSelectionState> | undefined",
            "description": "Native onRowSelectionChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "emptyMessage",
            "type": "string | undefined",
            "description": "Native emptyMessage attribute or callback; forwarded to the rendered element.",
            "default": "\"No results.\""
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          }
        ]
      }
    ],
    "links": [
      {
        "label": "shadcn Base data-table reference",
        "href": "https://ui.shadcn.com/docs/components/base/data-table"
      },
      {
        "label": "TanStack Table v8 API",
        "href": "https://tanstack.com/table/v8/docs/api/core/table"
      }
    ],
    "notes": [
      "AdvancedDataTable provides TanStack v8 sorting/filtering/pagination/selection/column visibility with native Table semantics. Use stable getRowId and caption.",
      "The Base reference is a recipe, not an npm component API. Its independent ColumnDef/useReactTable compositions remain available in Examples/Usage; the generic pattern is optional. Server data, virtualization and mutations remain application code."
    ]
  }
};
