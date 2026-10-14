# Feature Spec: landing-brand-reveal

## 개요

- **기능 ID**: SPXPCQPUGPPF
- **기능명**: landing-brand-reveal
- **대상 레포**: Leement
- **작성일**: 2026-10-15
- **상태**: Approved
- **승인 기록**: 2026-10-15 사용자 A — 랜딩 명세 승인. 같은 날 “아직 외부에서 사용하는 곳이 없다. 브레이킹체인지로 수정하고자 한다.” 요청으로 전역 primary 통합 및 기존 brand 색 제거 범위를 승인. 같은 날 “랜딩에서 로고는 텍스트도 있도록 수정해줘” 요청으로 아이콘과 Leement 워드마크 표시를 승인. 이후 사용자가 앞선 흰색 텍스트와 파란 primary 제거 요청의 누락을 지적하여 #706BC5·흰색 전경 통일을 확정.

## 목적

정적인 문서 홈에 Leement 로고와 순차 진입을 더하고 실제 registry UI 쇼케이스를 기울어진 장식 갤러리로 바꾼다. 주요 동작·선택 상태와 데이터에 브랜드 역할을 적용하여 중립 UI의 구조와 제품의 색을 함께 보여 준다.

## 사용자 스토리

### US-1: 브랜드와 구성 요소를 한눈에 확인한다

**As a** Leement 문서 방문자
**I want** 로고, 소개, 이동 버튼과 브랜드색을 가진 기울어진 UI 갤러리를 본다
**So that** 라이브러리의 인상과 제공되는 UI를 이해하고 실제 문서로 이동할 수 있다.

**Acceptance Criteria:**

- [x] 기존 Leement mark와 Leement 워드마크가 타이틀 위 중앙에 함께 표시되고 천천히 fade in 한다.
- [x] 타이틀 → 설명 → 버튼 순서로 text reveal이 시작된다.
- [x] 기존 다양한 UI 카드가 첨부 이미지처럼 함께 기울어진 밀도 높은 갤러리로 표시된다.
- [x] 갤러리 진입 시 화면에서 위에 있는 카드부터 아래 카드로 하나씩 fade in 한다.
- [x] 갤러리의 버튼·링크·입력·선택·차트는 마우스와 터치, Tab·Enter·Space로 조작되지 않는다.
- [x] 헤더, 모바일 문서 탐색, Get started와 View components는 실제 문서로 이동한다.
- [x] 주요 동작과 선택 상태는 브랜드 강조색, 차트는 데이터 강조색을 사용하며 카드 표면과 본문은 중립색을 유지한다.
- [x] light/dark와 375/768/1440/1920px에서 배치·잘림·배경 연결을 확인한다.
- [x] reduced motion에서는 진입 지연·이동·blur 없이 즉시 표시된다. JavaScript가 없어도 소개와 링크, 카드가 보인다.

## 기능 요구사항

### FR-1: 로고와 순차 소개

기존 /leement-mark.svg와 BrandLogo full 조합을 재사용한다. 아이콘 옆에 Paperlogy Bold의 Leement 워드마크를 표시하고 모바일과 데스크톱에서 비례에 맞게 크기를 조정한다. 아이콘과 워드마크는 하나의 로고로 함께 fade in 한다. 로고는 타이틀 위 중앙에 충분한 간격을 두며 약 1.2초의 일회성 opacity 진입을 적용한다. 타이틀·설명·버튼의 등장은 이 순서로 시작하고 텍스트는 작은 수직 이동·opacity·blur 해제로 reveal한다. 버튼 전체를 먼저 나타내고 문구만 뒤늦게 노출하는 불일치를 피한다. 현재 카피와 두 링크의 목적지는 유지한다. 핵심 이동은 애니메이션 완료를 기다리지 않고 사용할 수 있다.

### FR-2: 기울어진 UI 갤러리

사용자 제공 이미지는 배치 기준이다. 사진을 UI 대신 넣는 요구가 아니다. 실제 registry source로 만든 기존 18개 카드를 기반으로 개별 카드마다 제각각 회전시키지 않고 갤러리 전체를 하나의 대각선 평면으로 기울인다. 열은 아래로 갈수록 오른쪽으로 기울고 행은 오른쪽으로 갈수록 올라가는 참조 방향을 따른다. 화면 양옆까지 채우는 배치·서로 다른 카드 높이·촘촘한 간격·가장자리 crop을 유지한다. 모바일은 기울기와 표시 범위를 줄여 큰 빈 삼각형이나 페이지 가로 스크롤을 만들지 않는다. 카드 안의 컨트롤 배치와 글자 가독성을 유지한다.

### FR-3: 위에서 아래로 일회성 카드 등장

갤러리가 보이면 위쪽 카드부터 아래쪽 카드로 opacity와 작은 이동으로 진입한다. DOM의 첫 번째 열 전체가 끝난 뒤 다음 열이 등장하는 순서는 사용하지 않는다. 같은 높이의 카드는 좌→우 순서를 사용한다. 기울기와 카드 reveal의 transform은 충돌하지 않아야 한다. 스크롤을 왕복하거나 테마를 바꾸어도 완료한 진입을 반복하지 않는다. 화면 밖·비활성 문서에서 불필요한 실행을 멈추고 unmount 시 정리한다.

### FR-4: 장식 전용 갤러리

