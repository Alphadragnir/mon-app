import { test } from "node:test";
import assert from "node:assert";
import { sum } from "../src/sum.js";

test("sum additionne", () => {
  assert.strictEqual(sum(2, 3), 5);
});