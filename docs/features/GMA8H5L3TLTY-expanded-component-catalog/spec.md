# Feature Spec: expanded-component-catalog

## 개요

- **기능 ID**: GMA8H5L3TLTY
- **기능명**: expanded-component-catalog
- **대상 레포**: Leement
- **작성일**: 2026-09-26
- **수정일**: 2026-09-27
- **상태**: Approved

## 목적

이 진행 중인 Feature는 Leement의 v0.1 카탈로그(기본 UI 8개, pattern 5개, block 1개)를 확장한다. **CopySinger(light)와 Leesfield(dark)에서 함께 사용할 수 있는 공통 UI 시스템**과 Kibo UI에 견줄 만한 복합 컴포넌트 카탈로그를 모두 달성한다. CopySinger를 먼저 만들고 이를 바탕으로 Leesfield를 CopySinger의 다크 모드처럼 만들려 했다는 제품 의도를 기준으로 삼는다. 두 제품의 값이나 화면을 픽셀 단위로 재현하는 것이 목표는 아니다. 두 목표 중 하나만 충족하거나 독립 데모 앱에서만 동작하면 완료가 아니다. 두 제품의 전체 화면 또는 도메인 로직을 Leement로 옮기는 작업은 아니다.

이 Feature는 컴포넌트 카탈로그를 기존 기본 UI 8개 외에 최소 41개 복합 registry item까지 확장한다. Kibo 공개 사이트에 있는 각 항목을 무조건 같은 이름·코드로 복제한다는 뜻은 아니다. 대응 컴포넌트는 실제 동작, 접근성, 문서 및 소비자 설치 검증을 갖춰야 한다. 블록 카탈로그의 정확한 목표 규모는 별도 범위 결정이 필요하다.

Design Tokens + Design Rules가 시각·상태 규칙의 정본이다. `@leement/theme`은 이를 CSS로 전달하고, shadcn registry는 수정 가능한 React source를 사용자 프로젝트에 전달한다. `--lm-*`에서 shadcn 호환 변수를 파생하며 역방향 의존성을 만들지 않는다. `@leement/react` 같은 런타임 컴포넌트 패키지로 대체하지 않는다.

Leement는 두 제품의 수치를 평균 내거나 프로젝트별 복사본을 유지하지 않는다. 공통된 시각 의도, 실제 사용 맥락, 가독성·접근성, 일관된 상태 표현을 근거로 **하나의 공용 규칙과 light/dark semantic theme**을 선택한다. 원본과 다른 수치·스타일은 그 결정이 두 프로젝트에서 모두 사용 가능한지 검증하고 이유를 기록한다. 앱 고유 브랜드·도메인 표현만 앱 계층에 남긴다.

## 두 참조 프로젝트의 교체 기준 (2026-09-27)

CopySinger `src/shared/ui/*`와 Leesfield `src/shared/ui/brand/*`에 같은 이름으로 존재하는 다음 **22개 디렉터리**는 모두 공통 구현·교체 가능성의 검증 대상이다. 이름이 같아도 API·동작·수치가 동일하다고 가정하지 않는다. 필요한 경우 마이그레이션 안내를 제공하되 두 앱이 서로 다른 Leement 컴포넌트 복사본을 유지하지 않도록 한다.

| 영역 | 공통 대상 |
| --- | --- |
| Controls | button, input, select, switch, tabs |
| Surfaces and overlays | card, dialog, dropdown-menu, popover, sheet, tooltip |
| Feedback and information | badge, chart, separator, skeleton, state-panel, status-notice |
| Composition and brand patterns | bento-grid, label, product-page-intro, resource-row-link, reveal-content |

CopySinger에만 있는 `audio-waveform-player`, `collapsible`, `funnel-stepper`, `gradient-text`, `page-skeleton`, `progress`, `slider`, `sonner`, `voice-orb`, `voice-signal-core`와 Leesfield `src/shared/ui`의 일반 UI 및 `app-*` 래퍼도 전수 조사한다. 반복 가능한 인터페이스 문제라면 Leement 대응 항목을 제공한다. 제품 도메인에 묶인 경우에는 앱 유지 사유와 Leement 공용 부분과의 조합 경계를 기록한다. 이 분류로 공통 22개 대상의 미구현을 정당화할 수 없다.

대응표에는 원본 경로·export·실제 사용처·props/slot·variant·상태·디자인 의도와 서로 다른 수치·접근성·공통 Leement 항목·마이그레이션 방법·검증 근거를 담는다. 기준 경로는 `/Volumes/sn850x/programming-2/copy-singer-3/src/shared/ui`와 `/Volumes/sn850x/programming-2/leesfield/leesfield-fe/src/shared/ui`다. 기준 시점 이후 두 제품의 변경은 범위를 자동으로 늘리지 않는다.

