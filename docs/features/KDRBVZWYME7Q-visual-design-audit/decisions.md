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

## D003: 오버레이와 피드백의 실제 열린 상태를 기준으로 판정한다 (2026-09-27)

- **Context**: 13개 오버레이·피드백·로딩 항목 중 닫힌 trigger만 보이는 미리보기가 있어 기본 캡처만으로 surface, 상태 및 키보드 동작을 판정할 수 없다.
- **Constraints**: Radix/Base UI의 focus·Escape·aria 계약과 Leement semantic surface를 유지한다. 불필요한 새 variant보다 실제 상태 예제를 우선한다.
- **Options**: ① 처음 보이는 trigger/정적 상태만 승인한다. ② 실제 열린 상태·조작·reduced-motion을 검증하고 공통 token 및 필요한 API를 함께 재구성한다.
- **Decision**: ②를 선택했다. CopySinger/Leesfield의 `--muted` 근거로 `surface.muted`를 추가하고 shadcn `--muted` alias를 그 역할에 연결했다. Dialog/Sheet와 예제를 완성하고 오버레이의 상태별 reduced-motion 규칙을 고쳤다. Kibo 대응 Spinner에는 8개 형태를, Status에는 Indicator/Label 조합을 추가하되 기존 API를 유지했다.
- **Rationale**: 이전 `--muted`는 page background에 연결되어 Skeleton·Progress와 탭 표면이 특히 어두운 모드에서 묻혔다. 상태 선택자의 우선순위 때문에 일반 reduced-motion class만으로는 애니메이션이 멈추지 않았다. Kibo 두 항목의 핵심 선택지와 조합성은 작은 Leement source로 전달할 수 있고, product-specific 서비스 상태명은 semantic tone과 라벨로 표현하는 편이 재사용에 맞다.
- **Trace**:
  - **DOING 시작 시점**: Dialog, Dropdown Menu, Popover, Sheet, Tooltip, Alert Dialog의 열린 상태와 Skeleton/PageSkeleton/StatusNotice/Progress/Toast/Spinner/Status의 의미·대비·motion을 먼저 본다.
  - **DONE 전 확정 시점**: 13개 항목×4모드의 실제 상태 52개에서 stage overflow·팝업 화면 이탈·Escape 닫힘·초점 복귀 실패가 없었다. Dialog 저장, Popover Switch, Dropdown destructive, AlertDialog 확인, Progress `aria-valuenow=64`, StatusNotice role, PageSkeleton busy를 확인했다. 여덟 Spinner glyph와 Status 조합은 양 테마·두 폭에서 렌더링됐다. reduced-motion에서 Dialog/AlertDialog/Dropdown/Popover/Sheet/Skeleton/Spinner/Status pulse 및 Select의 계산 애니메이션이 `none`이었다. `pnpm registry:build`, `pnpm typecheck`, `pnpm lint`, `pnpm exec vitest run packages/theme/theme.test.mjs`가 통과했다. 소비자 설치는 Task 10에서 확인한다.
  - **머지 후 확인**: 통합 후 결과를 기록한다.
