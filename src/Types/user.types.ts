import { Types } from "mongoose";

export interface userRegiterDetails {
  name: string;
  email: string;
  password: string;
}

export interface userAuthResponse {
  name: string;
  email: string;
  isActive?: boolean;
  _id: Types.ObjectId;
}
