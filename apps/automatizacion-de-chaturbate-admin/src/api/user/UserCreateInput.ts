import { CommentsCreateNestedManyWithoutUsersInput } from "./CommentsCreateNestedManyWithoutUsersInput";
import { LikesCreateNestedManyWithoutUsersInput } from "./LikesCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  commentsItems?: CommentsCreateNestedManyWithoutUsersInput;
  dob?: Date | null;
  email?: string | null;
  firstName?: string | null;
  gender?: string | null;
  lastName?: string | null;
  likesItems?: LikesCreateNestedManyWithoutUsersInput;
  password: string;
  roles: InputJsonValue;
  status?: boolean | null;
  username: string;
};
