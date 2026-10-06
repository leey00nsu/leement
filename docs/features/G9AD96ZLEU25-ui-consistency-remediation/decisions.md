# Decisions Log

## D001: 별도 Feature와 변경 목록으로 검수 범위 고정 (2026-10-06)

- **Context**: 사용자가 다음 Feature로 지난 확장 UI 전체의 일관성 검수·수정을 요청했다.
- **Constraints**: main은 유지하고 managed worktree에서 편집한다. Spec 승인 후 Plan/Tasks를 작성하며 구현은 workflow 허용이 필요하다.
- **Options**: Sidebar만 수정 / 추가분만 검수 / 추가·변경 source와 예제 전체 검수.
- **Decision**: 전체 추가·변경분을 검수한다. 명시적 새 Feature 요청에 따라 feature --separate로 G9AD96ZLEU25를 등록하고 반환된 workspace prepare를 실행했다.
- **Rationale**: 기존 component 변경과 upstream 예제에도 불일치가 들어올 수 있다.
- **Trace**: commit subject와 이전 Spec/Plan/Tasks를 대조했다. a64c377..9dac3fd diff에서 UI52/Patterns2/Blocks28/Charts70/예제498을 확인했다. helper를 포함한 source 파일 수와 public component 수는 구분한다. 목록/inspection은 browser 검수 완료 증거가 아니다.
- **Evidence**:
  - Commit: 이전 등록 cc34fc7, 최종 문서9dac3fd, 시작 코드5830646.
  - Log: [audit-scope.json](./artifacts/audit-scope.json), [spec.md](./spec.md).
- **Consequences**: Plan/Tasks는 Spec 승인 후 구체화한다. 결과와 필요한 전후 이미지는 같은 Feature artifacts에 보존한다.

## D002: 기존 디자인 규칙과 실제 source를 비교 기준으로 사용 (2026-10-06)

- **Context**: Sidebar 등에서 기존 Leement 규칙과 다른 source 근거를 발견했다.
- **Constraints**: 기능/API/설치 계약을 보존하고 역할에 필요한 차이를 일괄 오류로 처리하지 않는다.
- **Options**: preview CSS 보정 / 기준을 upstream에 맞춰 변경 / 배포 source와 theme을 기존 기준에 맞게 수정.
- **Decision**: 실제 source/theme 수정 방향으로 명세를 작성한다. Sidebar를 우선 점검하되 전체 범위는 유지한다.
- **Rationale**: docs에서만 보정하면 독립 consumer 결과가 달라진다. 숫자 일괄 치환은 navigation/marketing/chart의 역할을 손상시킬 수 있다.
- **Trace**:
  - Sidebar는 bg-sidebar/text-sidebar-foreground/bg-sidebar-accent/border-sidebar-border/ring-sidebar-ring 및 outline의 var(--sidebar-border)를 사용한다. packages/theme/build.mjs의 compatibility와 @theme inline에는 sidebar alias가 없고 tracked registry/docs/packages CSS·TS·TSX·MJS 검색에서도 해당 변수 정의를 찾지 못했다. browser computed style/consumer 차이는 구현 단계에서 검증한다.
  - SidebarInput의 h-8/bg-background override가 Input의 h-10/semantic surface와 다르다. SidebarMenuButton은 default32/sm28/lg48px, icon collapse32px·ring2다. Button은 default40/sm36/lg44/xs32px·ring3/40이다. navigation 밀도 예외의 적합성은 시각/조작 검수 후 결정한다.
  - SidebarInset과 floating sidebar에 shadow-sm이 있다. 일반 surface와 floating 역할을 구분해 필요성을 판단한다.
  - NavigationMenu의 h-9/ring3/50/open muted/50, Item의10px 간격/ring3/50도 검수 후 판단할 후보다. 모든 숫자를 오류로 확정하지 않았다.
  - Hero/Pricing/Codebase의 공용 Button/Card 조합과 역할별 layout을 읽었다. 이 inspection으로 Blocks 전체를 통과 처리하지 않았다.
- **Evidence**:
  - Commit: 5830646의 registry/ui/sidebar.tsx, input.tsx, button.tsx, navigation-menu.tsx, item.tsx 및 packages/theme/build.mjs.
  - Log: [spec.md](./spec.md) US-1..4/FR-1..3.
