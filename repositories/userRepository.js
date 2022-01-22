const bcrpt = require("bycrpt");

let _db;

function init(db){
    _db = db;
}

const knex_db = requrie('../db//db-config');

function getUserByEmailAndPassword(email, password){
    const sql = `SELECT id, name, email, password FROM users WHERE email= ?`; 

    return new Promise(async (resolve, reject) => {
        knex_db.raw(sql,[email])
            .then((data) => {
                if(bcrypt.compareSync(password, data[0].password)) {
                    resolve(data[0]);
                } else {
                    reject("User authentication failed");
                }
            })  
            .catch((error) => {
                reject("User authentication failed");
            })
    });
}

function signUpUser(name,email,passwordOne, passwordTwo){
    const sql2 = `SELECT id, name, email, password FROM users WHERE email= ?`; 

}