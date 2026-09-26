# Decisions Log

기술 결정과 그 이유를 기록합니다.
canonical docs surface 밖의 unmanaged docs 산출물(예: `docs/plans/*`, `docs/superpowers/*`)이 있더라도, 실제로 채택한 대안과 선택 이유는 이 파일에 다시 남겨 Feature의 결정 이력을 유지합니다.

> ADR(Architecture Decision Record)은 구현 중 내린 중요한 기술/구조 결정을 남기는 기록입니다.
> 나중에 "왜 이렇게 만들었는지"를 추적하고, 팀 합의를 재확인하기 위해 작성합니다.

> 형식: `DNNN: expanded-component-catalog 결정 (2026-09-26)`
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

## D001: Kibo 수준의 카탈로그를 Leement 계약으로 확장한다 (2026-09-26)

- **Context**: 사용자가 Leement도 Kibo와 동일한 수준의 컴포넌트를 제공하길 원한다고 명시했다. 현재 Leement는 기본 UI 8개, pattern 5개, block 1개이며 Kibo 공개 메뉴에는 복합 컴포넌트 41개가 있다.
- **Constraints**: Leement token/rule이 시각적 정본이고 shadcn registry로 소스를 전달한다. 기존 A33 Feature는 docs showcase 작업으로 완료됐다. v0.1 카탈로그 수는 더 이상 장기 상한이 아니다.
- **Options**: ① Kibo 패키지와 API를 통째로 포크한다 ② Kibo의 사용 사례·규모를 기준으로 Leement 고유 컴포넌트를 제공하며 필요할 때 MIT 코드를 선택적으로 이식한다.
- **Decision**: ②를 선택한다. 기존 기본 UI 8개 외에 최소 41개 실사용 가능한 복합 item과 전 영역 대응표를 목표로 한다. 블록 수의 목표는 컴포넌트 범위와 분리해 결정한다.
- **Rationale**: 원본 프로젝트의 디자인 언어와 source ownership을 유지하면서 사용자가 요구한 제공 수준을 측정할 수 있다. 동일한 이름만 붙인 placeholder는 제외한다.
- **Trace**:
  - **범위 확정 전**: 2026-09-26 Kibo 공개 메뉴의 41개 컴포넌트와 Leement registry의 8/5/1 구조를 대조했다. Spec 승인 전까지 구현 코드는 변경하지 않는다.
- **Evidence**:
  - **Kibo catalog**: https://www.kibo-ui.com/components/avatar-stack
  - **Leement registry**: ../../../registry.json

## D002: 카탈로그 확장에 두 참조 제품의 공용 UI 교체 검증을 포함한다 (2026-09-27)

- **Context**: 사용자는 현재 Leement가 CopySinger/Leesfield의 기존 컴포넌트를 대체할 수 있는지, 현재 Feature 완료 시 그 수준에 도달하는지 물었다. 기존 Spec은 Kibo 41개 항목과 독립 소비자 빌드만 요구해 두 제품에서의 교체를 보장하지 않았다. 사용자는 `B`로 Spec 수정을 요청하고 자신의 요구사항을 모두 충족하도록 지시했다.
- **Constraints**: 기존 Feature ID를 유지한다. Design Tokens + Design Rules가 정본이고 registry는 source 배포 수단이다. 제품 도메인 로직과 무분별한 API 복제는 공용 UI의 목표가 아니다. 현재 stage는 `spec_approve`, `implementationAllowed=false`다.
- **Options**: ① Kibo 항목 수만 늘리고 두 제품 교체는 별도 작업으로 미룬다 ② 이 Feature의 완료 조건에 두 제품의 공용 UI coverage, light/dark 규칙, 실제 통합 검증을 추가한다.
- **Decision**: ②를 선택한다. 동일 이름의 공용 UI 22개는 모두 대응 항목과 교체 경로를 제공한다. CopySinger 전용 UI와 Leesfield 일반 UI/`app-*` 래퍼를 전수 분류하고, reusable 항목만 registry에 승격한다. 공통 22개의 양쪽 설치·import·render와 대표 사용처 교체를 통합 검증한다. Kibo 41개 비교 목표 및 웹 미리보기는 그대로 유지한다.
- **Rationale**: Kibo 수준의 규모와 실제 제품 교체 가능성은 서로 다른 요구사항이다. 두 목표를 같은 Feature에서 독립적으로 검증해야 사용자가 기대한 결과를 과장하지 않는다. 기존 두 제품과 다른 API는 문서화된 migration으로 허용해 source ownership과 단순한 Leement API를 유지한다.
- **Design impact**: `docs/designs/design-system.md`의 light/dark 규칙, Card radius/spacing/shadow, 상태색, 폰트 로딩 설명을 실제 token/theme 및 source와 대조해야 한다. 예외가 필요하면 적용 범위·이유·제거 조건을 Plan/태스크에서 기록한다. 이 Spec 단계에서는 디자인 문서나 구현 코드를 선행 변경하지 않는다.
- **Trace**:
  - **범위 변경**: 2026-09-27 공통 22개 디렉터리와 CopySinger 전용 10개를 조사했다. Leement는 현재 registry UI 8개이며, 기존 Button/Input/Card도 두 제품과 API·focus·spacing·shadow 규칙이 다르다. Spec을 Review로 유지해 새 범위의 승인을 받는다.
