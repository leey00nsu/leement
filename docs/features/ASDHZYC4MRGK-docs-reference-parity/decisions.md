# Decisions Log

## D001: 예제·API 중심 문서와 고정 upstream 기준 (2026-10-05)

- **Context**: 사용자가 반복 문단 제거, shadcn Base 예제/API 전체 대응, Kibo Blocks 전체 대응, Charts 탐색을 새 Feature로 요청했다.
- **Constraints**: 디자인 정본은 Leement token/rule이며 source ownership·Motion·Preview/Foundation 계약을 유지한다. spec 승인 전 구현하지 않는다.
- **Options**: 문서 템플릿만 정리 / 현재 컴포넌트 일부만 보완 / 고정된 공개 기준의 모든 사용 사례·API·Blocks·Charts를 실제 구현까지 보완.
- **Decision**: 세 번째 범위를 명세 승인 대상으로 준비한다. Overview/Preview → Installation → Usage → Examples → API Reference로 문서를 정리한다. 고유 접근성·사용 규칙은 해당 예제/API에 남긴다.
- **Rationale**: 기존 문서 설명은 반복적이고 예제와 API는 실제로 부족하다. 항목 수가 아닌 사용 가능한 source와 사용 사례를 완료 기준으로 삼는다.
- **Trace**:
  - `item-page.tsx`는 모든 항목에 9개 문단과 같은 목차를 출력하고 API는 단일 문장이다.
  - shadcn Base 문서 64개를 고정 commit에서 모두 읽어 Preview ID/headings/API 표/공식 primitive 링크를 수집했다. NativeSelect 제외 63개는 Preview 참조 456건, 고유 ID 453개다. inline code와 Sidebar/DataTable의 상세 조합은 별도 대응 대상이므로 이 숫자만으로 완료를 판정하지 않는다.
  - Kibo의 Blocks 문서 28개는 각각 공개 `apps/docs/examples/<name>.tsx`가 존재한다. 공개 카탈로그에는 각 페이지 하나의 대표 예제가 있다. premium Shadcnblocks 광고 링크는 범위에서 제외한다.
  - shadcn Charts registry의 70개 source를 7개 분류로 고정했다. upstream commit을 실제 commits/main 응답과 확인했다.
- **Evidence**:
  - **Test/Log**: [고정 기준 목록과 항목별 출처](./artifacts/reference-baseline.json).
  - **Code**: [문서 템플릿](../../../apps/docs/components/item-page.tsx), [현재 탐색](../../../apps/docs/lib/docs.ts).
- **Consequences**: 기존 컴포넌트의 API/parts 보완과 신규 컴포넌트·block·chart recipe가 필요한 큰 Feature다. 승인 후 순차 task로 나누며 일부 목록을 나중 작업으로 미뤄 전체 대응을 완료했다고 보고하지 않는다.

## D002: NativeSelect 제외와 기존 기능 유지 (2026-10-05)

- **Context**: 이번 요청은 shadcn 100% 대응이지만 사용자는 이전에 NativeSelect 제거·Select 통일을 명시했다.
- **Constraints**: 이전 명시적 제거 지시를 조용히 뒤집지 않는다.
- **Options**: NativeSelect 재도입 / 미지원 사실 숨김 / 제외를 명시하고 나머지 전체 대응.
- **Decision**: NativeSelect 한 페이지·5개 예제를 제외한다. 다른 예제의 보이는 native select는 Select/Combobox로 표현한다. API와 사용법은 실제 Leement 계약으로 설명한다.
- **Rationale**: 공통 UI를 유지하면서 기존 사용자 결정을 지킬 수 있다.
- **Trace**: PRD의 ‘선택과 공개 설치’에 NativeSelect/browser select 예제를 제공하지 않는다는 계약이 존재한다. 제외는 baseline/spec에 명시되어 승인 시 검토 가능하다. 사용자 변경 지시가 오면 이 결정과 범위 모두 갱신한다.
- **Evidence**:
  - **Test/Log**: [baseline의 scopeExceptions](./artifacts/reference-baseline.json).
  - **PRD**: [선택과 공개 설치 및 FR-015](../../prd/leement-prd.md).
