# TypeScript Generics Resources

## Knowledge

- [TypeScript Handbook: Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html)
  The official primary source. Use for: identity function, type argument inference, generic types/interfaces/classes, constraints, `keyof` constraints, class types in generics.
- [Total TypeScript Essentials, ch. 16: Utility Folder Development (Matt Pocock, free online)](https://www.totaltypescript.com/books/total-typescript-essentials/utility-folder-development-in-typescript#generic-functions)
  The clearest practitioner treatment of generic *functions*. Use for: what makes a function generic, inference vs explicit type arguments ("specified types beat inferred types"), defaults, constraining type parameters, debugging inferred types.
- [Total TypeScript Essentials, ch. 15: Designing Your Types (free online)](https://www.totaltypescript.com/books/total-typescript-essentials/designing-your-types-in-typescript#generic-types)
  Use for: generic *types* (`Result<T>`, `ApiResponse<T>`), multiple type parameters, defaults, constraints, the three meanings of `extends`.
- [total-typescript/typescript-generics-workshop (GitHub)](https://github.com/total-typescript/typescript-generics-workshop)
  Free interactive exercise repo with problem/solution pairs and tests. Use for: extra practice after the core lessons.

## Wisdom (Communities)

- [r/typescript](https://www.reddit.com/r/typescript/)
  Active subreddit. Use for: "is this a good use of generics?" design questions and code review of typed utilities.
- [TypeScript Community Discord](https://discord.gg/typescript)
  Has dedicated help channels. Use for: fast feedback when a generic won't infer the way you expect.

## Gaps
- Generic React components/hooks: find a high-trust source before the React lesson (candidates: React TypeScript Cheatsheet).
