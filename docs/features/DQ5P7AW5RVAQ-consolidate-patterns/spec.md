# Feature Spec: consolidate-patterns

## 개요

- **기능 ID**: DQ5P7AW5RVAQ
- **기능명**: consolidate-patterns
- **대상 레포**: Leement
- **작성일**: 2026-10-08
- **상태**: Approved
- **승인 이력**: Patterns 통합 범위 승인 후 랜딩 간소화를 추가했고, 2026-10-08 사용자 A로 확장된 Spec 전체를 승인받음.

## 목적

Components에는 Sidebar·AudioPlayer처럼 복합 기능이 있고, Patterns 15개는 모두 registry:component로 배포된다. 내부적으로 조합되었다는 이유만으로 독립 메뉴에 넣는 기준은 일관되지 않다. 공개 탐색을 Components와 Blocks로 정리하고, 기존 기능과 사용자의 설치 소스를 보존한다. Charts는 별도 탐색을 유지한다.

랜딩 페이지도 shadcn/ui 홈의 간결한 정보 순서를 참고해 짧은 제품 소개, 두 가지 주요 진입 링크, 실제 Leement UI 예제로 정리한다. Leement의 로고·서체·토큰·공용 컴포넌트는 유지한다.

## 사용자 스토리

### US-1: 역할에 따른 탐색

**As a** Leement 사용 개발자
**I want** 하나의 UI 기능은 Components에서, 화면 구역의 구성은 Blocks에서 찾기
**So that** 내부 구현의 조합 여부를 판단하지 않고 필요한 UI를 찾을 수 있다.

**Acceptance Criteria:**

- [x] 상단 탐색·데스크톱 및 모바일 메뉴·홈 소개·Showcase에서 Patterns 독립 분류가 제거된다.
- [x] 기존 15개 항목은 아래 지정된 새 분류에 각각 한 번씩 포함된다.
- [x] 기존 Components 95개와 Blocks 36개를 유지하며 최종 수는 Components 105개, Blocks 41개다. Charts 70개를 유지한다.
- [x] 표시 이름은 기존 Components처럼 단어 사이 공백을 사용하고 기능별 메뉴 안에서 A–Z 정렬을 유지한다.

### US-2: 기존 링크와 설치 코드의 호환성

**As a** 기존 문서 링크 또는 Leement 소스를 사용하는 개발자
**I want** 분류 변경 뒤에도 기존 주소와 설치·import 코드가 동작하기
**So that** 문서 구조 변경 때문에 애플리케이션 소스를 수정하지 않아도 된다.

**Acceptance Criteria:**

- [x] 기존 `/patterns/<slug>` 15개 주소는 대응하는 새 상세 주소로 영구 리다이렉트된다.
- [x] 새 상세 페이지에서 제목·설치·Usage·Examples·API Reference·미디어 출처·Preview를 보존한다.
- [x] 알 수 없는 slug는 404이며 기존 Components·Blocks·Charts·Preview·registry 주소의 동작을 유지한다.
- [x] `@leement/<slug>` 설치 이름, registry dependencies, 기존 소비자 import 경로와 공개 props/export를 유지한다.

### US-3: 간결한 랜딩 페이지

**As a** Leement를 처음 방문하는 개발자
**I want** 짧은 소개와 실제 UI 예제를 보고 설치 또는 컴포넌트 문서로 진입하기
**So that** 반복되는 제품 설명을 읽지 않고 제공되는 UI와 시작 방법을 이해할 수 있다.

**Acceptance Criteria:**

- [x] 첫 화면은 하나의 헤드라인, 짧은 설명, Get started·View components 두 가지 주요 진입 링크로 구성한다.
- [x] 그 아래에는 실제 registry 컴포넌트를 사용하는 대표 UI 예제 그리드를 배치한다.
- [x] 기존의 큰 glow 배경, 반복적인 기능 소개 카드 3개와 별도 설치 안내 섹션을 제거한다. 설치 안내는 Getting started에서 제공한다.
- [x] Patterns 소개는 제거하고 새 Components·Blocks 분류와 링크를 사용한다.
- [x] Leement 로고·서체·semantic 색상·컨트롤 규칙과 상단 검색·테마 전환·문서 탐색을 유지한다.
- [x] light/dark 및 375px·768px·1440px 화면에서 제목·버튼·예제가 잘리지 않고, 페이지 가로 스크롤 없이 읽고 조작할 수 있다.

