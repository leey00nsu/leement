# Decisions Log

## D001: 예제·API 중심 문서와 고정 upstream 기준 (2026-10-05)

- **Context**: 사용자가 반복 문단 제거, shadcn Base 예제/API 전체 대응, Kibo Blocks 전체 대응, Charts 탐색을 새 Feature로 요청했다.
- **Constraints**: 디자인 정본은 Leement token/rule이며 source ownership·Motion·Preview/Foundation 계약을 유지한다. spec 승인 전 구현하지 않는다.
- **Options**: 문서 템플릿만 정리 / 현재 컴포넌트 일부만 보완 / 고정된 공개 기준의 모든 사용 사례·API·Blocks·Charts를 실제 구현까지 보완.
- **Decision**: 세 번째 범위를 명세 승인 대상으로 준비한다. Overview/Preview → Installation → Usage → Examples → API Reference로 문서를 정리한다. 고유 접근성·사용 규칙은 해당 예제/API에 남긴다.
- **Rationale**: 기존 문서 설명은 반복적이고 예제와 API는 실제로 부족하다. 항목 수가 아닌 사용 가능한 source와 사용 사례를 완료 기준으로 삼는다.
- **Trace**:
  - `item-page.tsx`는 모든 항목에 9개 문단과 같은 목차를 출력하고 API는 단일 문장이다.
  - shadcn Base 문서 64개를 고정 commit에서 모두 읽어 Preview ID/headings/API 표/공식 primitive 링크를 수집했다. NativeSelect 제외 63개는 Preview 참조 456건, 고유 ID 453개다. inline code와 Sidebar/DataTable의 상세 조합은 별도 대응 대상이므로 이 숫자만으로 완료를 판정하지 않는다.
  - Kibo의 Blocks 문서 28개는 각각 공개 `apps/docs/examples/<name>.tsx`가 존재한다. 공개 카탈로그에는 각 페이지 하나의 대표 예제가 있다. premium Shadcnblocks 광고 링크는 범위에서 제외한다.
  - shadcn Charts registry의 70개 source를 7개 분류로 고정했다. upstream commit을 실제 commits/main 응답과 확인했다.
- **Evidence**:
  - **Test/Log**: [고정 기준 목록과 항목별 출처](./artifacts/reference-baseline.json).
  - **Code**: [문서 템플릿](../../../apps/docs/components/item-page.tsx), [현재 탐색](../../../apps/docs/lib/docs.ts).
- **Consequences**: 기존 컴포넌트의 API/parts 보완과 신규 컴포넌트·block·chart recipe가 필요한 큰 Feature다. 승인 후 순차 task로 나누며 일부 목록을 나중 작업으로 미뤄 전체 대응을 완료했다고 보고하지 않는다.

## D002: NativeSelect 제외와 기존 기능 유지 (2026-10-05)

- **Context**: 이번 요청은 shadcn 100% 대응이지만 사용자는 이전에 NativeSelect 제거·Select 통일을 명시했다.
- **Constraints**: 이전 명시적 제거 지시를 조용히 뒤집지 않는다.
- **Options**: NativeSelect 재도입 / 미지원 사실 숨김 / 제외를 명시하고 나머지 전체 대응.
- **Decision**: NativeSelect 한 페이지·5개 예제를 제외한다. 다른 예제의 보이는 native select는 Select/Combobox로 표현한다. API와 사용법은 실제 Leement 계약으로 설명한다.
- **Rationale**: 공통 UI를 유지하면서 기존 사용자 결정을 지킬 수 있다.
- **Trace**: PRD의 ‘선택과 공개 설치’에 NativeSelect/browser select 예제를 제공하지 않는다는 계약이 존재한다. 제외는 baseline/spec에 명시되어 승인 시 검토 가능하다. 사용자 변경 지시가 오면 이 결정과 범위 모두 갱신한다.
- **Evidence**:
  - **Test/Log**: [baseline의 scopeExceptions](./artifacts/reference-baseline.json).
  - **PRD**: [선택과 공개 설치 및 FR-015](../../prd/leement-prd.md).
