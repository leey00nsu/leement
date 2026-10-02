# Implementation Plan: readme-refresh

## 개요

- **기능 ID**: GH2BH755MMYB
- **대상 레포**: Leement
- **작성일**: 2026-10-02
- **상태**: Approved
- **Plan 검수**: Pending
- **Plan 검수 Evidence**: -
- **Plan 검수 Decision**: -
- **Plan 검수 Round**: -
- **Plan 검수 Spec Hash**: -
- **Plan 검수 Plan Hash**: -

## 구현 접근

기존 root README를 한국어 중심의 첫 진입 안내로 재구성한다. CopySinger/Leesfield의 로고·배지·실제 화면·시작·기능·구조 구성을 참고한다. 기존 Leement SVG를 사용하고 실제 docs의 light/dark 홈과 Color Foundations 편집 결과를 최대 세 장 캡처한다. README는 현재 public registry 목록을 정확히 소개하며 상세 API는 docs로 연결한다.

설치 안내는 로컬 docs 실행, 로컬 consumer trial, 공개 배포 후 사용을 구분한다. theme은 build 후 pack한 tarball로 독립 consumer에 설치한다. shadcn 초기화/Tailwind v4/기본 alias를 전제로 localhost namespace에서 button, empty-state, settings-section을 설치해 dependency 전개·import·source 수정·production build를 확인한다. 공개 npm/host는 읽기 전용으로 조회하고 검증되지 않은 주소를 실제 설치 URL로 적지 않는다. 변경이 필요한 package/config가 발견되면 README 계약 안에서 안내를 수정하며 제품 API는 바꾸지 않는다.

## 기술 스택

| 구분 | 사용 | 이유 |
| --- | --- | --- |
| 문서 | GitHub 호환 Markdown와 제한적인 HTML | 두 참조 README의 중앙 헤더와 배지 표현 |
| 제품 캡처 | 기존 docs + 사용 가능한 브라우저 자동화 | 실제 registry source의 화면을 기록 |
| 사용 검증 | 기존 pnpm/shadcn/Next.js/Tailwind | README의 실제 소비자 경로 검증 |
| 품질 검사 | 기존 typecheck/lint/test/build | 설정된 Feature gate 유지 |

## 파일 구조

```text
README.md                              # 소개·설치·기여·라이선스
apps/docs/public/readme-captures/       # 실제 light/dark/Foundation 화면
  home-light.png
  home-dark.png
  foundations-color.png
docs/prd/leement-prd.md                 # 현재 블록 규모 설명 한 문장 정정
```

캡처 이름은 실제로 선택한 화면에 맞춰 최종 확정한다. 일회성 consumer/렌더 스크립트·출력은 임시 경로를 사용하며 새 영구 테스트나 생성 도구를 추가하지 않는다. 필요한 검증 결과는 tasks/decisions에 기록한다.

## Curated Documentation Impact

- **Schema**: 2
- **Assessment**: Complete
- **Product requirements**: NONE
- **System architecture**: UPDATE
- **Onboarding entrypoint**: UPDATE
- **Operational/runtime contract**: NONE
- **Reason**: 제품 요구사항·레이어·API·운영 계약은 그대로다. README의 오래된 inventory와 설치 안내를 현재 executable source에 맞춘다. PRD-FR-003의 초기 8/5/1 요구는 유지하며, PRD의 카탈로그 설명에 남아 있는 현재 단일 SettingsSection block 문장만 현재 8개 block의 규모와 별도 확장 기준에 맞춘다. docs/README.md, design-system.md, agents/constitution.md/custom.md와 현재 docs 설치·도입 페이지를 검토한다. 헌법/custom의 템플릿은 런타임 정본으로 인용하지 않으며 새 정책을 만들지 않는다.
- **Targets**: project:README.md, docs:prd/leement-prd.md

## Additional Curated Impacts

- **Assessment**: Complete
- **Decision**: NONE

