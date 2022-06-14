import { UserCreateNestedManyWithoutDevicesInput } from "./UserCreateNestedManyWithoutDevicesInput";

export type DeviceCreateInput = {
  appId: string;
  deviceToken: string;
  selector: string;
  user?: UserCreateNestedManyWithoutDevicesInput;
};
