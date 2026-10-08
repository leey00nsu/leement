# Decisions Log



## D001: 역할에 따른 공개 분류 통합 (2026-10-08)

- **Context**: 사용자가 Patterns 별도 분류에 의문을 제기하고 Components·Blocks로 재분류하는 다음 Feature 진행을 요청했다.
- **Constraints**: 기존 15개 기능과 Components 95개·Blocks 36개·Charts 70개를 보존한다. 최소 단위와 조합 여부만으로는 Sidebar·AudioPlayer 같은 기존 Components를 설명할 수 없다.
- **Options**: Patterns 유지, 모두 Blocks로 이동, 역할별로 두 분류에 분산.
- **Decision**: 단일 UI 기능 10개는 Components로, 페이지 구역·배치 5개는 Blocks로 이동한다.
- **Rationale**: 소비자가 찾는 기능과 화면 구역을 기준으로 탐색한다. PageSkeleton은 헤더와 목록의 페이지 배치라 Blocks로, StatePanel은 상태 표시 기능이라 Components로 분류한다.
- **Trace**:
  - 계획 시작: navigation·Showcase·상세 route·15개 source 및 registry 등록을 확인했다. 모든 Patterns의 registry 타입은 registry:component다.
  - 현재: Components105/Blocks41로 이전 완료. Charts70과 기존146 항목을 보존했고 T03 production 검증이 통과했다.
