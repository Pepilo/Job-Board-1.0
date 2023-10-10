import banniere_site from "./images_jb/banniere_mainpage.webp";

export function Header() {

    const pageLogin = () => {
        alert("La page de Log In");
      }

    const pageCreaCompte = () => {
        alert("La page de création de compte");
    }

    return (
        <>
            <div className = "flex_header">
                <a href = "http://localhost:5173/?"><h1 id = "jb_name" style = {{color : "#331a99"}}>O'Boulot</h1></a>
                <div className = "flex_login">
                    <p onClick = {pageLogin} className = "login">Se Connecter</p>
                    <p onClick = {pageCreaCompte} className = "inscription">Créer un compte</p>
                </div>
            </div>
            <img src = {banniere_site}/>
            <p className = "acceuil">586 356 offres d'emplois disponibles</p>            
            <form className = "flex_form">
                <input type = "text" placeholder = "Poste" className = "searchbar_left"/>
                <input type = "text" placeholder = "Ville, département, région" className = "searchbar_right"/>
                <input type = "submit" value = "Search" className = "searchbar_search"/>
            </form>      
        </>
    )
}