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

## D010: 공통 모션 영향 감사와 외부 ref 호환성 (2026-10-01)

- **Context**: 사용자가 다른 영향받는 UI를 질문했다. 구현/병합 승인으로 해석하지 않고 현재 Feature의 영향을 조사했다.
- **Evidence**: 임시 Testing Library 재현에서 외부 ref가 있는 TextReveal은 entered=false, RotatingContent는 500ms 뒤 index=0이고, RevealContent observer는 ref 없는 baseline만 관찰했다. 세 source의 props spread가 내부 ref를 덮어썼다. TextReveal/RotatingContent는 새 구현 문제이며 RevealContent 충돌은 main 원본에도 있었다.
- **Decision**: T08에서 세 항목의 내부 ref와 consumer ref를 함께 유지한다. 기존 motion suite에 작은 실제 사용 회귀를 추가하고 문서와 registry 소비자 검증을 동기화한다. UI API나 새 Feature를 추가하지 않는다.
- **Impact scope**: theme의 Tailwind default transition easing이 standard token을 읽어 기존 Input/Textarea/Switch/Tabs/Slider/Popover 등 기본 transition에도 적용된다. 기존 fast/normal/slow 120/180/260ms는 유지된다. Overlay fade, reduced motion, 브랜드 cycle, 미디어 전환은 승인된 변경이다. 높이 측정 transition은 Collapsible에 한정되고 다른 direct-panel padding 사용처는 발견되지 않았다.
- **Trace**: 코드 수정 전에 task와 Verification Contract를 기록하고 implementationAllowed gate를 확인한다. 결과와 한계는 검증 후 추가한다.

### D010 reduced-motion 추가 발견

- 실제 Chrome에서 reduced motion의 DialogContent animation-name은 enter였다. 기본 duration=0s 덕분에 움직임은 없지만 클래스가 의도한 animation:none은 적용되지 않았다. 생성된 CSS에도 motion-reduce:[animation:none!important]가 없었다. T05의 이전 검증은 정적 결과/0ms만 확인해 이 누락을 놓쳤다.
- DialogContent와 TooltipContent를 Tailwind v4의 motion-reduce:animate-none! 문법으로 수정한다. CSS 토큰을 소비자가 local로 900ms override한 상태에서도 reduced motion의 computed animation-name=none과 정적 opacity=1을 직접 확인한다.

### D010 수정 및 감사 결과

- TextReveal/RotatingContent/RevealContent에서 ref를 props spread에서 분리하고 기존 Skeleton/BrandAction과 같은 useImperativeHandle로 root를 전달했다. 내부 observer ref가 유지되며 object/callback ref와 callback cleanup을 보존한다. API 문서를 갱신했다.
- 기존 motion suite에 두 회귀를 추가해 외부 ref의 TextReveal entered, Rotation 진행, Reveal observer target, unmount ref/timer 정리를 확인했다. full test 13 files / 85 tests, typecheck 5 tasks, lint 3 tasks+registry, tokens/theme/registry/docs build, feature-audit violations=[] 및 diff --check PASS.
- 로컬 Chrome에서 normal/reduced 각각 Dialog의 Tab trap/Escape/trigger focus 복원, Tooltip focus/aria/Escape, Dropdown keyboard/disabled/Escape/focus, Switch Space, Slider ArrowRight/disabled, Tabs ArrowRight 및 Input 입력/disabled를 확인했다. Dialog/Tooltip에 local duration 900ms를 적용해도 reduced animation-name=none, opacity=1이었다. Input/Switch의 기본 timing은 standard token과 일치하고 reduced transition=0s였다. pageerrors=0.
- 새 registry 출력으로 CLI 4.21.0가 세 motion 항목을 재설치했다. 독립 consumer에서 object/callback ref를 전달한 source의 strict TS/Vite build, 실제 TextReveal 진입, Reveal fade, Rotation 진행/pause/reduced PASS; pageerrors=0. Motion dependency의 use client bundling 안내는 build 실패가 아니었다.
- 동일한 높이/padding 문제는 다른 Collapsible 사용처에 없었다. MediaReveal은 측정 height animation 없이 공간을 확보한 grid 층의 opacity 전환이다. 브랜드 text cycle은 3s에서 공통 1.5s로 변경되었고 surface/skeleton은 기존 3.5s가 공통 변수를 읽는다. global default easing은 기존 transition utility에도 적용되는 의도된 영향이다.
- 감사는 변경된 source, transitive helper/theme 및 대표 브라우저 조작을 대상으로 했다. 전체 브라우저/기기 성능 및 두 원본 앱 전체의 모든 화면을 검증했다는 뜻은 아니다. main은 clean이며 이번 수정은 Feature worktree에만 있다. 구현/병합 승인은 받지 않았다.

