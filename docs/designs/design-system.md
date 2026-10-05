---
lee-spec-kit:
  kind: design-system
  scope: project
---

# Leement design system

## 원칙

디자인 언어가 의도를 설명하고 `packages/tokens/src/tokens.json`이 값을 정의한다. `packages/theme/dist/index.css`는 생성 결과이며 직접 편집하지 않는다. `--lm-*` 변수가 원본이고 `--background` 등 shadcn 이름은 호환 alias다. 컴포넌트 source의 class에는 의미 기반 이름을 사용한다.

## 출처와 테마

CopySinger를 먼저 만들고 이를 바탕으로 Leesfield를 CopySinger의 다크 모드처럼 만들려 한 의도가 출발점이다. Leement는 두 제품의 숫자를 복제하거나 평균 내지 않고 하나의 semantic 역할 집합에 light/dark 값을 배정한다. 두 앱에서 공통 source/API를 쓸 수 있는지, 본문 가독성·상태 대비·사용 맥락이 일관적인지를 우선한다. 제품별 브랜드·도메인 표현은 앱에 남긴다. light는 밝은 중립 표면과 진한 본문, dark는 `#111113` 배경 위에 `#1a1a1d` 기본 표면과 `#242427` 떠 있는 표면을 쓴다. dark는 `[data-lm-theme="dark"]` 또는 기존 앱의 `.dark`로 선택한다. 숫자·픽셀 단위의 원본 일치 여부는 성공 기준이 아니며 두 앱의 공통22개 설치/렌더와 대표 사용처의 격리 적용 검증은 Feature GMA8H5L3TLTY에 기록되어 있다. 원본 앱 전체 교체를 의미하지 않는다.

기존 Tailwind 앱에 도입할 때 CSS에서는 `@leement/theme`을 Tailwind 다음, `shadcn/tailwind.css`보다 앞에 import한다. 기존 앱이 같은 `--background`, `--primary` 등의 alias를 다시 정의한다면 뒤의 값이 Leement 호환 alias를 덮을 수 있다. 작은 영역에 `data-lm-theme="light"` 또는 `"dark"`를 부여해 공통 source와 의미 토큰을 먼저 확인하고, 전면 도입할 때 중복 alias를 정리한다. 제품 전용 wrapper는 도메인 동작·현지화와 이전 API 매핑을 맡되 Leement component source를 복제하거나 제품별로 fork하지 않는다. 예를 들어 기존 Button `default`를 Leement `primary`로, 앱의 `isLoading`/`loadingText`를 Leement `loading` 및 자식 텍스트로 연결할 수 있다. `data-accent-foreground`는 채워진 데이터 강조 표면 위의 전경색이므로 일반 카드 위 텍스트로 사용하지 않는다.

## 토큰 규칙

- Color: background, surface, foreground, border, action, brand, focus, status(success/warning), data accent 역할로 사용한다. `neutral`, `blue` 등 palette 이름은 primitive에서만 사용한다. 기본 light의 보라 계열과 dark의 파랑 계열은 CopySinger/Leesfield의 브랜드 참고값이며 Leement의 필수 정체성이 아니다. 앱의 브랜드색을 전역 primary로 흡수하지 않고 모드별 브랜드 역할로 재정의한다. 상태에는 색상과 텍스트를 함께 사용한다.

`background.subtle`은 페이지 배경의 낮은 단계이고 `surface.muted`는 컨트롤 hover, Tabs list, Skeleton, Progress track처럼 표면과 분리되어 보여야 하는 영역이다. CopySinger의 밝은 `--muted`와 Leesfield의 어두운 `--muted`를 참고해 light는 `#f5f5f5`, dark는 `#303033`으로 둔다. shadcn 호환 `--muted`는 `surface.muted`에서만 파생하며, 이 값을 page background로 대신 사용하지 않는다.

### 브랜드 역할

`--lm-color-brand-accent`와 `--lm-color-brand-accent-foreground`는 데이터 강조 표면과 그 위의 전경, `--lm-color-brand-text`는 보통 배경 위에 직접 놓는 작은 브랜드 문구와 선택된 필터의 텍스트, `--lm-color-brand-focus`는 키보드 포커스 링을 정한다. 채워진 강조 표면의 전경을 일반 배경의 글자색으로 재사용하지 않는다. `--lm-color-brand-gradient-start/middle/end`는 강조 텍스트와 선택적 브랜드 Skeleton이 공유한다. `--lm-color-data-accent`와 `--lm-color-focus-ring`은 각각 브랜드 역할을 참조하므로 앱이 `@leement/theme` import 뒤에 브랜드 변수만 덮어쓰면 관련 컴포넌트가 함께 바뀐다. `brand.text`도 앱이 두 모드에서 각각 정해야 한다. 사용 예제는 docs의 Foundations → Color에 두며, 각 앱에서 focus 가시성·텍스트 대비를 확인한다.

