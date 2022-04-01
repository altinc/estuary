import { AttachmentListRelationFilter } from "../attachment/AttachmentListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { RouteWhereUniqueInput } from "../route/RouteWhereUniqueInput";

export type MessageWhereInput = {
  attachments?: AttachmentListRelationFilter;
  body?: StringNullableFilter;
  folder?: "Inbox" | "Outbox";
  id?: StringFilter;
  party?: StringFilter;
  route?: RouteWhereUniqueInput;
};
