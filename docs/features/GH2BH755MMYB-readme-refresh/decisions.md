# Decisions Log

## D001: 두 제품의 소개 방식을 Leement의 source 설치 경험에 맞춘다 (2026-10-02)

- **Context**: 사용자가 CopySinger와 Leesfield 수준으로 README를 정돈하고 싶다고 요청했고 비교 분석 제안 후 `ㄱㄱ`로 진행했다. 기존 Leement README는 초기 bootstrap 내용이다.
- **Options**: 문구 몇 곳만 갱신하거나, 두 제품처럼 로고/실제 화면/시작/주요 기능/구조/검증의 읽기 순서로 구성한다.
- **Decision**: 기존 루트 README와 필요한 실제 UI 캡처를 정돈한다. 한국어 소개를 기본으로 하고, 일반 앱의 backend/API 목록 대신 Leement의 theme+registry source 설치와 Foundations 경험을 중심으로 한다. 상세 API는 기존 docs로 연결한다.
- **Trace**:
  - Leement README는 73줄, 로고/캡처/기술 스택 표가 없고 UI 8/pattern 5/block 1이라는 초기 inventory를 적고 있다. CopySinger는 306줄, Leesfield는 222줄로 로고·설명·배지·바로가기·실제 화면 2장과 주요 기능/시스템/실행/구조/검증을 제공한다. 길이는 목표가 아니라 비교 근거다.
  - 현재 registry는 UI 64, pattern 13, block 8, 내부 lib 3으로 총 88항목이다. tokens/theme exports와 scripts, 기본 Pretendard Variable/Paperlogy Bold, Foundations editor, AudioPlayer/VideoPlayer 및 motion metadata를 읽었다. 기존 Radix-only 설명은 Base UI/Radix 혼용에 맞춰 갱신할 필요가 있다.
  - 기존 README는 미배포라고 설명하고 Git remote 출력은 빈 값이었다. docs source의 GitHub URL을 공개 저장소 검증 근거로 간주하지 않는다. 실제 npm/host 상태와 링크는 구현의 읽기 전용 검증에서 확인하며 배포하지 않는다.
  - PRD-FR-003의 8/5/1은 초기 v0.1 요구사항이고 README의 현재 inventory와 다르다. PRD의 초기 요구를 현재 코드 수량에 맞춰 삭제하지 않는다. README에는 현재 registry를 근거로 소개하며 별도 문서 변경 영향은 Plan에서 판정한다.
  - 사용자가 README 수정을 명시했으므로 이 Feature의 루트 README 정돈은 보호 규칙의 허용 범위다. 다른 README나 원본 두 앱은 읽기 전용으로 둔다.
- **Evidence**:
  - Leement 분석 기준 main `e248874`; README 최초 commit `72023c6`.
  - CopySinger `/Volumes/sn850x/programming-2/copy-singer-3/README.md`, README revision `b479e9a0f3bca19358f4c54e758fb8f2a64b152f`.
  - Leesfield `/Volumes/sn850x/programming-2/leesfield/leesfield-fe/README.md`, README revision `7ea5b7282699998c59b435c78fe94552270c92f2`.
  - Leement `registry.json`, `apps/docs/lib/docs.ts`, root/docs/theme/tokens package.json, `components.json`, `apps/docs/public/leement-mark.svg` 및 font assets.
- **Consequences**: 새 Feature GH2BH755MMYB는 official workspace prepare로 만든 단일 managed worktree에서 진행한다. Spec 단계에서는 README/제품 자산/실행 코드를 수정하지 않는다. 기존 shared-motion-patterns는 done 상태다.

## D002: Spec 명시적 승인 (2026-10-02)

- **Context**: 작성된 명세 링크와 lee-spec-kit spec_approve의 A/B 옵션을 공유했다.
- **Decision**: 사용자 응답 `A`로 GH2BH755MMYB 명세가 승인되었다. Spec을 Approved로 기록하고 다음 workflow 단계로 진행한다.
- **Boundary**: 이 응답은 명세 승인이다. 구현 결과 승인과 local merge 승인은 해당 경계에서 별도로 받는다.