- **Evidence**:
  - **Revised Feature Spec**: [spec.md](./spec.md)
  - **Leement registry**: [registry.json](../../../registry.json)
  - **Leement Button/Card**: [button.tsx](../../../registry/ui/button.tsx), [card.tsx](../../../registry/ui/card.tsx)
  - **Reference repositories**: `/Volumes/sn850x/programming-2/copy-singer-3/src/shared/ui`, `/Volumes/sn850x/programming-2/leesfield/leesfield-fe/src/shared/ui/brand`

## D003: 두 제품의 수치 복제 대신 하나의 light/dark 공통 규칙을 선택한다 (2026-09-27)

- **Context**: 사용자가 CopySinger를 먼저 만들고 이를 바탕으로 Leesfield를 CopySinger의 다크 모드 같은 느낌으로 만들려 했다고 설명했다. 두 제품의 수치가 정확히 같지 않을 수 있으며, Leement가 타협점을 찾아 공통 UI로 두 제품에 쓰이길 원한다. Kibo 수준의 신규 컴포넌트 확장 요구도 유지했다.
- **Constraints**: Design Tokens + Design Rules가 정본이고 하나의 수정 가능한 registry source를 두 프로젝트가 사용한다. 두 제품의 원본 CSS 값이나 component API를 픽셀·숫자 단위로 모두 재현하면 분기와 variant가 과도해질 수 있다.
- **Options**: ① CopySinger와 Leesfield의 수치를 각각 별도 theme/컴포넌트로 복제한다 ② 두 수치를 평균 내 공통값으로 삼는다 ③ 원본의 시각 의도와 실제 사용 맥락, 가독성·접근성, 상태 일관성에 따라 공용 규칙과 light/dark semantic 값을 결정한다.
- **Decision**: ③을 선택한다. CopySinger light와 Leesfield dark를 같은 디자인 언어의 두 모드로 다루고, 동일한 Leement component source/API를 설치해 두 앱에서 사용할 수 있게 한다. 의도적 스타일 차이는 문서화하되 원본과 수치·픽셀 불일치 자체를 실패 조건으로 삼지 않는다. 제품 고유 브랜드·도메인 표현은 앱 계층에 둔다.
- **Rationale**: 이 결정이 사용자의 제품 계보와 최종 공용화 목표를 동시에 충족한다. 교체 가능성은 시각적 복제보다 두 앱의 실제 사용처에서 기능·접근성·통합이 성립하는지로 판단한다.
- **Design impact**: `docs/designs/design-system.md`에는 공통 light/dark 의도와 선택 근거를 반영해야 한다. token/theme 값, registry component 규칙, docs 미리보기 및 두 앱 통합 증거를 같은 태스크에서 동기화한다. 임시 앱별 override가 필요하면 범위·이유·제거 조건을 기록한다.
- **Trace**:
  - **Spec 재검토**: 2026-09-27 US-4/US-5와 PRD를 공용 UI 사용 가능성 및 단일 light/dark 디자인 언어 기준으로 수정했다. Kibo 41개 목표는 유지했다. Spec 승인은 아직 받지 않았다.
- **Evidence**:
  - **Updated Feature Spec**: [spec.md](./spec.md)
  - **Product requirements**: [leement-prd.md](../../prd/leement-prd.md)
  - **Current design rules**: [design-system.md](../../designs/design-system.md)

## D004: 기존 README의 v0.1 카탈로그 설명은 이번 Feature에서 편집하지 않는다 (2026-09-27)

- **Context**: 루트 `README.md` 11–13행은 현재 UI 8개·Pattern 5개·Block 1개로 소개하며 69행은 현재 v0.1 로컬 검증 상태를 설명한다. 이 Feature가 완료되면 카탈로그 수와 제공 상태의 설명이 오래될 수 있다.
- **Constraints**: AGENTS.md의 README 보호 규칙은 사용자가 README 수정을 명시적으로 요청했을 때만 기존 README 편집을 허용한다. 현재 요청은 Feature 구현과 Spec 승인이지 README 편집 요청이 아니다.
- **Options**: ① README를 선제 갱신한다 ② 이번 Feature에서는 README를 보존하고 사용자-facing 설치/카탈로그 정보는 docs 사이트에서 갱신한다.
- **Decision**: ②를 선택한다. Plan의 Onboarding entrypoint `NONE`은 불일치가 없다는 뜻이 아니라 이 보호 규칙 때문에 이번 변경에서 README를 편집하지 않는다는 뜻이다.
- **Rationale**: 사용자 요청 범위를 지키면서 Feature의 실제 제품 설명은 docs 사이트와 PRD/디자인 문서에 동기화한다.
- **Trace**:
  - **계획 시점**: 2026-09-27 README의 기존 수량·게시 상태 문장을 확인했다. 구현 후에도 README는 갱신하지 않으며 이 기록을 잔여 설명으로 유지한다.
- **Evidence**:
  - **README**: [README.md](../../../README.md)
  - **Plan impact**: [plan.md](./plan.md)

## D005: 참조 UI의 원본 경계와 분류를 고정한다 (2026-09-27)

