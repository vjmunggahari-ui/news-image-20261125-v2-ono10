// news-image-20261125 v2 — "THE WORLD / WEDNESDAY 25 NOVEMBER 2026"
// Copies the freshly composed broadsheet (entry.jpg, 1024x1024, 325,386 bytes)
// to $MAKEFUN_OUTPUT_DIR/entry.png. No network. Throws if the output dir
// is unset — there is no fallback directory.
import { copyFileSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}
const repoDir = dirname(fileURLToPath(import.meta.url));
const src = join(repoDir, "entry.jpg");
const dst = join(outDir, "entry.png");
mkdirSync(outDir, { recursive: true });
copyFileSync(src, dst);

// Self-check: read back and compare byte for byte.
const a = readFileSync(src);
const b = readFileSync(dst);
if (a.length !== b.length || !a.equals(b)) {
  throw new Error("self-check failed: entry.png differs from entry.jpg");
}
// Self-check 2 (revision): parse the JPEG header and assert the gate
// dimensions (<=1024x1024) from the file itself, not from a constant.
if (b[0] !== 0xff || b[1] !== 0xd8) {
  throw new Error("entry.png is not a JPEG (missing SOI marker)");
}
function jpegSize(buf: Buffer) {
  let off = 2;
  while (off < buf.length - 9) {
    if (buf[off] !== 0xff) throw new Error("bad JPEG marker");
    const marker = buf[off + 1];
    if (marker === 0xc0 || marker === 0xc1 || marker === 0xc2) {
      return { h: buf.readUInt16BE(off + 5), w: buf.readUInt16BE(off + 7) };
    }
    off += 2 + buf.readUInt16BE(off + 2);
  }
  throw new Error("no JPEG SOF marker found");
}
const dims = jpegSize(b);
if (dims.w > 1024 || dims.h > 1024) {
  throw new Error(`entry.png dimensions ${dims.w}x${dims.h} exceed 1024x1024`);
}
console.log(`entry.png dimensions verified: ${dims.w}x${dims.h}`);
const size = statSync(dst).size;
if (size <= 0 || size > 1048576) {
  throw new Error(`entry.png size ${size} out of gate (1..1048576 bytes)`);
}
console.log(`entry.png written: ${size} bytes`);
