import type { ApiReference } from "./api-reference";

export const marketingBlockApiReferences = {
  "feature": {
    "parts": [
      {
        "name": "Feature",
        "description": "Editable feature block.",
        "props": [
          {
            "name": "title",
            "type": "string",
            "required": false,
            "default": "\"Features\"",
            "description": "Visible heading or record title."
          },
          {
            "name": "features",
            "type": "FeatureItem[]",
            "required": true,
            "description": "Feature records with stable IDs, accessible image text and description. [] shows empty status."
          },
          {
            "name": "value",
            "type": "string | null",
            "required": false,
            "description": "Controlled expanded feature ID, or null to collapse."
          },
          {
            "name": "defaultValue",
            "type": "string",
            "required": false,
            "description": "Initial expanded feature ID; defaults to the first record."
          },
          {
            "name": "onValueChange",
            "type": "(id: string | null) => void",
            "required": false,
            "description": "Receives requested ID or null on collapse. Controlled expansion remains app-owned."
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
        "name": "FeatureItem",
        "description": "Application-owned record.",
        "props": [
          {
            "name": "id",
            "type": "string",
            "required": true,
            "description": "Stable unique record ID."
          },
          {
            "name": "title",
            "type": "string",
            "required": true,
            "description": "Visible heading or record title."
          },
          {
            "name": "image",
            "type": "string",
            "required": true,
            "description": "Image source or source/alt record, according to the declared type."
          },
          {
            "name": "description",
            "type": "string",
            "required": true,
            "description": "Supporting content."
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
        "href": "https://www.kibo-ui.com/blocks/feature"
      }
    ]
  },
  "footer": {
    "parts": [
      {
        "name": "Footer",
        "description": "Editable footer block.",
        "props": [
          {
            "name": "logo",
            "type": "{\n    url: string;\n    src: string;\n    alt: string;\n    title: string;\n  }",
            "required": false,
            "default": "Demonstration data in source",
            "description": "Native destination plus image/title; uses the shared BrandLogo typography and icon/text composition."
          },
          {
            "name": "className",
            "type": "string",
            "required": false,
            "description": "Additional classes on the section."
          },
          {
            "name": "tagline",
            "type": "string",
            "required": false,
            "default": "\"Components made easy.\"",
            "description": "Short introductory label."
          },
          {
            "name": "menuItems",
            "type": "MenuItem[]",
            "required": false,
            "default": "Demonstration data in source",
            "description": "Named groups of navigation destinations."
          },
          {
            "name": "copyright",
            "type": "string",
            "required": false,
            "default": "\"\u00a9 2026 Example Studio. All rights reserved.\"",
            "description": "Application-owned copyright text."
          },
          {
            "name": "bottomLinks",
            "type": "{\n    text: string;\n    url: string;\n  }[]",
            "required": false,
            "default": "Demonstration data in source",
            "description": "Legal or supporting destinations."
          }
        ]
      },
      {
        "name": "MenuItem",
        "description": "Application-owned record.",
        "props": [
          {
            "name": "title",
            "type": "string",
            "required": true,
            "description": "Visible heading or record title."
          },
          {
            "name": "links",
            "type": "{\n    text: string;\n    url: string;\n  }[]",
            "required": true,
            "description": "Application-supplied links."
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
        "href": "https://www.kibo-ui.com/blocks/footer"
      }
    ]
  },
  "hero": {
    "parts": [
      {
        "name": "Hero",
        "description": "Editable hero block.",
        "props": [
          {
            "name": "heading",
            "type": "string",
            "required": false,
            "default": "\"A shared language for your next product\"",
            "description": "Visible section heading."
          },
          {
            "name": "description",
            "type": "string",
            "required": false,
            "default": "\"Build consistent interfaces with tokens and editable component source.\"",
            "description": "Supporting content."
          },
          {
            "name": "announcement",
            "type": "Pick<AnnouncementProps, \"label\" | \"title\" | \"href\">",
            "required": false,
            "description": "Optional Announcement label, title and native destination."
          },
          {
            "name": "primaryAction",
            "type": "HeroAction | null",
            "required": false,
            "default": "{ text: \"Get started\", url: \"https://example.com/docs\" }",
            "description": "Primary link; null hides this action."
          },
          {
            "name": "secondaryAction",
            "type": "HeroAction | null",
            "required": false,
            "default": "{ text: \"Learn more\", url: \"https://example.com/about\" }",
            "description": "Secondary link; null hides this action."
          },
          {
            "name": "logos",
            "type": "HeroLogo[]",
            "required": false,
            "default": "[]",
            "description": "Named partner links and optional decorative icons. An empty array hides the partner section."
          },
          {
            "name": "trustedLabel",
            "type": "string",
            "required": false,
            "default": "\"Trusted by teams building thoughtful products\"",
            "description": "Visible and accessible label for the partner section."
          },
          {
            "name": "video",
            "type": "VideoPlayerProps",
            "required": false,
            "description": "Optional shared VideoPlayer props, including captions and title."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "required": false,
            "description": "Application-owned content below the partners; replaces the optional video."
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
        "name": "HeroLogo",
        "description": "Application-owned record.",
        "props": [
          {
            "name": "name",
            "type": "string",
            "required": true,
            "description": "Visible name."
          },
          {
            "name": "icon",
            "type": "ReactNode",
            "required": false,
            "description": "Application-supplied decorative icon."
          },
          {
            "name": "url",
            "type": "string",
            "required": true,
            "description": "Native navigation destination."
          }
        ]
      },
      {
        "name": "HeroAction",
        "description": "Application-owned record.",
        "props": [
          {
            "name": "text",
            "type": "string",
            "required": true,
            "description": "Application-supplied text."
          },
          {
            "name": "url",
            "type": "string",
            "required": true,
            "description": "Native navigation destination."
          }
        ]
      }
    ],
    "notes": [
      "The default content is demonstration data. Your application owns destinations and persistence.",
      "Your app supplies video URLs and accessible captions/transcripts. The docs use a local sample video.",
      "Partner marquee copies are inert and hidden from assistive technology; pause and reduced-motion behavior are preserved."
    ],
    "links": [
      {
        "label": "Kibo public block composition",
        "href": "https://www.kibo-ui.com/blocks/hero"
      }
    ]
  },
  "pricing": {
    "parts": [
      {
        "name": "Pricing",
        "description": "Editable pricing block.",
        "props": [
          {
            "name": "title",
            "type": "string",
            "required": false,
            "default": "\"Simple, transparent pricing\"",
            "description": "Visible heading or record title."
          },
          {
            "name": "description",
            "type": "string",
            "required": false,
            "default": "\"Choose the plan and billing period that work for your team.\"",
            "description": "Supporting content."
          },
          {
            "name": "plans",
            "type": "PricingPlan[]",
            "required": true,
            "description": "Plan records. Empty data shows an explicit status."
          },
          {
            "name": "frequency",
            "type": "PricingFrequency",
            "required": false,
            "description": "Controlled billing period."
          },
          {
            "name": "defaultFrequency",
            "type": "PricingFrequency",
            "required": false,
            "default": "\"monthly\"",
            "description": "Initial uncontrolled billing period."
          },
          {
            "name": "onFrequencyChange",
            "type": "(frequency: PricingFrequency) => void",
            "required": false,
            "description": "Receives a valid monthly or yearly request."
          },
          {
            "name": "onPlanSelect",
            "type": "(plan: PricingPlan, frequency: PricingFrequency) => void",
            "required": false,
            "description": "Receives plan and current period. Otherwise a supplied plan URL navigates; plans without callback/URL are disabled."
          },
          {
            "name": "currency",
            "type": "string",
            "required": false,
            "default": "\"USD\"",
            "description": "Valid Intl currency code."
          },
          {
            "name": "locale",
            "type": "string",
            "required": false,
            "default": "\"en-US\"",
            "description": "Intl locale for predictable price formatting."
          },
          {
            "name": "yearlyBadge",
            "type": "string",
            "required": false,
            "description": "Optional label next to Yearly. Supply truthful discount/billing content."
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
        "name": "PricingFrequency",
        "description": "Application-owned record.",
        "props": [
          {
            "name": "value",
            "type": "\"monthly\" | \"yearly\"",
            "required": true,
            "description": "Supported billing periods."
          }
        ]
      },
      {
        "name": "PricingPlan",
        "description": "Application-owned record.",
        "props": [
          {
            "name": "id",
            "type": "string",
            "required": true,
            "description": "Stable unique record ID."
          },
          {
            "name": "name",
            "type": "string",
            "required": true,
            "description": "Visible name."
          },
          {
            "name": "price",
            "type": "Record<PricingFrequency, number | string>",
            "required": true,
            "description": "Application-supplied price."
          },
          {
            "name": "description",
            "type": "string",
            "required": true,
            "description": "Supporting content."
          },
          {
            "name": "features",
            "type": "string[]",
            "required": true,
            "description": "Application-supplied features."
          },
          {
            "name": "cta",
            "type": "string",
            "required": true,
            "description": "Application-supplied cta."
          },
          {
            "name": "popular",
            "type": "boolean",
            "required": false,
            "description": "Application-supplied popular."
          },
          {
            "name": "disabled",
            "type": "boolean",
            "required": false,
            "description": "Application-supplied disabled."
          },
          {
            "name": "url",
            "type": "string",
            "required": false,
            "description": "Native navigation destination."
          }
        ]
      }
    ],
    "notes": [
      "The default content is demonstration data. Your application owns destinations and persistence.",
      "Numeric prices use Motion, shared timing/easing tokens and reduced-motion rules. Screen readers receive the final price once.",
      "Yearly numeric values are displayed as a monthly amount billed yearly, matching this recipe. Use string prices for other billing models. Currency and locale must be valid Intl values."
    ],
    "links": [
      {
        "label": "Kibo public block composition",
        "href": "https://www.kibo-ui.com/blocks/pricing"
      }
    ]
  },
  "stats": {
    "parts": [
      {
        "name": "Stats",
        "description": "Editable stats block.",
        "props": [
          {
            "name": "className",
            "type": "string",
            "required": false,
            "description": "Additional classes on the section."
          },
          {
            "name": "heading",
            "type": "string",
            "required": false,
            "default": "\"Platform performance insights\"",
            "description": "Visible section heading."
          },
          {
            "name": "description",
            "type": "string",
            "required": false,
            "default": "\"Ensuring stability and scalability for all users\"",
            "description": "Supporting content."
          },
          {
            "name": "link",
            "type": "{\n    text: string;\n    url: string;\n  }",
            "required": false,
            "default": "{\n    text: \"Read the full impact report\",\n    url: \"https://example.com\",\n  }",
            "description": "Report link text and destination."
          },
          {
            "name": "stats",
            "type": "Array<{\n    id: string;\n    value: string;\n    label: string;\n  }>",
            "required": false,
            "default": "Demonstration data in source",
            "description": "Metric values and descriptions supplied by the app. Empty arrays show status."
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
        "href": "https://www.kibo-ui.com/blocks/stats"
      }
    ]
  },
  "team": {
    "parts": [
      {
        "name": "Team",
        "description": "Editable team block.",
        "props": [
          {
            "name": "heading",
            "type": "string",
            "required": false,
            "default": "\"Team\"",
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
            "name": "members",
            "type": "TeamMember[]",
            "required": false,
            "default": "Demonstration data in source",
            "description": "App-owned member identity and role records; empty arrays show status."
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
        "name": "TeamMember",
        "description": "Application-owned record.",
        "props": [
          {
            "name": "id",
            "type": "string",
            "required": true,
            "description": "Stable unique record ID."
          },
          {
            "name": "name",
            "type": "string",
            "required": true,
            "description": "Visible name."
          },
          {
            "name": "role",
            "type": "string",
            "required": true,
            "description": "Quoted person\u2019s role."
          },
          {
            "name": "avatar",
            "type": "string",
            "required": true,
            "description": "Application-supplied avatar."
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
        "href": "https://www.kibo-ui.com/blocks/team"
      }
    ]
  },
  "testimonial": {
    "parts": [
      {
        "name": "Testimonial",
        "description": "Editable testimonial block.",
        "props": [
          {
            "name": "className",
            "type": "string",
            "required": false,
            "description": "Additional classes on the section."
          },
          {
            "name": "quote",
            "type": "string",
            "required": false,
            "default": "Demonstration data in source",
            "description": "Visible native blockquote content."
          },
          {
            "name": "author",
            "type": "{\n    name: string;\n    role: string;\n    avatar: {\n      src: string;\n      alt: string;\n    };\n  }",
            "required": false,
            "default": "Demonstration data in source",
            "description": "Quoted person, role and avatar metadata."
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
        "href": "https://www.kibo-ui.com/blocks/testimonial"
      }
    ]
  }
} satisfies Record<string, ApiReference>;
