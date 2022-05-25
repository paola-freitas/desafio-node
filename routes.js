const {Router} = require("express");

const routes = new Router();

function validateId(req, res, next){
    if(!req.body.id){
        return res.status(400).json({
            "error": true,
            "mensage": "ID is empty"
        });
    } else if (req.id.lenght <= 16){
        return res.status(400).json({
            "error": true,
            "mensage": "ID too long"
        });
    }
    next();
}

routes.post("/postproviders", (res, req) =>{ //create
    const {name} = req.body;
    DB.provider.push(name);
    return res.json(DB.provider.name);
});

routes.get("/getproviders", (req, res) => { //research
    res.statusCode = 200;
    res.json(DB.provider);
});

routes.put("/putproviders/:provider", (req, res) => { //update
    const {id} = req.params;
    DB.provider[id] = 0;
    return res.json(DB.provider.id);
});

routes.delete("/deleteproviders/:provider", (req, res) =>{ //delete
    const {id} = req.params;
    DB.provider.splice(id, 1); //deleta id na posição 1
    return res.json(DB.provider);
});

module.exports = routes;