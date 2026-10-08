# Decisions Log

<!-- lee-spec-kit:workflow-sync sha256:778d27e9dc5c5ab17a027c68a89b5dafd449c263da951fe42d84cded9676374c -->

## D001: 역할에 따른 공개 분류 통합 (2026-10-08)

- **Context**: 사용자가 Patterns 별도 분류에 의문을 제기하고 Components·Blocks로 재분류하는 다음 Feature 진행을 요청했다.
- **Constraints**: 기존 15개 기능과 Components 95개·Blocks 36개·Charts 70개를 보존한다. 최소 단위와 조합 여부만으로는 Sidebar·AudioPlayer 같은 기존 Components를 설명할 수 없다.
- **Options**: Patterns 유지, 모두 Blocks로 이동, 역할별로 두 분류에 분산.
- **Decision**: 단일 UI 기능 10개는 Components로, 페이지 구역·배치 5개는 Blocks로 이동한다.
- **Rationale**: 소비자가 찾는 기능과 화면 구역을 기준으로 탐색한다. PageSkeleton은 헤더와 목록의 페이지 배치라 Blocks로, StatePanel은 상태 표시 기능이라 Components로 분류한다.
- **Trace**:
  - 계획 시작: navigation·Showcase·상세 route·15개 source 및 registry 등록을 확인했다. 모든 Patterns의 registry 타입은 registry:component다.
  - 현재: Spec Review. 구현·검증은 아직 실행하지 않았다.
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
  - 현재: Spec Review. 주소와 설치 검증은 승인 후 Plan에서 구체화한다.
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
  - 현재: Spec Review. Curated Documentation Impact와 task Docs 연결은 승인 후 작성한다.
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
  - Spec에는 구조·실제 링크·반응형 기준과 제한을 기록했다. Plan·구현·검증은 아직 시작하지 않았다.
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
