import ky from "ky";
import { useForm } from "react-hook-form";

export function InscriptionRecruteur() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            await ky.post("http://localhost:8080/recruteur/", {
                json: {
                    nom: data.nom,
                    prenom: data.prenom,
                    email: data.email,
                    tel: data.tel,
                    mdp: data.mdp
                }
            })
        } catch (error) {
            console.log("nique ta mère");
        }
    }

    return (
        <form>
            <label htmlFor="nom"></label>
            <input
                id="nom"
                placeholder="nom"
                {...register("nom", { required: true })}
            />

            <label htmlFor="prenom"></label>
            <input
                id="prenom"
                placeholder="prenom"
                {...register("prenom", { required: true })}
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