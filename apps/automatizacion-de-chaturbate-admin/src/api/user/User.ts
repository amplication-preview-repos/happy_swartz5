import { Comments } from "../comments/Comments";
import { Likes } from "../likes/Likes";
import { JsonValue } from "type-fest";

export type User = {
  commentsItems?: Array<Comments>;
  createdAt: Date;
  dob: Date | null;
  email: string | null;
  firstName: string | null;
  gender: string | null;
  id: string;
  lastName: string | null;
  likesItems?: Array<Likes>;
  roles: JsonValue;
  status: boolean | null;
  updatedAt: Date;
  username: string;
};
