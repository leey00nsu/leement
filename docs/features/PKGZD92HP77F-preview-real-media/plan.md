# Implementation Plan: preview-real-media

## 개요

- **기능 ID**: PKGZD92HP77F
- **대상 레포**: Leement
- **작성일**: 2026-10-07
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
| 미리보기 | 기존 React / Next docs / registry source | 기존 상세 Preview·Showcase·독립 예제 연결을 보존 |
| 미디어 | Pixabay 공식 항목에서 확인한 고정 HTTPS 이미지·영상·음원 URL | 검색 API·키 없이 실제 콘텐츠를 제공하고 원본 미디어의 단독 저장소 재배포를 피함 |
| 재생 | 기존 HTMLMediaElement / WaveSurfer / media-player | 실제 loadedmetadata·timeupdate·decode·오류를 관찰하며 새 엔진을 만들지 않음 |
| 기록 | 소스 제어되는 자산 목록과 Feature 검수표 | 파일별 역할 판정, 제작자·라이선스·해시·사용 위치를 추적 |

## 아키텍처

1. 초기 조사 분모를 고정하고 CSS background, 간접 source, 기본 props, 사진이 빠진 Blocks 조합을 수동 검토하여 빠진 항목을 추가한다. 각 파일 안의 미디어 자리마다 교체/유지/해당 없음과 이유, 대표·추가·Showcase·기본 props 소비 경로를 기록한다. 아이콘·브랜드·차트·의도적인 오류는 별도로 유지 판정한다.
2. Pixabay 사진은 업무/공간, 기사 표지, 크롭·확대용 풍경, 서로 다른 샘플 인물을 충분히 구분해 선정한다. 같은 가상의 프로필은 같은 사진을 사용하고 문서에 샘플 데이터임을 표시한다. 최소 개수를 채우는 것보다 실제 자리의 역할·차이를 모두 충족하는 것을 완료 기준으로 삼는다.
3. 영상은 가로 플레이어/히어로용과 Reel의 세로 프레이밍에 맞는 두 개 이상의 구별되는 클립을 선정한다. 세로 원본을 우선하며 가로 원본의 CSS 크롭은 실제 화면에서 주요 피사체가 남는지 확인한 경우에만 사용한다. 음악은 실제 음악 두 곡으로 source 변경을 시연한다. 초기 후보가 맞지 않으면 다른 무료 Pixabay 항목을 선정한다.
4. 공개 원본 페이지에서 관찰한 실제 미디어 URL만 사용한다. 주소를 추측하거나 임시 서명 URL, 랜덤 검색 endpoint, 유료 광고, 생성한 대체 영상·톤을 쓰지 않는다. 공식 브라우저의 정상 경로로 선택 파일을 임시 저장해 원본 해시·MIME·픽셀·길이를 확인하고, 저장소에는 목록·코드·출처만 보존하는 제공 방식을 기본으로 한다. 소스 목록은 `apps/docs/lib/demo-media.json`에 자산 ID, 원본 페이지, 제작자, 게시/확인 날짜, 라이선스와 근거, preview/full/poster URL, dimensions/duration/bytes/SHA-256, Content ID 확인 수준, 사용 위치를 기록한다. 실제 후보 선정과 조건·전송 검증은 T01의 완료 조건이다.
5. 고정 외부 URL을 사용하더라도 사용 권한이 자동으로 해결된 것으로 보지 않는다. CC0 게시 날짜를 검증하고 Content License 미디어는 완성된 docs 예제에 포함하는 이용 맥락을 검토한다. 저장소와 registry에 원본 음악·영상 파일을 배포하지 않는다. 이 제공 방식이 허용되고 실제 동작하는 항목만 확정하며 조건을 충족하지 못하면 다른 적합한 Pixabay 후보로 교체한다. 업로드/로그인/개인정보 변경·보호 우회는 하지 않는다.
6. Preview 소스에는 검증된 URL을 명시해 복사한 코드도 설치된 소비자 앱에서 같은 미디어를 표시할 수 있게 한다. docs 전용 모듈 import나 `/demo-*.svg` 같은 숨은 public 의존성을 만들지 않는다. 공유 목록은 provenance 검수용이며 public API에 추가하지 않는다. 기존 registry 기본 사진을 바꾸는 경우에도 CC0 고정 URL과 정상적인 샘플 내용을 사용하고 원래 props·exports·앱 소유 media 계약을 유지한다. 사용자 제공 URL은 덮어쓰지 않는다.
7. placeholder 교체 시 alt·제목·캡션·제작자·기사 내용·음원 안내를 함께 맞춘다. About/Team/Testimonial 등은 가상의 예제임을 명확히 하고 실존 인물의 실제 직원·추천 관계를 만들지 않는다. 로고·인증 배지는 기존 의미 있는 마크나 명시적 데모 아이콘을 유지/사용한다. 실제 제품 화면을 뜻하는 자리에 스톡 풍경을 넣지 않고 해당 조합을 정직한 사진 기사 예제로 조정하거나 실제 앱 화면을 보여준다.
8. Comparison은 원본과 명시적인 CSS 색상 조정 등 관찰 가능한 전후로 구성한다. 음악 파형은 실제 decode 또는 실제 곡에서 얻은 peaks로 표시한다. CORS/decode가 실패하는 곡은 정상 파형 완료로 보지 않으며 다른 곡을 선정한다. fallback과 Retry는 계속 보존한다.
9. 변경 후 해당 source가 보여지는 모든 독립 Preview를 다시 확인한다. 미디어 속성의 성공만으로 검수하지 않고 화면과 주요 조작도 직접 확인한다. 기존 데모 자산 11개는 코드 참조와 실패/자막 fixture 역할을 다시 확인한 뒤 미사용된 것만 제거한다. captions는 실제 장면·음성에 맞게 바꾸며 의미 없는 음성 자막을 만들지 않는다.