## 비교 기준 (2026-09-26)

Kibo 공개 컴포넌트 탐색 메뉴의 41개 항목을 기준으로 한다.

| 영역 | Kibo 기준 항목 |
| --- | --- |
| Collaboration | Avatar Stack, Cursor |
| Project Management | Calendar, Gantt, Kanban, List, Table |
| Code | Code Block, Contribution Graph, Sandbox, Snippet |
| Forms | Choicebox, Combobox, Dropzone, Mini Calendar, Tags |
| Images | Image Crop, Image Zoom |
| Finance | Credit Card, Ticker |
| Social | Stories, Reel, Video Player |
| Callouts | Announcement, Banner |
| Styling | Typography |
| Other | Color Picker, Comparison, Deck, Dialog Stack, Editor, Glimpse, Marquee, Pill, QR Code, Rating, Relative Time, Spinner, Status, Theme Switcher, Tree |

기준 출처: https://www.kibo-ui.com/components/avatar-stack, https://github.com/shadcnblocks/kibo. 기준 시점 이후 Kibo 항목 변동은 이 Feature의 범위를 자동으로 바꾸지 않는다.

## 사용자 스토리

### US-1: 폭넓은 제품 UI 탐색

**As a** Leement를 평가하는 React 개발자
**I want** 기본 UI 외에 데이터, 입력, 피드백, 미디어 및 복합 작업 UI를 탐색하고
**So that** 제품 화면을 만들 때 같은 디자인 언어의 구성품을 찾을 수 있다.

**Acceptance Criteria:**

- [ ] Kibo 기준 41개 각각의 핵심 UI 사용 사례에 동작하는 Leement 대응 항목과 설명이 있다. 서버·서비스 연동 같은 제품별 기능은 범위를 명시할 수 있으나 핵심 UI 상호작용이 비어 있으면 완료로 계산하지 않는다.
- [ ] 기본 UI 8개 외에 최소 41개 복합 registry item이 있으며, 같은 기능의 이름만 바꾼 중복 항목은 수에 포함하지 않는다.
- [ ] Kibo 기준 항목별 대응 관계, 실제 기능 차이 및 의도적 제외 범위를 공개 문서에서 확인할 수 있다.
- [ ] 실제 제공 항목은 동작하는 component source를 가지며 placeholder나 정적 스크린샷으로 수를 채우지 않는다.
- [ ] 공통 22개 중 복합 항목은 별도 사용 사례와 동작을 제공할 때만 41개 목표 수에 포함한다. Kibo의 전체 블록 개수 복제는 이 목표에 포함하지 않는다.

### US-2: 소스 설치와 수정

**As a** shadcn registry를 사용하는 개발자
**I want** 복합 컴포넌트 하나를 설치할 때 필요한 의존성이 함께 설치되고
**So that** 가져온 코드를 내 프로젝트에서 바로 빌드하고 수정할 수 있다.

**Acceptance Criteria:**

- [ ] 추가 항목마다 registry metadata가 source 파일, npm dependency 및 registry dependency를 정확히 선언한다.
- [ ] 항목별 `npx shadcn@latest add @leement/{name}` 설치가 독립 소비자 앱에서 동작한다.
- [ ] 설치된 source는 `@leement/theme`과 Tailwind v4를 사용하는 소비자 앱에서 타입 검사·빌드된다.
- [ ] `pnpm add @leement/theme`, CSS `@import "@leement/theme"`, `npx shadcn@latest add @leement/{name}` 계약이 docs·registry metadata·로컬 배포 검증에서 일치한다. 실제 npm/호스트 게시 전에는 공개 설치가 가능한 것처럼 안내하지 않는다.
- [ ] pattern/block 하나를 설치할 때 필요한 Leement registry dependency가 함께 설치된다. 소비자가 source를 자유롭게 수정할 수 있다.

### US-3: 실제 사용 전 동작 검토

**As a** 컴포넌트를 선택하는 개발자
**I want** 주요 variant, 상태, 키보드 동작과 실제 설치 코드를 웹에서 확인하고
**So that** 제품에 가져오기 전에 적합성을 판단할 수 있다.

**Acceptance Criteria:**

