# Implementation Plan: docs-reference-parity

## 개요

- **기능 ID**: ASDHZYC4MRGK
- **대상 레포**: Leement
- **작성일**: 2026-10-05
- **상태**: Approved
- **Plan 검수**: Done
- **Plan 검수 Evidence**: docs/features/ASDHZYC4MRGK-docs-reference-parity/decisions.md
- **Plan 검수 Decision**: decision: approve — repository config의 agentReview.plan.enabled=false. 기본 계획 점검을 메인 에이전트가 수행하며 fresh subagent review를 실행했다고 주장하지 않는다.

## 기술 스택

기존 strict TypeScript/React, Tailwind v4, Base UI, Motion, Recharts, shadcn registry, Next docs를 유지한다. 새 기능의 dependency는 실제 필요와 공개 source license를 확인하고 consumer dependency에 등록한다. primitive source를 npm UI 라이브러리로 포장하지 않는다.

## 아키텍처

1. `ItemPage`의 반복 문단을 Usage/Examples/API Reference로 교체한다. API metadata는 public part/prop/type/default/required와 실제 공식 primitive 링크를 명시한다. 중요한 기존 접근성·동작 제약을 Usage/example/API note로 옮긴다.
2. 고정 baseline의 63개 shadcn Base 문서와 source를 비교한다. 누락 component 17개와 기존 compound/export/controlled 기능을 순차 보완한다. 기존 source와 API의 동등성을 우선하고 필요한 primitive 변경은 public 소비자 영향과 키보드 계약을 확인한다.
3. upstream의 공개 example code는 MIT 출처를 보존해 Leement imports·API·semantic token·Motion으로 적응한다. 설치 후 source가 앱에 남는다. `apps/docs/examples`에 실행/표시 source 하나만 둔다. 중복 Preview ID는 재사용하되 사용 맥락을 catalogue에 연결한다. inline recipe와 API/provider/hook 문서도 별도로 옮긴다.
4. 공개 Kibo block은 `registry/blocks`에서 실제 UI를 조합하고 named props/composition으로 데이터를 교체한다. Next/backend 의존을 제거하고 서비스 연결은 consumer callback으로 둔다. 데모 fake realtime과 실제 network 연동을 구분한다.
5. Charts recipes는 `registry/blocks/charts`에 source를 보관하고 registry:block으로 배포한다. `/charts`와 `/charts/[category]`에서 70개 예제를 탐색하며 Components Chart는 공통 API 문서다. 기존 3개 registry 레이어를 유지하고 별도 npm chart 라이브러리를 만들지 않는다.
6. navigation/route/search/static params와 example runtime 목록을 같은 task에서 갱신한다. Gallery preview는 기존 single-runtime iframe·lazy load·resize/px/Replay/theme sync를 재사용한다.
7. 마지막에 실제 item/example/API/recipe의 대응 자료와 consumer 설치 결과를 고정 baseline에 대조한다. 일부 개수만 맞춘 완료 보고를 금지한다.

## 파일 구조

- `apps/docs/components/item-page.tsx`, 신규 API Reference 표시 컴포넌트
- `apps/docs/lib/api-reference.ts`, `example-catalog.ts`, `items.ts`, `docs.ts`, source/preview helpers
- `apps/docs/examples/*.tsx` — 실행/Code 공통 source
- `apps/docs/app/components|patterns|blocks/[slug]/page.tsx`, 신규 `apps/docs/app/charts/`
- `registry/ui/*.tsx`, `registry/patterns/*.tsx`, `registry/blocks/*.tsx`, `registry/blocks/charts/*.tsx`
- `registry.json`, 필요한 workspace dependency/lockfile, `THIRD_PARTY_NOTICES.md`
- Feature `artifacts/reference-baseline.json` 및 실제 검증에 필요한 대응 자료

## 실행 순서

Tasks의 단일 순차 목록이 우선순위다. 문서 구조 → 신규 입력/콘텐츠 → 신규 탐색/overlay → 신규 복합 UI → 기존 기본 입력/콘텐츠 parity → 기존 overlay/data parity → 전체 Base 예제/inline recipe/API → Kibo Applications → Kibo Websites 3묶음 → Charts → 전체 검증/curated sync. 각 완료 task에서 checkpoint commit을 만든다. 임시 migration script는 `/tmp`에 두며 재실행할 필요가 검증된 경우만 tooling에 남긴다.

## Curated Documentation Impact

- **Schema**: 2
- **Assessment**: Complete
- **Product requirements**: UPDATE
- **System architecture**: NONE
- **Onboarding entrypoint**: NONE
- **Operational/runtime contract**: NONE
- **Reason**: PRD-FR-015/016/017과 FR-014/block 목표를 새 승인 요구사항으로 갱신한다. token/theme→registry→application 구조와 공개 namespace/runtime 계약은 유지한다. README 제공 목록의 향후 불일치는 README 보호 때문에 D004에 보류했다. API/설치 usage는 docs app에서 갱신한다.
- **Targets**: docs:prd/leement-prd.md

## Additional Curated Impacts

- **Assessment**: Complete
- **Decision**: DECLARED