디자인 규칙·token/theme·primitive behavior·공통 정책·배포/보안/관측성은 변경하지 않는다. README에서 기존 규칙/고지로 연결한다. OpenWiki는 disabled이며 생성하지 않는다.

## Verification Contract

### 변경 분류

- **유형**: COPY
- **위험도**: LOW

### 관찰 가능한 계약

- **지원해야 하는 동작**: 실제 디자인을 README에서 확인하고 로컬 docs 실행, theme/CSS/registry 설치·dependency 설치·소스 수정·consumer build까지 따라 할 수 있다.
- **전제조건**: Node 22 이상과 packageManager의 pnpm 10.34.5, 네트워크와 initialized shadcn/Tailwind v4 React consumer. 공개 배포 경로는 publish/host의 실제 확인이 전제다.
- **성공 후 보장**: README의 파일·anchor·패키지·명령·소스 경로는 현재 구현과 일치하며 캡처는 실제 docs 화면이다. 제공 항목은 experimental/candidate/stable 근거를 따른다.
- **중요한 실패 후 보장**: 공개 주소가 없거나 네트워크 조회에 실패하면 미확인/조건부임을 표기하고 검증 가능한 local trial을 제공한다. 사용자 프로젝트나 원본 앱을 수정·배포하지 않는다.
- **의도적으로 지원하지 않는 사례**: source ownership 없는 React npm 패키지 import, 전면 앱 교체 보장, custom alias 자동 이식, publish/deploy, UI/API 변경.

### 테스트 결정

| 계약 / 요구사항 | 결정 | 테스트 수준 | 보호할 현실적인 회귀 | 독립적인 Oracle |
| --- | --- | --- | --- | --- |
| US-1, FR-3 시각 자료 | NONE | 비테스트: 실제 UI/Markdown 렌더 검사 | 깨진 이미지·보이지 않는 글자·가상 화면 | 실제 docs와 승인된 소개 범위 |
| US-2 실제 설치 | NONE | 비테스트: 임시 독립 consumer 설치·수정·build | theme export/폰트 누락·registry dependency/import 실패 | 생성된 consumer source와 production compiler |
| US-3, FR-2 현재 사실 | NONE | 비테스트: 코드·metadata·scripts·license 대조 | 공개 항목과 helper 혼동·잘못된 링크·과장된 배포 상태 | tracked registry/package/theme/라이선스와 읽기 전용 외부 조회 |

### 의도적으로 제외하는 테스트

README 문구/컴포넌트 수를 복제하는 snapshot, 새 screenshot golden suite, 브라우저 전체 조합 검증은 추가하지 않는다. 제품 behavior가 바뀌지 않으므로 기존 테스트를 수정하지 않는다.

### 검증 실행

- **구현 중**: frozen dependency 설치, docs 실행, 실제 light/dark/Color 편집 확인과 캡처, inventory·exports·폰트·링크 근거 확인.
- **태스크 완료 전**: 상대 파일/이미지/anchor와 GFM 호환 렌더 확인; 임시 initialized consumer에 tarball theme 및 registry 설치, 컴포넌트 소스 한 곳 수정 후 build; git diff --check.
- **Feature 완료 전**: 실제 workflow.featureChecks인 pnpm run typecheck, pnpm run lint, pnpm run test, pnpm run build를 실행한다. 명령별 결과를 기록하고 local verify가 요구하는 정확한 tip 검사도 따른다.
- **수동/UI 검증**: 실제 docs와 README의 rendered HTML을 브라우저에서 보고 캡처 폭·글자·light/dark·편집 결과를 확인한다. GitHub에 원격 게시하지 않으므로 실제 GitHub 게시 화면 확인과 구분한다.
- **전체 테스트 필요 여부**: Yes — 저장소의 configured Feature checks에 포함된다. 태스크마다 중복 실행하지 않으며 최종 gate에서 실행한다. build는 theme/font/registry/docs를 함께 검증하므로 제외하지 않는다.

## 관련 문서

- Spec: [spec.md](./spec.md)
- Decisions: [decisions.md](./decisions.md)
- Tasks: [tasks.md](./tasks.md)
