import { CommentsUpdateManyWithoutStreamsItemsInput } from "./CommentsUpdateManyWithoutStreamsItemsInput";
import { LikesUpdateManyWithoutStreamsItemsInput } from "./LikesUpdateManyWithoutStreamsItemsInput";

export type StreamsUpdateInput = {
  commentsItems?: CommentsUpdateManyWithoutStreamsItemsInput;
  likesItems?: LikesUpdateManyWithoutStreamsItemsInput;
  streamKey?: string | null;
  streamUrl?: string | null;
};
