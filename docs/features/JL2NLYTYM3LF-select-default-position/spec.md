# Feature Spec: select-default-position

## 개요

- **기능 ID**: JL2NLYTYM3LF
- **기능명**: select-default-position
- **대상 레포**: Leement
- **작성일**: 2026-10-14
- **승인 이력**: 2026-10-14 사용자 A로 기본 위치 변경과 명시적 겹침 옵션 유지 범위를 승인함.
- **상태**: Approved

## 목적

Select를 열 때 현재 선택 항목이 trigger 위에 겹치는 기본 동작을 변경한다. 별도 옵션 없이 trigger 아래에 목록을 열어 닫힌 상태의 입력과 선택 값을 계속 볼 수 있게 한다. 값 선택이라는 Select의 역할과 기존 명시적 위치 옵션을 유지한다.

## 사용자 스토리

### US-1: 입력 아래에서 선택 목록 열기

**As a** Leement Select를 사용하는 개발자
**I want** 위치 옵션을 지정하지 않아도 trigger와 겹치지 않는 목록 열림
**So that** 기본 입력과 현재 값의 위치를 유지하면서 다음 값을 고를 수 있다.

**Acceptance Criteria:**

- [x] 위치 옵션을 생략한 SelectContent는 충분한 공간이 있을 때 trigger 아래에 4px 간격으로 열린다.
- [x] 선택 값이 있거나 placeholder 상태여도 기본 목록이 trigger와 겹치지 않는다.
- [x] 명시적 alignItemWithTrigger=true는 기존의 선택 항목과 trigger 정렬 동작을 제공한다.
- [x] side/align/offset 및 화면 경계에 따른 Base UI 자동 위치 조정을 유지한다.
- [x] 마우스 선택, 키보드 선택과 Escape/focus 복귀, disabled 및 form value 동작을 유지한다.
- [x] 배포 registry source, 실제 docs Preview, API 기본값과 위치 예제 설명이 일치한다.

## 기능 요구사항

### FR-1: 기본 위치

공용 SelectContent의 alignItemWithTrigger 기본값을 false로 변경한다. side=bottom과 sideOffset=4 기본값을 유지하며, 개별 사용처에 false를 반복 추가해서 대신하지 않는다. 공간 부족 시 반대 방향으로 배치하는 Base UI 충돌 회피를 유지한다. 모든 환경에서 무조건 아래로 열도록 강제하지 않는다.

### FR-2: 기존 명시적 옵션과 선택 계약

alignItemWithTrigger=true를 전달하면 기존 겹침 정렬을 요청할 수 있다. value/defaultValue/onValueChange, items, name, Field 연결, keyboard/focus, group 및 disabled 계약은 유지한다. Dropdown Menu와 Combobox 동작은 변경하지 않는다.

### FR-3: 문서와 설치 일치

현재 Select API 기본값 및 두 위치 모드의 예제와 설명을 공용 source에 맞춘다. PRD의 선택 규칙과 필요한 디자인 설명을 동기화하고 변경을 unreleasedChanges에 기록한다. 기존 설치 소스는 자동 수정되지 않으며 새 registry 설치 또는 사용자 소스 업데이트 시 새 기본값을 받는다.

## 비기능 요구사항

- **접근성**: Base UI 키보드 조작, focus와 선택 의미를 유지한다.
- **표현**: 기존 semantic 표면, 모션, light/dark 및 popup 너비를 유지한다.
- **검증**: 실제 브라우저의 trigger/popup 위치를 기준으로 두 모드와 화면 경계 동작을 확인한다. 클래스나 단순 기본값을 복제하는 영구 테스트는 추가하지 않는다.

## 제외 범위

- 새로운 Select 기능, Dropdown Menu 통합, token/theme 수치와 설치 경로 변경.
- 버전업, npm 게시, 원격 push 및 배포.
- README와 공개된 과거 릴리스 변경.

## 관련 문서

- PRD: [leement-prd.md](../../prd/leement-prd.md)
- PRD Refs: PRD-FR-014, PRD-FR-005, PRD-NFR-001
- Design Refs: docs/designs/design-system.md
- Design System: docs/designs/design-system.md
- Decisions: [decisions.md](./decisions.md)
