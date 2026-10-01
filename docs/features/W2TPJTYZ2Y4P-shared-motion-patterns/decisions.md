# Decisions Log

## D001: Orb·Shader를 제외한 공통 모션 범위 (2026-10-01)

- **Context**: 두 제품의 공통 애니메이션 분석 후 사용자가 “Orb·Shader 시각 효과 빼고 다음 feature로 진행해봐”라고 요청했다.
- **Constraints**: tokens + rules가 정본이고 registry가 배포 수단이다. 구현은 Spec 승인과 후속 workflow gate를 거친다. 공유 primary checkout은 main을 유지한다.
- **Options**: Reveal/Text/Media만 먼저 다루거나, 분석에서 제안한 나머지 BrandAction/RotatingContent까지 명세에 포함한다.
- **Decision**: Orb·Shader만 제외하고 나머지 제안 항목을 Spec 범위에 포함한다. 기존 RevealContent/Collapsible/브랜드 효과를 개선하고 TextReveal·MediaReveal·BrandAction·RotatingContent를 source로 제공한다.
- **Rationale**: 사용자의 제외 대상은 명시적이며, 포함할 항목과 검증 부담을 구현 전 승인 가능한 형태로 드러낸다. 단일 제품에서 나온 항목은 experimental로 표시하며 stable로 가정하지 않는다.
- **Trace**:
  - 사용자 응답 `A`로 Spec 승인을 받았다. 명세 상태를 Approved로 기록하고 다음 workflow 단계를 확인한다.
  - Feature 생성 후 workflow-stage가 workspace_prepare를 반환했다. 관리 명령으로 seed commit과 코드/문서 worktree를 준비했다.
  - worktree의 workflow-stage는 spec_write, implementationAllowed=false를 반환했다. 이번 단계는 명세 작성이며 구현은 시작하지 않았다.
  - 원본 프로젝트는 읽기만 했고 애니메이션의 실제 재생/브라우저 검증은 아직 수행하지 않았다. 수치 선택과 구현 방식은 Spec 승인 후 Plan에서 결정한다.
- **Evidence**:
  - **Commit**: `a239004acb1cad50811df2838394409121ecb122` (Feature 등록 seed; 검증 완료를 뜻하지 않음)
  - **Spec**: [spec.md](./spec.md)
  - **Log**: `npx lee-spec-kit workflow-stage W2TPJTYZ2Y4P --json` → stage=spec, category=spec_write, implementationAllowed=false.

## D002: 원본 모션과 현재 토큰 사이의 연결 부족 (2026-10-01)

- **Context**: 기존 motion primitive는 fast=120ms, normal=180ms, slow=260ms, standard easing만 제공한다. 기존 RevealContent의 여러 단계와 theme 브랜드 반복은 별도 고정 시간을 사용한다.
- **Options**: 제품별 값을 전부 token으로 만들거나, 실제 재사용하는 시간·easing·stagger·cycle만 역할로 묶는다.
- **Decision**: 후자를 Spec 계약으로 정한다. CSS와 JavaScript가 같은 CSS 변수 및 override를 읽으며 Foundations는 역할에 맞는 값 편집과 Replay를 제공한다.
- **Rationale**: 기존 Foundations의 duration 범위와 export는 fast/normal/slow에 한정된다. 브랜드의 초 단위 반복도 안전하게 편집하고 reduced motion에서 멈추도록 함께 연결해야 한다.
- **Trace / 조사 근거**:
  - `CopySinger/src/_pages/home/ui/landing-hero.tsx`: 텍스트 blur 5px, y 0.32em, duration 0.72s, stagger 0.062s, easing [0.22, 1, 0.36, 1].
  - `Leesfield/src/widgets/landing/ui/landing-title-motion.tsx`: data-title-step, blur 5px, y 8px, duration 0.72s, step 0.096s. locale/reduced-motion과 결합되어 있어 앱 의존성을 분리해야 한다.
  - `Leesfield/src/shared/ui/generation-result-reveal.tsx`: height auto/0과 opacity, duration 0.4s. 숨김 시 즉시 자식 제거하는 코드를 그대로 옮기면 종료 모션을 보장하지 못한다.
  - `CopySinger/src/_app/styles/globals.css` 및 `src/shared/ui/audio-waveform-player/audio-waveform-player.tsx`: ready 상태 기반 waveform/skeleton fade와 reduced motion. 오디오 엔진은 앱에 남긴다.
  - `Leesfield/src/features/generation-history/ui/history-item.tsx`: 이미지 loading/loaded/error와 Skeleton/opacity 전환. fetch와 모델 데이터는 앱에 남긴다.
  - `Leesfield/src/shared/ui/app-motion-effects.tsx`: text 1.5s, surface 3.5s, disabled/aria-busy pause. 전역 scanner는 옮기지 않는다.
  - `Leesfield/src/shared/ui/app-button.tsx`: generation action 강조. 기존 Button을 조합한 BrandAction 후보이며 제품의 generation 로직을 가져오지 않는다.
  - `Leesfield/src/widgets/landing/ui/aceternity-layout-text-flip.tsx`: 1.8s 순환, fade/y/blur, 이미지 준비와 reduced motion 처리. 제목·번역 의존성과 logo 전용 크기를 제거하고 pause/정적 표시 계약을 갖춘 experimental 항목으로 추출한다.
  - Leement `registry/ui/reveal-content.tsx`: duration 650–900ms와 easing/stagger 고정. `registry/ui/collapsible.tsx`: Base UI wrapper이며 아직 명시적인 펼침 모션이 없다.
  - Leement `registry/ui/button.tsx`: loading spinner에 animate-spin이 있고 명시적 motion-reduce 정지 class가 없다.
  - Leement `apps/docs/lib/foundation-preview.ts`: motion shared field/export/reduced-motion override가 기존 세 시간만 다룬다.