- **Consequences**: ‘NativeSelect 제외 기준 전체 대응’으로 표현하며 제외 없는 shadcn 100% 호환을 주장하지 않는다. 기존 Animations/Patterns/Blocks, Preview handle/px/Replay, Foundation 편집을 유지한다.

## D003: Base UI와 실제 source의 차이 (2026-10-05)

- **Context**: 사용자는 Leement를 shadcn Base UI 기반으로 이해하지만 기존 source 일부는 Radix다.
- **Constraints**: primitive 링크와 public API는 실제 구현 및 설치 버전에 맞아야 한다.
- **Options**: Base UI 링크만 추가 / 실제 기반을 구분하고 대응에 필요한 primitive/API를 함께 보완.
- **Decision**: 실제 기반을 확인하고 필요한 source·타입·동작·예제를 보완한다. Base UI primitive는 Base UI 공식 API로 연결하고, 별도 라이브러리 기반 기능은 해당 공식 API로 연결한다.
- **Rationale**: Avatar Badge/Group/size처럼 실제 export/prop이 없는 기능을 문서만으로 지원할 수 없다.
- **Trace**: `registry/ui/avatar.tsx`는 `@radix-ui/react-avatar`를 쓰며 Avatar/Image/Fallback만 export한다. upstream Base Avatar에는 Badge/Group/GroupCount 및 size API가 있다. 현재 Base UI 1.7.0과 live 공식 문서 버전의 차이도 구현 단계에서 확인한다.
- **Evidence**:
  - **Code**: [Avatar source](../../../registry/ui/avatar.tsx).
  - **Test/Log**: [Avatar 기준 예제·출처](./artifacts/reference-baseline.json).
- **Consequences**: Base UI로 이미 완전히 통일됐다고 설명하지 않는다. 변경하는 API의 소비자 영향과 이전 안내를 같은 task에서 검증한다.

## D004: README 보호와 후속 문서 동기화 (2026-10-05)

- **Context**: 카탈로그가 늘어나면 기존 README의 제공 목록도 새 범위와 차이가 생긴다.
- **Constraints**: 사용자는 이번 Feature에서 README 수정을 요청하지 않았고 AGENTS는 명시적 요청 없는 README 수정을 금지한다.
- **Decision**: README는 수정하지 않는다. PRD의 FR-014 범위와 block 목표를 새 의도에 맞춰 갱신하고 FR-015/016/017을 정의했다. `docs/designs/design-system.md`의 기존 제공 개수·upstream 대응·문서 예제 규칙은 승인 후 task Docs에서 갱신한다.
- **Rationale**: 요구사항은 PRD, 이번 범위는 Feature SDD, 실행 계약은 코드, 장기 디자인 규칙은 design-system 문서가 소유한다.
- **Trace**: README의 제공 목록과 `docs/designs/design-system.md`의 과거 UI79/Pattern15/Block8 및 예제 규칙을 확인했다. README는 신규 항목 추가 시 불완전해질 수 있으나 수정 권한이 없어 이번 scope에서 보류한다. 나머지 curated 영향은 Plan에서 명시적으로 평가하고 task에 연결한다.
- **Evidence**:
  - **PRD**: [갱신한 제품 요구사항](../../prd/leement-prd.md).
  - **Code/Docs**: [README](../../../README.md), [디자인 규칙](../../designs/design-system.md).

<!-- lee-spec-kit:workflow-sync sha256:0a68d895d871874c628ff4b5152ad612b898c2b10319a907d8621c4da26510e7 -->

## D005: 명세 승인·자동 계획 진행과 shared docs 검토 (2026-10-05)