갤러리를 장식으로 처리하고 내부를 포커스 순서와 접근성 트리에서 제외한다. 클릭을 막는 투명 덮개나 pointer-events만으로 처리하지 않는다. 실제 버튼을 모두 disabled 처리하여 UI 색과 강조가 흐려지는 방식도 사용하지 않는다. 기존 저장·전송·로그인 상태 변경과 폼 submit 동작은 제거하고 브랜드색이 보이는 현실적인 고정 입력·선택 상태를 사용한다. 상단 링크와 사이트 탐색은 계속 작동한다. 실제 조작 가능한 문서 Preview에는 영향을 주지 않는다.

### FR-5: 브랜드색을 전역 primary로 통합

primary는 제품의 주요 동작과 선택 상태를 표현하는 브랜드색의 정본이다. 별도의 color.brand 그룹과 brand-accent utility/색 변수는 제거하며 deprecated alias를 남기지 않는다. action.primary, primaryForeground, primaryHover, primaryText와 primaryGradientStart/Middle/End를 사용한다. 일반 배경의 강조 글자는 primaryText, 채워진 면 위의 글자는 primaryForeground로 구분해 대비를 확보한다. focus.ring과 data.accent/series는 기본적으로 primary 계열을 참조하되 역할별 재정의는 허용한다. 두 모드의 기본 filled primary는 #706BC5, primaryForeground는 #FFFFFF로 통일한다. hover는 같은 보라 계열에서 어둡게 하고 일반 배경의 primaryText·focus·data 강조와 gradient는 모드별 대비를 갖춘 보라 계열이다. Leement mark의 파란 레이어도 같은 보라로 바꾼다. 독립된 palette·다중 데이터 시리즈·syntax의 파랑은 브랜드 역할이 아니므로 보존한다. Progress/Slider/Switch의 track은 primary와 3:1 이상 구분되도록 필요한 dark 표면만 조정하며 두 모드의 주요 UI·hover·focus 가시성을 검증한다. 랜딩 한정 primary override는 제거하고 문서 Preview와 설치 source에도 같은 전역 규칙을 적용한다. 중립 표면·본문·보조 동작·상태 의미색은 각자의 역할을 유지한다. BrandLogo/BrandAction/BrandGradientText와 brand variant·폰트·모션 이름은 색 중복이 아니므로 보존한다. Foundation 편집·export와 현재 문서·기존 계약 테스트를 새 역할에 맞춘다.

### FR-6: 배경과 대체 표시

소개와 카드 뒤 배경은 상단에서 갑자기 구획이 끊기지 않도록 이어진다. 하단은 현재 테마 배경색으로 카드 내용 전체가 점진적으로 사라진다. 장식 영역의 crop과 fade가 상단 링크나 footer를 가리지 않아야 한다. reduced motion과 no-JS에서는 모든 필요한 콘텐츠를 즉시 읽고 실제 링크를 사용할 수 있다.

## 비기능 요구사항

- **접근성**: 하나의 h1과 본문·실제 링크의 읽기 순서를 유지한다. 장식 컨트롤에 Tab이 들어가지 않고 실제 CTA의 이름·focus-visible·색 대비를 확인한다.
- **성능**: 지속적인 자동 이동이나 반복 모션을 추가하지 않는다. 추가 이미지·동영상·외부 자산 다운로드 없이 기존 mark와 카드 source를 사용한다.
- **호환성**: 외부 소비자가 없다는 사용자 결정에 따라 색 token 계약을 breaking change로 갱신한다. 구 색 alias는 보존하지 않는다. 배치·진입 정책은 홈에 한정한다. 설치 경로와 컴포넌트 이름은 유지한다.
- **검증**: 브라우저에서 참조 방향, 초반·중간·완료 시점의 순차 등장, 조작 차단, 모션 대체 표시와 화면 크기별 light/dark를 확인한다. 프로젝트 설정의 typecheck/lint/test/build 검사를 따른다.

## 관련 문서

- PRD: [leement-prd.md](../../prd/leement-prd.md)
- PRD Refs: PRD-FR-005, PRD-FR-011
- Design Refs: docs/designs/design-system.md
  - Design System: docs/designs/design-system.md
  - Visual Brief: - (기존 디자인 시스템과 이 Spec에서 범위를 정의)
- 참조 이미지와 색상 대안: [decisions.md](./decisions.md)

### 추가 인수 조건 (primary 통합)

- [x] 구 brand 색 token/utility가 배포 theme와 registry 및 현재 문서에서 제거된다.
- [x] 두 테마의 filled primary/hover 전경과 일반 강조 텍스트는 필요한 대비를 확보한다.
- [x] Foundation primary 편집·export가 public UI와 data/focus에 반영되고 구 brand 색 override는 거부된다.
- [x] Unreleased에 breaking migration을 설명하고 랜딩의 모션·비조작·대체 표시는 유지된다.

### 추가 인수 조건 (보라색 통일)

- [x] 두 모드 primary=#706BC5·전경=#FFFFFF이고 hover·강조 글자·focus·gradient 및 Leement mark에서 브랜드 파랑이 제거된다.
- [x] 기본/hover 전경과 일반 강조 글자는 4.5:1, 표시 track과 primary는 3:1 이상이며 Foundation 재정의·랜딩 모션·실제 UI 조작은 유지된다.
