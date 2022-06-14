import { RouteWhereUniqueInput } from "../route/RouteWhereUniqueInput";

export type MessageUpdateInput = {
  body?: string | null;
  contentType?: string;
  folder?: "Inbox" | "Outbox";
  party?: string;
  route?: RouteWhereUniqueInput;
};
