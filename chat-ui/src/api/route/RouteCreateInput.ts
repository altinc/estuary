import { MessageCreateNestedManyWithoutRoutesInput } from "./MessageCreateNestedManyWithoutRoutesInput";
import { UserCreateNestedManyWithoutRoutesInput } from "./UserCreateNestedManyWithoutRoutesInput";

export type RouteCreateInput = {
  did: string;
  messages?: MessageCreateNestedManyWithoutRoutesInput;
  users?: UserCreateNestedManyWithoutRoutesInput;
};