- **Evidence**:
  - **Commit**: `a239004acb1cad50811df2838394409121ecb122`의 Leement token/registry/docs source 기준 조사.
  - **Design rules**: [design-system.md](../../designs/design-system.md)
  - **Acceptance 계약**: [spec.md](./spec.md)
- **Consequences**: 기본값 확정 전 실제 브라우저 동작과 두 앱의 대표 사용처를 격리 환경에서 검증한다. 기존 공개 props와 단위는 유지한다. 원본 코드의 외부 출처·라이선스는 구현 전 확인하고 필요한 notices를 갱신한다.

## D003: 문서와 통합 범위 (2026-10-01)

- **Context**: Leement는 웹 docs에서 source를 직접 보여 주고 Foundations 편집의 효과를 사이트 전체에 적용한다. 기존 PRD-FR-011/013과 디자인 시스템에 모션 확장 계약을 반영할 필요가 있다.
- **Decision**: Spec 승인 후 Plan에서 PRD, 디자인 시스템, Motion 및 항목별 웹 문서, 설치/migration 문서의 영향을 선언하고 각 task Docs와 연결한다. 별도 중복 보고서나 Feature 외부 artifact를 만들지 않는다.
- **Rationale**: 영속 요구사항, 의미 규칙, token/theme, registry source, 실행 가능한 미리보기를 함께 유지한다. 검증은 실제 사용처를 포함하되 원본 앱 체크아웃에는 쓰지 않는다.
- **Trace**:
  - docs/prd/leement-prd.md의 기존 요구사항 ID만 Spec에서 참조했다. 영속 범위의 갱신은 후속 계획에서 추적한다.
  - README 편집 요청이 없으므로 기존 README는 수정하지 않는다. 구체 불일치가 발견되면 경로·근거·보류 사유를 이 로그에 기록한다. 현재 단계에서는 해결했다고 주장할 README 불일치를 발견하지 않았다.
  - Orb/Shader와 그래픽 엔진, recording/generation backend, 전체 앱 마이그레이션, 공개 배포는 제외했다.
- **Evidence**:
  - **Commit**: `a239004acb1cad50811df2838394409121ecb122` (계획 기준)
  - **PRD**: [leement-prd.md](../../prd/leement-prd.md)
  - **Spec**: [spec.md](./spec.md)

## D004: 모션 역할과 실행 연결 (2026-10-01)

- **Context**: T01 시작. CSS 효과와 JS 모션이 고정된 시간을 공유하지 못한다.
- **Decision**: 기존 세 시간 유지, reveal/expand/media/stagger/easing/brand cycles를 Plan의 기본값으로 추가한다. 기존 제어 primitive를 유지하고 CSS 효과는 변수로 연결한다. 새 helper는 T02에서 scoped lifecycle/값 읽기만 제공한다.
- **Trace**: Spec 승인은 사용자 A로 받았다. Plan/Tasks는 workflow가 자동 승인하도록 반환해 Approved로 진행했다. task owner session claim 및 T01 TODO→DOING hash 확인 후 구현을 시작했다. 반복 cycle을 reduced에서 0으로 바꾸지 않는다.
- **Evidence**: [Plan](./plan.md), [Spec](./spec.md), [Task](./tasks.md). T01 검증/commit은 완료 시 갱신한다.

## D005: SSR가 읽을 수 있는 진입 및 미디어·펼침 구성 (2026-10-01)

