import express from "express";
import body from "express-validator";
import { ApiRepository } from "../repositories/apiRepository.js";

export const route = express.Router();

const repository = new ApiRepository();

route.get("/startups", async (req, res) => {
  try {
    const result = await repository.obterStartups();
    return res.json(result);
  } catch (err) {
    return res.status(500).json({ erro: err });
  }
});

route.post("/startups", async (req, res) => {
  const startup = {
    nomeFantasia: req.body.nomeFantasia,
    setor: req.body.setor,
    cnpj: req.body.cnpj,
  };

  try {
    const result = await repository.salvarStartup(startup);
    return res.redirect("http://localhost:5500/lista.html");
  } catch (err) {
    if (err.code == "23505") {
      return res.status(409).json({ erro: "CNPJ duplicado" });
    }
    console.log(err);
    return res.status(500).json({ erro: err });
  }
});
