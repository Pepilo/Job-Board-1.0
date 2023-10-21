-- Création de la TABLE admin
CREATE TABLE IF NOT EXISTS "admin"(
    id_admin SERIAL PRIMARY KEY,
    user_role VARCHAR(5) DEFAULT 'admin' NOT NULL,
    nom VARCHAR(255) NOT NULL,
    prenom VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    mdp VARCHAR(255) NOT NULL
);

-- Création de la TABLE recruteur
CREATE TABLE IF NOT EXISTS recruteur(
    id_recruteur SERIAL PRIMARY KEY,
    user_role VARCHAR(9) DEFAULT 'recruteur' NOT NULL,
    siret VARCHAR(19) NOT NULL,
    nom VARCHAR(255) NOT NULL,
    adresse VARCHAR(255) NOT NULL,
    descriptif TEXT NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    tel INT UNIQUE NOT NULL,
    images TEXT,
    mdp VARCHAR(255) NOT NULL,
    CONSTRAINT check_siret CHECK (LENGTH(siret::TEXT) = 19)
);

-- TABLE annonce

--  Création des TYPE ENUM
CREATE TYPE type_contrat AS ENUM(
    'CDI', 'CDD', 'ALTERNANCE', 'INTERIM', 'STAGE', 'TEMPS PARTIEL', 'SAISONNIER'
);

CREATE TYPE condition_de_travail AS ENUM(
    'PRESENTIEL', 'HYBRIDE', 'DISTANCIEL'
);

CREATE TYPE domaine AS ENUM(
    'Administration', 'Agriculture', 'Agroalimentaire', 'Architecture', 'Artisanat', 'Assurance', 'Audit', 'Automobile', 'Banque', 'Beauté', 'BTP', 'Chimie et Biotechnologie', 'Commerce', 'Culture', 'Défense et Sécurité', 'Direction', 'Distribution', 'Edition', 'Electronique', 'Enseignement', 'Environnement', 'Finance', 'Gestion', 'Graphisme et Audiovisuel', 'Hôpital', 'Hôtellerie', 'Immobilier', 'Industrie', 'Informatique', 'Ingénierie', 'Intérim', 'Juridique', 'Logistique', 'Marketing et Communication', 'Nettoyage', 'Production', 'Qualité', 'Recherche', 'Ressources humaines', 'Restauration', 'Santé', 'SAV', 'Secrétariat', 'Service', 'Social', 'Télécom', 'Tourisme', 'Transport', 'Vente'
);

-- Création de la TABLE annonce
CREATE TABLE IF NOT EXISTS annonce (
    id_annonce SERIAL PRIMARY KEY,
    id_recruteur BIGINT NOT NULL REFERENCES recruteur(id_recruteur),
    domaine domaine NOT NULL,
    poste VARCHAR(255) NOT NULL,
    ville VARCHAR(255) NOT NULL,
    departement INT NOT NULL,
    region VARCHAR(255) NOT NULL,
    contrat type_contrat NOT NULL,
    conditions condition_de_travail NOT NULL,
    salaire INT NOT NULL,
    descriptif TEXT,
    pre_requis TEXT
);

-- TABLE postuleur

--  Création des TYPE ENUM
CREATE TYPE handicap AS ENUM(
    'oui', 'non'
);

-- Création de la TABLE candidat
CREATE TABLE IF NOT EXISTS candidat(
    id_candidat SERIAL PRIMARY KEY,
    user_role VARCHAR(8) DEFAULT 'candidat' NOT NULL,
    nom VARCHAR(255) NOT NULL,
    prenom VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    mdp VARCHAR(255) NOT NULL,
    tel INT UNIQUE NOT NULL,
    adresse VARCHAR(255) NOT NULL,
    cv TEXT,
    lettre_de_motivation TEXT,
    situation VARCHAR(255),
    competence TEXT,
    experience TEXT,
    handicap handicap NOT NULL
);

-- Création de la TABLE candidature
CREATE TABLE IF NOT EXISTS candidature(
    id_candidature SERIAL PRIMARY KEY,
    id_annonce BIGINT NOT NULL REFERENCES annonce(id_annonce),
    nom VARCHAR(255) NOT NULL,
    prenom VARCHAR NOT NULL,
    email VARCHAR(255) NOT NULL,
    cv TEXT NOT NULL,
    lettre_de_motivation TEXT NOT NULL
);