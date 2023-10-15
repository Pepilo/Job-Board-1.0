import banniere_site from "./images_jb/banniere_mainpage.webp";

const nb_annonces = 536016;

export function Header_alt() {

    return (
        <>           
            <a href = "http://localhost:5173/?"><h1 id = "jb_name">O'Boulot</h1></a>
            <img src = {banniere_site}/>
            <p id = "acceuil">{nb_annonces} offres d'emplois disponibles</p>              
        </>
    )
}