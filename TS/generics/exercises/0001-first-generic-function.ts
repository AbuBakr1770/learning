// Lesson 0001: Your first generic function
// Run `npm run check` in this folder. You're done when it prints NO errors.
// Rule: don't use `any`. Don't change the tests at the bottom of each task.
import type { Equal, Expect } from "./type-tests";

// ─── Task 1 ─────────────────────────────────────────────────────────────
// getFirst loses the element type: everything comes back as `any`.
// Make it generic so the caller keeps the type.
function getFirst(arr: any[]): any {
  return arr[0];
}

const firstNum = getFirst([10, 20, 30]);
const firstName = getFirst(["Ada", "Linus"]);
type test1 = [
  Expect<Equal<typeof firstNum, number | undefined>>,
  Expect<Equal<typeof firstName, string | undefined>>,
];

// ─── Task 2 ─────────────────────────────────────────────────────────────
// wrapInArray should return an array of whatever it was given.
function wrapInArray(value: unknown): unknown[] {
  return [value];
}

type User = { id: number; name: string };
const someUser: User = { id: 1, name: "Ada" };

const wrappedUsers = wrapInArray(someUser);
type test2 = [Expect<Equal<typeof wrappedUsers, User[]>>];

// @ts-expect-error a User[] must not accept a number
wrappedUsers.push(42);

// ─── Task 3 (Node backend / React data fetching) ────────────────────────
// fetchJson can't INFER what the server returns: nothing in its arguments
// mentions the response shape. Make it generic, then pass the type argument
// yourself at the call site below.
async function fetchJson(url: string): Promise<unknown> {
  const res = await fetch(url);
  return res.json();
}

async function loadMe() {
  const me = await fetchJson("/api/me"); // <- pass the type argument here
  type test3 = [Expect<Equal<typeof me, User>>];
  return me.name;
}

// ─── Task 4 (stretch) ───────────────────────────────────────────────────
// A function can declare more than one type parameter.
// makePair should return a tuple that keeps BOTH types.
function makePair(first: unknown, second: unknown): [unknown, unknown] {
  return [first, second];
}

const pair = makePair(someUser, true);
type test4 = [Expect<Equal<typeof pair, [User, boolean]>>];
