# Tasks: expanded-component-catalog

## 태스크 규칙

- **상태**: 기본은 `[TODO]` → `[DOING]` → `[DONE]`; `workflow.agentReview.task.enabled=true`이면 `[DOING]` → `[REVIEW]` → `[DONE]`
- **구현 위임**: `workflow.agentExecution.task.enabled=true`이면 설정된 worker가 반환된 `workerContract`를 따르고 `workflow-stage` 재호출이나 재위임 없이 직접 실행하며, 프로젝트 코드와 태스크 범위 검사만 담당합니다. 메인 에이전트가 이 문서, 태스크 상태, 커밋, 승인, 원격 작업을 유지합니다.
- **태스크 공유 / 확인**:
  - `[TODO] → [DOING]`: 시작 전 태스크 제목을 공유하고 `tasks.md`에서 상태를 함께 갱신합니다
  - `[DOING] → [REVIEW]/[DONE]`: 완료 전 결과/검증을 공유하고 같은 수정에서 `Acceptance`와 `Checklist`를 함께 갱신합니다
  - `[REVIEW] → [DONE]`: 완료 전에 반환된 리뷰 Round와 fresh 태스크 리뷰 Evidence, Decision, Reviewed Head, Reviewed Tree를 기록합니다
  - 태스크 상태 변경 전에 승인이 필요한 경우는 문서화된 review checkpoint 또는 원격/파괴적 작업 직전뿐입니다.
  - 워크플로우가 요구하지 않는 standalone `OK` 승인 단계는 만들지 않습니다.
  - 해당 태스크의 `Checklist`에 unchecked 항목이 남아 있으면 `[DONE]`으로 전환하지 않습니다.
  - `workflow.agentReview.maxRounds`는 fresh 리뷰의 최대 실행 횟수입니다. 마지막 허용 Round가 `changes_requested`이면 지적을 한 번 반영하고 남은 finding과 그 결과의 target 변경을 잔여 위험으로 보존한 뒤, 추가 리뷰나 사용자 승인 없이 리뷰 게이트를 자동 완료합니다. `maxRounds=1`이면 Round 2는 없습니다. `blocked`는 자동 완료하지 않습니다.
- **PRD 매핑(권장)**: 각 태스크 라인에 `[PRD-FR-001]` 또는 `[PRD-SCOPE-V1-DESKTOP-EDITOR]` 같은 기존 PRD 요구사항 ID 태그를 추가하거나, PRD와 무관한 태스크는 `[NON-PRD]`로 표시하세요.
  - 단, `tasks.md`에서 PRD ID를 임의로 만들지 마세요. `docs/prd` 또는 상위 요구사항 문서에 먼저 정의된 ID만 참조해야 합니다.
  - 레거시 문서에 아직 PRD ID가 없다면, 먼저 원문 요구사항 문서에 ID를 backfill한 뒤 `spec.md`의 `PRD Refs`와 태스크 태그를 함께 맞추세요.
  - `[NON-PRD]`는 내부 구현 작업 전용입니다. 사용자 동작, acceptance criteria, 범위가 바뀌는 태스크라면 PRD를 먼저 backfill하고 `[PRD-...]`로 태깅하세요.
- **디자인 시스템 동기화(조건부)**: `docs/designs/design-system.md`를 변경하는 태스크는 영향 받는 디자인 문서, token/theme, 공통 UI, Storybook/workbench와 검증을 같은 task의 `Checklist`에서 추적하세요. 영향이 없는 영역은 변경하지 말고 영향 여부만 확인합니다.

---

## 로컬 추적 정보
- **문서 상태**: Approved
- **레포**: Leement
- **브랜치**: `feat/GMA8H5L3TLTY-expanded-component-catalog`
- **대기 중 변경 요청**: -
  - 구현 중 새로 수용한 사용자 요청을 잠시 표시하는 sync marker입니다
  - 요청을 `tasks.md`와 관련 문서에 반영한 뒤 값을 비우세요
- **Feature 리뷰**: -
  - Feature 리뷰 handoff를 시작하면 `Running`, 리뷰 결과 기록까지 끝나면 `Done`으로 변경
