# Custom Rules

> ⚠️ 이 문서는 **사용자 정의 규칙**입니다.
> `npx lee-spec-kit update`의 영향을 받지 않습니다.
> 프로젝트별 관례를 보완할 수 있지만 안전 요구사항과 lee-spec-kit의
> workflow·승인·리뷰·커밋 gate를 우회할 수는 없습니다.

---

## 프로젝트 특화 규칙

- 루트와 `apps/*`, `packages/*`, `tooling/*` workspace 패키지는 하나의 릴리스 버전을 사용합니다. 버전 변경은 `pnpm version:bump patch|minor|major` 또는 `pnpm version:bump 0.2.1`로 함께 적용합니다.
- `pnpm version:check`는 루트 버전과 모든 workspace manifest의 일치를 확인하며 루트 build 전에 실행됩니다. 개별 `package.json`의 버전만 변경하지 않습니다.
- 이 명령은 커밋·게시·배포를 실행하지 않습니다. npm 게시 전에 `pnpm version:check`를 실행합니다. 문서의 실제 공개 버전과 게시/배포 상태는 해당 작업 성공을 확인한 뒤 갱신하며, 과거 Changelog 버전은 유지합니다.

---

## 추가 언어/코드 규칙

(프로젝트별 언어·코드 규칙을 작성하세요)

---

## 커스텀 워크플로우

(프로젝트만의 워크플로우가 있다면 작성하세요)

---

## 기타

(기타 규칙을 작성하세요)
