import { StreamsWhereUniqueInput } from "../streams/StreamsWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommentsCreateInput = {
  content?: string | null;
  stream?: StreamsWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
