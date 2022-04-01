import { InputJsonValue } from "../../types";
import { MessageWhereUniqueInput } from "../message/MessageWhereUniqueInput";
import { RouteWhereUniqueInput } from "../route/RouteWhereUniqueInput";

export type AttachmentCreateInput = {
  body: InputJsonValue;
  folder: "Inbox" | "Outbox";
  message: MessageWhereUniqueInput;
  party: string;
  route: RouteWhereUniqueInput;
};
