-- Revert tdr:20-Contraints from pg

BEGIN;

ALTER TABLE "user" DROP COLUMN "bill_address_id";

ALTER TABLE "shipment" DROP COLUMN "user_id"; 
ALTER TABLE "shipment" DROP COLUMN "sender_address_id" ;
ALTER TABLE "shipment" DROP COLUMN "receiver_address_id" ;
ALTER TABLE "shipment" DROP COLUMN "quote_id" ; 

ALTER TABLE "sender_address" DROP COLUMN "department_id" ;

ALTER TABLE "receiver_address" DROP COLUMN "department_id" ;

COMMIT;
