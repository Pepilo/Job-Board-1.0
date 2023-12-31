import {client} from "./../config/connexion_bdd.js";

export const createAnnonce = async (req, res) => {
    const { id_recruteur, domaine, poste, ville, departement, region, contrat, conditions, salaire, descriptif, pre_requis } = req.body;
    try {
        await client.query (
            `INSERT INTO annonce
            (id_recruteur, domaine, poste, ville, departement, region, contrat, conditions, salaire, descriptif, pre_requis)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`,
            [id_recruteur, domaine, poste, ville, departement, region, contrat, conditions, salaire, descriptif, pre_requis])
        res.status(201).json({ message: "L'annonce a été créé" });
        console.log("L'annonce a été créé");
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: "La requête a échoué" })
    }
}

export const getAllAnnonce = async (req, res) => {
    try {
        const get = await client.query (
            `SELECT * FROM annonce`
        )
        console.log(get.rows);
        res.status(201).json(get.rows);
    } catch (error) {
        console.error(error);
        res.status(400).json({message : "La requête a échouée"});
    }
}

export const getAnnonceById = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await client.query(`
            SELECT *
            FROM annonce
            WHERE id_annonce = $1
        `, [ id ])
        console.log(response.rows);
        res.status(200).json(response.rows)
    } catch (error) {
        console.error(error)
        res.status(400).json({ message: "La requête a échoué"})
    }
}

export const getAnnonceByIdRecruteur = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await client.query(`
            SELECT *
            FROM annonce
            WHERE id_recruteur = $1
        `, [ id ])
        console.log(response.rows);
        res.status(200).json(response.rows)
    } catch (error) {
        console.error(error)
        res.status(400).json({ message: "La requête a échoué"})
    }
}

export const updateAnnonce = async (req, res) => {
    const { domaine, poste, ville, departement, region, contrat, conditions, salaire, descriptif, pre_requis } = req.body;
    const {id} = req.params;
    try {
        await client.query (
            `UPDATE annonce
            SET
            domaine = $1,
            poste = $2,
            ville = $3,
            departement = $4,
            region = $5,
            contrat = $6,
            conditions = $7,
            salaire = $8,
            descriptif = $9,
            pre_requis = $10
            WHERE id_annonce = $11`,
            [ domaine, poste, ville, departement, region, contrat, conditions, salaire, descriptif, pre_requis, id])
        console.log("annonce modifié")
        res.status(201).json({ message: "annonce modifié" });
    } catch (error) {
        console.error(error)
        res.status(400).json({ message: "La requête a échoué"})
    }
}

export const deleteAnnonce = async (req, res) => {
    const {id} = req.params;
    try {
        await client.query(
            `DELETE FROM annonce
            WHERE id_annonce = $1`,
        [id])
        console.log("annonce supprimé")
        res.status(201).json({message: "annonce supprimé"});
    } catch (error) {
        console.error(error)
        res.status(400).json({message: "La requête a échoué"})       
    }
}