CopySinger의 gradient text·음성 파형·오디오 로딩은 violet/blue/pink 조합을 사용한다. Leesfield는 blue/highlight 조합을 gradient text·앱 Skeleton·선택 상태에 사용한다. 양쪽 기본 Skeleton은 중립 `bg-muted`이므로 Leement도 기본 `Skeleton`은 중립이고 `variant="brand"`는 제품 정체성이 도움이 되는 로딩 구간에만 쓴다. `BrandGradientText`는 짧은 제품 문구에만 사용한다. 반복 움직임은 `prefers-reduced-motion: reduce`에서 멈춘다.
- Typography: 본문·컨트롤은 Pretendard Variable, 브랜드 워드마크는 Paperlogy Bold(700), 코드·설치 명령·단축키는 D2Coding Regular(400)/Bold(700)를 기본으로 한다. 한글 폭은 영문 두 칸이며 일반 UI 본문은 Pretendard 역할을 유지한다. 읽기 쉬운 14–16px 본문, 18–24px 제목을 사용한다. `@leement/theme` import에 기본 WOFF2 자산의 font-face가 포함되고 외부 CDN에 의존하지 않는다. `--lm-typography-family-sans`, `--lm-typography-family-brand`, `--lm-typography-family-mono`를 별도로 재정의할 수 있으며 `font-sans`, `font-brand`, `font-mono`는 해당 Leement 변수에서 파생된다. D2Coding은 공식 v1.4.0 standard TTF의 lossless WOFF2와 라이선스/고정 revision/해시를 함께 포함한다. 커스텀 파일은 앱이 font-face 또는 자체 로더로 제공한다. 기본 폰트는 `font-display: swap`과 readable fallback을 쓰고 OFL 라이선스를 코드 MIT와 구분해 배포한다.
- Spacing: 4px 리듬. 기본 control은 40px, 작은 것은 36px, 큰 것은 44px이다.
- Radius: 컨트롤 8px, Card 12px, Badge는 full. 두 원본의 Card는 약 10px이고 이전 Leement 값은 16px이었다. 12px은 공통 표면의 선택값이며 원본 수치 복제 기준이 아니다. 표면의 계층을 반경만으로 나타내지 않는다.
- Shadow: 기본 Card와 Input에는 border를 쓰고 기본 shadow를 넣지 않는다. Popover/Dialog 같은 떠 있는 계층에서만 필요한 경우 shadow를 사용한다.
- Motion: fast/normal/slow 120/180/260ms는 짧은 제어 반응이다. reveal 700ms는 양쪽 텍스트 등장 720ms와 기존 Reveal 700ms를 하나의 진입 역할로 정리한 값이다. expand 400ms는 Leesfield 결과 펼침, media 400ms는 CopySinger 파형의 360ms opacity/420ms transform과 이미지 fade를 공통 전환으로 정리한다. 순차 간격은 기존 Reveal 70ms를 쓰고 원본 텍스트의 62/96ms와 다른 점을 명시한다. reveal easing은 양쪽에서 사용한 cubic-bezier(0.22,1,0.36,1)이다.
- 브랜드 text/surface cycle 1500/3500ms는 Leesfield의 반복 근거이고 rotate 1800ms는 제목 슬롯 근거다. 반복 주기는 제어 반응 시간과 별개다. `--lm-motion-*`가 Motion 실행의 기본값이며 명시적 component prop이 우선한다. reduced motion은 prop보다 우선해 duration/delay를 0으로, 반복 자체는 none으로 만든다. cycle을 0ms 무한 반복으로 만들지 않는다.
- Collapsible의 높이 측정/클리핑 panel은 padding과 border를 직접 갖지 않는다. 패딩·border·열릴 때의 간격은 내부 box에 배치하여 닫힌 높이가 0이고 전환 끝에 auto 높이로 바뀌어도 jump가 없도록 한다. 바깥 space-y/gap을 동적으로 생기는 panel에 적용해 시작/제거 순간의 간격 점프를 만들지 않는다.
- 초기 SSR/첫 렌더는 읽을 수 있는 상태를 유지하고 hydration 뒤 장식 진입만 준비한다. 자동 반복은 이름 붙은 pause 제어, 비활성 문서·화면 밖 정지와 unmount 정리를 제공한다. 일반 Skeleton은 중립이다. 브랜드 장식은 짧은 문구·선택적 로딩·주요 action에만 사용하고 핵심 조작을 지연시키지 않는다.

### 브랜드 로고 조합

BrandLogo pattern은 앱이 제공한 mark와 name을 아이콘+워드마크로 조합한다. full은 장식 mark와 visible name, icon은 제품 이름을 가진 image 역할이다. 라우팅은 외부 anchor/Link가 담당하고 focus-visible을 유지한다. sm/md/lg는 32/40/48px mark와 18/20/24px 글자, 8/10/12px 간격을 사용한다. 워드마크는 font-brand와 700 굵기, -0.03em tracking을 기본으로 하고 본문 family와 독립적이다. 두 앱에서 반복된 조합이므로 초기 maturity는 candidate다. Leement 자체 SVG의 보라·파랑은 브랜드 자산이며 소비자 로고나 범용 UI의 필수 색이 아니다. docs 헤더와 예제는 registry pattern을 그대로 사용하고 favicon은 같은 SVG 자산을 읽는다.

## 컴포넌트와 상태

Button의 action variant는 primary, secondary, outline, ghost, destructive만 둔다. 한 화면에서 primary action은 우선순위가 명확해야 한다. destructive는 의미색의 연한 표면으로 강조하고 텍스트로 위험을 설명한다. xs(32px), sm(36px), default(40px), lg(44px)를 쓰며 icon 계열은 아이콘만 있을 때 접근 가능한 이름을 지정한다. loading은 `aria-busy`와 disabled를 동반한다. 메뉴를 여는 secondary/outline/ghost Button은 `aria-expanded` 동안 hover와 같은 표면을 유지한다. Input은 모바일 입력 확대를 피하도록 16px 문자를 쓰고 데스크톱에서는 14px을 쓴다. Input, Textarea, Select의 입력 면은 light에서 흰색, dark에서 기본 surface 색을 쓰며 기본 그림자를 넣지 않는다. 파일 Input의 선택 버튼도 주변 입력과 같은 전경색을 쓴다. Input과 Textarea의 오류는 `aria-invalid` 및 외부 설명 텍스트와 함께 제공한다. Card는 20px 기본 inset, 16px 작은 inset과 CardAction을 제공한다. Card 내부 간격도 같은 20/16px 리듬을 쓰고 맨 앞 이미지가 있으면 상단 여백을 없애며 카드 모서리에서 자른다. Footer가 있으면 카드의 아래 여백 대신 낮은 강조 표면과 상단 border로 내용과 분리한다. Badge는 20px 높이의 짧은 메타데이터다. Switch의 켜짐/꺼짐 track과 thumb는 두 테마에서 서로 구별되도록 primary와 muted 역할로 색을 나눈다. Label은 native label 연결을 유지한다. Select/Switch/Tabs의 옵션 이동, 상태 전환, 패널 관계는 Base UI에 맡기고 시각 상태는 Leement token을 사용한다. Tabs의 `segmented` list는 전체 폭의 동등한 보기(Code/Preview 등)에 쓰고, docs workbench도 공개 registry Tabs source를 사용한다. 선택 표면만으로 상태를 구분하지 않고 `muted-foreground` 경계로 인접 표면 대비 3:1 이상을 확보한다. focus-visible과 선택 상태를 따로 유지하며 default/line 변형은 좁은 탭 또는 밑줄 탐색에 쓴다. Dialog와 Tooltip의 초점 및 키보드 처리는 Radix에 맡긴다.

