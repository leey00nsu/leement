# Decisions Log

<!-- lee-spec-kit:workflow-sync sha256:8e2e4f6e6512c2bc23a15a559e48c88f3135a2e89caa09dedf39659406e94501 -->

## D001: 세 요청을 한 Feature로 진행 (2026-10-04)

- **Context**: 사용자가 다음 Feature에서 Motion 통일, NativeSelect 제거, 공개 설치 문서 갱신을 함께 요청했다.
- **Constraints**: lee-spec-kit의 spec_approve/implementation_approve/local_merge 승인을 구분한다. main은 base checkout으로 유지한다.
- **Options**: 요청별 별도 Feature 또는 하나의 Feature 내 순차 태스크.
- **Decision**: MMUKCQ7RXWEK 하나에서 조사·계약·구현·문서·소비자 검증을 추적한다.
- **Rationale**: registry dependency와 공개 설치 계약이 모션/선택 UI 변경에 함께 영향을 받는다.
- **Trace**: main이 clean인 상태에서 feature 등록 및 managed workspace prepare를 실행했다. 명세는 Review이며 구현은 시작하지 않았다.
- **Evidence**: git status --short --branch 결과 main...origin/main; workflow-stage MMUKCQ7RXWEK 결과 spec/spec_write 및 implementationAllowed=false.

## D002: Motion은 실행 수단, 토큰은 정본 (2026-10-04)

