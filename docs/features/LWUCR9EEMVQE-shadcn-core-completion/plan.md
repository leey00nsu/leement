# Implementation Plan: shadcn-core-completion

## 개요

- **기능 ID**: LWUCR9EEMVQE
- **대상 레포**: Leement
- **작성일**: 2026-10-03
- **상태**: Approved
- **Plan 검수**: Pending

## 기술 스택

기존 React19/Next.js/strict TypeScript/Tailwind v4/Vitest/Testing Library와 Base UI1.7/Radix를 사용한다. Command는 cmdk를 사용해 직접 listbox 엔진을 재구현하지 않는다. 기본 Table은 native HTML이며 AdvancedDataTable pattern은 TanStack Table의 generic column/API와 native Table·Leement controls를 조합한다. 설치된 호환 버전과 공식 API를 확인하고 필요한 의존성만 선언한다. Calendar는 기존 구현에 discriminated single/range 계약을 추가한다.

## 아키텍처

1. Checkbox/RadioGroup/Toggle/ToggleGroup/Accordion은 기존 Base UI primitive를 스타일링한다. Field는 form 엔진 없이 label/description/error/fieldset 조합을 제공하고 연결 책임을 명확하게 예제로 표현한다. InputGroup/NativeSelect/Kbd/AspectRatio/Breadcrumb/Pagination/ButtonGroup은 native semantic HTML과 기존 Button/Input을 사용한다.
2. Accordion은 측정 panel과 내부 padding을 분리하고 closing 중 비활성·reduced motion을 유지한다. HoverCard는 Radix composition을 감싸며 Glimpse는 동일 source를 사용한다.
3. table.tsx에 기본 Table parts를 추가하고 기존 간단한 DataTable export/props/정렬은 유지한다. 신규 AdvancedDataTable은 registry/patterns/data-table.tsx에서 TanStack column definitions를 받고 정렬/필터/선택/열 표시/페이지를 소유한다. 필요한 controls를 조합한다. 서버 조회·가상화·대용량 튜닝은 앱 책임이다.
4. Calendar 기존 API는 single default로 유지하고 mode=range에 range/defaultRange/onRangeChange를 제공한다. disabled/min/max 및 focused day를 함께 처리한다. DatePicker pattern은 single/range Calendar와 Base UI Popover를 조합하고 trigger 이름·선택 표시·Escape·focus 복귀를 보존한다.
5. registry.json 및 docs lib/items.ts/item-states.ts/docs.ts, route 이름 목록, previews.tsx와 examples를 신규 item별로 갱신한다. 실제 registry source를 docs에서 import한다. 같은 component의 복사본이나 비교 전용 메뉴를 만들지 않는다. 기존 표면/점선/반응형 규칙을 적용한다.

## 파일 구조

- registry/ui/{checkbox,radio-group,field,input-group,native-select,toggle,toggle-group,accordion,breadcrumb,pagination,command,button-group,kbd,aspect-ratio,hover-card}.tsx 및 필요한 Accordion CSS module
- registry/ui/{table,calendar,glimpse}.tsx
- registry/patterns/{data-table,date-picker}.tsx
- apps/docs/examples/<name>.tsx, lib/{items,item-states,docs}.ts, components/previews.tsx, app/{components,patterns}/[slug]/page.tsx
- registry.json, 필요한 package.json/pnpm-lock.yaml
- registry/ui/{core-form,core-navigation}.test.tsx, registry/patterns/{data-table,date-picker}.test.tsx 및 기존 날짜/표 회귀를 소유한 테스트 최소 수정

## Curated Documentation Impact

- **Schema**: 2
- **Assessment**: Complete
- **Product requirements**: UPDATE
- **System architecture**: NONE
- **Onboarding entrypoint**: NONE
- **Operational/runtime contract**: NONE
- **Reason**: PRD-FR-014와 docs의 신규 item/API/사용 경계를 연결한다. 기존 npm/theme/호스팅 방식은 유지한다. README 요청이 없으므로 보호한다(D002). 기존 design-system.md의 오래된 'GMA8H5L3TLTY 진행 중' 문구는 현재 통합된 상태에 맞게 같은 문서에서 바로잡는다.
- **Targets**: docs:prd/leement-prd.md

## Additional Curated Impacts

- **Assessment**: Complete
- **Decision**: DECLARED

| Kind | Decision | Target | Reason |
| --- | --- | --- | --- |
| design-system-ux | UPDATE | docs:designs/design-system.md | 기본 control/field/표/날짜/탐색 사용 규칙 및 기존 설명 정합성 |

## Verification Contract

### 변경 분류

- **유형**: NEW_BEHAVIOR
- **위험도**: HIGH

### 관찰 가능한 계약

