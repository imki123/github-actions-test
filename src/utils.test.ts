import { expect } from "vitest";
import { test } from "vitest";
import { adder } from "./utils";

test("adder", () => {
  expect(adder(1, 2)).equal(3);
});
