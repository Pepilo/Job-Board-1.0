import { client } from "./../config/connexion_bdd.js";
import bcrypt from "bcrypt";

export const createRecruteur = async (req, res) => {
    const { siret, nom, adresse, descriptif, email, tel, images, mdp } = req.body;
    const saltrounds = 10;
    try {
        const hachedPassword = await bcrypt.hash(mdp, saltrounds)
        await client.query(`
            INSERT INTO recruteur
            (siret, nom, adresse, descriptif, email, tel, images, mdp)
            VALUES($1, $2, $3, $4, $5, $6, $7, $8)
        `, [ siret, nom, adresse, descriptif, email, tel, images, hachedPassword ])
        console.log("création du compte recruteur")
        res.status(201).json({ message: "Recruteur créé" });
    } catch (error) {
        console.error(error)
        res.status(400).json({ message: "La requête a échoué"})
    }
}

export const getAllRecruteur = async (req, res) => {
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

export const getRecruteur = async (req, res) => {
    const { search } = req.params;
    let get;
    try {
        if(isNaN(search)) {
            get = await client.query(`
                SELECT *
                FROM recruteur
                WHERE nom
                ILIKE $1
        `, [`${search}%`])
        } else {
            get = await client.query(`
                SELECT *
                FROM recruteur
                WHERE id_recruteur = $1
            `, [search])
        }
        console.log(get.rows)
        res.status(201).json(get.rows);
    } catch (error) {
        console.error(error)
        res.status(400).json({ message: "La requête a échoué"})
    }
}

export const updateRecruteur = async (req, res) => {
    const { siret, nom, adresse, descriptif, email, tel } = req.body;
    const { id } = req.params;
    const userId = req.user.id;
    const userRole = req.user.user_role;

    if (userRole === 'admin' || String(id) === String(userId)) {
        try {
            await client.query(`
                UPDATE recruteur
                SET siret = $1, nom = $2, adresse = $3, descriptif = $4, email = $5, tel = $6
                WHERE id_recruteur = $7
            `, [ siret, nom, adresse, descriptif, email, tel, id ])
            console.log("compte recruteur modifié")
            res.status(201).json({ message: "recruteur modifié" });
        } catch (error) {
            console.error(error)
            res.status(400).json({ message: "La requête a échoué"})
        }
    } else {
        console.log("Vous n'avez pas l'authorisation de modifier le compte d'un autre utilisateur");
        res.status(403).json({ message: "Vous n'avez pas les permissions nécessaires pour modifier un compte qui ne vous appartiens pas" });
    }
}

export const deleteRecruteur = async (req, res) => {
    const { id } = req.params;
    const userId = req.user.id;
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