- **Consequences**: ‘NativeSelect 제외 기준 전체 대응’으로 표현하며 제외 없는 shadcn 100% 호환을 주장하지 않는다. 기존 Animations/Patterns/Blocks, Preview handle/px/Replay, Foundation 편집을 유지한다.

## D003: Base UI와 실제 source의 차이 (2026-10-05)

- **Context**: 사용자는 Leement를 shadcn Base UI 기반으로 이해하지만 기존 source 일부는 Radix다.
- **Constraints**: primitive 링크와 public API는 실제 구현 및 설치 버전에 맞아야 한다.
- **Options**: Base UI 링크만 추가 / 실제 기반을 구분하고 대응에 필요한 primitive/API를 함께 보완.
- **Decision**: 실제 기반을 확인하고 필요한 source·타입·동작·예제를 보완한다. Base UI primitive는 Base UI 공식 API로 연결하고, 별도 라이브러리 기반 기능은 해당 공식 API로 연결한다.
- **Rationale**: Avatar Badge/Group/size처럼 실제 export/prop이 없는 기능을 문서만으로 지원할 수 없다.
- **Trace**: `registry/ui/avatar.tsx`는 `@radix-ui/react-avatar`를 쓰며 Avatar/Image/Fallback만 export한다. upstream Base Avatar에는 Badge/Group/GroupCount 및 size API가 있다. 현재 Base UI 1.7.0과 live 공식 문서 버전의 차이도 구현 단계에서 확인한다.
- **Evidence**:
  - **Code**: [Avatar source](../../../registry/ui/avatar.tsx).
  - **Test/Log**: [Avatar 기준 예제·출처](./artifacts/reference-baseline.json).
- **Consequences**: Base UI로 이미 완전히 통일됐다고 설명하지 않는다. 변경하는 API의 소비자 영향과 이전 안내를 같은 task에서 검증한다.

## D004: README 보호와 후속 문서 동기화 (2026-10-05)

- **Context**: 카탈로그가 늘어나면 기존 README의 제공 목록도 새 범위와 차이가 생긴다.
- **Constraints**: 사용자는 이번 Feature에서 README 수정을 요청하지 않았고 AGENTS는 명시적 요청 없는 README 수정을 금지한다.
- **Decision**: README는 수정하지 않는다. PRD의 FR-014 범위와 block 목표를 새 의도에 맞춰 갱신하고 FR-015/016/017을 정의했다. `docs/designs/design-system.md`의 기존 제공 개수·upstream 대응·문서 예제 규칙은 승인 후 task Docs에서 갱신한다.
- **Rationale**: 요구사항은 PRD, 이번 범위는 Feature SDD, 실행 계약은 코드, 장기 디자인 규칙은 design-system 문서가 소유한다.
- **Trace**: README의 제공 목록과 `docs/designs/design-system.md`의 과거 UI79/Pattern15/Block8 및 예제 규칙을 확인했다. README는 신규 항목 추가 시 불완전해질 수 있으나 수정 권한이 없어 이번 scope에서 보류한다. 나머지 curated 영향은 Plan에서 명시적으로 평가하고 task에 연결한다.
- **Evidence**:
  - **PRD**: [갱신한 제품 요구사항](../../prd/leement-prd.md).
  - **Code/Docs**: [README](../../../README.md), [디자인 규칙](../../designs/design-system.md).

<!-- lee-spec-kit:workflow-sync sha256:164ea0727cf57269d025e841d83d3c093d1b7d6bc0a5bb96f969a5ba3ad32859 -->

## D005: 명세 승인·자동 계획 진행과 shared docs 검토 (2026-10-05)

- **Decision**: 사용자 `A`로 spec를 Approved로 승격했다. 현재 config에서 Plan/Tasks 승인과 agentReview/agentExecution이 disabled이므로 별도 승인이나 위임 없이 계획과 13개 순차 task를 준비했다.
- **Trace**: workflow-stage는 spec_approve → plan_write → plan_approve(approvalRequired=false) → tasks_write를 반환했다. 전체 source ownership·NativeSelect 제외·Motion·Preview 계약을 Plan/Verification Contract에 연결했다. main의 최신 통합 tip을 base로 PRD/design-system/THIRD_PARTY_NOTICES를 읽었고, historical Feature sharedDocumentationWarnings와 현재 요구사항은 충돌하지 않는다. 이전 Feature 문서를 수정하지 않는다.
- **Evidence**: [승인 명세](./spec.md), [계획/검증 계약](./plan.md), [태스크](./tasks.md). 사용자 명세 승인 응답 `A` (2026-10-05).

