import ky from "ky";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export function Annonce_List() {

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

    return (
        <>
            <h1 className = "titre_section">Annonces à la une</h1>
            <div id = "flex_annonce">
                {data && data.map(item => (
                <NavLink key = {item.id_annonce} id = "navlink_annonce" to = {`/annonce/${item.id_annonce}`}>
                    <div className = "case">
                        <img src = {item.image} className = "annonce_img"/>
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