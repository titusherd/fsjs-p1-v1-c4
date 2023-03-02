const pool = require('./connection');

let qChefs = `
CREATE TABLE "Chefs" (
    "id" SERIAL PRIMARY KEY,
    "fullName" VARCHAR(120) NOT NULL,
    "birthDate" DATE NOT NULL, 
    "gender" VARCHAR(6) NOT NULL, 
    "city" VARCHAR(20) NOT NULL
)
`

let qRecipes = `
CREATE TABLE "Recipes" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(100),
    "duration" INTEGER, 
    "category" VARCHAR(10),
    "createdDate" DATE, 
    "notes" TEXT, 
    "imageUrl" VARCHAR(50), 
    "totalVote" INTEGER,
    "ChefId" INTEGER NOT NULL REFERENCES "Chefs"("id")
)
`

pool.query(qChefs, (err, res) => {
    if (err) {
        console.log(err);
    } else {
        console.log(res);
        pool.query(qRecipes, (err, res) => {
            if (err) {
                console.log(err);
            } else {
                console.log(res);
            }
        })
    }
})