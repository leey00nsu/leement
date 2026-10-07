# Decisions Log

## D001: 미디어 자리 기준 전수 점검 (2026-10-07)

- **Context**: 사용자는 Preview의 사진 자리를 직접 그린 그림으로 대신하고 있음을 지적했고 Pixabay의 무료 이미지·영상·음악으로 실제 모습을 보여주도록 요청했다.
- **Constraints**: 승인 전에는 구현 코드를 변경하지 않는다. 기존 오류·fallback과 앱이 자산을 제공하는 API 계약을 보존한다.
- **Options**: 눈에 띄는 SVG 몇 개만 교체; 모든 그래픽을 사진으로 교체; 실제 미디어 자리를 전수 조사하고 역할에 맞게 선정.
- **Decision**: 마지막 방식을 사용한다. 검색 후보를 시작점으로 직접·간접 참조와 각 Preview를 확인하며 교체·유지·해당 없음의 이유를 남긴다.
- **Rationale**: 사진과 로고·아이콘·차트·오류 fallback은 역할이 다르며, 기본 props와 예제 구성에 숨어 있는 대체물도 해결해야 한다.
- **Trace**:
  - 제품 baseline은 `31642301cb61a9432094c7af95863fea489d676f`. 새 Feature 등록 commit은 `ff974a5381e8b6cb24a89c20f88229ae99f3028c`이고 코드 내용은 같다.
  - TSX 872개를 소스 검색해 73개 후보 파일, 로컬 데모 자산 11개, inline SVG 대체물 14개 파일과 직접 그린 자산 소비 파일 17개를 확인했다. 이는 완료된 시각 검수 수가 아니다.
  - About·Blog·Team 등은 기본 회색 SVG를 반복한다. 이미지 예제는 도형 풍경을, VideoPlayer·Hero·Stories·Reel은 도형 영상을, AudioPlayer는 생성한 톤을 사용한다. CaseStudy 등의 사진 props를 보여주지 않는 조합도 확인 대상이다.
  - 콘텐츠 변경은 제목·alt·작성자·포스터·자막까지 동기화해야 한다. stock 사진을 실제 직원·추천 고객으로 표현하지 않는다.
- **Evidence**:
  - **Commit**: 제품 baseline `31642301cb61a9432094c7af95863fea489d676f`.
  - **Test/Log**: [경로·줄 번호·자산 해시가 포함된 초기 소스 조사](./artifacts/media-audit-scope.json).
- **Consequences**: 2026-10-07 사용자의 `A` 응답으로 Spec이 승인됐다. 선정·제공·적용·정상 재생 검증을 Plan/Tasks로 구체화한다. 현재는 구현과 전수 화면 검수가 진행되지 않았다.

## D002: Pixabay 원본과 적용 조건을 함께 선정 (2026-10-07)

- **Context**: 무료 열람·다운로드와 공개 저장소의 원본 파일 재배포는 조건이 다를 수 있다.
- **Constraints**: 외부 미디어를 코드의 MIT 라이선스에 포함하지 않으며 Pixabay가 제한하는 단독 재배포, 상표 사용·추천 오인을 피한다.
- **Options**: 검색 결과에서 무료라는 표시만 확인; 각 항목의 원본·제작자·게시 날짜와 제공 방식의 조건을 함께 확인.
- **Decision**: 공식 항목과 적용 약관을 확인하고 자산별 출처·해시·용도·변환·제공 방식을 추적한다. 목적에 맞는 CC0 사진을 우선하고 그 외 미디어는 허용된 제공 방식을 확정한 뒤 적용한다.
- **Rationale**: docs에서 실제 예제로 보이는 것과 사용자에게 복사·설치·배포되는 소스 모두의 사용 조건을 충족해야 한다.
- **Trace**:
  - 2026-10-07 확인한 공식 약관 §4는 2019-01-09 이전 게시 콘텐츠에 CC0를 적용한다. 오래된 사진 항목에도 일반 Content License 문구가 보이므로 게시 날짜와 약관 근거를 함께 보존한다.
  - §5의 Content License는 무료 사용·수정을 허용하면서 단독 배포를 제한한다. 크롭·리사이즈만으로 이 제한이 사라진다고 보지 않는다. 원본 음악의 공개 저장소 포함 여부는 아직 확정하지 않았다.
  - CC0도 초상·상표 등 제삼자 권리를 자동으로 해결하지 않는다. 음악은 Content ID 표시가 없는 것을 미등록 증거로 간주하지 않는다.
  - 업무·책상·호수·인물 사진, 호수 영상, 피아노 음악 두 곡의 공식 메타데이터를 초기 후보로 기록했다. 다운로드·시청·청취·프레이밍·정상 재생과 실제 제공 방식은 아직 검증하지 않았다. 세로 Reel에는 별도 적합한 후보가 필요하다.
