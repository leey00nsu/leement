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

## D003: 최종 동작과 소비자 CSS 재현 검증 (2026-09-28)

- **Context**: 편집기 내부에서 값이 바뀌는 것만으로는 복사 CSS와 실제 설치 환경의 일치, 모드·저장·접근성 계약을 확인할 수 없다.
- **Constraints**: Plan Verification Contract의 실제 Chromium, 별도 소비자, 기존 전체 검사로 검증한다. 문서 전용 복제 컴포넌트나 영속 테스트 인프라를 추가하지 않는다.
- **Options**: docs의 CSS만 확인, copied CSS를 별도 Tailwind 소비자에 컴파일해 비교.
- **Decision**: 실제 브라우저의 여섯 route와 별도 Tailwind 소비자에 복사 CSS를 적용해 computed style을 확인했다. 변동값과 기본값 분리, light/dark 격리, 저장·초기화, 접근성 피드백과 전체 체크를 완료했다.
- **Rationale**: 복사 문자열 자체가 유효해도 Tailwind와 theme의 실제 utility가 다른 값을 읽을 수 있으므로 소비자 computed style이 완료 기준이다.
- **Trace**:
  - **DOING 시작 시점**: 여섯 Foundation route와 외부 소비자에 같은 CSS를 적용해 computed style을 비교한다. 이전 수동 확인에서 첫 입력의 저장 복원 경합을 발견해 편집기 활성화 시점을 수정했으므로 reload 직후 입력도 확인한다.
  - **DONE 전 확정 시점**: Chromium에서 light 배경 `#202020` 변경 후 dark 배경 `#111113` 유지, 저대비 1.0:1 경고, route 이동과 reload 후 spacing Button 108px 유지, reset 후 기본 배경 `#ffffff`·localStorage 제거를 확인했다. Georgia 글꼴, radius 48px, shadow 0 12px 36px, motion 1s, reduced motion 0s, 390px 모바일 가로 overflow 없음, range 방향키·focus outline, 잘못된 색상 거부와 복사 실패 피드백을 확인했다. 별도 Tailwind/PostCSS 소비자에 복사 CSS를 넣자 height 60px, font 20px/500/40px, radius 16px, shadow 12px 36px, primary `rgb(18,52,86)`, body `rgb(250,245,240)`, duration 0.3s 및 dark primary `rgb(171,205,239)`가 재현됐다. `pnpm check`는 build/typecheck/lint 및 12개 파일의 69개 테스트를 통과했다.
- **Evidence**: `pnpm check` 성공, [Feature 태스크 검증 기록](./tasks.md), 위 Chromium computed style 및 독립 소비자 결과.
- **Residual risks**: 테마 편집값은 브라우저 localStorage에 저장되므로 첫 HTML 페인트 뒤 클라이언트 복원 시 짧은 기본 테마 표시가 가능하다. 다만 편집 제어는 복원 완료 뒤 활성화되어 첫 조작은 유실되지 않는다. 복사 CSS 적용은 소비자 CSS import 순서를 따라야 한다.

## D004: 사용자 피드백으로 색상 선택과 범주별 미리보기 수정 (2026-09-29)

- **Context**: 현재 Color 스와치는 장식이라 클릭할 수 없고, 여섯 Foundations 페이지에 같은 Workspace settings 카드가 반복되어 각 토큰의 효과가 덜 분명하다.
- **Constraints**: 현재 Feature를 계속하며 토큰 정본과 복사 CSS 계약을 유지한다. picker와 preview는 기존 registry source를 사용하고 키보드 접근성을 보존한다.
- **Options**: native color input만 스와치에 붙이는 방식, 기존 Leement ColorPicker를 Popover 안에 넣는 방식. 공통 카드 유지, 범주별 preview 구성.
- **Decision**: 스와치를 registry Popover trigger로, 내용은 registry ColorPicker로 바꾼다. Canvas의 sRGB 픽셀값으로 OKLCH/alpha 기본색을 picker HEX에 전달하고 텍스트 입력에는 원래 색상 표현을 유지한다. 여섯 범주에 각기 관련된 실제 registry 예제를 두고 공통 Workspace settings 카드를 제거한다. 좁은 화면의 popup은 내부 스크롤을 허용한다.
- **Rationale**: Leement의 접근 가능한 색상 선택 동작을 재사용하면서 모드별 preview state와 기존 유효성 검사를 공유한다. 범주마다 바뀌는 토큰의 효과를 먼저 보이게 한다.
- **Trace**:
  - **DOING 준비 시점**: registry에 `ColorPicker`와 Base UI `Popover`가 이미 있으므로 이를 조합한다. OKLCH와 8자리 HEX 기본값을 picker에 정확히 전달하려면 브라우저에서 sRGB/alpha로 변환해야 한다.
  - **DONE 전 확정 시점**: Chromium에서 light 배경 스와치를 Enter로 열고 native well 선택 `#123456`이 본문과 텍스트 필드에 반영되는 것을 확인했다. Escape는 picker를 닫고 trigger에 초점을 돌렸다. Dark 배경은 독립적으로 남았고 picker에서 `#ABCDEF`를 선택할 수 있었다. Dark border 기본 투명도는 `#FFFFFF1A`, light brand accent OKLCH 기본색은 `#928EEB`로 나타났다. 여섯 route의 preview 제목·registry 요소가 범주별로 다르고 Workspace settings 문구는 0개였다. 375px 폭의 844/667/568px 높이에서 popup이 viewport 안에 있고 내부 스크롤이 가능했다. `pnpm check`는 build/typecheck/lint와 12개 파일의 69개 테스트를 통과했다.
- **Evidence**: `apps/docs/components/foundation-editor.tsx`, `registry/ui/color-picker.tsx`, `registry/ui/popover.tsx`, `pnpm check` 성공 및 위 Chromium 검사 기록.
- **Consequences**: picker는 sRGB HEX로 값을 내보내며 원래 OKLCH 문자열은 텍스트 필드를 수정하지 않는 동안 유지된다. 임시 preview와 기본 token 정본의 관계는 그대로다.
