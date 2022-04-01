import { SortOrder } from "../../util/SortOrder";

export type MessageOrderByInput = {
  createdAt?: SortOrder;
  folder?: SortOrder;
  id?: SortOrder;
  party?: SortOrder;
  routeId?: SortOrder;
  updatedAt?: SortOrder;
};