### 성능과 외부 소스 실패

- 사진의 공식 제공 크기를 용도별로 선택: Avatar 640px 이하, 기사/카드 1280px 이하, 확대/편집 최대 1920px. 작은 슬롯의 4K 원본 로딩을 피한다.
- 목표 전송 예산: Avatar 사진 150KB 이하, 일반 사진/포스터 400KB 이하, 확대 사진 800KB 이하; 클립 720p/1080p와 5MB 이하, 음원 곡당 8MB 이하. 초과 후보는 낮은 공식 rendition 또는 다른 후보를 선택한다. 꼭 필요한 예외는 측정값·이유·실제 초기 로딩 영향과 함께 Decisions에 기록한다.
- 기존 aspect ratio/object-fit, lazy 이미지 로딩과 영상·음원 `preload=metadata`를 유지한다. 뷰포트 밖의 피드 항목은 재생하지 않는다.
- 일반 고정 URL도 네트워크/원본 서비스 장애를 겪을 수 있다. 로딩·native fallback·실패·Retry는 유지하며, 정상 표시가 확인되지 않은 후보를 오류 UI로 대체해 완료하지 않는다. URL·제작자가 바뀌면 목록과 모든 사용 위치를 함께 갱신한다.
- 외부 소스는 로그인·쿠키·비밀 URL 없이 fresh browser에서 접근하고, seek용 range 요청 및 음악 WaveSurfer fetch/decode의 CORS를 확인한다. 영상 코덱은 브라우저에서 실제 재생 가능한 일반 MP4를 우선한다.

## 파일 구조

- `apps/docs/examples/*.tsx` — 조사 목록과 추가 발견 항목의 사진·영상·음악·샘플 텍스트.
- `registry/blocks/*.tsx` — 사진 기본값, 빈 데이터/기본 소비자와 sample 의미·대체 텍스트. 필요한 최소 변경.
- `registry/ui/*.tsx`, `registry/lib/media-player.tsx`, `registry/patterns/*.tsx` — 검수 중 실제 표시·재생 결함이 확인된 경우에만 승인 계약 범위 안에서 수정.
- `apps/docs/lib/demo-media.json` — 최종 출처·제공 URL·매체 메타데이터·사용 위치. 미확정 7개 후보 파일과 구별.
- `apps/docs/lib/items.ts`, `example-catalog.ts`, `base-example-catalog.ts`, `components/item-page.tsx` — 필요한 콘텐츠 설명·source 사용 안내와 샘플 맥락. 미디어 검수와 무관한 페이지 구조 변경은 하지 않음.
- `apps/docs/public/demo-*` — 미사용 대체 자산 제거 및 실제 콘텐츠에 맞는 자막만 보존.
- `THIRD_PARTY_NOTICES.md`, `docs/prd/leement-prd.md`, `docs/designs/design-system.md` — 아래 Curated Impact대로 동기화.
- Feature `artifacts/media-audit-scope.json`, `pixabay-candidates.json`, `media-verification.json` — 조사→최종 판정과 실제 검증. 필요한 대표 캡처만 보존.
- `/tmp/leement-media-*` — 다운로드 원본, 브라우저 harness, 독립 consumer, 대형 캡처 등 일회성 파일. 원본 Content License 파일을 Feature artifacts에도 커밋하지 않음.

