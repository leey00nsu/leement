# Implementation Plan: visual-design-audit

## 개요

- **기능 ID**: KDRBVZWYME7Q
- **대상 레포**: Leement
- **작성일**: 2026-09-27
- **상태**: Approved
- **Plan 검수**: Pending
- **Plan 검수 Evidence**: -
- **Plan 검수 Decision**: -
- **Plan 검수 Round**: -
- **Plan 검수 Spec Hash**: -
- **Plan 검수 Plan Hash**: -

## 기술 스택

| 구분 | 선택 | 이유 |
| --- | --- | --- |
| UI | 기존 React 19, Tailwind CSS 4, Radix/Base UI | 현행 registry source와 소비자 계약 유지 |
| Theme | `packages/tokens`, `packages/theme` | Leement token/rule을 시각 정본으로 유지 |
| Docs | 현행 Next.js docs 및 source-backed `apps/docs/examples` | 사용자 미리보기와 설치 source의 일치 확인 |
| 자동 검증 | 기존 Vitest/Testing Library, shadcn registry build, 격리된 소비자 빌드 | 바뀐 상호작용·설치 회귀 방지 |
| 시각 검증 | 브라우저에서 실제 렌더링, 비교표와 선별된 전후 이미지 | jsdom만으로 볼 수 없는 레이아웃·대비·반응형 검증 |

## 아키텍처와 작업 순서

`registry.json`을 감사 대상 목록의 기준으로 삼는다. 79개 item의 source 경로와 docs route를 기계적으로 수집하고, Kibo 대응 41개는 upstream commit `3d63cdb15b79d972e3dc38a10997987672f9b263`에 고정한다. 먼저 [감사표](./artifacts/catalog-visual-audit.md)에 각 항목의 참조, 확인한 화면/상태, 문제, 판정, 수정·재검증 결과를 기록한다. 이미 있는 [두 제품 대응표](../GMA8H5L3TLTY-expanded-component-catalog/artifacts/reference-coverage.md)를 원본 앱의 사용 맥락 자료로 사용하되 이번 시각 검증을 대신하지 않는다.

판정은 `pass`, `intentional`, `fix`, `blocked`로 둔다. `intentional`은 Leement rule 또는 명시된 실제 사용 사례로 설명 가능한 차이에만 사용한다. 빠진 anatomy, 잘못된 정보 계층, 겹침/잘림, 상호작용 상태 결여를 이름만 같은 컴포넌트라는 이유로 허용하지 않는다. 결함 심각도는 P1(사용 불가·중대한 접근성/가독성), P2(주요 구조·상태·반응형 오류), P3(세부 시각 오류)로 기록한다. P1/P2는 Feature 내에서 해결한다. P3도 가능한 한 수정하고 남을 경우 구체적인 추적 경로를 남긴다.

수정은 (1) 공통 token/rule, (2) primitive, (3) Kibo 대응 복합 UI, (4) Leement Pattern/Block, (5) docs example/설명 순서로 수행한다. 파일 수나 원본 코드 길이를 품질의 대리 지표로 사용하지 않는다. Kibo의 핵심 구성과 데모 사용 사례가 빠졌다면 작은 독립 source를 유지하면서 필요한 구성을 추가한다. API가 바뀌면 docs/changelog에서 이전 경로를 설명하고 registry dependency를 갱신한다. 매 태스크 후 해당 행을 재검증한다.

### 브라우저 검증

현행 docs route를 로컬로 실행하고 각 항목의 preview를 1440px 및 390px 뷰포트에서 light/dark로 연다. 대표 상태는 hover, focus, active, disabled, loading/error, empty/populated 중 적용 가능한 것을 조작한다. Kibo 대응 항목은 고정한 source와 공개 데모의 anatomy와 정보 밀도를 대조한다. 결함은 before/after 화면과 source 근거를 감사표에 연결한다. 전부를 거대한 제품용 감사 페이지로 복제하거나 모든 스크린샷을 커밋하지 않는다. 작은 이미지 묶음과 항목별 텍스트 판정으로 보존한다.

## 파일 구조

```text
packages/tokens/src/             # 필요할 때 semantic 값
packages/theme/src/              # token의 웹 매핑
registry/ui/                     # primitive 및 Kibo 대응 UI
registry/patterns/               # 제품 반복 구조
registry/blocks/                 # 큰 UI 조합
apps/docs/examples/              # registry 원본을 import하는 실제 시연
apps/docs/lib/items.ts           # item별 사용 규칙/API 설명
apps/docs/components/            # preview 및 docs 공통 표면
docs/designs/design-system.md    # 장기 디자인 규칙
docs/features/KDRBVZWYME7Q-visual-design-audit/artifacts/
                                 # 항목별 감사표 및 선별된 시각 증거
```

## Curated Documentation Impact

