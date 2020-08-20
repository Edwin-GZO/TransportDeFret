-- Revert tdr:45-Add_seeder from pg

BEGIN;

TRUNCATE TABLE "bill_address" CASCADE ;
TRUNCATE TABLE "user" CASCADE ; 
TRUNCATE TABLE "receiver_address" CASCADE ;
TRUNCATE TABLE "sender_address" CASCADE ;
TRUNCATE TABLE "quote" CASCADE;
TRUNCATE TABLE "shipment" CASCADE;

COMMIT;
