import ky from "ky";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export function InscriptionCandidat() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            await ky.post("http://localhost:8080/candidat/", {
                json: {
                    nom: data.nom,
                    prenom: data.prenom,
                    email: data.email,
                    tel: data.tel,
                    mdp: data.mdp,
                    adresse: data.adresse,
                    handicap: data.handicap
                }
            })
            navigate("/");
        } catch (error) {
            console.log("Erreur");
        }
    }

    return (
           <div id = "inscription_body" enctype = "multipart/form-data">
                <form id = "flex_form_inscription">
                    <p id = "inscription_disclaim">Tout les champs sont obligatoires.</p>
                    <div id = "flex_form_nomprenom">
                        <div className = "flex_form_nom">
                            <label htmlFor = "nom">Nom</label>                    
                            <input type = "text" className = "form_nom" name = "nom" {...register("nom", { required: true })}/>
                        </div>
                        <div className = "flex_form_nom">
                            <label htmlFor = "prenom">Prénom</label>                    
                            <input type = "text" className = "form_nom" name = "prenom" {...register("prenom", { required: true })}/>
                        </div>
                    </div>
                    <div className = "flex_form_base">
                        <label htmlFor = "email">Adresse mail</label>                    
                        <input type = "email" className = "form_base" name = "email" {...register("email", { required: true })}/>
                    </div>
                    <div className = "flex_form_base">
                        <label htmlFor = "mdp">Mot de passe</label>
                        <input type = "password" className = "form_base" name = "mdp" {...register("mdp", { required: true })}/>
                    </div>
                    <div className = "flex_form_base">
                        <label htmlFor = "tel">Numéro de téléphone</label>
                        <input type = "tel" className = "form_base" name = "tel" {...register("tel", { required: true })}/>
                    </div>
                    <div className = "flex_form_base">
                        <label htmlFor = "adresse">Adresse</label>
                        <input type = "text" className = "form_base" name = "adresse" {...register("adresse", { required: true })}/>
                    </div>
                    <div>
                        <p>Etes-vous atteint d'un handicap?</p>
                        <div id = "flex_form_handicap">
                            <div>
                                <label htmlFor = "oui">Oui</label>
                                <input type = "radio" name = "handicap" value = "oui" {...register("handicap", { required: true })}/>
                            </div>
                            <div>
                                <label htmlFor = "non">Non</label>
                                <input type = "radio" name = "handicap" value = "non" defaultChecked {...register("handicap", { required: true })}/>
                            </div>
                        </div>
                    </div>                    
                    <button onClick = {handleSubmit(onSubmit)} id = "form_sinscrire">Valider</button>
                </form>
           </div>
    )
}