- **Decision**: 사용자 `A`로 spec를 Approved로 승격했다. 현재 config에서 Plan/Tasks 승인과 agentReview/agentExecution이 disabled이므로 별도 승인이나 위임 없이 계획과 13개 순차 task를 준비했다.
- **Trace**: workflow-stage는 spec_approve → plan_write → plan_approve(approvalRequired=false) → tasks_write를 반환했다. 전체 source ownership·NativeSelect 제외·Motion·Preview 계약을 Plan/Verification Contract에 연결했다. main의 최신 통합 tip을 base로 PRD/design-system/THIRD_PARTY_NOTICES를 읽었고, historical Feature sharedDocumentationWarnings와 현재 요구사항은 충돌하지 않는다. 이전 Feature 문서를 수정하지 않는다.
- **Evidence**: [승인 명세](./spec.md), [계획/검증 계약](./plan.md), [태스크](./tasks.md). 사용자 명세 승인 응답 `A` (2026-10-05).

## D006: 첫 문서 task 검증 (2026-10-05)

- **Decision**: 공통 ItemPage에서 반복 9문단/목차를 제거했다. Usage는 소비자 alias 코드와 필요한 접근성 설명을 제공하고 API Reference는 public part별 prop/type/default/required/description 및 공식 링크를 표시한다. Button/Input/Card의 실제 API를 먼저 명시했다. 나머지 public parts/API 상세는 후속 task 02~07의 구현과 함께 채운다.
- **Trace**: pnpm typecheck(5 tasks), docs focused ESLint, git diff --check PASS. 브라우저 세 페이지에서 제거한 heading이 없고 새 목차·API 표가 나타남을 확인했다. Preview main에 iframe 하나이며 inline 복사본이 없다. Arrow 16px, Home 240px, End 833px 및 mouse drag 683/773px가 실제 iframe 폭·px와 맞는다. request event counting은 Aside transport 한계로 미검증이며 단일 runtime DOM 관찰과 구분한다. 기존 lazy Examples는 viewport 진입 후 로드된다.
- **Evidence**: Aside read-only session `0Br37unKWM3B7lyW`의 최종 관찰 결과. [ItemPage](../../../apps/docs/components/item-page.tsx), [API metadata](../../../apps/docs/lib/api-reference.ts), task 01 검증 기록.

## D007: 신규 콘텐츠·입력 source 채택 (2026-10-05)

- **Context/Constraints**: task 02는 Attachment/Bubble/Direction/InputOTP/Item/Marker의 실제 parts와 composition을 제공한다. 고정 shadcn Base source를 검토하고 Leement semantic/spacing/Motion으로 적응한다. CSS module·upstream 전용 cn stylesheet/Next import는 설치 source에 남기지 않는다.
- **Trace**: pinned Base source와 nova style의 정적 @apply 규칙을 읽었다. temporary 변환으로 실제 Tailwind class를 source에 펼치며 dynamic 애니메이션은 Motion helper로 바꾼다. OTP는 upstream과 같은 input-otp 1.4.2로 native single-field/paste/form behavior를 유지한다. third-party license를 보존한다.
- **Evidence**: [고정 기준](./artifacts/reference-baseline.json), [계획](./plan.md), [notice](../../../THIRD_PARTY_NOTICES.md). 6개 source의 strict typecheck/focused ESLint, registry build, controlled/disabled OTP·native FormData·polymorphic ref·keyboard 등 5 integration tests와 registry-source 5 tests PASS. Aside session bJX49gOxpzdgNACK에서 6개 iframe/API 및 파일 삭제/반응 toggle/방향 변경/OTP 입력 PASS. 설치 consumer는 `/tmp/leement-reference-consumer`에서 namespace 6개 및 docs 조합용 Select/Label 설치 후 strict/Vite build PASS. Vite는 일반 use-client directive 경고를 표시하지만 설치 source 타입/빌드에는 실패가 없다. Direction API의 실제 optional/default ltr를 설치된 Base UI 타입으로 확인했다.
