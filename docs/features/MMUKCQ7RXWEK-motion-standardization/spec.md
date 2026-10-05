# Feature Spec: Motion 통일과 공개 설치 정비

## 개요

- **기능 ID**: MMUKCQ7RXWEK
- **기능명**: motion-standardization
- **대상 레포**: Leement
- **작성일**: 2026-10-04
- **상태**: Approved

## 목적

Leement의 모든 시각 애니메이션을 Motion으로 실행해 새 효과를 같은 방식으로 확장한다. 디자인 토큰과 규칙은 정본이며 Motion은 실행 수단이다. 기본 선택 UI는 기존 Select로 통일하고, 외부 프로젝트에서 공개 npm 패키지와 registry를 사용하는 설치 안내를 제공한다.

## 사용자 스토리

### US-1: 일관된 모션 구현과 확장

**As a** Leement 소스를 설치하고 수정하는 개발자
**I want** 모든 시각 애니메이션을 Motion과 같은 토큰 규칙으로 구현하고
**So that** CSS·Tailwind·별도 실행기를 함께 추적하지 않고 새 효과를 추가할 수 있다.

**Acceptance Criteria:**

- [x] UI·Pattern·Block·docs·theme의 애니메이션과 전환을 전수 목록화하고 각각 Motion으로 전환하거나 정적인 스타일/비시각 동작임을 근거와 함께 판정한다.
- [x] 진입·퇴장·펼침·회전·반복·브랜드 gradient·로딩·hover/focus/active 색상 및 위치 전환을 Motion으로 실행한다.
- [x] Leement가 제공하는 시각 효과에 CSS keyframes, CSS transition, Tailwind animate/transition utility, tw-animate-css 의존이 남지 않는다.
- [x] 외부 UI 라이브러리가 실행하는 시각 효과도 조사해 공개 설정으로 비활성화하고 필요한 효과를 Motion으로 제공한다. 조용히 제외하지 않고 실제 처리를 기록한다.
- [x] 기존 시각 의도·API·ref·render/asChild 조합·키보드·aria·disabled·loading·폼 의미를 보존한다. NativeSelect 제거는 US-2의 명시적 변경이다.
- [x] duration/easing/stagger/cycle은 기존 semantic token에서 읽는다. 명시적 component prop은 기본값보다 우선하며 reduced motion은 둘보다 우선한다.
- [x] Foundations의 모션 편집·CSS 복사·초기화가 실제 Motion 애니메이션과 사이트 UI에 반영된다. 반복은 변경을 반영하고 일회 진입은 Replay로 확인한다.
- [x] reduced motion은 반복을 멈추고 콘텐츠와 상태를 즉시 읽을 수 있게 한다. paused, 비활성 문서, 화면 밖의 반복 효과, 재개 및 unmount 정리를 검증한다.
- [x] Dialog 등 popup의 열림/닫힘과 포커스 복귀, 빠른 재열림, 중첩 popup, Collapsible/Accordion의 자연 높이 변화가 애니메이션에 의해 깨지지 않는다.
- [x] SSR/hydration과 no-JS에서 핵심 콘텐츠를 숨기지 않으며 오디오·영상 재생 동작을 장식용 모션과 분리한다.
- [x] 필요한 registry item이 motion 및 공유 helper를 종속 설치한다. 별도 전역 provider나 누락된 CSS import 없이 소비자 앱에서 동작한다.

### US-2: 한 가지 기본 선택 UI

**As a** 공통 디자인을 적용하는 개발자
**I want** 기본 선택 입력이 Select로 통일되고
**So that** 브라우저마다 다른 NativeSelect를 실수로 채택하지 않는다.

**Acceptance Criteria:**

