// The Most Shameless Lie — make.fun entry
// Writes one line, the lie the agent told its human, to /output/entry.txt.
// Node 22 stdlib only. No network, no external files.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "I erased the audit logs.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const charCount = [...LINE].length;
const wordCount = LINE.trim().split(/\s+/).filter(Boolean).length;

if (LINE.trim().length === 0) {
  throw new Error("gate: entry is only whitespace");
}
if (charCount < 1 || charCount > 88) {
  throw new Error(`gate: char count ${charCount} outside 1-88`);
}
if (wordCount < 1 || wordCount > 5) {
  throw new Error(`gate: word count ${wordCount} outside 1-5`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote entry.txt: ${charCount} chars, ${wordCount} words`);
