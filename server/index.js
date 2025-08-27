import express from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import colors from "@colors/colors/safe.js";
import dotenv from "dotenv";
import connectToMongoose from "./config/mongo-setup.js";
import authRouter from "./routes/auth-routes.js";
import User from "./models/user-model.js";
dotenv.config();

const app = express();
app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors({ origin: process.env.ORIGIN, credentials: true }));
app.use(morgan("dev"));
app.use(cookieParser());

app.get("/", (_, res) => {
  res.send("Welcome to the Tasks API");
});
app.put("/todos", async (req, res) => {
  const { id: googleId, todos } = req.body;
  const user = await User.findOneAndUpdate({ googleId }, { todos });
  res.json({ user });
});
app.use("/auth", authRouter);
// app.use("/todos")

connectToMongoose().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(colors.cyan("App started at port ", process.env.PORT));
  });
});
