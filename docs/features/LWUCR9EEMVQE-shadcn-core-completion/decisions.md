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

## D003: T01 native form과 Field 연결을 보존한다 (2026-10-03)

- **Context/Constraints**: T01을 시작하며 checkbox/radio/toggle에는 Base UI의 form/keyboard 의미를 사용한다. native Leement Input은 FieldControl render로 감싸 자동 label/help/error 관계를 유지한다.
- **Decision**: 7개 UI와 실제 원본 예제·registry·metadata를 함께 추가한다. ToggleGroup은 native Base UI 배열 value 계약을 명시하고 field는 특정 form 엔진에 의존하지 않는다.
- **Trace**: pnpm frozen install 완료. InputGroup은 하나의 focus/invalid 표면을 제공한다. 기본 표식16px과 label 최소40px을 예제에서 결합한다. T01 계약6개/form/label/error/controlled/disabled/keyboard가 통과했고 docs typecheck·변경 eslint·registry build가 통과했다. 화면/소비자 설치는 T05에서 확인한다.
- **Evidence**: [기본 입력 source](../../../../registry/ui/core-form.test.tsx), [명세](./spec.md).


## D004: Command 엔진과 보조 popup을 재사용한다 (2026-10-03)

- **Decision**: cmdk 검색/키보드 엔진과 Leement Dialog를 조합한다. trigger 없는 controlled Dialog의 focus 복귀 대상이 없음을 테스트에서 확인하여 trigger prop으로 primitive opener를 연결했다. HoverCard는 Radix를 사용하고 Glimpse는 기존 props를 그대로 유지하면서 이를 조합한다.
- **Trace**: 탐색8개 source/registry/원본 예제와 디자인 문서를 추가했다. Accordion은 Base UI 1.7의 Tab/Enter/Space 계약을 문서화하고 높이 CSS와 closing inert/reduced motion을 보존한다.
- **Evidence**: [navigation 계약5개](../../../../registry/ui/core-navigation.test.tsx), docs typecheck/변경 eslint/registry build PASS.

## D005: 고급 표는 별도 pattern으로 제공한다 (2026-10-03)

