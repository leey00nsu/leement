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


## D008: 공개 Blocks의 표면·통계·링크 규칙 (2026-10-06)

- Compare는 테이블 외곽12px border와 자체 horizontal scroll을 사용하고 기본shadow를 제거한다. Download의 일반 icon surface는border로 구분한다. Compliance의 panel12px, Community/CaseStudy/About breakout20px inset을 적용한다. About 통계는 본문 sans·tabular-nums로 코드 서체 오용을 수정했다. 공개 Blocks 링크focus는3px/40%로 통일했다.
- Hero의 대형제목·media 비율, About의 넓은 통계section64px, Compliance의 장식badge, Pricing 선택ring2px는각 역할과 상태강조이므로 일반40px control/20px Card 규칙과 구분하여 유지한다. 무관한 기존8 Blocks는 이번scope에 들어오지 않아변경하지 않는다.
- 기존 application/content/conversion/marketing25tests와 ESLint PASS. 전체 실제preview4모드 및browser interaction은 T06에연결한다.


## D009: Charts의 Card/control 역할 정렬 (2026-10-06)

- Interactive Area/Bar/Line은 공용Card20px inset을 상속하고 header title/series tile도20px을 사용한다. edge-to-edge series tile의 inset focus는3px/40%이며 graph geometry/250px plot 높이/축 margin은 데이터표현 역할로 유지한다.
- 추가검수에서 Pie interactive Select28px 높이 override도 확인하여 공용40px Select를 상속하게 했다. Area/Pie popup/item radius override는 제거한다. custom tooltip 값은 코드 서체를 제거하고 tabular-nums 본문을 유지한다. 데이터표summary/scroll focus도 공용링으로 맞춘다.
- 기존75 recipe tests와 변경7파일 ESLint PASS. recipe70의 실제4모드·series/기간/tooltip/Foundations/reduced motion은 T06에서 최종확인한다.


## D010: 전체 검수와 실제 설치의 추가 발견 (2026-10-06)

- T06 DOING에서 실제 registry namespace155개와 예제 소비처11개를 별도 React/Tailwind 소비자에 설치하고 theme tarball을 사용했다. 독립498 examples와70 lazy chart source의 첫 strict/Vite build PASS. monolithic fixture 공통chunk warning은 검수앱 번들 특성이며 제품 성능 주장으로 사용하지 않는다.
- 설치된 Sidebar에서는 shadcn base 스타일 변환이 동적 child의 asChild를 제거해 중첩 button과 좁아진 메뉴를 만들었다. Sidebar의 TooltipTrigger를 명시 render prop+children으로 바꾸어 단일조작 구조를 보존한다. 위험색/폰트/모서리 검수에서도 공통 Chart tooltip의background·10px·mono 값과 Field/Attachment/Bubble/ScrollArea/Calendar/Toast의50% focus 잔여를 발견해 공용역할로복구했다. Toast12px/Field선택카드12px·custom Base charttooltip도 맞춘다. API는 유지하며 이러한 조합 결함은 Spec US-4 범위다.
- full typecheck/lint/706tests 첫 PASS 후 위 추가수정의 기존112tests PASS. 최종검사는 추가수정이 반영된 source로 다시 실행한다.
- browser568routes4모드 전수는 Aside read-only worker tXpEvZTmtFB9O0rQ가 진행중이며 capture와 실제 visualreview를 구별한다. worker는 구현/워크플로우검수 subagent가 아니고 Aside skill의 browser delegation이다.
- devserver와 Next output 충돌을 피하기 위해 추적source·lockfile을 /tmp/leement-ui-consistency-build에 복사하고 frozen install 후 동일 pnpm run build를 실행한다. 첫 임시복사에서 기존coverage가 import하는 FeatureJSON 누락으로 실패했다; 모든 tracked Feature artifact를 복원한 동일source build가 PASS했다. 더 최신 수정source도 다시동기화해 검증한다. 워크트리 .next나제품빌드 설정은 변경하지 않는다.


## D011: 설치된 Sidebar parts와 Foundations/RTL/mobile 검증 (2026-10-06)

