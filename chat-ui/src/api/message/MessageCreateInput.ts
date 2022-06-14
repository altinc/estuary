import { RouteWhereUniqueInput } from "../route/RouteWhereUniqueInput";

export type MessageCreateInput = {
  body?: string | null;
  contentType: string;
  folder: "Inbox" | "Outbox";
  party: string;
  route: RouteWhereUniqueInput;
};
