import { mkdirSync, copyFileSync } from "node:fs";

mkdirSync("dist", { recursive: true });
copyFileSync("src/sum.js", "dist/sum.js");
console.log("Build OK");