- 실제 설치consumer에서 단일button 중첩0·메뉴231px fullwidth/default40/sm36/lg44·action32(top2/6)·sub40/36·Input40/8px·shadow없음을 확인했다. group/menu action callback count0→1→2, controlled collapse statefalse와 collapsedtooltip 표시가 작동한다.
- dark/right/inset/RTL에서는 Sidebar physical right1184..1440과 main8..1184가 겹치지 않고 logical inline action/submenu가 정렬됨을 [독립 consumer dark/RTL 화면](./artifacts/sidebar-consumer-dark-rtl.png)과 DOM으로 확인했다. Foundation semantic surface/default를#173f33,muted#28564a,border#94c9b8로 바꾸면 Sidebar/Input/selected/border가 즉시같은색으로바뀌었다.
-390 mobile right/floating/RTL Sheet open에서 Input focus·입력/Escape후trigger focus복귀를확인했다.240px에서 defaultSheet data-side w-3/4가 Sidebar mobilewidth를덮어180px로render됨을 발견했다. Sidebar의 명시폭을!important로 보호하되Sheet max-w-full을유지해288px default/customwidth와좁은viewport clamp를복구한다. 최종재설치 후 viewport240에서는240px clamp,390에서는 기본288px Sheet로 표시됨을 확인했다. [모바일 설치 화면](./artifacts/sidebar-consumer-mobile.png)에서 Input 자동 focus와 Escape 후 trigger focus 복귀도 재확인했다.
- Base Sidebar demo의 popup Radix width변수를Base --anchor-width로맞추고 radiusoverride를제거한다.관련기존style/API만정리하며README/원격게시 없음.


## D012: 실제 전수 화면에서 발견한 컨테이너 축소와 캡처 품질 (2026-10-06)

