import { CommentsUpdateManyWithoutUsersInput } from "./CommentsUpdateManyWithoutUsersInput";
import { LikesUpdateManyWithoutUsersInput } from "./LikesUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  commentsItems?: CommentsUpdateManyWithoutUsersInput;
  dob?: Date | null;
  email?: string | null;
  firstName?: string | null;
  gender?: string | null;
  lastName?: string | null;
  likesItems?: LikesUpdateManyWithoutUsersInput;
  password?: string;
  roles?: InputJsonValue;
  status?: boolean | null;
  username?: string;
};
