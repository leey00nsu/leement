# Tasks: shadcn-core-completion

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
- **브랜치**: `feat/LWUCR9EEMVQE-shadcn-core-completion`
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

- [DONE][PRD-FR-014] T-LWUCR9EEMVQE-shadcn-core-completion-01 입력·선택 기본 UI7개
  - Date: 2026-10-03
  - Acceptance:
    - Checkbox/RadioGroup/Field/InputGroup/NativeSelect/Toggle/ToggleGroup source·예제·metadata가 완성되고 form/keyboard/disabled 계약 검사가 통과한다.
  - Checklist:
    - [x] 기본 source와 registry/docs 원본 예제 및 디자인 규칙 연결
    - [x] 승인된 core-form 계약 테스트·타입/lint 확인
  - Docs:
    - docs:designs/design-system.md
    - docs:prd/leement-prd.md
  - Review Evidence: -
  - Review Decision: -
  - Review Round: -
  - Reviewed Head: -
  - Reviewed Tree: -

- [DONE][PRD-FR-014] T-LWUCR9EEMVQE-shadcn-core-completion-02 탐색·표시 UI와 HoverCard
  - Date: 2026-10-03
  - Acceptance:
    - Accordion/Breadcrumb/Pagination/Command/ButtonGroup/Kbd/AspectRatio/HoverCard source·문서·registry 및 Glimpse 기존 API가 동작한다.
  - Checklist:
    - [x] source·metadata·예제 및 navigation/hover 규칙 연결
    - [x] core-navigation 계약과 기존 Glimpse 회귀 확인
  - Docs:
    - docs:designs/design-system.md
    - docs:prd/leement-prd.md
  - Review Evidence: -
  - Review Decision: -
  - Review Round: -
  - Reviewed Head: -
  - Reviewed Tree: -

- [DONE][PRD-FR-014] T-LWUCR9EEMVQE-shadcn-core-completion-03 기본 Table과 AdvancedDataTable
  - Date: 2026-10-03
  - Acceptance:
    - 기존 DataTable API를 유지하면서 Table compound API와 정렬/필터/페이지/행 선택/열 표시 pattern·문서·dependency 설치를 제공한다.
  - Checklist:
    - [x] 기본 Table 및 AdvancedDataTable source·문서/registry 완성
    - [x] data-table 계약 테스트와 기존 table 회귀 확인
  - Docs:
    - docs:designs/design-system.md
    - docs:prd/leement-prd.md
  - Review Evidence: -
  - Review Decision: -
  - Review Round: -
  - Reviewed Head: -
  - Reviewed Tree: -

- [DONE][PRD-FR-014] T-LWUCR9EEMVQE-shadcn-core-completion-04 Calendar range와 DatePicker
  - Date: 2026-10-03
  - Acceptance:
    - Calendar single API를 유지하고 range/date constraints와 DatePicker pattern·registry·문서·focus 복귀를 제공한다.
  - Checklist:
    - [x] single/range source·예제·설치 metadata 및 규칙 완성
    - [x] date-picker 계약 테스트와 기존 날짜 회귀 확인
  - Docs:
    - docs:designs/design-system.md
    - docs:prd/leement-prd.md
  - Review Evidence: -
  - Review Decision: -
  - Review Round: -
  - Reviewed Head: -
  - Reviewed Tree: -

- [DONE][PRD-FR-014] T-LWUCR9EEMVQE-shadcn-core-completion-05 전체 문서·소비자 설치·최종 검증
  - Date: 2026-10-03
  - Acceptance:
    - 신규17개와 수정3개를 light/dark 세 폭에서 확인하고 신규 전체 namespace 설치/import/typecheck/build 및 featureChecks가 통과한다.
  - Checklist:
    - [x] 실제 화면·상태·모든 메뉴/예제/기준표 및 curated docs 최종 동기화
    - [x] 독립 소비자17개 설치와 typecheck/lint/test/build 결과 보존
  - Docs:
    - docs:designs/design-system.md
    - docs:prd/leement-prd.md
  - Review Evidence: -
  - Review Decision: -
  - Review Round: -
  - Reviewed Head: -
  - Reviewed Tree: -

