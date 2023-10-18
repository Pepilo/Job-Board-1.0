export function Annonce() {
    return (
        <>         
            <div id = "case_annonce">
                <div>
                    {/* <img src = {hardeur} className = "annonce_img"/> */}
                    <h1 className = "titre_annonce">Stewart</h1>
                    <div className = "flex_condition">
                        <p className = "condition">CDD</p>
                        <p className = "condition">Montpellier, 34, Occitanie</p>
                        <p className = "condition">Hybride</p>
                        <p className = "condition">8000k</p>
                    </div>
                </div>
                <div>                   
                        <h2 className = "sous_titre_annonce">Descriptif du poste</h2>
                        <p className = "contenu_annonce">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae beatae odio ipsum! Quia maxime excepturi hic, beatae vitae numquam deleniti ipsam, eum debitis, autem optio incidunt sit sunt voluptas alias.</p>                    
                        <h2 className = "sous_titre_annonce">Pré-requis</h2>
                        <p className = "contenu_annonce">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam animi porro nemo illum rem, corporis corrupti suscipit ex odio qui fugiat sequi quibusdam vel fuga numquam laudantium et molestiae ipsa.</p>
                        <p id = "bouton_annonce">Postuler</p>
                </div>
            </div>          
        </>
    )
}