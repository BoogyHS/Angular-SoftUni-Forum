import { IUser } from "./userId";
import { IPost } from "./post";

export interface ITheme {
  subscribers: string[];
  posts: string[] | IPost[];
  _id: string;
  themeName: string;
  userId: IUser;
  created_at: string;
  updatedAt: string;
  __v: number;
}
