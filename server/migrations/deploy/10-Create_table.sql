BEGIN;

DROP TABLE IF EXISTS "user";
CREATE TABLE "user" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL, -- vérifier le nombre et le type de caractère (ragex)
    "role" TEXT NOT NULL DEFAULT 'user', -- user || admin
    "mail" TEXT UNIQUE NOT NULL, -- valider avec API mailvalidator
    "phone" TEXT, -- Expression Régulière
    "inscription_date" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP, --! A vérifier
    "type" TEXT NOT NULL, -- pro ou particulier
    "siret" TEXT DEFAULT '000 000 000 00000', -- /!\ creer un type SIRET API Siret ?
    "created_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ ,
    "active" BOOLEAN DEFAULT TRUE
);

DROP TABLE IF EXISTS "shipment";
CREATE TABLE "shipment" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "ref_shipment" SERIAL NOT NULL, 
    "creation_date" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP, --! A vérifier
    "created_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ ,
    "active" BOOLEAN DEFAULT TRUE
);

DROP TABLE IF EXISTS "bill_address";
CREATE TABLE "bill_address" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "main" TEXT NOT NULL, -- n° de voie + type de voie + nom de voie
    "complement" TEXT,
    "postal_code" TEXT NOT NULL, -- /!\ creer un type postal_code --! Avec le code postal proposé la ville ?
    "city" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ ,
    "active" BOOLEAN DEFAULT TRUE
);

DROP TABLE IF EXISTS "sender_address";
CREATE TABLE "sender_address" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT , -- Société Pro  Nom Prénom Part
    "phone" TEXT,
    "main" TEXT NOT NULL, -- n° de voie + type de voie + nom de voie
    "complement" TEXT,
    "postal_code" TEXT NOT NULL, -- /!\ creer un type postal_code --! Avec le code postal proposé la ville ?
    "city" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ ,
    "active" BOOLEAN DEFAULT TRUE
    
);

DROP TABLE IF EXISTS "receiver_address";
CREATE TABLE "receiver_address" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT , -- Société Pro  Nom Prénom Part
    "phone" TEXT,
    "main" TEXT NOT NULL, -- n° de voie + type de voie + nom de voie
    "complement" TEXT,
    "postal_code" TEXT NOT NULL, -- /!\ creer un type postal_code --! Avec le code postal proposé la ville ?
    "city" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ ,
    "active" BOOLEAN DEFAULT TRUE

);

DROP TABLE IF EXISTS "quote";
CREATE TABLE "quote" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "ref_quote" SERIAL NOT NULL, -- Définir un format pour le référence : 6 chiffres
    "nbr_pallets" INT DEFAULT 0, 
    "distance" INT NOT NULL, -- en KM
    "price" FLOAT NOT NULL, -- €
    "date_quote" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP, -- vérifier le format date_quote,
    "length" INT NOT NULL, -- en mm
    "width" INT NOT NULL, -- en mm
    "height" INT NOT NULL, -- en mm
    "weight" INT NOT NULL, -- poids en g
    "comments" TEXT,
    "created_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ ,
    "active" BOOLEAN DEFAULT TRUE
    
);

DROP TABLE IF EXISTS "document";
CREATE TABLE "document" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "source" TEXT UNIQUE NOT NULL,
    "created_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ ,
    "active" BOOLEAN DEFAULT TRUE
);

DROP TABLE IF EXISTS "department";
CREATE TABLE "department" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "nbr" TEXT UNIQUE NOT NULL,
    "name" TEXT UNIQUE NOT NULL,
    "created_at" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ ,
    "active" BOOLEAN DEFAULT TRUE
);

COMMIT;