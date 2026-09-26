# CopySinger / Leesfield reference coverage

Snapshot: 2026-09-27. CopySinger commit `e45845b23b83898042761eab37885f0d68d05f2e`; Leesfield commit `a2d1a000cf479edec7e25aac7d3bb33c3ea80611`. Both source worktrees were clean when inspected. Paths below are relative to each repository root. This is an inventory and migration contract, **not** a claim that Leement already implements or verifies the planned items.

## Design relationship

CopySinger was made first; Leesfield was built from it to feel like its dark mode. The common design intent matters more than numeric identity. The 22 matching component TSX files have the same non-import lines in 19 cases. Dialog and Sheet add Leesfield's localized `CloseLabel`; Select adds a portal container and positioner class. The products' CSS theme values differ, so Leement will choose one shared semantic rule set with light/dark values rather than copying either product's exact numbers or averaging them.

Source prefixes for the next table: CopySinger `src/shared/ui/{item}/{item}.tsx`; Leesfield `src/shared/ui/brand/{item}/{item}.tsx`. `Current` means a registry item already exists in Leement; `planned` means this Feature must add it or complete its migration. A representative import is not a full usage count.

| Common item | Export/API and behavior to map | Design intent to compare | Leement item/status | Example existing use |
| --- | --- | --- | --- | --- |
| badge | Badge, badgeVariants; status variants | compact semantic status | `badge` current; variants to review | C `src/widgets/library/ui/mixing-library.tsx`; L `src/widgets/api-docs/ui/api-docs-endpoints-section.tsx` |
| bento-grid | BentoGrid, BentoGridItem; responsive grouping | feature surface hierarchy | `bento-grid` planned | C `src/_pages/home/ui/landing-product-story.tsx`; L no direct product import found |
| button | Button, buttonVariants; Base UI props, link/xs/icon sizes | 40px control, soft destructive, focus ring | `button` current; API/rules to migrate | C `src/widgets/product-shell/ui/new-user-onboarding-dialog.tsx`; L `src/shared/ui/app-button.tsx` → `src/widgets/api-key-management/ui/api-key-management-widget.tsx` |
| card | Card, CardAction, Header/Title/Description/Content/Footer, size | border surface, spacing, radius, no routine shadow | `card` current; API/rules to migrate | C `src/entities/vocal-profile/ui/vocal-profile-results.tsx`; L `src/shared/ui/app-card.tsx` → `src/widgets/api-key-management/ui/api-key-management-widget.tsx` |
| chart | ChartContainer/Legend/Tooltip, ChartConfig | semantic series and tooltip surfaces | `chart` planned | C `src/entities/vocal-profile/ui/vocal-profile-results.tsx`; L `src/features/monitoring-dashboard/ui/monitoring-kpi-cards.tsx` |
| dialog | compound Base UI Dialog; focus/close | modal surface, close affordance | `dialog` current; behavior migration | C `src/widgets/product-shell/ui/new-user-onboarding-dialog.tsx`; L `src/screens/spaces/ui/spaces-screen.tsx` |
| dropdown-menu | compound menu; selection/keyboard | compact menu and active state | `dropdown-menu` planned | C `src/features/manage-notifications/ui/notification-bell.tsx`; L `src/widgets/header/ui/header.tsx` |
| input | Base UI Input; responsive text size/error | 40px field, focus/error states | `input` current; rules to migrate | C `src/widgets/library/ui/mixing-library.tsx`; L `src/shared/ui/app-input.tsx` → `src/widgets/landing/ui/landing-composer.tsx` |
| label | Label; field association | readable field hierarchy | `label` planned | C `src/widgets/library/ui/mixing-library.tsx`; L `src/shared/ui/app-form-control.tsx` |
| popover | compound Popover; anchor/focus | floating surface hierarchy | `popover` planned | C `src/shared/ui/audio-waveform-player/audio-waveform-player.tsx`; L `src/shared/ui/app-calendar.tsx` |
| product-page-intro | ProductPageIntro and intro/title variants | page heading hierarchy | `product-page-intro` planned pattern | C `src/_pages/recommendation-detail/ui/recommendation-results.tsx`; L no direct product import found |
| resource-row-link | ResourceRowLink/Button; native link/button semantics | resource row hover/focus | `resource-row-link` planned pattern | C `src/widgets/library/ui/mixing-library.tsx`; L no direct product import found |
| reveal-content | RevealContent; disclosure/motion | progressive reveal with reduced motion | `reveal-content` planned | C `src/_pages/home/ui/landing-page.tsx`; L no direct product import found |
| select | compound Base UI Select; portal/positioner | field/menu states and responsive overlay | `select` planned | C `src/widgets/library/ui/mixing-library.tsx`; L `src/screens/monitoring-dashboard/ui/monitoring-dashboard-screen.tsx` |
| separator | Separator; decorative/semantic | sparing division | `separator` current; rule review | Neither product has a direct product import in this snapshot |
| sheet | compound Base UI Dialog; side panel/focus | responsive overlay hierarchy | `sheet` planned | C `src/widgets/product-shell/ui/product-shell.tsx`; L no direct product import found |
| skeleton | Skeleton; loading placeholder | quiet loading state | `skeleton` planned | C `src/_pages/vocal-profile-detail/ui/vocal-profile-detail-loading.tsx`; L `src/features/monitoring-dashboard/ui/monitoring-kpi-cards.tsx` |
| state-panel | StatePanel, statePanelIconVariants | empty/error/success explanation | `state-panel` planned pattern | C `src/widgets/library/ui/mixing-library.tsx`; L `src/shared/ui/app-route-state.tsx` |
| status-notice | StatusNotice; feedback states | text plus semantic feedback color | `status-notice` planned | C `src/widgets/library/ui/mixing-library.tsx`; L no direct product import found |
| switch | Switch; checked/disabled/keyboard | binary setting state | `switch` planned | C no direct product import; L `src/shared/ui/app-canvas-input-provider.tsx` |
| tabs | Tabs/List/Trigger/Content, variants | section navigation and active state | `tabs` planned | C `src/widgets/library/ui/library-tabs.tsx`; L `src/screens/generation-history/ui/generation-history-screen.tsx` |
| tooltip | Tooltip/Provider/Trigger/Content | supplemental accessible description | `tooltip` current; behavior review | C `src/_app/layout/root-layout.tsx`; L no direct product import found |