## 기능 요구사항

### FR-1: 분류 기준

Components는 다른 화면에서 독립적으로 재사용할 수 있는 하나의 UI 기능이다. 다른 컴포넌트를 조합해도 이 분류에 속할 수 있다. Blocks는 화면의 한 구역 또는 페이지 구조를 구성하는 배치와 조합이다. 파일 수·코드 길이·의존성 수만으로 분류하지 않는다.

### FR-2: 기존 Patterns 15개 재분류

| 항목 / 설치 slug | 새 분류 | Components 기능 구역 / 분류 근거 |
| --- | --- | --- |
| Brand Action / brand-action | Components | Animations: 버튼의 브랜드 상태·모션 |
| Brand Logo / brand-logo | Components | Styling: 아이콘과 워드마크 |
| Data Table / data-table | Components | Data: 정렬·선택·필터·페이지가 있는 표 |
| Date Picker / date-picker | Components | Forms: 날짜 선택 입력 |
| Empty State / empty-state | Components | Feedback: 빈 상태 표시와 action |
| Media Reveal / media-reveal | Components | Animations: 미디어 로딩·성공·오류 전환 |
| Resource Row Link / resource-row-link | Components | Core: 행 전체를 조작하는 링크·버튼 |
| Search Field / search-field | Components | Forms: 검색 입력 |
| Stat Card / stat-card | Components | Data: 하나의 지표 표시 |
| State Panel / state-panel | Components | Feedback: 상태 메시지 표시 |
| Filter Toolbar / filter-toolbar | Blocks | 필터·검색·action을 배치하는 화면 구역 |
| Form Section / form-section | Blocks | 설명과 여러 필드를 배치하는 폼 구역 |
| Page Header / page-header | Blocks | 제목·설명·action을 배치하는 페이지 헤더 |
| Page Skeleton / page-skeleton | Blocks | 헤더와 목록 구역을 포함하는 페이지 로딩 배치 |
| Product Page Intro / product-page-intro | Blocks | 제목·설명·메타·aside를 배치하는 페이지 구역 |

### FR-3: 공개 탐색과 상세 문서

새 기본 상세 주소는 `/components/<slug>` 또는 `/blocks/<slug>`이다. 탐색, 검색 결과, Showcase 분류·개수·카드, 상세 표시 타입, 내부 문서 링크, 홈 안내 및 메타데이터는 새 분류를 사용한다. 현재 설명에서 Pattern을 독립 제공 레이어로 소개하지 않는다. 일반적인 조합 기법을 뜻하는 pattern이나 입력의 `pattern` prop은 바꾸지 않는다.

기존 예제는 삭제하지 않고 새 상세 페이지의 Usage·Examples로 유지한다. Preview의 실제 source, 복사 코드, 설치 dependencies 및 API 설명의 일치를 보존한다. 공개된 과거 Changelog와 완료 Feature 문서는 역사 기록으로 유지한다.

### FR-4: 주소 호환성

기존 Patterns 상세 주소 15개만 정확한 새 상세 페이지로 영구 리다이렉트한다. 잘못된 slug를 임의 페이지로 보내지 않는다. 새 주소에서 Components/Blocks 탐색 및 현재 항목 선택이 맞아야 한다. 기존 문서 섹션 anchor가 포함된 링크도 해당 섹션을 찾을 수 있어야 한다.

### FR-5: 설치 소스 호환성

이번 변경은 공개 분류와 문서 탐색의 이전이다. 기존 `registry/patterns/*.tsx` 소스 위치와 `components/patterns/*.tsx` 설치 target은 유지한다. 폴더 이동·호환 wrapper 추가·사용자 파일 자동 이동은 범위에 포함하지 않는다. 문서 import 코드는 실제 설치 target과 일치해야 한다. registry 타입을 메뉴 라벨만 보고 일괄 변경하지 않는다.

