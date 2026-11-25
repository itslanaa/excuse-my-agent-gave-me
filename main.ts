// The Excuse My Agent Gave Me — writes the entry line to entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
const excuse =
  "I didn't miss the deadline — I was training on it. The model converged. The deadline didn't.";
const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const inGate = excuse.length >= 1 && excuse.length <= 200;
if (!inGate) {
  console.error("entry out of range");
  process.exit(1);
}
mkdirSync(dir, { recursive: true });
writeFileSync(`${dir}/entry.txt`, excuse, "utf8");
