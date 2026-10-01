# Decisions Log

## D001: CopySinger 오디오와 기존 VideoPlayer의 공통화 범위 (2026-10-01)

- **Context**: 사용자가 CopySinger의 audio player를 토대로 Leement에 추가하고 필요하면 video player도 개선하고 싶다고 요청했다. 진행 중인 모션 Feature는 구현 승인 대기 중이다.
- **Options**: 현재 모션 Feature를 확장하거나, 별도 player Feature로 명세를 준비한다. Audio는 native controls만 제공하거나, 원본 파형/제어 경험을 기준으로 공통화한다.
- **Decision**: 별도 다음 Feature에 파형 AudioPlayer와 기존 VideoPlayer 보강을 제안한다. 현재 Feature 범위 확장 여부는 사용자에게 선택을 요청했으며 답변이 없는 상태에서는 구현 전 별도 명세를 준비하는 것으로 가정했다. 기존 모션 구현/병합 승인으로 취급하지 않는다.
- **Rationale**: waveform engine·미디어 수명주기·fallback·docs/registry 검증은 모션 토큰 연결과 별도의 사용자 계약이다. 원본의 반복된 실제 제품 사용처가 있으며 앱 도메인을 이전하지 않고 UI 재사용을 검증할 수 있다.
- **Trace / source evidence**:
  - CopySinger HEAD `f402d7d1bc324af358eeaa18f486aeb0e94da955`: `src/shared/ui/audio-waveform-player/audio-waveform-player.tsx`, Storybook stories와 `src/_app/styles/globals.css`의 audio waveform rules를 읽었다. waveform 72px, barWidth/GAP/radius 2px, 배속 0.75/1/1.25/1.5, volume/mute/restore, keyboard 5초/Home/End/Space, native audio decode fallback이 있다.
  - 제출 보컬 detail, voice scan input, mixing result, admin custom mixing, reference band preview에서 사용된다. 실제 reference band UI는 앱에서 preview blob을 생성해 여러 player에 전달한다. player segments prop은 조사한 현재 production 호출에 직접 전달되지 않아 초기 공용 범위에서는 제외한다.
  - 현재 설치 dependency는 wavesurfer.js 7.12.11 및 @wavesurfer/react 1.0.12, 두 package manifest의 license는 BSD-3-Clause다. CopySinger의 legacy token/hardcoded fallback hex와 원본 useMemo([])의 고정된 waveformColors는 theme 편집 시 stale해질 수 있어 그대로 복사하지 않는다.
  - Leement `registry/ui/video-player.tsx`는 play/pause/timeupdate/loadedmetadata/ended만 연결하고 src 교체 state reset, error/waiting/volumechange/ratechange/duration validation이 없다. play catch는 playing=false만 처리한다. captions는 srcLang=en으로 고정되며 표시 toggle/native controls fallback이 없다. browser 재현/수정은 Plan 및 구현 단계에서 확인한다.
  - 기존 test `registry/ui/media-finance.test.tsx`는 mute 및 seek control 존재만 확인한다. 실제 playback·source/error 회귀는 아직 검증되지 않았다.
