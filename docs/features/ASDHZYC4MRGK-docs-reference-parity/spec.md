# Feature Spec: docs-reference-parity

## 개요

- **기능 ID**: ASDHZYC4MRGK
- **기능명**: docs-reference-parity
- **대상 레포**: Leement
- **작성일**: 2026-10-05
- **상태**: Approved

- **명세 승인**: 2026-10-05 사용자 `A` — 명세 승인 후 계획·구현 진행.

## 목적

반복되는 설명 문단을 정리하고 실제 예제와 정확한 API Reference 중심으로 문서를 제공한다. shadcn Base 문서의 예제·조합·API, Kibo 공개 Blocks 전체, shadcn Charts 전체에 대응한다. 문서에 필요한 실제 컴포넌트 기능도 같은 Feature에서 보완한다.

2026-10-06 사용자 수정 요청: 전체 문서에서 Examples와 중복되는 접힌 안내를 정리한다. 기본 사용법은 하나로 제공하고 고유 설명은 관련 예제에 통합한다. Provider·설정·긴 recipe 등 별도 안내가 필요한 정보는 유지하며 고정 예제/API 대응 범위는 줄이지 않는다.

## 기준과 현재 차이

2026-10-05의 고정 upstream commit을 사용한다. [reference-baseline.json](./artifacts/reference-baseline.json)에 항목별 예제 ID, 문서 headings, API 표 수, source 경로와 출처를 보존했다. 구현 중 분모를 줄이지 않는다.

| 기준 | 범위 | 현재 차이 |
| --- | --- | --- |
| shadcn Base | 64개 문서 중 NativeSelect 제외 63개, Preview 참조 456건/고유 ID 453개 및 inline 사용법·조합 | 일부 component 부재, 예제·API 설명 부족 |
| Kibo 공개 Blocks | Applications 3개 + Websites 25개 = 28개, 항목마다 공개 예제 source 존재 | 기존 8개 block은 이 목록의 완전한 대응이 아님 |
| shadcn Charts | 7개 분류/70개 recipe | Chart primitive와 제한된 예제, 전용 탐색 부재 |

기존 사용자 지시대로 NativeSelect와 그 페이지의 5개 예제는 복원하지 않는다. 다른 예제에서 선택 입력이 필요하면 Select/Combobox를 사용한다. 따라서 제외 없는 upstream 전체 100%라고 표시하지 않는다. 나머지 63개 문서의 기능·예제·API 설명은 100% 대응해야 한다. 제목이나 개수만 맞춘 것을 대응으로 인정하지 않는다.

현재 Avatar는 Radix 기반이며 Badge/Group/GroupCount와 size API가 없다. Leement 전체가 이미 Base UI로 통일되어 있다고 가정하지 않는다. Base 문서의 primitive/API 대응에 필요한 변경은 source·타입·예제·문서를 함께 수정한다. Base UI에 해당하지 않는 기능은 적합한 외부 라이브러리의 실제 API로 설명한다.

## 사용자 스토리

### US-1: 필요한 사용법을 바로 찾는다

**As a** 컴포넌트를 도입하는 개발자
**I want** 설치·사용법·동작 예제·정확한 API를 읽고 실행한다
**So that** 지원 기능을 추측하지 않아도 된다.

**Acceptance Criteria:**

- [x] 모든 기존 component/pattern/block 상세의 반복적인 When to use, When not to use, Anatomy, Variants, Sizes, States, Accessibility, Motion, API 문단과 대응 목차를 제거한다.
- [x] Overview/Preview → Installation → Usage → Examples → API Reference 순서로 읽는다. 필요한 composition은 Usage에서 설명한다.
- [x] 필수 label/focus, controlled state, disabled/loading, portal, reduced motion 등 항목 고유 제약은 관련 Usage/예제/API note에 남긴다.
- [x] Foundations의 디자인 규칙과 편집 기능을 유지한다.

### US-2: shadcn Base의 모든 사용 사례를 Leement에서도 사용한다

**As a** shadcn Base 사용자
**I want** 대응하는 모든 예제와 상세 API, 공식 primitive 링크를 제공받는다
**So that** Leement를 선택해도 기능이 빠지지 않는다.

**Acceptance Criteria:**

