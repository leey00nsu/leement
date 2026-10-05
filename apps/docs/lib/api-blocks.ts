import type { ApiReference } from "./api-reference";

export const blockApiReferences = {
  codebase: {
    parts: [
      {
        name: "Codebase",
        description: "Synchronized file explorer and code viewer.",
        props: [
          {
            name: "files",
            type: "CodebaseFile[]",
            description: "File content supplied by the application.",
            required: true,
          },
          {
            name: "nodes",
            type: "TreeNode[]",
            description:
              "Tree leaf IDs must match file IDs. Folder IDs are not selectable files.",
            required: true,
          },
          {
            name: "selectedFileId",
            type: "string",
            description:
              "Controlled file; unknown IDs fall back to the first file.",
          },
          {
            name: "defaultSelectedFileId",
            type: "string",
            description: "Initial uncontrolled file.",
            default: "files[0]?.id",
          },
          {
            name: "onSelectedFileChange",
            type: "(file: CodebaseFile) => void",
            description:
              "Called by tree and file selector; does not alter a controlled selection.",
          },
          {
            name: "defaultExpandedIds",
            type: "string[]",
            description: "Initially expanded folders.",
            default: "[]",
          },
          {
            name: "label",
            type: "string",
            description: "Accessible section and tree label.",
            default: '"Codebase"',
          },
          {
            name: "className / ref / native section props",
            type: 'React.ComponentProps<"section">',
            description: "Native attributes are forwarded to the section.",
          },
        ],
      },
      {
        name: "CodebaseFile",
        description: "Application-owned file record.",
        props: [
          {
            name: "id",
            type: "string",
            description: "Unique ID referenced by tree leaves.",
            required: true,
          },
          {
            name: "filename",
            type: "string",
            description: "Visible file name.",
            required: true,
          },
          {
            name: "code",
            type: "string",
            description: "Code copied verbatim and highlighted.",
            required: true,
          },
          {
            name: "language",
            type: "string",
            description:
              "Highlight.js language or common alias; unknown languages render as text.",
          },
        ],
      },
    ],
    notes: [
      "File content is supplied locally. This block does not fetch a repository, execute code or write files.",
      "No files displays a status message. File selection is shared between the tree and selector. The file viewer owns its horizontal scroll.",
    ],
    links: [
      {
        label: "Kibo public block composition",
        href: "https://www.kibo-ui.com/blocks/codebase",
      },
    ],
  },
  "collaborative-canvas": {
    parts: [
      {
        name: "CollaborativeCanvas",
        description:
          "Controlled board with pointer and keyboard object movement.",
        props: [
          {
            name: "participants",
            type: "CanvasParticipant[]",
            description:
              "External presence data; an empty array shows no cursors.",
            required: true,
          },
          {
            name: "objects",
            type: "CanvasObject[]",
            description: "External board objects and percent positions.",
            required: true,
          },
          {
            name: "onObjectsChange",
            type: "(objects: CanvasObject[]) => void",
            description:
              "Receives proposed drag/keyboard positions. Omit for read-only objects.",
          },
          {
            name: "onCursorMove",
            type: "(position: CanvasPosition | null) => void",
            description:
              "Surface-relative pointer updates; null on pointer leave. Throttle/network transmission belongs to the app.",
          },
          {
            name: "children",
            type: "React.ReactNode",
            description: "Optional app-owned board content.",
          },
          {
            name: "label",
            type: "string",
            description: "Visible and accessible section title.",
            default: '"Collaborative canvas"',
          },
          {
            name: "className / ref / native section props",
            type: 'React.ComponentProps<"section">',
            description:
              "Forwarded native section attributes; onPointerMove belongs to the cursor callback.",
          },
        ],
      },
      {
        name: "CanvasPosition",
        description: "Normalized position.",
        props: [
          {
            name: "x / y",
            type: "number",
            description: "Percent coordinates clamped to 0\u2013100.",
            required: true,
          },
        ],
      },
      {
        name: "CanvasParticipant",
        description: "Decorative cursor plus named presence.",
        props: [
          {
            name: "id / name",
            type: "string",
            description: "Stable ID and visible presence name.",
            required: true,
          },
          {
            name: "avatar",
            type: "string",
            description: "Optional image URL; initials are the fallback.",
          },
          {
            name: "position",
            type: "CanvasPosition",
            description: "Absent positions hide the cursor.",
          },
          {
            name: "message",
            type: "string",
            description: "Optional cursor message; never a chat transport.",
          },
        ],
      },
      {
        name: "CanvasObject",
        description: "Keyboard and pointer movable object.",
        props: [
          {
            name: "id / label",
            type: "string",
            description: "Stable ID and accessible label.",
            required: true,
          },
          {
            name: "position",
            type: "CanvasPosition",
            description: "Controlled percent position.",
            required: true,
          },
          {
            name: "description",
            type: "string",
            description: "Optional supporting text.",
          },
        ],
      },
    ],
    notes: [
      "Network collaboration, conflict resolution and persistence belong to your application. The docs simulation is local and can be paused.",
      "Focus an object and use arrows for 2% movement; Shift uses 10%. Pointer capture keeps dragging outside the object reliable.",
      "Cursor labels are decorative; participant names are also exposed by the named avatar group. Presence movement uses Motion and reduced-motion rules.",
    ],
    links: [
      {
        label: "Kibo public block composition",
        href: "https://www.kibo-ui.com/blocks/collaborative-canvas",
      },
    ],
  },
  roadmap: {
    parts: [
      {
        name: "Roadmap",
        description: "Five views sharing one controlled dataset.",
        props: [
          {
            name: "features",
            type: "RoadmapFeature[]",
            description:
              "Valid local Date records; every statusId must reference a supplied status.",
            required: true,
          },
          {
            name: "statuses",
            type: "RoadmapStatus[]",
            description: "Status names/IDs used by filters, list and kanban.",
            required: true,
          },
          {
            name: "onFeaturesChange",
            type: "(features: RoadmapFeature[]) => void",
            description:
              "Receives edits, date movement, removal and ordering. Filtered changes preserve other features.",
            required: true,
          },
          {
            name: "markers",
            type: "RoadmapMarker[]",
            description: "Milestone data.",
            default: "[]",
          },
          {
            name: "onMarkersChange",
            type: "(markers: RoadmapMarker[]) => void",
            description:
              "Enables local milestone creation/removal; app owns persistence.",
          },
          {
            name: "onAddFeature",
            type: "(date: Date) => void",
            description:
              "Shows Add feature and passes calendar date or timeline start.",
          },
          {
            name: "onViewFeature",
            type: "(feature: RoadmapFeature) => void",
            description:
              "Overrides the local editor with app navigation/details.",
          },
          {
            name: "getFeatureHref",
            type: "(feature: RoadmapFeature) => string",
            description:
              "Enables clipboard links; no link is fabricated when omitted.",
          },
          {
            name: "view",
            type: "RoadmapView",
            description: "Controlled active view.",
          },
          {
            name: "defaultView",
            type: "RoadmapView",
            description: "Initial uncontrolled view.",
            default: '"gantt"',
          },
          {
            name: "onViewChange",
            type: "(view: RoadmapView) => void",
            description: "Requested view change.",
          },
          {
            name: "startDate",
            type: "Date",
            description: "Initial timeline/calendar anchor.",
            default: "features[0]?.startAt ?? today",
          },
          {
            name: "locale",
            type: "string",
            description: "Intl date formatting and Calendar locale.",
            default: '"en-US"',
          },
          {
            name: "label",
            type: "string",
            description: "Visible and accessible title.",
            default: '"Roadmap"',
          },
          {
            name: "className / ref / native section props",
            type: 'React.ComponentProps<"section">',
            description: "Forwarded native section attributes.",
          },
        ],
      },
      {
        name: "RoadmapFeature",
        description: "Editable task record.",
        props: [
          {
            name: "id / name / statusId",
            type: "string",
            description:
              "Stable unique ID, task name and supplied status reference.",
            required: true,
          },
          {
            name: "startAt / endAt",
            type: "Date",
            description: "Local calendar dates; end must not precede start.",
            required: true,
          },
          {
            name: "owner",
            type: "{ id: string; name: string; image?: string }",
            description: "Optional owner and initials/avatar.",
          },
          {
            name: "group / product / initiative / release",
            type: "string",
            description:
              "Optional metadata used in summaries, search and table.",
          },
        ],
      },
      {
        name: "RoadmapStatus",
        description: "Column/status record.",
        props: [
          {
            name: "id / name",
            type: "string",
            description: "Unique status ID and visible name.",
            required: true,
          },
        ],
      },
      {
        name: "RoadmapMarker",
        description: "Milestone record.",
        props: [
          {
            name: "id / label",
            type: "string",
            description: "Unique milestone ID and visible label.",
            required: true,
          },
          {
            name: "date",
            type: "Date",
            description: "Milestone calendar date.",
            required: true,
          },
        ],
      },
      {
        name: "RoadmapView",
        description: "View union.",
        props: [
          {
            name: "value",
            type: '"gantt" | "calendar" | "list" | "kanban" | "table"',
            description: "Same dataset across all views.",
            required: true,
          },
        ],
      },
    ],
    notes: [
      "App callbacks own persistence. View and Copy/Remove context commands also have visible actions. Clipboard failure is announced; links require an application callback.",
      "Gantt arrows move dates; Shift+arrows resize the end. Choose two weeks/month/quarter and a start date. Today shifts the timeline. Milestones appear within the current range.",
      "List ordering and kanban changes update controlled features. Calendar shows the selected date; Table sorts names, dates, status and release.",
      "The local editor validates required name and end >= start before committing. Cancelling discards edits. Dates and supplied status IDs must be valid.",
    ],
    links: [
      {
        label: "Kibo public block composition",
        href: "https://www.kibo-ui.com/blocks/roadmap",
      },
    ],
  },
} satisfies Record<string, ApiReference>;
