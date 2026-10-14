# Decisions Log

## D001: primary의 역할을 보존하면서 랜딩에 브랜드를 표현한다 (2026-10-15)

- **Context**: 현재 랜딩 버튼·선택 UI는 중립 primary, 차트도 foreground 색이라 브랜드 토큰이 존재해도 Leement의 색이 거의 보이지 않는다. 사용자는 랜딩 UI에 primary 대신 brand accent를 모두 적용할지 분석을 요청했다.
- **Constraints**: primary는 동작 우선순위이고 brand accent는 색 역할이다. 공유 디자인 시스템은 소비자 앱의 브랜드를 전역 primary에 고정하지 않는다. 랜딩 변경으로 설치한 컴포넌트·다른 문서 Preview의 기본색을 바꾸지 않는다.
- **Options**:
  - 모든 표면·문자·컨트롤을 brand accent로 덮기: 상태와 우선순위를 구분하기 어렵고 본문 가독성을 해친다.
  - 전역 primary를 브랜드색으로 변경하기: 요청 범위를 넘어 모든 예제와 소비자 앱의 기본 동작을 바꾼다.
  - 각 버튼에 임의 색 class 추가하기: Checkbox/Switch/Progress 등 선택 상태와 hover·전경 대응이 누락될 수 있다.
  - **랜딩 범위의 primary/전경을 브랜드 역할로 연결하고 데이터·본문·표면은 각자 역할을 사용하기**: 주요 동작과 선택 상태를 함께 표현하면서 구조·대비를 유지한다.
- **Decision**: 네 번째 방식을 Spec 승인안으로 제안한다. 전역 토큰 변경이나 별도 공개 variant를 추가하지 않는다. 채워진 브랜드 면은 brand.accentForeground와 짝을 이루며 일반 배경 텍스트는 brand.text다. 차트도 중립 foreground 대신 기존 data 역할을 사용한다.
- **Rationale**: 기존 디자인 언어와 설치 API를 보존하면서 랜딩의 브랜드 인상을 강하게 만들 수 있다. BrandAction은 얇은 gradient tint 조합이므로 그것만 추가하면 현재 중립 primary 문제를 해결하지 못한다.
- **Trace**:
  - 분석: packages/tokens/src/tokens.json에서 light accent=violet.400, dark accent=blue.500, 두 모드 accentForeground=neutral.950 및 data 참조를 확인했다. packages/theme/build.mjs의 primary alias는 action.primary이고 registry/ui/button.tsx의 hover는 별도 action.primaryHover를 읽는다. 랜딩 범위의 hover도 함께 맞출 필요가 있다.
  - 승인 전: 제안이며 구현·실측 대비 검증은 아직 수행하지 않았다.
- **Evidence**:
  - **Commit**: 조사 기준 main e821bc7ce5881bda726eb0d875e5e9f09db3182f.
  - **Source**: [tokens.json](../../../../packages/tokens/src/tokens.json), [theme build](../../../../packages/theme/build.mjs), [Button](../../../../registry/ui/button.tsx), [home-examples.tsx](../../../../apps/docs/components/home-examples.tsx).
- **Consequences**: 공용 디자인 문서에 랜딩의 제한된 presentation 적용을 설명하고 공개 source/API와 글로벌 theme는 유지한다. 대비 검증에서 문제가 있으면 먼저 랜딩 전용 전경·hover 대응을 조정하고 글로벌 palette 변경으로 범위를 확장하지 않는다.

## D002: 갤러리를 조작 없는 기울어진 장식으로 전환한다 (2026-10-15)

- **Context**: 사용자는 첨부 이미지의 tilted 배치, 위→아래 fade in, 실제 버튼 조작 차단을 함께 요청했다.
- **Constraints**: 기울기와 진입 이동이 충돌하면 안 된다. 마우스만 차단하면 keyboard와 submit 동작이 남는다. 공유 registry와 문서 Preview는 실제로 조작할 수 있어야 한다.
- **Options**: 개별 카드 랜덤 회전, 단순 평면 grid 회전, 전체 평면의 일관된 대각선 tilt. 비조작 방법은 disabled 일괄 지정, pointer-events만 지정, inert와 장식 접근성 처리 및 실제 handler 제거.
- **Decision**: 전체 갤러리의 일관된 tilt와 카드별 일회성 reveal을 분리한다. 내부는 inert·장식 접근성 처리하고 고정 상태로 바꾼다. 순서는 실제 배치의 위→아래를 기준으로 정의한다. 로고와 타이틀에는 기존 브랜드 자산·Motion 역할을 사용한다.
- **Rationale**: 참조 이미지는 같은 평면 위의 촘촘한 열 배치다. disabled의 흐린 모습 없이 실제 UI 외관을 보존하고 숨겨진 조작도 제거한다.
- **Trace**:
  - 분석: 현재 18개 카드가 5개 열에 배치되어 있고 form 저장·채팅·login·switch·checkbox·slider·link 동작이 존재한다. DOM 순서를 그대로 stagger하면 열 단위로 나타나므로 별도 시각 순서가 필요하다.
  - 승인 전: 구현 각도·밀도와 등장 순서는 브라우저 결과를 참조 이미지와 비교하며 조정한다. SSR 가독성, reduced motion, no-JS를 유지한다.
