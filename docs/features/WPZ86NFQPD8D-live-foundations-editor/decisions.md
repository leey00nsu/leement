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

## D002: Foundations 편집기와 실제 UI 미리보기 (2026-09-28)

- **Context**: 여섯 Foundations 페이지에 정적인 토큰 표만 있으며 각 수치를 바꾸는 진입점과 효과 확인 화면이 없다.
- **Constraints**: 기존 설명과 정본 토큰 표를 유지하고, 실제 registry source를 미리보기에 사용하며, 사이트 전체와 같은 CSS 변수를 읽어야 한다.
- **Options**: 복제 예제에 인라인 스타일을 넣는 방식, 실제 registry 컴포넌트를 렌더링하고 공통 CSS 변수를 적용하는 방식.
- **Decision**: 서버 Foundations 문서는 기본 토큰 참조를 계속 렌더링하고 client editor만 추가한다. 편집기는 실제 Button/Input/Card 및 브랜드 Skeleton/GradientText를 사용하고 모드 전환은 기존 `data-lm-theme`를 따른다. 저장 복원이 끝난 뒤 제어를 활성화한다. theme의 `@theme inline`에 빠져 있던 mono·type scale·weight·line-height·spacing·shadow-lg·default motion 연결을 보완한다.
- **Rationale**: 사용자에게 보이는 변화가 소비자 컴포넌트와 같은 규칙을 따른다. 기본 token 표를 임시 값과 혼동하지 않고, 첫 조작 유실과 Tailwind 기본값 이탈을 막는다.
- **Trace**:
  - **DOING 시작 시점**: 현재 Foundations route는 서버 컴포넌트이며 ThemeToggle이 `data-lm-theme`와 localStorage를 변경한다. 편집기는 클라이언트 컴포넌트로 추가하고 현재 모드를 root attribute에서 읽는 방식을 우선 검토한다.
  - **DONE 전 확정 시점**: Chromium에서 여섯 페이지의 입력을 열었고 color 전경/배경 변경, 저대비 경고, light/dark 분리, CSS 복사, spacing·radius·shadow·motion의 실제 computed style 변화를 확인했다. 390px에서 가로 스크롤이 없고 키보드 range 조작이 반영됐다. `pnpm --filter @leement/docs typecheck`, `pnpm lint`, focused Vitest 3개가 통과했다.
- **Evidence**: `apps/docs/components/foundation-editor.tsx`, `apps/docs/app/foundations/[slug]/page.tsx`, `packages/theme/build.mjs`; 위 Chromium 검증 및 focused 검사 로그.
- **Consequences**: theme 생성 CSS와 docs preview가 같은 기본값을 사용한다. 색상은 현재 모드, 나머지는 두 모드의 공통 편집값이다.
