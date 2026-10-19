// Solution for lesson 0001. Try the exercise first!
import type { Equal, Expect } from "../type-tests";

// Task 1: declare a type parameter T, use it for the input and the output.
function getFirst<T>(arr: T[]): T | undefined {
  return arr[0];
}
const firstNum = getFirst([10, 20, 30]);
const firstName = getFirst(["Ada", "Linus"]);
type test1 = [
  Expect<Equal<typeof firstNum, number | undefined>>,
  Expect<Equal<typeof firstName, string | undefined>>,
];

// Task 2
function wrapInArray<T>(value: T): T[] {
  return [value];
}
type User = { id: number; name: string };
const someUser: User = { id: 1, name: "Ada" };
const wrappedUsers = wrapInArray(someUser);
type test2 = [Expect<Equal<typeof wrappedUsers, User[]>>];
// @ts-expect-error a User[] must not accept a number
wrappedUsers.push(42);

// Task 3: T only appears in the return type, so the caller must supply it.
async function fetchJson<T>(url: string): Promise<T> {
  const res = await fetch(url);
  return res.json();
}
async function loadMe() {
  const me = await fetchJson<User>("/api/me");
  type test3 = [Expect<Equal<typeof me, User>>];
  return me.name;
}

// Task 4: two type parameters, both inferred.
function makePair<A, B>(first: A, second: B): [A, B] {
  return [first, second];
}
const pair = makePair(someUser, true);
type test4 = [Expect<Equal<typeof pair, [User, boolean]>>];
