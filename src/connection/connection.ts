import mongoose from "mongoose";
import { ConnectOptions } from "mongoose";

export interface MyConnectOptions extends ConnectOptions {
  useNewUrlParser: boolean;
  useUnifiedTopology: boolean;
}

const dbOptions: MyConnectOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

export const ConnectToDatabase = () => {
  mongoose
    .connect(process.env.DATABASE_URL as string, dbOptions)
    .then(() => {
      console.log("Database connection success");
    })
    .catch((err) => {
      console.log(`Database error: ${err}`);
    });
};
