import ky from "ky";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

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

            const decoded = jwtDecode(accessToken);
            console.log(decoded.id);
            window.location.href = `/utilisateur/${decoded.id}`;

        } catch (error) {
            console.log("Erreur", error);
        }
    };

    return (
        <div id = "login_body">
            <form id = "flex_form">
                <div className = "flex_form_login">
                    <h2>Email</h2>
                    <label htmlFor = "email"></label>
                    <input className = "form_login" {...register("email", { required: true })}/>
                </div>
                <div className = "flex_form_login">
                    <h2>Mot de Passe</h2>
                    <label htmlFor = "mdp"></label>
                    <input type = "password" className = "form_login" {...register("mdp", { required: true })}/>
                </div>
                <button onClick={handleSubmit(onSubmit)} id = "form_submit">Connexion</button>
            </form>
            <p id = "recup_mdp">Mot de passe oublié?</p>
        </div>
    )
}