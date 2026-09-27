# Implementation Plan: expanded-component-catalog

> 승인된 Spec GMA8H5L3TLTY의 구현 계획. 구현 순서는 공통 UI 교체 가능성 → Kibo 사용 사례 확장 → docs/소비자 검증이다.

---

## 개요

- **기능 ID**: GMA8H5L3TLTY
- **대상 레포**: Leement
- **작성일**: 2026-09-26
- **수정일**: 2026-09-27
- **상태**: Approved
  - 값: Draft | Review | Approved
- **Plan 검수**: Pending
  - 값: Pending | Running | Done
- **Plan 검수 Evidence**: -
  - 예: `docs/features/F001-foo/decisions.md` 또는 docs 루트 아래의 실제 리뷰 산출물
- **Plan 검수 Decision**: -
  - 형식: `결정: approve|changes_requested|blocked ...` 또는 `decision: ...`
- **Plan 검수 Round**: -
  - `workflow-stage --json`이 반환한 양의 정수이며 첫 리뷰는 `1`
- **Plan 검수 Spec Hash**: -
  - `workflow-stage --json`이 반환한 정확한 `specHash`
- **Plan 검수 Plan Hash**: -
  - `workflow-stage --json`이 반환한 정확한 `planHash`

---

## 기술 스택

| 구분 | 선택 | 이유 |
| ---- | ---- | ---- |
| Package/workspace | pnpm 10 + Turborepo | 기존 workspace를 사용한다. |
| Tokens/theme | JSON tokens + Node CSS generation + Tailwind CSS v4 | framework-independent tokens를 정본으로 유지한다. custom compiler를 추가하지 않는다. |
| UI delivery | shadcn registry + React 19 + TypeScript strict | 소스를 소비자 앱이 소유한다. npm React component package는 만들지 않는다. |
| Behavior | 기존 Radix, 필요한 경우 검증된 headless primitive | 키보드/초점 behavior를 보존하고 item별 dependency만 설치한다. 두 원본의 Base UI와 차이는 migration에 적는다. |
| Docs | 기존 Next.js docs 앱과 registry source direct imports | 문서용 복사본 없이 전 item을 미리 본다. |
| Checks | Vitest/Testing Library, shadcn build/install, 두 참조 앱의 격리된 smoke/typecheck/build, 시각 점검 | 라이브러리 소스 자체와 실제 소비 환경을 각각 검증한다. |

---

## 아키텍처

1. CopySinger/Leesfield의 공통 22개와 추가 UI를 고정 기준으로 조사한다. Feature `artifacts/`의 coverage matrix에 원본 경로/export/사용처, 동작/API, 디자인 의도, 분류, Leement item, 검증 증거를 기록한다. 두 프로젝트의 기존 파일을 수정하지 않는 조사부터 시작한다.
2. `packages/tokens/src/tokens.json` → `packages/theme/build.mjs` → 생성 CSS를 단방향으로 유지한다. CopySinger light와 Leesfield dark를 별도 제품 preset 없이 하나의 semantic 역할 집합으로 설계한다. 차이는 수치 평균이 아니라 가독성·접근성·반복된 제품 사용 사례로 결정한다. 필요한 success/warning/data accent, surface, font, radius, control rule을 추가하고 `docs/designs/design-system.md`를 같은 태스크에서 동기화한다.
3. 기존 8 UI부터 Button/Input/Card 및 상태·API를 정비한다. 그 뒤 공통 22개 중 빠진 기본 controls/overlays/feedback을 채우고 pattern/block 성격의 항목을 해당 registry 계층에 넣는다. 두 앱이 같은 item source/API를 사용할 수 있어야 하며 앱 고유 동작은 wrapper/composition으로 남긴다.
4. Kibo 41개 사용 사례를 고정 매핑으로 구현한다. 먼저 사용 가능한 기존 Leement·공통 UI를 재사용하고, 남은 기능은 도메인별 작은 registry item으로 추가한다. 동작이 복잡한 항목은 Kibo MIT 소스를 선택적으로 검토·이식하되 라이선스 고지와 Leement token/API/source ownership을 유지한다. 서버·결제·미디어 인코딩 등은 주입 가능한 UI API만 제공한다. 이름만 다른 중복 item은 만들지 않는다.
5. 각 item을 `registry.json`에 파일·npm dependency·registry dependency와 함께 등록한다. 다중 파일 item은 필요한 파일을 모두 명시한다. shadcn CLI 생성 JSON을 `apps/docs/public/r`에 출력하고 독립 소비자 설치로 검증한다. docs metadata, gallery, 상세 페이지와 예제는 실제 registry source를 import한다.
6. 마지막으로 CopySinger/Leesfield의 격리된 체크아웃에서 기존 파일을 덮어쓰지 않는 경로로 registry source를 설치한다. 공통 22개 모두 import/render, 대표 사용처는 실제 교체·typecheck/build/keyboard smoke로 검증한다. 결과와 한계를 coverage matrix 및 Feature 기록에 연결한다. 기존 앱의 baseline 실패와 새 회귀를 분리한다.
7. 두 제품의 브랜드 색 사용처를 focus, data accent, 그라디언트, 선택적 로딩 효과로 분류한다. `tokens.json`의 light/dark semantic brand 역할을 theme CSS 변수로 출력하고 focus/data 역할은 brand 변수 참조로 만든다. 소비자 앱이 import 뒤에 모드별 `--lm-color-brand-*`를 재정의하면 관련 UI가 따라 바뀌도록 한다. 일반 Skeleton은 중립으로 유지하고 브랜드 Skeleton과 gradient text는 작은 registry source로 제공하며 reduced motion을 존중한다.
8. Kibo 문서의 상단 탐색·좌측 범주 메뉴·우측 목차·미리보기/코드 탭을 Leement docs 구조에 맞춰 적용한다. 기존 Preview/Example/Source와 디자인 사용 규칙은 유지하고 Leement 브랜드·문구·토큰을 사용한다. Kibo coverage 메뉴와 중복 route는 제거하며 비교 매핑은 Feature artifact에 남긴다. 데스크톱/모바일 및 light/dark에서 직접 확인한다.
9. 문서 홈은 Kibo 랜딩의 큰 중앙 소개와 미리보기 흐름을 참고하되 Leement의 문구와 실제 registry 컴포넌트로 구성한다. 홈에서는 좌측 상세 메뉴를 감추고 상단 탐색을 유지한다.

