import { AttachmentCreateNestedManyWithoutRoutesInput } from "./AttachmentCreateNestedManyWithoutRoutesInput";
import { MessageCreateNestedManyWithoutRoutesInput } from "./MessageCreateNestedManyWithoutRoutesInput";
import { UserCreateNestedManyWithoutRoutesInput } from "./UserCreateNestedManyWithoutRoutesInput";

export type RouteCreateInput = {
  attachments?: AttachmentCreateNestedManyWithoutRoutesInput;
  did: string;
  messages?: MessageCreateNestedManyWithoutRoutesInput;
  users?: UserCreateNestedManyWithoutRoutesInput;
};
