import { ProxiesWhereInput } from "./ProxiesWhereInput";
import { ProxiesOrderByInput } from "./ProxiesOrderByInput";

export type ProxiesFindManyArgs = {
  where?: ProxiesWhereInput;
  orderBy?: Array<ProxiesOrderByInput>;
  skip?: number;
  take?: number;
};
