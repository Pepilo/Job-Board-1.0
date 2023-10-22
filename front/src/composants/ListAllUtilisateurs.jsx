import ky from "ky"
import { useEffect, useState } from "react"
import { PutUtilisateur } from "./PutUtilisateur";
import { useLocation } from "react-router-dom";
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export function ListAllUtilisateurs() {
    const location = useLocation();
    const utilisateur = location.state?.utilisateur;

    const [ liste, setListe ] = useState();
    const [ utilisateurAModifier, setUtilisateurAModifier] = useState(null);
    const token = localStorage.getItem("Authorization");
    

    const getAllUtilisateurs = async () => {
        try {
            const result = await ky.get(`http://localhost:8080/${utilisateur}/`).json();
                setListe(result);
            } catch (error) {
                console.log(error)
            }
        }

    useEffect(() => {
        getAllUtilisateurs();
    }, [utilisateurAModifier])

    const formPutUtilisateur = (item) => {
        setUtilisateurAModifier(item);
    }


        
    const deleteUtilisateur = async (item) => {
        try {
            const idKey = `id_${utilisateur}`;
            await ky.delete(`http://localhost:8080/${utilisateur}/${item[idKey]}`, {
                headers: {
                    "Authorization" : `${token}`
                }
            })
            toast.success('Compte supprimé.', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            getAllUtilisateurs();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            {utilisateurAModifier === null ? (
                <>
                    <h1 className="titre_section">Liste des comptes candidats</h1>
                    {liste && liste.map((item, index) => (
                        <div key={index}>
                            {item.user_role === "candidat" && (
                                <div key={item.id_candidat} to={`/utilisateur/:id`}>
                                    <div className="case_liste_admin">
                                        <h2 className="titre_annonce">{item.nom} {item.prenom}</h2>
                                        <div className="flex_condition">
                                            <p className="condition">{item.email}</p>
                                        </div>
                                        <div className = "flex_modif_suppr">
                                            <button className = "option_bouton" onClick={() => formPutUtilisateur(item)}>Modifier</button>
                                            <button className = "option_bouton" onClick={() => deleteUtilisateur(item)}>Supprimer</button>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {item.user_role === "recruteur" && (
                                <div key={item.id_recruteur} to={`/utilisateur/:id`}>
                                    <div className="case_liste_admin">
                                        <h2 className="titre_annonce">{item.nom} {item.siret}</h2>
                                        <div className="flex_condition">
                                            <p className="condition">{item.email}</p>
                                        </div>
                                        <div className = "flex_modif_suppr">
                                            <button className = "option_bouton" onClick={() => formPutUtilisateur(item)}>Modifier</button>
                                            <button className = "option_bouton" onClick={() => deleteUtilisateur(item)}>Supprimer</button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </>
            ) : ( 
            <>
                <h1 className="titre_section">Modifier le compte de {utilisateurAModifier.nom} {utilisateurAModifier.prenom}</h1>
                <PutUtilisateur utilisateurAModifier={utilisateurAModifier} setUtilisateurAModifier={setUtilisateurAModifier} token={token} /> 
            </>
            )}
            <ToastContainer />
        </>
    )
}