## 실행 순서

추가 사용자 요청 T06은 `apps/docs/lib/docs.ts`의 공유 navigation 데이터에서 표시 label 기준 정렬을 적용한다. 기존 Components 기능 분류를 보존하고 desktop/mobile의 같은 소비 화면을 확인한다. 단순 표시 순서 변경이므로 영구 테스트 추가는 NONE이며 실제 세 범주의 각 분류 순서·현재 항목·링크와 docs type/lint를 검증한다. 공용 PRD·디자인 규칙의 정렬 설명은 T06 Docs에 연결한다.

T01 전수 자리 판정·실제 자산 선정/제공 검증 → T02 Components/Patterns·대표/추가 예제 → T03 Blocks 기본값·예제·콘텐츠 → T04 영상·음악·포스터/자막·소스 변경 → T05 전수 UI/독립 consumer·출처/공용 문서·전체 검사. 하나의 active task만 유지하고 각 완료 checkpoint를 커밋한 뒤 다음 task로 이동한다. 발견한 재생 결함은 T04에서, 최종 검수 결함은 T05에서 수정하며 결과를 해당 검수표에 남긴다.

## Curated Documentation Impact

- **Schema**: 2
- **Assessment**: Complete
- **Product requirements**: UPDATE
- **System architecture**: NONE
- **Onboarding entrypoint**: NONE
- **Operational/runtime contract**: UPDATE
- **Reason**: PRD-FR-005/008에 실제 미디어·정상 표시/재생·출처 추적 요구를 명시한다. 독립적인 검색 서비스나 서버/데이터 구조를 추가하지 않는다. 외부 미디어와 코드 라이선스를 구분하는 기존 THIRD_PARTY_NOTICES의 설명을 갱신한다. 기존 README는 수정 요청이 없고 이번 조사에서 확정된 README 불일치도 없어 읽기만 한다. 미디어 소스 제공·교체 규칙은 아래 디자인 문서에 유지한다.
- **Targets**: docs:prd/leement-prd.md, project:THIRD_PARTY_NOTICES.md

## Additional Curated Impacts

- **Assessment**: Complete
- **Decision**: DECLARED

| Kind | Decision | Target | Reason |
| ---- | -------- | ------ | ------ |
| design-system-ux | UPDATE | docs:designs/design-system.md | 기존 앱 소유 미디어·native player·Preview 규칙에 사실적인 데모 콘텐츠, 역할 구분, 출처·제공 방식의 지속 규칙을 설명. 토큰·테마·브랜드 재설계 없음 |

constitution, API/schema, 인증/보안, 배포/관측성은 NONE: 관련 구조·운영 정책을 추가하지 않는다. 공식 CDN 의존성과 사용 조건은 source 목록·출처 안내·디자인 문서에서 설명한다.

## Verification Contract

### 변경 분류

- **유형**: BUG_FIX
- **위험도**: MEDIUM — 다수 예제·registry 기본 콘텐츠, 실제 network/decode와 lifecycle을 검증해야 함.

### 관찰 가능한 계약

- **지원해야 하는 동작**: 전수 자리의 역할 판정, 실제 사진 디코딩과 용도에 맞는 프레이밍, 영상·음원 정상 재생/seek/소스 변경, 포스터·alt·제작자 일치, 실패 복구, 설치된 source와 복사 코드의 재사용.
- **전제조건**: 정상 네트워크, 로그인 없는 검증된 고정 URL, 기존 theme/Tailwind/React와 app 제공 props. 외부 사이트의 보호를 우회하지 않음.
- **성공 후 보장**: normal Preview에 설명 없는 회색 사진·생성 도형 영상/톤이 없고, 이미지 naturalWidth와 실제 media duration/currentTime이 확인됨. fallback 예제는 의도한 실패 상태를 계속 보여줌.
- **중요한 실패 후 보장**: 네트워크/decode/play 실패는 실패/Retry 또는 native 컨트롤을 제공하고 초기화·종료·src 변경 후 이전 재생을 남기지 않음. 잘못된 권리·만료 URL·유료 후보는 확정 목록에 포함하지 않음.
- **의도적으로 지원하지 않는 사례**: 오프라인 정상 미디어 재생 보장, 실제 기업/고객의 사실 주장, 검색 API·비밀 URL·새 미디어 엔진, 원격 게시/원본 미디어 단독 재배포.

### 테스트 결정

