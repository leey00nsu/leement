import base from "./tooling/eslint/base.js";
export default [...base, { files: ["**/*.{ts,tsx}"], languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } }];
