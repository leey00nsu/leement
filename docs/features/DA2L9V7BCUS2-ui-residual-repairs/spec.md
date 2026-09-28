# Feature Spec: 잔여 UI 오류와 컴포넌트 탐색성 수정

## 개요

- **기능 ID**: DA2L9V7BCUS2
- **기능명**: ui-residual-repairs
- **대상 레포**: Leement
- **작성일**: 2026-09-28
- **상태**: Approved

## 목적

앞선 전수 감사에서 통과로 기록했지만 사용자가 실제 문서에서 확인한 네 가지 결함을 수정한다. Slider의 보이지 않거나 찌그러진 트랙, Stories와 Reel의 혼동 및 왼쪽 메뉴 누락, Kibo 참조와 다른 Marquee의 가장자리 처리와 예제, 문서 전용 Code/Preview 탭과 공개 Tabs 사이의 격차를 해결한다. 라이트 테마의 탭 선택 상태는 배경·경계의 실제 대비를 측정해 개선한다.

문서 화면만 고치지 않고 registry 원본, 설치 가능 예제, 사용 규칙을 같은 동작으로 맞춘다. Kibo는 참고 화면과 anatomy의 기준이며 Leement의 브랜드·토큰·source ownership 원칙을 유지한다.

## 사용자 스토리

### US-1: 컴포넌트를 설치하는 개발자

**As a** Leement를 쓰는 React 개발자, **I want** Slider·Marquee·Tabs가 문서에서 본 구조와 상태로 설치되기를 원한다, **so that** 소비자 앱에서 같은 문제를 다시 구현하지 않을 수 있다.

**Acceptance Criteria:**

- [ ] Slider 단일값과 범위값의 트랙·선택 구간·thumb가 실제 폭 안에 보이고, 키보드·포인터 입력과 disabled 상태가 동작한다.
- [ ] Marquee가 양끝으로 자연스럽게 사라지는 시각 효과를 제공하고, 원형 콘텐츠 예제가 문서에서 보인다. pause와 reduced motion에서도 내용이 읽힌다.
- [ ] Code/Preview 화면처럼 폭을 채우는 선택형 Tabs를 공개 `@leement/tabs` source로 조합할 수 있고, 문서 workbench도 그 source를 사용한다.

### US-2: 컴포넌트를 탐색하는 사용자

**As a** 문서 이용자, **I want** Stories와 Reel의 다른 목적을 곧바로 알고 관련 항목을 왼쪽 메뉴에서 찾기를 원한다, **so that** 영상 스토리 팝업을 Reel과 혼동하지 않는다.

**Acceptance Criteria:**

- [ ] Stories는 thumbnail에서 여는 이미지·영상 sequence, Reel은 세로 short-video feed라는 차이가 문서와 예제에 명확하다.
- [ ] Reel이 Stories와 관련된 왼쪽 Social 탐색 맥락에서 실제 `/blocks/reel` 문서로 연결된다. Block이라는 registry 분류와 설치 명령은 정확히 표시한다.

## 기능 요구사항

### FR-1: Slider의 실제 레이아웃과 입력 복구

Base UI Slider의 현재 DOM/data attribute를 기준으로 horizontal·vertical 스타일이 적용되도록 고친다. 트랙 높이, thumb 위치, indicator 범위 및 크기는 단일값·두 값에서 실제 브라우저로 확인한다. 원래 Base UI의 키보드·접근성 동작을 유지한다. docs의 Volume/Preferred range 예제가 수정된 원본을 보여 준다.

### FR-2: Stories/Reel 의미와 탐색 경로 정리

Stories 팝업은 Reel을 여는 기능이 아니라 Stories viewer임을 명시한다. Reel은 기존 독립 block과 `/blocks/reel` registry item으로 유지하되, Social 메뉴의 Stories 옆에서 찾을 수 있도록 관련 링크를 제공한다. 잘못된 `/components/reel` 경로와 중복 registry item은 만들지 않는다. 예제와 docs item guidance도 구별한다.

### FR-3: Marquee fade와 원형 예제

[사용자 제공 Kibo 참조](./artifacts/kibo-marquee-reference.png)처럼 이동 콘텐츠의 왼쪽·오른쪽 가장자리에 fade를 적용한다. 배경이 바뀌어도 작동하는 처리로 하고 pause 버튼, 텍스트 및 복제 콘텐츠의 접근성은 유지한다. 문서의 기본 예제는 원형 시각 아이템을 보여 주되 외부 서비스 이미지에 의존하지 않는다. 모션 축소와 작은 화면에서 콘텐츠가 사라지거나 잘리지 않게 한다.

### FR-4: 공개 Tabs의 workbench 형태와 라이트 대비

[사용자 제공 탭 참조](./artifacts/kibo-tabs-reference.png)의 넓은 segmented Code/Preview 선택 구조를 설치 가능한 `@leement/tabs`의 작은 variant 또는 명확한 조합 규칙으로 제공한다. docs workbench의 별도 Radix Tabs 구현을 공개 registry Tabs로 교체한다. 기존 default/line 변형과 Base UI의 tablist·tab·tabpanel 및 방향키·focus 동작은 유지한다.

라이트 배경의 선택된 탭은 현재 `#ffffff`과 `#f5f5f5` 사이의 대비 약 1.09:1, 문서 workbench의 `bg-muted/40`과 흰색 사이 약 1.03:1이어서 표면만으로 구별하기 어렵다. 선택 경계나 표시 요소는 인접 표면 대비 3:1 이상을 목표로 하고, active/inactive 글자와 focus가 두 테마에서 구별되도록 한다. 텍스트 대비와 상태 구별을 별도로 확인한다.

## 완료 기준

1. 네 영역의 원인, 적용한 source 및 docs 변경, 전후 확인 결과가 기록된다.
2. Slider 단일값/범위값의 horizontal 실제 렌더와 입력, 필요한 vertical 사례, light/dark·모바일을 확인한다.
3. Social 탐색에서 Reel 링크를 찾고 Stories와 Reel의 다른 동작을 실제로 확인한다.
4. Marquee 양쪽 fade와 원형 예제, Tabs segmented 변형과 문서 workbench가 두 테마에서 확인된다. 키보드·focus·reduced motion이 유지된다.
5. 변경된 registry item의 빌드, 격리 소비자 설치·typecheck/build 및 설정된 `pnpm typecheck`, `pnpm lint`, `pnpm test`, `pnpm build`가 통과한다.

## 범위와 제약

- 두 기존 제품의 앱 코드·도메인 데이터, Reel의 미디어 공급·서비스 연동, Kibo 사이트 전체 복제는 범위 밖이다.
- 설치된 source를 사용자가 소유하고 수정할 수 있는 shadcn registry 배포 방식을 유지한다.
- 작업 완료 후 `local-ff` 병합은 별도 승인 경계에서 멈춘다. 이전의 자동진행 요청을 이 Feature의 병합 승인으로 간주하지 않는다.

## 관련 문서

- PRD: `../../prd/leement-prd.md`
- PRD Refs: `PRD-FR-005`, `PRD-FR-006`, `PRD-FR-007`, `PRD-FR-008`, `PRD-FR-009`, `PRD-FR-011`
- Design Refs: `docs/designs/design-system.md`, [Marquee 참조](./artifacts/kibo-marquee-reference.png), [Tabs 참조](./artifacts/kibo-tabs-reference.png)
