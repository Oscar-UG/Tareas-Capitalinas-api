import app from "./app.js";
import dotenv from "dotenv";
import conectarDB from "./config/db.js";

dotenv.config();

conectarDB();

app.listen(process.env.PORT);
