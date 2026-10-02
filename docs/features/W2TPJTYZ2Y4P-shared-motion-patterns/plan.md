# Implementation Plan: shared-motion-patterns

## 개요

- **기능 ID**: W2TPJTYZ2Y4P
- **대상 레포**: Leement
- **작성일**: 2026-10-01
- **상태**: Approved
- **Plan 검수**: Pending
- **Plan 검수 Evidence**: -
- **Plan 검수 Decision**: -
- **Plan 검수 Round**: -
- **Plan 검수 Spec Hash**: -
- **Plan 검수 Plan Hash**: -

## 기술 스택

기존 React/TypeScript strict, Tailwind v4, Motion 13, Base UI 1.7 및 Radix를 유지한다. 새 animation dependency나 provider를 요구하지 않는다. Vitest/Testing Library는 기존 인프라를 사용하고 실제 브라우저 및 CLI 소비자 검증은 임시 환경에서 실행한다.

## 아키텍처와 기본 규칙

- 기존 fast/normal/slow는 120/180/260ms 그대로 유지한다. duration.reveal=700ms(양쪽 720ms 진입과 기존 Reveal 기본 700ms의 공유 역할), duration.expand=400ms(Leesfield 결과 펼침), duration.media=400ms(파형 opacity 360ms/transform 420ms 및 이미지 fade의 공유 역할), delay.stagger=70ms(62–96ms의 텍스트 등장과 기존 70ms sequence), easing.reveal=cubic-bezier(0.22,1,0.36,1)을 추가한다.
- cycle.brandText=1500ms, cycle.brandSurface=3500ms(Leesfield 실제 반복), cycle.rotate=1800ms(기존 제목 슬롯)을 추가한다. cycle은 delay/duration과 구별하고 0ms 반복을 금지한다. 기본값의 근거와 차이는 디자인 시스템/Motion docs에 기록한다.
- `registry/lib/leement-motion.ts`는 계산된 CSS duration/easing의 안전한 읽기와 각 element의 visibility/reduced-motion 수명주기만 맡는다. registry:lib dependency로 설치하며 전역 DOM scanner와 복잡한 animation engine을 만들지 않는다. CSS 반복 주기는 변수로 직접 연결한다. JS 일회 진입은 실제 시작/Replay 시 값을 읽고 Foundations의 motion 변경 알림을 선택적으로 받아 갱신한다. 앱에서 필수 provider는 없다.
- RevealContent의 HTMLMotionProps 및 공개 ms prop은 보존한다. 초기 HTML은 visible이고 hydration 뒤에만 장식 진입을 준비한다. 기존 variant의 상대 시간/거리 규칙은 token을 바탕으로 보존하고 CSS reduced/no-script와 JS 선호 처리를 함께 적용한다.
- Collapsible은 Base UI Panel의 --collapsible-panel-height, data-starting-style/data-ending-style과 transition completion을 사용한다. 기존 className/style 함수형 API 및 ref/render를 보존한다. native focus/closed semantics는 primitive에 맡긴다. 높이를 측정하는 panel에는 padding/border/외부 gap을 직접 두지 않고 내부 box에 배치한다. 사용자 지적(T07)은 padding 예제의 프레임 연속성, 빠른 재개폐, keyboard/reduced를 임시 브라우저 script로 확인하고 새 영구 테스트는 추가하지 않는다.
- TextReveal은 span + 명시적 TextReveal.Item 조합을 제공한다. 원래 텍스트를 접근성 트리에 한 번만 유지하고 장식적인 시각 효과만 추가한다. heading은 부모가 소유한다.
- MediaReveal은 status=loading|ready|error, children, loading/error slots, label과 native div props를 제공한다. grid의 같은 cell에서 loader/ready 전환을 표현하고 공간은 소비자가 aspect-ratio/min-height로 정한다. 숨긴 층은 inert/aria-hidden이며 fetch/audio 엔진을 포함하지 않는다.
- BrandAction은 ButtonProps를 그대로 받아 Button을 조합하고 gradient는 배경 장식층에 낮은 강도로 적용해 기본 action 글자 대비를 유지한다. animated/paused 및 loading/disabled 상태에서 반복을 제어한다.
- RotatingContent는 items, label, interval(ms), paused/onPausedChange, className을 제공한다. 전체 항목의 grid geometry를 유지하고 visible 항목만 시각적으로 표시한다. native span root라 제목에 배치할 수 있다. controls=false는 controlled paused와 외부 키보드 접근 가능한 pause control을 요구한다. 장식 slot은 aria-hidden, label은 한 번 읽히며 이름 있는 pause 버튼을 기본 제공한다. offscreen/hidden/reduced에서 타이머를 멈추고 정적 첫 항목으로 대체한다.
- 모든 새 UI는 experimental로 시작한다. helper는 탐색 메뉴에 추가하지 않는다. 신규 UI/Pattern은 정확히 한 범주에 배치하고 Docs에서 실제 source를 사용한다.

