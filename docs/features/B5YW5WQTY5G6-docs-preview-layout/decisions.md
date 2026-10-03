# Decisions Log

## D001: 공통 표시 영역의 책임부터 수정한다 (2026-10-03)

- **Context**: 사용자가 Showcase 반복 표면, 내부 여백 누락, Adoption의 다른 여백, 세로선만 있는 Preview를 지적했다.
- **Constraints**: 하나의 Feature로 진행한다. 구현은 Spec 승인 및 Plan/Tasks 준비 후 허용된 단계에서 한다. 기존 registry source와 API, semantic token을 유지한다.
- **Options**: 예제 85개에 각각 padding을 넣기 / 공통 프리뷰에서 기본 inset을 제공하고 실제 내부 문제에만 개별 수정하기.
- **Decision**: 공통 표시 영역에서 inset을 보장하고, 전수 조사로 확인한 각 예제의 폭·내용·내부 배치 문제는 해당 예제 또는 컴포넌트의 책임 위치에서 수정하는 방향을 명세에 제안한다.
- **Rationale**: 중복 padding과 표시 위치에 따른 규칙 차이를 줄이고 소비자 컴포넌트에 문서 전용 여백을 강제하지 않는다.
- **Trace**:
  - `showcase-gallery.tsx`: 바깥 항목에 border/shadow, 내부 프리뷰에 border, footer에 border-top이 중첩된다. 프리뷰 wrapper에 padding이 없다.
  - `previews.tsx`: 공통 Preview는 full-width flex이고 자체 inset이 없다. TextReveal/RotatingContent처럼 w-full인 예제는 바깥 표시 표면에 붙을 수 있다. 모든 85개 wrapper가 0px인 사실은 모든 예제 내부가 잘못됐다는 뜻은 아니다.
  - `app/layout.tsx`: main이 이미 px-5/sm:px-8/lg:px-12 및 py-10/lg:py-12를 제공한다. `app/adoption/page.tsx`는 그 안에서 main/px-6/py-12를 다시 넣는다.
  - `app/globals.css`: docs-preview-stage의 ::before는 inset 0 5%, border-inline만 쓴다. ItemWorkbench의 실제 콘텐츠 padding은 20/40px이므로 점선 기준과 서로 독립적이다.
  - 2026-10-03 배포 화면의 Chrome DOM 측정(1440×1000): Getting Started h1 x=304, Adoption h1 x=328. main 개수는 각각 1/2. Adoption의 24px 추가 inset을 확인했다. 두 제목의 y=137/189는 중복 padding과 서로 다른 제목 구성의 합이며 정확히 동일한 y를 강제하는 근거로 쓰지 않는다.
  - Showcase는 85개(UI 64 / Pattern 13 / Block 8) 항목을 렌더링하며, 모든 항목의 표시 wrapper padding이 0px임을 확인했다. 전체 항목별 실제 밀착/overflow 판정은 구현 태스크에서 기록한다.
  - RotatingContent 상세: stage padding=40px, 점선 inset 좌우 약 42.39px, border-block=0px, border-inline=1px. 장식과 내용의 기준이 다른 상태를 확인했다.
  - Aside profile 미연결로 기존 설치 Playwright와 로컬 Chrome을 사용해 배포 URL을 읽기 전용으로 확인했다.
- **Evidence**:
  - 기준 커밋: `84f37351f8b0414f87bc5de7f3f84ac439a1ab69`.
  - [Showcase 목표](./artifacts/reference-showcase.png), [TextReveal 문제](./artifacts/current-text-reveal.png), [현재 점선](./artifacts/current-preview-guides.png), [목표 점선](./artifacts/reference-preview-guides.png).
  - 재현: `/showcase`, `/adoption`, `/getting-started`, `/components/rotating-content`, `/components/text-reveal`.
- **Consequences**: 구현에서 PRD-FR-005의 문서 여백·프리뷰 표현을 구체화하고 docs/designs/design-system.md의 문서 표시 규칙과 동기화한다. 기존 README의 시각 캡처는 사용자의 README 수정 요청이 없으므로 이번 범위에서 갱신하지 않는다.


## D002: 표시 프레임을 공유하고 장식선과 콘텐츠 inset을 통일한다 (2026-10-03)

- **Context/Constraints**: T-01 시작. 기존 문서 프레임에서 border 중첩과 0px inset을 확인했다. token 값과 component API는 그대로 둔다.
- **Decision**: PreviewFrame의 상세 20/40px, gallery 16/24px inset을 같은 CSS 변수로 장식선과 콘텐츠에 적용한다. 바깥 항목은 bg-muted와 20/24px 여백을 사용한다.
- **Trace**: 사용자 이미지의 표면 계층과 점선 교차 형태를 공통 표시 코드에서 표현하며 각 예제의 내부 문제는 T-03에서 별도 확인한다.
- **Evidence**: apps/docs/components/preview-frame.tsx, apps/docs/app/globals.css; 화면 확인은 T-01 완료 전 기록한다.

