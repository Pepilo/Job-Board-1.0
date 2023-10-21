import ky from "ky";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";

export function Postulation() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [ dataUser, setDataUser ] = useState();
    const navigate = useNavigate();

    let {id} = useParams();
    id = Number(id);

    useEffect(() => {
        const token = localStorage.getItem('Authorization');
        if(token) {
            const decoded = jwtDecode(token);
            const json = {
                nom: decoded.nom,
                prenom: decoded.prenom,
                email: decoded.email,
            }
            setDataUser(json)
        }
    }, [])

    const onSubmit = async (data) => {
        try {
            await ky.post(`http://localhost:8080/candidature/${id}`, {
                json: {
                    nom: data.nom,
                    prenom: data.prenom,
                    email: data.email,
                    cv: data.cv,
                    lettre_de_motivation: data.lettre_de_motivation,
                    id_annonce: id
                }
            })
            navigate("/");
        } catch (error) {
            console.log("Erreur");
        }
    }

    return (
            <form id = "body_postul">
                <div id = "flex_form_nomprenom">
                    <div className = "flex_form_nom">
                        <label htmlFor = "nom">Nom</label>                    
                        <input type = "text" className = "form_nom" name = "nom" {...register("nom", { required: true })} defaultValue={dataUser?.nom}/>
                    </div>
                    <div className = "flex_form_nom">
                        <label htmlFor = "prenom">Prénom</label>                    
                        <input type = "text" className = "form_nom" name = "prenom" {...register("prenom", { required: true })} defaultValue={dataUser?.prenom}/>
                    </div>
                </div>
                <div className = "flex_form_base">
                    <label htmlFor = "email">Adresse mail</label>                    
                    <input type = "email" className = "form_base" name = "email" {...register("email", { required: true })} defaultValue={dataUser?.email}/>
                </div>
                <div className = "flex_form_base">
                    <label htmlFor = "cv">Entrez votre CV</label>
                    <textarea className = "form_base" name = "cv" {...register("cv", { required: true })}/>
                </div>
                <div className = "flex_form_base">
                    <label htmlFor = "lettre_de_motivation">Entrez votre lettre de motivation</label>
                    <textarea className = "form_base" name = "lettre_de_motivation" {...register("lettre_de_motivation", { required: true })}/>
                </div>
                <button onClick = {handleSubmit(onSubmit)} id = "form_sinscrire">Valider</button>
            </form>
    )
}