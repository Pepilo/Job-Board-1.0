export function Login() {

    const recup_mdp = () => {
        alert("Page de récup mdp");
    }

    const login_in = () => {
        alert("Bravo, vous êtes connecté");
    }

    return (
        <>
           <body id = "login_body">
                <form id = "flex_form_login">
                    <div id = "flex_form_email">
                        <label for = "email">Adresse mail</label>                    
                        <input type = "email" id = "form_email" name = "email" required/>
                    </div>
                    <div id = "flex_form_mdp">
                        <label for = "mdp">Mot de passe</label>
                        <input type = "password" id = "form_mdp" name = "mdp" required/>
                    </div>
                    <input onClick = {login_in} type = "submit" id = "form_submit" value = "Se connecter"/>
                </form>
                <p onClick = {recup_mdp} id = "recup_mdp">Mot de passe oublié ?</p>
           </body>
        </>
    )
}