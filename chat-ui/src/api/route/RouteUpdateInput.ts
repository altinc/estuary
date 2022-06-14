import { MessageUpdateManyWithoutRoutesInput } from "./MessageUpdateManyWithoutRoutesInput";
import { UserUpdateManyWithoutRoutesInput } from "./UserUpdateManyWithoutRoutesInput";

export type RouteUpdateInput = {
  did?: string;
  messages?: MessageUpdateManyWithoutRoutesInput;
  users?: UserUpdateManyWithoutRoutesInput;
};