- **Consequences**: 예외는 범위·이유·관련 규칙·재검토 조건을 남긴다. 필요한 공용 설명은 기존 design-system에 동기화한다.

## D003: 문서·README·원격 작업 경계 (2026-10-06)

- **Context**: 요청은 UI 일관성 복구이며 README 편집이나 게시·배포 요청은 없다.
- **Constraints**: README 보호와 custom release 정책을 따른다. 아직 Plan의 Curated Documentation Impact 평가 단계는 아니다.
- **Decision**: Spec·범위 목록·초기 근거를 준비하고 Spec 승인 경계에서 제시한다. README는 수정 범위에 포함하지 않는다. 공개 기능 수정은 구현 단계에서 apps/docs/lib/releases.ts의 unreleasedChanges에 기록한다.
- **Rationale**: 기존 디자인·PRD를 기준으로 복구하고 확인된 사실만 문서화한다.
- **Trace**: PRD/design-system/custom/config를 읽었다. 현재 특정 README 설명의 새로운 불일치는 확인하지 않았다. 후속 검수에서 발견하면 경로·근거·보류 사유를 추가한다. design-system에 이전 Feature ID 역참조가 남은 문서 정책 문제는 Plan 영향 평가에서 함께 판단한다.
- **Evidence**:
  - Commit: 5830646의 docs/prd/leement-prd.md, docs/designs/design-system.md, docs/agents/custom.md, docs/.lee-spec-kit.json.
  - Log: [spec.md](./spec.md).
- **Consequences**: 구현·local merge 승인은 각각 해당 workflow 경계에서 받는다. 원격 작업은 이번 요청 범위에 없다.

### 명세 준비 검증

- `workflow-stage G9AD96ZLEU25 --json`: spec_approve, approvalRequired=true, implementationAllowed=false. 정확한 응답 옵션은 A(명세 승인 후 Plan) / B(명세 수정)다.
- `feature-audit --enforce --json`: PASS, violations=[]이다.
- `git diff --check`, 범위 목록의 분모·모든 source 경로·Spec/Decisions 상대 링크 검사: PASS다. 구현 코드 변경이 없어 typecheck/lint/test/build는 아직 실행하지 않았다.
- `workflow-audit --json`: needs_sync / FEATURE_REFERENCE_IN_SHARED_DOC. 시작 코드에 이미 있던 `docs/designs/design-system.md:15`의 Feature GMA8H5L3TLTY, `:133`의 Feature ASDHZYC4MRGK 참조를 보고했다. 명세 승인 후 Plan의 Curated Documentation Impact에 이 문서를 UPDATE 대상으로 연결해 지속 규칙은 유지하고 Feature 추적은 해당 SDD에만 남기도록 정리한다. 이 검사 결과를 PASS로 표현하지 않는다. 응답에 expectedWorkflowSyncMarker는 없었다.


## D004: 승인된 명세의 실행·검증 계획 (2026-10-06)

- **Context**: 사용자 A로 Spec을 승인했다. 계획·태스크 준비 후 허용된 구현을 이어간다.
- **Constraints**: agentReview/agentExecution은 config에서 disabled다. plan_approve는 approvalRequired=false로 자동 진행하며 task는 메인 에이전트가 순차 실행한다.
- **Options**: 스타일 숫자 일괄 치환 / source·실제 browser 관찰·consumer 근거로 역할별 수정.
- **Decision**: 여섯 태스크로 source 전수검수, Sidebar/theme, 나머지 UI/Patterns, Blocks, Charts, 최종 전체 예제/consumer 검증을 실행한다. 새로운 durable 테스트는 없고 기존 theme compatibility 테스트만 UPDATE한다.
- **Rationale**: 고정 분모를 유지하며 실제 불일치와 의도된 역할 차이를 구분한다.
- **Trace**: main이 Spec US-1..4/FR-1..4와 Plan을 대조했다. 전수498 예제/70 charts와 UI52/Patterns2/Blocks28, 기본/고위험 상태, 독립consumer, full checks를 연결했다. design-system과 releases UPDATE를 Tasks Docs에 연결하고 나머지 curated 영역 NONE의 이유를 평가했다. 기존 Feature 문서 target 경고는 이미 main에 통합된 source 기준으로 검토했고 다른 Feature 문서를 수정하지 않는다. config의 maxRounds는 적용할 활성 리뷰가 없으며 fresh subagent review를 실행하지 않았다.
- **Evidence**: [plan.md](./plan.md), [spec.md](./spec.md), git5830646의 config/design-system/consumer 계약 및 workflow-stage plan_approve(approvalRequired=false).
- **Consequences**: 첫 task 전에 owner claim과 hash transition을 한다. 구현 결과 수락/병합은 각각 별도 승인 게이트다.


