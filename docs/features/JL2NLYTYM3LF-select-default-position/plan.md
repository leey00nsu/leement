# Implementation Plan: select-default-position

## 개요

- **기능 ID**: JL2NLYTYM3LF
- **대상 레포**: Leement
- **작성일**: 2026-10-14
- **상태**: Approved
- **Plan 검수**: Disabled — 저장소 agent review 설정에 따라 생략
- **Plan 검수 Evidence**: -
- **Plan 검수 Decision**: -

## 기술 스택

기존 React / Base UI Select / Leement Motion / Next.js docs를 사용한다. dependency나 token/theme 변경은 필요 없다.

## 구현과 파일 구조

하나의 task에서 registry/ui/select.tsx의 alignItemWithTrigger 기본값을 false로 변경한다. side=bottom, sideOffset=4, primitive positioner와 명시적 props 전달을 유지한다. 기존 false 지정 사용처는 불필요하게 수정하지 않는다.

- apps/docs/lib/api-core.ts: SelectContent API 기본값과 명시적 true 안내.
- apps/docs/lib/base-example-catalog.ts: 기본 false와 선택적 겹침 방식 설명.
- apps/docs/examples/base-select-align-item.tsx: 토글 예제 초기 false, 기존 true 전환 유지.
- apps/docs/examples/select-states.tsx: 기본 위치 예제에서 false 생략, 명시적 true 예제 유지.
- docs/prd/leement-prd.md: 기존 선택 규칙에 기본 비겹침과 명시적 true 동작 기록.
- docs/designs/design-system.md: Select 기본 위치와 Dropdown Menu와의 용도 구분 설명.
- apps/docs/lib/releases.ts: unreleased에 registry 기본값 변경과 기존 소스 소유 및 true 사용 안내. 공개 버전/과거 history는 유지.

## Curated Documentation Impact

- **Schema**: 2
- **Assessment**: Complete
- **Product requirements**: UPDATE
- **System architecture**: NONE
- **Onboarding entrypoint**: NONE
- **Operational/runtime contract**: NONE
- **Reason**: PRD의 기존 Select 요구와 선택 규칙에 사용자 지정 기본 위치를 동기화한다. source 설치 및 배포 구조는 동일하다. README에는 Select 위치 기본값 설명이 없어 변경할 필요가 없고 보호 규칙을 유지한다.
- **Targets**: docs:prd/leement-prd.md

## Additional Curated Impacts

- **Assessment**: Complete
- **Decision**: DECLARED

| Kind | Decision | Target | Reason |
| --- | --- | --- | --- |
| design-system-ux | UPDATE | docs:designs/design-system.md | Select 기본 위치와 메뉴 용도 설명 |
| api-data-contract | UPDATE | project:apps/docs/lib/api-core.ts | 실제 SelectContent 기본값과 API 일치 |
| release-deployment | UPDATE | project:apps/docs/lib/releases.ts | 미게시 source 기본값 변경 안내 |

모든 target을 T01 Docs에 연결한다. constitution/custom, 토큰, theme, 배포 설정은 변경하지 않는다. experimental.openwiki=false다.

## Verification Contract

### 변경 분류

- **유형**: NEW_BEHAVIOR
- **위험도**: LOW

### 관찰 가능한 계약

- **지원해야 하는 동작**: 옵션 없는 Select가 공간이 충분하면 아래4px 간격으로 열림; 명시적 true는 trigger와 selected item 정렬; 기존 선택/폼/focus/disabled 유지.
- **전제조건**: lockfile dependencies 설치, 실제 docs preview와 브라우저 layout 사용, 사용자 기존 서버와 분리한 port.
- **성공 후 보장**: registry 생성 source와 Preview, API/예제 기본값 일치. viewport 경계에서 popup이 화면 안에 자동 배치된다.
- **중요한 실패 후 보장**: disabled Select는 열리지 않고, Escape는 값 변경 없이 닫고 trigger에 focus 복귀. 공간 부족 시 위로 배치하는 primitive 규칙 유지.
- **의도적으로 지원하지 않는 사례**: 모든 viewport에서 강제로 아래 배치, 소비자 기존 source 자동 변경, 다른 메뉴 동작 변경.

### 테스트 결정

| 계약 / 요구사항 | 결정 | 테스트 수준 | 보호할 현실적인 회귀 | 독립적인 Oracle |
| --- | --- | --- | --- | --- |
| FR-1 기본 비겹침 | NONE | 실제 브라우저 좌표/스크린샷 | 선택 값/placeholder에서 trigger를 가림 | 승인 Spec의 아래4px 계약과 실제 bounding box |
| FR-2 명시적 true/경계 | NONE | 실제 브라우저 | 옵션 무시 또는 화면 밖 popup | selected item/trigger text 좌표와 viewport 경계 |
| FR-2 입력/키보드 | NONE | 기존 controls/core-form 및 browser | 값/폼/disabled/Escape 회귀 | trigger 현재 값, FormData, active element |
| FR-3 설치/문서 | NONE | 기존 registry-source/reference-coverage 및 생성 source 검사 | 설치 source와 API 기본값 불일치 | 승인 Spec과 실제 생성 Select JSON |

새 영구 테스트는 추가하지 않는다. 기본값이나 data attribute만 복제하는 테스트 대신 실제 layout을 확인한다. 기존 테스트는 수정하지 않는다.

### 의도적으로 제외하는 테스트

- 단순 기본값/class 이름 snapshot, Base UI 충돌 알고리즘 자체 재검증, unrelated UI 새 테스트.

### 검증 실행

- **구현 중**: 변경 파일 diff와 기존 controls/core-form/source/reference focused tests.
- **태스크 완료 전**: default/placeholder/explicit true, mouse/keyboard/Escape/disabled, viewport bottom flip을 light/dark desktop와 mobile에서 실제 브라우저로 확인. 생성 registry JSON의 false 기본값 확인.
- **Feature 완료 전**: 설정된 pnpm run typecheck, pnpm run lint, pnpm run test, pnpm run build 전체 실행. build는 registry 생성과 production docs route를 포함한다. 새 변경/실패가 없으면 이미 성공한 검사를 반복하지 않는다.
- **수동/UI 검증**: 실제 popup 좌표·4px 간격·selected item 정렬·theme·focus를 확인하고 필요 근거는 Feature artifacts에 저장한다. 일회성 script/log는 임시 경로를 사용한다.
- **전체 테스트 필요 여부**: Yes — workflow.featureChecks가 요구한다.

## 관련 문서

- Spec: [spec.md](./spec.md)
- Tasks: [tasks.md](./tasks.md)
- Decisions: [decisions.md](./decisions.md)