Current direct overlap is seven items: badge, button, card, dialog, input, separator, tooltip. Shared behavior/API migration is still required for these seven. The other fifteen common items need registry counterparts. The original Base UI implementations may be retained where that is the simplest way to preserve behavior; Radix replacements require equivalent interaction evidence.

## CopySinger-only directories

Each path is `src/shared/ui/{item}/`. Promotion below follows the product rule: a single-project domain expression stays in the app; a generic control/pattern needed by the shared system is a candidate, not automatically stable.

| Item | Classification | Leement route / reason |
| --- | --- | --- |
| audio-waveform-player | application-specific | Audio playback and waveform editing remain product code; generic transport UI may compose Leement controls. |
| collapsible | reusable candidate | Registry `collapsible` control; keyboard/disclosure behavior. |
| funnel-stepper | application-specific | Conversion funnel sequence and copy remain in CopySinger; generic step indicator only if Kibo/other real use supports it. |
| gradient-text | application-specific | CopySinger marketing treatment, not a global text token. |
| page-skeleton | reusable candidate | Page loading pattern composed from Leement Skeleton and layout primitives. |
| progress | reusable candidate | Registry `progress`; semantic value and assistive text. |
| slider | reusable candidate | Registry `slider`; keyboard/value behavior. |
| sonner | reusable candidate | Toast/Toaster registry source with item-scoped dependency. |
| voice-orb | application-specific | Voice visualization stays in CopySinger. |
| voice-signal-core | application-specific | Audio signal engine stays in CopySinger. |

The CopySinger-only paths above are `src/shared/ui/{item}/{item}.tsx` unless the directory uses another filename. Their API/use clues are:

| Item | Export / interaction clue | Representative use |
| --- | --- | --- |
| audio-waveform-player | AudioWaveformPlayer, playback ranges/segments | `src/features/admin-custom-mixing/ui/admin-custom-mixing-panel.tsx` |
| collapsible | compound disclosure and open state | No direct screen import found |
| funnel-stepper | ordered funnel steps | `src/widgets/product-shell/ui/new-user-onboarding-dialog.tsx` |
| gradient-text | decorative gradient text | `src/_pages/home/ui/landing-hero.tsx` |
| page-skeleton | page loading structure | `src/_app/layout/product-route-loading.tsx` |
| progress | value/status indicator | `src/features/admin-custom-mixing/ui/admin-custom-mixing-panel.tsx` |
| slider | range value control | No direct screen import found |
| sonner | Toaster and toast notifications | `src/_app/layout/root-layout.tsx` |
| voice-orb | voice visualization | `src/_pages/login/ui/login-screen.tsx` |
| voice-signal-core | audio signal visualization logic | `src/widgets/creation-funnel/ui/process-hero.tsx` |

