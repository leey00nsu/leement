# Decisions Log

기술 결정과 그 이유를 기록합니다.
canonical docs surface 밖의 unmanaged docs 산출물(예: `docs/plans/*`, `docs/superpowers/*`)이 있더라도, 실제로 채택한 대안과 선택 이유는 이 파일에 다시 남겨 Feature의 결정 이력을 유지합니다.

> ADR(Architecture Decision Record)은 구현 중 내린 중요한 기술/구조 결정을 남기는 기록입니다.
> 나중에 "왜 이렇게 만들었는지"를 추적하고, 팀 합의를 재확인하기 위해 작성합니다.

> 형식: `DNNN: ui-residual-repairs 결정 (2026-09-28)`
> 결정 ID는 Feature별로 독립된 번호를 사용하며 Feature ID와 관계없이 `D001`부터 시작합니다.

기록 원칙:

- 새 ADR 생성에는 `npx lee-spec-kit decision add <feature-ref> --title "..." --context "..." --decision "..." --rationale "..." --evidence "..."` 사용을 우선하세요.
- 수동 작성도 마지막 ADR 뒤에 추가해 D001 → D002 순서를 유지하세요. 문서 안내문 앞에 삽입하거나 기존 ID를 재번호화하지 마세요. 같은 결정의 재실행·검증 결과는 해당 ADR의 Trace/Evidence를 갱신하고, 새 선택이나 범위 변경일 때만 새 ADR을 만드세요.
- 모든 ADR은 **Decision(무엇을 선택했는가)** + **Trace(어떻게 고민했고 무엇을 확인했는가)** 를 함께 남깁니다.
- 작성 타이밍을 고정합니다.
  - 태스크 시작(`[TODO] -> [DOING]`): `Context/Constraints`와 `Trace(초기 가설)`를 1~3줄로 먼저 기록
  - 태스크 완료 직전(`[DOING] -> [DONE]`): `Options/Decision/Rationale`를 최종화하고 `Trace`를 보강
  - PR 머지 후: 실제 결과/영향을 `Trace(머지 후 확인)`에 1~2줄 추가
- 모든 ADR에는 최소 1개 이상의 **Evidence 링크**(커밋/PR/테스트 로그 중 하나 이상)를 남깁니다.
- 디자인 시스템 변경이나 예외를 기록할 때는 영향 받는 규칙과 범위, 예외 이유, 제거 조건, 실행 가능한 정본의 동기화 영향을 함께 남깁니다.

---

## D001: Slider orientation selector와 실제 DOM 동기화 (2026-09-28)

- **Context**: Slider 트랙과 제어 영역 높이가 0px으로 렌더되어 thumb·선택 구간이 화면에 표시되지 않았다.
- **Constraints**: Base UI의 값·키보드·포인터·접근성 동작과 공개 Slider API를 유지한다.
- **Options**: 자체 Slider 레이아웃/입력을 다시 구현하거나, Base UI의 현재 DOM 속성에 맞는 CSS 선택자를 쓴다.
- **Decision**: root/control/track/indicator의 방향 선택자를 `data-[orientation=horizontal|vertical]`로 맞추고 source-backed 예제에 세로·disabled 사례를 더한다.
- **Rationale**: Base UI가 실제로 `data-orientation`을 출력하므로 CSS만 고치면 상호작용 엔진을 유지하면서 가로·세로 크기를 회복한다.
- **Trace**:
  - **DOING 시작 시점**: `data-horizontal`/`data-vertical` CSS와 Base UI 출력 속성이 불일치하는 것으로 판단했다.
  - **DONE 전 확정 시점**: 브라우저에서 수정 전 가로 track 384×0px, 수정 후 384×4px, 세로 track 4×160px을 측정했다. 가로 단일·범위 thumb, 키보드 35→36, 포인터 36→81, disabled 35 유지, light/dark 및 1440/390px을 확인했다.
  - **머지 후 확인**: 병합 후 확인 예정.
- **Evidence**:
  - **Screenshots**: [수정 전](./artifacts/slider-before.png), [수정 후](./artifacts/slider-after.png)
  - **Test/Log**: `pnpm exec vitest run registry/ui/source-extension.test.tsx` — 7 tests passed; 실제 브라우저 DOM geometry 및 입력 확인.
