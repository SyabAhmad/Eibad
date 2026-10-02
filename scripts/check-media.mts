/**
 * Media integrity check. Run before every commit.
 *
 * The site keeps a single JSON source of truth for projects, and every media
 * path in it is expected to resolve to a real file under /public. Nothing else
 * in the build enforces that: next/image only fails when the missing file is
 * actually requested, so a dangling reference ships silently as a broken image
 * on an otherwise green build. This check closes that gap.
 *
 * Covers images[], drawings[], renders[], the card/hero fields, and the archive
 * marquee, which no other code path touches.
 *
 * Run: npm run check:media
 */
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

type Entry = { src: string; width: number; height: number; placeholder?: boolean };
type Project = {
  number: string;
  slug: string;
  image: string;
  heroImage: string;
  images: Entry[];
  renders?: Entry[];
  drawings: Entry[];
};

type Problem = { where: string; detail: string };

const root = process.cwd();
const publicDir = resolve(root, "public");

const problems: Problem[] = [];
let checked = 0;

/** Resolve a site-absolute media path to a file, reporting why it failed. */
function verify(src: string, where: string): void {
  checked += 1;

  if (!src.startsWith("/")) {
    problems.push({ where, detail: `path is not site-absolute: ${src}` });
    return;
  }

  const file = resolve(publicDir, `.${src}`);
  if (!existsSync(file)) {
    problems.push({ where, detail: `file does not exist: public${src}` });
  }
}

const projects = (
  JSON.parse(readFileSync(resolve(root, "src/data/projects.json"), "utf8")) as {
    projects: Project[];
  }
).projects;

for (const project of projects) {
  const tag = `${project.number} ${project.slug}`;

  verify(project.image, `${tag} image`);
  verify(project.heroImage, `${tag} heroImage`);

  for (const [field, list] of [
    ["images", project.images],
    ["renders", project.renders ?? []],
    ["drawings", project.drawings],
  ] as const) {
    for (const entry of list) {
      verify(entry.src, `${tag} ${field}`);

      if (entry.placeholder === true) {
        problems.push({
          where: `${tag} ${field}`,
          detail: `${entry.src} is still flagged placeholder: true — all drawings are now real issued sheets`,
        });
      }
      if (!entry.width || !entry.height) {
        problems.push({
          where: `${tag} ${field}`,
          detail: `${entry.src} has no intrinsic width/height, the modal needs them`,
        });
      }
    }
  }
}

/** The archive marquee is TypeScript, so read its paths out of the source. */
const archive = readFileSync(resolve(root, "src/data/archive-pakistan.ts"), "utf8");
for (const match of archive.matchAll(/src:\s*"(\/archive-pakistan\/[^"]+)"/g)) {
  verify(match[1], "archive-pakistan");
}

if (problems.length) {
  console.error(`\n${problems.length} media problem(s) in ${checked} paths checked:\n`);
  for (const problem of problems) {
    console.error(`  ${problem.where}\n    ${problem.detail}`);
  }
  console.error("");
  process.exit(1);
}

console.log(`media ok — ${checked} paths, all resolve under public/`);
