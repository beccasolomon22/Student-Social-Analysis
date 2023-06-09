-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- Link to schema: https://app.quickdatabasediagrams.com/#/d/3DrvZz
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.

-- Modify this code to update the DB schema diagram.
-- To reset the sample schema, replace everything with
-- two dots ('..' - without quotes).
DROP TABLE IF EXISTS demographics CASCADE;
DROP TABLE IF EXISTS attendance;
DROP TABLE IF EXISTS generations;
DROP TABLE IF EXISTS income;
DROP TABLE IF EXISTS retention;
DROP TABLE IF EXISTS sex;
DROP TABLE IF EXISTS root CASCADE;

CREATE TABLE "demographics" (
    "school name" varchar   NOT NULL,
    "zipcode" varchar   NOT NULL,
    "student size" float   NOT NULL,
    "pell grant rate" float   NOT NULL,
    "average faculty salary" float   NOT NULL,
    "fulltime faculty rate" float   NOT NULL,
    "admission test requirements" float   NOT NULL,
    "completion rate in 4 years (hawaiian or pacific islander)" float   NOT NULL,
    "completion rate in 4 years (american indian)" float   NOT NULL,
    "completion rate in 4 years (asian)" float   NOT NULL,
    "completion rate in 4 years (hispanic)" float   NOT NULL,
    "completion rate in 4 years (black)" float   NOT NULL,
    "completion rate in 4 years (white)" float   NOT NULL,
    "total student demographic (white)" float   NOT NULL,
    "total student demographic (hispanic)" float   NOT NULL,
    "total student demographic (black)" float   NOT NULL,
    "total student demographic (american indian)" float   NOT NULL,
    "total student demographic (female)" float   NOT NULL,
    "total student demographic (male)" float   NOT NULL,
    "median debt for income 30001_75000" float   NOT NULL,
    "median debt for income 0-30000" float   NOT NULL,
    "median debt for income greater than 75000" float   NOT NULL,
    "median debt for noncompleters" float   NOT NULL,
    "median debt for completers" float   NOT NULL,
    "median debt for male students" float   NOT NULL,
    "median debt for independent students" float   NOT NULL,
    "median debt for female students" float   NOT NULL,
    "median debt for dependent students" float   NOT NULL,
    "faculty demographic (white)" float   NOT NULL,
    "faculty demographic (2 or more race or ethnicity)" float   NOT NULL,
    "faculty demographic (unknown race or ethnicity)" float   NOT NULL,
    "faculty demographic (hawaiian or pacific islander)" float   NOT NULL,
    "faculty demographic (hispanic)" float   NOT NULL,
    "faculty demographic (black)" float   NOT NULL,
    "faculty demographic (asian)" float   NOT NULL,
    "faculty demographic (american indian)" float   NOT NULL,
    "undergrads aged 25 or older" float   NOT NULL,
    "id" int   NOT NULL,
    "latitude" float   NOT NULL,
    "longitude" float   NOT NULL,
    CONSTRAINT "pk_demographics" PRIMARY KEY (
        "school name"
     )
);

CREATE TABLE "attendance" (
    "school name" varchar   NOT NULL,
    "school city" varchar   NOT NULL,
    "carnegie undergrad profile" float   NOT NULL,
    "carnegie size setting" float   NOT NULL,
    "avg months to complete program 1" float   NOT NULL,
    "avg months to complete program 2" float   NOT NULL,
    "avg months to complete program 3" float   NOT NULL,
    "avg months to complete program 4" float   NOT NULL,
    "avg months to complete program 5" float   NOT NULL,
    "avg months to complete program 6" float   NOT NULL,
    "avg price (public)" float   NOT NULL,
    "avg price (private)" float   NOT NULL,
    "avg price (other academic year)" float   NOT NULL,
    "avg price (program year)" float   NOT NULL,
    "public $ by income (75001-110k)" float   NOT NULL,
    "public $ by income (75000 plus)" float   NOT NULL,
    "public $ by income (48001-75k)" float   NOT NULL,
    "public $ by income (30001-75k)" float   NOT NULL,
    "public $ by income (30001-48k)" float   NOT NULL,
    "public $ by income (110001-plus)" float   NOT NULL,
    "110k+ fam income avg cost(private)" float   NOT NULL,
    "110k+ fam income avg cost(other)" float   NOT NULL,
    "0-48k fam income avg cost(public)" float   NOT NULL,
    "0-48k fam income avg cost(program-year)" float   NOT NULL,
    "0-48k fam income avg cost(private)" float   NOT NULL,
    "0-48k fam income avg cost(other)" float   NOT NULL,
    "0-30k fam income avg cost(public)" float   NOT NULL,
    "0-30k fam income avg cost(program-year)" float   NOT NULL,
    "0-30k fam income avg cost(private)" float   NOT NULL,
    "0-30k fam income avg cost(other)" float   NOT NULL,
    "overall admission rate" float   NOT NULL,
    "id" int   NOT NULL,
    "latitude" float   NOT NULL,
    "longitude" float   NOT NULL,
    CONSTRAINT "pk_attendance" PRIMARY KEY (
        "school name"
     )
);