CopySinger/Leesfield의 Button `default`는 Leement `primary`에 대응한다. 기존 `link` variant는 의미상 navigation이면 native anchor로, action이면 ghost Button으로 옮긴다. Select의 기존 32/28px 트리거는 기본 40/36px 공통 컨트롤 높이에 맞춘다. Switch는 역할상 좁은 36×20px 또는 28×16px 트랙을 쓴다. 두 제품의 컴포넌트 소스가 제공한 API와 다른 부분은 설치 후 소비자 소스에서 수정할 수 있으며, 앱 고유 스타일은 앱에서 유지한다.

Overlay는 `bg-popover`와 `text-popover-foreground`를 공통 표면으로 사용하고 border 및 필요한 shadow로 떠 있는 계층을 표시한다. Dropdown Menu의 destructive item은 연한 danger 강조를 쓰며 keyboard highlight와 disabled 상태를 구분한다. Popover는 짧은 맥락, Sheet는 가장자리에 붙는 상세 작업, Dialog는 집중된 modal 작업에 쓴다. 각 Trigger는 접근 가능한 이름, Dialog/Sheet는 Title, Tooltip은 보조 정보와 독립된 제어 이름을 갖는다. Dialog/Tooltip은 Radix, Dropdown Menu/Popover/Sheet는 Base UI의 focus·Escape 동작을 유지한다. 제품의 현지화된 close 이름은 소비자 소스에서 기본 close를 숨기고 조합한다.

로딩은 Skeleton과 영역의 `aria-busy`/상태 텍스트를 함께 제공한다. 기본 Skeleton은 `surface.muted`로 빈 구조를 읽을 수 있게 하고 브랜드 gradient는 제품 정체성이 필요한 로딩 구간에만 쓴다. PageSkeleton의 행 구분선은 기본 border를 쓴다. 짧은 피드백은 StatusNotice, 페이지·영역의 결과와 다음 행동은 StatePanel로 표현한다. success/warning/danger는 semantic token과 의미를 전달하는 텍스트를 함께 쓴다. Status의 성공·경고 점에는 연한 배경색이 아니라 각 상태의 전경색을 쓰고 라벨을 반드시 보인다. Chart의 시리즈색은 `--lm-color-data-accent` 같은 semantic 변수로 지정하며 정확한 수치는 텍스트·표로도 제공한다. BentoGrid와 ProductPageIntro는 제품 구조를 표현하며 제품별 카피·이미지는 소비자 코드가 넣는다. ResourceRowLink는 native anchor를 기본으로 하여 React 라우터에 묶이지 않는다. RevealContent는 기존 두 제품의 진입 모션 변형을 보존하되 핵심 조작을 지연시키지 않고 reduced motion/no-script에서 바로 보이게 한다.

서버에서 처음 그리는 UI와 브라우저의 첫 렌더는 같은 상태여야 한다. 사용자 motion 선호처럼 브라우저에서만 확인할 수 있는 값으로 초기 DOM/inline style을 바꾸지 않고, reduced motion의 즉시 표시에는 CSS media query를 사용한다. ImageCrop은 서버에서 원본 이미지를 먼저 보여 주고 hydration 후 crop 조절기를 붙인다. 이 규칙은 초기 화면 가독성과 React hydration 일치를 함께 지킨다.

Spinner는 기본 회전형을 우선한다. Kibo의 여러 로딩 형태에 대응하는 throbber, pinwheel, circle-filled, ellipsis, ring, bars, infinite를 추가 선택지로 제공하되, 한 화면에서는 로딩의 의미보다 모양이 앞서지 않게 한두 형태로 통일한다. 크기(`sm`/`md`/`lg`)와 접근 가능한 `label`은 모양과 독립적이다. Status는 기본 `label`/`tone` API를 유지하고, 객체의 현재 상태를 더 세밀하게 보여야 할 때 `StatusIndicator`와 `StatusLabel`을 조합한다. `pulse`는 실시간 연결 상태처럼 실제 갱신을 암시할 때만 사용한다. 상태 이름은 Kibo의 서비스 가동률 용어에 고정하지 않고 제품이 소유하며 neutral/success/warning/danger semantic 역할을 사용한다. 모든 반복 애니메이션은 reduced motion에서 멈춘다.

Progress와 Slider는 Base UI의 값·키보드 의미를 보존하고 `primary`/`muted` 의미색을 사용한다. Slider의 thumb는 16px이지만 제어 가능 영역을 넓히며, 한 값이 기본이다. Range는 명시적인 두 값 배열을 전달한다. Slider의 가로·세로 레이아웃은 Base UI의 `data-orientation`을 기준으로 적용하며, 세로형은 부모가 명시적인 높이를 제공한다. 트랙·선택 구간·thumb는 실제 크기를 가져야 하고 disabled 상태에서는 값이 바뀌지 않아야 한다. PageSkeleton은 Skeleton을 조합하고 로딩 이름과 `aria-busy`를 같이 제공한다. AlertDialog는 명시적 취소·확인 버튼을 제공하고 위험 action을 부드러운 danger surface로 나타낸다. Toast는 `popover` 표면 토큰을 사용하며 앱의 dark 모드 선택은 `theme` prop으로 전달한다. FilterToolbar는 검색·정렬·선택 필터를 묶고 토글은 `aria-pressed` 상태를 노출한다.

