# Implementation Plan: ui-consistency-remediation

## 개요

- **기능 ID**: G9AD96ZLEU25
- **대상 레포**: Leement
- **작성일**: 2026-10-06
- **상태**: Approved
- **Plan 검수**: Done
- **Plan 검수 Evidence**: docs/features/G9AD96ZLEU25-ui-consistency-remediation/decisions.md
- **Plan 검수 Decision**: decision: approve — main-agent 검토. config의 agentReview.plan.enabled=false이며 subagent 검수를 주장하지 않는다.

## 기술 스택

React/strict TypeScript·Tailwind v4·Base UI·Motion·Recharts·Next docs·shadcn registry를 유지한다. 새 UI runtime dependency와 자체 style engine은 만들지 않는다. 기존 token/theme builder와 component source가 수정 위치다. 개발 dependency는 managed worktree에서 frozen lockfile로 설치한다.

## 아키텍처

1. audit-scope.json의 고정 목록을 source와 example/runtime catalog에 연결한다. 항목별 규칙·위반·유지/수정/예외·검증을 Feature artifacts/audit-results.json에 기록한다. 검수 pending을 PASS와 구분하며 source inspection/browser observation 결과를 구별한다.
2. 전체 source를 읽고 기존 Button/Input/Card/Select/Tabs/Menu와 비교한다. palette/미정의 CSS 변수/spacing/control/radius/shadow/focus/semantic 상태/Motion을 점검한다. geometry·canvas/content-selected color처럼 기능적 수치를 단순 위반으로 세지 않는다. 초기 browser baseline은 Sidebar와 확인된 결함의 수정 전 상태에 집중한다.
3. 일반 border의 currentColor fallback을 semantic border reset으로 복구하고 Sidebar 색상은 Leement semantic 역할을 theme compatibility와 Tailwind 색상에 연결한다. Foundations override에도 실제 source가 변하도록 관련 derived aliases를 확인한다. 일반 Input은 source 기본 surface/높이를 상속하고 메뉴의 dense size는 explicit sm과 default40/lg44 및 collapsed icon 조작 영역으로 일관되게 정한다. 기존 API 이름은 유지한다. action/badge/skeleton/submenu의 위치·wrap·focus 및 icon 상태도 함께 검증한다. inset 기본 shadow는 일반 surface 원칙에 맞게 정리하고 floating 표면은 border/반경 역할을 확인한다.
4. 나머지52 UI/2 Patterns는 part/variant/state별로 검사한다. 공통 Input/Select/Button을 이용하는 source는 기존 source를 조합하고 국소 override를 최소화한다. Base example의 큰 heading·아이콘·지정 custom radius는 해당 예제의 의도를 확인하며 기본 컨트롤을 upstream 크기로 덮은 곳은 수정한다.
5. 28 Blocks는 Applications·content·conversion·marketing source를 전수 읽고 예제를 실행한다. Card를 다시 padding하는 header/footer, 일반 표면 shadow, heading/body/brand/mono 오용, controls와 dense rows, selected/error/disabled를 확인한다. 동일 역할의 공통 규칙을 적용하고 앱 데이터/callback 계약을 보존한다.
6. 70 Charts는 모든 recipe를 읽고 실행한다. chart wrapper는 Card·Header/Content/Footer 및 semantic chart series를 공유하고 tooltip/legend/축/표·기간/series 제어를 대조한다. 크기·label·시리즈 수·차트별 geometry 차이는 의도된 기능이다. 데이터 강조색과 상태색을 혼동하지 않는다.
7. 모든 독립 예제와 recipes를 실제 browser light/dark390/1440에서 확인한다. 기존 /preview route와 Aside REPL을 사용하고 필요하면 /tmp의 일회성 harness가 실제 runtime을 한 번에 하나씩 실행한다. snapshot과 screenshot을 확인하며 batches의 contact sheet·geometry/color observations를 연결한다. layout overflow/누락 스타일/낮은 대비/placeholder·에러는 별도 항목으로 추적한다. contact sheet만으로 작은 focus·hover·입력을 판정하지 않고 고위험 source에서 직접 조작한다.
8. 최종 수정 source와 종속 graph를 registry 빌드 후 독립 React/Tailwind consumer로 설치한다. 별도 /tmp consumer는 framework-specific/docs globals 없이 theme/source가 동작해야 한다. 그 consumer에서 타입/build와 Sidebar·overlay·Block·Chart 대표 UI를 확인한다.