- **지원해야 하는 동작**: 신규17개 설치/렌더, checkbox form·indeterminate·disabled, radio/toggle group keyboard, field label/error 연결, native input form, command 선택/disabled, accordion keyboard/close, table 정렬/필터/페이지/선택/열 표시, single/range/date bounds, popup Escape/focus 복귀, 기존Table/Calendar/Glimpse 사용.
- **전제조건**: workspace 의존성·token/theme·registry를 빌드한 Tailwind v4 React 환경.
- **성공 후 보장**: registry source가 소비자 alias로 변환되고 dependencies가 설치되어 타입/build 및 실제 조작이 가능하다. 문서가 같은 source와 일관된 시각 규칙을 보여 준다.
- **중요한 실패 후 보장**: 기존 API 제거를 피하고 실패한 설치/상태를 완료로 기록하지 않는다. 앱 데이터 조회/저장은 포함하지 않는다.
- **의도적으로 지원하지 않는 사례**: shadcn 모든 props/variant parity, 대용량/virtual/server table, 전체 RTL, 도메인/대화 UI, 극단적인 임의 token override, 배포.

### 테스트 결정

| 계약/요구사항 | 결정 | 테스트 수준 | 보호할 현실적 회귀 | 독립적인 Oracle |
| --- | --- | --- | --- | --- |
| US-1 폼/선택 | ADD | core-form.test.tsx 통합 | form 값/indeterminate/disabled/label/error 및 키보드 선택 손실 | HTML form/ARIA 및 승인 AC |
| US-2 탐색/command/accordion | ADD | core-navigation.test.tsx 통합 | disabled 선택·검색 결과 선택·접근 가능한 현재 페이지/접힘 | 사용자 선택 callback, landmark와 focused element |
| US-3 표 | ADD | patterns/data-table.test.tsx 통합 | 필터 뒤 잘못된 페이지/행 선택/열 표시·legacy table export 손실 | 실제 렌더한 rows/selection callback·native table semantics |
| US-3 날짜 | ADD | patterns/date-picker.test.tsx 통합 | 날짜 제약·역순 range·disabled·Escape/focus 및 기존 single API 손실 | 실제 날짜 값과 focused trigger |
| 기존 Table/Calendar 계약 | UPDATE | 기존 media-finance/code-form/source-extension 소유 테스트 필요 시 | 기존 props 사용 회귀 | 기존 public API·사용 예제 |
| 정적인 작은 wrapper | NONE | 타입/build 및 브라우저 | HTML 의미/배치 손실 | 실제 문서 및 화면 |
| 설치/전체 docs | NONE | 일회 CLI/Chrome 소비자 검증 | dependencies/alias/source 누락·폭과테마문제 | 독립 빌드·실제 DOM/스크린샷 |

### 의도적으로 제외하는 테스트

CSS class 문자열 snapshot, primitive 내부 엔진을 다시 검증하는 대규모 suite, 자체 compiler/테스트 인프라는 추가하지 않는다. 새 영구 테스트는 위4개 동작 계약 범위만 추가하고 나머지는 기존 소유 테스트의 필요 수정과 일회 검증으로 처리한다.

### 검증 실행

- **구현 중**: frozen install, 실제 dependency/API 확인, 해당 task의 계약 테스트와 변경 source lint/typecheck.
- **태스크 완료 전**: 해당 item의 source/metadata/원본 예제 확인, focused 검증, 문서 sync 및 checkpoint commit.
- **Feature 완료 전**: workflow.featureChecks의 typecheck/lint/test/build 전체. 신규17개 namespace CLI 설치와 dependency/source/import/typecheck/build를 독립 소비자에서 확인.
- **수동/UI 검증**: 신규17개와 수정 기존3개의 상세 및 Showcase를390/1024/1440px light/dark에서 조사. 대표 화면을 직접 읽고 checkbox/radio/toggle/accordion/command/table/date/hover keyboard·포털·focus·disabled를 실제 조작. 날짜와 표는 기본/empty/제약 상태도 확인. 결과와 대표 screenshot은 Feature artifacts에 저장한다.
- **전체 테스트 필요 여부**: Yes — 새 동작과 기존 API 변경 위험 및 명시된 featureChecks.

## 실행 순서

T01 입력7개 → T02 탐색/표시7개+HoverCard → T03 Table/DataTable → T04 Calendar/DatePicker → T05 전수 문서/소비자 설치/최종 검증. 각 task에서 소유 source·docs·metadata를 함께 완료한다.

## 관련 문서

- Spec: [spec.md](./spec.md)
- Decisions: [decisions.md](./decisions.md)

Plan 승인: agentReview.plan disabled 및 workflow-stage의 plan_approve 자동 진행 지시에 따라 승인했다.

