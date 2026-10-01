# Feature Spec: shared-motion-patterns

## 개요

- **기능 ID**: W2TPJTYZ2Y4P
- **기능명**: 공통 모션 규칙과 registry UI
- **대상 레포**: Leement
- **작성일**: 2026-10-01
- **상태**: Review

## 목적

CopySinger와 Leesfield에서 반복된 진입, 텍스트 등장, 펼침, 미디어 로딩 전환, 브랜드 강조를 Leement의 공통 디자인 규칙으로 정리한다. 두 앱의 시간을 그대로 복제하거나 평균 내지 않고, 읽기 쉬움·조작 가능성·사용 맥락을 근거로 공통 기본값을 선택한다. 디자인 토큰과 규칙이 정본이고 registry는 소비자가 소유하고 수정할 수 있는 소스의 배포 수단이다.

사용자가 제외한 Orb·Shader 시각 효과는 이번 Feature에 포함하지 않는다. 기존 분석에서 제안한 나머지 항목은 아래 범위에 포함한다. 이번 작업은 Leement의 사용 가능한 공통 UI를 발전시키며 두 원본 앱 전체의 마이그레이션을 완료하는 작업은 아니다.

## 범위

| 영역 | 작업 | 사용자에게 제공하는 결과 |
| --- | --- | --- |
| Foundations / theme | 모션 시간·easing·순차 등장 간격·반복 주기를 역할별로 정의하고 연결 | 기본값의 근거, CSS override, 문서 전체의 실시간 미리보기 |
| RevealContent | 기존 API와 변형을 유지하며 고정된 시간과 easing을 공통 규칙에 연결 | 영역·그룹·선·순차 진입을 기존 설치 항목으로 사용 |
| Collapsible | 기존 Root/Trigger/Content에 펼침·접힘 모션 적용 | 높이가 다른 콘텐츠의 자연스러운 열림·닫힘 |
| BrandGradientText / Skeleton | 기존 선택적 브랜드 효과를 공통 반복 주기와 브랜드 토큰에 연결 | 브랜드 재설정과 일시정지 가능한 장식 효과 |
| TextReveal (UI) | 텍스트 조각의 순차 등장 | 한글·영문, 줄바꿈·강조를 조합 가능한 텍스트 진입 |
| MediaReveal (Pattern) | 로딩·준비·오류 상태의 표시 전환 | 이미지·파형 등 앱이 제공한 미디어의 안정적인 로딩 구조 |
| BrandAction (Pattern) | 기존 Button을 조합한 선택적 브랜드 강조 action | 색을 바꿀 수 있고 loading/disabled를 보존하는 강조 버튼 |
| RotatingContent (UI) | 텍스트 또는 장식 아이콘의 순환 표시 | 일시정지·정적 대체가 가능한 작은 강조 슬롯 |
| 기존 interactive UI | Button loading, Dialog, Tooltip, DropdownMenu의 모션 연결 및 reduced motion 확인 | 새 규칙과 기존 핵심 제어의 일관성 |
| Docs / registry / 검증 | 실제 source 예제, 설치 dependency, 독립 consumer 및 원본 사용처 확인 | 웹에서 직접 확인하고 프로젝트 소스로 설치하는 경험 |

## 사용자 스토리

### US-1: 같은 규칙으로 모션을 조절한다

**As a** Leement를 사용하는 개발자
**I want** 모션의 시간과 easing을 역할별 토큰으로 바꾸고 Foundations에서 확인한다
**So that** CSS 기반 UI와 JavaScript 기반 모션이 같은 언어로 움직인다.

**Acceptance Criteria:**

- [ ] 기존 fast/normal/slow 이름과 기본값을 유지하고, reveal/expand/stagger/brand cycle 등 실제 범위에서 필요한 역할만 추가한다.
- [ ] 새 기본값마다 원본 사용처와 선택 근거를 문서에 남긴다. 반복 주기와 반응 시간을 구분한다.
- [ ] 이 Feature 범위의 기본 모션은 Leement CSS 변수를 읽는다. 공개 prop의 명시적 값은 우선하며 기존 단위와 API를 깨뜨리지 않는다.
- [ ] Foundations → Motion에서 시간, easing, 순차 간격, 브랜드 반복 주기를 편집하면 실제 registry 예제와 해당 규칙을 사용하는 문서 UI에 즉시 반영된다. 진행 중 반복은 재장착 없이 갱신되고, 일회 진입은 Replay로 현재 값을 확인한다.
- [ ] 페이지 이동·새로고침 유지, 초기화, CSS 복사가 작동하고 기존 저장된 Foundations 설정도 사용할 수 있다. 복사한 CSS는 theme 뒤에 적용해 같은 결과를 재현한다.
- [ ] reduced motion에서는 편집값·명시적 prop보다 접근성 규칙이 우선한다. 반복을 0ms 무한 애니메이션으로 바꾸지 않는다.

