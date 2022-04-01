import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { MessageWhereUniqueInput } from "../message/MessageWhereUniqueInput";
import { RouteWhereUniqueInput } from "../route/RouteWhereUniqueInput";

export type AttachmentWhereInput = {
  body?: JsonFilter;
  folder?: "Inbox" | "Outbox";
  id?: StringFilter;
  message?: MessageWhereUniqueInput;
  party?: StringFilter;
  route?: RouteWhereUniqueInput;
};
