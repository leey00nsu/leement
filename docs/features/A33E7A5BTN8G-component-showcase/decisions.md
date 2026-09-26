# Decisions Log

기술 결정과 그 이유를 기록합니다.
canonical docs surface 밖의 unmanaged docs 산출물(예: `docs/plans/*`, `docs/superpowers/*`)이 있더라도, 실제로 채택한 대안과 선택 이유는 이 파일에 다시 남겨 Feature의 결정 이력을 유지합니다.

> ADR(Architecture Decision Record)은 구현 중 내린 중요한 기술/구조 결정을 남기는 기록입니다.
> 나중에 "왜 이렇게 만들었는지"를 추적하고, 팀 합의를 재확인하기 위해 작성합니다.

> 형식: `DNNN: component-showcase 결정 (2026-09-26)`
> 결정 ID는 Feature별로 독립된 번호를 사용하며 Feature ID와 관계없이 `D001`부터 시작합니다.

기록 원칙:

- 새 ADR 생성에는 `npx lee-spec-kit decision add <feature-ref> --title "..." --context "..." --decision "..." --rationale "..." --evidence "..."` 사용을 우선하세요.
- 수동 작성도 마지막 ADR 뒤에 추가해 D001 → D002 순서를 유지하세요. 문서 안내문 앞에 삽입하거나 기존 ID를 재번호화하지 마세요. 같은 결정의 재실행·검증 결과는 해당 ADR의 Trace/Evidence를 갱신하고, 새 선택이나 범위 변경일 때만 새 ADR을 만드세요.
- 모든 ADR은 **Decision(무엇을 선택했는가)** + **Trace(어떻게 고민했고 무엇을 확인했는가)** 를 함께 남깁니다.
- 작성 타이밍을 고정합니다.
  - 태스크 시작(`[TODO] -> [DOING]`): `Context/Constraints`와 `Trace(초기 가설)`를 1~3줄로 먼저 기록
  - 태스크 완료 직전(`[DOING] -> [DONE]`): `Options/Decision/Rationale`를 최종화하고 `Trace`를 보강
  - PR 머지 후: 실제 결과/영향을 `Trace(머지 후 확인)`에 1~2줄 추가
- 모든 ADR에는 최소 1개 이상의 **Evidence 링크**(커밋/PR/테스트 로그 중 하나 이상)를 남깁니다.
- 디자인 시스템 변경이나 예외를 기록할 때는 영향 받는 규칙과 범위, 예외 이유, 제거 조건, 실행 가능한 정본의 동기화 영향을 함께 남깁니다.

---

## D001: 갤러리는 registry 원본을 재사용한다 (2026-09-26)

- **Context**: 상세 문서에는 이미 registry 파일을 import하는 `Preview`가 있으나 모든 항목을 한 화면에서 찾을 수 없다.
- **Constraints**: Source ownership 원칙, 작은 v0.1 인프라, 기존 접근성 동작을 유지한다.
- **Options**: ① 갤러리 전용 컴포넌트 복사본 작성 ② 기존 `Preview`와 metadata 재사용.
- **Decision**: 기존 `Preview`와 `items` metadata를 재사용하고, 테마는 갤러리의 `data-lm-theme`로 한정한다.
- **Rationale**: 문서 예시와 배포 소스가 갈라지지 않는다. 테마 토글도 별도 상태 엔진이 필요 없다.
- **Trace**:
  - **DOING 시작 시점**: 기존 상세 문서가 `Preview`와 registry 원본을 사용하고 있음을 확인했다.
  - **DONE 전 확정 시점**: 갤러리 14개, 모바일 접이식 메뉴, 선택 상태를 구현했고 standalone docs build와 production HTTP·브라우저 검증이 통과했다.
  - **머지 후 확인**: 로컬 통합 후 결과를 기록한다.
- **Evidence**:
  - **Commit**: 태스크 커밋 후 해시를 기록한다.
  - **Test/Log**: `pnpm check` PASS (build/typecheck/lint/3 tests), production HTTP 14/14, Chromium 390px overflow 없음, Aside Dialog/Escape·Tooltip/focus 확인.
- **Consequences**: 갤러리와 상세 문서가 같은 예시를 공유한다.

