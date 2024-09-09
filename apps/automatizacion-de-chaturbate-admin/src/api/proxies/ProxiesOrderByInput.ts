import { SortOrder } from "../../util/SortOrder";

export type ProxiesOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  ipAddress?: SortOrder;
  port?: SortOrder;
  proxyAddress?: SortOrder;
  proxyLogin?: SortOrder;
  proxyPassword?: SortOrder;
  proxyPort?: SortOrder;
  proxyType?: SortOrder;
  updatedAt?: SortOrder;
};