- **Consequences**: 디자인 문서에 Base UI `data-orientation` 및 세로 높이 계약을 기록했다. token/theme은 바뀌지 않았다.

## D002: Reel의 Block 분류를 유지하며 Social에서 교차 탐색 (2026-09-28)

- **Context**: Stories 미리보기가 팝업 영상으로 보였고 Social 메뉴에는 Reel이 없어 두 UI의 관계가 불분명했다.
- **Constraints**: Reel은 이미 `registry:block`과 `/blocks/reel` 경로로 배포된다. 중복 item을 만들지 않는다.
- **Options**: Reel을 Component로 재분류하거나, Social 목록에 Block 문서로 가는 교차 링크를 둔다.
- **Decision**: Social 메뉴에 Reel → `/blocks/reel`을 추가하고 두 문서에 서로의 용도와 링크를 명시한다.
- **Rationale**: 레지스트리 분류와 설치 경로를 유지하면서 발견 가능성만 개선한다.
- **Trace**:
  - **DOING 시작 시점**: Stories는 thumbnail-triggered Radix dialog, Reel은 독립 영상 피드로 확인했다.
  - **DONE 전 확정 시점**: 브라우저에서 Stories dialog 열기/닫기, Social Reel 링크, `/blocks/reel` 피드, `@leement/reel` 설치 명령을 확인했다.
  - **머지 후 확인**: 병합 후 확인 예정.
- **Evidence**:
  - **Source**: `registry.json`의 stories `registry:ui` 및 reel `registry:block` 항목; `apps/docs/lib/docs.ts`, `apps/docs/components/item-page.tsx`.
  - **Test/Log**: 실제 브라우저에서 dialog=1, social link visible, reel preview=1, 설치 명령 표시 확인.
- **Consequences**: Reel 페이지는 Blocks 그룹에 남고, Stories 페이지에서는 Social 관련 항목으로 접근 가능하다.

## D003: Marquee fade를 viewport mask로 제공 (2026-09-28)

- **Context**: 기존 Marquee는 텍스트 chip만 흐르고 viewport 양끝 fade가 없었다. 참조 이미지는 원형 항목이 양끝에서 서서히 사라진다.
- **Constraints**: `items: ReactNode[]`, pause, 중복 콘텐츠 숨김과 reduced motion을 유지하고 테마의 배경색을 하드코딩하지 않는다.
- **Options**: Kibo처럼 배경색 overlay를 양끝에 두거나, viewport에 alpha mask를 적용한다.
- **Decision**: 움직이는 두 묶음을 감싼 viewport에 양방향 CSS mask를 적용한다. pause 버튼은 mask 밖에 두고, 문서 예제는 128px 원형 항목을 제공한다.
- **Rationale**: mask는 card/페이지 색을 별도로 알 필요가 없고 각 테마에 일관되게 동작한다. 모션 축소 시 mask를 없애고 overflow-x를 auto로 하여 정지한 항목을 탐색한다.
- **Trace**:
  - **DOING 시작 시점**: 트랙 자체의 mask는 트랙 전체 폭 기준이어서 화면 가장자리에 fade를 만들지 못함을 확인했다.
  - **DONE 전 확정 시점**: 브라우저에서 양방향 mask, 128×128px 원형, pause 전환, reduced motion의 mask:none/animation:none/overflow:auto, 1440/390px과 두 테마를 확인했다.
  - **머지 후 확인**: 병합 후 확인 예정.
- **Evidence**:
  - **Screenshot**: [Marquee 결과](./artifacts/marquee-after.png)
  - **Test/Log**: `pnpm exec vitest run registry/ui/complex-utility.test.tsx` — 11 tests passed; 실제 브라우저 CSS computed style 확인.
- **Consequences**: 문자열 items는 기존 chip 시각을 유지하고 ReactNode로 전달한 원형 요소는 별도 chip 스타일 없이 표시한다.

## D004: 공개 Tabs segmented 변형과 선택 경계 대비 (2026-09-28)

