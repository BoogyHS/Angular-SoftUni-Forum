import { IUser } from "./userId";

export interface ITheme {
  subscribers: string[];
  posts: String[];
  _id: string;
  themeName: string;
  userId: IUser;
  created_at: string;
  updatedAt: string;
  __v: number;
}
