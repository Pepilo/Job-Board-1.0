import { client } from "./../config/connexion_bdd.js";
import bcrypt from "bcrypt";

export const CreateAdmin = async (req, res) => {
    const { nom, prenom, email, mdp } = req.body;
    const saltrounds = 10;
    try {
        const hachedPassword = await bcrypt.hash(mdp, saltrounds)
        await client.query(`
            INSERT INTO admin
            (nom, prenom, email, mdp)
            VALUES($1, $2, $3, $4);
        `, [ nom, prenom, email, hachedPassword ])
        console.log("Admin créé");
        res.status(201).json({ message: "Admin créé" });
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: "La requête a échoué" });
    }
}

export const getAllAdmin = async (req, res) => {
    try {
        const get = await client.query(`
            SELECT *
            FROM admin;
        `)
        console.log(get.rows);
        res.status(200).json(get.rows);
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: "La requête a échoué" })   
    }
}

export const getAdminById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await client.query(`
            SELECT *
            FROM admin
            WHERE id_admin = $1
        `, [ id ])
        console.log(result.rows);
        res.status(200).json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: "La requête a échoué" })   
    }
}

export const deleteAdmin = async (req, res) => {
    const { id } = req.params;

    try {
        await client.query(`
            DELETE FROM admin
            WHERE id_admin = $1;
        `, [ id ])
        console.log("Admin supprimé");
        res.status(200).json({ message: "Admin supprimé" });
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: "La requête a échoué" })   
    }
}