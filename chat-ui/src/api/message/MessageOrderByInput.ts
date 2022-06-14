import { SortOrder } from "../../util/SortOrder";

export type MessageOrderByInput = {
  body?: SortOrder;
  contentType?: SortOrder;
  createdAt?: SortOrder;
  folder?: SortOrder;
  id?: SortOrder;
  party?: SortOrder;
  routeId?: SortOrder;
  updatedAt?: SortOrder;
};
