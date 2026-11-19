import { mkdirSync, copyFileSync } from "node:fs";

mkdirSync("sortie", { recursive: true });
copyFileSync("src/sum.js", "sortie/sum.js");
console.log("Build OK");