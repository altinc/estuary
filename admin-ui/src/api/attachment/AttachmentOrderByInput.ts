import { SortOrder } from "../../util/SortOrder";

export type AttachmentOrderByInput = {
  body?: SortOrder;
  createdAt?: SortOrder;
  folder?: SortOrder;
  id?: SortOrder;
  messageId?: SortOrder;
  party?: SortOrder;
  routeId?: SortOrder;
  updatedAt?: SortOrder;
};
