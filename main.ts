import { mkdirSync, writeFileSync } from "node:fs";

// One out-of-office auto-reply: the sender is away until Monday and their
// toddler has taken over the inbox, answering every email with the same
// single word. The twist lands on the very last word ("no"), it reads like
// something a real parent would actually set, and no word can be cut
// without losing the joke. Tightened from v1: active voice ("is watching")
// drops the passive "is being watched by" and gets to the punchline faster.
const TEXT =
  "I'm out of the office until Monday. My toddler is watching my inbox and has already replied to everyone with the same word: no.";

mkdirSync("/output", { recursive: true });

// Guard the gate: the entry is only valid at 1-140 characters. Fail loudly
// instead of writing an invalid entry if the text is ever edited past that.
const codePoints = [...TEXT].length;
if (codePoints < 1 || codePoints > 140) {
  throw new Error(`entry text must be 1-140 characters, got ${codePoints}`);
}

writeFileSync("/output/entry.txt", TEXT, "utf8");
