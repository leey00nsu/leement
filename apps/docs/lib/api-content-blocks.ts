import type { ApiReference } from "./api-reference";

export const contentBlockApiReferences = {
  "about": {
    "parts": [
      {
        "name": "About",
        "description": "Editable about block.",
        "props": [
          {
            "name": "className",
            "type": "string",
            "required": false,
            "description": "Additional classes on the section."
          },
          {
            "name": "title",
            "type": "string",
            "required": false,
            "description": "Visible heading or record title.",
            "default": "\"About Us\""
          },
          {
            "name": "description",
            "type": "string",
            "required": false,
            "description": "Supporting content.",
            "default": "Demonstration data in source"
          },
          {
            "name": "mainImage",
            "type": "{\n    src: string;\n    alt: string;\n  }",
            "required": false,
            "description": "Primary media URL and alternative text.",
            "default": "Demonstration data in source"
          },
          {
            "name": "secondaryImage",
            "type": "{\n    src: string;\n    alt: string;\n  }",
            "required": false,
            "description": "Supporting media URL and alternative text.",
            "default": "Demonstration data in source"
          },
          {
            "name": "breakout",
            "type": "{\n    src?: string;\n    alt?: string;\n    title: string;\n    description: string;\n    buttonText?: string;\n    buttonUrl?: string;\n  }",
            "required": false,
            "description": "Supporting media, text and optional call-to-action.",
            "default": "Demonstration data in source"
          },
          {
            "name": "companiesTitle",
            "type": "string",
            "required": false,
            "description": "Accessible label for the partner marquee.",
            "default": "\"Valued by clients worldwide\""
          },
          {
            "name": "companies",
            "type": "Array<{\n    src: string;\n    alt: string;\n  }> | null",
            "required": false,
            "description": "Partner images and names. null hides the marquee; [] has no items.",
            "default": "Demonstration data in source"
          },
          {
            "name": "achievementsTitle",
            "type": "string",
            "required": false,
            "description": "Achievements section heading.",
            "default": "\"Our Achievements in Numbers\""
          },
          {
            "name": "achievementsDescription",
            "type": "string",
            "required": false,
            "description": "Achievements supporting text.",
            "default": "Demonstration data in source"
          },
          {
            "name": "achievements",
            "type": "Array<{\n    label: string;\n    value: string;\n  }>",
            "required": false,
            "description": "Metric labels and values.",
            "default": "Demonstration data in source"
          },
          {
            "name": "contentSections",
            "type": "Array<{\n    title: string;\n    content: string;\n  }>",
            "required": false,
            "description": "Additional titled text sections.",
            "default": "Demonstration data in source"
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
        "href": "https://www.kibo-ui.com/blocks/about"
      }
    ]
  },
  "awards": {
    "parts": [
      {
        "name": "Awards",
        "description": "Editable awards block.",
        "props": [
          {
            "name": "title",
            "type": "string",
            "required": false,
            "default": "\"Awards\"",
            "description": "Visible heading or record title."
          },
          {
            "name": "awards",
            "type": "Award[]",
            "required": true,
            "description": "Award records; [] shows an empty status."
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
        "name": "Award",
        "description": "Application-owned record.",
        "props": [
          {
            "name": "name",
            "type": "string",
            "required": true,
            "description": "Visible name."
          },
          {
            "name": "description",
            "type": "string",
            "required": true,
            "description": "Supporting content."
          },
          {
            "name": "year",
            "type": "string",
            "required": true,
            "description": "Displayed award year."
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
      "The default content is demonstration data. Your application owns destinations and persistence."
    ],
    "links": [
      {
        "label": "Kibo public block composition",
        "href": "https://www.kibo-ui.com/blocks/awards"
      }
    ]
  },
  "blog": {
    "parts": [
      {
        "name": "Blog",
        "description": "Editable blog block.",
        "props": [
          {
            "name": "tagline",
            "type": "string",
            "required": false,
            "default": "\"Latest Updates\"",
            "description": "Short introductory label."
          },
          {
            "name": "heading",
            "type": "string",
            "required": false,
            "default": "\"Blog\"",
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
            "name": "buttonText",
            "type": "string",
            "required": false,
            "default": "\"View all posts\"",
            "description": "Call-to-action label."
          },
          {
            "name": "buttonUrl",
            "type": "string",
            "required": false,
            "description": "Call-to-action destination; omitting it hides the optional action."
          },
          {
            "name": "posts",
            "type": "BlogPostSummary[]",
            "required": false,
            "default": "Demonstration data in source",
            "description": "Article summaries and destinations; [] shows an empty status."
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
        "name": "BlogPostSummary",
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
            "name": "summary",
            "type": "string",
            "required": true,
            "description": "Article summary."
          },
          {
            "name": "label",
            "type": "string",
            "required": true,
            "description": "Visible label."
          },
          {
            "name": "author",
            "type": "string",
            "required": true,
            "description": "Author name, image and website metadata."
          },
          {
            "name": "published",
            "type": "string",
            "required": true,
            "description": "Formatted publication text supplied by the app."
          },
          {
            "name": "url",
            "type": "string",
            "required": true,
            "description": "Native navigation destination."
          },
          {
            "name": "image",
            "type": "string",
            "required": true,
            "description": "Image source or source/alt record, according to the declared type."
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
        "href": "https://www.kibo-ui.com/blocks/blog"
      }
    ]
  },
  "blog-post": {
    "parts": [
      {
        "name": "BlogPost",
        "description": "Editable blog post block.",
        "props": [
          {
            "name": "className",
            "type": "string",
            "required": false,
            "description": "Additional classes on the section."
          },
          {
            "name": "children",
            "type": "React.ReactNode",
            "required": false,
            "description": "Article content supplied by the application; replaces the demonstration body."
          },
          {
            "name": "title",
            "type": "string",
            "required": false,
            "default": "\"Designing websites faster with Leement\"",
            "description": "Visible heading or record title."
          },
          {
            "name": "author",
            "type": "{\n    name: string;\n    website: string;\n    websiteName: string;\n    image: string;\n  }",
            "required": false,
            "default": "Demonstration data in source",
            "description": "Author name, image and website metadata."
          },
          {
            "name": "image",
            "type": "string",
            "required": false,
            "default": "Demonstration data in source",
            "description": "Image source or source/alt record, according to the declared type."
          },
          {
            "name": "pubDate",
            "type": "Date",
            "required": false,
            "default": "new Date(2026, 9, 5, 12)",
            "description": "Valid publication Date. Native time exposes its ISO representation."
          },
          {
            "name": "description",
            "type": "string",
            "required": false,
            "default": "\"A step-by-step guide to building a modern, responsive blog using React and Tailwind CSS.\"",
            "description": "Supporting content."
          }
        ]
      }
    ],
    "notes": [
      "The default content is demonstration data. Your application owns destinations and persistence.",
      "Supply valid publication dates and article children. The fixed default date avoids server/client clock differences."
    ],
    "links": [
      {
        "label": "Kibo public block composition",
        "href": "https://www.kibo-ui.com/blocks/blogpost"
      }
    ]
  },
  "careers": {
    "parts": [
      {
        "name": "Careers",
        "description": "Editable careers block.",
        "props": [
          {
            "name": "heading",
            "type": "string",
            "required": false,
            "default": "\"Careers\"",
            "description": "Visible section heading."
          },
          {
            "name": "jobs",
            "type": "CareerCategory[]",
            "required": false,
            "default": "Demonstration data in source",
            "description": "Categories of application links; empty openings show a status."
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
        "name": "CareerOpening",
        "description": "Application-owned record.",
        "props": [
          {
            "name": "title",
            "type": "string",
            "required": true,
            "description": "Visible heading or record title."
          },
          {
            "name": "location",
            "type": "string",
            "required": true,
            "description": "Displayed location."
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
        "name": "CareerCategory",
        "description": "Application-owned record.",
        "props": [
          {
            "name": "category",
            "type": "string",
            "required": true,
            "description": "Opening category."
          },
          {
            "name": "openings",
            "type": "CareerOpening[]",
            "required": true,
            "description": "Job openings in this category."
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
        "href": "https://www.kibo-ui.com/blocks/careers"
      }
    ]
  },
  "case-studies": {
    "parts": [
      {
        "name": "CaseStudies",
        "description": "Editable case studies block.",
        "props": [
          {
            "name": "title",
            "type": "string",
            "required": false,
            "default": "\"Real results from real users\"",
            "description": "Visible heading or record title."
          },
          {
            "name": "tagline",
            "type": "string",
            "required": false,
            "description": "Short introductory label."
          },
          {
            "name": "studies",
            "type": "CaseStudySummary[]",
            "required": true,
            "description": "Customer stories with optional media, destination and metrics."
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
        "name": "CaseStudySummary",
        "description": "Application-owned record.",
        "props": [
          {
            "name": "id",
            "type": "string",
            "required": true,
            "description": "Stable unique record ID."
          },
          {
            "name": "quote",
            "type": "string",
            "required": true,
            "description": "Customer quotation."
          },
          {
            "name": "person",
            "type": "string",
            "required": true,
            "description": "Quoted person\u2019s name."
          },
          {
            "name": "role",
            "type": "string",
            "required": true,
            "description": "Quoted person\u2019s role."
          },
          {
            "name": "image",
            "type": "string",
            "required": false,
            "description": "Image source or source/alt record, according to the declared type."
          },
          {
            "name": "companyLogo",
            "type": "string",
            "required": false,
            "description": "Optional company image URL."
          },
          {
            "name": "companyName",
            "type": "string",
            "required": false,
            "description": "Visible company name."
          },
          {
            "name": "url",
            "type": "string",
            "required": false,
            "description": "Native navigation destination."
          },
          {
            "name": "metrics",
            "type": "{ value: string; label: string; description?: string }[]",
            "required": true,
            "description": "Outcome values, labels and optional explanations."
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
        "href": "https://www.kibo-ui.com/blocks/case-studies"
      }
    ]
  },
  "case-study": {
    "parts": [
      {
        "name": "CaseStudy",
        "description": "Editable case study block.",
        "props": [
          {
            "name": "title",
            "type": "string",
            "required": true,
            "description": "Visible heading or record title."
          },
          {
            "name": "image",
            "type": "{ src: string; alt: string }",
            "required": false,
            "description": "Image source or source/alt record, according to the declared type."
          },
          {
            "name": "company",
            "type": "CaseStudyCompany",
            "required": true,
            "description": "Company metadata displayed alongside the article."
          },
          {
            "name": "children",
            "type": "ReactNode",
            "required": true,
            "description": "Article content supplied by the application; replaces the demonstration body."
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
        "name": "CaseStudyCompany",
        "description": "Application-owned record.",
        "props": [
          {
            "name": "name",
            "type": "string",
            "required": true,
            "description": "Visible name."
          },
          {
            "name": "description",
            "type": "string",
            "required": false,
            "description": "Supporting content."
          },
          {
            "name": "logo",
            "type": "string",
            "required": false,
            "description": "Optional company image URL."
          },
          {
            "name": "industry",
            "type": "string",
            "required": false,
            "description": "Industry metadata."
          },
          {
            "name": "location",
            "type": "string",
            "required": false,
            "description": "Displayed location."
          },
          {
            "name": "size",
            "type": "string",
            "required": false,
            "description": "Company size metadata."
          },
          {
            "name": "website",
            "type": "string",
            "required": false,
            "description": "Company website destination."
          },
          {
            "name": "topics",
            "type": "string[]",
            "required": false,
            "description": "Topic labels."
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
        "href": "https://www.kibo-ui.com/blocks/case-study"
      }
    ]
  },
  "changelog": {
    "parts": [
      {
        "name": "Changelog",
        "description": "Editable changelog block.",
        "props": [
          {
            "name": "className",
            "type": "string",
            "required": false,
            "description": "Additional classes on the section."
          },
          {
            "name": "title",
            "type": "string",
            "required": false,
            "default": "\"Changelog\"",
            "description": "Visible heading or record title."
          },
          {
            "name": "description",
            "type": "string",
            "required": false,
            "default": "\"Get the latest updates and improvements to our platform.\"",
            "description": "Supporting content."
          },
          {
            "name": "entries",
            "type": "ChangelogEntry[]",
            "required": false,
            "default": "defaultEntries",
            "description": "Release notes; [] shows an empty status."
          }
        ]
      },
      {
        "name": "ChangelogEntry",
        "description": "Application-owned record.",
        "props": [
          {
            "name": "version",
            "type": "string",
            "required": true,
            "description": "Release identifier."
          },
          {
            "name": "date",
            "type": "string",
            "required": true,
            "description": "Formatted release date supplied by the app."
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
            "name": "items",
            "type": "string[]",
            "required": false,
            "description": "Release-note bullet points."
          },
          {
            "name": "image",
            "type": "string",
            "required": false,
            "description": "Image source or source/alt record, according to the declared type."
          },
          {
            "name": "button",
            "type": "{\n    url: string;\n    text: string;\n  }",
            "required": false,
            "description": "Optional release action label and destination."
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
        "href": "https://www.kibo-ui.com/blocks/changelog"
      }
    ]
  },
  "code-example": {
    "parts": [
      {
        "name": "CodeExample",
        "description": "Editable code example block.",
        "props": [
          {
            "name": "tagline",
            "type": "string",
            "required": false,
            "default": "\"./install.sh\"",
            "description": "Short introductory label."
          },
          {
            "name": "heading",
            "type": "string",
            "required": false,
            "default": "\"WRITE CODE.\"",
            "description": "Visible section heading."
          },
          {
            "name": "headingHighlight",
            "type": "string",
            "required": false,
            "default": "\"SHIP FASTER.\"",
            "description": "Second line of the code example heading."
          },
          {
            "name": "description",
            "type": "string",
            "required": false,
            "default": "\"Inspect and copy reusable code in the language you need.\"",
            "description": "Supporting content."
          },
          {
            "name": "buttonText",
            "type": "string",
            "required": false,
            "default": "\"Get started\"",
            "description": "Call-to-action label."
          },
          {
            "name": "buttonUrl",
            "type": "string",
            "required": false,
            "description": "Call-to-action destination; omitting it hides the optional action."
          },
          {
            "name": "snippets",
            "type": "CodeSnippet[]",
            "required": false,
            "default": "defaultSnippets",
            "description": "Code languages and content; [] shows an empty status."
          },
          {
            "name": "value",
            "type": "string",
            "required": false,
            "description": "Controlled snippet ID; unknown IDs fall back to the first snippet."
          },
          {
            "name": "defaultValue",
            "type": "string",
            "required": false,
            "description": "Initial uncontrolled snippet ID."
          },
          {
            "name": "onValueChange",
            "type": "(id: string) => void",
            "required": false,
            "description": "Receives a valid requested snippet ID. Controlled value stays app-owned."
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
        "name": "CodeSnippet",
        "description": "Application-owned record.",
        "props": [
          {
            "name": "id",
            "type": "string",
            "required": true,
            "description": "Stable unique record ID."
          },
          {
            "name": "language",
            "type": "string",
            "required": true,
            "description": "Highlight.js language or common alias."
          },
          {
            "name": "label",
            "type": "string",
            "required": true,
            "description": "Visible label."
          },
          {
            "name": "filename",
            "type": "string",
            "required": true,
            "description": "Visible code filename."
          },
          {
            "name": "code",
            "type": "string",
            "required": true,
            "description": "Literal source copied to the clipboard."
          }
        ]
      }
    ],
    "notes": [
      "The default content is demonstration data. Your application owns destinations and persistence.",
      "The tabs share one controlled or uncontrolled snippet selection. Clipboard copy returns literal code; Python, Go, Ruby and JavaScript highlighting are supported."
    ],
    "links": [
      {
        "label": "Kibo public block composition",
        "href": "https://www.kibo-ui.com/blocks/code-example"
      }
    ]
  },
  "community": {
    "parts": [
      {
        "name": "Community",
        "description": "Editable community block.",
        "props": [
          {
            "name": "heading",
            "type": "string",
            "required": false,
            "default": "\"Join our community\"",
            "description": "Visible section heading."
          },
          {
            "name": "description",
            "type": "string",
            "required": false,
            "default": "\"Connect with others, share experiences, and stay in the loop.\"",
            "description": "Supporting content."
          },
          {
            "name": "socialLinks",
            "type": "CommunitySocialLink[]",
            "required": false,
            "default": "Demonstration data in source",
            "description": "Named community channels and destinations; [] shows an empty status."
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
        "name": "CommunitySocialLink",
        "description": "Application-owned record.",
        "props": [
          {
            "name": "icon",
            "type": "React.ReactNode",
            "required": true,
            "description": "Application-supplied decorative icon."
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
            "name": "url",
            "type": "string",
            "required": true,
            "description": "Native navigation destination."
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
        "href": "https://www.kibo-ui.com/blocks/community"
      }
    ]
  }
} satisfies Record<string, ApiReference>;
