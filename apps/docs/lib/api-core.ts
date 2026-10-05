import type { ApiReference } from "./api-reference";
export const coreApiReferences: Record<string, ApiReference> = {
  "button": {
    "parts": [
      {
        "name": "Button",
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
            "type": "boolean | \"true\" | \"false\" | \"grammar\" | \"spelling\" | undefined",
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
            "type": "\"default\" | \"link\" | \"primary\" | \"secondary\" | \"outline\" | \"ghost\" | \"destructive\" | null | undefined",
            "description": "Native variant attribute or callback; forwarded to the rendered element.",
            "default": "\"primary\""
          },
          {
            "name": "size",
            "type": "\"default\" | \"xs\" | \"sm\" | \"lg\" | \"icon\" | \"icon-sm\" | \"icon-xs\" | \"icon-lg\" | null | undefined",
            "description": "Native size attribute or callback; forwarded to the rendered element.",
            "default": "\"default\""
          },
          {
            "name": "asChild",
            "type": "boolean | undefined",
            "description": "Native asChild attribute or callback; forwarded to the rendered element.",
            "default": "false"
          },
          {
            "name": "loading",
            "type": "boolean | undefined",
            "description": "Native loading attribute or callback; forwarded to the rendered element.",
            "default": "false"
          }
        ]
      },
      {
        "name": "buttonVariants",
        "description": "Class recipe; call it with the corresponding variant/size/orientation options and optional className. Does not attach behavior or Motion.",
        "props": []
      }
    ],
    "links": [
      {
        "label": "shadcn Base button reference",
        "href": "https://ui.shadcn.com/docs/components/base/button"
      },
      {
        "label": "Base UI button API",
        "href": "https://base-ui.com/react/components/button#api-reference"
      }
    ],
    "notes": [
      "primary is the Leement default; default is its shadcn-compatible alias. link adds underline-on-hover. Control heights remain 32/36/40/44px.",
      "render/nativeButton/focusableWhenDisabled use Base UI behavior. loading prevents activation and exposes aria-busy with a Motion spinner.",
      "asChild remains a compatibility path for a single child. It preserves native link semantics; disabled/loading prevents child activation and removes its tab stop. Prefer render for new Base composition."
    ]
  },
  "input": {
    "parts": [
      {
        "name": "Input",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "onValueChange",
            "type": "((value: string, eventDetails: Input.ChangeEventDetails) => void) | undefined",
            "description": "Callback fired when the `value` changes. Use when controlled."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "The default value of the input. Use when uncontrolled."
          },
          {
            "name": "value",
            "type": "string | number | readonly string[] | undefined",
            "description": "The value of the input. Use when controlled."
          },
          {
            "name": "pattern",
            "type": "string | undefined",
            "description": "Native pattern attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "ref",
            "type": "Ref<HTMLInputElement> | undefined",
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
            "type": "HTMLInputTypeAttribute | undefined",
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
            "type": "boolean | \"true\" | \"false\" | \"grammar\" | \"spelling\" | undefined",
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
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLInputElement, HTMLInputElement>>) => void) | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "((event: BaseUIEvent<SubmitEvent<HTMLInputElement>>) => void) | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "((event: BaseUIEvent<KeyboardEvent<HTMLInputElement>>) => void) | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "((event: BaseUIEvent<MouseEvent<HTMLInputElement, globalThis.MouseEvent>>) => void) | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
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
            "name": "multiple",
            "type": "boolean | undefined",
            "description": "Native multiple attribute or callback; forwarded to the rendered element."
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
            "name": "className",
            "type": "string | ((state: InputState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, InputState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: InputState) => React.CSSProperties | undefined) | undefined",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          }
        ]
      }
    ],
    "links": [
      {
        "label": "shadcn Base input reference",
        "href": "https://ui.shadcn.com/docs/components/base/input"
      },
      {
        "label": "Base UI input API",
        "href": "https://base-ui.com/react/components/input#api-reference"
      }
    ],
    "notes": [
      "Base UI Input renders a native input and automatically associates with Field labels and validation. Native onChange and controlled value remain available; onValueChange provides the Base UI event details.",
      "File inputs remain native and uncontrolled; read event.currentTarget.files."
    ]
  },
  "card": {
    "parts": [
      {
        "name": "Card",
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
            "type": "boolean | \"true\" | \"false\" | \"grammar\" | \"spelling\" | undefined",
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
            "name": "size",
            "type": "\"default\" | \"sm\" | undefined",
            "description": "Native size attribute or callback; forwarded to the rendered element.",
            "default": "\"default\""
          }
        ]
      },
      {
        "name": "CardHeader",
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
            "type": "boolean | \"true\" | \"false\" | \"grammar\" | \"spelling\" | undefined",
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
        "name": "CardTitle",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLHeadingElement> | undefined",
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
            "type": "boolean | \"true\" | \"false\" | \"grammar\" | \"spelling\" | undefined",
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
            "type": "ChangeEventHandler<HTMLHeadingElement, Element> | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "SubmitEventHandler<HTMLHeadingElement> | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "KeyboardEventHandler<HTMLHeadingElement> | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "MouseEventHandler<HTMLHeadingElement> | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          }
        ]
      },
      {
        "name": "CardDescription",
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
            "type": "boolean | \"true\" | \"false\" | \"grammar\" | \"spelling\" | undefined",
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
        "name": "CardAction",
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
            "type": "boolean | \"true\" | \"false\" | \"grammar\" | \"spelling\" | undefined",
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
        "name": "CardContent",
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
            "type": "boolean | \"true\" | \"false\" | \"grammar\" | \"spelling\" | undefined",
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
        "name": "CardFooter",
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
            "type": "boolean | \"true\" | \"false\" | \"grammar\" | \"spelling\" | undefined",
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
        "label": "shadcn Base card reference",
        "href": "https://ui.shadcn.com/docs/components/base/card"
      },
      {
        "label": "Native HTML elements (MDN)",
        "href": "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements"
      }
    ],
    "notes": [
      "CardTitle remains a native h3 heading and CardDescription a paragraph. size default/sm controls spacing; actions occupy a separate header grid column."
    ]
  },
  "textarea": {
    "parts": [
      {
        "name": "Textarea",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLTextAreaElement> | undefined",
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
            "name": "value",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native value attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onChange",
            "type": "ChangeEventHandler<HTMLTextAreaElement, HTMLTextAreaElement> | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
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
            "type": "boolean | \"true\" | \"false\" | \"grammar\" | \"spelling\" | undefined",
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
            "type": "SubmitEventHandler<HTMLTextAreaElement> | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "KeyboardEventHandler<HTMLTextAreaElement> | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "MouseEventHandler<HTMLTextAreaElement> | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          }
        ]
      }
    ],
    "links": [
      {
        "label": "shadcn Base textarea reference",
        "href": "https://ui.shadcn.com/docs/components/base/textarea"
      },
      {
        "label": "Native HTML elements (MDN)",
        "href": "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements"
      }
    ]
  },
  "avatar": {
    "parts": [
      {
        "name": "Avatar",
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
            "type": "boolean | \"true\" | \"false\" | \"grammar\" | \"spelling\" | undefined",
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
            "type": "string | ((state: AvatarRootState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, AvatarRootState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: AvatarRootState) => React.CSSProperties | undefined) | undefined",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          },
          {
            "name": "size",
            "type": "\"default\" | \"sm\" | \"lg\" | undefined",
            "description": "Native size attribute or callback; forwarded to the rendered element.",
            "default": "\"default\""
          }
        ]
      },
      {
        "name": "AvatarImage",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "onLoadingStatusChange",
            "type": "((status: ImageLoadingStatus) => void) | undefined",
            "description": "Callback fired when the loading status changes."
          },
          {
            "name": "ref",
            "type": "Ref<HTMLImageElement> | undefined",
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
            "type": "boolean | \"true\" | \"false\" | \"grammar\" | \"spelling\" | undefined",
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
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLImageElement, Element>>) => void) | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "((event: BaseUIEvent<SubmitEvent<HTMLImageElement>>) => void) | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "((event: BaseUIEvent<KeyboardEvent<HTMLImageElement>>) => void) | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "((event: BaseUIEvent<MouseEvent<HTMLImageElement, globalThis.MouseEvent>>) => void) | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "alt",
            "type": "string | undefined",
            "description": "Native alt attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "src",
            "type": "string | Blob | undefined",
            "description": "Native src attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | ((state: AvatarImageState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, AvatarImageState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: AvatarImageState) => React.CSSProperties | undefined) | undefined",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          }
        ]
      },
      {
        "name": "AvatarFallback",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "delay",
            "type": "number | undefined",
            "description": "How long to wait before showing the fallback. Specified in milliseconds.",
            "default": "0"
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
            "type": "boolean | \"true\" | \"false\" | \"grammar\" | \"spelling\" | undefined",
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
            "type": "string | ((state: AvatarFallbackState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, AvatarFallbackState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: AvatarFallbackState) => React.CSSProperties | undefined) | undefined",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          }
        ]
      },
      {
        "name": "AvatarGroup",
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
            "type": "boolean | \"true\" | \"false\" | \"grammar\" | \"spelling\" | undefined",
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
        "name": "AvatarGroupCount",
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
            "type": "boolean | \"true\" | \"false\" | \"grammar\" | \"spelling\" | undefined",
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
        "name": "AvatarBadge",
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
            "type": "boolean | \"true\" | \"false\" | \"grammar\" | \"spelling\" | undefined",
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
        "label": "shadcn Base avatar reference",
        "href": "https://ui.shadcn.com/docs/components/base/avatar"
      },
      {
        "label": "Base UI avatar API",
        "href": "https://base-ui.com/react/components/avatar#api-reference"
      }
    ],
    "notes": [
      "Uses Base UI Avatar. Default/sm/lg sizes are 36/28/44px. Badge stays inside the root; group and count can contain custom content.",
      "Image src/alt and fallback loading behavior come from Base UI. This replaces the previous Radix implementation; use Base Image onLoadingStatusChange for status callbacks and Fallback delay."
    ]
  },
  "badge": {
    "parts": [
      {
        "name": "Badge",
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
            "type": "boolean | \"true\" | \"false\" | \"grammar\" | \"spelling\" | undefined",
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
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, {}> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          },
          {
            "name": "variant",
            "type": "\"default\" | \"link\" | \"secondary\" | \"outline\" | \"ghost\" | \"destructive\" | null | undefined",
            "description": "Native variant attribute or callback; forwarded to the rendered element.",
            "default": "\"default\""
          }
        ]
      },
      {
        "name": "badgeVariants",
        "description": "Class recipe; call it with the corresponding variant/size/orientation options and optional className. Does not attach behavior or Motion.",
        "props": []
      }
    ],
    "links": [
      {
        "label": "shadcn Base badge reference",
        "href": "https://ui.shadcn.com/docs/components/base/badge"
      },
      {
        "label": "Base UI utils/use-render API",
        "href": "https://base-ui.com/react/utils/use-render#api-reference"
      }
    ],
    "notes": [
      "Uses useRender for native span or link/button composition. Semantic variants default/secondary/outline/destructive/ghost/link preserve Leement colors."
    ]
  },
  "field": {
    "parts": [
      {
        "name": "FieldContent",
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
            "type": "boolean | \"true\" | \"false\" | \"grammar\" | \"spelling\" | undefined",
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
        "name": "FieldTitle",
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
            "type": "boolean | \"true\" | \"false\" | \"grammar\" | \"spelling\" | undefined",
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
        "name": "FieldSeparator",
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
            "type": "boolean | \"true\" | \"false\" | \"grammar\" | \"spelling\" | undefined",
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
        "name": "Field",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "disabled",
            "type": "boolean | undefined",
            "description": "Whether the component should ignore user interaction.\nTakes precedence over the `disabled` prop on the `<Field.Control>` component.",
            "default": "false"
          },
          {
            "name": "name",
            "type": "string | undefined",
            "description": "Identifies the field when a form is submitted.\nTakes precedence over the `name` prop on the `<Field.Control>` component."
          },
          {
            "name": "validate",
            "type": "((value: unknown, formValues: Form.Values) => string | string[] | null | Promise<string | string[] | null>) | undefined",
            "description": "A function for custom validation. Return a string or an array of strings with\nthe error message(s) if the value is invalid, or `null` if the value is valid.\nAsynchronous functions are supported, but they do not prevent form submission\nwhen using `validationMode=\"onSubmit\"`."
          },
          {
            "name": "validationMode",
            "type": "FormValidationMode | undefined",
            "description": "Determines when the field should be validated.\nThis takes precedence over the `validationMode` prop on `<Form>`.\n\n- `onSubmit`: triggers validation when the form is submitted, and re-validates on change after submission.\n- `onBlur`: triggers validation when the control loses focus.\n- `onChange`: triggers validation on every change to the control value.",
            "default": "'onSubmit'"
          },
          {
            "name": "validationDebounceTime",
            "type": "number | undefined",
            "description": "How long to wait between `validate` callbacks if\n`validationMode=\"onChange\"` is used. Specified in milliseconds.",
            "default": "0"
          },
          {
            "name": "invalid",
            "type": "boolean | undefined",
            "description": "Whether the field is invalid.\nUseful when the field state is controlled by an external library."
          },
          {
            "name": "dirty",
            "type": "boolean | undefined",
            "description": "Whether the field's value has been changed from its initial value.\nUseful when the field state is controlled by an external library."
          },
          {
            "name": "touched",
            "type": "boolean | undefined",
            "description": "Whether the field has been touched.\nUseful when the field state is controlled by an external library."
          },
          {
            "name": "actionsRef",
            "type": "React.RefObject<FieldRootActions | null> | undefined",
            "description": "A ref to imperative actions.\n- `validate`: Validates the field when called."
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
            "type": "boolean | \"true\" | \"false\" | \"grammar\" | \"spelling\" | undefined",
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
            "type": "string | ((state: FieldRootState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, FieldRootState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: FieldRootState) => React.CSSProperties | undefined) | undefined",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          },
          {
            "name": "orientation",
            "type": "\"vertical\" | \"horizontal\" | \"responsive\" | undefined",
            "description": "Native orientation attribute or callback; forwarded to the rendered element.",
            "default": "\"vertical\""
          }
        ]
      },
      {
        "name": "FieldLabel",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "nativeLabel",
            "type": "boolean | undefined",
            "description": "Whether the component renders a native `<label>` element when replacing it via the `render` prop.\nSet to `false` if the rendered element is not a label (for example, `<div>`).\n\nThis is useful to avoid inheriting label behaviors on `<button>` controls (such as `<Select.Trigger>` and `<Combobox.Trigger>`), including avoiding `:hover` on the button when hovering the label, and preventing clicks on the label from firing on the button.",
            "default": "true"
          },
          {
            "name": "ref",
            "type": "Ref<HTMLLabelElement> | undefined",
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
            "type": "boolean | \"true\" | \"false\" | \"grammar\" | \"spelling\" | undefined",
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
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLLabelElement, Element>>) => void) | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "((event: BaseUIEvent<SubmitEvent<HTMLLabelElement>>) => void) | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "((event: BaseUIEvent<KeyboardEvent<HTMLLabelElement>>) => void) | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "((event: BaseUIEvent<MouseEvent<HTMLLabelElement, globalThis.MouseEvent>>) => void) | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "htmlFor",
            "type": "string | undefined",
            "description": "Native htmlFor attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "className",
            "type": "string | ((state: FieldLabelState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, FieldLabelState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: FieldLabelState) => React.CSSProperties | undefined) | undefined",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          }
        ]
      },
      {
        "name": "FieldControl",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "className",
            "type": "string | ((state: FieldControlState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: FieldControlState) => React.CSSProperties | undefined) | undefined",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
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
            "name": "type",
            "type": "HTMLInputTypeAttribute | undefined",
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
            "type": "boolean | \"true\" | \"false\" | \"grammar\" | \"spelling\" | undefined",
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
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLInputElement, HTMLInputElement>>) => void) | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "((event: BaseUIEvent<SubmitEvent<HTMLInputElement>>) => void) | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "((event: BaseUIEvent<KeyboardEvent<HTMLInputElement>>) => void) | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "((event: BaseUIEvent<MouseEvent<HTMLInputElement, globalThis.MouseEvent>>) => void) | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
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
            "name": "multiple",
            "type": "boolean | undefined",
            "description": "Native multiple attribute or callback; forwarded to the rendered element."
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
            "name": "onValueChange",
            "type": "((value: string, eventDetails: FieldControl.ChangeEventDetails) => void) | undefined",
            "description": "Callback fired when the `value` changes. Use when controlled."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, FieldControlState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          },
          {
            "name": "ref",
            "type": "Ref<HTMLElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          }
        ]
      },
      {
        "name": "FieldDescription",
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
            "type": "boolean | \"true\" | \"false\" | \"grammar\" | \"spelling\" | undefined",
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
            "type": "string | ((state: FieldDescriptionState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, FieldDescriptionState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: FieldDescriptionState) => React.CSSProperties | undefined) | undefined",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          }
        ]
      },
      {
        "name": "FieldError",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "match",
            "type": "boolean | keyof ValidityState | undefined",
            "description": "Determines whether to show the error message according to the field's\n[ValidityState](https://developer.mozilla.org/en-US/docs/Web/API/ValidityState).\nSpecifying `true` will always show the error message, and lets external libraries\ncontrol the visibility."
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
            "type": "boolean | \"true\" | \"false\" | \"grammar\" | \"spelling\" | undefined",
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
            "type": "string | ((state: FieldErrorState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, FieldErrorState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: FieldErrorState) => React.CSSProperties | undefined) | undefined",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          },
          {
            "name": "errors",
            "type": "({ message?: string; } | undefined)[] | undefined",
            "description": "Native errors attribute or callback; forwarded to the rendered element."
          }
        ]
      },
      {
        "name": "FieldSet",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLFieldSetElement> | undefined",
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
            "type": "boolean | \"true\" | \"false\" | \"grammar\" | \"spelling\" | undefined",
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
            "type": "ChangeEventHandler<HTMLFieldSetElement, Element> | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "SubmitEventHandler<HTMLFieldSetElement> | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "KeyboardEventHandler<HTMLFieldSetElement> | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "MouseEventHandler<HTMLFieldSetElement> | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          }
        ]
      },
      {
        "name": "FieldLegend",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLLegendElement> | undefined",
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
            "type": "boolean | \"true\" | \"false\" | \"grammar\" | \"spelling\" | undefined",
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
            "type": "ChangeEventHandler<HTMLLegendElement, Element> | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "SubmitEventHandler<HTMLLegendElement> | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "KeyboardEventHandler<HTMLLegendElement> | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "MouseEventHandler<HTMLLegendElement> | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "variant",
            "type": "\"label\" | \"legend\" | undefined",
            "description": "Native variant attribute or callback; forwarded to the rendered element.",
            "default": "\"legend\""
          }
        ]
      },
      {
        "name": "FieldGroup",
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
            "type": "boolean | \"true\" | \"false\" | \"grammar\" | \"spelling\" | undefined",
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
        "label": "shadcn Base field reference",
        "href": "https://ui.shadcn.com/docs/components/base/field"
      },
      {
        "label": "Base UI field API",
        "href": "https://base-ui.com/react/components/field#api-reference"
      }
    ],
    "notes": [
      "Field retains Base UI label/control/validation behavior and adds vertical, horizontal and responsive layout. Outside Field, FieldLabel renders a native label for choice-card composition and FieldDescription renders a native paragraph. Standalone class callbacks receive neutral state; use htmlFor/id or a nested native input. FieldSet links its direct description through aria-describedby. FieldGroup establishes the container used by responsive orientation.",
      "Input automatically registers with Field. FieldControl remains available for a custom native control. Use htmlFor/id for explicit native composition.",
      "FieldError errors accepts app-provided message objects, removes duplicate messages and links the error to the field control. Without errors, it preserves Base validation and match behavior."
    ]
  },
  "input-group": {
    "parts": [
      {
        "name": "InputGroup",
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
            "type": "boolean | \"true\" | \"false\" | \"grammar\" | \"spelling\" | undefined",
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
        "name": "InputGroupAddon",
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
            "type": "boolean | \"true\" | \"false\" | \"grammar\" | \"spelling\" | undefined",
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
            "name": "align",
            "type": "\"inline-start\" | \"inline-end\" | \"block-start\" | \"block-end\" | null | undefined",
            "description": "Native align attribute or callback; forwarded to the rendered element.",
            "default": "\"inline-start\""
          }
        ]
      },
      {
        "name": "InputGroupButton",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "className",
            "type": "string | ((state: ButtonState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "variant",
            "type": "\"default\" | \"link\" | \"primary\" | \"secondary\" | \"outline\" | \"ghost\" | \"destructive\" | null | undefined",
            "description": "Native variant attribute or callback; forwarded to the rendered element.",
            "default": "\"ghost\""
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: ButtonState) => React.CSSProperties | undefined) | undefined",
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
            "type": "boolean | \"true\" | \"false\" | \"grammar\" | \"spelling\" | undefined",
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
            "name": "loading",
            "type": "boolean | undefined",
            "description": "Native loading attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, ButtonState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          },
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
            "name": "asChild",
            "type": "boolean | undefined",
            "description": "Native asChild attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "size",
            "type": "\"xs\" | \"sm\" | \"icon-sm\" | \"icon-xs\" | null | undefined",
            "description": "Native size attribute or callback; forwarded to the rendered element.",
            "default": "\"xs\""
          },
          {
            "name": "type",
            "type": "\"button\" | \"submit\" | \"reset\" | undefined",
            "description": "Native type attribute or callback; forwarded to the rendered element.",
            "default": "\"button\""
          }
        ]
      },
      {
        "name": "InputGroupText",
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
            "type": "boolean | \"true\" | \"false\" | \"grammar\" | \"spelling\" | undefined",
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
        "name": "InputGroupInput",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLInputElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
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
            "name": "disabled",
            "type": "boolean | undefined",
            "description": "Native disabled attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "multiple",
            "type": "boolean | undefined",
            "description": "Native multiple attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "name",
            "type": "string | undefined",
            "description": "Native name attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "pattern",
            "type": "string | undefined",
            "description": "Native pattern attribute or callback; forwarded to the rendered element."
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
            "name": "type",
            "type": "HTMLInputTypeAttribute | undefined",
            "description": "Native type attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "value",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native value attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onChange",
            "type": "ChangeEventHandler<HTMLInputElement, HTMLInputElement> | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
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
            "type": "boolean | \"true\" | \"false\" | \"grammar\" | \"spelling\" | undefined",
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
          }
        ]
      },
      {
        "name": "InputGroupTextarea",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLTextAreaElement> | undefined",
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
            "name": "value",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native value attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onChange",
            "type": "ChangeEventHandler<HTMLTextAreaElement, HTMLTextAreaElement> | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
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
            "type": "boolean | \"true\" | \"false\" | \"grammar\" | \"spelling\" | undefined",
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
            "type": "SubmitEventHandler<HTMLTextAreaElement> | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "KeyboardEventHandler<HTMLTextAreaElement> | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "MouseEventHandler<HTMLTextAreaElement> | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          }
        ]
      },
      {
        "name": "inputGroupAddonVariants",
        "description": "Class recipe; call it with the corresponding variant/size/orientation options and optional className. Does not attach behavior or Motion.",
        "props": []
      },
      {
        "name": "inputGroupButtonVariants",
        "description": "Class recipe; call it with the corresponding variant/size/orientation options and optional className. Does not attach behavior or Motion.",
        "props": []
      }
    ],
    "links": [
      {
        "label": "shadcn Base input-group reference",
        "href": "https://ui.shadcn.com/docs/components/base/input-group"
      },
      {
        "label": "Native HTML elements (MDN)",
        "href": "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements"
      }
    ],
    "notes": [
      "Addons support inline-start/inline-end/block-start/block-end. Use InputGroupTextarea for multiline content and InputGroupText for non-interactive units.",
      "Clicking a non-button addon focuses its input or textarea. Consumer onClick runs first and can prevent that behavior. Name icon-only actions."
    ]
  },
  "checkbox": {
    "parts": [
      {
        "name": "Checkbox",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "id",
            "type": "string | undefined",
            "description": "The id of the input element."
          },
          {
            "name": "name",
            "type": "string | undefined",
            "description": "Identifies the field when a form is submitted.",
            "default": "undefined"
          },
          {
            "name": "form",
            "type": "string | undefined",
            "description": "Identifies the form that owns the hidden input.\nUseful when the checkbox is rendered outside the form."
          },
          {
            "name": "checked",
            "type": "boolean | undefined",
            "description": "Whether the checkbox is currently ticked.\n\nTo render an uncontrolled checkbox, use the `defaultChecked` prop instead.",
            "default": "undefined"
          },
          {
            "name": "defaultChecked",
            "type": "boolean | undefined",
            "description": "Whether the checkbox is initially ticked.\n\nTo render a controlled checkbox, use the `checked` prop instead.",
            "default": "false"
          },
          {
            "name": "disabled",
            "type": "boolean | undefined",
            "description": "Whether the component should ignore user interaction.",
            "default": "false"
          },
          {
            "name": "onCheckedChange",
            "type": "((checked: boolean, eventDetails: CheckboxRootChangeEventDetails) => void) | undefined",
            "description": "Event handler called when the checkbox is ticked or unticked."
          },
          {
            "name": "readOnly",
            "type": "boolean | undefined",
            "description": "Whether the user should be unable to tick or untick the checkbox.",
            "default": "false"
          },
          {
            "name": "required",
            "type": "boolean | undefined",
            "description": "Whether the user must tick the checkbox before submitting a form.",
            "default": "false"
          },
          {
            "name": "indeterminate",
            "type": "boolean | undefined",
            "description": "Whether the checkbox is in a mixed state: neither ticked, nor unticked.",
            "default": "false"
          },
          {
            "name": "inputRef",
            "type": "React.Ref<HTMLInputElement> | undefined",
            "description": "A ref to access the hidden `<input>` element."
          },
          {
            "name": "parent",
            "type": "boolean | undefined",
            "description": "Whether the checkbox controls a group of child checkboxes.\n\nMust be used in a [Checkbox Group](https://base-ui.com/react/components/checkbox-group).",
            "default": "false"
          },
          {
            "name": "uncheckedValue",
            "type": "string | undefined",
            "description": "The value submitted with the form when the checkbox is unchecked.\nBy default, unchecked checkboxes do not submit any value, matching native checkbox behavior."
          },
          {
            "name": "value",
            "type": "string | undefined",
            "description": "The checkbox's value. Identifies it within a [Checkbox Group](https://base-ui.com/react/components/checkbox-group), falling back to `name` when omitted.\nWhen submitting a form, a checked box submits `value`; with no `value`, it submits the native \"on\"."
          },
          {
            "name": "nativeButton",
            "type": "boolean | undefined",
            "description": "Whether the component renders a native `<button>` element when replacing it\nvia the `render` prop.\nSet to `true` if the rendered element is a native button.",
            "default": "false"
          },
          {
            "name": "className",
            "type": "string | ((state: CheckboxRootState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: CheckboxRootState) => React.CSSProperties | undefined) | undefined",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          },
          {
            "name": "ref",
            "type": "Ref<HTMLSpanElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "tabIndex",
            "type": "number | undefined",
            "description": "Native tabIndex attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "aria-invalid",
            "type": "boolean | \"true\" | \"false\" | \"grammar\" | \"spelling\" | undefined",
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
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, CheckboxRootState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          }
        ]
      }
    ],
    "links": [
      {
        "label": "shadcn Base checkbox reference",
        "href": "https://ui.shadcn.com/docs/components/base/checkbox"
      },
      {
        "label": "Base UI checkbox API",
        "href": "https://base-ui.com/react/components/checkbox#api-reference"
      }
    ]
  },
  "radio-group": {
    "parts": [
      {
        "name": "RadioGroup",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "disabled",
            "type": "boolean | undefined",
            "description": "Whether the component should ignore user interaction.",
            "default": "false"
          },
          {
            "name": "readOnly",
            "type": "boolean | undefined",
            "description": "Whether the user should be unable to select a different radio button in the group.",
            "default": "false"
          },
          {
            "name": "required",
            "type": "boolean | undefined",
            "description": "Whether the user must choose a value before submitting a form.",
            "default": "false"
          },
          {
            "name": "name",
            "type": "string | undefined",
            "description": "Identifies the field when a form is submitted."
          },
          {
            "name": "form",
            "type": "string | undefined",
            "description": "Identifies the form that owns the radio inputs.\nUseful when the radio group is rendered outside the form."
          },
          {
            "name": "value",
            "type": "any",
            "description": "The controlled value of the radio item that should be currently selected.\n\nTo render an uncontrolled radio group, use the `defaultValue` prop instead."
          },
          {
            "name": "defaultValue",
            "type": "any",
            "description": "The uncontrolled value of the radio button that should be initially selected.\n\nTo render a controlled radio group, use the `value` prop instead."
          },
          {
            "name": "onValueChange",
            "type": "((value: any, eventDetails: RadioGroup.ChangeEventDetails) => void) | undefined",
            "description": "Callback fired when the value changes."
          },
          {
            "name": "inputRef",
            "type": "React.Ref<HTMLInputElement> | undefined",
            "description": "A ref to access the hidden input element."
          },
          {
            "name": "className",
            "type": "string | ((state: RadioGroupState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: RadioGroupState) => React.CSSProperties | undefined) | undefined",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
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
            "type": "boolean | \"true\" | \"false\" | \"grammar\" | \"spelling\" | undefined",
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
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, RadioGroupState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          }
        ]
      },
      {
        "name": "RadioGroupItem",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "value",
            "type": "any",
            "description": "The unique identifying value of the radio in a group.",
            "required": true
          },
          {
            "name": "disabled",
            "type": "boolean | undefined",
            "description": "Whether the component should ignore user interaction."
          },
          {
            "name": "required",
            "type": "boolean | undefined",
            "description": "Whether the user must choose a value before submitting a form."
          },
          {
            "name": "readOnly",
            "type": "boolean | undefined",
            "description": "Whether the user should be unable to select the radio button."
          },
          {
            "name": "inputRef",
            "type": "React.Ref<HTMLInputElement> | undefined",
            "description": "A ref to access the hidden input element."
          },
          {
            "name": "nativeButton",
            "type": "boolean | undefined",
            "description": "Whether the component renders a native `<button>` element when replacing it\nvia the `render` prop.\nSet to `true` if the rendered element is a native button.",
            "default": "false"
          },
          {
            "name": "className",
            "type": "string | ((state: RadioRootState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: RadioRootState) => React.CSSProperties | undefined) | undefined",
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
            "type": "boolean | \"true\" | \"false\" | \"grammar\" | \"spelling\" | undefined",
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
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, RadioRootState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          }
        ]
      }
    ],
    "links": [
      {
        "label": "shadcn Base radio-group reference",
        "href": "https://ui.shadcn.com/docs/components/base/radio-group"
      },
      {
        "label": "Base UI radio-group API",
        "href": "https://base-ui.com/react/components/radio-group#api-reference"
      }
    ]
  },
  "select": {
    "parts": [
      {
        "name": "Select",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "children",
            "type": "React.ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "inputRef",
            "type": "React.Ref<HTMLInputElement> | undefined",
            "description": "A ref to access the hidden input element."
          },
          {
            "name": "name",
            "type": "string | undefined",
            "description": "Identifies the field when a form is submitted."
          },
          {
            "name": "form",
            "type": "string | undefined",
            "description": "Identifies the form that owns the hidden input.\nUseful when the select is rendered outside the form."
          },
          {
            "name": "autoComplete",
            "type": "string | undefined",
            "description": "Provides a hint to the browser for autofill."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "The id of the Select."
          },
          {
            "name": "required",
            "type": "boolean | undefined",
            "description": "Whether the user must choose a value before submitting a form.",
            "default": "false"
          },
          {
            "name": "readOnly",
            "type": "boolean | undefined",
            "description": "Whether the user should be unable to choose a different option from the select popup.",
            "default": "false"
          },
          {
            "name": "disabled",
            "type": "boolean | undefined",
            "description": "Whether the component should ignore user interaction.",
            "default": "false"
          },
          {
            "name": "multiple",
            "type": "Multiple | undefined",
            "description": "Whether multiple items can be selected.",
            "default": "false"
          },
          {
            "name": "highlightItemOnHover",
            "type": "boolean | undefined",
            "description": "Whether moving the pointer over items should highlight them.\nDisabling this prop allows CSS `:hover` to be differentiated from the `:focus` (`data-highlighted`) state.",
            "default": "true"
          },
          {
            "name": "defaultOpen",
            "type": "boolean | undefined",
            "description": "Whether the select popup is initially open.\n\nTo render a controlled select popup, use the `open` prop instead.",
            "default": "false"
          },
          {
            "name": "onOpenChange",
            "type": "((open: boolean, eventDetails: SelectRootChangeEventDetails) => void) | undefined",
            "description": "Event handler called when the select popup is opened or closed."
          },
          {
            "name": "onOpenChangeComplete",
            "type": "((open: boolean) => void) | undefined",
            "description": "Event handler called after any animations complete when the select popup is opened or closed."
          },
          {
            "name": "open",
            "type": "boolean | undefined",
            "description": "Whether the select popup is currently open."
          },
          {
            "name": "modal",
            "type": "boolean | undefined",
            "description": "Determines if the select enters a modal state when open.\n- `true`: user interaction is limited to the select: document page scroll is locked and pointer interactions on outside elements are disabled.\n- `false`: user interaction with the rest of the document is allowed.\n\nOn touch devices, a `true` modal blocks outside taps but leaves the page scrollable unless the popup spans nearly the full viewport width, matching native iOS behavior.",
            "default": "true"
          },
          {
            "name": "actionsRef",
            "type": "React.RefObject<SelectRootActions | null> | undefined",
            "description": "A ref to imperative actions.\n- `unmount`: Manually unmounts the select.\nCall this after any externally controlled closing animation finishes."
          },
          {
            "name": "items",
            "type": "Record<string, React.ReactNode> | readonly { label: React.ReactNode; value: any; }[] | readonly Group<any>[] | undefined",
            "description": "Data structure of the items rendered in the select popup.\nWhen specified, `<Select.Value>` renders the label of the selected item instead of the raw value."
          },
          {
            "name": "itemToStringLabel",
            "type": "((itemValue: Value) => string) | undefined",
            "description": "When the item values are objects (`<Select.Item value={object}>`), this function converts the object value to a string representation for display in the trigger.\nIf the shape of the object is `{ value, label }`, the label will be used automatically without needing to specify this prop."
          },
          {
            "name": "itemToStringValue",
            "type": "((itemValue: Value) => string) | undefined",
            "description": "When the item values are objects (`<Select.Item value={object}>`), this function converts the object value to a string representation for form submission.\nIf the shape of the object is `{ value, label }`, the value will be used automatically without needing to specify this prop."
          },
          {
            "name": "isItemEqualToValue",
            "type": "((itemValue: Value, value: Value) => boolean) | undefined",
            "description": "Custom comparison logic used to determine if a select item value matches the current selected value. Useful when item values are objects without matching referentially.\nDefaults to `Object.is` comparison."
          },
          {
            "name": "defaultValue",
            "type": "SelectValueType<Value, Multiple> | null | undefined",
            "description": "The uncontrolled value of the select when it's initially rendered.\n\nTo render a controlled select, use the `value` prop instead."
          },
          {
            "name": "value",
            "type": "SelectValueType<Value, Multiple> | null | undefined",
            "description": "The value of the select. Use when controlled."
          },
          {
            "name": "onValueChange",
            "type": "((value: SelectValueType<Value, Multiple> | (Multiple extends true ? never : null), eventDetails: SelectRootChangeEventDetails) => void) | undefined",
            "description": "Event handler called when the value of the select changes."
          }
        ]
      },
      {
        "name": "SelectContent",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "children",
            "type": "React.ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "finalFocus",
            "type": "boolean | React.RefObject<HTMLElement | null> | ((closeType: InteractionType) => boolean | HTMLElement | null | void) | undefined",
            "description": "Determines the element to focus when the select popup is closed.\n\n- `false`: Do not move focus.\n- `true`: Move focus based on the default behavior (trigger or previously focused element).\n- `RefObject`: Move focus to the ref element.\n- `function`: Called with the interaction type (`mouse`, `touch`, `pen`, or `keyboard`).\n  Return an element to focus, `true` to use the default behavior, or `false`/`undefined` to do nothing."
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
            "type": "boolean | \"true\" | \"false\" | \"grammar\" | \"spelling\" | undefined",
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
            "type": "string | ((state: SelectPopupState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, SelectPopupState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: SelectPopupState) => React.CSSProperties | undefined) | undefined",
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
            "default": "4"
          },
          {
            "name": "alignItemWithTrigger",
            "type": "boolean | undefined",
            "description": "Whether the positioner overlaps the trigger so the selected item's text is aligned with the trigger's value text. This only applies to mouse input and is automatically disabled if there is not enough space.",
            "default": "true"
          }
        ]
      },
      {
        "name": "SelectGroup",
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
            "type": "boolean | \"true\" | \"false\" | \"grammar\" | \"spelling\" | undefined",
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
            "type": "string | ((state: SelectGroupState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, SelectGroupState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: SelectGroupState) => React.CSSProperties | undefined) | undefined",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          }
        ]
      },
      {
        "name": "SelectItem",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "children",
            "type": "React.ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "value",
            "type": "any",
            "description": "A unique value that identifies this select item.",
            "default": "null"
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
            "description": "Specifies the text label to use when the item is matched during keyboard text navigation.\n\nDefaults to the item text content if not provided."
          },
          {
            "name": "nativeButton",
            "type": "boolean | undefined",
            "description": "Whether the component renders a native `<button>` element when replacing it\nvia the `render` prop.\nSet to `true` if the rendered element is a native button.",
            "default": "false"
          },
          {
            "name": "className",
            "type": "string | ((state: SelectItemState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: SelectItemState) => React.CSSProperties | undefined) | undefined",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
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
            "type": "boolean | \"true\" | \"false\" | \"grammar\" | \"spelling\" | undefined",
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
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, SelectItemState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          }
        ]
      },
      {
        "name": "SelectLabel",
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
            "type": "boolean | \"true\" | \"false\" | \"grammar\" | \"spelling\" | undefined",
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
            "type": "string | ((state: SelectGroupLabelState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, SelectGroupLabelState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: SelectGroupLabelState) => React.CSSProperties | undefined) | undefined",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          }
        ]
      },
      {
        "name": "SelectScrollDownButton",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "className",
            "type": "string | ((state: SelectScrollDownArrowState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: SelectScrollDownArrowState) => React.CSSProperties | undefined) | undefined",
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
            "type": "boolean | \"true\" | \"false\" | \"grammar\" | \"spelling\" | undefined",
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
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, SelectScrollDownArrowState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          },
          {
            "name": "keepMounted",
            "type": "boolean | undefined",
            "description": "Whether to keep the HTML element in the DOM while the select popup is not scrollable.",
            "default": "false"
          },
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          }
        ]
      },
      {
        "name": "SelectScrollUpButton",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "className",
            "type": "string | ((state: SelectScrollUpArrowState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: SelectScrollUpArrowState) => React.CSSProperties | undefined) | undefined",
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
            "type": "boolean | \"true\" | \"false\" | \"grammar\" | \"spelling\" | undefined",
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
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, SelectScrollUpArrowState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          },
          {
            "name": "keepMounted",
            "type": "boolean | undefined",
            "description": "Whether to keep the HTML element in the DOM while the select popup is not scrollable.",
            "default": "false"
          },
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          }
        ]
      },
      {
        "name": "SelectSeparator",
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
            "type": "boolean | \"true\" | \"false\" | \"grammar\" | \"spelling\" | undefined",
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
            "type": "string | ((state: SelectSeparatorState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, SelectSeparatorState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: SelectSeparatorState) => React.CSSProperties | undefined) | undefined",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          }
        ]
      },
      {
        "name": "SelectTrigger",
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
            "description": "Whether the component should ignore user interaction."
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
            "type": "boolean | \"true\" | \"false\" | \"grammar\" | \"spelling\" | undefined",
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
            "type": "string | ((state: SelectTriggerState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, SelectTriggerState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: SelectTriggerState) => React.CSSProperties | undefined) | undefined",
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
        "name": "SelectValue",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "children",
            "type": "React.ReactNode | ((value: any) => React.ReactNode)",
            "description": "Accepts a function that returns a `ReactNode` to format the selected value."
          },
          {
            "name": "placeholder",
            "type": "React.ReactNode",
            "description": "The placeholder value to display when no value is selected.\nThis is overridden by `children` if specified, or by a null item's label in `items`."
          },
          {
            "name": "className",
            "type": "string | ((state: SelectValueState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: SelectValueState) => React.CSSProperties | undefined) | undefined",
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
            "type": "boolean | \"true\" | \"false\" | \"grammar\" | \"spelling\" | undefined",
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
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, SelectValueState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          }
        ]
      }
    ],
    "links": [
      {
        "label": "shadcn Base select reference",
        "href": "https://ui.shadcn.com/docs/components/base/select"
      },
      {
        "label": "Base UI select API",
        "href": "https://base-ui.com/react/components/select#api-reference"
      }
    ],
    "notes": [
      "Use items to label displayed values. SelectGroup + SelectLabel group popup options; the field label names the trigger. multiple selects an array.",
      "Styled parts preserve className(state). Positioning and controlled root callbacks remain Base UI."
    ]
  },
  "combobox": {
    "parts": [
      {
        "name": "Combobox",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "form",
            "type": "string | undefined",
            "description": "Identifies the form that owns the internal input.\nUseful when the combobox is rendered outside the form."
          },
          {
            "name": "filter",
            "type": "((itemValue: Value, query: string, itemToString?: ((itemValue: Value) => string) | undefined) => boolean) | null | undefined",
            "description": "Filter function used to match items vs input query."
          },
          {
            "name": "disabled",
            "type": "boolean | undefined",
            "description": "Whether the component should ignore user interaction.",
            "default": "false"
          },
          {
            "name": "name",
            "type": "string | undefined",
            "description": "Identifies the field when a form is submitted."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "The id of the component."
          },
          {
            "name": "children",
            "type": "React.ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "readOnly",
            "type": "boolean | undefined",
            "description": "Whether the user should be unable to choose a different option from the popup.",
            "default": "false"
          },
          {
            "name": "required",
            "type": "boolean | undefined",
            "description": "Whether the user must choose a value before submitting a form.",
            "default": "false"
          },
          {
            "name": "defaultOpen",
            "type": "boolean | undefined",
            "description": "Whether the popup is initially open.\n\nTo render a controlled popup, use the `open` prop instead.",
            "default": "false"
          },
          {
            "name": "open",
            "type": "boolean | undefined",
            "description": "Whether the popup is currently open. Use when controlled."
          },
          {
            "name": "onOpenChangeComplete",
            "type": "((open: boolean) => void) | undefined",
            "description": "Event handler called after any animations complete when the popup is opened or closed."
          },
          {
            "name": "openOnInputClick",
            "type": "boolean | undefined",
            "description": "Whether the popup opens when clicking the input.",
            "default": "true"
          },
          {
            "name": "loopFocus",
            "type": "boolean | undefined",
            "description": "Whether to loop keyboard focus back to the input when the end of the list is reached while using the arrow keys. The first item can then be reached by pressing <kbd>ArrowDown</kbd> again from the input, or the last item can be reached by pressing <kbd>ArrowUp</kbd> from the input.\nThe input is always included in the focus loop per [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/).\nWhen disabled, focus does not move when on the last element and the user presses <kbd>ArrowDown</kbd>, or when on the first element and the user presses <kbd>ArrowUp</kbd>.",
            "default": "true"
          },
          {
            "name": "inputValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "The input value of the combobox. Use when controlled."
          },
          {
            "name": "defaultInputValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "The uncontrolled input value when initially rendered.\n\nTo render a controlled input, use the `inputValue` prop instead."
          },
          {
            "name": "inputRef",
            "type": "React.Ref<HTMLInputElement> | undefined",
            "description": "A ref to the hidden input element."
          },
          {
            "name": "grid",
            "type": "boolean | undefined",
            "description": "Whether list items are presented in a grid layout.\nWhen enabled, arrow keys navigate across rows and columns inferred from DOM rows.",
            "default": "false"
          },
          {
            "name": "items",
            "type": "readonly any[] | readonly Group<any>[] | undefined",
            "description": "The items to be displayed in the list.\nCan be either a flat array of items or an array of groups with items."
          },
          {
            "name": "filteredItems",
            "type": "readonly any[] | readonly Group<any>[] | undefined",
            "description": "Filtered items to display in the list.\nWhen provided, the list will use these items instead of filtering the `items` prop internally.\nUse when you want to control filtering logic externally with the `useFilter()` hook."
          },
          {
            "name": "virtualized",
            "type": "boolean | undefined",
            "description": "Whether the items are being externally virtualized.",
            "default": "false"
          },
          {
            "name": "inline",
            "type": "boolean | undefined",
            "description": "Whether the list is rendered inline without using the component's own popup.\n\nSpecify `open` unconditionally in conjunction with this prop so the list is considered\nvisible: `<Combobox.Root inline open>`\n\nIn a `Combobox.Root` > `Dialog.Root` composition, bind the Combobox's `open` and\n`onOpenChange` props to the `Dialog`'s `open` and `onOpenChange` state instead so the\ncomponent resets its transient state (filter query, highlighted item, and input value) when\nthe dialog closes.",
            "default": "false"
          },
          {
            "name": "modal",
            "type": "boolean | undefined",
            "description": "Determines if the popup enters a modal state when open.\n- `true`: user interaction is limited to the popup: document page scroll is locked and pointer interactions on outside elements are disabled.\n- `false`: user interaction with the rest of the document is allowed.\n\nOn touch devices, a `true` modal blocks outside taps but leaves the page scrollable unless the popup spans nearly the full viewport width, matching native iOS behavior.",
            "default": "false"
          },
          {
            "name": "limit",
            "type": "number | undefined",
            "description": "The maximum number of items to display in the list.",
            "default": "-1"
          },
          {
            "name": "locale",
            "type": "Intl.LocalesArgument",
            "description": "The locale to use for string comparison.\nDefaults to the user's runtime locale."
          },
          {
            "name": "multiple",
            "type": "Multiple | undefined",
            "description": "Whether multiple items can be selected.",
            "default": "false"
          },
          {
            "name": "autoComplete",
            "type": "string | undefined",
            "description": "Provides a hint to the browser for autofill."
          },
          {
            "name": "autoHighlight",
            "type": "boolean | undefined",
            "description": "Whether the first matching item is highlighted automatically while filtering.",
            "default": "false"
          },
          {
            "name": "highlightItemOnHover",
            "type": "boolean | undefined",
            "description": "Whether moving the pointer over items should highlight them.\nDisabling this prop allows CSS `:hover` to be differentiated from the `:focus` (`data-highlighted`) state.",
            "default": "true"
          },
          {
            "name": "itemToStringLabel",
            "type": "((itemValue: Value) => string) | undefined",
            "description": "When the item values are objects (`<Combobox.Item value={object}>`), this function converts the object value to a string representation for display in the input.\nIf the shape of the object is `{ value, label }`, the label will be used automatically without needing to specify this prop."
          },
          {
            "name": "itemToStringValue",
            "type": "((itemValue: Value) => string) | undefined",
            "description": "When the item values are objects (`<Combobox.Item value={object}>`), this function converts the object value to a string representation for form submission.\nIf the shape of the object is `{ value, label }`, the value will be used automatically without needing to specify this prop."
          },
          {
            "name": "isItemEqualToValue",
            "type": "((itemValue: Value, value: Value) => boolean) | undefined",
            "description": "Custom comparison logic used to determine if a combobox item value matches the current selected value. Useful when item values are objects without matching referentially.\nDefaults to `Object.is` comparison."
          },
          {
            "name": "defaultValue",
            "type": "ComboboxValueType<Value, Multiple> | null | undefined",
            "description": "The uncontrolled selected value of the combobox when it's initially rendered.\n\nTo render a controlled combobox, use the `value` prop instead."
          },
          {
            "name": "actionsRef",
            "type": "React.RefObject<AriaCombobox.Actions | null> | undefined",
            "description": "A ref to imperative actions.\n- `unmount`: Manually unmounts the combobox.\nCall this after any externally controlled closing animation finishes."
          },
          {
            "name": "onOpenChange",
            "type": "((open: boolean, eventDetails: ComboboxRoot.ChangeEventDetails) => void) | undefined",
            "description": "Event handler called when the popup is opened or closed."
          },
          {
            "name": "onInputValueChange",
            "type": "((inputValue: string, eventDetails: ComboboxRoot.ChangeEventDetails) => void) | undefined",
            "description": "Event handler called when the input value changes."
          },
          {
            "name": "onItemHighlighted",
            "type": "((highlightedValue: Value | undefined, eventDetails: ComboboxRoot.HighlightEventDetails) => void) | undefined",
            "description": "Callback fired when an item is highlighted or unhighlighted.\nReceives the highlighted item value (or `undefined` if no item is highlighted) and event details with a `reason` property describing why the highlight changed.\nThe `reason` can be:\n- `'keyboard'`: the highlight changed due to keyboard navigation.\n- `'pointer'`: the highlight changed due to pointer hovering.\n- `'none'`: the highlight changed programmatically."
          },
          {
            "name": "value",
            "type": "ComboboxValueType<Value, Multiple> | null | undefined",
            "description": "The selected value of the combobox. Use when controlled."
          },
          {
            "name": "onValueChange",
            "type": "((value: ComboboxValueType<Value, Multiple> | (Multiple extends true ? never : null), eventDetails: ComboboxRoot.ChangeEventDetails) => void) | undefined",
            "description": "Event handler called when the selected value of the combobox changes."
          }
        ]
      },
      {
        "name": "ComboboxInput",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "disabled",
            "type": "boolean | undefined",
            "description": "Whether the component should ignore user interaction.",
            "default": "false"
          },
          {
            "name": "pattern",
            "type": "string | undefined",
            "description": "Native pattern attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "ref",
            "type": "Ref<HTMLInputElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "name",
            "type": "string | undefined",
            "description": "Native name attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "type",
            "type": "HTMLInputTypeAttribute | undefined",
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
            "type": "boolean | \"true\" | \"false\" | \"grammar\" | \"spelling\" | undefined",
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
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLInputElement, HTMLInputElement>>) => void) | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "((event: BaseUIEvent<SubmitEvent<HTMLInputElement>>) => void) | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "((event: BaseUIEvent<KeyboardEvent<HTMLInputElement>>) => void) | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "((event: BaseUIEvent<MouseEvent<HTMLInputElement, globalThis.MouseEvent>>) => void) | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
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
            "name": "multiple",
            "type": "boolean | undefined",
            "description": "Native multiple attribute or callback; forwarded to the rendered element."
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
            "name": "className",
            "type": "string | ((state: AutocompleteInputState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, AutocompleteInputState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: AutocompleteInputState) => React.CSSProperties | undefined) | undefined",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          },
          {
            "name": "showTrigger",
            "type": "boolean | undefined",
            "description": "Native showTrigger attribute or callback; forwarded to the rendered element.",
            "default": "true"
          },
          {
            "name": "showClear",
            "type": "boolean | undefined",
            "description": "Native showClear attribute or callback; forwarded to the rendered element.",
            "default": "false"
          }
        ]
      },
      {
        "name": "ComboboxContent",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "initialFocus",
            "type": "boolean | React.RefObject<HTMLElement | null> | ((openType: InteractionType) => void | boolean | HTMLElement | null) | undefined",
            "description": "Determines the element to focus when the popup is opened.\n\n- `false`: Do not move focus.\n- `true`: Move focus based on the default behavior (first tabbable element or popup).\n- `RefObject`: Move focus to the ref element.\n- `function`: Called with the interaction type (`mouse`, `touch`, `pen`, or `keyboard`).\n  Return an element to focus, `true` to use the default behavior, or `false`/`undefined` to do nothing."
          },
          {
            "name": "finalFocus",
            "type": "boolean | React.RefObject<HTMLElement | null> | ((closeType: InteractionType) => void | boolean | HTMLElement | null) | undefined",
            "description": "Determines the element to focus when the popup is closed.\n\n- `false`: Do not move focus.\n- `true`: Move focus based on the default behavior (trigger or previously focused element).\n- `RefObject`: Move focus to the ref element.\n- `function`: Called with the interaction type (`mouse`, `touch`, `pen`, or `keyboard`).\n  Return an element to focus, `true` to use the default behavior, or `false`/`undefined` to do nothing."
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
            "type": "boolean | \"true\" | \"false\" | \"grammar\" | \"spelling\" | undefined",
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
            "type": "string | ((state: AutocompletePopupState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, AutocompletePopupState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: AutocompletePopupState) => React.CSSProperties | undefined) | undefined",
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
            "default": "6"
          },
          {
            "name": "anchor",
            "type": "Element | VirtualElement | React.RefObject<Element | null> | (() => Element | VirtualElement | null) | null | undefined",
            "description": "An element to position the popup against.\nBy default, the popup will be positioned against the trigger."
          }
        ]
      },
      {
        "name": "ComboboxList",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "children",
            "type": "React.ReactNode | ((item: any, index: number) => React.ReactNode)",
            "description": "Content rendered by this part."
          },
          {
            "name": "className",
            "type": "string | ((state: AutocompleteListState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: AutocompleteListState) => React.CSSProperties | undefined) | undefined",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
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
            "type": "boolean | \"true\" | \"false\" | \"grammar\" | \"spelling\" | undefined",
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
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, AutocompleteListState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          }
        ]
      },
      {
        "name": "ComboboxItem",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "children",
            "type": "React.ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onClick",
            "type": "((event: BaseUIEvent<React.MouseEvent<HTMLDivElement, MouseEvent>>) => void) | undefined",
            "description": "An optional click handler for the item when selected.\nIt fires when clicking the item with the pointer, as well as when pressing `Enter` with the keyboard if the item is highlighted when the `Input` or `List` element has focus."
          },
          {
            "name": "index",
            "type": "number | undefined",
            "description": "The index of the item in the list. Improves performance when specified by avoiding the need to calculate the index automatically from the DOM."
          },
          {
            "name": "value",
            "type": "any",
            "description": "A unique value that identifies this item.",
            "default": "null"
          },
          {
            "name": "disabled",
            "type": "boolean | undefined",
            "description": "Whether the component should ignore user interaction.",
            "default": "false"
          },
          {
            "name": "nativeButton",
            "type": "boolean | undefined",
            "description": "Whether the component renders a native `<button>` element when replacing it\nvia the `render` prop.\nSet to `true` if the rendered element is a native button.",
            "default": "false"
          },
          {
            "name": "className",
            "type": "string | ((state: ComboboxItemState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: ComboboxItemState) => React.CSSProperties | undefined) | undefined",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
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
            "type": "boolean | \"true\" | \"false\" | \"grammar\" | \"spelling\" | undefined",
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
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, ComboboxItemState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          }
        ]
      },
      {
        "name": "ComboboxGroup",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "items",
            "type": "readonly any[] | undefined",
            "description": "Items to be rendered within this group.\nWhen provided, child `Collection` components will use these items."
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
            "type": "boolean | \"true\" | \"false\" | \"grammar\" | \"spelling\" | undefined",
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
            "type": "string | ((state: AutocompleteGroupState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, AutocompleteGroupState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: AutocompleteGroupState) => React.CSSProperties | undefined) | undefined",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          }
        ]
      },
      {
        "name": "ComboboxLabel",
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
            "type": "boolean | \"true\" | \"false\" | \"grammar\" | \"spelling\" | undefined",
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
            "type": "string | ((state: AutocompleteGroupLabelState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, AutocompleteGroupLabelState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: AutocompleteGroupLabelState) => React.CSSProperties | undefined) | undefined",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          }
        ]
      },
      {
        "name": "ComboboxCollection",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "children",
            "type": "(item: any, index: number) => React.ReactNode",
            "description": "Content rendered by this part.",
            "required": true
          }
        ]
      },
      {
        "name": "ComboboxEmpty",
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
            "type": "boolean | \"true\" | \"false\" | \"grammar\" | \"spelling\" | undefined",
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
            "type": "string | ((state: AutocompleteEmptyState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, AutocompleteEmptyState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: AutocompleteEmptyState) => React.CSSProperties | undefined) | undefined",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          }
        ]
      },
      {
        "name": "ComboboxSeparator",
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
            "type": "boolean | \"true\" | \"false\" | \"grammar\" | \"spelling\" | undefined",
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
            "type": "string | ((state: ComboboxSeparatorState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, ComboboxSeparatorState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: ComboboxSeparatorState) => React.CSSProperties | undefined) | undefined",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          }
        ]
      },
      {
        "name": "ComboboxChips",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "className",
            "type": "string | ((state: ComboboxChipsState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: ComboboxChipsState) => React.CSSProperties | undefined) | undefined",
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
            "type": "boolean | \"true\" | \"false\" | \"grammar\" | \"spelling\" | undefined",
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
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, ComboboxChipsState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          },
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          }
        ]
      },
      {
        "name": "ComboboxChip",
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
            "type": "boolean | \"true\" | \"false\" | \"grammar\" | \"spelling\" | undefined",
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
            "type": "string | ((state: ComboboxChipState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, ComboboxChipState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: ComboboxChipState) => React.CSSProperties | undefined) | undefined",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          },
          {
            "name": "showRemove",
            "type": "boolean | undefined",
            "description": "Native showRemove attribute or callback; forwarded to the rendered element.",
            "default": "true"
          }
        ]
      },
      {
        "name": "ComboboxChipsInput",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "disabled",
            "type": "boolean | undefined",
            "description": "Whether the component should ignore user interaction.",
            "default": "false"
          },
          {
            "name": "pattern",
            "type": "string | undefined",
            "description": "Native pattern attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "ref",
            "type": "Ref<HTMLInputElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "name",
            "type": "string | undefined",
            "description": "Native name attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "type",
            "type": "HTMLInputTypeAttribute | undefined",
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
            "type": "boolean | \"true\" | \"false\" | \"grammar\" | \"spelling\" | undefined",
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
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLInputElement, HTMLInputElement>>) => void) | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "((event: BaseUIEvent<SubmitEvent<HTMLInputElement>>) => void) | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "((event: BaseUIEvent<KeyboardEvent<HTMLInputElement>>) => void) | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "((event: BaseUIEvent<MouseEvent<HTMLInputElement, globalThis.MouseEvent>>) => void) | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
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
            "name": "multiple",
            "type": "boolean | undefined",
            "description": "Native multiple attribute or callback; forwarded to the rendered element."
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
            "name": "className",
            "type": "string | ((state: AutocompleteInputState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, AutocompleteInputState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: AutocompleteInputState) => React.CSSProperties | undefined) | undefined",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          }
        ]
      },
      {
        "name": "ComboboxTrigger",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "disabled",
            "type": "boolean | undefined",
            "description": "Whether the component should ignore user interaction.",
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
            "type": "boolean | \"true\" | \"false\" | \"grammar\" | \"spelling\" | undefined",
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
            "type": "string | ((state: ComboboxTriggerState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, ComboboxTriggerState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: ComboboxTriggerState) => React.CSSProperties | undefined) | undefined",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          }
        ]
      },
      {
        "name": "ComboboxValue",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "children",
            "type": "React.ReactNode | ((selectedValue: any) => React.ReactNode)",
            "description": "Content rendered by this part."
          },
          {
            "name": "placeholder",
            "type": "React.ReactNode",
            "description": "The placeholder value to display when no value is selected.\nThis is overridden by `children` if specified, or by a null item's label in `items`."
          }
        ]
      },
      {
        "name": "ComboboxClear",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "disabled",
            "type": "boolean | undefined",
            "description": "Whether the component should ignore user interaction.",
            "default": "false"
          },
          {
            "name": "keepMounted",
            "type": "boolean | undefined",
            "description": "Whether the component should remain mounted in the DOM when not visible.",
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
            "type": "boolean | \"true\" | \"false\" | \"grammar\" | \"spelling\" | undefined",
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
            "type": "string | ((state: AutocompleteClearState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, AutocompleteClearState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: AutocompleteClearState) => React.CSSProperties | undefined) | undefined",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          }
        ]
      },
      {
        "name": "Combobox shorthand",
        "description": "Compatibility call: <Combobox options={options} label=\"Assignee\" />. Compound usage uses the Root props above.",
        "props": [
          {
            "name": "options",
            "type": "Array<{ value: string; label: string; disabled?: boolean }>",
            "required": true,
            "description": "Available choices."
          },
          {
            "name": "label",
            "type": "string",
            "required": true,
            "description": "Visible and accessible name of the input."
          },
          {
            "name": "value / defaultValue",
            "type": "string",
            "description": "Controlled or initial selected value."
          },
          {
            "name": "onValueChange",
            "type": "(value: string) => void",
            "description": "Receives the selected string; clearing receives an empty string."
          },
          {
            "name": "placeholder",
            "type": "string",
            "default": "\"Search options\"",
            "description": "Input prompt."
          },
          {
            "name": "disabled",
            "type": "boolean",
            "default": "false",
            "description": "Disables the input and selection."
          }
        ]
      },
      {
        "name": "useComboboxAnchor",
        "description": "Returns React.RefObject<HTMLDivElement | null>. Attach it to ComboboxChips and pass it to Content anchor.",
        "props": []
      }
    ],
    "links": [
      {
        "label": "shadcn Base combobox reference",
        "href": "https://ui.shadcn.com/docs/components/base/combobox"
      },
      {
        "label": "Base UI combobox API",
        "href": "https://base-ui.com/react/components/combobox#api-reference"
      }
    ],
    "notes": [
      "Compound Base UI API supports filtering, controlled input/value/open, object values, groups, multiple selection, chips, custom popup placement and clear. items drive the collection; itemToStringLabel/itemToStringValue and isItemEqualToValue support object data.",
      "The existing options + label shorthand remains available with string values and the same controlled callback. New code should use ComboboxInput/Content/List/Item and name the input.",
      "ComboboxContent uses Leement portal scope and Motion exit completion. useComboboxAnchor returns a div ref for anchoring to chips."
    ],
    "usage": "import { Combobox, ComboboxInput, ComboboxContent, ComboboxEmpty, ComboboxList, ComboboxItem } from \"@/components/ui/combobox\";\n\n<Combobox items={[\"React\", \"Vue\"]}>\n  <ComboboxInput aria-label=\"Framework\" />\n  <ComboboxContent>\n    <ComboboxEmpty>No matching frameworks.</ComboboxEmpty>\n    <ComboboxList>{(item) => <ComboboxItem key={item} value={item}>{item}</ComboboxItem>}</ComboboxList>\n  </ComboboxContent>\n</Combobox>"
  },
  "toggle": {
    "parts": [
      {
        "name": "Toggle",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "pressed",
            "type": "boolean | undefined",
            "description": "Whether the toggle button is currently pressed.\nThis is the controlled counterpart of `defaultPressed`."
          },
          {
            "name": "defaultPressed",
            "type": "boolean | undefined",
            "description": "Whether the toggle button is currently pressed.\nThis is the uncontrolled counterpart of `pressed`.",
            "default": "false"
          },
          {
            "name": "disabled",
            "type": "boolean | undefined",
            "description": "Whether the component should ignore user interaction.",
            "default": "false"
          },
          {
            "name": "onPressedChange",
            "type": "((pressed: boolean, eventDetails: Toggle.ChangeEventDetails) => void) | undefined",
            "description": "Callback fired when the pressed state is changed."
          },
          {
            "name": "value",
            "type": "string | undefined",
            "description": "A unique string that identifies the toggle when used\ninside a toggle group."
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
            "type": "boolean | \"true\" | \"false\" | \"grammar\" | \"spelling\" | undefined",
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
            "type": "string | ((state: ToggleState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, ToggleState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: ToggleState) => React.CSSProperties | undefined) | undefined",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          },
          {
            "name": "variant",
            "type": "\"default\" | \"outline\" | null | undefined",
            "description": "Native variant attribute or callback; forwarded to the rendered element.",
            "default": "\"default\""
          },
          {
            "name": "size",
            "type": "\"default\" | \"sm\" | \"lg\" | null | undefined",
            "description": "Native size attribute or callback; forwarded to the rendered element.",
            "default": "\"default\""
          }
        ]
      },
      {
        "name": "toggleVariants",
        "description": "Class recipe; call it with the corresponding variant/size/orientation options and optional className. Does not attach behavior or Motion.",
        "props": []
      }
    ],
    "links": [
      {
        "label": "shadcn Base toggle reference",
        "href": "https://ui.shadcn.com/docs/components/base/toggle"
      },
      {
        "label": "Base UI toggle API",
        "href": "https://base-ui.com/react/components/toggle#api-reference"
      }
    ]
  },
  "toggle-group": {
    "parts": [
      {
        "name": "ToggleGroup",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "value",
            "type": "readonly string[] | undefined",
            "description": "The pressed state of the toggle group represented by an array of\nthe values of all pressed toggle buttons.\nThis is the controlled counterpart of `defaultValue`."
          },
          {
            "name": "defaultValue",
            "type": "readonly string[] | undefined",
            "description": "The pressed state of the toggle group represented by an array of\nthe values of all pressed toggle buttons.\nThis is the uncontrolled counterpart of `value`."
          },
          {
            "name": "onValueChange",
            "type": "((groupValue: string[], eventDetails: ToggleGroup.ChangeEventDetails) => void) | undefined",
            "description": "Callback fired when the pressed states of the toggle group changes."
          },
          {
            "name": "disabled",
            "type": "boolean | undefined",
            "description": "Whether the toggle group should ignore user interaction.",
            "default": "false"
          },
          {
            "name": "orientation",
            "type": "Orientation | undefined",
            "description": "Native orientation attribute or callback; forwarded to the rendered element.",
            "default": "\"horizontal\""
          },
          {
            "name": "loopFocus",
            "type": "boolean | undefined",
            "description": "Whether to loop keyboard focus back to the first item\nwhen the end of the list is reached while using the arrow keys.",
            "default": "true"
          },
          {
            "name": "multiple",
            "type": "boolean | undefined",
            "description": "When `false` only one item in the group can be pressed. If any item in\nthe group becomes pressed, the others will become unpressed.\nWhen `true` multiple items can be pressed.",
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
            "type": "boolean | \"true\" | \"false\" | \"grammar\" | \"spelling\" | undefined",
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
            "type": "string | ((state: ToggleGroupState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, ToggleGroupState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: ToggleGroupState) => React.CSSProperties | undefined) | undefined",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          },
          {
            "name": "variant",
            "type": "\"default\" | \"outline\" | null | undefined",
            "description": "Native variant attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "size",
            "type": "\"default\" | \"sm\" | \"lg\" | null | undefined",
            "description": "Native size attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "spacing",
            "type": "number | undefined",
            "description": "Native spacing attribute or callback; forwarded to the rendered element.",
            "default": "2"
          }
        ]
      },
      {
        "name": "ToggleGroupItem",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "pressed",
            "type": "boolean | undefined",
            "description": "Whether the toggle button is currently pressed.\nThis is the controlled counterpart of `defaultPressed`."
          },
          {
            "name": "defaultPressed",
            "type": "boolean | undefined",
            "description": "Whether the toggle button is currently pressed.\nThis is the uncontrolled counterpart of `pressed`.",
            "default": "false"
          },
          {
            "name": "disabled",
            "type": "boolean | undefined",
            "description": "Whether the component should ignore user interaction.",
            "default": "false"
          },
          {
            "name": "onPressedChange",
            "type": "((pressed: boolean, eventDetails: Toggle.ChangeEventDetails) => void) | undefined",
            "description": "Callback fired when the pressed state is changed."
          },
          {
            "name": "value",
            "type": "string | undefined",
            "description": "A unique string that identifies the toggle when used\ninside a toggle group."
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
            "type": "boolean | \"true\" | \"false\" | \"grammar\" | \"spelling\" | undefined",
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
            "type": "string | ((state: ToggleState) => string | undefined) | undefined",
            "description": "Additional Tailwind classes, or a callback receiving primitive state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, ToggleState> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: ToggleState) => React.CSSProperties | undefined) | undefined",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          },
          {
            "name": "variant",
            "type": "\"default\" | \"outline\" | null | undefined",
            "description": "Native variant attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "size",
            "type": "\"default\" | \"sm\" | \"lg\" | null | undefined",
            "description": "Native size attribute or callback; forwarded to the rendered element."
          }
        ]
      }
    ],
    "links": [
      {
        "label": "shadcn Base toggle-group reference",
        "href": "https://ui.shadcn.com/docs/components/base/toggle-group"
      },
      {
        "label": "Base UI toggle-group API",
        "href": "https://base-ui.com/react/components/toggle-group#api-reference"
      }
    ],
    "notes": [
      "variant and size apply to its items. spacing is a multiple of the Tailwind spacing unit, including 0. orientation controls Base UI keyboard navigation.",
      "Uses the existing Base UI single-array or multiple-array value API; disabled items stay unavailable."
    ]
  },
  "button-group": {
    "parts": [
      {
        "name": "ButtonGroup",
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
            "type": "boolean | \"true\" | \"false\" | \"grammar\" | \"spelling\" | undefined",
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
            "name": "orientation",
            "type": "\"vertical\" | \"horizontal\" | undefined",
            "description": "Native orientation attribute or callback; forwarded to the rendered element.",
            "default": "\"horizontal\""
          }
        ]
      },
      {
        "name": "ButtonGroupText",
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
            "type": "boolean | \"true\" | \"false\" | \"grammar\" | \"spelling\" | undefined",
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
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, {}> | undefined",
            "description": "Compose one element or a render function. Forward the supplied props and ref to the actual element."
          }
        ]
      },
      {
        "name": "ButtonGroupSeparator",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "orientation",
            "type": "\"vertical\" | \"horizontal\" | undefined",
            "description": "Either `vertical` or `horizontal`. Defaults to `horizontal`.",
            "default": "\"vertical\""
          },
          {
            "name": "decorative",
            "type": "boolean | undefined",
            "description": "Whether or not the component is purely decorative. When true, accessibility-related attributes\nare updated so that that the rendered element is removed from the accessibility tree."
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
            "type": "boolean | \"true\" | \"false\" | \"grammar\" | \"spelling\" | undefined",
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
            "name": "ref",
            "type": "Ref<HTMLDivElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          }
        ]
      },
      {
        "name": "buttonGroupVariants",
        "description": "Class recipe; call it with the corresponding variant/size/orientation options and optional className. Does not attach behavior or Motion.",
        "props": []
      }
    ],
    "links": [
      {
        "label": "shadcn Base button-group reference",
        "href": "https://ui.shadcn.com/docs/components/base/button-group"
      },
      {
        "label": "Base UI utils/use-render API",
        "href": "https://base-ui.com/react/utils/use-render#api-reference"
      }
    ]
  },
  "label": {
    "parts": [
      {
        "name": "Label",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLLabelElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "htmlFor",
            "type": "string | undefined",
            "description": "Native htmlFor attribute or callback; forwarded to the rendered element."
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
            "type": "boolean | \"true\" | \"false\" | \"grammar\" | \"spelling\" | undefined",
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
            "type": "ChangeEventHandler<HTMLLabelElement, Element> | undefined",
            "description": "Native onChange attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onSubmit",
            "type": "SubmitEventHandler<HTMLLabelElement> | undefined",
            "description": "Native onSubmit attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onKeyDown",
            "type": "KeyboardEventHandler<HTMLLabelElement> | undefined",
            "description": "Native onKeyDown attribute or callback; forwarded to the rendered element."
          },
          {
            "name": "onClick",
            "type": "MouseEventHandler<HTMLLabelElement> | undefined",
            "description": "Native onClick attribute or callback; forwarded to the rendered element."
          }
        ]
      }
    ],
    "links": [
      {
        "label": "shadcn Base label reference",
        "href": "https://ui.shadcn.com/docs/components/base/label"
      },
      {
        "label": "Native HTML elements (MDN)",
        "href": "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements"
      }
    ]
  },
  "kbd": {
    "parts": [
      {
        "name": "Kbd",
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
            "type": "boolean | \"true\" | \"false\" | \"grammar\" | \"spelling\" | undefined",
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
        "name": "KbdGroup",
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
            "type": "boolean | \"true\" | \"false\" | \"grammar\" | \"spelling\" | undefined",
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
        "label": "shadcn Base kbd reference",
        "href": "https://ui.shadcn.com/docs/components/base/kbd"
      },
      {
        "label": "Native HTML elements (MDN)",
        "href": "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements"
      }
    ],
    "notes": [
      "Kbd represents a key and KbdGroup lays out a shortcut sequence. Shortcut hints do not register event handlers."
    ]
  },
  "aspect-ratio": {
    "parts": [
      {
        "name": "AspectRatio",
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
            "type": "boolean | \"true\" | \"false\" | \"grammar\" | \"spelling\" | undefined",
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
            "name": "ratio",
            "type": "number | undefined",
            "description": "Native ratio attribute or callback; forwarded to the rendered element.",
            "default": "1"
          }
        ]
      }
    ],
    "links": [
      {
        "label": "shadcn Base aspect-ratio reference",
        "href": "https://ui.shadcn.com/docs/components/base/aspect-ratio"
      },
      {
        "label": "Native HTML elements (MDN)",
        "href": "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements"
      }
    ],
    "notes": [
      "Uses native CSS aspect-ratio on a div. A non-finite or non-positive ratio falls back to 1. Keep intrinsically sized children within the box."
    ]
  },
  "skeleton": {
    "parts": [
      {
        "name": "Skeleton",
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
            "type": "boolean | \"true\" | \"false\" | \"grammar\" | \"spelling\" | undefined",
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
            "type": "\"neutral\" | \"brand\" | undefined",
            "description": "Native variant attribute or callback; forwarded to the rendered element.",
            "default": "\"neutral\""
          },
          {
            "name": "paused",
            "type": "boolean | undefined",
            "description": "Native paused attribute or callback; forwarded to the rendered element.",
            "default": "false"
          }
        ]
      }
    ],
    "links": [
      {
        "label": "shadcn Base skeleton reference",
        "href": "https://ui.shadcn.com/docs/components/base/skeleton"
      },
      {
        "label": "Native HTML elements (MDN)",
        "href": "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements"
      }
    ]
  },
  "spinner": {
    "parts": [
      {
        "name": "Spinner",
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
            "type": "boolean | \"true\" | \"false\" | \"grammar\" | \"spelling\" | undefined",
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
          },
          {
            "name": "label",
            "type": "string | undefined",
            "description": "Native label attribute or callback; forwarded to the rendered element.",
            "default": "\"Loading\""
          },
          {
            "name": "size",
            "type": "\"sm\" | \"lg\" | \"md\" | undefined",
            "description": "Native size attribute or callback; forwarded to the rendered element.",
            "default": "\"md\""
          },
          {
            "name": "variant",
            "type": "SpinnerVariant | undefined",
            "description": "Native variant attribute or callback; forwarded to the rendered element.",
            "default": "\"default\""
          }
        ]
      }
    ],
    "links": [
      {
        "label": "shadcn Base spinner reference",
        "href": "https://ui.shadcn.com/docs/components/base/spinner"
      },
      {
        "label": "Native HTML elements (MDN)",
        "href": "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements"
      }
    ],
    "notes": [
      "Leement renders a labelled status span containing a Motion glyph. This differs from shadcn\u2019s SVG root; className sizes the actual glyph and size/variant/label remain available. Native span attributes are forwarded; SVG drawing attributes belong on a custom glyph."
    ]
  }
};
