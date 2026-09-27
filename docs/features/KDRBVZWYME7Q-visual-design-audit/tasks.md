# Tasks: visual-design-audit

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
- **브랜치**: `feat/KDRBVZWYME7Q-visual-design-audit`
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

- [DONE][PRD-FR-007] T-KDRBVZWYME7Q-visual-design-audit-01 Freeze catalog inventory and audit every preview against its design reference
  - Date: 2026-09-27
  - Acceptance:
    - 79 public items each have a source/reference, desktop/mobile light/dark observation, severity and initial verdict in the Feature audit artifact.
    - 41 Kibo cases have the pinned upstream source and demo scenario mapped; the remaining 38 have Leement or product references.
  - Checklist:
    - [x] Generate the 79-item inventory from registry.json and check docs route/source parity.
    - [x] Inspect every preview at desktop/mobile in light/dark and record applicable interactions and defects.
    - [x] Save representative before evidence under Feature artifacts and link it from the audit table.
  - Verification: [79-item audit table](./artifacts/catalog-visual-audit.md) and 16 four-mode contact sheets cover every public item. Registry source existence, 79 Leement routes/captures and 41 Kibo routes returned no missing item; 20 representative controls were probed without uncaught errors. Initial findings and incomplete interaction checks remain explicitly open for Tasks 02–09.
  - Review Evidence: -
  - Review Decision: -
  - Review Round: -
  - Reviewed Head: -
  - Reviewed Tree: -

