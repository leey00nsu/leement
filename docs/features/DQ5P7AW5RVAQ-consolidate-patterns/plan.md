# Implementation Plan: consolidate-patterns

## 개요

- **기능 ID**: DQ5P7AW5RVAQ
- **대상 레포**: Leement
- **작성일**: 2026-10-08
- **상태**: Approved
- **Plan 검수**: Disabled — 저장소 설정에 따라 생략
- **Plan 검수 Evidence**: -
- **Plan 검수 Decision**: -

## 기술 스택

| 구분 | 선택 | 이유 |
| --- | --- | --- |
| 문서 | 기존 Next.js App Router와 TypeScript | 상세 route·metadata·정적 생성 계약 보존 |
| UI | 기존 React·registry source·Tailwind·Leement theme | 새 UI runtime dependency 없이 실제 예제 제공 |
| 리다이렉트 | Next.js permanentRedirect | 이전 상세 주소에 영구 이전 응답 제공 |
| 검증 | 기존 Vitest, production HTTP 및 브라우저 | 실제 소비자 관찰 경계에서 주소·선택·레이아웃 확인 |

## 아키텍처와 실행 순서

### T01: 분류와 주소

1. Spec FR-2의 10개 기능을 componentSections의 지정 구역에 추가하고 5개 배치를 Blocks 목록에 추가한다. Patterns group을 제거한다. 기존 기능별 A–Z 정렬은 유지한다.
2. items metadata의 해당 15개 type을 Component/Block으로 갱신한다. 부가 설명에서 독립 Pattern 레이어로 소개하는 현재 설명만 정리한다. 입력 pattern prop과 역사 기록은 유지한다.
3. Components·Blocks 상세 route의 정적 생성 목록에 새 항목을 추가한다. 기존 Patterns route는 기존 15개 whitelist를 보존하고 items의 새 분류에 맞는 주소로 permanentRedirect한다. 알 수 없는 slug는 notFound한다.
4. 상단·모바일 탐색과 sidebar에서 Patterns 선택지를 제거한다. 검색은 공통 navigation에서 새 링크를 얻는다. Showcase의 분류·검색 안내·상세 링크도 새 타입으로 맞춘다.
5. 현재 Usage·Foundations·설치 안내의 문서 링크와 분류 용어를 갱신하되 components/patterns import와 registry target은 유지한다. 홈은 T02에서 정리한다.
6. PRD와 디자인 시스템의 현재 분류·수·관련 용어를 갱신한다. 토큰·테마·registry source·registry.json은 변경하지 않는다.

### T02: 간결한 홈

1. 기존 홈을 짧은 중앙 정렬 헤드라인·설명·Get started와 View components 링크, 대표 UI 예제 그리드로 교체한다. 고정 참고 화면은 [artifacts/shadcn-home-reference.png](./artifacts/shadcn-home-reference.png)다.
2. 예제는 기존 source를 사용하는 소수의 카드로 구성한다. 컨트롤/로컬 폼, 상태 또는 데이터 표시, 날짜 선택 등을 보여 준다. 새 디자인 컴포넌트나 무거운 편집기·미디어 자동 재생을 추가하지 않는다.
3. CTA는 Spec의 /getting-started 및 /components/button을 사용한다. 검색·테마·기존 브랜드 header를 유지하며 홈에만 적용되는 기존 sidebar 제외 규칙을 보존한다.
4. 반복 소개 카드·별도 설치 섹션·gradient headline/glow를 제거한다. globals.css는 사용되지 않는 home-preview-glow만 제거한다. 홈 구조는 Tailwind의 기존 semantic 역할을 사용한다.
5. 폼과 날짜 등 예제의 공개 조작은 로컬 상태로 동작시킨다. heading 계층과 입력 이름, focus, 상태 안내를 유지한다. shadcn의 문구·데이터·브랜드 표현은 복제하지 않는다.
6. PRD와 디자인 시스템에서 랜딩의 간결한 정보 순서와 기존 브랜드 규칙의 적용을 설명한다. 이는 token 값 변경을 요구하지 않는다.

### T03: 통합 확인과 변경 이력

전체 검증 후 unreleasedChanges에 분류 이전과 간결한 랜딩 두 항목을 기록한다. 공개 버전 0.2.1과 releases 배열은 유지한다. Spec Acceptance·Tasks의 Checklist와 Decisions를 실제 결과에 맞춘다. 필요한 스크린샷과 요약 근거는 활성 Feature artifacts에 보관하고 일시적 대량 로그·브라우저 스크립트는 임시 디렉터리를 사용한다.

### T04: 전체 폭과 하단 페이드 후속 조정

사용자가 구현 결과에 요청한 구체적 시각 조정을 같은 Feature의 새 task로 수행한다. 앞선 완료 task는 다시 열지 않는다.

