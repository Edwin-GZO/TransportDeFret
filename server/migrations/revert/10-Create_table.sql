-- Revert tdr:10-Create_table from pg

BEGIN;

DROP TABLE IF EXISTS "department";
DROP TABLE IF EXISTS "document";
DROP TABLE IF EXISTS "quote";
DROP TABLE IF EXISTS "receiver_address";
DROP TABLE IF EXISTS "sender_address";
DROP TABLE IF EXISTS "bill_address";
DROP TABLE IF EXISTS "shipment";
DROP TABLE IF EXISTS "user";

COMMIT;
