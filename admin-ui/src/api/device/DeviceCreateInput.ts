import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DeviceCreateInput = {
  appId: string;
  deviceToken: string;
  selector: string;
  user?: UserWhereUniqueInput;
};
