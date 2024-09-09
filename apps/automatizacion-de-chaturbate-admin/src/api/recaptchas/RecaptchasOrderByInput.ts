import { SortOrder } from "../../util/SortOrder";

export type RecaptchasOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  isSuccess?: SortOrder;
  response?: SortOrder;
  siteKey?: SortOrder;
  updatedAt?: SortOrder;
};
