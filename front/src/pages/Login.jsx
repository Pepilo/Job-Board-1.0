import ky from "ky";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            const response = await ky.post("http://localhost:8080/login/", {
                json: {
                    email: data.email,
                    mdp: data.mdp
                }
            });
            const jsonData = await response.json();
            const accessToken = jsonData.accessToken;
    
            localStorage.setItem('Authorization', accessToken);
            navigate("/utilisateur");
            
            console.log("connexion réussie");
        } catch (error) {
            console.log("Erreur", error);
        }
    };
    

    return (
        <form>
            <label htmlFor="email"></label>
            <input
                id="email"
                placeholder="email"
                {...register("email", { required: true })}
            />

            <label htmlFor="mdp"></label>
            <input
                id="mdp"
                placeholder="mdp"
                {...register("mdp", { required: true })}
            />

            <button onClick={handleSubmit(onSubmit)}>Connexion</button>
        </form>
    )
}