- **Context**: Code/Preview 탭은 docs 내부 Radix 구현이라 공개 `@leement/tabs`로 재현할 수 없었다. 라이트 선택 표면과 주변 표면의 대비는 약 1.03~1.09:1이다.
- **Constraints**: default/line API, Base UI의 tab/tabpanel 관계와 키보드 동작을 보존하고 theme/token SSOT를 유지한다.
- **Options**: 문서 전용 스타일을 유지하거나, 공개 TabsList에 넓은 `segmented` 변형을 제공한다. 선택 상태는 배경 차이만 쓰거나 의미색 경계를 추가한다.
- **Decision**: `TabsList variant="segmented"`를 추가하고 docs workbench가 registry Tabs를 직접 사용한다. 선택 트리거는 `muted-foreground` 경계와 `background` 표면을 쓴다.
- **Rationale**: 설치된 source가 문서와 같아지고, 표면색 차이가 약해도 경계가 3:1 이상으로 상태를 표시한다. 기존 변형은 유지한다.
- **Trace**:
  - **DOING 시작 시점**: docs workbench의 별도 Radix 탭 구현과 공개 Tabs의 default/line 한계를 확인했다.
  - **DONE 전 확정 시점**: 실제 브라우저에서 선택 경계와 인접 표면 대비 light 4.35:1, dark 5.22:1; active text 17.36/18.07:1; inactive text 4.35/5.22:1을 측정했다. desktop 1440px/mobile 390px의 workbench 및 source-backed 예제를 확인하고 방향키+Enter로 Code 패널 선택을 확인했다. `pnpm typecheck`와 기존 Controls 테스트 5개가 통과했다.
  - **머지 후 확인**: 병합 후 확인 예정.
- **Evidence**:
  - **Screenshots**: [light](./artifacts/tabs-light-after.png), [dark](./artifacts/tabs-dark-after.png)
  - **Test/Log**: `pnpm exec vitest run registry/ui/controls.test.tsx` — 5 tests passed; `pnpm typecheck` — 5 packages passed; 브라우저 computed style/색 대비 및 키보드 확인.
- **Consequences**: token/theme 수치 변경 없이 이미 있는 semantic `muted-foreground`를 상태 표시 경계에 사용한다. docs의 세 탭과 공개 두 탭 예제는 같은 source를 공유한다.

## D005: 공개 registry를 격리 소비자에서 검증 (2026-09-28)

- **Context**: docs에서 보이는 코드를 registry가 실제로 전달하고 소비자 빌드에서 동작하는지 확인해야 한다.
- **Constraints**: 아직 공개 npm/registry 배포가 아니므로 로컬 생성 registry JSON과 `@leement/theme` 로컬 패키지 경로를 사용한다.
- **Options**: docs 자체 빌드만 신뢰하거나, 별도 소비자 프로젝트에서 shadcn CLI로 설치한다.
- **Decision**: `/tmp/leement-residual-consumer`의 새 Vite/Tailwind v4/React 19 소비자에서 실제 CLI 설치 후 strict TypeScript와 Vite 빌드를 수행한다.
- **Rationale**: registry item metadata, util dependency, 전달 source, theme import를 설치 경험에서 한 번에 확인할 수 있다.
- **Trace**:
  - **DOING 시작 시점**: 기존 소비자와 분리한 임시 프로젝트를 만들고 로컬 `/r/{name}.json`만 HTTP로 제공했다.
  - **DONE 전 확정 시점**: Slider/Marquee/Tabs와 utils 네 파일이 생성됐고 세 공개 UI source가 registry 원본과 byte-for-byte 같았다. 소비자 `pnpm build`와 저장소 `pnpm typecheck`, `pnpm lint`, `pnpm test`(66개), `pnpm build`가 모두 통과했다. docs 브라우저 확인은 D001–D004에 기록했다.
  - **머지 후 확인**: 별도 병합 승인 후 진행 예정.
- **Evidence**:
  - **Test/Log**: `tasks.md`의 테스트 실행 기록; `npx shadcn@latest add @leement/slider @leement/marquee @leement/tabs --yes`; `/tmp/leement-residual-consumer`의 `pnpm build`.
- **Consequences**: 공개 도메인과 npm 배포 경로의 실제 네트워크 사용은 이 검증 범위에 포함되지 않는다. Vite는 일부 dependency의 `use client` 무시 경고를 출력했지만 빌드 성공과 런타임 번들 생성에는 영향을 주지 않았다.
