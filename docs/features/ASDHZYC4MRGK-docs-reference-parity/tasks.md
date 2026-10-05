# Tasks: docs-reference-parity

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
- **브랜치**: `feat/ASDHZYC4MRGK-docs-reference-parity`
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

- [DONE][PRD-FR-015] T-ASDHZYC4MRGK-docs-reference-parity-01 상세 문서를 Usage·Examples·API Reference 중심으로 정리
  - Date: 2026-10-05
  - Acceptance:
    - 기존 101개 item의 반복 9문단/목차를 제거하고 Usage/API 표·링크 구조와 필수 항목 고유 제약을 제공한다.
  - Checklist:
    - [x] ItemPage와 구조화 API 표시·Usage 복사, 기존 Preview/Examples/Installation를 연결하고 typecheck한다.
  - Docs:
    - docs:prd/leement-prd.md
  - Verification: pnpm typecheck PASS; docs focused ESLint PASS; git diff --check PASS. Aside browser session 0Br37unKWM3B7lyW: Button/Input/Card 목차·API 표·단일 iframe·240/833px keyboard 및 683/773px drag 일치 PASS.
  - Review Evidence: -
  - Review Decision: -
  - Review Round: -
  - Reviewed Head: -
  - Reviewed Tree: -

- [DONE][PRD-FR-015] T-ASDHZYC4MRGK-docs-reference-parity-02 신규 콘텐츠·입력 컴포넌트와 실제 예제 추가
  - Date: 2026-10-05
  - Acceptance:
    - Attachment/Bubble/Direction/InputOTP/Item/Marker의 동작·타입·문서·registry 설치를 제공한다.
  - Checklist:
    - [x] baseline API/예제와 비교하고 semantic/Motion, render/disabled/controlled 입력 계약 및 consumer imports를 검증한다.
  - Verification: docs strict typecheck/focused ESLint PASS; content-input 5 tests + registry-source 5 tests PASS; registry build PASS. Aside bJX49gOxpzdgNACK의 6개 preview/API 및 controlled 조작 PASS. `/tmp/leement-reference-consumer`에서 shadcn namespace 설치(6개 + 예제용 Select/Label), tsc/Vite build PASS.
  - Docs:
    - project:THIRD_PARTY_NOTICES.md
  - Review Evidence: -
  - Review Decision: -
  - Review Round: -
  - Reviewed Head: -
  - Reviewed Tree: -

- [DONE][PRD-FR-015] T-ASDHZYC4MRGK-docs-reference-parity-03 신규 탐색·overlay 컴포넌트와 실제 예제 추가
  - Date: 2026-10-05
  - Acceptance:
    - Carousel/ContextMenu/Drawer/Menubar/NavigationMenu/Resizable/ScrollArea의 공개 source와 keyboard/controlled 계약을 제공한다.
  - Checklist:
    - [x] Base UI/외부 primitive와 Motion으로 구현하고 focus/키보드/RTL/disabled 및 registry dependency를 검증한다.
  - Verification: strict typecheck/focused ESLint/registry build/independent shadcn consumer tsc+Vite build PASS; 신규 7 tests(context checkbox/state class callback/submenu/Drawer/Menubar/Navigation/scroll viewport/Carousel RTL·vertical·text editing) PASS; 기존 Motion/overlay/registry-source 21 tests PASS. Aside 0fGXgi867CJg6d6d에서 7개 기본 preview/API·pointer/keyboard/scroll 확인. 240px 잘림 3곳 수정 후 Aside REPL 재검증과 링크 이동 후 동일 iframe Replay 복구 PASS(D008).
  - Docs:
    - project:THIRD_PARTY_NOTICES.md
  - Review Evidence: -
  - Review Decision: -
  - Review Round: -
  - Reviewed Head: -
  - Reviewed Tree: -

- [DONE][PRD-FR-015] T-ASDHZYC4MRGK-docs-reference-parity-04 Sidebar·Message·MessageScroller·Questionnaire 보완
  - Date: 2026-10-05
  - Acceptance:
    - 4개 복합 component의 provider/hooks/parts/state와 baseline 사용법을 제공한다.
  - Checklist:
    - [x] 단계 이동·validation·scroll·sidebar controlled/mobile/shortcut/RTL을 검증하고 source/예제/API/route를 연결한다.
  - Docs:
    - project:THIRD_PARTY_NOTICES.md
  - Verification: docs strict typecheck/focused ESLint/registry build PASS; 5 composition/reader-intent integration tests and existing Motion 10 tests PASS. Independent consumer namespace installation and tsc/Vite build PASS. Four real source previews, Sidebar desktop/mobile240/Escape, Questionnaire native step interaction and wrapped240 buttons, MessageScroller reader0px preservation and Motion jump892/892 verified (D009).
  - Review Evidence: -
  - Review Decision: -
  - Review Round: -
  - Reviewed Head: -
  - Reviewed Tree: -

