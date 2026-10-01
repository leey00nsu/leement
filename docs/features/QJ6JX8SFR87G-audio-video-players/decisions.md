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
