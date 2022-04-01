import { AttachmentCreateNestedManyWithoutMessagesInput } from "./AttachmentCreateNestedManyWithoutMessagesInput";
import { RouteWhereUniqueInput } from "../route/RouteWhereUniqueInput";

export type MessageCreateInput = {
  attachments?: AttachmentCreateNestedManyWithoutMessagesInput;
  body?: string | null;
  folder: "Inbox" | "Outbox";
  party: string;
  route: RouteWhereUniqueInput;
};