T-01 확인: 1440px light Showcase 85개 프레임에서 24px padding, RotatingContent 상세에서 40px padding과 가로/세로 1px 점선을 확인했다. 두 route 모두 document overflow가 없고 대표 screenshot을 직접 확인했다. 변경 4개 component 파일의 eslint 통과. 전체 개별 판정은 T-03에서 수행한다.


## D003: 페이지의 바깥 inset은 RootLayout이 소유한다 (2026-10-03)

- **Context/Constraints**: T-02 시작. Adoption의 중복 main과 24px/48px 추가 여백을 확인했다. 홈과 좁은 본문/목차의 의도는 유지한다.
- **Decision**: Adoption을 padding 없는 article로 바꾸고 나머지 route의 source와 main/inset geometry를 확인한다.
- **Trace**: 다른 route는 article/div 또는 ItemPage를 사용하고 RootLayout의 바깥 여백을 상속한다. 실제 route별 측정은 태스크 완료 전 기록한다.
- **Evidence**: apps/docs/app/adoption/page.tsx 및 RootLayout, T-02 브라우저 확인 결과.

T-02 확인: 전체 route template source를 조사했고 14개 대표 경로를 390/1440px에서 측정했다. 모든 페이지의 main 개수=1, route wrapper padding-left=0, document overflow=false. Adoption 제목 x는 390px에서20, 1440px에서304로 공통 scaffold와 일치한다. 홈의 넓은 레이아웃은 유지된다. Adoption eslint 통과. 동일 template의 85개 상세 경로는 T-03 전수 matrix에서도 확인한다.


## D004: 카탈로그 전체를 source와 실제 프레임 측정으로 대조한다 (2026-10-03)

- **Context/Constraints**: T-03 시작. 좁아진 gallery 콘텐츠 폭에서 고정폭/flex 조합의 문제 가능성을 확인했다. 새 테스트 인프라는 추가하지 않는다.
- **Decision**: 85개 예제를 source 검토 및 390/1024/1440px × light/dark의 Showcase/상세 측정으로 확인한다. 내부 스크롤, marquee mask, dialog 포털 등 의도적 clipping과 실제 경계 위반을 구분한다.
- **Trace**: 읽기 전용 source 조사도 별도 worker에 위임했다. 일회 브라우저 측정은 /tmp에서 실행하며 최종 결과를 이 Feature artifacts에 보존한다.
- **Evidence**: 전수 조사 결과와 대표 screenshot은 태스크 완료 전 추가한다.

T-03 중간 조사: 전체 85개 × Showcase/상세 × 세 폭 × 두 테마=1020개 프리뷰 측정에서 mobile gallery MiniCalendar의 다음 주 버튼이 콘텐츠 오른쪽을29px 넘었다. 공개 MiniCalendar의 날짜 그룹에 min-w-0/flex-1, 날짜 버튼에 축소 가능한 flex를 적용하여 일주일과 탐색 버튼을 같은 가용 폭 안에 유지한다. 기존 API 및 방향키 handler는 그대로다.

T-03 source 조사 완료: 별도 읽기 전용 worker가 85개 예제 및 해당 registry 배치 source를 모두 확인했다. 추가로 Date picker의 고정 36px×7 열, SettingsSection 저장 버튼/상태의 nowrap, 긴 Tags/Dropzone 파일명/저장한 Dialog 이름/DialogStack review 값의 줄바꿈 누락을 찾았다. 날짜 셀은 높이를 유지하고 가용 폭으로 축소하며, 실제 registry 입력 결과는 내부 줄바꿈을 허용한다. 예제 전용 저장/상태 배치는 예제에서만 수정한다. 표·타임라인·보드·코드·editor toolbar 등의 의도적 내부 스크롤과 marquee mask, portalled overlay는 예외로 유지한다.

T-03 화면 확인: SettingsSection 저장 행의 잘림을 해결한 뒤에도 1440px gallery의 약440px 영역에서 FormSection의 viewport 기준 2단 배치가 유지되어 입력 영역이 과도하게 좁았다. FormSection은 section을 container로 하고 내부 grid를 40rem 이상에서만 2단으로 전환한다. 제목/description/children의 API와 14rem label column은 유지하며 실제 영역이 좁으면 세로 배치한다. CreditCard 앞/뒤는 390px에서 내용과21px 하단 여백을 유지하며 Slider의 vertical root/control도160px로 일치해 변경하지 않았다.

T-03 최종 확인: [catalog-audit.json](./artifacts/catalog-audit.json)에85개 판정,1020개 geometry 요약,62개 상태/조작 확인과22개 static-route 측정을 보존했다. 상세85개 route도 같은 matrix에서 main=1, 중복 inset=0, document overflow=false였다. Light/dark override는 provider hydration 완료 후 적용하고 실제 mode를 확인했다. Sandpack의 지속 네트워크 요청 때문에 networkidle을 readiness로 쓸 수 없어 문서 provider의 hydration 완료 표식을 기준으로 측정했다.