- [DONE][PRD-FR-015] T-ASDHZYC4MRGK-docs-reference-parity-05 기존 콘텐츠·입력·선택 API와 예제의 Base 대응 보완
  - Date: 2026-10-05
  - Acceptance:
    - Button/Input/Card/Avatar/Badge/Field/InputGroup/Checkbox/RadioGroup/Select/Combobox 및 관련 기본 component의 baseline parts·props·예제 누락을 해결한다.
  - Checklist:
    - [x] 기존 API를 확인해 최소 확장/명시적 이전을 제공하고 render/variant/disabled/keyboard 테스트와 dependency를 맞춘다.
  - Verification: strict docs typecheck/registry UI lint/diff check PASS; existing integration 35 tests and new Base composition/FormData/clear/chip removal 5 tests PASS. Independent namespace 11-item install and 8 fixed Base examples tsc/Vite build PASS. Browser Avatar sizes/InputGroup block addon/Combobox multiple-clear and real chip removal confirmed (D010). Full baseline example distribution remains task 07.
  - Review Evidence: -
  - Review Decision: -
  - Review Round: -
  - Reviewed Head: -
  - Reviewed Tree: -

- [DONE][PRD-FR-015] T-ASDHZYC4MRGK-docs-reference-parity-06 기존 overlay·탐색·data API와 Base 대응 보완
  - Date: 2026-10-05
  - Acceptance:
    - Dialog/AlertDialog/Tooltip/HoverCard/Popover/Sheet/Menu/Accordion/Tabs/Table/Calendar/DatePicker/DataTable/Chart 등 나머지 baseline 항목을 보완한다.
  - Checklist:
    - [x] fixed source API/예제 비교, popup focus/controlled/RTL/표·날짜 동작 및 기존 consumer 회귀를 검증한다.
  - Verification: strict docs typecheck/focused ESLint/diff/registry build PASS; new parity + existing focused contracts 47 tests PASS, registry-source + final parity 10 tests PASS. Independent 12 namespaces/transitive source and 6 fixed overlay/calendar/toast examples strict/Vite build PASS. Browser Dialog/Escape, caption month select and Toast focus/close confirmed. Canonical Calendar at240 viewport renders a200px shell with198px scrollWidth; nested schedule grid keeps its own scrolling. Full 453-example connection remains task07.
  - Review Evidence: -
  - Review Decision: -
  - Review Round: -
  - Reviewed Head: -
  - Reviewed Tree: -

- [DONE][PRD-FR-015] T-ASDHZYC4MRGK-docs-reference-parity-07 63개 Base 문서의 전체 예제·inline 사용법·API Reference 연결
  - Date: 2026-10-05
  - Acceptance:
    - 456 preview 참조/453 고유 ID와 inline composition/recipe/API에 실제 source·설치·문서 대응이 있으며 NativeSelect 제외만 남는다.
  - Checklist:
    - [x] 모든 예제를 실제 source와 alias로 실행하고 각 public part/props/default/event/공식 링크를 검증해 coverage 자료에 연결한다.
  - Verification: 453개 SSR 예제와 focused composition 17개, 총 470 tests PASS; strict typecheck, focused lint, registry build PASS. [456 참조/453 source 및 63 Usage 대응 자료](./artifacts/base-reference-correspondence.json). 독립 소비자 설치·타입·lazy bundle 및 RTL Select 그룹/테이블 필터·선택/로컬 채팅 스트리밍 확인. 전체 회귀 검증은 task 13.
  - Review Evidence: -
  - Review Decision: -
  - Review Round: -
  - Reviewed Head: -
  - Reviewed Tree: -