협업 UI에서는 참여자 묶음(AvatarStack)에 그룹 이름을 부여하고 Cursor는 장식으로 처리한다. Calendar는 일정이 보이는 월간 `schedule` 뷰와 팝오버용 작은 `date` 뷰를 구분하며 두 뷰 모두 방향키로 날짜 사이를 이동한다. 작은 화면의 일정 뷰와 데이터 테이블은 내부에서 가로 스크롤한다. List, Kanban, Gantt는 데이터를 앱이 소유하고 변경을 callback으로 반환한다. 마우스 드래그만으로 조작을 제한하지 않는다. List/Kanban은 명시적인 이동 버튼을, Gantt는 방향키 이동과 Shift+방향키 크기 변경을 제공한다. 이동 결과는 live status로 알린다. DataTable은 native table, caption, 열 제목과 `aria-sort`를 유지한다. ContributionGraph는 7행 주간 그리드와 월 이름을 유지하고 긴 기간에는 그래프 내부만 스크롤한다. 이 항목들은 제품 데이터 조회·동기화나 전역 상태를 포함하지 않는다.

코드 표시에는 읽기 전용 CodeBlock, 여러 명령을 고르는 Snippet, 직접 편집·실행할 수 있는 Sandbox를 구분한다. CodeBlock의 파일명·예제 선택·줄 번호는 코드 본문과 분리하고, 구문색은 light/dark의 `syntax.keyword/string/number/comment` 의미 역할로 정한다. 지원하지 않는 언어는 일반 텍스트로 남기며, 강조된 HTML은 코드로 표시하고 실행하지 않는다. 복사 버튼은 현재 선택한 원문 코드의 결과를 텍스트와 이름으로 알려준다. Sandbox는 좁은 화면에서도 Code·Preview·Console 탭으로 세 보기를 사용할 수 있어야 하고, 방향키로 탭을 이동한다. 실행은 해당 item의 Sandpack 격리 환경에 맡기고 Leement 서비스나 비밀값을 전달하지 않는다. ContributionGraph는 색상 강도만으로 정확한 수치를 전달하지 않고 각 날짜의 이름·수와 선택 상태 텍스트를 제공한다. Choicebox는 native fieldset/radio를, Combobox는 이름 붙은 검색 입력과 keyboard listbox를 쓴다. Dropzone은 파일 선택만 처리하며 업로드/저장은 앱 책임이다. 거부된 파일은 오류 상태로 설명하고 콜백에 넘기지 않는다. MiniCalendar는 전체 월력 대신 가까운 일주일을 가로 스트립으로 선택하고, Tags는 각 값의 삭제 버튼에 그 값을 명시한다. ColorPicker는 사용자 콘텐츠의 색상에만 쓴다. 평면·hue·opacity와 키보드용 saturation/brightness 수치 입력을 제공한다. 불투명한 값은 6자리 HEX, 투명한 값은 8자리 HEX로 앱에 반환하며 RGB/HSL은 읽기 전용 출력이다. 색상 입력을 브랜드 token 설정으로 혼동하지 않는다.

이미지와 미디어 UI는 앱이 제공한 자산만 표시한다. ImageCrop은 보이는 이미지 크기를 확보하고 퍼센트 범위를 앱에 반환하며 저장·업로드는 하지 않는다. ImageZoom은 Radix Dialog의 초점, Escape, 닫기 동작을 보존한다. CreditCard는 브랜드·네트워크·칩·가려진 마지막 네 자리·소유자·만료일의 읽기 순서를 유지하고 보안 코드나 결제 기능을 다루지 않는다. Ticker는 기본적으로 인라인 요약이고 필요한 경우 카드 레이아웃을 선택한다. 가격과 증감 방향은 텍스트로도 표시하며 데이터의 신선도는 앱이 설명한다. Stories는 thumbnail trigger에서 modal viewer로 진입하는 구성을 기본으로 하고 이미 열린 영역에 넣을 때만 `presentation="viewer"`를 사용한다. Reel은 실제 9:16 영상, 진행 상태, 제목·작성자와 제어를 한 표면에서 보여 준다. VideoPlayer는 단일 영상의 재생·탐색·음소거에 쓴다. 영상 위의 전경과 아래쪽 scrim은 테마의 `media.foreground`/`media.scrim` 역할로 정하고, 브랜드색을 영상의 범용 대비색으로 쓰지 않는다. 자동 이동/재생은 reduced motion에서 멈추며 새 미디어로 이동할 때 수동 재생 허용 상태를 초기화한다. 탐색·일시정지·음소거·탐색 위치에는 이름이 있는 제어를 제공한다. 음성이 있는 영상은 앱이 자막 파일을 전달한다.

