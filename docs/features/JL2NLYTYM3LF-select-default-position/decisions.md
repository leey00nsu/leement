# Decisions Log

## D001: 공용 Select의 기본 위치 변경 (2026-10-14)

- **Context**: 사용자가 Leement Select를 기본적으로 겹치지 않게 열도록 요청하고 2026-10-14 A로 Spec을 승인했다.
- **Constraints**: 공용 source 기본값을 바꾸고 명시적 true 및 primitive viewport/focus/선택 계약을 유지한다. token/theme과 다른 메뉴는 변경하지 않는다.
- **Options**: 개별 예제에 false 반복 지정, 공용 SelectContent 기본값 변경.
- **Decision**: 공용 기본값 false, side=bottom과4px 간격 유지. 토글 예제도 초기 false로 맞추고 true 전환을 보존한다.
- **Rationale**: 새로운 설치와 모든 옵션 없는 사용처에서 요청한 동작을 일관되게 제공한다.
- **Trace**:
  - source 기본 true, API 기본 true, catalog의 true(default) 설명과 토글 초기 true를 확인했다. 명시적 false 사용처는 이미 별도 아래 위치를 요청하며 수정할 필요가 없다.
  - 기존 controls/core-form 검사가 입력/폼/키보드 계약을 다룬다. 실제 layout 확인이 필요하므로 기본값을 복제하는 영구 테스트를 추가하지 않는다.
  - README에는 Select 위치 기본값 설명이 없어 변경하지 않는다. source/API/PRD/design/unreleased만 task로 동기화한다.
  - 결과: 공용 기본값 false, API/default 설명, 위치 전환 초기 false 및 기본 상태 예제 생략, PRD/design와 unreleased를 동기화했다. token/theme/manifests/lockfile/dependencies는 변경하지 않았다.
  - production4조합에서 default/placeholder4px, 명시적 true의 selected item 정렬, 하단 경계 top flip, 마우스·키보드·Escape focus·disabled·console0 및 생성 registry source false를 확인했다. Aside에서 실 DOM 팝업과 trigger 좌표도4px 간격이었다.
  - typecheck/lint/build와32 files/706 tests가 통과했다. 초기 실행은 worktree dependencies 미설치로 시작되지 않아 frozen-lockfile로 설치한 뒤 검사를 통과했다. 기본값을 복제하는 영구 테스트는 추가하지 않았다.
  - sharedDocumentationWarnings의 이전 Feature 변경은 main 기준에 이미 포함되어 있다. 현재 diff는 Select 규칙 문장과 미게시 항목을 추가하며 기존 요구를 유지한다.
- **Evidence**:
  - [기준 source](../../../registry/ui/select.tsx), [API](../../../apps/docs/lib/api-core.ts), [검증 계약](./plan.md#verification-contract).

- **Test/Log**: [완료 전 검증 기록과 화면](./tasks.md#테스트-실행-기록).

<!-- lee-spec-kit:workflow-sync sha256:cbb9ba1a950f8c103d2fa3d4f56d7990be44d70ca2b1ba7dfcb446b09533f332 -->
