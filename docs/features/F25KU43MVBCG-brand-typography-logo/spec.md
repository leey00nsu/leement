# Feature Spec: 기본 폰트와 브랜드 로고

## 개요

- **기능 ID**: F25KU43MVBCG
- **기능명**: brand-typography-logo
- **대상 레포**: Leement
- **작성일**: 2026-09-30
- **상태**: Approved

## 목적

CopySinger와 Leesfield는 본문에 Pretendard, 아이콘과 글자로 구성한 로고에 Paperlogy Bold(700)를 사용한다. Leement도 같은 역할 구분을 기본으로 제공한다. 현재 font stack 이름만 있는 기본값을 실제 폰트 로딩까지 연결하고, 소비자가 본문·브랜드 폰트와 로고 아이콘·이름을 쉽게 바꾸도록 한다. Leement 문서 사이트 로고에는 사용자가 제공한 SVG와 Paperlogy 워드마크를 적용한다.

## 사용자 스토리

### US-1: 기본 서체를 바로 사용하는 개발자

**As a** Leement 소비자, **I want** 테마를 import하면 본문은 Pretendard, 로고 글자는 Paperlogy Bold로 표시되기를 원한다, **so that** 각 프로젝트에서 같은 폰트 로딩 코드를 반복하지 않는다.

**Acceptance Criteria:**

- [ ] `pnpm add @leement/theme` 후 CSS의 `@import "@leement/theme";`만으로 기본 웹폰트가 로드된다. 별도 CDN 또는 Next.js 전용 설정을 요구하지 않는다.
- [ ] 본문·컨트롤은 Pretendard, 브랜드 워드마크는 Paperlogy 700을 기본으로 사용한다. 코드의 monospace 역할은 별도로 유지한다.
- [ ] 실제 폰트 파일과 CSS URL이 배포 패키지에 포함되어 독립 소비자 빌드에서도 정상 제공된다.

### US-2: 프로젝트의 정체성을 적용하는 개발자

**As a** 앱 개발자, **I want** 본문·브랜드 폰트를 각각 설정하고 내 아이콘과 이름으로 로고를 조합하고 싶다, **so that** 같은 공통 규칙으로 여러 프로젝트를 표현한다.

**Acceptance Criteria:**

- [ ] 별도 Leement font family 변수를 재정의할 수 있고 Tailwind의 `font-sans`·`font-brand`가 해당 변수에서 파생된다.
- [ ] Foundations → Typography에서 본문·로고 폰트를 각각 수정하면 문서 전체의 해당 역할과 실제 로고 미리보기가 즉시 바뀐다. CSS 복사·초기화·새로고침 복원도 기존 편집기와 일관된다.
- [ ] `@leement/brand-logo` registry pattern으로 아이콘+글자 또는 아이콘만의 로고를 설치할 수 있다. 아이콘·이름·크기는 앱이 제공하고 설치된 source를 자유롭게 수정한다.
- [ ] 소비자 로고가 Leement 아이콘·색상에 고정되지 않으며 커스텀 폰트 로딩과 family override 방법을 문서에서 설명한다.

### US-3: Leement 브랜드를 확인하는 문서 방문자

**As a** 문서 방문자, **I want** 일관된 아이콘과 워드마크를 보고 로고 조합을 미리 확인하고 싶다, **so that** 내 앱에도 같은 규칙을 적용한다.

**Acceptance Criteria:**

- [ ] 문서 헤더 등 기존 로고 표면과 favicon에 제공된 SVG를 적용하고 로고 글자는 Paperlogy Bold로 표시한다.
- [ ] Typography 문서는 폰트 역할·기본 로딩·재정의 방법을 설명한다. BrandLogo 문서는 실제 registry source로 full/icon·크기·커스텀 아이콘/이름 예제를 제공한다.
- [ ] 작은 화면과 light/dark 모두에서 로고가 잘리지 않고 읽을 수 있다. 로고 링크의 키보드 초점과 접근 가능한 이름이 유지된다.

## 기능 요구사항

### FR-1: 기본 서체와 배포

