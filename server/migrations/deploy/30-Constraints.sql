-- Deploy tdr:30-Contraints to pg

BEGIN ;

-- ^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[_!@#$%^&*]).{8,16}$
CREATE DOMAIN CHECK_PASSWORD AS TEXT
CHECK (
    VALUE ~'^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[_!@#$%^&*]).{8,16}$'
) ;

ALTER TABLE "user" ALTER COLUMN "password" SET DATA TYPE CHECK_PASSWORD ;

CREATE DOMAIN POSTAL_CODE_FR AS TEXT
CHECK (
    VALUE ~'^(0[1-9]|[1-9][0-9]|)[0-9]{3}$'
) ; 

ALTER TABLE "bill_address" ALTER COLUMN "postal_code" SET DATA TYPE POSTAL_CODE_FR ;
ALTER TABLE "sender_address" ALTER COLUMN "postal_code" SET DATA TYPE POSTAL_CODE_FR ;
ALTER TABLE "receiver_address" ALTER COLUMN "postal_code" SET DATA TYPE POSTAL_CODE_FR ;

CREATE DOMAIN PHONE AS TEXT
CHECK (
    VALUE ~'^((\+)|([0]))([\d]){9,12}$'
) ;

ALTER TABLE "user" ALTER COLUMN "phone" SET DATA TYPE PHONE;

CREATE DOMAIN SIRET AS TEXT
CHECK (
    VALUE ~'((\d{3}) (\d{3}) (\d{3}) (\d{5}))$'
) ;

ALTER TABLE "user" ALTER COLUMN "siret" SET DATA TYPE SIRET;

CREATE DOMAIN INTERNAL_REF AS TEXT
CHECK (
    VALUE ~'^(\d{6})$'
) ;

ALTER TABLE "quote" ALTER COLUMN "ref_quote" SET DATA TYPE INTERNAL_REF;
ALTER TABLE "shipment" ALTER COLUMN "ref_shipment" SET DATA TYPE INTERNAL_REF;

ALTER TABLE "quote" ADD CONSTRAINT "nbr_pallets > 6" CHECK("nbr_pallets" < 7) ;

CREATE DOMAIN P_INT AS INT
CHECK (
    VALUE > 0
) ;

ALTER TABLE "quote" ALTER COLUMN "length" SET DATA TYPE P_INT;
ALTER TABLE "quote" ALTER COLUMN "width" SET DATA TYPE P_INT;
ALTER TABLE "quote" ALTER COLUMN "height" SET DATA TYPE P_INT;
ALTER TABLE "quote" ALTER COLUMN "weight" SET DATA TYPE P_INT;

COMMIT;