## D002: 기존 Feature에서 Kibo식 문서 경험을 확장한다 (2026-09-26)

- **Context**: 사용자는 컴포넌트 갤러리가 Kibo처럼 웹에서 탐색·시연·코드 확인까지 가능하기를 원하고, 새 Feature가 아닌 현재 Feature의 방향 변경이라고 명시했다.
- **Constraints**: Leement token·registry가 SSOT다. 기존 Next docs 앱과 14개 항목을 유지한다. Kibo 브랜드와 외부 이미지는 가져오지 않는다.
- **Options**: ① Kibo docs 앱 전체를 포크 ② 기존 docs 앱에 탐색·Preview/Example/Source 흐름만 이식.
- **Decision**: ②를 선택한다. `A33E7A5BTN8G`에 새 T02를 추가해 구현하고 이미 DONE인 T01은 다시 쓰지 않는다. Kibo의 Preview 탭 구조와 예제 파일 기반 코드 표시를 Leement에 맞춰 적용한다. 실질적인 Kibo 코드 이식에는 MIT 고지를 포함한다.
- **Rationale**: Fumadocs 및 Kibo의 내부 패키지를 도입하지 않고도 원하는 사용 경험을 제공할 수 있다. 배포 소스와 문서 예제가 갈라지지 않는다.
- **Trace**:
  - **DOING 시작 시점**: 기존 Feature는 이미 main에 통합되고 workflow-stage가 done을 반환했다. 방향 변경 요청에 따라 새 태스크를 추가하고 완료 체크를 다시 열었다.
  - **DONE 전 확정 시점**: 14개 예제를 실행 파일로 분리하고 같은 파일을 코드 뷰에 사용했다. Source는 생성된 registry JSON의 실제 배포 내용을 사용한다. Next 빌드의 광범위한 파일 추적 경고를 없애기 위해 원본 디렉터리 직접 읽기 대신 `public/r`만 읽는다. `pnpm check`, 28/28 HTTP, Chromium 상호작용 검증이 통과했다.
  - **머지 후 확인**: 실제 통합 결과를 기록한다.
- **Evidence**:
  - **Source**: https://github.com/shadcnblocks/kibo/blob/main/apps/docs/components/preview/index.tsx
  - **License**: https://github.com/shadcnblocks/kibo/blob/main/license.md
  - **Commit**: `b785c15` (UI 구현), `cb775a4` (검증·문서)
  - **Test/Log**: `pnpm check` PASS, production HTTP 28/28, Chromium 390px 검색/필터·ArrowRight·clipboard·dark 유지·Dialog/Escape PASS.

## D003: 잘못 생성한 중복 Feature 등록을 사용하지 않는다 (2026-09-26)

- **Context**: 기존 A33 Feature를 확인하기 전에 XC5H2H9CV5H4 Feature를 생성·커밋했다. 사용자는 새 Feature를 만들라는 의도가 아니었다.
- **Constraints**: `commit-audit --enforce`가 canonical Feature 문서 삭제를 `CANONICAL_FEATURE_DOC_DELETION`으로 차단한다.
- **Options**: ① 차단을 우회해 파일 삭제 ② 중복 등록을 보존하되 취소/대체 기록을 남기고 A33만 진행.
- **Decision**: ②를 선택한다. XC5는 구현하지 않고 A33 작업만 수행한다. 잘못된 등록은 감사 가능하게 남긴다.
- **Rationale**: 도구의 문서 삭제 보호를 우회하지 않으면서 실제 변경 범위를 기존 Feature에 모은다.
- **Trace**:
  - **DOING 시작 시점**: 새 worktree/branch는 정리했고 XC5의 코드 구현은 없었다. git revert의 문서 삭제가 commit-audit에서 차단되어 revert를 중단했다.
  - **DONE 전 확정 시점**: XC5 worktree와 branch를 정리했고, 남겨진 등록 문서의 상단에 withdrawn duplicate를 명시했다. A33 T02에서만 코드와 검증을 기록했다.
  - **머지 후 확인**: 실제 통합 결과를 기록한다.
- **Evidence**:
  - **Commit**: e4d73d4 (잘못된 Feature 등록)
  - **Test/Log**: `commit-audit --json --enforce` → `CANONICAL_FEATURE_DOC_DELETION`.
