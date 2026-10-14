# Implementation Plan: landing-brand-reveal

## 개요

- **기능 ID**: SPXPCQPUGPPF
- **대상 레포**: Leement
- **작성일**: 2026-10-15
- **상태**: Approved
- **Plan 검수**: Pending
- **Plan 검수 Evidence**: -
- **Plan 검수 Decision**: -
- **Plan 검수 Round**: -
- **Plan 검수 Spec Hash**: -
- **Plan 검수 Plan Hash**: -

## 기술 스택

| 구분 | 선택 | 이유 |
| ---- | ---- | ---- |
| 화면 | 기존 Next/React 및 registry UI | 실제 Leement source 재사용 |
| 진입 | 기존 Motion animate + useMotionActivity | semantic duration/easing, visibility·reduced motion 처리 |
| 배치 | docs 전용 정적 CSS transform·clip | 전체 tilt와 개별 reveal 분리 |
| 색 | 전역 action.primary 계열·data/focus 역할 | 중복 brand 색 계약 제거 |

## 아키텍처

Home은 서버 페이지로 유지하고 홈 전용 client motion wrapper를 합성한다. 타이틀 위 로고는 기존 BrandLogo full variant와 markClassName/textClassName으로 반응형 아이콘·워드마크를 구성하며 공용 컴포넌트 API는 변경하지 않는다. 로고·제목·설명·CTA 각각의 일회성 reveal을 하나의 순서로 조정하며 h1/p/Link 의미를 보존한다. CSS는 기본 SSR를 보이게 두고 hydration 후 Motion으로 장식 진입만 적용한다. reduced motion 또는 focus 진입은 실제 CTA 사용을 지연하지 않는다.

HomeExamples에서 로컬 작업 상태와 submit handler를 제거하고 현실적인 고정 값을 사용한다. 전체를 inert 및 aria-hidden으로 장식 처리한다. 별도 tilt wrapper 안에 실제 카드 source를 유지하고 viewport clip·overscan으로 가장자리를 채운다. 5열을 기본으로 좁은 화면에서 보이는 열 범위와 기울기를 조정한다. 모션은 .home-example만 선택하고 최초 측정의 시각 y/x 순서에 따라 stagger한다. static tilt는 부모에만 적용하므로 개별 모션 transform과 충돌하지 않는다. 완료한 진입을 theme/scroll로 재시작하지 않으며 visibility pause 및 unmount cleanup을 처리한다.

후속 요청에 따라 .home-brand override를 제거한다. tokens의 color.brand를 삭제하고 action.primary 및 primaryForeground/primaryHover/primaryText/primaryGradientStart/Middle/End로 통합한다. theme compatibility와 모든 소비처를 갱신하며 일반 배경의 text-primary는 대비가 확보된 primaryText로 옮긴다. focus/data는 의미 참조를 유지하고 Foundation은 새 action 필드를 편집·export한다. 기존 theme/Foundation 계약 테스트를 새 정본·구 역할 제거·override 동작에 맞춰 갱신한다. 이전 별도 brand 색 계약의 호환 alias는 제공하지 않는다. 사용자 보완 요청에 따라 두 모드 primary=#706BC5·전경=#FFFFFF로 통일하고 hover는 더 어두운 보라, 일반 강조 글자/focus/data 및 gradient는 같은 보라 계열에서 테마 표면 대비에 맞춘다. Leement mark의 레이어도 보라로 통일한다. 독립 데이터 시리즈와 syntax palette는 유지한다. theme dark variant는 semantic theme과 같은 .dark/data-lm-theme selector를 읽어 수동 모드 선택과 일치시킨다. 기존 muted track과의 dark 대비가 3:1 미만이면 Progress/Slider/Switch 기본 track에 dark secondary 표면을 사용한다. theme 계약 검사를 같은 hue·흰색 전경·track/text 대비로 갱신하고 Foundation 예제와 현재 디자인 설명을 맞춘다.

## 파일 구조

- apps/docs/app/page.tsx: logo, motion wrapper, semantic sections
- apps/docs/public/leement-mark.svg: primary 보라 레이어
- registry/ui/progress.tsx, slider.tsx, switch.tsx: dark track 대비
- apps/docs/components/home-reveal.tsx: 일회성 hero/gallery 진입 조합
- apps/docs/components/home-examples.tsx: 고정 상태의 비조작 카드·data 색
- apps/docs/app/globals.css: 전역 primary 사용·tilt·clip·배경·대체 표시
- docs/prd/leement-prd.md: 홈 요구사항
- docs/designs/design-system.md: 홈 장식/브랜드/모션 규칙
- apps/docs/lib/releases.ts: 기존 Unreleased 항목에 docs 변화 (실제 경로 확인 후 적용)

- packages/tokens/src/tokens.json: primary 정본과 관련 역할
- packages/theme/build.mjs 및 theme.test.mjs: compatibility·gradient·구 색 제거 계약
- registry UI/blocks/patterns 및 docs 소비처: primary text/hover·gradient 사용
- apps/docs/lib/foundation-preview.test.ts 및 foundation-editor.tsx: 새 필드·구 override 제거
- apps/docs/app/foundations/[slug]/page.tsx: 새 primary custom theme 예제

