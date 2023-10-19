import { NavLink } from "react-router-dom";

export function Middle() {

    return (
           <div id = "middle_body">
                <h1 id = "phrase_choix">Pourquoi shouaitez-vous nous rejoindre?</h1>
                <div id = "flex_middle">
                        <NavLink to={"/inscription_candidat"}>Je cherche du travail</NavLink>
                        <NavLink to={"/inscription_recruteur"}>Je recrute</NavLink>
                </div>
           </div>
    )
}