## 파일 구조

- packages/tokens/src/tokens.json; packages/theme/build.mjs, theme.test.mjs
- registry/lib/leement-motion.ts; registry/ui/{reveal-content,text-reveal,rotating-content,collapsible,brand-gradient-text,skeleton,button,dialog,tooltip,dropdown-menu}.tsx 및 필요한 module.css
- registry/patterns/{media-reveal,brand-action}.tsx
- registry.json; turbo.json (registry source cache inputs); apps/docs/tsconfig.json; vitest.config.mts (소스 alias와 registry dependency)
- apps/docs/lib/{docs,items,item-states,foundation-preview}.ts; apps/docs/components/{previews,foundation-editor,foundation-preview-provider}.tsx; 필요 시 motion-previews.tsx
- apps/docs/app/{foundations/[slug],patterns/[slug],components/[slug],adoption,changelog}/page.tsx
- registry/ui/motion.test.tsx 및 기존 source-extension/overlay/button 테스트의 필요한 계약만 갱신

## Curated Documentation Impact

- **Schema**: 2
- **Assessment**: Complete
- **Product requirements**: UPDATE
- **System architecture**: NONE
- **Onboarding entrypoint**: UPDATE
- **Operational/runtime contract**: NONE
- **Reason**: 승인된 공통 모션, 미디어 플레이어와 Foundations 편집을 PRD 및 기존 adoption 웹 문서에 명시한다. Source ownership/workspace/배포 방식은 유지한다. README 수정 요청이 없으므로 보호하며 구체 불일치는 decisions D003에 기록한다.
- **Targets**: docs:prd/leement-prd.md, project:apps/docs/app/adoption/page.tsx

## Additional Curated Impacts

- **Assessment**: Complete
- **Decision**: DECLARED

| Kind | Decision | Target | Reason |
| --- | --- | --- | --- |
| design-system-ux | UPDATE | docs:designs/design-system.md | 시간/easing/cycle·정적 표시·반복 제어의 의미와 선택 근거 |
| design-system-ux | UPDATE | project:apps/docs/app/foundations/[slug]/page.tsx | Motion Foundation의 역할/단위와 미리보기 가이드 |
| design-system-ux | UPDATE | project:apps/docs/lib/items.ts | 공개 API와 사용 규칙, maturity |
| other-curated | UPDATE | project:apps/docs/app/changelog/page.tsx | 추가 UI와 모션 계약 변경 |
| other-curated | UPDATE | project:THIRD_PARTY_NOTICES.md | waveform engine BSD-3-Clause notice |

README/constitution/custom 수정, API/backend/security/운영 구조 변경은 없다. 외부 코드를 새로 복사하지 않고 단순 구현을 작성하며 기존 Reveal notice는 유지한다. 외부 코드 재사용이 필요해지면 THIRD_PARTY_NOTICES.md를 같은 task에 연결한 뒤 출처를 보존한다.

