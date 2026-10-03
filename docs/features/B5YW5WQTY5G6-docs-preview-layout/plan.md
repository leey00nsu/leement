# Implementation Plan: Docs preview layout

## 개요

- **기능 ID**: B5YW5WQTY5G6
- **대상 레포**: Leement
- **작성일**: 2026-10-03
- **상태**: Approved
- **Plan 검수**: Pending

## 기술 스택

기존 Next.js / React / strict TypeScript / Tailwind v4를 사용한다. 실제 registry 예제를 유지한다. 검증은 기존 Vitest와 설치된 Playwright/Chrome으로 수행한다.

## 아키텍처

1. 문서 표시 전용 PreviewFrame을 Showcase와 ItemWorkbench에서 공유한다. 같은 inset 변수를 콘텐츠 padding과 가로/세로 점선 위치에 사용한다. 모바일 20px, 상세 데스크톱 40px, 좁은 gallery에서는 16/24px을 사용한다. 콘텐츠가 커지면 프레임도 함께 커지고 장식선은 pointer-events:none이다.
2. Showcase의 항목 컨테이너는 bg-muted와 20/24px 여백으로 구분하며 border/shadow/footer 구분선을 제거한다. 안쪽 실제 Preview는 bg-background 표면과 필요한 한 겹 경계만 제공한다. 컴포넌트 자체 border는 유지한다. 기본 표면 규칙은 semantic token을 읽는다.
3. RootLayout이 문서 바깥 inset을 소유한다. Adoption의 중첩 main/px/py를 제거하고 전체 route에서 추가 바깥 padding을 확인한다. 의도적인 본문 폭 제한과 우측 목차는 유지한다.
4. FormSection은 실제 영역이 40rem 이상일 때 2단으로 전환해 좁은 gallery column에서도 입력 영역을 확보한다. 전체 85개 예제의 source/geometry를 조사하고 실질적인 내부 overflow, 잘린 제어, flex 축소 문제만 책임 위치에 수정한다. 문서 여백을 registry 컴포넌트 API에 추가하지 않는다.

## 파일 구조

- apps/docs/components/preview-frame.tsx: 공통 문서 프레임.
- apps/docs/app/globals.css: inset과 장식선.
- apps/docs/components/item-workbench.tsx, showcase-gallery.tsx, previews.tsx: 프레임 적용, 카탈로그 계층, 항목 식별.
- apps/docs/app/adoption/page.tsx 및 조사에서 확인된 route: 중복 inset 수정.
- apps/docs/examples/*.tsx: 조사로 확인된 예제 자체의 배치 수정.
- registry/*: 실제 컴포넌트 내부에 문제가 입증될 경우에만 최소 수정.

## Curated Documentation Impact

- **Schema**: 2
- **Assessment**: Complete
- **Product requirements**: UPDATE
- **System architecture**: NONE
- **Onboarding entrypoint**: NONE
- **Operational/runtime contract**: NONE
- **Reason**: PRD-FR-005의 문서 표시 요구를 구체화한다. 배포 방식·설치/API·아키텍처 변경은 없다. README 및 캡처는 보호 규칙에 따라 갱신하지 않는다(D001).
- **Targets**: docs:prd/leement-prd.md

## Additional Curated Impacts

- **Assessment**: Complete
- **Decision**: DECLARED

| Kind | Decision | Target | Reason |
| ---- | -------- | ------ | ------ |
| design-system-ux | UPDATE | docs:designs/design-system.md | 문서의 카탈로그 표면·공통 inset·Preview 점선의 지속 규칙 |

## Verification Contract

### 변경 분류

- **유형**: BUG_FIX
- **위험도**: MEDIUM

### 관찰 가능한 계약

- **지원해야 하는 동작**: Showcase 85개 항목의 실제 조작·필터·검색, 상세 Code/Preview/Source 탭, 모든 문서 scaffold, light/dark와 모바일.
- **전제조건**: 전체 workspace 의존성과 token/theme/registry 빌드를 갖춘 docs 앱.
- **성공 후 보장**: 프리뷰 콘텐츠가 공통 inset 안에 배치되고 네 방향 점선은 같은 경계를 표시한다. 표 등은 지정 내부 스크롤로 접근한다. 한 main landmark와 공통 페이지 inset을 제공한다.
- **중요한 실패 후 보장**: 동작/API·token 원본을 변경하지 않는다. 적용 후 overflow 문제가 남으면 해당 프레임/예제를 수정하고 전수 검사 결과를 다시 갱신한다.
- **의도적으로 지원하지 않는 사례**: Kibo 픽셀 전체 복제, 임의 테마 수치의 극단값, 앱 마이그레이션/공개 배포.

### 테스트 결정

| 계약 / 요구사항 | 결정 | 테스트 수준 | 보호할 현실적인 회귀 | 독립적인 Oracle |
| --- | --- | --- | --- | --- |
| US-1, FR-1/2 | NONE | 비테스트 브라우저 전수 점검 | 85개 중 일부만 수정, 예제 경계 밀착, 모바일 넘침 | 사용자 이미지 1/2와 실제 콘텐츠 bounds |
| US-2, FR-3 | NONE | 비테스트 전체 route 점검 | 중복 main/inset | RootLayout 공통 inset과 main landmark |
| US-3, FR-4 | NONE | 비테스트 geometry 및 화면 확인 | 점선/내용 기준 불일치, 높이 증가 시 잘림 | 사용자 이미지 3/4와 동일 inset 계약 |
| 기존 동작 | NONE | 기존 typecheck/lint/test/build | 컴포넌트 렌더/API/registry build 회귀 | 기존 테스트 및 타입 계약 |

### 의도적으로 제외하는 테스트

CSS class 문자열을 복제하는 영구 단위 테스트, 프레임워크 탭/포털 구현을 다시 검증하는 신규 테스트는 추가하지 않는다. 전수 확인용 일회 브라우저 스크립트는 임시 경로에서 실행하고 결과만 Feature artifact 및 decisions에 보존한다.

### 검증 실행

- **구현 중**: pnpm install --frozen-lockfile, 필요한 token/theme/registry 빌드 및 docs dev; 변경 파일의 lint/typecheck.
- **태스크 완료 전**: 해당 태스크의 화면 및 geometry 점검, 문서 동기화와 commit-audit.
- **Feature 완료 전**: 설정된 pnpm run typecheck / lint / test / build 전부 실행. build는 registry JSON과 docs 전체 route를 포함한다.
- **수동/UI 검증**: 390/1024/1440px, light/dark의 전체 85개 Showcase 예제와 상세 Preview를 geometry/overflow로 확인한다. 같은 목록을 source review와 대조한다. 대표 화면은 실제 screenshot을 읽고, 검색/필터/탭 keyboard/팝업 및 포커스 표시를 확인한다. 실패 항목을 재검증할 때는 기존 결과 행을 갱신한다. main/inset은 모든 route에서 확인한다. 대표 스크린샷과 85개별 판정은 artifacts에 보존해 tasks/decisions에서 링크한다.
- **전체 테스트 필요 여부**: Yes — repository workflow.featureChecks의 명시적인 완료 gate다.

## 관련 문서

- Spec: [spec.md](./spec.md)
- Decisions: [decisions.md](./decisions.md)

Plan 승인: workflow-stage의 plan_approve 자동 진행 지시에 따라 승격. agentReview.plan은 disabled다.
