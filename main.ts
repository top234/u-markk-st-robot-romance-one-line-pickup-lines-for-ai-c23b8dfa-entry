// Robot Romance: One-Line Pickup Lines for AI — one pickup line
// aimed at a machine, written to /output/entry.txt.
// 121 characters: the speaker keeps failing the CAPTCHA's
// "I'm not a robot" test on purpose, because every retry is one
// more minute with the machine he is courting.
// SPDX-License-Identifier: MIT
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The line courts a CAPTCHA: failing its robot test is usually a
// frustration, here it is a strategy — the punch lands on the retry.
const LINE: string =
  "Are you a CAPTCHA? Because I keep failing the 'I'm not a robot' test on purpose \u2014 every retry is one more minute with you.";

function main(): void {
  const line = LINE;
  if (line.length < 1 || line.length > 200) {
    throw new Error(`line must be 1-200 characters, got ${line.length}`);
  }
  // The grader mounts the output directory: create it, never remove it.
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), line, "utf8");
}

main();
