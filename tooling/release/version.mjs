import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import { fileURLToPath, URL } from "node:url";
import path from "node:path";
import process from "node:process";

const root = fileURLToPath(new URL("../../", import.meta.url));
const paths = ["package.json"];
for (const directory of ["apps", "packages", "tooling"]) {
  for (const entry of readdirSync(path.join(root, directory), { withFileTypes: true })) {
    if (entry.isDirectory()) {
      const manifest = path.join(directory, entry.name, "package.json");
      try {
        readFileSync(path.join(root, manifest));
        paths.push(manifest);
      } catch (error) {
        if (error.code !== "ENOENT") throw error;
      }
    }
  }
}

const manifests = paths.map((file) => {
  const source = readFileSync(path.join(root, file), "utf8");
  return { file, source, data: JSON.parse(source) };
});
const current = manifests[0].data.version;
const stableVersion = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)$/;
const [argument, ...extra] = process.argv.slice(2);

function fail(message) {
  process.stderr.write(`${message}\n`);
  process.exit(1);
}

if (extra.length || !argument) {
  fail("Usage: pnpm version:bump <patch|minor|major|x.y.z> or pnpm version:check");
}
if (!stableVersion.test(current)) fail(`Invalid root release version: ${current}`);

if (argument === "--check") {
  const mismatches = manifests.filter(({ data }) => data.version !== current);
  if (mismatches.length) {
    fail(`Expected ${current}:\n${mismatches.map(({ file, data }) => `${file}: ${data.version}`).join("\n")}\nRun pnpm version:bump ${current} to synchronize.`);
  }
  process.stdout.write(`All ${manifests.length} manifests match ${current}.\n`);
} else {
  let next = argument;
  if (["patch", "minor", "major"].includes(argument)) {
    const parts = current.split(".").map(Number);
    const index = { major: 0, minor: 1, patch: 2 }[argument];
    parts[index] += 1;
    for (let i = index + 1; i < parts.length; i++) parts[i] = 0;
    next = parts.join(".");
  }
  if (!stableVersion.test(next)) fail(`Invalid release version: ${next}. Use x.y.z, patch, minor, or major.`);

  // Parse and validate every manifest before writing any file.
  for (const { file, source, data } of manifests) {
    if (!stableVersion.test(data.version)) fail(`Invalid version in ${file}: ${data.version}`);
    if (!source.includes(`"version": "${data.version}"`)) fail(`Unsupported version formatting in ${file}.`);
  }
  for (const { file, source, data } of manifests) {
    if (data.version !== next) {
      writeFileSync(path.join(root, file), source.replace(`"version": "${data.version}"`, `"version": "${next}"`));
    }
  }
  process.stdout.write(`Set all ${manifests.length} manifests to ${next}. No commit, publish, or deployment was performed.\n`);
}
