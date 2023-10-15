import express from "express";
import TaskRoute from "./routes/task.route.js";
import authRoutes from "./routes/user.AuthRoutes.js";
import ListRoute from "./routes/list.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

app.use("/api", TaskRoute);
app.use("/api", authRoutes);
app.use("/api", ListRoute);

export default app;