## D011: 사용자의 단일 Feature 의도 복원 (2026-10-02)

- **Context**: 사용자는 audio player 추가/video 개선을 진행 중인 shared-motion-patterns Feature의 확장으로 의도했는데 메인 에이전트가 별도 QJ6JX8SFR87G를 만들었다. 사용자가 이를 명시적으로 지적하고 하나로 합치라고 요청했다.
- **Decision**: W2TPJTYZ2Y4P 한 Feature/작업 브랜치/워크트리/승인 흐름에 모션과 미디어의 완료 구현·명세·검증·산출물을 통합한다. QJ6JX8SFR87G 별도 등록과 작업공간은 통합 보존 확인 후 제거한다. main에는 Feature 등록 정리만 반영하며 제품 코드 병합은 별도 승인으로 남긴다.
- **Rationale**: 분리는 lee-spec-kit이 강제한 것이 아니라 메인 에이전트가 범위를 잘못 해석한 결과다. 기존 A 답변의 의미를 새 병합 승인으로 확대하지 않는다. 이번 단일 Feature 통합은 사용자가 명시적으로 요청했다.
- **Trace**: T01–T08의 모션 구현과 이전 player T01–T03을 보존한다. 이전 player 작업은 T09에 흡수하며 그때의 개별 커밋/검증 상태를 아래에 남긴다. 이전 player T02의 premature PASS/DONE 오류와 T03의 실제 수정/검증도 삭제하지 않는다. 새 구현이나 사후 검증을 과거에 수행했다고 주장하지 않는다.
- **Evidence**: 원본 모션 head `12b4006`, player head `d4225cb`, player source commits `976c3a2`/`46c18de`/`d4225cb`; 관련 Spec/Plan은 현재 canonical 문서에 통합했다.

### 흡수한 player 태스크 이력

| 기존 task | 구현 증거 | 완료 검증 |
| --- | --- | --- |
| QJ6JX8SFR87G-01 native media / AudioPlayer | `976c3a2`, docs `8693796` | native/fallback/source/ref 5 tests, TS/lint PASS |
| QJ6JX8SFR87G-02 VideoPlayer | `46c18de`, docs `2312f86` | 초기 13/15 및 잘못된 완료 기록; 후속 T03에서 query 수정 후 15/15 PASS |
| QJ6JX8SFR87G-03 docs/registry/consumer/CopySinger | `d4225cb`, docs `fcf5d62` | 81 tests/TS/lint/build 및 실제 media/consumer/격리 app PASS |

### 이전 player 결정과 검증의 역사 기록

아래 내용은 당시 별도 Feature에서 기록한 근거다. 별도 진행/승인 결정은 D011로 대체되며 현재 실행 정본은 이 Feature의 Spec·Plan·Tasks다.

### 이전 QJ6JX8SFR87G / D001: CopySinger 오디오와 기존 VideoPlayer의 공통화 범위 (2026-10-01)

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

### 이전 QJ6JX8SFR87G / D002: 기존 모션 Feature와 독립 승인·통합 (2026-10-01)

- **Context**: W2TPJTYZ2Y4P의 worktree HEAD `12b4006`은 구현 승인 대기이고 main에는 아직 반영되지 않았다.
- **Decision**: 새 Feature는 managed worktree에서 Spec만 준비한다. 모션 Feature의 source가 필요하면 해당 Feature의 구현/merge 승인 후 최신 main을 명시적으로 sync한다. Feature seed 등록으로 base가 진행했으므로 두 Feature 통합 시 base SHA와 shared documentation을 재확인한다. 사용자 질문이나 새 Feature 진행을 이전 병합 허가로 간주하지 않는다.
- **Trace**: detect와 built-in 정책, 실제 PRD/design rules를 확인했다. feature 생성 후 반환된 workspace_prepare 명령으로 관리 worktree를 준비했다. workflow-stage는 spec_write, implementationAllowed=false를 반환했다.
- **Evidence**: `npx lee-spec-kit workflow-stage QJ6JX8SFR87G --json`; [Spec](./spec.md). source 구현/테스트/원본 앱 변경은 이번 명세 단계에서 수행하지 않았다.

- **사용자 승인 기록**: 사용자 `A`를 새 플레이어 Spec 승인으로 기록했다. 현재 모션 Feature의 구현·병합 승인으로 해석하지 않았다.

### 이전 QJ6JX8SFR87G / D003: native media 상태와 선택적 waveform enhancement (2026-10-01)

