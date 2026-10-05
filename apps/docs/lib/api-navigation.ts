import type { ApiReference } from "./api-reference";

export const navigationApiReferences = {
  "carousel": {
    "parts": [
      {
        "name": "Carousel",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement>",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[]",
            "description": "Native defaultValue attribute or callback; see the linked primitive API."
          },
          {
            "name": "className",
            "type": "string",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string",
            "description": "Native id attribute or callback; see the linked primitive API."
          },
          {
            "name": "aria-label",
            "type": "string",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "ChangeEventHandler<HTMLDivElement, Element>",
            "description": "Native onChange attribute or callback; see the linked primitive API."
          },
          {
            "name": "opts",
            "type": "Partial<OptionsType>",
            "description": "Embla alignment, looping, RTL and slide layout options. Visual animation duration is owned by Motion."
          },
          {
            "name": "plugins",
            "type": "CreatePluginType<LoosePluginType, {}>[]",
            "description": "Embla plugins such as Autoplay. Install each plugin separately; scheduling is plugin-owned."
          },
          {
            "name": "orientation",
            "type": "\"horizontal\" | \"vertical\"",
            "description": "Horizontal or vertical layout; keyboard movement follows this axis.",
            "default": "\"horizontal\""
          },
          {
            "name": "setApi",
            "type": "((api: CarouselApi) => void)",
            "description": "Receive the initialized Embla API for selection, scroll progress and programmatic commands."
          }
        ]
      },
      {
        "name": "CarouselContent",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement>",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[]",
            "description": "Native defaultValue attribute or callback; see the linked primitive API."
          },
          {
            "name": "className",
            "type": "string",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string",
            "description": "Native id attribute or callback; see the linked primitive API."
          },
          {
            "name": "aria-label",
            "type": "string",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "ChangeEventHandler<HTMLDivElement, Element>",
            "description": "Native onChange attribute or callback; see the linked primitive API."
          }
        ]
      },
      {
        "name": "CarouselItem",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement>",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[]",
            "description": "Native defaultValue attribute or callback; see the linked primitive API."
          },
          {
            "name": "className",
            "type": "string",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string",
            "description": "Native id attribute or callback; see the linked primitive API."
          },
          {
            "name": "aria-label",
            "type": "string",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "ChangeEventHandler<HTMLDivElement, Element>",
            "description": "Native onChange attribute or callback; see the linked primitive API."
          }
        ]
      },
      {
        "name": "CarouselPrevious",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLButtonElement>",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "disabled",
            "type": "boolean",
            "description": "Native disabled attribute or callback; see the linked primitive API."
          },
          {
            "name": "name",
            "type": "string",
            "description": "Native name attribute or callback; see the linked primitive API."
          },
          {
            "name": "value",
            "type": "string | number | readonly string[]",
            "description": "Native value attribute or callback; see the linked primitive API."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[]",
            "description": "Native defaultValue attribute or callback; see the linked primitive API."
          },
          {
            "name": "className",
            "type": "string",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string",
            "description": "Native id attribute or callback; see the linked primitive API."
          },
          {
            "name": "aria-label",
            "type": "string",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "ChangeEventHandler<HTMLButtonElement, Element>",
            "description": "Native onChange attribute or callback; see the linked primitive API."
          },
          {
            "name": "variant",
            "type": "\"primary\" | \"secondary\" | \"outline\" | \"ghost\" | \"destructive\" | null",
            "description": "Leement visual role; see the listed supported values.",
            "default": "\"outline\""
          },
          {
            "name": "size",
            "type": "\"xs\" | \"sm\" | \"default\" | \"lg\" | \"icon\" | \"icon-sm\" | null",
            "description": "Leement control height and padding.",
            "default": "\"icon-sm\""
          },
          {
            "name": "asChild",
            "type": "boolean",
            "description": "Compose Button behavior into one native child element."
          },
          {
            "name": "loading",
            "type": "boolean",
            "description": "Mark the button busy and prevent activation."
          }
        ]
      },
      {
        "name": "CarouselNext",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLButtonElement>",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "disabled",
            "type": "boolean",
            "description": "Native disabled attribute or callback; see the linked primitive API."
          },
          {
            "name": "name",
            "type": "string",
            "description": "Native name attribute or callback; see the linked primitive API."
          },
          {
            "name": "value",
            "type": "string | number | readonly string[]",
            "description": "Native value attribute or callback; see the linked primitive API."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[]",
            "description": "Native defaultValue attribute or callback; see the linked primitive API."
          },
          {
            "name": "className",
            "type": "string",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string",
            "description": "Native id attribute or callback; see the linked primitive API."
          },
          {
            "name": "aria-label",
            "type": "string",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "ChangeEventHandler<HTMLButtonElement, Element>",
            "description": "Native onChange attribute or callback; see the linked primitive API."
          },
          {
            "name": "variant",
            "type": "\"primary\" | \"secondary\" | \"outline\" | \"ghost\" | \"destructive\" | null",
            "description": "Leement visual role; see the listed supported values.",
            "default": "\"outline\""
          },
          {
            "name": "size",
            "type": "\"xs\" | \"sm\" | \"default\" | \"lg\" | \"icon\" | \"icon-sm\" | null",
            "description": "Leement control height and padding.",
            "default": "\"icon-sm\""
          },
          {
            "name": "asChild",
            "type": "boolean",
            "description": "Compose Button behavior into one native child element."
          },
          {
            "name": "loading",
            "type": "boolean",
            "description": "Mark the button busy and prevent activation."
          }
        ]
      },
      {
        "name": "useCarousel",
        "description": "Call inside Carousel. Returns carouselRef, api, orientation, opts/plugins, scrollPrev/scrollNext and canScrollPrev/canScrollNext. Throws outside the provider. Commands use the same Motion bridge as the navigation buttons.",
        "props": []
      },
      {
        "name": "CarouselApi",
        "description": "Exported Embla API type (or undefined before initialization). setApi receives the initialized API. Supports scrollTo(index, jump?), scrollNext(jump?), scrollPrev(jump?), selectedScrollSnap(), scrollSnapList(), scrollProgress(), on(event, handler) and off(event, handler). Clean up event subscriptions. See the linked Embla API for all methods.",
        "props": []
      }
    ],
    "links": [
      {
        "label": "Primitive API reference",
        "href": "https://www.embla-carousel.com/api/"
      }
    ],
    "notes": [
      "Native attributes and aria-* attributes are forwarded to the rendered element. Component source owns Leement styling; the linked primitive documents deeper behavior.",
      "Embla plugins own scheduling and layout; programmatic slide transitions use Motion and theme timing. opts.duration is fixed at 0 to avoid a second animation engine. Keyboard direction follows orientation and opts.direction."
    ]
  },
  "context-menu": {
    "parts": [
      {
        "name": "ContextMenu",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "onOpenChange",
            "type": "((open: boolean, eventDetails: ContextMenuRoot.ChangeEventDetails) => void)",
            "description": "Event handler called when the menu is opened or closed."
          },
          {
            "name": "children",
            "type": "React.ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "disabled",
            "type": "boolean",
            "description": "Whether the component should ignore user interaction.",
            "default": "false"
          },
          {
            "name": "defaultOpen",
            "type": "boolean",
            "description": "Whether the menu is initially open.\n\nTo render a controlled menu, use the `open` prop instead.",
            "default": "false"
          },
          {
            "name": "loopFocus",
            "type": "boolean",
            "description": "Whether to loop keyboard focus back to the first item\nwhen the end of the list is reached while using the arrow keys.",
            "default": "true"
          },
          {
            "name": "highlightItemOnHover",
            "type": "boolean",
            "description": "Whether moving the pointer over items should highlight them.\nDisabling this prop allows CSS `:hover` to be differentiated from the `:focus` (`data-highlighted`) state.",
            "default": "true"
          },
          {
            "name": "onOpenChangeComplete",
            "type": "((open: boolean) => void)",
            "description": "Event handler called after any animations complete when the menu is opened or closed."
          },
          {
            "name": "open",
            "type": "boolean",
            "description": "Whether the menu is currently open."
          },
          {
            "name": "orientation",
            "type": "MenuRootOrientation",
            "description": "The visual orientation of the menu.\nControls whether roving focus uses up/down or left/right arrow keys.",
            "default": "'vertical'"
          },
          {
            "name": "closeParentOnEsc",
            "type": "boolean",
            "description": "When in a submenu, determines whether pressing the Escape key\ncloses the entire menu, or only the current child menu.",
            "default": "false"
          },
          {
            "name": "actionsRef",
            "type": "React.RefObject<MenuRootActions | null>",
            "description": "A ref to imperative actions.\n- `unmount`: Manually unmounts the menu.\n  Call this after any externally controlled closing animation finishes.\n- `close`: When specified, the menu can be closed imperatively."
          }
        ]
      },
      {
        "name": "ContextMenuTrigger",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement>",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "id",
            "type": "string",
            "description": "Native id attribute or callback; see the linked primitive API."
          },
          {
            "name": "aria-label",
            "type": "string",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLDivElement, Element>>) => void)",
            "description": "Native onChange attribute or callback; see the linked primitive API."
          },
          {
            "name": "className",
            "type": "string | ((state: ContextMenuTriggerState) => string | undefined)",
            "description": "CSS class applied to the element, or a function that\nreturns a class based on the component's state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, ContextMenuTriggerState>",
            "description": "Allows you to replace the component's HTML element\nwith a different tag, or compose it with another component.\n\nAccepts a `ReactElement` or a function that returns the element to render."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: ContextMenuTriggerState) => React.CSSProperties | undefined)",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          }
        ]
      },
      {
        "name": "ContextMenuContent",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "children",
            "type": "React.ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "id",
            "type": "string",
            "description": "Native id attribute or callback; see the linked primitive API."
          },
          {
            "name": "finalFocus",
            "type": "boolean | React.RefObject<HTMLElement | null> | ((closeType: InteractionType) => boolean | HTMLElement | null | void)",
            "description": "Determines the element to focus when the menu is closed.\n\n- `false`: Do not move focus.\n- `true`: Move focus based on the default behavior (trigger or previously focused element).\n- `RefObject`: Move focus to the ref element.\n- `function`: Called with the interaction type (`mouse`, `touch`, `pen`, or `keyboard`).\n  Return an element to focus, `true` to use the default behavior, or `false`/`undefined` to do nothing."
          },
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement>",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "aria-label",
            "type": "string",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLDivElement, Element>>) => void)",
            "description": "Native onChange attribute or callback; see the linked primitive API."
          },
          {
            "name": "className",
            "type": "string | ((state: ContextMenuPopupState) => string | undefined)",
            "description": "CSS class applied to the element, or a function that\nreturns a class based on the component's state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, ContextMenuPopupState>",
            "description": "Allows you to replace the component's HTML element\nwith a different tag, or compose it with another component.\n\nAccepts a `ReactElement` or a function that returns the element to render."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: ContextMenuPopupState) => React.CSSProperties | undefined)",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          },
          {
            "name": "align",
            "type": "Align",
            "description": "How to align the popup relative to the specified side.",
            "default": "\"start\""
          },
          {
            "name": "alignOffset",
            "type": "number | OffsetFunction",
            "description": "Additional offset along the alignment axis in pixels.\nAlso accepts a function that returns the offset to read the dimensions of the anchor\nand positioner elements, along with its side and alignment.\n\nThe function takes a `data` object parameter with the following properties:\n- `data.anchor`: the dimensions of the anchor element with properties `width` and `height`.\n- `data.positioner`: the dimensions of the positioner element with properties `width` and `height`.\n- `data.side`: which side of the anchor element the positioner is aligned against.\n- `data.align`: how the positioner is aligned relative to the specified side.",
            "default": "4"
          },
          {
            "name": "side",
            "type": "Side",
            "description": "Which side of the anchor element to align the popup against.\nMay automatically change to avoid collisions.",
            "default": "\"right\""
          },
          {
            "name": "sideOffset",
            "type": "number | OffsetFunction",
            "description": "Distance between the anchor and the popup in pixels.\nAlso accepts a function that returns the distance to read the dimensions of the anchor\nand positioner elements, along with its side and alignment.\n\nThe function takes a `data` object parameter with the following properties:\n- `data.anchor`: the dimensions of the anchor element with properties `width` and `height`.\n- `data.positioner`: the dimensions of the positioner element with properties `width` and `height`.\n- `data.side`: which side of the anchor element the positioner is aligned against.\n- `data.align`: how the positioner is aligned relative to the specified side.",
            "default": "0"
          }
        ]
      },
      {
        "name": "ContextMenuItem",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "onClick",
            "type": "((event: BaseUIEvent<React.MouseEvent<HTMLDivElement, MouseEvent>>) => void)",
            "description": "The click handler for the menu item."
          },
          {
            "name": "disabled",
            "type": "boolean",
            "description": "Whether the component should ignore user interaction.",
            "default": "false"
          },
          {
            "name": "label",
            "type": "string",
            "description": "Overrides the text label to use when the item is matched during keyboard text navigation."
          },
          {
            "name": "id",
            "type": "string",
            "description": "Native id attribute or callback; see the linked primitive API."
          },
          {
            "name": "closeOnClick",
            "type": "boolean",
            "description": "Whether to close the menu when the item is clicked.",
            "default": "true"
          },
          {
            "name": "nativeButton",
            "type": "boolean",
            "description": "Whether the component renders a native `<button>` element when replacing it\nvia the `render` prop.\nSet to `true` if the rendered element is a native button.",
            "default": "false"
          },
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement>",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "aria-label",
            "type": "string",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLDivElement, Element>>) => void)",
            "description": "Native onChange attribute or callback; see the linked primitive API."
          },
          {
            "name": "className",
            "type": "string | ((state: ContextMenuItemState) => string | undefined)",
            "description": "CSS class applied to the element, or a function that\nreturns a class based on the component's state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, ContextMenuItemState>",
            "description": "Allows you to replace the component's HTML element\nwith a different tag, or compose it with another component.\n\nAccepts a `ReactElement` or a function that returns the element to render."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: ContextMenuItemState) => React.CSSProperties | undefined)",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          },
          {
            "name": "inset",
            "type": "boolean",
            "description": "Native inset attribute or callback; see the linked primitive API."
          },
          {
            "name": "variant",
            "type": "\"destructive\" | \"default\"",
            "description": "Leement visual role; see the listed supported values.",
            "default": "\"default\""
          }
        ]
      },
      {
        "name": "ContextMenuCheckboxItem",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "checked",
            "type": "boolean",
            "description": "Whether the checkbox item is currently ticked.\n\nTo render an uncontrolled checkbox item, use the `defaultChecked` prop instead."
          },
          {
            "name": "defaultChecked",
            "type": "boolean",
            "description": "Whether the checkbox item is initially ticked.\n\nTo render a controlled checkbox item, use the `checked` prop instead.",
            "default": "false"
          },
          {
            "name": "onCheckedChange",
            "type": "((checked: boolean, eventDetails: MenuCheckboxItem.ChangeEventDetails) => void)",
            "description": "Event handler called when the checkbox item is ticked or unticked."
          },
          {
            "name": "onClick",
            "type": "((event: BaseUIEvent<React.MouseEvent<HTMLDivElement, MouseEvent>>) => void)",
            "description": "The click handler for the menu item."
          },
          {
            "name": "disabled",
            "type": "boolean",
            "description": "Whether the component should ignore user interaction.",
            "default": "false"
          },
          {
            "name": "label",
            "type": "string",
            "description": "Overrides the text label to use when the item is matched during keyboard text navigation."
          },
          {
            "name": "id",
            "type": "string",
            "description": "Native id attribute or callback; see the linked primitive API."
          },
          {
            "name": "closeOnClick",
            "type": "boolean",
            "description": "Whether to close the menu when the item is clicked.",
            "default": "false"
          },
          {
            "name": "nativeButton",
            "type": "boolean",
            "description": "Whether the component renders a native `<button>` element when replacing it\nvia the `render` prop.\nSet to `true` if the rendered element is a native button.",
            "default": "false"
          },
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement>",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "aria-label",
            "type": "string",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLDivElement, Element>>) => void)",
            "description": "Native onChange attribute or callback; see the linked primitive API."
          },
          {
            "name": "className",
            "type": "string | ((state: ContextMenuCheckboxItemState) => string | undefined)",
            "description": "CSS class applied to the element, or a function that\nreturns a class based on the component's state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, ContextMenuCheckboxItemState>",
            "description": "Allows you to replace the component's HTML element\nwith a different tag, or compose it with another component.\n\nAccepts a `ReactElement` or a function that returns the element to render."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: ContextMenuCheckboxItemState) => React.CSSProperties | undefined)",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          },
          {
            "name": "inset",
            "type": "boolean",
            "description": "Native inset attribute or callback; see the linked primitive API."
          }
        ]
      },
      {
        "name": "ContextMenuRadioItem",
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
            "type": "((event: BaseUIEvent<React.MouseEvent<HTMLDivElement, MouseEvent>>) => void)",
            "description": "The click handler for the menu item."
          },
          {
            "name": "disabled",
            "type": "boolean",
            "description": "Whether the component should ignore user interaction.",
            "default": "false"
          },
          {
            "name": "label",
            "type": "string",
            "description": "Overrides the text label to use when the item is matched during keyboard text navigation."
          },
          {
            "name": "id",
            "type": "string",
            "description": "Native id attribute or callback; see the linked primitive API."
          },
          {
            "name": "closeOnClick",
            "type": "boolean",
            "description": "Whether to close the menu when the item is clicked.",
            "default": "false"
          },
          {
            "name": "nativeButton",
            "type": "boolean",
            "description": "Whether the component renders a native `<button>` element when replacing it\nvia the `render` prop.\nSet to `true` if the rendered element is a native button.",
            "default": "false"
          },
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement>",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "aria-label",
            "type": "string",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLDivElement, Element>>) => void)",
            "description": "Native onChange attribute or callback; see the linked primitive API."
          },
          {
            "name": "className",
            "type": "string | ((state: ContextMenuRadioItemState) => string | undefined)",
            "description": "CSS class applied to the element, or a function that\nreturns a class based on the component's state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, ContextMenuRadioItemState>",
            "description": "Allows you to replace the component's HTML element\nwith a different tag, or compose it with another component.\n\nAccepts a `ReactElement` or a function that returns the element to render."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: ContextMenuRadioItemState) => React.CSSProperties | undefined)",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          },
          {
            "name": "inset",
            "type": "boolean",
            "description": "Native inset attribute or callback; see the linked primitive API."
          }
        ]
      },
      {
        "name": "ContextMenuLabel",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement>",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "id",
            "type": "string",
            "description": "Native id attribute or callback; see the linked primitive API."
          },
          {
            "name": "aria-label",
            "type": "string",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLDivElement, Element>>) => void)",
            "description": "Native onChange attribute or callback; see the linked primitive API."
          },
          {
            "name": "className",
            "type": "string | ((state: ContextMenuGroupLabelState) => string | undefined)",
            "description": "CSS class applied to the element, or a function that\nreturns a class based on the component's state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, ContextMenuGroupLabelState>",
            "description": "Allows you to replace the component's HTML element\nwith a different tag, or compose it with another component.\n\nAccepts a `ReactElement` or a function that returns the element to render."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: ContextMenuGroupLabelState) => React.CSSProperties | undefined)",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          },
          {
            "name": "inset",
            "type": "boolean",
            "description": "Native inset attribute or callback; see the linked primitive API."
          }
        ]
      },
      {
        "name": "ContextMenuSeparator",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "orientation",
            "type": "Orientation",
            "description": "The orientation of the separator.",
            "default": "'horizontal'"
          },
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement>",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "id",
            "type": "string",
            "description": "Native id attribute or callback; see the linked primitive API."
          },
          {
            "name": "aria-label",
            "type": "string",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLDivElement, Element>>) => void)",
            "description": "Native onChange attribute or callback; see the linked primitive API."
          },
          {
            "name": "className",
            "type": "string | ((state: SeparatorState) => string | undefined)",
            "description": "CSS class applied to the element, or a function that\nreturns a class based on the component's state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, SeparatorState>",
            "description": "Allows you to replace the component's HTML element\nwith a different tag, or compose it with another component.\n\nAccepts a `ReactElement` or a function that returns the element to render."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: SeparatorState) => React.CSSProperties | undefined)",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          }
        ]
      },
      {
        "name": "ContextMenuShortcut",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLSpanElement>",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[]",
            "description": "Native defaultValue attribute or callback; see the linked primitive API."
          },
          {
            "name": "className",
            "type": "string",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string",
            "description": "Native id attribute or callback; see the linked primitive API."
          },
          {
            "name": "aria-label",
            "type": "string",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "ChangeEventHandler<HTMLSpanElement, Element>",
            "description": "Native onChange attribute or callback; see the linked primitive API."
          }
        ]
      },
      {
        "name": "ContextMenuGroup",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "children",
            "type": "React.ReactNode",
            "description": "The content of the component."
          },
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement>",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "id",
            "type": "string",
            "description": "Native id attribute or callback; see the linked primitive API."
          },
          {
            "name": "aria-label",
            "type": "string",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLDivElement, Element>>) => void)",
            "description": "Native onChange attribute or callback; see the linked primitive API."
          },
          {
            "name": "className",
            "type": "string | ((state: ContextMenuGroupState) => string | undefined)",
            "description": "CSS class applied to the element, or a function that\nreturns a class based on the component's state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, ContextMenuGroupState>",
            "description": "Allows you to replace the component's HTML element\nwith a different tag, or compose it with another component.\n\nAccepts a `ReactElement` or a function that returns the element to render."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: ContextMenuGroupState) => React.CSSProperties | undefined)",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          }
        ]
      },
      {
        "name": "ContextMenuPortal",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "keepMounted",
            "type": "boolean",
            "description": "Whether to keep the portal mounted in the DOM while the popup is hidden.",
            "default": "false"
          },
          {
            "name": "container",
            "type": "HTMLElement | ShadowRoot | React.RefObject<HTMLElement | ShadowRoot | null> | null",
            "description": "A parent element to render the portal element into."
          },
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement>",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "id",
            "type": "string",
            "description": "Native id attribute or callback; see the linked primitive API."
          },
          {
            "name": "aria-label",
            "type": "string",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLDivElement, Element>>) => void)",
            "description": "Native onChange attribute or callback; see the linked primitive API."
          },
          {
            "name": "className",
            "type": "string | ((state: ContextMenuPortalState) => string | undefined)",
            "description": "CSS class applied to the element, or a function that\nreturns a class based on the component's state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, ContextMenuPortalState>",
            "description": "Allows you to replace the component's HTML element\nwith a different tag, or compose it with another component.\n\nAccepts a `ReactElement` or a function that returns the element to render."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: ContextMenuPortalState) => React.CSSProperties | undefined)",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          }
        ]
      },
      {
        "name": "ContextMenuSub",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "onOpenChange",
            "type": "((open: boolean, eventDetails: MenuSubmenuRoot.ChangeEventDetails) => void)",
            "description": "Event handler called when the menu is opened or closed."
          },
          {
            "name": "closeParentOnEsc",
            "type": "boolean",
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
            "type": "boolean",
            "description": "Whether the component should ignore user interaction.",
            "default": "false"
          },
          {
            "name": "defaultOpen",
            "type": "boolean",
            "description": "Whether the menu is initially open.\n\nTo render a controlled menu, use the `open` prop instead.",
            "default": "false"
          },
          {
            "name": "loopFocus",
            "type": "boolean",
            "description": "Whether to loop keyboard focus back to the first item\nwhen the end of the list is reached while using the arrow keys.",
            "default": "true"
          },
          {
            "name": "highlightItemOnHover",
            "type": "boolean",
            "description": "Whether moving the pointer over items should highlight them.\nDisabling this prop allows CSS `:hover` to be differentiated from the `:focus` (`data-highlighted`) state.",
            "default": "true"
          },
          {
            "name": "onOpenChangeComplete",
            "type": "((open: boolean) => void)",
            "description": "Event handler called after any animations complete when the menu is opened or closed."
          },
          {
            "name": "open",
            "type": "boolean",
            "description": "Whether the menu is currently open."
          },
          {
            "name": "orientation",
            "type": "MenuRootOrientation",
            "description": "The visual orientation of the menu.\nControls whether roving focus uses up/down or left/right arrow keys.",
            "default": "'vertical'"
          },
          {
            "name": "actionsRef",
            "type": "React.RefObject<MenuRootActions | null>",
            "description": "A ref to imperative actions.\n- `unmount`: Manually unmounts the menu.\n  Call this after any externally controlled closing animation finishes.\n- `close`: When specified, the menu can be closed imperatively."
          }
        ]
      },
      {
        "name": "ContextMenuSubContent",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "children",
            "type": "React.ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "id",
            "type": "string",
            "description": "Native id attribute or callback; see the linked primitive API."
          },
          {
            "name": "finalFocus",
            "type": "boolean | React.RefObject<HTMLElement | null> | ((closeType: InteractionType) => boolean | HTMLElement | null | void)",
            "description": "Determines the element to focus when the menu is closed.\n\n- `false`: Do not move focus.\n- `true`: Move focus based on the default behavior (trigger or previously focused element).\n- `RefObject`: Move focus to the ref element.\n- `function`: Called with the interaction type (`mouse`, `touch`, `pen`, or `keyboard`).\n  Return an element to focus, `true` to use the default behavior, or `false`/`undefined` to do nothing."
          },
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement>",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "aria-label",
            "type": "string",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLDivElement, Element>>) => void)",
            "description": "Native onChange attribute or callback; see the linked primitive API."
          },
          {
            "name": "className",
            "type": "string | ((state: ContextMenuPopupState) => string | undefined)",
            "description": "CSS class applied to the element, or a function that\nreturns a class based on the component's state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, ContextMenuPopupState>",
            "description": "Allows you to replace the component's HTML element\nwith a different tag, or compose it with another component.\n\nAccepts a `ReactElement` or a function that returns the element to render."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: ContextMenuPopupState) => React.CSSProperties | undefined)",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          },
          {
            "name": "align",
            "type": "Align",
            "description": "How to align the popup relative to the specified side.",
            "default": "'center'"
          },
          {
            "name": "alignOffset",
            "type": "number | OffsetFunction",
            "description": "Additional offset along the alignment axis in pixels.\nAlso accepts a function that returns the offset to read the dimensions of the anchor\nand positioner elements, along with its side and alignment.\n\nThe function takes a `data` object parameter with the following properties:\n- `data.anchor`: the dimensions of the anchor element with properties `width` and `height`.\n- `data.positioner`: the dimensions of the positioner element with properties `width` and `height`.\n- `data.side`: which side of the anchor element the positioner is aligned against.\n- `data.align`: how the positioner is aligned relative to the specified side.",
            "default": "0"
          },
          {
            "name": "side",
            "type": "Side",
            "description": "Which side of the anchor element to align the popup against.\nMay automatically change to avoid collisions.",
            "default": "'bottom'"
          },
          {
            "name": "sideOffset",
            "type": "number | OffsetFunction",
            "description": "Distance between the anchor and the popup in pixels.\nAlso accepts a function that returns the distance to read the dimensions of the anchor\nand positioner elements, along with its side and alignment.\n\nThe function takes a `data` object parameter with the following properties:\n- `data.anchor`: the dimensions of the anchor element with properties `width` and `height`.\n- `data.positioner`: the dimensions of the positioner element with properties `width` and `height`.\n- `data.side`: which side of the anchor element the positioner is aligned against.\n- `data.align`: how the positioner is aligned relative to the specified side.",
            "default": "0"
          }
        ]
      },
      {
        "name": "ContextMenuSubTrigger",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "onClick",
            "type": "((event: BaseUIEvent<React.MouseEvent<HTMLDivElement, MouseEvent>>) => void)",
            "description": "Native onClick attribute or callback; see the linked primitive API."
          },
          {
            "name": "label",
            "type": "string",
            "description": "Overrides the text label to use when the item is matched during keyboard text navigation."
          },
          {
            "name": "id",
            "type": "string",
            "description": "Native id attribute or callback; see the linked primitive API."
          },
          {
            "name": "disabled",
            "type": "boolean",
            "description": "Whether the component should ignore user interaction.",
            "default": "false"
          },
          {
            "name": "delay",
            "type": "number",
            "description": "How long to wait before the menu may be opened on hover. Specified in milliseconds.\n\nRequires the `openOnHover` prop.",
            "default": "100"
          },
          {
            "name": "closeDelay",
            "type": "number",
            "description": "How long to wait before closing the menu that was opened on hover.\nSpecified in milliseconds.\n\nRequires the `openOnHover` prop.",
            "default": "0"
          },
          {
            "name": "openOnHover",
            "type": "boolean",
            "description": "Whether the menu should also open when the trigger is hovered."
          },
          {
            "name": "nativeButton",
            "type": "boolean",
            "description": "Whether the component renders a native `<button>` element when replacing it\nvia the `render` prop.\nSet to `true` if the rendered element is a native button.",
            "default": "false"
          },
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement>",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "aria-label",
            "type": "string",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLDivElement, Element>>) => void)",
            "description": "Native onChange attribute or callback; see the linked primitive API."
          },
          {
            "name": "className",
            "type": "string | ((state: ContextMenuSubmenuTriggerState) => string | undefined)",
            "description": "CSS class applied to the element, or a function that\nreturns a class based on the component's state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, ContextMenuSubmenuTriggerState>",
            "description": "Allows you to replace the component's HTML element\nwith a different tag, or compose it with another component.\n\nAccepts a `ReactElement` or a function that returns the element to render."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: ContextMenuSubmenuTriggerState) => React.CSSProperties | undefined)",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          },
          {
            "name": "inset",
            "type": "boolean",
            "description": "Native inset attribute or callback; see the linked primitive API."
          }
        ]
      },
      {
        "name": "ContextMenuRadioGroup",
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
            "type": "((value: any, eventDetails: MenuRadioGroup.ChangeEventDetails) => void)",
            "description": "Function called when the selected value changes."
          },
          {
            "name": "disabled",
            "type": "boolean",
            "description": "Whether the component should ignore user interaction.",
            "default": "false"
          },
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement>",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "id",
            "type": "string",
            "description": "Native id attribute or callback; see the linked primitive API."
          },
          {
            "name": "aria-label",
            "type": "string",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLDivElement, Element>>) => void)",
            "description": "Native onChange attribute or callback; see the linked primitive API."
          },
          {
            "name": "className",
            "type": "string | ((state: ContextMenuRadioGroupState) => string | undefined)",
            "description": "CSS class applied to the element, or a function that\nreturns a class based on the component's state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, ContextMenuRadioGroupState>",
            "description": "Allows you to replace the component's HTML element\nwith a different tag, or compose it with another component.\n\nAccepts a `ReactElement` or a function that returns the element to render."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: ContextMenuRadioGroupState) => React.CSSProperties | undefined)",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          }
        ]
      }
    ],
    "links": [
      {
        "label": "Primitive API reference",
        "href": "https://base-ui.com/react/components/context-menu"
      }
    ],
    "notes": [
      "Native attributes and aria-* attributes are forwarded to the rendered element. Component source owns Leement styling; the linked primitive documents deeper behavior."
    ]
  },
  "drawer": {
    "parts": [
      {
        "name": "Drawer",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "open",
            "type": "boolean",
            "description": "Whether the drawer is currently open."
          },
          {
            "name": "defaultOpen",
            "type": "boolean",
            "description": "Whether the drawer is initially open.\n\nTo render a controlled drawer, use the `open` prop instead.",
            "default": "false"
          },
          {
            "name": "modal",
            "type": "boolean | \"trap-focus\"",
            "description": "Determines if the drawer enters a modal state when open.\n- `true`: user interaction is limited to just the drawer: focus is trapped, document page scroll is locked, and pointer interactions on outside elements are disabled.\n- `false`: user interaction with the rest of the document is allowed.\n- `'trap-focus'`: focus is trapped inside the drawer, but document page scroll is not locked and pointer interactions outside of it remain enabled.",
            "default": "true"
          },
          {
            "name": "onOpenChange",
            "type": "((open: boolean, eventDetails: DrawerRoot.ChangeEventDetails) => void)",
            "description": "Event handler called when the drawer is opened or closed."
          },
          {
            "name": "onOpenChangeComplete",
            "type": "((open: boolean) => void)",
            "description": "Event handler called after any animations complete when the drawer is opened or closed."
          },
          {
            "name": "disablePointerDismissal",
            "type": "boolean",
            "description": "Whether to prevent the drawer from closing on outside presses.\nFor non-modal drawers, this also prevents the drawer from closing when focus moves outside of it.",
            "default": "false"
          },
          {
            "name": "actionsRef",
            "type": "React.RefObject<DrawerRootActions | null>",
            "description": "A ref to imperative actions.\n- `unmount`: Manually unmounts the drawer.\nCall this after any externally controlled closing animation finishes.\n- `close`: Closes the drawer imperatively when called."
          },
          {
            "name": "handle",
            "type": "DrawerHandle<unknown>",
            "description": "A handle to associate the drawer with a trigger.\nIf specified, allows detached triggers to control the drawer's open state.\nCan be created with the Drawer.createHandle() method."
          },
          {
            "name": "triggerId",
            "type": "string | null",
            "description": "ID of the trigger that the drawer is associated with.\nThis is useful in conjunction with the `open` prop to create a controlled drawer.\nThere's no need to specify this prop when the drawer is uncontrolled (that is, when the `open` prop is not set)."
          },
          {
            "name": "defaultTriggerId",
            "type": "string | null",
            "description": "ID of the trigger that the drawer is associated with.\nThis is useful in conjunction with the `defaultOpen` prop to create an initially open drawer."
          },
          {
            "name": "children",
            "type": "React.ReactNode | PayloadChildRenderFunction<unknown>",
            "description": "The content of the drawer."
          },
          {
            "name": "swipeDirection",
            "type": "SwipeDirection",
            "description": "The swipe direction used to dismiss the drawer.",
            "default": "\"down\""
          },
          {
            "name": "snapPoints",
            "type": "DrawerSnapPoint[]",
            "description": "Snap points used to position the drawer.\nUse numbers between 0 and 1 to represent fractions of the viewport height,\nnumbers greater than 1 as pixel values, or strings in `px`/`rem` units\n(for example, `'148px'` or `'30rem'`)."
          },
          {
            "name": "snapToSequentialPoints",
            "type": "boolean",
            "description": "Disables velocity-based snap skipping so drag distance determines the next snap point.",
            "default": "false"
          },
          {
            "name": "snapPoint",
            "type": "DrawerSnapPoint | null",
            "description": "The currently active snap point. Use with `onSnapPointChange` to control the snap point."
          },
          {
            "name": "defaultSnapPoint",
            "type": "DrawerSnapPoint | null",
            "description": "The initial snap point value when uncontrolled."
          },
          {
            "name": "onSnapPointChange",
            "type": "((snapPoint: DrawerSnapPoint | null, eventDetails: DrawerRoot.SnapPointChangeEventDetails) => void)",
            "description": "Callback fired when the snap point changes."
          },
          {
            "name": "showSwipeHandle",
            "type": "boolean",
            "description": "Show a decorative swipe grip; provide an explicit close button as well.",
            "default": "false"
          }
        ]
      },
      {
        "name": "DrawerPortal",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "keepMounted",
            "type": "boolean",
            "description": "Whether to keep the portal mounted in the DOM while the popup is hidden.",
            "default": "false"
          },
          {
            "name": "container",
            "type": "HTMLElement | ShadowRoot | React.RefObject<HTMLElement | ShadowRoot | null> | null",
            "description": "A parent element to render the portal element into."
          },
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement>",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "id",
            "type": "string",
            "description": "Native id attribute or callback; see the linked primitive API."
          },
          {
            "name": "aria-label",
            "type": "string",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLDivElement, Element>>) => void)",
            "description": "Native onChange attribute or callback; see the linked primitive API."
          },
          {
            "name": "className",
            "type": "string | ((state: DrawerPortalState) => string | undefined)",
            "description": "CSS class applied to the element, or a function that\nreturns a class based on the component's state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, DrawerPortalState>",
            "description": "Allows you to replace the component's HTML element\nwith a different tag, or compose it with another component.\n\nAccepts a `ReactElement` or a function that returns the element to render."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: DrawerPortalState) => React.CSSProperties | undefined)",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          }
        ]
      },
      {
        "name": "DrawerOverlay",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "forceRender",
            "type": "boolean",
            "description": "Whether the backdrop is forced to render even when nested.",
            "default": "false"
          },
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement>",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "id",
            "type": "string",
            "description": "Native id attribute or callback; see the linked primitive API."
          },
          {
            "name": "aria-label",
            "type": "string",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLDivElement, Element>>) => void)",
            "description": "Native onChange attribute or callback; see the linked primitive API."
          },
          {
            "name": "className",
            "type": "string | ((state: DrawerBackdropState) => string | undefined)",
            "description": "CSS class applied to the element, or a function that\nreturns a class based on the component's state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, DrawerBackdropState>",
            "description": "Allows you to replace the component's HTML element\nwith a different tag, or compose it with another component.\n\nAccepts a `ReactElement` or a function that returns the element to render."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: DrawerBackdropState) => React.CSSProperties | undefined)",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          }
        ]
      },
      {
        "name": "DrawerSwipeHandle",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement>",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[]",
            "description": "Native defaultValue attribute or callback; see the linked primitive API."
          },
          {
            "name": "className",
            "type": "string",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string",
            "description": "Native id attribute or callback; see the linked primitive API."
          },
          {
            "name": "aria-label",
            "type": "string",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "ChangeEventHandler<HTMLDivElement, Element>",
            "description": "Native onChange attribute or callback; see the linked primitive API."
          }
        ]
      },
      {
        "name": "DrawerTrigger",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "handle",
            "type": "DrawerHandle<unknown>",
            "description": "A handle to associate the trigger with a drawer.\nCan be created with the Drawer.createHandle() method."
          },
          {
            "name": "payload",
            "type": "unknown",
            "description": "A payload to pass to the drawer when it is opened."
          },
          {
            "name": "id",
            "type": "string",
            "description": "ID of the trigger. In addition to being forwarded to the rendered element,\nit is also used to specify the active trigger for drawers in controlled mode (with the Drawer.Root `triggerId` prop)."
          },
          {
            "name": "nativeButton",
            "type": "boolean",
            "description": "Whether the component renders a native `<button>` element when replacing it\nvia the `render` prop.\nSet to `false` if the rendered element is not a button (for example, `<div>`).",
            "default": "true"
          },
          {
            "name": "ref",
            "type": "Ref<HTMLButtonElement>",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "disabled",
            "type": "boolean",
            "description": "Native disabled attribute or callback; see the linked primitive API."
          },
          {
            "name": "name",
            "type": "string",
            "description": "Native name attribute or callback; see the linked primitive API."
          },
          {
            "name": "value",
            "type": "string | number | readonly string[]",
            "description": "Native value attribute or callback; see the linked primitive API."
          },
          {
            "name": "aria-label",
            "type": "string",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLButtonElement, Element>>) => void)",
            "description": "Native onChange attribute or callback; see the linked primitive API."
          },
          {
            "name": "className",
            "type": "string | ((state: DrawerTriggerState) => string | undefined)",
            "description": "CSS class applied to the element, or a function that\nreturns a class based on the component's state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, DrawerTriggerState>",
            "description": "Allows you to replace the component's HTML element\nwith a different tag, or compose it with another component.\n\nAccepts a `ReactElement` or a function that returns the element to render."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: DrawerTriggerState) => React.CSSProperties | undefined)",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          }
        ]
      },
      {
        "name": "DrawerClose",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "nativeButton",
            "type": "boolean",
            "description": "Whether the component renders a native `<button>` element when replacing it\nvia the `render` prop.\nSet to `false` if the rendered element is not a button (for example, `<div>`).",
            "default": "true"
          },
          {
            "name": "ref",
            "type": "Ref<HTMLButtonElement>",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "disabled",
            "type": "boolean",
            "description": "Native disabled attribute or callback; see the linked primitive API."
          },
          {
            "name": "name",
            "type": "string",
            "description": "Native name attribute or callback; see the linked primitive API."
          },
          {
            "name": "value",
            "type": "string | number | readonly string[]",
            "description": "Native value attribute or callback; see the linked primitive API."
          },
          {
            "name": "id",
            "type": "string",
            "description": "Native id attribute or callback; see the linked primitive API."
          },
          {
            "name": "aria-label",
            "type": "string",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLButtonElement, Element>>) => void)",
            "description": "Native onChange attribute or callback; see the linked primitive API."
          },
          {
            "name": "className",
            "type": "string | ((state: DrawerCloseState) => string | undefined)",
            "description": "CSS class applied to the element, or a function that\nreturns a class based on the component's state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, DrawerCloseState>",
            "description": "Allows you to replace the component's HTML element\nwith a different tag, or compose it with another component.\n\nAccepts a `ReactElement` or a function that returns the element to render."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: DrawerCloseState) => React.CSSProperties | undefined)",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          }
        ]
      },
      {
        "name": "DrawerContent",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "initialFocus",
            "type": "boolean | React.RefObject<HTMLElement | null> | ((openType: InteractionType) => boolean | HTMLElement | null | void)",
            "description": "Determines the element to focus when the drawer is opened.\n\n- `false`: Do not move focus.\n- `true`: Move focus based on the default behavior (first tabbable element or popup).\n- `RefObject`: Move focus to the ref element.\n- `function`: Called with the interaction type (`mouse`, `touch`, `pen`, or `keyboard`).\n  Return an element to focus, `true` to use the default behavior, or `false`/`undefined` to do nothing."
          },
          {
            "name": "finalFocus",
            "type": "boolean | React.RefObject<HTMLElement | null> | ((closeType: InteractionType) => boolean | HTMLElement | null | void)",
            "description": "Determines the element to focus when the drawer is closed.\n\n- `false`: Do not move focus.\n- `true`: Move focus based on the default behavior (trigger or previously focused element).\n- `RefObject`: Move focus to the ref element.\n- `function`: Called with the interaction type (`mouse`, `touch`, `pen`, or `keyboard`).\n  Return an element to focus, `true` to use the default behavior, or `false`/`undefined` to do nothing."
          },
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement>",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "id",
            "type": "string",
            "description": "Native id attribute or callback; see the linked primitive API."
          },
          {
            "name": "aria-label",
            "type": "string",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLDivElement, Element>>) => void)",
            "description": "Native onChange attribute or callback; see the linked primitive API."
          },
          {
            "name": "className",
            "type": "string | ((state: DrawerPopupState) => string | undefined)",
            "description": "CSS class applied to the element, or a function that\nreturns a class based on the component's state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, DrawerPopupState>",
            "description": "Allows you to replace the component's HTML element\nwith a different tag, or compose it with another component.\n\nAccepts a `ReactElement` or a function that returns the element to render."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: DrawerPopupState) => React.CSSProperties | undefined)",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          }
        ]
      },
      {
        "name": "DrawerHeader",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement>",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[]",
            "description": "Native defaultValue attribute or callback; see the linked primitive API."
          },
          {
            "name": "className",
            "type": "string",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string",
            "description": "Native id attribute or callback; see the linked primitive API."
          },
          {
            "name": "aria-label",
            "type": "string",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "ChangeEventHandler<HTMLDivElement, Element>",
            "description": "Native onChange attribute or callback; see the linked primitive API."
          }
        ]
      },
      {
        "name": "DrawerFooter",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement>",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[]",
            "description": "Native defaultValue attribute or callback; see the linked primitive API."
          },
          {
            "name": "className",
            "type": "string",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string",
            "description": "Native id attribute or callback; see the linked primitive API."
          },
          {
            "name": "aria-label",
            "type": "string",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "ChangeEventHandler<HTMLDivElement, Element>",
            "description": "Native onChange attribute or callback; see the linked primitive API."
          }
        ]
      },
      {
        "name": "DrawerTitle",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLHeadingElement>",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "id",
            "type": "string",
            "description": "Native id attribute or callback; see the linked primitive API."
          },
          {
            "name": "aria-label",
            "type": "string",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLHeadingElement, Element>>) => void)",
            "description": "Native onChange attribute or callback; see the linked primitive API."
          },
          {
            "name": "className",
            "type": "string | ((state: DrawerTitleState) => string | undefined)",
            "description": "CSS class applied to the element, or a function that\nreturns a class based on the component's state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, DrawerTitleState>",
            "description": "Allows you to replace the component's HTML element\nwith a different tag, or compose it with another component.\n\nAccepts a `ReactElement` or a function that returns the element to render."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: DrawerTitleState) => React.CSSProperties | undefined)",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          }
        ]
      },
      {
        "name": "DrawerDescription",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLParagraphElement>",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "id",
            "type": "string",
            "description": "Native id attribute or callback; see the linked primitive API."
          },
          {
            "name": "aria-label",
            "type": "string",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLParagraphElement, Element>>) => void)",
            "description": "Native onChange attribute or callback; see the linked primitive API."
          },
          {
            "name": "className",
            "type": "string | ((state: DrawerDescriptionState) => string | undefined)",
            "description": "CSS class applied to the element, or a function that\nreturns a class based on the component's state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, DrawerDescriptionState>",
            "description": "Allows you to replace the component's HTML element\nwith a different tag, or compose it with another component.\n\nAccepts a `ReactElement` or a function that returns the element to render."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: DrawerDescriptionState) => React.CSSProperties | undefined)",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          }
        ]
      }
    ],
    "links": [
      {
        "label": "Primitive API reference",
        "href": "https://base-ui.com/react/components/drawer"
      }
    ],
    "notes": [
      "Native attributes and aria-* attributes are forwarded to the rendered element. Component source owns Leement styling; the linked primitive documents deeper behavior.",
      "Use showSwipeHandle to opt into a visible swipe handle. Base UI owns swipe/snap points and modal focus; Motion owns style transitions. Backend saving is app-owned."
    ]
  },
  "menubar": {
    "parts": [
      {
        "name": "Menubar",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "modal",
            "type": "boolean",
            "description": "Whether the menubar is modal.",
            "default": "true"
          },
          {
            "name": "disabled",
            "type": "boolean",
            "description": "Whether the whole menubar is disabled.",
            "default": "false"
          },
          {
            "name": "orientation",
            "type": "MenuRootOrientation",
            "description": "The orientation of the menubar.",
            "default": "'horizontal'"
          },
          {
            "name": "loopFocus",
            "type": "boolean",
            "description": "Whether to loop keyboard focus back to the first item\nwhen the end of the list is reached while using the arrow keys.",
            "default": "true"
          },
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement>",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "id",
            "type": "string",
            "description": "Native id attribute or callback; see the linked primitive API."
          },
          {
            "name": "aria-label",
            "type": "string",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLDivElement, Element>>) => void)",
            "description": "Native onChange attribute or callback; see the linked primitive API."
          },
          {
            "name": "className",
            "type": "string | ((state: MenubarState) => string | undefined)",
            "description": "CSS class applied to the element, or a function that\nreturns a class based on the component's state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, MenubarState>",
            "description": "Allows you to replace the component's HTML element\nwith a different tag, or compose it with another component.\n\nAccepts a `ReactElement` or a function that returns the element to render."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: MenubarState) => React.CSSProperties | undefined)",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          }
        ]
      },
      {
        "name": "MenubarPortal",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "keepMounted",
            "type": "boolean",
            "description": "Whether to keep the portal mounted in the DOM while the popup is hidden.",
            "default": "false"
          },
          {
            "name": "container",
            "type": "HTMLElement | ShadowRoot | React.RefObject<HTMLElement | ShadowRoot | null> | null",
            "description": "A parent element to render the portal element into."
          },
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement>",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "id",
            "type": "string",
            "description": "Native id attribute or callback; see the linked primitive API."
          },
          {
            "name": "aria-label",
            "type": "string",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLDivElement, Element>>) => void)",
            "description": "Native onChange attribute or callback; see the linked primitive API."
          },
          {
            "name": "className",
            "type": "string | ((state: ContextMenuPortalState) => string | undefined)",
            "description": "CSS class applied to the element, or a function that\nreturns a class based on the component's state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, ContextMenuPortalState>",
            "description": "Allows you to replace the component's HTML element\nwith a different tag, or compose it with another component.\n\nAccepts a `ReactElement` or a function that returns the element to render."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: ContextMenuPortalState) => React.CSSProperties | undefined)",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          }
        ]
      },
      {
        "name": "MenubarMenu",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "defaultOpen",
            "type": "boolean",
            "description": "Whether the menu is initially open.\n\nTo render a controlled menu, use the `open` prop instead.",
            "default": "false"
          },
          {
            "name": "loopFocus",
            "type": "boolean",
            "description": "Whether to loop keyboard focus back to the first item\nwhen the end of the list is reached while using the arrow keys.",
            "default": "true"
          },
          {
            "name": "highlightItemOnHover",
            "type": "boolean",
            "description": "Whether moving the pointer over items should highlight them.\nDisabling this prop allows CSS `:hover` to be differentiated from the `:focus` (`data-highlighted`) state.",
            "default": "true"
          },
          {
            "name": "modal",
            "type": "boolean",
            "description": "Determines if the menu enters a modal state when open.\n- `true`: user interaction is limited to the menu: document page scroll is locked and pointer interactions on outside elements are disabled.\n- `false`: user interaction with the rest of the document is allowed.\n\nOn touch devices, a `true` modal blocks outside taps but leaves the page scrollable unless the popup spans nearly the full viewport width, matching native iOS behavior.\n\nNested menus ignore this prop, and menus opened by hover are never modal.",
            "default": "true"
          },
          {
            "name": "onOpenChange",
            "type": "((open: boolean, eventDetails: MenuRoot.ChangeEventDetails) => void)",
            "description": "Event handler called when the menu is opened or closed."
          },
          {
            "name": "onOpenChangeComplete",
            "type": "((open: boolean) => void)",
            "description": "Event handler called after any animations complete when the menu is opened or closed."
          },
          {
            "name": "open",
            "type": "boolean",
            "description": "Whether the menu is currently open."
          },
          {
            "name": "orientation",
            "type": "MenuRootOrientation",
            "description": "The visual orientation of the menu.\nControls whether roving focus uses up/down or left/right arrow keys.",
            "default": "'vertical'"
          },
          {
            "name": "disabled",
            "type": "boolean",
            "description": "Whether the component should ignore user interaction.",
            "default": "false"
          },
          {
            "name": "closeParentOnEsc",
            "type": "boolean",
            "description": "When in a submenu, determines whether pressing the Escape key\ncloses the entire menu, or only the current child menu.",
            "default": "false"
          },
          {
            "name": "actionsRef",
            "type": "React.RefObject<MenuRootActions | null>",
            "description": "A ref to imperative actions.\n- `unmount`: Manually unmounts the menu.\n  Call this after any externally controlled closing animation finishes.\n- `close`: When specified, the menu can be closed imperatively."
          },
          {
            "name": "triggerId",
            "type": "string | null",
            "description": "ID of the trigger that the menu is associated with.\nThis is useful in conjunction with the `open` prop to create a controlled menu.\nThere's no need to specify this prop when the menu is uncontrolled (that is, when the `open` prop is not set)."
          },
          {
            "name": "defaultTriggerId",
            "type": "string | null",
            "description": "ID of the trigger that the menu is associated with.\nThis is useful in conjunction with the `defaultOpen` prop to create an initially open menu."
          },
          {
            "name": "handle",
            "type": "MenuHandle<unknown>",
            "description": "A handle to associate the menu with a trigger.\nIf specified, allows external triggers to control the menu's open state."
          },
          {
            "name": "children",
            "type": "React.ReactNode | PayloadChildRenderFunction<unknown>",
            "description": "The content of the menu.\nThis can be a regular React node or a render function that receives the `payload` of the active trigger."
          }
        ]
      },
      {
        "name": "MenubarTrigger",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "children",
            "type": "React.ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "disabled",
            "type": "boolean",
            "description": "Whether the component should ignore user interaction.",
            "default": "false"
          },
          {
            "name": "handle",
            "type": "MenuHandle<unknown>",
            "description": "A handle to associate the trigger with a menu."
          },
          {
            "name": "payload",
            "type": "unknown",
            "description": "A payload to pass to the menu when it is opened."
          },
          {
            "name": "delay",
            "type": "number",
            "description": "How long to wait before the menu may be opened on hover. Specified in milliseconds.\n\nRequires the `openOnHover` prop.",
            "default": "100"
          },
          {
            "name": "closeDelay",
            "type": "number",
            "description": "How long to wait before closing the menu that was opened on hover.\nSpecified in milliseconds.\n\nRequires the `openOnHover` prop.",
            "default": "0"
          },
          {
            "name": "openOnHover",
            "type": "boolean",
            "description": "Whether the menu should also open when the trigger is hovered."
          },
          {
            "name": "nativeButton",
            "type": "boolean",
            "description": "Whether the component renders a native `<button>` element when replacing it\nvia the `render` prop.\nSet to `false` if the rendered element is not a button (for example, `<div>`).",
            "default": "true"
          },
          {
            "name": "ref",
            "type": "Ref<HTMLButtonElement>",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "name",
            "type": "string",
            "description": "Native name attribute or callback; see the linked primitive API."
          },
          {
            "name": "value",
            "type": "string | number | readonly string[]",
            "description": "Native value attribute or callback; see the linked primitive API."
          },
          {
            "name": "id",
            "type": "string",
            "description": "Native id attribute or callback; see the linked primitive API."
          },
          {
            "name": "aria-label",
            "type": "string",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLButtonElement, Element>>) => void)",
            "description": "Native onChange attribute or callback; see the linked primitive API."
          },
          {
            "name": "className",
            "type": "string | ((state: MenuTriggerState) => string | undefined)",
            "description": "CSS class applied to the element, or a function that\nreturns a class based on the component's state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, MenuTriggerState>",
            "description": "Allows you to replace the component's HTML element\nwith a different tag, or compose it with another component.\n\nAccepts a `ReactElement` or a function that returns the element to render."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: MenuTriggerState) => React.CSSProperties | undefined)",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          }
        ]
      },
      {
        "name": "MenubarContent",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "children",
            "type": "React.ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "id",
            "type": "string",
            "description": "Native id attribute or callback; see the linked primitive API."
          },
          {
            "name": "finalFocus",
            "type": "boolean | React.RefObject<HTMLElement | null> | ((closeType: InteractionType) => boolean | HTMLElement | null | void)",
            "description": "Determines the element to focus when the menu is closed.\n\n- `false`: Do not move focus.\n- `true`: Move focus based on the default behavior (trigger or previously focused element).\n- `RefObject`: Move focus to the ref element.\n- `function`: Called with the interaction type (`mouse`, `touch`, `pen`, or `keyboard`).\n  Return an element to focus, `true` to use the default behavior, or `false`/`undefined` to do nothing."
          },
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement>",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "aria-label",
            "type": "string",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLDivElement, Element>>) => void)",
            "description": "Native onChange attribute or callback; see the linked primitive API."
          },
          {
            "name": "className",
            "type": "string | ((state: ContextMenuPopupState) => string | undefined)",
            "description": "CSS class applied to the element, or a function that\nreturns a class based on the component's state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, ContextMenuPopupState>",
            "description": "Allows you to replace the component's HTML element\nwith a different tag, or compose it with another component.\n\nAccepts a `ReactElement` or a function that returns the element to render."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: ContextMenuPopupState) => React.CSSProperties | undefined)",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          },
          {
            "name": "align",
            "type": "Align",
            "description": "How to align the popup relative to the specified side.",
            "default": "\"start\""
          },
          {
            "name": "alignOffset",
            "type": "number | OffsetFunction",
            "description": "Additional offset along the alignment axis in pixels.\nAlso accepts a function that returns the offset to read the dimensions of the anchor\nand positioner elements, along with its side and alignment.\n\nThe function takes a `data` object parameter with the following properties:\n- `data.anchor`: the dimensions of the anchor element with properties `width` and `height`.\n- `data.positioner`: the dimensions of the positioner element with properties `width` and `height`.\n- `data.side`: which side of the anchor element the positioner is aligned against.\n- `data.align`: how the positioner is aligned relative to the specified side.",
            "default": "-4"
          },
          {
            "name": "side",
            "type": "Side",
            "description": "Which side of the anchor element to align the popup against.\nMay automatically change to avoid collisions.",
            "default": "'bottom'"
          },
          {
            "name": "sideOffset",
            "type": "number | OffsetFunction",
            "description": "Distance between the anchor and the popup in pixels.\nAlso accepts a function that returns the distance to read the dimensions of the anchor\nand positioner elements, along with its side and alignment.\n\nThe function takes a `data` object parameter with the following properties:\n- `data.anchor`: the dimensions of the anchor element with properties `width` and `height`.\n- `data.positioner`: the dimensions of the positioner element with properties `width` and `height`.\n- `data.side`: which side of the anchor element the positioner is aligned against.\n- `data.align`: how the positioner is aligned relative to the specified side.",
            "default": "8"
          }
        ]
      },
      {
        "name": "MenubarGroup",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "children",
            "type": "React.ReactNode",
            "description": "The content of the component."
          },
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement>",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "id",
            "type": "string",
            "description": "Native id attribute or callback; see the linked primitive API."
          },
          {
            "name": "aria-label",
            "type": "string",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLDivElement, Element>>) => void)",
            "description": "Native onChange attribute or callback; see the linked primitive API."
          },
          {
            "name": "className",
            "type": "string | ((state: ContextMenuGroupState) => string | undefined)",
            "description": "CSS class applied to the element, or a function that\nreturns a class based on the component's state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, ContextMenuGroupState>",
            "description": "Allows you to replace the component's HTML element\nwith a different tag, or compose it with another component.\n\nAccepts a `ReactElement` or a function that returns the element to render."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: ContextMenuGroupState) => React.CSSProperties | undefined)",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          }
        ]
      },
      {
        "name": "MenubarSeparator",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "orientation",
            "type": "Orientation",
            "description": "The orientation of the separator.",
            "default": "'horizontal'"
          },
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement>",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "id",
            "type": "string",
            "description": "Native id attribute or callback; see the linked primitive API."
          },
          {
            "name": "aria-label",
            "type": "string",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLDivElement, Element>>) => void)",
            "description": "Native onChange attribute or callback; see the linked primitive API."
          },
          {
            "name": "className",
            "type": "string | ((state: SeparatorState) => string | undefined)",
            "description": "CSS class applied to the element, or a function that\nreturns a class based on the component's state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, SeparatorState>",
            "description": "Allows you to replace the component's HTML element\nwith a different tag, or compose it with another component.\n\nAccepts a `ReactElement` or a function that returns the element to render."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: SeparatorState) => React.CSSProperties | undefined)",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          }
        ]
      },
      {
        "name": "MenubarLabel",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement>",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "id",
            "type": "string",
            "description": "Native id attribute or callback; see the linked primitive API."
          },
          {
            "name": "aria-label",
            "type": "string",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLDivElement, Element>>) => void)",
            "description": "Native onChange attribute or callback; see the linked primitive API."
          },
          {
            "name": "className",
            "type": "string | ((state: ContextMenuGroupLabelState) => string | undefined)",
            "description": "CSS class applied to the element, or a function that\nreturns a class based on the component's state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, ContextMenuGroupLabelState>",
            "description": "Allows you to replace the component's HTML element\nwith a different tag, or compose it with another component.\n\nAccepts a `ReactElement` or a function that returns the element to render."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: ContextMenuGroupLabelState) => React.CSSProperties | undefined)",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          },
          {
            "name": "inset",
            "type": "boolean",
            "description": "Native inset attribute or callback; see the linked primitive API."
          }
        ]
      },
      {
        "name": "MenubarItem",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "onClick",
            "type": "((event: BaseUIEvent<React.MouseEvent<HTMLDivElement, MouseEvent>>) => void)",
            "description": "The click handler for the menu item."
          },
          {
            "name": "disabled",
            "type": "boolean",
            "description": "Whether the component should ignore user interaction.",
            "default": "false"
          },
          {
            "name": "label",
            "type": "string",
            "description": "Overrides the text label to use when the item is matched during keyboard text navigation."
          },
          {
            "name": "id",
            "type": "string",
            "description": "Native id attribute or callback; see the linked primitive API."
          },
          {
            "name": "closeOnClick",
            "type": "boolean",
            "description": "Whether to close the menu when the item is clicked.",
            "default": "true"
          },
          {
            "name": "nativeButton",
            "type": "boolean",
            "description": "Whether the component renders a native `<button>` element when replacing it\nvia the `render` prop.\nSet to `true` if the rendered element is a native button.",
            "default": "false"
          },
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement>",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "aria-label",
            "type": "string",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLDivElement, Element>>) => void)",
            "description": "Native onChange attribute or callback; see the linked primitive API."
          },
          {
            "name": "className",
            "type": "string | ((state: ContextMenuItemState) => string | undefined)",
            "description": "CSS class applied to the element, or a function that\nreturns a class based on the component's state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, ContextMenuItemState>",
            "description": "Allows you to replace the component's HTML element\nwith a different tag, or compose it with another component.\n\nAccepts a `ReactElement` or a function that returns the element to render."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: ContextMenuItemState) => React.CSSProperties | undefined)",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          },
          {
            "name": "inset",
            "type": "boolean",
            "description": "Native inset attribute or callback; see the linked primitive API."
          },
          {
            "name": "variant",
            "type": "\"destructive\" | \"default\"",
            "description": "Leement visual role; see the listed supported values.",
            "default": "\"default\""
          }
        ]
      },
      {
        "name": "MenubarShortcut",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "ref",
            "type": "Ref<HTMLSpanElement>",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[]",
            "description": "Native defaultValue attribute or callback; see the linked primitive API."
          },
          {
            "name": "className",
            "type": "string",
            "description": "Additional Tailwind classes."
          },
          {
            "name": "id",
            "type": "string",
            "description": "Native id attribute or callback; see the linked primitive API."
          },
          {
            "name": "aria-label",
            "type": "string",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "ChangeEventHandler<HTMLSpanElement, Element>",
            "description": "Native onChange attribute or callback; see the linked primitive API."
          }
        ]
      },
      {
        "name": "MenubarCheckboxItem",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "checked",
            "type": "boolean",
            "description": "Whether the checkbox item is currently ticked.\n\nTo render an uncontrolled checkbox item, use the `defaultChecked` prop instead."
          },
          {
            "name": "defaultChecked",
            "type": "boolean",
            "description": "Whether the checkbox item is initially ticked.\n\nTo render a controlled checkbox item, use the `checked` prop instead.",
            "default": "false"
          },
          {
            "name": "onCheckedChange",
            "type": "((checked: boolean, eventDetails: MenuCheckboxItem.ChangeEventDetails) => void)",
            "description": "Event handler called when the checkbox item is ticked or unticked."
          },
          {
            "name": "onClick",
            "type": "((event: BaseUIEvent<React.MouseEvent<HTMLDivElement, MouseEvent>>) => void)",
            "description": "The click handler for the menu item."
          },
          {
            "name": "disabled",
            "type": "boolean",
            "description": "Whether the component should ignore user interaction.",
            "default": "false"
          },
          {
            "name": "label",
            "type": "string",
            "description": "Overrides the text label to use when the item is matched during keyboard text navigation."
          },
          {
            "name": "id",
            "type": "string",
            "description": "Native id attribute or callback; see the linked primitive API."
          },
          {
            "name": "closeOnClick",
            "type": "boolean",
            "description": "Whether to close the menu when the item is clicked.",
            "default": "false"
          },
          {
            "name": "nativeButton",
            "type": "boolean",
            "description": "Whether the component renders a native `<button>` element when replacing it\nvia the `render` prop.\nSet to `true` if the rendered element is a native button.",
            "default": "false"
          },
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement>",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "aria-label",
            "type": "string",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLDivElement, Element>>) => void)",
            "description": "Native onChange attribute or callback; see the linked primitive API."
          },
          {
            "name": "className",
            "type": "string | ((state: ContextMenuCheckboxItemState) => string | undefined)",
            "description": "CSS class applied to the element, or a function that\nreturns a class based on the component's state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, ContextMenuCheckboxItemState>",
            "description": "Allows you to replace the component's HTML element\nwith a different tag, or compose it with another component.\n\nAccepts a `ReactElement` or a function that returns the element to render."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: ContextMenuCheckboxItemState) => React.CSSProperties | undefined)",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          },
          {
            "name": "inset",
            "type": "boolean",
            "description": "Native inset attribute or callback; see the linked primitive API."
          }
        ]
      },
      {
        "name": "MenubarRadioGroup",
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
            "type": "((value: any, eventDetails: MenuRadioGroup.ChangeEventDetails) => void)",
            "description": "Function called when the selected value changes."
          },
          {
            "name": "disabled",
            "type": "boolean",
            "description": "Whether the component should ignore user interaction.",
            "default": "false"
          },
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement>",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "id",
            "type": "string",
            "description": "Native id attribute or callback; see the linked primitive API."
          },
          {
            "name": "aria-label",
            "type": "string",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLDivElement, Element>>) => void)",
            "description": "Native onChange attribute or callback; see the linked primitive API."
          },
          {
            "name": "className",
            "type": "string | ((state: ContextMenuRadioGroupState) => string | undefined)",
            "description": "CSS class applied to the element, or a function that\nreturns a class based on the component's state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, ContextMenuRadioGroupState>",
            "description": "Allows you to replace the component's HTML element\nwith a different tag, or compose it with another component.\n\nAccepts a `ReactElement` or a function that returns the element to render."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: ContextMenuRadioGroupState) => React.CSSProperties | undefined)",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          }
        ]
      },
      {
        "name": "MenubarRadioItem",
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
            "type": "((event: BaseUIEvent<React.MouseEvent<HTMLDivElement, MouseEvent>>) => void)",
            "description": "The click handler for the menu item."
          },
          {
            "name": "disabled",
            "type": "boolean",
            "description": "Whether the component should ignore user interaction.",
            "default": "false"
          },
          {
            "name": "label",
            "type": "string",
            "description": "Overrides the text label to use when the item is matched during keyboard text navigation."
          },
          {
            "name": "id",
            "type": "string",
            "description": "Native id attribute or callback; see the linked primitive API."
          },
          {
            "name": "closeOnClick",
            "type": "boolean",
            "description": "Whether to close the menu when the item is clicked.",
            "default": "false"
          },
          {
            "name": "nativeButton",
            "type": "boolean",
            "description": "Whether the component renders a native `<button>` element when replacing it\nvia the `render` prop.\nSet to `true` if the rendered element is a native button.",
            "default": "false"
          },
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement>",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "aria-label",
            "type": "string",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLDivElement, Element>>) => void)",
            "description": "Native onChange attribute or callback; see the linked primitive API."
          },
          {
            "name": "className",
            "type": "string | ((state: ContextMenuRadioItemState) => string | undefined)",
            "description": "CSS class applied to the element, or a function that\nreturns a class based on the component's state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, ContextMenuRadioItemState>",
            "description": "Allows you to replace the component's HTML element\nwith a different tag, or compose it with another component.\n\nAccepts a `ReactElement` or a function that returns the element to render."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: ContextMenuRadioItemState) => React.CSSProperties | undefined)",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          },
          {
            "name": "inset",
            "type": "boolean",
            "description": "Native inset attribute or callback; see the linked primitive API."
          }
        ]
      },
      {
        "name": "MenubarSub",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "onOpenChange",
            "type": "((open: boolean, eventDetails: MenuSubmenuRoot.ChangeEventDetails) => void)",
            "description": "Event handler called when the menu is opened or closed."
          },
          {
            "name": "closeParentOnEsc",
            "type": "boolean",
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
            "type": "boolean",
            "description": "Whether the component should ignore user interaction.",
            "default": "false"
          },
          {
            "name": "defaultOpen",
            "type": "boolean",
            "description": "Whether the menu is initially open.\n\nTo render a controlled menu, use the `open` prop instead.",
            "default": "false"
          },
          {
            "name": "loopFocus",
            "type": "boolean",
            "description": "Whether to loop keyboard focus back to the first item\nwhen the end of the list is reached while using the arrow keys.",
            "default": "true"
          },
          {
            "name": "highlightItemOnHover",
            "type": "boolean",
            "description": "Whether moving the pointer over items should highlight them.\nDisabling this prop allows CSS `:hover` to be differentiated from the `:focus` (`data-highlighted`) state.",
            "default": "true"
          },
          {
            "name": "onOpenChangeComplete",
            "type": "((open: boolean) => void)",
            "description": "Event handler called after any animations complete when the menu is opened or closed."
          },
          {
            "name": "open",
            "type": "boolean",
            "description": "Whether the menu is currently open."
          },
          {
            "name": "orientation",
            "type": "MenuRootOrientation",
            "description": "The visual orientation of the menu.\nControls whether roving focus uses up/down or left/right arrow keys.",
            "default": "'vertical'"
          },
          {
            "name": "actionsRef",
            "type": "React.RefObject<MenuRootActions | null>",
            "description": "A ref to imperative actions.\n- `unmount`: Manually unmounts the menu.\n  Call this after any externally controlled closing animation finishes.\n- `close`: When specified, the menu can be closed imperatively."
          }
        ]
      },
      {
        "name": "MenubarSubTrigger",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "onClick",
            "type": "((event: BaseUIEvent<React.MouseEvent<HTMLDivElement, MouseEvent>>) => void)",
            "description": "Native onClick attribute or callback; see the linked primitive API."
          },
          {
            "name": "label",
            "type": "string",
            "description": "Overrides the text label to use when the item is matched during keyboard text navigation."
          },
          {
            "name": "id",
            "type": "string",
            "description": "Native id attribute or callback; see the linked primitive API."
          },
          {
            "name": "disabled",
            "type": "boolean",
            "description": "Whether the component should ignore user interaction.",
            "default": "false"
          },
          {
            "name": "delay",
            "type": "number",
            "description": "How long to wait before the menu may be opened on hover. Specified in milliseconds.\n\nRequires the `openOnHover` prop.",
            "default": "100"
          },
          {
            "name": "closeDelay",
            "type": "number",
            "description": "How long to wait before closing the menu that was opened on hover.\nSpecified in milliseconds.\n\nRequires the `openOnHover` prop.",
            "default": "0"
          },
          {
            "name": "openOnHover",
            "type": "boolean",
            "description": "Whether the menu should also open when the trigger is hovered."
          },
          {
            "name": "nativeButton",
            "type": "boolean",
            "description": "Whether the component renders a native `<button>` element when replacing it\nvia the `render` prop.\nSet to `true` if the rendered element is a native button.",
            "default": "false"
          },
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement>",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "aria-label",
            "type": "string",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLDivElement, Element>>) => void)",
            "description": "Native onChange attribute or callback; see the linked primitive API."
          },
          {
            "name": "className",
            "type": "string | ((state: ContextMenuSubmenuTriggerState) => string | undefined)",
            "description": "CSS class applied to the element, or a function that\nreturns a class based on the component's state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, ContextMenuSubmenuTriggerState>",
            "description": "Allows you to replace the component's HTML element\nwith a different tag, or compose it with another component.\n\nAccepts a `ReactElement` or a function that returns the element to render."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: ContextMenuSubmenuTriggerState) => React.CSSProperties | undefined)",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          },
          {
            "name": "inset",
            "type": "boolean",
            "description": "Native inset attribute or callback; see the linked primitive API."
          }
        ]
      },
      {
        "name": "MenubarSubContent",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "children",
            "type": "React.ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "id",
            "type": "string",
            "description": "Native id attribute or callback; see the linked primitive API."
          },
          {
            "name": "finalFocus",
            "type": "boolean | React.RefObject<HTMLElement | null> | ((closeType: InteractionType) => boolean | HTMLElement | null | void)",
            "description": "Determines the element to focus when the menu is closed.\n\n- `false`: Do not move focus.\n- `true`: Move focus based on the default behavior (trigger or previously focused element).\n- `RefObject`: Move focus to the ref element.\n- `function`: Called with the interaction type (`mouse`, `touch`, `pen`, or `keyboard`).\n  Return an element to focus, `true` to use the default behavior, or `false`/`undefined` to do nothing."
          },
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement>",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "aria-label",
            "type": "string",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLDivElement, Element>>) => void)",
            "description": "Native onChange attribute or callback; see the linked primitive API."
          },
          {
            "name": "className",
            "type": "string | ((state: ContextMenuPopupState) => string | undefined)",
            "description": "CSS class applied to the element, or a function that\nreturns a class based on the component's state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, ContextMenuPopupState>",
            "description": "Allows you to replace the component's HTML element\nwith a different tag, or compose it with another component.\n\nAccepts a `ReactElement` or a function that returns the element to render."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: ContextMenuPopupState) => React.CSSProperties | undefined)",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          },
          {
            "name": "align",
            "type": "Align",
            "description": "How to align the popup relative to the specified side.",
            "default": "'center'"
          },
          {
            "name": "alignOffset",
            "type": "number | OffsetFunction",
            "description": "Additional offset along the alignment axis in pixels.\nAlso accepts a function that returns the offset to read the dimensions of the anchor\nand positioner elements, along with its side and alignment.\n\nThe function takes a `data` object parameter with the following properties:\n- `data.anchor`: the dimensions of the anchor element with properties `width` and `height`.\n- `data.positioner`: the dimensions of the positioner element with properties `width` and `height`.\n- `data.side`: which side of the anchor element the positioner is aligned against.\n- `data.align`: how the positioner is aligned relative to the specified side.",
            "default": "0"
          },
          {
            "name": "side",
            "type": "Side",
            "description": "Which side of the anchor element to align the popup against.\nMay automatically change to avoid collisions.",
            "default": "'bottom'"
          },
          {
            "name": "sideOffset",
            "type": "number | OffsetFunction",
            "description": "Distance between the anchor and the popup in pixels.\nAlso accepts a function that returns the distance to read the dimensions of the anchor\nand positioner elements, along with its side and alignment.\n\nThe function takes a `data` object parameter with the following properties:\n- `data.anchor`: the dimensions of the anchor element with properties `width` and `height`.\n- `data.positioner`: the dimensions of the positioner element with properties `width` and `height`.\n- `data.side`: which side of the anchor element the positioner is aligned against.\n- `data.align`: how the positioner is aligned relative to the specified side.",
            "default": "0"
          }
        ]
      }
    ],
    "links": [
      {
        "label": "Primitive API reference",
        "href": "https://base-ui.com/react/components/menubar"
      }
    ],
    "notes": [
      "Native attributes and aria-* attributes are forwarded to the rendered element. Component source owns Leement styling; the linked primitive documents deeper behavior."
    ]
  },
  "navigation-menu": {
    "parts": [
      {
        "name": "NavigationMenu",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "actionsRef",
            "type": "React.RefObject<NavigationMenuRootActions | null>",
            "description": "A ref to imperative actions."
          },
          {
            "name": "onOpenChangeComplete",
            "type": "((open: boolean) => void)",
            "description": "Event handler called after any animations complete when the navigation menu is closed."
          },
          {
            "name": "value",
            "type": "any",
            "description": "The controlled value of the navigation menu item that should be currently open.\nWhen non-nullish, the menu will be open. When nullish, the menu will be closed.\n\nTo render an uncontrolled navigation menu, use the `defaultValue` prop instead.",
            "default": "null"
          },
          {
            "name": "defaultValue",
            "type": "any",
            "description": "The uncontrolled value of the item that should be initially selected.\n\nTo render a controlled navigation menu, use the `value` prop instead.",
            "default": "null"
          },
          {
            "name": "onValueChange",
            "type": "((value: any, eventDetails: NavigationMenuRoot.ChangeEventDetails) => void)",
            "description": "Callback fired when the value changes."
          },
          {
            "name": "delay",
            "type": "number",
            "description": "How long to wait before opening the navigation popup. Specified in milliseconds.",
            "default": "50"
          },
          {
            "name": "closeDelay",
            "type": "number",
            "description": "How long to wait before closing the navigation popup. Specified in milliseconds.",
            "default": "50"
          },
          {
            "name": "orientation",
            "type": "\"horizontal\" | \"vertical\"",
            "description": "The orientation of the navigation menu.",
            "default": "'horizontal'"
          },
          {
            "name": "ref",
            "type": "Ref<HTMLElement>",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "id",
            "type": "string",
            "description": "Native id attribute or callback; see the linked primitive API."
          },
          {
            "name": "aria-label",
            "type": "string",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLElement, Element>>) => void)",
            "description": "Native onChange attribute or callback; see the linked primitive API."
          },
          {
            "name": "className",
            "type": "string | ((state: NavigationMenuRootState) => string | undefined)",
            "description": "CSS class applied to the element, or a function that\nreturns a class based on the component's state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, NavigationMenuRootState>",
            "description": "Allows you to replace the component's HTML element\nwith a different tag, or compose it with another component.\n\nAccepts a `ReactElement` or a function that returns the element to render."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: NavigationMenuRootState) => React.CSSProperties | undefined)",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          },
          {
            "name": "align",
            "type": "Align",
            "description": "How to align the popup relative to the specified side.",
            "default": "\"start\""
          }
        ]
      },
      {
        "name": "NavigationMenuContent",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "keepMounted",
            "type": "boolean",
            "description": "Whether to keep the content mounted in the DOM while the popup is closed.\nEnsures the content is present during server-side rendering for web crawlers.",
            "default": "false"
          },
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement>",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "id",
            "type": "string",
            "description": "Native id attribute or callback; see the linked primitive API."
          },
          {
            "name": "aria-label",
            "type": "string",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLDivElement, Element>>) => void)",
            "description": "Native onChange attribute or callback; see the linked primitive API."
          },
          {
            "name": "className",
            "type": "string | ((state: NavigationMenuContentState) => string | undefined)",
            "description": "CSS class applied to the element, or a function that\nreturns a class based on the component's state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, NavigationMenuContentState>",
            "description": "Allows you to replace the component's HTML element\nwith a different tag, or compose it with another component.\n\nAccepts a `ReactElement` or a function that returns the element to render."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: NavigationMenuContentState) => React.CSSProperties | undefined)",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          }
        ]
      },
      {
        "name": "NavigationMenuIndicator",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: NavigationMenuIconState) => React.CSSProperties | undefined)",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          },
          {
            "name": "className",
            "type": "string | ((state: NavigationMenuIconState) => string | undefined)",
            "description": "CSS class applied to the element, or a function that\nreturns a class based on the component's state."
          },
          {
            "name": "id",
            "type": "string",
            "description": "Native id attribute or callback; see the linked primitive API."
          },
          {
            "name": "aria-label",
            "type": "string",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLSpanElement, Element>>) => void)",
            "description": "Native onChange attribute or callback; see the linked primitive API."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, NavigationMenuIconState>",
            "description": "Allows you to replace the component's HTML element\nwith a different tag, or compose it with another component.\n\nAccepts a `ReactElement` or a function that returns the element to render."
          },
          {
            "name": "ref",
            "type": "Ref<HTMLSpanElement>",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          }
        ]
      },
      {
        "name": "NavigationMenuItem",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: NavigationMenuItemState) => React.CSSProperties | undefined)",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          },
          {
            "name": "className",
            "type": "string | ((state: NavigationMenuItemState) => string | undefined)",
            "description": "CSS class applied to the element, or a function that\nreturns a class based on the component's state."
          },
          {
            "name": "value",
            "type": "any",
            "description": "A unique value that identifies this navigation menu item.\nIf no value is provided, a unique ID will be generated automatically.\nUse when controlling the navigation menu programmatically."
          },
          {
            "name": "id",
            "type": "string",
            "description": "Native id attribute or callback; see the linked primitive API."
          },
          {
            "name": "aria-label",
            "type": "string",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLLIElement, Element>>) => void)",
            "description": "Native onChange attribute or callback; see the linked primitive API."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, NavigationMenuItemState>",
            "description": "Allows you to replace the component's HTML element\nwith a different tag, or compose it with another component.\n\nAccepts a `ReactElement` or a function that returns the element to render."
          },
          {
            "name": "ref",
            "type": "Ref<HTMLLIElement>",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          }
        ]
      },
      {
        "name": "NavigationMenuLink",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "active",
            "type": "boolean",
            "description": "Whether the link is the currently active page.",
            "default": "false"
          },
          {
            "name": "closeOnClick",
            "type": "boolean",
            "description": "Whether to close the navigation menu when the link is clicked.",
            "default": "false"
          },
          {
            "name": "ref",
            "type": "Ref<HTMLAnchorElement>",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "id",
            "type": "string",
            "description": "Native id attribute or callback; see the linked primitive API."
          },
          {
            "name": "aria-label",
            "type": "string",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLAnchorElement, Element>>) => void)",
            "description": "Native onChange attribute or callback; see the linked primitive API."
          },
          {
            "name": "className",
            "type": "string | ((state: NavigationMenuLinkState) => string | undefined)",
            "description": "CSS class applied to the element, or a function that\nreturns a class based on the component's state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, NavigationMenuLinkState>",
            "description": "Allows you to replace the component's HTML element\nwith a different tag, or compose it with another component.\n\nAccepts a `ReactElement` or a function that returns the element to render."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: NavigationMenuLinkState) => React.CSSProperties | undefined)",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          }
        ]
      },
      {
        "name": "NavigationMenuList",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: NavigationMenuListState) => React.CSSProperties | undefined)",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          },
          {
            "name": "className",
            "type": "string | ((state: NavigationMenuListState) => string | undefined)",
            "description": "CSS class applied to the element, or a function that\nreturns a class based on the component's state."
          },
          {
            "name": "id",
            "type": "string",
            "description": "Native id attribute or callback; see the linked primitive API."
          },
          {
            "name": "aria-label",
            "type": "string",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLUListElement, Element>>) => void)",
            "description": "Native onChange attribute or callback; see the linked primitive API."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, NavigationMenuListState>",
            "description": "Allows you to replace the component's HTML element\nwith a different tag, or compose it with another component.\n\nAccepts a `ReactElement` or a function that returns the element to render."
          },
          {
            "name": "ref",
            "type": "Ref<HTMLUListElement>",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          }
        ]
      },
      {
        "name": "NavigationMenuTrigger",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "nativeButton",
            "type": "boolean",
            "description": "Whether the component renders a native `<button>` element when replacing it\nvia the `render` prop.\nSet to `false` if the rendered element is not a button (for example, `<div>`).",
            "default": "true"
          },
          {
            "name": "ref",
            "type": "Ref<HTMLButtonElement>",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "disabled",
            "type": "boolean",
            "description": "Native disabled attribute or callback; see the linked primitive API."
          },
          {
            "name": "name",
            "type": "string",
            "description": "Native name attribute or callback; see the linked primitive API."
          },
          {
            "name": "value",
            "type": "string | number | readonly string[]",
            "description": "Native value attribute or callback; see the linked primitive API."
          },
          {
            "name": "id",
            "type": "string",
            "description": "Native id attribute or callback; see the linked primitive API."
          },
          {
            "name": "aria-label",
            "type": "string",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLButtonElement, Element>>) => void)",
            "description": "Native onChange attribute or callback; see the linked primitive API."
          },
          {
            "name": "className",
            "type": "string | ((state: NavigationMenuTriggerState) => string | undefined)",
            "description": "CSS class applied to the element, or a function that\nreturns a class based on the component's state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, NavigationMenuTriggerState>",
            "description": "Allows you to replace the component's HTML element\nwith a different tag, or compose it with another component.\n\nAccepts a `ReactElement` or a function that returns the element to render."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: NavigationMenuTriggerState) => React.CSSProperties | undefined)",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          }
        ]
      },
      {
        "name": "NavigationMenuPositioner",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "anchor",
            "type": "Element | VirtualElement | React.RefObject<Element | null> | (() => Element | VirtualElement | null) | null",
            "description": "An element to position the popup against.\nBy default, the popup will be positioned against the trigger."
          },
          {
            "name": "positionMethod",
            "type": "\"absolute\" | \"fixed\"",
            "description": "Determines which CSS `position` property to use.",
            "default": "'absolute'"
          },
          {
            "name": "side",
            "type": "Side",
            "description": "Which side of the anchor element to align the popup against.\nMay automatically change to avoid collisions.",
            "default": "\"bottom\""
          },
          {
            "name": "sideOffset",
            "type": "number | OffsetFunction",
            "description": "Distance between the anchor and the popup in pixels.\nAlso accepts a function that returns the distance to read the dimensions of the anchor\nand positioner elements, along with its side and alignment.\n\nThe function takes a `data` object parameter with the following properties:\n- `data.anchor`: the dimensions of the anchor element with properties `width` and `height`.\n- `data.positioner`: the dimensions of the positioner element with properties `width` and `height`.\n- `data.side`: which side of the anchor element the positioner is aligned against.\n- `data.align`: how the positioner is aligned relative to the specified side.",
            "default": "8"
          },
          {
            "name": "align",
            "type": "Align",
            "description": "How to align the popup relative to the specified side.",
            "default": "\"start\""
          },
          {
            "name": "alignOffset",
            "type": "number | OffsetFunction",
            "description": "Additional offset along the alignment axis in pixels.\nAlso accepts a function that returns the offset to read the dimensions of the anchor\nand positioner elements, along with its side and alignment.\n\nThe function takes a `data` object parameter with the following properties:\n- `data.anchor`: the dimensions of the anchor element with properties `width` and `height`.\n- `data.positioner`: the dimensions of the positioner element with properties `width` and `height`.\n- `data.side`: which side of the anchor element the positioner is aligned against.\n- `data.align`: how the positioner is aligned relative to the specified side.",
            "default": "0"
          },
          {
            "name": "collisionBoundary",
            "type": "Boundary",
            "description": "An element or a rectangle that delimits the area that the popup is confined to.",
            "default": "'clipping-ancestors'"
          },
          {
            "name": "collisionPadding",
            "type": "Padding",
            "description": "Additional space to maintain from the edge of the collision boundary.",
            "default": "5"
          },
          {
            "name": "sticky",
            "type": "boolean",
            "description": "Whether to maintain the popup in the viewport after\nthe anchor element was scrolled out of view.",
            "default": "false"
          },
          {
            "name": "arrowPadding",
            "type": "number",
            "description": "Minimum distance to maintain between the arrow and the edges of the popup.\n\nUse it to prevent the arrow element from hanging out of the rounded corners of a popup.",
            "default": "5"
          },
          {
            "name": "disableAnchorTracking",
            "type": "boolean",
            "description": "Whether to disable the popup from tracking any layout shift of its positioning anchor.",
            "default": "false"
          },
          {
            "name": "collisionAvoidance",
            "type": "CollisionAvoidance",
            "description": "Determines how to handle collisions when positioning the popup.\n\n`side` controls overflow on the preferred placement axis (`top`/`bottom` or `left`/`right`):\n- `'flip'`: keep the requested side when it fits; otherwise try the opposite side\n  (`top` and `bottom`, or `left` and `right`).\n- `'shift'`: never change side; keep the requested side and move the popup within\n  the clipping boundary so it stays visible.\n- `'none'`: do not correct side-axis overflow.\n\n`align` controls overflow on the alignment axis (`start`/`center`/`end`):\n- `'flip'`: keep side, but swap `start` and `end` when the requested alignment overflows.\n- `'shift'`: keep side and requested alignment, then nudge the popup along the\n  alignment axis to fit.\n- `'none'`: do not correct alignment-axis overflow.\n\n`fallbackAxisSide` controls fallback behavior on the perpendicular axis when the\npreferred axis cannot fit:\n- `'start'`: allow perpendicular fallback and try the logical start side first\n  (`top` before `bottom`, or `left` before `right` in LTR).\n- `'end'`: allow perpendicular fallback and try the logical end side first\n  (`bottom` before `top`, or `right` before `left` in LTR).\n- `'none'`: do not fallback to the perpendicular axis.\n\nWhen `side` is `'shift'`, explicitly setting `align` only supports `'shift'` or `'none'`.\nIf `align` is omitted, it defaults to `'flip'`."
          },
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement>",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "id",
            "type": "string",
            "description": "Native id attribute or callback; see the linked primitive API."
          },
          {
            "name": "aria-label",
            "type": "string",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLDivElement, Element>>) => void)",
            "description": "Native onChange attribute or callback; see the linked primitive API."
          },
          {
            "name": "className",
            "type": "string | ((state: NavigationMenuPositionerState) => string | undefined)",
            "description": "CSS class applied to the element, or a function that\nreturns a class based on the component's state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, NavigationMenuPositionerState>",
            "description": "Allows you to replace the component's HTML element\nwith a different tag, or compose it with another component.\n\nAccepts a `ReactElement` or a function that returns the element to render."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: NavigationMenuPositionerState) => React.CSSProperties | undefined)",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          }
        ]
      },
      {
        "name": "navigationMenuTriggerStyle",
        "description": "Returns the trigger Tailwind classes for composing a native NavigationMenuLink. Accepts optional class or className values from class-variance-authority. It supplies visual styling; the link retains its own native semantics.",
        "props": []
      }
    ],
    "links": [
      {
        "label": "Primitive API reference",
        "href": "https://base-ui.com/react/components/navigation-menu"
      }
    ],
    "notes": [
      "Native attributes and aria-* attributes are forwarded to the rendered element. Component source owns Leement styling; the linked primitive documents deeper behavior."
    ]
  },
  "resizable": {
    "parts": [
      {
        "name": "ResizableHandle",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "style",
            "type": "CSSProperties",
            "description": "CSS properties.\r\n\r\n\u2139\ufe0f Use the `data-separator` attribute for custom _hover_ and _active_ styles\r\n\r\n\u26a0\ufe0f The following properties cannot be overridden: `flex-grow`, `flex-shrink`"
          },
          {
            "name": "className",
            "type": "string",
            "description": "CSS class name.\r\n\r\n\u2139\ufe0f Use the `data-separator` attribute for custom _hover_ and _active_ styles\r\n\r\n\u26a0\ufe0f The following properties cannot be overridden: `flex-grow`, `flex-shrink`"
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[]",
            "description": "Native defaultValue attribute or callback; see the linked primitive API."
          },
          {
            "name": "id",
            "type": "string",
            "description": "Uniquely identifies the separator within the parent group.\r\nFalls back to `useId` when not provided.\r\n\r\n\u2139\ufe0f This value will also be assigned to the `data-separator` attribute."
          },
          {
            "name": "aria-label",
            "type": "string",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "ChangeEventHandler<HTMLDivElement, Element>",
            "description": "Native onChange attribute or callback; see the linked primitive API."
          },
          {
            "name": "disabled",
            "type": "boolean",
            "description": "When disabled, the separator cannot be used to resize its neighboring panels.\r\n\r\n\u2139\ufe0f The panels may still be resized indirectly (while other panels are being resized).\r\nTo prevent a panel from being resized at all, it needs to also be disabled."
          },
          {
            "name": "disableDoubleClick",
            "type": "boolean",
            "description": "When true, double-clicking this `Separator` will not reset its `Panel` to its default size."
          },
          {
            "name": "elementRef",
            "type": "Ref<HTMLDivElement>",
            "description": "Ref attached to the root `HTMLDivElement`."
          },
          {
            "name": "withHandle",
            "type": "boolean",
            "description": "Show a visible grip without changing the separator keyboard or pointer behavior."
          }
        ]
      },
      {
        "name": "ResizablePanel",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "style",
            "type": "CSSProperties",
            "description": "CSS properties.\r\n\r\n\u26a0\ufe0f Style is applied to nested `HTMLDivElement` to avoid styles that interfere with Flex layout."
          },
          {
            "name": "className",
            "type": "string",
            "description": "CSS class name.\r\n\r\n\u26a0\ufe0f Class is applied to nested `HTMLDivElement` to avoid styles that interfere with Flex layout."
          },
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[]",
            "description": "Native defaultValue attribute or callback; see the linked primitive API."
          },
          {
            "name": "id",
            "type": "string",
            "description": "Uniquely identifies this panel within the parent group.\r\nFalls back to `useId` when not provided.\r\n\r\n\u2139\ufe0f This prop is used to associate persisted group layouts with the original panel.\r\n\r\n\u2139\ufe0f This value will also be assigned to the `data-panel` attribute."
          },
          {
            "name": "aria-label",
            "type": "string",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "ChangeEventHandler<HTMLDivElement, Element>",
            "description": "Native onChange attribute or callback; see the linked primitive API."
          },
          {
            "name": "collapsedSize",
            "type": "string | number",
            "description": "Panel size when collapsed; defaults to 0%."
          },
          {
            "name": "collapsible",
            "type": "boolean",
            "description": "This panel can be collapsed.\r\n\r\n\u2139\ufe0f A collapsible panel will collapse when it's size is less than of the specified `minSize`"
          },
          {
            "name": "defaultSize",
            "type": "string | number",
            "description": "Default size of Panel within its parent group; default is auto-assigned based on the total number of Panels.\r\n\r\n\u26a0\ufe0f Percentage based sizes may cause slight layout shift when server-rendering.\r\nFor more information see the documentation."
          },
          {
            "name": "disabled",
            "type": "boolean",
            "description": "When disabled, a panel cannot be resized either directly or indirectly (by resizing another panel)."
          },
          {
            "name": "elementRef",
            "type": "Ref<HTMLDivElement | null>",
            "description": "Ref attached to the root `HTMLDivElement`."
          },
          {
            "name": "groupResizeBehavior",
            "type": "\"preserve-relative-size\" | \"preserve-pixel-size\"",
            "description": "How should this Panel behave if the parent Group is resized?\r\nDefaults to `preserve-relative-size`.\r\n\r\n- `preserve-relative-size`: Retain the current relative size (as a percentage of the Group)\r\n- `preserve-pixel-size`: Retain its current size (in pixels)\r\n\r\n\u2139\ufe0f Panel min/max size constraints may impact this behavior.\r\n\r\n\u26a0\ufe0f A Group must contain at least one Panel with `preserve-relative-size` resize behavior."
          },
          {
            "name": "maxSize",
            "type": "string | number",
            "description": "Maximum size of Panel within its parent group; defaults to 100%."
          },
          {
            "name": "minSize",
            "type": "string | number",
            "description": "Minimum size of Panel within its parent group; defaults to 0%."
          },
          {
            "name": "onResize",
            "type": "((panelSize: PanelSize, id: string | number | undefined, prevPanelSize: PanelSize | undefined) => void)",
            "description": "Called when panel sizes change."
          },
          {
            "name": "panelRef",
            "type": "Ref<PanelImperativeHandle | null>",
            "description": "Exposes the following imperative API:\r\n- `collapse(): void`\r\n- `expand(): void`\r\n- `getSize(): number`\r\n- `isCollapsed(): boolean`\r\n- `resize(size: number): void`\r\n\r\n\u2139\ufe0f The `usePanelRef` and `usePanelCallbackRef` hooks are exported for convenience use in TypeScript projects."
          }
        ]
      },
      {
        "name": "ResizablePanelGroup",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "defaultValue",
            "type": "string | number | readonly string[]",
            "description": "Native defaultValue attribute or callback; see the linked primitive API."
          },
          {
            "name": "className",
            "type": "string",
            "description": "CSS class name."
          },
          {
            "name": "id",
            "type": "string",
            "description": "Uniquely identifies this group within an application.\r\nFalls back to `useId` when not provided.\r\n\r\n\u2139\ufe0f This value will also be assigned to the `data-group` attribute."
          },
          {
            "name": "aria-label",
            "type": "string",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Panel and Separator components that comprise this group."
          },
          {
            "name": "onChange",
            "type": "ChangeEventHandler<HTMLDivElement, Element>",
            "description": "Native onChange attribute or callback; see the linked primitive API."
          },
          {
            "name": "defaultLayout",
            "type": "Layout",
            "description": "Default layout for the Group.\r\n\r\n\u2139\ufe0f This value allows layouts to be remembered between page reloads.\r\n\r\n\u26a0\ufe0f Slight layout shift may occur when server-rendering panels with percentage-based default sizes.\r\nRefer to the documentation for suggestions on how to minimize the impact of this."
          },
          {
            "name": "disableCursor",
            "type": "boolean",
            "description": "This library sets custom mouse cursor styles to indicate drag state.\r\nUse this prop to disable that behavior for Panels and Separators in this group."
          },
          {
            "name": "disabled",
            "type": "boolean",
            "description": "Disable resize functionality."
          },
          {
            "name": "elementRef",
            "type": "Ref<HTMLDivElement | null>",
            "description": "Ref attached to the root `HTMLDivElement`."
          },
          {
            "name": "groupRef",
            "type": "Ref<GroupImperativeHandle | null>",
            "description": "Exposes the following imperative API:\r\n- `getLayout(): Layout`\r\n- `setLayout(layout: Layout): void`\r\n\r\n\u2139\ufe0f The `useGroupRef` and `useGroupCallbackRef` hooks are exported for convenience use in TypeScript projects."
          },
          {
            "name": "onLayoutChange",
            "type": "((layout: Layout) => void | undefined)",
            "description": "Called when the Group's layout is changing.\r\n\r\n\u26a0\ufe0f For layout changes caused by pointer events, this method is called each time the pointer is moved.\r\nFor most cases, it is recommended to use the `onLayoutChanged` callback instead."
          },
          {
            "name": "onLayoutChanged",
            "type": "((layout: Layout, meta: LayoutChangedMeta) => void)",
            "description": "Called after the Group's layout has  been changed.\r\n\r\n\u2139\ufe0f For layout changes caused by pointer events, this method is not called until the pointer has been released.\r\nThis method is recommended when saving layouts to some storage api.\r\n\r\n\u2139\ufe0f The second argument contains meta information about the layout change.\r\nThe `isUserInteraction` attribute signals whether the resize was caused by direct user input.\r\nIt is true for resizes caused by pointer or keyboard input\r\nand false for other triggers (e.g. imperative API calls, initial mount, etc.)"
          },
          {
            "name": "resizeTargetMinimumSize",
            "type": "{ coarse: number; fine: number; }",
            "description": "Minimum size of the resizable hit target area (either `Separator` or `Panel` edge)\r\nThis threshold ensures are large enough to avoid mis-clicks.\r\n\r\n- Coarse inputs (typically a finger on a touchscreen) have reduced accuracy;\r\nto ensure accessibility and ease of use, hit targets should be larger to prevent mis-clicks.\r\n- Fine inputs (typically a mouse) can be smaller\r\n\r\n\u2139\ufe0f [Apple interface guidelines](https://developer.apple.com/design/human-interface-guidelines/accessibility) suggest `20pt` (`27px`) on desktops and `28pt` (`37px`) for touch devices\r\nIn practice this seems to be much larger than many of their own applications use though."
          },
          {
            "name": "orientation",
            "type": "\"horizontal\" | \"vertical\"",
            "description": "Specifies the resizable orientation (\"horizontal\" or \"vertical\"); defaults to \"horizontal\""
          }
        ]
      }
    ],
    "links": [
      {
        "label": "Primitive API reference",
        "href": "https://react-resizable-panels.vercel.app/"
      }
    ],
    "notes": [
      "Native attributes and aria-* attributes are forwarded to the rendered element. Component source owns Leement styling; the linked primitive documents deeper behavior.",
      "v4 uses orientation and percentages with units (e.g. defaultSize=\"35%\"). Use onLayoutChanged for persistence; sizes are a record keyed by panel id."
    ]
  },
  "scroll-area": {
    "parts": [
      {
        "name": "ScrollArea",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "overflowEdgeThreshold",
            "type": "number | Partial<{ xStart: number; xEnd: number; yStart: number; yEnd: number; }>",
            "description": "The threshold in pixels that must be passed before the overflow edge attributes are applied.\nAccepts a single number for all edges or an object to configure them individually.",
            "default": "0"
          },
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement>",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "id",
            "type": "string",
            "description": "Native id attribute or callback; see the linked primitive API."
          },
          {
            "name": "aria-label",
            "type": "string",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLDivElement, Element>>) => void)",
            "description": "Native onChange attribute or callback; see the linked primitive API."
          },
          {
            "name": "className",
            "type": "string | ((state: ScrollAreaRootState) => string | undefined)",
            "description": "CSS class applied to the element, or a function that\nreturns a class based on the component's state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, ScrollAreaRootState>",
            "description": "Allows you to replace the component's HTML element\nwith a different tag, or compose it with another component.\n\nAccepts a `ReactElement` or a function that returns the element to render."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: ScrollAreaRootState) => React.CSSProperties | undefined)",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          }
        ]
      },
      {
        "name": "ScrollBar",
        "description": "Public part; forwards its typed primitive or native attributes.",
        "props": [
          {
            "name": "orientation",
            "type": "\"horizontal\" | \"vertical\"",
            "description": "Whether the scrollbar controls vertical or horizontal scroll.",
            "default": "\"vertical\""
          },
          {
            "name": "keepMounted",
            "type": "boolean",
            "description": "Whether to keep the HTML element in the DOM when the viewport isn't scrollable.",
            "default": "false"
          },
          {
            "name": "ref",
            "type": "Ref<HTMLDivElement>",
            "description": "Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref)."
          },
          {
            "name": "id",
            "type": "string",
            "description": "Native id attribute or callback; see the linked primitive API."
          },
          {
            "name": "aria-label",
            "type": "string",
            "description": "Defines a string value that labels the current element."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "description": "Content rendered by this part."
          },
          {
            "name": "onChange",
            "type": "((event: BaseUIEvent<ChangeEvent<HTMLDivElement, Element>>) => void)",
            "description": "Native onChange attribute or callback; see the linked primitive API."
          },
          {
            "name": "className",
            "type": "string | ((state: ScrollAreaScrollbarState) => string | undefined)",
            "description": "CSS class applied to the element, or a function that\nreturns a class based on the component's state."
          },
          {
            "name": "render",
            "type": "React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | ComponentRenderFn<HTMLProps, ScrollAreaScrollbarState>",
            "description": "Allows you to replace the component's HTML element\nwith a different tag, or compose it with another component.\n\nAccepts a `ReactElement` or a function that returns the element to render."
          },
          {
            "name": "style",
            "type": "React.CSSProperties | ((state: ScrollAreaScrollbarState) => React.CSSProperties | undefined)",
            "description": "Style applied to the element, or a function that\nreturns a style object based on the component's state."
          }
        ]
      }
    ],
    "links": [
      {
        "label": "Primitive API reference",
        "href": "https://base-ui.com/react/components/scroll-area"
      }
    ],
    "notes": [
      "Native attributes and aria-* attributes are forwarded to the rendered element. Component source owns Leement styling; the linked primitive documents deeper behavior."
    ]
  }
} satisfies Record<string, ApiReference>;
