# Tasks: shared-motion-patterns

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
- **브랜치**: `feat/W2TPJTYZ2Y4P-shared-motion-patterns`
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

- [DONE][PRD-FR-011] T-W2TPJTYZ2Y4P-shared-motion-patterns-01 모션 토큰·theme·기존 핵심 UI 연결
  - Date: 2026-10-01
  - Acceptance:
    - 새 모션 역할과 브랜드 반복이 CSS 변수에서 파생되고 reduced motion에서 정지한다
  - Checklist:
    - [x] tokens/theme 역할 확장과 기본값 근거를 기록한다
    - [x] Button loading·Dialog·Tooltip·DropdownMenu를 연결한다
    - [x] theme 검사와 기존 overlay/button 상호작용 검사를 실행한다
    - [x] PRD·디자인 규칙과 token/theme/UI/기존 preview 영향을 동기화한다
  - Docs:
    - docs:prd/leement-prd.md
    - docs:designs/design-system.md
  - Review Evidence: -
  - Review Decision: -
  - Review Round: -
  - Reviewed Head: -
  - Reviewed Tree: -

  - Verification: tokens/theme build PASS; theme/button/overlay Vitest 12/12 PASS; scoped ESLint and git diff --check PASS. 새 Foundation 편집/preview 연결은 T05, 새 lifecycle 제어는 T02–04에서 검증한다.

- [DONE][PRD-FR-008] T-W2TPJTYZ2Y4P-shared-motion-patterns-02 RevealContent 개선과 TextReveal 제공
  - Date: 2026-10-01
  - Acceptance:
    - 기존 공개 API를 유지하고 TextReveal이 명시적 조각·정적 표시·reduced motion을 지원한다
  - Checklist:
    - [x] 작은 motion helper를 registry로 제공하고 dependency/alias를 연결한다
    - [x] RevealContent와 TextReveal을 구현하고 읽기/진입 계약을 검사한다
    - [x] 실제 source의 텍스트 예제와 API/설치 문서를 연결한다
  - Docs:
    - project:apps/docs/lib/items.ts
  - Review Evidence: -
  - Review Decision: -
  - Review Round: -
  - Reviewed Head: -
  - Reviewed Tree: -

  - Verification: typecheck 5 tasks PASS; TextReveal static/render contract 1/1 PASS; registry build and scoped ESLint PASS. Actual replay/reduced/hydration checks remain T05/T06.

- [DONE][PRD-FR-008] T-W2TPJTYZ2Y4P-shared-motion-patterns-03 Collapsible 모션과 MediaReveal 제공
  - Date: 2026-10-01
  - Acceptance:
    - 높이 변화와 재개폐가 가능하며 미디어 loading/ready/error 상태에 공간·aria 의미가 유지된다
  - Checklist:
    - [x] Base UI Collapsible의 API와 종료 lifecycle을 보존한다
    - [x] MediaReveal과 Skeleton dependency를 제공한다
    - [x] 상태/keyboard 계약과 실제 source 예제를 검증한다
  - Docs:
    - project:apps/docs/lib/items.ts
  - Review Evidence: -
  - Review Decision: -
  - Review Round: -
  - Reviewed Head: -
  - Reviewed Tree: -

  - Verification: Media/Text and existing source-extension Vitest 10/10 PASS; direct docs tsc, scoped ESLint, registry build PASS. Hidden media uses inert; closing Collapsible gets a scoped state observer preserving forwarded refs. Browser fade/height checks remain T05/T06.

- [DONE][PRD-FR-008] T-W2TPJTYZ2Y4P-shared-motion-patterns-04 BrandAction과 RotatingContent 제공
  - Date: 2026-10-01
  - Acceptance:
    - 브랜드 action과 순환 슬롯은 disabled/loading/pause/reduced/offscreen 정지를 지원한다
  - Checklist:
    - [x] 명시적 component lifecycle과 소비자 브랜드 override를 적용한다
    - [x] BrandGradientText/Skeleton 반복 제어를 연결한다
    - [x] 새 registry/API와 source 예제를 추가하고 실제 동작 계약을 검사한다
  - Docs:
    - project:apps/docs/lib/items.ts
  - Review Evidence: -
  - Review Decision: -
  - Review Round: -
  - Reviewed Head: -
  - Reviewed Tree: -

  - Verification: Motion/source-extension tests 13/13 PASS; direct docs TypeScript and scoped ESLint PASS; registry build PASS. Pause/resume, reduced first item and timer cleanup checked; browser theme/visibility checks remain T05/T06.

- [DONE][PRD-FR-013] T-W2TPJTYZ2Y4P-shared-motion-patterns-05 Foundations 실시간 모션 편집과 공개 문서 완성
  - Date: 2026-10-01
  - Acceptance:
    - duration/easing/stagger/cycle edit·Replay·CSS copy·persistence·reset이 실제 source에 적용된다
  - Checklist:
    - [x] 필드/검증/export와 기존 저장값 호환을 갱신한다
    - [x] 카테고리 미리보기에 실제 진입·펼침·미디어·반복 예제를 연결한다
    - [x] navigation/route/metadata/states/설치/adoption/changelog를 동기화한다
    - [x] light/dark·모바일·reduced/no-JS·hydration과 편집 재현을 브라우저에서 확인한다
  - Docs:
    - project:apps/docs/app/foundations/[slug]/page.tsx
    - project:apps/docs/lib/items.ts
    - project:apps/docs/app/adoption/page.tsx
    - project:apps/docs/app/changelog/page.tsx
  - Review Evidence: -
  - Review Decision: -
  - Review Round: -
  - Reviewed Head: -
  - Reviewed Tree: -

  - Verification: Foundation/motion/overlay tests 16/16 PASS; after named-easing bridge update, foundation/motion tests 12/12 PASS; typecheck/lint/build PASS. Browser edit/replay/copy/reload/reset, source routes, dynamic height/exit/inert, media retry, rotation pause/offscreen, mobile light/dark/reduced/no-JS and pageerrors=0 verified. Screenshots: artifacts/motion-preview-desktop.png, artifacts/motion-editor-mobile-dark.png.

- [TODO][PRD-FR-012] T-W2TPJTYZ2Y4P-shared-motion-patterns-06 Registry 소비자와 두 제품 대표 사용처 검증
  - Date: 2026-10-01
  - Acceptance:
    - 독립 소비자 및 격리된 두 앱에서 설치·대표 교체·검증을 수행하고 도입 회귀를 구분한다
  - Checklist:
    - [ ] 새 4항목의 transitive source와 theme를 CLI로 설치하여 consumer TS/build를 실행한다
    - [ ] 양쪽 TextReveal/MediaReveal과 Leesfield 펼침/action/회전을 대표 사용처에 교체한다
    - [ ] 앱 baseline/post-change TS/build와 브라우저 동작을 확인하고 원본 상태를 비교한다
    - [ ] 설정된 Feature typecheck/lint/test/build와 docs audit를 실행하고 실제 결과·한계를 기록한다
  - Docs:
    - project:apps/docs/app/adoption/page.tsx
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

<!-- lee-spec-kit:workflow-sync sha256:9fc1f13fa4954fac4ccf018a91b301245a984755b394a10d2ead684c61b1c8b4 -->
