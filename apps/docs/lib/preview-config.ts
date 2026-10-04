import registry from "../../../registry.json";

/** Derive replay availability from the source dependency graph, including compositions. */
export function hasPreviewMotion(name: string, visited = new Set<string>()): boolean {
  if (visited.has(name)) return false;
  visited.add(name);
  const item = registry.items.find((entry) => entry.name === name);
  return Boolean(item && (
    item.dependencies?.some((dependency) => /^motion(?:@|$)/.test(dependency)) ||
    item.registryDependencies?.some((dependency) => hasPreviewMotion(dependency.replace("@leement/", ""), visited))
  ));
}
