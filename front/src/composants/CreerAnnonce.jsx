import ky from "ky";
import { useForm } from "react-hook-form";
import jwtDecode from "jwt-decode";

import { useLocation, useNavigate } from "react-router-dom";

import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export function CreerAnnonce() {
    const location = useLocation();
    const item = location.state?.item;
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const token = localStorage.getItem('Authorization');
    const decoded = jwtDecode(token);

    const createAnnonce = async (data) => {

        if(!item) {
            try {
                ky.post(`http://localhost:8080/annonce/`, {
                    headers: {
                        'Authorization': `${token}`
                    },
    
                    json: {
                        id_recruteur: decoded.id,
                        domaine: data.domaine,
                        poste: data.poste,
                        ville: data.ville,
                        departement: data.departement,
                        region: data.region,
                        contrat: data.contrat,
                        conditions: data.conditions,
                        salaire: data.salaire,
                        descriptif: data.descriptif,
                        pre_requis: data.pre_requis
                    }
                })
                reset();
                toast.success('Votre annonce a été mise en ligne.', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            } catch (error) {
                console.log("Erreur", error);
            }
        } else {
            try {
                ky.put(`http://localhost:8080/annonce/${item.id_annonce}`, {
                    headers: {
                        'Authorization': `${token}`
                    },
    
                    json: {
                        domaine: data.domaine,
                        poste: data.poste,
                        ville: data.ville,
                        departement: data.departement,
                        region: data.region,
                        contrat: data.contrat,
                        conditions: data.conditions,
                        salaire: data.salaire,
                        descriptif: data.descriptif,
                        pre_requis: data.pre_requis
                    }
                })
                navigate("/listAnnonce")
            } catch (error) {
                console.log("Erreur", error);
            }
        }
    }

    return (
        <form id = "creannonce_body">
            <div className = "creannonce_item">
                <label htmlFor = "domaine">Domaine</label>
                <select className = "form_base" placeholder="domaine" {...register("domaine", { required: true })}>
                    <option value = "">Domaine</option>
                    <option value = "Administration">Administration</option>
                    <option value = "Agriculture">Agriculture</option>
                    <option value = "Agroalimentaire">Agroalimentaire</option>
                    <option value = "Architecture">Architecture</option>
                    <option value = "Artisanat">Artisanat</option>
                    <option value = "Assurance">Assurance</option>
                    <option value = "Audit">Audit</option>
                    <option value = "Automobile">Automobile</option>
                    <option value = "Banque">Banque</option>
                    <option value = "Beauté">Beauté</option>
                    <option value = "BTP">BTP</option>
                    <option value = "Chimie et Biotechnologie">Chimie et Biotechnologie</option>
                    <option value = "Commerce">Commerce</option>
                    <option value = "Culture">Culture</option>
                    <option value = "Défense et Sécurité">Défense et Sécurité</option>
                    <option value = "Direction">Direction</option>
                    <option value = "Distribution">Distribution</option>
                    <option value = "Edition">Edition</option>
                    <option value = "Electronique">Electronique</option>
                    <option value = "Enseignement">Enseignement</option>
                    <option value = "Environnement">Environnement</option>
                    <option value = "Finance">Finance</option>
                    <option value = "Gestion">Gestion</option>
                    <option value = "Graphisme et Audiovisuel">Graphisme et Audiovisuel</option>
                    <option value = "Hôpital">Hôpital</option>
                    <option value = "Hôtellerie">Hôtellerie</option>
                    <option value = "Immobilier">Immobilier</option>
                    <option value = "Industrie">Industrie</option>
                    <option value = "Informatique">Informatique</option>
                    <option value = "Ingénierie">Ingénierie</option>
                    <option value = "Intérim">Intérim</option>
                    <option value = "Juridique">Juridique</option>
                    <option value = "Logistique">Logistique</option>
                    <option value = "Marketing et Communication">Marketing et Communication</option>
                    <option value = "Nettoyage">Nettoyage</option>
                    <option value = "Production">Production</option>
                    <option value = "Qualité">Qualité</option>
                    <option value = "Recherche">Recherche</option>
                    <option value = "Ressources humaines">Ressources humaines</option>
                    <option value = "Restauration">Restauration</option>
                    <option value = "Santé">Santé</option>
                    <option value = "SAV">SAV</option>
                    <option value = "Secrétariat">Secrétariat</option>
                    <option value = "Service">Service</option>
                    <option value = "Social">Social</option>
                    <option value = "Télécom">Télécom</option>
                    <option value = "Tourisme">Tourisme</option>
                    <option value = "Transport">Transport</option>
                    <option value = "Vente">Vente</option>
                </select>
            </div>
            <div className = "creannonce_item">
                <label htmlFor = "poste">Poste</label>
                <input className = "form_base" {...register("poste", { required: true })}/>
            </div>
            <div id = "flex_localisation">
                <div className = "creannonce_item">
                <label htmlFor = "ville">Ville</label>
                <input className = "form_base" {...register("ville", { required: true })}/>
                </div>
                <div className = "creannonce_item">
                    <label htmlFor = "departement">Département</label>
                    <input type = "number" className = "form_base" {...register("departement", { required: true })}/>
                </div>
                <div className = "creannonce_item">
                    <label htmlFor = "region">Région</label>
                    <input className = "form_base" {...register("region", { required: true })}/>
                </div>
            </div>
            <div className = "creannonce_item">
                <label htmlFor = "contrat">Type de contrat</label>
                <select className = "form_base" placeholder="contrat" {...register("contrat", { required: true })}>
                    <option value = "">Type de contrat</option>
                    <option value = "CDI">CDI</option>
                    <option value = "CDD">CDD</option>
                    <option value = "ALTERNANCE">ALTERNANCE</option>
                    <option value = "INTERIM">INTERIM</option>
                    <option value = "STAGE">STAGE</option>
                    <option value = "TEMPS PARTIEL">TEMPS PARTIEL</option>
                    <option value = "SAISONNIER">SAISONNIER</option>
                </select>
            </div>
            <div className = "creannonce_item">
            <label htmlFor = "conditions">Conditions de travail</label>
                <select className = "form_base" placeholder="conditions" {...register("conditions", { required: true })}>
                    <option value = "">Condition de travail</option>
                    <option value = "PRESENTIEL">PRESENTIEL</option>
                    <option value = "HYBRIDE">HYBRIDE</option>
                    <option value = "DISTANCIEL">DISTANCIEL</option>
                </select>
            </div>
            <div className = "creannonce_item">
                <label htmlFor="salaire">Salaire</label>
                <input type = "number" className = "form_base" {...register("salaire", { required: true })}/>
            </div>
            <div className = "creannonce_item">
                <label htmlFor = "descriptif">Description du poste</label>
                <textarea className = "form_base" {...register("descriptif", { required: true })}/>
            </div>
            <div className = "creannonce_item">
                <label htmlFor="pre_requis">Prés-requis</label>
                <textarea className = "form_base" {...register("pre_requis", { required: true })}/>
            </div>
            <button id = "creannonce_bouton" onClick={handleSubmit(createAnnonce)}>Enregistrer l'annonce</button>
            <ToastContainer />
        </form>
    )
}