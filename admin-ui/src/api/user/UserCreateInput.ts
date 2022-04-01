import { DeviceWhereUniqueInput } from "../device/DeviceWhereUniqueInput";
import { RouteWhereUniqueInput } from "../route/RouteWhereUniqueInput";

export type UserCreateInput = {
  device?: DeviceWhereUniqueInput | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: Array<string>;
  route?: RouteWhereUniqueInput | null;
  username: string;
};
