# Decisions Log

## D001: 두 앱의 본문·브랜드 서체 역할을 기본값으로 채택 (2026-09-30)

- **Context**: 사용자는 두 앱의 아이콘+글자 로고와 동일 서체 규칙을 Leement에서도 기본 제공하고 커스텀을 허용하도록 요청했다.
- **Constraints**: token/theme/registry 책임을 유지하고 소비자 로고를 Leement 자산에 묶지 않는다. 구현 전 spec 승인 경계를 지킨다.
- **Options**: font stack 이름만 유지, 로딩을 앱에 맡김, theme에 기본 폰트 자산과 역할별 override를 제공.
- **Decision**: 본문 Pretendard, 워드마크 Paperlogy Bold(700)를 실제 로드한다. BrandLogo pattern은 앱이 제공한 아이콘·이름을 조합한다. Leement 문서 브랜드 자산에는 사용자 SVG를 사용한다.
- **Rationale**: 반복된 역할을 기본값으로 제공하면서 앱의 정체성을 설정할 수 있다. 로딩 없는 family 선언만으로는 설치 경험을 충족하지 못한다.
- **Trace**:
  - CopySinger `src/_app/styles/globals.css`는 Pretendard Variable을 import한다. `src/_app/layout/root-layout.tsx`는 Paperlogy-7Bold.ttf를 700으로 로드한다. `src/widgets/product-shell/ui/product-brand.tsx`는 아이콘과 font-brand/font-bold 글자를 조합한다.
  - Leesfield `src/app/layout.tsx`는 pretendard-variable.woff2와 paperlogy-brand.woff2(700)를 로드한다. `src/shared/ui/app-brand-logo.tsx`는 full/icon·sm/md/lg와 font-brand/font-bold를 제공한다.
  - Leement token에는 Pretendard stack만 있다. theme build에 font-face와 brand family alias가 없고 docs header는 L 사각형과 sans 글자를 사용한다.
  - 중단된 workspace prepare는 seed 커밋과 managed worktree 생성을 마쳤다. workspace_enter 경로에서 spec 작성을 이어갔다.
