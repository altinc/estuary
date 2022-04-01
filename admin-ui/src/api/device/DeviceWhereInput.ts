import { StringFilter } from "../../util/StringFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type DeviceWhereInput = {
  appId?: StringFilter;
  deviceToken?: StringFilter;
  id?: StringFilter;
  selector?: StringFilter;
  user?: UserListRelationFilter;
};