CREATE TABLE "generations" (
    "school name" varchar   NOT NULL,
    "indep low income students (0-30000)" float   NOT NULL,
    "indep students" float   NOT NULL,
    "dep low income students (0-30000)" float   NOT NULL,
    "low income students" float   NOT NULL,
    "student share for 1-gen" float   NOT NULL,
    "1-gen with parents went to college" float   NOT NULL,
    "1-gen with parents went to middleschool" float   NOT NULL,
    "1-gen with parents went to highschool" float   NOT NULL,
    "t9 1-gen transfers in 4y compl by 2y" float   NOT NULL,
    "t9 1-gen transfers in 4y compl by 3y" float   NOT NULL,
    "t9 1-gen transfers in 4y compl by 4y" float   NOT NULL,
    "t9 1-gen transfers in 4y compl by 6y" float   NOT NULL,
    "t9 1-gen transfers in 4y compl by 8y" float   NOT NULL,
    "t9 indep students compl by 2y" float   NOT NULL,
    "t9 indep students compl by 3y" float   NOT NULL,
    "t9 indep students compl by 4y" float   NOT NULL,
    "t9 indep students compl by 6y" float   NOT NULL,
    "t9 indep students compl by 8y" float   NOT NULL,
    "t9 indep students withdr by 2y" float   NOT NULL,
    "t9 indep students withdr by 3y" float   NOT NULL,
    "t9 indep students withdr by 4y" float   NOT NULL,
    "t9 indep students withdr by 6y" float   NOT NULL,
    "t9 indep students withdr by 8y" float   NOT NULL,
    "t9 indep transfers withdr by 2y" float   NOT NULL,
    "t9 indep transfers withdr by 3y" float   NOT NULL,
    "t9 indep transfers withdr by 4y" float   NOT NULL,
    "t9 indep transfers withdr by 6y" float   NOT NULL,
    "t9 indep transfers withdr by 8y" float   NOT NULL,
    "t9 indep transfers compl by 2y" float   NOT NULL,
    "t9 indep transfers compl by 3y" float   NOT NULL,
    "t9 indep transfers compl by 4y" float   NOT NULL,
    "t9 indep transfers compl by 6y" float   NOT NULL,
    "t9 indep transfers compl by 8y" float   NOT NULL,
    "t9 dep students compl by 2y" float   NOT NULL,
    "t9 dep students compl by 3y" float   NOT NULL,
    "t9 dep students compl by 4y" float   NOT NULL,
    "t9 dep students compl by 6y" float   NOT NULL,
    "t9 dep students compl by 8y" float   NOT NULL,
    "t9 dep students withdr by 2y" float   NOT NULL,
    "t9 dep students withdr by 3y" float   NOT NULL,
    "t9 dep students withdr by 4y" float   NOT NULL,
    "t9 dep students withdr by 6y" float   NOT NULL,
    "t9 dep students withdr by 8y" float   NOT NULL,
    "t9 dep transfers in 4y withdr by 2y" float   NOT NULL,
    "t9 dep transfers in 4y withdr by 3y" float   NOT NULL,
    "t9 dep transfers in 4y withdr by 4y" float   NOT NULL,
    "t9 dep transfers in 4y withdr by 6y" float   NOT NULL,
    "t9 dep transfers in 4y withdr by 8y" float   NOT NULL,
    "t9 dep transfers in 4y compl by 2y" float   NOT NULL,
    "t9 dep transfers in 4y compl by 3y" float   NOT NULL,
    "t9 dep transfers in 4y compl by 4y" float   NOT NULL,
    "t9 dep transfers in 4y compl by 6y" float   NOT NULL,
    "t9 dep transfers in 4y compl by 8y" float   NOT NULL,
    "t9 non-1-gen compl by 2y" float   NOT NULL,
    "t9 non-1-gen compl by 3y" float   NOT NULL,
    "t9 non-1-gen compl by 4y" float   NOT NULL,
    "t9 non-1-gen compl by 6y" float   NOT NULL,
    "t9 non-1-gen compl by 8y" float   NOT NULL,
    "t9 non-1-gen withdr by 2y" float   NOT NULL,
    "t9 non-1-gen withdr by 3y" float   NOT NULL,
    "t9 non-1-gen withdr by 4y" float   NOT NULL,
    "t9 non-1-gen withdr by 6y" float   NOT NULL,
    "t9 non-1-gen withdr by 8y" float   NOT NULL,
    "t9 non-1-gen transfers in 4y withdr by 2y" float   NOT NULL,
    "t9 non-1-gen transfers in 4y withdr by 3y" float   NOT NULL,
    "t9 non-1-gen transfers in 4y withdr by 4y" float   NOT NULL,
    "t9 non-1-gen transfers in 4y withdr by 6y" float   NOT NULL,
    "t9 non-1-gen transfers in 4y withdr by 8y" float   NOT NULL,
    "t9 non-1-gen transfers in 4y compl by 2y" float   NOT NULL,
    "t9 non-1-gen transfers in 4y compl by 3y" float   NOT NULL,
    "t9 non-1-gen transfers in 4y compl by 4y" float   NOT NULL,
    "t9 non-1-gen transfers in 4y compl by 6y" float   NOT NULL,
    "t9 non-1-gen transfers in 4y compl by 8y" float   NOT NULL,
    "t9 1-gen students completed by 2y" float   NOT NULL,
    "t9 1-gen students completed by 3y" float   NOT NULL,
    "t9 1-gen students completed by 4y" float   NOT NULL,
    "t9 1-gen students completed by 6y" float   NOT NULL,
    "t9 1-gen students completed by 8y" float   NOT NULL,
    "t9 1-gen students withdr by 2y" float   NOT NULL,
    "t9 1-gen students withdr by 3y" float   NOT NULL,
    "t9 1-gen students withdr by 4y" float   NOT NULL,
    "t9 1-gen students withdr by 6y" float   NOT NULL,
    "t9 1-gen students withdr by 8y" float   NOT NULL,
    "t9 1-gen transfers in 4y withdrawn by 2y" float   NOT NULL,
    "t9 1-gen transfers in 4y withdrawn by 3y" float   NOT NULL,
    "t9 1-gen transfers in 4y withdrawn by 4y" float   NOT NULL,
    "t9 1-gen transfers in 4y withdrawn by 6y" float   NOT NULL,
    "t9 1-gen transfers in 4y withdrawn by 8y" float   NOT NULL,
    "id" int   NOT NULL,
    "latitude" float   NOT NULL,
    "longitude" float   NOT NULL,
    CONSTRAINT "pk_generations" PRIMARY KEY (
        "school name"
     )
);

