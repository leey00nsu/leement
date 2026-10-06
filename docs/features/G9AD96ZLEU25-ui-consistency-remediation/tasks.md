# Tasks: ui-consistency-remediation

## 태스크 규칙

- **상태**: 기본은 `[TODO]` → `[DOING]` → `[DONE]`; `workflow.agentReview.task.enabled=true`이면 `[DOING]` → `[REVIEW]` → `[DONE]`
- **구현 위임**: `workflow.agentExecution.task.enabled=true`이면 설정된 worker가 반환된 `workerContract`를 따르고 `workflow-stage` 재호출이나 재위임 없이 직접 실행하며, 프로젝트 코드와 태스크 범위 검사만 담당합니다. 메인 에이전트가 이 문서, 태스크 상태, 커밋, 승인, 원격 작업을 유지합니다.
- **태스크 공유 / 확인**:
  - `[TODO] → [DOING]`: 시작 전 태스크 제목을 공유하고 `tasks.md`에서 상태를 함께 갱신합니다
  - `[DOING] → [REVIEW]/[DONE]`: 완료 전 결과/검증을 공유하고 같은 수정에서 `Acceptance`와 `Checklist`를 함께 갱신합니다
  - `[REVIEW] → [DONE]`: 완료 전에 반환된 리뷰 Round와 fresh 태스크 리뷰 Evidence, Decision, Reviewed Head, Reviewed Tree를 기록합니다
  - 태스크 상태 변경 전에 승인이 필요한 경우는 문서화된 review checkpoint 또는 원격/파괴적 작업 직전뿐입니다.
  - 워크플로우가 요구하지 않는 standalone `OK` 승인 단계는 만들지 않습니다.
  - 해당 태스크의 `Checklist`에 unchecked 항목이 남아 있으면 `[DONE]`으로 전환하지 않습니다.
  - `workflow.agentReview.maxRounds`는 fresh 리뷰의 최대 실행 횟수입니다. 마지막 허용 Round가 `changes_requested`이면 지적을 한 번 반영하고 남은 finding과 그 결과의 target 변경을 잔여 위험으로 보존한 뒤, 추가 리뷰나 사용자 승인 없이 리뷰 게이트를 자동 완료합니다. `maxRounds=1`이면 Round 2는 없습니다. `blocked`는 자동 완료하지 않습니다.
- **PRD 매핑(권장)**: 각 태스크 라인에 `[PRD-FR-001]` 또는 `[PRD-SCOPE-V1-DESKTOP-EDITOR]` 같은 기존 PRD 요구사항 ID 태그를 추가하거나, PRD와 무관한 태스크는 `[NON-PRD]`로 표시하세요.
  - 단, `tasks.md`에서 PRD ID를 임의로 만들지 마세요. `docs/prd` 또는 상위 요구사항 문서에 먼저 정의된 ID만 참조해야 합니다.
  - 레거시 문서에 아직 PRD ID가 없다면, 먼저 원문 요구사항 문서에 ID를 backfill한 뒤 `spec.md`의 `PRD Refs`와 태스크 태그를 함께 맞추세요.
  - `[NON-PRD]`는 내부 구현 작업 전용입니다. 사용자 동작, acceptance criteria, 범위가 바뀌는 태스크라면 PRD를 먼저 backfill하고 `[PRD-...]`로 태깅하세요.
- **디자인 시스템 동기화(조건부)**: `docs/designs/design-system.md`를 변경하는 태스크는 영향 받는 디자인 문서, token/theme, 공통 UI, Storybook/workbench와 검증을 같은 task의 `Checklist`에서 추적하세요. 영향이 없는 영역은 변경하지 말고 영향 여부만 확인합니다.

---

## 로컬 추적 정보
- **문서 상태**: Approved
- **레포**: Leement
- **브랜치**: `feat/G9AD96ZLEU25-ui-consistency-remediation`
- **대기 중 변경 요청**: -
  - 구현 중 새로 수용한 사용자 요청을 잠시 표시하는 sync marker입니다
  - 요청을 `tasks.md`와 관련 문서에 반영한 뒤 값을 비우세요
- **Feature 리뷰**: -
  - Feature 리뷰 handoff를 시작하면 `Running`, 리뷰 결과 기록까지 끝나면 `Done`으로 변경
- **Feature 리뷰 Evidence**: -
- **Feature 리뷰 Decision**: -
  - 형식: `결정: approve|changes_requested|blocked ...` (또는 `decision: ...`)
- **Feature 리뷰 Round**: -
  - `workflow-stage --json`이 반환한 양의 정수이며 첫 리뷰는 `1`
- **Feature 리뷰 Head**: -
  - Feature 리뷰가 확인한 project code commit SHA
- **Feature 리뷰 Tree**: -
  - Feature 리뷰가 확인한 project code tree SHA

---

## 태스크 엔트리 포맷

