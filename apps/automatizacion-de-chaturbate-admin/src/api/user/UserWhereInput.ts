import { CommentsListRelationFilter } from "../comments/CommentsListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LikesListRelationFilter } from "../likes/LikesListRelationFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type UserWhereInput = {
  commentsItems?: CommentsListRelationFilter;
  dob?: DateTimeNullableFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  gender?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  likesItems?: LikesListRelationFilter;
  status?: BooleanNullableFilter;
  username?: StringFilter;
};