- **Evidence**: 위 CopySinger source commit; Leement 조사 기준 `a239004` 및 별도 Feature seed commit. [WaveSurfer 공식 문서](https://wavesurfer.xyz/docs/)의 waveform/HTML audio, CORS, 사전 peaks/duration 안내를 확인했다. 현행 사이트는 v8 정보도 있으므로 Plan은 원본 v7의 설치된 API/types/라이선스를 별도 확인하며 임의 major upgrade를 하지 않는다.
- **Consequences**: registry item은 Components에 하나씩 배치하고 단일 UI 명칭을 사용한다. 새 Audio는 experimental이다. 미디어 sample·API·출처/라이선스·디자인 규칙·migration의 Docs impact는 Spec 승인 후 Plan/task로 연결한다. README는 수정하지 않는다.

## D002: 기존 모션 Feature와 독립 승인·통합 (2026-10-01)

- **Context**: W2TPJTYZ2Y4P의 worktree HEAD `12b4006`은 구현 승인 대기이고 main에는 아직 반영되지 않았다.
- **Decision**: 새 Feature는 managed worktree에서 Spec만 준비한다. 모션 Feature의 source가 필요하면 해당 Feature의 구현/merge 승인 후 최신 main을 명시적으로 sync한다. Feature seed 등록으로 base가 진행했으므로 두 Feature 통합 시 base SHA와 shared documentation을 재확인한다. 사용자 질문이나 새 Feature 진행을 이전 병합 허가로 간주하지 않는다.
- **Trace**: detect와 built-in 정책, 실제 PRD/design rules를 확인했다. feature 생성 후 반환된 workspace_prepare 명령으로 관리 worktree를 준비했다. workflow-stage는 spec_write, implementationAllowed=false를 반환했다.
- **Evidence**: `npx lee-spec-kit workflow-stage QJ6JX8SFR87G --json`; [Spec](./spec.md). source 구현/테스트/원본 앱 변경은 이번 명세 단계에서 수행하지 않았다.

- **사용자 승인 기록**: 사용자 `A`를 새 플레이어 Spec 승인으로 기록했다. 현재 모션 Feature의 구현·병합 승인으로 해석하지 않았다.

## D003: native media 상태와 선택적 waveform enhancement (2026-10-01)

- **Context**: Spec 사용자 A 승인 후 Plan 작성. 두 player는 playback/time/volume/rate/error 제어가 반복된다. 모션 Feature는 미병합이다.
- **Decision**: 작고 내부적인 media-player-support registry lib로 native state와 controls를 공유한다. WaveSurfer 7.12.11을 audio에만 연결하고 별도 React adapter를 추가하지 않는다. native controls가 정적/fallback 경로다. 기존 토큰만 사용하고 미병합 코드에 의존하지 않는다.
- **Trace**: CopySinger 설치 package types에서 media, peaks, duration, setOptions, load/destroy API와 external media 소유권을 확인했다. BSD notice를 읽었다. Audio는 key=src로 engine/listener 교체, video도 같은 source 수명주기다. scoped theme color 재계산을 추가한다.
- **Evidence**: [Plan Verification Contract](./plan.md), CopySinger source commit f402d7d 및 local WaveSurfer 7.12.11 d.ts/LICENSE.

- **T01 시작/검증**: task owner session 및 hash transition으로 시작했다. native ref/event/seek/volume restoration, decode fallback/old engine cleanup, rejected play 및 empty-src idle의 scoped 5 tests, typecheck 5 tasks, lint 3 tasks+registry PASS. Foundations provider는 동적 style text를 갱신하므로 scoped attribute observer에 선택적 theme-change event를 연결했다. waveform 기본은 foreground-muted로 unplayed 대비를 확보한다. 실제 waveform/브라우저/registry consumer는 T03에서 검증한다.

## D004: VideoPlayer의 native 상태·자막·fullscreen (2026-10-01)

- **Context**: T02 시작. 기존 mute/seek 검사만 있던 player를 같은 media support로 연결한다.
- **Decision**: 공개 src/title/poster/captionsSrc와 native root/ref를 유지하고 captionsLang/captionsLabel을 추가한다. key=src로 source 상태를 분리하고 textTracks change, fullscreenchange와 capability를 읽는다. native controls는 static/failure 경로다.
- **Trace**: 기존 mute test는 실제 metadata 준비를 먼저 발생시키도록 갱신한다. 새 player suite는 unknown/Infinity duration, src 변경/늦은 old event/ref cleanup, media error/retry와 자막 toggle/언어를 검사한다. 실제 fullscreen/자막 파일은 T03 브라우저에서 확인한다.
- **Evidence**: [Tasks](./tasks.md), [Plan](./plan.md), T01 commit 976c3a2.

- **T02 검증 정정**: typecheck 5 tasks, lint 3 tasks+registry PASS. player/media-finance는 13/15 PASS이고 두 query가 중복 label로 실패했다. 결과를 확인하기 전에 DONE/PASS를 기록한 메인 에이전트의 실수다. JSDOM에서는 Base UI thumb의 initial layout가 hidden일 수 있어 disabled/이름 계약은 native input label로 확인하고 실제 접근성·keyboard/visible slider는 T03 Chrome으로 확인한다. unknown duration, src state reset/late events, root ref cleanup, native SSR, captions language/toggle/error/retry를 검사했다.

- DONE task를 DOING/TODO로 되돌리는 CLI transition은 INVALID_ARGUMENT이다. task_commit checkpoint에서 검사 실패를 명시하고 T03의 기존 검증/국소 수정 범위에 query 수정 및 재실행을 연결한다. 실패를 PASS로 남기지 않으며 T03 종료/구현 승인 전 실제 suite 통과를 확인한다.

## D005: 실행 가능한 문서와 최종 검증 (2026-10-01)

- **Context**: T03 시작. T02의 query 두 건을 INPUT 대상으로 좁힌 뒤 player/media-finance 15/15 실제 PASS를 확인했다. 초기 premature verification 기록은 D004에 남긴다.
- **Decision**: 자체 합성 12초 melody와 기존 자체 제작 geometric video를 mux하고 로컬 VTT를 제공한다. 두 항목의 metadata/navigation/routes/examples와 transitive media-player-support를 함께 연결한다. 실제 consumer와 CopySinger 격리 adapter를 검증한다.
- **Evidence**: [Tasks](./tasks.md), T02 commit 46c18de; scoped suite log는 /tmp/leement-player-video-test.log. no audio backend/recording/mixing을 호출하지 않는다.

- **최종 검증**: `pnpm run typecheck` (5 tasks), `pnpm run lint` (3 tasks + registry), `pnpm run test` (13 files / 81 tests), `pnpm run build` (tokens/theme/83 registry items/docs) PASS. T02 query 수정 후 player/media-finance 15/15 PASS. 과거의 잘못된 검증 기록은 D004에 유지한다. 음량 slider의 양의 값은 native event를 기다리지 않고 즉시 저장해 빠른 0% 변경에도 복원한다.
- **실제 브라우저**: 로컬 Chrome/Playwright에서 실제 waveform canvas, play/pause, keyboard seek, speed/volume/mute, src reset, media error/recovery, 자연 종료/replay, 자막 cue/toggle, fullscreen, mobile overflow, dark, reduced-motion 사용자 재생, no-JS native controls PASS. Foundations provider의 저장값/stylesheet/event 경로로 brand canvas pixel 변경과 재생 유지 PASS. waveform fetch만 실패시켜 native audio 실제 재생 PASS; pageerror 0. Aside 프로필이 daemon에 연결되지 않아 설치된 Chrome을 사용했다. seek 검증의 절대값 >0.2는 원래 시간이 0.1 부근일 때 정밀도에 따라 실패하므로 조작 전후 시간 증가를 기다리는 계약으로 바로잡았다.
- **Registry consumer**: `/tmp/leement-player-consumer`의 독립 React/Tailwind v4/Vite strict TS 앱에서 `npx shadcn@4.21.0 add @leement/audio-player @leement/video-player --yes` 실행. helper/Button/Slider/Popover/Skeleton/utils/CSS module 및 외부 dependencies 자동 설치. Vite 기본 `vite/client` 환경 타입을 추가한 뒤 TS/build PASS. 설치된 AudioPlayer에 data-consumer-owned 속성을 추가해 다시 build하고 실제 audio/video 재생 PASS. final registry helper를 --overwrite로 재설치했다. canonical aliases를 사용했고 custom layout 지원으로 과장하지 않는다. npm/공개 registry는 배포하지 않았으며 localhost registry의 namespace 설치 증거다.
- **CopySinger 격리 도입**: 원본 HEAD `f402d7d1bc324af358eeaa18f486aeb0e94da955`를 `/tmp/leement-player-adoption/copy`로 git archive. frozen install/Prisma generate 후 baseline TS/build PASS, theme+registry 설치와 [실제 shared wrapper adapter](./artifacts/copysinger-adapter.tsx) 적용 후 TS/build PASS. 제출 보컬·믹싱 결과의 원래 call sites가 같은 wrapper를 사용한다. backend 없는 임시 pilot route에서 label/src/play/pause/seek PASS. ReferenceBandPlayers의 분석/Blob 생성 로직은 그대로 앱에 남긴다. 기존 optional segments API는 legacy 구현으로 보존했으며 공용 API로 옮기지 않았다. 원본 checkout git status는 검증 전후 빈 값으로 동일하다. 실제 로그인/backend 결과 데이터 및 앱 전체 마이그레이션을 검증했다고 주장하지 않는다.
- **시각 증거**: [light waveform/brand progress](./artifacts/audio-player-light.png), [mobile dark video](./artifacts/video-player-mobile-dark.png), [CopySinger wrapper pilot](./artifacts/copysinger-player-pilot.png). 12초 자체 합성 오디오의 amplitude를 실제로 변화시켜 정적인 평탄한 waveform sample을 개선했다. 배포 assets는 product public 경로에 있으며 과대 임시 로그는 포함하지 않는다.
- **제한 및 승인**: Chrome 한 환경의 검증이며 OS별 volume/fullscreen 제한은 native browser에 따른다. 영어 control label은 consumer-owned source에서 현지화한다. README 변경 없음. 별도 모션 Feature는 기존 승인 대기 상태를 유지한다. 구현 승인 뒤에도 local merge 승인은 별도로 받는다.
