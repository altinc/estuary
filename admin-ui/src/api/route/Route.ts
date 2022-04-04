import { Message } from "../message/Message";
import { User } from "../user/User";

export type Route = {
  createdAt: Date;
  did: string;
  id: string;
  messages?: Array<Message>;
  updatedAt: Date;
  users?: Array<User>;
};
