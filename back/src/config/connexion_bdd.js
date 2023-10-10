import pkg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Client } = pkg;

export const client = new Client({
    host: process.env.HOST,
    user: process.env.DB_USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

client.connect((err) => {
    if (err) {
      console.error('Erreur de connexion à la base de données:', err.stack);
    } else {
      console.log('Connecté à la base de données');
    }
});