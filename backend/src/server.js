import express from "express";
import routerToDoX from "./routes/routerToDoX.js";
import connectionDB from "./config/connectionDB.js";
import dotenv from "dotenv";
import cors from "cors";

const app = express();

const port = 8080;

dotenv.config();

connectionDB();

app.use(express.json());
app.use(cors());

app.use("/api/todox", routerToDoX);

app.listen(port, () => {
  console.log(`Server dang chay tren cong ${port}`);
});