- **Context**: T02는 초기 숨김 CSS/inline style을 제거하고 hydration 뒤 scoped 진입을 적용했다. T03은 실제 종료 lifecycle과 loading/ready/error를 다룬다.
- **Decision**: TextReveal은 원문을 한 번 읽는 native span 조합을 쓰고 Reveal 공개 Motion props는 유지한다. Collapsible은 Base UI의 높이/전환 속성을 그대로 사용하고 MediaReveal은 inert/aria-hidden 층을 같은 grid cell에 배치한다.
- **Trace**: T02 typecheck 5 tasks, registry build, static/render test 1/1 및 ESLint PASS. native line break가 accessible name의 공백을 합칠 수 있어 테스트는 원래 글자 순서/중복 유무를 검사한다. T03 시작 시 Base UI 설치된 1.7 Panel의 height/style/className API를 확인했다. 실제 height/fade는 T05 브라우저에서 추가 확인한다.
- **Evidence**: Commit `e225ebd`, [Base UI Collapsible](https://base-ui.com/react/components/collapsible), [Motion useAnimate](https://motion.dev/docs/react-use-animate), [Tasks](./tasks.md).

## D006: 명시적인 브랜드·순환 lifecycle (2026-10-01)

- **Context**: T04 시작. Leesfield의 전역 animation scanner 대신 각 source가 자기 element의 lifecycle을 소유해야 한다.
- **Decision**: 브랜드 효과는 낮은 강도의 gradient를 action 표면에 겹쳐 기본 글자 대비를 유지한다. 반복 CSS 변수와 scoped visibility/reduced 상태를 연결하고 RotatingContent는 longest-item geometry, hidden/inert decorative layers와 pause control을 갖는다.
- **Trace**: BrandAction/Rotation은 원본 단일 제품 사례이므로 experimental을 유지한다. 일반 Skeleton은 중립이고 animated/paused는 소비자가 명시한다. Theme live 변경 알림은 선택적 event이며 필수 provider를 요구하지 않는다.
- **Evidence**: [Plan](./plan.md), Commit `68b732c`, [Tasks](./tasks.md). 검증/commit은 T04 완료 시 기록한다.

## D007: 실시간 편집과 검증 cache 정합성 (2026-10-01)

- **Context**: T05 시작. cycle/easing 편집은 기존 duration validator 범위를 넘어선다. T03에서 registry만 바꿨는데 docs typecheck가 cache hit여서 직접 tsc로 확인했다.
- **Decision**: duration/delay/cycle 범위를 구분하고 easing은 named 또는 bounded cubic-bezier만 허용한다. CSS 반복은 변수 갱신, JS rotation은 선택적 motion-change event로 즉시 갱신한다. turbo globalDependencies에 registry source/metadata를 포함하여 오래된 cache를 검증 증거로 쓰지 않는다. Overlay reduced-motion class는 data-state selector보다 우선한다.
- **Trace**: T04 motion/source-extension 13/13, 직접 docs tsc, registry build와 scoped ESLint PASS. 새 task scope는 승인된 실제 source preview/검증 정합성의 국소 수정이며 PRD 요구를 확대하지 않는다. 브라우저 결과는 아래에 추가한다.
- **Evidence**: Commit `e71094c`, [Verification Contract](./plan.md), [Tasks](./tasks.md).

### D007 검증 결과

- Motion editor: reveal 1100ms, stagger 120ms, easing 변경을 실제 TextReveal computed style에서 확인했다. brand text/surface 4500/5500ms와 rotate 2500ms를 편집하고 CSS copy, reload 복원 및 reset 기본 700ms를 확인했다. BrandAction computed cycle은 5.5s였다.
- Collapsible의 실제 열린 높이, 콘텐츠 증가에 따른 높이 증가, 닫는 동안 inert 및 400ms 후 제거를 확인했다. Media ready/error/retry와 aria-busy, rotation pause/resume/offscreen stop이 작동했다.
- 네 새 상세 route가 HTTP 200이고 source preview가 렌더됐다. 모바일 light/dark에서 가로 overflow 없음, reduced motion의 animation none/첫 항목 고정, no-JS TextReveal opacity 1과 원문 표시, pageerror 0을 확인했다.
- Aside u0 profile이 연결되지 않아 로컬 Chrome/Playwright로 확인했다. 임시 검증 script와 로그는 /tmp에 두었고 핵심 화면만 보존한다.
- **Evidence**: [desktop motion preview](./artifacts/motion-preview-desktop.png), [mobile dark editor](./artifacts/motion-editor-mobile-dark.png), T05 typecheck/lint/build 및 foundation/motion/overlay 테스트 로그는 tasks 기록.
