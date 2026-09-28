# Implementation Plan: Foundations 실시간 테마 편집

## 개요

- **기능 ID**: WPZ86NFQPD8D
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

| 영역 | 기존 도구 | 적용 방식 |
| --- | --- | --- |
| 기본값 | `@leement/tokens` JSON, `@leement/theme` CSS | 토큰 파일은 정본으로 유지하고 docs 편집값은 별도 preview override로 취급 |
| UI | Next.js App Router, React, Tailwind v4, registry source | 기존 Foundations route를 client editor와 실제 registry 미리보기로 확장 |
| 상태 | browser localStorage, React context | 로그인/서버 저장 없이 페이지 이동·새로고침에서 복원; versioned key와 전체 초기화 |
| 스타일 | CSS custom properties | style element에 허용된 변수만 넣어 문서 전체에 적용; light/dark selector 분리 |
| 검증 | 기존 Vitest, 실제 Chromium, 독립 CSS 소비자 | 상태·출력 규칙, 실제 computed style, 복사 CSS 재현을 다른 경계에서 확인 |

## 구현 접근

1. **편집 모델**: 기본값은 token JSON과 생성 CSS 계약에서 읽는다. 편집 상태는 shared typography/spacing/radius/shadow/motion과 light/dark semantic color override만 보관한다. 허용된 key와 단위·범위만 저장하고 localStorage의 오래되거나 잘못된 값은 무시한다. 저장 데이터는 사용자별 미리보기이며 token JSON을 바꾸지 않는다.
2. **실제 CSS 연결**: root layout의 작은 client provider가 편집값으로 style element를 갱신한다. color는 `--lm-color-*` 의미 역할을, typography는 `--lm-typography-*`와 Tailwind `--text-*`·`--font-*` 등의 대응값을, spacing은 공통 base 4px을 기준으로 `--lm-spacing-*`와 Tailwind `--spacing`을 함께 조절한다. radius는 기존 theme 연결을 쓰고, shadow와 motion은 `--shadow-*` 및 기본 transition duration을 Leement 변수에서 파생한다. 테마 패키지의 필요한 호환 alias는 docs 미리보기와 소비자 CSS가 같은 결과를 내도록 최소한만 보강한다.
3. **모드·접근성**: light/dark color selector는 서로 간섭하지 않는다. 문서의 기존 ThemeToggle 전환을 따른다. reduced motion은 편집된 duration보다 우선해 실제 CSS와 복사 CSS 모두 0ms로 처리한다. color 입력은 브라우저가 지원하는 안전한 색상 값만 허용하고, 주요 foreground/background 대비가 부족하면 경고한다.
4. **Foundations UI**: 여섯 route에서 category별 편집 panel과 실제 registry Button/Input/Card 등의 샘플을 보이는 preview panel을 제공한다. 기존 설명·primitive/semantic 표는 참고 자료로 남기되 현재 미리보기 값과 기본값을 분명히 구별한다. 데스크톱은 나란히, 모바일은 세로 배치한다. Reset all, Copy CSS, 복사 상태·입력 오류는 이름 있는 키보드 접근 가능한 제어로 둔다.
5. **CSS 출력**: 현재 기본값과 다른 변수만 출력한다. `@import "@leement/theme";` 다음에 넣을 light/dark selector와 shared override를 생성한다. Leement 변수를 원본으로 두고 Tailwind/shadcn 연결은 `var(--lm-...)`로 둔다. style element 미리보기와 복사 결과는 동일한 순수 변환 함수를 공유한다.
6. **사용자 피드백 반영**: Color의 보기 전용 스와치를 registry Popover 안의 실제 ColorPicker 진입점으로 바꾼다. 브라우저 Canvas에서 비 HEX 기본색을 sRGB HEX/alpha로 표시하고, 원래 표현은 텍스트 입력에 남긴다. picker 값은 기존 validator와 preview state를 그대로 통과한다. 반복 Workspace settings 카드는 제거하고 Color/Type/Spacing/Radius/Shadow/Motion마다 조절값이 눈에 보이는 실제 registry 조합을 둔다.

## 주요 파일

```text
apps/docs/app/layout.tsx
apps/docs/app/foundations/[slug]/page.tsx
apps/docs/components/foundation-editor.tsx
apps/docs/components/foundation-preview-provider.tsx
apps/docs/lib/foundation-preview.ts
apps/docs/lib/foundation-preview.test.ts
packages/theme/build.mjs
docs/prd/leement-prd.md
docs/designs/design-system.md
```

