import { SortOrder } from "../../util/SortOrder";

export type CommentsOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  streamId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
