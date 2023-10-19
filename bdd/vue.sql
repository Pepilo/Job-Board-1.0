CREATE VIEW verif_email AS
SELECT email, user_role FROM candidat
UNION ALL
SELECT email, user_role FROM recruteur
UNION ALL
SELECT email, user_role FROM "admin";