- **Evidence**:
  - Source: 위 두 앱 layout/globals/brand와 Leement `packages/tokens/src/tokens.json`, `packages/theme/build.mjs`, `apps/docs/app/layout.tsx`.
  - [Pretendard 원본 라이선스](https://github.com/orioncactus/pretendard/blob/main/LICENSE).
  - [Paperlogy 공식 배포처](https://freesentation.blog/paperlogyfont). 구현 시 실제 자산의 원본 고지·라이선스를 확인해 포함한다.
  - 사용자 SVG는 [spec.md](./spec.md)의 FR-4에 보존한다.
- **Consequences**: theme 배포에 웹폰트 자산이 포함된다. 브랜드 family는 Typography 실시간 편집·CSS 복사에 연결한다. pattern maturity는 candidate로 기록한다.

## D002: README 보호 범위 (2026-09-30)

- **Context**: 신규 폰트 로딩과 로고 사용법은 소비자 문서에 반영해야 한다.
- **Decision**: 공개 docs의 Typography·Getting Started·BrandLogo, PRD·design-system을 현재 계약에 맞춘다. 기존 README는 사용자가 편집을 요청하지 않아 이번 Feature에서 편집하지 않는다.
- **Trace**: README와 새 계약 사이의 실제 불일치는 구현 시 확인해 같은 기록에 경로·근거를 추가한다. 현재 미확인 불일치를 해결됐다고 주장하지 않는다.
- **Evidence**: 프로젝트 AGENTS.md의 README protection 규칙 및 [spec.md](./spec.md)의 범위.

T01 검증: 공식 Paperlogy v1.000 TTF와 CopySinger 원본의 SHA256은 모두 fe71049fe3d3a7dd3f2e0c12efd850acd1293658181af322348edde9b016e6ba였다. 동일 outline을 전체 WOFF2로 변환해 164108 bytes, 11723 cmap 항목을 보존했다. Pretendard v1.3.9 WOFF2는 2057688 bytes, wght 45–930이며 원본 그대로 사용한다. pack에 두 font 파일과 각 OFL/NOTICE가 포함된다. theme build·typecheck·lint와 tokens build가 통과했다. 2026-09-30 사용자 A로 Spec 승인; Plan은 workflow의 자동 승인 정책을 따랐다.

D002 확인: 현재 root README.md와 docs/README.md에서 font/Pretendard/Typography/logo를 언급하는 설명은 발견되지 않았다. 공개 docs의 로딩 가이드는 T03에서 갱신한다.

## D003: 앱이 소유하는 로고와 문서 브랜드 자산 (2026-09-30)

- **Context**: 두 앱의 아이콘+이름 조합을 공유하되 소비자 브랜드를 Leement 색/아이콘에 묶으면 안 된다.
- **Decision**: BrandLogo는 mark/name을 필수 입력으로 받는 span pattern이며 full/icon·sm/md/lg, brand family·고정 700 굵기를 사용한다. 외부 Link가 navigation/focus를 맡는다. Leement SVG는 public/leement-mark.svg 한 개로 보관해 header·examples·favicon이 공유한다.
- **Trace**: 기존 패턴 route는 허용 목록을 별도로 사용하므로 BrandLogo를 route/nav/metadata/preview/registry에 모두 연결했다. 실제 Chromium에서 Pretendard Variable/Paperlogy가 loaded, 두 WOFF2 요청 200, wordmark 700, favicon 경로 일치를 확인했다. Header link focus와 icon-only name, consumer name 변경, 375px dark 가로 overflow 없음도 확인했다.
- **Evidence**: pattern composition 5 tests, docs typecheck, changed-source ESLint, registry build; [desktop light](./artifacts/brand-logo-desktop-light.png), [mobile dark](./artifacts/brand-logo-mobile-dark.png).
- **Consequences**: 브랜드 고정값은 문서 자산에만 둔다. 테스트용 Aside 프로필이 daemon에 연결되지 않아 기존 Playwright/Chromium으로 같은 검증을 수행했다.

## D004: 본문·브랜드 폰트의 독립 편집과 실제 배포 검증 (2026-09-30)

- **Decision**: 기존 shared preview 상태에 brand family를 추가하고 본문·브랜드·mono를 각각 기본 family 선택과 custom CSS 목록 입력으로 제공한다. family name/목록만 허용하며 CSS 함수·escape·주입은 거부한다. 기존 v1 저장키와 값은 유지한다. custom 이름은 앱이 로드한 파일 또는 로컬 폰트를 참조하며 자동 다운로드하지 않는다.
- **Evidence**: foundation-preview 5 tests, production docs build를 포함한 `pnpm check` 통과(12 files / 73 tests). 실제 브라우저에서 header·실제 registry preview의 브랜드만 Georgia/Courier로 변경되고 본문은 Pretendard 또는 별도 system sans로 유지됐다. CSS 복사·route/reload·reset·invalid aria-invalid·dark 및 375px overflow 없음 확인. [Typography editor](./artifacts/typography-editor-desktop-light.png).
- **Consumer**: 별도 Vite/strict TypeScript 앱에 theme tgz를 설치한 뒤 `@leement` namespace를 로컬 docs registry로 연결해 실제 shadcn CLI로 BrandLogo와 utils source를 설치했다. production build에 Paperlogy/Pretendard WOFF2가 포함됐고 각각 HTTP 200/loaded였으며 본문 Pretendard·로고 Paperlogy 700 및 앱 소유 custom mark/한글 name·icon accessible name·링크 focus를 확인했다. docs에서 복사한 CSS를 소비자에 적용해 body/brand 독립 override도 확인했다.
- **Refinement**: registry.json의 불필요한 전체 재포맷을 원래 형식으로 되돌렸다. Feature 전체 diff에는 BrandLogo item만 추가된다.
- **Limits**: 기본 Pretendard 전체 Variable WOFF2는 약 2.06 MB, Paperlogy 전체 700 WOFF2는 약 164 KB다. swap과 fallback을 사용하므로 파일 로딩 전에 대체 폰트가 표시될 수 있다. 사용자 custom family 파일과 실제 700 face 로딩은 소비자 앱의 책임이다. npm/public registry publishing은 이 Feature에서 실행하지 않았다. 검증은 실제 packed package와 로컬 배포 URL에 대해 수행했다.
- **Workflow**: T01/T02/T03 구현 완료 후 implementation_approve에서 사용자 확인을 받는다. main 통합은 별도 local_merge 승인을 받아야 한다.
