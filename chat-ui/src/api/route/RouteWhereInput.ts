import { StringFilter } from "../../util/StringFilter";
import { MessageListRelationFilter } from "../message/MessageListRelationFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type RouteWhereInput = {
  did?: StringFilter;
  id?: StringFilter;
  messages?: MessageListRelationFilter;
  users?: UserListRelationFilter;
};
