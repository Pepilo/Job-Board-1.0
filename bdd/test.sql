-- TEST Table entreprise
INSERT INTO entreprise
(siret, nom, adresse, descriptif)
VALUES(1548653256487956487, 'BG Compagnie', 'Montpellier', 'Une entreprise trop cool');

SELECT * FROM entreprise;

UPDATE entreprise
SET nom = 'WALLA Entreprise'
WHERE nom = 'BG Compagnie';

DELETE FROM entreprise
WHERE nom = 'WALLA Entreprise';

-- TEST TABLE recruteur
INSERT INTO recruteur
(nom, prenom, email, tel, mdp, id_entreprise)
VALUES('Scrimali', 'Antho', 'anthony.scrimali@gmail.com', 0602048192, '1234', 4);

SELECT * FROM recruteur;

UPDATE recruteur
SET nom = 'SCRIMALI'
where nom = 'Scrimali';

DELETE FROM recruteur
WHERE nom = 'SCRIMALI';

-- TEST TABLE annonce
INSERT INTO annonce
(SIRET, domaine, poste, ville, departement, region, contrat, conditions, salaire, descriptif, pre_requis)
VALUES(1548653256487956487, 'Informatique', 'dev', 'montpellier', 34, 'Occitanie', 'CDI', 'HYBRIDE', 2500, 'Cest bien', 'aucun');

SELECT * FROM annonce;

UPDATE annonce
SET poste = 'developpeur'
WHERE poste = 'dev';

DELETE FROM annonce
WHERE poste = 'developpeur';

-- TEST TABLE candidat
INSERT INTO candidat
(nom, prenom, email, mdp, tel, adresse, CV, lettre_de_motivation, situation, experience, compétences, handicap)
VALUES('Scrimali', 'Antho', 'anthony.scrimali@gmail.com', '1234', 0602048192, 'Montpellier', 'bogoss de la night', 'trop motivé tas vu', 'je sais plus', 'paysagiste', 'javascript', 'non');

SELECT * FROM candidat;

UPDATE candidat
SET nom = 'SCRIMALI'
WHERE nom = 'Scrimali';

DELETE FROM candidat
WHERE nom = 'SCRIMALI';

-- TEST TABLE candidature
INSERT INTO candidature
(nom, prenom, email, cv, lettre_de_motivation)
VALUES('Scrimali', 'Anthony', 'anthony.scrimali@gmail.com', 'cv', 'ldm');

SELECT * FROM candidature;

UPDATE candidature
SET nom = 'SCRIMALI'
WHERE nom = 'Scrimali';

DELETE FROM candidature
WHERE nom = 'SCRIMALI';