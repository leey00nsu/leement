# Feature Spec: Foundations 실시간 테마 편집

## 개요

- **기능 ID**: WPZ86NFQPD8D
- **기능명**: live-foundations-editor
- **대상 레포**: Leement
- **작성일**: 2026-09-28
- **상태**: Approved

## 목적

현재 Foundations의 토큰 값은 정적인 표와 설명으로만 보인다. 방문자가 값을 조정하면 [TweakCN의 테마 편집 화면](https://tweakcn.com/editor/theme)처럼 Leement 문서의 실제 UI가 즉시 바뀌도록 한다. 사용자가 선택한 범위는 **문서 사이트 전체 UI**이며, 결과는 소비자 앱에서 쓸 수 있는 CSS override로 복사한다.

토큰 JSON과 생성된 `@leement/theme` CSS는 배포되는 기본값의 Source of Truth로 유지한다. 문서 편집값은 브라우저의 미리보기 상태이며 npm 패키지나 registry 원본을 직접 수정하지 않는다.

## 사용자 스토리

### US-1: 시각 규칙을 탐색하는 디자이너·개발자

**As a** Foundations 방문자, **I want** 값을 조절하면서 실제 컴포넌트와 문서 전체의 변화를 즉시 보고 싶다, **so that** 토큰 수치와 UI 결과의 관계를 이해하고 프로젝트에 적합한 값을 찾을 수 있다.

**Acceptance Criteria:**

- [ ] Color, Typography, Spacing, Radius, Shadow, Motion의 각 페이지에서 실제 UI에 연결된 값을 수정할 수 있다. 수정 가능한 필드마다 현재 페이지의 실제 registry component 또는 문서 UI에서 눈으로 확인할 수 있는 효과가 있다.
- [ ] 수정 결과는 현재 페이지의 실제 registry component 미리보기뿐 아니라 다른 문서 페이지의 해당 UI에도 적용되고, 페이지 이동과 새로고침 후에도 유지된다.
- [ ] Light와 Dark 색상은 모드별로 따로 수정하고 전환해 확인할 수 있다. 비색상 값은 두 모드에서 공유한다.
- [ ] 전체 초기화로 기본 Leement 테마에 돌아갈 수 있다.

### US-2: 결과를 앱에 적용하는 개발자

**As a** Leement 소비자 앱 개발자, **I want** 현재 미리보기 설정을 CSS로 복사하고 싶다, **so that** `@leement/theme` import 뒤에 붙여 같은 값을 재현할 수 있다.

**Acceptance Criteria:**

- [ ] 복사한 CSS는 `--lm-*` Leement 변수에 기반하며 light/dark 범위를 명확히 나눈다. 필요한 Tailwind·shadcn 호환 값은 Leement 변수에서 파생된다.
- [ ] 변경하지 않은 기본값은 불필요하게 내보내지 않으며, 복사 성공·실패를 사용자에게 알린다.
- [ ] CSS를 소비자 프로젝트에 적용했을 때 문서 미리보기의 대표 색상·타이포그래피·간격·반경·그림자·모션 설정이 재현된다.

## 기능 요구사항

### FR-1: Foundations 편집 UI와 실제 미리보기

각 Foundations 페이지는 관련 값을 조정하는 명확한 입력과 즉시 반응하는 미리보기 영역을 제공한다. 데스크톱에서는 편집과 미리보기를 나란히, 작은 화면에서는 읽기 쉬운 순서로 배치한다. 미리보기는 문서용 복제 컴포넌트가 아니라 실제 registry source를 사용한다. 기존 토큰 설명과 primitive/semantic 관계를 찾을 수 있어야 한다.

수정 가능한 항목은 실제 문서 UI에서 연결되는 값으로 한정한다. Color는 semantic 역할과 브랜드 역할의 light/dark 값, Typography는 글꼴·크기 등 실제 사용되는 타입 값, Spacing은 공통 간격 척도, Radius는 모서리 척도, Shadow는 입체감 척도, Motion은 전환 시간 척도를 포함한다. UI 전체를 바꾸기 위해 Leement 토큰과 Tailwind/shadcn compatibility 값을 같은 관계로 갱신한다.

### FR-2: 사이트 전체 미리보기 상태

편집값은 브라우저에서 유효성을 검사한 후 즉시 적용한다. 페이지 이동·새로고침에서 유지하고 전체 초기화가 가능해야 한다. 초기화나 잘못된 값은 원래 토큰 CSS로 안전하게 돌아가야 한다. 다른 방문자의 설정이나 배포된 패키지에는 영향을 주지 않는다.

### FR-3: 적용 가능한 CSS 출력

현재 선택한 값에서 기본값과 달라진 override만 생성해 복사한다. `@leement/theme` 뒤에 놓을 수 있도록 selector와 변수 이름을 제공하고, 브랜드/semantic 역할의 의미를 유지한다. primitive 토큰의 정적 참조 표를 편집 결과와 혼동시키지 않는다.

## 비기능 요구사항

- **접근성**: 모든 입력에 이름·단위·범위를 제공하고 키보드로 조작할 수 있다. 편집값 때문에 주요 텍스트/배경 대비가 낮아지면 경고한다. 모션 축소 설정은 편집값보다 우선한다.
- **성능**: 값 조정은 페이지 새로고침 없이 반영한다. 대량의 전역 DOM 재렌더나 런타임 토큰 컴파일러를 추가하지 않는다.
- **안전성**: 저장된 미리보기 값이 유효하지 않으면 무시한다. 임의 CSS 구문을 주입할 수 없도록 입력 형식을 제한한다.

## 완료 기준

1. 여섯 Foundations 범주마다 조정 → 실제 UI 변화 → 초기화가 브라우저에서 확인된다.
2. Light/Dark 전환, 페이지 이동, 새로고침에서 현재 미리보기 값이 올바르게 유지된다.
3. 복사한 CSS가 별도 소비자 미리보기에서 같은 대표 결과를 만든다.
4. 키보드·focus·상태 안내·대비 경고·reduced motion을 확인한다.
5. 기존 `pnpm typecheck`, `pnpm lint`, `pnpm test`, `pnpm build`가 통과한다.

## 범위와 제약

- 서버 저장, 계정 공유, URL 공유, Figma 연동, 토큰 JSON 저장 UI, 별도 토큰 컴파일러는 포함하지 않는다.
- 기존 `@leement/tokens` → `@leement/theme` → registry component 관계를 유지한다.
- 실제 값 변경은 브라우저 preview override이며, 공식 기본값 변경은 코드 리뷰를 거쳐 token/rule을 수정한다.
- `local-ff` 병합은 별도 workflow 승인 경계에서 결정한다.

## 관련 문서

- PRD: `../../prd/leement-prd.md`
- PRD Refs: `PRD-FR-005`, `PRD-FR-011`, `PRD-FR-013`
- Design Refs: `docs/designs/design-system.md`
- Visual Reference: https://tweakcn.com/editor/theme
