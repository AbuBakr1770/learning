# Teaching Notes

- Prefers ~30+ minute sessions: room for a concept + quiz + a compiler-checked exercise file.
- Stack: React/Next.js, Node backend, plain TS. Pull examples from those (API fetchers, hooks, props).
- Exercise loop: files in `exercises/`, run `npm run check` (local TypeScript 5.9). Solutions in `exercises/solutions/`.
- Type tests use `Expect<Equal<A, B>>` from `exercises/type-tests.ts`; reuse them in every exercise.
- Planned sequence (adjust to evidence): 0001 generic functions + inference → 0002 constraints (`extends`, `keyof`) → 0003 generic types (`ApiResponse<T>`, `Result<T,E>`, defaults) → 0004 generic React components/hooks → 0005 reading library signatures + interview drills.
