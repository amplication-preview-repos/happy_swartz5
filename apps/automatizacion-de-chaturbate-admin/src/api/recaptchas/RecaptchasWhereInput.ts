import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type RecaptchasWhereInput = {
  id?: StringFilter;
  isSuccess?: BooleanNullableFilter;
  response?: StringNullableFilter;
  siteKey?: StringNullableFilter;
};
