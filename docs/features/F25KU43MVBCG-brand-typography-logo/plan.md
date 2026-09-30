# Implementation Plan: 기본 폰트와 브랜드 로고

## 개요

- **기능 ID**: F25KU43MVBCG
- **대상 레포**: Leement
- **작성일**: 2026-09-30
- **상태**: Approved
- **Plan 검수**: Pending
- **Plan 검수 Evidence**: -
- **Plan 검수 Decision**: -
- **Plan 검수 Round**: -
- **Plan 검수 Spec Hash**: -
- **Plan 검수 Plan Hash**: -

## 기술 스택과 접근

기존 JSON tokens, CSS theme 빌드, Tailwind v4, React registry, Next.js docs를 사용한다. 추가 npm UI 라이브러리·폰트 관리 엔진은 만들지 않는다.

1. primitive typography.family에 brand(Paperlogy + sans fallback)를 추가하고 theme의 font-brand를 연결한다. Pretendard Variable과 Paperlogy Bold 700 WOFF2, 원저작자·라이선스 고지를 theme 자산으로 보관한다. 기존 theme build가 자산을 dist/fonts로 복사하고 CSS의 상대 URL font-face로 로드한다. 번들러는 import된 CSS의 자산 URL을 처리한다. 외부 CDN과 next/font에 묶이지 않는다.
2. BrandLogo는 mark/name을 받는 span pattern으로 만들고 full/icon과 sm/md/lg만 제공한다. icon-only는 이름을 가진 이미지 역할을, full은 장식 mark와 visible name을 사용한다. native anchor/Next Link composition은 소비자가 맡는다. font-brand 700, 의미 전경, 간격·크기·tracking 규칙을 사용하고 candidate로 노출한다.
3. Leement 마크는 제공 SVG 그대로 public SVG 자산 한 개에서 읽는다. 헤더와 실제 registry 예제는 같은 자산을 사용하는 BrandLogo를 조합하고 favicon도 같은 SVG를 가리킨다. 별도 표면별 로고 source 복사본을 만들지 않는다.
4. Typography 편집 모델에 브랜드 family를 추가한다. 기본 family 선택과 안전한 custom family 입력을 지원하며 실제 로딩은 기본 폰트 또는 앱의 font-face 책임임을 설명한다. 허용된 font-family 문법만 저장하고 임의 CSS 주입을 거부한다. 기존 provider·CSS export와 저장키를 재사용한다.
5. Typography 미리보기는 본문·mono·BrandLogo를 함께 보여 준다. Getting Started, Typography, BrandLogo 문서 및 PRD/design-system을 실제 계약에 맞춘다. registry metadata·source dependency·예제·탐색을 기존 경로에 연결한다.

## 주요 파일

