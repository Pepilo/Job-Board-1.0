import { client } from "./../config/connexion_bdd.js";

export const createEntreprise = async (req, res) => {
    const { siret, nom, adresse, descriptif, images } = req.body; 
    try {
        await client.query(`
            INSERT INTO entreprise
            (siret, nom, adresse, descriptif, images)
            VALUES($1, $2, $3, $4, $5)
        `, [ siret, nom, adresse, descriptif, images ])
        res.status(201).json({ message: "L'entreprise a été créé" });
        console.log(siret);
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: "La requête a échoué" })
    }
}

export const getAllEntreprise = async (req, res) => {
    try {
        const getAll = await client.query(`
            SELECT *
            FROM entreprise
        `)
        console.log(getAll.rows);
        res.status(201).json(getAll.rows);
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: "La requête a échoué" });
    }
}

export const searchEntreprise = async (req, res) => {
    const { search } = req.params;
    let get;
    try {
        if(isNaN(search)) {
            get = await client.query(`
                SELECT *
                FROM entreprise
                WHERE nom
                ILIKE $1
            `, [`${search}%`])
        } else {
            get = await client.query(`
                SELECT *
                FROM entreprise
                WHERE siret = $1
            `, [search])
        }
        console.log(get.rows);
        res.status(200).json(get.rows);
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: "La requête a échoué" });
    }
}

export const updateEntreprise = async (req, res) => {
    const { siret, nom, adresse, descriptif, images } = req.body;
    const { id } = req.params;
    try {
        await client.query(`
            UPDATE entreprise
            SET
            siret = $1,
            nom = $2,
            adresse = $3,
            descriptif = $4,
            images = $5
            WHERE id_entreprise = $6
        `, [ siret, nom, adresse, descriptif, images, id ])
        res.status(200).json({ message: "L'entreprise a été modifié" });
    } catch (error) {
        console.error(error);
        res.status(400).json({ message : "La requête a échoué" });
    }
}

export const deleteEntreprise = async (req, res) => {
    const { id } = req.params;
    try {
        await client.query(`
            DELETE FROM entreprise
            WHERE id_entreprise = $1
        `, [ id ])
        res.status(200).json({ message: "L'entreprise a été supprimé" });
    } catch (error) {
        console.error(error)
        res.status(400).json({ message: "La requête a échoué" });
    }
}