import { NavLink } from "react-router-dom";
import banniere_site from "../images_jb/banniere_mainpage.webp";
import loupe from "../images_jb/loupe.png";
import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";

const nb_annonces = 536016;

export function Header() {

    const clickClack = async () => {
        const accessToken = localStorage.getItem('Authorization');

        const decoded = jwtDecode(accessToken);
        window.location.href = `/utilisateur/${decoded.id}`;
    }

    const [token, setToken] = useState();

    function deco() {
        localStorage.clear();
        window.location.href = "/";
      }

    useEffect( () => {
        const data = localStorage.getItem('Authorization');
        setToken(data);
        console.log(data);
    },[]);

    return (
        <>
            <div id = "flex_header">
                <NavLink to={"/"} ><h1 id = "jb_name">O'Boulot</h1></NavLink>
                {token == undefined?
                    <div id = "flex_login">
                        <NavLink to={"/login"}><p id="login">Se Connecter</p></NavLink>
                        <NavLink to={"/middle"}><p id = "inscription">Créer un compte</p></NavLink>
                    </div> :
                    <div id = "flex_login">
                        <p onClick = {deco} id = "login">Se Déconnecter</p>
                        <p onClick = {clickClack} id = "inscription">Profil</p>
                    </div>
                }
            </div>
            <img src = {banniere_site} id = "img_header"/>
            <p id = "acceuil">{nb_annonces} offres d'emplois disponibles</p>            
            <form>
                <input type = "text" placeholder = "Poste" id = "searchbar_left"/>
                <input type = "text" placeholder = "Ville, département, région" id = "searchbar_right"/>
                <a href = "http://localhost:5176/recherche"><input type = "image" src = {loupe} id = "searchbar_search" alt = "Submit"/></a>
            </form>       
        </>
    )
}