import { DeviceWhereUniqueInput } from "../device/DeviceWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { RouteWhereUniqueInput } from "../route/RouteWhereUniqueInput";

export type UserWhereInput = {
  device?: DeviceWhereUniqueInput;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  route?: RouteWhereUniqueInput;
  username?: StringFilter;
};
