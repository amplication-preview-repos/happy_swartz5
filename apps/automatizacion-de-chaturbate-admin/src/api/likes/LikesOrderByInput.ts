import { SortOrder } from "../../util/SortOrder";

export type LikesOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  streamId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
