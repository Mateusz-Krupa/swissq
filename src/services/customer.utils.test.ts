import { sortObjectArray } from "./customer.utils";

test("should sort array of objects by name in ascending order", () => {
  const array = [{ name: "Charlie" }, { name: "Alice" }, { name: "Bob" }];
  const sortedArray = sortObjectArray(array, "name", "asc");
  expect(sortedArray).toEqual([
    { name: "Alice" },
    { name: "Bob" },
    { name: "Charlie" },
  ]);
});

test("should sort array of objects by name in descending order", () => {
  const array = [{ name: "Alice" }, { name: "Charlie" }, { name: "Bob" }];
  const sortedArray = sortObjectArray(array, "name", "desc");
  expect(sortedArray).toEqual([
    { name: "Charlie" },
    { name: "Bob" },
    { name: "Alice" },
  ]);
});

test("should return a new array and not mutate the original", () => {
  const array = [{ name: "Charlie" }, { name: "Alice" }, { name: "Bob" }];
  const sortedArray = sortObjectArray(array, "name", "asc");
  expect(sortedArray).not.toBe(array);
});
