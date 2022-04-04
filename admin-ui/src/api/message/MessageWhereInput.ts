import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { RouteWhereUniqueInput } from "../route/RouteWhereUniqueInput";

export type MessageWhereInput = {
  body?: StringNullableFilter;
  contentType?: StringFilter;
  folder?: "Inbox" | "Outbox";
  id?: StringFilter;
  party?: StringFilter;
  route?: RouteWhereUniqueInput;
};
