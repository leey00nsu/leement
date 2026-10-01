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

## D008: 격리된 실제 source와 registry 소비자 검증 (2026-10-01)

- **Context**: T06은 임시 consumer와 두 실제 앱의 대표 사용처를 검증한다.
- **Decision**: 현재 HEAD의 git archive를 별도 /tmp 환경에 풀고 baseline 이후 source를 교체한다. 원본 checkout과 실제 .env/DB를 사용하지 않는다. 앱의 locale/media 준비/오류 상태는 앱에 유지한다.
- **Trace**: CopySinger f402d7d1bc324af358eeaa18f486aeb0e94da955, Leesfield 5b0393c6f18962385cac72ba64566b02026faa0d. 새 4항목 CLI 설치가 transitive helper/Button/Skeleton 및 CSS까지 11 files를 생성했다. baseline/post-change와 browser 결과는 완료 시 아래 기록한다.
- **Evidence**: [Verification Contract](./plan.md), [Tasks](./tasks.md).

### D008 통합에서 드러난 API 보완

- 제목의 native 줄/아이콘 wrapper 안에서 명시적 TextReveal.Item이 작동하도록 descendant 조합을 지원한다. 원문 분할은 앱 책임이며 전역 scanner를 추가하지 않는다.
- RotatingContent root를 native span으로 제공한다. 기본 pause 버튼은 유지하고 controls=false는 controlled paused와 앱 소유의 외부 pause UI를 요구한다. aria-hidden 제목 안에 버튼을 숨기지 않는다. Plan/API docs와 실제 앱 검증을 함께 갱신한다.

- 두 앱의 baseline/post-change TS/build가 통과했다. Leesfield의 Base UI 함수형 style/render API를 Leement native Button에 바로 전달할 수 없어, 기존 Button을 BrandAction asChild로 감싸 보존했다.
- 실제 HistoryMedia에서 hydration 전에 이미 로드된 이미지의 load event만 기다리면 loading에 남는 경우를 확인했다. 앱 adapter에서 image.complete/naturalWidth를 초기 확인한다. MediaReveal은 미디어 준비 상태를 추정하거나 fetch하지 않는다.
- registry의 고정 target은 canonical components/ui, components/patterns, lib 경로를 사용한다. custom shared aliases만 바꿔 설치하면 utils alias가 맞지 않아 pilot config를 canonical aliases로 맞췄다. 다른 folder layout에서는 설치 후 owned source 이동/alias 조정이 필요하다는 현재 한계를 adoption 문서에 명시한다.

- MediaReveal의 docs 예제는 이미 알려진 샘플을 ready 상태로 SSR한다. 사용자는 loading/error 버튼으로 전환을 재현하며 JavaScript가 없어도 샘플 이미지와 alt가 유지된다. 초기 loading 상태에서 readiness가 영원히 바뀌지 않는 no-JS 사용은 앱이 정적 ready/fallback을 제공해야 한다.

### D008 최종 검증 및 한계

