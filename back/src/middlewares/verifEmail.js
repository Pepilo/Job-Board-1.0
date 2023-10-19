// Vérifie que l'email n'est pas déjà associé à un compte quel que soit la TABLE
import { client } from "../config/connexion_bdd.js";

export const verifEmail = async (req, res, next) => {
    try {
        const { email } = req.body;
        const result = await client.query(`
            SELECT email
            FROM verif_email
            WHERE email = $1
        `, [ email ])
        if (result.rows.length > 0) {
            return res.status(400).json({ message: "Un compte est déjà associé à cette email" });
        } else {
            next();
        }
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: error });
    }
}