CREATE TABLE "income" (
    "school name" varchar   NOT NULL,
    "student median family income" float   NOT NULL,
    "t9 low inc comp by 3y" float   NOT NULL,
    "t9 low inc comp by 4y" float   NOT NULL,
    "t9 low inc comp by 6y" float   NOT NULL,
    "t9 low inc comp by 8y" float   NOT NULL,
    "t9 low inc withdr by 2y" float   NOT NULL,
    "t9 low inc withdr by 3y" float   NOT NULL,
    "t9 low inc withdr by 4y" float   NOT NULL,
    "t9 low inc withdr by 6y" float   NOT NULL,
    "t9 low inc withdr by 8y" float   NOT NULL,
    "t9 low inc transfers withdr by 2y" float   NOT NULL,
    "t9 low inc transfers withdr by 3y" float   NOT NULL,
    "t9 low inc transfers withdr by 4y" float   NOT NULL,
    "t9 low inc transfers withdr by 6y" float   NOT NULL,
    "t9 low inc transfers withdr by 8y" float   NOT NULL,
    "t9 low inc transfers comp by 2y" float   NOT NULL,
    "t9 low inc transfers comp by 3y" float   NOT NULL,
    "t9 low inc transfers comp by 4y" float   NOT NULL,
    "t9 low inc transfers comp by 6y" float   NOT NULL,
    "t9 low inc transfers comp by 8y" float   NOT NULL,
    "t9 middle inc comp by 2y" float   NOT NULL,
    "t9 middle inc comp by 3y" float   NOT NULL,
    "t9 middle inc comp by 4y" float   NOT NULL,
    "t9 middle inc comp by 6y" float   NOT NULL,
    "t9 middle inc comp by 8y" float   NOT NULL,
    "t9 middle inc withdr by 2y" float   NOT NULL,
    "t9 middle inc withdr by 3y" float   NOT NULL,
    "t9 middle inc withdr by 4y" float   NOT NULL,
    "t9 middle inc withdr by 6y" float   NOT NULL,
    "t9 middle inc withdr by 8y" float   NOT NULL,
    "t9 middle inc transfers withdr by 2y" float   NOT NULL,
    "t9 middle inc transfers withdr by 3y" float   NOT NULL,
    "t9 middle inc transfers withdr by 4y" float   NOT NULL,
    "t9 middle inc transfers withdr by 6y" float   NOT NULL,
    "t9 middle inc transfers withdr by 8y" float   NOT NULL,
    "t9 middle inc transfers comp by 2y" float   NOT NULL,
    "t9 middle inc transfers comp by 3y" float   NOT NULL,
    "t9 middle inc transfers comp by 4y" float   NOT NULL,
    "t9 middle inc transfers comp by 6y" float   NOT NULL,
    "t9 middle inc transfers comp by 8y" float   NOT NULL,
    "t9 high inc completed by 2y" float   NOT NULL,
    "t9 high inc completed by 3y" float   NOT NULL,
    "t9 high inc completed by 4y" float   NOT NULL,
    "t9 high inc completed by 6y" float   NOT NULL,
    "t9 high inc completed by 8y" float   NOT NULL,
    "t9 high inc withdr by 2y" float   NOT NULL,
    "t9 high inc withdr by 3y" float   NOT NULL,
    "t9 high inc withdr by 4y" float   NOT NULL,
    "t9 high inc withdr by 6y" float   NOT NULL,
    "t9 high inc withdr by 8y" float   NOT NULL,
    "t9 high inc transfers withdr by 2y" float   NOT NULL,
    "t9 high inc transfers withdr by 3y" float   NOT NULL,
    "t9 high inc transfers withdr by 4y" float   NOT NULL,
    "t9 high inc transfers withdr by 6y" float   NOT NULL,
    "t9 high inc transfers withdr by 8y" float   NOT NULL,
    "t9 high inc transfers to 4y comp by 2y" float   NOT NULL,
    "t9 high inc transfers to 4y comp by 3y" float   NOT NULL,
    "t9 high inc transfers to 4y comp by 4y" float   NOT NULL,
    "t9 high inc transfers to 4y comp by 6y" float   NOT NULL,
    "t9 high inc transfers to 4y comp by 8y" float   NOT NULL,
    "id" int   NOT NULL,
    "latitude" float   NOT NULL,
    "longitude" float   NOT NULL,
    CONSTRAINT "pk_income" PRIMARY KEY (
        "school name"
     )
);