1. 홈의 max-w-6xl을 제거한다. 헤드라인은 중앙 읽기 폭을 유지하고 예제는 화면 전체 폭을 사용하되 16/24/32px의 responsive inset을 유지한다. 예제 카드가 넓은 화면에서도 읽기 어려울 정도로 늘어나지 않도록 필요한 열 배치를 조정한다.
2. 예제 그리드 하단을 테마 배경색으로 은은하게 연결한다. 장식은 aria-hidden 및 pointer-events:none으로 처리하고 폼·달력·설정과 focus를 가리지 않는다. clipping이나 fixed height로 실제 조작 영역을 숨기지 않는다.
3. 375/768/1440px와 1920px에서 light/dark의 폭·페이드·overflow와 기존 CTA/상호작용/키보드 focus를 확인한다. 변경 파일 ESLint/typecheck와 production build를 실행한다. 신규 영구 테스트는 추가하지 않는다. 카탈로그·registry·API에는 변경이 없어 이미 통과한 706개 회귀 검사를 반복할 이유가 없다.
4. PRD/디자인 시스템의 현재 랜딩 설명과 기존 미게시 랜딩 항목만 동기화하고 화면 근거를 보존한다. 하단 192px 페이드는 예제 표면과 아래 여백에 겹치며 CardContent 및 StatusNotice의 메시지·아이콘은 장식 위에 유지한다. xl 이상은 4열로 배치하고 Calendar의 콘텐츠 폭은 384px 이내로 유지한다. Spec의 추가 시각 기준은 이 사용자의 직접 수정 요청으로 승인된 범위로 기록한다.

## 파일 구조와 변경 범위

- apps/docs/lib/docs.ts, items.ts: 분류·표시 이름·링크
- apps/docs/app/components/[slug]/page.tsx, blocks/[slug]/page.tsx, patterns/[slug]/page.tsx: 정적 상세·호환 주소
- apps/docs/components/docs-navigation.tsx, docs-top-navigation.tsx, showcase-gallery.tsx: 탐색·카탈로그
- apps/docs/lib/usage-guides.ts, example-catalog.ts 및 관련 현재 설명: 새 내부 문서 링크·분류 용어
- apps/docs/app/foundations/[slug]/page.tsx, getting-started/page.tsx, adoption/page.tsx, layout.tsx: 현재 소개와 metadata
- apps/docs/components/docs-search.tsx: 태블릿 header의 검색 버튼 폭을 줄여 탐색 겹침 방지
- apps/docs/app/page.tsx 및 필요할 때 apps/docs/components/home-examples.tsx: 홈 구조·로컬 대표 예제
- apps/docs/app/globals.css: 미사용 home-preview-glow 제거 및 홈 전용 하단 배경 페이드
- apps/docs/lib/releases.ts: 미게시 변경 2개
- docs/prd/leement-prd.md, docs/designs/design-system.md: 현재 요구·디자인 설명
- registry/patterns, registry/ui, registry/blocks, registry.json, packages/tokens, packages/theme: 변경 없음

## Curated Documentation Impact

- **Schema**: 2
- **Assessment**: Complete
- **Product requirements**: UPDATE
- **System architecture**: NONE
- **Onboarding entrypoint**: NONE
- **Operational/runtime contract**: NONE
- **Reason**: PRD-FR-005/012/015의 현재 탐색·카탈로그와 랜딩 요구를 갱신한다. 런타임·배포·설치 구조는 유지한다. README의 분류 불일치는 보호 규칙으로 보류하며 Decisions D003에 경로·근거를 기록했다. 실제 설치 페이지는 T01에서 현재 분류 표현만 갱신한다. 새로운 공용 아키텍처 문서는 필요하지 않다.
- **Targets**: docs:prd/leement-prd.md

## Additional Curated Impacts

- **Assessment**: Complete
- **Decision**: DECLARED

| Kind | Decision | Target | Reason |
| --- | --- | --- | --- |
| design-system-ux | UPDATE | docs:designs/design-system.md | 공개 분류·현재 카탈로그와 간결한 랜딩의 정보 순서, 기존 token/source 적용을 동기화 |
| release-deployment | UPDATE | project:apps/docs/lib/releases.ts | 미게시 변경만 기록하며 공개 0.2.1과 과거 이력을 유지 |

모든 UPDATE target은 T01/T02/T03의 Docs에 연결했다. README는 D003의 명시적 보류를 가진 NONE이다. constitution/custom 규칙·소비자 설치 계약·개인정보·배포 설정은 변경하지 않는다. experimental.openwiki=false다.

## Verification Contract

### 변경 분류

- **유형**: NEW_BEHAVIOR
- **위험도**: MEDIUM

