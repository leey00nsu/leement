# Decisions Log

기술 결정과 그 이유를 기록합니다.
canonical docs surface 밖의 unmanaged docs 산출물(예: `docs/plans/*`, `docs/superpowers/*`)이 있더라도, 실제로 채택한 대안과 선택 이유는 이 파일에 다시 남겨 Feature의 결정 이력을 유지합니다.

> ADR(Architecture Decision Record)은 구현 중 내린 중요한 기술/구조 결정을 남기는 기록입니다.
> 나중에 "왜 이렇게 만들었는지"를 추적하고, 팀 합의를 재확인하기 위해 작성합니다.

> 형식: `DNNN: visual-design-audit 결정 (2026-09-27)`
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

## D001: 항목 수보다 실제 렌더링과 사용 사례로 디자인 품질을 판정한다 (2026-09-27)

- **Context**: 이전 Feature는 41개 Kibo 대응 항목을 빠르게 제공했고 일부를 의도적으로 작은 source로 단순화했다. 사용자는 카탈로그 존재 여부보다 디자인적으로 잘못 구현된 항목을 전수 확인하고 재구성하기를 요청했다.
- **Constraints**: Leement token/rule이 정본이고 CopySinger light 및 Leesfield dark 의도가 우선한다. Kibo 원본은 MIT 사용 사례와 anatomy의 참조이지만 브랜드나 픽셀 동일성 목표는 아니다. 공개 79개 item의 source ownership과 shadcn registry 설치 방식은 유지한다.
- **Options**: ① 이름·수·테스트 통과만 확인한다. ② source 비교와 실제 문서 미리보기의 light/dark, desktop/mobile, 핵심 상태를 항목별로 확인한다.
- **Decision**: ②를 선택한다. 79개 항목별 감사표를 Feature artifact로 유지하고 열린 P1/P2 디자인 결함을 모두 이 Feature에서 수정한다.
- **Rationale**: 기존 테스트는 레이아웃, 대비, 정보 밀도와 시각 상태를 증명하지 못한다. 실제 사용자 화면과 소비자 source를 함께 확인해야 한다.
- **Trace**:
  - **DOING 시작 시점**: `registry.json`은 80개 항목이며 비공개 성격의 `utils`를 제외하면 79개다. 고정 Kibo commit의 동명 패키지 41개와 대응한다. ColorPicker, Gantt, Table의 source는 현재 Leement에서 훨씬 단순한 구성이라 실제 화면/사용 사례 확인이 우선이다.
  - **DONE 전 확정 시점**: 79개 source와 docs route가 모두 존재하고 4모드의 실제 preview가 HTTP 200으로 렌더링됐다. Kibo의 41개 동명 공개 데모도 열어 source와 사용 사례를 매핑했다. 공통 이중 preview 프레임(X01), ColorPicker의 anatomy 차이, ImageCrop의 0×0 이미지, Calendar/Gantt/Table의 정보 밀도 부족을 감사표의 P1/P2 후보로 기록했다. 20개 대표 조작을 시도했고 9개는 열린 semantic overlay/listbox를 확인했다. 조작 미확인 항목은 최종 통과로 처리하지 않았다.
  - **머지 후 확인**: 통합 후 결과를 기록한다.
- **Evidence**: [기존 대응표](../GMA8H5L3TLTY-expanded-component-catalog/artifacts/reference-coverage.md), [Kibo source 기준](https://github.com/shadcnblocks/kibo/tree/3d63cdb15b79d972e3dc38a10997987672f9b263), [이번 감사표](./artifacts/catalog-visual-audit.md)
- **Consequences**: source 코드가 짧다는 이유만으로 결함을 확정하지 않으며 `intentional` 판정에도 명시적인 디자인 근거가 필요하다.

## D002: 공통 컨트롤의 원본 규칙을 역할별로 재검증한다 (2026-09-27)

- **Context**: Button, Input, Card 등 기본 UI는 두 앱에 거의 같은 source가 있지만 Leement의 단순화 과정에서 상태와 표면 규칙 일부가 달라졌다.
- **Constraints**: 수치 복제가 목표는 아니다. Leement의 semantic token과 현재 public API를 우선하며 source ownership과 접근성을 유지한다.
- **Options**: ① 두 앱의 `dark:bg-input/30`, 개별 카드 padding 등의 class를 그대로 옮긴다. ② 공통 semantic `surface.default`와 20/16px 간격 규칙으로 표현하고 실제 DOM에서 확인되는 결함만 교정한다.
- **Decision**: ②를 선택했다. Card의 이미지/간격/Footer, Input의 file/어두운 표면, Textarea의 그림자/모바일 글자, Button의 열린 메뉴 상태, Badge/Separator/Switch/Tabs의 상태와 방향을 registry 원본에서 수정했다. 공통 docs preview의 이중 프레임도 제거했다.
- **Rationale**: dark utility class는 `.dark`에만 의존할 수 있지만 Leement는 `[data-lm-theme="dark"]`도 지원한다. semantic surface 변수는 두 선택 방식에서 같은 결과를 낸다. Card의 원본 두 제품은 사실상 같은 정보 구조이므로 Leement spacing으로 재표현했다. Tabs는 원본과 같은 class가 실제 Base UI의 `data-orientation`과 불일치했으므로 DOM을 기준으로 고쳤다.
- **Trace**:
  - **DOING 시작 시점**: 두 앱의 실제 core source와 Leement registry, 문서 규칙을 대조한다. Card의 image clipping/footer, Input의 file 상태, Textarea shadow가 우선 확인 후보이다.
  - **DONE 전 확정 시점**: 10개 공개 preview를 두 테마×두 화면에서 재촬영해 stage overflow가 없음을 확인했다. 실제 DOM에서 Tabs가 가로로 늘어지던 문제를 찾아 column/40px로 교정했다. Button/Input/Select의 포커스 링, Card의 이미지 clipping, Switch의 Space 토글, Select 옵션 열기, Tabs의 방향키+Enter 선택을 브라우저에서 확인했다. `pnpm registry:build`, `pnpm typecheck`, `pnpm lint`, `pnpm exec vitest run registry/ui/button.test.tsx`가 통과했다. 토큰 값 변경은 필요하지 않았다. 모든 항목의 최종 소비자 설치는 Task 10에서 확인한다.
  - **머지 후 확인**: 통합 후 결과를 기록한다.
- **Evidence**: [두 제품 대응표](../GMA8H5L3TLTY-expanded-component-catalog/artifacts/reference-coverage.md), [이번 감사표와 Task 02 브라우저 재검증](./artifacts/catalog-visual-audit.md#task-02-core-control-recheck), [Card after](./artifacts/previews/card-dark-after.png), [Tabs after](./artifacts/previews/tabs-dark-after.png)
- **Consequences**: 디자인 규칙 변경은 `docs/designs/design-system.md`, registry source, docs examples/metadata에서 함께 반영했다. 제품별 수치를 평균 내지 않고 브랜드색도 기본 neutral action에 전파하지 않는다. 별도 예외는 없다.
