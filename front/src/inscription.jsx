export function Inscription() {

    const inscription = () => {
        alert("Bravo, vous êtes connecté");
    }

    return (
        <>
           <body id = "inscription_body">
                <form id = "flex_form_inscription">
                    <p id = "inscription_disclaim">Tout les champs sont obligatoires.</p>
                    <div id = "flex_form_nomprenom">
                        <div className = "flex_form_nom">
                            <label for = "nom">Nom</label>                    
                            <input type = "text" className = "form_nom" name = "nom" required/>
                        </div>
                        <div className = "flex_form_nom">
                            <label for = "prénom">Prénom</label>                    
                            <input type = "text" className = "form_nom" name = "prénom" required/>
                        </div>
                    </div>
                    <div className = "flex_form_base">
                        <label for = "email">Adresse mail</label>                    
                        <input type = "email" className = "form_base" name = "email" required/>
                    </div>
                    <div className = "flex_form_base">
                        <label for = "mdp">Mot de passe</label>
                        <input type = "password" className = "form_base" name = "mdp" required/>
                    </div>
                    <div className = "flex_form_base">
                        <label for = "tel">Numéro de téléphone</label>
                        <input type = "tel" className = "form_base" name = "tel" required/>
                    </div>
                    <div className = "flex_form_base">
                        <label for = "adresse">Adresse</label>
                        <input type = "text" className = "form_base" name = "adresse" required/>
                    </div>
                    <div>
                        <p>Etes-vous atteint d'un handicap?</p>
                        <div id = "flex_form_handicap">
                            <div>
                                <label for = "oui">Oui</label>
                                <input type = "radio" name = "handicap" value = "oui"/>
                            </div>
                            <div>
                                <label for = "non">Non</label>
                                <input type = "radio" name = "handicap" value = "non" defaultChecked/>
                            </div>
                        </div>
                    </div>                    
                    <input onClick = {inscription} type = "submit" id = "form_sinscrire" value = "S'inscrire"/>
                </form>
           </body>
        </>
    )
}