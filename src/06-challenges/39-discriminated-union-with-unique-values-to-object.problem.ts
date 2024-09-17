import { Equal, Expect } from "../helpers/type-utils";

type Route =
  | {
      route: "/";
      search: {
        page: string;
        perPage: string;
      };
    }
  | { route: "/about" }
  | { route: "/admin" }
  | { route: "/admin/users" };

type Without< T, J > = Pick< T, Exclude< keyof T, J > >
type RoutesObject = {
  [ K in Route as K['route'] ]: Exclude< keyof K, 'route' > extends never ? never : Without< K, 'route' >[ keyof Without< K, 'route' > ]
};

type I = Exclude< keyof {
  route: "/";
  search: {
    page: string;
    perPage: string;
  };
}, 'route' | 'search' >

type tests = [
  Expect<
    Equal<
      RoutesObject,
      {
        "/": {
          page: string;
          perPage: string;
        };
        "/about": never;
        "/admin": never;
        "/admin/users": never;
      }
    >
  >,
];
