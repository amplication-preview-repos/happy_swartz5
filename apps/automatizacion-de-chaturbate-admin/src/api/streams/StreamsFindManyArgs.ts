import { StreamsWhereInput } from "./StreamsWhereInput";
import { StreamsOrderByInput } from "./StreamsOrderByInput";

export type StreamsFindManyArgs = {
  where?: StreamsWhereInput;
  orderBy?: Array<StreamsOrderByInput>;
  skip?: number;
  take?: number;
};
