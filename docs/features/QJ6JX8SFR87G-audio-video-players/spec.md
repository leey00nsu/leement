# Feature Spec: audio-video-players

## 개요

- **기능 ID**: QJ6JX8SFR87G
- **기능명**: 파형 오디오 플레이어와 단일 비디오 플레이어 개선
- **대상 레포**: Leement
- **작성일**: 2026-10-01
- **상태**: Review

## 목적

CopySinger의 AudioWaveformPlayer를 바탕으로 제품에서 실제 사용하는 오디오 재생 UI를 Leement source로 설치할 수 있게 한다. 파형과 제어의 디자인 의도를 살리면서 앱별 브랜드색을 token으로 적용하고, 기존 VideoPlayer의 상태·오류·접근성 부족을 함께 개선한다. 재생·탐색 등 범용 미디어 조작은 컴포넌트 책임이고 보컬 분석·미리듣기 파일 생성·믹싱·업로드는 소비자 앱 책임이다.

현재 공통 모션 Feature W2TPJTYZ2Y4P는 구현 승인 대기 중이다. 이 Spec은 별도 다음 Feature의 제안이며 그 구현 또는 main 병합을 승인한 것으로 해석하지 않는다. 모션 Feature의 미병합 코드가 필요하면 별도 승인·통합 이후 이 Feature의 base를 명시적으로 동기화하고 검증한다. 미병합 source의 문서용 복사본을 만들지 않는다.

## 범위

| 영역 | 결과 |
| --- | --- |
| AudioPlayer | CopySinger를 기준으로 파형·재생·탐색·시간·음량·음소거·배속·종료 후 다시 재생을 제공하는 registry component |
| VideoPlayer | 기존 src/title/poster/captionsSrc 및 root HTML props를 유지하며 미디어 상태·오류·공통 제어를 개선 |
| Foundations / 디자인 | light/dark 표면, token 기반 파형/진행/브랜드색, 일관된 control 크기와 focus, reduced motion |
| Docs | 두 플레이어의 실제 source 예제·상태·규칙·API·설치·CopySinger migration 안내; Components의 Media 그룹에 각각 한 번 노출 |
| Registry / 검증 | namespace 설치와 transitive dependency, 독립 consumer 및 CopySinger 격리 대표 사용처 검증 |

## 사용자 스토리

### US-1: 파형 오디오를 제품에 설치한다

**As a** CopySinger 또는 새 React 앱 개발자
**I want** 같은 오디오 재생 경험을 앱에서 소유하는 source로 설치한다
**So that** 제품 로직을 옮기지 않고 Leement의 디자인 언어를 사용할 수 있다.

**Acceptance Criteria:**

- [ ] `npx shadcn@latest add @leement/audio-player`로 AudioPlayer와 필요한 UI/helper/style 및 외부 dependency가 함께 설치된다.
- [ ] 원본의 72px 파형, 조밀한 하단 제어, 배속·음량 popover 구성을 시각적 기준으로 삼는다. 실제 size·spacing·radius는 Leement 규칙으로 확정하고 차이를 기록한다.
- [ ] 실제 오디오 파형이 렌더되고 클릭/드래그로 탐색한다. 재생/일시정지, 현재/전체 시간, 음량 0–100%, 음소거와 마지막 양의 음량 복원, 0.75/1/1.25/1.5배, 종료 후 처음부터 재생을 지원한다.
- [ ] 파형 slider는 이름·min/max/current/value text를 제공하며 ArrowLeft/ArrowRight 5초, Home/End, Space 재생 제어를 지원한다. 준비 전 조작은 disabled 또는 초점 대상에서 제외한다. popover는 키보드/Escape/focus 복원을 보존한다.
- [ ] 로딩/ready/error 상태의 의미와 label을 제공한다. 파형 생성만 실패하면 native audio controls로 대체한다. 미디어 자체 실패는 오류를 표시하며 새 src 또는 재시도로 회복할 수 있다. play() 거부를 처리하고 실패를 숨기거나 무한 loading에 남지 않는다.
- [ ] 사전 계산한 peaks와 duration을 전달할 수 있다. 일반 src만으로도 동작한다. native fallback과 no-JS 재생 경로를 제공한다.
- [ ] src 변경 및 unmount 시 이전 재생·시간·오류·listener/engine을 정리하고 늦은 이벤트가 새 source 상태를 오염시키지 않는다. 잘못된/알 수 없는 시간은 NaN/Infinity로 표시하거나 seek control에 전달하지 않는다.

