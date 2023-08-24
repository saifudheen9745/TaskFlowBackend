import express, { Application } from "express";
import * as dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import morgan from "morgan";
import * as bodyParser from "body-parser";
import { ConnectToDatabase } from "./connection/connection";

import authRoute from './routes/authRoute'
import userRoute from './routes/userRoute'
import taskRoute from './routes/taskRoute'

const app:Application = express()

dotenv.config()

app.use(
  cors({
    origin: [
      "http://localhost:4200"
    ],
    credentials: true,
  })
);

app.use(cookieParser())
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

ConnectToDatabase()

app.use('/',authRoute)
app.use('/user',userRoute)
app.use('/task',taskRoute)

app.listen(process.env.PORT,()=>{
    console.log(`Server started successfully on port ${process.env.PORT}`)
})