import { StringFilter } from "../../util/StringFilter";
import { StreamsWhereUniqueInput } from "../streams/StreamsWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LikesWhereInput = {
  id?: StringFilter;
  stream?: StreamsWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
