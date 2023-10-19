import { client } from "./../config/connexion_bdd.js";
import { generateToken } from "./../middlewares/jsonwebtoken.js";
import bcrypt from "bcrypt";

export const login = async (req, res) => {
    const { email, mdp } = req.body;

    const result = await client.query(`
        SELECT email, mdp, user_role, id_candidat AS id_utilisateur FROM candidat
        WHERE email = $1
        UNION ALL
        SELECT email, mdp, user_role, id_recruteur AS id_utilisateur FROM recruteur
        WHERE email = $1
        UNION ALL
        SELECT email, mdp, user_role, id_admin AS id_utilisateur FROM "admin"
        WHERE email = $1;
    `, [ email ]);

    if(result.rows.length > 0) {
        const user = result.rows[0];
        const match = await bcrypt.compare(mdp, user.mdp);

        if(match) {
            const accessToken = generateToken(user);
            console.log("Vous êtes connecté à votre compte");
            res.status(201).json({ accessToken });
        } else {
            console.log("Mot de passe incorrect");
            res.status(401).json({ message: "Mot de passe incorrect" });
        }

    } else {
        console.log("Email incorrect");
        res.status(401).json({ message: "Email incorrect" });
    }
}