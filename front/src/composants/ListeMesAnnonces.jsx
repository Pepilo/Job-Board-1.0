import ky from "ky";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import travail from "../images_jb/travail.jpg"
import jwtDecode from "jwt-decode";

export function ListeMesAnnonces() {
    const [ liste, setListe ] = useState();

    
    useEffect(() => {
        const getData = async () => {
            try {
                const token = localStorage.getItem('Authorization');
                const decoded = jwtDecode(token);
                const data = await ky.get(`http://localhost:8080/annonce/${decoded.id}/recruteur`).json();
                console.log(data);
                setListe(data);
            } catch (error) {
                console.log(error);
            }
        }
        getData();
    }, [])


    return (
        <>
            <h1 className = "titre_section">Vos Annonces</h1>
            <div id = "flex_annonce">
                {liste && liste.map(item => (
                <NavLink key = {item.id_annonce} id = "navlink_annonce" to = {`/annonce/${item.id_annonce}`}>
                    <div className = "case">
                        <img src = {travail} className = "annonce_img"/>
                        <h2 className = "titre_annonce">{item.poste}</h2>
                        <div className = "flex_condition">
                            <p className = "condition">{item.contrat}</p>
                            <p className = "condition">{item.ville}, {item.departement}, {item.region}</p>
                        </div>
                    </div>
                </NavLink>
                ))}
            </div>
        </>
    )
}