## Curated Documentation Impact

- **Schema**: 2
- **Assessment**: Complete
- **Product requirements**: UPDATE
- **System architecture**: NONE
- **Onboarding entrypoint**: NONE
- **Operational/runtime contract**: UPDATE
- **Reason**: PRD-FR-005의 홈 상호작용/focus fade를 장식 갤러리로 갱신하고 로고의 아이콘·워드마크 구성을 명시한다. primary를 브랜드색 정본으로 설정하는 PRD-FR-011 및 token/theme 색 계약을 갱신한다. 설치 경로는 동일하다. README 캡처 영향은 README 보호 정책에 따라 decisions.md D003에 보류하며 편집하지 않는다.
- **Targets**: docs:prd/leement-prd.md, project:apps/docs/app/foundations/[slug]/page.tsx

## Additional Curated Impacts

- **Assessment**: Complete
- **Decision**: DECLARED

| Kind | Decision | Target | Reason |
| ---- | -------- | ------ | ------ |
| design-system-ux | UPDATE | docs:designs/design-system.md | 전역 primary 브랜드 역할·대비·재정의와 장식 tilt/진입 |
| release-deployment | UPDATE | project:apps/docs/lib/releases.ts | Unreleased breaking token migration과 문서 홈 변경 기록; 버전·배포는 범위 외 |

## Verification Contract

### 변경 분류

- **유형**: NEW_BEHAVIOR
- **위험도**: MEDIUM

### 관찰 가능한 계약

- **지원해야 하는 동작**: Spec FR-1~6. 참조 방향의 전체 tilt, 위→아래 card 등장, inert gallery, 역할 기반 색, 실제 CTA와 header 탐색, light/dark 및 좁은 화면.
- **전제조건**: 기존 registry·Motion 및 theme build 사용.
- **성공 후 보장**: 전역 primary 브랜드 역할과 token 소비처가 일치하며 랜딩의 배치·모션·비조작은 보존.
- **중요한 실패 후 보장**: JS/animation 미지원·reduced motion에서 콘텐츠와 링크를 즉시 읽을 수 있다.
- **의도적으로 지원하지 않는 사례**: 장식 갤러리 폼 저장·로그인·채팅·상호작용, 지속적인 자동 이동, 새 공개 브랜드 variant.

### 테스트 결정

| 계약 / 요구사항 | 결정 | 테스트 수준 | 보호할 현실적인 회귀 | 독립적인 Oracle |
| ---- | ---- | ---- | ---- | ---- |
| FR-1/3 | NONE | 비테스트 브라우저 검수 | 순서 누락·tilt 덮임·진입 반복 | Spec 순서와 실제 시간대별 opacity/위치 |
| FR-2/6 | NONE | 비테스트 시각 검수 | 빈 모서리·가로 overflow·배경 단절 | 사용자 참조 및 375/768/1440/1920 light/dark 캡처 |
| FR-4 | NONE | 비테스트 브라우저 조작 | 클릭·Tab·Enter로 숨은 갤러리 동작 | native inert 상태·focus 순서·URL/고정값 보존 |
| FR-5 | UPDATE | 기존 theme/Foundation 계약 테스트 + 브라우저 | 구 색 계약 잔존·두 모드 primary 불일치·흰색 전경/track/text 대비 저하·override 미반영 | 생성 CSS의 정본 참조·거부되는 구 필드·실제 두 테마 대비 및 편집 반영 |
| fallback | NONE | 비테스트 브라우저 검수 | reduced motion/no-JS에서 내용 숨음 | motion reduce 및 JS 비활성 실제 페이지 |

### 의도적으로 제외하는 테스트

- CSS class 문자열이나 구현 배열을 복제하는 영구 단위 테스트, 프레임워크 inert 구현 자체의 단위 테스트를 추가하지 않는다. 기존 전체 검사는 실행한다.

### 검증 실행

- **구현 중**: pnpm install --frozen-lockfile, scoped lint/type 검토, 로컬 브라우저에서 geometry/motion/interaction 확인.
- **태스크 완료 전**: 실제 typecheck/lint/test/build 및 수동/UI 증거를 Tasks/Decisions에 기록한다.
- **Feature 완료 전**: workflow.featureChecks의 pnpm run typecheck, pnpm run lint, pnpm run test, pnpm run build. local verify는 toolkit 검증 receipt를 따른다.
- **수동/UI 검증**: 375/768/1440/1920 light/dark; 초반·중간·완료 등장; 클릭 및 Tab·Enter·Space 차단; CTA URL/focus; theme toggle; reduced motion; no-JS; viewport overflow; 콘솔 hydration 오류. 필요한 캡처만 artifacts에 보존.
- **전체 테스트 필요 여부**: Yes — 프로젝트 featureChecks에 포함. build 포함하며 검사 생략 없음.

## 관련 문서

- Spec: [spec.md](./spec.md)
- Decisions: [decisions.md](./decisions.md)
