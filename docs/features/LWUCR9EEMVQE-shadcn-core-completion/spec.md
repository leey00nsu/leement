# Feature Spec: shadcn-core-completion

## 개요

- **기능 ID**: LWUCR9EEMVQE
- **기능명**: shadcn-core-completion
- **대상 레포**: Leement
- **작성일**: 2026-10-03
- **상태**: Approved

- **명세 승인**: 2026-10-03 사용자 응답 `A`

## 목적

일반 React 제품 화면에서 사용할 기본 입력·탐색 UI를 보완한다. Kibo 계열 복합 UI와 조합 가능한 기반을 제공하고 Table·날짜 선택의 기능과 source ownership 경험을 정리한다. 디자인의 정본은 Leement token과 rule이며 shadcn registry는 수정 가능한 source의 배포 수단이다.

## 조사 기준

2026-10-03 공식 Components 메뉴64개와 현재 registry를 대조했다. 동일 이름은28개이며36개는 없다. 이 수치는 기능 충족률이나 API 호환율이 아니다. 현재 Leement는 UI64·Pattern13·Block8·지원 lib3개다. 기준 revision은 `ed8baa5bd5663bdd5cabbc14409c3a303fa4c2f3`이며 [기준표](./artifacts/shadcn-baseline.json)에 변경·기존 대응·보류 사유를 고정한다. upstream 이후 추가는 자동으로 범위에 넣지 않는다.

## 사용자 스토리

### US-1: 기본 입력·선택을 같은 디자인으로 조합한다

React 개발자가 폼과 설정 화면에서 checkbox/radio/오류 표시를 제품마다 다시 구현하지 않아도 된다.

**Acceptance Criteria:**

- [x] UI registry로 Checkbox, RadioGroup, Field, InputGroup, NativeSelect, Toggle, ToggleGroup을 제공한다.
- [x] Checkbox는 checked/unchecked/indeterminate, controlled/uncontrolled, disabled 및 form 제출 연결을 지원한다. RadioGroup은 단일 값과 방향키 탐색을 제공한다.
- [x] Field는 label·description·error·fieldset/legend를 조합하며 입력 id/aria-describedby/aria-invalid의 연결 예제를 제공한다. 특정 form engine에 의존하지 않는다.
- [x] InputGroup은 앞/뒤 icon·text·button·input과 focus/disabled/invalid 상태를 조합한다. NativeSelect는 native select와 form 의미를 보존한다.
- [x] Toggle/ToggleGroup은 pressed·단일/복수 선택·disabled를 표현한다. Switch/Checkbox/Choicebox/FilterToggle과의 용도 차이를 설명한다.

### US-2: 기본 탐색·표시를 Leement source로 구성한다

**Acceptance Criteria:**

- [x] Accordion, Breadcrumb, Pagination, Command, ButtonGroup, Kbd, AspectRatio를 UI registry로 제공한다.
- [x] Accordion은 단일/복수 열림·disabled·키보드 탐색을 지원하고 기존 Collapsible의 높이/간격·reduced motion 규칙을 따른다.
- [x] Breadcrumb/Pagination은 native link·current page 의미를 보존하고 앱이 URL/페이지를 소유한다. 경계·disabled·ellipsis를 실제 예제에서 보여 준다.
- [x] Command는 검색·group·empty·disabled·방향키/Enter 선택을 제공하고 Dialog 조합 예제가 있다. 데이터 조회와 실행 callback은 앱 책임이다.
- [x] ButtonGroup은 Button의 variant/size/disabled를 보존하고 좁은 화면에서도 조작 가능하다. Kbd는 단축키 설명, AspectRatio는 미디어 비율에 사용한다.

### US-3: 기본 Table과 복합 데이터·날짜·미리보기 UI를 구분한다

**Acceptance Criteria:**