## Leesfield root modules and app wrappers

The table below is the complete top-level production `.tsx` inventory in `src/shared/ui` at the snapshot: 35 `app-*` wrappers and 44 other files. Stories and tests are excluded. `compose` means keep the app-specific wrapper while swapping its underlying common source; `candidate` means implement a reusable item or concrete composition in this Feature; `application` means keep product/brand logic in Leesfield. The common 22 above remain mandatory even when a root re-export or wrapper has no direct screen import. Candidate classification assigns follow-up implementation to Tasks 03–11; it does not claim that the item is already installable.

| Source module | API/export clue | Classification | Leement route or app boundary | Representative use |
| --- | --- | --- | --- | --- |
| src/shared/ui/alert-dialog.tsx | re-export/compound | candidate | alert-dialog | internal or no direct screen import |
| src/shared/ui/app-avatar.tsx | AppAvatar, AppAvatarImage, AppAvatarFallback | candidate | avatar | internal or no direct screen import |
| src/shared/ui/app-badge.tsx | AppBadge | compose | badge | src/widgets/api-docs/ui/api-docs-endpoints-section.tsx |
| src/shared/ui/app-brand-logo.tsx | AppBrandLogo | application | brand asset | src/widgets/landing/ui/landing-footer.tsx |
| src/shared/ui/app-button.tsx | AppButton | compose | button | src/app/error.tsx |
| src/shared/ui/app-calendar.tsx | AppCalendar, AppDatePicker | candidate | calendar | src/screens/monitoring-dashboard/ui/monitoring-dashboard-screen.tsx |
| src/shared/ui/app-canvas-brand-provider.tsx | AppCanvasBrandProvider | application | node studio provider | internal or no direct screen import |
| src/shared/ui/app-canvas-input-provider.tsx | AppCanvasInputProvider | application | node studio input | internal or no direct screen import |
| src/shared/ui/app-card.tsx | AppCard | compose | card | src/widgets/api-key-management/ui/api-key-management-widget.tsx |
| src/shared/ui/app-chart.tsx | re-export/compound | compose | chart | src/features/monitoring-dashboard/ui/monitoring-kpi-cards.tsx |
| src/shared/ui/app-choice-select.tsx | AppChoiceSelect | candidate | choicebox | src/features/node-studio/ui/nodes/image-operation-node-controls.tsx |
| src/shared/ui/app-close-button.tsx | AppCloseButton | compose | button | src/screens/generation-history/ui/generation-history-screen.tsx |
| src/shared/ui/app-code-block.tsx | CodeBlockProps, CodeBlock, CodeBlockHeaderProps | candidate | code-block | src/widgets/landing/ui/kibo-code-block.tsx |
| src/shared/ui/app-confirm-dialog.tsx | AppConfirmDialog, AppConfirmDialogContent, AppConfirmDialogHeader | candidate | alert-dialog | src/screens/model-management/ui/model-management-screen.tsx |
| src/shared/ui/app-detail-rail.tsx | AppDetailRail, AppDetailSection | compose | card + app layout | src/screens/generation-history/ui/generation-history-screen.tsx |
| src/shared/ui/app-dialog.tsx | AppDialog, AppDialogContent, AppDialogHeader | compose | dialog | src/screens/spaces/ui/spaces-screen.tsx |
| src/shared/ui/app-docs-section-card.tsx | AppDocsSectionCard | compose | card + app docs | src/widgets/api-docs/ui/api-docs-auth-section.tsx |
| src/shared/ui/app-dropdown-menu.tsx | re-export/compound | compose | dropdown-menu | src/widgets/header/ui/header.tsx |
| src/shared/ui/app-expandable-text.tsx | AppExpandableText | candidate | reveal-content | src/screens/generation-history/ui/generation-history-screen.tsx |
| src/shared/ui/app-filter-toolbar.tsx | AppFilterToolbar, AppFilterGroup, AppFilterToggle | candidate | search-field + filter pattern | src/widgets/api-key-management/ui/api-key-management-widget.tsx |
| src/shared/ui/app-form-control.tsx | AppFormField, AppLabel, AppTextarea | candidate | form-section + controls | src/screens/model-management/ui/model-management-screen.tsx |
| src/shared/ui/app-form.tsx | re-export/compound | candidate | form pattern | src/screens/model-management/ui/model-management-screen.tsx |
| src/shared/ui/app-input.tsx | appInputShellClassName, appInputSurfaceClassName, AppInput | compose | input | src/widgets/landing/ui/landing-composer.tsx |
| src/shared/ui/app-motion-effects.tsx | installAppMotionEffects, AppMotionEffects | application | app motion rules | src/app/providers.tsx |
| src/shared/ui/app-page-shell.tsx | AppPageShell | compose | product-page-intro + page-header | src/widgets/api-key-management/ui/api-key-management-widget.tsx |
| src/shared/ui/app-popover.tsx | re-export/compound | compose | popover | internal or no direct screen import |
| src/shared/ui/app-prompt-surface.tsx | AppPromptSurface, AppPromptField | application | generation UI | internal or no direct screen import |
| src/shared/ui/app-range-slider.tsx | AppRangeSlider | candidate | slider | src/features/node-studio/ui/nodes/video-operation-node-controls.tsx |
| src/shared/ui/app-resource-list.tsx | AppResourceList | compose | card + list | src/screens/spaces/ui/spaces-screen.tsx |
| src/shared/ui/app-result-frame.tsx | AppResultFrame | application | generation result layout | internal or no direct screen import |
| src/shared/ui/app-route-state.tsx | AppRouteState, AppRouteHomeAction | compose | state-panel | src/app/error.tsx |
| src/shared/ui/app-select.tsx | AppSelectTriggerSurface, AppSelectTriggerSize, AppSelectTrigger | compose | select | src/screens/monitoring-dashboard/ui/monitoring-dashboard-screen.tsx |
| src/shared/ui/app-skeleton.tsx | AppSkeleton | compose | skeleton | src/features/monitoring-dashboard/ui/monitoring-kpi-cards.tsx |
| src/shared/ui/app-tabs.tsx | AppTabItem, AppTabs | compose | tabs | src/screens/generation-history/ui/generation-history-screen.tsx |
| src/shared/ui/app-toast.tsx | AppToaster, appToast | candidate | toast | src/app/providers.tsx |
| src/shared/ui/app-typography.tsx | AppHeading, AppEyebrow | candidate | typography | src/widgets/landing/ui/landing-hero.tsx |
| src/shared/ui/avatar.tsx | re-export/compound | candidate | avatar | internal or no direct screen import |
| src/shared/ui/badge.tsx | Badge | compose | badge | internal or no direct screen import |
| src/shared/ui/brand-logo.tsx | re-export/compound | application | brand asset | internal or no direct screen import |
| src/shared/ui/brand-model-marquee.tsx | BrandModelMarquee | application | brand marketing | src/screens/generation/ui/generation-screen.tsx |
| src/shared/ui/button.tsx | Button | compose | button | internal or no direct screen import |
| src/shared/ui/calendar.tsx | CalendarProps | candidate | calendar | internal or no direct screen import |
| src/shared/ui/canvas-providers.tsx | CanvasProviders | application | node studio providers | src/widgets/landing/ui/landing-spaces-canvas.tsx |
| src/shared/ui/card.tsx | re-export/compound | compose | card | internal or no direct screen import |
| src/shared/ui/chart.tsx | ChartContainer, ChartTooltipContent | compose | chart | internal or no direct screen import |
| src/shared/ui/close-label.tsx | CloseLabelProvider, CloseLabel | application | app localization | src/app/providers.tsx |
| src/shared/ui/cta-card.tsx | CtaCard | application | marketing composition | internal or no direct screen import |
| src/shared/ui/dashboard-cta-button.tsx | DashboardCtaButton | application | app CTA | internal or no direct screen import |
| src/shared/ui/dashboard-filter-bar.tsx | DashboardFilterBar, DashboardFilterToggle, DashboardFilterDivider | candidate | filter pattern | internal or no direct screen import |
| src/shared/ui/dialog.tsx | Dialog, DialogTrigger, DialogClose | compose | dialog | internal or no direct screen import |
| src/shared/ui/dropdown-menu.tsx | DropdownMenu, DropdownMenuTrigger, DropdownMenuItem | compose | dropdown-menu | internal or no direct screen import |
| src/shared/ui/form.tsx | re-export/compound | candidate | form pattern | internal or no direct screen import |
| src/shared/ui/generation-canvas.tsx | GenerationCanvas | application | generation domain | src/features/video-generation/ui/video-generation-form.tsx |
| src/shared/ui/generation-header-actions.tsx | GenerationHeaderActions | application | generation domain | internal or no direct screen import |
| src/shared/ui/generation-media-rail.tsx | GenerationMediaContext, GenerationMediaRail, GenerationComposerLayout | application | generation domain | src/widgets/landing/ui/landing-composer.tsx |
| src/shared/ui/generation-model-section.tsx | GenerationModelSection | application | generation domain | src/widgets/landing/ui/landing-composer.tsx |
| src/shared/ui/generation-preset-strip.tsx | GenerationPresetStrip | application | generation domain | internal or no direct screen import |
| src/shared/ui/generation-prompt-field.tsx | GenerationPromptSurface, GenerationPromptField | application | generation domain | src/widgets/landing/ui/landing-composer.tsx |
| src/shared/ui/generation-result-reveal.tsx | GenerationResultReveal | application | generation domain | src/features/video-generation/ui/video-generation-form.tsx |
| src/shared/ui/generation-settings-panel.tsx | GenerationSettingsPanel | application | generation domain | internal or no direct screen import |
| src/shared/ui/generation-settings-popover.tsx | GenerationSettingsPopover | application | generation domain | src/widgets/landing/ui/landing-composer.tsx |
| src/shared/ui/generation-studio-intro.tsx | GenerationStudioIntro | application | generation domain | src/features/video-generation/ui/video-generation-form.tsx |
| src/shared/ui/gradio-contract-fields.tsx | GradioContractFields | application | Gradio integration | src/features/video-generation/ui/video-generation-form.tsx |
| src/shared/ui/gradio-file-field.tsx | GradioFileField | application | Gradio integration | internal or no direct screen import |
| src/shared/ui/gradio-prompt-feedback.tsx | GradioPromptFeedback | application | Gradio integration | src/features/video-generation/ui/video-generation-form.tsx |
| src/shared/ui/grid-feature-cards.tsx | FeatureCard | application | marketing composition | internal or no direct screen import |
| src/shared/ui/infinite-slider.tsx | InfiniteSlider | application | marketing motion | internal or no direct screen import |
| src/shared/ui/input.tsx | re-export/compound | compose | input | internal or no direct screen import |
| src/shared/ui/label.tsx | re-export/compound | compose | label | internal or no direct screen import |
| src/shared/ui/language-switcher.tsx | LanguageSwitcher | application | app routing/localization | src/widgets/header/ui/header.tsx |
| src/shared/ui/logo-cloud.tsx | LogoCloud | application | marketing/brand asset | src/widgets/landing/ui/landing-tech-logo-cloud-section.tsx |
| src/shared/ui/page-header.tsx | PageHeader, PageHeaderSearchInput | compose | page-header | internal or no direct screen import |
| src/shared/ui/popover.tsx | Popover, PopoverTrigger | compose | popover | internal or no direct screen import |
| src/shared/ui/resource-list-loading.tsx | ResourceListLoading | compose | skeleton | src/widgets/api-key-management/ui/api-key-management-widget.tsx |
| src/shared/ui/select.tsx | Select, SelectGroup, SelectContent | compose | select | internal or no direct screen import |
| src/shared/ui/skeleton.tsx | re-export/compound | compose | skeleton | internal or no direct screen import |
| src/shared/ui/textarea.tsx | re-export/compound | compose | textarea | internal or no direct screen import |
| src/shared/ui/tooltip.tsx | Tooltip, TooltipProvider, TooltipTrigger | compose | tooltip | internal or no direct screen import |
| src/shared/ui/warp-shader-panel.tsx | WarpShaderPanel | application | brand shader | src/widgets/landing/ui/landing-hero.tsx |

## Leesfield legacy directory

The 14 TSX files in `src/shared/ui/legacy/` are older parallel implementations: `app-button`, `app-dialog`, `app-input`, `app-popover`, `app-select`, `app-typography`, `button`, `dialog`, `generation-model-section`, `generation-settings-popover`, `generation-studio-intro`, `input`, `popover`, and `select`. A search of production `src` imports outside the legacy directory found no imports of `shared/ui/legacy`. Classification: **legacy/duplicate**, not a separate Leement API. If an active usage is later discovered, map it through the current root wrapper and then the common registry item; generation-specific behavior remains in Leesfield.

## Verification handoff

The matrix records source and migration intent. Tasks 02–11 must replace planned/candidate entries with actual registry paths and working source. Task 13 records item-by-item CLI install evidence. Task 14 records both-app import/render, representative real-use replacement, baseline/new-error separation and light/dark visual evidence. These checks are pending; no completed or stable status is implied here.
