import type { ApiReference } from "./api-reference";

export const conversionBlockApiReferences = {
  "compare": {
    "parts": [
      {
        "name": "Compare",
        "description": "Editable compare block.",
        "props": [
          {
            "name": "heading",
            "type": "string",
            "required": false,
            "default": "\"Compare\"",
            "description": "Visible section heading."
          },
          {
            "name": "description",
            "type": "string",
            "required": false,
            "default": "\"A modern framework for building websites that is better than the competition.\"",
            "description": "Supporting content."
          },
          {
            "name": "primaryLabel",
            "type": "string",
            "required": false,
            "default": "\"Primary product\"",
            "description": "Header for the primary product column."
          },
          {
            "name": "secondaryLabel",
            "type": "string",
            "required": false,
            "default": "\"Alternative\"",
            "description": "Header for the comparison column."
          },
          {
            "name": "rows",
            "type": "CompareRow[]",
            "required": false,
            "default": "Demonstration data in source",
            "description": "Feature values; optional explanations use focusable tooltip triggers. [] renders an empty row."
          },
          {
            "name": "className",
            "type": "string",
            "required": false,
            "description": "Additional classes on the section."
          }
        ]
      },
      {
        "name": "CompareRow",
        "description": "Application-owned record.",
        "props": [
          {
            "name": "feature",
            "type": "string",
            "required": true,
            "description": "Application-supplied feature."
          },
          {
            "name": "primary",
            "type": "string",
            "required": true,
            "description": "Application-supplied primary."
          },
          {
            "name": "secondary",
            "type": "string",
            "required": true,
            "description": "Application-supplied secondary."
          },
          {
            "name": "secondaryTooltip",
            "type": "{\n    title: string;\n    description: string;\n  }",
            "required": false,
            "description": "Application-supplied secondaryTooltip."
          }
        ]
      }
    ],
    "notes": [
      "The default content is demonstration data. Your application owns destinations and persistence."
    ],
    "links": [
      {
        "label": "Kibo public block composition",
        "href": "https://www.kibo-ui.com/blocks/compare"
      }
    ]
  },
  "compliance": {
    "parts": [
      {
        "name": "Compliance",
        "description": "Editable compliance block.",
        "props": [
          {
            "name": "tagline",
            "type": "string",
            "required": false,
            "default": "\"Compliance\"",
            "description": "Short introductory label."
          },
          {
            "name": "heading",
            "type": "string",
            "required": false,
            "default": "\"Security and compliance information\"",
            "description": "Visible section heading."
          },
          {
            "name": "description",
            "type": "string",
            "required": false,
            "default": "Demonstration data in source",
            "description": "Supporting content."
          },
          {
            "name": "badges",
            "type": "ComplianceBadge[]",
            "required": false,
            "default": "Demonstration data in source",
            "description": "Verified badges supplied by your application. Demo badges are not certifications."
          },
          {
            "name": "features",
            "type": "ComplianceFeature[]",
            "required": false,
            "default": "Demonstration data in source",
            "description": "Security practices with supporting media and descriptions."
          },
          {
            "name": "className",
            "type": "string",
            "required": false,
            "description": "Additional classes on the section."
          }
        ]
      },
      {
        "name": "ComplianceBadge",
        "description": "Application-owned record.",
        "props": [
          {
            "name": "image",
            "type": "string",
            "required": true,
            "description": "Image source or source/alt record, according to the declared type."
          },
          {
            "name": "alt",
            "type": "string",
            "required": true,
            "description": "Application-supplied alt."
          }
        ]
      },
      {
        "name": "ComplianceFeature",
        "description": "Application-owned record.",
        "props": [
          {
            "name": "title",
            "type": "string",
            "required": true,
            "description": "Visible heading or record title."
          },
          {
            "name": "description",
            "type": "string",
            "required": true,
            "description": "Supporting content."
          },
          {
            "name": "badgeImage",
            "type": "string",
            "required": true,
            "description": "Application-supplied badgeImage."
          },
          {
            "name": "badgeAlt",
            "type": "string",
            "required": true,
            "description": "Application-supplied badgeAlt."
          }
        ]
      }
    ],
    "notes": [
      "The default content is demonstration data. Your application owns destinations and persistence."
    ],
    "links": [
      {
        "label": "Kibo public block composition",
        "href": "https://www.kibo-ui.com/blocks/compliance"
      }
    ]
  },
  "contact": {
    "parts": [
      {
        "name": "Contact",
        "description": "Editable contact block.",
        "props": [
          {
            "name": "title",
            "type": "string",
            "required": false,
            "default": "\"Contact us\"",
            "description": "Visible heading or record title."
          },
          {
            "name": "description",
            "type": "string",
            "required": false,
            "default": "\"Have a question or want to work together? Send us a message.\"",
            "description": "Supporting content."
          },
          {
            "name": "phone",
            "type": "string",
            "required": false,
            "default": "\"+82 10 0000 0000\"",
            "description": "Phone number linked with a tel destination."
          },
          {
            "name": "email",
            "type": "string",
            "required": false,
            "default": "\"hello@example.com\"",
            "description": "Contact address linked with mailto."
          },
          {
            "name": "web",
            "type": "{ label: string; url: string }",
            "required": false,
            "default": "{ label: \"example.com\", url: \"https://example.com\" }",
            "description": "Visible website label and URL."
          },
          {
            "name": "className",
            "type": "string",
            "required": false,
            "description": "Additional classes on the section."
          },
          {
            "name": "disabled",
            "type": "boolean",
            "required": false,
            "description": "Disables form controls and submission."
          },
          {
            "name": "onSubmit",
            "type": "(data: ContactFormData) => void | Promise<void>",
            "required": false,
            "description": "Receives trimmed form fields. Return a promise for pending/error/success handling; omit to disable sending."
          }
        ]
      },
      {
        "name": "ContactFormData",
        "description": "Application-owned record.",
        "props": [
          {
            "name": "firstName",
            "type": "string",
            "required": true,
            "description": "Application-supplied firstName."
          },
          {
            "name": "lastName",
            "type": "string",
            "required": true,
            "description": "Application-supplied lastName."
          },
          {
            "name": "email",
            "type": "string",
            "required": true,
            "description": "Application-supplied email."
          },
          {
            "name": "subject",
            "type": "string",
            "required": true,
            "description": "Application-supplied subject."
          },
          {
            "name": "message",
            "type": "string",
            "required": true,
            "description": "Application-supplied message."
          }
        ]
      }
    ],
    "notes": [
      "The default content is demonstration data. Your application owns destinations and persistence.",
      "Native required/email validation blocks delivery. Pending disables the form; failed delivery preserves input. Only callback success resets the fields."
    ],
    "links": [
      {
        "label": "Kibo public block composition",
        "href": "https://www.kibo-ui.com/blocks/contact"
      }
    ]
  },
  "cta": {
    "parts": [
      {
        "name": "CTA",
        "description": "Editable cta block.",
        "props": [
          {
            "name": "heading",
            "type": "string",
            "required": false,
            "default": "\"Call to Action\"",
            "description": "Visible section heading."
          },
          {
            "name": "description",
            "type": "string",
            "required": false,
            "default": "Demonstration data in source",
            "description": "Supporting content."
          },
          {
            "name": "buttons",
            "type": "{\n    primary?: {\n      text: string;\n      url: string;\n    };\n    secondary?: {\n      text: string;\n      url: string;\n    };\n  }",
            "required": false,
            "default": "{\n    primary: {\n      text: \"Get started\",\n      url: \"https://example.com\",\n    },\n  }",
            "description": "Optional primary and secondary native links."
          },
          {
            "name": "className",
            "type": "string",
            "required": false,
            "description": "Additional classes on the section."
          }
        ]
      }
    ],
    "notes": [
      "The default content is demonstration data. Your application owns destinations and persistence."
    ],
    "links": [
      {
        "label": "Kibo public block composition",
        "href": "https://www.kibo-ui.com/blocks/cta"
      }
    ]
  },
  "download": {
    "parts": [
      {
        "name": "Download",
        "description": "Editable download block.",
        "props": [
          {
            "name": "heading",
            "type": "string",
            "required": false,
            "default": "\"Download\"",
            "description": "Visible section heading."
          },
          {
            "name": "description",
            "type": "string",
            "required": false,
            "default": "\"Choose your platform and get started.\"",
            "description": "Supporting content."
          },
          {
            "name": "platforms",
            "type": "DownloadPlatforms",
            "required": false,
            "default": "Demonstration data in source",
            "description": "Optional desktop, iOS and Android records. Missing platforms are hidden; {} shows empty status."
          },
          {
            "name": "className",
            "type": "string",
            "required": false,
            "description": "Additional classes on the section."
          }
        ]
      },
      {
        "name": "DownloadPlatform",
        "description": "Application-owned record.",
        "props": [
          {
            "name": "title",
            "type": "string",
            "required": true,
            "description": "Visible heading or record title."
          },
          {
            "name": "subtitle",
            "type": "string",
            "required": true,
            "description": "Application-supplied subtitle."
          },
          {
            "name": "description",
            "type": "string",
            "required": true,
            "description": "Supporting content."
          },
          {
            "name": "url",
            "type": "string",
            "required": true,
            "description": "Native navigation destination."
          },
          {
            "name": "buttonText",
            "type": "string",
            "required": false,
            "description": "Call-to-action label."
          }
        ]
      },
      {
        "name": "DownloadPlatforms",
        "description": "Application-owned record.",
        "props": [
          {
            "name": "desktop",
            "type": "DownloadPlatform",
            "required": false,
            "description": "Application-supplied desktop."
          },
          {
            "name": "ios",
            "type": "DownloadPlatform",
            "required": false,
            "description": "Application-supplied ios."
          },
          {
            "name": "android",
            "type": "DownloadPlatform",
            "required": false,
            "description": "Application-supplied android."
          }
        ]
      }
    ],
    "notes": [
      "The default content is demonstration data. Your application owns destinations and persistence."
    ],
    "links": [
      {
        "label": "Kibo public block composition",
        "href": "https://www.kibo-ui.com/blocks/download"
      }
    ]
  },
  "experience": {
    "parts": [
      {
        "name": "Experience",
        "description": "Editable experience block.",
        "props": [
          {
            "name": "heading",
            "type": "string",
            "required": false,
            "default": "\"Experience\"",
            "description": "Visible section heading."
          },
          {
            "name": "buttonText",
            "type": "string",
            "required": false,
            "default": "\"Download CV\"",
            "description": "Call-to-action label."
          },
          {
            "name": "buttonUrl",
            "type": "string",
            "required": false,
            "default": "\"#\"",
            "description": "Call-to-action destination; omitting it hides the optional action."
          },
          {
            "name": "experience",
            "type": "ExperienceItem[]",
            "required": false,
            "default": "Demonstration data in source",
            "description": "Application-owned career records; [] shows empty status."
          },
          {
            "name": "className",
            "type": "string",
            "required": false,
            "description": "Additional classes on the section."
          }
        ]
      },
      {
        "name": "ExperienceItem",
        "description": "Application-owned record.",
        "props": [
          {
            "name": "period",
            "type": "string",
            "required": true,
            "description": "Application-supplied period."
          },
          {
            "name": "title",
            "type": "string",
            "required": true,
            "description": "Visible heading or record title."
          },
          {
            "name": "description",
            "type": "string",
            "required": true,
            "description": "Supporting content."
          },
          {
            "name": "company",
            "type": "string",
            "required": true,
            "description": "Company metadata displayed alongside the article."
          },
          {
            "name": "logo",
            "type": "string",
            "required": true,
            "description": "Optional company image URL."
          }
        ]
      }
    ],
    "notes": [
      "The default content is demonstration data. Your application owns destinations and persistence."
    ],
    "links": [
      {
        "label": "Kibo public block composition",
        "href": "https://www.kibo-ui.com/blocks/experience"
      }
    ]
  },
  "faq": {
    "parts": [
      {
        "name": "FAQ",
        "description": "Editable faq block.",
        "props": [
          {
            "name": "heading",
            "type": "string",
            "required": false,
            "default": "\"Frequently asked questions\"",
            "description": "Visible section heading."
          },
          {
            "name": "items",
            "type": "FaqItem[]",
            "required": false,
            "default": "Demonstration data in source",
            "description": "Questions and answers with stable unique IDs; [] shows empty status."
          },
          {
            "name": "className",
            "type": "string",
            "required": false,
            "description": "Additional classes on the section."
          }
        ]
      },
      {
        "name": "FaqItem",
        "description": "Application-owned record.",
        "props": [
          {
            "name": "id",
            "type": "string",
            "required": true,
            "description": "Stable unique record ID."
          },
          {
            "name": "question",
            "type": "string",
            "required": true,
            "description": "Application-supplied question."
          },
          {
            "name": "answer",
            "type": "string",
            "required": true,
            "description": "Application-supplied answer."
          }
        ]
      }
    ],
    "notes": [
      "The default content is demonstration data. Your application owns destinations and persistence.",
      "Base UI 1.7 uses native Tab focus order and Enter/Space to toggle answers. Arrow-key roving focus is no longer part of the primitive contract."
    ],
    "links": [
      {
        "label": "Kibo public block composition",
        "href": "https://www.kibo-ui.com/blocks/faq"
      }
    ]
  },
  "form": {
    "parts": [
      {
        "name": "EventForm",
        "description": "Editable form block.",
        "props": [
          {
            "name": "title",
            "type": "string",
            "required": false,
            "default": "\"Create your event\"",
            "description": "Visible heading or record title."
          },
          {
            "name": "description",
            "type": "string",
            "required": false,
            "default": "\"Create and customize your upcoming event.\"",
            "description": "Supporting content."
          },
          {
            "name": "className",
            "type": "string",
            "required": false,
            "description": "Additional classes on the section."
          },
          {
            "name": "disabled",
            "type": "boolean",
            "required": false,
            "description": "Disables every editable form control and action."
          },
          {
            "name": "defaultValue",
            "type": "Partial<EventFormData>",
            "required": false,
            "default": "{}",
            "description": "Initial form fields, event type, venue, date, tags and files. Default date is the fixed demo date 2026-10-05; supply an application date."
          },
          {
            "name": "eventTypes",
            "type": "Choice[]",
            "required": false,
            "default": "defaultEventTypes",
            "description": "Native choice cards. No available types disables event creation."
          },
          {
            "name": "venues",
            "type": "ComboboxOption[]",
            "required": false,
            "default": "defaultVenues",
            "description": "Searchable venue options. No venues disables event creation."
          },
          {
            "name": "availableTags",
            "type": "string[]",
            "required": false,
            "default": "Demonstration data in source",
            "description": "Suggested tags; users can enter custom tags."
          },
          {
            "name": "onSubmit",
            "type": "(data: EventFormData) => void | Promise<void>",
            "required": false,
            "description": "Receives one composed EventFormData record. Optional async callback owns persistence/upload; omission disables creation."
          },
          {
            "name": "onSaveDraft",
            "type": "(data: EventFormData) => void | Promise<void>",
            "required": false,
            "description": "Enables an optional draft action using current data. Name and organizer may be empty in a draft."
          }
        ]
      },
      {
        "name": "EventFormData",
        "description": "Application-owned record.",
        "props": [
          {
            "name": "name",
            "type": "string",
            "required": true,
            "description": "Visible name."
          },
          {
            "name": "organizer",
            "type": "string",
            "required": true,
            "description": "Application-supplied organizer."
          },
          {
            "name": "description",
            "type": "string",
            "required": true,
            "description": "Supporting content."
          },
          {
            "name": "eventType",
            "type": "string",
            "required": true,
            "description": "Application-supplied eventType."
          },
          {
            "name": "venue",
            "type": "string",
            "required": true,
            "description": "Application-supplied venue."
          },
          {
            "name": "date",
            "type": "Date",
            "required": true,
            "description": "Formatted release date supplied by the app."
          },
          {
            "name": "tags",
            "type": "string[]",
            "required": true,
            "description": "Application-supplied tags."
          },
          {
            "name": "files",
            "type": "File[]",
            "required": true,
            "description": "Application-supplied files."
          }
        ]
      }
    ],
    "notes": [
      "The default content is demonstration data. Your application owns destinations and persistence.",
      "Files are passed to the application without uploading. At most five images of 5 MB each are accepted. Submission failures preserve values. Draft data may be incomplete."
    ],
    "links": [
      {
        "label": "Kibo public block composition",
        "href": "https://www.kibo-ui.com/blocks/form"
      }
    ]
  }
} satisfies Record<string, ApiReference>;
