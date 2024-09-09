import { Recaptchas as TRecaptchas } from "../api/recaptchas/Recaptchas";

export const RECAPTCHAS_TITLE_FIELD = "response";

export const RecaptchasTitle = (record: TRecaptchas): string => {
  return record.response?.toString() || String(record.id);
};
