-- Deploy tdr:45-Add_seeder to pg

BEGIN;

INSERT INTO "bill_address" ("main", "complement", "postal_code", "city") VALUES
  ('13 Blanc de Provence', 'Apt. 842', '77240',  'Nathanville'),
  ('603 Renault Saint-Honoré', 'Suite 728', '65130',  'Adambury'),
  ('55 Elisa Saint-Honoré', 'Apt. 165', '32560',  'Antoineview'),
  ('96 Mathéo Saint-Honoré', 'Suite 126', '15630',  'Michelmouth'),
  ('49 Quentin Oberkampf', 'Apt. 992', '86880',  'Adamstad'),
  ('1091 Henry de Richelieu', 'Suite 356', '75960',  'New Clara');

INSERT INTO "sender_address" ("name", "phone", "main", "complement", "postal_code", "city" , "department_id") VALUES
  ('T.D.R','0612324565','7 Alexandre Saint-Jacques', 'Suite 435', '83460',  'Maëlysport' , '83'),
  ('T.D.R','0612324565', '33 Charles de Tilsitt', '', '14280', 'Durandfort' , '77'),
  ('T.D.R','0612324565', '14 Olivier Saint-Bernard', 'Suite 671', '74590',  'South Hugo' , '75'),
  ('T.D.R','0612324565', '39 Louise de la Bûcherie', '', '55990',  'Perrinside' , '55'),
  ('T.D.R','0612324565', '1 Elisa de la Huchette', '', '17240',  'Juliettefurt' , '63'),
  ('T.D.R','0612324565', '96 Charlotte Pastourelle', 'Suite 517', '23650',  'Port Kylianview' , '57'),
  ('T.D.R','0612324565', '31 Mattéo Pierre Charron', '', '70970',  'Ethanhaven' , '83'),
  ('T.D.R','0612324565', '28 Sarah de Vaugirard', '613', '43550',  'West Maëlys' , '70') ;

INSERT INTO "receiver_address" ("name", "phone", "main", "complement", "postal_code", "city" , "department_id") VALUES
  ('Nom_1','0612345601','181 Sarah de Seine', 'Suite 314', '84168',  'New Adamberg' , '56'),
  ('Nom_2','0612345602','97 Jules de la Chaussée-d''Antin', 'Apt. 809', '12676',  'Moulinville' , '01'),
  ('Nom_3','0612345603','9 Thomas de la Huchette', '', '71800',  'Clémencetown' , '39'),
  ('Nom_4','0612345604','6 Blanchard de l''Odéon', '', '35200',  'East Benjaminton' , '73'),
  ('Nom_5','0612345605','10 Lefevre d''Alésia', 'Apt. 482', '05630',  'Brunview' , '75'),
  ('Nom_6','0612345606','8 Evan des Grands Augustins', 'Suite 057', '98000',  'East Axelstad' , '56'),
  ('Nom_7','0612345607','71 Roux des Rosiers', 'Apt. 373', '31694',  'East Maelside' , '36'),
  ('Nom_8','0612345608','42 Lopez des Francs-Bourgeois', 'Suite 615', '04090',  'New Quentin' , '52');

INSERT INTO "quote" ("nbr_pallets", "distance", "price","length","width","height","weight","comments") VALUES
  ('1', '123','1000','5012','6598','5687','5486','5648'),
  ('0', '456','2000', '3256','4562','1265','5684','Adambury'),
  ('3', '789','3000','3254','1278','1254','6587','3245'),
  ('4', '012','4000','1234','3265','6587','4568','1265'),
  ('5', '345','8000','12345','12365','1258','1234','1286'),
  ('6', '67895', '5000','6542','12358','1235','1234', 'New Clara');

INSERT INTO "user" ("name", "password","mail","phone","type","siret","bill_address_id") VALUES
  ('Caron EURL', 'Pyp_MaeA_MHTYy34', 'Lo88@gmail.com',  '+33165649473','pro','123 123 123 12345','1') ,
  ('Gaillard SA', 'tx73Fkh_Ly7R1J4Z', 'Ocane_Colin15@yahoo.fr',  '0790296896','pro','456 789 123 12345','2') ,
  ('Garcia SA', 'AsFWYt0shL_NKA', 'Enzo.Fleury@hotmail.fr',  '0560122832','pro','456 987 456 88961','3') ,
  ('Fernandez Olivier', 'YpvqkGdvi8_Xb_n', 'Laura_Lecomte@gmail.com',  '+33313683682', 'part','000 000 000 00000','4' ) ,
  ('Le roux - Martin', 'cf93ecp_OqaYFV0j', 'Clmence20@hotmail.fr',  '+33701859131', 'part','000 000 000 00000','5') ,
  ('Da silva SA', 'YpvqkGdvi8_Xb_n', 'Mathilde.Baron@gmail.com',  '+33399001543', 'pro','457 977 416 89896' , '3') ,
  ('Renaud Jean-Michel', 'YpvqkGdvi8_Xb_n', 'Lucas_Moreau@hotmail.fr', '0783790556', 'part', '000 000 000 00000' , '2') ;

INSERT INTO "shipment" ("user_id","sender_address_id","receiver_address_id","quote_id") VALUES
  ('1','1','1','1'),
  ('2','2','2','2'),
  ('3','3','3','3'),
  ('2','5','6','6'),
  ('2','4','2','2'),
  ('2','5','6','2'),
  ('1','1','1','4');

COMMIT;
