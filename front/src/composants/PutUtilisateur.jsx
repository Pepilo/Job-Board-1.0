import ky from "ky";
import { useForm } from "react-hook-form";

export function PutUtilisateur({ utilisateurAModifier, setUtilisateurAModifier, token }) {
    const { register, handleSubmit, formState: { errors }} = useForm();

    const putCandidat = async (data) => {
        try {
            await ky.put(`http://localhost:8080/candidat/${utilisateurAModifier.id_candidat}`, {
                headers: {
                    "Authorization" : `${token}`
                },

                json: {
                    nom: data.nom,
                    prenom: data.prenom,
                    email: data.email,
                    tel: data.tel,
                    adresse: data.adresse,
                    handicap: data.handicap
                }
            })
            setUtilisateurAModifier(null);
        } catch (error) {
            console.log(error);
        }
    }

    const putRecruteur = async (data) => {
        try {
            await ky.put(`http://localhost:8080/recruteur/${utilisateurAModifier.id_recruteur}`, {
                headers: {
                    "Authorization" : `${token}`
                },

                json: {
                    siret: data.siret,
                    nom: data.nom,
                    email: data.email,
                    tel: data.tel,
                    adresse: data.adresse,
                    descriptif: data.descriptif
                }
            })
            setUtilisateurAModifier(null);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            {utilisateurAModifier.user_role === "candidat" && (
                <div id="inscription_body" encType="multipart/form-data">
                    <form id="flex_form_inscription">
                        <p id="inscription_disclaim">Tout les champs sont obligatoires.</p>
                        <div id="flex_form_nomprenom">
                            <div className = "flex_form_nom">
                                <label htmlFor = "nom">Nom</label>                    
                                <input type = "text" className = "form_nom" name = "nom" {...register("nom", { required: true })} defaultValue={utilisateurAModifier.nom}/>
                            </div>
                            <div className = "flex_form_nom">
                                <label htmlFor = "prenom">Prénom</label>                    
                                <input type = "text" className = "form_nom" name = "prenom" {...register("prenom", { required: true })} defaultValue={utilisateurAModifier.prenom}/>
                            </div>
                        </div>
                        <div className = "flex_form_base">
                            <label htmlFor = "email">Adresse mail</label>                    
                            <input type = "email" className = "form_base" name = "email" {...register("email", { required: true })} defaultValue={utilisateurAModifier.email}/>
                        </div>
                        <div className = "flex_form_base">
                            <label htmlFor = "tel">Numéro de téléphone</label>
                            <input type = "tel" className = "form_base" name = "tel" {...register("tel", { required: true })} defaultValue={utilisateurAModifier.tel}/>
                        </div>
                        <div className = "flex_form_base">
                            <label htmlFor = "adresse">Adresse</label>
                            <input type = "text" className = "form_base" name = "adresse" {...register("adresse", { required: true })} defaultValue={utilisateurAModifier.adresse}/>
                        </div>                  
                        <button onClick = {handleSubmit(putCandidat)} id = "form_sinscrire">Valider</button>
                    </form>
                </div>
            )}

            {utilisateurAModifier.user_role === "recruteur" && (
                <div id="inscription_body" encType="multipart/form-data">
                <form id="flex_form_inscription">
                    <p id="inscription_disclaim">Tout les champs sont obligatoires.</p>
                    <div id="flex_form_nomprenom">
                        <div className = "flex_form_nom">
                            <label htmlFor = "siret">Siret</label>                    
                            <input type = "text" className = "form_nom" name = "siret" {...register("siret", { required: true })} defaultValue={utilisateurAModifier.siret}/>
                        </div>
                        <div className = "flex_form_nom">
                            <label htmlFor = "nom">nom</label>                    
                            <input type = "text" className = "form_nom" name = "nom" {...register("nom", { required: true })} defaultValue={utilisateurAModifier.nom}/>
                        </div>
                    </div>
                    <div className = "flex_form_base">
                        <label htmlFor = "email">Adresse mail</label>                    
                        <input type = "email" className = "form_base" name = "email" {...register("email", { required: true })} defaultValue={utilisateurAModifier.email}/>
                    </div>
                    <div className = "flex_form_base">
                        <label htmlFor = "tel">Numéro de téléphone</label>
                        <input type = "tel" className = "form_base" name = "tel" {...register("tel", { required: true })} defaultValue={utilisateurAModifier.tel}/>
                    </div>
                    <div className = "flex_form_base">
                        <label htmlFor = "adresse">Adresse</label>
                        <input type = "text" className = "form_base" name = "adresse" {...register("adresse", { required: true })} defaultValue={utilisateurAModifier.adresse}/>
                    </div>                  
                    <div className = "flex_form_base">
                        <label htmlFor = "descriptif">descriptif</label>
                        <input type = "text" className = "form_base" name = "descriptif" {...register("descriptif", { required: true })} defaultValue={utilisateurAModifier.descriptif}/>
                    </div>                  
                    <button onClick = {handleSubmit(putRecruteur)} id = "form_sinscrire">Valider</button>
                </form>
            </div>
            )}
        </>
    )
}