- [DONE][PRD-FR-011] T-KDRBVZWYME7Q-visual-design-audit-02 Correct foundation tokens and core controls
  - Date: 2026-09-27
  - Acceptance:
    - Light/dark semantic rules and core controls follow one measured hierarchy of surface, type, spacing, radius and focus.
    - Button, Input, Card, Textarea, Label, Badge, Separator, Select, Switch and Tabs pass the audit table recheck.
  - Checklist:
    - [x] Compare CopySinger and Leesfield control rules; update token/theme only for evidence-backed shared roles. The existing semantic values cover the shared roles, so no token value changed.
    - [x] Update core registry source, examples and relevant interaction tests. Existing Button test and real-browser keyboard/state checks cover the changed behavior; no implementation-mirroring test was added.
    - [x] Update design-system.md with durable rules and record all ten audit verdicts.
  - Docs:
    - docs:designs/design-system.md
  - Verification: [Task 02 audit recheck](./artifacts/catalog-visual-audit.md#task-02-core-control-recheck) covers 10 source-backed previews at 1440/390px in light/dark, focus, image clipping and relevant keyboard states. `pnpm registry:build`, `pnpm typecheck`, `pnpm lint`, `pnpm exec vitest run registry/ui/button.test.tsx` and `git diff --check` passed. Installed consumer verification remains Task 10.
  - Review Evidence: -
  - Review Decision: -
  - Review Round: -
  - Reviewed Head: -
  - Reviewed Tree: -

- [TODO][PRD-FR-011] T-KDRBVZWYME7Q-visual-design-audit-03 Reconstruct overlays, feedback and loading states
  - Date: 2026-09-27
  - Acceptance:
    - Dialog, Dropdown Menu, Popover, Sheet, Tooltip, Alert Dialog, Skeleton, PageSkeleton, StatusNotice, Progress, Toast, Spinner and Status have correct anatomy and visual states.
    - Keyboard focus, Escape/disabled/announcements and reduced-motion remain usable.
  - Checklist:
    - [ ] Compare reference anatomy and rendered states in light/dark/mobile.
    - [ ] Correct registry source/examples and existing relevant tests.
    - [ ] Record item-level verdicts and before/after evidence for defects.
  - Review Evidence: -
  - Review Decision: -
  - Review Round: -
  - Reviewed Head: -
  - Reviewed Tree: -

- [TODO][PRD-FR-007] T-KDRBVZWYME7Q-visual-design-audit-04 Reconstruct data and collaboration components
  - Date: 2026-09-27
  - Acceptance:
    - Avatar, AvatarStack, Cursor, Calendar, List, Table, Gantt, Kanban, Chart and ContributionGraph meet their documented core scenarios and visual hierarchy.
    - Dense data layouts remain readable and controllable at 390px.
  - Checklist:
    - [ ] Compare Kibo cases and both app contexts for each relevant item.
    - [ ] Correct item source/examples with meaningful keyboard and responsive checks.
    - [ ] Record ten item-level verdicts and visual evidence.
  - Review Evidence: -
  - Review Decision: -
  - Review Round: -
  - Reviewed Head: -
  - Reviewed Tree: -

- [TODO][PRD-FR-007] T-KDRBVZWYME7Q-visual-design-audit-05 Reconstruct form and choice components
  - Date: 2026-09-27
  - Acceptance:
    - Slider, Choicebox, Combobox, Dropzone, MiniCalendar, Tags, ColorPicker and Rating expose their meaningful visual states and interaction anatomy.
    - The ColorPicker no longer silently substitutes a materially different control for the documented Kibo-like use case unless the design rule explicitly justifies it.
  - Checklist:
    - [ ] Inspect Kibo source/demo and Leement light/dark/mobile behavior.
    - [ ] Correct source/examples and interaction tests for altered contracts.
    - [ ] Record eight item-level verdicts and visual evidence.
  - Review Evidence: -
  - Review Decision: -
  - Review Round: -
  - Reviewed Head: -
  - Reviewed Tree: -

- [TODO][PRD-FR-007] T-KDRBVZWYME7Q-visual-design-audit-06 Reconstruct image, media, finance and social items
  - Date: 2026-09-27
  - Acceptance:
    - ImageCrop, ImageZoom, CreditCard, Ticker, Stories, Reel and VideoPlayer present complete, responsive visual states and useful controls.
    - Media controls preserve named keyboard actions and reduced-motion behavior.
  - Checklist:
    - [ ] Inspect live preview with supplied media and compare the corresponding Kibo anatomy.
    - [ ] Correct source/examples and relevant tests.
    - [ ] Record seven item-level verdicts and visual evidence.
  - Review Evidence: -
  - Review Decision: -
  - Review Round: -
  - Reviewed Head: -
  - Reviewed Tree: -

- [TODO][PRD-FR-007] T-KDRBVZWYME7Q-visual-design-audit-07 Reconstruct content and utility components
  - Date: 2026-09-27
  - Acceptance:
    - CodeBlock, Snippet, Sandbox, Announcement, Banner, Typography, Comparison, Deck, DialogStack, Editor, Glimpse, Marquee, Pill, QRCode, RelativeTime, ThemeSwitcher and Tree meet their documented anatomy and light/dark/mobile states.
    - Leement-only BrandGradientText, RevealContent and Collapsible maintain the shared token and motion rules.
  - Checklist:
    - [ ] Inspect Kibo cases where mapped and product/design references for Leement-only items.
    - [ ] Correct source/examples and relevant tests without cloning upstream branding.
    - [ ] Record all item-level verdicts and visual evidence.
  - Review Evidence: -
  - Review Decision: -
  - Review Round: -
  - Reviewed Head: -
  - Reviewed Tree: -

- [TODO][PRD-FR-008] T-KDRBVZWYME7Q-visual-design-audit-08 Reconstruct patterns and remaining blocks
  - Date: 2026-09-27
  - Acceptance:
    - PageHeader, EmptyState, FormSection, SearchField, StatCard, StatePanel, ProductPageIntro, ResourceRowLink, FilterToolbar, SettingsSection and BentoGrid use corrected primitives and preserve product hierarchy.
    - All pattern/block dependency metadata installs required source automatically.
  - Checklist:
    - [ ] Inspect desktop/mobile and light/dark compositions plus states.
    - [ ] Correct source/examples, registry dependency metadata and relevant tests.
    - [ ] Record all item-level verdicts and visual evidence.
  - Review Evidence: -
  - Review Decision: -
  - Review Round: -
  - Reviewed Head: -
  - Reviewed Tree: -

- [TODO][PRD-FR-005] T-KDRBVZWYME7Q-visual-design-audit-09 Align docs examples, state guidance and final 79-item visual audit
  - Date: 2026-09-27
  - Acceptance:
    - Every public item page demonstrates the actual registry source, relevant states, API and install path; generic or false state claims are removed.
    - Every audit row has a final evidence-backed verdict and no unresolved P1/P2 issue.
  - Checklist:
    - [ ] Review 79 docs routes, preview/source parity and applicable states.
    - [ ] Update item guidance/changelog and durable design rules for changed APIs or rules.
    - [ ] Recheck all four light/dark and desktop/mobile combinations, audit table and representative after images.
  - Docs:
    - docs:designs/design-system.md
  - Review Evidence: -
  - Review Decision: -
  - Review Round: -
  - Reviewed Head: -
  - Reviewed Tree: -

- [TODO][PRD-FR-012] T-KDRBVZWYME7Q-visual-design-audit-10 Verify registry installation and two-product adoption boundaries
  - Date: 2026-09-27
  - Acceptance:
    - Changed source and transitive dependencies install into an isolated Tailwind v4 consumer and pass typecheck/build.
    - CopySinger and Leesfield shared UI usage remains compatible through demonstrated migration or updated guidance; four feature checks pass.
  - Checklist:
    - [ ] Run registry build, representative or full changed-item CLI install and consumer typecheck/build.
    - [ ] Verify representative actual app usages or isolated adoption fixtures with documented pre-existing errors separated.
    - [ ] Run pnpm typecheck, lint, test and build; close audit rows and record residual risks.
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
| `{실행한 테스트 명령어}` | `-`                           | `{PASS/FAIL 요약}` |

완료 기록에는 테스트뿐 아니라 build·typecheck·lint 등 Plan에서 정한 검증과 수동 검증 증거를 포함합니다. 자동 검사의 기준은 실제 `workflow.featureChecks`이며, 검사 생략은 통과로 기록하지 않고 명시적인 사유를 남깁니다.
