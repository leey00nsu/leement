# Leement PRD

## 목적

CopySinger의 밝은 UI를 바탕으로 Leesfield를 그 다크 모드처럼 만들려 했던 의도를 하나의 공통 디자인 언어로 정리한다. 두 제품의 실제 수치가 정확히 일치할 필요는 없으며, Leement가 반복된 사용 사례·가독성·접근성·일관성을 근거로 light/dark의 공통 규칙을 선택한다. 디자인 의사결정은 token과 rule에 기록하고, React 앱에는 shadcn registry로 수정 가능한 소스를 전달한다.

## 사용자

- 새 React 프로젝트에서 같은 제품 언어를 적용하려는 개발자.
- 토큰과 디자인 규칙의 근거를 확인하려는 디자이너와 기여자.

## v0.1 요구사항

- PRD-FR-001: `@leement/tokens`가 프레임워크에 독립적인 primitive 및 semantic token을 제공한다.
- PRD-FR-002: `@leement/theme`이 Leement CSS 변수와 하위 호환 shadcn alias를 제공한다. 기본 import는 패키지에 포함한 Pretendard Variable과 Paperlogy Bold(700) 웹폰트를 로드하며, 폰트 자산과 원본 라이선스를 함께 배포한다.
- PRD-FR-003: registry가 UI 8개, pattern 5개, block 1개의 소스를 소비자 프로젝트에 설치한다.
- PRD-FR-004: pattern과 block이 사용하는 내부 컴포넌트는 registry dependency로 함께 설치된다.
- PRD-FR-005: docs가 토큰, 사용 규칙, 예시, 접근성, API, 설치법을 설명하고 registry 원본을 예시에 사용한다. 상단 탐색·범주별 메뉴·상세 목차와 실제 미리보기를 제공하며 중복 비교 페이지를 메뉴에 두지 않는다. Showcase는 낮은 강조 배경과 실제 프리뷰 표면으로 항목을 구분하고 모든 예제의 기본 inset을 보장한다. Docs의 소개·설치·Adoption·Foundations·Changelog도 같은 표면 규칙을 사용하며 정보에 맞는 읽기 순서와 편집/복사 기능을 유지한다. 문서 바깥 여백은 공통 레이아웃이 소유하며 중복 main/inset을 만들지 않는다. 상세 Preview는 동일 inset으로 정렬된 가로·세로 점선 안에 콘텐츠를 배치하고 넓은 예제의 내부 스크롤과 조작을 보존한다.
- PRD-FR-006: 설치된 소스가 Tailwind v4 기반 소비자 앱에서 타입 검사 및 빌드된다.
- PRD-NFR-001: 키보드 탐색, focus-visible, disabled, aria와 Radix 접근성 동작을 유지한다.
- PRD-NFR-002: light와 dark의 semantic 이름을 공유하고 light를 우선 제공한다.
- PRD-NFR-003: 초기 배포는 pnpm workspace와 Turborepo로 관리한다. 별도 React npm 라이브러리, CLI, 토큰 컴파일러, Figma 동기화는 범위 밖이다.

## 수용 기준

토큰과 theme 빌드, docs 빌드, registry JSON 생성, 핵심 컴포넌트 테스트, 소비자 앱에서 namespace 설치 및 빌드가 통과한다. 공개 npm 패키지와 registry 호스트 게시 여부는 별도 릴리스 결정이다.

## 카탈로그 확장 목표

v0.1의 8 UI·5 pattern·1 block은 초기 출시 범위이며, 최종 제공 범위의 상한이 아니다. Leement는 Kibo UI에 견줄 만한 복합 컴포넌트 카탈로그를 제공한다. 2026-09-26에 확인한 Kibo 공개 카탈로그의 41개 컴포넌트를 규모·사용 사례의 비교 기준으로 삼고, 기존 기본 UI 8개 외에 최소 41개 복합 registry item을 목표로 한다. Leement의 디자인 토큰·규칙을 시각적 정본으로 유지하며, Kibo의 이름이나 내부 구현을 그대로 따르는 것보다 설치 가능한 기능과 사용 사례의 완성도를 우선한다. 항목 수만 채우는 중복이나 placeholder는 목표 달성으로 인정하지 않는다.