- [DONE][PRD-FR-014] T-LWUCR9EEMVQE-shadcn-core-completion-06 기존 Input 파일 선택 영역의 세로 정렬 보정
  - Date: 2026-10-03
  - Acceptance:
    - 기본40px Input에서 native 파일 선택 버튼과 파일명이 중앙에 정렬되고 일반 입력과 disabled 및 실제 파일 선택 동작이 유지된다.
  - Checklist:
    - [x] native file input의 line box 원인 측정과 최소 source 수정
    - [x] 한국어 및 영어 light/dark 모바일/데스크톱에서 빈 파일·선택 후·disabled와 일반 Input 확인
    - [x] 타입/lint/test/build 및 registry source 동기화 확인
  - Review Evidence: -
  - Review Decision: -
  - Review Round: -
  - Reviewed Head: -
  - Reviewed Tree: -

- [DONE][PRD-FR-008] T-LWUCR9EEMVQE-shadcn-core-completion-07 이름 있는 추가 예제와 실제 source Code 문서 구조
  - Date: 2026-10-03
  - Acceptance:
    - 대표 예제를 유지하고 상세 추가예제의 독립 Preview와 실제 source Code/설명을 제공한다.
  - Checklist:
    - [x] 추가 metadata/lazy preview/source 변환과 Examples navigation
    - [x] source 변환 focused 계약과 타입/lint 확인
  - Docs:
    - docs:prd/leement-prd.md
    - docs:designs/design-system.md
  - Review Evidence: -
  - Review Decision: -
  - Review Round: -
  - Reviewed Head: -
  - Reviewed Tree: -

- [TODO][PRD-FR-008] T-LWUCR9EEMVQE-shadcn-core-completion-08 우선13개 핵심 조합과 상태 예제
  - Date: 2026-10-03
  - Acceptance:
    - 우선13개가 지원하는 핵심 API와 조합·결과를 실제 원본 예제로 제공한다.
  - Checklist:
    - [ ] 13개 조사 행과 추가예제 연결
    - [ ] 선택/menu/form/table/chart/toast 등 타입/lint 검증
  - Review Evidence: -
  - Review Decision: -
  - Review Round: -
  - Reviewed Head: -
  - Reviewed Tree: -

- [TODO][PRD-FR-008] T-LWUCR9EEMVQE-shadcn-core-completion-09 보완42개 크기·변형·폼 및 결과 예제
  - Date: 2026-10-03
  - Acceptance:
    - 보완42개 조사 행마다 실제 의미 있는 추가예제를 제공한다.
  - Checklist:
    - [ ] 42개 조사 권고에 대응하는 원본 예제 구현
    - [ ] 고유label/id와 지원props 및 타입/lint 확인
  - Review Evidence: -
  - Review Decision: -
  - Review Round: -
  - Reviewed Head: -
  - Reviewed Tree: -