- **Evidence**:
  - **Test/Log**: [항목별 원본·제작자·남은 확인 사항](./artifacts/pixabay-candidates.json).
  - [Pixabay Terms §4/§5](https://pixabay.com/service/terms/), [Content License Summary](https://pixabay.com/service/license-summary/), [FAQ](https://pixabay.com/service/faq/).
  - [업무 사진](https://pixabay.com/photos/meeting-brainstorming-business-594091/), [책상 사진](https://pixabay.com/photos/computer-notebook-office-code-2788918/), [호수 사진](https://pixabay.com/photos/lake-ulmener-maar-reflection-3733649/), [인물 사진](https://pixabay.com/photos/man-model-portrait-hairstyle-1283231/).
  - [호수 영상](https://pixabay.com/videos/lake-houses-hill-mountain-boat-67201/), [피아노 음악](https://pixabay.com/music/ambient-atmospheric-ambient-music-with-piano-108412/), [소스 변경용 음악 후보](https://pixabay.com/music/solo-piano-ambient-piano-524039/).
- **Consequences**: 최종 후보는 화면 비율·콘텐츠 적합성·실제 재생·제공 조건을 확인해 확정한다. 공식 출처·라이선스 안내를 유지하며 유료 광고나 AI 생성 사진을 우선 후보로 사용하지 않는다.

## D003: 브라우저 연결 제한과 확인 수준 기록 (2026-10-07)

- **Context**: aside-browser를 이용한 Pixabay 읽기 전용 조사를 시도했다.
- **Constraints**: 연결되지 않은 브라우저의 시각 검수나 미디어 재생을 수행한 것으로 기록하지 않는다.
- **Options**: 연결 복구만 기다림; 공식 웹 페이지의 텍스트와 메타데이터 조사를 진행하고 실제 검증과 구분.
- **Decision**: 공식 웹 검색·원본 페이지 조사를 진행했다. 실제 다운로드·시청·청취와 로컬 Preview 확인은 구현 단계에 남겼다.
- **Rationale**: 현재 가능한 범위 조사와 명세 준비를 진행하면서 증거의 한계를 명확하게 유지한다.
- **Trace**:
  - `aside exec --effort high` 읽기 전용 요청은 profile `u0`가 daemon에 연결되지 않았다는 오류로 종료됐다. 실행 중인 조사 작업은 없다.
  - 이후 공식 Pixabay 항목과 약관의 텍스트·메타데이터를 확인했다. 다운로드한 자산이나 실제 재생 증거는 아직 없다.
- **Evidence**:
  - **Test/Log**: CLI terminal error: `profile u0 is not connected to daemon`.
  - [후보 조사 방법과 브라우저 제한](./artifacts/pixabay-candidates.json).
- **Consequences**: 이후 브라우저로 실제 파일의 표시·정상 재생을 검증해야 한다. 메타데이터 확인을 최종 자산 검수나 적용 완료로 보고하지 않는다.


## D004: 고정 외부 미디어와 순차 구현 계획 (2026-10-07)

- **Context**: Spec은 사용자 `A`로 승인됐다. 구현 계획의 조건·전수 자리·출처/기술 검증을 작업 단위로 분리했다.
- **Constraints**: docs/registry 복사 소스가 숨은 docs public 경로를 요구하지 않고, 원본 Content License 음악/영상을 공개 저장소에 단독 배포하지 않아야 한다. 정상 재생과 음악 CORS/decode를 실제로 확인한다.
- **Options**: 모든 원본 파일을 Git에 포함; 런타임 검색 API; 공식 항목에서 확인한 고정 rendition URL로 완성된 예제에 포함.
- **Decision**: 고정 HTTPS URL 제공을 기본으로 하고 T01에서 로그인 없는 로드·전송 크기·실제 파일 metadata/hash·조건·음악 CORS와 seek를 확인한 후보만 확정한다. 임시 다운로드 파일은 /tmp에 두고 source 목록과 출처만 추적한다. T01→T05 순차 작업으로 전수 선정·Components/Patterns·Blocks·영상/음악·최종 검증을 수행한다.
- **Rationale**: 복사 예제와 독립 소비자에서 같은 실제 미디어를 표시하고 별도 키/서비스/미디어 재배포 패키지를 만들지 않는다. 고정 URL 사용만으로 권리가 해결됐다고 보지 않으며 적합하지 않은 후보를 교체한다.
- **Trace**:
  - workflow는 Plan agent review와 사용자 Plan 승인 요청이 비활성화돼 있고 `plan_approve`가 `approvalRequired: false`, “Promote ... automatically”를 반환했다. 준비된 Plan을 자동 승인 처리하며 Spec 승인 범위를 바꾸지 않았다.
  - Curated Documentation Impact의 모든 UPDATE 대상은 T05 Docs에 연결했다. PRD·디자인·출처 문서는 현재 main baseline을 읽었으며 과거 Feature들의 sharedDocumentationWarnings를 현재 문서로 비교한다. README는 수정하지 않는다.
  - Aside CLI는 PATH에 없었지만 설치된 앱 번들을 찾아 실행했다. `open -a Aside` 후 읽기 전용 조사 세션 `KwcZlwQgBD3bV0CO`이 공식 음악 페이지를 열고 실제 재생 시간 증가를 관찰했다. 아직 로컬 예제에서의 재생·CORS 검증과 최종 선정은 수행하지 않았다.
- **Evidence**:
  - **Test/Log**: `workflow-stage PKGZD92HP77F-preview-real-media --json`의 `plan_approve`, 승인 요청 없음.
  - [Plan](./plan.md), [순차 Tasks와 문서 대상](./tasks.md).
  - [Pixabay Terms](https://pixabay.com/service/terms/), [FAQ의 완성된 앱/창작물 맥락 설명](https://pixabay.com/service/faq/).
- **Consequences**: asset-selection 단계가 실패하면 해당 task는 완료되지 않는다. 정상 미디어 재생을 오류 UI나 메타데이터 조사로 대신하지 않는다. 프로젝트·컴포넌트 API와 레이아웃/테마 계약은 유지한다.


## D005: T01 역할 판정과 외부 음악의 실제 decode 확인 (2026-10-07)

- **Context**: T-PKGZD92HP77F-preview-real-media-01을 owner session으로 TODO→DOING 전환하고 초기 조사와 자산 선정을 시작했다.
- **Constraints**: source 판정과 실제 화면 검수를 구분한다. 공식 CDN의 음악을 실제 docs origin에서도 fetch/decode할 수 있어야 한다.
- **Options**: 원본 사이트 재생만 확인; 별도 localhost origin에서 익명 fetch와 Web Audio decode까지 확인.
- **Decision**: 두 단계 모두 확인하고 모든 자리의 최종 자산 매핑·출처·크기/해시를 확정한 뒤 T01을 완료한다. 현재 다른 사진·영상·음원은 연구 세션에서 선정 중이다.
- **Rationale**: source metadata나 원본 플레이어의 재생만으로 로컬 컴포넌트의 정상 작동을 보장할 수 없다.
- **Trace**:
  - 더 넓은 CSS/icon/source 및 props 소비자 조사로 초기 73개 파일을 83개로 확장했다. 모든 example을 실제 catalog에 대조해 독립 Preview route를 연결했다. 역할/교체 제안은 기록했지만 실제 화면 검수는 아직 수행하지 않았다.
  - EventForm은 사진 URL prop이나 표지 미리보기가 없고 Image 아이콘은 파일 업로드의 제목을 나타낸다. 역할상 유지하며 사진을 위한 새로운 API를 추가하지 않는다. About의 main/secondary는 사진, partner/breakout은 마크로 구분한다.
  - 공식 페이지에서 관찰한 GavinNellist 곡은 별도 `http://127.0.0.1:41237/` origin의 `fetch(..., { credentials: "omit" })`와 실제 `AudioContext.decodeAudioData`가 성공했다. native audio readyState=4, duration=120.672, error=null도 확인했다.
  - 음악 전송 크기 3,861,504 bytes, SHA-256 `40d601bb9a55c1f9a499456f4ccccc8d4c2770ab475e36a391b7658008869b73`, decode duration 120.671995초, stereo/44100Hz. 이는 실제 컴포넌트의 waveform/seek/cleanup 확인을 대신하지 않는다.
  - 일반 Python urllib 요청은 CDN 403으로 거절됐으므로 우회하지 않고 정상 브라우저로 확인했다. 브라우저의 익명 CORS decode 성공과 비브라우저 접근의 제한을 구분한다.
  - browser research session `yjVAPS3nDwtAET0d`의 CLI replay buffer 오류는 출력 연결 오류였다. `aside.sessions.get`은 running을 확인했고 실행을 중단/교체하지 않았다.
- **Evidence**:
  - [소스 역할 제안과 실제 Preview 연결](./artifacts/media-audit-scope.json).
  - [음원 preflight](./artifacts/music-source-preflight.json).
  - [공식 음악 항목](https://pixabay.com/music/ambient-atmospheric-ambient-music-with-piano-108412/).
- **Consequences**: T01의 최종 선정·검증 결과는 D006에 기록했다. 실제 컴포넌트 적용·화면 검증은 후속 태스크에서 수행한다.


## D006: T01 최종 자산과 제공 검증 완료 (2026-10-07)

- **Context**: 83개 source 후보의 미디어 역할과 실제 Preview 경로를 검토하고 공식 브라우저 조사에서 사진 11장·영상 3개·음악 2곡을 선정했다.
- **Constraints**: 원본 Content License 파일 단독 재배포를 하지 않는다. 실제 표시/재생, 속성·해시·크기와 조건을 확인한 자산만 source 목록에 등록한다.
- **Options**: 1080p 클립 유지; 공식 download controls에서 확인한 더 작은 720p rendition 사용.
- **Decision**: 사진은 용도별 CC0 11장, 영상은 가로 1280×720 한 개와 세로 720×1280 두 개, 음악은 실제 피아노 두 곡의 검증된 고정 URL을 사용한다. 후보·검증 증거는 Feature에, 최종 자산 source 목록은 apps/docs/lib/demo-media.json에 두고 원본 미디어 바이너리는 Git/registry에 포함하지 않는다.
- **Rationale**: copied source와 독립 소비자에서 hidden docs public dependency 없이 콘텐츠를 재사용하며 실제 표시·decode·playback과 전송 예산을 충족한다. source 목록의 plannedUsages는 T02~T04에서 실제 usages로 동기화한다.
- **Trace**:
  - 브라우저 조사 세션은 완료(terminal final message, idle)했고 720p 후속 선정도 완료했다. 공식 페이지/재생/다운로드 이벤트에서 실제 URL을 관찰했으며 원본 계정 변경·메시지 전송·보호 우회는 하지 않았다.
  - 독립 fresh Chromium context의 localhost origin에서 credentials=omit fetch, 실제 image decode, video metadata/play/time advance/3초 seek, music AudioContext decode 및 포스터 decode가 16개 모두 성공했다. URL·MIME·바이트·SHA-256·실측 비율/길이를 보존했다.
  - 첫 1080p 클립은 8,109,855 / 8,763,835 / 5,667,625 bytes였다. 공식 메뉴에서 다시 선정한 720p는 3,489,029 / 4,440,186 / 3,473,029 bytes로 모두 5MB 이하다. 두 음악은 3,861,504 / 4,027,454 bytes로 8MB 이하다.
  - 사진 11장은 게시 날짜가 2019-01-09 이전임을 공식 항목에 확인해 CC0로 분류했다. 인물 6장은 서로 다른 모델의 640px 이하 사진으로 모든 파일이 150KB 미만이다. 실제 직원/고객/추천 관계를 주장하지 않는 가상 샘플에 사용한다. 확인되지 않은 model/property release를 확보했다고 주장하지 않는다.
  - 상세 편집용 호수 사진은 491,008 bytes로 800KB 예산 안에 있다. 작은 슬롯에는 실제 관찰·검증한 640px/136,058-byte rendition을 사용한다. 다른 일반 사진·포스터는 400KB 안이다.
  - 음악 524039는 공식 Content ID Registered badge가 확인됐다. 출처 안내에 등록 사실을 명시한다. 108412는 badge 미표시이며 미등록으로 단정하지 않는다. 현재 docs 플레이어 시연이고 외부 플랫폼 업로드/재배포는 수행하지 않는다.
  - city clip은 공식 metadata의 제작자 식별자 21698102를 그대로 유지하며 실제 이름/프로필을 만들어내지 않는다. 해당 540×960 포스터는 Reel 실제 표시 크기에 충분하고 해당 clip의 공식 장면이다.
  - node_modules가 없는 관리 worktree에 frozen-lockfile install을 수행했다. pnpm v10.34.5 설치가 성공했고 tracked lockfile 변경 없이 docs dev server가 3117에서 시작됐다. 대표 Preview 경로가 실제로 렌더됨을 확인했다. 전체 Feature 검사 통과로 기록하지 않는다.
- **Evidence**:
  - [공식 항목·선정/조건 증거](./artifacts/pixabay-selected-sources.json), [독립 source preflight 16/16](./artifacts/asset-source-preflight.json), [사진 시각 확인](./artifacts/selected-photos.jpg).
  - [source 역할·실제 Preview 연결·선정 자산 매핑](./artifacts/media-audit-scope.json).
  - [Pixabay Terms](https://pixabay.com/service/terms/), [FAQ](https://pixabay.com/service/faq/).
- **Consequences**: T01의 조사/선정/전송 검증은 완료했다. 컴포넌트의 실제 파형·조작/lifecycle와 전수 수정 화면 검증은 T02~T05에서 남아 있으며 Spec의 Feature 인수 항목은 아직 체크하지 않는다. 네트워크 의존성과 Content ID·다운스트림 사용 맥락은 최종 출처 안내에서도 유지한다.


## D007: T02 사진·프로필·비교 예제의 사실성 (2026-10-07)

- **Context**: workflow의 다음 실행 task T02를 owner session으로 활성화했다.
- **Constraints**: 숨은 docs public dependency와 기존 public API 변경을 만들지 않고 원저작자 코드 attribution을 보존한다. stock 모델의 실제 직원/고객 관계를 주장하지 않는다.
- **Decision**: Components·Patterns의 43개 example 파일에 검증한 고정 Pixabay URL을 직접 사용했다. 가상 프로필별 사진/이름/initials를 맞추고 업무 사진의 alt·파일 형식·실측 크기, 실제 곡의 제목/작곡가와 풍경 artwork 역할을 맞췄다. Comparison은 같은 Hintersee 원본과 명시적인 CSS grayscale 편집을 사용한다.
- **Trace**: 사진은 작업 공간/기사/풍경/인물 역할별로 구분했다. 브랜드·아이콘과 avatar-images의 의도적인 broken PNG/Blair fallback은 유지했다. AspectRatio의 기존 generated image용 심한 dark 필터를 제거하고 사진 크기를 컨테이너에 맞췄다. ItemHeader의 AI 모델 표시는 실제 사진 목록으로 조정했다. 가로 ScrollArea는 내부 scroll을 유지하며 좁은 viewport 안에 맞춘다.
- **Evidence**: docs typecheck와 수정 example eslint 통과. 기존 media-finance/source-extension 통합 검사 2파일 15개 통과. 43개 변경 파일의 독립 Preview 48경로 × light/dark·390/1440=192건에서 실제 사진 디코딩·포맷/크롭/내용과 화면을 확인했다. Crop apply/reset·Comparison arrows/Home/End·Zoom Escape/focus 복귀·모바일 Sidebar·MediaReveal 오류/retry·의도적 BK fallback도 통과했다. 240px crop/zoom/comparison overflow 없음, avatar stack browser reduced-motion emulation 확인. [실제 검증](./artifacts/media-verification.json). 초기 검증 harness의 hydration/hover 대기 누락과 잘못된 animated-stack 경로를 바로잡고 다시 검사했으며 해당 관찰만으로 제품 결함으로 분류하지 않았다.
- **Consequences**: registry Blocks와 영상/음악 교체는 각각 후속 T03/T04의 범위다. source URL 가용성 확인이나 jsdom play mock을 실제 Preview 재생 증거로 기록하지 않는다.

- T02 대표 화면: [같은 사진의 비교](./artifacts/comparison-real-photo.png), [모바일 Sidebar 프로필](./artifacts/sidebar-real-profile.png).
