import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DeviceWhereInput = {
  appId?: StringFilter;
  deviceToken?: StringFilter;
  id?: StringFilter;
  selector?: StringFilter;
  user?: UserWhereUniqueInput;
};