## Verification Contract

### 변경 분류

- **유형**: NEW_BEHAVIOR
- **위험도**: MEDIUM

### 관찰 가능한 계약

- **지원해야 하는 동작**: 승인 Spec US-1/2/3 전체, light/dark, 새 registry 설치, 기존 props, CSS export/persistence, 실제 대표 앱 사용처.
- **전제조건**: theme import, Tailwind v4 consumer; 실제 데이터/이미지/상태와 slot geometry는 앱 제공.
- **성공 후 보장**: token override가 실제 모션에 반영되고 정적 환경에서도 읽기와 핵심 조작 가능. source는 소비자 소유.
- **중요한 실패 후 보장**: 잘못된 편집값은 적용/저장하지 않음. error media는 named 오류/재시도 표시. timer/animation은 unmount 시 정리.
- **의도적으로 지원하지 않는 사례**: Orb/Shader, 원본 앱 전면 교체, 미디어 backend/SDK, 공개 배포, arbitrary CSS 실행. waveform rendering은 아래 통합 계약에 포함한다.

### 테스트 결정

| 계약 / 요구사항 | 결정 | 테스트 수준 | 보호할 현실적인 회귀 | 독립적인 Oracle |
| --- | --- | --- | --- | --- |
| token/theme 및 reduced | UPDATE | 기존 theme 테스트 | 누락 CSS변수, cycle=0 무한 반복 | Spec US-1/FR-3 |
| Foundations validation/persistence/export | UPDATE | 기존 foundation-preview 단위 | 3.5s 거부, 위험 easing 허용, reduced override 누락 | Spec US-1 |
| Text/Media/Brand/Rotation | ADD | 작은 Testing Library 통합 suite | 텍스트 중복, hidden focus, busy 클릭, pause timer, 외부 ref가 내부 observer를 끊는 회귀 | Spec US-2 |
| Collapsible/overlays/Button | UPDATE | 기존 interaction suite 필요한 사례만 | 키보드/disabled/빠른 재개폐 회귀 | Spec US-2, primitive 의미 |
| registry source installation | NONE | 실제 CLI + 소비자 TS/build | dependency/alias/styles 누락 | Spec US-3 |
| 실제 motion/테마/초기표시/JS 없음 | NONE | 브라우저 수동 + 임시 script | SSR mismatch, 멈추지 않는 반복, fade/height 실제 실패 | Spec FR-3/4 |
| 두 원본 앱 대표 교체 | NONE | 격리 archive 비교/타입검사/빌드/브라우저 | 도메인/현지화 및 import 회귀 | Spec US-3 |

T08 영향 감사는 기존 motion.test.tsx에 object/callback ref + 진입/순환/observer 및 unmount cleanup의 작은 회귀를 추가한다. 임시 브라우저로 overlay keyboard/focus/reduced와 기본 easing 적용과 Dialog/Tooltip의 CSS duration override보다 reduced motion이 우선하는지 확인하고, 갱신된 registry source의 소비자 타입 검사/빌드를 확인한다. 전 제품 전체 마이그레이션이나 전 브라우저 성능 보장은 아니다.

### 의도적으로 제외하는 테스트

primitive 라이브러리 전체의 내부 구현, CSS class 문자열 snapshot, 모든 프레임, 타이머 mocking으로 실제 브라우저 검증 대체, unrelated 전체 앱 테스트 추가는 제외한다.

### 검증 실행