- **Feature 리뷰 Evidence**: -
- **Feature 리뷰 Decision**: -
  - 형식: `결정: approve|changes_requested|blocked ...` (또는 `decision: ...`)
- **Feature 리뷰 Round**: -
  - `workflow-stage --json`이 반환한 양의 정수이며 첫 리뷰는 `1`
- **Feature 리뷰 Head**: -
  - Feature 리뷰가 확인한 project code commit SHA
- **Feature 리뷰 Tree**: -
  - Feature 리뷰가 확인한 project code tree SHA

---

## 태스크 엔트리 포맷

```markdown
- [TODO][PRD-FR-001] T-{feature-ref}-01 {태스크 제목}
  - Date: YYYY-MM-DD
  - Acceptance:
    - (검증 조건)
  - Checklist:
    - [ ] (서브 태스크)
  - Docs:
    - (docs 디렉터리 기준 `docs:<path>` 또는 프로젝트 루트 기준 `project:<path>` 대상을 사용하거나 이 섹션을 생략)
  - Review Evidence: -
  - Review Decision: -
  - Review Round: -
  - Reviewed Head: -
  - Reviewed Tree: -
```

> 위 예시의 `PRD-FR-001`은 가능한 `PRD-*` key 중 하나일 뿐입니다. 아직 PRD 원문에 정의되지 않았다면 태스크에 먼저 넣지 마세요.
> 처음엔 탐색/내부 작업이었더라도 제품 요구사항 변경으로 이어졌다면, `NON-PRD`로 두지 말고 PRD를 먼저 갱신한 뒤 `[PRD-...]`로 재태깅하세요.

---

## 태스크 목록

> 아래에 태스크를 추가하세요. **최소 1개가 필요**합니다.
> 태스크는 하나의 순차 리스트로 유지하고, 위에서 아래 순서 자체를 실행 우선순위로 취급하세요.
> 새 태스크 append에는 `npx lee-spec-kit task add <feature-ref> --title "..." --ref NON-PRD --acceptance "..." --check "..." --doc "docs:prd/system-architecture.md"` 사용을 우선하세요.
> 새 태스크는 마지막 기존 태스크 아래에 완전한 태스크 블록으로 추가하세요. `PRD-FR-001`이나 `PRD-SCOPE-V1-DESKTOP-EDITOR`처럼 이미 정의된 PRD key를 사용하거나, 내부 작업이면 `[NON-PRD]`를 사용합니다.
> placeholder 상태의 `Acceptance` / `Checklist`를 그대로 두지 마세요. 구체 항목이 아니면 구현을 시작하지 않습니다.
> 수동 편집이 필요하면 현재 태스크 근처가 아니라 `태스크 목록`의 마지막 기존 태스크 block 아래에만 append 하세요.

---

- [DONE][PRD-FR-010] T-GMA8H5L3TLTY-expanded-component-catalog-01 Reference coverage and migration inventory
  - Date: 2026-09-27
  - Acceptance:
    - Common 22 items and all CopySinger/Leesfield shared UI wrappers have source, API, behavior, design intent, classification, migration and evidence rows.
  - Checklist:
    - [x] Inventory source exports and representative imports without modifying reference repositories.
    - [x] Record reusable, application-specific and legacy decisions in [Feature coverage artifact](./artifacts/reference-coverage.md).
  - Docs:
    - docs:prd/leement-prd.md
  - Review Evidence: -
  - Review Decision: -
  - Review Round: -
  - Reviewed Head: -
  - Reviewed Tree: -

- [DONE][PRD-FR-011] T-GMA8H5L3TLTY-expanded-component-catalog-02 Unify light and dark tokens and component rules
  - Date: 2026-09-27
  - Acceptance:
    - One semantic light/dark theme supports both products with documented choices for surfaces, state colors, typography, spacing, radius and focus.
  - Checklist:
    - [x] Update tokens, theme generation and design-system rules together.
    - [x] Check generated CSS aliases, reduced motion and representative light/dark visuals.
  - Docs:
    - docs:designs/design-system.md
  - Review Evidence: -
  - Review Decision: -
  - Review Round: -
  - Reviewed Head: -
  - Reviewed Tree: -

