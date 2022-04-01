import { AttachmentCreateNestedManyWithoutMessagesInput } from "./AttachmentCreateNestedManyWithoutMessagesInput";
import { RouteWhereUniqueInput } from "../route/RouteWhereUniqueInput";

export type MessageCreateInput = {
  attachments?: AttachmentCreateNestedManyWithoutMessagesInput;
  folder: "Inbox" | "Outbox";
  party: string;
  route: RouteWhereUniqueInput;
};