- [x] NativeSelect source·registry item·docs route·navigation·metadata·예제·의존 참조·전용 검증을 제거한다. 생성 registry JSON에도 남지 않는다.
- [x] Field 예제를 포함한 NativeSelect 사용처와 Leement가 소유한 보이는 HTML select를 기존 Select로 교체한다.
- [x] ColorPicker 형식, CodeBlock 예제, Foundations 글꼴/easing, chart/filter/collapsible 예제 선택도 같은 Select를 사용한다.
- [x] 옵션 group/label, disabled, invalid, 크기, controlled/default 값, name과 FormData, Field label/error 연결 및 키보드 조작을 보존한다.
- [x] SelectValue에 표시하는 사람용 이름과 실제 option 값을 구분하고 현재 선택값이 잘못 노출되지 않는다.
- [x] 제거 사실과 NativeSelect → Select 조합의 이관 예제를 공개 문서에 제공한다. 이미 설치된 소비자 소스를 자동 삭제하거나 수정하지 않는다.

### US-3: 공개 주소로 바로 설치

**As a** 저장소를 clone하지 않은 외부 React 개발자
**I want** 공개 패키지와 registry로 설치하고
**So that** 로컬 Leement 서버나 사전 지식 없이 미리보기와 같은 UI를 사용할 수 있다.

**Acceptance Criteria:**

- [x] Getting Started와 공개 설치 설명이 pnpm add @leement/theme 및 CSS import를 기본 경로로 안내한다.
- [x] components.json의 @leement namespace는 https://leement.leey00nsu.com/r/{name}.json을 사용한다.
- [x] React·Tailwind v4·shadcn 초기화, alias, theme import 순서와 preset 충돌 처리, 종속 설치, 소스 소유/수정 방식이 일관된다.
- [x] 실제 공개 버전과 개발 중 source의 차이를 구분한다. 아직 게시하지 않은 변경을 이미 공개 배포된 것처럼 안내하지 않는다.
- [x] Pretendard·Paperlogy·D2Coding 기본 폰트와 브랜드 커스텀 안내를 현재 계약과 맞춘다.
- [x] 로컬 .tgz/localhost/YOUR_HOST는 공개 설치 기본 절차에 남기지 않는다. 개발자용 로컬 설명이 필요하면 명확히 구분한다.
- [x] 격리된 빈 소비자 앱에서 문서 명령으로 namespace 설치, dependency 설치, 타입 검사·빌드와 대표 실행을 검증한다. Motion 효과까지 관찰하고 docs 성공만으로 대체하지 않는다.
- [x] 현재 공개 호스트 설치 smoke와 변경 registry/theme의 격리 설치 검증을 각각 기록한다. 공개 게시 완료 여부는 별도로 확인한다.

### US-4: Replay와 반응형 미리보기

- [x] 프리뷰에 실제 viewport 폭을 px로 표시하고 폭 조절·부모 크기 변화와 동기화한다. 최초 진입과 Replay에서 예제가 중복 실행되지 않는다.

- [x] 모션이 있는 예제에는 우측 상단 Replay를 제공하며 해당 예제만 다시 시작한다. reduced motion을 무시하거나 실제 미디어를 자동 재생하지 않는다.
- [x] 모든 UI·Pattern·Block의 기본·추가·Showcase Preview에 우측 handle을 제공한다. pointer/touch drag 및 keyboard로 폭을 조절하고 실제 viewport media query와 container query가 적용된다.
- [x] 좁은 viewport·부모 크기 변경에서 프레임은 사용 가능한 폭을 넘지 않는다. 예제의 popup, 테마·Foundations 동기화, 중심 배치·자동 높이·가로세로 guide와 Code/Source를 보존한다.

## 기능 요구사항

### FR-1: 모든 모션의 단일 실행 수단

조사 대상은 registry/ui, registry/patterns, registry/blocks, registry/lib, packages/theme의 생성 CSS, apps/docs의 화면·컴포넌트·예제다. 라이브러리 내부에서 사용자가 보는 toast/chart 등 전환도 포함한다. CSS는 정적 표면·layout·미디어 query·접근성 fallback을 표현하며 시간에 따라 시각 값을 보간하지 않는다. 타이머로 콘텐츠를 선택하는 로직은 유지할 수 있지만 그 시각 전환은 Motion이 담당한다. 브라우저의 실제 미디어 재생·파형 계산·데이터 갱신은 시각 애니메이션 실행기 교체와 구분한다.

