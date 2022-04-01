import { Attachment } from "../attachment/Attachment";
import { Message } from "../message/Message";
import { User } from "../user/User";

export type Route = {
  attachments?: Array<Attachment>;
  createdAt: Date;
  did: string;
  id: string;
  messages?: Array<Message>;
  updatedAt: Date;
  users?: Array<User>;
};
