import { JsonValue } from "type-fest";
import { Message } from "../message/Message";
import { Route } from "../route/Route";

export type Attachment = {
  body: JsonValue;
  createdAt: Date;
  folder?: "Inbox" | "Outbox";
  id: string;
  message?: Message;
  party: string;
  route?: Route;
  updatedAt: Date;
};
