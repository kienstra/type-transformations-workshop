import { Equal, Expect } from "../helpers/type-utils";
import { S } from "ts-toolbelt";



type UserPath = "/users/:id";
type UserOrganisationPath = "/users/:id/organisations/:organisationId";

type ExtractPathParams< Path extends string > = {
  [ T in S.Split<Path, "/">[ number ] as T extends `:${infer Name}` ? Name : never ]: string;
}

type tests = [
  Expect<Equal<ExtractPathParams<UserPath>, { id: string }>>,
  Expect<
    Equal<
      ExtractPathParams<UserOrganisationPath>,
      { id: string; organisationId: string }
    >
  >,
];