- **Context**: 현재 Motion, CSS module transition, theme keyframes, Tailwind animate/transition, tw-animate-css가 혼재한다.
- **Constraints**: tokens/theme의 프레임워크 독립성, source ownership, reduced motion과 기존 UI 동작을 유지한다.
- **Options**: CSS 효과를 일부 유지하거나 시각 애니메이션을 Motion으로 통일한다.
- **Decision**: hover/focus 등 짧은 전환도 조사/전환 범위다. 정적 CSS는 유지하고 시간에 따른 시각 보간을 Motion이 맡는다. 라이브러리 내부 효과도 조사하며 노출되는 비-Motion 애니메이션을 조용히 예외로 남기지 않는다.
- **Rationale**: 사용자는 모든 애니메이션의 실행 방식 통일을 요청했다. 실행기를 바꾸는 것이 디자인 값을 바꾸는 이유는 아니다.
- **Trace**: 아래 1차 조사와 Motion 공식 연동 문서를 확인했다. 설치 버전은 motion 13.1.0이다. 실제 API/브라우저 동작은 승인 뒤 구현 시 검증한다.
- **Evidence**:
  - 조사 명령: rg로 registry, packages/theme/build.mjs, apps/docs의 motion/react, animate-, animation, keyframes, transition, requestAnimationFrame, animate 호출을 검색했다.
  - [Motion React](https://motion.dev/docs/react-animation), [Base UI 연동](https://motion.dev/docs/base-ui), [Radix 연동](https://motion.dev/docs/radix), [Reduced motion](https://motion.dev/docs/react-use-reduced-motion)

### 1차 모션 조사

| 영역 | 확인한 현재 실행 | 전환/검증 대상 |
| --- | --- | --- |
| registry/lib/leement-motion.ts | CSS 변수 파싱, matchMedia/IntersectionObserver/visibility observer | 토큰 연동, 실시간 편집, pause/cleanup과 Motion 실행의 일관성 |
| RevealContent | Motion useAnimate/useInView | 기존 Motion도 공통 규칙 검증 |
| TextReveal, RotatingContent, MediaReveal | CSS module keyframe/transition | 텍스트 stagger, 슬롯 전환, media readiness |
| Collapsible, Accordion | Base UI 자연 높이 + CSS module transition | 자연 높이, 빠른 재토글, focus/inert, ref/render |
| Skeleton, BrandGradientText, BrandAction, PageSkeleton | theme keyframes/Tailwind pulse | 중립/브랜드 반복, token cycle, paused/lifecycle |
| Dialog, Tooltip, AlertDialog, Popover, DropdownMenu, Select, Sheet | animate-in/out utility 또는 opacity transition | portal 종료/재열림, focus 복귀, 중첩과 배치 |
| Button/loading, Spinner 8종, Status, Progress, Toaster loading icon | Tailwind spin/pulse | 반복·disabled/loading·reduced motion |
| Marquee | inline style keyframes와 animation-play-state | 끊김 없는 이동, fade/mask, hover/외부 pause |
| AvatarStack, Tree, Switch, Tabs, ImageZoom, Slider | 위치/회전/색상/opacity/box-shadow transition | 상태·hover·keyboard와 기존 composition |
| Input, Textarea, InputGroup, Checkbox, Toggle, Breadcrumb, ResourceRowLink, BentoGrid | 색상·경계·그림자·이동 transition | 디자인 토큰, 의미와 ref 유지 |
| Docs 탐색/검색/gallery/workbench/editor/home/Motion preview | Tailwind transition, 직접 transitionDuration | 사이트 전체 편집과 미리보기 동기화 |
| packages/theme/build.mjs, foundation-preview.ts | 브랜드 keyframes와 기본 transition 변수/alias | theme 독립성, 정적 styling, CSS export 이관 |
| Sonner/Recharts 등 외부 엔진 | 내부 효과는 문자열 검색만으로 확정할 수 없음 | 실제 설정/렌더를 조사하고 필요 효과를 Motion으로 소유 |

이 목록은 1차 조사다. 구현 계획에서 tracked source와 라이브러리 효과를 재확인하고 모든 항목의 처리/검증 결과를 추적한다. 미디어 재생 및 데이터 갱신 타이머는 시각 보간과 구분한다.

## D003: NativeSelect와 보이는 native 선택 UI를 Select로 통일 (2026-10-04)

- **Context**: NativeSelect는 registry item/route/예제 외에도 Field와 제품 규칙에 연결되어 있다. 다른 보이는 native select도 존재한다.
- **Constraints**: Select의 group label, form value, name, disabled, Field 연결과 접근성을 유지한다. 이미 설치된 사용자 source는 자동 변경하지 않는다.
- **Options**: NativeSelect export만 삭제하거나 내부 사용과 예제/문서까지 이관한다.
- **Decision**: registry/ui/native-select.tsx와 배포/문서 노출을 제거하고 Field, ColorPicker, CodeBlock, Foundations, chart-series, collapsible-controlled, filter-toolbar 등의 선택 UI를 기존 Select로 이관한다.
- **Rationale**: 하나의 공통 UI라는 요청을 실제 화면/예제에서도 충족한다.
- **Trace**: rg로 NativeSelect, native-select, HTML select를 검색했다. PRD-FR-014와 디자인 규칙도 NativeSelect를 현행 선택으로 권장하므로 승인 후 같이 수정한다.
- **Evidence**: registry/ui/core-form.test.tsx, registry/ui/color-picker.tsx, registry/ui/code-block.tsx, apps/docs/components/foundation-editor.tsx, apps/docs/examples/field-fieldset.tsx, apps/docs/lib/example-catalog.ts, registry.json.
- **Consequences**: 신규 설치에서 NativeSelect는 제공하지 않는다. 기존 소비자는 Select로 수동 이관하며 숨겨진 form input 같은 접근성/폼 구현까지 제거하지 않는다.

## D004: 공개 설치 설명과 문서 범위 (2026-10-04)

- **Context**: README는 .tgz와 localhost가 기본이며 Getting Started에는 YOUR_HOST가 남아 있다. 공개 npm 패키지와 registry는 이미 응답한다.
- **Constraints**: 사용자는 공개 설치 문서와 관련 모션 문서의 갱신을 요청했다. 완료된 Feature SDD는 당시 이력이다. 공개 배포 전 코드와 현재 공개 artifact를 구분한다.
- **Options**: 문서 사이트만 갱신하거나 공개 설치 entrypoint의 관련 기존 설명을 함께 갱신한다.
- **Decision**: Getting Started, Foundations/각 영향 항목/Adoption/Changelog, PRD/design-system과 README의 공개 설치·모션·관련 사실을 갱신한다. 과거 Feature 이력은 재작성하지 않는다. README 전체 개편이나 구현 로그 추가는 하지 않는다.
- **Rationale**: 저장소 공개 설치 안내도 이번에 요청한 문서 범위에 속한다. 현행 가이드끼리 서로 다른 설치법을 안내하면 안 된다.
- **Trace**:
  - pnpm view @leement/theme version --json 결과 0.1.0.
  - curl -fsS https://leement.leey00nsu.com/r/button.json 성공; name=button, dependency는 Radix Slot/CVA, registry dependency=@leement/utils.
  - 현재 registry.json은 UI 79 / Pattern 15 / Block 8 / helper 3. README는 UI 64 / Pattern 13이라 관련 사실 갱신이 필요하다. NativeSelect 제거 후 수치는 다시 산출한다.
  - 공개 응답은 게시 상태 확인이며 새 Motion 구현 설치 성공 증거는 아니다. 후속 계획에서 현재 공개 artifact와 변경 artifact를 각각 소비자 환경에서 검증한다.
- **Evidence**: README.md의 프로젝트에 설치 절차; apps/docs/app/getting-started/page.tsx; docs/prd/leement-prd.md 공통 모션과 PRD-FR-014; 공개 호스트 응답 및 pnpm view 실행 결과.

## D005: 승인과 공통 기반 구현 (2026-10-04)

- **Context**: 사용자가 명세 승인 A를 응답했다. Plan/task 승인은 설정상 자동 단계다.
- **Decision**: 승인된 6태스크를 순차 진행한다. 첫 태스크는 토큰 변환·요소 범위 Motion ref·registry dependency를 구현했다.
- **Trace**: 기존 main의 공통 문서 상태를 바탕으로 계획했고 sharedDocumentationWarnings는 완료 Feature들의 같은 문서 변경 목록으로 확인했다. runtime/기존 선택 규칙의 나머지 변경은 후속 태스크에서 처리한다.
- **Evidence**: tasks.md 검사 기록; motion.test.tsx 9개 PASS; docs typecheck PASS.

## D006: 반복과 브랜드 효과의 실행 이전 (2026-10-04)

- **Decision**: theme keyframes를 제거하고 registry source의 Motion loop로 실행한다. spin/pulse/marquee cycle을 token에 추가해 하드코딩 반복 시간을 줄였다. tokens와 theme은 0.2.0으로 준비한다. 원격 게시하지 않았다.
- **Trace**: pause/play는 같은 Motion control을 유지하고 reduced/unmount 정리에 원래 정적 style을 복원한다. brand utility는 정적 표면을 유지한다.
- **Evidence**: tasks.md T-02 검증, motion/player 등 32 tests와 theme 4 tests PASS.

## D007: primitive 상태와 Motion의 연결 (2026-10-04)

- **Decision**: Base UI 상태 attribute에서 Motion presence와 높이를 시작하고 Radix는 controlled/uncontrolled root를 보존해 AnimatePresence 종료를 연결한다. native HTML onDrag 등은 Motion gesture와 이름이 충돌하므로 nativeProps에 전달해 기존 DOM handler를 보존한다.
- **Trace**: Sonner의 외부 CSS 효과는 scoped transition:none/animation:none으로 비활성화하며 Motion opacity가 표현을 소유한다. 이것은 시각 보간하는 CSS transition의 잔류가 아닌 외부 실행기 차단이다. Recharts 자체 보간은 비활성화하고 ChartContainer 진입을 Motion으로 표현한다.
- **Evidence**: tasks.md T-03 검사, typecheck/lint 및 기존 35 동작 검사 PASS. 실제 animation/focus/SSR frame 검증은 T-06에서 수행한다.

## D008: 공개 문서 및 dependency closure

- 공개 namespace는 https://leement.leey00nsu.com/r/{name}.json이다. README/Getting Started는 공개 npm 설치를 기본으로 한다.
- 전체 item 페이지에 Motion 실행 규칙을 연결했고 Changelog에 0.2.0 미게시 및 Select/CSS-only 이관을 표시했다.
- registry source dependency 감사에서 VideoPlayer → Button 누락을 수정했다. 검증: tasks.md T-05.

## D009: 실제 브라우저에서 찾은 실행·조합 회귀 수정 (2026-10-04)

- CSS 빌드가 `.4s`처럼 축약한 시간을 0으로 읽던 파서를 수정했다. Foundations 이동 샘플의 calc 목표값은 실제 pixel 값으로 계산해 속도 편집을 관찰 가능하게 했다.
- Base UI panel은 CSS animation 유무로 종료를 판단하므로 keepMounted와 Motion 완료를 연결했다. Popover/Menu/Sheet는 공개 preventUnmountOnClose/actionsRef로 Motion 종료 전에 사라지지 않게 하고 Select도 완료 때 unmount action을 연결한다. Submenu는 자체 종료 context를 사용한다. Sheet만 side 이동을 적용해 다른 positioner의 배치를 보존한다.
- Radix Content에 native HTML event와 children을 명시적으로 전달했다. AlertDialog의 이전 1.1.15 내부 Presence/Slot 조합에서 종료 후 잠금이 남아 같은 Radix 계열인 1.1.23으로 맞췄다.
- Radix Dialog/AlertDialog 안의 Base UI popup portal을 containing focus scope에 배치하는 작은 popup-scope source를 registry dependency로 제공한다. 중첩 Escape는 안쪽 popup부터 닫고 바깥 Dialog와 focus를 보존한다. 필수 전역 provider는 없다.
- 반복 cleanup은 애니메이션이 소유한 style만 복원한다. Spinner stagger와 neutral Skeleton cycle, Marquee 두 복제 그룹의 간격을 정리했다. 전역 CSS smooth scrolling을 제거했다.
- 외부 실행도 조사했다. ReactCrop은 라이브러리의 ReactCrop--no-animate class로 경계를 정적인 점선으로 표시한다. Sandpack의 장식용 cube/fade와 editor CSS 전환은 item에 한정한 animation:none/transition:none으로 차단한다. 실행·상태·재시도와 crop 조작은 유지한다. 이는 CSS 시각 보간의 잔류가 아닌 외부 효과 차단이다. 관련 item API와 디자인 규칙을 동기화했다.
- 전체 테스트의 동시 worker 증가로 재현한 timeout을 줄이기 위해 Vitest maxWorkers=2를 설정했다. assertion이나 timeout 기준을 완화하지 않았다.
- 실제 공개 npm/registry(0.1.0)와 미게시 feature theme/registry(0.2.0)를 별도 임시 consumer에 설치했다. 기존 leement-test와 두 원본 프로젝트는 수정하지 않았다. 원격 게시·push·배포는 실행하지 않았다.

## D010: 사용자 보고에 따른 연속 상태 전환 회귀 보완 (2026-10-04)

- 사용자가 왼쪽 탐색 항목 클릭 뒤 배경색이 남는 문제를 보고하고 수정을 요청했다. 구현 승인 대신 변경 요청으로 처리하고 같은 Feature에 T-07을 추가한다. T-06의 검증은 당시 범위의 기록으로 유지한다.
- 실제 브라우저에서 aria-current는 Tree 한 항목뿐인데 Snippet/QR Code에 인라인 background-color가 남은 것을 재현했다. 공통 useStyleMotion의 임시 스타일과 소비자 원본 스타일 소유를 분리하고 완료·중단·재시작·ref cleanup을 검증한다.
- 기존 motion 테스트와 실제 브라우저에 연속 탐색·급속 상태 변경·소비자 inline style 관찰을 보완한다. 이 회귀 수정으로 새 Feature, es-toolkit 도입, 게시·병합은 진행하지 않는다.

- **수정**: 일반 CSS 상태 전환은 Motion 공식 `motion/mini` animate로 실행한다. 이전 hybrid animate의 element renderer가 보유하는 style 값과 예약 render를 피하고, 완료/중단/cleanup에는 cancel 후 소비자 원본 inline 값과 !important 우선순위를 복원한다. 애니메이션 도중 소비자가 바꾼 style은 MutationObserver에서 원본으로 갱신하되 Motion의 종료 값은 채택하지 않는다. 반복/presence의 hybrid Motion은 유지한다. 추가 npm 의존은 없다.
- **근거**: [Motion animate 공식 API](https://motion.dev/docs/animate)는 mini가 HTML/SVG style을 실행하며 stop은 값을 인라인 style로 commit하고 cancel은 애니메이션을 취소한다고 설명한다. 설치된 Motion source의 NativeAnimation 및 element renderer 구현을 함께 확인했다.

- **검증**: T-07 및 artifacts/style-transition-verification.json. light/dark 연속 탐색 36회, state 변경과 실제 보간, 소비자 inline/priority, reduced/unmount, Switch/Tabs/Slider를 관찰했다. 필수 gate와 새 helper 소비자 설치·빌드를 통과했다. 구현 승인은 재요청하며 별도 병합 승인은 유지한다.

## D011: CSS Module 제거와 Tailwind source 통합 (2026-10-04)

- 사용자가 CSS Module 도입 이유를 확인한 뒤 남은 Module을 모두 수정하는 태스크를 요청했다. 같은 Motion Feature에 T-08을 추가한다.
- 7개 Module은 이전 CSS 모션 구현의 잔여 정적 규칙이다. layout/data-state/focus/reduced/no-JS를 컴포넌트 Tailwind source에 통합하고 Module import·파일·registry metadata를 제거한다. fallback을 생략하거나 소비자에게 별도 CSS import를 요구하지 않는다.
- RotatingContent의 Motion ref가 관찰하는 transform/filter/opacity와 panel 높이, 미디어 layer 의미, 파형 no-JS fallback을 보존한다. CSS 애니메이션을 되살리지 않는다.
- 디자인 문서 UPDATE를 T-08 Docs에 연결한다. PRD·public API·공개 설치 절차·README 추가 영향은 NONE이며 기존 이력 SDD는 재작성하지 않는다. 구현/병합 승인은 구분하고 원격 게시하지 않는다.
