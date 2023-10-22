import ky from "ky";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';

export function InscriptionRecruteur() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            await ky.post("http://localhost:8080/recruteur/", {
                json: {
                    siret: data.siret,
                    nom: data.nom,
                    adresse: data.adresse,
                    descriptif: data.descriptif,
                    email: data.email,
                    tel: data.tel,
                    images: data.descriptif,
                    mdp: data.mdp
                }
            })
            Cookies.set('inscription_reussie', 'true', { expires: 1 });
            window.location.href = "/";
        } catch (error) {
            console.log("Erreur");
        }
    }

    return (
        <div id = "inscription_body" encType = "multipart/form-data">
             <form id = "flex_form_inscription">
                 <p id = "inscription_disclaim">Tout les champs sont obligatoires.</p>
                 <div id = "flex_form_nomprenom">
                     <div className = "flex_form_nom">
                         <label htmlFor = "siret">SIRET</label>                    
                         <input type = "text" className = "form_nom" name = "siret" {...register("siret", { required: true })}/>
                     </div>
                     <div className = "flex_form_nom">
                         <label htmlFor = "nom">Nom</label>                    
                         <input type = "text" className = "form_nom" name = "nom" {...register("nom", { required: true })}/>
                     </div>
                 </div>
                 <div className = "flex_form_base">
                     <label htmlFor = "adresse">Adresse</label>                    
                     <input type = "text" className = "form_base" name = "adresse" {...register("adresse", { required: true })}/>
                 </div>
                 <div className = "flex_form_base">
                     <label htmlFor = "descriptif">Descriptif</label>
                     <textarea className = "form_base" name = "descriptif" {...register("descriptif", { required: true })}/>
                 </div>
                 <div className = "flex_form_base">
                     <label htmlFor = "email">Adresse mail</label>
                     <input type = "email" className = "form_base" name = "email" {...register("email", { required: true })}/>
                 </div>
                 <div className = "flex_form_base">
                     <label htmlFor = "tel">Numéro de télephone</label>
                     <input type = "tel" className = "form_base" name = "tel" {...register("tel", { required: true })}/>
                 </div>
                 {/* sera ajouter en même temps que les fonctionnalités de multer */}
            {/* <label htmlFor="images"></label>
            <input
                id="images"
                placeholder="images"
                {...register("images")}
            /> */}
                 <div className = "flex_form_base">
                    <label htmlFor = "mdp">Mot de passe</label>
                    <input type = "password" className = "form_base" name = "mdp" {...register("mdp", {required: true})}/>
                </div>                 
                 <button onClick = {handleSubmit(onSubmit)} id = "form_sinscrire">Valider</button>
             </form>
        </div>
   )
}