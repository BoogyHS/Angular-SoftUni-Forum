import { ITheme } from "./theme";
import { IUser } from "./userId"

export interface IPost {
  themeId: ITheme;
  likes: string[];
  _id: string;
  text: string;
  userId: IUser;
  created_at: string;
  updatedAt: string;
}
