import { Equal, Expect } from "../helpers/type-utils";

export const FakeDataDefaults = {
  String: "Default string",
  Int: 1,
  Float: 1.14,
  Boolean: true,
  ID: "id",
};

type FakeDataDefaults = typeof FakeDataDefaults;
export type StringType = FakeDataDefaults['String'];
export type IntType = FakeDataDefaults['Int'];
export type FloatType = FakeDataDefaults['Float']
export type BooleanType = FakeDataDefaults['Boolean'];
export type IDType = FakeDataDefaults['ID'];

type tests = [
  Expect<Equal<StringType, string>>,
  Expect<Equal<IntType, number>>,
  Expect<Equal<FloatType, number>>,
  Expect<Equal<BooleanType, boolean>>,
  Expect<Equal<IDType, string>>,
];
