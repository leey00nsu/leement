# Tasks: readme-refresh

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
- **브랜치**: `feat/GH2BH755MMYB-readme-refresh`
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

- [DONE][PRD-FR-005] T-GH2BH755MMYB-readme-refresh-01 README 소개·구조 정돈과 실제 화면 캡처
  - Date: 2026-10-02
  - Acceptance:
    - 실제 light/dark/Foundations 화면과 현재 기능·레이어·기여 기준이 README에 표시된다
    - README와 PRD의 현재 block 설명이 registry inventory에 맞고 초기 요구사항은 보존된다
  - Checklist:
    - [x] 실제 docs 실행·시각 검증 후 제품 경로에 적정 크기의 캡처 저장
    - [x] 로고·배지·navigation·기능·구조·검증·라이선스를 정돈하고 source ownership 설명
    - [x] PRD 현재 block 설명 정정 및 GFM·상대 링크·이미지·anchor·diff 확인
  - Docs:
    - project:README.md
    - docs:prd/leement-prd.md
  - Verification: frozen install 및 docs dev 실행 성공. 실제 light/dark 홈과 Color의 네 브랜드값 편집·CSS 복사·저장값 반영 확인; browser pageerror 없음. GFM 렌더와 파일 18개·anchor 15개·표 4개·이미지 9개 확인. 캡처 PNG 3개 총 약 460KB. PRD 초기 FR-003 유지, 현재 block 설명만 정정.
  - Review Decision: -
  - Review Round: -
  - Reviewed Head: -
  - Reviewed Tree: -

- [DONE][PRD-FR-006] T-GH2BH755MMYB-readme-refresh-02 설치 안내 실증과 최종 문서 검증
  - Date: 2026-10-02
  - Acceptance:
    - README의 theme/CSS/registry 안내를 독립 consumer에서 따라 dependency 설치·source 수정·build가 성공한다
    - 공개 배포 여부와 설치 전제가 사실에 맞고 configured checks를 통과한다
  - Checklist:
    - [x] 공개 package/host를 읽기 전용 확인하고 local trial과 조건부 공개 사용 안내 확정
    - [x] theme pack·CSS import·namespace 설정·UI/pattern/block 자동 설치·source 수정·production build
    - [x] README 렌더·파일/anchor 확인 및 configured typecheck/lint/test/build 결과 기록
  - Docs:
    - project:README.md
  - Verification: 독립 Vite/React/Tailwind v4 consumer를 shadcn@latest 4.21.1로 초기화했다. README theme tarball과 namespace를 사용해 항목 3개/소스 6개를 설치, README TSX 예제 그대로 import, Button 소스 수정 후 tsc+production build 성공. 실제 브라우저에서 source 수정 attribute·Pretendard 로딩·40px 높이·8px radius·light/dark primary를 확인했다. pageerror 없음. 전체 typecheck/lint/test 14파일·93개/build 98페이지 통과.
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

- [x] 모든 태스크가 `[DONE]`이며, 각 태스크의 `Acceptance` 검증 및 `Checklist` 체크 완료 <!-- lee-spec-kit:completion:all-tasks -->
- [x] 테스트 실행 및 통과 (아래에 명령어/결과 기록) <!-- lee-spec-kit:completion:tests -->
- [ ] 최종 결과를 공유했고, 필요한 사용자 확인을 문서화된 workflow checkpoint 기준으로 기록함 <!-- lee-spec-kit:completion:final-outcome -->

### 테스트 실행 기록

> 명령어당 1개 행만 유지합니다. 같은 명령어를 다시 실행하면 새 행 추가 대신 기존 행의 시간/결과를 갱신하세요.
> `마지막 실행`은 `YYYY-MM-DD` 형식(로컬 날짜)으로 기록하세요.

| 명령어                   | 마지막 실행(로컬, YYYY-MM-DD) | 결과               |
| ------------------------ | ----------------------------- | ------------------ |
| `pnpm install --frozen-lockfile` | 2026-10-02 | PASS — lockfile 변경 없음 |
| `pnpm --filter @leement/docs dev --port 43214` | 2026-10-02 | PASS — tokens/theme/registry 자동 준비, 실제 홈/Color 확인 |
| `pnpm --filter @leement/theme pack --pack-destination /tmp/leement-pack` | 2026-10-02 | PASS — CSS·두 폰트·OFL 고지 포함 |
| `npx shadcn@latest init --yes --defaults` (독립 consumer) | 2026-10-02 | PASS — Vite/Tailwind v4/alias 확인 |
| `pnpm add /tmp/leement-pack/leement-theme-0.1.0.tgz` (consumer) | 2026-10-02 | PASS — theme export 설치 |
| `npx shadcn@latest add @leement/button @leement/empty-state @leement/settings-section` (consumer) | 2026-10-02 | PASS — 폴더별 6개 source; 기존 utils/button 교체 승인 |
| `pnpm build` (consumer) | 2026-10-02 | PASS — README 예제·소스 수정 뒤 strict TS 및 Vite build |
| README 파일/anchor 및 GFM 렌더 확인 | 2026-10-02 | PASS — 파일 18개/anchor 15개/표 4개/이미지 9개, desktop/mobile 렌더 |
| consumer browser 확인 | 2026-10-02 | PASS — Pretendard loaded, light #1a1a1d/dark #fafafa, 높이 40px/반경 8px, source 수정, pageerror 없음 |
| `pnpm run typecheck` | 2026-10-02 | PASS — 5 tasks, 일부 Turbo cache |
| `pnpm run lint` | 2026-10-02 | PASS — packages/docs 및 registry |
| `pnpm run test` | 2026-10-02 | PASS — 14 files / 93 tests |
| `pnpm run build` | 2026-10-02 | PASS — tokens/theme/88 registry items/docs 98 pages |
| `git diff --check` | 2026-10-02 | PASS |
| `npx lee-spec-kit docs-audit --json` | 2026-10-02 | PASS — DOCS_TAXONOMY_OK |

완료 기록에는 테스트뿐 아니라 build·typecheck·lint 등 Plan에서 정한 검증과 수동 검증 증거를 포함합니다. 자동 검사의 기준은 실제 `workflow.featureChecks`이며, 검사 생략은 통과로 기록하지 않고 명시적인 사유를 남깁니다.

<!-- lee-spec-kit:workflow-sync sha256:96b44919467e79d9d65bf3453b3e11f306806519c657374eb8bfc55a965eb876 -->
