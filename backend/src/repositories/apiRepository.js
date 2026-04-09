import { db } from "../config/postgresConnection.js";

export class ApiRepository {
  async obterStartups() {
    console.log("Obtendo...");
    try {
      const rows = await db.query("SELECT * FROM startups");
      return rows.rows;
    } catch (err) {
      console.log(err);
      return [];
    }
  }

  async salvarStartup(startup) {
    console.log("Salvando...");
    const query =
      "INSERT INTO startups(nome_fantasia, setor, cnpj) VALUES($1, $2, $3) RETURNING *";
    const values = [startup.nomeFantasia, startup.setor, startup.cnpj];

    const res = await db.query(query, values);
    return res.rows[0];

    /*try {
      res = await db.query(query, values);
      return res.rows[0];
    } catch (err) {
      console.log(err);
      return [];
    }*/
  }
}
