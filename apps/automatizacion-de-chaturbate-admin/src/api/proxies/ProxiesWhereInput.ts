import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ProxiesWhereInput = {
  id?: StringFilter;
  ipAddress?: StringNullableFilter;
  port?: StringNullableFilter;
  proxyAddress?: StringNullableFilter;
  proxyLogin?: StringNullableFilter;
  proxyPassword?: StringNullableFilter;
  proxyPort?: IntNullableFilter;
  proxyType?: StringNullableFilter;
};