- packages/tokens/src/tokens.json
- packages/theme/build.mjs, packages/theme/package.json, packages/theme/fonts/*
- registry/patterns/brand-logo.tsx, registry/patterns/composition.test.tsx
- registry.json
- apps/docs/public/leement-mark.svg
- apps/docs/app/layout.tsx, apps/docs/app/getting-started/page.tsx
- apps/docs/app/foundations/[slug]/page.tsx
- apps/docs/components/foundation-editor.tsx
- apps/docs/lib/foundation-preview.ts, apps/docs/lib/foundation-preview.test.ts
- apps/docs/lib/items.ts, apps/docs/components/previews.tsx, apps/docs/examples/brand-logo.tsx
- docs/prd/leement-prd.md, docs/designs/design-system.md

## Curated Documentation Impact

- **Schema**: 2
- **Assessment**: Complete
- **Product requirements**: UPDATE
- **System architecture**: NONE
- **Onboarding entrypoint**: NONE
- **Operational/runtime contract**: NONE
- **Reason**: PRD-FR-002/011/013에 실제 폰트 배포·역할별 설정·로고 규칙을 명시한다. 기존 token→theme→registry 계층과 공개 배포 운영은 유지한다. 공개 Getting Started는 업데이트한다. 기존 README는 요청이 없어 보호하며 발견된 불일치는 decisions D002로 기록한다.
- **Targets**: docs:prd/leement-prd.md

## Additional Curated Impacts

- **Assessment**: Complete
- **Decision**: DECLARED

| Kind | Decision | Target | Reason |
| --- | --- | --- | --- |
| design-system-ux | UPDATE | docs:designs/design-system.md | 기본 body/brand 서체, 로고 조합·접근성, 커스텀 override와 미리보기 계약 |

## Verification Contract

### 변경 분류

- **유형**: NEW_BEHAVIOR
- **위험도**: MEDIUM — 배포 theme 자산과 전역 font family 및 저장 데이터에 영향.

### 관찰 가능한 계약

- **지원해야 하는 동작**: theme만 import한 독립 앱의 폰트 실제 로딩, body/brand 역할 분리와 override; BrandLogo 설치·조합·이름; Typography live 편집·copy/reset/reload.
- **전제조건**: consumer는 Tailwind v4 및 shadcn 환경. custom font는 앱이 파일을 로드한다.
- **성공 후 보장**: 기본 폰트와 license가 package에 포함되고 실제 source는 소비자가 소유한다. 기존 preview state는 계속 읽을 수 있다.
- **중요한 실패 후 보장**: 폰트 로딩 실패는 readable fallback과 swap으로 처리한다. invalid family/CSS injection은 저장·미리보기·export에 들어가지 않는다.
- **의도적으로 지원하지 않는 사례**: font/logo upload·생성·서버 저장, 원본 두 앱 직접 수정, font editor 문자열에서 외부 font 자동 다운로드.

### 테스트 결정

| 계약 | 결정 | 수준 | 보호할 회귀 | 독립 기준 |
| --- | --- | --- | --- | --- |
| 로고 full/icon/custom mark의 이름 | UPDATE | 기존 pattern composition Testing Library | 이름 중복·icon-only unnamed·consumer mark 강제 | FR-3 및 접근 가능한 이미지/링크 계약 |
| family 저장·재정의·export·안전 입력 | UPDATE | 기존 foundation-preview Vitest | brand 값 누락·CSS 주입·old state 손실 | FR-2 및 CSS font-family 문법/변수 계약 |
| 웹폰트 배포·실제 로딩 | NONE | package pack + 독립 소비자 브라우저 | dist 자산 누락·relative URL 404·fallback만 표시 | US-1의 단일 theme import 설치 경험 |
| registry install/build | NONE | 실제 shadcn CLI + 독립 consumer | item/dependency/source alias 실패 | US-2/3 및 source ownership |
| Typography/editor와 로고 응답형 | NONE | 브라우저 | body/brand 동시 오염·저장 유실·layout overflow | Spec 완료 기준 |
| 기존 docs/theme/registry | NONE | configured full checks | type/lint/test/build 회귀 | workflow.featureChecks |

### 의도적으로 제외하는 테스트

폰트 내부 rasterizer, Next.js 자체, CSS 클래스 snapshot, 자산 byte snapshot, 새 E2E 인프라를 추가하지 않는다.

### 검증 실행

- **구현 중**: 관련 기존 tests, theme build와 pack contents.
- **태스크 완료 전**: 변경 범위 typecheck/lint·focused tests, actual font-face/registry JSON.
- **Feature 완료 전**: pnpm typecheck, pnpm lint, pnpm test, pnpm build. pnpm check로 묶어 실행한다.
- **수동/UI 검증**: desktop/mobile × light/dark, 실제 font loaded 상태/요청, full/icon accessible name·링크 focus, body/brand family 분리·copy/reset/reload, 별도 consumer packed theme import와 registry 설치·빌드.
- **전체 테스트 필요 여부**: Yes — 배포 theme·root layout 및 foundations 저장 계약에 영향.

## 관련 문서

- Spec: [spec.md](./spec.md)
- Decisions: [decisions.md](./decisions.md)
