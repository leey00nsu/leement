# Feature Spec: ui-consistency-remediation

## 개요

- **기능 ID**: G9AD96ZLEU25
- **기능명**: ui-consistency-remediation
- **대상 레포**: Leement
- **작성일**: 2026-10-06
- **상태**: Approved

- **명세 승인**: 2026-10-06 사용자 `A` — 명세 승인 후 계획·태스크 작성 및 후속 진행.

## 목적

사용자가 지난 Feature에서 추가된 Sidebar 등 일부 컴포넌트와 Blocks가 기존 Leement UI와 일관되지 않음을 발견했다. 이전 `ASDHZYC4MRGK-docs-reference-parity`에서 추가·변경한 항목 전체를 검수하고, 기존 디자인 언어에 맞게 실제 배포 source와 예제를 수정한다. 기능·예제 대응이 완료됐다는 과거 기록을 시각적 일관성 검수의 대체 근거로 사용하지 않는다.

디자인 기준은 `docs/designs/design-system.md`, 실행되는 token/theme, 기존 Button·Input·Card·Tabs·overlay 등 공용 source다. 동일한 역할에 동일한 규칙을 적용하되 navigation·marketing·chart 등 역할에 필요한 배치와 정보 계층은 보존한다.

## 검수 범위와 기준 revision

이전 Feature 등록 직전 `a64c377d55a92921653d58e9204aceff5eadcdb0`부터 최종 문서 커밋 `9dac3fdf81dd467d8ba986b23c1e0f2691918d71`까지의 Git diff로 범위를 고정한다. 이번 시작 코드 revision은 `5830646f4ce6a628c210e15ac113e69a4edd8236`이다. [검수 대상 목록](./artifacts/audit-scope.json)에 경로와 추가/변경 여부를 보존한다. 목록은 검수 분모이며 완료 증거가 아니다.

| 대상 | 고정 범위 | 검수 내용 |
| --- | --- | --- |
| UI source | 52개 파일: 신규18, 기존 변경34 | Sidebar 등 신규 UI와 기존 입력·overlay·탐색·데이터 UI의 변경 parts/variants/states. helper도 포함한 파일 수이며 공개 component 수와 구분한다. |
| Patterns | 변경2개 | DataTable·EmptyState와 사용한 공용 UI의 시각적 조합 |
| 공개 Blocks | 신규28개 | Applications3·Websites25의 구성·표면·컨트롤·반응형 |
| Charts | 신규 recipe70개·7분류 | 공통 Card/제어·tooltip/legend/축/데이터표·semantic series 및 개별 recipe 차이 |
| 문서 예제 | 신규 source498개 | 기본·추가·Base 예제, Block 예제의 upstream 잔여 스타일과 source 조합. Charts는 별도 recipe source로 추적한다. |
| 공통 연결 | 이전에 변경된 token/theme·Motion/portal·docs preview/탐색 | 토큰 누락, preview override와 실제 설치 결과 차이, 공용 수정의 기존 소비처 영향 |

변경되지 않은 기존 source는 비교 기준과 회귀 확인 대상으로 읽는다. 검수 대상의 불일치를 해결하는 데 직접 필요한 공용 source·theme·문서 metadata 변경은 포함한다. 무관한 기존 항목의 전면 개편은 포함하지 않는다.

## 사용자 스토리

### US-1: 누락 없이 일관성을 검수한다

개발자는 이전 확장 항목을 기존 Leement UI와 함께 사용할 때 공통 규칙과 의도된 예외를 확인할 수 있다.

**Acceptance Criteria:**

- [x] 고정 source/예제 목록의 모든 항목에 유지·수정·의도된 예외 결과와 비교 기준·근거를 연결한다. 관련 없는 차원은 사유가 있는 해당 없음으로 표시한다.
- [x] 색상/표면/대비, 서체/글자 계층, control·icon 크기, 간격/inset, radius/border/shadow, hover/active/selected/focus/disabled/invalid/loading/empty, 반응형과 motion을 점검한다.
- [x] 각 렌더 가능한 항목과 독립 예제 source의 실제 기본 preview를 light/dark·390px/1440px에서 확인한다. helper/Direction처럼 단독 UI가 없는 source는 소비처에서 검증한다.
- [x] 498개 예제와 70개 chart recipe를 누락 없이 추적한다. 같은 source의 중복 참조는 재사용할 수 있으나 독립 source/상태를 대표 표본 하나로 완료 처리하지 않는다.

