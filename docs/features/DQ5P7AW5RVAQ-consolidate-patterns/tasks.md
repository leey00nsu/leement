# Tasks: consolidate-patterns

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
- **브랜치**: `feat/DQ5P7AW5RVAQ-consolidate-patterns`
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

- [DONE][PRD-FR-005] T-DQ5P7AW5RVAQ-consolidate-patterns-01 공개 카탈로그 분류와 문서 주소 이전
  - Date: 2026-10-08
  - Acceptance:
    - 기존 Patterns 15개가 승인된 Components 10개·Blocks 5개로 중복 없이 이전되고 기존 15개 주소가 새 주소로 영구 리다이렉트된다.
  - Checklist:
    - [x] 상세 route·navigation·상단/모바일 탐색·items metadata·Showcase·검색을 새 분류에 맞춘다.
    - [x] registry source·설치 이름·dependencies·target·소비자 import 경로를 유지한다.
    - [x] 105 Components·41 Blocks·70 Charts와 기능 구역별 A–Z 순서 및 알 수 없는 slug의 404를 확인한다.
  - Docs:
    - docs:prd/leement-prd.md
    - docs:designs/design-system.md
  - Review Evidence: -
  - Review Decision: -
  - Review Round: -
  - Reviewed Head: -
  - Reviewed Tree: -

  - Verification: 개발 서버에서 이전 15개 주소의 308/목적지와 unknown slug 404 확인. Components105/Blocks41의 중복·타입·기능 구역별 A–Z 및 Charts70 보존 확인. 기존 registry-source/reference-coverage 9 tests 통과, 변경 파일 ESLint 통과. registry·packages diff 없음. production/browser 통합 확인은 T03에서 실행한다.

- [DONE][PRD-FR-005] T-DQ5P7AW5RVAQ-consolidate-patterns-02 shadcn 홈의 간결한 흐름을 참고한 Leement 랜딩 정리
  - Date: 2026-10-08
  - Acceptance:
    - 홈이 짧은 헤드라인·설명·Get started/View components와 실제 UI 예제 그리드로 구성되고 반복 소개·설치 섹션과 glow 장식이 제거된다.
  - Checklist:
    - [x] 기존 registry source를 사용해 대표 예제를 구성하고 상호작용은 로컬 상태로 동작하게 한다.
    - [x] Leement 로고·서체·토큰·공용 컴포넌트와 검색·테마 전환·상단 탐색을 유지한다.
    - [x] light/dark와 375px·768px·1440px에서 CTA·대표 예제·focus·페이지 overflow를 확인한다.
    - [x] 랜딩 외 화면·token/theme·공용 API 영향 여부를 확인하고 의도하지 않은 변경을 제거한다.
  - Docs:
    - docs:prd/leement-prd.md
    - docs:designs/design-system.md
  - Review Evidence: -
  - Review Decision: -
  - Review Round: -
  - Reviewed Head: -
  - Reviewed Tree: -

  - Verification: 개발 서버 375/768/1440px × light/dark 6조합에서 CTA URL, 가로 overflow 없음, 프로젝트 폼·날짜·설정 상태, Tab/focus-visible, reduced-motion을 확인했다. 태블릿 header 겹침을 발견해 검색 텍스트를 lg 이상에서만 표시하고 menu/search 경계도 확인했다. 변경 파일 ESLint 및 전체 typecheck 통과. registry·token/theme API 변경 없음. production 화면 확인은 T03에서 반복한다.

- [DONE][PRD-FR-015] T-DQ5P7AW5RVAQ-consolidate-patterns-03 주소·설치·UI 통합 검증과 미게시 변경 기록
  - Date: 2026-10-08
  - Acceptance:
    - 이전 주소 15개와 새 상세 페이지·Preview·설치 경로가 검증되고 랜딩 및 탐색 검증과 설정된 전체 검사가 통과한다.
  - Checklist:
    - [x] 15개 새 주소와 이전 주소의 목적지 및 대표 anchor를 확인하고 잘못된 slug의 404를 검증한다.
    - [x] desktop/mobile의 탐색·검색·Showcase에서 새 분류 및 선택 상태를 확인한다.
    - [x] registry의 설치 이름·source·target·dependencies가 기준 revision과 일치하는지 확인한다.
    - [x] 기존 releases와 공개 0.2.1을 보존하면서 unreleasedChanges에 두 변경을 기록한다.
    - [x] 설정된 typecheck·lint·test·build를 실행하고 Spec Acceptance·Tasks·Decisions를 실제 근거와 동기화한다.
  - Docs:
    - project:apps/docs/lib/releases.ts
  - Review Evidence: -
  - Review Decision: -
  - Review Round: -
  - Reviewed Head: -
  - Reviewed Tree: -

  - Verification: production HTTP 15개 old/new 상세·Preview·registry 확인(308/Location/200/동일 target/JSON) 및 unknown 3경로 404. 15개 상세에서 실제 Preview render·현재 항목·Code와 clipboard import 확인. Date Picker/Page Header의 이전 #api-reference anchor, 검색 15개 새 링크, Showcase105/41/146·15개 분류/링크·empty state, 모바일 선택과 네 범주 확인. 홈 6조합 CTA·폼/날짜/설정·focus·header·overflow·console error 없음 확인. 전체 typecheck/lint/test/build 통과.

