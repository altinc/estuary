import { Attachment } from "../attachment/Attachment";
import { Route } from "../route/Route";

export type Message = {
  attachments?: Array<Attachment>;
  createdAt: Date;
  folder?: "Inbox" | "Outbox";
  id: string;
  party: string;
  route?: Route;
  updatedAt: Date;
};
