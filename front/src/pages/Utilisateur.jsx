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

    const SeeAnnonce = () => {
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
                <>
                    <h1>{utilisateur[0].nom}</h1>
                    <h2>{utilisateur[0].user_role}</h2>
                    <p>{utilisateur[0].descriptif}</p>
                    <p>{utilisateur[0].siret}</p>
                    <p>{utilisateur[0].adresse}</p>
                    <p>{utilisateur[0].email}</p>
                    <p>{utilisateur[0].tel}</p>

                    <button onClick={CreateAnnonce}>Créer une annonce</button>
                    <button onClick={SeeAnnonce}>Voir sa liste d'annonce</button>
                    <button>Modifer profil</button>
                    <button>Supprimer profil</button>
                </>
            )}
            {utilisateur[0]?.user_role === "candidat" && (
                <>
                    <h1>{utilisateur[0].user_role}</h1>
                    <h1>{utilisateur[0].nom}</h1>
                    <p>{utilisateur[0].prenom}</p>
                    <p>{utilisateur[0].email}</p>
                    <p>{utilisateur[0].tel}</p>
                    <p>{utilisateur[0].adresse}</p>
                    <p>{utilisateur[0].cv}</p>
                    <p>{utilisateur[0].lettre_de_motivation}</p>
                    <p>{utilisateur[0].situation}</p>
                    <p>{utilisateur[0].competence}</p>
                    <p>{utilisateur[0].experience}</p>
                    <p>{utilisateur[0].handicap}</p>
                </>
            )}
            {utilisateur[0]?.user_role === "admin" && (
                <>
                    <h1>{utilisateur[0].user_role}</h1>
                    <p>{utilisateur[0].email}</p>
                </>
            )}
        </>
    )
}