### US-2: 비디오도 같은 제어와 신뢰성으로 사용한다

**As a** VideoPlayer 사용자
**I want** 오디오와 일관된 조작 및 명확한 상태를 가진 단일 영상 플레이어를 사용한다
**So that** 재생 실패나 source 변경에도 UI를 신뢰할 수 있다.

**Acceptance Criteria:**

- [ ] 기존 VideoPlayer 호출과 공개 route/registry 이름이 계속 작동한다. 새로운 controls는 조합에 필요한 작은 API로 제공하고 기존 src/title/poster/captionsSrc를 제거하지 않는다.
- [ ] 실제 media event를 기준으로 paused/playing/ended, loading/buffering/error, duration/time/volume/mute/rate를 표시한다. src 변경은 이전 상태를 초기화하며 종료 후 다시 재생이 작동한다.
- [ ] 재생·탐색·음량·음소거·배속 제어가 AudioPlayer와 일관된 Button/Slider/Popover·focus 규칙을 사용한다. seek는 준비/유효한 duration 범위에서만 동작한다.
- [ ] 자막 파일이 있으면 켜기/끄기 및 언어/label 설정을 제공한다. 영어를 유일한 언어로 고정하지 않는다. 지원 브라우저에서 fullscreen 제어를 제공하고 불가능한 환경에는 작동하지 않는 버튼을 노출하지 않는다.
- [ ] play() 거부와 media error는 접근 가능한 상태로 설명하며 retry/source 변경으로 회복한다. SSR/no-JS에서도 native video controls로 기본 재생과 자막 접근 경로를 제공한다.
- [ ] 좁은 화면에서도 시간/제어가 잘리거나 가로 overflow를 만들지 않는다. 기존 미디어 관련 테스트에서 새로운 회귀가 없다.

### US-3: 디자인 의도와 제품 도입을 확인한다

**As a** 문서에서 플레이어를 고르는 개발자
**I want** 실제 미디어와 상태 예제를 보고 제품에 설치한다
**So that** placeholder가 아닌 재사용 가능한 UI를 선택한다.

**Acceptance Criteria:**

- [ ] AudioPlayer와 VideoPlayer를 Components의 Media 그룹에서 각각 한 번만 탐색한다. 상세 route에 Overview, 사용/비사용 상황, Anatomy, States, Examples, Accessibility, API, Installation이 있다.
- [ ] 문서는 registry 원본을 사용한다. 저장소의 짧은 자체 생성/사용 가능한 로컬 오디오·비디오·자막 sample로 실제 재생·탐색·배속·음량·자막을 확인한다. 무음 영상만으로 음량 기능을 검증했다고 주장하지 않는다.
- [ ] 파형/진행색은 Leement semantic/brand 역할을 읽고 소비자 brand override, light/dark, Foundations 편집을 반영한다. CopySinger의 violet/blue/pink 값을 고정색으로 복제하지 않는다. 일반 표면/로딩은 중립이고 브랜드 장식은 선택 가능하다.
- [ ] reduced motion에서는 로딩/전환 장식을 정지하되 사용자가 직접 재생한 음성·영상을 일방적으로 정지하지 않는다. 자동 재생은 기본으로 켜지 않는다.
- [ ] CopySinger의 제출 보컬/믹싱 결과 중 대표 실제 source 사용처를 격리 환경에서 교체하고 기존 label·src·로딩/오류와 재생 조작을 확인한다. 실제 backend, 녹음·믹싱·파일 생성은 검증/이전 범위가 아니다.
- [ ] 독립 Tailwind v4 소비자에서 두 registry 항목을 설치한 source의 strict TypeScript 및 build가 통과하고 소비자가 source를 수정해 다시 빌드할 수 있다.
- [ ] 새 AudioPlayer는 experimental로 표시한다. CopySinger의 여러 사용처는 같은 프로젝트의 증거이며 여러 프로젝트 안정성 검증으로 과장하지 않는다.