### 실행 순서와 중단 기준

- Foundations → 공통 22개 → 추가 reusable 항목 → Kibo 도메인 묶음 → docs/소비자 통합 순으로 실행한다. 기본 Button/Input/Card에서 공용 규칙을 먼저 검증한다.
- 개별 item은 기본 동작, keyboard/aria, registry install, docs preview가 확보되기 전 완료로 표시하지 않는다. Kibo 기준 41개 각 핵심 UI 사용 사례가 비어 있으면 전체 Feature를 완료로 표시하지 않는다.
- 변경은 한 번에 한 Task만 활성화하고 Task별 commit checkpoint를 만든다. 두 참조 앱의 검증은 격리된 사본에서 수행하고 원본 저장소에는 변경을 남기지 않는다.

---

## 파일 구조

```text
packages/tokens/src/tokens.json    # primitive + semantic light/dark
packages/theme/build.mjs            # CSS variables + shadcn aliases
registry/ui/*.tsx                   # reusable controls/surfaces/complex UI
registry/patterns/*.tsx             # repeatable product structures
registry/blocks/*.tsx               # larger compositions
registry.json                       # installable items and dependencies
apps/docs/lib/items.ts              # maturity + usage/API metadata
apps/docs/examples/*.tsx            # source-backed interactive examples
apps/docs/app/**                    # gallery, details and foundations
docs/designs/design-system.md      # durable design rules
docs/prd/leement-prd.md             # durable product requirements
docs/features/GMA8H5L3TLTY-expanded-component-catalog/artifacts/  # retained coverage/verification evidence
```

---

## Curated Documentation Impact

README 보호와 보조 산출물 위치는 `agents` 문서의 해당 규칙을 우선합니다. README 불일치는 수정 요청이 없으면 `decisions.md`의 경로·근거·보류 사유를 참조하는 `NONE`으로 기록할 수 있으며, 이 예외에 별도 후속 항목이나 수정 승인을 요구하지 않습니다. 보존할 Feature 보조 산출물은 활성 Feature의 `artifacts/`에 저장하고 상대경로로 연결합니다.

발견한 문서 불일치는 `decisions.md`에만 남기고 종료하지 않습니다. 현재 사실의 명백한 오류가 승인 범위 안에 있으면 `UPDATE`/`ADD`와 task `Docs`로 연결합니다. 제품 의도 확인이나 범위 확장이 필요하면 충돌한 문서 경로·근거, 확인할 질문, 보류 이유와 실제 후속 task/Feature/issue 참조를 기록합니다. 없는 번호나 승인을 만들지 않습니다. 추적 항목 생성에 승인이 필요하면 사용자 확인 전 해결된 것으로 기록하지 않습니다. `NONE`의 근거에는 알려진 불일치가 없거나, 남은 불일치가 해당 후속 항목으로 추적되고 있음을 설명합니다. 코드나 OpenWiki에 맞추기 위해 미구현 PRD 요구를 삭제하지 않습니다.

