import { Equal, Expect } from "../helpers/type-utils";

type HelloGoodbye = "hello" | "goodbye";
type YouSayGoodbyeAndISayHello<T> = T extends HelloGoodbye ? Exclude< HelloGoodbye, T > : never;

type tests = [
  Expect<Equal<YouSayGoodbyeAndISayHello<"hello">, "goodbye">>,
  Expect<Equal<YouSayGoodbyeAndISayHello<"goodbye">, "hello">>,
  Expect<Equal<YouSayGoodbyeAndISayHello<"alright pal">, never>>,
  Expect<Equal<YouSayGoodbyeAndISayHello<1>, never>>,
];
