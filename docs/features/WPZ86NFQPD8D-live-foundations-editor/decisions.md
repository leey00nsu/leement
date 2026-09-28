# Decisions Log

기술 결정과 그 이유를 기록합니다.
canonical docs surface 밖의 unmanaged docs 산출물(예: `docs/plans/*`, `docs/superpowers/*`)이 있더라도, 실제로 채택한 대안과 선택 이유는 이 파일에 다시 남겨 Feature의 결정 이력을 유지합니다.

> ADR(Architecture Decision Record)은 구현 중 내린 중요한 기술/구조 결정을 남기는 기록입니다.
> 나중에 "왜 이렇게 만들었는지"를 추적하고, 팀 합의를 재확인하기 위해 작성합니다.

> 형식: `DNNN: live-foundations-editor 결정 (2026-09-28)`
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

## D001: Preview override를 canonical token과 분리 (2026-09-28)

- **Context**: Foundations는 token JSON을 정적으로 보여 주지만 사용자는 값을 조절하며 문서 전체의 실제 UI가 바뀌는 경험을 원한다.
- **Constraints**: `@leement/tokens`와 `@leement/theme`이 배포 기본값의 정본이며, docs의 임시 값이 이를 덮어쓰거나 registry source를 복제하면 안 된다.
- **Options**: token JSON 자체를 편집하는 서버 기능, DOM 인라인 style만 수정하는 방식, 허용 목록으로 검증한 CSS 변수 override를 style element에 넣는 방식.
- **Decision**: docs root에 한 개의 preview provider를 두고, token JSON에서 만든 허용 목록과 검증 규칙에 통과한 값만 versioned localStorage에 저장한다. CSS 출력과 실제 preview는 같은 함수를 사용한다. Leement 변수와 실제 Tailwind utility 변수를 함께 연결하고 light/dark 규칙 및 reduced-motion 규칙을 style element에서 분리한다.
- **Rationale**: 배포 token·theme·registry를 건드리지 않고도 docs 전체가 같은 CSS를 읽는다. 단일 style element는 모드별 selector와 미디어 쿼리를 표현할 수 있으며 복사 CSS와 동작을 공유한다.
- **Trace**:
  - **DOING 시작 시점**: 실제 CSS에서 `h-10`은 `--spacing`, `text-sm`은 `--text-sm`, `rounded-md`는 `--lm-radius-md`, 기본 transition은 `--default-transition-duration`을 읽는다. Leement 변수만 바꾸면 일부 조절값은 UI에 영향을 주지 않으므로 호환 변수까지 연결해야 한다.
  - **DONE 전 확정 시점**: `pnpm typecheck`, `pnpm lint`, focused Vitest 3개가 통과했다. Chromium에서 Button height 40→60px, radius 8→16px, text 14→16px, primary 배경 `rgb(26,26,29)`→`rgb(18,52,86)`, duration 180→300ms를 측정했다. Showcase `shadow-sm`은 0 4px 12px, dark primary는 자체 기본값 `#fafafa`, reduced motion은 0s를 확인했다.
  - **머지 후 확인**: 병합 후 기록.
- **Evidence**:
  - **Source**: `packages/tokens/src/tokens.json`, `packages/theme/build.mjs`, `apps/docs/lib/foundation-preview.ts` 및 [검증 코드](../../../apps/docs/lib/foundation-preview.test.ts).
  - **Test/Log**: `pnpm exec vitest run apps/docs/lib/foundation-preview.test.ts` (3 passed), `pnpm typecheck` (5 packages), `pnpm lint`; Chromium computed style 수치 위 Trace.
- **Consequences**: preview와 실제 기본값의 관계를 docs UI에 명시해야 한다. `@leement/tokens`와 theme 기본값은 그대로다.