### 관찰 가능한 계약

- **지원해야 하는 동작**: 105 Components·41 Blocks·70 Charts 탐색, 15개 호환 주소의 영구 리다이렉트, 상세/Preview 보존, 접근 가능한 간결한 홈.
- **전제조건**: 기존 deps를 frozen lockfile로 설치하고 토큰·테마·registry를 build한다. production server는 별도 로컬 port를 사용해 사용자의 기존 main preview와 분리한다.
- **성공 후 보장**: 새 타입·주소·검색·선택 상태가 일치하고 기존 설치 source/import는 동일하다. 랜딩이 두 CTA와 실제 UI 예제를 제공한다.
- **중요한 실패 후 보장**: 알 수 없는 이전·새 slug는 404, 필터 검색 0건은 기존 empty state를 유지한다. 실패/수정은 현재 task에서 처리한다. 변경을 되돌리면 이전 route·홈과 소스 계약이 복원된다.
- **의도적으로 지원하지 않는 사례**: 설치 파일 자동 이동, registry 이름 변경, 신규 서비스 backend, 원격 게시/배포, shadcn 화면의 픽셀 단위 복제.

### 테스트 결정

| 계약 / 요구사항 | 결정 | 테스트 수준 | 보호할 현실적인 회귀 | 독립적인 Oracle |
| --- | --- | --- | --- | --- |
| FR-1/2/3 분류·탐색 | NONE | 비테스트: 브라우저/카탈로그 확인 | 누락·중복·잘못된 새 링크·Pattern 필터 잔존 | 승인 Spec의 15개 분류표와 기존 146개 항목 목록 |
| FR-4 호환 URL | NONE | 비테스트: production HTTP·브라우저 | 잘못된 redirect·404·현재 선택·anchor | Spec의 이전→새 15개 주소, 308/목적지/실제 화면 |
| FR-5 설치 보존 | NONE | 기존 registry-source/reference-coverage 검사 및 기준 diff | target·소스·dependency 변경, 복사 import 불일치 | 0.2.1 기준 registry와 source graph |
| FR-7 랜딩 | NONE | 비테스트: light/dark 브라우저 | CTA 오류·잘림·가로 overflow·무반응 로컬 예제 | 승인 정보 구조·고정 reference·실제 조작 |
| FR-6 이력·문서 | NONE | diff 및 docs audit | 과거 이력 덮어쓰기·현재 설명 불일치 | 기존 releases와 승인 Spec |

영구 테스트 추가·변경은 하지 않는다. 목록을 그대로 복제하는 단위 테스트는 추가하지 않는다. 소스 API를 변경하지 않으므로 기존 tests를 수정할 근거가 없으며 기존 source·reference 검사를 그대로 실행한다.

### 의도적으로 제외하는 테스트

- 픽셀 스냅샷, 모든 CSS class·정적 문구 검사, 프레임워크 redirect 자체의 단위 테스트.
- 기존 706개 동작 검사와 중복되는 신규 UI 테스트.
- 설치 경로 이동·새 backend·전체 앱 마이그레이션 같은 비지원 사례.

### 검증 실행

- **구현 중**: 작업 파일 type/lint 오류와 focused registry-source/reference-coverage tests, 기준 source/target diff를 확인한다.
- **태스크 완료 전**: T01은 15개 주소와 404·분류/count·대표 선택 상태를 로컬 server에서 확인한다. T02는 홈 375/768/1440px × light/dark 6개 상태의 overflow·CTA·로컬 입력/선택/폼 상태를 확인한다. 코드가 바뀐 task는 docs와 함께 commit한다.
- **Feature 완료 전**: 실제 설정의 pnpm run typecheck, pnpm run lint, pnpm run test, pnpm run build를 실행한다. 중복 full 실행은 코드 변경이나 새로운 실패가 있을 때만 한다.
- **수동/UI 검증**: final production server에서 기존 주소 15개와 새 상세 15개, 대표 anchor·Preview, unknown slug 404, desktop/mobile 메뉴·검색·Showcase를 확인한다. 홈은 6개 viewport/theme에서 시각 확인하고 keyboard focus·CTA·대표 로컬 조작 및 reduced motion을 확인한다. 기록은 Tasks/Decisions, 필요한 화면만 artifacts에 보관한다.
- **전체 테스트 필요 여부**: Yes — workflow.featureChecks가 요구하며 상세 item metadata와 공유 탐색을 변경한다. build는 production 정적 route와 deploy 결과를 검증하므로 포함하고 생략하지 않는다.

## 관련 문서

- Spec: [spec.md](./spec.md)
- Decisions: [decisions.md](./decisions.md)
- Tasks: [tasks.md](./tasks.md)