### US-2: Sidebar와 공용 컨트롤이 같은 규칙을 따른다

**Acceptance Criteria:**

- [x] Sidebar의 surface/foreground/accent/border/focus가 실제 Leement semantic token을 읽고 light/dark 및 Foundations 변경을 반영한다. docs 전용 CSS로 설치 source의 문제를 감추지 않는다.
- [x] Sidebar의 입력·메뉴·서브메뉴·group action·badge·skeleton·trigger, expanded/icon/offcanvas와 sidebar/floating/inset의 관련 상태를 확인하고 수정한다.
- [x] 기본 일반 컨트롤은40px, sm36px, lg44px 및 기존 명시적 xs32px 규칙을 따른다. dense navigation·장식 표식 등의 차이는 조작 영역·가독성과 사용 근거를 확인해 문서화하고 크기를 일괄 치환하지 않는다.
- [x] 일반 표면의 불필요한 그림자, 일관되지 않은 focus/선택 표현, 서체·간격·모서리 차이를 수정한다. floating overlay의 의도된 shadow와 layout은 역할에 맞게 유지한다.
- [x] mobile sheet·좌/우 배치·controlled 상태·collapse·shortcut·tooltip·RTL·Escape/focus 복귀가 계속 동작한다.

### US-3: Blocks와 Charts를 기존 UI와 자연스럽게 조합한다

**Acceptance Criteria:**

- [x] 28개 Blocks와 70개 Charts를 전수 검수하고 반복되는 불일치를 공용 source 또는 각 source의 필요한 부분에서 수정한다.
- [x] 의미색, 본문/브랜드/코드 서체 역할, Card inset, 컨트롤 크기, border/shadow, 선택·오류·empty 표현이 기존 규칙과 일치한다.
- [x] marketing heading, media ratio, canvas 좌표, chart layout 등 역할에 필요한 차이는 보존한다. 제품 제목 규칙을 Hero의 모든 대형 제목에 기계적으로 적용하지 않는다.
- [x] 수정 영향을 받는 기존 동작을 검증한다: form 제출/validation/pending/실패 시 데이터 보존, 코드/파일 선택, canvas 조작, roadmap view, pricing 기간/선택, carousel/video, chart series/기간/tooltip/legend.

### US-4: 프리뷰와 설치 source가 같은 결과를 제공한다

**Acceptance Criteria:**

- [x] 수정한 registry 원본을 예제에서 사용하고 실행·표시·복사 코드를 일치시킨다. preview wrapper의 임시 style로 source 문제를 보정하지 않는다.
- [x] 기존 Preview inset/점선/중앙 배치, 내부 읽기 정렬·scroll, 실제 iframe 폭·px/resize/Replay·단일 lazy runtime·theme/Foundation 동기화를 유지한다.
- [x] 변경 source와 transitive dependency를 독립 React/Tailwind consumer에 registry namespace로 설치하고 타입·빌드·대표 UI를 검증한다. docs 없이도 같은 테마·상태 규칙을 따른다.
- [x] typecheck/lint/test/build와 registry graph/고정 대응 검사를 통과한다. 변경한 고위험 조합은240px preview·1024px와 keyboard/RTL/reduced motion에서도 확인한다.

## 기능 요구사항

### FR-1: 근거가 있는 검수와 수정

결과에는 source/예제/route, 디자인 규칙, 관찰한 차이, 수정·유지 이유, 상태/폭/테마와 검증 결과를 연결한다. source inspection만으로 실제 UI 검수를 완료했다고 기록하지 않는다. 중요한 수정 전후·예외·실패 재현에 필요한 screenshot만 Feature artifacts에 보존하고 결과표에서 연결한다. 공통 결함을 한번 고친 경우에도 영향받은 실제 source/예제를 재확인한다.