- [x] 63개 문서의 Preview 참조와 inline 사용법·조합에 대응 항목이 있고 누락은 0이다. 중복 upstream 예제는 재사용할 수 있지만 각각의 사용 맥락을 찾을 수 있다.
- [x] Attachment, Bubble, Carousel, ContextMenu, Direction, Drawer, InputOTP, Item, Marker, Menubar, MessageScroller, Message, NavigationMenu, Questionnaire, Resizable, ScrollArea, Sidebar를 설치 가능한 source로 보완한다.
- [x] 기존 Alert→StatusNotice, Empty→EmptyState, DatePicker/DataTable pattern은 이름만으로 완료 처리하지 않고 compound 구조·동작·예제로 동등성을 검증한다.
- [x] API Reference에 public part/export별 설명, prop/type/default/required/동작, variant/size, controlled/uncontrolled와 주요 event 계약을 표시한다. upstream이 설명한 hook/provider/composition도 빠뜨리지 않는다.
- [x] primitive 세부사항은 실제 라이브러리의 정확한 공식 API로 연결한다. Base UI 기반은 Base UI로, Recharts 등은 해당 공식 문서로 연결한다. unsupported prop을 문서로만 약속하지 않는다.
- [x] 예제는 registry 원본을 사용하며 표시 코드와 실행 코드가 일치한다. 복사한 코드를 consumer 프로젝트에서 사용할 수 있다.

### US-3: 공개 Blocks를 실제 화면에 사용한다

**As a** 제품과 웹사이트 화면을 만드는 개발자
**I want** Kibo 공개 Blocks 28개에 대응하는 Leement source를 설치한다
**So that** 프리뷰를 확인하고 앱 데이터와 연결할 수 있다.

**Acceptance Criteria:**

- [x] Applications: Codebase, Collaborative Canvas, Roadmap의 3개를 제공한다.
- [x] Websites: About, Awards, Blog, Blog Post, Careers, Case Studies, Case Study, Changelog, Code Example, Community, Compare, Compliance, Contact, CTA, Download, Experience, FAQ, Feature, Footer, Form, Hero, Pricing, Stats, Team, Testimonial의 25개를 제공한다.
- [x] 각 block은 동등한 핵심 구성과 상호작용, 실제 source/설치 명령, registry dependency, 앱 데이터로 교체할 수 있는 props/composition 계약을 가진다.
- [x] 폼 제출·파일/코드 선택·필터/탭·canvas 조작 등 실제 동작을 검증한다. 이름만 바꾼 Card나 정적 placeholder는 완료로 세지 않는다.
- [x] 인증·저장·네트워크 협업 backend는 앱 책임이며 데모 시뮬레이션과 실제 연동 경계를 명시한다. 서버 없는 예제를 실제 서버 연결로 설명하지 않는다.
- [x] 기존 Blocks/Patterns를 유지하고 한 항목을 여러 분류에 중복 등록해 수를 늘리지 않는다.

### US-4: Charts를 탐색하고 설치한다

**As a** 대시보드를 만드는 개발자
**I want** 상단 Charts에서 차트 예제를 탐색하고 source를 설치한다
**So that** Leement theme으로 데이터 시각화를 구성한다.

**Acceptance Criteria:**

- [x] desktop/mobile 상단 Charts, 분류 탐색, 검색, 직접 링크와 active 상태를 제공한다.
- [x] Area 10, Bar 10, Line 10, Pie 11, Radar 14, Radial 6, Tooltips 9의 70개 recipe 전부에 실제 차트·코드·설치 경험을 제공한다.
- [x] 기존 Components의 Chart는 공통 primitive API 문서로 유지한다. recipe 탐색은 Charts에 둔다.
- [x] recipe의 registry 설치에서 Chart/Card 등 필요한 source와 Recharts dependency를 함께 받는다.
- [x] 데이터 범위 전환·series 선택·tooltip·legend·축/label/stack/donut/radar/radial 등 baseline의 고유 동작을 유지한다.
- [x] 반응형, dark/light, Foundations 색/폰트/모션 변경, 접근 가능한 데이터 설명과 정적 데이터 fallback을 지원한다.

## 기능 요구사항

### FR-1: 예제와 API 중심 문서

기존 템플릿의 중복 설명을 제거하고 항목별 Usage/Examples/API Reference를 제공한다. 짧은 기존 문장을 표 하나로 옮긴 것을 상세 API로 인정하지 않는다. Leement 고유 component/pattern/block도 같은 구조로 정비한다. 실제 public TypeScript API가 실행 계약이다.

