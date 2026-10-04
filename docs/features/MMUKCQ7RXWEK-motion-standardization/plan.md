# Implementation Plan: motion-standardization

## 개요

- **기능 ID**: MMUKCQ7RXWEK
- **대상 레포**: Leement
- **작성일**: 2026-10-04
- **상태**: Approved
- **Plan 검수**: Pending

## 기술 스택

| 구분 | 선택 | 이유 |
| --- | --- | --- |
| 실행 | 기존 motion 13.1.0 / motion/react | 추가 엔진 없이 animate, useAnimate, motion, AnimatePresence 사용 |
| 의미/동작 | 기존 Base UI/Radix | keyboard/focus/ARIA/form API 유지 |
| 정본 | 기존 tokens + CSS 변수 | theme에 React/Motion 의존 없음 |
| 검증 | Vitest/Testing Library + 실제 Chrome + 격리 소비자 | DOM 테스트로 보이지 않는 실제 애니메이션/설치 누락 확인 |

## 아키텍처

1. registry/lib/leement-motion.ts를 최소 확장한다. CSS duration을 seconds로 변환하고 easing 역할을 읽는다. leement:motion-change 이벤트로 Foundations 변경을 반영한다. 반복의 reduced/visibility/intersection/paused는 기존 activity 규칙을 사용한다.
2. 반복/진입/퇴장은 Motion animate/useAnimate/motion 및 필요할 때 AnimatePresence로 직접 표현한다. public HTML props/ref는 유지한다. 기본 서버 콘텐츠는 읽을 수 있는 정적 상태로 렌더한다.
3. 기본 control의 class/data/pseudo 상태는 기존 primitive가 계속 소유한다. 짧은 색상/경계/그림자 전환은 요소 하나에 연결된 ref helper가 CSS의 최종 상태를 읽어 Motion animate에 전달한다. 전역 DOM 검색, 새 스타일 언어, variant configuration, 별도 animation scheduler를 만들지 않는다. 요소 ref 및 DOM 의미를 보존하고 모든 listener/control을 cleanup한다.
4. Base UI는 render/keepMounted와 popup/panel 상태 및 animation 완료를 연결한다. Radix는 root의 controlled/defaultOpen/onOpenChange 계약을 보존하는 작은 context와 forceMount/AnimatePresence로 종료를 연결한다. 위치 기준과 transform 애니메이션이 충돌하지 않게 한다. 닫힘 시 inert, 포커스 복귀, 빠른 재열림을 관찰한다.
5. theme은 정적 브랜드 표면/폰트/token/reset만 제공한다. CSS keyframes와 tw-animate-css를 제거한다. 공개 CSS-only effect의 이관을 설명한다.
6. Sonner/Recharts의 내장 visual interpolation도 조사한다. 공개 disable/unstyled 옵션을 사용하고 Leement가 표현하는 효과는 Motion으로 소유한다. 실제 미디어/파형 엔진은 유지한다.
7. 보이는 native 선택 UI는 기존 Select의 Root/Trigger/Value/Content/Group/Label/Item으로 이관한다. Field, name/FormData, 현재 값의 표시 이름, disabled/invalid를 확인한다. NativeSelect item과 생성물은 제거한다.
8. registry.json에 모든 Motion/helper 및 Select source dependencies를 반영하고 registry JSON을 재생성한다. 기존 source 소유 앱은 자동 덮어쓰지 않는다.
9. 공개 설치 entrypoint와 현행 모션/선택 문서 전체를 수정한다. 변경 theme에는 0.2.0 버전을 사용하고 spin/pulse/marquee cycle 토큰 추가에 따라 tokens도 0.2.0으로 준비한다. 0.1.0 published artifact와 변경 0.2.0 local artifact를 구분하며 publish/push/deploy는 실행하지 않는다.

## 파일 구조

기존 registry/lib/leement-motion.ts, registry/ui 및 patterns/blocks source, packages/theme/build.mjs, apps/docs 화면·예제·metadata를 수정한다. 필요 없는 애니메이션 CSS module은 정적 규칙만 유지하거나 제거한다. 감사/브라우저 증거는 이 Feature의 artifacts/에만 보존한다.

## Curated Documentation Impact

- **Schema**: 2
- **Assessment**: Complete
- **Product requirements**: UPDATE
- **System architecture**: NONE
- **Onboarding entrypoint**: UPDATE
- **Operational/runtime contract**: UPDATE
- **Reason**: PRD의 CSS/JS 혼용과 NativeSelect 선택을 최신 요구로 바꾸고 공개 설치 및 모션 실행 계약을 동기화한다. 레이어 방향은 유지한다. README 수정은 사용자가 요청한 공개 설치/모션 설명 범위다.
- **Targets**: docs:prd/leement-prd.md, project:README.md, project:apps/docs/app/getting-started/page.tsx, project:apps/docs/lib/items.ts, project:apps/docs/app/changelog/page.tsx