- **Decision**: 기존 DataTable 정렬 API를 유지하고 같은 ui/table에 native parts를 추가한다. 신규 data-table registry는 AdvancedDataTable과 TanStack Table v8 client-side 조합을 배포한다. 기본 UI에는 TanStack 의존성을 넣지 않는다.
- **Trace**: row ID는 필수이며 controlled 선택/필터된 선택 수/필터 첫 페이지/마지막 열 숨기기 제한을 제공한다. 그룹 header의 selection cell은 rowSpan으로 연결한다. 단순 열 label과 display cell을 예제로 제공한다. 서버/virtual 동작은 범위 밖이다.
- **Evidence**: [계약4개](../../../../registry/patterns/data-table.test.tsx), [v8 pagination](https://tanstack.com/table/v8/docs/guide/pagination), docs typecheck/eslint/registry build PASS.

## D006: 날짜 range의 부분 선택과 제약을 명시한다 (2026-10-03)

- **Decision**: 기존 Calendar single/schedule API를 유지하고 mode=range의 별도 typed props를 추가한다. 시작일 선택 뒤 두 번째 선택으로 종료를 완료하며 역순 정규화와 unavailable 내부 날짜 거절을 제공한다. DatePicker는 기존 Calendar/Button/Popover를 조합한다.
- **Trace**: 날짜 경계는 포함이며 disabled는 Calendar에서 predicate/전체, DatePicker에서 필드 전체와 disabledDate로 구분한다. 초기 focus는 해당 popup의 Calendar ref에서 찾으며 전역 selector로 다른 popup을 선택하지 않는다. Arrow skip은 최대366 step으로 무한 반복을 피한다. min/max 밖의 월 버튼을 disabled 처리한다.
- **Evidence**: [계약5개](../../../../registry/patterns/date-picker.test.tsx), docs typecheck/eslint/registry build PASS.

## D007: T05 소비자 설치와 화면 검증에서 발견한 문제를 수정한다 (2026-10-03)

- **Decision**: 전체102개 문서/메뉴/예제/registry 경로와 종속 source를 대조한다. 신규17개와 수정3개를 상세/Showcase,390/1024/1440px,light/dark로 확인한다. 최신 shadcn4.21.1의 base-nova 소비자에서도 타입/build/실제 조작을 확인한다.
- **Trace**: DatePicker 메뉴 누락, 모바일 긴 API 문자열 overflow, Base UI data-disabled 표현을 수정했다. 선택 표식의 경계와 신규 focus ring을 강화하고 Toggle/Command 선택 경계를 추가했다. Checkbox 경계 대비는 light4.7417/dark7.4770이다. 기준은 [W3C 비텍스트 대비](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html)이며 전체 WCAG 인증을 주장하지 않는다.
- **Compatibility fix**: 최신 CLI가 custom wrapper의 asChild를 base 스타일용 render로 바꾸거나 제거했다. Glimpse는 Radix Trigger의 native anchor props를 직접 사용해 href/label API를 유지한다. CommandDialog는 direct Radix namespace Trigger와 명시적 props spread로 JSX attribute 변환을 피하여 Slot을 유지하며 Radix dependency를 명시한다. 설치 후 nested button 없음과 focus 복귀를 실제 consumer에서 확인한다.
- **Evidence**: [화면240건](./artifacts/browser-matrix.json), [실제 조작26건](./artifacts/interaction-checks.json), [카탈로그102개](./artifacts/catalog-check.json), [소비자 설치](./artifacts/consumer-installation.json). 대표 화면: [모바일 Checkbox](./artifacts/checkbox-light-390.png), [dark 표](./artifacts/data-table-dark-1440.png), [모바일 날짜 popup](./artifacts/date-picker-popup-dark-390.png), [소비자](./artifacts/consumer-light-390.png).
- **Limits**: public deployment/npm publish는 미실행이다. theme은 실제 pack 산출물, registry는 로컬 HTTP namespace를 사용했다. Base UI consumer1.8.0에서도 확인했으나 모든 향후 upstream API를 보장하지 않는다. 신규17개는 experimental이며 원본 두 앱 전면 교체·upstream 전체 호환은 범위 밖이다. Aside daemon 연결 실패 후 기존 Chrome/Playwright로 검증했다. 소스102개 전체 동작 인증이 아니라17신규+3수정에 대한 전수 화면 검증이다.

최종 검증 완료: 모두 PASS. 구현 승인 전이므로 main 병합·push·배포를 하지 않았으며 lee-spec-kit implementation_approve에서 결과 수락을 요청한다.

## D008: 구현 검토에서 발견한 native file Input 정렬을 보정한다 (2026-10-03)

- **Context**: 사용자가 Input 예제에서 파일 선택 버튼과 빈 파일명이 위로 치우치는 스크린샷을 전달했다. 구현 승인 응답이 아닌 기존 Feature의 변경 요청으로 처리한다.
- **Decision**: 완료된 T01–T05의 기록을 유지하고 T06을 추가한다. native 파일 선택과 일반 Input API를 유지하면서 파일 입력의 세로 정렬을 최소 수정한다.
- **Verification**: Plan T06의 실제 브라우저 검증을 사용하며 계획되지 않은 영구 테스트는 추가하지 않는다. 이전240건 matrix는 신규17개/수정3개만 대상으로 기존 Input을 포함하지 않았으므로 이 문제를 이미 검증했다고 주장하지 않는다.

- **T06 root cause/result**:40px Input 안의 native file selector button 높이가24px로 제한되고 vertical padding이 없어 파일 input line box가 위에 배치됐다. file:h-6를 file:h-full로 바꾸어 border 내부38px를 채우며 native baseline이 중앙에 놓이게 하고 file:mr-2로8px 간격을 준다. parent line-height/높이 및 일반 입력 스타일은 유지한다. 실제 native 입력을 custom wrapper로 교체하지 않는다.
- **T06 evidence/limits**: [브라우저8조합·24상태 및 키보드/일반 입력 검증](./artifacts/input-alignment-check.json). Chrome의 실제 렌더링을 확인했으며 다른 브라우저를 검증했다고 주장하지 않는다. Aside daemon 미연결로 기존 Chrome/Playwright를 사용했다. 생성 registry source 일치,113개 tests,lint/typecheck/build PASS. 사용자 요청으로 구현 승인을 다시 요청하며 병합은 별도 승인이다.

<!-- lee-spec-kit:workflow-sync sha256:ecf80390c7ece4b992935b76281f635dbc22f9f6c287b98cb7e5b3a79891bca0 -->

## D009: 사용자 요청에 따른 전체 예제 부족 분석 (2026-10-03)

- **Context**: Select의 그룹 라벨이 구현되어도 예제에서 보이지 않는 원인을 설명한 뒤 사용자가 모든 컴포넌트의 예제 추가 여부 분석을 요청했다.
- **Scope**: commit6b5fba0의 UI79개 public API/registry/docs metadata/실제 example source 및 docs 렌더링 경로를 정적으로 대조했다. Pattern15/Block8도 추가 조사했다. 실제 브라우저의102개 전수 조작이나 upstream 전체 parity 검증은 수행하지 않았다.
- **Finding**: UI79개 모두 대표 예제 파일은 있다. 우선 추가13개, 보완42개, 현재 핵심 사용법 예제 유지24개로 분류했다. 유지 판정은 모든 props/모든 상태를 시연한다는 뜻이 아니다. live 예제에서 조작으로 도달할 수 있는 상태를 없는 기능으로 세지 않았다.
- **Structural cause**: ItemPage는 Preview 하나만 보여주고 getItemCode는 examples/<name>.tsx 하나를 읽는다. Variants/Sizes/States는 텍스트이며 별도 named Examples section이 없다. Showcase도 같은 예제를 전체 mount한다.
- **Recommendation**: Showcase의 가벼운 대표 예제를 유지하면서 상세 문서에는 중요한 variant/state/composition마다 설명·Preview·해당 Code를 가진 Examples를 추가한다. registry 원본을 재사용하고 unsupported upstream API를 약속하지 않는다. callback 결과와 앱 책임을 보여준다. 추가예제를 모두 Showcase에 mount하지 않는다.
- **Evidence**: [전체102개 결과표](./artifacts/example-audit.html), [항목별 API·source 근거](./artifacts/example-audit.json). Progress의value=null 계약은 설치된 Base UI 타입을 직접 확인했다.
- **Workflow**: 이번 요청은 분석이다. 예제/UI 구현 추가, Feature scope 확장, 구현 승인이나 merge 승인으로 해석하지 않는다. 제품 코드는 수정하지 않았다. 분석 결과를 검토한 뒤 사용자가 구현을 요청하면 범위/계획/태스크를 갱신한다.

## D010: 사용자 구현 요청을 현재 Feature의 예제 보강 범위로 반영한다 (2026-10-03)

- **Authorization**: 사용자가 D009의 분석·우선순위·상세 Examples 제안을 확인한 뒤 “수정 시작.”이라고 요청했다. Spec US-5와 Plan T07–T10에 UI55개 구현 범위와 source/Code 검증 계약을 구체화한다. 기존 Feature를 유지한다.
- **Decision**: 분석된13개 우선 및42개 보완을 모두 완료한다.24개 유지와Pattern/Block의 추가 후보는 기존 예제를 유지한다. compound example과 state별 사용법을 소비자 소스로 제공하고 Showcase의 대표 예제는 보존한다.
- **Approvals**: 이 요청은 분석 결과에 대한 구현 지시다. 구현 승인 또는local-ff병합 승인은 아니다. 마지막에 별도로 정해진 checkpoint에 멈춘다.

## D011: 추가예제로 드러난 지원 상태를 보정한다 (2026-10-03)

Tabs가 orientation을 class용 data attribute에만 쓰고 primitive에는 전달하지 않아 vertical navigation이 horizontal로 남았다. 전달을 보정한다. Progress value=null에서 indicator의 inline width가 없고 기본 class에도 폭이 없어 시각적으로0폭이었다. data-indeterminate의 전체폭 pulse와 reduced-motion 정지를 적용하며 임의 percent를 만들지 않는다. 새 API/animation engine을 추가하지 않는다. source 변경도 기존 Feature의 예제 지원 범위에 포함하며 T10에서 실제 동작을 확인한다.

## D012: T10 예제 소비와 고정 상태를 검증하며 보정한다 (2026-10-03)

독립 소비자에서 list 예제가 Badge source 없이 compile되지 않았다. 각 실제 example source의 registry import로 추가 설치 명령을 표시한다. UI registry의 runtime dependency를 예제 때문에 늘리지 않는다. ImageCrop aspect=1의 초기 선택 영역이 실제 Chrome에서219.1875×164.390625(4:3)였다. 이미지 크기로 초기/Reset crop을 makeAspectCrop/centerCrop 계산하며 aspect 변경과 이미지 로드도 반영한다. Editor readOnly는 contenteditable뿐 아니라 aria-readonly에 반영한다. 기존 source를 보정하는 범위이며 새로운 public API나 영구 테스트를 추가하지 않는다.

- T10 검증 환경: 실제 Chrome 및 기존 Playwright를 사용했다(Aside 연결 불가의 기존 fallback). paused/offscreen CSS animation의 finished promise는 끝나지 않으므로 UI settle은 실행 중 finite animation과1200ms 상한을 사용한다. Sonner Toaster의 부모 ol은 높이0이며 absolute toast li가 실제 표면이므로 컨테이너가 visible이어야 한다는 잘못된 oracle을 제거했다. Base UI Tabs는 Arrow focus 후 Enter/Space로 활성화하는 기본 계약이며 Menu radio selection은 기본적으로 menu를 닫는다고 가정하지 않는다. 각 조작을 독립 시나리오로 확인한다. Chart 예제의 정적 데이터에는 isAnimationActive=false를 사용해 초기 그래프를 바로 읽도록 했다.

- 시각 검토에서 Chart 추가예제의 두 번째 series가 보이지 않았다. --lm-color-fg-muted는 실제 theme에 없고 --lm-color-foreground-muted가 정식 이름이다. 예제의 token 참조를 수정하며 최종 chart4조합의 실제 stroke/Code와 소비자 build를 다시 확인한다. layout/legend 존재만으로 선의 가시성을 검증했다고 주장하지 않는다.

T10 최종 결과:55개 항목/57개 추가예제, Code·설치 명령·outline을 제공한다. Chrome228화면 및44조작,57Code 대조와55항목+Badge 설치 consumer의57예제 strict build/6조작을 완료했다. 모든 featureChecks PASS(19files117tests). README/main을 변경하거나 push/배포하지 않았다. 구현 승인 gate에서 결과 수락을 요청하며 local-ff 통합은 별도 승인이 필요하다.

## D013: 사용자 요청으로 기본 mono 폰트를 D2Coding으로 고정한다

기기별 시스템 mono 대신 한글과 영문 코드를 위한 D2Coding을 기본값으로 제공한다. “다음 task로 진행해줘.”는 T11 구현 허가이며 main 병합 허가가 아니다. 기존 Fonts 배포 규칙대로 theme에 font-face와 자체 웹폰트/OFL/NOTICE를 포함하고 Fonts 이름 입력만으로 외부 폰트를 받지 않는다. mono family는 Foundations에서 재정의할 수 있다. font 파일은 공식 출처의 고정 revision을 기록하며 fallback을 유지한다. README 변경 없음.