- **Evidence**:
  - **Commit**: [검토한 0.2.1 기준 revision](https://github.com/leey00nsu/leement/commit/4e40d20d167e717b8f86d32d86e7e252ef6648c7)
  - **Source**: [navigation](../../../apps/docs/lib/docs.ts), [registry](../../../registry.json), [PageSkeleton](../../../registry/patterns/page-skeleton.tsx), [StatePanel](../../../registry/patterns/state-panel.tsx)

## D002: 설치 경로 보존과 문서 주소 이전 (2026-10-08)

- **Context**: 설치 source는 사용자 프로젝트가 소유한다. 탐색 분류 변경이 import 오류나 파일 자동 이동을 요구해서는 안 된다.
- **Constraints**: 설치 이름·dependencies·target과 공개 props/export를 유지한다. 새 문서 주소는 실제 메뉴 분류와 일치해야 한다.
- **Options**: 문서와 설치 폴더를 함께 이동하며 shim 추가, 문서만 이전하고 설치 경로 보존.
- **Decision**: 문서를 새 분류 주소로 이전하고 기존 상세 15개 주소를 영구 리다이렉트한다. source 위치와 components/patterns 설치 target은 유지한다.
- **Rationale**: 이번 목적은 탐색과 분류 정리다. 폴더 이동과 wrapper 추가는 현재 요구에 필요하지 않고 사용자 source 관리 부담을 늘린다. import에 남는 patterns 경로는 독립 메뉴를 의미하지 않는다.
- **Trace**:
  - 계획 시작: registry target과 설치·복사 import를 확인했다. 기존 target을 유지하면 기존 consumer와 신규 설치에서 동일 source를 사용할 수 있다.
  - 현재: 이전 15개 route의 308·새 상세·Preview·설치 JSON/target·clipboard import 및 대표 anchor를 production에서 확인했다.
- **Evidence**:
  - **Commit**: [검토한 0.2.1 기준 revision](https://github.com/leey00nsu/leement/commit/4e40d20d167e717b8f86d32d86e7e252ef6648c7)
  - **Source**: [registry](../../../registry.json), [설치 문서](../../../apps/docs/app/getting-started/page.tsx)

## D003: 문서 영향과 README 보호 (2026-10-08)

- **Context**: PRD·디자인 시스템은 현재 Patterns 분류와 항목 수를 설명한다.
- **Constraints**: README 변경은 명시적 요청이 필요하다. 과거 릴리스와 완료 Feature는 역사 기록이다.
- **Decision**: 구현에서 PRD와 디자인 시스템의 현재 설명을 갱신하고 미게시 변경 이력을 기록한다. README와 기존 releases는 수정하지 않는다.
- **Trace**:
  - 확인 대상: docs/prd/leement-prd.md의 PRD-FR-005/012/015 및 현재 카탈로그 수, docs/designs/design-system.md의 공개 탐색·BrandLogo·Table/DatePicker 설명.
  - README.md의 기존 Patterns 카탈로그 표(113행), Design Language → Tokens → Theme → UI → Patterns → Blocks → Application 설명(121행), 소스 트리의 patterns 설명(147행)은 공개 분류 변경 후 설명 불일치가 된다. README 수정 요청이 없어 이번에 보류한다. 93행의 components/patterns import 경로는 설치 target을 유지하므로 여전히 유효하다.
  - 현재: 승인 Plan의 UPDATE 대상과 task Docs를 연결했고 PRD/design·미게시 변경 이력을 동기화했다. README와 과거 releases는 기준과 동일하다.
- **Evidence**:
  - **Commit**: [검토한 0.2.1 기준 revision](https://github.com/leey00nsu/leement/commit/4e40d20d167e717b8f86d32d86e7e252ef6648c7)
  - **Documents**: [PRD](../../prd/leement-prd.md), [디자인 시스템](../../designs/design-system.md)

## D004: 같은 Feature에 간결한 랜딩 페이지 추가 (2026-10-08)

- **Context**: 사용자가 Patterns 통합 Spec에 A로 승인한 뒤, 구현 계획 작성 전에 shadcn/ui 홈처럼 간단한 랜딩 페이지 수정도 함께 요청했다.
- **Constraints**: Feature ID와 승인된 15개 항목 분류·설치 호환성 범위를 유지한다. 기존 Leement 디자인 시스템과 공용 컴포넌트를 사용한다. 구현 허용 전 코드 수정은 하지 않는다.
- **Options**: 별도 Feature 분리, 현재 Feature의 랜딩·공개 탐색 범위를 함께 갱신.
- **Decision**: 같은 Feature에 US-3와 FR-7을 추가한다. 헤드라인·짧은 설명·두 진입 링크·실제 UI 예제 그리드로 랜딩을 정리하고 반복 소개/설치 섹션과 glow 장식을 제거한다.
- **Rationale**: 랜딩은 기존 분류를 소개하는 공개 진입점이다. 분류 통합과 랜딩 정리를 함께 수행하면 새 탐색 구조를 일관되게 보여 줄 수 있다. shadcn의 정보 순서를 참고하되 Leement의 시각 규칙을 유지한다.
- **Trace**:
  - 2026-10-08: 공식 홈을 웹과 브라우저로 읽고 현재 화면을 확인했다. 헤드라인·설명·Get Started/View Components·실제 예제 영역의 순서를 확인했다.
  - apps/docs/app/page.tsx에서 대형 헤드라인·workspace preview·분류 소개 3개·추가 설치 섹션을, globals.css에서 홈 전용 glow와 사이드바 제외 규칙을 확인했다.
  - 기존 A는 Patterns 통합 범위의 승인으로 기록했다. 추가 랜딩 범위를 구체화한 Spec은 Review로 갱신하며 기존 승인을 임의로 새 시각 요구사항의 승인으로 확대하지 않는다.
  - Spec 확장 시점에는 구조·실제 링크·반응형 기준과 제한만 기록했다. 이후 확장 승인과 구현 결과는 아래 기록을 따른다.
- **Evidence**:
  - **Commit**: 기존 분류 Spec 기록 `3a8226a`.
  - **Reference**: [shadcn/ui 홈](https://ui.shadcn.com/), [확인한 참고 화면](./artifacts/shadcn-home-reference.png).
  - **Source**: [현재 랜딩](../../../apps/docs/app/page.tsx), [홈 CSS](../../../apps/docs/app/globals.css), [디자인 시스템](../../designs/design-system.md).

- **D004 승인 후 진행**: 2026-10-08 사용자 A로 랜딩을 포함한 확장 Spec을 승인받았다. 이 승인에 따라 Plan과 Verification Contract를 작성한다.

## D005: 분류 이전 구현과 검증 (2026-10-08)

- T01에서 navigation·items·static detail 목록·검색/Showcase·현재 문서 링크를 새 분류로 일치시켰다. 이전 route는 기존 15개 whitelist와 permanentRedirect를 사용한다. 개발 서버에서 전부 308 및 올바른 Location을 확인했고 알 수 없는 이전/새 slug는 404였다.
- Source target·dependency·API와 theme/token은 기준 revision 대비 동일하다. registry-source/reference-coverage 9 tests와 변경 파일 ESLint가 통과했다. production/browser 검증은 T03에 남겨 둔다.
- 공용 문서 경고에 나오는 이전 Feature들의 변경은 현재 main 기준에 이미 포함되어 있음을 확인했다. PRD·design의 기존 요구를 보존하고 현재 분류 설명만 갱신했다. README 보류는 D003을 따른다.
- Plan/task/Feature agent review는 저장소 설정에서 disabled이며 Plan 승인은 workflow nextAction의 자동 승격으로 처리했다.

## D006: 랜딩 예제와 태블릿 header (2026-10-08)

- 홈을 하나의 헤드라인·소개·Get started/View components와 실제 Card/Input/Textarea/Button/Calendar/Switch/Progress/Badge/StatusNotice 그리드로 바꿨다. 폼·날짜·설정은 로컬 상태로 반응한다. 반복 소개·설치 섹션·gradient headline/glow를 제거했다.
- 기존 home sidebar 제외를 유지한다. 모바일에서 기존 header 메뉴가 숨겨지므로 홈 내부의 접이식 범주 탐색으로 Docs/Components/Blocks/Charts 접근을 보존했다.
- 768px 시각 확인에서 기존 header의 메뉴와 검색 텍스트 겹침을 발견했다. 검색 text/kbd/확장 폭만 lg 이상에 적용하여 태블릿에는 같은 버튼의 아이콘을 표시한다. 레이아웃과 registry API/token은 동일하며 새 분기나 공용 컴포넌트는 추가하지 않았다. Plan에 해당 파일을 연결했다.
- Aside로 실제 DOM과 홈을 확인했다. Aside REPL에 viewport 변경 API가 없어 일시적 Playwright harness로 375/768/1440 × light/dark·reduced-motion·local interactions·Tab focus·header 경계·overflow를 확인했고 6조합 모두 통과했다. 변경 파일 ESLint와 전체 typecheck도 통과했다.

## D007: 최종 통합 검증과 구현 승인 대기 (2026-10-08)

- 설정된 전체 검사 typecheck/lint/test/build가 통과했다. Vitest는 32 files/706 tests다. 테스트 파일·lockfile·manifest·registry source·token/theme은 변경하지 않았다.
- production HTTP: 이전15 route가 각각 308 + 정확한 Location, 새15 상세가 200 및 Preview/Installation/Usage/API section과 설치 명령을 유지한다. standalone Preview15와 registry JSON15도 200이며 생성 JSON 전체가 main 기준과 같다. old/components/blocks unknown slug는 404다.
- production 브라우저: 15개 Preview의 실제 render, sidebar 현재 선택, Code와 clipboard의 실제 components/patterns import를 확인했다. Date Picker/Page Header의 기존 #api-reference가 새 route에서 같은 섹션으로 이동한다. 검색15와 Showcase105/41/146 및 해당15 상세 링크, filtered empty state, 모바일 메뉴의 선택/네 범주가 일치한다.
- 홈은 375/768/1440 × light/dark에서 실제 입력/submit·날짜·switch를 조작하고 CTA/Tab focus-visible/reduced-motion/header 경계/overflow/console error를 확인했다. 6조합 모두 통과했다. [화면 근거](./tasks.md#보존한-화면-근거)를 보존했다.
- 공개 0.2.1과 기존 releases는 그대로이며 unreleasedChanges만 두 항목을 추가했다. source/registry target/dependencies/props/export를 기준 revision과 비교해 일치함을 확인했다.
- 구현 결과 승인을 요청하는 시점까지 진행한다. main 통합·원격 push·npm·배포는 아직 실행하지 않았다. 설정상 구현 승인과 local-ff 통합 승인은 별도 경계다.

## D008: 구현 승인 전 요청된 전체 폭과 페이드 (2026-10-08)

- 사용자가 완성된 랜딩에 대해 shadcn 홈처럼 좌우를 꽉 채우고 하단을 약간 페이드하도록 직접 수정 요청했다. 이는 구현 결과의 변경 요청이며 구현 승인이나 main 통합 승인을 뜻하지 않는다.
- 기존 Feature와 완료 T01~T03을 유지하고 task add로 T04를 추가했다. 요청 자체가 구체적인 시각 수정 권한이므로 같은 범위의 Spec/Plan을 동기화하고 새 Spec 승인 질문을 추가하지 않는다. 검증된 두 CTA·실제 예제·설치 호환성은 보존한다.
- [확인한 폭·페이드 참고 화면](./artifacts/shadcn-width-fade-reference.png)을 보존했다. max-width를 제거하되 responsive inset과 중앙 headline 폭을 유지한다. 배경색에 맞는 하단 장식은 실제 interactive 콘텐츠를 숨기거나 입력을 막지 않도록 배치한다.
- 영구 테스트 변경 없이 수정된 화면의 브라우저 검증·ESLint/typecheck·production build로 검증한다. 이전 카탈로그/설치 706개 회귀 검사와 production URL 검증은 그대로 유효하다.

- **T04 결과**: 예제 max-width를 제거해 실제 좌우 inset만 남겼다(16/24/32px). xl 이상은 4열, Calendar는 384px 이하로 읽기 폭을 제한했다. 하단192px을 현재 theme 배경색으로 페이드하고 실제 CardContent·메시지·아이콘은 장식 위에 유지한다. pointer-events:none/aria-hidden이며 콘텐츠를 잘라내지 않는다.
- **T04 검증**: production 375/768/1440/1920 × light/dark 8조합에서 전체 폭/페이드·CTA·폼/달력/스위치·Tab focus·overflow·header 경계·console error·reduced-motion을 확인했다. 모두 통과했다. 변경 파일 ESLint·전체 typecheck·production build 통과. 단순 배치/CSS 변경에 새 영구 테스트를 추가하지 않았고 T03의706 tests는 유효하다. [업데이트한 화면 근거](./tasks.md#보존한-화면-근거)를 보존했다.

## D009: 첨부 화면과의 불일치 수정 (2026-10-08)

- 사용자 첨부 화면은 5열의 다양한 카드가 높이를 달리해 촘촘히 쌓이고, 하단 카드 내용 전체가 사라지는 구성이다. T04는 네 개의 큰 예제와 배경 페이드만 제공하고 CardContent를 overlay 위에 유지해 이 시각 목표를 충족하지 못했다. 기능 검증 통과를 시각 일치의 근거로 삼지 않는다.
- 완료 T04의 검증 기록은 당시 결과로 보존한다. T05를 추가해 15개 이상의 실제 UI 카드·작은 hero·중립 gallery 배경·전체 콘텐츠 페이드를 구현한다. [사용자 첨부 원본](./artifacts/shadcn-user-reference.png)을 보존했다.
- 하단 장식은 포인터를 차단하지 않으며 keyboard focus 시 제거하여 입력과 텍스트를 확인할 수 있게 한다. 무거운 전체 Showcase mount와 신규 API/token 변경은 추가하지 않는다.

- **T05 결과**: 실제 registry UI를 사용하는18 cards를5열(넓은 화면)/2열(태블릿)/1열(모바일)로 배치했다. controls·작은 탐색·목표·활동 chart·현황·프로젝트/계정 폼·slider/설정·QR·chat·resource rows·empty state·analytics·notifications·사용량으로 높이를 달리해 쌓았다. 큰 제목을 줄여1440px 이상 한 줄로 표시하고 하단 상태 배너를 제거했다.
- **T05 검증**: production8개 조합 모두18 cards/열 수/overflow/360px 전체 콘텐츠 fade와 focus reveal, local state 및 console 검사 통과. 내부10개 링크200. typecheck/lint/build 통과. 화면을 첨부와 직접 비교하고 [화면 근거](./tasks.md#보존한-화면-근거)를 교체했다. 기본 상태 캡처에 페이드가 보이며 keyboard focus로 접근하면 장식이 제거된다. 실제registry/API와 catalog는 변경하지 않아706회귀 검사는 T03의 결과를 유지한다.

<!-- lee-spec-kit:workflow-sync sha256:e2afe67a7d82ed0777546af8d6f9656fca52b0c92c045057ce72a96335ab118e -->

## D010: 소개와 카드 배경 사이의 경계 수정 (2026-10-08)

- 사용자 화면의 가로 경계는 소개의 기본 배경과 카드 영역 bg-muted가 즉시 바뀌어 생긴다. 원인을 설명한 뒤 사용자가 직접 수정을 요청했다. 구현 승인으로 해석하지 않고 새 T06으로 수정한다.
- 카드 영역의 배경 자체에 상단160px gradient를 적용해 기본 배경에서 중립 표면으로 이어지게 한다. 별도 overlay나 카드 위치 변경 없이 light/dark에 같은 semantic 변수를 적용한다. 하단 콘텐츠 fade와 focus reveal은 그대로 유지한다.
