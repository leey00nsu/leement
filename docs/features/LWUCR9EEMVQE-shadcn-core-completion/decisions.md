# Decisions Log

## D001: 기본 입력·탐색·데이터 조합부터 보완한다 (2026-10-03)

- **Context**: 사용자가 shadcn 전체 대응 여부 분석을 요청했고, 기본 UI 누락 및 기존 유사 항목의 차이를 확인한 뒤 이를 수정하는 Feature 진행을 요청했다.
- **Constraints**: 기존 token/rule와 source ownership, 기존 API를 유지한다. Spec 승인 전에 구현하지 않으며 구현 승인과 병합 승인을 구분한다.
- **Options**: 공식64개 이름을 모두 복제하기 / 기본 입력·탐색과 실제 차이가 있는 표·날짜·hover 조합부터 보완하고 보류를 명시하기.
- **Decision**: 두 번째 방향을 Spec에 제안한다. 신규17개(UI15/Pattern2), 기존 Table/Calendar 및 필요한 Glimpse source를 정리한다. NativeSelect/Kbd/AspectRatio는 native form·단축키 설명·미디어 배치를 위한 작은 기본 요소로 함께 제안한다. StatusNotice/EmptyState는 중복 구현 없이 기존 대응으로 안내한다.
- **Rationale**: 기본 controls의 빈틈이 공통 UI 사용성을 제한하며 Kibo 복합 UI의 개수로 이를 대신할 수 없다. 28개의 이름 일치를 기능 호환으로 오해하지 않게 기준을 분리한다.
- **Trace**:
  - 기준 registry에는64 UI/13 Pattern/8 Block/3 libs가 있으며 공식 메뉴와 동명28개를 확인했다.
  - registry/ui/table.tsx는 DataTable만 export하고 정렬만 제공한다. 기존 export를 유지하면서 native Table compound API와 고급 pattern을 구분해야 한다.
  - Calendar는 custom 단일 날짜/일정 API, Glimpse는 링크 preview 전용이다. 기존 계약을 깨지 않고 조합 범위를 보완한다.
  - Field의 오류/description 연결과 FormSection의 여러 필드 배치는 서로 다른 책임이다.
  - theme의 일반 compatibility aliases는 전체 upstream UI의 크기/상태/API 및 Sidebar 전용 aliases를 보장하지 않는다. Sidebar/전체 RTL/대화 전용 UI는 이번 범위에 넣지 않는다.
  - Plan/Tasks는 Spec 승인 뒤 작성한다. 현재 PRD-FR-014와 Spec은 검토용 제안이며 기능 구현 완료를 의미하지 않는다.
- **Evidence**:
  - [고정 기준표](./artifacts/shadcn-baseline.json)
  - 기준 commit: `ed8baa5bd5663bdd5cabbc14409c3a303fa4c2f3`
  - [공식 목록](https://ui.shadcn.com/docs/components), [Field](https://ui.shadcn.com/docs/components/base/field), [Data Table](https://ui.shadcn.com/docs/components/base/data-table), [Date Picker](https://ui.shadcn.com/docs/components/base/date-picker)
- **Consequences**: PRD는 FR-014로 신규 기본 UI 요구를 추적한다. Plan에서 docs/designs/design-system.md의 사용 규칙·문서 카탈로그·registry 소비자 검증·기존 API 회귀를 각 task와 연결한다. 일반적인 UI library로의 진전이며 전체 shadcn 완전 대응이 아니다.

## D002: README와 공개 배포는 이번 요청에 포함하지 않는다 (2026-10-03)

- **Context**: 사용자 요청은 컴포넌트 보완 Feature다. README 수정이나 push/배포 요청은 없다.
- **Decision**: README를 수정하지 않는다. 발견한 구체적 불일치가 있다면 경로·근거·보류 이유를 여기 기록한다. 현재 조사에서 갱신이 필요한 README 불일치를 확정하지 않았다.
- **Trace**: 원본 두 앱은 이번 분석의 참고이며 전면 교체는 별도 범위다. managed worktree의 문서와 구현만 변경하고 main은 base branch를 유지한다.
- **Evidence**: [Spec 범위](./spec.md), 기준 commit `ed8baa5bd5663bdd5cabbc14409c3a303fa4c2f3`.

<!-- lee-spec-kit:workflow-sync sha256:29c1b1d0744badd445d98b7846323b509f73fbc8b710c8d0851525eb3f2aace7 -->
