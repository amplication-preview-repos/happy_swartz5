import { CommentsListRelationFilter } from "../comments/CommentsListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { LikesListRelationFilter } from "../likes/LikesListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type StreamsWhereInput = {
  commentsItems?: CommentsListRelationFilter;
  id?: StringFilter;
  likesItems?: LikesListRelationFilter;
  streamKey?: StringNullableFilter;
  streamUrl?: StringNullableFilter;
};