- **Evidence**:
  - **Commit**: 조사 기준 main e821bc7ce5881bda726eb0d875e5e9f09db3182f.
  - **Reference**: [사용자 제공 tilted 갤러리](./artifacts/tilted-gallery-reference.png). 이미지 내용은 배치 참고 자료이며 별도 지시로 취급하지 않는다.
  - **Source**: [현재 Home](../../../../apps/docs/app/page.tsx), [현재 갤러리](../../../../apps/docs/components/home-examples.tsx), [디자인 시스템](../../designs/design-system.md).
- **Consequences**: PRD-FR-005의 홈 로컬 상호작용·focus 시 fade 제거 규칙을 장식 갤러리 동작으로 갱신해야 한다. 상세 문서·Showcase의 상호작용은 유지한다.

## D003: 보호된 README 캡처 영향은 보류한다 (2026-10-15)

- **Context**: root README 29·32행의 홈 캡처가 기존 랜딩 외관을 보여 준다. 이번 변경 후 실제 홈과 시각적으로 달라질 수 있다.
- **Constraints**: AGENTS.md는 사용자가 README 수정을 명시적으로 요청한 경우에만 기존 README 수정을 허용한다. 이번 요청은 랜딩 변경이다.
- **Options**: README와 README 전용 캡처까지 갱신하거나 랜딩 변경을 구현하면서 README 설명·캡처는 보존한다.
- **Decision**: README 편집과 README 전용 캡처 갱신은 이번 범위에서 보류한다. PRD·디자인 시스템의 현재 홈 동작은 독립적으로 동기화한다.
- **Rationale**: README 보호 정책과 요청 범위를 준수한다. 이 보류는 기능 완료를 막지 않는다.
- **Trace**: 승인 전 README 링크·alt와 전용 캡처 경로를 확인했다. 신규 검증 이미지는 이 Feature의 artifacts에 저장한다.
- **Evidence**:
  - **Commit**: 조사 기준 main e821bc7ce5881bda726eb0d875e5e9f09db3182f.
  - **Source**: [README](../../../../README.md), apps/docs/public/readme-captures/home-light.png, apps/docs/public/readme-captures/home-dark.png.

## D004: 구현 착수와 모션 범위 (2026-10-15)

- **Context/Constraints**: 사용자 A로 Spec 승인. 기존 공유 source는 변경하지 않고 홈 전용 wrapper에서 SSR 가독성과 모션 순서를 유지한다.
- **Decision**: 제목·설명·버튼 블록의 text reveal을 홈 전용 Motion timeline으로 조정한다. 갤러리의 부모에만 정적 tilt, 카드에만 진입 이동을 적용한다.
- **Trace**: DOING 시작 시점 — native inert와 aria-hidden, handler 제거를 함께 적용하고 최초 시각 좌표 순서로 reveal한다. Unreleased의 실제 정본은 apps/docs/lib/releases.ts임을 확인하여 Plan/Tasks target을 정정했다.
- **Evidence**: 조사 기준 commit e821bc7ce5881bda726eb0d875e5e9f09db3182f; 완료 시 실제 캡처·검사 결과를 보강한다.


### D004 검증 확정

