import express from "express";
import { route as apiController } from "./routes/apiController.js";

const app = express();

app.use(express.json());

app.use("/api", apiController);

app.listen(3000, () => {
  console.log("Porta: 3000");
});
