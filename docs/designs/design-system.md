---
lee-spec-kit:
  kind: design-system
  scope: project
---

# Leement design system

## 원칙

디자인 언어가 의도를 설명하고 `packages/tokens/src/tokens.json`이 값을 정의한다. `packages/theme/dist/index.css`는 생성 결과이며 직접 편집하지 않는다. `--lm-*` 변수가 원본이고 `--background` 등 shadcn 이름은 호환 alias다. 컴포넌트 source의 class에는 의미 기반 이름을 사용한다.

## 출처와 테마

CopySinger를 먼저 만들고 이를 바탕으로 Leesfield를 CopySinger의 다크 모드처럼 만들려 한 의도가 출발점이다. Leement는 두 제품의 숫자를 복제하거나 평균 내지 않고 하나의 semantic 역할 집합에 light/dark 값을 배정한다. 두 앱에서 공통 source/API를 쓸 수 있는지, 본문 가독성·상태 대비·사용 맥락이 일관적인지를 우선한다. 제품별 브랜드·도메인 표현은 앱에 남긴다. light는 밝은 중립 표면과 진한 본문, dark는 `#111113` 배경 위에 `#1a1a1d` 기본 표면과 `#242427` 떠 있는 표면을 쓴다. dark는 `[data-lm-theme="dark"]` 또는 기존 앱의 `.dark`로 선택한다. 숫자·픽셀 단위의 원본 일치 여부는 성공 기준이 아니며 두 앱의 실제 적용 검증은 Feature GMA8H5L3TLTY에서 진행 중이다.

기존 Tailwind 앱에 도입할 때 CSS에서는 `@leement/theme`을 Tailwind 다음, `shadcn/tailwind.css`보다 앞에 import한다. 기존 앱이 같은 `--background`, `--primary` 등의 alias를 다시 정의한다면 뒤의 값이 Leement 호환 alias를 덮을 수 있다. 작은 영역에 `data-lm-theme="light"` 또는 `"dark"`를 부여해 공통 source와 의미 토큰을 먼저 확인하고, 전면 도입할 때 중복 alias를 정리한다. 제품 전용 wrapper는 도메인 동작·현지화와 이전 API 매핑을 맡되 Leement component source를 복제하거나 제품별로 fork하지 않는다. 예를 들어 기존 Button `default`를 Leement `primary`로, 앱의 `isLoading`/`loadingText`를 Leement `loading` 및 자식 텍스트로 연결할 수 있다. `data-accent-foreground`는 채워진 데이터 강조 표면 위의 전경색이므로 일반 카드 위 텍스트로 사용하지 않는다.

## 토큰 규칙

- Color: background, surface, foreground, border, action, brand, focus, status(success/warning), data accent 역할로 사용한다. `neutral`, `blue` 등 palette 이름은 primitive에서만 사용한다. 기본 light의 보라 계열과 dark의 파랑 계열은 CopySinger/Leesfield의 브랜드 참고값이며 Leement의 필수 정체성이 아니다. 앱의 브랜드색을 전역 primary로 흡수하지 않고 모드별 브랜드 역할로 재정의한다. 상태에는 색상과 텍스트를 함께 사용한다.

`background.subtle`은 페이지 배경의 낮은 단계이고 `surface.muted`는 컨트롤 hover, Tabs list, Skeleton, Progress track처럼 표면과 분리되어 보여야 하는 영역이다. CopySinger의 밝은 `--muted`와 Leesfield의 어두운 `--muted`를 참고해 light는 `#f5f5f5`, dark는 `#303033`으로 둔다. shadcn 호환 `--muted`는 `surface.muted`에서만 파생하며, 이 값을 page background로 대신 사용하지 않는다.

### 브랜드 역할

`--lm-color-brand-accent`와 `--lm-color-brand-accent-foreground`는 데이터 강조 표면과 그 위의 전경, `--lm-color-brand-text`는 보통 배경 위에 직접 놓는 작은 브랜드 문구와 선택된 필터의 텍스트, `--lm-color-brand-focus`는 키보드 포커스 링을 정한다. 채워진 강조 표면의 전경을 일반 배경의 글자색으로 재사용하지 않는다. `--lm-color-brand-gradient-start/middle/end`는 강조 텍스트와 선택적 브랜드 Skeleton이 공유한다. `--lm-color-data-accent`와 `--lm-color-focus-ring`은 각각 브랜드 역할을 참조하므로 앱이 `@leement/theme` import 뒤에 브랜드 변수만 덮어쓰면 관련 컴포넌트가 함께 바뀐다. `brand.text`도 앱이 두 모드에서 각각 정해야 한다. 사용 예제는 docs의 Foundations → Color에 두며, 각 앱에서 focus 가시성·텍스트 대비를 확인한다.

