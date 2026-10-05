import type { ApiReference } from "./api-reference";
export const complexApiReferences: Record<string, ApiReference> = {
  "sidebar": {
    "parts": [
      {
        "name": "Sidebar",
        "description": "Leement composition part; forwards the declared native or primitive props.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; see the linked primitive API."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; see the linked primitive API."
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
            "description": "Native input change event; read event.currentTarget.checked and value."
          },
          {
            "name": "side",
            "type": "\"left\" | \"right\" | undefined",
            "description": "Left or right edge.",
            "default": "\"left\""
          },
          {
            "name": "variant",
            "type": "\"sidebar\" | \"floating\" | \"inset\" | undefined",
            "description": "Visual treatment; see the declared variants.",
            "default": "\"sidebar\""
          },
          {
            "name": "collapsible",
            "type": "\"offcanvas\" | \"icon\" | \"none\" | undefined",
            "description": "Desktop collapse behavior: slide offcanvas, show an icon rail, or stay expanded.",
            "default": "\"offcanvas\""
          }
        ]
      },
      {
        "name": "SidebarContent",
        "description": "Leement composition part; forwards the declared native or primitive props.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; see the linked primitive API."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; see the linked primitive API."
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
            "description": "Native input change event; read event.currentTarget.checked and value."
          }
        ]
      },
      {
        "name": "SidebarFooter",
        "description": "Leement composition part; forwards the declared native or primitive props.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; see the linked primitive API."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; see the linked primitive API."
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
            "description": "Native input change event; read event.currentTarget.checked and value."
          }
        ]
      },
      {
        "name": "SidebarGroup",
        "description": "Leement composition part; forwards the declared native or primitive props.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; see the linked primitive API."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; see the linked primitive API."
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
            "description": "Native input change event; read event.currentTarget.checked and value."
          }
        ]
      },
      {
        "name": "SidebarGroupAction",
        "description": "Leement composition part; forwards the declared native or primitive props.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLButtonElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "disabled",
            "type": "boolean | undefined",
            "description": "Prevents activation while preserving native disabled semantics."
          },
          {
            "name": "name",
            "type": "string | undefined",
            "description": "Unique field name identifying the step and native FormData answers."
          },
          {
            "name": "value",
            "type": "string | number | readonly string[] | undefined",
            "description": "Value written to native FormData when selected."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; see the linked primitive API."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; see the linked primitive API."
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
            "description": "Native input change event; read event.currentTarget.checked and value."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, {}> | undefined",
            "description": "React element or render function receiving merged props and primitive state. Forward props and ref to the actual element."
          }
        ]
      },
      {
        "name": "SidebarGroupContent",
        "description": "Leement composition part; forwards the declared native or primitive props.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; see the linked primitive API."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; see the linked primitive API."
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
            "description": "Native input change event; read event.currentTarget.checked and value."
          }
        ]
      },
      {
        "name": "SidebarGroupLabel",
        "description": "Leement composition part; forwards the declared native or primitive props.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; see the linked primitive API."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; see the linked primitive API."
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
            "description": "Native input change event; read event.currentTarget.checked and value."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, {}> | undefined",
            "description": "React element or render function receiving merged props and primitive state. Forward props and ref to the actual element."
          }
        ]
      },
      {
        "name": "SidebarHeader",
        "description": "Leement composition part; forwards the declared native or primitive props.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; see the linked primitive API."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; see the linked primitive API."
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
            "description": "Native input change event; read event.currentTarget.checked and value."
          }
        ]
      },
      {
        "name": "SidebarInput",
        "description": "Leement composition part; forwards the declared native or primitive props.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLInputElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "disabled",
            "type": "boolean | undefined",
            "description": "Prevents activation while preserving native disabled semantics."
          },
          {
            "name": "name",
            "type": "string | undefined",
            "description": "Unique field name identifying the step and native FormData answers."
          },
          {
            "name": "value",
            "type": "string | number | readonly string[] | undefined",
            "description": "Value written to native FormData when selected."
          },
          {
            "name": "onChange",
            "type": "ChangeEventHandler<HTMLInputElement, HTMLInputElement> | undefined",
            "description": "Native input change event; read event.currentTarget.checked and value."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; see the linked primitive API."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; see the linked primitive API."
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
          }
        ]
      },
      {
        "name": "SidebarInset",
        "description": "Leement composition part; forwards the declared native or primitive props.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; see the linked primitive API."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; see the linked primitive API."
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
            "description": "Native input change event; read event.currentTarget.checked and value."
          }
        ]
      },
      {
        "name": "SidebarMenu",
        "description": "Leement composition part; forwards the declared native or primitive props.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLUListElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; see the linked primitive API."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; see the linked primitive API."
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
            "description": "Native input change event; read event.currentTarget.checked and value."
          }
        ]
      },
      {
        "name": "SidebarMenuAction",
        "description": "Leement composition part; forwards the declared native or primitive props.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLButtonElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "disabled",
            "type": "boolean | undefined",
            "description": "Prevents activation while preserving native disabled semantics."
          },
          {
            "name": "name",
            "type": "string | undefined",
            "description": "Unique field name identifying the step and native FormData answers."
          },
          {
            "name": "value",
            "type": "string | number | readonly string[] | undefined",
            "description": "Value written to native FormData when selected."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; see the linked primitive API."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; see the linked primitive API."
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
            "description": "Native input change event; read event.currentTarget.checked and value."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, {}> | undefined",
            "description": "React element or render function receiving merged props and primitive state. Forward props and ref to the actual element."
          },
          {
            "name": "showOnHover",
            "type": "boolean | undefined",
            "description": "Reveal the menu action on pointer hover or focus within the item.",
            "default": "false"
          }
        ]
      },
      {
        "name": "SidebarMenuBadge",
        "description": "Leement composition part; forwards the declared native or primitive props.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; see the linked primitive API."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; see the linked primitive API."
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
            "description": "Native input change event; read event.currentTarget.checked and value."
          }
        ]
      },
      {
        "name": "SidebarMenuButton",
        "description": "Leement composition part; forwards the declared native or primitive props.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLButtonElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "disabled",
            "type": "boolean | undefined",
            "description": "Prevents activation while preserving native disabled semantics."
          },
          {
            "name": "name",
            "type": "string | undefined",
            "description": "Unique field name identifying the step and native FormData answers."
          },
          {
            "name": "value",
            "type": "string | number | readonly string[] | undefined",
            "description": "Value written to native FormData when selected."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; see the linked primitive API."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; see the linked primitive API."
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
            "description": "Native input change event; read event.currentTarget.checked and value."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, {}> | undefined",
            "description": "React element or render function receiving merged props and primitive state. Forward props and ref to the actual element."
          },
          {
            "name": "isActive",
            "type": "boolean | undefined",
            "description": "Mark the active navigation item.",
            "default": "false"
          },
          {
            "name": "tooltip",
            "type": "string | (TooltipContentProps & React.RefAttributes<HTMLDivElement>) | undefined",
            "description": "Native tooltip attribute or callback; see the linked primitive API."
          },
          {
            "name": "variant",
            "type": "\"default\" | \"outline\" | null | undefined",
            "description": "Visual treatment; see the declared variants.",
            "default": "\"default\""
          },
          {
            "name": "size",
            "type": "\"default\" | \"sm\" | \"lg\" | null | undefined",
            "description": "Declared control size.",
            "default": "\"default\""
          }
        ]
      },
      {
        "name": "SidebarMenuItem",
        "description": "Leement composition part; forwards the declared native or primitive props.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLLIElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "value",
            "type": "string | number | readonly string[] | undefined",
            "description": "Value written to native FormData when selected."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; see the linked primitive API."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; see the linked primitive API."
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
            "description": "Native input change event; read event.currentTarget.checked and value."
          }
        ]
      },
      {
        "name": "SidebarMenuSkeleton",
        "description": "Leement composition part; forwards the declared native or primitive props.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; see the linked primitive API."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; see the linked primitive API."
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
            "description": "Native input change event; read event.currentTarget.checked and value."
          },
          {
            "name": "showIcon",
            "type": "boolean | undefined",
            "description": "Include a skeleton icon placeholder.",
            "default": "false"
          }
        ]
      },
      {
        "name": "SidebarMenuSub",
        "description": "Leement composition part; forwards the declared native or primitive props.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLUListElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; see the linked primitive API."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; see the linked primitive API."
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
            "description": "Native input change event; read event.currentTarget.checked and value."
          }
        ]
      },
      {
        "name": "SidebarMenuSubButton",
        "description": "Leement composition part; forwards the declared native or primitive props.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLAnchorElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; see the linked primitive API."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; see the linked primitive API."
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
            "description": "Native input change event; read event.currentTarget.checked and value."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, {}> | undefined",
            "description": "React element or render function receiving merged props and primitive state. Forward props and ref to the actual element."
          },
          {
            "name": "size",
            "type": "\"sm\" | \"md\" | undefined",
            "description": "Declared control size.",
            "default": "\"md\""
          },
          {
            "name": "isActive",
            "type": "boolean | undefined",
            "description": "Mark the active navigation item.",
            "default": "false"
          }
        ]
      },
      {
        "name": "SidebarMenuSubItem",
        "description": "Leement composition part; forwards the declared native or primitive props.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLLIElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "value",
            "type": "string | number | readonly string[] | undefined",
            "description": "Value written to native FormData when selected."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; see the linked primitive API."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; see the linked primitive API."
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
            "description": "Native input change event; read event.currentTarget.checked and value."
          }
        ]
      },
      {
        "name": "SidebarProvider",
        "description": "Leement composition part; forwards the declared native or primitive props.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; see the linked primitive API."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; see the linked primitive API."
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
            "description": "Native input change event; read event.currentTarget.checked and value."
          },
          {
            "name": "defaultOpen",
            "type": "boolean | undefined",
            "description": "Initial desktop expanded state in uncontrolled mode.",
            "default": "true"
          },
          {
            "name": "open",
            "type": "boolean | undefined",
            "description": "Controlled desktop expanded state."
          },
          {
            "name": "onOpenChange",
            "type": "((open: boolean) => void) | undefined",
            "description": "Receive desktop expansion changes."
          }
        ]
      },
      {
        "name": "SidebarRail",
        "description": "Leement composition part; forwards the declared native or primitive props.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLButtonElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "disabled",
            "type": "boolean | undefined",
            "description": "Prevents activation while preserving native disabled semantics."
          },
          {
            "name": "name",
            "type": "string | undefined",
            "description": "Unique field name identifying the step and native FormData answers."
          },
          {
            "name": "value",
            "type": "string | number | readonly string[] | undefined",
            "description": "Value written to native FormData when selected."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; see the linked primitive API."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; see the linked primitive API."
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
            "description": "Native input change event; read event.currentTarget.checked and value."
          }
        ]
      },
      {
        "name": "SidebarSeparator",
        "description": "Leement composition part; forwards the declared native or primitive props.",
        "props": [
          {
            "name": "orientation",
            "type": "\"horizontal\" | \"vertical\" | undefined",
            "description": "Either `vertical` or `horizontal`. Defaults to `horizontal`."
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
            "description": "Native defaultValue attribute or callback; see the linked primitive API."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; see the linked primitive API."
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
            "description": "Native input change event; read event.currentTarget.checked and value."
          },
          {
            "name": "asChild",
            "type": "boolean | undefined",
            "description": "Native asChild attribute or callback; see the linked primitive API."
          },
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          }
        ]
      },
      {
        "name": "SidebarTrigger",
        "description": "Leement composition part; forwards the declared native or primitive props.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLButtonElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "disabled",
            "type": "boolean | undefined",
            "description": "Prevents activation while preserving native disabled semantics."
          },
          {
            "name": "name",
            "type": "string | undefined",
            "description": "Unique field name identifying the step and native FormData answers."
          },
          {
            "name": "value",
            "type": "string | number | readonly string[] | undefined",
            "description": "Value written to native FormData when selected."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; see the linked primitive API."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; see the linked primitive API."
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
            "description": "Native input change event; read event.currentTarget.checked and value."
          },
          {
            "name": "variant",
            "type": "\"outline\" | \"primary\" | \"secondary\" | \"ghost\" | \"destructive\" | null | undefined",
            "description": "Visual treatment; see the declared variants."
          },
          {
            "name": "size",
            "type": "\"icon\" | \"default\" | \"sm\" | \"lg\" | \"xs\" | \"icon-sm\" | null | undefined",
            "description": "Declared control size."
          },
          {
            "name": "asChild",
            "type": "boolean | undefined",
            "description": "Native asChild attribute or callback; see the linked primitive API."
          },
          {
            "name": "loading",
            "type": "boolean | undefined",
            "description": "Native loading attribute or callback; see the linked primitive API."
          }
        ]
      },
      {
        "name": "useSidebar",
        "description": "Must be called inside SidebarProvider. Returns state, open/setOpen, openMobile/setOpenMobile, isMobile and toggleSidebar.",
        "props": []
      },
      {
        "name": "sidebarMenuButtonVariants",
        "description": "Class recipe for SidebarMenuButton. Accepts variant, size and className.",
        "props": [
          {
            "name": "variant",
            "type": "\"default\" | \"outline\"",
            "default": "\"default\"",
            "description": "Visual treatment; see the declared variants."
          },
          {
            "name": "size",
            "type": "\"default\" | \"sm\" | \"lg\"",
            "default": "\"default\"",
            "description": "Declared control size."
          }
        ]
      }
    ],
    "notes": [
      "Place SidebarProvider around navigation and content. Use SidebarInset for the content region. CSS variables --sidebar-width and --sidebar-width-icon customize desktop widths; mobile width is 18rem.",
      "The default desktop panel is fixed and the provider is viewport-height. Inside a bounded preview or embedded shell, explicitly override these layout classes.",
      "Controlled open/onOpenChange affect desktop; useSidebar exposes openMobile/setOpenMobile for the mobile sheet. Toggling writes sidebar_state with a seven-day lifetime; the app may read it for initial state."
    ],
    "usage": "\"use client\";\nimport { SidebarProvider, Sidebar, SidebarHeader, SidebarContent, SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarFooter, SidebarInset, SidebarTrigger } from \"@/components/ui/sidebar\";\nimport { Home, Folder, Settings } from \"lucide-react\";\nexport default function SidebarExample(){return <SidebarProvider className=\"relative h-96 min-h-0 w-full overflow-hidden rounded-lg border\" style={{\"--sidebar-width\":\"12rem\"} as React.CSSProperties}><Sidebar collapsible=\"icon\" className=\"absolute! h-full!\"><SidebarHeader><strong className=\"px-2 group-data-[collapsible=icon]:hidden\">Workspace</strong></SidebarHeader><SidebarContent><SidebarGroup><SidebarGroupLabel>Projects</SidebarGroupLabel><SidebarMenu>{[{name:\"Overview\",Icon:Home},{name:\"Projects\",Icon:Folder},{name:\"Settings\",Icon:Settings}].map(({name,Icon},index)=><SidebarMenuItem key={name}><SidebarMenuButton isActive={index===0} tooltip={name}><Icon /><span>{name}</span></SidebarMenuButton></SidebarMenuItem>)}</SidebarMenu></SidebarGroup></SidebarContent><SidebarFooter className=\"group-data-[collapsible=icon]:hidden text-xs text-muted-foreground\">Application navigation</SidebarFooter></Sidebar><SidebarInset className=\"min-w-0\"><header className=\"flex items-center gap-2 border-b p-3\"><SidebarTrigger /><span>Overview</span></header><div className=\"p-4 text-sm text-muted-foreground\">Toggle the sidebar, or press Ctrl/\u2318 B. On small screens it opens as a sheet.</div></SidebarInset></SidebarProvider>;}\n",
    "links": [
      {
        "label": "shadcn sidebar reference",
        "href": "https://ui.shadcn.com/docs/components/base/sidebar"
      },
      {
        "label": "Base UI useRender",
        "href": "https://base-ui.com/react/utils/use-render"
      }
    ]
  },
  "message": {
    "parts": [
      {
        "name": "MessageGroup",
        "description": "Native layout part; forwards native attributes, children and ref.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; see the linked primitive API."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; see the linked primitive API."
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
            "description": "Native input change event; read event.currentTarget.checked and value."
          }
        ]
      },
      {
        "name": "Message",
        "description": "Native layout part; forwards native attributes, children and ref.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; see the linked primitive API."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; see the linked primitive API."
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
            "description": "Native input change event; read event.currentTarget.checked and value."
          },
          {
            "name": "align",
            "type": "\"start\" | \"end\" | undefined",
            "description": "Layout direction for the message: start or end. End reverses avatar placement.",
            "default": "\"start\""
          }
        ]
      },
      {
        "name": "MessageAvatar",
        "description": "Native layout part; forwards native attributes, children and ref.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; see the linked primitive API."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; see the linked primitive API."
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
            "description": "Native input change event; read event.currentTarget.checked and value."
          }
        ]
      },
      {
        "name": "MessageContent",
        "description": "Native layout part; forwards native attributes, children and ref.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; see the linked primitive API."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; see the linked primitive API."
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
            "description": "Native input change event; read event.currentTarget.checked and value."
          }
        ]
      },
      {
        "name": "MessageFooter",
        "description": "Native layout part; forwards native attributes, children and ref.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; see the linked primitive API."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; see the linked primitive API."
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
            "description": "Native input change event; read event.currentTarget.checked and value."
          }
        ]
      },
      {
        "name": "MessageHeader",
        "description": "Native layout part; forwards native attributes, children and ref.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; see the linked primitive API."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; see the linked primitive API."
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
            "description": "Native input change event; read event.currentTarget.checked and value."
          }
        ]
      }
    ],
    "notes": [
      "Layout only: no transport, AI provider or message state. Compose content with Bubble, Avatar or your own native elements."
    ],
    "usage": "\"use client\";\nimport { MessageGroup, Message, MessageAvatar, MessageContent, MessageHeader, MessageFooter } from \"@/components/ui/message\";\nimport { Bubble } from \"@/components/ui/bubble\";\nexport default function MessageExample(){return <MessageGroup className=\"w-full max-w-sm\"><Message><MessageAvatar><span className=\"flex size-8 items-center justify-center text-xs\">LM</span></MessageAvatar><MessageContent><MessageHeader>Leement</MessageHeader><Bubble>Own the source. Keep your product data in your app.</Bubble><MessageFooter>10:30 AM</MessageFooter></MessageContent></Message><Message align=\"end\"><MessageContent><MessageHeader>You</MessageHeader><Bubble variant=\"tinted\">I can customize every part.</Bubble><MessageFooter>Delivered</MessageFooter></MessageContent></Message></MessageGroup>;}\n",
    "links": [
      {
        "label": "shadcn message reference",
        "href": "https://ui.shadcn.com/docs/components/base/message"
      },
      {
        "label": "Native elements (MDN)",
        "href": "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements"
      }
    ]
  },
  "message-scroller": {
    "parts": [
      {
        "name": "MessageScrollerProvider",
        "description": "Leement composition part; forwards the declared native or primitive props.",
        "props": [
          {
            "name": "children",
            "type": "React.ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "autoScroll",
            "type": "boolean | undefined",
            "description": "Follow newly added content while the reader is at the end; scrolling away opts out."
          },
          {
            "name": "defaultScrollPosition",
            "type": "MessageScrollerDefaultScrollPosition | undefined",
            "description": "Initial position: start, end or the last scroll anchor."
          },
          {
            "name": "scrollEdgeThreshold",
            "type": "number | undefined",
            "description": "Distance in CSS pixels used to decide whether the viewport is at an edge."
          },
          {
            "name": "scrollPreviousItemPeek",
            "type": "number | undefined",
            "description": "Space in CSS pixels for context from the preceding turn when anchoring."
          },
          {
            "name": "scrollMargin",
            "type": "number | undefined",
            "description": "Offset in CSS pixels for scroll-to-message positioning."
          }
        ]
      },
      {
        "name": "MessageScroller",
        "description": "Leement composition part; forwards the declared native or primitive props.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; see the linked primitive API."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; see the linked primitive API."
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
            "description": "Native input change event; read event.currentTarget.checked and value."
          }
        ]
      },
      {
        "name": "MessageScrollerViewport",
        "description": "Leement composition part; forwards the declared native or primitive props.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; see the linked primitive API."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; see the linked primitive API."
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
            "description": "Native input change event; read event.currentTarget.checked and value."
          },
          {
            "name": "preserveScrollOnPrepend",
            "type": "boolean | undefined",
            "description": "Keep the current visible message in place when older messages are prepended."
          }
        ]
      },
      {
        "name": "MessageScrollerContent",
        "description": "Leement composition part; forwards the declared native or primitive props.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; see the linked primitive API."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; see the linked primitive API."
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
            "description": "Native input change event; read event.currentTarget.checked and value."
          },
          {
            "name": "spacerClassName",
            "type": "string | undefined",
            "description": "Classes for the primitive-owned anchoring spacer."
          }
        ]
      },
      {
        "name": "MessageScrollerItem",
        "description": "Leement composition part; forwards the declared native or primitive props.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; see the linked primitive API."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; see the linked primitive API."
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
            "description": "Native input change event; read event.currentTarget.checked and value."
          },
          {
            "name": "messageId",
            "type": "string | undefined",
            "description": "Stable identifier used by scrollToMessage and visibility tracking."
          },
          {
            "name": "scrollAnchor",
            "type": "boolean | undefined",
            "description": "Mark a message as a turn anchor for initial positioning and streaming.",
            "default": "false"
          }
        ]
      },
      {
        "name": "MessageScrollerButton",
        "description": "Leement composition part; forwards the declared native or primitive props.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLButtonElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "disabled",
            "type": "boolean | undefined",
            "description": "Prevents activation while preserving native disabled semantics."
          },
          {
            "name": "name",
            "type": "string | undefined",
            "description": "Unique field name identifying the step and native FormData answers."
          },
          {
            "name": "value",
            "type": "string | number | readonly string[] | undefined",
            "description": "Value written to native FormData when selected."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; see the linked primitive API."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; see the linked primitive API."
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
            "description": "Native input change event; read event.currentTarget.checked and value."
          },
          {
            "name": "render",
            "type": "RenderProp<{ active: boolean; direction: \"start\" | \"end\"; }> | undefined",
            "description": "React element or render function receiving merged props and primitive state. Forward props and ref to the actual element."
          },
          {
            "name": "behavior",
            "type": "ScrollBehavior | undefined",
            "description": "smooth uses Motion; auto and instant are immediate.",
            "default": "\"smooth\""
          },
          {
            "name": "direction",
            "type": "MessageScrollerButtonDirection | undefined",
            "description": "Edge targeted by the jump button.",
            "default": "\"end\""
          },
          {
            "name": "variant",
            "type": "\"outline\" | \"primary\" | \"secondary\" | \"ghost\" | \"destructive\" | null | undefined",
            "description": "Visual treatment; see the declared variants.",
            "default": "\"secondary\""
          },
          {
            "name": "size",
            "type": "\"icon\" | \"default\" | \"sm\" | \"lg\" | \"xs\" | \"icon-sm\" | null | undefined",
            "description": "Declared control size.",
            "default": "\"icon-sm\""
          }
        ]
      },
      {
        "name": "useMessageScroller",
        "description": "Returns scrollToStart(options?), scrollToEnd(options?) and scrollToMessage(messageId, options?). Each returns a boolean; false means the viewport/target is unavailable. An empty list can queue a target ID until mounted.",
        "props": [
          {
            "name": "options",
            "type": "{ align?: \"start\" | \"center\" | \"end\" | \"nearest\"; behavior?: ScrollBehavior; scrollMargin?: number }",
            "description": "align and scrollMargin apply to scrollToMessage; behavior defaults auto for commands."
          }
        ]
      },
      {
        "name": "useMessageScrollerScrollable",
        "description": "Returns { start: boolean, end: boolean }, indicating available scroll direction.",
        "props": []
      },
      {
        "name": "useMessageScrollerVisibility",
        "description": "Returns { currentAnchorId: string | null, visibleMessageIds: string[] }. Requires stable messageId values.",
        "props": []
      }
    ],
    "notes": [
      "Requires MessageScrollerProvider. Each provider owns one viewport. Stable messageId values enable anchor commands and visibility tracking.",
      "autoScroll follows the bottom until the reader scrolls away. preserveScrollOnPrepend defaults true. Content is a log; its hidden spacer is owned by the primitive.",
      "Smooth commands and jump buttons use Motion and duration-media. auto/instant commands and prepend restoration are immediate. Wheel, touch, scrolling keys and pointer interaction cancel interpolation and suspend following. Moving down to the end or using the end command resumes following. A missing queued anchor resolves immediately when mounted."
    ],
    "usage": "\"use client\";\nimport { useState } from \"react\";\nimport { MessageScrollerProvider, MessageScroller, MessageScrollerViewport, MessageScrollerContent, MessageScrollerItem, MessageScrollerButton } from \"@/components/ui/message-scroller\";\nimport { Message, MessageContent, MessageHeader } from \"@/components/ui/message\";\nimport { Bubble } from \"@/components/ui/bubble\";\nimport { Button } from \"@/components/ui/button\";\nexport default function MessageScrollerExample(){const [messages,setMessages]=useState(Array.from({length:12},(_,index)=>({id:`message-${index}`,text:`Message ${index+1}: Your application owns the conversation data.`})));return <MessageScrollerProvider autoScroll defaultScrollPosition=\"end\"><div className=\"w-full max-w-sm space-y-3\"><MessageScroller className=\"h-72 rounded-lg border\"><MessageScrollerViewport><MessageScrollerContent className=\"p-4\">{messages.map((message,index)=><MessageScrollerItem key={message.id} messageId={message.id}><Message align={index%2?\"end\":\"start\"}><MessageContent><MessageHeader>{index%2?\"You\":\"Leement\"}</MessageHeader><Bubble>{message.text}</Bubble></MessageContent></Message></MessageScrollerItem>)}</MessageScrollerContent></MessageScrollerViewport><MessageScrollerButton /></MessageScroller><Button variant=\"outline\" onClick={()=>setMessages(current=>[...current,{id:`message-${current.length}`,text:`Message ${current.length+1}: Added without losing your reading position.`}])}>Add message</Button></div></MessageScrollerProvider>;}\n",
    "links": [
      {
        "label": "shadcn message-scroller reference",
        "href": "https://ui.shadcn.com/docs/components/base/message-scroller"
      },
      {
        "label": "@shadcn/react source and types",
        "href": "https://github.com/shadcn-ui/ui/tree/295a1f114a138f23b5dfee0e0c6812394dfeb90c/packages/shadcn-react"
      }
    ]
  },
  "questionnaire": {
    "parts": [
      {
        "name": "Questionnaire",
        "description": "Leement composition part; forwards the declared native or primitive props.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLFormElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "name",
            "type": "string | undefined",
            "description": "Unique field name identifying the step and native FormData answers."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; see the linked primitive API."
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
            "type": "ChangeEventHandler<HTMLFormElement, Element> | undefined",
            "description": "Native input change event; read event.currentTarget.checked and value."
          },
          {
            "name": "defaultItem",
            "type": "string | undefined",
            "description": "Initial active step in uncontrolled mode."
          },
          {
            "name": "item",
            "type": "string | undefined",
            "description": "Controlled active step name."
          },
          {
            "name": "items",
            "type": "readonly QuestionnaireItemDefinition[] | undefined",
            "description": "Ordered step definitions (name, choices, disabled and required) matching rendered Items."
          },
          {
            "name": "onItemChange",
            "type": "((item: string) => void) | undefined",
            "description": "Called with the new active step name."
          },
          {
            "name": "shortcuts",
            "type": "QuestionnaireShortcutMode | undefined",
            "description": "Display and enable letter or number choice shortcuts."
          }
        ]
      },
      {
        "name": "QuestionnaireActions",
        "description": "Leement composition part; forwards the declared native or primitive props.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; see the linked primitive API."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; see the linked primitive API."
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
            "description": "Native input change event; read event.currentTarget.checked and value."
          }
        ]
      },
      {
        "name": "QuestionnaireChoice",
        "description": "Leement composition part; forwards the declared native or primitive props.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLLabelElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "defaultChecked",
            "type": "boolean | undefined",
            "description": "Initial selected state in uncontrolled mode."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; see the linked primitive API."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; see the linked primitive API."
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
            "name": "render",
            "type": "RenderProp<{ checked: boolean; disabled: boolean; invalid: boolean; shortcut: string | null; type: \"checkbox\" | \"radio\"; }> | undefined",
            "description": "React element or render function receiving merged props and primitive state. Forward props and ref to the actual element."
          },
          {
            "name": "checked",
            "type": "boolean | undefined",
            "description": "Controlled selected state."
          },
          {
            "name": "disabled",
            "type": "boolean | undefined",
            "description": "Prevents activation while preserving native disabled semantics."
          },
          {
            "name": "onChange",
            "type": "React.ChangeEventHandler<HTMLInputElement, Element> | undefined",
            "description": "Native input change event; read event.currentTarget.checked and value."
          },
          {
            "name": "value",
            "type": "string",
            "description": "Value written to native FormData when selected.",
            "required": true
          }
        ]
      },
      {
        "name": "QuestionnaireChoiceDescription",
        "description": "Leement composition part; forwards the declared native or primitive props.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLSpanElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; see the linked primitive API."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; see the linked primitive API."
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
            "description": "Native input change event; read event.currentTarget.checked and value."
          }
        ]
      },
      {
        "name": "QuestionnaireChoices",
        "description": "Leement composition part; forwards the declared native or primitive props.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; see the linked primitive API."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; see the linked primitive API."
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
            "description": "Native input change event; read event.currentTarget.checked and value."
          },
          {
            "name": "render",
            "type": "RenderProp<{ shortcuts: QuestionnaireShortcutMode | null; }> | undefined",
            "description": "React element or render function receiving merged props and primitive state. Forward props and ref to the actual element."
          }
        ]
      },
      {
        "name": "QuestionnaireDescription",
        "description": "Leement composition part; forwards the declared native or primitive props.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLParagraphElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; see the linked primitive API."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; see the linked primitive API."
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
            "description": "Native input change event; read event.currentTarget.checked and value."
          },
          {
            "name": "render",
            "type": "RenderProp<RenderState> | undefined",
            "description": "React element or render function receiving merged props and primitive state. Forward props and ref to the actual element."
          }
        ]
      },
      {
        "name": "QuestionnaireError",
        "description": "Leement composition part; forwards the declared native or primitive props.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLParagraphElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; see the linked primitive API."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; see the linked primitive API."
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
            "description": "Native input change event; read event.currentTarget.checked and value."
          },
          {
            "name": "render",
            "type": "RenderProp<Pick<{ active: boolean; disabled: boolean; invalid: boolean; multiple: boolean; required: boolean; status: QuestionnaireItemStatus; }, \"invalid\">> | undefined",
            "description": "React element or render function receiving merged props and primitive state. Forward props and ref to the actual element."
          }
        ]
      },
      {
        "name": "QuestionnaireInput",
        "description": "Leement composition part; forwards the declared native or primitive props.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLInputElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; see the linked primitive API."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; see the linked primitive API."
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
            "type": "ChangeEventHandler<HTMLInputElement, HTMLInputElement> | undefined",
            "description": "Native input change event; read event.currentTarget.checked and value."
          },
          {
            "name": "disabled",
            "type": "boolean | undefined",
            "description": "Prevents activation while preserving native disabled semantics."
          },
          {
            "name": "value",
            "type": "string | number | readonly string[] | undefined",
            "description": "Value written to native FormData when selected."
          },
          {
            "name": "render",
            "type": "RenderProp<{ disabled: boolean; filled: boolean; invalid: boolean; }> | undefined",
            "description": "React element or render function receiving merged props and primitive state. Forward props and ref to the actual element."
          },
          {
            "name": "type",
            "type": "QuestionnaireInputType | undefined",
            "description": "Native type attribute or callback; see the linked primitive API."
          }
        ]
      },
      {
        "name": "QuestionnaireItem",
        "description": "Leement composition part; forwards the declared native or primitive props.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLFieldSetElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; see the linked primitive API."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; see the linked primitive API."
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
            "description": "Native input change event; read event.currentTarget.checked and value."
          },
          {
            "name": "disabled",
            "type": "boolean | undefined",
            "description": "Prevents activation while preserving native disabled semantics."
          },
          {
            "name": "invalid",
            "type": "boolean | undefined",
            "description": "Explicitly mark this step invalid; the primitive also validates required answers."
          },
          {
            "name": "name",
            "type": "string",
            "description": "Unique field name identifying the step and native FormData answers.",
            "required": true
          },
          {
            "name": "multiple",
            "type": "boolean | undefined",
            "description": "Allow multiple checkbox answers instead of a radio group."
          },
          {
            "name": "onStatusChange",
            "type": "((status: QuestionnaireItemStatus) => void) | undefined",
            "description": "Receive answered, unanswered or skipped status changes."
          },
          {
            "name": "required",
            "type": "boolean | undefined",
            "description": "Require an answer before advancing or submitting."
          }
        ]
      },
      {
        "name": "QuestionnaireNext",
        "description": "Leement composition part; forwards the declared native or primitive props.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLButtonElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "disabled",
            "type": "boolean | undefined",
            "description": "Prevents activation while preserving native disabled semantics."
          },
          {
            "name": "name",
            "type": "string | undefined",
            "description": "Unique field name identifying the step and native FormData answers."
          },
          {
            "name": "value",
            "type": "string | number | readonly string[] | undefined",
            "description": "Value written to native FormData when selected."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; see the linked primitive API."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; see the linked primitive API."
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
            "description": "Native input change event; read event.currentTarget.checked and value."
          },
          {
            "name": "render",
            "type": "RenderProp<{ disabled: boolean; shortcut: \"Enter\" | null; status: QuestionnaireItemStatus | null; visible: boolean; }> | undefined",
            "description": "React element or render function receiving merged props and primitive state. Forward props and ref to the actual element."
          },
          {
            "name": "variant",
            "type": "\"outline\" | \"primary\" | \"secondary\" | \"ghost\" | \"destructive\" | null | undefined",
            "description": "Visual treatment; see the declared variants.",
            "default": "\"primary\""
          },
          {
            "name": "size",
            "type": "\"icon\" | \"default\" | \"sm\" | \"lg\" | \"xs\" | \"icon-sm\" | null | undefined",
            "description": "Declared control size.",
            "default": "\"default\""
          }
        ]
      },
      {
        "name": "QuestionnairePrevious",
        "description": "Leement composition part; forwards the declared native or primitive props.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLButtonElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "disabled",
            "type": "boolean | undefined",
            "description": "Prevents activation while preserving native disabled semantics."
          },
          {
            "name": "name",
            "type": "string | undefined",
            "description": "Unique field name identifying the step and native FormData answers."
          },
          {
            "name": "value",
            "type": "string | number | readonly string[] | undefined",
            "description": "Value written to native FormData when selected."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; see the linked primitive API."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; see the linked primitive API."
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
            "description": "Native input change event; read event.currentTarget.checked and value."
          },
          {
            "name": "render",
            "type": "RenderProp<{ disabled: boolean; shortcut: \"Enter\" | null; status: QuestionnaireItemStatus | null; visible: boolean; }> | undefined",
            "description": "React element or render function receiving merged props and primitive state. Forward props and ref to the actual element."
          },
          {
            "name": "variant",
            "type": "\"outline\" | \"primary\" | \"secondary\" | \"ghost\" | \"destructive\" | null | undefined",
            "description": "Visual treatment; see the declared variants.",
            "default": "\"outline\""
          },
          {
            "name": "size",
            "type": "\"icon\" | \"default\" | \"sm\" | \"lg\" | \"xs\" | \"icon-sm\" | null | undefined",
            "description": "Declared control size.",
            "default": "\"default\""
          }
        ]
      },
      {
        "name": "QuestionnaireProgress",
        "description": "Leement composition part; forwards the declared native or primitive props.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; see the linked primitive API."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; see the linked primitive API."
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
            "description": "Native input change event; read event.currentTarget.checked and value."
          },
          {
            "name": "render",
            "type": "RenderProp<{ current: number; first: boolean; last: boolean; total: number; }> | undefined",
            "description": "React element or render function receiving merged props and primitive state. Forward props and ref to the actual element."
          }
        ]
      },
      {
        "name": "QuestionnaireSkip",
        "description": "Leement composition part; forwards the declared native or primitive props.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLButtonElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "disabled",
            "type": "boolean | undefined",
            "description": "Prevents activation while preserving native disabled semantics."
          },
          {
            "name": "name",
            "type": "string | undefined",
            "description": "Unique field name identifying the step and native FormData answers."
          },
          {
            "name": "value",
            "type": "string | number | readonly string[] | undefined",
            "description": "Value written to native FormData when selected."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; see the linked primitive API."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; see the linked primitive API."
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
            "description": "Native input change event; read event.currentTarget.checked and value."
          },
          {
            "name": "render",
            "type": "RenderProp<{ disabled: boolean; shortcut: \"Enter\" | null; status: QuestionnaireItemStatus | null; visible: boolean; }> | undefined",
            "description": "React element or render function receiving merged props and primitive state. Forward props and ref to the actual element."
          },
          {
            "name": "variant",
            "type": "\"outline\" | \"primary\" | \"secondary\" | \"ghost\" | \"destructive\" | null | undefined",
            "description": "Visual treatment; see the declared variants.",
            "default": "\"outline\""
          },
          {
            "name": "size",
            "type": "\"icon\" | \"default\" | \"sm\" | \"lg\" | \"xs\" | \"icon-sm\" | null | undefined",
            "description": "Declared control size.",
            "default": "\"default\""
          }
        ]
      },
      {
        "name": "QuestionnaireSubmit",
        "description": "Leement composition part; forwards the declared native or primitive props.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLButtonElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "disabled",
            "type": "boolean | undefined",
            "description": "Prevents activation while preserving native disabled semantics."
          },
          {
            "name": "name",
            "type": "string | undefined",
            "description": "Unique field name identifying the step and native FormData answers."
          },
          {
            "name": "value",
            "type": "string | number | readonly string[] | undefined",
            "description": "Value written to native FormData when selected."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; see the linked primitive API."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; see the linked primitive API."
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
            "description": "Native input change event; read event.currentTarget.checked and value."
          },
          {
            "name": "render",
            "type": "RenderProp<{ disabled: boolean; shortcut: \"Enter\" | null; status: QuestionnaireItemStatus | null; visible: boolean; }> | undefined",
            "description": "React element or render function receiving merged props and primitive state. Forward props and ref to the actual element."
          },
          {
            "name": "variant",
            "type": "\"outline\" | \"primary\" | \"secondary\" | \"ghost\" | \"destructive\" | null | undefined",
            "description": "Visual treatment; see the declared variants.",
            "default": "\"primary\""
          },
          {
            "name": "size",
            "type": "\"icon\" | \"default\" | \"sm\" | \"lg\" | \"xs\" | \"icon-sm\" | null | undefined",
            "description": "Declared control size.",
            "default": "\"default\""
          }
        ]
      },
      {
        "name": "QuestionnaireTitle",
        "description": "Leement composition part; forwards the declared native or primitive props.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLLegendElement> | undefined",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[] | undefined",
            "description": "Native defaultValue attribute or callback; see the linked primitive API."
          },
          {
            "name": "className",
            "type": "string | undefined",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string | undefined",
            "description": "Native id attribute or callback; see the linked primitive API."
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
            "description": "Native input change event; read event.currentTarget.checked and value."
          },
          {
            "name": "render",
            "type": "RenderProp<RenderState> | undefined",
            "description": "React element or render function receiving merged props and primitive state. Forward props and ref to the actual element."
          }
        ]
      }
    ],
    "notes": [
      "Questionnaire renders a form; Item renders fieldset and Title renders legend. Supply unique names and the same items definitions used to render steps.",
      "Choices render native radio or checkbox inputs; multiple changes them to checkboxes. Required unanswered steps show validation. Previous/Skip/Next/Submit visibility and shortcuts follow the primitive state.",
      "Read answers from native FormData in onSubmit and implement persistence in the application. render composes a single element; the supplied ref must reach that native element."
    ],
    "usage": "\"use client\"\n\nimport * as React from \"react\"\nimport { useState } from \"react\"\n\nimport {\n  Questionnaire,\n  QuestionnaireActions,\n  QuestionnaireChoice,\n  QuestionnaireChoices,\n  QuestionnaireDescription,\n  QuestionnaireError,\n  QuestionnaireInput,\n  QuestionnaireItem,\n  QuestionnaireNext,\n  QuestionnairePrevious,\n  QuestionnaireProgress,\n  QuestionnaireSkip,\n  QuestionnaireSubmit,\n  QuestionnaireTitle,\n} from \"@/components/ui/questionnaire\"\n\nconst questionnaireItems = [\n  {\n    choices: [\n      {\n        description: \"Show what the agent ran and what came back.\",\n        label: \"Tool call timeline\",\n        value: \"tool-calls\",\n      },\n      {\n        description: \"Ask before sensitive or destructive actions.\",\n        label: \"Approval checkpoints\",\n        value: \"approvals\",\n      },\n      {\n        description: \"Make delegated work and results easier to follow.\",\n        label: \"Sub-agent handoffs\",\n        value: \"handoffs\",\n      },\n    ],\n    description: \"Choose a direction or describe another task.\",\n    input: {\n      label: \"Another agent feature\",\n      placeholder: \"Describe another feature\u2026\",\n    },\n    name: \"direction\",\n    required: true,\n    title: \"What should the agent build next?\",\n  },\n  {\n    choices: [\n      { label: \"Progress\", value: \"progress\" },\n      { label: \"Decisions\", value: \"decisions\" },\n      { label: \"Risks\", value: \"risks\" },\n      { label: \"Next step\", value: \"next-step\" },\n    ],\n    description: \"Select all that apply, or skip this question.\",\n    multiple: true,\n    name: \"signals\",\n    required: false,\n    title: \"What should every progress update include?\",\n  },\n  {\n    choices: [\n      { label: \"Start now\", value: \"now\" },\n      { label: \"Next development cycle\", value: \"next-cycle\" },\n      { label: \"Add it to the backlog\", value: \"backlog\" },\n    ],\n    description: \"Choose when the agent should begin the work.\",\n    name: \"timing\",\n    required: true,\n    title: \"When should work begin?\",\n  },\n] as const\n\nexport default function QuestionnaireExample() {\n  const [result, setResult] = useState(\"\");\n  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {\n    event.preventDefault()\n\n    const formData = new FormData(event.currentTarget)\n    const answers = {\n      direction: formData.get(\"direction\"),\n      signals: formData.getAll(\"signals\"),\n      timing: formData.get(\"timing\"),\n    }\n\n    setResult(`Direction: ${answers.direction ?? \"None\"} \u00b7 Progress signals: ${answers.signals.join(\", \") || \"None\"} \u00b7 Timing: ${answers.timing ?? \"None\"}`);\n  }\n\n  return (\n    <div className=\"w-full max-w-md space-y-4\"><Questionnaire\n      className=\"mx-auto max-w-md\"\n      defaultItem=\"direction\"\n      items={questionnaireItems}\n      shortcuts=\"letters\"\n      onSubmit={handleSubmit}\n    >\n      <QuestionnaireProgress />\n      {questionnaireItems.map((question) => (\n        <QuestionnaireItem\n          key={question.name}\n          multiple={\"multiple\" in question && question.multiple}\n          name={question.name}\n          required={question.required}\n        >\n          <QuestionnaireTitle>{question.title}</QuestionnaireTitle>\n          <QuestionnaireDescription>\n            {question.description}\n          </QuestionnaireDescription>\n          <QuestionnaireChoices>\n            {question.choices.map((choice) => (\n              <QuestionnaireChoice key={choice.value} value={choice.value}>\n                <span className=\"font-medium\">{choice.label}</span>\n                {\"description\" in choice ? (\n                  <span className=\"text-muted-foreground\">\n                    {choice.description}\n                  </span>\n                ) : null}\n              </QuestionnaireChoice>\n            ))}\n            {\"input\" in question ? (\n              <QuestionnaireInput\n                aria-label={question.input.label}\n                placeholder={question.input.placeholder}\n              />\n            ) : null}\n          </QuestionnaireChoices>\n          <QuestionnaireError />\n        </QuestionnaireItem>\n      ))}\n      <QuestionnaireActions>\n        <QuestionnairePrevious />\n        <QuestionnaireSkip />\n        <QuestionnaireNext>Next</QuestionnaireNext>\n        <QuestionnaireSubmit>Save plan</QuestionnaireSubmit>\n      </QuestionnaireActions>\n    </Questionnaire><p role=\"status\" className=\"text-sm text-muted-foreground\">{result}</p></div>\n  )\n}\n",
    "links": [
      {
        "label": "shadcn questionnaire reference",
        "href": "https://ui.shadcn.com/docs/components/base/questionnaire"
      },
      {
        "label": "@shadcn/react source and types",
        "href": "https://github.com/shadcn-ui/ui/tree/295a1f114a138f23b5dfee0e0c6812394dfeb90c/packages/shadcn-react"
      }
    ]
  }
};