- **Evidence**: [13개 항목의 재검증표](./artifacts/catalog-visual-audit.md#task-03-overlays-feedback-and-loading-recheck), [Kibo Spinner source](https://github.com/shadcnblocks/kibo/blob/3d63cdb15b79d972e3dc38a10997987672f9b263/packages/spinner/index.tsx), [Kibo Status source](https://github.com/shadcnblocks/kibo/blob/3d63cdb15b79d972e3dc38a10997987672f9b263/packages/status/index.tsx), [Skeleton after](./artifacts/previews/skeleton-dark-390-after.png), [Spinner after](./artifacts/previews/spinner-dark-after.png)
- **Consequences**: `surface.muted`와 컴포넌트 사용 규칙을 `docs/designs/design-system.md`, token/theme, registry, docs example/metadata에 동기화했다. Spinner 형태 선택은 제공하지만 모드별 실제 브랜드·상태 색상은 consumer가 정한다. Status pulse는 실시간 변화에만 선택한다. 선택지 확장 자체를 stable 승격 근거로 삼지 않는다. 추가된 public API는 item 문서에 반영했고 통합 changelog는 Task 09에서 전체 변경과 함께 갱신한다.

## D004: 데이터와 협업 UI는 예제 밀도와 실제 조작을 함께 판정한다 (2026-09-27)

- **Context**: 10개 데이터·협업 항목 중 Calendar, List, Table, Gantt, Kanban, ContributionGraph는 Kibo 대응 사례보다 화면의 정보 계층이 줄어든 것으로 초기 감사에서 판정됐다.
- **Constraints**: 앱 데이터와 업무 로직은 소비자가 소유한다. Leement source는 접근 가능한 표시·선택·이동 구조와 callback만 제공하고, 390px에서도 읽을 수 있어야 한다.
- **Options**: ① 기존 간단한 예제만 확장, ② source anatomy가 빠진 Calendar·ContributionGraph·Gantt를 고치고 나머지는 업무 데이터가 보이는 예제와 조합 API로 확장, ③ Kibo의 제품 기능 전체를 복사.
- **Decision**: ②를 선택했다. Calendar는 일정 월력과 Leesfield형 작은 날짜 선택을 두 variant로 제공한다. ContributionGraph는 주간 7행과 월 축을 가진 연간 그리드로 바꾼다. Gantt는 월 헤더·업무 그룹·기간 정보로 계층을 보강한다. Kanban은 앱 데이터용 `renderCard`를, List는 이동 결과 알림을 추가했다. Avatar, Chart, Table, Cursor 등의 source가 이미 갖춘 구조는 실제 정보를 가진 예제로 검증했다.
- **Rationale**: Kibo 데모와의 가장 큰 차이는 단일 행·짧은 기간·빈 화면이었고, 일부는 source에서 일정과 월 축 자체가 빠져 있었다. 두 제품은 공통 ChartContainer를 쓰고 Leesfield는 별도의 작은 AppDatePicker를 쓴다. Kibo의 도메인 모델·원격 데이터까지 이식하지 않아도 같은 시각적 문제를 해결하는 source를 소비자가 소유할 수 있다.
- **Trace**:
  - **DOING 시작 시점**: Kibo 고정 source/데모와 두 제품의 관련 UI를 대조해 예제만 얕은 항목과 source anatomy가 빠진 항목을 분리한다. 밀집 화면은 390px에서 실제 가로 스크롤·키보드 이동을 확인한다.
  - **DONE 전 확정 시점**: 10개 item × 4모드의 preview가 렌더링됐고 body/stage overflow 및 browser exception이 없었다. Calendar와 ContributionGraph의 그래프/월력은 내부 스크롤로 전체 정보에 접근했다. List/Table/Gantt/Kanban의 정렬·이동·알림을 브라우저에서 조작했다. Chart의 빠른 viewport 전환 capture는 ResizeObserver 갱신 전 폭이 남을 수 있으므로 390px fresh load로 6개 막대를 재검증했다.
- **Evidence**: [10개 항목의 재검증표](./artifacts/catalog-visual-audit.md#task-04-data-and-collaboration-recheck), [Calendar after](./artifacts/previews/calendar-light-after.png), [ContributionGraph after](./artifacts/previews/contribution-graph-light-after.png), [Gantt mobile after](./artifacts/previews/gantt-dark-390-after.png), Leesfield `src/shared/ui/app-calendar.tsx`
- **Consequences**: Calendar 기본 schedule view는 더 큰 공간을 요구하므로 date picker 소비자는 `variant="date"`를 명시한다. Board/timeline 데이터 동기화와 앱 도메인 필드, Table pagination은 소비자에 남는다. 설치된 source의 독립 빌드는 Task 10에서 확인한다.

## D005: 색상 선택은 완전한 조작 표면과 명시적 값 계약으로 재구성한다 (2026-09-27)

- **Context**: 현재 ColorPicker는 native 색상 입력, 6자리 HEX, preset만 제공한다. 고정 Kibo 데모는 선택 평면, hue, alpha, 형식 출력이 함께 보이는 도구다. MiniCalendar도 날짜 선택은 되지만 Kibo의 짧은 수평 스트립과 다른 정보 계층을 보여 준다.
- **Constraints**: Leement brand/token 편집기가 아니다. 소비자는 색상 값을 소유하고, 키보드와 작은 화면에서도 선택 가능해야 한다. 신규 대형 라이브러리나 Kibo의 검증되지 않은 상태 로직을 그대로 가져오지 않는다.
- **Options**: ① 기존 native well·HEX UI를 문서에서 좁은 사용 사례로 정당화, ② 작은 독립 source에 평면·hue·alpha·출력과 키보드 대안을 추가, ③ Kibo ColorPicker source와 의존성 `color`/Radix 묶음을 그대로 이식.
- **Decision**: ②를 선택했다. 기존 `label`/`value`/`defaultValue`/`onValueChange`/swatches API를 유지하고, 불투명 값은 `#RRGGBB`, alpha가 있는 값은 `#RRGGBBAA`로 반환한다. RGB/HSL은 읽기 전용 출력 형식이다. 평면은 포인터로, 동등한 saturation/brightness는 숫자 입력으로, hue/opacity는 native range로 조작한다. MiniCalendar는 일주일 가로 스트립으로 수정했다.
- **Rationale**: 기존 native well 하나만으로는 실제 Kibo형 색상 도구의 사용 사례를 제공할 수 없었다. Kibo 원본은 큰 composable 구조지만 상태 동기화와 alpha 초기값에 취약한 코드가 보여 그대로 옮길 이유가 없다. 일관된 HEX callback은 사용자 프로젝트에서 저장·수정이 쉬우며 8자리 값은 alpha를 손실 없이 전한다. CSS token이 브라우저에서 `lab(...)`으로 계산되므로 canvas 1px 변환으로 현재 Leement 데이터 accent를 초기값으로 읽는다.
- **Trace**:
  - **DOING 시작 시점**: Kibo source/preview와 Leement의 8개 실제 데모를 대조한다. ColorPicker의 pointer/keyboard/alpha/출력 계약을 먼저 정하고 나머지 선택 컨트롤의 열린·비활성·선택 상태를 확인한다.
  - **DONE 전 확정 시점**: 8개 item × 4모드가 모두 열렸고 stage/document overflow 및 browser exception이 없었다. ColorPicker plane pointer와 hue ArrowRight, alpha 50%의 8자리 HEX 및 RGB 표시, 나머지 form의 키보드/선택/파일 거부 상태를 브라우저에서 검증했다. ColorPicker 값 계약은 기존 테스트에 alpha 검증을 추가했다.
- **Evidence**: [8개 항목의 재검증표](./artifacts/catalog-visual-audit.md#task-05-form-and-choice-recheck), [ColorPicker after](./artifacts/previews/color-picker-light-after.png), [MiniCalendar mobile after](./artifacts/previews/mini-calendar-dark-390-after.png), [Kibo ColorPicker source](https://github.com/shadcnblocks/kibo/blob/3d63cdb15b79d972e3dc38a10997987672f9b263/packages/color-picker/index.tsx)
- **Consequences**: 이전 6자리 HEX 소비자는 alpha를 사용하지 않는 한 값 형식이 그대로다. alpha를 사용하는 소비자는 8자리 HEX를 처리한다. docs metadata에 새 계약을 적었고 Changelog은 Task 09에서 함께 업데이트한다. 실제 설치 source의 독립 빌드는 Task 10에서 확인한다.

## D006: 미디어 컴포넌트는 실제 자산의 렌더링과 제어 상태로 판정한다 (2026-09-28)

- **Context**: 초기 감사에서 ImageCrop은 이미지가 0×0으로 표시되는 P1, Reel은 정적인 추상 poster가 중심인 P2였다. Kibo Stories는 trigger 집합에서 viewer로 진입하지만 Leement는 곧바로 열린 viewer만 보여 준다. CreditCard의 칩/브랜드 구조와 Ticker의 밀도도 다르다.
- **Constraints**: 영상/이미지 URL과 콘텐츠는 소비자 또는 docs 예제가 제공한다. Leement source는 결제·시세 fetch·업로드를 하지 않고, 키보드 명령과 reduced motion을 보존한다.
- **Options**: ① 얕은 poster 예제만 교체한다. ② 이미지 영역·Story 진입·Reel 정보 계층·카드/시세 형태의 실제 source 결함을 교정하고 docs에 독립 제작한 재생 가능한 영상과 상태 예제를 제공한다. ③ Kibo 소스와 원격 자산을 그대로 옮긴다.
- **Decision**: ②를 선택했다. ImageCrop의 이미지 크기, Stories의 trigger gallery→Radix viewer, Reel의 9:16 영상/진행/overlay, CreditCard의 구조, Ticker의 기본 inline 요약을 수정했다. 앱 제공 미디어와 기존 ImageZoom/VideoPlayer 제어를 실제 재생/확대 상태로 검증했다. 영상 위 텍스트/스크림에는 브랜드색 대신 새 `media.foreground`/`media.scrim` 의미 토큰을 사용한다.
- **Rationale**: poster만 바꾸면 0×0 crop과 Story 진입 방식, Reel의 시각 계층이 그대로 남는다. Kibo의 원격 데모 영상과 브랜드를 복사할 필요 없이 Leement의 원본 영상으로 동일한 미디어 구조와 조작을 검증할 수 있다. 앱에서 자산·데이터를 공급하는 public 계약과 source ownership은 유지한다.
- **Trace**:
  - **DOING 시작 시점**: Kibo 공개 화면과 고정 source를 대조하고, docs 로컬 SVG/MP4의 실제 크기·재생 상태를 브라우저에서 측정한다. Story trigger/viewer, Reel 영상, ImageCrop 이미지 영역을 우선한다.
  - **DONE 전 확정 시점**: 7개 item × light/dark × 1440/390px 28개 preview가 모두 HTTP 200이고 stage/body overflow 또는 browser exception이 없었다. ImageCrop 이미지 478×358.5px, Stories 영상 readyState 4/540px와 Escape 초점 복귀, Reel 영상 540×960px 재생·방향키 이동·음소거, VideoPlayer 4초 메타데이터·탐색·음소거를 브라우저에서 확인했다. Reduced motion에서 Reel은 0초에 멈췄고 수동 재생만 허용했다. 모바일 어두운 Story/ImageZoom 열린 상태도 화면 안에 들어갔다. 테스트, registry build, typecheck, lint를 통과했다.
- **Evidence**: [7개 항목의 재검증표](./artifacts/catalog-visual-audit.md#task-06-image-media-finance-and-social-recheck), [Kibo Reel source](https://github.com/shadcnblocks/kibo/blob/3d63cdb15b79d972e3dc38a10997987672f9b263/packages/reel/index.tsx), [Stories mobile](./artifacts/previews/stories-dark-390-open-after.png), [Reel mobile](./artifacts/previews/reel-dark-390-after.png)
- **Consequences**: `Stories` 기본 presentation은 trigger gallery가 되며 이전 임베디드 viewer를 원하면 `presentation="viewer"`를 명시한다. `StoryItem.poster`, CreditCard `network`, Ticker `layout`은 선택적 API다. 새 토큰은 `packages/tokens`→`@leement/theme` CSS→registry source 및 디자인 규칙으로 동기화했다. 문서 metadata를 수정했고 통합 changelog은 Task 09에서 갱신한다. 실제 소비자 설치는 Task 10에서 확인한다. Kibo 원격 자산은 포함하지 않으며 docs 영상은 Leement용 code-native 시안의 로컬 화면 녹화로 제작했다.