- [ ] 모든 신규 항목에 실행 가능한 기본 예제와 중요한 상태·variant 예제가 있다.
- [ ] 문서는 사용 시점, 피해야 할 상황, API, 접근성, 설치 방법을 설명한다.
- [ ] 예제는 registry source를 직접 사용하고 Source 뷰는 배포되는 실제 파일과 일치한다.
- [ ] 신규 항목뿐 아니라 제공하는 **모든** UI/Pattern/Block에 조작 가능한 미리보기, 주요 상태, 설치 명령이 있다. docs의 빌드 결과에서 모든 상세 경로에 접근할 수 있다.
- [ ] Foundations의 Color, Typography, Spacing, Radius, Shadow, Motion도 light/dark 실제 토큰 값과 사용 규칙을 설명한다. component/pattern 문서는 가능할 때 anatomy, variants, sizes, states, examples, accessibility, API를 포함한다.

### US-4: CopySinger와 Leesfield의 공용 UI 교체

**As a** 두 제품의 개발자
**I want** 두 앱의 현재 공용 컴포넌트 사용처를 같은 Leement registry source와 API로 옮기고
**So that** 제품 간에 같은 UI 규칙을 중복 관리하지 않아도 된다.

**Acceptance Criteria:**

- [ ] 공통 22개 각각에 **두 프로젝트가 함께 쓸 수 있는** 동작하는 registry source 대응 항목, subcomponent/compound API, 설치 명령, 기존 export/사용처 대비표가 있다. `label`처럼 단독 UI가 아닌 항목도 대응 관계를 설명한다. 프로젝트별 Leement 복사본이나 별도 제품 theme preset으로 숫자를 맞추지 않는다.
- [ ] CopySinger 전용 10개와 Leesfield의 일반 UI 및 `app-*` 래퍼 전체를 조사하고 `reusable → registry`, `application-specific → 앱 유지`, `legacy/중복 → 교체 경로`로 분류한다. reusable 항목에는 구현 또는 실제 조합 예제가 있다.
- [ ] 기존 variant, size, slot, loading, disabled, focus, keyboard behavior를 대조한다. API가 다르면 바꿀 import·prop·composition과 사용자에게 보이는 동작을 문서화하고 검증한다. 기존 API를 무조건 1:1 복제하지 않는다.
- [ ] 공통 22개 모두 CopySinger와 Leesfield 환경에서 설치·import·render smoke 검증을 통과한다. 양쪽 앱의 격리된 통합 환경에서 최소 Button/Input/Card, overlay 1종, form control 1종, pattern 1종의 실제 사용처를 교체하고 타입 검사·빌드·핵심 상호작용에 신규 회귀가 없는지 확인한다. 원본 앱 파일을 조용히 덮어쓰지 않는다.
- [ ] 기존 앱에 사전 실패가 있다면 기준 상태와 Leement 도입으로 생긴 실패를 분리해 기록한다. 독립 소비자 예제만으로 두 제품 교체 가능성을 주장하지 않는다.

### US-5: light/dark 공통 디자인 언어와 접근성

**As a** 두 제품의 사용자와 디자이너
**I want** CopySinger의 light와 이를 바탕으로 한 Leesfield의 dark가 같은 디자인 언어로 보이고 작동하고
**So that** 두 제품이 일관된 공용 UI를 쓰면서도 각 환경에서 읽고 조작하기 쉽다.

**Acceptance Criteria:**

- [ ] 두 제품의 실제 CSS와 공용 UI에서 색상, typography/font loading, spacing, radius, border, shadow, hover, focus, disabled, loading, error, success, warning, data accent의 **공통 의도와 다른 수치**를 구분해 기록한다. 채택한 단일 규칙은 반복된 사용 사례, 가독성·접근성, 상태 일관성, 두 앱 적용 가능성으로 설명한다. 기계적인 수치 평균이나 원본별 픽셀 일치를 기준으로 삼지 않는다.
- [ ] `@leement/tokens`의 공통 semantic 역할과 `@leement/theme`의 light/dark 값이 하나의 디자인 언어를 표현한다. Leesfield dark는 CopySinger light의 의미상 대응 모드로 읽혀야 한다. registry source에 제품별 임의 색상이나 Tailwind palette 클래스를 흩어 놓지 않는다.
- [ ] 공통 22개와 Button/Input/Card를 포함한 대표 화면을 두 원본과 나란히 light/dark, desktop/mobile, 주요 variant 및 default/hover/focus/disabled/loading 상태에서 시각 검토한다. 원본과 숫자나 픽셀이 다르다는 이유만으로 실패 처리하지 않고, 선택된 공통 규칙의 일관성·가독성·동작·앱 적용 가능성을 평가한다. 의도적 차이는 디자인 규칙·마이그레이션 안내에 명시한다.
- [ ] 디자인 문서, 실제 token/theme 값, registry class, docs 미리보기가 같은 규칙을 설명한다. Card의 radius/spacing/shadow처럼 현재 불일치한 규칙을 해소한다. Pretendard 등 서체 로딩 방법과 폴백도 소비자 설치 문서에 포함한다.
- [ ] 해당하는 interactive 항목의 키보드, focus-visible, aria/label, disabled, loading, contrast를 확인한다. Dialog/Tooltip 등 headless primitive의 focus/composition 동작을 시각 변경으로 깨뜨리지 않는다.