- Feature 전체: pnpm run typecheck (5 tasks), lint (3 tasks), test (13 files / 83 tests), build (tokens/theme/registry/docs) PASS. feature-audit status=ok, violations=[]; diff --check PASS. Browser의 JS 미디어 pause/visibility, editor 값·CSS copy·reload/reset, 모바일 light/dark, reduced/no-JS, 실제 panel 높이/exit 및 source route checks PASS.
- 독립 Tailwind v4/React consumer: shadcn 4.21.0의 새 4항목 + 11 transitive files 설치, packed theme import, strict TS/Vite build PASS. 설치된 TextReveal source에 consumer-owned 속성을 추가한 뒤 재빌드했다. 브라우저 render, media retry, pause/resume와 document visibilitychange 이벤트의 timer 정지/재개 PASS.
- 두 앱: 위 HEAD archive에서 frozen dependency install, Prisma client generate, Leesfield vendor prepare 후 baseline TS/build PASS. 실제 대표 UI adapter 교체 및 임시 /motion-adoption 페이지 추가 후 양쪽 TS/build PASS. CopySinger hero text, 0.7s token, waveform ready와 ArrowRight 재생 위치 이동 PASS. Leesfield title/decoded logo rotation의 외부 pause, controlled 결과 재개폐, generation busy/disabled와 history media ready PASS. 양쪽 pageerrors=0. 원본 git status는 시작 기록과 동일했다.
- 앱 검증은 로컬 합성 WAV/SVG를 사용했다. 실제 .env/DB/녹음/생성 backend를 호출하지 않았고 검증 전용 환경값만 설정했다. Leesfield 서버는 기존 NEXT_PHASE=phase-production-build 조건으로 worker 초기화를 건너뛴 UI 검증이다. 외부 backend 및 전체 앱 마이그레이션 통과를 뜻하지 않는다. 기존 middleware/standalone/tracing 경고는 변경 범위 밖이며 build는 통과했다.
- 앱의 Base UI props/번역/미디어 readiness는 앱 wrapper에 남는다. fixed registry targets/custom layout 조정, no-JS 초기 ready/fallback, 임의 브랜드 대비 및 experimental API를 공개 문서에 안내했다. 공개 npm/registry 배포와 main 통합은 아직 수행하지 않았다.
- **Evidence**: [CopySinger adapter](./artifacts/copysinger-motion-adapter.patch), [Leesfield adapter](./artifacts/leesfield-motion-adapter.patch), [Tasks](./tasks.md). 테스트/consumer/browser/app 로그와 fixture·pilot 환경은 /tmp의 일회성 검증 자료이고 정본은 이 결과와 retained adapter patch다.

## D009: 사용자 피드백에 따른 Collapsible 모션 수정 (2026-10-01)

- **Context**: 구현 승인 대기 중 사용자가 Collapsible이 버벅이며 열린다고 지적했다. 구현 수락/병합 승인으로 해석하지 않고 현재 Feature의 수정 요청으로 처리한다.
- **Evidence**: 실제 /components/collapsible 브라우저 프레임에서 p-3가 있는 panel이 시작부터 24px, 측정값은 32px, 전환 끝에 auto로 복원되며 44px로 점프했다. 기존 검증은 opened/content-grow/closed 기능은 확인했지만 padding 예제의 프레임 연속성을 놓쳤다.
- **Decision**: Base UI의 panel/ref/render API와 모션 토큰은 보존한다. animated panel은 측정/클리핑을 맡고 패딩·border 같은 시각적 box는 내부 콘텐츠에 둔다. 현재 예제/문서 규칙을 수정하고 시작·끝 jump, 재개폐·keyboard·reduced motion을 scoped 검증한다. 범위는 승인 Spec의 자연스러운 Collapsible 열림/닫힘 내 수정이고 새 Feature를 만들지 않는다.
- **Trace**: T07 추가로 current Feature를 다시 진행한다. 구현 gate가 허용하기 전에는 코드 수정 없이 증거와 태스크를 기록한다.

### D009 수정과 재검증 결과

- Collapsible docs 예제의 animated panel에서 p-3를 제거하고 시각 box 내부로 옮겼다. Root space-y-2 간격도 내부 pt-2로 옮겨 mount/unmount 순간의 gap jump를 제거했다. Adoption composition의 panel pt-3도 자식으로 옮겼다. ref/render/className API와 400ms expand token은 그대로다. Source 주석·항목 API docs·design-system 규칙을 동기화했다.
- 수정 후 panel은 0→52px(본문 44px + 내부 간격 8px)이며 auto 전환 직전/직후의 높이 차이는 0.5px 미만이다. 닫힘은 0까지 이어지고 inert 후 제거된다. Enter/Space 빠른 재개폐, focus 대상과 aria-expanded, reduced duration=0s, pageerrors=0을 확인했다.
- typecheck/lint/build PASS, 관련 source-extension/motion 15 tests PASS. 전체 test 13 files / 83 tests와 feature-audit violations=[] PASS. Foundations의 dynamic height/exit 및 관련 source routes도 browser PASS. Frame 관찰은 레이아웃 연속성을 검증한 것이며 모든 환경의 프레임 속도를 보장하는 측정은 아니다.
- **Evidence**: [전후 panel 높이 샘플](./artifacts/collapsible-height-samples.csv). 사용자에게 원인과 수정·검증 결과를 공유했다. 구현/병합 승인은 아직 받지 않았다.
