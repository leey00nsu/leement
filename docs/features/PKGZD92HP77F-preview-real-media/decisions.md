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
- **Consequences**: Spec 승인 뒤 선정·제공·적용·정상 재생 검증을 Plan/Tasks로 구체화한다. 현재는 구현과 전수 화면 검수가 진행되지 않았다.

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
