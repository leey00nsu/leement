import tokens from "./tokens.json" with { type: "json" };
/** Canonical, platform independent Leement design decisions. */
export { tokens };
export type LeementTokens = typeof tokens;