CREATE TABLE "retention" (
    "school name" varchar   NOT NULL,
    "federal loan rate" float   NOT NULL,
    "t9 cost for public schools" float   NOT NULL,
    "t9 cost for private schools" float   NOT NULL,
    "tuition revenue per full time enrollment" float   NOT NULL,
    "tuition cost for in state students" float   NOT NULL,
    "part time student retention rate for 4y" float   NOT NULL,
    "full time students under 4y" float   NOT NULL,
    "full time students in 4y" float   NOT NULL,
    "cost of attendance w fam other expenses" float   NOT NULL,
    "compl rate for under 4y (white)" float   NOT NULL,
    "compl rate for under 4y (2 or more races)" float   NOT NULL,
    "compl rate for under 4y (hawaiian pac islander)" float   NOT NULL,
    "compl rate for under 4y (hispanic)" float   NOT NULL,
    "compl rate for under 4y (black)" float   NOT NULL,
	"compl rate for under 4y (asian)" float   NOT NULL,
    "compl rate for under 4y (american indian)" float   NOT NULL,
    "compl rate for 4y (white)" float   NOT NULL,
    "compl rate for 4y (2 or more races)" float   NOT NULL,
    "compl rate for 4y (hawaiian pac islander)" float   NOT NULL,
    "compl rate for 4y (hispanic)" float   NOT NULL,
    "compl rate for 4y (black)" float   NOT NULL,
    "compl rate for 4y (asian)" float   NOT NULL,
    "compl rate for 4y (american indian)" float   NOT NULL,
    "1st_time fulltime compl 4y (2y avg)" float   NOT NULL,
    "1st_time fulltime compl 4y" float   NOT NULL,
    "id" int   NOT NULL,
    "latitude" float   NOT NULL,
    "longitude" float   NOT NULL,
    CONSTRAINT "pk_retention" PRIMARY KEY (
        "school name"
     )
);