### FR-2: 고정 기준으로 대응 추적

baseline의 각 page/example/API part, Kibo block, chart recipe에 Leement item/route/example/source와 검증 근거를 연결한다. 완료 시 missing/unsupported는 0이며 NativeSelect 제외만 별도로 표시한다. inline 예제와 긴 Sidebar/DataTable 사용 안내도 Preview ID 수에 포함되지 않았다는 이유로 누락하지 않는다. upstream의 사용법은 Leement API에 맞춰 설명하고 기능별 차이는 기록한다. 미래 upstream 변경은 별도 요청에서 기준을 갱신한다. 기준표는 Feature 검증 자료이며 과거 제거한 Kibo coverage 메뉴를 복원하지 않는다.

### FR-3: source ownership과 디자인 정본

토큰·디자인 규칙이 정본이다. upstream 사용 사례를 Leement semantic color, 서체, control size, spacing, light/dark로 표현한다. React component npm library/자체 CLI/token compiler는 추가하지 않는다. dependency 설치를 포함해 plain React consumer에서 source를 소유한다. Next 전용 import/backend를 reusable source에 강제하지 않는다.

### FR-4: 기존 Preview 경험 보존

모든 기본·추가·Block·Chart 예제에서 resize handle, 실제 px, Replay, 점선/inset/중앙 배치, 실제 iframe 반응형, theme/Foundation 동기화를 유지한다. 새 예제도 단일 runtime에서 실행하며 수백 개 예제를 동시에 mount하지 않는다. 설치 source에 문서 전용 iframe/제어 UI를 포함하지 않는다.

### FR-5: 설치와 상호작용 검증

전체 registry graph/route/example/API 대응 목록을 검사한다. 독립 consumer에서 신규·변경 source와 recipe의 dependency 설치·타입·빌드를 확인한다. form/group label, 키보드/focus/disabled/aria/contrast, popup focus 복귀, RTL, chart 상호작용 등 실제 계약을 위험도별로 검증한다. 필수 typecheck/lint/test/build를 통과한다.

## 비기능 요구사항

- **성능**: 상세/갤러리는 필요한 프리뷰만 실행한다. 무거운 editor/media/chart를 처음부터 전부 mount하지 않는다. 탐색·스크롤·폭 변경에 회귀가 없어야 한다.
- **접근성**: primitive의 keyboard/focus/aria를 보존하고 label/id 충돌을 피한다. 차트는 색상만으로 정보를 전달하지 않는다.
- **모션**: 시각 애니메이션·전환은 Motion으로 실행한다. Recharts 자체 보간을 끄고 reduced motion, SSR/no-JS 가독성을 유지한다.
- **호환성**: strict TypeScript, Tailwind v4, 공개 설치 namespace/theme import를 유지한다. 기존 API 변경에는 영향·이전 안내·consumer 검증을 제공한다.
- **라이선스**: MIT source의 attribution/license를 기존 위치에 보존한다. premium Shadcnblocks는 Kibo 공개 범위에 포함하지 않는다. 이미지/브랜드/서비스 데이터는 배포 가능한 중립 자료로 바꾼다.
- **성숙도**: 신규 항목은 근거에 따라 experimental/candidate로 표시하며 일괄 stable로 선언하지 않는다.

## 범위 밖

NativeSelect 복원, React component npm library/자체 CLI, Orb·Shader, 서버 협업/인증/저장 서비스, paid blocks, 원본 앱 전면 교체, npm publish/remote push/Coolify 배포. README 수정은 요청되지 않아 범위 밖이다.

## 관련 문서

- PRD: `../../prd/leement-prd.md`
- PRD Refs: PRD-FR-005, PRD-FR-007, PRD-FR-008, PRD-FR-009, PRD-FR-011, PRD-FR-014, PRD-FR-015, PRD-FR-016, PRD-FR-017, PRD-NFR-004
- Design Refs: `docs/designs/design-system.md`
- 참고: [shadcn Base Avatar](https://ui.shadcn.com/docs/components/base/avatar#api-reference), [Base UI Avatar](https://base-ui.com/react/components/avatar), [Kibo Blocks](https://www.kibo-ui.com/blocks/collaborative-canvas), [shadcn Charts](https://ui.shadcn.com/charts)