## D003: 자동 Plan 승격과 문서 영향 (2026-10-02)

- **Decision**: workflow-stage의 plan_approve가 approvalRequired=false이며 Review에서 Approved로 자동 승격하도록 반환했다. 사용자 승인을 꾸미지 않고 반환된 정책으로 승격한다.
- **Scope**: 두 순차 태스크로 README/제품 캡처와 설치 실증을 진행한다. Curated impact는 root README와 PRD의 현재 block 설명 한 문장이다. 제품 요구·API·디자인은 바꾸지 않는다.
- **Shared documentation**: 기존 완료 Feature들의 PRD 수정과 경로가 겹친다는 경고를 확인했다. main seed와 worktree의 PRD가 같은 base에서 출발했고 기존 브랜드/폰트/Foundation/도입/모션 요구를 유지한다. 초기 FR-003도 유지한다.

## D004: 실제 캡처와 배포 사실 확인 (2026-10-02)

- **Capture**: 홈의 light/dark와 Color live editor를 실제 registry source에서 캡처했다. 기본 홈은 현재 브랜드값 그대로이며 Color는 사용자가 편집할 수 있음을 보이도록 brand text/start/middle/end를 teal 계열로 입력했다. Copy CSS의 성공 상태와 localStorage/current CSS variable을 확인했다. 개발자 도구 표시만 screenshot style에서 숨겼고 제품 UI를 합성하지 않았다. 각 PNG는 1440×1280, 총 약 460KB다.
- **Browser**: aside-browser 절차를 읽고 연결을 시도했으나 profile u0가 daemon에 연결되어 있지 않았다. 기존 Playwright와 설치된 Chrome으로 대체했다. 페이지 error는 없었다.
- **Publication**: 2026-10-02 읽기 전용 npm endpoint 조회에서 theme/tokens가 각각 404, GitHub repository API도 404였다. 404는 private/public 여부 전체를 증명하지 않으므로 공개 조회 결과만 적고 clone/demo 주소를 만들지 않는다. public registry URL은 확정하지 않는다.
- **Rendering**: 임시 Marked GFM 출력과 GitHub 호환 스타일로 README를 렌더해 이미지/표/코드/헤더를 확인했다. 이는 실제 GitHub 게시 결과가 아니며 원격 업로드는 하지 않았다. 일회성 스크립트/렌더 출력은 /tmp에만 두고 제품에는 README와 캡처만 저장한다.

## D005: 최신 shadcn 설치와 CSS preset 충돌 안내 (2026-10-02)

- **Evidence**: 독립 Vite consumer를 latest CLI 4.21.1로 init하고 README theme tarball·registry alias·세 항목 설치·TSX 예제를 그대로 사용했다. 기본 init은 Button/utils를 생성하므로 add의 두 overwrite prompt에 동의했다. 실제 자동 dependency 결과는 utils/Button/Card/FormSection/EmptyState/SettingsSection이다. Button에 consumer-owned data attribute를 직접 추가하고 다시 production build했다.
- **Decision**: 초기화 CSS의 기본 :root/.dark 색상과 font/radius @theme preset이 Leement를 덮어쓸 수 있어 README에 해당 preset 정리를 명시했다. 소비자 테스트 CSS는 Tailwind → Leement → animation/shadcn CSS를 사용한다. 제품 theme/registry나 API는 바꾸지 않는다.
- **Limits**: Vite가 use client directive를 무시한다는 bundle warning은 있었으나 strict typecheck/build는 성공했다. Pretendard는 실제 loaded이고 사용하지 않는 Paperlogy는 브라우저에서 unloaded 상태이며 패키지/출력에 포함된 것은 확인했다. 전체 브라우저/앱 채택을 증명하지 않는다. npm 조회 404와 public host 미확정은 README에 명시했다.
- **Rendering**: 최종 README는 상대 파일 18개, fragment 15개와 표/코드/9개 이미지를 확인했다. 임시 GitHub 호환 preview의 desktop 및 390px 폭에서 broken local image나 body 가로 넘침이 없었다.
