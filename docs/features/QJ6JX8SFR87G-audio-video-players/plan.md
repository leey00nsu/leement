# Implementation Plan: audio-video-players

## 개요

- **기능 ID**: QJ6JX8SFR87G
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

기존 React 19/TypeScript strict, Tailwind v4, Base UI Slider/Popover와 Leement Button을 유지한다. waveform engine은 원본과 동일한 wavesurfer.js 7.12.11에 고정한다. 추가 React adapter 없이 기존 native audio를 engine의 media로 전달한다. docs와 루트 검증에 필요한 dependency만 추가하며 registry metadata에도 명시한다. WaveSurfer package의 BSD-3-Clause notice를 추적한다.

## 아키텍처

- registry/lib/media-player.tsx: 두 실제 player의 중복 계약인 finite time formatting, media event/state 및 play/seek/volume/mute/rate/retry/cleanup hook, 공통 controls와 named status만 공유한다. public provider/engine/configuration object는 없다. registry:lib item media-player-support로 설치하고 docs navigation에 노출하지 않는다.
- AudioPlayer는 src/title, optional peaks/duration, brand=false 및 root native props/ref를 받는다. 원본 waveformPeaks/waveformDuration/label은 앱 adapter에서 mapping한다. src별 keyed instance로 source/engine 상태를 분리한다. native audio controls가 SSR/no-JS/failure 경로이며 enhancement가 준비된 뒤에만 숨겨 custom controls와 waveform slider를 노출한다. lazy client import, WaveSurfer init/load rejection 처리, ready timeout과 engine destroy를 제공한다. empty src는 idle이며 무한 loading이 아니다.
- WaveSurfer는 audio element의 playback 소유권을 가져가지 않는다. media HTML event가 UI 상태의 정본이다. direct keyboard seek도 그 element를 조작한다. engine의 fetch/decode 실패는 native fallback이고 HTML audio.error는 media error다. optional peaks/duration은 함께 유효할 때 전달한다.
- waveform은 72px, 2px bar/gap/radius를 기준으로 한다. 기본 wave=foreground-muted, progress=data-accent-foreground; brand=true만 Leement의 gradient-start/middle/end를 사용한다. Canvas color는 scope에서 실제 computed color로 resolve한다. theme/style 변경을 관찰해 setOptions만 갱신하고 재생 엔진을 재생성하지 않는다. Foundations provider는 stylesheet 적용 뒤 선택적 leement:theme-change event를 보낸다; consumer가 CSS stylesheet를 runtime 변경할 때도 같은 event를 쓸 수 있다. 문서 Foundations 편집/light/dark에서 실제 색 변경을 확인한다.
- VideoPlayer는 기존 API를 보존하고 captionsLang/captionsLabel을 추가한다. default language는 문서 locale가 아닌 명시적 기본 en으로 안내하며 caller가 override한다. src keyed instance로 state/ref/listener를 정리한다. native controls는 SSR/no-JS에 제공한다. captions track mode toggle, fullscreen API capability/event 및 rejection 처리만 player가 소유한다. speech transcript는 앱의 영역이다.
- 공통 controls: 36px icon-sm Button, text-xs tabular time, native/Leement slider, speed/volume Popover. 좁은 화면에서는 flex wrap하고 overflow를 만들지 않는다. focus/aria/disabled는 primitive와 native semantics를 보존한다. play promise failure는 표시하고 mounted token으로 늦은 결과를 무시한다. reduced motion은 장식만 정지시키고 사용자가 시작한 media를 유지한다.
- 이미 존재하는 duration-normal/fast/slow 토큰을 사용한다. 모션 Feature의 새 token/helper에 의존하지 않는다. 새 색상/token category 및 compiler는 없다. main shared primary는 유지한다.

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

- **지원해야 하는 동작**: Spec US-1/2/3, native event sync, src/cleanup, fallback/error/retry, keyboard/focus/ref, finite seek, theme/color edit, SSR/no-JS, registry consumer.
- **전제조건**: theme import/Tailwind v4, 재생 가능한 media URL; waveform fetch는 CORS 정책 적용; peaks와 duration은 앱이 제공.
- **성공 후 보장**: 조작 결과가 media 상태와 일치하고 source 소유 가능; 원본 앱 checkout 변경 없음.
- **중요한 실패 후 보장**: decode는 native fallback, media 실패는 named error/retry; play promise와 src 교체 stale event 무시, unmount/listener/engine 정리; 수치 NaN/Infinity 누출 없음.
- **의도적으로 지원하지 않는 사례**: Spec 제외 범위; iOS 등 OS가 제한하는 volume/fullscreen을 지원한다고 주장하지 않음; CORS/auth/backend 해결은 앱 책임.

### 테스트 결정

| 계약 | 결정 | 수준 | 현실적인 회귀 | Oracle |
| --- | --- | --- | --- | --- |
| media events/control/error/source/ref/cleanup | ADD | 기존 Vitest에 작은 player 통합 suite | stale src, mute restore, rejected play, 잘못된 seek/자막, decode fallback | Spec US-1/2 + HTMLMediaElement event 계약 |
| 기존 VideoPlayer/media UI | UPDATE | media-finance suite 필요 부분 | 기존 calls/controls 손상 | 기존 공개 API |
| waveform rendering/color/media 실재생 | NONE | 임시 Chrome/Playwright script | fake canvas, stale brand colors, 실제 play 실패 | Spec US-1/3 + DOM/media/canvas computed values |
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
