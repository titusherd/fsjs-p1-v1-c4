const pool = require('../connection');
const Factory = require('./class');

class Model {
    static readChefs(cb) {
        let q = `
        SELECT * FROM "Chefs" c
        ORDER BY "fullName" 
        `

        pool.query(q, (err, res) => {
            if (err) {
                cb(err)
            } else {
                cb(null, Factory.createBulkChef(res.rows))
            }
        })
    }

}

//test
Model.readChefs((err,res) => {
    if(err){
        console.log(err);
    } else {
        console.log(res);
    }
})

module.exports = Model