# Implementation Plan: ui-residual-repairs

## 개요

- **기능 ID**: DA2L9V7BCUS2
- **대상 레포**: Leement
- **작성일**: 2026-09-28
- **상태**: Approved
- **Plan 검수**: Pending
- **Plan 검수 Evidence**: -
- **Plan 검수 Decision**: -
- **Plan 검수 Round**: -
- **Plan 검수 Spec Hash**: -
- **Plan 검수 Plan Hash**: -

## 기술 스택과 근거

| 영역 | 기존 도구 | 작업 원칙 |
| --- | --- | --- |
| UI 동작 | React 19, Base UI Slider/Tabs, Radix Dialog | 기존 접근성·키보드 모델 유지 |
| 스타일 | Tailwind 4, `@leement/theme` semantic 변수 | 소비자 브랜드·light/dark 지원; 고정 Kibo 색 복사 금지 |
| 미리보기 | Next.js docs, registry 원본 직접 import | docs 전용 탭 복제를 제거하고 공개 source 사용 |
| 검증 | 기존 Vitest/Testing Library, 실제 브라우저, shadcn CLI 격리 설치 | DOM 의미·브라우저 geometry·전달 source를 각각 확인 |

## 구현 접근

1. **Slider**: Base UI 현행 source의 `data-orientation`을 확인했다. Leement의 `data-horizontal`/`data-vertical` 선택자는 이 DOM에 맞지 않아 control/track 크기 규칙이 빠진다. root/control/track에 실제 orientation 선택자를 사용하고 indicator/track의 측정 폭을 확인한다. 단일·범위값, horizontal·vertical, disabled를 docs 예제 또는 임시 검증 화면에서 재현한다. 입력 로직은 Base UI에 둔다.
2. **Stories/Reel**: `Stories`는 Radix dialog 안의 이미지·영상 sequence이고 `Reel`은 독립 `registry:block` 영상 피드다. `apps/docs/lib/docs.ts` Social 섹션에서 Reel을 `/blocks/reel`로 직접 가리키고, `DocsNavigation`의 관련 항목이 활성 경로에서도 보이게 한다. registry type과 URL은 변경하지 않는다. item별 설명·교차 링크를 보강한다.
3. **Marquee**: 기존 `items: ReactNode[]`와 pause API를 유지한다. outer region을 투명하게 가리는 대신 이동 트랙에 양쪽 `mask-image`/gradient fade를 적용해 임의 배경에서도 작동하게 한다. 별도 pause 버튼은 fade 대상 밖에 둔다. docs에는 로컬 코드 생성 원형 아이템을 사용하고 조작·모션 축소를 확인한다. Kibo의 [고정 source](https://github.com/shadcnblocks/kibo/blob/3d63cdb15b79d972e3dc38a10997987672f9b263/packages/marquee/index.tsx)는 별도 `MarqueeFade` overlay를 제공하며, 이번 구현은 배경 의존성을 줄이는 Leement 해석이다.
4. **Tabs와 workbench**: 공개 `TabsList`에 폭을 채우는 `segmented` 변형을 추가하고 active 트리거에 semantic 전경/경계색을 사용한다. 기존 default·line은 유지한다. `ItemWorkbench`를 registry Tabs 조합으로 바꾸고 docs 예제에 Code/Preview 또는 동등한 실제 사용 예를 보여 준다. `#fff`↔`#f5f5f5` 1.09:1, workbench `bg-muted/40`↔`#fff` 약 1.03:1은 선택 표면으로는 약하므로 선택 경계/표시는 인접 표면 대비 최소 3:1을 목표로 실제 계산한다. 텍스트의 muted `#737373`↔흰색 약 4.74:1은 별도로 확인한다.
5. Docs metadata와 `docs/designs/design-system.md`의 규칙을 source·예제에 맞춘다. 4개 항목과 docs workbench를 두 테마, desktop/mobile, 조작 상태로 확인한다. 변경 항목의 CLI 설치·consumer build까지 확인한다.

## 주요 파일

```text
registry/ui/{slider,marquee,tabs}.tsx
registry/ui/{source-extension,complex-utility,controls}.test.tsx   # 기존 계약만 필요한 범위에서 갱신
apps/docs/examples/{slider,marquee,tabs,stories,reel}.tsx
apps/docs/components/{item-workbench,docs-navigation}.tsx
apps/docs/lib/{docs,items}.ts
docs/designs/design-system.md
docs/features/DA2L9V7BCUS2-ui-residual-repairs/artifacts/
```

## Curated Documentation Impact

- **Schema**: 2
- **Assessment**: Complete
- **Product requirements**: NONE
- **System architecture**: NONE
- **Onboarding entrypoint**: NONE
- **Operational/runtime contract**: NONE
- **Reason**: PRD-FR-005/007/008/011이 이미 실제 source 기반 문서, Kibo 사용 사례, 양 테마 규칙을 요구한다. 새 배포 계약·아키텍처는 없다. 기존 README는 수정 요청이 없으므로 편집하지 않는다.
- **Targets**: -

## Additional Curated Impacts

- **Assessment**: Complete
- **Decision**: DECLARED

| Kind | Decision | Target | Reason |
| --- | --- | --- | --- |
| design-system-ux | UPDATE | `docs:designs/design-system.md` | Slider orientation, Marquee edge fade, Tabs selected-state 대비와 workbench source 사용 규칙 동기화 |

## Verification Contract

### 변경 분류

- **유형**: BUG_FIX 및 작은 NEW_BEHAVIOR (Tabs 변형, Social 교차 탐색)
- **위험도**: MEDIUM — 공개 source와 docs workbench를 같이 바꾼다.

### 관찰 가능한 계약

- **지원해야 하는 동작**: Slider 레이아웃/값 변경, Marquee fade·pause, Reel 탐색, Tabs 변형·패널 선택·대비가 source와 preview에 일치한다.
- **전제조건**: `@leement/theme`을 로드한 Tailwind v4 소비자와 생성된 registry JSON.
- **성공 후 보장**: docs에서 확인한 공개 source가 CLI 설치 후 typecheck/build되고 두 테마에서 동일하게 보인다.
- **중요한 실패 후 보장**: browser geometry나 소비자 빌드가 확인되지 않은 항목을 통과로 기록하지 않는다.
- **의도적으로 지원하지 않는 사례**: Kibo의 전체 페이지 복제, Reel 앱 서비스 연결, 두 원본 제품의 전면 교체.

### 테스트 결정

| 계약 | 결정 | 수준 | 방지할 회귀 | 독립 기준 |
| --- | --- | --- | --- | --- |
| Slider 값·키보드·range·disabled | UPDATE | 기존 Testing Library | 잘못된 thumb 개수·값·disabled 동작 | Base UI DOM/접근성 및 Feature FR-1 |
| Slider·Marquee·Tabs 기하와 대비 | NONE | 실제 브라우저·계산 | 0px 트랙, fade 부재, 약한 선택 표시 | 참조 이미지, CSS 계산, Feature 완료 기준 |
| Stories/Reel 탐색 | NONE | 브라우저 nav/link 확인 | Reel 경로 누락·잘못된 type | registry manifest 및 Feature FR-2 |
| Marquee pause·복제 접근성 | UPDATE | 기존 Testing Library | pause가 듣지 않거나 중복 내용 노출 | existing public API 및 Feature FR-3 |
| Tabs 키보드·패널 관계 | UPDATE | 기존 Testing Library | workbench 전환 후 방향키/tabpanel 회귀 | Base UI 의미 및 Feature FR-4 |
| registry 전달 | NONE | 격리 CLI 설치·typecheck/build | source·dependency 누락 | registry JSON과 독립 소비자 |

### 의도적으로 제외하는 테스트

- screenshot pixel snapshot, Base UI 자체의 내부 구현 재검증, 일반 class 문자열의 복사 테스트.

### 검증 실행

- **구현 중**: 관련 기존 Vitest와 실제 docs route의 Slider geometry, Reel 링크, Marquee fade, Tabs 상태.
- **태스크 완료 전**: 변경 범위 typecheck/lint와 docs/source 동기화.
- **Feature 완료 전**: 설정된 `pnpm typecheck`, `pnpm lint`, `pnpm test`, `pnpm build`; `pnpm registry:build`; 격리 소비자에서 Slider·Marquee·Tabs 설치·typecheck/build.
- **수동/UI 검증**: desktop/mobile × light/dark, pointer/keyboard, focus, disabled, reduced motion. 대표 before/after 이미지만 Feature `artifacts/`에 보존한다.
- **전체 테스트 필요 여부**: Yes — 공통 Tabs와 docs workbench 사용 범위가 넓다.

## 관련 문서

- Spec: [spec.md](./spec.md)
- Decisions: [decisions.md](./decisions.md)