> 모든 결정이 `NONE`이어도 영향 판정을 완료합니다. `NONE`은 사람이 관리하는 상위 문서를 검토했지만 변경할 필요가 없다는 뜻입니다. 생성형 OpenWiki 동기화는 별도로 판정합니다.

- **Schema**: 2
- **Assessment**: Complete
  - 값: Pending | Complete
- **Product requirements**: UPDATE
  - 값: NONE | UPDATE | ADD
- **System architecture**: NONE
  - 값: NONE | UPDATE | ADD
- **Onboarding entrypoint**: NONE
  - 값: NONE | UPDATE | ADD
- **Operational/runtime contract**: NONE
  - 값: NONE | UPDATE | ADD
- **Reason**: PRD의 공용 UI 채택·Kibo 대응 요구와 실제 산출물을 일치시킨다. 별도 시스템 아키텍처/운영 문서 변화는 없다. 기존 README.md는 v0.1의 8/5/1 개수를 설명하며 확장 후 오래된 설명이 되지만 사용자 README 수정 요청이 없으므로 D004에 근거를 기록하고 이번 Feature에서 편집하지 않는다. docs 사이트의 Getting Started는 제품 문서로 별도 갱신한다.
- **Targets**: docs:prd/leement-prd.md
  - UPDATE 또는 ADD가 하나라도 있으면 쉼표로 구분한 `docs:<path>`와 `project:<path>` 대상을 기록합니다.
  - `docs:<path>`는 설정된 docs 디렉터리 기준이고 `project:<path>`는 프로젝트 저장소 루트 기준입니다. 루트 이름을 반복하지 마세요(예: `docs:docs/agents/constitution.md`가 아니라 `docs:agents/constitution.md`).
  - 모든 대상은 task `Docs` 목록에 연결하고 Feature 리뷰 전에 활성 Feature scope로 커밋합니다.

---

## Additional Curated Impacts

> constitution/custom, 디자인 시스템, API·데이터, 보안, 배포, 관측성처럼 조건부로 존재하는 상위 문서를 판정합니다. 해당 영향이 없으면 `Decision: NONE`을 명시하고 표는 비워 둡니다.

- **Assessment**: Complete
- **Decision**: DECLARED
  - 값: NONE | DECLARED

| Kind | Decision | Target | Reason |
| ---- | -------- | ------ | ------ |
| design-system-ux | UPDATE | docs:designs/design-system.md | 하나의 light/dark 규칙, 상태색, 컨트롤 크기·radius·shadow 및 의도적 차이를 실제 코드와 동기화한다. |

허용 Kind: `engineering-agent-policy`, `design-system-ux`, `api-data-contract`, `security-privacy`, `release-deployment`, `observability`, `other-curated`

`DECLARED` 행의 Decision은 `UPDATE` 또는 `ADD`이고, Target은 `docs:<path>` 또는 `project:<path>`여야 합니다. 모든 Target은 task `Docs` 목록에 연결합니다.
`docs:<path>`는 설정된 docs 디렉터리에서, `project:<path>`는 프로젝트 저장소 루트에서 해석합니다.

---

## Verification Contract

Feature 완료 전 검사는 실제 `workflow.featureChecks`(컴포넌트 override 포함)를 기준으로 작성합니다. 추가 자동 검사는 실행 설정에도 등록하세요. build 포함 여부와 중복 생략 근거, 수동 검증 증거를 명시하세요.


### 변경 분류

- **유형**: NEW_BEHAVIOR
- **위험도**: HIGH — 공용 UI API 변경, 다수 registry dependency, 두 기존 앱의 채택 가능성에 영향이 있다.

### 관찰 가능한 계약

- **지원해야 하는 동작**: 공통 22개와 Kibo 41개 사용 사례의 조작 가능한 UI, light/dark theme, registry 종속 설치, 전체 docs 미리보기, 두 앱의 공통 source 채택.
- **추가 브랜드·문서 동작**: 소비자 모드별 브랜드 변수 재정의가 focus/data/gradient/선택적 Skeleton에 반영된다. 문서의 삼단 탐색은 키보드·모바일에서 동작하며 전용 Kibo coverage 메뉴와 route는 없다.
- **전제조건**: React/TypeScript/Tailwind v4 소비자, `@leement/theme` import, `components.json` registry alias, 필요한 item별 npm dependency 설치.
- **성공 후 보장**: 설치된 source가 소비자 앱에 남아 수정 가능하며 주요 variant/keyboard/aria 상태가 동작한다. 두 참조 앱에서 공통 22개 import/render와 대표 교체 흐름이 새 회귀 없이 통과한다.
- **중요한 실패 후 보장**: 누락된 item/dependency, 실패한 빌드·접근성, 불일치한 docs/registry 또는 두 앱 통합 회귀가 있으면 해당 Task와 Feature를 완료로 표시하지 않는다. 원본 두 앱에는 검증용 수정을 남기지 않는다.
- **의도적으로 지원하지 않는 사례**: 도메인 서버 기능·실시간 협업 서버·결제·미디어 인코딩, Kibo 전체 블록 개수, 제품별 완전한 픽셀 복제, 별도 React runtime package.

