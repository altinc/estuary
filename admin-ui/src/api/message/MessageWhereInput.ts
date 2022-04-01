import { AttachmentListRelationFilter } from "../attachment/AttachmentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { RouteWhereUniqueInput } from "../route/RouteWhereUniqueInput";

export type MessageWhereInput = {
  attachments?: AttachmentListRelationFilter;
  folder?: "Inbox" | "Outbox";
  id?: StringFilter;
  party?: StringFilter;
  route?: RouteWhereUniqueInput;
};