Announcement는 짧은 제품 소식과 링크, Banner는 설명과 주요 action이 필요한 넓은 메시지에 사용한다. Banner의 기본 강조 표면은 배경과 전경의 대비를 확보하고, 낮은 강조가 필요할 때만 `tone="subtle"`을 쓴다. StatusNotice는 작업 결과를 전달하므로 이 둘과 책임이 다르다. Typography는 시각적 역할과 HTML heading level을 분리한다. 긴 본문 예제는 제목·문단·목록·인라인 코드를 함께 보여 실제 계층을 검증한다. ColorPicker는 사용자가 콘텐츠 색상을 고르는 제어이며 시스템 token 자체를 편집하지 않는다. Comparison은 before/after의 노출량을 native range와 키보드로 조절한다. Deck은 짧은 슬라이드 시퀀스, DialogStack은 모달 안의 몇 단계 작업이다. DialogStack은 이전 단계의 입력을 유지하고 Radix의 Escape·초점 복귀를 보존한다. Editor의 입력 엔진은 TipTap이며 heading·목록·인용을 편집하고 toolbar action에 이름을 붙인다. Glimpse의 링크는 미리보기 없이도 목적지가 드러나야 한다. Marquee는 콘텐츠가 이동하는 가로 viewport 양끝에서 투명 마스크로 서서히 사라지게 한다. 배경색을 복사한 overlay를 쓰지 않으므로 사용자 테마와 표면이 바뀌어도 fade가 유지된다. 기본 예제는 128px 원형 아이템으로 동작을 보여 준다. 중복 콘텐츠는 보조기술에서 숨기고 pause 제어 및 reduced motion 정지를 제공한다. reduced motion에서는 마스크를 해제하고 가로 스크롤로 항목을 읽을 수 있게 한다.

Pill은 짧은 상태 신호와 사용자가 제거할 수 있는 값에 쓴다. neutral/success/warning/danger는 의미 텍스트와 함께 쓰고, 선택적인 앞·뒤 cue는 라벨을 대체하지 않는다. 지속적인 객체 상태는 Status, 잠시 진행 중인 일은 Spinner로 표현한다. 각각 Badge, StatusNotice, Progress와 쓰임을 섞지 않는다. QRCode는 실제 SVG 행렬과 같은 값을 복사할 수 있는 제어를 제공하며 짧은 비밀값을 노출하지 않는다. Rating은 radio 의미와 방향키 선택을 유지한다. RelativeTime은 상대 문구와 절대 시각을 함께 제공하고 필요할 때 분 단위로 갱신한다. ThemeSwitcher는 `data-lm-theme`의 light/dark 두 모드만 전환하며 앱이 이미 모드를 관리하면 controlled prop으로 연결한다. Tree는 계층·확장·선택 상태를 보조기술에 전달하고 방향키/Home/End로 이동한다.

EmptyState는 제목, 이유, 실행 가능한 다음 단계를 담고, 실제 클릭 결과는 앱이 연결한다. PageHeader는 페이지 제목, 설명, 한두 개의 action을 결합하며 작은 화면에서 action을 감싼다. FormSection과 SettingsSection은 서로 관련된 여러 필드와 각 필드 라벨을 보여야 한다. SearchField는 인접한 결과 목록·결과 수와 연결하고, FilterToolbar는 검색·선택 필터·정렬과 결과 수를 함께 보여 준다. ProductPageIntro의 eyebrow는 일반 표면에서 `brand.text`를 사용한다. BentoGrid는 실제 제품 정보를 담는 article을 배치하고 제목을 읽을 수 있는 크기로 유지한다. Pattern은 반복되는 제품 문제일 때만 승격한다. Block은 registry dependency를 통해 구성품을 함께 설치한다.

## 접근성과 반응형

텍스트 대비와 focus ring을 light/dark에서 확인한다. 색상만으로 상태를 전달하지 않는다. 모든 입력은 label 또는 `aria-label`이 필요하다. 모바일에서는 PageHeader action과 FormSection이 세로로 쌓인다. HTML semantics를 감추지 않고 키보드로 모든 interactive control에 접근할 수 있어야 한다.

## 문서 사이트

Color 편집기의 스와치는 클릭하거나 키보드로 열 수 있는 Leement `ColorPicker`의 진입점이다. 기존 의미색과 alpha를 picker에 표시하고, OKLCH처럼 sRGB HEX가 아닌 원본 표현은 별도 텍스트 입력에서 유지할 수 있게 안내한다. picker 조작은 현재 light/dark 모드의 preview override에 즉시 반영한다. 여섯 Foundations의 우측 미리보기는 같은 Workspace settings 예제를 반복하지 않고 색상 역할, 글자 계층, 컨트롤 간격, 모서리, 입체감, 전환 시간에 맞는 실제 registry 컴포넌트를 각각 보여 준다.

Foundations의 Color, Typography, Spacing, Radius, Shadow, Motion에는 실제 registry 컴포넌트와 같은 CSS 변수를 읽는 실시간 편집기를 둔다. 편집값은 방문자 브라우저의 임시 미리보기이며 사이트 전체에 적용되고 페이지 이동·새로고침 후에도 유지된다. `packages/tokens/src/tokens.json`은 기본값의 정본으로 남고 primitive/semantic 참조 표는 항상 그 기본값임을 표시한다. Typography는 Body font, Brand font, Mono font를 별도로 선택하거나 안전한 CSS family 목록으로 입력하며 실제 BrandLogo, 본문, 한국어/영문 코드 예제와 사이트 코드에 각각 반영한다. 기본 Pretendard/Paperlogy/D2Coding 파일은 theme이 로드하고 커스텀 파일은 앱이 로드한다. 이름 입력만으로 파일을 다운로드하지 않는다. Color는 light/dark를 별도로, 나머지 값은 공통으로 편집한다. 문서의 모드 스위치와 편집기는 같은 모드를 보여 준다. 전체 초기화는 브라우저 override를 지우고 기본값으로 돌아간다. CSS 복사는 기본값과 다른 `--lm-*`만 내보내며 필요한 Tailwind/shadcn 호환 변수는 Leement 변수에서 파생한다. 앱에서는 `@leement/theme` import 뒤에 복사한 CSS를 둔다. 저대비 색상 조합은 경고하고 `prefers-reduced-motion`은 편집한 모션 시간보다 우선한다. 문서의 편집값은 npm 패키지나 registry source를 바꾸지 않는다.