- Base Input FieldGroup/Grid·InputGroup block-start/end는 inline-size containment가 있는 FieldGroup의 intrinsic 폭이 계산되지 않아 centered flex 소비처에서 입력이 좁은 세로 띠로 줄었다. FieldGroup/FieldSet에 w-full을 명시해 부모 폭과 명시 max-width를 사용하게 한다. docs CSS 우회가 아닌 설치 source 수정이며 입력/label/validation API는 그대로다. 실제 browser에서는 모바일350px 입력과 desktop1360px 가용 폭으로 복구됨을 확인했고 예제는 max-w-sm으로 제한한다. responsive FieldContent가0px로 축소되는 별도 결함도 확인해 horizontal/responsive의 직접 Input/Textarea/SelectTrigger에 flex-1을 적용했다;512px 부모에서 content239/input265px로 각각 표시된다. [수정 후 가로 배치](./artifacts/field-responsive-after.png)를 보존한다. 최종 consumer 재설치 후384px/40px 입력과 실제 입력값 변경도 확인했다.
- Aside fullPage 캡처가 긴 iframe에서 동일 viewport를 반복하는 결함을 확인했다. 긴 페이지는 iframe800px의 실제 child scroll을700px씩 이동하며 보통 viewport 이미지로 다시 캡처한다. 기존 screenshot 크기나 캡처 성공을 시각 검수 완료 근거로 사용하지 않는다. capture와 visual verdict를 따로 기록하며 하단 미검수는 pending으로 둔다.
- About 기본 밝은 직사각형은 semantic UI 표면이 아니라 mainImage/secondaryImage/breakout/companies의 명시 data:image SVG content(#ececec/#d6d6d6)이다. theme 변경으로 사용자가 제공한 media를 강제 recolor하지 않는다. 주변 Card·본문·button은 semantic theme를 따라야 하며 실제 미디어 콘텐츠의 고정색은 역할 예외로 검토한다.


## D013: 전수 검수에서 발견한 예제의 실제 viewport overflow (2026-10-06)

- 수정된 캡처/DOM에서도 Base Carousel RTL은 모바일28px·desktop8px, MessageScroller visibility는 모바일28px, DataTable demo는 모바일108px document overflow가 있었다. 내부 Attachment/Table scroll과 구분한다.
- Carousel RTL은 가운데 정렬과 외부 navigation96px 공간을 확보한다. MessageScroller는36px navigator+12px 간격을 예제의 오른쪽48px gutter 안에 배치한다. DataTable demo root min-w-0만으로는 넘침이 해소되지 않았다. 실제 DOM에서 static button의 absolute sr-only label이 바깥 preview를 containing block으로 삼아 스크롤 범위에서 빠져나온 것을 확인했다. public Table/DataTable의 scroll wrapper를 relative로 바꾸면 같은348px 내부 표에서 document scrollWidth498→390이 된다. label 접근성과 내부 horizontal scroll을 유지한다. 실제 source 예제만 수정하며 docs preview CSS로 감추지 않는다. 최종4모드/240px 재확인과 consumer 예제 동기화를 연결한다.


## D014: 보조 browser 검수 도구 제한의 복구 (2026-10-06)

- Aside의 openai-codex helper는 사용량 제한으로 시작 단계에서 실패했고 default provider로 같은 scope를 이어갔다. 이후 default provider도 명시429/5-hour usage-limit로 모든 worker가 terminal error를 반환했다. 실행 중인 worker를 조용하다는 이유로 중단하지 않았다.
- 성공한538route의 corrected capture와 실제 fresh image review200여 항목은 보존한다. 남은30route와 최신 수정 재캡처·조작은 main의 Aside REPL에서 계속한다. 이미지 검수는 native Codex read-only QA worker4개에 정확한 잔여 목록을 분배하며 workflow gate review나 구현 위임으로 기록하지 않는다. 최종 결과에 pending을 완료로 바꾸지 않고 실제 검수 증거를 합친다.


## D015: 전수 이미지 검수의 실제 레이블 결함 수정 (2026-10-06)

- Radar의 고정250px plot에서 전체 월 이름 February가 plot 경계에서 잘렸다. 월 이름을 줄이거나 clipping을 예외로 처리하지 않고 angle-label recipes의 outerRadius65%, 숫자/월 두 줄 custom-label은55%로 레이블 공간을 확보한다. Radius-axis recipe는 해당 문제가 없어 geometry를 유지한다. custom 숫자는 fill-foreground로 semantic 대비를 복구한다.
- PaginationContent의 여러 줄 wrapping은 justify-center를 명시해 좁은 화면에 홀로 줄바꿈된 Next도 가운데 정렬되게 한다. 기존 Pagination link/aria/API는 유지한다. 새 영구 테스트는 추가하지 않고 기존 회귀·실제4모드 재캡처·consumer 재설치를 수행한다.
- static Questionnaire 캡처의 inversion은 현재 브라우저 demo의 semantic unchecked bg/fg가 올바른 것을 확인했으나 다른 exact-route 완료를 추정하지 않는다. 전체 Questionnaire 최신4모드 캡처와 checked/keyboard live proof로 재판정한다. SVG 축 레이블의 저대비 후보도 실제 computed fill을 확인한 뒤 처리한다.

- 추가 실제 DOM에서는 Questionnaire의 unchecked choice에 light 테마의 background/color/border 인라인 값이 애니메이션 종료 뒤 남았고 제거하면 즉시dark semantic 색으로 복구됐다. 공용 useStyleMotion의 mini 다중-property 완료가 group 완료 전 inline 값을 써 MutationObserver가 이를 caller style로 오인했다. 각 property 완료 즉시 원래 caller style을 복구해 group 완료까지의 race를 막는다. 기존 normal/reduced motion·theme 반복·caller inline/ref 회귀를 확인한다.
- Recharts 현행 tick text는 recharts-cartesian-axis-tick-value class와 새로운 tick-label wrapper를 사용한다. 기존 tick descendant 선택자가 맞지 않아 기본 #666 fill이 dark #1a1a1d 위에 표시됐다. 공용 ChartContainer에 현재 tick-value 선택자를 추가하고 기존 selector도 호환성 위해 유지한다. 수정 전후 실제 computed fill/대비와 영향 recipe 재캡처를 연결한다.

- 완료 callback 복구만으로 해결되지 않아 ref lifecycle을 추가 추적했다. @shadcn/react ref merger는 반환 cleanup을 전달하지 않고 ref(null)을 호출해 기존 hook의 observer/animation이 누적됐다. useStyleMotion이 반환 cleanup과 ref(null) 양쪽을 처리하며 재부착 전 기존 구독을 해제하도록 고쳤다. theme mutation을 여러 오래된 controller가 동시에 처리한 것이 실제 원인이며 per-property 완료 복구는 중간 style 쓰기도 원본으로 즉시 되돌린다.

- 최신 Questionnaire 선택 표식의 hollow 경계가 input border색이라 낮은 대비를 보였다. 기존 RadioGroup/Checkbox와 같은 border-muted-foreground로 marker만 복구해 선택 표면·row border·API를 유지한다. light #737373/white4.74:1, dark semantic muted-foreground/기본 surface의3:1 이상 대비와 checked indicator를 재확인한다.

- Radial label의11px fill-white/mix-blend-luminosity가 dark의 밝은 data series 위에1.5~1.7:1로 표시되는 실제 결함을 확인했다. fill-foreground와3px stroke-card backing을 사용해 label 대비를 semantic 표면으로 확보하고 data series/geometry는 보존한다. Foundations 검수는 origin storage를 공유하므로 해당 검수 중 뒤쪽 캡처에 녹색 surface override가 보였다. source 결함으로 색을 바꾸지 않고 사용자 정의 token이 반영된 관찰로 구분하며 default 검수는 override reset 후 해당 캡처를 다시 확인한다.

- PolarAngleAxis default #808080 텍스트도 semantic muted 역할을 읽지 않았다. 현행 polar-angle-axis-tick-value에 muted-foreground를 연결하며, Polygon 위 radius 숫자는 foreground와 Card backing으로 분리한다. 모든14 Radar를 최종source로4모드 재검수하고 형상 자체는 유지한다.


## D016: 최종 전수 검수·설치·회귀 결과 (2026-10-06)

- 고정498 example+70 chart의568route를 실제390/1440 light/dark 총2272상태에서 모두 검수했다. 초기 Aside actual-child-scroll PASS200항목과 native image 검수368항목은 중복 없이568전체를 덮는다. 수정 후102항목과 후속 Questionnaire/Radar/Radial/Tooltip를 다시 캡처·검수했고 final102 전체PASS다. 해당102항목 밖의 MessageScroller Commands(dev chrome에 가려졌던 도움말)와 Pagination RTL(모바일 줄바꿈 정렬)도 최신4상태를 main이 추가 재검수해 PASS로 확정했다. 남은 시각 finding/uncertainty는0이다. Pattern AdvancedDataTable은 별도 기본preview4상태도 추가 검수했다. 검수 분모와 API/namespace는 보존했다.
- [항목별 검수 결과](./artifacts/audit-results.json)는157source와41docs/install supporting경로·18finding묶음의 수정/유지·consumer witness를 연결한다. [화면 검수 증거](./artifacts/visual-verification.json)는568frozen+1Pattern route별4상태·실제 이미지 해시·판정/근거를 보존한다. 큰 원본 이미지는 일회성 실행 위치에 남기고 필요한 [Radar 수정 전](./artifacts/radar-label-before.png)/[후](./artifacts/radar-label-after.png)와 [Questionnaire 테마 수정 전](./artifacts/questionnaire-theme-before.png)/[후](./artifacts/questionnaire-theme-after.png)를 Feature에 보존한다.
- [상태·설치 검증](./artifacts/interaction-verification.json)에 Sidebar parts/variant/controlled/mobile/RTL·semanticFoundation,31liveQA기록과 명시적인 한계를 남겼다. Contact/EventForm pending/error데이터보존·중복callback차단, code/file선택, canvas키보드, roadmap5view, pricing기간/선택, carousel/videoerror/reset, Questionnaire선택/필수/skip/keyboard/theme반복, overlayEscape/focus, Chart기간/series/tooltip/표, 메시지실제scroll/jump, Preview240/1024·px/keyboardresize/Replay/Code/Source·Foundation실제editor→iframe동기화와원복을확인했다.
- 독립React/Tailwindconsumer에 실제namespace155+추가11직접설치와transitive source/theme tarball을사용했다. strict/Vite build와 Sidebar/Menu/Compare/Field/Charts/Pattern 실제설치UI가PASS다. 최종 Radial label도 docs없이 dark foreground250/stroke26/paintOrderstroke로표시됨을확인했다. fixture전체source import로생긴largechunkwarning은 제품번들성능결론으로사용하지않는다.
- 최종 pnpm run typecheck/lint/test(32files706tests)/build(동일trackedsource·lockfileisolatedsnapshot3workspace)/registry:build와독립consumerbuild가PASS다. 기존motion caller-inline/ref 테스트를cleanup반환을전달하지않는ref조합에확장했고새durable테스트파일은추가하지않았다.
- reduced motion은 Aside의nativeOSpreferenceemulationAPI가없어 독립consumer의mount전matchMediafixture로실제JS분기와runninganimation0을검증하고기존reducedmotion테스트를병행했다. nativeOS/CSSpreference전환은미검증한계다. Clipboard는copy성공UI를확인했지만payloadreadback은하지못했다. Video는nativecontrols/error/reset경로를확인했고외부media재생성공을주장하지않는다. Newsletter는검수source/API가존재하지않아N/A다. 모든한계는제품결함없음과별개로보존한다.
- Foundations 검수의originstorage공유로default캡처에반영된일시적override는원복후실제default로재검수했다. Next/extensionchrome이덮은controls는temporarycapture에서devportal만숨겨source를변경하지않고재검수했다. README/원격게시/배포변경없다.
- 현재 결과는 구현검증 완료이며 Feature완료나main통합을의미하지않는다. taskcheckpoint뒤workflow가반환하는구현승인과별도local merge승인게이트를따른다.