- [DONE][PRD-FR-005] T-DQ5P7AW5RVAQ-consolidate-patterns-04 랜딩 예제 전체 폭과 하단 페이드 조정
  - Date: 2026-10-08
  - Acceptance:
    - 랜딩 예제가 화면 좌우를 넓게 채우고 하단은 현재 테마의 배경색으로 은은하게 페이드된다.
  - Checklist:
    - [x] 홈 예제 영역의 최대 폭 제한을 제거하고 화면별 여백과 열 배치를 조정한다.
    - [x] light/dark 하단 페이드가 장식으로만 작동하고 컨트롤 클릭·focus·텍스트 읽기를 막지 않는지 확인한다.
    - [x] 375/768/1440px 및 넓은 화면에서 overflow·CTA·예제 상호작용을 검증하고 변경 파일 검사와 production build를 완료한다.
  - Docs:
    - docs:prd/leement-prd.md
    - docs:designs/design-system.md
    - project:apps/docs/lib/releases.ts
  - Review Evidence: -
  - Review Decision: -
  - Review Round: -
  - Reviewed Head: -
  - Reviewed Tree: -

  - Verification: production 375/768/1440/1920px × light/dark 8조합에서 좌우 inset16/24/32px·전체 폭, 배경색 gradient/aria-hidden/pointer-events:none, 메시지 및 CardContent 상위 표시, overflow 없음·CTA·폼/날짜/설정·Tab focus·reduced-motion·console error 없음 확인. 변경 파일 ESLint와 전체 typecheck·production build 통과. CSS/배치만 변경하여 이미 통과한 전체706 tests는 반복하지 않았다.

- [TODO][PRD-FR-005] T-DQ5P7AW5RVAQ-consolidate-patterns-05 첨부 기준의 다열 카드 쇼케이스와 콘텐츠 페이드 재구성
  - Date: 2026-10-08
  - Acceptance:
    - 랜딩이 첨부 화면처럼 짧은 중앙 hero 아래 전체 폭의 5열 masonry 카드 쇼케이스를 제공하고 하단 카드 콘텐츠 전체가 배경으로 점진적으로 사라진다.
  - Checklist:
    - [ ] 기존 registry UI로 컨트롤·탐색·데이터·폼·QR·대화·상태 등 다양한 카드 15개 이상을 만들고 열마다 서로 다른 높이로 촘촘하게 쌓는다.
    - [ ] 큰 두 줄 제목·빈 공간·하단 상태 배너를 제거하고 첨부 화면의 hero 비율·열 수·간격·중립 배경·하단 콘텐츠 페이드를 맞춘다.
    - [ ] local interaction과 키보드 focus를 보존하고 375/768/1440/1920 light/dark 시각 비교·overflow·typecheck·lint·production build를 검증한다.
  - Docs:
    - docs:prd/leement-prd.md
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
- [x] 테스트 실행 및 통과 (아래에 명령어/결과 기록) <!-- lee-spec-kit:completion:tests -->
- [ ] 최종 결과를 공유했고, 필요한 사용자 확인을 문서화된 workflow checkpoint 기준으로 기록함 <!-- lee-spec-kit:completion:final-outcome -->

### 테스트 실행 기록

> 명령어당 1개 행만 유지합니다. 같은 명령어를 다시 실행하면 새 행 추가 대신 기존 행의 시간/결과를 갱신하세요.
> `마지막 실행`은 `YYYY-MM-DD` 형식(로컬 날짜)으로 기록하세요.

| 명령어                   | 마지막 실행(로컬, YYYY-MM-DD) | 결과               |
| ------------------------ | ----------------------------- | ------------------ |
| `pnpm run typecheck` | 2026-10-08 | PASS (5 tasks) |
| `pnpm run lint` | 2026-10-08 | PASS (workspace + registry) |
| `pnpm run test` | 2026-10-08 | PASS (32 files, 706 tests) |
| `pnpm run build` | 2026-10-08 | PASS (production SSG/registry 포함) |
| production HTTP 검증 | 2026-10-08 | PASS: old/new15, Preview15, registry15, unknown404×3 |
| production 브라우저 검증 | 2026-10-08 | PASS: 15개 상세/Code/clipboard, anchor2, search15, Showcase, desktop/mobile |
| 홈 responsive/접근성 검증 | 2026-10-08 | PASS: 375/768/1440/1920 × light/dark 8조합, 전체 폭/페이드, local state, focus, overflow, reduced motion |

완료 기록에는 테스트뿐 아니라 build·typecheck·lint 등 Plan에서 정한 검증과 수동 검증 증거를 포함합니다. 자동 검사의 기준은 실제 `workflow.featureChecks`이며, 검사 생략은 통과로 기록하지 않고 명시적인 사유를 남깁니다.

### 보존한 화면 근거

- [1440 light](./artifacts/home-1440-light.png), [1440 dark](./artifacts/home-1440-dark.png)
- [768 light](./artifacts/home-768-light.png), [768 dark](./artifacts/home-768-dark.png)
- [1920 light](./artifacts/home-1920-light.png), [1920 dark](./artifacts/home-1920-dark.png)
- [375 light](./artifacts/home-375-light.png), [375 dark](./artifacts/home-375-dark.png)
- 모든 화면은 production 서버에서 실제 예제를 조작한 후 캡처했다. 모바일 범주 탐색은 열린 상태, View components에는 키보드 focus가 보인다.