- [DONE][PRD-FR-010] T-GMA8H5L3TLTY-expanded-component-catalog-03 Complete common controls and core surfaces
  - Date: 2026-09-27
  - Acceptance:
    - Button, Input, Card, Select, Switch, Tabs, Label, Badge and Separator have shared source, mapped APIs, docs examples and meaningful behavior checks.
  - Checklist:
    - [x] Align Button/Input/Card first with agreed control rules and migration notes.
    - [x] Implement remaining controls with registry metadata and keyboard, disabled and focus verification.
  - Verification: `pnpm --filter @leement/docs build` (30 static pages, including 12 component routes), `pnpm typecheck`, `pnpm lint`, and focused Vitest (7 tests) passed on 2026-09-27. [Migration checkpoint](./artifacts/reference-coverage.md#task-03-migration-checkpoint).
  - Review Evidence: -
  - Review Decision: -
  - Review Round: -
  - Reviewed Head: -
  - Reviewed Tree: -

- [DONE][PRD-FR-010] T-GMA8H5L3TLTY-expanded-component-catalog-04 Complete common overlays and disclosure
  - Date: 2026-09-27
  - Acceptance:
    - Dialog, Dropdown Menu, Popover, Sheet and Tooltip install and preserve composition, focus and keyboard behavior in both themes.
  - Checklist:
    - [x] Use verified headless behavior and declare item dependencies.
    - [x] Add source-backed examples and validate Escape, focus return, labels and disabled cases.
  - Verification: `pnpm --filter @leement/docs build` (33 static pages, 15 component routes), `pnpm typecheck`, `pnpm lint`, focused Vitest (12 tests including 5 overlay interactions) passed on 2026-09-27. [Overlay migration checkpoint](./artifacts/reference-coverage.md#task-04-overlay-migration-checkpoint).
  - Review Evidence: -
  - Review Decision: -
  - Review Round: -
  - Reviewed Head: -
  - Reviewed Tree: -

- [DONE][PRD-FR-010] T-GMA8H5L3TLTY-expanded-component-catalog-05 Complete common feedback and composition
  - Date: 2026-09-27
  - Acceptance:
    - Chart, Skeleton, State Panel, Status Notice, Bento Grid, Product Page Intro, Resource Row Link and Reveal Content have shared registry counterparts and migration guidance.
  - Checklist:
    - [x] Separate reusable product structures into UI, Pattern or Block by responsibility.
    - [x] Verify loading, empty, data and responsive states with docs examples.
  - Verification: `pnpm --filter @leement/docs build` (41 static pages), `pnpm typecheck`, `pnpm lint`, `pnpm registry:build` and `pnpm test` (17 tests) passed on 2026-09-27. [Feedback/composition checkpoint](./artifacts/reference-coverage.md#task-05-feedback-and-composition-checkpoint).
  - Review Evidence: -
  - Review Decision: -
  - Review Round: -
  - Reviewed Head: -
  - Reviewed Tree: -

- [DONE][PRD-FR-010] T-GMA8H5L3TLTY-expanded-component-catalog-06 Resolve additional source-project UI
  - Date: 2026-09-27
  - Acceptance:
    - CopySinger-only ten modules and Leesfield shared UI wrappers are classified; every reusable item has a functioning registry item or composition example.
  - Checklist:
    - [x] Document application-specific and legacy boundaries in coverage matrix.
    - [x] Implement reusable gaps with dependencies, basic interaction checks and source-backed docs.
  - Verification: `pnpm --filter @leement/docs build` (50 static pages including `/adoption`), `pnpm typecheck`, `pnpm lint`, `pnpm test` (22 tests) passed on 2026-09-27. [Source-project candidate resolution](./artifacts/reference-coverage.md#task-06-source-project-migration-checkpoint). Dedicated calendar/choicebox/code-block/typography cases remain assigned to Tasks 07–11.
  - Review Evidence: -
  - Review Decision: -
  - Review Round: -
  - Reviewed Head: -
  - Reviewed Tree: -

- [DONE][PRD-FR-007] T-GMA8H5L3TLTY-expanded-component-catalog-07 Add Kibo collaboration and project management cases
  - Date: 2026-09-27
  - Acceptance:
    - Avatar Stack, Cursor, Calendar, Gantt, Kanban, List and Table each have a working Leement registry use case.
  - Checklist:
    - [x] Reuse common UI and scope external data as props.
    - [x] Verify core navigation or manipulation, registry build and accessible labels for each item; clean-consumer CLI installation is tracked in Task 13.
  - Docs:
    - docs:designs/design-system.md
  - Verification: `pnpm exec vitest run registry/blocks/collaboration.test.tsx` (6 tests), `pnpm registry:build`, `pnpm --filter @leement/docs build` (57 pages), `pnpm typecheck`, and `pnpm lint` passed on 2026-09-27. [Kibo collaboration checkpoint](./artifacts/reference-coverage.md#task-07-kibo-collaboration-checkpoint).
  - Review Evidence: -
  - Review Decision: -
  - Review Round: -
  - Reviewed Head: -
  - Reviewed Tree: -

- [DONE][PRD-FR-007] T-GMA8H5L3TLTY-expanded-component-catalog-08 Add Kibo code and form cases
  - Date: 2026-09-27
  - Acceptance:
    - Code Block, Contribution Graph, Sandbox, Snippet, Choicebox, Combobox, Dropzone, Mini Calendar and Tags each have a working registry use case.
  - Checklist:
    - [x] Keep code execution in item-scoped Sandpack and file persistence outside registry UI.
    - [x] Verify keyboard, input, selection and clipboard behavior; file browse is tested and native drop uses the same collector.
  - Docs:
    - docs:designs/design-system.md
  - Verification: `pnpm exec vitest run registry/ui/code-form.test.tsx` (8 tests), `pnpm registry:build` through docs build, `pnpm --filter @leement/docs build` (66 pages), `pnpm typecheck`, `pnpm lint` passed on 2026-09-27. [Kibo code/form checkpoint](./artifacts/reference-coverage.md#task-08-kibo-code-and-form-checkpoint). Clean-consumer CLI installation remains Task 13.
  - Review Evidence: -
  - Review Decision: -
  - Review Round: -
  - Reviewed Head: -
  - Reviewed Tree: -

- [DONE][PRD-FR-007] T-GMA8H5L3TLTY-expanded-component-catalog-09 Add Kibo image, finance and social cases
  - Date: 2026-09-27
  - Acceptance:
    - Image Crop, Image Zoom, Credit Card, Ticker, Stories, Reel and Video Player each have a working registry use case.
  - Checklist:
    - [x] Keep payment and media encoding outside UI source.
    - [x] Verify controls, labels, reduced motion branches and item-scoped dependencies.
  - Docs:
    - docs:designs/design-system.md
  - Verification: `pnpm exec vitest run registry/ui/media-finance.test.tsx` (7 tests), `pnpm registry:build` through docs build, `pnpm --filter @leement/docs build` (73 pages), `pnpm typecheck`, `pnpm lint` passed on 2026-09-27. [Kibo image/finance/social checkpoint](./artifacts/reference-coverage.md#task-09-kibo-image-finance-and-social-checkpoint). Browser playback remains Task 12; clean-consumer CLI installation remains Task 13.
  - Review Evidence: -
  - Review Decision: -
  - Review Round: -
  - Reviewed Head: -
  - Reviewed Tree: -

- [DONE][PRD-FR-007] T-GMA8H5L3TLTY-expanded-component-catalog-10 Add Kibo callout and complex utility cases
  - Date: 2026-09-27
  - Acceptance:
    - Announcement, Banner, Typography, Color Picker, Comparison, Deck, Dialog Stack, Editor, Glimpse and Marquee each have a working registry use case.
  - Checklist:
    - [x] Keep each item behavior distinct and token driven.
    - [x] Verify interaction and accessibility plus registry metadata and docs example.
  - Docs:
    - docs:designs/design-system.md
  - Verification: `pnpm exec vitest run registry/ui/complex-utility.test.tsx` (10 tests), `pnpm registry:build` through docs build, `pnpm --filter @leement/docs build` (83 pages), `pnpm typecheck`, `pnpm lint` passed on 2026-09-27. [Kibo callout/utility checkpoint](./artifacts/reference-coverage.md#task-10-kibo-callout-and-complex-utility-checkpoint). Browser visual review remains Task 12 and clean-consumer CLI installation Task 13.
  - Review Evidence: -
  - Review Decision: -
  - Review Round: -
  - Reviewed Head: -
  - Reviewed Tree: -

- [DONE][PRD-FR-007] T-GMA8H5L3TLTY-expanded-component-catalog-11 Add remaining Kibo utility cases
  - Date: 2026-09-27
  - Acceptance:
    - Pill, QR Code, Rating, Relative Time, Spinner, Status, Theme Switcher and Tree each have a working registry use case.
  - Checklist:
    - [x] Provide independent behavior and useful API for every item.
    - [x] Verify state, keyboard or accessible name and item-scoped install dependencies where relevant.
  - Docs:
    - docs:designs/design-system.md
  - Verification: `pnpm exec vitest run registry/ui/remaining-utility.test.tsx` (7 tests), `pnpm registry:build` through docs build, `pnpm --filter @leement/docs build` (91 pages), `pnpm typecheck`, `pnpm lint` passed on 2026-09-27. [Kibo remaining utility checkpoint](./artifacts/reference-coverage.md#task-11-kibo-remaining-utility-checkpoint). Clean-consumer CLI installation remains Task 13.
  - Review Evidence: -
  - Review Decision: -
  - Review Round: -
  - Reviewed Head: -
  - Reviewed Tree: -

- [DONE][PRD-FR-008] T-GMA8H5L3TLTY-expanded-component-catalog-12 Complete docs gallery and all item previews
  - Date: 2026-09-27
  - Acceptance:
    - All UI, Pattern and Block items appear in docs with live source-backed previews, usage rules, states, accessibility, API, install and Kibo mapping; six foundations reflect actual tokens.
  - Checklist:
    - [x] Update docs metadata, examples and navigation from registry items without duplicate implementations.
    - [x] Check every details route, source view and light/dark preview in the production docs build.
  - Docs:
    - docs:designs/design-system.md
  - Verification: `pnpm --filter @leement/docs build` (92 pages including six foundation routes), `pnpm typecheck` (5 tasks), `pnpm lint` (3 tasks) passed on 2026-09-27. Playwright checked all 78 item routes and hydrated previews (0 page errors), source tab, 41-case reference mapping, color foundation, computed dark control color, and mobile Button detail. [Documentation gallery checkpoint](./artifacts/reference-coverage.md#task-12-documentation-gallery-checkpoint). Public CLI installation remains Task 13.
  - Review Evidence: -
  - Review Decision: -
  - Review Round: -
  - Reviewed Head: -
  - Reviewed Tree: -

- [DONE][PRD-FR-009] T-GMA8H5L3TLTY-expanded-component-catalog-13 Verify registry installation and source ownership
  - Date: 2026-09-27
  - Acceptance:
    - Every item JSON installs through shadcn alias with transitive dependencies; independent Tailwind v4 consumer typecheck and build pass and installed files remain editable.
  - Checklist:
    - [x] Build registry and run representative plus complete item install matrix in an isolated consumer.
    - [x] Fix missing npm, registry or multi-file metadata and record results.
  - Docs:
    - docs:designs/design-system.md
  - Verification: `npx shadcn@latest add` installed all 78 aliases in an isolated Tailwind v4 consumer; initial EmptyState pulled Utils/Card. All 80 installed files exactly matched registry JSON and 228 direct imports had zero dependency declaration gaps. Consumer `tsc --noEmit` and Vite build with all items imported passed; edited Button source rebuilt and was restored. Kibo notice survived CLI reinstall after source fix. Repo docs build (92 pages), `pnpm typecheck` (5 tasks), `pnpm lint` (3 tasks) passed on 2026-09-27. [Registry installation checkpoint](./artifacts/reference-coverage.md#task-13-registry-installation-checkpoint). Public npm/host publication remains a release action.
  - Review Evidence: -
  - Review Decision: -
  - Review Round: -
  - Reviewed Head: -
  - Reviewed Tree: -

- [DONE][PRD-FR-012] T-GMA8H5L3TLTY-expanded-component-catalog-14 Verify adoption in CopySinger and Leesfield
  - Date: 2026-09-27
  - Acceptance:
    - Common 22 items import/render in both isolated app environments; representative real use sites adopt Leement source and pass typecheck, build and key interactions without new regressions.
  - Checklist:
    - [x] Capture baseline app checks, use isolated copies and preserve original worktrees.
    - [x] Review light/dark desktop/mobile states against chosen shared rules and record remaining intentional differences.
  - Docs:
    - docs:designs/design-system.md
  - Verification: Isolated CopySinger/Leesfield baselines passed typecheck/build after generated code preparation and verification-only environment values. The same 22 registry aliases installed in each; source-backed examples rendered/hydrated with zero page errors, and Switch/Tabs/Dialog/Select/Tooltip interactions passed. Representative CopySinger mixing-library imports and Leesfield Button/Card/Input/Badge wrappers were replaced with installed source. Both post-change typechecks/builds passed, with CopySinger UI tests 8/8 and Leesfield wrapper tests 2/2. Desktop/mobile light/dark screenshots and import/alias migration caveats: [two-app checkpoint](./artifacts/reference-coverage.md#task-14-copysinger-and-leesfield-adoption-checkpoint). Original app worktrees remained clean.
  - Review Evidence: -
  - Review Decision: -
  - Review Round: -
  - Reviewed Head: -
  - Reviewed Tree: -

## Repository Knowledge (완료 비차단)

- **Policy**: `.lee-spec-kit.json`의 `experimental.openwiki`에서 파생
- **Lifecycle**: Feature 완료는 OpenWiki를 기다리지 않습니다. `knowledge ci`가 만든 예약/수동 CI가 통합된 project revision에서 저장소 단위 Knowledge를 갱신하며, 상태는 해당 workflow 실행과 PR에서 별도 확인합니다.
- **Output**: 생성 Wiki와 OpenWiki 실행 metadata는 Feature 커밋·리뷰에 넣지 않습니다.

---

## 완료 조건

> ⚠️ 아래 항목은 **최종 확인 체크리스트**입니다. 실제로 확인/실행한 뒤에만 체크하세요.

- [ ] 모든 태스크가 `[DONE]`이며, 각 태스크의 `Acceptance` 검증 및 `Checklist` 체크 완료 <!-- lee-spec-kit:completion:all-tasks -->
- [ ] 테스트 실행 및 통과 (아래에 명령어/결과 기록) <!-- lee-spec-kit:completion:tests -->
- [ ] 최종 결과를 공유했고, 필요한 사용자 확인을 문서화된 workflow checkpoint 기준으로 기록함 <!-- lee-spec-kit:completion:final-outcome -->

### 테스트 실행 기록

> 명령어당 1개 행만 유지합니다. 같은 명령어를 다시 실행하면 새 행 추가 대신 기존 행의 시간/결과를 갱신하세요.
> `마지막 실행`은 `YYYY-MM-DD` 형식(로컬 날짜)으로 기록하세요.

| 명령어                   | 마지막 실행(로컬, YYYY-MM-DD) | 결과               |
| ------------------------ | ----------------------------- | ------------------ |
| `pnpm exec vitest run packages/theme/theme.test.mjs` | 2026-09-27 | PASS: theme contract 2 tests |
| `pnpm typecheck` | 2026-09-27 | PASS: 5 tasks |
| `pnpm lint` | 2026-09-27 | PASS: 3 tasks |
| `pnpm build` | 2026-09-27 | PASS: tokens, theme, registry, docs static routes |

완료 기록에는 테스트뿐 아니라 build·typecheck·lint 등 Plan에서 정한 검증과 수동 검증 증거를 포함합니다. 자동 검사의 기준은 실제 `workflow.featureChecks`이며, 검사 생략은 통과로 기록하지 않고 명시적인 사유를 남깁니다.

<!-- lee-spec-kit:workflow-sync sha256:a952b70a160f9b338ae8cd5716f2fdc08e4a5ee95a76c90ec4da731a78c63ed8 -->
