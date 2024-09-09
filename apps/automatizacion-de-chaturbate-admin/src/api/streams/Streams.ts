import { Comments } from "../comments/Comments";
import { Likes } from "../likes/Likes";

export type Streams = {
  commentsItems?: Array<Comments>;
  createdAt: Date;
  id: string;
  likesItems?: Array<Likes>;
  streamKey: string | null;
  streamUrl: string | null;
  updatedAt: Date;
};
