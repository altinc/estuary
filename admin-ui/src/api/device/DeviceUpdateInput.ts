import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DeviceUpdateInput = {
  appId?: string;
  deviceToken?: string;
  selector?: string;
  user?: UserWhereUniqueInput;
};