홈은 큰 제목, 짧은 설명, 주요 탐색 동작과 실제 registry 컴포넌트로 만든 화면 예제를 먼저 보여 준다. 상단은 Docs, Components, Blocks, Patterns의 큰 범주를 보여 준다. 좌측은 현재 범주의 항목을 작은 사용 분야별로 묶고 현재 항목이 보이도록 스크롤한다. Components의 Animations는 시각 효과 자체가 목적인 Brand Gradient Text, Text Reveal, Rotating Content, Reveal Content, Marquee를 포함한다. Spinner/Skeleton/Status는 Feedback, Media Reveal/Brand Action은 기존 product pattern 분류를 유지한다. Motion 사용 여부만으로 기능 UI를 Animations에 넣지 않는다. 이 분류는 문서 탐색 규칙이며 registry 레이어·URL·설치 명령은 유지한다. 검색 결과도 같은 section 이름을 사용한다. 상세 문서는 제목과 소개 다음에 조작 가능한 Preview·Code·Source를 먼저 제시하고, 설치와 사용 규칙·접근성·API를 이어서 설명한다. 넓은 화면에서는 우측 목차가 본문 위치로 이동하고, 모바일에서는 같은 범주에 접근 가능한 접이식 메뉴를 쓴다. 검색은 키보드로 열고 닫을 수 있어야 한다. Kibo 비교 기록은 Feature artifact에 보존하며 사용자 탐색에 중복 coverage 메뉴를 추가하지 않는다. 화면은 Leement 이름·토큰·실제 registry source를 사용한다.

문서 카탈로그 항목은 `bg-muted`의 낮은 강조 표면과 20/24px 여백으로 구분하고 바깥 border·shadow·footer 구분선을 중첩하지 않는다. 실제 예제는 `bg-background` 프리뷰 표면에 표시하며 컴포넌트 자체 border는 유지한다. PreviewFrame의 기본 inset은 상세 20/40px, gallery 16/24px이다. 가로·세로 점선과 콘텐츠 padding은 동일한 inset을 읽으며 콘텐츠가 커지면 아래 선과 프레임 높이도 함께 늘어난다. 장식선은 pointer-events를 받지 않는다. 넓은 표·타임라인·편집기는 자기 영역에서 스크롤하고 포털·focus ring을 표시 장식 때문에 자르지 않는다. 문서 바깥 inset은 RootLayout이 소유하고 페이지는 중복 main/padding을 추가하지 않는다. 본문 최대 폭·우측 목차·홈의 넓은 배치는 의도에 맞게 유지한다.

Docs Overview·Installation·Adoption·Foundations·Changelog도 같은 muted 외부 구획과 20/24px padding을 사용한다. 실제 입력·코드·예제는 안쪽 background 표면에서 표시한다. Installation의 순서와 Changelog의 세로 목록, Overview의 넓은 소개 배치는 유지하며 긴 설명을 타일 그리드로 강제하지 않는다. Muted 문서 표면 위의 긴 설명은 기본 foreground로 읽을 수 있게 한다. Foundations editor는 자신의 폭이 52rem 이상일 때 편집/샘플을 2단으로 배치한다. Foundations는 editor·샘플·CSS 복사를 분명한 구획으로 정리하고 token 참조 표의 행 경계와 실제 컴포넌트 border는 유지한다.

FormSection의 제목과 입력 영역은 실제 section 너비가 40rem 이상일 때 2단으로 배치한다. 좁은 카드·사이드 패널에서는 화면 전체가 넓어도 1단으로 쌓는다. 저장 action과 상태 문구는 좁은 영역에서 줄바꿈할 수 있어야 한다.

## 성숙도와 변경

`experimental`: 한 프로젝트에서 출발했거나 API가 불안정하다. `candidate`: 두 사용 사례에서 같은 문제를 해결했다. `stable`: 여러 프로젝트에서 API, 접근성, 시각 규칙을 검증했다. 한 번 사용한 UI는 application에 두고, 두 번째 반복에서 candidate를, 세 번째 반복에서 design system 승격을 검토한다. 신규 variant는 유스케이스와 문서 규칙을 먼저 제시한다. 기존 variant 제거 시 changelog와 migration 메모를 작성한다.

## 단일 미디어 플레이어

AudioPlayer는 CopySinger의 72px 파형과 조밀한 재생·시간·배속·음량·음소거 구성을 공통화한다. VideoPlayer도 같은 36px icon-sm 제어와 Popover/Slider 규칙을 사용한다. 일반 파형은 중립 wave와 data-accent-foreground 진행색이며 brand=true일 때만 소비자의 brand gradient를 쓴다. 색 변경은 재생을 재시작하지 않는다.

Native HTML media event가 playback state의 정본이다. src 변경은 이전 시간/오류/engine을 분리하고 유효한 duration 안에서만 seek한다. 파형 decode 실패는 native audio controls로 대체하며 media 자체 실패와 구분한다. SSR/no-JS에서는 native controls를 제공하고 영상은 앱이 자막 언어/label/파일을 전달한다. 로딩/오류는 이름 있는 상태이며 timeupdate는 반복 live announce하지 않는다. reduced motion은 장식만 멈추며 사용자가 재생한 오디오/영상은 보존한다. 구간 분석과 blob preview 생성은 앱 composition이다.

## 기본 입력과 선택

Checkbox는 함께 제출할 독립 옵션이며 mixed 상태는 일부 선택을 뜻한다. RadioGroup은 한 값을 고르고 Choicebox는 설명을 비교하는 카드형 선택이다. Switch는 즉시 적용할 설정, Toggle/ToggleGroup은 눌린 도구 모드, FilterToggle은 결과 필터에 쓴다. 체크/라디오 표식은16px이고 label row는 최소40px로 조작 영역을 확보한다.

