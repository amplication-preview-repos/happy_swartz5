import { RecaptchasWhereInput } from "./RecaptchasWhereInput";
import { RecaptchasOrderByInput } from "./RecaptchasOrderByInput";

export type RecaptchasFindManyArgs = {
  where?: RecaptchasWhereInput;
  orderBy?: Array<RecaptchasOrderByInput>;
  skip?: number;
  take?: number;
};