## D006: 첫 문서 task 검증 (2026-10-05)

- **Decision**: 공통 ItemPage에서 반복 9문단/목차를 제거했다. Usage는 소비자 alias 코드와 필요한 접근성 설명을 제공하고 API Reference는 public part별 prop/type/default/required/description 및 공식 링크를 표시한다. Button/Input/Card의 실제 API를 먼저 명시했다. 나머지 public parts/API 상세는 후속 task 02~07의 구현과 함께 채운다.
- **Trace**: pnpm typecheck(5 tasks), docs focused ESLint, git diff --check PASS. 브라우저 세 페이지에서 제거한 heading이 없고 새 목차·API 표가 나타남을 확인했다. Preview main에 iframe 하나이며 inline 복사본이 없다. Arrow 16px, Home 240px, End 833px 및 mouse drag 683/773px가 실제 iframe 폭·px와 맞는다. request event counting은 Aside transport 한계로 미검증이며 단일 runtime DOM 관찰과 구분한다. 기존 lazy Examples는 viewport 진입 후 로드된다.
- **Evidence**: Aside read-only session `0Br37unKWM3B7lyW`의 최종 관찰 결과. [ItemPage](../../../apps/docs/components/item-page.tsx), [API metadata](../../../apps/docs/lib/api-reference.ts), task 01 검증 기록.

## D007: 신규 콘텐츠·입력 source 채택 (2026-10-05)

- **Context/Constraints**: task 02는 Attachment/Bubble/Direction/InputOTP/Item/Marker의 실제 parts와 composition을 제공한다. 고정 shadcn Base source를 검토하고 Leement semantic/spacing/Motion으로 적응한다. CSS module·upstream 전용 cn stylesheet/Next import는 설치 source에 남기지 않는다.
- **Trace**: pinned Base source와 nova style의 정적 @apply 규칙을 읽었다. temporary 변환으로 실제 Tailwind class를 source에 펼치며 dynamic 애니메이션은 Motion helper로 바꾼다. OTP는 upstream과 같은 input-otp 1.4.2로 native single-field/paste/form behavior를 유지한다. third-party license를 보존한다.
- **Evidence**: [고정 기준](./artifacts/reference-baseline.json), [계획](./plan.md), [notice](../../../THIRD_PARTY_NOTICES.md). 6개 source의 strict typecheck/focused ESLint, registry build, controlled/disabled OTP·native FormData·polymorphic ref·keyboard 등 5 integration tests와 registry-source 5 tests PASS. Aside session bJX49gOxpzdgNACK에서 6개 iframe/API 및 파일 삭제/반응 toggle/방향 변경/OTP 입력 PASS. 설치 consumer는 `/tmp/leement-reference-consumer`에서 namespace 6개 및 docs 조합용 Select/Label 설치 후 strict/Vite build PASS. Vite는 일반 use-client directive 경고를 표시하지만 설치 source 타입/빌드에는 실패가 없다. Direction API의 실제 optional/default ltr를 설치된 Base UI 타입으로 확인했다.

## D008 — 탐색/overlay 7개 source와 검증