## T06 사용자 검토 후 Input 정렬 보정

기존 native file Input의40px control 높이 안에서 파일 선택 버튼·파일명을 중앙에 배치한다. 실제 Chrome에서 원인과 수정 전후를 비교하고 한국어/영어,390/1440px,light/dark의 빈 파일·선택 후·disabled 및 일반 Input/Field/InputGroup 회귀를 확인한다. CSS class snapshot이나 새로운 영구 테스트는 추가하지 않는다(NONE). 기존 featureChecks 및 생성 registry source를 확인한다. 기존 승인 범위의 native input form 계약을 보정하며 별도 기능이나 API를 추가하지 않는다.

## T07–T10 예제 보강 계획

- T07: framework-agnostic docs metadata에 추가예제 이름/설명/file을 선언한다. client lazy loader는 명시적 import만 사용하고 server가 해당 예제 source를 읽어 기존 registry import 경로를 consumer alias로 변환한다. 상세 ItemPage의 Examples 섹션/outline에서 기존 ItemWorkbench를 재사용한다. Showcase는 현재 Preview만 사용한다.
- T08: 우선13개 UI의 source-owned usage 예제. 많은 선택지/상태는 목적별 작은 예제로 나누고 내부 slot engine을 재작성하지 않는다. Progress value=null의 실제 시각 상태가 부족하면 scoped 회귀 보정만 한다.
- T09: 보완42개 UI의 크기/variant/form/결과 조합. schema engine/자동 props playground/새 배포 패키지 없이 읽기 쉬운 예제 source를 작성한다.
- T10:55개 예제/metadata/import/API/Code 대조, light/dark390/1440px actual docs 검사와 우선13개 및 대표 폼/overlay/motion 조작. 예제 source를 한 소비자에 가져온 strict 타입/build 확인.

### 예제 보강 Verification Contract

| 계약 | 결정 | 보호할 회귀 / Oracle |
| --- | --- | --- |
| 예제 source→consumer Code 변환과 안전한 경로 resolve | ADD | 기존 examples와 추가 examples의 코드 대응/alias 재작성/허용된 경로; registry-source 소유의 focused Vitest 계약 |
| 정적 metadata·크기·조합 | NONE | 실제 TypeScript/build와 일회 catalog 대조 및 브라우저 스크린샷. CSS 문자열 snapshot 금지 |
| 폼/overlay/선택/motion 동작 | NONE | 재사용 primitive의 기존 계약 테스트와 실제 신규 예제 조작; 지표 전체를 다시 테스트하지 않는다 |

추가예제의 제목만 만들어 놓거나 같은 예제를 재사용해 이름만 바꾸지 않는다.55개의 조사 행마다 실제로 제공된 예제 ID를 최종 evidence로 연결한다. 전체 featureChecks는 마지막T10에서 실행한다. 각 중간태스크는 관련 eslint와 docs typecheck/build 범위 검사 후 commit한다. PRD-FR-008 및 docs/designs/design-system.md의 예제 작성 규칙을T07/T10에서 동기화한다. README와 다른 운영/아키텍처 문서에는 추가 영향NONE이다.

## T11 기본 mono 폰트

사용자의 추가 구현 지시를 반영한다. 공식 D2Coding의 고정 revision 자산 Regular400/Bold700를 공식 standard TTF를 lossless WOFF2로 변환해 배포하고 OFL 및 출처/해시를 fonts/에 보존한다. theme build의 font-face(swap)와 tokens mono family를 갱신한다. Foundations 기본 옵션에 폰트명을 표시하고 한국어/영문 코드 sample 및 커스텀 파일 로드 안내를 제공한다. registry API나 본문/브랜드 token은 변경하지 않는다.

Curated Documentation Impact: 기존 PRD-FR-002/011/013과 docs/designs/design-system.md를 UPDATE한다. 두 대상은 T11 Docs에 연결한다. 아키텍처·운영·README는 NONE(README 요청 없음).

Verification Contract: UI_RULE_CHANGE, 위험 LOW. 영구 테스트 NONE—기존 typography/preview/token 계약과 typecheck/lint/test/build를 실행한다. 일회 검증으로 npm pack에 두 WOFF2/OFL/NOTICE와 CSS 상대 URL 포함, 독립 소비자 빌드, 실제 Chrome에서 400/700 font 로드 및 glyph 측정(한국어 폭2배/영문 고정폭), Foundations mono 변경/사이트 적용/새로고침 유지/CSS 복사/초기화, 본문·로고 독립성을 확인한다. light/dark390/1440px에서 코드 가로 overflow를 확인한다. Feature supporting artifact에 필요한 검증 결과만 보존한다. 공개 publish/배포는 범위 밖이다.
