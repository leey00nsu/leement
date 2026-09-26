# Implementation Plan: component-showcase

## 개요

- **기능 ID**: A33E7A5BTN8G
- **대상 레포**: Leement
- **작성일**: 2026-09-26
- **상태**: Approved
- **Plan 검수**: Pending
- **Plan 검수 Evidence**: -
- **Plan 검수 Decision**: -
- **Plan 검수 Round**: -
- **Plan 검수 Spec Hash**: -
- **Plan 검수 Plan Hash**: -

## 기술 스택

| 구분 | 선택 | 이유 |
| ---- | ---- | ---- |
| 문서 | 기존 Next.js 16 App Router | 이미 모든 상세 문서와 정적 페이지 생성이 구성됨 |
| 미리보기 | 기존 `Preview`와 `registry/*` 소스 | 문서용 컴포넌트 복제를 피함 |
| 테마 | `data-lm-theme`와 `@leement/theme` | 기존 semantic light/dark 변수 재사용 |
| Registry | 기존 shadcn build | 별도 서버나 CLI 없이 JSON 생성 |

## 아키텍처

`apps/docs/lib/items.ts`의 항목 metadata를 레이어별로 그룹화한다. `/showcase` 서버 페이지는 클라이언트 갤러리를 렌더링한다. 갤러리 카드는 기존 `Preview`에 항목 이름을 전달하고 상세 문서 링크와 shadcn 설치 명령을 표시한다. 모바일에서는 문서 내비게이션을 접어 갤러리가 화면 상단에 보이도록 한다. theme 토글은 갤러리 조상에 `data-lm-theme`만 설정한다. 문서 앱 build는 root `registry:build`를 실행해 `public/r`을 채우고 Next build를 이어서 실행한다. 기존 root `pnpm build` 경로도 동작해야 한다.

## 파일 구조

```text
apps/docs/app/showcase/page.tsx             # 공개 갤러리 route
apps/docs/components/showcase-gallery.tsx   # 모든 항목 preview와 theme 토글
apps/docs/components/previews.tsx           # 기존 공용 Preview (필요한 소폭 조정)
apps/docs/lib/docs.ts                       # 내비게이션
apps/docs/app/page.tsx                      # 홈 진입점
apps/docs/app/layout.tsx                    # 모바일 접이식 내비게이션
apps/docs/package.json                      # 단독 문서 build의 registry 생성
```

## Curated Documentation Impact

- **Schema**: 2
- **Assessment**: Complete
- **Product requirements**: NONE
- **System architecture**: NONE
- **Onboarding entrypoint**: NONE
- **Operational/runtime contract**: NONE
- **Reason**: `docs/prd/leement-prd.md`의 PRD-FR-003/005/006가 전체 미리보기와 빌드 계약을 포괄한다. 공유 아키텍처·운영 문서는 아직 없고, 기존 README는 현재 기능과 충돌하지 않는다. 실행 가능한 빌드 계약은 추적된 `package.json`과 registry 설정에서 유지한다.
- **Targets**: -

## Additional Curated Impacts

- **Assessment**: Complete
- **Decision**: NONE

| Kind | Decision | Target | Reason |
| ---- | -------- | ------ | ------ |

디자인 의미·토큰·컴포넌트 API는 변경하지 않는다. 기존 `docs/designs/design-system.md` 규칙을 적용하므로 문서 개정은 필요하지 않다.

## Verification Contract

### 변경 분류

- **유형**: NEW_BEHAVIOR
- **위험도**: MEDIUM

### 관찰 가능한 계약

- **지원해야 하는 동작**: `/showcase`에서 registry의 UI 8개, Pattern 5개, Block 1개를 보고, 키보드로 상세 링크·테마 버튼·실제 예시를 사용할 수 있다. 문서 빌드 뒤 `/r/button.json`이 제공된다.
- **전제조건**: pnpm workspace install 완료; Node 22.
- **성공 후 보장**: light/dark 미리보기가 semantic CSS 변수를 사용하고 모든 registry 항목으로 연결된다.
- **중요한 실패 후 보장**: 빌드 오류 시 기존 원본 registry 소스와 토큰은 수정되지 않는다.
- **의도적으로 지원하지 않는 사례**: 공개 호스팅, npm 게시, 커스텀 token editor.

### 테스트 결정

| 계약 / 요구사항 | 결정 | 테스트 수준 | 보호할 현실적인 회귀 | 독립적인 Oracle |
| --------------- | ---- | ----------- | -------------------- | --------------- |
| US-1, FR-1~3 | NONE | 빌드 산출물 + production HTTP smoke | 일부 항목 누락·깨진 링크 | `registry.json` 14개 항목과 route 응답 비교 |
| US-2, FR-4 | NONE | 수동 UI/키보드 확인 | 동작하지 않는 토글·예시 | Spec AC와 실제 브라우저 동작 |
| US-3, FR-5 | NONE | 문서 단독 build + HTTP smoke | 공개 빌드에 registry JSON 누락 | shadcn registry item JSON 응답 |

### 의도적으로 제외하는 테스트

현재 static showcase는 기존 Preview와 registry 소스를 조합한다. DOM 구조를 복제해 검증하는 영구 테스트는 추가하지 않는다. 기존 UI 테스트는 `pnpm test`로 유지한다.

### 검증 실행

- **구현 중**: `pnpm --filter @leement/docs typecheck`, `pnpm --filter @leement/docs lint`.
- **태스크 완료 전**: `pnpm --filter @leement/docs build`, production server에서 `/showcase`, 모든 상세 route 및 `/r/button.json` 조회.
- **Feature 완료 전**: configured feature checks인 `pnpm typecheck`, `pnpm lint`, `pnpm test`, `pnpm build`.
- **수동/UI 검증**: light/dark 버튼, Button focus, Input, Dialog 열고 닫기, Tooltip focus 및 좁은 화면 레이아웃.
- **전체 테스트 필요 여부**: Yes — 문서 빌드와 registry item 생성 경로가 바뀌므로 기존 전체 check를 실행한다.

## 관련 문서

- Spec: [spec.md](./spec.md)
- Decisions: [decisions.md](./decisions.md)