Field는 한 입력의 label/description/error 연결을 소유하고 FieldSet/Legend는 관련 입력의 의미를 묶는다. FormSection은 여러 필드의 배치이며 Field를 대체하지 않는다. Base UI input은 Field와 자동 연결되며 Leement의 native Input/Textarea는 FieldControl render로 연결하거나 id/aria-describedby/aria-invalid를 명시한다. 이름 없는 아이콘 action과 placeholder만의 라벨을 피한다. InputGroup은 앞/뒤 adornment와 입력의 focus/invalid 표면을 묶되 별도 버튼의 disabled는 앱이 전달한다. 기본 선택 UI는 Select로 통일하고 검색은 Combobox를 사용한다. Select의 name/defaultValue 또는 controlled value와 Field context 연결을 사용한다. ToggleGroup은 Base UI의 배열 값 계약을 유지하며 단일 선택에서는 multiple=false다.

### 기본 탐색과 보조 표시

- Accordion은 같은 섹션의 보조 설명을 접는다. 필수 오류나 필수 안내는 접힌 내용에만 두지 않는다. Base UI 1.7의 Tab/Enter/Space 동작과 배열 value를 사용하며 multiple로 다중 open을 지정한다. Content panel에 padding을 직접 추가하지 말고 내용 안쪽에 둔다. 측정한 높이를 token duration/easing으로 전환하고 닫힘 중 inert와 reduced motion을 유지한다.
- Breadcrumb은 상위 경로, Pagination은 URL 페이지 이동이다. 현재 페이지는 aria-current, 사용할 수 없는 페이지 링크는 href·Tab 진입을 제거한다. 로컬 테이블 페이지 상태에는 native Button을 사용한다.
- Command는 cmdk의 검색·키보드 선택 엔진을 사용한다. 입력 이름, disabled item, empty 결과를 명시한다. CommandDialog의 trigger로 opener를 연결하면 Escape 후 focus가 복귀한다. trigger 없이 전역 단축키로 여는 consumer는 별도 focus 복귀 대상 관리를 맡는다.
- ButtonGroup은 관련 행동의 경계만 묶는다. 선택 상태에는 RadioGroup/ToggleGroup을 사용한다. Kbd는 실제 단축키 설명이며 동작을 등록하지 않는다. AspectRatio는 CSS 비율 배치이며 media의 alt/captions를 대신하지 않는다.
- HoverCard는 임의 보조 내용, Glimpse는 링크 metadata 편의 API다. HoverCard의 내용은 screen reader에 노출되지 않을 수 있으므로 필수 정보·action은 본문/목적지 또는 Popover/Dialog로 제공한다. 링크 의미와 기존 Glimpse props를 유지한다.

### 표의 조합과 데이터 상태

- UI Table은 native table/caption/thead/tbody/tfoot/tr/th/td parts를 제공한다. caption과 header scope를 유지한다. 기존 DataTable(data/columns/rowId/caption)의 작은 정렬 API는 유지한다.
- AdvancedDataTable pattern은 TanStack Table v8의 ColumnDef/getRowId와 client-side row model을 사용한다. 정렬·지정 열 필터·페이지·페이지 단위 선택·열 표시를 조합하고 필터 변경 시 첫 페이지로 돌아간다. 안정적인 row ID를 필수로 제공한다.
- rowSelection/onRowSelectionChange는 controlled 사용을 지원한다. 필터에 포함되지 않는 선택 행도 유지하며 상태 문구는 필터된 행의 선택 수를 표시한다. 숨기기 메뉴는 마지막 열까지 숨겨 의미 없는 표가 되지 않도록 제한한다.
- toolbar와 footer는 좁은 폭에서 줄바꿈하고 표만 가로 스크롤한다. 서버 조회·virtualization·전체 spreadsheet 동작은 포함하지 않으며 설치된 source에서 확장한다.

### 날짜 선택과 범위 제약

- Calendar는 기존 single value/defaultValue/onValueChange 및 schedule event API를 유지한다. mode=range는 DateRange(from/to?)와 range/defaultRange/onRangeChange를 사용한다. 새로운 선택은 시작일만 설정하고 두 번째 선택으로 종료일을 완성하며 역순 선택은 순서를 정규화한다.
- min/max는 날짜 단위의 포함 경계다. Calendar.disabled는 전체 disabled 또는 날짜 predicate, DatePicker.disabled는 필드 전체, disabledDate는 개별 날짜다. 범위 안쪽에 unavailable 날짜가 있으면 완료를 거절하고 status로 안내한다. 화살표는 제외 날짜를 건너뛰고 경계를 벗어나지 않는다.
- DatePicker는 Button/Popover/Calendar(date)를 조합한다. 접근 가능한 label과 선택 값을 trigger에 제공하고 popup이 열리면 선택 가능한 날짜로 focus를 이동한다. single 또는 range 완료 시 닫고 trigger로 복귀하며 Escape도 같은 복귀를 유지한다. 필드 id/aria-describedby/aria-invalid를 연결할 수 있다.
- 날짜 값은 consumer의 local Date이며 시간·타임존 변환·서버 저장을 추가하지 않는다. range를 controlled로 사용하면 부분 선택도 consumer가 반영해야 한다.

- 신규 작은 선택 표식(Checkbox/Radio)과 Select/InputGroup 경계는 muted foreground semantic 역할을 사용해 라이트 표면에서도 식별한다. 단순 장식 border와 control 경계를 구분하며 focus ring은 불투명한 ring 역할을 사용한다. Base UI의 data-disabled도 시각 상태에 연결한다.

### upstream 이름과 사용 문제의 대응