## 기능 요구사항

### FR-1: 작은 source ownership과 미디어 책임

별도 @leement/react/media SDK, 미디어 backend 또는 player 설정 엔진을 만들지 않는다. 유지보수되는 외부 waveform engine을 활용할 수 있으나 playback state 및 fallback 계약을 source에서 읽기 쉽게 설명한다. 공유 제어/시간 helper는 실제 중복이 검증되는 부분만 추출하고 공개 player provider나 과도한 configuration object를 요구하지 않는다.

CopySinger의 보컬 음역/구간 분석, reference preview blob 생성 및 domain workflow는 앱에 둔다. 기존 segments 타입/동작은 조사 근거로 기록하되 이번 초기 공용 API에 구간 분석·편집 기능을 추가하지 않는다. 구간별 미리듣기는 앱이 만든 src를 여러 AudioPlayer에 전달하는 composition으로 안내한다.

### FR-2: 네이티브 semantics와 접근성

HTMLMediaElement 상태와 native fallback을 보존한다. 버튼/slider에 스크린리더 이름, focus-visible, disabled 의미를 제공하고 숨겨진 제어는 초점 대상이 아니다. 반복되는 timeupdate를 live announce하지 않는다. 오디오의 transcript와 영상의 자막 내용은 앱이 제공한다. 오류/준비 상태는 접근 가능한 문구로 전달한다. 사용 가능한 root object/callback ref는 내부 media ref를 덮어쓰지 않는다.

### FR-3: 오류와 환경 차이를 문서화한다

미디어 URL의 인증/유효 기간/CORS와 대형 파일 peaks 생성은 앱 책임이다. engine decode 실패와 native media 재생 실패를 구분한다. 지원되지 않는 duration, 볼륨/배속/fullscreen/자막 기능은 실제 브라우저 capability에 맞게 처리하고 작동한다고 과장하지 않는다. SSR/hydration/no-JS, 빠른 src 변경, play promise failure와 cleanup을 검증한다.

## 비기능 요구사항

- **디자인**: tokens/rules가 정본이다. 새로운 색상 category, 고정 브랜드 gradient 및 대량 variant를 추가하지 않는다. 문서·registry·소비자 source가 같은 규칙을 사용한다.
- **구현**: TypeScript strict, 기존 workspace/test/docs/registry 구조. 필요한 미디어 외부 dependency만 추가하고 license와 출처를 확인한다. CopySinger source를 참고하되 private 앱 도메인 코드를 그대로 공개 registry에 복사하지 않는다.
- **검증**: 기존 Vitest/Testing Library의 실제 조작/상태 회귀, 로컬 브라우저의 실제 media 재생/오류/키보드, registry CLI 설치/소비자 빌드. 구체 테스트와 수정 파일은 Spec 승인 후 Plan Verification Contract에서 확정한다.
- **통합**: 구현 승인과 local merge 승인은 구분한다. 현재 모션 Feature가 미병합인 상태를 먼저 확인하고 공유 문서/token 영향을 최신 base와 동기화한다.

## 제외 범위

녹음, 믹싱, 음성/음역 분석, audio editing, multi-track, playlist, HLS/DASH/DRM, PiP, casting, 글로벌 single-player coordinator, backend 파일/peak 생성, 원본 앱 전체 마이그레이션, 공개 npm/registry 배포, Orb·Shader는 포함하지 않는다. 기존 README는 명시적 수정 요청이 없으므로 보호한다.

## 관련 문서

- PRD: [leement-prd.md](../../prd/leement-prd.md)
- PRD Refs: PRD-FR-005, PRD-FR-006, PRD-FR-008, PRD-FR-009, PRD-FR-010, PRD-FR-011, PRD-FR-012, PRD-NFR-001, PRD-NFR-004, PRD-NFR-005
- Design Refs: docs/designs/design-system.md
- Design System: [design-system.md](../../designs/design-system.md)
- 조사/근거: [decisions.md](./decisions.md)
