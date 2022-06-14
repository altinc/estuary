import { Route } from "../route/Route";

export type Message = {
  body: string | null;
  contentType: string;
  createdAt: Date;
  folder?: "Inbox" | "Outbox";
  id: string;
  party: string;
  route?: Route;
  updatedAt: Date;
};
