# Feature Spec: Leement 전체 카탈로그 디자인 감사와 재구성

## 개요

- **기능 ID**: KDRBVZWYME7Q
- **기능명**: visual-design-audit
- **대상 레포**: Leement
- **작성일**: 2026-09-27
- **상태**: Approved

## 목적

현재 Leement는 Kibo의 41개 복합 UI 사용 사례를 포함하는 공개 registry 79개 항목을 제공하지만, 항목이 존재한다는 사실만으로 시각적 완성도와 디자인 일관성이 보장되지는 않는다. 실제 컴포넌트 source, 문서 예제, 설치된 결과를 항목별로 검토하고 잘못 구현된 부분을 다시 설계한다. 목표는 CopySinger의 밝은 UI와 이를 어두운 모드로 확장하려 한 Leesfield의 공통 의도를 하나의 Leement 규칙으로 표현하면서, Kibo 수준의 유용한 구성과 조작성을 제공하는 것이다.

2026-09-27 시작 목록은 `registry.json`의 배포 대상 80개 중 `utils`를 제외한 **79개**(UI 61, Pattern 10, Block 8)다. 이 중 41개는 [Kibo UI](https://github.com/shadcnblocks/kibo)의 동명 사용 사례와 대응하며 38개는 Leement 기본 UI·자체 확장이다. 비교 기준은 작업 중 upstream이 바뀌지 않도록 Kibo commit `3d63cdb15b79d972e3dc38a10997987672f9b263`와 해당 시점의 [공개 문서](https://www.kibo-ui.com/)로 고정한다. Kibo의 브랜드 색, 문구, 페이지 장식을 복제하는 것이 아니라 컴포넌트의 시각적 구조, 상태, 조합성 및 사용 사례를 검토한다.

## 사용자 스토리

### US-1: 소비자 앱 개발자

**As a** CopySinger·Leesfield 또는 새 React 앱의 개발자, **I want** Leement 컴포넌트를 설치했을 때 디자인 규칙이 적용된 완성된 UI를 얻고, **so that** 앱마다 구조와 상태를 다시 그리지 않고 공통 source를 활용할 수 있다.

**Acceptance Criteria:**

- [ ] 설치된 source의 기본·상호작용·오류·비활성 등 해당 상태가 문서 미리보기와 일치한다.
- [ ] 밝은/어두운 테마에서 배경, 표면, 텍스트, 테두리, 브랜드, focus와 데이터 색의 semantic 역할이 일관된다.
- [ ] Kibo 대응 항목의 핵심 시각적 구조와 사용 사례가 Leement에서 동작한다. 차이는 디자인 규칙 또는 명시적 제품 요구를 근거로 설명된다.

### US-2: 디자인 시스템 기여자

**As a** 디자인 시스템 기여자, **I want** 모든 공개 항목의 감사 판정과 근거를 보고, **so that** 결함, 의도된 차이, 후속 변경을 구분할 수 있다.

**Acceptance Criteria:**

- [ ] 79개 항목 각각에 기준 출처, 실제 확인한 화면·상태, 발견 문제, 최종 판정, 수정 파일 또는 유지 근거가 기록된다.
- [ ] 발견된 디자인 결함은 해당 source·예제·설명·토큰 규칙과 함께 수정되고, 확인되지 않은 항목을 통과 처리하지 않는다.

## 기능 요구사항

### FR-1: 빠짐없는 기준선과 판정

`registry.json`의 공개 항목을 단일 목록으로 삼아 79개를 전수 확인한다. 41개 대응 항목은 고정한 Kibo source와 미리보기에 비추어 anatomy, 정보 계층, 크기·밀도, 조합 방식, 상태, 반응형을 확인한다. 나머지 38개는 Leement 디자인 규칙과 두 제품의 관련 UI를 기준으로 확인한다. 공통 Button/Input/Card와 overlay·입력·데이터·미디어·pattern/block의 실제 사용 맥락을 빠짐없이 포함한다.

감사표는 항목별로 (1) 참조 URL·source 경로, (2) Leement source·문서 경로, (3) light/dark·데스크톱/모바일과 적용 가능한 상호작용 상태의 실제 확인 범위, (4) 발견 결함과 심각도, (5) 재구성 또는 의도된 차이의 이유, (6) 재검증 결과를 남긴다. 비교가 불가능한 항목은 이유를 기록하고 다른 독립 근거로 검증한다. 미확인을 통과로 간주하지 않는다.

### FR-2: 디자인 규칙에 따른 재구성

잘못된 구현으로 판정된 항목은 token/rule을 먼저 확인하고 registry 원본을 수정한다. 문서 예제는 그 원본을 import하여 상태·변형을 보여 주고, 설치 결과가 같은 디자인을 사용해야 한다. 브랜드색은 consumer가 설정하는 semantic 역할이며 기본 neutral Skeleton은 유지한다. 하드코딩 색상, 단순한 모양 복제로 인해 정보 계층이나 사용 사례가 사라진 대체물, 상태별 focus/hover/disabled/loading 오류를 교정한다. 여러 항목에 공통인 결함은 token/theme 또는 공통 primitive에서 해결한다.

### FR-3: 시각 및 사용성 검증

데스크톱과 모바일의 light/dark 문서 미리보기를 실제 렌더링해 잘림·넘침·겹침, typography·spacing·radius·shadow, 표면 대비 및 상태를 확인한다. 적용되는 조작은 키보드와 포인터에서 확인하고 focus-visible, 이름, aria, disabled 및 reduced-motion을 보존한다. 복잡한 항목은 단일 기본 화면만으로 통과시키지 않고 핵심 상태·사용 사례를 예제에서 재현한다.

### FR-4: 소비자 설치와 변경 안내

재구성 과정에서 public API나 registry dependency가 바뀌면 문서의 API·설치·사용 규칙과 changelog/migration 정보를 갱신한다. 대표적으로 기본 UI, Kibo 대응 복합 UI, pattern과 block을 격리된 소비자에서 설치·typecheck·build하고 문서 미리보기와 같은 source가 전달되는지 확인한다. 두 제품의 공통 UI 적용 경로를 깨는 변경은 통합 검증 또는 호환 경로를 제시한다.

## 완료 기준

1. 감사표의 79개 공개 항목 모두 `수정 후 통과` 또는 근거가 있는 `의도적 차이로 통과` 판정을 갖고, 열린 중대·주요 디자인 결함이 없다. 경미한 잔여 항목도 소유자·영향·후속 작업을 명시한다.
2. 41개 Kibo 대응 항목은 단순 이름·항목 수가 아니라 주요 anatomy와 데모 시나리오가 확인된다. 특히 단순화로 사용 사례가 달라진 항목은 재구성하거나 정당화한다.
3. 79개 문서 미리보기에서 실제 registry source가 렌더링되고, 적용 가능한 주요 상태와 좁은 화면, 두 테마를 검증한다. 대표 결함의 전후 시각 증거를 Feature `artifacts/`에 보존한다.
4. 변경한 UI의 접근성과 소비자 설치·타입 검사·빌드가 통과하며 `workflow.featureChecks`의 typecheck, lint, test, build가 통과한다.
5. 토큰과 디자인 규칙, registry, 문서의 설명이 일치한다. 수정된 공개 API와 사용 규칙을 문서에 반영한다.

## 비기능 요구사항 및 범위

- **접근성**: 원래의 Radix/Base UI/headless 동작과 키보드 조작을 시각 수정으로 손상하지 않는다. 텍스트·상태 대비와 reduced-motion을 확인한다.
- **성능**: 전체 카탈로그를 한 화면에 동시에 마운트하는 무거운 감사 UI를 제품 코드에 추가하지 않는다. 기존 docs route와 미리보기 구조를 활용한다.
- **호환성**: source ownership 및 shadcn registry 전달 방식을 유지한다. API 변경은 실제 사용성 개선에 필요한 경우에만 하고 소비자 이전 경로를 기록한다.
- **비범위**: Kibo 웹사이트의 로고·카피·전체 페이지 장식 복제, 새로운 React npm UI 패키지, Figma 동기화, 도메인 백엔드·서비스 연동, Leement에서 공개하지 않은 upstream 신규 항목 추가는 포함하지 않는다.

## 관련 문서

- PRD: `../../prd/leement-prd.md`
- PRD Refs: `PRD-FR-005`, `PRD-FR-006`, `PRD-FR-007`, `PRD-FR-008`, `PRD-FR-009`, `PRD-FR-010`, `PRD-FR-011`, `PRD-FR-012`, `PRD-NFR-001`, `PRD-NFR-004`, `PRD-NFR-005`
- Design Refs: `docs/designs/design-system.md`
