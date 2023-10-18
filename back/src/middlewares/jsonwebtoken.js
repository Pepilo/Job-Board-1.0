import jwt from "jsonwebtoken";

export const generateToken = (user) => {
    const payload = {
        email: user.email,
        user_role: user.user_role,
    };

    if (user.user_role === 'candidat' || user.user_role === 'recruteur') {
        payload.nom = user.nom;
        payload.prenom = user.prenom;
    }

    switch(user.user_role) {
        case 'admin':
            payload.id = user.id_admin;
            break;
        case 'candidat':
            payload.id = user.id_candidat;
            break;
        case 'recruteur':
            payload.id = user.id_recruteur;
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
            return res.status(401).json({ message: "Accès non autorisé" });
        }

        jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
            if (error) {
                return res.status(401).json({ message: "Le token est invalide" });
            }

            req.user = decoded;

            if (roles.includes(decoded.user_role)) {
                next();
            } else {
                res.status(403).json({ message: "Vous n'avez pas les permissions nécessaires pour cette action"});
            }
        });
    };
};