import type { ApiReference } from "./api-reference";

export const contentApiReferences = {
  "attachment": {
    "parts": [
      {
        "name": "Attachment",
        "description": "File surface; file data and upload behavior belong to the app.",
        "props": [
          {
            "name": "state",
            "type": "\"idle\" | \"uploading\" | \"processing\" | \"error\" | \"done\"",
            "description": "Displays the file processing state.",
            "default": "\"done\""
          },
          {
            "name": "size",
            "type": "\"default\" | \"sm\" | \"xs\"",
            "description": "Spacing of the surface and its parts.",
            "default": "\"default\""
          },
          {
            "name": "orientation",
            "type": "\"horizontal\" | \"vertical\"",
            "description": "Layout of the file card.",
            "default": "\"horizontal\""
          },
          {
            "name": "className",
            "type": "string",
            "description": "Additional Tailwind classes."
          }
        ]
      },
      {
        "name": "AttachmentMedia",
        "description": "Icon or image preview.",
        "props": [
          {
            "name": "variant",
            "type": "\"icon\" | \"image\"",
            "description": "Style of the supplied preview.",
            "default": "\"icon\""
          },
          {
            "name": "className",
            "type": "string",
            "description": "Additional Tailwind classes."
          }
        ]
      },
      {
        "name": "AttachmentGroup",
        "description": "Accepts native div attributes, children and ref.",
        "props": [
          {
            "name": "className",
            "type": "string",
            "description": "Additional Tailwind classes."
          }
        ]
      },
      {
        "name": "AttachmentContent",
        "description": "Accepts native div attributes, children and ref.",
        "props": [
          {
            "name": "className",
            "type": "string",
            "description": "Additional Tailwind classes."
          }
        ]
      },
      {
        "name": "AttachmentActions",
        "description": "Accepts native div attributes, children and ref.",
        "props": [
          {
            "name": "className",
            "type": "string",
            "description": "Additional Tailwind classes."
          }
        ]
      },
      {
        "name": "AttachmentTitle",
        "description": "Accepts native span attributes, children and ref.",
        "props": [
          {
            "name": "className",
            "type": "string",
            "description": "Additional Tailwind classes."
          }
        ]
      },
      {
        "name": "AttachmentDescription",
        "description": "Accepts native span attributes, children and ref.",
        "props": [
          {
            "name": "className",
            "type": "string",
            "description": "Additional Tailwind classes."
          }
        ]
      },
      {
        "name": "AttachmentTrigger",
        "description": "A stretched trigger behind actions. Give it a file-specific accessible name.",
        "props": [
          {
            "name": "render",
            "type": "React.ReactElement | render callback",
            "description": "Compose into another semantic element with Base UI useRender."
          },
          {
            "name": "type",
            "type": "\"button\" | \"submit\" | \"reset\"",
            "description": "Native button type; composed elements retain their own semantics.",
            "default": "\"button\" when not composed"
          },
          {
            "name": "className",
            "type": "string",
            "description": "Additional Tailwind classes."
          }
        ]
      },
      {
        "name": "AttachmentAction",
        "description": "A Leement Button above the stretched trigger. Accepts Button props including asChild, loading and disabled.",
        "props": [
          {
            "name": "variant",
            "type": "ButtonProps[\"variant\"]",
            "description": "Visual role.",
            "default": "\"ghost\""
          },
          {
            "name": "size",
            "type": "ButtonProps[\"size\"]",
            "description": "Action control size.",
            "default": "\"icon-sm\""
          },
          {
            "name": "className",
            "type": "string",
            "description": "Additional Tailwind classes."
          }
        ]
      }
    ],
    "links": [
      {
        "label": "Base UI useRender composition API",
        "href": "https://base-ui.com/react/utils/use-render"
      }
    ]
  },
  "bubble": {
    "parts": [
      {
        "name": "Bubble",
        "description": "Message surface and alignment; does not create a chat backend.",
        "props": [
          {
            "name": "variant",
            "type": "\"default\" | \"secondary\" | \"muted\" | \"tinted\" | \"outline\" | \"ghost\" | \"destructive\"",
            "description": "Semantic surface role.",
            "default": "\"default\""
          },
          {
            "name": "align",
            "type": "\"start\" | \"end\"",
            "description": "Position in the conversation.",
            "default": "\"start\""
          },
          {
            "name": "className",
            "type": "string",
            "description": "Additional Tailwind classes."
          }
        ]
      },
      {
        "name": "BubbleGroup",
        "description": "Accepts native div attributes, children and ref.",
        "props": [
          {
            "name": "className",
            "type": "string",
            "description": "Additional Tailwind classes."
          }
        ]
      },
      {
        "name": "BubbleContent",
        "description": "Visible content, optionally composed into a named button or link.",
        "props": [
          {
            "name": "render",
            "type": "React.ReactElement | render callback",
            "description": "Compose into another semantic element with Base UI useRender."
          },
          {
            "name": "className",
            "type": "string",
            "description": "Additional Tailwind classes."
          }
        ]
      },
      {
        "name": "BubbleReactions",
        "description": "Position a supplied reaction control group near the bubble.",
        "props": [
          {
            "name": "side",
            "type": "\"top\" | \"bottom\"",
            "description": "Vertical attachment.",
            "default": "\"bottom\""
          },
          {
            "name": "align",
            "type": "\"start\" | \"end\"",
            "description": "Horizontal attachment.",
            "default": "\"end\""
          },
          {
            "name": "className",
            "type": "string",
            "description": "Additional Tailwind classes."
          }
        ]
      }
    ],
    "links": [
      {
        "label": "Base UI useRender composition API",
        "href": "https://base-ui.com/react/utils/use-render"
      }
    ]
  },
  "direction": {
    "parts": [
      {
        "name": "DirectionProvider",
        "description": "Base UI logical direction context. Also set dir on native content.",
        "props": [
          {
            "name": "direction",
            "type": "\"ltr\" | \"rtl\"",
            "description": "Direction passed to descendants.",
            "default": "ltr"
          },
          {
            "name": "children",
            "type": "React.ReactNode",
            "description": "Content receiving the direction."
          }
        ]
      },
      {
        "name": "useDirection",
        "description": "Returns the current logical direction (ltr or rtl). Call inside a React component.",
        "props": []
      }
    ],
    "links": [
      {
        "label": "Base UI DirectionProvider API",
        "href": "https://base-ui.com/react/utils/direction-provider"
      }
    ]
  },
  "input-otp": {
    "parts": [
      {
        "name": "InputOTP",
        "description": "One native input controls the visual slots. Input verification and network submission belong to the app.",
        "props": [
          {
            "name": "maxLength",
            "type": "number",
            "description": "Maximum number of characters and slots.",
            "required": true
          },
          {
            "name": "value",
            "type": "string",
            "description": "Controlled code; update it in onChange."
          },
          {
            "name": "defaultValue",
            "type": "string",
            "description": "Initial uncontrolled code."
          },
          {
            "name": "onChange",
            "type": "(value: string) => unknown",
            "description": "Receives the new full code, not a DOM event."
          },
          {
            "name": "onComplete",
            "type": "(value: string) => unknown",
            "description": "Called when input reaches maxLength."
          },
          {
            "name": "pattern",
            "type": "string",
            "description": "Character validation regex such as REGEXP_ONLY_DIGITS."
          },
          {
            "name": "pasteTransformer",
            "type": "(pasted: string) => string",
            "description": "Normalize pasted text before validation."
          },
          {
            "name": "disabled",
            "type": "boolean",
            "description": "Disables code editing.",
            "default": "false"
          },
          {
            "name": "containerClassName",
            "type": "string",
            "description": "Classes on the visual slot container."
          },
          {
            "name": "name",
            "type": "string",
            "description": "Native form entry name."
          },
          {
            "name": "id",
            "type": "string",
            "description": "Connects the single native input to its label."
          },
          {
            "name": "className",
            "type": "string",
            "description": "Additional Tailwind classes."
          }
        ]
      },
      {
        "name": "InputOTPGroup",
        "description": "Accepts native div attributes, children and ref.",
        "props": [
          {
            "name": "className",
            "type": "string",
            "description": "Additional Tailwind classes."
          }
        ]
      },
      {
        "name": "InputOTPSlot",
        "description": "Visual slot derived from the one input. No separate tab stop or input.",
        "props": [
          {
            "name": "index",
            "type": "number",
            "description": "Zero-based slot index; less than maxLength.",
            "required": true
          },
          {
            "name": "className",
            "type": "string",
            "description": "Additional Tailwind classes."
          }
        ]
      },
      {
        "name": "InputOTPSeparator",
        "description": "Accepts native div attributes, children and ref.",
        "props": [
          {
            "name": "className",
            "type": "string",
            "description": "Additional Tailwind classes."
          }
        ]
      }
    ],
    "links": [
      {
        "label": "input-otp API and input behavior",
        "href": "https://github.com/guilhermerodz/input-otp"
      }
    ]
  },
  "item": {
    "parts": [
      {
        "name": "Item",
        "description": "Content row, optionally composed into a native link or another semantic element.",
        "props": [
          {
            "name": "variant",
            "type": "\"default\" | \"outline\" | \"muted\"",
            "description": "Surface role.",
            "default": "\"default\""
          },
          {
            "name": "size",
            "type": "\"default\" | \"sm\" | \"xs\"",
            "description": "Content density.",
            "default": "\"default\""
          },
          {
            "name": "render",
            "type": "React.ReactElement | render callback",
            "description": "Compose into another semantic element with Base UI useRender."
          },
          {
            "name": "className",
            "type": "string",
            "description": "Additional Tailwind classes."
          }
        ]
      },
      {
        "name": "ItemMedia",
        "description": "Visual media beside the content.",
        "props": [
          {
            "name": "variant",
            "type": "\"default\" | \"icon\" | \"image\"",
            "description": "Media presentation.",
            "default": "\"default\""
          },
          {
            "name": "className",
            "type": "string",
            "description": "Additional Tailwind classes."
          }
        ]
      },
      {
        "name": "ItemGroup",
        "description": "Accepts native div attributes, children and ref.",
        "props": [
          {
            "name": "className",
            "type": "string",
            "description": "Additional Tailwind classes."
          }
        ]
      },
      {
        "name": "ItemContent",
        "description": "Accepts native div attributes, children and ref.",
        "props": [
          {
            "name": "className",
            "type": "string",
            "description": "Additional Tailwind classes."
          }
        ]
      },
      {
        "name": "ItemTitle",
        "description": "Accepts native div attributes, children and ref.",
        "props": [
          {
            "name": "className",
            "type": "string",
            "description": "Additional Tailwind classes."
          }
        ]
      },
      {
        "name": "ItemActions",
        "description": "Accepts native div attributes, children and ref.",
        "props": [
          {
            "name": "className",
            "type": "string",
            "description": "Additional Tailwind classes."
          }
        ]
      },
      {
        "name": "ItemHeader",
        "description": "Accepts native div attributes, children and ref.",
        "props": [
          {
            "name": "className",
            "type": "string",
            "description": "Additional Tailwind classes."
          }
        ]
      },
      {
        "name": "ItemFooter",
        "description": "Accepts native div attributes, children and ref.",
        "props": [
          {
            "name": "className",
            "type": "string",
            "description": "Additional Tailwind classes."
          }
        ]
      },
      {
        "name": "ItemDescription",
        "description": "Accepts native p attributes, children and ref.",
        "props": [
          {
            "name": "className",
            "type": "string",
            "description": "Additional Tailwind classes."
          }
        ]
      },
      {
        "name": "ItemSeparator",
        "description": "Leement Separator; accepts its public props and native separator attributes.",
        "props": [
          {
            "name": "className",
            "type": "string",
            "description": "Additional Tailwind classes."
          }
        ]
      }
    ],
    "links": [
      {
        "label": "Base UI useRender composition API",
        "href": "https://base-ui.com/react/utils/use-render"
      }
    ]
  },
  "marker": {
    "parts": [
      {
        "name": "Marker",
        "description": "Content or status marker, with an optional semantic link/button render.",
        "props": [
          {
            "name": "variant",
            "type": "\"default\" | \"separator\" | \"border\"",
            "description": "How the marker separates content.",
            "default": "\"default\""
          },
          {
            "name": "render",
            "type": "React.ReactElement | render callback",
            "description": "Compose into another semantic element with Base UI useRender."
          },
          {
            "name": "className",
            "type": "string",
            "description": "Additional Tailwind classes."
          }
        ]
      },
      {
        "name": "MarkerIcon",
        "description": "Accepts native span attributes, children and ref.",
        "props": [
          {
            "name": "className",
            "type": "string",
            "description": "Additional Tailwind classes."
          }
        ]
      },
      {
        "name": "MarkerContent",
        "description": "Accepts native span attributes, children and ref.",
        "props": [
          {
            "name": "className",
            "type": "string",
            "description": "Additional Tailwind classes."
          }
        ]
      }
    ],
    "links": [
      {
        "label": "Base UI useRender composition API",
        "href": "https://base-ui.com/react/utils/use-render"
      }
    ]
  }
} satisfies Record<string, ApiReference>;