- [x] 기존 `@leement/table`에 Table/Header/Body/Footer/Row/Head/Cell/Caption의 native table compound API를 추가한다.
- [x] 기존 table item의 DataTable export와 data/columns/rowId/caption/emptyMessage API, 정렬 동작을 유지한다. 기본 Table에 고급 table engine 의존성을 강제하지 않는다.
- [x] `@leement/data-table`을 Pattern으로 제공하고 기본 Table·Pagination·Checkbox 등 실제 필요한 source를 dependency로 설치한다. 정렬·열 필터·페이지네이션·행 선택·열 표시 제어·empty를 조합하는 실제 예제가 있다. 기존 간단한 DataTable과 구분되는 export/API 및 이전 안내를 제공한다.
- [x] Calendar의 schedule/date view와 기존 value/defaultValue/onValueChange·min/max·locale·startDay·events 사용처를 유지하면서 단일/기간 날짜 선택을 지원한다.
- [x] `@leement/date-picker`를 Pattern으로 제공하고 Calendar·Popover·Button 등 필요한 source를 자동 설치한다. 단일/기간·disabled·날짜 제약·선택 표시·Escape·focus 복귀를 검증한다. 데이터 조회/서버 저장은 앱 책임이다.
- [x] `@leement/hover-card`를 UI로 제공하며 임의 React trigger/content를 조합한다. 기존 Glimpse의 href/label/title/description API와 링크 기능을 유지하고 공통 primitive 사용을 검토한다.
- [x] StatusNotice/EmptyState는 Alert/Empty 대응으로 안내하고 이름만 다른 중복을 추가하지 않는다. FormSection은 Field, Sheet는 제스처 Drawer 전체를 대신하지 않는다는 경계를 설명한다.

### US-4: 웹에서 확인하고 source로 설치한다

**Acceptance Criteria:**

- [x] 신규17개 item마다 실제 registry 원본 예제·주요 상태·API·사용/비사용 규칙·접근성·설치 명령·성숙도 metadata를 제공한다.
- [x] UI15개와 Pattern2개(DatePicker/DataTable)를 역할에 맞는 한 메뉴에 배치하고 Showcase/검색에서도 같은 원본을 사용한다.
- [x] 기존 muted 외부 표면·콘텐츠 inset·상세 네 방향 점선을 유지하고390/1024/1440px light/dark에서 읽고 조작할 수 있다.
- [x] 독립 React/Tailwind 소비자에서 `npx shadcn@latest add @leement/<name>` namespace 설치·종속 source·import·typecheck/build를 신규 전체 항목에 대해 검증한다.
- [x] 기존 item 이름·export·문서 경로·종속 설치에 회귀가 없다. 신규 항목은 실제 재사용 근거 없이 stable로 표시하지 않고 기본 experimental로 시작한다.

## 기능 요구사항

### FR-1: 신규 범위

| 레이어 | registry 이름 |
| --- | --- |
| UI 입력 | checkbox, radio-group, field, input-group, native-select, toggle, toggle-group |
| UI 탐색/표시 | accordion, breadcrumb, pagination, command, button-group, kbd, aspect-ratio |
| UI 미리보기 | hover-card |
| Pattern | data-table, date-picker |

총17개 신규 item(UI15+Pattern2)과 기존 Table/Calendar 및 필요한 Glimpse source/docs를 보완한다.

### FR-2: 디자인과 API

현재 font·semantic color·40/36/44px control·radius·focus·disabled·motion 규칙을 적용한다. 제품 브랜드색을 하드코딩하지 않는다. shadcn의 단순하고 조합 가능한 API와 primitive 접근성 동작을 참고하되 모든 upstream props/variant 완전 호환을 약속하지 않는다. 차이를 문서화한다. 별도 React npm library나 설정 engine을 만들지 않는다.

### FR-3: 검증과 호환

키보드·label·aria·disabled·form 값·선택 상태를 관찰 가능한 동작으로 확인한다. 기존 Table/Calendar/Glimpse의 사용 예제를 유지한다. 표의 정렬/필터/페이지/선택/열 표시와 날짜 범위/제약/focus를 검증한다. typecheck/lint/test/build 및 namespace 설치를 통과한다. 영구 테스트 추가/수정은 승인 후 Plan의 Verification Contract에 명시한다.

## 제외 및 보류 범위