- **Decision**: 고정 shadcn source의 Base UI ContextMenu/Drawer/Menubar/NavigationMenu/ScrollArea, Embla layout API와 resizable-panels v4를 Leement source로 제공한다. 실제 설치된 public 타입과 wrapper 기본값으로 API 표를 작성하며 upstream 전용 cn stylesheet와 IconPlaceholder를 제거한다.
- **Trace**: Carousel의 Embla duration을 0으로 고정하고 programmatic scrollTo/Next/Prev를 Motion으로 연결했다. 방향·RTL에 맞는 키보드 조작과 editable target 예외를 유지한다. Drawer는 Base swipe 변수를 유지하고 Motion 전환 중 포인터 움직임을 직접 반영한다. Root/submenu별 닫힘 callback을 분리했다. NavigationMenu는 actionsRef로 manual unmount를 선택한다. ContextMenu의 설치된 타입에 빠진 optional preventUnmountOnClose는 runtime feature detection으로 확인하고, Shift+F10/ContextMenu key에서 primitive contextmenu event로 연결한다. ScrollArea는 overflow가 있을 때만 viewport를 Tab 순서에 넣는 primitive 정책을 유지한다.
- **Evidence**: strict typecheck/registry build/focused lint, 기존 Motion/content 15 tests와 신규 keyboard/controlled 6 tests PASS. 기존 overlay/registry-source를 함께 실행한 27 tests PASS. 독립 consumer에서 7개 namespace와 예제 strict/Vite build PASS. 7개 browser 검증 진행 중. NavigationMenu 실제 링크로 iframe이 이동한 뒤 Replay가 메시지만 보내 복구하지 못하는 기존 문제를 확인해, 이동했을 때만 동일 iframe src를 원래 preview로 복구하도록 수정했다. 정상 preview의 Replay는 기존 single-runtime 메시지 방식을 유지한다. Aside 0fGXgi867CJg6d6d에서 7개 실행/API·키보드·pointer·scroll 조작 확인. 발견한 240px Carousel/ContextMenu/NavigationMenu 잘림을 수정했고 직접 Aside REPL에서 viewport/scrollWidth 240/240, arrows 20..56/184..220, context trigger 20..220, nav popup link 17..223 및 전체 description 확인. 실제 링크 이동 후 Replay가 동일 iframe을 preview route로 복구하는 것도 확인했다. className(state) callback을 styled primitive에 전달하여 public type와 동작을 일치시켰다.

## D009 — Sidebar·메시지·설문 composition

- **Decision**: Sidebar는 Base useRender/native composition, Message는 native layout, MessageScroller/Questionnaire는 고정 shadcn source와 MIT @shadcn/react 0.3.1 primitive로 제공한다. transport·AI SDK·저장은 consumer 책임이다. Sidebar의 폭/위치 변화와 Questionnaire control 상태는 Motion helper에 연결한다.
- **Trace**: MessageScroller의 native smooth 명령을 instant 목표 계산 + Motion 보간으로 바꾸고, wheel/touch/scroll key/pointer 입력은 보간을 취소한다. primitive의 anchor/prepend/reader-intent 상태는 보존한다. 문서 Sidebar는 bounded shell로 만들어 viewport-height iframe의 높이 피드백을 피한다. 현재 Tooltip의 Radix asChild composition을 보존하며 Base 대응 보완은 task 06에서 진행한다. 새 hook alias와 registry:hook dependency를 구성했다. API 표는 설치된 0.3.1 타입과 실제 wrapper 기본값으로 작성했다.
- **Evidence**: strict docs typecheck, focused ESLint, registry build PASS. 신규 controlled Sidebar/링크/shortcut·Message semantics·Questionnaire required/previous/FormData·MessageScroller region/log/command/inactive-button 4 integration tests 및 기존 Motion 10 tests PASS. 브라우저/independent consumer 검증은 아래 기록처럼 완료했다. JSDOM에 없는 scrollTo는 테스트 환경에 native instant mock으로 제공했으며 실제 scroll geometry 검증과 구분한다.

- **Browser findings/resolution**: 실제 초기 하단 위치(802px)를 확인한 뒤 Home→0px→메시지 추가에서 raw primitive가 다시 하단으로 따라가는 race를 재현했다. 사용자 입력 시 provider autoScroll을 잠시 끄는 gate를 추가하고 직접 하단으로 내려가거나 end command에서 다시 켠다. 후속 실브라우저에서 802→0→추가 후0 유지→jump 892/892 확인. 위치 계산·anchor/prepend 복원은 그대로 primitive 책임이며 Motion은 보간만 담당한다. 동일 동작의 geometry-aware integration test도 추가했다. 240px Questionnaire 중간 단계 버튼 겹침은 flex-wrap으로 바꾸어 Previous 20..109 / Skip158..220 첫 줄, Next156..220 다음 줄로 확인했다. Sidebar desktop collapse 및 mobile240 dialog/Escape, 각 canonical source preview와 scrollWidth240/240 확인. 접힌 Sidebar 예제에도 명시적인 navigation aria-label을 제공한다.