- **Context**: Task 01에서 두 제품의 공용 UI와 추가 wrapper를 구현 전에 고정해야 누락·중복·무분별한 공용화를 막을 수 있다.
- **Constraints**: 두 원본 checkout은 clean이며 구현을 위해 수정하지 않는다. 제품 고유 generation/voice 로직은 Leement API가 아니다. 단독 사용만으로 stable로 승격하지 않는다.
- **Options**: ① 현재 registry item 수만 기준으로 확장한다 ② 두 제품의 실제 source·사용처·API와 Leement 대응 관계를 Feature artifact에 기록한다.
- **Decision**: ②를 선택했다. 공통 22개, CopySinger 전용 10개, Leesfield top-level production TSX 79개(그중 `app-*` 35개), legacy 14개를 고정 snapshot으로 조사한다. `compose`는 현재 앱 wrapper를 유지하고 공용 구현을 교체하며, `candidate`는 후속 task에서 기능 구현/조합을 검증하고, `application`은 제품에 남긴다.
- **Rationale**: 19/22 공통 파일은 import 문장을 제외한 주 구현이 동일해 공용 source 가능성이 높다. Dialog/Select/Sheet의 실제 차이와 두 앱의 CSS 값 차이는 별도 migration 및 theme 결정으로 다룬다. 사용하지 않는 파일도 발견 결과를 기록하되 실제 사용을 꾸며내지 않는다.
- **Trace**:
  - **초기 가설**: CopySinger light와 Leesfield dark에서 공통 구현의 상당 부분을 재사용할 수 있을 것으로 보았다.
  - **조사 결과**: 원본 commit을 기록하고 공통 파일의 non-import diff, production import 예시, 추가 모듈 분류를 coverage matrix에 남겼다. 새 registry 구현과 설치 검증은 아직 시작하지 않았다.
- **Evidence**:
  - **Coverage and migration inventory**: [reference-coverage.md](./artifacts/reference-coverage.md)
  - **Approved Spec**: [spec.md](./spec.md)

## D006: 공통 light/dark 의미 토큰을 기준으로 상태와 표면을 정한다 (2026-09-27)

- **Context**: Task 02에서 기존 Leement theme이 success/warning/data-accent 상태 역할과 실제 서체 로딩 안내를 충분히 제공하지 못하며, Card radius/spacing/shadow 설명과 현재 class가 어긋난 것을 확인했다.
- **Constraints**: tokens는 framework independent여야 하고 `--lm-*`가 정본이다. CopySinger와 Leesfield의 수치를 평균 내지 않는다. 이 Task는 token/theme/디자인 규칙에 집중하며 Button/Input/Card source 정비는 Task 03이다.
- **Options**: ① 현재 Leement의 neutral/surface 값을 유지하고 상태색을 각 컴포넌트에 추가한다 ② CopySinger/Leesfield 값을 각각 별도 제품 preset으로 복제한다 ③ 공통 semantic 역할을 확대하고 하나의 light/dark 규칙을 정한다.
- **Decision**: ③을 선택했다. neutral 800/900을 dark raised/default surface 단계에 맞춰 `#242427`/`#1a1a1d`로 정하고 Card radius를 12px로 통일한다. success/warning/data accent를 primitive → semantic → `--lm-*` → shadcn alias 순서로 추가했다. 기존 `.dark` 앱도 같은 dark token을 사용한다. 기본 Card와 Input은 border만 사용한다.
- **Rationale**: 두 제품의 의미상 관계를 유지하면서 분기 없는 공통 source와 충분히 대비되는 상태 표현을 제공한다. Card 12px은 원본 약 10px과 이전 Leement 16px 사이에서 문서의 의도와 표면 계층을 택한 값이며 수치 평균으로 자동 산출하지 않았다. Pretendard 파일 로드는 앱이 담당한다.
- **Trace**:
  - **초기 가설**: dark surface를 Leesfield와 가까운 단계로, Card는 현재 Leement 16px 대신 문서의 12px 공통 규칙으로, 상태색은 의미 기반 primitive/semantic 층으로 정리한다.
  - **실행 확인**: `pnpm build:tokens`, `pnpm build:theme`, theme contract Vitest 2건, `pnpm typecheck`, `pnpm lint`, `pnpm build`가 통과했다. 토큰의 배경/전경, success, warning, data accent 조합의 계산상 대비율은 light 17.36/7.43/7.27/6.57, dark 18.07/8.25/8.62/4.93이다. docs `/showcase`를 브라우저에서 light/dark 전환하여 대표 표면과 컨트롤을 확인했다. 개발 오버레이의 hydration 경고는 Aside 브라우저 확장이 `<html>`에 `data-locator-client-url` 속성을 주입한 경우로 로그에 나타났으며 앱 코드의 테마 오류 증거로 취급하지 않는다.
- **Evidence**:
  - **Reference coverage**: [reference-coverage.md](./artifacts/reference-coverage.md)
  - **Current tokens**: [tokens.json](../../../packages/tokens/src/tokens.json)
  - **Theme builder and contract test**: [build.mjs](../../../packages/theme/build.mjs), [theme.test.mjs](../../../packages/theme/theme.test.mjs)
  - **Durable design rules**: [design-system.md](../../designs/design-system.md)

## D007: 공통 컨트롤의 상호작용과 크기를 한 소스로 정리한다 (2026-09-27)

