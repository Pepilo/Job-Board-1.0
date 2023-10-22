import ky from "ky";
import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import travail from "../images_jb/travail.jpg"
import jwtDecode from "jwt-decode";

export function Annonce_List() {

    const navigate = useNavigate();

    const [data, setData] = useState();

    const getAnnonces = async () => {
        try {
            const data = await ky.get(`http://localhost:8080/annonce/`).json();
            console.log(data);
            setData(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect( () => {
        getAnnonces();
    }, [])

    const annonceDelete = async (item) => {
        try {
            await ky.delete(`http://localhost:8080/annonce/${item.id_annonce}`, {
                headers: {
                    "Authorization" : `${token}`
                }
            })
            getAnnonces();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <h1 className="titre_section">Annonces récentes</h1>
            <div id="flex_annonce">
                {data && data.map(item => (
                    <div key={item.id_annonce} className="annonce-wrapper">
                        <NavLink id="navlink_annonce" to={`/annonce/${item.id_annonce}`}>
                            <div className="case">
                                <img src={travail} alt={""} className="annonce_img"/>
                                <h2 className="titre_annonce">{item.poste}</h2>
                                <div className="flex_condition">
                                    <p className="condition">{item.contrat}</p>
                                    <p className="condition">{item.ville}, {item.departement}, {item.region}</p>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                ))}
            </div>
        </>
    )
}