- StatusNotice는 짧은 Alert, EmptyState는 Empty 문제에 대응한다. 이름만 다른 source alias를 추가하지 않는다.
- Field는 입력 하나의 label/help/error를 연결하고 FormSection은 여러 필드의 제품 섹션을 구성한다. Sheet는 측면 Dialog이며 swipe/snap-point Drawer 전체 동작을 보장하지 않는다.
- 이번 확장은 신규17개(UI15/Pattern2)다. 공개 UI79/Pattern15/Block8과 지원 lib3을 제공한다. 공식64개와 같은 이름은45개이며 이는 API/동작 완전 호환율이 아니다. 기존 대응2개와 보류17개는 Feature 기준표에 남긴다.

## 문서 예제 규칙

Showcase는 항목마다 대표 예제 하나를 사용한다. 상세 Examples는 사용법이 달라지는 주요 variant/size/state/compound 조합을 이름과 설명·독립 Preview/Code로 제공한다. 예제는 registry 원본을 import하고 문서 표시 코드는 그 source를 소비자 alias로만 변환한다. 각 추가예제에 실제로 import하는 registry 항목의 설치 명령을 함께 제공하며 예제 때문에 UI runtime dependency를 늘리지 않는다. 모든 props 조합을 복제하지 않으며 미지원 upstream API를 약속하지 않는다. 입력 label/id는 useId로 같은 페이지의 다른 예제와 구분한다. 파일 처리·폼 저장·비동기 결과는 로컬 앱 조합으로 보여 주고 앱 책임을 설명한다. 무거운 추가 예제는 상세에서 lazy load하며 Showcase에 동시에 mount하지 않는다.

### Preview 중앙 배치

상세 기본/추가 예제와 Showcase는 예제 그룹 자체를 가로·세로 중앙에 배치한다. compact control 행은 wrap 후에도 justify-center를 쓰고, 장식 텍스트/상태/독립 조작을 묶는 데모는 items-center와 적절한 max-width를 사용한다. 폼 label/오류·목록·표·panel 내부는 읽기 순서에 맞게 좌측 정렬하며 전체 텍스트를 강제로 중앙 정렬하지 않는다. 작은 그룹에 불필요한 w-full 또는 닫힌 상태의 팝업 예약 높이를 넣지 않는다.

PreviewFrame의 최소 높이/inset/가로·세로 점선은 콘텐츠가 커지면 함께 늘어난다. inline popup은 frame 밖에도 읽고 조작할 수 있게 workbench 전체를 overflow-hidden으로 자르지 않는다. Code pane은 자체 scroll/rounded clipping을 소유한다. 실제 예제 source와 표시 Code는 일치해야 하며 registry public API와 디자인 token의 정렬 규칙을 바꾸지 않는다.

### Preview 조작

기본·추가·Showcase 프리뷰는 우측 handle을 드래그해 폭을 조절한다. 키보드 Arrow는 16px(Shift 64px), Home은 최소 폭, End는 전체 폭이다. 최소 폭은 240px이며 부모가 그보다 작으면 사용 가능한 폭이 우선한다. 프리뷰 우측 하단에 테두리를 제외한 실제 iframe viewport 폭을 px로 표시하고 드래그·키보드·부모 폭 변화에 동기화한다. 각 예제의 실제 viewport에서 media query와 container query를 확인하고 콘텐츠 높이에 맞춰 프레임과 guide를 늘린다. 줄어든 영역 오른쪽은 background-subtle grid로 표시하며 코드 탭과 설치 소스는 조작 UI를 포함하지 않는다.

Replay가 있는 프리뷰는 상단 60px 이상을 확보해 긴 표나 폼과 조작 버튼이 겹치지 않게 한다. Motion 의존이 있는 예제는 우측 상단 이름 있는 Replay로 현재 예제만 다시 시작한다. 폭·외부 focus·사이트 theme/Foundation은 유지하고 reduced motion과 미디어 non-autoplay를 보존한다. popup은 예제 viewport 안에서 focus/Escape를 처리한다. 예제 runtime은 iframe 한 곳에서만 실행한다. 로딩 중에는 정적 상태 안내를 표시하며 모션을 실행하는 inline 복사본을 mount하지 않는다. no-JS에서도 동일 preview route의 iframe으로 예제 콘텐츠를 읽을 수 있으며 문서 전용 제어를 registry API에 추가하지 않는다.

## 컴포넌트 스타일링

Registry 컴포넌트의 정적 배치·색상·data 상태·focus와 reduced-motion/no-JS 대체 규칙은 Tailwind className으로 표현한다. CSS Module은 사용하지 않으며 필요한 media query와 하위 요소 선택은 해당 컴포넌트의 arbitrary variant에 둔다. 소비자에게 추가 CSS 파일 import를 요구하지 않는다. Theme의 토큰·reset·compatibility와 docs 전용 전역 스타일은 각각 기존 레이어가 소유한다. 시각 값을 시간에 따라 보간하는 동작은 Motion이 담당한다.

## Motion 실행 계약

모든 시각 애니메이션과 상태 전환은 Motion으로 실행한다. Theme은 정적 스타일과 토큰을 제공하고 React/Motion runtime에 의존하지 않는다. primitive의 CSS/data/pseudo 상태가 의미의 기준이며 scoped ref helper는 그 최종 값을 Motion으로 보간한다. duration은 CSS 단위를 초로 변환하고 reduced motion은 prop보다 우선한다. 반복 효과는 visibility/offscreen/paused/unmount를 처리한다. Foundations 변경 뒤 `leement:motion-change`로 값을 다시 읽는다. 새 효과도 같은 토큰과 접근성 규칙을 사용한다.

외부 시각 실행도 처리한다. Recharts 자체 보간은 끄고 chart 진입은 Motion으로, Sonner CSS 전환은 끄고 toast 표시는 Motion으로 실행한다. ReactCrop의 crop 경계와 Sandpack의 장식용 cube·fade는 정적으로 표현한다. crop 조작, 편집기·격리 실행, 실제 media 재생은 원래 엔진이 담당한다.