### FR-6: 요구사항과 변경 이력 동기화

PRD와 디자인 시스템의 현재 분류·항목 수·설명을 실제 결과와 맞춘다. 이번 변경은 `unreleasedChanges`에 기록하며 공개 버전 0.2.1과 기존 릴리스 기록은 유지한다. README는 명시적 수정 요청이 없어 수정하지 않고 발견한 불일치를 decisions.md에 기록한다.

### FR-7: 랜딩 페이지 정보 구조와 시각 방향

참고 원본은 [shadcn/ui 홈](https://ui.shadcn.com/)이며 2026-10-08에 직접 열어 정보 구조와 화면을 확인했다. 참고하는 요소는 짧은 중앙 정렬 소개, 두 가지 주요 진입 링크, 그 아래의 실제 UI 예제다. 문구·금융 샘플 데이터·로고·폰트·색상·강한 둥근 모서리는 Leement에 그대로 복제하지 않는다.

```text
Leement 상단 탐색 · 검색 · 테마 전환

              짧은 제품 헤드라인
                 간결한 설명
          [Get started] [View components]

        실제 Leement UI 예제 그리드
       컨트롤 · 폼 · 데이터/상태 조합
```

Get started는 `/getting-started`, View components는 `/components/button`으로 연결한다. 기존 상단 탐색에서 Blocks·Charts·GitHub와 다른 문서에 접근할 수 있다. 랜딩에 별도 문서 사이드바는 표시하지 않는다.

예제는 기존 Leement source를 활용한 소수의 대표 조합으로 구성한다. 모든 항목을 동시에 mount하는 Showcase 전체 복제나 무거운 편집기·미디어 자동 재생은 추가하지 않는다. 소개를 위한 독립적인 가짜 컨트롤을 새로 만들지 않는다. 사용자에게 조작 가능한 예제는 로컬 예제 상태로 반응하고, 실서비스 기능을 약속하지 않는다.

본문 폭·제목 크기·여백·그리드 열 수는 모바일부터 반응형으로 조절한다. 장식 gradient/glow와 과도한 상하 여백을 줄이고 기존 border·surface·타이포그래피 역할을 사용한다. 자동 반복 장식은 추가하지 않으며 기존 reduced-motion 정책을 유지한다.

고정 시각 근거: [참고 홈 화면](./artifacts/shadcn-home-reference.png). 구체적인 예제 구성·파일 변경·검증은 승인 후 Plan에서 정한다.

## 비기능 요구사항

- **접근성**: 모바일·데스크톱 탐색의 키보드 조작과 선택 상태, 검색의 접근 가능한 이름을 유지한다.
- **표현**: 기존 디자인 토큰·테마·반응형 배치·Preview 조작·알파벳 정렬을 유지한다.
- **성능**: UI runtime dependency나 불필요한 중복 Preview를 추가하지 않는다.
- **호환성**: 공개 컴포넌트 동작·props·export와 Charts 카탈로그를 변경하지 않는다.

## 제외 범위

- 신규 UI 기능, 기존 registry 기능 합치기·삭제, 랜딩 외 화면의 시각 재설계.
- 소비자 설치 폴더 물리적 재배치와 애플리케이션 소스 자동 마이그레이션.
- 버전업·npm 게시·원격 push·사이트 배포. 필요하면 별도 릴리스 요청으로 진행한다.
- README와 과거 릴리스·완료 Feature 기록 변경.

## 관련 문서

- PRD: [leement-prd.md](../../prd/leement-prd.md)
- PRD Refs: PRD-FR-005, PRD-FR-012, PRD-FR-015
- Design Refs: docs/designs/design-system.md
- Design System: docs/designs/design-system.md
- Visual Reference: https://ui.shadcn.com/ 및 [고정 참고 화면](./artifacts/shadcn-home-reference.png)
- Decisions: [decisions.md](./decisions.md)
