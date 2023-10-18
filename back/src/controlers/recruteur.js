import { client } from "./../config/connexion_bdd.js";
import bcrypt from "bcrypt";

export const createRecruteur = async (req, res) => {
    const { nom, prenom, email, tel, mdp } = req.body;
    const saltrounds = 10; // Ajout du sel
    try {
        const hachedPassword = await bcrypt.hash(mdp, saltrounds) // Ajout du Hash du mdp
        await client.query(`
            INSERT INTO recruteur
            (nom, prenom, email, tel, mdp)
            VALUES($1, $2, $3, $4, $5)
        `, [ nom, prenom, email, tel, hachedPassword ]) // modification de l'enregistrement de mdp à hachedPassword
        console.log("création du compte recruteur")
        res.status(201).json({ message: "Recruteur créé" });
    } catch (error) {
        console.error(error)
        res.status(400).json({ message: "La requête a échoué"})
    }
}

export const getAllRecruteur = async (req, res) => { // Changement de getRecruteur à getAllRecruteur
    try {
        const get = await client.query(`
            SELECT *
            FROM recruteur
        `)
        console.log(get.rows)
        res.status(201).json(get.rows);
    } catch (error) {
        console.error(error)
        res.status(400).json({ message: "La requête a échoué"})
    }
}

export const getRecruteur = async (req, res) => { // Ajout de getRecruteur
    const { id } = req.params;
    try {
        const get = await client.query(`
            SELECT *
            FROM recruteur
            WHERE id_recruteur = $1;
        `, [ id ])
        console.log(get.rows)
        res.status(201).json(get.rows);
    } catch (error) {
        console.error(error)
        res.status(400).json({ message: "La requête a échoué"})
    }
}

export const updateRecruteur = async (req, res) => {
    const { nom, prenom, email, tel, mdp } = req.body;
    const { id } = req.params;
    const userId = req.user.id; // ajout de l'id de l'utilisateur dans le token
    
    if (String(id) !== String(userId)) {
        return res.status(403).json({ message: "Vous n'avez pas les permissions nécessaires pour modifier ce compte" });
    }

    try {
        await client.query(`
        UPDATE recruteur
        SET 
        nom = $1,
        prenom = $2,
        email = $3,
        tel = $4,
        mdp = $5
        WHERE id_recruteur = $6
        `, [ nom, prenom, email, tel, mdp, id ])
        console.log(req.user.id);
        res.status(201).json({ message: "recruteur modifié" });
    } catch (error) {
        console.error(error)
        res.status(400).json({ message: "La requête a échoué"})
    }
}

export const deleteRecruteur = async (req, res) => {
    const { id } = req.params;
    const userId = req.user.id; // ajout de l'id de l'utilisateur dans le token
    const userRole = req.user.user_role;

    if (userRole === 'admin' || String(id) === String(userId)) {
        try {
            await client.query(`
                DELETE FROM recruteur
                WHERE id_recruteur = $1
            `, [ id ])
            console.log("recruteur supprimé")
            res.status(201).json({ message: "recruteur supprimé" });
        } catch (error) {
            console.error(error)
            res.status(400).json({ message: "La requête a échoué"})
        }
    } else {
        res.status(403).json({ message: "Vous n'avez pas les permissions nécessaires pour supprimer ce compte" });
    }
}