- ContextMenu, Menubar, NavigationMenu, Sidebar, Drawer, Carousel, ScrollArea, Resizable, InputOTP, Item: 우선 범위 밖이며 실제 사용 사례로 다음 확장을 결정한다.
- Direction/전체 RTL: 전체 방향성 계약을 별도로 정의해야 한다.
- Attachment, Bubble, Marker, Message, MessageScroller, Questionnaire: 대화/전용 UI 필요성 확인 후 결정한다. lee-chat-sdk 로직 편입은 없다.
- Alert/Empty: StatusNotice/EmptyState 대응 안내로 유지한다.
- 기존 Combobox/Chart/Toast 등 모든 upstream variant 복제, 두 원본 앱 전체 교체, README 변경, Figma/MCP/CLI/codemod, npm 게시·push·공개 배포는 제외한다.
- 전체64개 완전 대응으로 완료를 주장하지 않는다. 보류와 차이는 기준표에 남긴다.

## 비기능 요구사항

strict TypeScript, framework-agnostic tokens, source ownership을 유지한다. HTML semantics·keyboard·focus-visible·disabled·screen reader label·대비·reduced motion을 확인한다. 코드와 dependencies는 사용자가 읽고 수정하기 쉽게 유지한다. 구현 승인과 local-ff 병합 승인은 각각 받는다.

## 관련 문서

- PRD: [leement-prd.md](../../prd/leement-prd.md)
- PRD Refs: PRD-FR-005, PRD-FR-008, PRD-FR-009, PRD-FR-014, PRD-NFR-001, PRD-NFR-002, PRD-NFR-004
- Design Refs: docs/designs/design-system.md
- Design System: docs/designs/design-system.md
- 공식 기준: [Components](https://ui.shadcn.com/docs/components), [Field](https://ui.shadcn.com/docs/components/base/field), [Data Table](https://ui.shadcn.com/docs/components/base/data-table), [Date Picker](https://ui.shadcn.com/docs/components/base/date-picker)

## US-5: 지원 기능을 이름 있는 실제 예제로 확인한다

- **추가 범위 승인 근거**: 전수 분석 결과표(우선13·보완42·유지24)와 상세 Examples 구조를 제시한 뒤2026-10-03 사용자가 “수정 시작.”이라고 명시적으로 구현을 요청했다. 현재 Feature에 반영한다. 기존 구현 결과 수락이나 병합 승인으로 해석하지 않는다.
- [x] UI55개(우선13·보완42)의 조사 결과에 연결된 예제를 추가한다.24개는 기존 핵심 예제를 유지한다.
- [x] 상세 문서에 이름·사용 목적·독립 Preview/Code를 갖춘 Examples를 제공하며 Code는 해당 예제 source와 일치한다.
- [x] Showcase는 기존 대표 예제를 사용하며 추가 예제를 동시에 mount하지 않는다. 실제 registry source를 import한다.
- [x] API가 지원하는 variant/size/disabled/error/compound 조합 및 callback 결과를 보여준다. upstream 미지원 API를 추가하거나 약속하지 않는다.
- [x] 입력의 label/id,keyboard/focus,disabled/ARIA 및 로컬 앱 결과가 예제에서 동작한다. label/id는 동일 페이지의 기존 예제와 충돌하지 않는다.
- [x] 55개 추가 예제를 light/dark390/1440px에서 확인하고13개 우선 item의 핵심 동작을 실제 조작한다. 기존 build/typecheck/lint/test를 통과한다.

Pattern15/Block8 조사 결과는 이 예제 보강의 참고다. 이번 추가 구현 대상은 UI55개로 한정하며 두 원본 앱 교체·공개 배포·전체upstream variants 복제는 포함하지 않는다.

## US-6: 기본 mono 폰트를 일관되게 사용한다

- **추가 범위 승인 근거**: 사용자가 D2Coding 추천과 웹폰트 배포 제안을 확인한 뒤 “다음 task로 진행해줘.”라고 요청했다. 기존 Feature T11로 구현하며 병합 승인으로 해석하지 않는다.
- [ ] theme import에 D2Coding Regular/Bold와 OFL/출처를 포함하며 mono 기본 token을 D2Coding으로 지정한다.
- [ ] Foundations에서 mono 기본값·커스텀·초기화·CSS 복사를 지원하고 한국어/영문 예제로 역할을 설명한다.
- [ ] pack 산출물과 실제 소비자 폰트 로드 및 기존 featureChecks를 확인한다. 본문/브랜드 폰트 역할은 독립적이다.