- **Context/Constraints**: Task 03은 Button/Input/Card와 Select/Switch/Tabs/Label/Badge/Separator의 교체 경로를 만들어야 한다. 두 참조 앱의 Select/Switch/Tabs는 Base UI 기반이고, Leement의 기존 Button/Input/Card는 크기와 focus 규칙이 일부 다르다. Leement semantic token이 시각 정본이어야 한다.
- **Trace (초기 가설)**: 참조 제품의 Base UI composition과 키보드 동작을 유지하되 UI 값은 공통 token과 컨트롤 규칙으로 치환한다. Button/Input/Card는 원본 API 전체를 복제하지 않고 실제 교체에 필요한 size, CardAction 및 migration 설명을 우선한다.
- **Options**: ① 모든 컨트롤을 Radix로 재작성한다 ② 두 참조 앱의 Base UI composition을 보존하고 Leement 규칙만 이식한다.
- **Decision**: ②를 선택했다. Select/Switch/Tabs는 Base UI 1.7.0의 동작을 유지하며 40/36px Select, semantic state, token 기반 focus ring을 적용했다. Button은 `primary`를 기본 action으로, 위험 action을 연한 destructive surface로 정리했다. Card에 `size`와 `CardAction`을 추가했다. Label은 native semantics를 유지한다.
- **Rationale**: 두 제품에서 사용된 API와 키보드 모델을 가능한 한 유지하면서 소유 가능한 단일 source를 만들 수 있다. Select의 Base UI `SelectValue`는 값 문자열을 기본으로 표시하므로 사람이 읽는 라벨이 다를 때 `items` mapping을 전달하도록 docs에 명시했다. 제품의 `link` variant와 특수 아이콘 크기는 앱의 native link 또는 소스 수정으로 옮긴다.
- **Trace (실행 확인)**: 9개 control/surface에 registry item과 source-backed docs preview를 연결했다. `pnpm --filter @leement/docs build`에서 12개 component route 포함 30개 정적 페이지 생성, `pnpm typecheck`, `pnpm lint`, Vitest focused 7건이 통과했다. Switch Space/disabled, Tabs 화살표·Enter, Select 키보드 열기·선택·focus return을 확인했다. 두 제품의 실제 import 교체는 Task 14 범위다.
- **Evidence**: [Reference coverage](./artifacts/reference-coverage.md), [Task contract](./tasks.md), [Control tests](../../../registry/ui/controls.test.tsx), [Registry metadata](../../../registry.json), [Design rules](../../designs/design-system.md)

## D008: 공통 overlay의 composition과 초점 계약을 보존한다 (2026-09-27)

- **Context/Constraints**: Task 04는 두 제품의 Dialog, Dropdown Menu, Popover, Sheet, Tooltip을 교체 가능하게 만든다. Leement의 Dialog/Tooltip은 이미 Radix source이며 나머지 참조 구현은 Base UI를 사용한다. Focus trap, Escape, 닫기 라벨을 시각 이식으로 깨뜨릴 수 없다.
- **Trace (초기 가설)**: 기존 Radix 항목은 유지하고, 누락 항목은 참조 Base UI composition을 가져와 Leement token과 공통 overlay surface 규칙으로 정리한다. Sheet의 닫기 label은 영문 기본값을 두되 앱의 현지화된 close control 조합이 가능하게 한다.
- **Options**: ① 다섯 item을 Base UI로 모두 통일한다 ② 기존 Radix Dialog/Tooltip은 유지하고 빠진 세 item만 참조 Base UI composition을 이식한다.
- **Decision**: ②를 선택했다. Dropdown Menu/Popover/Sheet는 Base UI 1.7.0, Dialog/Tooltip은 기존 Radix를 사용한다. 공통 `bg-popover` surface와 semantic 상태색을 사용하고 Sheet는 registry dependency로 Button을 함께 설치한다.
- **Rationale**: 이미 동작하는 Leement source와 shadcn식 `asChild` 모델을 보존하면서 두 제품의 누락 기능을 채울 수 있다. Base UI `render`와 Radix `asChild`, TooltipProvider `delay`/`delayDuration` 차이는 migration에 명시했다. Sheet의 기본 close text는 영어이며 현지화가 필요한 앱은 기본 close를 숨기고 자신의 닫기 제어를 조합한다.
- **Trace (실행 확인)**: Source-backed docs preview 및 정적 component route 15개를 생성했다. `pnpm --filter @leement/docs build`(33 pages), `pnpm typecheck`, `pnpm lint`, focused Vitest 12건이 통과했다. Dialog/Sheet의 제목·Escape·focus return, Menu의 keyboard/disabled, Popover의 Escape/focus return, Tooltip의 keyboard focus를 확인했다. 제품 import 교체는 Task 14다.
- **Evidence**: [Reference coverage](./artifacts/reference-coverage.md), [Overlay tests](../../../registry/ui/overlays.test.tsx), [Registry metadata](../../../registry.json), [Design rules](../../designs/design-system.md)

## D009: 피드백과 제품 구조를 책임에 따라 분리한다 (2026-09-27)

- **Context/Constraints**: Task 05는 Chart, Skeleton, State Panel, Status Notice, Bento Grid, Product Page Intro, Resource Row Link, Reveal Content를 공용화한다. 기존 소스에는 Next Link, motion 및 제품 전용 장식이 섞여 있어 registry 설치성과 framework-neutral source ownership을 다시 판단해야 한다.
- **Trace (초기 가설)**: Chart/Skeleton/Status Notice/Reveal Content는 UI, State Panel/Product Page Intro/Resource Row Link는 Pattern, Bento Grid는 Block 또는 Pattern으로 배치한다. 공통 상태색과 reduced motion을 유지하고 기존 CopySinger 애니메이션 설정 전체는 공용 UI로 복제하지 않는다.
- **Options**: ① 원본 파일을 경계 없이 복사한다 ② 재사용 책임에 맞춰 UI/Pattern/Block을 나누고 프레임워크 의존성·시각값을 정리한다.
- **Decision**: ②를 선택했다. Chart/Skeleton/Status Notice/Reveal Content는 UI, State Panel/Product Page Intro/Resource Row Link는 Pattern, Bento Grid는 Block이다. Recharts와 Motion은 해당 item의 명시적 dependency로만 둔다. Resource Row는 Next Link 대신 native anchor를 제공한다. 두 제품이 실제 사용 중인 RevealContent의 variant 및 no-script/reduced-motion 동작은 유지한다.
- **Rationale**: 레지스트리 소스가 일반 React 앱에서도 설치되고 제품 카피/라우팅/이미지를 앱이 소유한다. Chart의 시리즈 색은 semantic CSS 변수로 설정하며 사용자 지정 chart id/key/color가 style markup에 주입되지 않도록 위험 문자를 제거했다. Bento article은 제목과 연결해 landmark 이름을 제공한다.
- **Trace (실행 확인)**: 8개 item에 source-backed docs 예제를 추가했다. `pnpm --filter @leement/docs build`에서 41개 정적 페이지와 19 component/8 pattern/2 block route가 생성되었다. `pnpm typecheck`, `pnpm lint`, `pnpm registry:build`, composition Vitest 3건이 통과했다. 실제 제품 import 교체는 Task 14 범위다.
- **Evidence**: [Reference coverage](./artifacts/reference-coverage.md), [Composition tests](../../../registry/patterns/composition.test.tsx), [Registry metadata](../../../registry.json), [Design rules](../../designs/design-system.md)

