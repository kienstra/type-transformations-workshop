import { Equal, Expect } from "../helpers/type-utils";

type HelloGoodbye = "hello" | "goodbye";
type YouSayGoodbyeAndISayHello< T extends HelloGoodbye > = Exclude< HelloGoodbye, T >;

type tests = [
  Expect<Equal<YouSayGoodbyeAndISayHello<"hello">, "goodbye">>,
  Expect<Equal<YouSayGoodbyeAndISayHello<"goodbye">, "hello">>,
];
