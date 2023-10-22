import { NavLink } from "react-router-dom";
import banniere_site from "../images_jb/banniere_mainpage.webp";
import loupe from "../images_jb/loupe.png";
import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import Cookies from 'js-cookie';
import logo from "../images_jb/logo.png"
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const nb_annonces = 42;

export function Header() {

    useEffect(() => {
        if (Cookies.get('inscription_reussie') === 'true') {
            toast.success('Création de votre compte réussie!', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            Cookies.remove('inscription_reussie');
        }
        console.log('La page est chargée !');
    }, []);
    

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
                <NavLink to={"/"} ><img src = {logo}/></NavLink>
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
            <form id = "flex_header_form">
                <input type = "text" placeholder = "Poste" id = "searchbar_left"/>
                <input type = "text" placeholder = "Ville, département, région" id = "searchbar_right"/>
                <a href = "http://localhost:5176/recherche"><input type = "image" src = {loupe} id = "searchbar_search" alt = "Submit"/></a>
            </form>
            <ToastContainer />       
        </>
    )
}