## D005: 소스 검수와 초기 browser 결과 (2026-10-06)

- **Context/Constraints**: T01에서 source 검사와 실제 화면 baseline을 구분하며 전체 scope를 유지한다.
- **Decision/Rationale**: Sidebar·입력·메뉴·DataTable·일반 block shadow·interactive chart inset의9개 finding 묶음을 T02..05에 연결했다. marketing 제목/media/canvas/Avatar/Calendar의 역할별 크기는 예외 후보로 보존한다.
- **Trace**: 실제 Aside Sidebar1440 화면과 computed style에서 sidebar inner 투명/alias 빈값·selected surface 누락을 확인했다. 앱에 의해 설정되지 않은 일반 border가 currentColor인 점도 theme reset과 예제에서 재확인한다. browser extension이 html에 data-immersive-translate-page-theme를 추가하여 dev hydration warning을 발생시킨 것은 source 결함과 구분한다. 모든 예제의 visual status는 아직 pending이다.
- **Evidence**: [audit-results.json](./artifacts/audit-results.json), [sidebar-before.png](./artifacts/sidebar-before.png), 이전 코드5830646.
- **Consequences**: T01은 검수 후보·baseline 준비를 완료하며 UI 수정과 전체 시각 검수 완료를 주장하지 않는다.


## D006: Sidebar와 semantic border 복구 (2026-10-06)

- Sidebar compatibility8역할과 Tailwind alias를 기존 semantic 토큰에 연결하고 일반 border reset을 복구했다. expanded40/sm36/lg44·icon40·action32·submenu40/36, Input상속·3px/40% focus·논리적 inline 간격·12px shadowless panel을 적용했다. Skeleton의 random SSR 폭은 useId로 안정화했다.
- Plan의 border reset 추가를 main이 Spec FR-2/US-2와 재대조해 승인했다. API/팔레트 확장이 아닌 currentColor fallback 결함 복구이며 자동 plan review 설정을 유지한다.
- T01 문서 checkpoint3890043 후 canonical task subject의 빈 project checkpoint f2beca4를 만들었다. T02 변경은 별도 보존 후 T02 DOING 성공을 확인하고 적용했다.
- 기존9tests·ESLint·docs typecheck 통과, actual Sidebar390/1440과 mode/shortcut/Sheet Escape focus 확인. 확장parts/consumer 및 전수모드는 T06에서 완료하며 이 단계로 전체 시각검수 완료를 주장하지 않는다.


## D007: 복합 UI와 예제의 역할별 복구 (2026-10-06)

- ContextMenu/Menubar의 glass·descendant destructive override를 제거하고 공용 DropdownMenu 표면/강조를 상속한다. Context item은 동일 메뉴 밀도, Menubar 내부32px trigger는40px toolbar 안의 explicit 보조 조작이다. Dropdown submenu도 공용 popup 규칙을 상속한다.
- InputGroup/OTP/Questionnaire는 기본 semantic surface와 공용 focus40%/invalid30%·disabled muted를 적용한다. InputGroup 내부24/32px adornment는40px 입력 안의 보조 조작이라는 예외를 유지한다. Questionnaire의 mobile44px은 touch target이며 desktop40px이다.
- Item은 default16/sm12/xs8px inset으로 variant를 구별하고 Message gap12px로 정리했다. Navigation40px/8px radius·focus ring을 복구한다. DataTable sm36px와 icon-sm36px을 상속하며 Skeleton Form도40px 실입력 placeholder에 맞춘다.
- Drawer scrim은 Dialog의 semantic foreground/50를 사용하고 swipe/snap/stack 상태는 보존한다. Tooltip은 공통 popover surface/foreground/border로 역할을 맞춘다. 기존 menu row·Calendar cell·media geometry·OTP40px slot 등 의도된 조합을 일반 Button 규칙으로 일괄 치환하지 않았다.
- 타입/린트 및 기존34tests PASS. 전수 화면과 focus·contrast 관찰은 T06 pending이다.
