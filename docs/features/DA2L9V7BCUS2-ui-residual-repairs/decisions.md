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
