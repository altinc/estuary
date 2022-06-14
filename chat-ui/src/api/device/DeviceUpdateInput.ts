import { UserUpdateManyWithoutDevicesInput } from "./UserUpdateManyWithoutDevicesInput";

export type DeviceUpdateInput = {
  appId?: string;
  deviceToken?: string;
  selector?: string;
  user?: UserUpdateManyWithoutDevicesInput;
};
