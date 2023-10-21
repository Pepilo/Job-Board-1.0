import { NavLink } from "react-router-dom";

const choix = {
    color: "white",
    backgroundColor: "#00acee",
    padding: "1em",
    borderRadius: "1em",
}

export function Middle() {

    return (
           <div id = "middle_body">
                <h1 id = "phrase_choix">Pourquoi shouaitez-vous nous rejoindre?</h1>
                <div id = "flex_middle">
                        <NavLink to = {"/inscription_candidat"} style = {choix}>Je cherche du travail</NavLink>
                        <NavLink to = {"/inscription_recruteur"} style = {choix}>Je recrute</NavLink>
                </div>
           </div>
    )
}