| 계약 / 요구사항 | 결정 | 테스트 수준 | 보호할 현실적인 회귀 | 독립적인 Oracle |
| --------------- | ---- | ----------- | -------------------- | ---------------- |
| US-1/FR-1 실제 사진·역할 | NONE | 소스 자리 검수+실제 브라우저 | 로고를 사진으로 교체, 상세/추가 예제 누락, 틀린 크롭·alt | 최종 자리 목록과 실제 파일/화면·원본 항목 |
| US-2/FR-3 실제 영상·음악 | UPDATE | 기존 media-finance/extended interaction 통합 테스트+실제 브라우저 | metadata만 성공 처리, 정상 재생/seek·파형 부재, 종료 후 소리 지속; 실제 발견된 Reel offscreen과 Stories portal attach 재생 회귀를 기존 media-finance 테스트에서 검증 | HTMLMediaElement의 실제 events/duration/currentTime·실제 파일 decode |
| FR-2 props/설치·복사 코드 | NONE | 기존 source 테스트+독립 소비자 설치·tsc/build/브라우저 | docs 모듈·public path 의존, 앱 제공 props 무시 | 생성된 registry source·복사 코드·새 소비자 앱 |
| US-3/FR-4 출처·사용 조건 | NONE | 원본/조건 수동 확인+목록/참조 검사 | 제작자·라이선스 오표기, 누락/만료 URL, 원본 파일 재배포 | 공식 항목/약관, 실제 file hash와 저장소 tree |

### 의도적으로 제외하는 테스트

미디어 URL 문자열이나 자산 개수를 구현 그대로 복사하는 영구 테스트, jsdom의 가짜 play 성공을 실제 재생 증거로 사용하는 테스트, 라이브 외부 CDN의 가용성을 unit/CI 통과 조건으로 강제하는 테스트를 추가하지 않는다. 실제 player 동작 변경으로 보호해야 할 새로운 회귀가 발견되면 이미 승인한 지원 계약의 해당 기존 통합 테스트를 UPDATE하고 Decisions에 동작·독립 Oracle를 기록한다. 지원 계약 자체가 바뀌면 Spec/Plan과 workflow hash를 갱신한다.

### 검증 실행

- **구현 중**: 각 자리/자산 목록 보강, 실제 파일 메타데이터·해시·조건·로드 확인. 관련 `pnpm exec vitest run registry/ui/media-finance.test.tsx` 및 실제 수정된 player/source의 기존 테스트 파일만 focused 실행.
- **태스크 완료 전**: 해당 태스크 파일의 type/lint, 참조·제목·alt·기본값·대표/추가 Preview 확인. 상태/문서/hash 동기화 후 task checkpoint commit.
- **Feature 완료 전**: 현재 workflow.featureChecks 그대로 `pnpm run typecheck`, `pnpm run lint`, `pnpm run test`, `pnpm run build`. build 안에서 tokens/theme/registry/docs가 생성되므로 별도 registry 전체 빌드는 중복하지 않는다. 최종 source를 독립 React/Tailwind 소비자에 registry dependency graph와 함께 설치해 tsc/build, 미디어 예제의 실제 로드와 주요 조작을 확인한다. 추가 영구 자동 검사나 workflow 설정 변경은 없음.
- **수동/UI 검증**: 모든 변경된 독립 Preview·기본값 소비 화면의 light/dark × 390/1440px. 이미지 complete/naturalWidth, alt/object-fit와 layout, actual video/audio readyState/duration, 사용자 클릭 후 currentTime 증가, play/pause/seek, 음량/mute/source switch/error/reset. Crop apply/reset, Zoom Escape/focus return, Comparison slider, Stories next/close, Reel 키보드 이동과 offscreen cleanup. 중요한 항목은 240px·키보드·reduced motion, Foundation/replay/resize도 확인. OS reduced motion과 제한된 합성 설정의 차이를 명시한다. 수치만 확인한 검수와 직접 본 화면을 별도 기록한다.
- **전체 테스트 필요 여부**: Yes — registry 기본 콘텐츠와 예제 source를 함께 바꾸며 설정된 local verify가 전체 type/lint/test/build를 요구한다. 전체 통과 뒤 재실행은 변경·실패·새 우려가 있을 때 및 필수 local verify gate에서만 수행한다.

## 관련 문서

- Spec: [spec.md](./spec.md)
- Decisions: [decisions.md](./decisions.md)
- 초기 전수 조사: [media-audit-scope.json](./artifacts/media-audit-scope.json)
- 초기 Pixabay 후보: [pixabay-candidates.json](./artifacts/pixabay-candidates.json)
