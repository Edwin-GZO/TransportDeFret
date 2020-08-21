-- Deploy tdr:20-Contraints to pg

BEGIN;

ALTER TABLE "user" ADD COLUMN "bill_address_id" INT REFERENCES "bill_address"("id");

ALTER TABLE "shipment" ADD COLUMN "user_id" INT REFERENCES "user"("id");
ALTER TABLE "shipment" ADD COLUMN "sender_address_id" INT REFERENCES "sender_address"("id");
ALTER TABLE "shipment" ADD COLUMN "receiver_address_id" INT REFERENCES "receiver_address"("id");
ALTER TABLE "shipment" ADD COLUMN "quote_id" INT REFERENCES "quote"("id");

ALTER TABLE "sender_address" ADD COLUMN "department_id" INT REFERENCES "department"("id");

ALTER TABLE "receiver_address" ADD COLUMN "department_id" INT REFERENCES "department"("id");




COMMIT;