- [TODO][PRD-FR-008] T-LWUCR9EEMVQE-shadcn-core-completion-10 전체55개 추가예제 화면·조작·source 소비자 최종 검증
  - Date: 2026-10-03
  - Acceptance:
    - 55개 실제 추가예제와 Code 연결·theme/viewport·소비자 strict build 및 featureChecks가 통과한다.
  - Checklist:
    - [ ] 55개 행 예제ID evidence와 실제 화면·주요 조작 검증
    - [ ] typecheck/lint/test/build 및 소비자 타입/build 확인
  - Docs:
    - docs:prd/leement-prd.md
    - docs:designs/design-system.md
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
| pnpm run typecheck | 2026-10-03 | PASS,5 workspace tasks |
| pnpm run lint | 2026-10-03 | PASS,docs/theme/tokens와 registry |
| pnpm run test | 2026-10-03 | PASS,18 files/113 tests; 신규20 계약 테스트 포함 |
| pnpm run build | 2026-10-03 | PASS,tokens/theme/registry/Next production |
| shadcn@4.21.1 add @leement/신규17개 | 2026-10-03 | PASS,독립 React19/Tailwind4 consumer에서 종속 source27개·typecheck/build |
| shadcn@4.21.1 add @leement/data-table (빈 consumer) | 2026-10-03 | PASS,source7개+dependencies 자동 설치·typecheck/build |
| shadcn@4.21.1 add @leement/date-picker (빈 consumer) | 2026-10-03 | PASS,source5개+dependencies 자동 설치·typecheck/build |
| shadcn@4.21.1 add @leement/glimpse | 2026-10-03 | PASS,HoverCard dependency·typecheck/build·native link/hover |
| Chrome 화면 matrix | 2026-10-03 | PASS,20 items×2 views×3 widths×2 themes=240건; overflow/오류0 |
| Chrome 실제 조작 | 2026-10-03 | PASS,26건; keyboard/form/ARIA/disabled/table/date/hover/consumer/reduced motion |
| catalog/registry/examples/nav 대조 | 2026-10-03 | PASS,공개102개 누락0; [결과](./artifacts/catalog-check.json) |
| git diff --check | 2026-10-03 | PASS |



완료 기록에는 테스트뿐 아니라 build·typecheck·lint 등 Plan에서 정한 검증과 수동 검증 증거를 포함합니다. 자동 검사의 기준은 실제 `workflow.featureChecks`이며, 검사 생략은 통과로 기록하지 않고 명시적인 사유를 남깁니다.

T01 검증: core-form 계약6개 PASS, docs typecheck 및 변경 source/docs eslint PASS, registry JSON 생성 PASS. 화면·전체 소비자 설치는 T05에서 검증한다.

T02 검증: core-navigation 계약5개 PASS(accordion·탐색 semantics·command 검색/disabled·Dialog Escape/focus·Glimpse hover), docs typecheck·변경 eslint·registry build PASS.

T03 검증: data-table 계약4개(정렬/필터/페이지/empty·controlled 선택ID·키보드 열 표시·native/legacy Table) PASS. docs typecheck·변경 eslint·registry build PASS. mouse/모바일/테마는 T05에서 확인한다.

T04 검증: date-picker 계약5개 PASS(legacy schedule/single·skip unavailable·역순 range·interior rejection/bounds·popup completion/Escape/focus·disabled). docs typecheck·변경 eslint·registry build PASS.

T05 완료 증거: [화면 matrix](./artifacts/browser-matrix.json), [실제 조작](./artifacts/interaction-checks.json), [독립 설치](./artifacts/consumer-installation.json), [기준/보류표](./artifacts/shadcn-baseline.json). 신규17개(UI15/Pattern2), 기존 Table/Calendar/Glimpse 보완을 확인했다. 공개 배포/npm publish와 원본 앱 전체 교체는 미실행이다. 구현 승인 및 local-ff 병합 승인은 별도 gate에서 받는다.

T06 검증: Chrome에서 한국어/영어×390/1440px×light/dark8조합, 빈 파일/선택 후/disabled24상태를 확인했다. keyboard Enter가 native file chooser를 열고 파일을 선택하며 disabled는 Tab focus에서 제외된다. 일반 Input/Field/InputGroup40px와 form 값 유지. typecheck/lint/test113개/build PASS. 생성 registry의 Input source가 수정 원본과 동일하다. [검증](./artifacts/input-alignment-check.json), [light 정렬](./artifacts/input-empty-light-1440.png), [dark 선택 후](./artifacts/input-selected-dark-1440.png).

T07 검증: 실제 select-groups source를 상세 Preview와 Code가 함께 사용한다. source 읽기/alias 보존/경로 차단/미등록 처리 계약4개 PASS, docs typecheck 및 변경8파일 eslint PASS. 추가예제는 lazy 로딩하며 Showcase 원본은 유지한다. 전체 브라우저/소비자 검증은T10에서 수행한다.