- Source 조사와 대표 screenshot 확인을 결합했고 문제8개 항목을 수정했다. 실제 registry JSON5개(MiniCalendar/Calendar/Tags/Dropzone/FormSection)의 최신 source 제공을 확인했다.
- 기존 typecheck/lint/test/build가 모두 통과했다.14개 test file의93개 test가 통과하며 jsdom의 media pause 미구현 로그는 기존 환경의 출력이다.
- Tabs는 Base UI의 기존 manual activation을 보존한다. 방향키로 focus를 이동하고 Enter로 선택한다. Code/Source에는 프레임 점선이 없다. Popup/Tooltip은 포털로 프레임 밖에 표시되고 Escape 및 trigger focus 복귀가 동작한다.
- Tokens/theme 값과 설치 metadata/API는 변경하지 않았다. 공개 registry5개의 반응형/줄바꿈 CSS는 변경되어 소비자에게도 전달된다.
- [Showcase](./artifacts/showcase-desktop.png), [Preview](./artifacts/preview-text-reveal.png), [dark Preview](./artifacts/preview-text-reveal-dark.png), [Adoption](./artifacts/adoption-desktop.png), [SettingsSection](./artifacts/fixed-settings-section-desktop.png), [MiniCalendar](./artifacts/fixed-mini-calendar-mobile.png), [Date picker](./artifacts/fixed-calendar-mobile.png), [Tags](./artifacts/fixed-tags-mobile.png)를 직접 확인했다.
- 잔여 한계: 전체1020개는 geometry 검증이며 각 조합의 pixel diff가 아니다. 의도적 내부 스크롤/동적 외부 Sandpack pane 및 portal은 각각의 표시 책임을 유지한다. 공통 surface와 focus ring의 token 값은 그대로다.


## D005: Docs의 표면을 통일하고 페이지별 읽기 구조를 유지한다 (2026-10-03)

- **Context**: 구현 승인 대기 중 사용자가 Docs 전체를 Showcase와 같은 UI 규칙으로 정리할지 의견을 요청했다. muted 외부 구획/독립 내부 표면/공통 간격과 페이지별 배치 유지 제안에 `ㄱㄱ`로 진행을 승인했다.
- **Decision**: 같은 Feature에 T-04를 추가한다. Overview, Installation, Adoption, 여섯 Foundations, Changelog의 Docs 전용 표면을 정리한다. 타일 그리드는 비교할 샘플에 사용하고 긴 문서는 순서대로 읽게 한다. Component/Block/Pattern detail·registry 및 공용 PreviewFrame/workbench는 추가 작업에서 변경하지 않는다.
- **Trace**: DocsNavigation의 Overview는 `/`이다. 홈의 hero/넓은 scaffold를 유지하면서 소개 구획과 sample 바깥 표면을 정리한다. FoundationEditor는 편집·실제 샘플·복사 wrapper만 변경하고 실제 registry component는 유지한다.
- **Verification**: Docs11 routes의 세 폭/두 테마, picker/editor/CSS copy/reset/목차/adoption 조작, 기존 featureChecks와 afc634e 대비 제외 경로의 무변경을 검증한다. README는 이번에도 요청 범위에 없다.

T-04 구현: Docs 전용7개 source 파일의 wrapper를 정리했다. FoundationEditor의 입력 구획은 muted 배경/white 입력 그룹, 샘플은 muted 바깥 구획/독립 background 표면, 복사 영역은 같은 padding을 사용한다. Adoption의 예제 wrapper는 문서 section으로 변경하고 실제 제어 source를 유지한다. Installation의 기존 prose CSS가 Tailwind보다 우선해 코드 border/background를 덮는 것을 실제 screenshot에서 확인했으므로 해당 페이지를 로컬 Tailwind 스타일로 표현하여 다른 경로의 CSS에 영향을 주지 않는다.

T-04 추가 확인: actual preview 내부 bounds 검사는1024px Motion의 Pause accent 버튼 넘침을 발견했다. FoundationEditor는 자신의 폭52rem 이상에서만2단으로 전환하며 field grid도 같은 container 기준을 사용한다. 기존 example/registry를 수정하지 않고 좁은 Docs 샘플 영역의 가용 폭을 확보한다. Light muted 표면(#f5f5f5) 위 muted text(#737373)는 약4.35:1이므로 새 Docs 구획의 긴 설명에는 기본 foreground를 사용한다. 테마 토큰 자체와 기존 Showcase/상세 페이지는 그대로다.

T-04 최종 검증: [docs-surface-audit.json](./artifacts/docs-surface-audit.json)에 Docs66개 화면, 실제 Foundation preview18개 내부 bounds,8개 picker/edit/copy/reset/TOC/adoption/설치 검사 결과를 보존했다. Typecheck/lint/test/build 모두 통과했고 기존93개 테스트도 통과했다. 제외 경로의 afc634e 대비 diff는 비어 있다. Desktop/mobile/dark 대표 screenshot을 직접 확인했다. 현재 Feature의 구현 승인과 별도 병합 승인은 계속 대기 중이다.

<!-- lee-spec-kit:workflow-sync sha256:29c1b1d0744badd445d98b7846323b509f73fbc8b710c8d0851525eb3f2aace7 -->
