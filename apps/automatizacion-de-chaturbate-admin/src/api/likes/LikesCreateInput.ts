import { StreamsWhereUniqueInput } from "../streams/StreamsWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LikesCreateInput = {
  stream?: StreamsWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
