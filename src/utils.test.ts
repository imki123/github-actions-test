import { expect } from "vitest";
import { test } from "vitest";
import { adder } from "./utils";

test("adder", () => {
  expect(adder(1, 2)).equal(3);
});

test("adder2", () => {
  expect(adder(1213123, 333)).equal(1213456);
});