프레임워크 독립 token에 sans(Pretendard)와 brand(Paperlogy) 역할을 둔다. theme은 기본 폰트 파일·font-face·CSS 변수와 Tailwind 호환 값을 제공한다. 외부 CDN에 의존하지 않는 패키지 자산과 `font-display: swap`·폴백을 사용한다. 폰트 출처·원저작자·라이선스는 코드의 MIT 라이선스와 구분해 배포에 포함한다.

### FR-2: 설정과 실시간 미리보기

소비자는 theme import 뒤에 본문·브랜드 font family를 각각 override할 수 있다. 기존 Typography 편집기에 브랜드 family 설정과 실제 로고 예제를 추가한다. 커스텀 폰트 파일은 앱이 로드하며, family 문자열 입력만으로 파일이 다운로드됐다고 표시하지 않는다. 미리보기 저장·CSS 복사·초기화는 기존 Foundations 계약을 따른다.

### FR-3: 재사용 가능한 로고 조합

`BrandLogo`는 반복된 아이콘+워드마크를 표현하는 pattern이다. 의미 기반 전경, 일정한 아이콘·글자 간격과 크기, 브랜드 family와 700 굵기를 사용한다. 아이콘은 앱이 제공하는 React 요소로 조합하고 라우팅은 바깥의 anchor 또는 앱 Link가 맡는다. full/icon과 제한된 크기를 제공하며 icon 전용에서도 이름을 전달한다. 두 실제 앱의 공통 사례를 근거로 초기 maturity는 candidate로 표시한다.

### FR-4: Leement 자체 로고

아래 SVG의 두 사각형 위치·모서리·색상·투명도를 유지해 문서 로고와 favicon에 사용한다. 표시 크기는 배치에 맞게 조정한다. 이 색상은 Leement 자체 브랜드 자산이며 공용 UI나 소비자 로고의 고정 팔레트로 취급하지 않는다. 문서에서도 공용 BrandLogo pattern을 그대로 사용한다.

```svg
<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="26" y="22" width="72" height="72" rx="18" fill="#7B6EF6" opacity="0.45" />
  <rect x="38" y="34" width="72" height="72" rx="18" fill="#5368EE" opacity="0.78" />
</svg>
```

## 비기능 요구사항

- **접근성**: full 로고에서 장식 아이콘의 이름을 중복 읽지 않고 icon 전용과 링크에는 접근 가능한 이름을 제공한다. 키보드·focus-visible·light/dark 가독성을 확인한다.
- **성능**: 본문 variable font와 브랜드 700만 제공하며 전체 Paperlogy 굵기나 새 폰트 관리 엔진을 추가하지 않는다. 실제 자산 크기와 로딩을 확인한다.
- **호환성**: token은 React·Tailwind·Next.js에 의존하지 않는다. theme import와 source ownership을 유지하고 기존 Foundations 저장 데이터도 유효하게 복원한다.

## 완료 기준

1. docs와 독립 소비자에서 실제 폰트 로딩, 본문·브랜드 역할 및 family 재정의를 확인한다.
2. Typography의 브랜드 폰트 변경·CSS 복사·초기화·저장 복원을 확인한다.
3. registry 설치와 소비자 빌드, full/icon의 접근 가능한 이름, 작은 화면·light/dark를 검증한다.
4. Leement 로고·favicon, 폰트 라이선스·커스텀 가이드가 코드와 문서에서 일치한다.
5. 설정된 typecheck·lint·test·build가 통과한다. 구현 승인과 main 병합 승인은 별도 workflow checkpoint에서 받는다.

## 범위와 제약

폰트·로고 업로드 편집기, 로고 생성기, 계정 저장, 새 React npm 라이브러리, 두 원본 앱 직접 수정은 포함하지 않는다. 기존 README는 명시적 수정 요청이 없어 편집하지 않는다.

## 관련 문서

- PRD: `../../prd/leement-prd.md`
- PRD Refs: PRD-FR-002, PRD-FR-005, PRD-FR-011, PRD-FR-013
- Design Refs: `docs/designs/design-system.md`
- Source evidence: [decisions.md](./decisions.md)