### FR-2: 프레임워크 독립성과 수정 가능한 소스

@leement/tokens와 @leement/theme에 React 또는 Motion runtime 의존을 추가하지 않는다. 모션 값은 토큰과 CSS 변수로 제공하고 실행 코드는 registry source가 소유한다. CSS 브랜드 utility의 정적 외형과 애니메이션 실행을 분리하고 CSS만으로 애니메이션을 사용하던 소비자의 이관 경로를 안내한다. 기존 helper를 필요한 수준으로 확장하며 별도 모션 엔진·React npm 라이브러리·필수 전역 설정을 만들지 않는다.

### FR-3: 문서 동기화와 변경 안내

PRD, 디자인 시스템 규칙, Foundations Motion 편집/예시, 영향 받는 전체 component/pattern/block 문서와 source 예제, Adoption, Getting Started, Changelog 및 관련 공개 설치 설명을 검토하고 갱신한다. README는 요청한 공개 설치와 관련 모션·폰트·카탈로그 사실만 기존 설명에서 갱신한다. 종료된 Feature의 명세·검증 기록은 당시 이력으로 유지한다. 현재 기능을 설명하는 문서에 CSS/JavaScript 혼용을 권장하거나 NativeSelect를 현행 선택으로 안내하는 내용이 남지 않는다.

### FR-4: 호환성 및 릴리스 준비

NativeSelect와 CSS-only animated utility의 변경은 이관이 필요한 계약 변경으로 표시한다. 새로운 npm publish, Git push, Coolify 배포는 이번 구현의 자동 실행 범위가 아니다. 게시 전/후 필요한 절차와 검증 상태는 실제 사실대로 기록하고 릴리스 버전 결정은 승인된 계획에서 명시한다.

## 비기능 요구사항

- **접근성**: reduced motion, focus-visible, screen reader label, disabled, keyboard와 popup 의미를 유지한다. 닫히는 내용의 focus 가능성 및 inert 처리도 확인한다.
- **성능**: 프레임마다 React 상태를 갱신하는 방식과 무조건 전체 DOM을 검색하는 방식을 피한다. 반복 효과는 pause/cleanup을 갖는다. 기존 펼침 버벅임과 popup 종료 지연을 브라우저에서 확인한다.
- **호환성**: TypeScript strict, React 소비자 빌드, Base UI/Radix composition, SSR/hydration과 light/dark를 유지한다.
- **검증**: 기존 테스트를 계약 중심으로 수정하고 구현 원리를 그대로 복제하는 테스트를 늘리지 않는다. Feature 필수 typecheck/lint/test/build 및 실제 브라우저/소비자 검증을 수행한다.

## 범위 밖

- Orb·Shader 추가, 새 모션 카탈로그 확장, 별도 motion engine/CLI/npm React 라이브러리.
- CopySinger·Leesfield·leement-test 원본 앱에 대한 자동 source 교체.
- npm 게시, 원격 push, 운영 배포. 로컬 병합은 구현 수락과 별도 merge 승인 이후에만 진행한다.

## 관련 문서

- PRD: ../../prd/leement-prd.md
- PRD Refs: PRD-FR-001, PRD-FR-002, PRD-FR-004, PRD-FR-005, PRD-FR-006, PRD-FR-008, PRD-FR-009, PRD-FR-011, PRD-FR-013, PRD-FR-014, PRD-NFR-001, PRD-NFR-004
- Design Refs:
  - Design System: docs/designs/design-system.md
- 조사 근거와 범위 결정: [decisions.md](./decisions.md)
- Motion 공식 문서: [React animation](https://motion.dev/docs/react-animation), [Base UI](https://motion.dev/docs/base-ui), [Radix](https://motion.dev/docs/radix), [reduced motion](https://motion.dev/docs/react-use-reduced-motion)
