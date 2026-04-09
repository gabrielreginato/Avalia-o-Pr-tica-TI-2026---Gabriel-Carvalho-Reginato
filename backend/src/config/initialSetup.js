import { Client } from "pg";

async function initialSetup() {
  const client = new Client({
    user: "postgres",
    host: "localhost",
    password: "postgres",
    database: "postgres",
    port: 5432,
  });

  await client.connect();

  const dbName = "startupsdb";

  await client.query(
    `CREATE DATABASE ${dbName} WITH OWNER = postgres TEMPLATE template1 CONNECTION LIMIT = -1;`
  );

  await client.end();

  const dbClient = new Client({
    user: "postgres",
    host: "localhost",
    password: "postgres",
    database: dbName,
    port: 5432,
  });

  await dbClient.connect();

  await dbClient.query(`
    CREATE TABLE IF NOT EXISTS startups (
      id SERIAL PRIMARY KEY,
      nome_fantasia VARCHAR(100) NOT NULL,
      cnpj VARCHAR(14) NOT NULL UNIQUE,
      setor VARCHAR(50) NOT NULL,
      timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `);

  await dbClient.end();
}

initialSetup().catch((err) => console.error);
