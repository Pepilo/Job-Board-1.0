import jwt from "jsonwebtoken";

export const generateToken = (user) => {
    const payload = {
        email: user.email,
        user_role: user.user_role,
    };

    switch(user.user_role) {
        case 'admin':
            payload.id = user.id_utilisateur;
            payload.id = user.id_utilisateur;
            payload.nom = user.nom;
            break;
        case 'candidat':
            payload.id = user.id_utilisateur,
            payload.nom = user.nom;
            payload.prenom = user.prenom;
            break;
        case 'recruteur':
            payload.id = user.id_utilisateur;
            payload.nom = user.nom;
            payload.siret = user.prenom
            break;
        default:
            console.log("Une erreur est intervenue, vous n'avez pas de role");
            break;
    }

    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '24h' });
}

export const authenticateToken = (roles) => {
    return (req, res, next) => {
        const token = req.headers['authorization'];

        if (!token) {
            console.log("Le token est invalide");
            return res.status(401).json({ message: "Accès non autorisé" });
        }

        jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
            if (error) {
                console.log("Le token est invalide");
                return res.status(401).json({ message: "Le token est invalide" });
            }

            req.user = decoded;

            if (roles.includes(decoded.user_role)) {
                console.log(req.user);
                next();
            } else {
                console.log("problème jsonwebtoken");
                res.status(403).json({ message: "Vous n'avez pas les permissions nécessaires pour cette action"});
            }
        });
    };
};