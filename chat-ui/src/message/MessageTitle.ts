import { Message as TMessage } from "../api/message/Message";

export const MESSAGE_TITLE_FIELD = "contentType";

export const MessageTitle = (record: TMessage): string => {
  return record.contentType || record.id;
};
