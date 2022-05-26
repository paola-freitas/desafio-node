const mongoose = require('mongoose');

class Database {
    constructor(){
        this.mongoDataBase();
    }

    mongoDataBase(){
        this.connection = mongoose.connect('mongodb://localhost/node').then(() => {
            console.log("Connection OK!")
        }).catch((error) => {
            console.log(`Error: ${error}`);
        });
    }
}

module.exports = new Database();