- [DONE][PRD-FR-016] T-ASDHZYC4MRGK-docs-reference-parity-08 Kibo Applications 3개 block 구현
  - Date: 2026-10-05
  - Acceptance:
    - Codebase/CollaborativeCanvas/Roadmap의 실제 데이터 교체와 상호작용·registry 설치·프리뷰를 제공한다.
  - Checklist:
    - [x] 앱 callback·데모/backend 경계를 문서화하고 file/code 선택·canvas 조작·roadmap 변경 및 consumer 설치를 검증한다.
  - Verification: strict typecheck/focused lint/registry build/diff, Applications 7 + 기존 collaboration 6 + graph/source 5 = 18 tests PASS. 독립 consumer에 3개 registry 항목 설치·strict/Vite lazy build PASS. Browser에서 Codebase 파일/코드 동기화, Canvas 30→32% 키보드 이동·simulation 시작/중지, Roadmap Table 전환 확인. Codebase/Roadmap Home→240px에서 iframe240/root200/documentScroll240 확인. [공개 block 대응](./artifacts/block-reference-correspondence.json).
  - Docs:
    - project:THIRD_PARTY_NOTICES.md
  - Review Evidence: -
  - Review Decision: -
  - Review Round: -
  - Reviewed Head: -
  - Reviewed Tree: -

- [DONE][PRD-FR-016] T-ASDHZYC4MRGK-docs-reference-parity-09 Kibo 콘텐츠·정보 Websites 10개 block 구현
  - Date: 2026-10-05
  - Acceptance:
    - About/Awards/Blog/BlogPost/Careers/CaseStudies/CaseStudy/Changelog/CodeExample/Community의 핵심 UI를 source로 제공한다.
  - Checklist:
    - [x] 실제 내용·링크·필터/목록 상태를 구성하며 props/composition·token·반응형·dependency·실제 source 예제를 연결한다.
  - Verification: 콘텐츠 6 + Applications 7 + registry 5 = 18 tests PASS; docs strict typecheck/focused lint/registry build/diff PASS. 10개 registry CLI 설치·독립 strict/Vite lazy build PASS. Python tab 및 대표 5개 block iframe240/root200/documentScroll240 확인. [공개 대응 자료](./artifacts/block-reference-correspondence.json).
  - Review Evidence: -
  - Review Decision: -
  - Review Round: -
  - Reviewed Head: -
  - Reviewed Tree: -

- [DONE][PRD-FR-016] T-ASDHZYC4MRGK-docs-reference-parity-10 Kibo 전환·입력 Websites 8개 block 구현
  - Date: 2026-10-05
  - Acceptance:
    - Compare/Compliance/Contact/CTA/Download/Experience/FAQ/Form의 source와 해당 상호작용을 제공한다.
  - Checklist:
    - [x] 비교·문의/폼 제출 callback·FAQ 키보드 조작과 empty/error/disabled, 실제 preview 및 종속 설치를 검증한다.
  - Verification: 신규7 + 콘텐츠6 + registry5 = 18 tests PASS; strict typecheck/focused lint/registry build/diff PASS. 8개 CLI 설치·독립 strict/Vite build 및 전체 8개 240px preview geometry, native FAQ Enter와 Form type/venue 검색·선택·local callback을 확인했다. [대응 자료](./artifacts/block-reference-correspondence.json).
  - Review Evidence: -
  - Review Decision: -
  - Review Round: -
  - Reviewed Head: -
  - Reviewed Tree: -

- [DONE][PRD-FR-016] T-ASDHZYC4MRGK-docs-reference-parity-11 Kibo 마케팅 Websites 7개 block 구현
  - Date: 2026-10-05
  - Acceptance:
    - Feature/Footer/Hero/Pricing/Stats/Team/Testimonial의 실제 조합·앱 데이터 교체·설치 source를 제공한다.
  - Checklist:
    - [x] pricing 선택/기간·carousel/video·link 등 핵심 동작과 semantic/light-dark/반응형을 검증하며 28개 block 기준표를 완성한다.
  - Verification: 마케팅5 + registry5 = 10 tests PASS; strict typecheck/focused lint/registry build/diff PASS. 7개 CLI 설치·독립 strict/Vite build, Pricing 90→75/yearly callback, Feature Enter, 7개 iframe240/root200/documentScroll240 확인. [28개 대응 자료](./artifacts/block-reference-correspondence.json)의 분모/이름 집합 일치; 전체 dark/RTL/media 회귀는 task13에서 수행한다.
  - Review Evidence: -
  - Review Decision: -
  - Review Round: -
  - Reviewed Head: -
  - Reviewed Tree: -

