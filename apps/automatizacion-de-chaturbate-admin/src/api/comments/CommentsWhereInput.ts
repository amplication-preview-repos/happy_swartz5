import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StreamsWhereUniqueInput } from "../streams/StreamsWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommentsWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  stream?: StreamsWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