### FR-2: 기존 기준으로 복구

semantic color와 `--lm-*` token이 정본이다. 미정의 alias를 해결하고 theme import만으로 동작하게 한다. 기존 공용 component가 같은 역할을 제공하면 조합하고 중복 스타일을 줄인다. 구체적 적용 위치와 기존 사용자 영향은 승인 후 Plan에서 정한다. 유지할 예외에는 범위·이유·영향 규칙·재검토 조건을 기록한다. 새 브랜드·전역 팔레트 redesign은 하지 않는다.

### FR-3: 기능·API·대응 범위 보존

기존 item/route/설치 namespace/export/props·controlled 계약·접근성을 유지한다. Base63/456 참조/453 고유 source, Blocks28, Charts70 제공 범위를 줄이지 않는다. NativeSelect를 복원하지 않는다. 문제를 숨기기 위해 예제를 삭제하거나 functionality/API를 축소하지 않는다. 호환성 변경이 불가피하면 영향을 구체화하고 명세·계획을 동기화해 해당 승인 경계를 따른다.

### FR-4: 문서와 릴리스 동기화

현재 범위·예외·검증 결과는 이 Feature SDD/artifacts에 남긴다. 공유하는 새 명시 규칙이 필요하면 기존 design-system의 관련 설명을 갱신하고 해당 task에서 코드·예제·검증을 연결한다. 디자인 기준을 결함에 맞춰 완화하지 않는다. 기존 PRD-FR-011 등의 복구를 기본으로 하며 새 제품 요구가 생기면 PRD와 task 참조도 맞춘다. 사용자에게 보이는 수정·이전 안내는 `apps/docs/lib/releases.ts`의 미공개 변경에 반영한다.

## 비기능 요구사항

- **접근성**: focus-visible/keyboard/label/aria/disabled/대비·조작 영역을 유지하고 색상만으로 선택·상태를 구별하지 않는다.
- **성능**: 전수 검수 때문에 수백 예제를 일반 문서 화면에 동시에 mount하지 않는다. 임시 검수 harness가 필요해도 제품 runtime은 기존 lazy 구조를 유지한다.
- **모션**: Motion token·reduced motion·SSR 첫 화면 가독성·hydration 일치를 유지하고 CSS transition/animation으로 새 실행 경로를 만들지 않는다.
- **배포**: generated theme/registry 결과를 직접 수정하지 않고 tracked source에서 생성한다. plain React consumer의 source ownership·MIT 출처를 보존한다.
- **검증**: className 문자열이나 일괄 snapshot은 시각 검수의 대체 증거가 아니다. 영구 테스트 NONE/UPDATE/ADD는 승인 후 Verification Contract에서 결정하며 실제 회귀를 보호하는 기존 검사를 우선한다. 최종 `pnpm run typecheck`, `pnpm run lint`, `pnpm run test`, `pnpm run build`를 실행한다.

## 범위 밖

새 브랜드·색상 체계·폰트 전면 교체, upstream 기능 추가/기준 갱신, unrelated 기존 항목의 전면 redesign, backend 연동, maturity 일괄 승격, 원본 앱 전체 교체, README 편집, npm 게시·원격 push·배포.

## 관련 문서

- PRD: [leement-prd.md](../../prd/leement-prd.md)
- PRD Refs: PRD-FR-002, PRD-FR-005, PRD-FR-008, PRD-FR-009, PRD-FR-011, PRD-FR-014, PRD-FR-015, PRD-FR-016, PRD-FR-017, PRD-NFR-001, PRD-NFR-002, PRD-NFR-004
- Design Refs: docs/designs/design-system.md
- Design System: [design-system.md](../../designs/design-system.md)
- 이전 변경 계약: [docs-reference-parity Spec](../ASDHZYC4MRGK-docs-reference-parity/spec.md)
- 초기 근거: [decisions.md](./decisions.md)
