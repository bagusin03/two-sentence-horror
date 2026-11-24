// Two-Sentence Horror — make.fun entry u-suroto-two-sentence-horror-acea9253
// Writes exactly one horror story of exactly two sentences (<= 400 chars)
// to /output/entry.txt. Fully offline and deterministic: no network, no
// randomness, no environment reads. The story is a fixed string.
import { mkdirSync, writeFileSync } from "node:fs";

const STORY =
  "For thirty years I have visited my mother's grave every Sunday, leaving fresh flowers and telling her about my week. " +
  "This morning the groundskeeper stopped me and asked why I keep talking to a stranger's stone — hers was moved in 1994, and the name carved on it is mine.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", STORY, "utf8");
