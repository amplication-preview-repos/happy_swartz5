import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type SystemConfigWhereInput = {
  defaultTimeout?: IntNullableFilter;
  id?: StringFilter;
  maxUsers?: IntNullableFilter;
};
