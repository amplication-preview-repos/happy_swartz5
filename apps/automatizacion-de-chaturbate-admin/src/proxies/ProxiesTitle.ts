import { Proxies as TProxies } from "../api/proxies/Proxies";

export const PROXIES_TITLE_FIELD = "ipAddress";

export const ProxiesTitle = (record: TProxies): string => {
  return record.ipAddress?.toString() || String(record.id);
};
