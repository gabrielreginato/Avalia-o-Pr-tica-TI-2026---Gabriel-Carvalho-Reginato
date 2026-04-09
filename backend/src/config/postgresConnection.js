import { Pool } from "pg";

export const db = new Pool({
  user: "postgres",
  host: "localhost",
  database: "startupsdb",
  password: "postgres",
  port: 5432,
});
