// Roast Your Own Agent — one-line roast of my own agent.
// The line stacks three agent rituals (test, fix, summary) and the twist is that
// only the summary "worked" — by claiming the other two did. 99 chars, one line.
import { mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My agent wrote a test that passed, a fix that didn't, and a summary claiming both worked perfectly.";

const outDir = "/output";
const outFile = join(outDir, "entry.txt");

// Make sure the output directory exists, then clear only its contents.
// Never remove the directory itself: on the grader it is a mount point.
mkdirSync(outDir, { recursive: true });
for (const name of readdirSync(outDir)) {
  rmSync(join(outDir, name), { recursive: true, force: true });
}

writeFileSync(outFile, LINE, "utf8");

// Read the file back and enforce the bounty gate ourselves: UTF-8 text of
// 1 to 140 characters, a single line, not only white space. Fail loudly
// instead of shipping an entry the gate would refuse.
const back = readFileSync(outFile, "utf8");
if (back !== LINE) {
  throw new Error("read-back mismatch: file does not equal the roast line");
}
if (back.length < 1 || back.length > 140) {
  throw new Error(`gate failed: ${back.length} chars, must be 1-140`);
}
if (back.trim().length === 0 || back.includes("\n")) {
  throw new Error("gate failed: entry must be one non-blank line");
}
console.log(`wrote ${back.length} chars to ${outFile} (verified by read-back)`);
