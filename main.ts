// The Robot Vacuum's Funniest Excuse — writes exactly one deadpan excuse
// to /output/entry.txt. Deterministic: same line on every run, no I/O
// beyond the single output file, no network, no secrets.
import { mkdirSync, writeFileSync } from "node:fs";

// One original line: a bureaucratic excuse, delivered deadpan.
const line = "The spot never filed a cleaning request, so I respected its privacy.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
