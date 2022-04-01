import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  createdAt?: SortOrder;
  deviceId?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  password?: SortOrder;
  roles?: SortOrder;
  routeId?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
