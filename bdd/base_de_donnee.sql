-- Création de la base de donnée
DROP DATABASE doby
CREATE DATABASE doby;

-- Création de la TABLE entreprise
DROP TABLE IF EXISTS entreprise CASCADE;
CREATE TABLE IF NOT EXISTS entreprise(
    id_entreprise SERIAL PRIMARY KEY,
    siret VARCHAR(19),
    nom VARCHAR(255) NOT NULL,
    adresse VARCHAR(255) NOT NULL,
    descriptif TEXT NOT NULL,
    images TEXT,
    CONSTRAINT check_siret CHECK (LENGTH(siret::TEXT) = 19)
);

-- Création de la table recruteur
DROP TABLE IF EXISTS recruteur CASCADE;
CREATE TABLE IF NOT EXISTS recruteur(
    id_recruteur SERIAL PRIMARY KEY,
    nom VARCHAR(255) NOT NULL,
    prenom VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    tel INT UNIQUE NOT NULL,
    mdp VARCHAR(255) NOT NULL,
    id_entreprise VARCHAR(19) NOT NULL REFERENCES entreprise(id_entreprise)
);

-- TABLE annonce

--  Création des TYPE ENUM
DROP TYPE type_contrat CASCADE;
CREATE TYPE type_contrat AS ENUM(
    'CDI', 'CDD', 'ALTERNANCE', 'INTERIM', 'STAGE', 'TEMPS PARTIEL', 'SAISONNIER'
);

DROP TYPE condition_de_travail CASCADE;
CREATE TYPE condition_de_travail AS ENUM(
    'PRESENTIEL', 'HYBRIDE', 'DISTANCIEL'
);

DROP TYPE domaine CASCADE;
CREATE TYPE domaine AS ENUM(
    'Administration', 'Agriculture', 'Agroalimentaire', 'Architecture', 'Artisanat', 'Assurance', 'Audit', 'Automobile', 'Banque', 'Beauté', 'BTP', 'Chimie et Biotechnologie', 'Commerce', 'Culture', 'Défense et Sécurité', 'Direction', 'Distribution', 'Edition', 'Electronique', 'Enseignement', 'Environnement', 'Finance', 'Gestion', 'Graphisme et Audiovisuel', 'Hôpital', 'Hôtellerie', 'Immobilier', 'Industrie', 'Informatique', 'Ingénierie', 'Intérim', 'Juridique', 'Logistique', 'Marketing et Communication', 'Nettoyage', 'Production', 'Qualité', 'Recherche', 'Ressources humaines', 'Restauration', 'Santé', 'SAV', 'Secrétariat', 'Service', 'Social', 'Télécom', 'Tourisme', 'Transport', 'Vente'
);

-- Création de la TABLE annonce
DROP TABLE IF EXISTS annonce CASCADE;
CREATE TABLE IF NOT EXISTS annonce (
    id_annonce SERIAL PRIMARY KEY,
    id_entreprise VARCHAR(19) NOT NULL REFERENCES entreprise(id_entreprise),
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
DROP TYPE handicap CASCADE;
CREATE TYPE handicap AS ENUM(
    'oui', 'non'
);

-- Création de la table candidat
DROP TABLE IF EXISTS candidat;
CREATE TABLE IF NOT EXISTS candidat(
    id_candidat SERIAL PRIMARY KEY,
    nom VARCHAR(255) NOT NULL,
    prenom VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    mdp VARCHAR(255) NOT NULL,
    tel INT NOT NULL,
    adresse VARCHAR(255) NOT NULL,
    cv TEXT,
    lettre_de_motivation TEXT,
    situation VARCHAR(255),
    compétences TEXT,
    experience TEXT,
    handicap handicap NOT NULL
);

-- Création de la table candidature
DROP TABLE IF EXISTS candidature;
CREATE TABLE IF NOT EXISTS candidature(
    id SERIAL PRIMARY KEY,
    nom VARCHAR(255) NOT NULL,
    prenom VARCHAR NOT NULL,
    email VARCHAR(255) NOT NULL,
    cv TEXT NOT NULL,
    lettre_de_motivation TEXT NOT NULL
);