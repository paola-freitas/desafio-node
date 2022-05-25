const express = require("express");
const routes = require("routes");

class App {
    constructor(){
        this.app = express();
        this.routes();
    }

    routes(){
        this.app.use(routes);
    }
}

module.exports = new App().app;




/*var DB = {
    provider: {
        id: "BRCRD0028MG2ROML",
        name: "João",
        company: "4intelligence",
        create_at: "2022-03-02T18:13:16",
        amount_products: 242
    }    
}*/

