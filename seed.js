const pool = require('./connection');
const fs = require('fs');

let chefsData = JSON.parse(fs.readFileSync("./data/chefs.json", "utf-8")).map((el) => {
    const { id, fullName, birthDate, gender, city } = el
    return `(${id}, '${fullName}', '${birthDate}', '${gender}', '${city}')`
}).join(", \n")

// console.log(chefsData);

let recipesData = JSON.parse(fs.readFileSync("./data/recipes.json", "utf-8")).map((el) => {
    const { id, name, duration, category, createdDate, notes, imageUrl, totalVote, ChefId } = el
    return `(${id}, '${name}', '${duration}', '${category}', '${createdDate}', '${notes}', '${imageUrl}', '${totalVote}', '${ChefId}')`
}).join(", \n")

// console.log(recipesData);

let qChefs = `
INSERT INTO "Chefs" ("id", "fullName", "birthDate", "gender", "city")
VALUES ${chefsData}
`
let qRecipes = `
INSERT INTO "Recipes" ("id", "name", "duration", "category", "createdDate", "notes", "imageUrl", "totalVote", "ChefId")
VALUES ${recipesData}
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