| Kind | Decision | Target | Reason |
| --- | --- | --- | --- |
| design-system-ux | UPDATE | docs:designs/design-system.md | 문서 구조, 실제 Base 대응·Blocks/Charts 범위, count와 token/Motion/Preview 규칙을 실행 source와 맞춘다 |
| other-curated | UPDATE | project:THIRD_PARTY_NOTICES.md | MIT로 채택한 shadcn/Kibo source의 정확한 출처와 license 고지 |

README/constitution/기존 Feature/README routing은 NONE이다. OpenWiki는 disabled이며 완료 게이트가 아니다.

## Verification Contract

### 변경 분류

- **유형**: NEW_BEHAVIOR
- **위험도**: HIGH — public component API/keyboard, 수백 개 example, registry graph 변경

### 관찰 가능한 계약

- **지원해야 하는 동작**: spec US-1..4, FR-1..5 및 고정 upstream의 동작하는 예제·API/parts/inline 사용법.
- **전제조건**: Tailwind v4 React consumer, theme import, 공개 namespace 구성, 서비스 데이터는 앱이 제공한다.
- **성공 후 보장**: 모든 공개 source가 설치·타입·빌드되고 실제 props/API 설명과 UI 동작이 맞는다. 각 baseline 항목에 설치 source와 실행 예제가 대응한다.
- **중요한 실패 후 보장**: disabled/invalid/empty/loading/error/unknown selection을 문서대로 처리한다. popup close 시 focus 복귀. 없는 네트워크 backend를 성공으로 표시하지 않는다. source 변경에는 기존 API 영향과 대응을 문서화한다.
- **의도적으로 지원하지 않는 사례**: NativeSelect, paid blocks, 서버 backend, 원본 앱 전면 교체, remote push/npm publish/deploy.

### 테스트 결정

| 계약 / 요구사항 | 결정 | 테스트 수준 | 보호할 현실적인 회귀 | 독립적인 Oracle |
| --- | --- | --- | --- | --- |
| Usage/API 문서 구조 | NONE | typecheck/build + 실제 브라우저 | 깨진 목차·표·중복 설명 | 승인 spec와 실제 source |
| 신규 입력/overlay/탐색·compound API | ADD | Vitest/Testing Library 통합 | 키보드 선택/focus/disabled/controlled·group 동작 | 고정 upstream 공개 동작과 HTML/Base UI 계약 |
| 기존 component API/예제 | UPDATE | 기존 계약 소유 테스트 | 기존 consumer API 및 keyboard 회귀 | 기존 테스트·소비자 사용처 |
| source/registry/examples 대응 | UPDATE | 기존 registry-source 테스트 | missing source/dependency, copy code가 다른 파일을 표시 | 고정 baseline 및 실제 registry graph |
| Blocks/Charts 상호작용 | ADD | 선택·제출·데이터 변경의 통합 테스트 | placeholder, 연동 callback·필터·tooltip 실패 | 공개 upstream 예제와 승인 callback 계약 |
| 전체 baseline 커버리지/설치 | ADD | 정적 coverage 검사 + consumer 설치/빌드 | 등록만 되고 렌더/source 누락, transitive dependency 누락 | 고정 baseline(분모) 및 shadcn CLI 설치 결과 |

### 의도적으로 제외하는 테스트

모든 DOM prop의 반복 스냅샷, className 구현 미러, upstream primitive 내부 재검증, backend 실제 협업/인증, 같은 resize/replay 엔진의 예제별 동일 테스트는 추가하지 않는다. 기준표의 문자열 존재만으로 기능 동등성을 인정하지 않는다.

### 검증 실행

- **구현 중**: task별 strict typecheck, 변경 source의 실제 export/prop·추가 dependency 확인, 위험 계약에 연결된 focused test.
- **태스크 완료 전**: 해당 source render/keyboard/controlled 테스트, docs typecheck와 영향받은 route/예제 점검. 저위험 문서만 바뀐 task는 typecheck/브라우저로 확인한다.
- **Feature 완료 전**: 실제 `workflow.featureChecks`의 `pnpm run typecheck`, `pnpm run lint`, `pnpm run test`, `pnpm run build`를 모두 실행한다. baseline coverage 및 consumer 설치 체크는 registry-source 테스트와 마지막 task의 consumer 검증에 포함한다.
- **수동/UI 검증**: local docs에서 대표 compact/overlay/복합/inline/Block/Chart를 light/dark·240/390/full 폭, replay/px, 키보드/RTL, 검색·navigation·direct route로 확인하고 필요한 결과만 artifacts에 저장한다. 실행 source와 Code 복사 결과를 대조한다.
- **전체 테스트 필요 여부**: Yes — public source/API/registry와 docs route 전체에 영향을 준다. full build는 마지막 task와 local verify의 필수 gate에서 수행하며 반복 성공을 위한 불필요한 full build는 피한다.

## 관련 문서

- Spec: [spec.md](./spec.md)
- Decisions: [decisions.md](./decisions.md)
- 기준 목록: [reference-baseline.json](./artifacts/reference-baseline.json)