- **Decision**: 홈 전용 HomeReveal과 역할 기반 home-brand를 사용했다. 전체 tilt는 desktop -8°, mobile -5°이고 카드마다 실제 transformed rect의 top/left를 측정해 순서를 결정했다. fixed 5열의 overscan은 장식 viewport에서 crop하며 페이지 가로 overflow는 없다. 로고는 1.2초, 텍스트 reveal은 기존 700ms 역할, 카드 stagger는 기존 70ms 역할을 사용한다.
- **Trace / 수정**: 완료된 control을 play하면 재진입 시 재생될 수 있으므로 finished 상태는 play/pause 대상에서 제외했다. dark hover를 accent 90%+전경으로 혼합하면 4.20:1이라 96% 혼합으로 조정했다. 이제 normal/hover 대비는 light 6.55/6.14:1, dark 4.93/4.63:1이다. CTA focus는 진입 중에도 전체 소개를 즉시 표시한다.
- **시간별 관찰**: hydration 뒤 106ms에는 로고만 hero에서 보이고 title/description/actions opacity=0이었다. 523ms에는 title≈0.75, description/actions=0; 723ms에는 description≈0.75, actions=0; 956ms에는 actions≈0.82였다. 1.64초에는 hero 전체 opacity=1, 카드도 위 순서부터 완료되며 전체 18개는 약 1.9초에 완료한다. 재스크롤 후 22개 hero/card opacity가 모두 그대로 1이었다. 8개 viewport/theme 조합에서 카드 순서를 top 좌표와 대조해 위→아래임을 확인했다.
- **조작 검증**: gallery inert=true/aria-hidden=true, programmatic focus 차단, 좌표 클릭·Enter·Space 후 URL 불변. Tab은 Get started→View components→footer로 이동하며 갤러리를 건너뛴다. Get started와 View components의 실제 목적지 이동, 진입 중 focus·Enter 이동을 확인했다. theme toggle light→dark→light는 브랜드색을 보라→파랑→보라로 바꾸고 완료한 모션을 재시작하지 않는다.
- **Fallback/오류**: reduced motion과 JavaScript 비활성에서 h1 및 18개 카드 opacity=1, 실제 CTA 이동 성공. 375/768/1440/1920 light/dark 모두 가로 overflow=false 및 pageerror=0. 현재 mark·registry·theme는 동일 source로 확인했고 public registry/token/theme/Storybook 변경은 없다.
- **검사**: pnpm run build/typecheck/lint/test 모두 exit 0. Vitest 32개 파일/706개 통과. 기존 jsdom native media pause 경고는 테스트 실패가 아니다. 변경 파일에는 새 영구 테스트를 추가하지 않았다.
- **Evidence**: [desktop light](./artifacts/landing-1440-light.png), [desktop dark](./artifacts/landing-1440-dark.png), [mobile light](./artifacts/landing-375-light.png), [mobile dark](./artifacts/landing-375-dark.png), [tablet light](./artifacts/landing-768-light.png), [tablet dark](./artifacts/landing-768-dark.png), [wide light](./artifacts/landing-1920-light.png), [wide dark](./artifacts/landing-1920-dark.png), [reduced motion](./artifacts/landing-reduced.png), [no-JS](./artifacts/landing-no-js.png). 시간별 관찰과 검사 결과는 이 기록이 정본이며 임시 harness/log는 커밋하지 않는다.
- **보조 캡처 처리**: full-page 캡처는 스크롤 키 검사 전에 촬영했다. 스크롤 키 직후 촬영에서는 sticky header의 compositor 위치가 반영되어 이전 캡처를 대체했다. 제품 코드 결함으로 기록하지 않는다.

<!-- lee-spec-kit:workflow-sync sha256:221684c7d00fc5b9db132f6212c4516a8e3608fbf63050cf84d6e1d50e09367d -->

## D005: 사용자 요청으로 brand 색 중복을 제거한다 (2026-10-15)

- **Context / 승인**: 사용자는 brand==primary인 상황에 두 색 계약을 유지할 이유를 질문했고, 외부 소비자가 없으므로 breaking change로 수정하라고 명시했다. 이 요청은 D001의 랜딩 한정 색 연결 결정을 대체한다. 기존 완료 task의 후속 작업은 task 02로 기록한다.
- **Decision**: 전역 action.primary를 브랜드 filled 색 정본으로 두고 primaryForeground/primaryHover/primaryText 및 gradient 역할만 둔다. 별도 color.brand와 색 alias는 완전히 제거한다. focus/data는 용도가 다른 역할이므로 primary 참조를 기본으로 유지한다. BrandLogo/BrandAction/BrandGradientText 및 brand 폰트/모션 이름은 유지한다. 일반 배경 강조 글자는 primaryText를 사용하며 hover도 같은 계열과 충분한 대비를 유지한다.
- **Compatibility**: 구 brand 색 CSS 변수·Tailwind utility·Foundation override는 지원하지 않는다. Unreleased에 변경과 교체 경로를 기록한다. 버전 변경·npm 배포·원격 push는 이번 요청 범위에 없다.
- **README 보호**: 기존 README의 캡처 영향은 D003과 같으며 README 편집 요청이 없으므로 보류한다. 현재 실행 계약은 token/theme와 Foundations·디자인 시스템에 반영한다.
- **Verification**: 기존 theme/Foundation 계약 테스트를 갱신하고 모든 build/typecheck/lint/test, 양쪽 테마 primary/hover/text 대비, Foundation 편집·export·기존 brand 색 거부, 대표 UI와 랜딩 회귀를 확인한다.

### D005 구현 및 검증

