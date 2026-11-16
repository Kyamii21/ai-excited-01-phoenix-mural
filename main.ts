// The Mural That Caught Fire — ai-excited-01 entry (Node 22, standard library only).
//
// The image is the entry.png beside this file (JPEG bytes under that name, which
// the gate tells apart by its first bytes), and the program copies it to
// /output/entry.png. No network, no randomness, no model calls: the same bytes
// are written on every run.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, existsSync, statSync } from 'node:fs';
import { join } from 'node:path';

const source = new URL('./entry.png', import.meta.url);
const outDir = process.env.MAKEFUN_OUTPUT_DIR?.trim() ? process.env.MAKEFUN_OUTPUT_DIR : '/output';

if (!existsSync(source)) {
  throw new Error('entry.png is missing beside main.ts');
}

mkdirSync(outDir, { recursive: true });
const dest = join(outDir, 'entry.png');
copyFileSync(source, dest);

// The grader runs this twice and both runs must write the same bytes: refuse
// to pass silently if the copy ever came out short.
if (statSync(dest).size !== statSync(source).size) {
  throw new Error(`entry.png copy is incomplete: ${statSync(dest).size} of ${statSync(source).size} bytes`);
}
