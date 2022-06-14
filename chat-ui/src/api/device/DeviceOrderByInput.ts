import { SortOrder } from "../../util/SortOrder";

export type DeviceOrderByInput = {
  appId?: SortOrder;
  createdAt?: SortOrder;
  deviceToken?: SortOrder;
  id?: SortOrder;
  selector?: SortOrder;
  updatedAt?: SortOrder;
};