- **구현 중**: 관련 Vitest 파일, token/theme 빌드, 바뀐 source typecheck/lint.
- **태스크 완료 전**: 해당 task 계약과 Docs/registry generation 연결 검사, task별 결과를 기록하고 commit.
- **Feature 완료 전**: 설정된 `pnpm run typecheck`, `pnpm run lint`, `pnpm run test`, `pnpm run build` 모두 실행. build는 registry/theme/docs output까지 포함하므로 동일 target의 별도 full build는 반복하지 않는다.
- **수동/UI 검증**: desktop/mobile × light/dark; Motion 값 edit/replay/copy/reload/reset; reduced/no-JS/hydration; pause/offscreen/hidden; 빠른 Collapsible 재개폐와 미디어 error→loading→ready; 기존 overlay keyboard/focus. 핵심 screenshot만 Feature artifacts에 보존하고 충분한 결과는 tasks/decisions에 기록한다.
- **실제 소비자**: 임시 Tailwind v4 앱 + packed theme + 로컬 namespace registry CLI로 새 4항목 각각/조합을 설치해 TS/build 및 editable source 확인. 두 제품은 git archive 격리본 또는 기존 격리 검증본에서 baseline 이후 대표 사용처 교체를 검사하고 원본 dirty 상태 비교.
- **전체 테스트 필요 여부**: Yes — 설정된 Feature gate가 요구한다. 브라우저 및 소비자 확인을 대신하지 않는다.

## 관련 문서

- Spec: [spec.md](./spec.md)
- Decisions: [decisions.md](./decisions.md)

## 미디어 구현 통합 계획 (2026-10-02)

기존 구현을 보존하면서 QJ6JX8SFR87G의 승인된 아래 계약을 현재 Feature로 옮긴다. T09에서 두 commit tree를 합쳐 공통 문서/metadata/설정 충돌을 해소하고 전체 gate·실제 browser·registry consumer를 다시 확인한다. 새 durable test나 infrastructure는 추가하지 않는다. 기존 CopySinger 격리 검증 증거는 보존하고 통합 registry source를 소비자에서 재설치한다.

## 기술 스택

기존 React 19/TypeScript strict, Tailwind v4, Base UI Slider/Popover와 Leement Button을 유지한다. waveform engine은 원본과 동일한 wavesurfer.js 7.12.11에 고정한다. 추가 React adapter 없이 기존 native audio를 engine의 media로 전달한다. docs와 루트 검증에 필요한 dependency만 추가하며 registry metadata에도 명시한다. WaveSurfer package의 BSD-3-Clause notice를 추적한다.

## 아키텍처

- registry/lib/media-player.tsx: 두 실제 player의 중복 계약인 finite time formatting, media event/state 및 play/seek/volume/mute/rate/retry/cleanup hook, 공통 controls와 named status만 공유한다. public provider/engine/configuration object는 없다. registry:lib item media-player-support로 설치하고 docs navigation에 노출하지 않는다.
- AudioPlayer는 src/title, optional peaks/duration, brand=false 및 root native props/ref를 받는다. 원본 waveformPeaks/waveformDuration/label은 앱 adapter에서 mapping한다. src별 keyed instance로 source/engine 상태를 분리한다. native audio controls가 SSR/no-JS/failure 경로이며 enhancement가 준비된 뒤에만 숨겨 custom controls와 waveform slider를 노출한다. lazy client import, WaveSurfer init/load rejection 처리, ready timeout과 engine destroy를 제공한다. empty src는 idle이며 무한 loading이 아니다.
- WaveSurfer는 audio element의 playback 소유권을 가져가지 않는다. media HTML event가 UI 상태의 정본이다. direct keyboard seek도 그 element를 조작한다. engine의 fetch/decode 실패는 native fallback이고 HTML audio.error는 media error다. optional peaks/duration은 함께 유효할 때 전달한다.
- waveform은 72px, 2px bar/gap/radius를 기준으로 한다. 기본 wave=foreground-muted, progress=data-accent-foreground; brand=true만 Leement의 gradient-start/middle/end를 사용한다. Canvas color는 scope에서 실제 computed color로 resolve한다. theme/style 변경을 관찰해 setOptions만 갱신하고 재생 엔진을 재생성하지 않는다. Foundations provider는 stylesheet 적용 뒤 선택적 leement:theme-change event를 보낸다; consumer가 CSS stylesheet를 runtime 변경할 때도 같은 event를 쓸 수 있다. 문서 Foundations 편집/light/dark에서 실제 색 변경을 확인한다.
- VideoPlayer는 기존 API를 보존하고 captionsLang/captionsLabel을 추가한다. default language는 문서 locale가 아닌 명시적 기본 en으로 안내하며 caller가 override한다. src keyed instance로 state/ref/listener를 정리한다. native controls는 SSR/no-JS에 제공한다. captions track mode toggle, fullscreen API capability/event 및 rejection 처리만 player가 소유한다. speech transcript는 앱의 영역이다.
- 공통 controls: 36px icon-sm Button, text-xs tabular time, native/Leement slider, speed/volume Popover. 좁은 화면에서는 flex wrap하고 overflow를 만들지 않는다. focus/aria/disabled는 primitive와 native semantics를 보존한다. play promise failure는 표시하고 mounted token으로 늦은 결과를 무시한다. reduced motion은 장식만 정지시키고 사용자가 시작한 media를 유지한다.
- duration-normal/fast/slow 토큰을 보존한다. 현재 모션 토큰과 미디어의 fallback 계약을 함께 검증한다. 새 색상/token category 및 compiler는 없다. main shared primary는 유지한다.

