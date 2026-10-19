// Tiny type-testing helpers, shared by every exercise.
// Expect<Equal<A, B>> is a compile error unless A and B are exactly the same type.
export type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends <T>() => T extends B ? 1 : 2 ? true : false;
export type Expect<T extends true> = T;
