---
lee-spec-kit:
  kind: design-system
  scope: project
---

# Leement design system

## 원칙

디자인 언어가 의도를 설명하고 `packages/tokens/src/tokens.json`이 값을 정의한다. `packages/theme/dist/index.css`는 생성 결과이며 직접 편집하지 않는다. `--lm-*` 변수가 원본이고 `--background` 등 shadcn 이름은 호환 alias다. 컴포넌트 source의 class에는 의미 기반 이름을 사용한다.

## 출처와 테마

CopySinger의 밝은 배경, 부드러운 중립 표면, 진한 본문 및 40px 컨트롤을 light 기준으로 사용한다. Leesfield의 거의 검은 배경과 밝은 본문을 dark 기준으로 사용한다. 두 모드는 같은 semantic 역할을 공유한다. dark는 `[data-lm-theme="dark"]`로 선택한다. 현재 dark 시각 검수는 초기 수준이다.

## 토큰 규칙

- Color: background, surface, foreground, border, action, focus 역할로 사용한다. `neutral`, `blue` 등 palette 이름은 primitive에서만 사용한다.
- Typography: Pretendard 우선의 sans, 읽기 쉬운 14–16px 본문, 18–24px 제목을 기본으로 한다. 의미 없는 display type은 추가하지 않는다.
- Spacing: 4px 리듬. 기본 control은 40px, 작은 것은 36px, 큰 것은 44px이다.
- Radius: 컨트롤 8px, Card 12px, Badge는 full. 표면의 계층을 반경만으로 나타내지 않는다.
- Shadow: 기본 구획에는 border, 떠 있는 계층에는 shadow를 사용한다.
- Motion: 120/180/260ms 단계. reduced motion 환경에서는 duration을 0ms로 한다.

## 컴포넌트와 상태

Button의 action variant는 primary, secondary, outline, ghost, destructive만 둔다. 한 화면에서 primary action은 우선순위가 명확해야 한다. loading은 `aria-busy`와 disabled를 동반한다. Input과 Textarea의 오류는 `aria-invalid` 및 외부 설명 텍스트와 함께 제공한다. Dialog와 Tooltip의 초점 및 키보드 처리는 Radix에 맡긴다.

EmptyState는 제목, 이유, 실행 가능한 다음 단계를 담는다. PageHeader는 페이지 제목, 설명, action을 결합한다. Pattern은 반복되는 제품 문제일 때만 승격한다. Block은 registry dependency를 통해 구성품을 함께 설치한다.

## 접근성과 반응형

텍스트 대비와 focus ring을 light/dark에서 확인한다. 색상만으로 상태를 전달하지 않는다. 모든 입력은 label 또는 `aria-label`이 필요하다. 모바일에서는 PageHeader action과 FormSection이 세로로 쌓인다. HTML semantics를 감추지 않고 키보드로 모든 interactive control에 접근할 수 있어야 한다.

## 성숙도와 변경

`experimental`: 한 프로젝트에서 출발했거나 API가 불안정하다. `candidate`: 두 사용 사례에서 같은 문제를 해결했다. `stable`: 여러 프로젝트에서 API, 접근성, 시각 규칙을 검증했다. 한 번 사용한 UI는 application에 두고, 두 번째 반복에서 candidate를, 세 번째 반복에서 design system 승격을 검토한다. 신규 variant는 유스케이스와 문서 규칙을 먼저 제시한다. 기존 variant 제거 시 changelog와 migration 메모를 작성한다.
