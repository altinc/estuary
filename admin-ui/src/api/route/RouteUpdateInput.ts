import { AttachmentUpdateManyWithoutRoutesInput } from "./AttachmentUpdateManyWithoutRoutesInput";
import { MessageUpdateManyWithoutRoutesInput } from "./MessageUpdateManyWithoutRoutesInput";
import { UserUpdateManyWithoutRoutesInput } from "./UserUpdateManyWithoutRoutesInput";

export type RouteUpdateInput = {
  attachments?: AttachmentUpdateManyWithoutRoutesInput;
  did?: string;
  messages?: MessageUpdateManyWithoutRoutesInput;
  users?: UserUpdateManyWithoutRoutesInput;
};