## D010 — 기존 Base 콘텐츠·입력 계약 보완

- **Decision**: Button/Input/Avatar를 실제 Base UI primitive와 연결하며 Leement의 기존 control 높이와 semantic 색상을 유지한다. Button primary 기본값과 asChild/loading, Combobox options+label shorthand, Base Field의 validation/FieldControl은 보존한다. 신규 render/link/icon-xs/icon-lg, Avatar Badge/Group/Count/size, Field Content/Title/Separator/orientation/errors, InputGroup align/Text, ToggleGroup variant/size/spacing 및 ButtonGroup Text/Separator/class recipe를 제공한다.
- **Trace**: 고정 source의 nova @apply를 source Tailwind로 펼쳤고 animation class는 제거했다. InputGroup·Radio·Combobox control 상태는 기존 Motion helper로 전달한다. styled Base parts의 className(state)을 보존하고 icon-only Combobox trigger/clear에 이름을 제공한다. Spinner className 크기가 실제 내부 glyph에 적용되도록 수정한다. Spinner는 Leement의 기존 status span/다중 variant를 유지하며 shadcn SVG root와의 차이를 API note에 명시한다. Base 의존성은 검증한 1.7.0으로 registry graph에서 고정했다.
- **Evidence**: 신규 API에 대한 8개 고정 Base 예제를 연결했고, 실제 설치 타입에서 20개 기본 component의 public part/props/default/event를 추출·검토해 API 표를 작성했다. 기존 core/content/navigation/message 통합 35 tests PASS. 신규 composition·error·multiple/clear·chip removal 5 integration tests PASS. 독립 consumer에 11개 관련 registry item과 8개 Base 예제를 설치·복사 후 strict/Vite build PASS. 실제 browser에서 Avatar sizes/InputGroup block-end/Combobox multiple-clear 실행, Next.js+Astro 선택→Escape→Next.js 삭제 후 Astro 유지 확인. 삭제 action의 이름 누락을 발견해 항목별 Remove label을 추가했다. 나머지 고정 예제 전체 연결은 task 07이다.

## D011 — 기존 overlay·날짜·알림 API 보완

- **Decision**: Dialog/AlertDialog/Tooltip/HoverCard를 Base UI로 옮기고 Motion exit retention·modal subtree portal을 연결한다. legacy asChild/delay 편의 API는 유지하고 AlertDialog Media/size, DialogFooter close, PopoverHeader 및 Sheet Portal/Overlay를 공개한다. 상태 className callback도 보존한다.
- **Trace**: 설치된 Base UI 1.7 Tooltip popup에서 tooltip role/description 연결이 생성되지 않는 것을 통합 테스트로 발견했다. Leement에서 popup id와 aria-describedby를 연결하며 keyboard focus와 실제 role을 검증한다. Calendar는 고정 upstream과 맞는 DayPicker 9.14.0 API를 추가하고 기존 schedule/value/range API를 명확히 구분한다. 보이는 caption select는 Leement Select다. native CSS month animation을 끄고 animate 요청은 Motion fade로 처리한다. 한국어 브라우저와 서버 간 default locale 차이가 hydration 문제를 만들지 않도록 기본 dropdown formatter를 en-US로 고정한다.
- **Trace**: Toast는 Base UI compound parts/provider/manager를 제공하며 기존 간단 호출은 동일 manager의 편의 API로 연결한다. Sonner 전용 전체 옵션과의 차이를 API note에 설명한다. Alert·Empty compound source도 기존 status-notice/empty-state item에 추가한다. Slider는 thumb별 Motion ref를 만들고 드래그 위치를 즉시 반영한다.
- **Evidence**: 신규 DayPicker multiple/disabled·caption Select·Alert cancel/loading·Toast promise/update/action·Breadcrumb render/ref 5 tests와 기존 overlay/date/table/controls를 합친 25 tests PASS. strict typecheck PASS. public 25개 API 그룹은 실제 설치 타입과 source로 작성했다. 브라우저/consumer 검증 진행 중이며, 첫 caption browser 선택은 브라우저 locale의 옵션명이 2월이라 영문 Feb locator가 실패한 관찰을 성공으로 기록하지 않는다.