카탈로그 확장의 최종 목표는 **CopySinger와 Leesfield가 같은 Leement 공용 UI source와 light/dark theme을 사용할 수 있는 수준**이다. Kibo 항목 수와 문서 데모는 이 기준을 대체하지 않는다. 두 제품에 동일한 이름으로 존재하는 공용 UI 22개를 우선 대응하고, 추가 UI는 재사용 가능성에 따라 Leement 또는 앱에 둔다. CopySinger의 파형 오디오 재생 UI는 AudioPlayer로 제공하고 VideoPlayer와 범용 재생·탐색·음량·배속·오류/fallback 규칙을 공유한다. 음역 분석, 미리듣기 파일 생성 및 녹음·믹싱은 앱 책임이다. 두 원본의 픽셀·수치 일치보다 공유할 수 있는 하나의 규칙과 검증된 마이그레이션 경로를 우선한다. 제품 도메인 로직을 공용 UI로 강제 이전하지 않는다. 여기서 공용 UI 라이브러리는 설치 후 소스를 소유하는 registry 방식이며 별도 React 컴포넌트 npm 패키지를 뜻하지 않는다.

- PRD-FR-007: registry가 기본 UI 외에 협업, 데이터·프로젝트 관리, 코드 표시, 복합 입력, 이미지, 금융·소셜, 안내, 타이포그래피, 범용 유틸리티 영역의 복합 컴포넌트를 제공한다. Kibo 비교 기준 41개 각각의 핵심 UI 사용 사례에 동작하는 대응 항목을 두고, 서비스 연동 등 의도적 제외 범위와 실제 기능 차이를 카탈로그 기준표에 기록한다.
- PRD-FR-008: 추가된 각 항목을 docs에서 실제 동작하는 예제, 주요 상태·변형, 사용 규칙, 접근성, API, 설치 명령 및 배포 source와 함께 탐색할 수 있다. 상세 문서는 의미 있는 크기·변형·상태·조합마다 이름·사용 목적·독립 미리보기와 해당 예제 source의 복사 가능한 코드를 제공한다. Showcase는 가벼운 대표 예제만 사용한다. 구현된 기능이 대표 예제에서 빠졌다고 미지원으로 오해하지 않게 public API와 예제를 연결한다.
- PRD-FR-009: 추가된 항목은 shadcn registry dependency를 통해 필요한 소스를 함께 설치하고, 독립적인 소비자 프로젝트에서 타입 검사·빌드·핵심 키보드 동작이 통과한다.
- PRD-FR-010: CopySinger와 Leesfield의 공통 공용 UI 22개와 각 프로젝트의 추가 UI를 전수 조사해 기존 API·동작·시각 규칙·사용처를 Leement 항목 또는 앱 유지 결정에 매핑한다. 공통 22개는 모두 동작하는 registry 대응 항목과 검증된 교체 경로를 갖는다.
- PRD-FR-011: light/dark theme과 공용 컴포넌트가 CopySinger에서 Leesfield로 이어진 디자인 의도를 하나의 규칙으로 표현한다. 원본별 서로 다른 표면·글자·간격·반경·상태·서체 수치는 사용 맥락·가독성·접근성을 근거로 결정하고 차이를 명시한다. 두 제품의 브랜드 색은 고정된 Leement 색이 아니라 소비자 앱이 모드별로 설정하는 semantic 브랜드 역할이며 focus, data accent, 선택적 로딩 효과와 gradient에 반영된다. 일반 Skeleton은 중립이다. token/rule·theme·registry source·docs 미리보기가 같은 규칙을 표현한다. 본문 Pretendard와 로고 Paperlogy Bold(700)는 독립적인 폰트 역할이며 소비자가 각각 재정의할 수 있다. 아이콘+이름 로고는 소비자 브랜드 자산을 조합하는 registry pattern으로 제공한다.
- PRD-FR-012: 두 제품의 격리된 통합 환경에서 공통 UI 전수 설치·import·render와 대표 실제 사용처 교체를 검증한다. 양쪽 앱의 타입 검사·빌드·핵심 상호작용에 신규 회귀가 없음을 확인하며, 모든 제공 UI/Pattern/Block은 웹 문서에서 실제 source로 미리 볼 수 있다.
- PRD-FR-013: Docs의 Foundations에서 color, typography, spacing, radius, shadow, motion 값을 조정하면 실제 registry component 미리보기와 문서 사이트 전체 UI에 즉시 반영된다. Light/dark 색상은 분리하고 편집값은 페이지 이동·새로고침 동안 브라우저에 유지하며 초기화할 수 있다. 현재 설정에서 기본값과 달라진 값은 `@leement/theme` 뒤에 적용할 CSS로 복사할 수 있다. Typography의 본문·브랜드 family는 각각 선택 또는 안전한 custom family 목록으로 입력하며 실제 본문·로고에 독립적으로 반영된다. 기본 폰트는 theme에 포함되고 custom 파일은 앱이 로드한다. 편집은 배포 token 원본을 변경하지 않는다.
- PRD-FR-014: Leement는 일반 제품의 기본 입력·선택·탐색 UI와 조합 가능한 Table, 데이터/날짜 선택 패턴을 제공한다. 우선 Checkbox, RadioGroup, Field, InputGroup, NativeSelect, Toggle/ToggleGroup, Accordion, Breadcrumb, Pagination, Command, ButtonGroup, Kbd, AspectRatio, HoverCard 및 DataTable/DatePicker pattern을 보완한다. 기존 Table/Calendar/Glimpse API를 유지하고 token·접근성·문서 원본 예제·registry 종속 설치를 함께 검증한다. StatusNotice/EmptyState 같은 기존 대응은 안내로 유지하며 upstream 전체와 도메인 UI를 자동 복제하지 않는다.
- PRD-NFR-004: 복합 UI에서도 Leement semantic token과 source ownership을 유지한다. 외부 라이브러리·MIT 코드의 사용 근거와 라이선스를 추적하고, 동작·접근성 검증 없이 카탈로그 수만 늘리지 않는다.
- PRD-NFR-005: 교체 검증은 독립 데모만으로 대신하지 않는다. 기존 앱의 사전 오류와 Leement 도입 회귀를 구분하고, 제품별 wrapper/도메인 로직은 적합성 근거 없이 공용 API로 흡수하지 않는다.

