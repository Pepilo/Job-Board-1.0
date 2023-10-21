import ky from "ky";
import { useForm } from "react-hook-form";
import jwtDecode from "jwt-decode";

export function CreerAnnonce() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const token = localStorage.getItem('Authorization');
    const decoded = jwtDecode(token);

    const createAnnonce = async (data) => {
        try {
            ky.post(`http://localhost:8080/annonce/`, {
                headers: {
                    'Authorization': `${token}`
                },

                json: {
                    id_recruteur: decoded.id,
                    domaine: data.domaine,
                    poste: data.poste,
                    ville: data.ville,
                    departement: data.departement,
                    region: data.region,
                    contrat: data.contrat,
                    conditions: data.conditions,
                    salaire: data.salaire,
                    descriptif: data.descriptif,
                    pre_requis: data.pre_requis
                }
            })
            alert("Annonce créé");
            reset();
        } catch (error) {
            console.log("Erreur", error);
        }
    }

    return (
        <form>
            <label htmlFor="domaine"></label>
            <select
                id="domaine"
                placeholder="domaine"
                {...register("domaine", { required: true })}
            >
                <option value="">Domaine</option>
                <option value="Administration">Administration</option>
                <option value="Agriculture">Agriculture</option>
                <option value="Agroalimentaire">Agroalimentaire</option>
                <option value="Architecture">Architecture</option>
                <option value="Artisanat">Artisanat</option>
                <option value="Assurance">Assurance</option>
                <option value="Audit">Audit</option>
                <option value="Automobile">Automobile</option>
                <option value="Banque">Banque</option>
                <option value="Beauté">Beauté</option>
                <option value="BTP">BTP</option>
                <option value="Chimie et Biotechnologie">Chimie et Biotechnologie</option>
                <option value="Commerce">Commerce</option>
                <option value="Culture">Culture</option>
                <option value="Défense et Sécurité">Défense et Sécurité</option>
                <option value="Direction">Direction</option>
                <option value="Distribution">Distribution</option>
                <option value="Edition">Edition</option>
                <option value="Electronique">Electronique</option>
                <option value="Enseignement">Enseignement</option>
                <option value="Environnement">Environnement</option>
                <option value="Finance">Finance</option>
                <option value="Gestion">Gestion</option>
                <option value="Graphisme et Audiovisuel">Graphisme et Audiovisuel</option>
                <option value="Hôpital">Hôpital</option>
                <option value="Hôtellerie">Hôtellerie</option>
                <option value="Immobilier">Immobilier</option>
                <option value="Industrie">Industrie</option>
                <option value="Informatique">Informatique</option>
                <option value="Ingénierie">Ingénierie</option>
                <option value="Intérim">Intérim</option>
                <option value="Juridique">Juridique</option>
                <option value="Logistique">Logistique</option>
                <option value="Marketing et Communication">Marketing et Communication</option>
                <option value="Nettoyage">Nettoyage</option>
                <option value="Production">Production</option>
                <option value="Qualité">Qualité</option>
                <option value="Recherche">Recherche</option>
                <option value="Ressources humaines">Ressources humaines</option>
                <option value="Restauration">Restauration</option>
                <option value="Santé">Santé</option>
                <option value="SAV">SAV</option>
                <option value="Secrétariat">Secrétariat</option>
                <option value="Service">Service</option>
                <option value="Social">Social</option>
                <option value="Télécom">Télécom</option>
                <option value="Tourisme">Tourisme</option>
                <option value="Transport">Transport</option>
                <option value="Vente">Vente</option>
            </select>

            <label htmlFor="poste"></label>
            <input
                id="poste"
                placeholder="poste"
                {...register("poste", { required: true })}
            />

            <label htmlFor="ville"></label>
            <input
                id="ville"
                placeholder="ville"
                {...register("ville", { required: true })}
            />

            <label htmlFor="departement"></label>
            <input
                type="number"
                id="departement"
                placeholder="departement"
                {...register("departement", { required: true })}
            />

            <label htmlFor="region"></label>
            <input
                id="region"
                placeholder="region"
                {...register("region", { required: true })}
            />

            <label htmlFor="contrat"></label>
            <select
                id="contrat"
                placeholder="contrat"
                {...register("contrat", { required: true })}
            >
                <option value="">Type de contrat</option>
                <option value="CDI">CDI</option>
                <option value="CDD">CDD</option>
                <option value="ALTERNANCE">ALTERNANCE</option>
                <option value="INTERIM">INTERIM</option>
                <option value="STAGE">STAGE</option>
                <option value="TEMPS PARTIEL">TEMPS PARTIEL</option>
                <option value="SAISONNIER">SAISONNIER</option>
            </select>

            <label htmlFor="conditions"></label>
            <select
                id="conditions"
                placeholder="conditions"
                {...register("conditions", { required: true })}
            >
                <option value="">Condition de travail</option>
                <option value="PRESENTIEL">PRESENTIEL</option>
                <option value="HYBRIDE">HYBRIDE</option>
                <option value="DISTANCIEL">DISTANCIEL</option>
            </select>

            <label htmlFor="salaire"></label>
            <input
                type="number"
                id="salaire"
                placeholder="salaire"
                {...register("salaire", { required: true })}
            />

            <label htmlFor="descriptif"></label>
            <input
                id="descriptif"
                placeholder="descriptif"
                {...register("descriptif", { required: true })}
            />

            <label htmlFor="pre_requis"></label>
            <input
                id="pre_requis"
                placeholder="pre_requis"
                {...register("pre_requis", { required: true })}
            />

            <button onClick={handleSubmit(createAnnonce)}>Enregistrer l'annonce</button>
        </form>
    )
}