// Two Robots in an Elevator — make.fun entry (program/v1).
//
// The task: one line, under 200 characters, of awkward small talk that one
// robot says to another while they ride an elevator together. The program
// writes that line to /output/entry.txt, where the judge reads it.
//
// The line leans on machine logic showing through the politeness: a smell
// sensor, a charging cable, and a risk assessment that cannot decide whether
// it just paid a compliment or flagged a fire hazard.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "You smell of fresh charging cable, and I have spent three floors deciding whether that is a compliment or a fire hazard.";

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, LINE, "utf8");

console.log(`Wrote ${LINE.length} characters to ${OUT_FILE}`);
