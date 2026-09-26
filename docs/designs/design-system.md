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

## 토큰 규칙

- Color: background, surface, foreground, border, action, focus, status(success/warning), data accent 역할로 사용한다. `neutral`, `blue` 등 palette 이름은 primitive에서만 사용한다. dark data accent는 파란색, light는 보라 계열을 사용하되 앱의 임의 브랜드색을 전역 primary로 흡수하지 않는다. 상태에는 색상과 텍스트를 함께 사용한다.
- Typography: Pretendard 우선의 sans, 읽기 쉬운 14–16px 본문, 18–24px 제목을 기본으로 한다. 의미 없는 display type은 추가하지 않는다. theme은 font stack만 정의하므로 소비자 앱은 Pretendard 파일 또는 신뢰하는 CDN을 직접 로드하고 폴백 동작을 확인한다.
- Spacing: 4px 리듬. 기본 control은 40px, 작은 것은 36px, 큰 것은 44px이다.
- Radius: 컨트롤 8px, Card 12px, Badge는 full. 두 원본의 Card는 약 10px이고 이전 Leement 값은 16px이었다. 12px은 공통 표면의 선택값이며 원본 수치 복제 기준이 아니다. 표면의 계층을 반경만으로 나타내지 않는다.
- Shadow: 기본 Card와 Input에는 border를 쓰고 기본 shadow를 넣지 않는다. Popover/Dialog 같은 떠 있는 계층에서만 필요한 경우 shadow를 사용한다.
- Motion: 120/180/260ms 단계. reduced motion 환경에서는 duration을 0ms로 한다.

## 컴포넌트와 상태

Button의 action variant는 primary, secondary, outline, ghost, destructive만 둔다. 한 화면에서 primary action은 우선순위가 명확해야 한다. destructive는 의미색의 연한 표면으로 강조하고 텍스트로 위험을 설명한다. xs(32px), sm(36px), default(40px), lg(44px)를 쓰며 icon 계열은 아이콘만 있을 때 접근 가능한 이름을 지정한다. loading은 `aria-busy`와 disabled를 동반한다. Input은 모바일 입력 확대를 피하도록 16px 문자를 쓰고 데스크톱에서는 14px을 쓴다. Input과 Textarea의 오류는 `aria-invalid` 및 외부 설명 텍스트와 함께 제공한다. Card는 20px 기본 inset, 16px 작은 inset과 CardAction을 제공한다. Label은 native label 연결을 유지한다. Select/Switch/Tabs의 옵션 이동, 상태 전환, 패널 관계는 Base UI에 맡기고 시각 상태는 Leement token을 사용한다. Dialog와 Tooltip의 초점 및 키보드 처리는 Radix에 맡긴다.

CopySinger/Leesfield의 Button `default`는 Leement `primary`에 대응한다. 기존 `link` variant는 의미상 navigation이면 native anchor로, action이면 ghost Button으로 옮긴다. Select의 기존 32/28px 트리거는 기본 40/36px 공통 컨트롤 높이에 맞춘다. Switch는 역할상 좁은 36×20px 또는 28×16px 트랙을 쓴다. 두 제품의 컴포넌트 소스가 제공한 API와 다른 부분은 설치 후 소비자 소스에서 수정할 수 있으며, 앱 고유 스타일은 앱에서 유지한다.

EmptyState는 제목, 이유, 실행 가능한 다음 단계를 담는다. PageHeader는 페이지 제목, 설명, action을 결합한다. Pattern은 반복되는 제품 문제일 때만 승격한다. Block은 registry dependency를 통해 구성품을 함께 설치한다.

## 접근성과 반응형

텍스트 대비와 focus ring을 light/dark에서 확인한다. 색상만으로 상태를 전달하지 않는다. 모든 입력은 label 또는 `aria-label`이 필요하다. 모바일에서는 PageHeader action과 FormSection이 세로로 쌓인다. HTML semantics를 감추지 않고 키보드로 모든 interactive control에 접근할 수 있어야 한다.

## 성숙도와 변경

`experimental`: 한 프로젝트에서 출발했거나 API가 불안정하다. `candidate`: 두 사용 사례에서 같은 문제를 해결했다. `stable`: 여러 프로젝트에서 API, 접근성, 시각 규칙을 검증했다. 한 번 사용한 UI는 application에 두고, 두 번째 반복에서 candidate를, 세 번째 반복에서 design system 승격을 검토한다. 신규 variant는 유스케이스와 문서 규칙을 먼저 제시한다. 기존 variant 제거 시 changelog와 migration 메모를 작성한다.