## 파일 구조

- packages/theme/build.mjs, packages/theme/theme.test.mjs, 필요할 때만 packages/tokens/src/tokens.json
- registry/ui/*.tsx, registry/patterns/{data-table,empty-state}.tsx 및 직접 영향을 받는 공용 source
- registry/blocks/*.tsx, registry/blocks/charts/*.tsx
- apps/docs/examples/*.tsx, 필요한 lib API/preview aliases, apps/docs/lib/releases.ts
- docs/designs/design-system.md — 공용 Sidebar/control/overlay/Block 규칙과 문서 정책 동기화
- Feature artifacts/audit-scope.json, audit-results.json 및 필요한 검수 이미지
- /tmp/leement-consistency-* — disposable harness/scripts/consumer와 대형 개별 screenshot. 필요한 결과만 Feature artifacts로 보존

## 실행 순서

T01 source 전수검수·기준표/Sidebar baseline → T02 Sidebar/theme → T03 나머지 UI/Patterns·관련 예제 → T04 Blocks → T05 Charts → T06 전체 browser sweep·consumer·문서/full verification. 각 task는 하나씩 claim/transition하고 완료 checkpoint commit 후 다음 task를 진행한다. 발견한 결함은 해당 task 또는 뒤의 예정 task에 추적해 scope를 줄이지 않는다.

## Curated Documentation Impact

- **Schema**: 2
- **Assessment**: Complete
- **Product requirements**: NONE
- **System architecture**: NONE
- **Onboarding entrypoint**: NONE
- **Operational/runtime contract**: NONE
- **Reason**: 기존 PRD-FR-011/015/016/017과 source ownership의 복구다. 새 제품 요구·architecture·설치 namespace·runtime API는 추가하지 않는다. README 수정은 요청되지 않았고 현재 확인된 특정 README 불일치는 없다(D003). 새 제품 요구가 필요해지면 PRD/Tasks와 이 평가를 다시 동기화한다. theme의 기존 semantic 연결 복구·source visual 수정은 디자인 문서와 미공개 변경에서 설명한다.
- **Targets**: -

## Additional Curated Impacts

- **Assessment**: Complete
- **Decision**: DECLARED

| Kind | Decision | Target | Reason |
| --- | --- | --- | --- |
| design-system-ux | UPDATE | docs:designs/design-system.md | Sidebar semantic·size·focus와 역할별 예외를 공용 규칙에 설명하고 기존 Feature ID 역참조2곳을 제거해 지속 정책으로 정리 |
| release-deployment | UPDATE | project:apps/docs/lib/releases.ts | 확인된 UI 수정과 필요한 source 재설치 안내를 unreleasedChanges에 기록하며 공개0.2.0 이력은 보존 |

constitution/custom/README/THIRD_PARTY_NOTICES는 NONE: 기존 dependency/API/license를 유지한다. OpenWiki는 disabled다. 모든 UPDATE target은 T02/T06 Docs에 연결한다.

## Verification Contract

### 변경 분류

- **유형**: BUG_FIX
- **위험도**: HIGH — 다수 public source의 테마/geometry 변경과 responsive 조합

### 관찰 가능한 계약

- **지원해야 하는 동작**: Spec US-1..4/FR-1..4. 같은 역할의 표면/글자/control/focus/상태가 공용 규칙을 따르고 설치 source와 docs가 동일하게 렌더된다.
- **전제조건**: theme import·Tailwind v4·React consumer, 앱 소유 데이터/callback, 고정 audit 분모.
- **성공 후 보장**: 모든 대상은 검수 결과와 증거가 있고 확인된 불일치가 수정된다. 의도된 예외는 범위/이유/재검토 조건이 있다. 기존 제공 기능·API·예제 수를 유지한다.
- **중요한 실패 후 보장**: disabled/invalid/empty/pending·form 데이터 보존·popup focus 복귀·keyboard 계약을 유지한다. style 오류가 있으면 기존 source를 숨기거나 지원 기능을 삭제하지 않는다.
- **의도적으로 지원하지 않는 사례**: 서버 backend·NativeSelect·새 브랜드/전체 redesign·게시/배포. 이전 consumer의 custom source를 자동 덮어쓰지 않는다.

### 테스트 결정

| 계약 / 요구사항 | 결정 | 테스트 수준 | 보호할 현실적인 회귀 | 독립적인 Oracle |
| --- | --- | --- | --- | --- |
| US-1 전수 시각/역할 검수 | NONE | 실제 browser·source 검수와 scope 대조 | 독립 예제 누락·의도적 차이 오판 | 고정 audit scope·기존 design-system과 공용 source |
| US-2 Sidebar/theme semantic 연결 | UPDATE | packages/theme/theme.test.mjs의 기존 compatibility 계약 테스트 | consumer에서 CSS alias 미정의·모드/brand override 불연결 | semantic tokens와 theme import 계약 |
| US-2/3 기존 public interaction/API | NONE | 기존 focused Vitest 통합 테스트·browser 조작 | collapse/Escape/form/series·disabled 동작 회귀 | 기존 consumer 계약/HTML/Base UI behavior |
| FR-3 전체 source·예제 대응 | NONE | 기존 coverage/registry-source/SSR 예제 검사 | 설치 dependency/source/route 누락 | 고정 Base/Blocks/Charts baseline·실제 namespace 설치 |
| US-4 consumer·Preview | NONE | 독립 설치/tsc/build/browser·기존 Preview 검사 | docs에서만 보정된 CSS·px/Replay/테마 불일치 | 설치 source와 기존 실행 UI |

새 durable 테스트는 추가하지 않는다. 기존 interaction test oracle가 실제 변경 동작 때문에 수정이 필요하면 Plan에 정확한 target과 이유를 추가하고 다시 workflow를 확인한다. className snapshot/단순 구현 미러/primitive 내부/수백 예제별 동일 resize 엔진 테스트는 만들지 않는다.

### 검증 실행

- **구현 중**: 수정 source의 focused lint/strict typecheck와 해당 기존 테스트. theme 수정 후 build:theme와 theme compatibility test. source/batch 결과는 실제로 실행한 것만 기록.
- **태스크 완료 전**: 변경 항목을 light/dark390/1440에서 확인하고 risk별 keyboard/240/1024/RTL/reduced motion. 초기 full browser sweep의 미확인 항목은 T06에 남겨 task별 확인 범위를 명확히 한다.
- **Feature 완료 전**: workflow.featureChecks의 pnpm run typecheck/lint/test/build 전체, 고정 대응과 namespace consumer tsc/build. 동일 전체 검사 통과 뒤 재실행은 코드/검증 조건 변경이 있을 때와 local verify 필수 gate에서만 한다.
- **수동/UI 검증**: 모든498 예제/70 recipe·독립 기본 component preview의390/1440 light/dark. Sidebar variants/modes/좌우/controlled/shortcut/RTL/Escape/키보드 focus, popup/Menu, form/error/pending, pricing/canvas/roadmap, chart 기간/series와 tooltip, Foundations color/radius/spacing override, 상세 px/resize/Replay.
- **전체 테스트 필요 여부**: Yes — 공용 UI/theme/registry 조합을 수정한다. 테스트 완료를 visual 검수 완료와 구별한다.

## 실패와 롤백

browser가 지원하지 않는 media/library 실행 또는 특정 route 문제는 미확인/실패로 기록하고 대체 관찰 범위를 명시하며 전체 PASS로 덮지 않는다. 수정으로 layout/API 회귀가 발생하면 그 source의 변경을 최소화하고 기존 interaction 계약과 검수 근거로 재확인한다. task checkpoint로 영향을 격리하고 main은 승인된 local integration 전까지 유지한다.

## 관련 문서

- [spec.md](./spec.md)
- [decisions.md](./decisions.md)
- [audit-scope.json](./artifacts/audit-scope.json)
