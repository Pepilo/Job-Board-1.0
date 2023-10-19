import {client} from "./../config/connexion_bdd.js";
import bcrypt from "bcrypt";

export const createCandidat = async (req, res) => {
    const { nom, prenom, email, mdp, tel, adresse, CV, lettre_de_motivation, situation, competence, experience, handicap } = req.body;
    const saltrounds = 10;
    try {
        const hachedPassword = await bcrypt.hash(mdp, saltrounds);
        await client.query (`
            INSERT INTO candidat
            (nom, prenom, email, mdp, tel, adresse, CV, lettre_de_motivation, situation, competence, experience, handicap)
            VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
        `, [nom, prenom, email, hachedPassword, tel, adresse, CV, lettre_de_motivation, situation, competence, experience, handicap])
        console.log(nom);
        res.status(201).json({ message: "Le candidat a été créé" });
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: "La requête a échoué" })     
    }
}

export const getAllCandidat = async (req, res) => {
    try {
        const get = await client.query(`
            SELECT * FROM candidat
        `)
        console.log(get.rows);
        res.status(201).json(get.rows);
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: "La requête a échoué" });       
    }
}

export const updateCandidat = async (req, res) => {
    const { nom, prenom, email, mdp, tel, adresse, CV, lettre_de_motivation, situation, competence, experience, handicap } = req.body;
    const { id } = req.params;
    const userId = req.user.id;

    if (String(id) !== String(userId)) {
        console.log("Vous n'avez pas l'authorisation de modifier le compte d'un autre utilisateur");
        return res.status(403).json({ message: "Vous n'avez pas les permissions nécessaires pour modifier un compte qui ne vous appartiens pas" });
    }

    try {
        await client.query(`
            UPDATE candidat
            SET nom = $1, prenom = $2, email = $3, mdp = $4, tel = $5, adresse = $6, cv = $7, lettre_de_motivation = $8,
            situation = $9, competence = $10, experience = $11, handicap = $12
            WHERE id_candidat = $13
        `, [ nom, prenom, email, mdp, tel, adresse, CV, lettre_de_motivation, situation, competence, experience, handicap, id ])
        console.log("compte candidat modifié")
        res.status(201).json({ message: "candidat modifié" });       
    } catch (error) {
        console.error(error)
        res.status(400).json({ message: "La requête a échoué"})       
    }
}

export const deleteCandidat = async (req, res) => {
    const {id} = req.params;
    const userId = req.user.id;
    const userRole = req.user.user_role;
    if (userRole === 'admin' || String(id) === String(userId)) {
        try {
            await client.query(`
                DELETE FROM candidat
                WHERE id_candidat = $1
            `, [id])
            console.log("candidat supprimé")
            res.status(201).json({ message: "candidat supprimé" });    
        } catch {
            console.error(error)
            res.status(400).json({ message: "La requête a échoué"})
        }
    } else {
            res.status(403).json({ message: "Vous n'avez pas les permissions nécessaires pour supprimer ce compte" });
    }
}