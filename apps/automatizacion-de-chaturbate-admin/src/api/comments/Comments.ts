import { Streams } from "../streams/Streams";
import { User } from "../user/User";

export type Comments = {
  content: string | null;
  createdAt: Date;
  id: string;
  stream?: Streams | null;
  updatedAt: Date;
  user?: User | null;
};
