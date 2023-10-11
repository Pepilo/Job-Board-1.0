import { client } from "./../config/connexion_bdd.js";

export const createRecruteur = async (req, res) => {
    const { nom, prenom, email, tel, mdp } = req.body;
    try {
        await client.query(`
            INSERT INTO recruteur
            (nom, prenom, email, tel, mdp)
            VALUES($1, $2, $3, $4, $5)
        `, [ nom, prenom, email, tel, mdp ])
        console.log("youpi")
        res.status(201).json({ message: "Recruteur créé" });
    } catch (error) {
        console.error(error)
        res.status(400).json({ message: "La requête a échoué"})
    }
}

export const getRecruteur = async (req, res) => {
    try {
        const get = await client.query(`
            SELECT *
            FROM recruteur
        `)
        console.log(get.rows)
        res.status(201).json({ message: "Recruteur get" });
    } catch (error) {
        console.error(error)
        res.status(400).json({ message: "La requête a échoué"})
    }
}

export const updateRecruteur = async (req, res) => {
    const { nom, prenom, email, tel, mdp } = req.body;
    const { id } = req.params;

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
        console.log("recruteur modifier")
        res.status(201).json({ message: "recruteur modifié" });
    } catch (error) {
        console.error(error)
        res.status(400).json({ message: "La requête a échoué"})
    }
}

export const deleteRecruteur = async (req, res) => {
    const { id } = req.params;

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
}