```markdown
- [TODO][PRD-FR-001] T-{feature-ref}-01 {태스크 제목}
  - Date: YYYY-MM-DD
  - Acceptance:
    - (검증 조건)
  - Checklist:
    - [ ] (서브 태스크)
  - Docs:
    - (docs 디렉터리 기준 `docs:<path>` 또는 프로젝트 루트 기준 `project:<path>` 대상을 사용하거나 이 섹션을 생략)
  - Review Evidence: -
  - Review Decision: -
  - Review Round: -
  - Reviewed Head: -
  - Reviewed Tree: -
```

> 위 예시의 `PRD-FR-001`은 가능한 `PRD-*` key 중 하나일 뿐입니다. 아직 PRD 원문에 정의되지 않았다면 태스크에 먼저 넣지 마세요.
> 처음엔 탐색/내부 작업이었더라도 제품 요구사항 변경으로 이어졌다면, `NON-PRD`로 두지 말고 PRD를 먼저 갱신한 뒤 `[PRD-...]`로 재태깅하세요.

---

## 태스크 목록

> 아래에 태스크를 추가하세요. **최소 1개가 필요**합니다.
> 태스크는 하나의 순차 리스트로 유지하고, 위에서 아래 순서 자체를 실행 우선순위로 취급하세요.
> 새 태스크 append에는 `npx lee-spec-kit task add <feature-ref> --title "..." --ref NON-PRD --acceptance "..." --check "..." --doc "docs:prd/system-architecture.md"` 사용을 우선하세요.
> 새 태스크는 마지막 기존 태스크 아래에 완전한 태스크 블록으로 추가하세요. `PRD-FR-001`이나 `PRD-SCOPE-V1-DESKTOP-EDITOR`처럼 이미 정의된 PRD key를 사용하거나, 내부 작업이면 `[NON-PRD]`를 사용합니다.
> placeholder 상태의 `Acceptance` / `Checklist`를 그대로 두지 마세요. 구체 항목이 아니면 구현을 시작하지 않습니다.
> 수동 편집이 필요하면 현재 태스크 근처가 아니라 `태스크 목록`의 마지막 기존 태스크 block 아래에만 append 하세요.

---

- [DONE][PRD-FR-011] T-G9AD96ZLEU25-ui-consistency-remediation-01 고정 source 전수검수와 Sidebar 수정 전 기준 확보
  - Date: 2026-10-06
  - Acceptance:
    - UI52/Patterns2/Blocks28/Charts70와 관련 예제의 source를 검사하고 결과·수정 후보·역할 예외를 audit-results에 연결한다.
  - Checklist:
    - [x] scope 분모와 실제 source를 읽고 browser baseline을 확보하며 inspection과 visual 검수를 구별한다.
  - Review Evidence: -
  - Review Decision: -
  - Review Round: -
  - Reviewed Head: -
  - Reviewed Tree: -

  - Verification: 고정157 runtime/support/foundation source와498 example 목록의 스타일 후보 대조. Sidebar browser computed background rgba(0,0,0,0), sidebar alias 빈 값·선택 표면 누락 확인. [검수표](./artifacts/audit-results.json)와 [수정 전](./artifacts/sidebar-before.png). 실제 전수 browser 검수는 T02..06에 pending으로 남겼다.

- [DONE][PRD-FR-011] T-G9AD96ZLEU25-ui-consistency-remediation-02 Sidebar semantic theme·크기·상태 표현 복구
  - Date: 2026-10-06
  - Acceptance:
    - Sidebar parts/variants·light-dark/Foundations와 독립 theme 연결을 수정하고 collapse/mobile/keyboard 계약을 유지한다.
  - Checklist:
    - [x] theme alias와 기존 compatibility test를 갱신하고 Input/menu/sub/action/skeleton/focus/RTL/모바일을 함께 확인한다. source와 기본 browser 확인, 확장 parts/Foundations/RTL 소비처 검증은 T06에도 연결한다.
  - Docs:
    - docs:designs/design-system.md
  - Review Evidence: -
  - Review Decision: -
  - Review Round: -
  - Reviewed Head: -
  - Reviewed Tree: -

  - Verification: theme build PASS; 기존 compatibility/Sidebar 계약 2파일9tests PASS; Sidebar ESLint 및 docs typecheck PASS. 실제390 mobile Sheet open/Escape 후 trigger focus 복귀,1440 collapse/shortcut 확인. surface light255/dark26, 선택245/48, border229·40px 메뉴 확인. 고위험 parts/variant 전수와 독립consumer는 T06에서 최종 재검증한다.

