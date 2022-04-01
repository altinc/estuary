import { User } from "../user/User";

export type Device = {
  appId: string;
  createdAt: Date;
  deviceToken: string;
  id: string;
  selector: string;
  updatedAt: Date;
  user?: User;
};