## D010: 제품 전용 UI와 재사용 후보를 실제 소비 기준으로 분류한다 (2026-09-27)

- **Context/Constraints**: Task 06은 CopySinger-only 10개와 Leesfield의 79개 root UI 및 wrapper 분류를 완성해야 한다. 일부 후보는 후속 Kibo 41개 task와 겹치며, 제품 도메인 UI를 이름만 바꿔 registry에 추가할 수 없다.
- **Trace (초기 가설)**: domain/brand module은 application 경계에 남기고, 범용 disclosure/progress/slider/toast/loading 및 실제 화면 wrapper 조합은 registry source 또는 실행 가능한 예제로 충족한다. Kibo 작업과 겹치는 candidate는 현재 task에서 최소 동작을 제공하거나 해당 future item의 구체적인 합성 계약을 고정한다.
- **Options**: ① 참조 프로젝트의 root UI를 모두 registry에 복제한다 ② 사용 사례 기준으로 application/compose/candidate를 나누고 실제 후보만 승격한다.
- **Decision**: ②를 선택했다. CopySinger-only 10개 중 5개 범용 후보를 `collapsible`, `page-skeleton`, `progress`, `slider`, `toast`로 제공하고 5개 도메인/장식 항목은 앱에 남긴다. Leesfield의 `alert-dialog`, `avatar`, `filter-toolbar` 후보를 registry에 추가했다. 달력·선택 카드·코드 표시·폼·확장 텍스트는 현재 레지스트리 소스를 조합한 `/adoption` 페이지에서 동작 예제로 제공하고, 전용 Kibo 사례는 후속 Task 07–11에서 구현한다.
- **Rationale**: 각 제품의 generation/voice/Gradio/brand 구현을 공용 API에 강제로 넣지 않으면서 필요한 UI 기능을 공급한다. `slider`는 단일 값을 기본으로 수정하고 두 값 배열로 range를 표현한다. `toast`는 `next-themes` 결합을 제거하고 앱이 mode를 넘긴다. Leesfield form provider·validation과 locale wrapper는 앱 소유다.
- **Trace (실행 확인)**: 79개 Leesfield root 모듈의 기존 분류를 유지하며 17개 candidate row를 현재 registry 또는 작동하는 조합 및 후속 dedicated item에 매핑했다. `pnpm --filter @leement/docs build`에서 `/adoption` 포함 50개 정적 페이지 생성, `pnpm typecheck`, `pnpm lint`, `pnpm test` 22건 통과. Collapsible 키보드, Progress/Slider 값, AlertDialog 취소·초점 반환, Avatar fallback, PageSkeleton status, FilterToggle 상태를 확인했다. 실제 제품 import 교체는 Task 14다.
- **Evidence**: [Reference coverage](./artifacts/reference-coverage.md), [Source extension tests](../../../registry/ui/source-extension.test.tsx), [Live adoption composition](../../../apps/docs/components/adoption-compositions.tsx), [Registry metadata](../../../registry.json)

## D011: Kibo 협업·프로젝트 관리 사례를 소유 가능한 Leement 소스로 구성한다 (2026-09-27)