## 파일 구조

- registry/lib/media-player.tsx, registry/ui/audio-player.tsx, audio-player.module.css, video-player.tsx
- registry/ui/player.test.tsx; 기존 media-finance.test.tsx의 video assertion 유지/필요한 계약 갱신
- registry.json, package.json, apps/docs/package.json, pnpm-lock.yaml, vitest.config.mts, apps/docs/tsconfig.json, turbo.json(registry cache input)
- apps/docs/examples/{audio-player,video-player}.tsx; apps/docs/components/{previews,foundation-preview-provider}.tsx; apps/docs/lib/{docs,items,item-states}.ts
- apps/docs/public/demo-audio.wav, demo-player.mp4, demo-captions.vtt (자체 합성 소리/영상/자막)
- apps/docs/app/{adoption,changelog}/page.tsx, docs/prd/leement-prd.md, docs/designs/design-system.md, THIRD_PARTY_NOTICES.md

## Curated Documentation Impact

- **Schema**: 2
- **Assessment**: Complete
- **Product requirements**: UPDATE
- **System architecture**: NONE
- **Onboarding entrypoint**: UPDATE
- **Operational/runtime contract**: NONE
- **Reason**: 기존 registry/제품 교체 목표에 두 player의 범용 책임을 명시하고 adoption mapping을 제공한다. README 수정 요청이 없어 보호한다. 현재 발견한 README 불일치는 없으며 차후 발견하면 decisions에 evidence/보류를 기록한다.
- **Targets**: docs:prd/leement-prd.md, project:apps/docs/app/adoption/page.tsx

## Additional Curated Impacts

- **Assessment**: Complete
- **Decision**: DECLARED

| Kind | Decision | Target | Reason |
| --- | --- | --- | --- |
| design-system-ux | UPDATE | docs:designs/design-system.md | 상태·파형·브랜드·제어·fallback 의미 |
| design-system-ux | UPDATE | project:apps/docs/lib/items.ts | 공개 API/접근성/사용 규칙 |
| other-curated | UPDATE | project:THIRD_PARTY_NOTICES.md | engine BSD notice |
| other-curated | UPDATE | project:apps/docs/app/changelog/page.tsx | 새 항목과 기존 API 호환 개선 |

## Verification Contract

### 변경 분류

- **유형**: NEW_BEHAVIOR
- **위험도**: MEDIUM

### 관찰 가능한 계약

