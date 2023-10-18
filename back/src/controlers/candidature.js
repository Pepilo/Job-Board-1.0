import { client } from "./../config/connexion_bdd.js";

export const createCandidature = async (req, res) => {
    const { id_annonce, id_candidat, nom, prenom, email, cv, lettre_de_motivation } = req.body;
    try {
        await client.query(`
            INSERT INTO candidature
            (id_annonce, id_candidat, nom, prenom, email, cv, lettre_de_motivation)
            VALUES($1, $2, $3, $4, $5, $6, $7)
        `, [ id_annonce, id_candidat, nom, prenom, email, cv, lettre_de_motivation ])
        res.status(201).json({ message: "Candidature envoyé" });
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: "La requête a échoué" })
    }
}

export const getAllCandidature = async (req, res) => {
    try {
        const getAll = await client.query(`
            SELECT *
            FROM candidature
        `)
        console.log(getAll.rows);
        res.status(201).json(getAll.rows);
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: "La requête a échoué" })
    }
}

export const deleteCanditature = async (req, res) => {
    const { id } = req.params
    try {
        await client.query(`
            DELETE FROM candidature
            WHERE id_candidature = $1
        `, [ id ])
        console.log(getAll.rows);
        res.status(201).json({ message: "Candidature supprimé" });
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: "La requête a échoué" })
    }
}