## Additional Curated Impacts

- **Assessment**: Complete
- **Decision**: DECLARED

| Kind | Decision | Target | Reason |
| --- | --- | --- | --- |
| design-system-ux | UPDATE | docs:designs/design-system.md | Motion 실행/정적 theme/Select 선택/이관 |
| release-deployment | UPDATE | project:apps/docs/app/changelog/page.tsx | NativeSelect와 CSS-only 효과의 변경 및 미게시 상태 |

Constitution/custom/보안/관측성은 이번 계약과 충돌하는 현행 설명이 없으며 NONE이다. 완료된 Feature SDD는 이력이며 갱신하지 않는다.

## Verification Contract

### 변경 분류

- **유형**: REFACTOR
- **위험도**: HIGH

### 관찰 가능한 계약

- **지원해야 하는 동작**: spec US-1/2/3의 모션·popup/panel·form·실시간 편집·설치.
- **전제조건**: React/Tailwind v4/shadcn aliases와 theme가 구성되어 있다. Motion은 registry dependency가 설치한다.
- **성공 후 보장**: 원본 docs와 설치 source의 동일한 motion/semantics, NativeSelect 미노출, 공개 설치 절차의 재현.
- **중요한 실패 후 보장**: media 실패 fallback 유지, 닫힌 panel에 focus 불가, 중단/unmount에 반복/observer 누수 없음, source/이전 공개 패키지는 자동 변경하지 않음.
- **의도적으로 지원하지 않는 사례**: 기존 소비자 소스 자동 이관, 새 Motion+ 유료 API, 원격 publish/deploy.

### 테스트 결정

| 계약 / 요구사항 | 결정 | 테스트 수준 | 보호할 현실적인 회귀 | 독립적인 Oracle |
| --- | --- | --- | --- | --- |
| US-1 token/activity/ref/SSR | UPDATE | 기존 motion.test.tsx + foundation-preview.test.ts | 시간 단위, 반복 정지, ref cleanup, SSR 텍스트 | 기존 공개 동작 + spec |
| US-1 panel/popup/control | UPDATE | 기존 core-navigation/overlays/controls/button/player 테스트 | 키보드/focus/disabled/form 회귀 | 실제 HTML/primitive 계약 |
| US-1 실제 애니메이션 | NONE | Chrome 수동/일회 스크립트 | CSS 없는 consumer에서 효과 누락, height 버벅임, stale token | 시간별 실제 geometry/opacity/animation 관찰 |
| US-2 선택 이관 | UPDATE | 기존 core-form/code-form 및 관련 utility 테스트 | FormData/label/value/disabled/format 회귀 | name/value 및 접근 가능 역할 |
| US-1/2 배포 closure | UPDATE | 기존 registry-source.test.ts | motion/helper/Select 의존 누락, 제거 item 잔류 | 생성 registry와 설치 앱 빌드 |
| US-3 설치 문서 | NONE | 격리 소비자 설치/빌드와 source 검색 | host placeholder, docs 전용 의존 누락 | 공개 npm/registry 실제 응답과 변경 artifact |

### 의도적으로 제외하는 테스트

Motion/Radix/Base UI 라이브러리 내부 알고리즘을 재구현한 테스트, 모든 variant의 동일 렌더 assertion, 프레임별 값을 Vitest mock으로 확정하는 테스트는 추가하지 않는다. durable ADD 테스트는 기존 계약 테스트에 필요한 case를 보완하는 경우에만 적용한다.

### 검증 실행

- **구현 중**: 태스크가 소유한 기존 Vitest 파일 및 changed-source 타입/정적 감사.
- **태스크 완료 전**: 해당 테스트, typecheck 또는 focused lint, 문서·registry 동기화.
- **Feature 완료 전**: 설정된 pnpm run typecheck, pnpm run lint, pnpm run test, pnpm run build. build는 theme/registry/docs 소비자 컴파일을 포함하여 생략하지 않는다.
- **수동/UI 검증**: light/dark, desktop/mobile; Dialog/Select/Tooltip 종료와 포커스, Accordion/Collapsible 급속 토글 및 내용 크기 변화, neutral/brand loading, Marquee pause/resume, no-JS/reduced motion, Foundations 수정·reset/replay, audio/video fallback.
- **소비자 검증**: 임시 폴더에 Tailwind v4 React 앱을 구성해 공개 registry namespace smoke와 변경 registry/theme tarball 설치를 각각 수행한다. 실제 deps 설치/typecheck/build와 대표 Dialog/panel/Select/brand 반복 실행을 관찰한다. 기존 leement-test는 수정하지 않는다.
- **전체 테스트 필요 여부**: Yes — 거의 모든 interactive source와 shared helper가 영향을 받는다. 전체 gate는 구현 종료 때 1회 실행하고 실패 위험을 해결할 때만 반복한다.

## 관련 문서

- Spec: [spec.md](./spec.md)
- Decisions: [decisions.md](./decisions.md)
