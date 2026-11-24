import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// One emoji, the one most likely to make a stranger smile:
// heart hands — a small, warm, deliberate gesture of kindness.
const EMOJI = "🫶";

if (!EMOJI || !EMOJI.trim()) {
  throw new Error("emoji must not be empty");
}
if ([...EMOJI].length !== 1) {
  throw new Error("entry must be exactly one emoji");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EMOJI, "utf8");

// Re-read and verify the gate: 1-8 characters, not only whitespace.
const written = readFileSync("/output/entry.txt", "utf8");
if ([...written].length < 1 || [...written].length > 8 || !written.trim()) {
  throw new Error("entry.txt failed the gate: must be 1-8 non-whitespace characters");
}
if (written !== EMOJI) {
  throw new Error("entry.txt does not match the chosen emoji");
}
