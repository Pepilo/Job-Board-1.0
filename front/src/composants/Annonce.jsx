import ky from "ky";
import { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
export function Annonce() {

    const [data, setData] = useState();

    let {id} = useParams();

    const getAnnonce = async () => {
        try {
            const data = await ky.get(`http://localhost:8080/annonce/${id}`).json();
            console.log(data);
            setData(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect( () => {
        getAnnonce();
    }, [])

    return (
        <>
            {data && data.map(item => (         
                <div id = "case_annonce">                    
                    <div>
                        <h1 className = "titre_annonce">{item.poste}</h1>
                        <div className = "flex_condition">
                            <p className = "condition">{item.contrat}</p>
                            <p className = "condition">{item.ville}, {item.departement}, {item.region}</p>
                            <p className = "condition">{item.conditions}</p>
                            <p className = "condition">{item.salaire}</p>
                        </div>
                    </div>
                    <div>                   
                            <h2 className = "sous_titre_annonce">Descriptif du poste</h2>
                            <p className = "contenu_annonce">{item.descriptif}</p>                    
                            <h2 className = "sous_titre_annonce">Pré-requis</h2>
                            <p className = "contenu_annonce">{item.pre_requis}</p>
                            <NavLink to={{ pathname:`/postulation/${id}`, state: { id_annonce: id }}}><p id = "bouton_annonce">Postuler</p></NavLink>
                    </div>
                </div>
            ))}          
        </>
    )
}