- **Schema**: 2
- **Assessment**: Complete
- **Product requirements**: NONE
- **System architecture**: NONE
- **Onboarding entrypoint**: NONE
- **Operational/runtime contract**: NONE
- **Reason**: PRD-FR-005/007/008/010/011/012가 이미 카탈로그 품질, source-backed preview, 두 제품 디자인 의도와 교체 경로를 요구한다. 이번 작업은 그 구현 품질을 바로잡는다. 별도 아키텍처·운영·온보딩 계약 변경은 현재 계획에 없다. 기존 README는 수정 요청이 없으므로 변경하지 않는다. 조사 중 오류가 발견되면 decisions.md에 경로·근거·보류 이유를 기록한다.
- **Targets**: -

## Additional Curated Impacts

- **Assessment**: Complete
- **Decision**: DECLARED

| Kind | Decision | Target | Reason |
| --- | --- | --- | --- |
| design-system-ux | UPDATE | `docs:designs/design-system.md` | 감사에서 확정한 장기 시각·상태 규칙을 token/theme/source/preview와 동기화 |

## Verification Contract

### 변경 분류

- **유형**: BUG_FIX
- **위험도**: HIGH — 공개 항목 79개의 시각 규칙과 일부 API가 바뀔 수 있다.

### 관찰 가능한 계약

- **지원해야 하는 동작**: 79개 source-backed preview가 두 테마/두 뷰포트에서 올바른 구조·상태로 렌더링되고, 설치 후 같은 source가 컴파일된다.
- **전제조건**: `@leement/theme`을 불러오는 Tailwind v4 소비자, 공개 registry JSON.
- **성공 후 보장**: 감사표의 각 item에 판정·근거·재검증이 있고 P1/P2 결함이 없다.
- **중요한 실패 후 보장**: 수동 시각 검증 불가/미검증을 pass로 기록하지 않고 차단 사유를 남긴다.
- **의도적으로 지원하지 않는 사례**: Kibo 전체 페이지 브랜드 재현, Leement 미공개 항목, 백엔드 서비스 연동.

### 테스트 결정

| 계약 / 요구사항 | 결정 | 테스트 수준 | 보호할 현실적인 회귀 | 독립적인 Oracle |
| --- | --- | --- | --- | --- |
| FR-1/FR-3 전체 시각 판정 | NONE | 실제 브라우저 수동·보조 자동 점검 | 잘림, 대비, 정보 계층, 모바일/다크 상태 오류 | 고정 Kibo 데모, Leement 디자인 규칙, 두 제품의 실제 화면 |
| FR-2 변경한 조작·상태 | UPDATE | 기존 Vitest/Testing Library의 해당 스위트 | 키보드·disabled·값 변경·상태 알림 회귀 | 컴포넌트 public API와 WAI-ARIA/HTML 의미 |
| FR-2 새 조합 계약이 기존 스위트에 없음 | ADD, 필요한 경우에만 | 단위/통합 | 새 interaction의 실제 실패 | 승인된 Spec의 AC 및 외부 접근성 계약 |
| FR-4 registry 설치 | NONE | 임시 소비자 설치·typecheck·build | dependency 누락·하드코딩 경로·컴파일 실패 | shadcn registry JSON 및 독립 Tailwind v4 앱 |
| FR-2 token/theme | UPDATE, 값 변경 시 | 기존 tokens/theme 검사 | light/dark alias 누락·브랜드 역할 회귀 | `docs/designs/design-system.md`와 token source |

### 의도적으로 제외하는 테스트

- 컴포넌트의 클래스 문자열을 그대로 복사해 기대하는 테스트, 프레임워크 자체의 동작 재검증, 사용하지 않는 조합의 스냅샷 전수 생성.
- 스크린샷 316장 전체를 영구 테스트 fixture로 커밋하는 방식. 항목별 감사 결과와 결함·수정 대표 이미지로 검증한다.

### 검증 실행

- **구현 중**: 변경한 항목의 관련 Vitest 스위트, 해당 docs route의 실제 브라우저 렌더링.
- **태스크 완료 전**: 변경 범위의 typecheck/lint, 감사표 행과 source/example/docs 동기화.
- **Feature 완료 전**: `pnpm typecheck`, `pnpm lint`, `pnpm test`, `pnpm build` (설정된 `workflow.featureChecks` 네 가지), `pnpm registry:build`, 격리 소비자의 대표 item 설치·typecheck·build.
- **수동/UI 검증**: 79개 preview × light/dark × desktop/mobile, 적용 가능한 주요 조작 상태; Kibo 대응 41개의 source/공개 데모 확인. browser 접근·시각 확인 결과를 감사표에 기록.
- **전체 테스트 필요 여부**: Yes — 공통 token과 registry source가 모든 항목에 전파된다.

## 관련 문서

- Spec: [spec.md](./spec.md)
- Decisions: [decisions.md](./decisions.md)
