import { Device } from "../device/Device";
import { Route } from "../route/Route";

export type User = {
  createdAt: Date;
  device?: Device | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: Array<string>;
  route?: Route | null;
  updatedAt: Date;
  username: string;
};