## Curated Documentation Impact

- **Schema**: 2
- **Assessment**: Complete
- **Product requirements**: UPDATE
- **System architecture**: NONE
- **Onboarding entrypoint**: NONE
- **Operational/runtime contract**: NONE
- **Reason**: 새 인터랙티브 docs 동작은 PRD-FR-013에 기록한다. 토큰→테마→registry 계층, 설치·배포 계약은 유지한다. 기존 README는 명시적 수정 요청이 없어 편집하지 않는다.
- **Targets**: docs:prd/leement-prd.md

## Additional Curated Impacts

- **Assessment**: Complete
- **Decision**: DECLARED

| Kind | Decision | Target | Reason |
| --- | --- | --- | --- |
| design-system-ux | UPDATE | docs:designs/design-system.md | 미리보기 override와 정본 token의 역할, CSS 복사·브랜드/semantic 값의 관계, 전체 초기화 규칙 기록 |

## Verification Contract

### 변경 분류

- **유형**: NEW_BEHAVIOR
- **위험도**: MEDIUM — docs 전체의 CSS 변수와 클라이언트 저장 상태에 영향.

### 관찰 가능한 계약

- **지원해야 하는 동작**: 여섯 범주의 조절값이 실제 문서/registry UI를 바꾸고, 모드 전환·라우팅·새로고침·초기화·CSS 복사에서도 일관된다.
- **전제조건**: `@leement/theme`을 로드한 docs, 브라우저 localStorage 사용 가능 여부는 선택적.
- **성공 후 보장**: 기본 설정에선 기존 UI와 동일하며, 유효한 override만 해당 모드/공유 범위에 적용된다. 저장이 막혀도 현재 세션 편집은 동작한다.
- **중요한 실패 후 보장**: 잘못된 저장값/입력은 적용되지 않고 기본 CSS가 유지된다. 복사 API가 실패하면 실패 상태를 알린다.
- **의도적으로 지원하지 않는 사례**: 패키지 원본 저장, 계정 동기화, URL 공유, 임의 CSS 편집.

### 테스트 결정

| 계약 | 결정 | 수준 | 방지할 회귀 | 독립 기준 |
| --- | --- | --- | --- | --- |
| 저장 데이터·값 검증·CSS 생성 | ADD | Vitest 순수 함수 | 불량 값 주입, 모드 누출, reset/출력 불일치 | Feature FR-2/3 및 CSS 변수 계약 |
| 여섯 UI 조절의 computed style | NONE | 실제 브라우저 | 죽은 컨트롤, 전역 미반영 | Feature US-1, 실제 registry DOM |
| 이동·새로고침·mode·reduced motion | NONE | 실제 브라우저 | 상태 손실, 모드 혼선, 움직임 강제 | Feature 완료 기준 |
| 소비자 CSS 복사 | NONE | 독립 HTML/CSS 또는 Tailwind 소비자 | 문서에서만 작동하는 override | `@leement/theme` 및 복사 CSS |
| 기존 docs·registry 회귀 | NONE | 설정된 전체 검사 | type/lint/test/build 실패 | 기존 `workflow.featureChecks` |

### 의도적으로 제외하는 테스트

- 색상 picker의 모든 브라우저 내부 동작, screenshot pixel snapshot, Next.js/브라우저 storage 구현 자체의 단위 재검증.

### 검증 실행

- **구현 중**: CSS 연결과 저장값 validator의 focused Vitest, desktop 브라우저의 각 값→computed style.
- **태스크 완료 전**: 수정 파일의 typecheck/lint와 라이트·다크 대표 UI 확인.
- **Feature 완료 전**: `pnpm typecheck`, `pnpm lint`, `pnpm test`, `pnpm build`; 독립 소비자 CSS 적용 확인.
- **수동/UI 검증**: desktop/mobile × light/dark, keyboard/focus, route 이동·reload, reset, 복사 성공/실패, low contrast 경고, reduced motion. 스와치 클릭·키보드 열기/Escape·picker 선택·투명도/OKLCH 초기색·모드 분리, 여섯 범주별 미리보기 차이도 실제 브라우저에서 확인한다. 보존할 증거만 Feature `artifacts/`에 둔다.
- **전체 테스트 필요 여부**: Yes — root layout과 문서 전체 CSS를 건드린다.

## 관련 문서

- Spec: [spec.md](./spec.md)
- Decisions: [decisions.md](./decisions.md)
