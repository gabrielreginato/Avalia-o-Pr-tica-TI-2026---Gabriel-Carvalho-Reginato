import express from "express";
import cors from "cors";
import { route as apiController } from "./routes/apiController.js";

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/api", apiController);

app.listen(3000, () => {
  console.log("Porta: 3000");
});