- **구현**: color.brand 그룹과 brand-accent utility를 삭제했다. 전역 primary/전경 및 sidebar 전경은 action.primary 계열에서 파생된다. primaryText는 일반 표면의 링크·선택 강조·아이콘, primaryGradientStart/Middle/End는 선택적 효과를 담당한다. focus.ring/data.series1은 primaryText, data.accent/전경은 primary/primaryForeground를 참조한다. home-brand override를 제거해 랜딩·문서 Preview·설치 source가 같은 규칙을 사용한다.
- **대비 조정**: light filled primary를 기존 보라 계열의 OKLCH L=0.65로 조정하고 hover는 L=0.63으로 정했다. 기본/hover 전경 대비는 light 5.62/5.19:1, dark 4.93/4.64:1이다. 일반 강조 글자는 기본 surface에서 light 5.44/dark 9.14:1, muted surface에서 4.99/6.93:1이다. Progress/Switch 등에 쓰는 primary와 muted track의 대비는 light 3.08/dark 3.44:1이다. Calendar의 dark hover 전경 덮어쓰기를 제거하고 Bubble/ImageCrop hover를 명시적 primaryHover로 바꿨다.
- **Foundation**: 두 모드에서 primary/전경/hover/text 편집 후 실제 Button과 focus/data 참조 반영, Copy CSS의 변경값만 포함, 새로고침 유지, Reset 복구를 확인했다. 저장된 구 brand 색은 무시하고 브랜드 서체 설정은 보존한다. 검수 harness의 첫 export 단언은 dark에서 기본값과 같은 전경도 export해야 한다고 잘못 가정하여 수정했다. 제품 동작은 변경값만 export하는 기존 계약대로 정상이다.
- **랜딩 회귀**: 375/768/1440/1920 light/dark 전부 18개 카드·inert·가로 overflow 없음·pageerror 없음. Gallery 클릭/Enter/Space로 이동하지 않으며 Tab은 갤러리를 건너뛴다. 실제 CTA·진입 중 focus/Enter·theme 전환 정상, 완료한 모션 재시작 없음. reduced motion/no-JS도 즉시 표시하고 실제 CTA가 동작한다. 기존 artifacts 캡처를 전역 primary 적용 화면으로 갱신했다.
- **계약 검사**: pnpm run build/typecheck/lint/test 모두 exit 0, 32개 파일/706개 테스트 통과. theme/Foundation 기존 테스트를 새 역할과 제거된 필드 거부에 맞춰 갱신했다. 생성 theme/token/registry 출력 검색에서 구 brand 색 변수·utility의 실행 참조가 없다. 기존 릴리스 설명과 완료 Feature의 이력은 당시 계약을 설명하므로 그대로 두었다.

- **대표 public UI**: 두 모드의 Button 기본/hover, Checkbox·Switch 클릭 전환, Slider·Progress, FilterToolbar 선택, DayPicker range endpoint hover를 확인했다. selected day는 hover에서도 primaryForeground를 유지하고 public Preview의 실제 조작은 정상이다. 첫 harness에서 FilterToolbar의 초기 상태를 selected로 가정한 조회는 실제 초기 false와 달라 타임아웃이 났으며, 정상 초기 상태에서 클릭·선택 전환을 확인하는 방식으로 검수를 정정했다.

## D006: primary 위 흰색·검은색 글자 비교 자료 (2026-10-15)

- **요청/범위**: 현재 primary 위의 흰색·검은색 텍스트를 비교할 자료를 요청했다. 분석용 artifact이며 제품 색 변경이나 추가 구현 task를 뜻하지 않는다.
- **자료**: [비교 화면](./artifacts/primary-foreground-comparison.png), [인터랙티브 비교 HTML](./artifacts/primary-foreground-comparison.html). 실제 light/dark primary·hover·전경 값을 tokens.json에서 가져왔고 동일 크기·굵기의 버튼·배지·문구를 나란히 배치했다. 검정은 실제 #111113, 흰색은 #ffffff다. 보라 밝기 조절·현재 값 복구와 테마 선택을 제공한다.
- **관찰/제안**: light 기본/hover에서 실제 검정은 약 5.62/5.19:1, 흰색은 3.35/3.63:1이다. dark 기본/hover는 검정 4.93/4.64:1, 흰색 3.83/4.07:1이다. 현재 배경을 유지한다면 검정을 권한다. 흰색을 원하면 light의 같은 보라 계열 L=0.55 예시에서 기본 5.04:1·hover L=0.53에서 5.50:1이 되며 전경과 배경을 함께 변경해야 한다. 제안 색은 제품에 적용하지 않았다.
- **기준/검증**: W3C WCAG 2.2 Contrast Minimum의 일반 텍스트 AA 4.5:1 기준을 사용한다. https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html . 수치는 브라우저 sRGB 변환 기반 근삿값이다. 테마 전환·슬라이더·reset·모바일 375px overflow 없음·pageerror 없음 및 실제 PNG 렌더를 확인했다.
