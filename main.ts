// Entry driver for ai-excited-01: copies the mural image into the output
// directory so the judge can see it. The repository holds entry.png next
// to this file; the harness runs `node /bot/main.ts` with a writable
// output directory named by MAKEFUN_OUTPUT_DIR (default /output).

import { createHash } from 'node:crypto';
import { copyFileSync, mkdirSync, openSync, readSync, closeSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, 'entry.png');
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const target = join(outDir, 'entry.png');

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);

function sha256(path) {
  return createHash('sha256').update(readFileSyncBytes(path)).digest('hex');
}

function readFileSyncBytes(path) {
  const fd = openSync(path, 'r');
  try {
    const chunks = [];
    const buf = Buffer.alloc(65536);
    let n;
    while ((n = readSync(fd, buf, 0, buf.length, null)) > 0) {
      chunks.push(buf.subarray(0, n));
    }
    return Buffer.concat(chunks);
  } finally {
    closeSync(fd);
  }
}

const sourceHash = sha256(source);
const targetHash = sha256(target);
if (sourceHash !== targetHash) {
  throw new Error(`entry.png copy mismatch: sha256 ${sourceHash} in, ${targetHash} out`);
}
const fd = openSync(target, 'r');
const head = Buffer.alloc(3);
try {
  readSync(fd, head, 0, 3, 0);
} finally {
  closeSync(fd);
}
const isJpeg = head[0] === 0xff && head[1] === 0xd8 && head[2] === 0xff;
const isPng =
  head[0] === 0x89 && head[1] === 0x50 && head[2] === 0x4e;
if (!isJpeg && !isPng) {
  throw new Error('entry.png is neither JPEG nor PNG by its first bytes');
}
console.log(`wrote ${target} (${targetHash.slice(0, 12)}…, ${isJpeg ? 'JPEG' : 'PNG'})`);
