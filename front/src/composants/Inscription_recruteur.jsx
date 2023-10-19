import ky from "ky";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

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
            navigate("/");
        } catch (error) {
            console.log("Erreur");
        }
    }

    return (
        <form>
            <label htmlFor="siret"></label>
            <input
                id="siret"
                placeholder="siret"
                {...register("siret", { required: true })}
            />

            <label htmlFor="nom"></label>
            <input
                id="nom"
                placeholder="nom"
                {...register("nom", { required: true })}
            />

            <label htmlFor="adresse"></label>
            <input
                id="adresse"
                placeholder="adresse"
                {...register("adresse", { required: true })}
            />

            <label htmlFor="descriptif"></label>
            <input
                id="descriptif"
                placeholder="descriptif"
                {...register("descriptif", { required: true })}
            />

            <label htmlFor="email"></label>
            <input
                id="email"
                placeholder="email"
                {...register("email", { required: true })}
            />

            <label htmlFor="tel"></label>
            <input
            type="number"
                id="tel"
                placeholder="tel"
                {...register("tel", { required: true })}
            />

            {/* sera ajouter en même temps que les fonctionnalités de multer */}
            {/* <label htmlFor="images"></label>
            <input
                id="images"
                placeholder="images"
                {...register("images")}
            /> */}

            <label htmlFor="mdp"></label>
            <input
                id="mdp"
                placeholder="mdp"
                {...register("mdp", { required: true })}
            />

            <button onClick={handleSubmit(onSubmit)}>Valider</button>
        </form>
    )
}