- **Context**: Spec 사용자 A 승인 후 Plan 작성. 두 player는 playback/time/volume/rate/error 제어가 반복된다. 모션 Feature는 미병합이다.
- **Decision**: 작고 내부적인 media-player-support registry lib로 native state와 controls를 공유한다. WaveSurfer 7.12.11을 audio에만 연결하고 별도 React adapter를 추가하지 않는다. native controls가 정적/fallback 경로다. 기존 토큰만 사용하고 미병합 코드에 의존하지 않는다.
- **Trace**: CopySinger 설치 package types에서 media, peaks, duration, setOptions, load/destroy API와 external media 소유권을 확인했다. BSD notice를 읽었다. Audio는 key=src로 engine/listener 교체, video도 같은 source 수명주기다. scoped theme color 재계산을 추가한다.
- **Evidence**: [Plan Verification Contract](./plan.md), CopySinger source commit f402d7d 및 local WaveSurfer 7.12.11 d.ts/LICENSE.

- **T01 시작/검증**: task owner session 및 hash transition으로 시작했다. native ref/event/seek/volume restoration, decode fallback/old engine cleanup, rejected play 및 empty-src idle의 scoped 5 tests, typecheck 5 tasks, lint 3 tasks+registry PASS. Foundations provider는 동적 style text를 갱신하므로 scoped attribute observer에 선택적 theme-change event를 연결했다. waveform 기본은 foreground-muted로 unplayed 대비를 확보한다. 실제 waveform/브라우저/registry consumer는 T03에서 검증한다.

### 이전 QJ6JX8SFR87G / D004: VideoPlayer의 native 상태·자막·fullscreen (2026-10-01)

- **Context**: T02 시작. 기존 mute/seek 검사만 있던 player를 같은 media support로 연결한다.
- **Decision**: 공개 src/title/poster/captionsSrc와 native root/ref를 유지하고 captionsLang/captionsLabel을 추가한다. key=src로 source 상태를 분리하고 textTracks change, fullscreenchange와 capability를 읽는다. native controls는 static/failure 경로다.
- **Trace**: 기존 mute test는 실제 metadata 준비를 먼저 발생시키도록 갱신한다. 새 player suite는 unknown/Infinity duration, src 변경/늦은 old event/ref cleanup, media error/retry와 자막 toggle/언어를 검사한다. 실제 fullscreen/자막 파일은 T03 브라우저에서 확인한다.
- **Evidence**: [Tasks](./tasks.md), [Plan](./plan.md), T01 commit 976c3a2.

- **T02 검증 정정**: typecheck 5 tasks, lint 3 tasks+registry PASS. player/media-finance는 13/15 PASS이고 두 query가 중복 label로 실패했다. 결과를 확인하기 전에 DONE/PASS를 기록한 메인 에이전트의 실수다. JSDOM에서는 Base UI thumb의 initial layout가 hidden일 수 있어 disabled/이름 계약은 native input label로 확인하고 실제 접근성·keyboard/visible slider는 T03 Chrome으로 확인한다. unknown duration, src state reset/late events, root ref cleanup, native SSR, captions language/toggle/error/retry를 검사했다.

- DONE task를 DOING/TODO로 되돌리는 CLI transition은 INVALID_ARGUMENT이다. task_commit checkpoint에서 검사 실패를 명시하고 T03의 기존 검증/국소 수정 범위에 query 수정 및 재실행을 연결한다. 실패를 PASS로 남기지 않으며 T03 종료/구현 승인 전 실제 suite 통과를 확인한다.

### 이전 QJ6JX8SFR87G / D005: 실행 가능한 문서와 최종 검증 (2026-10-01)

- **Context**: T03 시작. T02의 query 두 건을 INPUT 대상으로 좁힌 뒤 player/media-finance 15/15 실제 PASS를 확인했다. 초기 premature verification 기록은 D004에 남긴다.
- **Decision**: 자체 합성 12초 melody와 기존 자체 제작 geometric video를 mux하고 로컬 VTT를 제공한다. 두 항목의 metadata/navigation/routes/examples와 transitive media-player-support를 함께 연결한다. 실제 consumer와 CopySinger 격리 adapter를 검증한다.
- **Evidence**: [Tasks](./tasks.md), T02 commit 46c18de; scoped suite log는 /tmp/leement-player-video-test.log. no audio backend/recording/mixing을 호출하지 않는다.