CREATE TABLE "sex" (
    "school name" varchar   NOT NULL,
    "women only schools" float   NOT NULL,
    "men only schools" float   NOT NULL,
    "males compl t9 by 2y" float   NOT NULL,
    "males compl t9 by 3y" float   NOT NULL,
    "males compl t9 by 4y" float   NOT NULL,
    "males compl t9 by 6y" float   NOT NULL,
    "males compl t9 by 8y" float   NOT NULL,
    "males withdr t9 by 2y" float   NOT NULL,
    "males withdr t9 by 3y" float   NOT NULL,
    "males withdr t9 by 4y" float   NOT NULL,
    "males withdr t9 by 6y" float   NOT NULL,
    "males withdr t9 by 8y" float   NOT NULL,
    "male transfers withdr 4y by 2y" float   NOT NULL,
    "male transfers withdr 4y by 3y" float   NOT NULL,
    "male transfers withdr 4y by 4y" float   NOT NULL,
    "male transfers withdr 4y by 6y" float   NOT NULL,
    "male transfers withdr 4y by 8y" float   NOT NULL,
    "male transfers compl t9 in 4y by 2y" float   NOT NULL,
    "male transfers compl t9 in 4y by 3y" float   NOT NULL,
    "male transfers compl t9 in 4y by 4y" float   NOT NULL,
    "male transfers compl t9 in 4y by 6y" float   NOT NULL,
    "male transfers compl t9 in 4y by 8y" float   NOT NULL,
    "females compl t9 by 2y" float   NOT NULL,
    "females compl t9 by 3y" float   NOT NULL,
    "females compl t9 by 4y" float   NOT NULL,
    "females compl t9 by 6y" float   NOT NULL,
    "females compl t9 by 8y" float   NOT NULL,
    "females withdr t9 by 2y" float   NOT NULL,
    "females withdr t9 by 3y" float   NOT NULL,
    "females withdr t9 by 4y" float   NOT NULL,
    "females withdr t9 by 6y" float   NOT NULL,
    "females withdr t9 by 8y" float   NOT NULL,
    "female transfers withdr t9 in 4y by 2y" float   NOT NULL,
    "female transfers withdr t9 in 4y by 3y" float   NOT NULL,
    "female transfers withdr t9 in 4y by 4y" float   NOT NULL,
    "female transfers withdr t9 in 4y by 6y" float   NOT NULL,
    "female transfers withdr t9 in 4y by 8y" float   NOT NULL,
    "female transfers compl t9 in 4y by 2y" float   NOT NULL,
    "female transfers compl t9 in 4y by 3y" float   NOT NULL,
    "female transfers compl t9 in 4y by 4y" float   NOT NULL,
    "female transfers compl t9 in 4y by 6y" float   NOT NULL,
    "female transfers compl t9 in 4y by 8y" float   NOT NULL,
    "id" int   NOT NULL,
    "latitude" float   NOT NULL,
    "longitude" float   NOT NULL,
    CONSTRAINT "pk_sex" PRIMARY KEY (
        "school name"
     )
);

CREATE TABLE "root" (
	"school name" varchar NOT NULL,
    "id" int   NOT NULL,
    "latitude" float   NOT NULL,
    "longitude" float   NOT NULL,
    CONSTRAINT "pk_root" PRIMARY KEY (
        "school name","id","latitude","longitude"
     )
);


ALTER TABLE "demographics" ADD CONSTRAINT "fk_demographics_school name_id_latitude_longitude" FOREIGN KEY("school name", "id", "latitude", "longitude")
REFERENCES "root" ("school name", "id", "latitude", "longitude");

ALTER TABLE "attendance" ADD CONSTRAINT "fk_attendance_school name_id_latitude_longitude" FOREIGN KEY("school name", "id", "latitude", "longitude")
REFERENCES "root" ("school name", "id", "latitude", "longitude");

ALTER TABLE "generations" ADD CONSTRAINT "fk_generations_school name_id_latitude_longitude" FOREIGN KEY("school name", "id", "latitude", "longitude")
REFERENCES "root" ("school name", "id", "latitude", "longitude");

ALTER TABLE "income" ADD CONSTRAINT "fk_income_school name_id_latitude_longitude" FOREIGN KEY("school name", "id", "latitude", "longitude")
REFERENCES "root" ("school name", "id", "latitude", "longitude");

ALTER TABLE "retention" ADD CONSTRAINT "fk_retention_school name_id_latitude_longitude" FOREIGN KEY("school name", "id", "latitude", "longitude")
REFERENCES "root" ("school name", "id", "latitude", "longitude");

ALTER TABLE "sex" ADD CONSTRAINT "fk_sex_school name_id_latitude_longitude" FOREIGN KEY("school name", "id", "latitude", "longitude")
REFERENCES "root" ("school name", "id", "latitude", "longitude");