### US-2: 제품에서 반복된 표현을 조합한다

**As a** CopySinger·Leesfield 또는 새 React 앱을 만드는 개발자
**I want** 텍스트, 펼침, 미디어 전환, 브랜드 action, 순환 슬롯을 독립적인 소스로 설치한다
**So that** 제품별 도메인 로직을 유지하며 같은 표현을 재사용한다.

**Acceptance Criteria:**

- [ ] RevealContent의 기존 default/fade/group/line/section/stagger 변형과 delay/distance/duration/fromOpacity 계약을 유지한다. 자식 sequence에도 공통 규칙을 적용한다.
- [ ] TextReveal은 명시적 텍스트 조각 조합을 지원하고 한글·영문, 강조·줄바꿈을 훼손하지 않는다. 애니메이션을 위해 heading 의미를 숨기거나 같은 문장을 보조기술에 중복 제공하지 않는다.
- [ ] Collapsible은 내용 높이 변화, 빠른 재개폐, controlled/uncontrolled, 기본 열린 상태를 처리한다. 닫힌 내용은 초점 이동 대상이 아니며 종료 모션과 제거 시점이 어긋나지 않는다.
- [ ] MediaReveal은 앱이 전달한 loading/ready/error 상태와 콘텐츠를 표현한다. 로딩→준비 전환에서 공간을 유지하고 오류 문구·재시도 제어를 조합할 수 있다. 이미지 alt, 로딩 이름과 busy 의미를 유지한다.
- [ ] BrandAction은 기존 Button의 크기·합성·클릭·disabled/loading 계약을 유지한다. 브랜드 gradient를 선택적으로 사용하며 동작 불가 상태의 반복을 멈춘다. 새 Button variant를 대량 추가하지 않는다.
- [ ] BrandGradientText와 브랜드 Skeleton은 브랜드 CSS 변수 및 모션 주기를 공유한다. 일반 Skeleton은 중립이며, 장식이 가독성과 상태 설명을 대체하지 않는다.
- [ ] RotatingContent는 앱이 제공한 텍스트/아이콘을 표시하고 명시적 일시정지·재개 제어를 제공한다. 슬롯 크기를 확보하고 숨겨진 항목을 읽거나 조작하게 하지 않는다. 장식 전환을 매번 live announce하지 않는다.
- [ ] 기존 Button loading과 Dialog/Tooltip/DropdownMenu에서 focus, Escape, disabled, aria 관계를 유지하고 해당 범위의 모션 시간을 공통 규칙에 연결한다.

### US-3: 미리보기와 설치된 소스가 일치한다

**As a** 문서에서 UI를 고르는 사용자
**I want** 사용 의도와 실제 상태를 확인하고 한 명령으로 필요한 소스를 설치한다
**So that** 문서용 구현과 제품용 구현이 달라지지 않는다.

**Acceptance Criteria:**

- [ ] `@leement/text-reveal`, `@leement/media-reveal`, `@leement/brand-action`, `@leement/rotating-content`를 registry item으로 제공한다. 기존 항목은 중복 이름을 만들지 않고 갱신한다.
- [ ] 내부 UI·helper·스타일 파일과 외부 dependency가 자동 설치된다. 각 새 항목을 문서에서 실제 registry source로 렌더한다.
- [ ] 사용/비사용 상황, 구성, 상태, API·단위, 설치, reduced motion, 반복 제어와 migration 예시를 문서화한다. Motion Foundation에서는 Replay 및 로딩/오류/순환 시뮬레이션으로 차이를 확인한다.
- [ ] 신규 API는 처음부터 stable로 표시하지 않는다. TextReveal/MediaReveal은 양쪽 실제 사용처 증거를, BrandAction/RotatingContent는 단일 제품 근거와 experimental 상태를 기록한다. 승격은 별도 재사용 검증에 따른다.
- [ ] 독립적인 Tailwind v4 소비자 앱에서 새 registry 항목 각각과 대표 조합의 설치·타입 검사·빌드가 통과한다.
- [ ] 두 원본 앱의 격리된 검증 환경에서 TextReveal 및 MediaReveal의 대표 실제 사용처를 교체해 확인한다. Leesfield에서는 결과 펼침, 브랜드 action, 순환 슬롯도 확인한다. 앱의 기존 오류와 도입 회귀를 구분하며 원본 체크아웃은 변경하지 않는다.

## 기능 요구사항

### FR-1: 토큰과 규칙을 정본으로 유지한다

