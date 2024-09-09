import { SortOrder } from "../../util/SortOrder";

export type SystemConfigOrderByInput = {
  createdAt?: SortOrder;
  defaultTimeout?: SortOrder;
  id?: SortOrder;
  maxUsers?: SortOrder;
  updatedAt?: SortOrder;
};
