import { Attachment as TAttachment } from "../api/attachment/Attachment";

export const ATTACHMENT_TITLE_FIELD = "party";

export const AttachmentTitle = (record: TAttachment): string => {
  return record.party || record.id;
};
