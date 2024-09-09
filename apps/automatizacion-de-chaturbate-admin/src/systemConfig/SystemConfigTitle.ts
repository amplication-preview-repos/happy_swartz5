import { SystemConfig as TSystemConfig } from "../api/systemConfig/SystemConfig";

export const SYSTEMCONFIG_TITLE_FIELD = "id";

export const SystemConfigTitle = (record: TSystemConfig): string => {
  return record.id?.toString() || String(record.id);
};
