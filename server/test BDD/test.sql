BEGIN;

DROP TABLE IF EXISTS "user";
CREATE TABLE "user" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL, -- vérifier le nombre et le type de caractère (ragex)
    "role" TEXT NOT NULL DEFAULT "user", -- user || admin
    "mail" TEXT UNIQUE NOT NULL, -- valider avec mailvalidator
    "phone" TEXT,
    "Type" TEXT NOT NULL, -- pro ou particulier
    "siret" SIRET NOT NULL, -- /!\ creer un type SIRET
    "created_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMPTZ,
    "updated_at" TIMESTAMPTZ ,
    "active" BOOLEAN DEFAULT 1
);

DROP TABLE IF EXISTS "shipment";
CREATE TABLE "shipment" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "ref" INT 
    "created_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMPTZ,
    "updated_at" TIMESTAMPTZ ,
    "active" BOOLEAN DEFAULT 1
);

DROP TABLE IF EXISTS "bill_address";
CREATE TABLE "bill_address" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "main" TEXT NOT NULL, -- n° de voie + type de voie + nom de voie
    "complement" TEXT,
    "postal_code" TEXT NOT NULL, -- /!\ creer un type postal_code --! Avec le code postal proposé la ville ?
    "city" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMPTZ,
    "updated_at" TIMESTAMPTZ ,
    "active" BOOLEAN DEFAULT 1
);

DROP TABLE IF EXISTS "sender_address";
CREATE TABLE "send_address" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "main" TEXT NOT NULL, -- n° de voie + type de voie + nom de voie
    "complement" TEXT,
    "postal_code" TEXT NOT NULL, -- /!\ creer un type postal_code --! Avec le code postal proposé la ville ?
    "city" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMPTZ,
    "updated_at" TIMESTAMPTZ ,
    "active" BOOLEAN DEFAULT 1
    
);

DROP TABLE IF EXISTS "receiver_address";
CREATE TABLE "receive_address" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "main" TEXT NOT NULL, -- n° de voie + type de voie + nom de voie
    "complement" TEXT,
    "postal_code" TEXT NOT NULL, -- /!\ creer un type postal_code --! Avec le code postal proposé la ville ?
    "city" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMPTZ,
    "updated_at" TIMESTAMPTZ ,
    "active" BOOLEAN DEFAULT 1

);

DROP TABLE IF EXISTS "quote";
CREATE TABLE "quote" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "ref_quote" REF_QUOTE NOT NULL, -- Définir un format pour le référence : 6 chiffres
    "nbr_of_pallets" INT , 
    "distance" INT NOT NULL,
    "price" FLOAT NOT NULL,
    "date_quote" TIMESTAMPTZ NOT NULL, -- vérifier le format date_quote,
    "length" INT NOT NULL, -- en mm
    "width" INT NOT NULL, -- en mm
    "height" INT NOT NULL, -- en mm
    "weight" INT NOT NULL, -- poids en g
    "comments" TEXT,
    "created_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMPTZ,
    "updated_at" TIMESTAMPTZ ,
    "active" BOOLEAN DEFAULT 1
    
);

DROP TABLE IF EXISTS "document";
CREATE TABLE "document" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "source" TEXT UNIQUE NOT NULL,
    "created_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMPTZ,
    "updated_at" TIMESTAMPTZ ,
    "active" BOOLEAN DEFAULT 1
);

CREATE TABLE "department" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "nbr" TEXT UNIQUE NOT NULL,
    "name" TEXT UNIQUE NOT NULL,
    "created_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMPTZ,
    "updated_at" TIMESTAMPTZ ,
    "active" BOOLEAN DEFAULT 1
);

COMMIT;