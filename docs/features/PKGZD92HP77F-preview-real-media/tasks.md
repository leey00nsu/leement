# Tasks: preview-real-media

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
- **브랜치**: `feat/PKGZD92HP77F-preview-real-media`
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

- [DONE][PRD-FR-008] T-PKGZD92HP77F-preview-real-media-01 미디어 자리 전수 판정과 Pixabay 최종 자산·제공 방식 확정
  - Date: 2026-10-07
  - Acceptance:
    - 초기 73개 후보와 추가 발견 자리마다 역할·판정·이유·Preview 경로를 기록하고 미검수 자리를 남기지 않는다.
    - 실제 사진·서로 다른 클립·음악 두 곡을 선정하고 source URL·조건·메타데이터·해시·로그인 없는 로드/재생·CORS를 확인한다.
  - Checklist:
    - [x] 직접/간접 source, CSS, 기본 props와 누락된 사진 조합을 확인하여 조사 목록 보강
    - [x] 공식 무료 후보 시청/청취와 비율·권리·Content ID·전송 크기 검토
    - [x] 실제 자산 source 목록과 역할별 사용 계획을 작성하고 만료/추측 URL·원본 파일 재배포 제외
    - [x] 최종 선정 근거·제한·다운로드 증빙을 Feature Decisions와 artifacts에 동기화
  - Review Evidence: -
  - Review Decision: -
  - Review Round: -
  - Reviewed Head: -
  - Reviewed Tree: -

  - Verification: source 83개 역할/실제 route 검토; 공식 16개 자산 선정; fresh browser image/video/audio decode 16/16 및 모든 video play/time advance/seek 통과. [D006](./decisions.md#d006-t01-최종-자산과-제공-검증-완료-2026-10-07), [전송/해시 증거](./artifacts/asset-source-preflight.json). 실제 수정 Preview는 T02~T05에서 검증.

- [DONE][PRD-FR-007] T-PKGZD92HP77F-preview-real-media-02 Components·Patterns의 사진과 대표·추가 예제 교체
  - Date: 2026-10-07
  - Acceptance:
    - 사진 슬롯이 실제 Pixabay 콘텐츠를 표시하며 크롭/줌/비교·아바타·첨부·사이드바 예제와 복사 코드가 같은 의미를 전달한다.
  - Checklist:
    - [x] 대표/추가/Showcase의 그림·일반 데모 외부 사진을 역할별 검증 자산으로 교체
    - [x] 같은 샘플 프로필의 사진·이름을 일치시키고 alt·텍스트·비교 전후를 실제 콘텐츠에 맞춤
    - [x] 브랜드·아이콘·의도적인 broken image/fallback 유지 판정과 적용 결과 기록
    - [x] 수정 예제 light/dark·390/1440px, 실제 디코딩·관련 키보드 조작과 scoped 검사 확인
  - Review Evidence: -
  - Review Decision: -
  - Review Round: -
  - Reviewed Head: -
  - Reviewed Tree: -

  - Verification: 43 example 파일/독립 Preview 48경로 × 4조건=192건 실제 사진 디코딩·화면 확인. Crop/Zoom/Comparison keyboard·240px, Sidebar 모바일 sheet, broken avatar·MediaReveal retry 유지. docs typecheck·변경 파일 eslint·기존 focused tests 2파일/15개 PASS. [검증 증거](./artifacts/media-verification.json), [D007](./decisions.md#d007-t02-사진프로필비교-예제의-사실성-2026-10-07).

- [TODO][PRD-FR-016] T-PKGZD92HP77F-preview-real-media-03 Blocks 사진 기본값·예제 조합과 샘플 콘텐츠 정비
  - Date: 2026-10-07
  - Acceptance:
    - About·Blog·Team·Testimonial 등 모든 판정된 사진 자리와 사진 props가 빠진 조합을 실제 미디어로 보여준다.
    - registry 기본값과 사용자 제공 props는 docs public 경로나 docs 모듈에 의존하지 않고 설치 source가 기존 API를 유지한다.
  - Checklist:
    - [ ] About/Blog/BlogPost/Feature/Team/Testimonial/Changelog와 추가 발견 Blocks 교체
    - [ ] CaseStudies/CaseStudy/Form 등 필요한 미디어 props를 예제에 명시적으로 제공
    - [ ] 로고·인증 배지·제품 화면 역할을 구분하고 가상 샘플 맥락·alt·내용을 맞춤
    - [ ] 기본값 소비 화면과 대표/추가 예제의 실제 표시·반응형·scoped 검사 기록
  - Review Evidence: -
  - Review Decision: -
  - Review Round: -
  - Reviewed Head: -
  - Reviewed Tree: -

- [TODO][PRD-FR-008] T-PKGZD92HP77F-preview-real-media-04 실제 영상·음악·포스터·자막 적용과 재생 검증
  - Date: 2026-10-07
  - Acceptance:
    - VideoPlayer·Hero·Stories·Reel·AudioPlayer가 실제 미디어를 로드하여 정상 재생/탐색/소스 변경하고 이전 재생을 정리한다.
  - Checklist:
    - [ ] 가로 영상과 세로 Reel 클립·실제 장면 포스터·실제 곡 두 개로 교체
    - [ ] 제작자·제목·설명·자막을 실제 콘텐츠와 맞추고 초기 음악 autoplay 제외
    - [ ] 실제 duration/currentTime 증가·seek/음량/mute·파형 decode·source change/close cleanup 확인
    - [ ] 기존 오류/reset/native fallback·reduced motion·키보드 조작과 focused media 통합 검사 확인
    - [ ] 실제로 발견된 player 결함만 계약 범위 안에서 수정하고 필요한 기존 회귀 테스트를 갱신
  - Review Evidence: -
  - Review Decision: -
  - Review Round: -
  - Reviewed Head: -
  - Reviewed Tree: -

- [TODO][PRD-FR-005] T-PKGZD92HP77F-preview-real-media-05 전수 화면·소비자·출처 문서와 최종 검증
  - Date: 2026-10-07
  - Acceptance:
    - 최종 자리 목록에 미검수 항목이 없고 모든 변경 독립 Preview와 기본 소비 화면의 실제 표시·재생·내용을 검증한다.
    - 독립 registry 소비자와 전체 type/lint/test/build가 통과하고 PRD·미디어 정책·출처 안내가 구현과 일치한다.
  - Checklist:
    - [ ] light/dark × 390/1440px 전체 변경 Preview와 중요한 240px/키보드/reduced motion 상태 검증
    - [ ] 복사 코드·독립 React/Tailwind 소비자 registry 설치·tsc/build·실제 미디어 로드와 조작 확인
    - [ ] 무참조 생성 데모 자산만 제거하고 출처 목록·제공 경로·권리 증빙 최종 정리
    - [ ] PRD-FR-005/008, 디자인 미디어/Preview 규칙, THIRD_PARTY_NOTICES 동기화
    - [ ] 설정된 전체 검사 실행, Feature 증거·Acceptance·workflow sync marker 동기화
  - Docs:
    - docs:prd/leement-prd.md
    - docs:designs/design-system.md
    - project:THIRD_PARTY_NOTICES.md
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

<!-- lee-spec-kit:workflow-sync sha256:af8aef6fe4aa4affa6aebc9ca1db35e824d541340d2fe40c4c709340a43df17c -->
