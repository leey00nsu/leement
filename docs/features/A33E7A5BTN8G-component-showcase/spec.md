# Feature Spec: component-showcase

## 개요

- **기능 ID**: A33E7A5BTN8G
- **기능명**: component-showcase
- **대상 레포**: Leement
- **작성일**: 2026-09-26
- **상태**: Approved

## 목적

배포된 문서 사이트에서 방문자가 Leement의 모든 registry 항목을 한 화면에서 찾고 실제 UI를 미리 본 뒤, 상세 규칙과 설치 방법으로 이동할 수 있게 한다. 현재는 각 상세 페이지에 예시가 있으나, 전체 항목을 둘러볼 수 있는 모음 화면이 없다.

## 사용자 스토리

### US-1: 전체 목록 탐색

**As a** Leement를 평가하는 개발자
**I want** UI, Pattern, Block을 한 화면에서 미리 보고
**So that** 설치 전에 제공 범위와 시각 언어를 파악할 수 있다.

**Acceptance Criteria:**

- [ ] `/showcase`에 registry UI 8개, Pattern 5개, Block 1개가 모두 표시된다.
- [ ] 세 레이어가 분명하게 구분되고 좁은 화면에서도 내용이 잘리지 않는다.
- [ ] 각 항목에서 해당 상세 문서와 설치 명령을 찾을 수 있다.

### US-2: 실제 동작과 테마 확인

**As a** 컴포넌트를 도입하려는 개발자
**I want** 예시를 직접 조작하고 light/dark 표면을 비교하며
**So that** 상태, 상호작용, 색상 적용을 설치 전에 확인할 수 있다.

**Acceptance Criteria:**

- [ ] 갤러리는 기존 상세 문서의 Preview와 registry 원본 컴포넌트를 재사용한다.
- [ ] Button, 입력, Dialog, Tooltip 등의 예시는 실제로 조작할 수 있다.
- [ ] 테마 전환은 Leement semantic CSS 변수를 사용하고 갤러리 미리보기 범위에 적용된다.
- [ ] 키보드 초점, label, 동작 및 대비가 기존 접근성 규칙을 유지한다.

### US-3: 배포 후 조회

**As a** 문서 사이트 운영자
**I want** 문서 앱의 배포 빌드가 registry JSON도 포함하게 하고
**So that** 공개 사이트에서 미리보기와 `/r/{name}.json`을 함께 제공할 수 있다.

**Acceptance Criteria:**

- [ ] 프로젝트의 문서 배포 빌드 명령으로 `/showcase`와 registry item JSON이 생성된다.
- [ ] production server에서 `/showcase`, 상세 문서, `/r/button.json`에 접근할 수 있다.

## 기능 요구사항

- FR-1: 문서 내비게이션과 홈 화면에서 갤러리로 이동할 수 있다.
- FR-2: 갤러리 목록은 기존 항목 metadata와 preview 구현을 기준으로 유지한다. 문서용 컴포넌트 복사본을 추가하지 않는다.
- FR-3: UI, Pattern, Block 별 링크와 설치 명령을 보여준다.
- FR-4: 갤러리 테마 전환은 토큰의 light/dark semantic 역할을 사용한다.
- FR-5: 문서 앱만 배포하는 경로에서도 registry JSON이 빌드 산출물에 포함된다.

## 비기능 요구사항

- **성능**: 정적 페이지 생성과 기존 Next.js 클라이언트 미리보기 구조를 유지한다. 별도 서버나 데이터 API를 추가하지 않는다.
- **접근성**: 키보드 탐색, focus-visible, aria와 반응형 레이아웃을 유지한다.
- **범위 제외**: npm 게시, 공개 저장소 생성, 도메인 연결, 실제 호스팅 배포는 이 Feature에 포함하지 않는다.

## 관련 문서

- PRD: `docs/prd/leement-prd.md`
- PRD Refs: `PRD-FR-003`, `PRD-FR-005`, `PRD-FR-006`, `PRD-NFR-001`
- Design Refs: `docs/designs/design-system.md`
