import ky from "ky";
import { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";

export function Utilisateur() {
    const [ utilisateur, setUtilisateur ] = useState([]);
    const navigate = useNavigate();

    const CreateAnnonce = () => {
        navigate("/creer_annonce")
    }

    const RecruteurSeeAnnonce = () => {
        navigate("/listeMesAnnonces")
    }

    useEffect(() => {
        const getAnnonces = async () => {
            const token = localStorage.getItem('Authorization');
            const decoded = jwtDecode(token);
            if(token) {
                try {
                    const data = await ky.get(`http://localhost:8080/${decoded.user_role}/${decoded.id}`).json();
                    setUtilisateur(data)
                    console.log(data)
                } catch (error) {
                    console.log(error);
                }
            }
        }
        getAnnonces();
    }, []);
    
      
    return (
        <>
            {utilisateur[0]?.user_role === "recruteur" && (
                <div className = "body_profil">
                    <h1>{utilisateur[0].nom}</h1>
                    <h2 className = "role_utilisateur">{utilisateur[0].user_role}</h2>
                    <p className = "info_profil"><span className = "encart">Description:</span> {utilisateur[0].descriptif}</p>
                    <p className = "info_profil"><span className = "encart">N° SIRET:</span> {utilisateur[0].siret}</p>
                    <p className = "info_profil"><span className = "encart">Adresse:</span> {utilisateur[0].adresse}</p>
                    <p className = "info_profil"><span className = "encart">Adresse email:</span> {utilisateur[0].email}</p>
                    <p className = "info_profil"><span className = "encart">Numéro de télephone:</span> {utilisateur[0].tel}</p>
                    <div className = "flex_boutons">
                        <button className = "option_bouton" onClick={CreateAnnonce}>Créer une annonce</button>
                        <button className = "option_bouton" onClick={RecruteurSeeAnnonce}>Voir sa liste d'annonce</button>
                        <button className = "option_bouton">Modifer profil</button>
                        <button className = "option_bouton">Supprimer profil</button>
                    </div>
                </div>
            )}
            {utilisateur[0]?.user_role === "candidat" && (
                <div className = "body_profil">
                    <h1>{utilisateur[0].prenom} {utilisateur[0].nom}</h1>
                    <h2 className = "role_utilisateur">{utilisateur[0].user_role}</h2>
                    <p className = "info_profil"><span className = "encart">Adresse email:</span> {utilisateur[0].email}</p>
                    <p className = "info_profil"><span className = "encart">Numéro de télephone:</span> {utilisateur[0].tel}</p>
                    <p className = "info_profil"><span className = "encart">Adresse:</span> {utilisateur[0].adresse}</p>
                    <p className = "info_profil"><span className = "encart">Curriculum Vitae:</span> {utilisateur[0].cv}</p>
                    <p className = "info_profil"><span className = "encart">Lettre de motivation:</span> {utilisateur[0].lettre_de_motivation}</p>
                    <p className = "info_profil"><span className = "encart">Situation:</span> {utilisateur[0].situation}</p>
                    <p className = "info_profil"><span className = "encart">Compétences:</span> {utilisateur[0].competence}</p>
                    <p className = "info_profil"><span className = "encart">Expériences:</span> {utilisateur[0].experience}</p>
                    <p className = "info_profil"><span className = "encart">Handicap:</span> {utilisateur[0].handicap}</p>
                </div>
            )}
            {utilisateur[0]?.user_role === "admin" && (
                <div className = "body_profil">
                    <h1 className = "role_utilisateur">{utilisateur[0].user_role}</h1>
                    <p className = "info_profil"><span className = "encart">Adresse email:</span> {utilisateur[0].email}</p>
                    <div id = "boutons_admin">
                        <button className = "option_bouton" onClick={() => navigate("/listAllUtilisateurs", { state: { utilisateur: "candidat" } })}>
                            Voir la liste des candidats
                        </button>
                        <button className = "option_bouton" onClick={() => navigate("/listAllUtilisateurs", { state: { utilisateur: "recruteur" } })}>
                            Voir la liste des recruteurs
                        </button>
                        <button className = "option_bouton" onClick={() => navigate("/listAnnonce")}>Voir la liste des annonces</button>
                        <button className = "option_bouton">Voir la liste des candidatures</button>
                        <button className = "option_bouton">Modifier profil</button>
                        <button className = "option_bouton">Supprimer profil</button>
                    </div>
                </div>
            )}
        </>
    )
}