CopySinger의 gradient text·음성 파형·오디오 로딩은 violet/blue/pink 조합을 사용한다. Leesfield는 blue/highlight 조합을 gradient text·앱 Skeleton·선택 상태에 사용한다. 양쪽 기본 Skeleton은 중립 `bg-muted`이므로 Leement도 기본 `Skeleton`은 중립이고 `variant="brand"`는 제품 정체성이 도움이 되는 로딩 구간에만 쓴다. `BrandGradientText`는 짧은 제품 문구에만 사용한다. 반복 움직임은 `prefers-reduced-motion: reduce`에서 멈춘다.
- Typography: Pretendard 우선의 sans, 읽기 쉬운 14–16px 본문, 18–24px 제목을 기본으로 한다. 의미 없는 display type은 추가하지 않는다. theme은 font stack만 정의하므로 소비자 앱은 Pretendard 파일 또는 신뢰하는 CDN을 직접 로드하고 폴백 동작을 확인한다.
- Spacing: 4px 리듬. 기본 control은 40px, 작은 것은 36px, 큰 것은 44px이다.
- Radius: 컨트롤 8px, Card 12px, Badge는 full. 두 원본의 Card는 약 10px이고 이전 Leement 값은 16px이었다. 12px은 공통 표면의 선택값이며 원본 수치 복제 기준이 아니다. 표면의 계층을 반경만으로 나타내지 않는다.
- Shadow: 기본 Card와 Input에는 border를 쓰고 기본 shadow를 넣지 않는다. Popover/Dialog 같은 떠 있는 계층에서만 필요한 경우 shadow를 사용한다.
- Motion: 120/180/260ms 단계. reduced motion 환경에서는 duration을 0ms로 한다.

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

Foundations의 Color, Typography, Spacing, Radius, Shadow, Motion에는 실제 registry 컴포넌트와 같은 CSS 변수를 읽는 실시간 편집기를 둔다. 편집값은 방문자 브라우저의 임시 미리보기이며 사이트 전체에 적용되고 페이지 이동·새로고침 후에도 유지된다. `packages/tokens/src/tokens.json`은 기본값의 정본으로 남고 primitive/semantic 참조 표는 항상 그 기본값임을 표시한다. Color는 light/dark를 별도로, 나머지 값은 공통으로 편집한다. 문서의 모드 스위치와 편집기는 같은 모드를 보여 준다. 전체 초기화는 브라우저 override를 지우고 기본값으로 돌아간다. CSS 복사는 기본값과 다른 `--lm-*`만 내보내며 필요한 Tailwind/shadcn 호환 변수는 Leement 변수에서 파생한다. 앱에서는 `@leement/theme` import 뒤에 복사한 CSS를 둔다. 저대비 색상 조합은 경고하고 `prefers-reduced-motion`은 편집한 모션 시간보다 우선한다. 문서의 편집값은 npm 패키지나 registry source를 바꾸지 않는다.

홈은 큰 제목, 짧은 설명, 주요 탐색 동작과 실제 registry 컴포넌트로 만든 화면 예제를 먼저 보여 준다. 상단은 Docs, Components, Blocks, Patterns의 큰 범주를 보여 준다. 좌측은 현재 범주의 항목을 작은 사용 분야별로 묶고 현재 항목이 보이도록 스크롤한다. 상세 문서는 제목과 소개 다음에 조작 가능한 Preview·Code·Source를 먼저 제시하고, 설치와 사용 규칙·접근성·API를 이어서 설명한다. 넓은 화면에서는 우측 목차가 본문 위치로 이동하고, 모바일에서는 같은 범주에 접근 가능한 접이식 메뉴를 쓴다. 검색은 키보드로 열고 닫을 수 있어야 한다. Kibo 비교 기록은 Feature artifact에 보존하며 사용자 탐색에 중복 coverage 메뉴를 추가하지 않는다. 화면은 Leement 이름·토큰·실제 registry source를 사용한다.

## 성숙도와 변경

`experimental`: 한 프로젝트에서 출발했거나 API가 불안정하다. `candidate`: 두 사용 사례에서 같은 문제를 해결했다. `stable`: 여러 프로젝트에서 API, 접근성, 시각 규칙을 검증했다. 한 번 사용한 UI는 application에 두고, 두 번째 반복에서 candidate를, 세 번째 반복에서 design system 승격을 검토한다. 신규 variant는 유스케이스와 문서 규칙을 먼저 제시한다. 기존 variant 제거 시 changelog와 migration 메모를 작성한다.
