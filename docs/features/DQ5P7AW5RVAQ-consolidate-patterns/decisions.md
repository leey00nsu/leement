# Decisions Log

<!-- lee-spec-kit:workflow-sync sha256:5bb66dc80ae302b2da663e9192bb83ff6e1ff6e9749c97b44b41cab1a8fe0f2a -->

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
  - README 영향 여부와 정확한 경로·근거는 Plan 작성 시 확인한다. 불일치가 있으면 README 수정 요청이 없어 보류한다는 근거를 여기에 기록한다.
  - 현재: Spec Review. Curated Documentation Impact와 task Docs 연결은 승인 후 작성한다.
- **Evidence**:
  - **Commit**: [검토한 0.2.1 기준 revision](https://github.com/leey00nsu/leement/commit/4e40d20d167e717b8f86d32d86e7e252ef6648c7)
  - **Documents**: [PRD](../../prd/leement-prd.md), [디자인 시스템](../../designs/design-system.md)
