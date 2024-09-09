import { SystemConfigWhereInput } from "./SystemConfigWhereInput";
import { SystemConfigOrderByInput } from "./SystemConfigOrderByInput";

export type SystemConfigFindManyArgs = {
  where?: SystemConfigWhereInput;
  orderBy?: Array<SystemConfigOrderByInput>;
  skip?: number;
  take?: number;
};