- **지원해야 하는 동작**: Spec US-4/5/6, native event sync, src/cleanup, fallback/error/retry, keyboard/focus/ref, finite seek, theme/color edit, SSR/no-JS, registry consumer.
- **전제조건**: theme import/Tailwind v4, 재생 가능한 media URL; waveform fetch는 CORS 정책 적용; peaks와 duration은 앱이 제공.
- **성공 후 보장**: 조작 결과가 media 상태와 일치하고 source 소유 가능; 원본 앱 checkout 변경 없음.
- **중요한 실패 후 보장**: decode는 native fallback, media 실패는 named error/retry; play promise와 src 교체 stale event 무시, unmount/listener/engine 정리; 수치 NaN/Infinity 누출 없음.
- **의도적으로 지원하지 않는 사례**: Spec 제외 범위; iOS 등 OS가 제한하는 volume/fullscreen을 지원한다고 주장하지 않음; CORS/auth/backend 해결은 앱 책임.

### 테스트 결정

| 계약 | 결정 | 수준 | 현실적인 회귀 | Oracle |
| --- | --- | --- | --- | --- |
| media events/control/error/source/ref/cleanup | ADD | 기존 Vitest에 작은 player 통합 suite | stale src, mute restore, rejected play, 잘못된 seek/자막, decode fallback | Spec US-4/5 + HTMLMediaElement event 계약 |
| 기존 VideoPlayer/media UI | UPDATE | media-finance suite 필요 부분 | 기존 calls/controls 손상 | 기존 공개 API |
| waveform rendering/color/media 실재생 | NONE | 임시 Chrome/Playwright script | fake canvas, stale brand colors, 실제 play 실패 | Spec US-4/6 + DOM/media/canvas computed values |
| docs/registry | NONE | 실제 route/CLI + consumer TS/build | dependency/style/sample/alias 누락 | Spec US-3 |
| CopySinger 실제 사용처 | NONE | 격리 git archive adapter + TS/build/browser | label/media/ref/domain boundary 회귀 | 원본 source/head |

영구 테스트는 player suite와 기존 video 관련 필요한 경우만 추가/갱신한다. 클래스 snapshot, engine 내부 구현, 전체 앱 durable test, 모든 프레임 테스트는 추가하지 않는다. WaveSurfer test mock은 engine boundary의 failure/cleanup용이며 실제 waveform/browser 검증을 대신하지 않는다.

### 검증 실행

- **구현 중**: scoped Vitest, registry build, docs strict TS 및 ESLint. registry inputs를 turbo globalDependencies에 포함해 오래된 cache를 피한다.
- **태스크 완료 전**: 해당 계약/Docs sync, task별 검증 기록 및 commit gate. T01 audio example을 만들어 registry source TS를 docs compiler가 읽도록 한다.
- **Feature 완료 전**: 설정된 pnpm run typecheck/lint/test/build 모두 실행. build는 token/theme/registry/docs를 포함해 같은 target full build를 불필요하게 반복하지 않는다.
- **수동/UI 검증**: desktop/mobile light/dark, waveform keyboard/pointer, 실제 audible media play/pause/seek/end/restart, speed/volume/popover, video captions/fullscreen, src 교체/error/retry/decode fallback/late event, reduced/no-JS/ref/cleanup, Foundations color 편집, pageerrors. retained 핵심 screenshot/adapter는 Feature artifacts에 상대 링크, 임시 scripts/logs는 /tmp.
- **consumer**: temp Tailwind v4 + packed theme + local namespace로 두 항목 CLI 설치, strict TS/build/source 수정. CopySinger HEAD archive baseline/post 실제 AudioWaveformPlayer adapter 교체 및 제출 보컬/믹싱 UI 검증 route로 확인; 실제 backend/녹음/믹싱 호출 없음.
- **전체 테스트 필요 여부**: Yes — configured Feature gate. 실제 iOS/Safari/모든 OS 출력 기기의 통과는 주장하지 않는다.

## 관련 문서

- [Spec](./spec.md)
- [Decisions](./decisions.md)
