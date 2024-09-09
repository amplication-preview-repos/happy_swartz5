import { CommentsCreateNestedManyWithoutStreamsItemsInput } from "./CommentsCreateNestedManyWithoutStreamsItemsInput";
import { LikesCreateNestedManyWithoutStreamsItemsInput } from "./LikesCreateNestedManyWithoutStreamsItemsInput";

export type StreamsCreateInput = {
  commentsItems?: CommentsCreateNestedManyWithoutStreamsItemsInput;
  likesItems?: LikesCreateNestedManyWithoutStreamsItemsInput;
  streamKey?: string | null;
  streamUrl?: string | null;
};
