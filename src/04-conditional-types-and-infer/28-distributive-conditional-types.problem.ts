import { Equal, Expect } from "../helpers/type-utils";

type Fruit = "apple" | "banana" | "orange";

type AppleOrBanana = "apple" | "banana" extends Fruit
  ? "apple" | "banana"
  : never;

type tests = [Expect<Equal<AppleOrBanana, "apple" | "banana">>];
