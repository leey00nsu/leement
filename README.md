<p align="center">
  <img src="apps/docs/public/leement-mark.svg" alt="Leement" width="64" />
</p>

<h1 align="center"><strong>Leement</strong></h1>

<p align="center">
  <strong>shadcn 기반 디자인 시스템</strong>
</p>

<p align="center">
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="MIT License" /></a>
  <img src="https://img.shields.io/badge/node-22%2B-brightgreen" alt="Node.js 22 이상" />
  <img src="https://img.shields.io/badge/pnpm-10.34.5-f69220" alt="pnpm 10.34.5" />
  <img src="https://img.shields.io/badge/Next.js-16-black" alt="Next.js 16" />
  <img src="https://img.shields.io/badge/TypeScript-5.9-3178c6" alt="TypeScript 5.9" />
</p>

<p align="center">
  <a href="#quick-start">Quick Start</a> ·
  <a href="#프로젝트에-설치">프로젝트에 설치</a> ·
  <a href="#주요-기능">주요 기능</a> ·
  <a href="#시스템-구성">시스템 구성</a>
</p>

디자인 토큰과 규칙을 기준으로 테마를 공유하고, shadcn registry로 필요한 컴포넌트 소스를 설치합니다. 설치한 코드는 프로젝트에서 자유롭게 수정할 수 있습니다.

<p align="center">
  <img src="apps/docs/public/readme-captures/home-light.png" alt="Leement 라이트 테마 홈과 실제 Button·Input·Card·PageHeader 미리보기" width="1000" />
</p>
<p align="center">
  <img src="apps/docs/public/readme-captures/home-dark.png" alt="같은 registry source로 구성한 Leement 다크 테마 홈" width="1000" />
</p>

## Quick Start

Node.js 22 이상 · pnpm 10.34.5

```bash
pnpm install --frozen-lockfile
pnpm --filter @leement/docs dev
```

[문서](http://localhost:3000) · [컴포넌트 미리보기](http://localhost:3000/showcase) · [Foundations](http://localhost:3000/foundations/color)

## 프로젝트에 설치

React · Tailwind CSS v4 · shadcn 설정이 필요합니다. `components.json`이 없다면 `npx shadcn@latest init`으로 초기화하세요.

### 1. Theme

문서 서버를 실행한 뒤, Leement 루트에서 패키징합니다.

```bash
pnpm --filter @leement/theme pack --pack-destination /tmp/leement-pack
```

사용할 프로젝트에서 설치합니다.

```bash
pnpm add /tmp/leement-pack/leement-theme-0.1.0.tgz
```

전역 CSS에서 Tailwind 다음에 불러옵니다.

```css
@import "tailwindcss";
@import "@leement/theme";
```

`shadcn init`의 기본 색상·폰트·반경 preset은 Leement 값을 덮어쓰지 않도록 정리하세요. `shadcn/tailwind.css`를 사용한다면 Leement import 뒤에 둡니다.

### 2. Registry

프로젝트의 `components.json`에 추가합니다.

```json
{
  "registries": {
    "@leement": "http://localhost:3000/r/{name}.json"
  }
}
```

### 3. Components

```bash
npx shadcn@latest add @leement/button @leement/empty-state @leement/settings-section
```

필요한 하위 컴포넌트도 함께 설치됩니다. 기존 파일이 있다면 덮어쓰기 대상을 확인하세요.

```tsx
import { Button } from "@/components/ui/button";

export function Example() {
  return <Button>시작하기</Button>;
}
```

기본 소스 경로는 `@/components/{ui,patterns,blocks}`와 `@/lib`입니다. 다른 구조를 쓰면 설치된 경로와 import를 수정하세요.

npm 배포 후에는 `pnpm add @leement/theme`으로 설치하고, registry 주소를 배포한 사이트의 `/r/{name}.json`으로 바꿉니다.

## 주요 기능

- **Foundations**: Color·Typography·Spacing·Radius·Shadow·Motion
- **테마 편집**: 사이트 전체 즉시 반영, color picker, 브라우저 저장, 초기화, CSS 복사
- **브랜드**: light/dark 색상, 아이콘+글자 로고, 본문 Pretendard Variable·로고 Paperlogy Bold
- **미디어·모션**: AudioPlayer·VideoPlayer, 진입·텍스트·펼침·순환 효과, reduced motion 대응

편집한 CSS는 theme import 뒤에 적용합니다. 기본 폰트와 브랜드 색은 커스텀할 수 있습니다.

<p align="center">
  <img src="apps/docs/public/readme-captures/foundations-color.png" alt="브랜드 색상 편집과 실제 UI 반영, CSS 복사" width="1000" />
</p>

| 카탈로그 | 수 | 대표 항목 |
| --- | --- | --- |
| UI | 64 | Button, Input, Card, Dialog, Tabs, Slider, Table |
| Patterns | 13 | PageHeader, EmptyState, FormSection, SearchField, StatCard, BrandLogo |
| Blocks | 8 | SettingsSection, BentoGrid, Gantt, Kanban, Sandbox, Reel, Deck, DialogStack |

문서 미리보기와 설치 소스는 같은 구현을 사용합니다.

## 시스템 구성

```text
Design Language → Tokens → Theme → UI → Patterns → Blocks → Application
```

| 영역 | 역할 |
| --- | --- |
| `@leement/tokens` | React·Tailwind에 의존하지 않는 디자인 토큰 |
| `@leement/theme` | CSS 변수·폰트·reset·Tailwind 매핑 |
| Registry | 프로젝트가 소유하는 컴포넌트 소스와 dependency |
| Docs | 사용 규칙·실제 미리보기·registry host |

shadcn 호환 변수는 Leement의 `--lm-*` 토큰에서 파생합니다.

## 기술 스택

Next.js 16 · React 19 · TypeScript strict · Tailwind CSS v4 · Base UI · Radix · pnpm · Turborepo

## 프로젝트 구조

```text
leement/
├─ apps/docs/          # 문서·미리보기
├─ packages/
│  ├─ tokens/          # 디자인 토큰
│  └─ theme/           # CSS·폰트
├─ registry/
│  ├─ ui/              # 컴포넌트
│  ├─ patterns/        # 반복 UI 구조
│  ├─ blocks/          # 화면 조합
│  └─ lib/             # 내부 helper
├─ tooling/            # ESLint·TypeScript 설정
├─ docs/               # 설계 문서
├─ registry.json
├─ components.json
├─ pnpm-workspace.yaml
└─ turbo.json
```

## 라이선스

[MIT](LICENSE) · [외부 코드 고지](THIRD_PARTY_NOTICES.md) · [Pretendard OFL](packages/theme/fonts/Pretendard-OFL.txt) · [Paperlogy OFL](packages/theme/fonts/Paperlogy-OFL.txt)