### 테스트 결정

| 계약 / 요구사항 | 결정                  | 테스트 수준                     | 보호할 현실적인 회귀 | 독립적인 Oracle            |
| --------------- | --------------------- | ------------------------------- | -------------------- | -------------------------- |
| US-5 / FR-4,10 | ADD | token/theme 단위·시각 검토 | dark mode에서 semantic 역할 또는 radius/state가 잘못 매핑됨 | 승인 Spec의 디자인 의도, 두 참조 앱 CSS/공용 UI, 디자인 규칙 |
| US-4 / FR-9,11 | UPDATE | 컴포넌트 단위·두 앱 통합 | variant/API/키보드 차이로 실제 교체 실패 | 원본 컴포넌트의 사용자 동작과 Spec coverage matrix |
| US-1 / FR-2,3 | ADD | 신규 item의 의미 있는 단위/상호작용 | 정적 placeholder 또는 핵심 interaction 미지원 | Kibo 고정 사용 사례와 각 item의 문서화한 동작 계약 |
| US-2 / FR-5,11 | ADD | registry 설치 통합 | 파일·npm/registry dependency 누락으로 소비자 빌드 실패 | shadcn CLI 결과, item별 선언과 독립 소비자 타입 검사 |
| US-3 / FR-6,12 | ADD | docs 경로·원본 연결 통합·수동 UI | docs preview/source와 실제 배포 item이 다름 | registry JSON/source 파일과 docs 상세 페이지 |
| US-5 / FR-13 | UPDATE | theme 계약·컴포넌트 단위·브라우저 | 브랜드 재정의가 focus/data/gradient/선택적 Skeleton 중 일부에 전달되지 않거나 reduced motion이 무시됨 | 원본 제품의 사용처와 계산된 CSS 변수·애니메이션 상태 |
| US-3 / FR-14 | UPDATE | docs 경로·키보드·반응형 브라우저 | 중복 Kibo coverage가 남거나 삼단 탐색에서 내용/링크가 닿지 않음 | 실제 Kibo 정보 구조, Leement navigation 및 상세 경로 |

### 의도적으로 제외하는 테스트

- Radix/Base UI 자체의 내부 focus 알고리즘 재시험, Tailwind class 문자열만 비교하는 snapshot, 새 동작을 보호하지 않는 render-only 테스트는 제외한다.
- 모든 41개 item을 하나의 E2E 시나리오에 묶지 않는다. 각 item의 핵심 interaction과 종속 설치를 직접 검증한다.

### 검증 실행

- **구현 중**: 변경 item의 Vitest/Testing Library 테스트, `pnpm registry:build`, 해당 docs/example의 typecheck를 수행한다. 대형 item은 실제 핵심 상호작용을 우선한다.
- **태스크 완료 전**: 변경 항목의 docs preview/source 연결과 개별 registry 설치, TypeScript check, lint를 확인하고 coverage matrix 행에 근거를 적는다.
- **Feature 완료 전**: 설정된 `pnpm run typecheck`, `pnpm run lint`, `pnpm run test`, `pnpm run build` 모두 통과한다. build에 `registry:build`와 docs build가 포함되므로 중복 명령의 최종 재실행은 생략할 수 있다. 추가 설치/두 앱 통합 smoke는 task 또는 수동 증거로 보존한다.
- **수동/UI 검증**: docs를 실행해 light/dark 및 desktop/mobile 대표 화면·interactive item을 실제 조작하고, 두 제품 원본과 디자인 의도·가독성·상태를 나란히 검토한다. 공통 22개는 양쪽 격리된 앱 환경에서 설치·import·render, 대표 사용처는 keyboard/typecheck/build를 검증한다. baseline 실패는 별도로 기록한다.
- **전체 테스트 필요 여부**: Yes — token/theme/registry/docs의 공통 경로를 바꾸고 대규모 item을 추가하므로 Feature 종료 전 설정된 전체 체크가 필요하다. 두 참조 앱의 전체 통합/E2E 스위트는 서비스 의존성이 있어 신규 교체 범위에 집중한다.

---

## 관련 문서

- Spec: [spec.md](./spec.md)
- Decisions: [decisions.md](./decisions.md)