- [DONE][PRD-FR-017] T-ASDHZYC4MRGK-docs-reference-parity-12 Charts 상단 탐색과 7분류 70개 설치 recipe 추가
  - Date: 2026-10-05
  - Acceptance:
    - desktop/mobile Charts, category/search/direct routes와 모든 chart recipe가 동작한다.
  - Checklist:
    - [x] 원본 recipe를 Recharts/Motion/token source로 제공하고 tooltip/legend/filter/series/접근성·data fallback·lazy preview·dependency를 검증한다.
  - Verification: Charts70 source/route/registry와 단일 lazy iframe 연결, 80 tests 및 strict/lint/registry build/diff PASS. 70개 실제 namespace CLI 설치 후 independent strict/lazy Vite build PASS. Browser 7분류240px/Area기간/갤러리·global search 확인. D017 및 chart-reference-correspondence.json 참조.
  - Docs:
    - project:THIRD_PARTY_NOTICES.md
  - Review Evidence: -
  - Review Decision: -
  - Review Round: -
  - Reviewed Head: -
  - Reviewed Tree: -

- [DONE][PRD-FR-009] T-ASDHZYC4MRGK-docs-reference-parity-13 전체 대응·설치·UI 회귀 검증과 문서 동기화
  - Date: 2026-10-05
  - Acceptance:
    - 63개 Base, Kibo 공개28 Blocks, Charts70에 누락없는 기능/예제/API 대응 및 실제 consumer 설치·빌드 증거가 있고 필수 전체 checks를 통과한다.
  - Checklist:
    - [x] registry graph/API/source 일치와 independent consumer·light-dark/240-390-full/keyboard/RTL/Preview px-replay를 확인하고 curated docs와 마지막 sync marker를 갱신한다. data-series token/theme compatibility, 공통 UI/API/단일 workbench와 design-system 영향·검증을 함께 확인한다.
  - Verification: 고정 Base63/456 contexts/453 source·Kibo28·Charts70 및 문서146의 API 검증. production registry에서161 direct namespaces를 실제 CLI로 재설치하고 consumer strict/lazy Vite build PASS. 전체 typecheck/lint/test706/build PASS, feature-audit PASS. 실제 native mouse390/240-full/dark-light/Replay0→1/RTL/Escape/media/Foundations series 변경·복원 확인. D018과 보존 screenshot 참조.
  - Docs:
    - docs:prd/leement-prd.md
    - docs:designs/design-system.md
    - project:THIRD_PARTY_NOTICES.md
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

- [x] 모든 태스크가 `[DONE]`이며, 각 태스크의 `Acceptance` 검증 및 `Checklist` 체크 완료 <!-- lee-spec-kit:completion:all-tasks -->
- [x] 테스트 실행 및 통과 (아래에 명령어/결과 기록) <!-- lee-spec-kit:completion:tests -->
- [ ] 최종 결과를 공유했고, 필요한 사용자 확인을 문서화된 workflow checkpoint 기준으로 기록함 <!-- lee-spec-kit:completion:final-outcome -->

### 테스트 실행 기록

> 명령어당 1개 행만 유지합니다. 같은 명령어를 다시 실행하면 새 행 추가 대신 기존 행의 시간/결과를 갱신하세요.
> `마지막 실행`은 `YYYY-MM-DD` 형식(로컬 날짜)으로 기록하세요.

| 명령어                   | 마지막 실행(로컬, YYYY-MM-DD) | 결과               |
| ------------------------ | ----------------------------- | ------------------ |
| `pnpm run typecheck` | 2026-10-05 | PASS — 5 workspace tasks |
| `pnpm run lint` | 2026-10-05 | PASS — workspace + registry |
| `pnpm run test` | 2026-10-05 | PASS — 32 files / 706 tests |
| `pnpm run build` | 2026-10-05 | PASS — tokens/theme/registry/Next production |
| `consumer: shadcn add --yes --overwrite` | 2026-10-05 | PASS — final production registry161 direct namespaces, transitive source/dependencies |
| `consumer: pnpm exec tsc --noEmit` | 2026-10-05 | PASS — final installed source and examples |
| `consumer: pnpm build` | 2026-10-05 | PASS — lazy recipes/examples + refreshed0.2 theme |
| `npx lee-spec-kit feature-audit --enforce --json` | 2026-10-05 | PASS — no violations |

완료 기록에는 테스트뿐 아니라 build·typecheck·lint 등 Plan에서 정한 검증과 수동 검증 증거를 포함합니다. 자동 검사의 기준은 실제 `workflow.featureChecks`이며, 검사 생략은 통과로 기록하지 않고 명시적인 사유를 남깁니다.