- **Context/Constraints**: Task 07은 Avatar Stack, Cursor, Calendar, Gantt, Kanban, List, Table의 작동하는 사용 사례를 요구한다. Kibo MIT 소스는 Calendar 496행, Gantt 1469행 등으로 여러 전역 atom 및 shadcn wrapper에 의존한다. Leement는 작은 registry source, item별 dependency, semantic token과 소스 소유를 우선한다.
- **Trace (초기 가설)**: Kibo의 화면 문제와 composition 경계를 참고하되 전역 상태·대형 feature 구현을 그대로 복제하지 않는다. 실제 날짜 이동, 항목 이동, 정렬 등 사용자가 조작할 수 있는 최소 핵심 기능을 각 source에 구현한다. 참고한 원본 commit과 라이선스를 기록한다.
- **Options**: ① Kibo 패키지의 전역 atom과 모든 내부 의존성을 함께 이식한다 ② 작은 독립 소스로 핵심 사용 사례를 구현하고 단순한 시각적 원형만 출처를 밝혀 이식한다.
- **Decision**: ②를 선택했다. AvatarStack과 Cursor는 Kibo MIT 소스를 선택적으로 이식하고 출처·원문 라이선스를 저장했다. Calendar, List, DataTable, Gantt, Kanban은 Leement source로 구현했다. 날짜/보드/목록 변경은 소비자 상태 callback으로 넘기며 외부 데이터 동기화는 포함하지 않는다.
- **Rationale**: 복합 item의 핵심 탐색·조작과 소스 소유 경험을 유지하면서 docs 앱과 소비자 앱에 전역 atom을 강제하지 않는다. Kibo의 완전한 기능/API 동일성을 주장하지 않으며, 현재 제공 범위는 [coverage artifact](./artifacts/reference-coverage.md#task-07-kibo-collaboration-checkpoint)에 기록한다.
- **Trace (실행 확인)**: 7개 item의 registry metadata와 source-backed docs preview를 연결했다. Calendar 방향키와 일정 표시, List 순서 변경, Table 숫자 정렬, Gantt 키보드 이동, Kanban 열 변경·상태 안내, AvatarStack/Cursor 의미를 focused Vitest 6건으로 확인했다. `pnpm registry:build`, `pnpm --filter @leement/docs build`(57 pages), `pnpm typecheck`, `pnpm lint`가 통과했다.
- **Evidence**: [Kibo reference](https://github.com/shadcnblocks/kibo), [MIT notice](../../../THIRD_PARTY_NOTICES.md), [Interaction tests](../../../registry/blocks/collaboration.test.tsx), [Registry metadata](../../../registry.json), [Task contract](./tasks.md)

## D012: 코드·폼 사례의 조작 범위를 소비자 소스로 분리한다 (2026-09-27)

- **Context/Constraints**: Task 08은 Code Block, Contribution Graph, Sandbox, Snippet, Choicebox, Combobox, Dropzone, Mini Calendar, Tags의 핵심 조작을 요구한다. Kibo의 Code Block은 Shiki, Sandbox는 Sandpack 등 큰 선택적 의존성이 있고, Leement는 item별 설치와 프레임워크 비종속 token을 유지한다.
- **Trace (초기 가설)**: 코드 실행이나 업로드 저장을 Leement 서버 기능으로 만들지 않는다. 시각화/선택/복사/파일 수집은 작은 registry source에서 처리하며 실행 미리보기는 검증된 Sandpack을 해당 item의 선택적 dependency로 격리한다. 키보드 조작과 명시적 label을 우선한다.
- **Options**: ① Kibo의 큰 source와 모든 하위 패키지를 복제한다 ② 핵심 사례를 단순한 Leement 소스로 구성하고 Sandpack만 item별 선택 의존성으로 둔다.
- **Decision**: ②를 선택했다. 여덟 사례는 Leement의 작고 수정 가능한 source로 제공한다. Sandbox는 Sandpack 편집기·격리 preview를 사용하며 해당 registry item만 Sandpack을 설치한다. 복사·날짜/태그/단일 선택·파일 수집은 UI에서 처리하지만 서버 실행/저장은 앱 책임이다.
- **Rationale**: 실제 UI 상호작용을 제공하면서 전역 런타임이나 자체 코드 실행 서비스를 만들지 않는다. CopySinger/Leesfield에서 필요한 코드 표시와 선택기 역할을 공통 theme으로 제공한다. 문법 강조 같은 Kibo 고급 기능 차이는 [coverage artifact](./artifacts/reference-coverage.md#task-08-kibo-code-and-form-checkpoint)에 명시한다.
- **Trace (실행 확인)**: 9개 item의 registry JSON과 source-backed docs route를 연결했다. CodeBlock/Snippet 복사, ContributionGraph 날짜 선택, Choicebox radio, Combobox keyboard 선택, Dropzone 브라우저 파일 선택, MiniCalendar 주 이동·날짜 선택, Tags 추가·삭제를 focused Vitest 8건으로 확인했다. `pnpm registry:build`, `pnpm --filter @leement/docs build`(66 pages), `pnpm typecheck`, `pnpm lint`가 통과했다. Sandbox는 Sandpack dependency와 정적 docs route 빌드를 확인했다.
- **Evidence**: [Task contract](./tasks.md), [Kibo reference](https://github.com/shadcnblocks/kibo), [UI interaction tests](../../../registry/ui/code-form.test.tsx), [Sandbox source](../../../registry/blocks/sandbox.tsx), [Registry metadata](../../../registry.json)

## D013: 이미지·금융·소셜 미디어 UI를 안전한 앱 경계로 제공한다 (2026-09-27)

- **Context/Constraints**: Task 09의 일곱 항목은 crop/zoom, 카드 프리뷰, 시장 가격 표시, 스토리·릴·비디오 조작을 요구한다. 결제 인증·실시간 시세·미디어 인코딩/호스팅은 Leement UI 범위가 아니다.
- **Trace (초기 가설)**: 이미지 crop은 브라우저 편집과 결과 callback, zoom은 접근 가능한 확대, 카드·시세는 주입받은 데이터와 가림/상세 제어, 소셜 미디어는 소비자 소스 URL과 직접 조작 가능한 이동·재생으로 구현한다. 비디오가 없는 문서 예제는 로컬 데모 asset을 마련한다.
- **Options**: ① Kibo media/finance source와 관련 제품 로직을 그대로 이식한다 ② 핵심 UI 조작을 item별 source로 제공하고 데이터·결제·인코딩·호스팅은 소비자 앱에 둔다.
- **Decision**: ②를 선택했다. ImageCrop은 퍼센트 crop callback만 제공하고 `react-image-crop`을 해당 item dependency로 선언했다. ImageZoom은 Radix modal 동작을 재사용한다. CreditCard는 마지막 네 자리만 렌더링한다. Ticker는 앱 제공 시세를 확장해 표시한다. Stories/Reel/VideoPlayer는 앱 제공 미디어 URL을 탐색·재생한다.
- **Rationale**: Kibo의 각 화면 문제를 해결하면서 민감한 결제 데이터와 무거운 미디어 처리를 Leement가 소유하지 않는다. Docs의 데모 자산은 저장소 로컬이어서 미리보기가 외부 URL에 의존하지 않는다.
- **Trace (실행 확인)**: 7개 registry item과 source-backed docs 예제를 연결했다. crop 범위 callback, 확대 dialog의 Escape, 마스킹·flip, 시세 상세, story 이동·pause, reel 키보드 이동·mute, player seek/mute를 focused Vitest 7건으로 확인했다. `pnpm registry:build`, `pnpm --filter @leement/docs build`(73 pages), `pnpm typecheck`, `pnpm lint`가 통과했다. 실제 브라우저 미디어 재생과 소비자 CLI 설치는 각각 Task 12/13에서 재확인한다.
- **Evidence**: [Task contract](./tasks.md), [Media interaction tests](../../../registry/ui/media-finance.test.tsx), [Registry metadata](../../../registry.json), [Case mapping](./artifacts/reference-coverage.md#task-09-kibo-image-finance-and-social-checkpoint)

## D014: 공지·편집·비교 UI의 고유 역할을 유지한다 (2026-09-27)

- **Context/Constraints**: Task 10은 Announcement, Banner, Typography, Color Picker, Comparison, Deck, Dialog Stack, Editor, Glimpse, Marquee를 요구한다. 기존 StatusNotice/Dialog/Popover와 겹쳐 보이는 항목이라도 반복 가능한 별도의 화면 문제가 있어야 한다.
- **Trace (초기 가설)**: 공지와 Banner는 범위·밀도를 다르게, Comparison은 양쪽 이미지 노출 조절, Deck은 순서형 화면 탐색, DialogStack은 한 모달 안의 단계 이동, Editor는 검증된 편집 엔진을 item별 dependency로 제공한다. Glimpse는 링크 미리보기, Marquee는 reduced-motion에 대응하는 자동 행진으로 분리한다.
- **Options**: ① 기존 StatusNotice/Dialog/Popover를 이름만 바꿔 재사용한다 ② 각 사례의 별도 사용자 문제를 정의해 작은 source로 구현하고 필요한 검증된 편집/overlay primitive만 item별로 설치한다.
- **Decision**: ②를 선택했다. Announcement/Banner는 정보량과 action의 무게로 구분하고 Typography는 semantic HTML을 유지한다. ColorPicker·Comparison은 native 입력을 사용한다. Deck은 슬라이드, DialogStack은 Radix 모달 단계 이동과 입력 보존을 제공한다. Editor는 TipTap, Glimpse는 Radix Hover Card를 item-scoped dependency로 사용한다. Marquee에는 pause와 reduced-motion 정지를 둔다.
- **Rationale**: 중복 이름으로 카탈로그 수를 채우지 않고 각 항목의 핵심 조작과 사용 기준을 드러낸다. 거대한 편집 엔진이나 포지셔닝 로직을 자체 구현하지 않으면서 다른 항목의 소비자에게 의존성을 강제하지 않는다.
- **Trace (실행 확인)**: 10개 item과 source-backed docs route를 연결했다. Dismiss, hex/preset 선택, image range, Deck 이동, DialogStack 입력 보존·Escape, TipTap HTML 변경, Hover Card preview, Marquee pause를 focused Vitest 10건으로 확인했다. `pnpm registry:build`, `pnpm --filter @leement/docs build`(83 pages), `pnpm typecheck`, `pnpm lint`가 통과했다.
- **Evidence**: [Task contract](./tasks.md), [Interaction tests](../../../registry/ui/complex-utility.test.tsx), [Registry metadata](../../../registry.json), [Case mapping](./artifacts/reference-coverage.md#task-10-kibo-callout-and-complex-utility-checkpoint)

## D015: 남은 유틸리티를 의미·상태 중심으로 구현한다 (2026-09-27)

- **Context/Constraints**: Task 11의 Pill, QR Code, Rating, Relative Time, Spinner, Status, Theme Switcher, Tree는 서로 다른 값·동작 계약을 가진다. Badge·StatusNotice 등 기존 UI와 이름만 다른 중복은 피하고 QR은 실제 스캔 가능한 결과여야 한다.
- **Trace (초기 가설)**: Pill은 제거 가능한 값, Status는 지속 상태, Spinner는 진행 중 상태로 구분한다. QR은 검증된 SVG encoder를 item별로 사용한다. Rating/Tree는 키보드 탐색, Theme Switcher는 공통 light/dark data attribute, RelativeTime은 `time` semantics와 주기적 갱신을 제공한다.
- **Options**: ① 기존 Badge/StatusNotice로 모든 사례를 이름만 바꿔 내보낸다 ② 별도 의미와 사용 동작을 가진 항목만 소스로 제공하고 필요한 QR encoder만 item별로 선언한다.
- **Decision**: ②를 선택했다. Pill은 제거 가능한 값, Status는 지속 상태, Spinner는 진행 중 상태다. QRCode는 `qrcode.react` SVG와 값 복사를 제공한다. Rating은 radio-style keyboard selection, RelativeTime은 native time과 절대 시각, ThemeSwitcher는 공통 light/dark document attribute, Tree는 계층 탐색·확장·선택을 제공한다. Docs 헤더도 새 ThemeSwitcher를 사용한다.
- **Rationale**: Kibo 사용 사례 수를 실제 사용 의미와 조작으로 충족한다. QR encoder 외의 무거운 공통 런타임을 추가하지 않고 제품 데이터와 상태 저장은 소비자에게 남긴다.
- **Trace (실행 확인)**: 8개 registry item과 source-backed docs route를 연결했다. Pill 제거, QR SVG/복사, Rating 방향키, RelativeTime의 절대/상대 의미, Spinner 이름, ThemeSwitcher document 전환, Tree 확장/선택을 focused Vitest 7건으로 확인했다. `pnpm registry:build`, `pnpm --filter @leement/docs build`(91 pages), `pnpm typecheck`, `pnpm lint`가 통과했다.
- **Evidence**: [Task contract](./tasks.md), [Interaction tests](../../../registry/ui/remaining-utility.test.tsx), [Registry metadata](../../../registry.json), [Case mapping](./artifacts/reference-coverage.md#task-11-kibo-remaining-utility-checkpoint)

## D016: 문서 갤러리는 registry source와 실제 토큰에서 생성한다 (2026-09-27)

- **Context/Constraints**: Task 12는 모든 78개 item의 작동 예시와 source, 41개 Kibo 대응, 여섯 foundation의 실제 값을 웹에 노출해야 한다. `coverage` 경로는 저장소 `.gitignore`의 산출물 이름과 충돌한다.
- **Trace (초기 가설)**: 기존 source-backed preview와 registry item metadata를 재사용하고 공통 상세 템플릿에 states와 직접 실행 가능한 설치 명령을 보강한다. Foundation은 토큰 패키지 값을 직접 읽고, 별도의 `/reference-coverage`에서 41개 사례를 연결한다.
- **Options**: ① 설명과 수치를 문서에 복사한다 ② registry source와 token package를 문서의 데이터로 사용한다.
- **Decision**: ②를 선택했다. 상세 페이지는 실제 registry 파일과 예제를 읽고, foundation은 primitive 및 light/dark semantic 값을 읽는다. `/reference-coverage`는 41개 항목을 실제 상세 경로에 연결한다. 사용자에게 공개 CLI 설치는 배포 후에 가능함을 명시한다.
- **Rationale**: 문서 복사본이 구현과 어긋나는 일을 줄이고, light/dark와 설치 경험을 같은 설계 계약으로 보여 준다. `coverage` 무시 규칙은 산출물용이므로 문서 경로만 변경했다.
- **Trace (실행 확인)**: Docs production build의 92개 정적 페이지와 78개 상세 HTTP/source/install 내용을 확인했다. Playwright로 78개 페이지를 모두 열어 hydration pageerror 0건을 확인하고, source tab, light/dark의 계산된 색상, Color foundation 두 모드, 41개 사례 경로, 모바일 Button 페이지를 확인했다. 상세 내용은 [Task 12 checkpoint](./artifacts/reference-coverage.md#task-12-documentation-gallery-checkpoint)에 기록한다. 실제 CLI 설치 검증은 Task 13이다.
- **Evidence**: [Task contract](./tasks.md), [Case mapping](./artifacts/reference-coverage.md#task-12-documentation-gallery-checkpoint), [Docs detail](../../../apps/docs/components/item-page.tsx), [Foundation route](../../../apps/docs/app/foundations/[slug]/page.tsx), [Registry metadata](../../../registry.json)

## D017: 소비자 설치를 전체 item alias와 실제 편집 소스로 검증한다 (2026-09-27)

- **Context/Constraints**: Task 13은 registry JSON 생성만으로 끝나지 않고 shadcn CLI의 alias 해석, 중첩 registry/npm dependency, 독립 소비자 빌드와 source ownership을 확인해야 한다. `@leement/theme`과 docs host는 아직 공개 배포 전이다.
- **Trace (초기 가설)**: 로컬 production docs server와 빌드한 theme 패키지를 독립 Tailwind v4 소비자에 연결한다. 모든 78개 alias를 CLI로 설치하고 source/import를 검증한다.
- **Options**: ① JSON의 존재만 검사한다 ② 별도 소비자에서 실제 CLI 설치, 모든 module import build, source 편집까지 수행한다.
- **Decision**: ②를 선택했다. 일곱 번의 CLI 배치로 78개 alias를 모두 설치했으며, 설치 파일 80개와 JSON을 비교하고 228개 import의 의존성 선언을 확인했다. Avatar Stack/Cursor의 Kibo MIT 고지는 CLI가 선행 주석을 제거하므로 import 뒤의 전체 license comment로 옮겼다.
- **Rationale**: registry build가 통과해도 소비자 alias와 라이선스 고지 전달이 실패할 수 있다. 실제 설치 source가 프로젝트 소유로 남고 수정 후에도 빌드되는지 확인해야 한다.
- **Trace (실행 확인)**: Button+EmptyState 단독 설치가 Utils/Card를 함께 설치했다. 전체 alias 설치 후 소비자 `tsc --noEmit`와 Vite build(모든 module eager import), 수정된 Button의 재빌드가 통과했다. 80개 설치 파일이 생성 JSON과 완전히 일치했고, 두 Kibo 출처 파일에는 전체 MIT 고지가 보존됐다. Docs production build 92 pages, repo typecheck/lint도 통과했다. 공개 npm/호스트 설치와 두 제품 채택은 각각 게시 이후/Task 14의 별도 범위다.
- **Evidence**: [Task contract](./tasks.md), [Installation checkpoint](./artifacts/reference-coverage.md#task-13-registry-installation-checkpoint), [Registry metadata](../../../registry.json), [Avatar Stack source](../../../registry/ui/avatar-stack.tsx), [Cursor source](../../../registry/ui/cursor.tsx), [Third-party notice](../../../THIRD_PARTY_NOTICES.md)