블록 카탈로그의 목표 규모는 컴포넌트와 별도로 결정한다. 현재 registry는 SettingsSection을 포함한 8개 block을 제공하며, 추가 승격은 실제 반복 사용과 검증을 근거로 결정한다.

## 공통 모션

PRD-FR-011의 공통 디자인 언어는 진입·텍스트 등장·펼침·미디어 준비 전환·브랜드 강조·순환 슬롯을 포함한다. RevealContent/Collapsible/기존 브랜드 효과를 개선하고 TextReveal, MediaReveal, BrandAction, RotatingContent를 수정 가능한 registry source로 제공한다. 도메인 로직은 앱에 남기고 신규 항목은 검증 근거에 따라 experimental/candidate를 표시한다. Orb·Shader 및 그래픽·오디오 엔진은 이 범위에 포함하지 않는다.

PRD-FR-013의 Motion 편집은 duration, easing, stagger, 반복 cycle을 역할별로 제공한다. CSS와 JavaScript 기반 예제는 같은 변수를 읽고 일회 진입은 Replay로 확인한다. 기존 저장값·CSS 복사·초기화를 유지하고 reduced motion, no-JS 가독성, SSR 일치와 pause/lifecycle을 보장한다. PRD-FR-012에 따라 실제 두 제품의 대표 사용처에서 격리 검증하며 원본 앱 전체 교체와 공개 배포는 별도 결정이다.
