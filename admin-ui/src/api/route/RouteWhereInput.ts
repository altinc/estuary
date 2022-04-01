import { AttachmentListRelationFilter } from "../attachment/AttachmentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { MessageListRelationFilter } from "../message/MessageListRelationFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type RouteWhereInput = {
  attachments?: AttachmentListRelationFilter;
  did?: StringFilter;
  id?: StringFilter;
  messages?: MessageListRelationFilter;
  users?: UserListRelationFilter;
};
