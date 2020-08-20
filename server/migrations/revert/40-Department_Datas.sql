-- Revert tdr:40-Department_Datas from pg

BEGIN;

TRUNCATE TABLE "department" CASCADE ; 

COMMIT;
