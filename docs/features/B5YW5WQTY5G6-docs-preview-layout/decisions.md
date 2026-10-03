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

<!-- lee-spec-kit:workflow-sync sha256:a90bec65ef746118f2eab72419496d74a921e916364c99191be484327418b594 -->
