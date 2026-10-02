# Feature Spec: readme-refresh

## 개요

- **기능 ID**: GH2BH755MMYB
- **기능명**: README 소개·설치·시각 자료 정돈
- **대상 레포**: Leement
- **작성일**: 2026-10-02
- **상태**: Approved

## 목적

CopySinger와 Leesfield README의 로고·핵심 설명·배지·바로가기·실제 화면·실행 안내 구성을 참고해 Leement의 첫 진입 문서를 현재 구현에 맞춘다. 처음 방문한 개발자가 디자인을 보고, 디자인 시스템의 책임을 이해하고, 문서 사이트를 실행하거나 자신의 프로젝트에 설치할 수 있어야 한다.

사용자는 루트 README 정돈을 명시적으로 요청했으며 분석 제안에 `ㄱㄱ`로 진행을 요청했다. 이 요청은 이번 범위의 기존 README 수정 권한이다. Spec 승인 전에는 README나 제품 자산을 수정하지 않는다. 이전 shared-motion-patterns Feature는 통합·검증·main 병합·정리가 완료되었으며 이 Feature는 그 이후의 별도 README 작업이다.

## 범위

| 영역 | 결과 |
| --- | --- |
| 첫 소개 | 기존 Leement mark, 한국어 핵심 설명, 근거 있는 기술·라이선스 배지, 주요 섹션 바로가기 |
| 디자인 소개 | 실제 docs의 light/dark UI와 Foundations 편집 경험을 보여주는 적정 수의 캡처 |
| 시작·설치 | 로컬 docs Quick Start와 소비자 theme/CSS/registry/source 설치를 각각 명확히 안내 |
| 기능·구조 | Foundations, 브랜드·폰트, UI/Patterns/Blocks, 미디어·모션과 레이어 책임 소개 |
| 개발·참여 | 기술 스택, 프로젝트 구조, 검증 명령, 사용 규칙·maturity·기여 기준, 관련 문서·라이선스 |
| 현재 사실 | registry inventory, primitive 구현, scripts, 패키지 exports, 실제 배포 상태와 링크 확인 |

## 사용자 스토리

### US-1: 첫 화면에서 디자인 시스템을 이해한다

**As a** 저장소를 처음 방문한 개발자
**I want** Leement의 이름·디자인·철학·대표 기능을 빠르게 이해한다
**So that** 내 프로젝트에 사용할지 판단할 수 있다.

**Acceptance Criteria:**

- [ ] 기존 SVG mark와 제목, 한국어 한 문장 설명, 배지·바로가기 및 실제 화면을 상단에 배치한다. 본문은 한국어를 중심으로 하고 API·기술명은 원래 이름을 유지한다.
- [ ] 핵심 설명은 Design Tokens + Design Rules가 정본이며 shadcn registry가 editable React source의 배포 수단임을 표현한다. 컴포넌트 npm 라이브러리로 오해하게 만들지 않는다.
- [ ] 실제 light/dark 디자인과 Foundations에서 값을 바꿔 UI에 반영하는 경험을 캡처로 보여준다. 문서용 UI 복사본이나 가상 기능을 만들지 않는다.
- [ ] 대표 기능으로 semantic tokens/theme, 브랜드·Pretendard/Paperlogy, UI·패턴·블록, CSS 편집/복사, 공통 모션, AudioPlayer/VideoPlayer를 현재 계약에 맞게 소개한다.
- [ ] GitHub에서 읽기 쉬운 크기와 유효한 상대 경로·alt를 가진 자산을 사용한다. 캡처는 실제 제품 자산 경로에 두고 검증용 보조 자료와 구분한다.

### US-2: 직접 실행하거나 프로젝트에 설치한다

**As a** Leement를 시험하려는 개발자
**I want** 순서가 명확하고 실제로 작동하는 시작·설치 안내를 읽는다
**So that** 문서만 보고 첫 사용까지 진행할 수 있다.

**Acceptance Criteria:**

- [ ] 로컬 Quick Start에 저장소 준비, Node/pnpm 요구사항, frozen dependency 설치와 실제 docs 실행 명령·주소를 제공한다. 미확인 clone URL을 실행 가능한 주소처럼 적지 않는다.
- [ ] 소비자 안내는 theme 설치 → Tailwind 뒤 CSS import → components.json namespace → 필요한 UI/pattern/block 설치 → 프로젝트 소스로 import/수정의 순서를 제공한다.
- [ ] 로컬 trial과 공개 배포 사용 조건을 구분한다. local theme build/pack 또는 file 설치와 registry host/alias 전제를 명시하고 설치 예제를 검증한다.
- [ ] README의 패키지명·명령·코드 예제·별칭·경로를 실제 scripts/exports/source로 대조한다. 초기 README의 오래된 inventory 및 Radix-only 설명을 현재 registry/primitive 구성에 맞춘다.
- [ ] npm/registry/데모 링크의 공개 상태를 확인한다. 미배포 항목을 배포 완료로 표시하거나 YOUR_HOST를 실제 사이트로 연결하지 않는다. Git remote가 없어도 검증 가능한 로컬 사용 경로를 제공한다.

