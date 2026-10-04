# Tasks: motion-standardization

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
- **브랜치**: `feat/MMUKCQ7RXWEK-motion-standardization`
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

- [DONE][PRD-FR-011] T-MMUKCQ7RXWEK-motion-standardization-01 공통 Motion 토큰·활동·control 전환 기반 정리
  - Date: 2026-10-04
  - Acceptance:
    - 단위 변환·실시간 token·reduced/activity/ref cleanup이 유지되고 helper가 Motion을 실행한다.
  - Checklist:
    - [x] 기존 helper와 motion 테스트 수정
    - [x] 요소 범위 전환 helper와 registry 의존 등록
    - [x] PRD와 디자인 모션 규칙 동기화
  - Docs:
    - docs:prd/leement-prd.md
    - docs:designs/design-system.md
  - Review Evidence: -
  - Review Decision: -
  - Review Round: -
  - Reviewed Head: -
  - Reviewed Tree: -

- [DONE][PRD-FR-011] T-MMUKCQ7RXWEK-motion-standardization-02 진입·반복·브랜드·로딩·미디어 효과 Motion 전환
  - Date: 2026-10-04
  - Acceptance:
    - Reveal/Text/Rotation/Media/brand/Skeleton/Spinner/Marquee/Status/Progress/audio가 Motion으로 실행된다.
  - Checklist:
    - [x] paused/reduced/offscreen/hidden lifecycle 확인
    - [x] theme keyframes 제거와 0.2.0 준비
    - [x] 기존 motion/player/control 테스트와 관련 metadata 동기화
  - Docs:
    - project:apps/docs/lib/items.ts
    - docs:designs/design-system.md
  - Review Evidence: -
  - Review Decision: -
  - Review Round: -
  - Reviewed Head: -
  - Reviewed Tree: -

- [DONE][PRD-NFR-001] T-MMUKCQ7RXWEK-motion-standardization-03 Popup·펼침·전체 control 및 docs 전환 통일
  - Date: 2026-10-04
  - Acceptance:
    - CSS animation/transition 없이 popup/panel/control/docs가 Motion으로 움직이며 포커스·키보드를 보존한다.
  - Checklist:
    - [x] Dialog/Alert/Tooltip/Base UI popup/panel exit 및 자연 높이
    - [x] hover/state/ref/asChild/render와 Foundation 즉시 반영
    - [x] Sonner/Recharts 내장 효과 처리 및 전수 감사
    - [x] 관련 overlay/navigation/control 테스트 수정
  - Docs:
    - docs:designs/design-system.md
    - project:apps/docs/lib/items.ts
  - Review Evidence: -
  - Review Decision: -
  - Review Round: -
  - Reviewed Head: -
  - Reviewed Tree: -

- [DONE][PRD-FR-014] T-MMUKCQ7RXWEK-motion-standardization-04 NativeSelect 제거와 모든 보이는 선택 UI 이관
  - Date: 2026-10-04
  - Acceptance:
    - NativeSelect 배포/route/source가 없고 기존 Select로 문서와 내부 선택 UI가 동일해진다.
  - Checklist:
    - [x] Field와 ColorPicker/CodeBlock/Foundation/예제 선택 이관
    - [x] group/label/disabled/invalid/name/FormData 검증
    - [x] registry metadata와 생성 item 제거, PRD/디자인 규칙 갱신
  - Docs:
    - docs:prd/leement-prd.md
    - docs:designs/design-system.md
    - project:apps/docs/lib/items.ts
  - Review Evidence: -
  - Review Decision: -
  - Review Round: -
  - Reviewed Head: -
  - Reviewed Tree: -

- [TODO][PRD-FR-005] T-MMUKCQ7RXWEK-motion-standardization-05 공개 설치·모션 문서와 registry 종속 배포 정비
  - Date: 2026-10-04
  - Acceptance:
    - 공개 주소와 최신 모션/Select/폰트 계약이 안내되며 registry closure가 설치 가능하다.
  - Checklist:
    - [ ] Getting Started/README 기존 설치 설명 교체
    - [ ] 모든 관련 component/pattern/block/Foundation/Adoption 문서와 Changelog 동기화
    - [ ] registry 재생성과 source/dependency 테스트
    - [ ] 게시 전 상태와 이관/버전 명시
  - Docs:
    - project:README.md
    - project:apps/docs/app/getting-started/page.tsx
    - project:apps/docs/lib/items.ts
    - project:apps/docs/app/changelog/page.tsx
  - Review Evidence: -
  - Review Decision: -
  - Review Round: -
  - Reviewed Head: -
  - Reviewed Tree: -

- [TODO][PRD-FR-009] T-MMUKCQ7RXWEK-motion-standardization-06 실제 브라우저·공개/변경 소비자 설치와 전체 gate 검증
  - Date: 2026-10-04
  - Acceptance:
    - 공개/변경 consumer 및 실제 모션 관찰, typecheck/lint/test/build가 통과하고 evidence가 기록된다.
  - Checklist:
    - [ ] 임시 소비자 namespace 설치·실행·빌드
    - [ ] 브라우저 light/dark/mobile/desktop/reduced/no-JS/rapid-toggle/token-edit
    - [ ] 전수 잔류 감사와 실패 수정, 전체 필수 gate
    - [ ] spec acceptance/tasks/evidence와 marker 동기화
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
| pnpm exec vitest run registry/ui/motion.test.tsx | 2026-10-04 | PASS 9 tests |
| pnpm --filter @leement/docs typecheck | 2026-10-04 | PASS |
| pnpm exec eslint registry/lib/leement-motion.ts registry/ui/motion.test.tsx | 2026-10-04 | PASS |

완료 기록에는 테스트뿐 아니라 build·typecheck·lint 등 Plan에서 정한 검증과 수동 검증 증거를 포함합니다. 자동 검사의 기준은 실제 `workflow.featureChecks`이며, 검사 생략은 통과로 기록하지 않고 명시적인 사유를 남깁니다.

### T-02 검증

- motion/player/controls/button/remaining-utility 기존 검사: 5 files, 32 tests PASS.
- theme 검사: 4 tests PASS. docs typecheck와 changed-source lint PASS.
- 실제 프레임/pause/자연 높이 검증은 T-06 브라우저 계약에서 수행한다.

### T-03 검증

- overlays 기존 검사 5 tests PASS; navigation/controls/complex-utility/motion 30 tests PASS (--maxWorkers=2).
- changed-source lint PASS. docs typecheck PASS.
- 동시 검사에서 일부 timeout을 재현하여 worker 수를 제한하고 동일 실패 검사를 재실행했다. Marquee 시스템 preference 검사는 matchMedia 전제를 명시했다.
- 실제 종료 timing/focus/height/paint는 T-06에서 검사한다.

### T-04 검증

- core-form/code-form/complex-utility: 3 files, 26 tests PASS (--maxWorkers=2).
- docs typecheck와 이관 source lint PASS. 보이는 native select 및 NativeSelect source/registry/route 제거 확인.
