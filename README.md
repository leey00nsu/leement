# Leement

Leement is an open source design system built from the visual rules shared by CopySinger (light) and Leesfield (dark). Its source of truth is **design tokens plus design rules**. The shadcn registry distributes editable React component source.

## Layers

Design language → Tokens → Web theme → UI components → Patterns → Blocks → Application.

- `packages/tokens`: platform independent primitive and semantic decisions.
- `packages/theme`: generated CSS variables, reset, Tailwind v4 theme mapping, and shadcn compatibility aliases.
- `registry/ui`: eight reusable controls and surfaces.
- `registry/patterns`: five repeatable product UI structures.
- `registry/blocks`: one example settings block.
- `apps/docs`: documentation and registry JSON host. Its previews import the registry source files.

## Develop locally

Requires Node 22 and pnpm 10.

```sh
pnpm install
pnpm build:tokens
pnpm build:theme
pnpm registry:build
pnpm --filter @leement/docs dev
```

The local registry is served at `http://localhost:3000/r/{name}.json`.

## Use in a consumer project

Once `@leement/theme` is published and the docs site has a public host:

```sh
pnpm add @leement/theme
```

```css
@import "tailwindcss";
@import "@leement/theme";
```

Add a registry mapping to your project's `components.json`:

```json
{
  "registries": {
    "@leement": "https://YOUR_HOST/r/{name}.json"
  }
}
```

```sh
npx shadcn@latest add @leement/button
npx shadcn@latest add @leement/empty-state
npx shadcn@latest add @leement/settings-section
```

The registry installs source files into your project. It does not add an `@leement/react` runtime dependency. For a local trial, use the localhost registry URL and `pnpm add file:/path/to/leement/packages/theme` after building the theme.

## Contribute

Read [design rules](docs/designs/design-system.md) before proposing a component. New UI starts in an application. A second real use makes it a candidate; a third use prompts design system review. Maturity is `experimental`, `candidate`, or `stable`; no v0.1 item is assumed stable. Keep native HTML semantics and Radix keyboard behavior. Use semantic tokens in visual styles. Run `pnpm check` before submitting changes.

The project is organized with lee-spec-kit documentation under `docs/`.

## Release status

v0.1 source and local registry installation are verified. npm packages and a public registry URL have not been published yet.

## License

MIT. See [LICENSE](LICENSE).