## 기능 요구사항

- FR-1: `Design Language → Design Tokens → Web Theme → UI Components → Patterns → Blocks → Application` 책임과 기존 UI / Patterns / Blocks 계층을 유지한다. tokens는 Tailwind·shadcn·React에 의존하지 않는다.
- FR-2: Kibo 41개 항목의 사용 사례별 대응표를 관리하고 각 핵심 UI 상호작용을 제공한다. 동일한 이름이나 1:1 코드 복사는 요구하지 않지만 서비스 연동 등의 의도적 제외 범위는 명시한다.
- FR-3: 기본 UI 8개 외에 최소 41개 복합 UI·Pattern registry item을 구현한다. 신규 항목은 category coverage, 실제 기능 및 설치 가능성으로 검증한다.
- FR-4: semantic token이 필요한 상태색·surface·motion은 token/theme에서 정의한다. 컴포넌트별 임의 색상 복제를 피한다.
- FR-5: 필요한 headless/behavior library는 item dependency로 선언하고 keyboard, focus, aria, disabled, loading 및 contrast를 검증한다.
- FR-6: docs의 갤러리·상세 페이지가 신규 항목과 여러 예제를 표시하며 설치 명령과 원본 소스를 제공한다.
- FR-7: Kibo MIT 코드를 이식하면 해당 파일과 저장소에 라이선스 고지를 유지하고 Leement의 토큰·API·dependency 계약에 맞게 조정한다.
- FR-8: maturity는 experimental / candidate / stable 근거에 따라 표시한다. 카탈로그 확대만으로 stable로 승격하지 않는다.
- FR-9: 공통 22개와 추가 reusable source UI를 coverage/migration matrix에 대응시키고, Kibo 사용 사례 수보다 두 참조 프로젝트의 공용 UI 교체 가능성을 먼저 검증한다.
- FR-10: CopySinger light에서 Leesfield dark로 이어진 디자인 의도를 공통 token/rule과 light/dark semantic theme으로 정리한다. 두 제품의 수치가 다를 때 하나의 근거 있는 규칙을 선택하고 의도적 차이를 문서화한다. shadcn compatibility 변수는 항상 Leement semantic token에서 파생한다.
- FR-11: 실제 두 프로젝트의 격리된 통합 검증과 독립 소비자 설치 검증을 모두 수행한다. 공통 항목 전수 smoke와 대표 사용처 교체 증거를 남긴다.
- FR-12: 모든 제공 UI/Pattern/Block을 docs에서 registry source로 미리 보고 설치할 수 있게 한다. 신규 항목만 docs를 완성하는 것으로 처리하지 않는다.

## 비기능 요구사항

- **성능**: 항목별 설치를 유지하고 전체 카탈로그를 설치하는 단일 런타임 패키지를 만들지 않는다. 무거운 라이브러리는 필요한 registry item에만 선언한다.
- **접근성**: 키보드와 보조기술 조작을 우선하고, 외부 primitive의 검증된 behavior를 시각 변경으로 깨뜨리지 않는다.
- **배포**: 모든 신규 item JSON과 docs 경로가 문서 앱 빌드에 포함된다. 실제 npm 게시·호스팅은 별도 릴리스 결정이다.
- **검증성**: coverage matrix의 각 행에 구현·문서·설치/통합 검증 근거를 연결한다. 기존 앱의 사전 오류와 신규 회귀를 구분한다.
- **API**: HTML semantics와 예측 가능한 props/composition을 우선한다. 제품별 variant가 많으면 공용 variant로 무조건 흡수하지 않고 pattern 또는 앱 wrapper 경계를 기록한다.
- **범위 경계**: backend 서비스, 실시간 협업 서버, 결제 처리, 미디어 인코딩 및 생성 캔버스·음성 엔진 같은 제품 도메인 로직은 포함하지 않는다. 반복 가능한 UI 조각은 공용화하고 제품 데이터·동작은 주입받는다. Figma sync, 자체 CLI, codemod, Vue/Svelte/Web Components, 복잡한 테마 엔진도 만들지 않는다.

## 관련 문서

- PRD: `docs/prd/leement-prd.md`
- PRD Refs: `PRD-FR-001`–`PRD-FR-012`, `PRD-NFR-001`–`PRD-NFR-005`
- Design Refs: `docs/designs/design-system.md`
