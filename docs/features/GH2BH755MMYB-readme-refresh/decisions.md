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