모션은 기존 motion category 안에서 필요한 역할만 확장한다. tokens/theme은 React·Motion·Tailwind에 의존하지 않는다. 스타일 및 모션 라이브러리의 구체적인 연결 방식과 기본값은 승인 후 Plan에 기록한다. 공통 CSS 변수와 개별 override의 우선순위를 명시한다. 임의 CSS/easing 문자열을 실행 코드처럼 취급하지 않고 지원하는 값의 형식을 검증한다.

### FR-2: 명시적 조합과 쉬운 source ownership을 제공한다

기존 primitive의 behavior·composition을 유지하고 앱 데이터, 번역, fetch, 재생·녹음 로직은 소비자 책임으로 둔다. 전역 DOM selector나 MutationObserver로 앱 버튼을 찾아 장식하는 방식은 채택하지 않는다. 작은 소스 파일과 명시적인 props/children을 우선하며 필수 전역 motion provider, 복잡한 설정 객체, 별도 React npm 라이브러리를 추가하지 않는다.

### FR-3: 정적 표시와 수명주기를 보장한다

서버 렌더와 브라우저 첫 렌더가 같은 DOM/스타일을 제공한다. JavaScript 비활성·초기화 지연·reduced motion에서도 텍스트와 이미지를 읽을 수 있다. 미디어 오류가 숨겨진 빈 공간으로 남지 않는다. 자동 반복은 사용자 일시정지, 비활성 문서·화면 밖 상태 및 reduced motion을 반영하며 불필요한 timer/animation을 정리한다. 핵심 조작을 애니메이션 종료까지 지연시키지 않는다.

### FR-4: 양쪽 테마와 브랜드 재정의를 유지한다

CopySinger는 light, Leesfield는 dark 같은 느낌이라는 의도를 유지한다. gradient의 색과 대비는 브랜드 역할에서 파생하고 제품 palette를 새 고정색으로 넣지 않는다. 두 테마에서 텍스트·focus·loading/disabled를 구분할 수 있어야 한다. 임의 브랜드 조합은 소비자가 대비를 확인하도록 가이드한다.

## 비기능 요구사항

- **접근성**: keyboard navigation, focus-visible, aria 및 native semantics를 유지한다. reduced motion의 transform/blur/반복 정지와 자동 순환의 pause를 실제 실행으로 확인한다.
- **성능**: 필요한 항목의 source/dependency만 설치한다. 숨겨진 페이지/화면에서 반복 작업을 멈추고 unmount 시 observer/timer/animation을 정리한다. WebGL/Shader 의존성을 추가하지 않는다.
- **호환성**: TypeScript strict, 기존 registry 설치·RevealContent·Button·Collapsible 사용을 유지한다. 소비자 source ownership과 기존 Foundations 설정을 보존한다.
- **검증**: 구현 전 Plan에서 관찰 가능한 계약과 필요한 회귀 검사만 정한다. 최종 typecheck/lint/test/build 및 소비자·대표 앱 통합 증거를 남긴다. 브라우저 모션 검증을 자동 검사 통과로 대체하지 않는다.

## 제외 범위

- Orb, Shader, WebGL, VoiceOrb, VoiceSignalCore 및 관련 그래픽 엔진.
- 녹음·오디오 분석·파형 생성, 이미지 생성·fetch, node canvas 및 제품 도메인 로직.
- 장식용 확대/blur 모델 Marquee 신규 구현, 전체 카탈로그 모션 재설계, 원본 앱 전체 UI 교체.
- custom token compiler, complex animation system, `@leement/react`/`@leement/motion` npm 라이브러리, 새 전역 테마 엔진, 자체 CLI.
- 공개 npm/registry 게시, 원본 앱 저장소의 직접 수정·커밋, README 변경.

## 관련 문서

- PRD: [leement-prd.md](../../prd/leement-prd.md)
- PRD Refs: PRD-FR-001, PRD-FR-002, PRD-FR-005, PRD-FR-006, PRD-FR-008, PRD-FR-009, PRD-FR-011, PRD-FR-012, PRD-FR-013, PRD-NFR-001, PRD-NFR-004, PRD-NFR-005
- Design Refs:
  - Design System: docs/designs/design-system.md
  - Visual Brief: - (새 화면보다 공통 모션 규칙 확장이므로 별도 문서 없이 기존 디자인 시스템과 이 Spec을 사용한다.)
- 조사 근거와 범위 결정: [decisions.md](./decisions.md)

모션 역할과 추가 registry UI, Foundations의 편집 계약은 승인 후 Plan의 Curated Documentation Impact 및 task Docs에 연결해 PRD/디자인 시스템/공개 사용 문서를 갱신한다.
