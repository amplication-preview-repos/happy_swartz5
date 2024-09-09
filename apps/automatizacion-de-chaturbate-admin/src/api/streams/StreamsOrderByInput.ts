import { SortOrder } from "../../util/SortOrder";

export type StreamsOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  streamKey?: SortOrder;
  streamUrl?: SortOrder;
  updatedAt?: SortOrder;
};
