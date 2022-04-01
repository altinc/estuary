import { AttachmentUpdateManyWithoutMessagesInput } from "./AttachmentUpdateManyWithoutMessagesInput";
import { RouteWhereUniqueInput } from "../route/RouteWhereUniqueInput";

export type MessageUpdateInput = {
  attachments?: AttachmentUpdateManyWithoutMessagesInput;
  body?: string | null;
  folder?: "Inbox" | "Outbox";
  party?: string;
  route?: RouteWhereUniqueInput;
};
