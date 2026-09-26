# Leement PRD v0.1

## 목적

CopySinger의 밝은 표면과 Leesfield의 어두운 표면에서 반복된 시각 규칙을 제품 간에 재사용한다. 디자인 의사결정은 token과 rule에 기록하고, React 앱에는 shadcn registry로 수정 가능한 소스를 전달한다.

## 사용자

- 새 React 프로젝트에서 같은 제품 언어를 적용하려는 개발자.
- 토큰과 디자인 규칙의 근거를 확인하려는 디자이너와 기여자.

## 요구사항

- PRD-FR-001: `@leement/tokens`가 프레임워크에 독립적인 primitive 및 semantic token을 제공한다.
- PRD-FR-002: `@leement/theme`이 Leement CSS 변수와 하위 호환 shadcn alias를 제공한다.
- PRD-FR-003: registry가 UI 8개, pattern 5개, block 1개의 소스를 소비자 프로젝트에 설치한다.
- PRD-FR-004: pattern과 block이 사용하는 내부 컴포넌트는 registry dependency로 함께 설치된다.
- PRD-FR-005: docs가 토큰, 사용 규칙, 예시, 접근성, API, 설치법을 설명하고 registry 원본을 예시에 사용한다.
- PRD-FR-006: 설치된 소스가 Tailwind v4 기반 소비자 앱에서 타입 검사 및 빌드된다.
- PRD-NFR-001: 키보드 탐색, focus-visible, disabled, aria와 Radix 접근성 동작을 유지한다.
- PRD-NFR-002: light와 dark의 semantic 이름을 공유하고 light를 우선 제공한다.
- PRD-NFR-003: 초기 배포는 pnpm workspace와 Turborepo로 관리한다. 별도 React npm 라이브러리, CLI, 토큰 컴파일러, Figma 동기화는 범위 밖이다.

## 수용 기준

토큰과 theme 빌드, docs 빌드, registry JSON 생성, 핵심 컴포넌트 테스트, 소비자 앱에서 namespace 설치 및 빌드가 통과한다. 공개 npm 패키지와 registry 호스트 게시 여부는 별도 릴리스 결정이다.