### US-3: 프로젝트의 구조와 기여 기준을 찾는다

**As a** 소스를 수정하거나 기여하려는 개발자
**I want** 레이어·폴더·검증·설계 기준과 라이선스를 이해한다
**So that** 기존 디자인 언어와 source ownership을 유지한다.

**Acceptance Criteria:**

- [ ] Design Language → Tokens → Web Theme → UI Components → Patterns → Blocks → Application 관계와 Leement/shadcn compatibility 방향을 설명한다.
- [ ] tokens/theme/registry ui-patterns-blocks/docs/tooling의 실제 책임을 구분한다. registry source와 docs preview는 같은 구현이라는 점을 유지한다.
- [ ] 기술 스택과 핵심 검증 명령을 실제 설정에서 확인하고 디자인 규칙·설치/도입 문서·변경 기록 등 유효한 관련 문서로 연결한다.
- [ ] experimental/candidate/stable과 승격 원칙을 설명한다. 대표 앱의 격리 교체 검증을 원본 앱 전체 적용 완료나 모든 브라우저 보장으로 과장하지 않는다.
- [ ] MIT 본체와 외부 코드·WaveSurfer·폰트 고지를 연결한다. 다른 제품 README의 backend/API/OpenWiki 설정을 Leement 기능으로 복제하지 않는다.

## 기능 요구사항

### FR-1: 정돈된 읽기 순서

소개/바로가기/화면 → Quick Start → 프로젝트에 설치 → 주요 기능 → 디자인 시스템 구성 → 기술 스택·프로젝트 구조 → 검증·기여 → 배포 상태·관련 문서·라이선스를 기본 순서로 한다. 로컬 개발과 소비자 설치의 대상 독자를 구분한다. 길이를 늘리는 것 자체를 목표로 하지 않으며 README는 첫 진입 안내, 상세 API·상태별 설명은 기존 docs의 책임이다.

### FR-2: 실행 가능한 정본으로 사실 확인

registry.json과 공개 navigation/source, package.json/lock/exports, tokens/theme, 디자인 규칙 및 실제 배포 조회를 근거로 쓴다. 88개 registry 항목에는 내부 helper가 포함되므로 공개 UI 수와 합계를 혼동하지 않는다. 숫자를 표시한다면 기준을 명시하고 중복·모호한 과장 없이 유지한다. README는 제품 계약을 새로 바꾸지 않으며 필요한 문서 불일치는 Plan의 Curated Documentation Impact에서 별도로 판정한다.

### FR-3: GitHub 호환 표현과 자산

기존 로고와 실제 UI 캡처를 사용한다. PNG 등 캡처는 가독성을 유지하는 범위에서 크기를 줄이고, README용 자산은 기존 docs public 아래 적절한 경로에 저장한다. README에서 접근 가능한 상대 경로를 사용하고 외부 서비스 없이는 깨지는 iframe·스크립트를 요구하지 않는다. 목차 anchor·링크·이미지·코드 블록·구조 그림의 GitHub 호환 렌더링을 확인한다.

## 비기능 요구사항

- **단순성**: README와 필요한 자산을 중심으로 기존 설명을 다시 구성한다. 배포/CI/README 생성기·새 테스트 프레임워크·별도 영어 README를 추가하지 않는다.
- **정확성**: 미검증 배포·설치·안정성 주장이나 CopySinger/Leesfield 전면 도입 완료 주장을 하지 않는다. 폴더 이름이나 패키지 버전을 badge 때문에 임의로 바꾸지 않는다.
- **검증**: Spec 승인 후 Plan에서 링크/자산/GFM 렌더, 실제 로컬 실행/consumer 설치·source edit/build, configured Feature gates의 실행과 범위를 확정한다. 설명을 snapshot으로 복제하는 영구 테스트는 만들지 않는다.
- **통합**: 구현 승인과 local merge 승인은 구분한다. 하나의 managed Feature worktree에서 문서/자산과 작업 이력을 함께 관리한다.

## 제외 범위

docs UI 재설계, 새로운 component/token/API, 원본 두 앱의 README 변경, 다른 README의 일괄 정리, npm publish/웹 배포/원격 push, GitHub Actions·release pipeline, OpenWiki 도입, README 자동 생성, 새로운 번역 파일은 포함하지 않는다. 외부 주소 확인과 package registry 조회는 읽기 전용이다.

## 관련 문서

- PRD: [leement-prd.md](../../prd/leement-prd.md)
- PRD Refs: PRD-FR-001, PRD-FR-002, PRD-FR-004, PRD-FR-005, PRD-FR-006, PRD-FR-008, PRD-FR-011, PRD-FR-012, PRD-FR-013, PRD-NFR-003, PRD-NFR-004
- Design Refs: docs/designs/design-system.md
- Design System: [design-system.md](../../designs/design-system.md)
- 비교 분석 및 출처: [decisions.md](./decisions.md)
