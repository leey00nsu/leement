# Decisions Log

<!-- lee-spec-kit:workflow-sync sha256:42e6aea3fbf9fd1728a39e7a1b1c4ec7ff047969f4bdbc08d3edf59bc1e69343 -->

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