- **Final verification**: 관련 overlay/date/table/controls/Motion/navigation 47 tests, registry-source + 새 composition 10 tests PASS. focused lint/strict typecheck/diff/registry build PASS. 독립 consumer의 두 번째 build에서 누락된 예제 외부 date-fns와 Popover 설치를 확인해 Calendar registry에 date-fns를 선언하고 필요한 Popover를 설치한 후 strict/Vite build PASS. registry Calendar Motion dependency도 직접 선언했다. 브라우저에서 Dialog Share→Escape, caption Feb 선택→February grid, Toast Success→알림 focus→Close→제거 확인. Base Toast가 focus 전 action을 aria-hidden으로 두는 정책은 유지한다. canonical Calendar width240/내부shell200/scrollWidth198 확인; 일정 grid만 자체 가로 스크롤한다. Toast는 실제 Base API를 두 프로젝트에서 검증하기 전 experimental로 표시한다. 후속 전체 예제 대응·light/dark/RTL/consumer 종합 확인은 task07/13이다.

## D012 — 전체 Base 예제와 실제 composition 검증

- **Decision**: 고정 기준 63개 문서의 456 Preview 참조를 453개의 실제 예제 source에 연결하고 inline Usage 330 code blocks를 제공한다. source 표시와 실행 파일은 동일하다. 긴 recipe는 접을 수 있는 Usage에 둔다. native Typography 예제는 불필요한 registry 명령을 표시하지 않는다.
- **Trace**: 모든 예제를 SSR로 실행하면서 기존 FieldLabel/Description이 FieldRoot 외부 composition에서 실패하는 것을 확인했다. Root 내부 Base 연결을 유지하고 외부 native label/description과 FieldSet 설명 연결을 보완했다. choice card 스타일도 semantic token으로 제공한다. DataTable ColumnHeader/Pagination/ViewOptions를 실제 TanStack v8 API로 공개하며 upstream v9 예제·recipe를 v8로 적응했다. Sidebar 모바일 폭은 portal에 context로 전달한다.
- **Boundaries**: RTL 언어/provider와 사용된 demo helper는 복사 source에 포함한다. AI SDK/Streamdown 등은 필요한 예제에서 별도 설치 명령을 표시한다. AI 예제는 로컬 transport이며 서버나 모델에 연결됐다고 설명하지 않는다. Questionnaire shortcut 예제의 NativeSelect를 Select로 교체했다. upstream CSS 애니메이션은 Motion/reduced-motion/token 규칙에 맞췄다.
- **Evidence**: [Base 대응 자료](./artifacts/base-reference-correspondence.json). strict typecheck/focused lint/registry build/diff PASS; 453 SSR + 17 focused tests, 470 tests PASS. 독립 strict React/Vite consumer에서 63개 direct registry 항목과 453 예제의 lazy module 빌드 PASS. 브라우저에서 RTL Select 그룹 라벨, table 필터·행 선택, 로컬 채팅 스트리밍 확인. Field choice 카드의 첫 추가 browser action은 이미 선택된 radio 클릭과 잘못된 geometry selector 때문에 실패했으며 성공 근거로 사용하지 않는다; native label association은 통합 테스트로 확인했다.
- **Consequences**: 추가 component parts도 설치 source에 포함되며 문서 전용 API로만 약속하지 않는다. 종합 light/dark/RTL/폭·모든 public Blocks/Charts/전체 build는 task 13에서 확인한다. README는 D004에 따라 변경하지 않는다.

- **Consumer refresh**: 최종 Field/Sidebar/DataTable source를 CLI로 재설치하고 실제 docs의 toConsumerExampleCode와 같은 상대경로 변환으로 453 source를 다시 복사했다. 잘못된 임시 복사 스크립트와 누락된 vite/client 타입 선언으로 발생한 첫 재검사 실패를 수정한 뒤 최종 독립 소비자 strict/lazy build를 확인했다. 프로젝트 실행 source의 결함으로 기록하지 않는다.
