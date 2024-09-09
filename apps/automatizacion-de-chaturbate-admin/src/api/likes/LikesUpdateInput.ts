import { StreamsWhereUniqueInput } from "../streams/StreamsWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LikesUpdateInput = {
  stream?: StreamsWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
