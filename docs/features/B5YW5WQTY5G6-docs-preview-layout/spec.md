# Feature Spec: Docs preview layout

## 개요

- **기능 ID**: B5YW5WQTY5G6
- **기능명**: docs-preview-layout
- **대상 레포**: Leement
- **작성일**: 2026-10-03
- **상태**: Approved

- **명세 승인**: 2026-10-03 사용자 응답 `A`

## 목적

Showcase를 낮은 강조 배경 안에서 실제 UI를 보는 카탈로그로 정리하고, 문서 페이지와 Preview의 여백을 일관되게 만든다. 모든 공개 예제의 배치 문제를 조사하고 발견한 문제를 수정한다.

## 사용자 스토리

### US-1: 카탈로그에서 실제 UI를 읽기 쉽게 살펴본다

**As a** Leement 사용자
**I want** 반복된 카드 테두리보다 예제의 구조와 조작을 먼저 보고 싶다
**So that** 필요한 컴포넌트를 비교하고 선택할 수 있다

**Acceptance Criteria:**

- [x] Showcase의 바깥 항목은 테두리와 그림자 대신 낮은 강조 배경과 여백으로 구분된다.
- [x] 이름·설명·성숙도·설치 명령·상세 링크·검색과 범주 필터를 유지한다.
- [x] 현재 카탈로그 85개(UI 64, Pattern 13, Block 8)를 전수 조사하고, 내용의 경계 밀착·가로 넘침·불필요한 중첩 표면·잘린 제어를 수정한다.
- [x] 좁은 화면과 light/dark에서도 각 예제의 내용과 조작이 읽히고 사용할 수 있다.

### US-2: 같은 문서 여백 안에서 페이지를 탐색한다

**As a** 문서를 읽는 사용자
**I want** Adoption을 포함한 문서 페이지의 본문이 같은 공통 여백에서 시작하기를 원한다
**So that** 페이지 이동 시 불필요한 위치 변화가 없다

**Acceptance Criteria:**

- [x] Adoption의 중첩 main 및 중복 바깥 padding을 제거하여 페이지의 main landmark는 하나다.
- [x] 모든 문서 route를 조사하여 공통 좌우 여백과 상단 scaffold를 따른다.
- [x] 본문 전용 폭 제한, 우측 목차와 의도적인 제목 구성 차이는 유지할 수 있으나, 불필요한 이중 inset은 없다.
- [x] 홈의 의도적인 넓은 레이아웃과 모바일 탐색을 보존한다.

### US-3: 점선 안에서 일관된 미리보기를 본다

**As a** 컴포넌트 동작을 확인하는 사용자
**I want** 가로·세로 점선이 실제 Preview 콘텐츠 영역의 경계를 나타내기를 원한다
**So that** 프리뷰의 정렬과 여백을 이해할 수 있다

**Acceptance Criteria:**

- [x] 모든 Component/Pattern/Block 상세의 Preview에 위·아래 가로선과 왼쪽·오른쪽 세로선을 표시한다.
- [x] 점선은 프리뷰 바깥 여백을 가로질러 연장되어 사용자 이미지 4의 형태를 따른다.
- [x] 점선의 교차 안쪽 영역과 콘텐츠 배치 영역은 같은 inset을 사용한다. 선이 내용 한가운데 겹치지 않는다.
- [x] 콘텐츠 높이가 커져도 하단 선 아래로 내용이 빠지지 않는다. 정렬·최소 높이·좁은 폭이 필요한 예제도 같은 규칙을 따른다.
- [x] 점선은 장식이며 포인터·키보드 조작·보조기술을 방해하지 않는다.
- [x] Code와 Source 보기에 점선을 표시하지 않고 탭의 키보드 조작을 보존한다.

## 기능 요구사항

### FR-1: Showcase의 표면 계층

사용자 이미지 1을 참고하여 바깥 항목은 테두리 없는 낮은 강조 배경으로 만든다. 실제 프리뷰 표면과 컴포넌트 자체의 필요한 border는 유지한다. 설치 명령 영역에 또 다른 카드형 구획을 반복하지 않는다. 모든 예제에 기본 안쪽 여백을 보장하고, 작은 제어와 넓은 표·편집기·미디어의 크기 및 overflow를 용도에 맞게 확인한다. 콘텐츠를 일괄 축소해 문제를 감추지 않는다.

### FR-2: 전수 조사와 원인별 수정

85개 공개 항목을 같은 원본 예제로 Showcase와 상세 Preview에서 확인한다. 각 항목의 조사 결과, 문제 유무와 수정/의도적 예외를 Feature 문서에 기록한다. TextReveal과 RotatingContent만 수정하고 조사를 끝내지 않는다. 컴포넌트 내부 padding 문제와 문서 표시 영역의 inset 문제를 구분하여 적절한 책임 위치에서 수정한다.

### FR-3: 공통 문서 scaffold

Adoption, Showcase, Getting Started, 여섯 Foundations, Changelog, Component/Pattern/Block 상세의 공통 바깥 여백을 조사하고 중복 inset을 제거한다. 같은 레이아웃 책임을 페이지마다 다시 구현하지 않는다. 레이아웃을 위한 불필요한 추상화는 추가하지 않는다.

### FR-4: 공통 Preview 프레임

네 방향 점선과 콘텐츠 inset은 한 규칙으로 관리한다. 상세 Preview 전부에 같은 프레임을 적용하고 Showcase에도 공통 콘텐츠 여백 규칙을 적용한다. Showcase 타일의 점선 표시는 필수가 아니다. 장식선 때문에 popup·tooltip·focus ring이 잘리지 않도록 한다. 폭이 필요한 표와 타임라인은 해당 프리뷰 안에서 스크롤한다.

## 비기능 요구사항

- **디자인**: Leement semantic token과 실제 registry 원본 예제를 사용한다. 문서 전용 컴포넌트 복사본을 만들지 않는다.
- **접근성**: main landmark, 제목 계층, 키보드 접근, focus-visible, dialog/popover 포털과 reduced motion을 보존한다.
- **반응형**: 모바일 390px 및 데스크톱 1440px에서 검증하고, 그 사이의 레이아웃 전환과 좁은 gallery column도 확인한다.
- **검증**: 전체 카탈로그의 geometry/overflow 조사와 문제 항목의 실제 화면 확인, 전체 문서 route의 scaffold 점검, 기존 typecheck/lint/test/build를 수행한다.
- **배포**: 이번 Feature의 완료 승인은 구현과 로컬 통합을 각각 받는다. 공개 배포는 별도 요청 또는 승인에 따른다.

## 제외 범위

- 카탈로그 추가, 브랜드 변경, token 값 변경, 컴포넌트 API 재설계와 원본 앱 마이그레이션.
- README 및 README 스크린샷 갱신.
- Kibo 콘텐츠·브랜드의 복제 또는 다른 화면의 전체 재설계.

## 관련 문서

- PRD: `../../prd/leement-prd.md`
- PRD Refs: PRD-FR-005, PRD-FR-008, PRD-FR-011, PRD-FR-012, PRD-NFR-001, PRD-NFR-002
- Design Refs: docs/designs/design-system.md
- Design System: docs/designs/design-system.md
- Visual Brief: 사용자 제공 아래 이미지 및 [decisions.md](./decisions.md)의 조사 근거
- [Showcase 목표](./artifacts/reference-showcase.png)
- [TextReveal 현재 문제](./artifacts/current-text-reveal.png)
- [현재 점선 문제](./artifacts/current-preview-guides.png)
- [Preview 목표](./artifacts/reference-preview-guides.png)