- [TODO][PRD-FR-015] T-G9AD96ZLEU25-ui-consistency-remediation-03 나머지 UI·Patterns와 Base 예제의 일관성 수정
  - Date: 2026-10-06
  - Acceptance:
    - 52 UI/2 Patterns의 남은 불일치와 관련 Base 예제를 기존 공용 역할에 맞추고 public API·고정 대응을 보존한다.
  - Checklist:
    - [ ] source/예제 스타일을 필요한 곳만 수정하고 focused contracts·light-dark·키보드/overlay·responsive를 검증한다.
  - Review Evidence: -
  - Review Decision: -
  - Review Round: -
  - Reviewed Head: -
  - Reviewed Tree: -

- [TODO][PRD-FR-016] T-G9AD96ZLEU25-ui-consistency-remediation-04 공개 Blocks28의 전수검수와 시각 규칙 복구
  - Date: 2026-10-06
  - Acceptance:
    - Applications3/Websites25 모두의 layout·표면·서체·controls·states를 검수하고 결함을 수정한다.
  - Checklist:
    - [ ] 모든source/preview와 핵심 callback·forms·pricing·canvas·roadmap·media 동작을 확인하고 결과를 연결한다.
  - Review Evidence: -
  - Review Decision: -
  - Review Round: -
  - Reviewed Head: -
  - Reviewed Tree: -

- [TODO][PRD-FR-017] T-G9AD96ZLEU25-ui-consistency-remediation-05 Charts70의 전수검수와 공용 UI 일관성 복구
  - Date: 2026-10-06
  - Acceptance:
    - 70 recipe의 Card/control/tooltip/legend/축/표·semantic series를 검수하고 의도된 차이와 결함을 구분해 처리한다.
  - Checklist:
    - [ ] 모든source와 light-dark/mobile-desktop 렌더, 기간/series·tooltip·Foundation data token/reduced motion을 확인한다.
  - Review Evidence: -
  - Review Decision: -
  - Review Round: -
  - Reviewed Head: -
  - Reviewed Tree: -

- [TODO][PRD-FR-009] T-G9AD96ZLEU25-ui-consistency-remediation-06 전체 예제 화면·독립 consumer·최종 문서와 회귀 검증
  - Date: 2026-10-06
  - Acceptance:
    - 498 examples/70 charts/기본 source 소비처의 전체 검수 결과가 있고 필요한 설치/tsc/build/full checks와 문서 동기화를 통과한다.
  - Checklist:
    - [ ] 모든390/1440 light-dark 검수·고위험240/1024/RTL/focus/Replay/resize를 완료하고 registry consumer와 curated docs/unreleased/sync marker를 연결한다.
  - Docs:
    - docs:designs/design-system.md
    - project:apps/docs/lib/releases.ts
  - Review Evidence: -
  - Review Decision: -
  - Review Round: -
  - Reviewed Head: -
  - Reviewed Tree: -

## Repository Knowledge (완료 비차단)

- **Policy**: `.lee-spec-kit.json`의 `experimental.openwiki`에서 파생
- **Lifecycle**: Feature 완료는 OpenWiki를 기다리지 않습니다. `knowledge ci`가 만든 예약/수동 CI가 통합된 project revision에서 저장소 단위 Knowledge를 갱신하며, 상태는 해당 workflow 실행과 PR에서 별도 확인합니다.
- **Output**: 생성 Wiki와 OpenWiki 실행 metadata는 Feature 커밋·리뷰에 넣지 않습니다.

---

## 완료 조건

> ⚠️ 아래 항목은 **최종 확인 체크리스트**입니다. 실제로 확인/실행한 뒤에만 체크하세요.

- [ ] 모든 태스크가 `[DONE]`이며, 각 태스크의 `Acceptance` 검증 및 `Checklist` 체크 완료 <!-- lee-spec-kit:completion:all-tasks -->
- [ ] 테스트 실행 및 통과 (아래에 명령어/결과 기록) <!-- lee-spec-kit:completion:tests -->
- [ ] 최종 결과를 공유했고, 필요한 사용자 확인을 문서화된 workflow checkpoint 기준으로 기록함 <!-- lee-spec-kit:completion:final-outcome -->

### 테스트 실행 기록

> 명령어당 1개 행만 유지합니다. 같은 명령어를 다시 실행하면 새 행 추가 대신 기존 행의 시간/결과를 갱신하세요.
> `마지막 실행`은 `YYYY-MM-DD` 형식(로컬 날짜)으로 기록하세요.

| 명령어                   | 마지막 실행(로컬, YYYY-MM-DD) | 결과               |
| ------------------------ | ----------------------------- | ------------------ |
| `{실행한 테스트 명령어}` | `-`                           | `{PASS/FAIL 요약}` |

완료 기록에는 테스트뿐 아니라 build·typecheck·lint 등 Plan에서 정한 검증과 수동 검증 증거를 포함합니다. 자동 검사의 기준은 실제 `workflow.featureChecks`이며, 검사 생략은 통과로 기록하지 않고 명시적인 사유를 남깁니다.

<!-- lee-spec-kit:workflow-sync sha256:a3f70b2070dc2511b6493e8131daa26f8719e8040e1f78fea18a335425354960 -->