- **최종 검증**: `pnpm run typecheck` (5 tasks), `pnpm run lint` (3 tasks + registry), `pnpm run test` (13 files / 81 tests), `pnpm run build` (tokens/theme/83 registry items/docs) PASS. T02 query 수정 후 player/media-finance 15/15 PASS. 과거의 잘못된 검증 기록은 D004에 유지한다. 음량 slider의 양의 값은 native event를 기다리지 않고 즉시 저장해 빠른 0% 변경에도 복원한다.
- **실제 브라우저**: 로컬 Chrome/Playwright에서 실제 waveform canvas, play/pause, keyboard seek, speed/volume/mute, src reset, media error/recovery, 자연 종료/replay, 자막 cue/toggle, fullscreen, mobile overflow, dark, reduced-motion 사용자 재생, no-JS native controls PASS. Foundations provider의 저장값/stylesheet/event 경로로 brand canvas pixel 변경과 재생 유지 PASS. waveform fetch만 실패시켜 native audio 실제 재생 PASS; pageerror 0. Aside 프로필이 daemon에 연결되지 않아 설치된 Chrome을 사용했다. seek 검증의 절대값 >0.2는 원래 시간이 0.1 부근일 때 정밀도에 따라 실패하므로 조작 전후 시간 증가를 기다리는 계약으로 바로잡았다.
- **Registry consumer**: `/tmp/leement-player-consumer`의 독립 React/Tailwind v4/Vite strict TS 앱에서 `npx shadcn@4.21.0 add @leement/audio-player @leement/video-player --yes` 실행. helper/Button/Slider/Popover/Skeleton/utils/CSS module 및 외부 dependencies 자동 설치. Vite 기본 `vite/client` 환경 타입을 추가한 뒤 TS/build PASS. 설치된 AudioPlayer에 data-consumer-owned 속성을 추가해 다시 build하고 실제 audio/video 재생 PASS. final registry helper를 --overwrite로 재설치했다. canonical aliases를 사용했고 custom layout 지원으로 과장하지 않는다. npm/공개 registry는 배포하지 않았으며 localhost registry의 namespace 설치 증거다.
- **CopySinger 격리 도입**: 원본 HEAD `f402d7d1bc324af358eeaa18f486aeb0e94da955`를 `/tmp/leement-player-adoption/copy`로 git archive. frozen install/Prisma generate 후 baseline TS/build PASS, theme+registry 설치와 [실제 shared wrapper adapter](./artifacts/copysinger-adapter.tsx) 적용 후 TS/build PASS. 제출 보컬·믹싱 결과의 원래 call sites가 같은 wrapper를 사용한다. backend 없는 임시 pilot route에서 label/src/play/pause/seek PASS. ReferenceBandPlayers의 분석/Blob 생성 로직은 그대로 앱에 남긴다. 기존 optional segments API는 legacy 구현으로 보존했으며 공용 API로 옮기지 않았다. 원본 checkout git status는 검증 전후 빈 값으로 동일하다. 실제 로그인/backend 결과 데이터 및 앱 전체 마이그레이션을 검증했다고 주장하지 않는다.
- **시각 증거**: [light waveform/brand progress](./artifacts/audio-player-light.png), [mobile dark video](./artifacts/video-player-mobile-dark.png), [CopySinger wrapper pilot](./artifacts/copysinger-player-pilot.png). 12초 자체 합성 오디오의 amplitude를 실제로 변화시켜 정적인 평탄한 waveform sample을 개선했다. 배포 assets는 product public 경로에 있으며 과대 임시 로그는 포함하지 않는다.
- **제한 및 승인**: Chrome 한 환경의 검증이며 OS별 volume/fullscreen 제한은 native browser에 따른다. 영어 control label은 consumer-owned source에서 현지화한다. README 변경 없음. 별도 모션 Feature는 기존 승인 대기 상태를 유지한다. 구현 승인 뒤에도 local merge 승인은 별도로 받는다.

- **등록 정리 검사**: main의 QJ6JX8SFR87G seed 문서 제거에 commit-audit가 CANONICAL_FEATURE_DOC_DELETION을 반환했다. toolkit 구현은 canonical 삭제를 무조건 차단하며 이미 다른 Feature의 canonical 문서로 내용이 옮겨졌는지 확인하지 않는다. 이 요청은 사용자가 두 Feature를 하나로 합치라고 명시한 예외이며, 대체 Spec/Plan/Tasks/Decisions와 모든 미디어 산출물은 먼저 W2TPJTYZ2Y4P commit `4a82a85`에 보존했다. 이 근거를 확인하고 중복 seed 등록만 제거한다. validator/config/hook을 변경하지 않고 원래 미디어 git 이력도 통합 commit의 parent로 보존한다.
