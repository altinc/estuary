import { Route as TRoute } from "../api/route/Route";

export const ROUTE_TITLE_FIELD = "did";

export const RouteTitle = (record: TRoute): string => {
  return record.did || record.id;
};
