const {Router} = require("express");
const Validation = require("./app/Middlewaves/validation");
const ProviderController = require("./app/Controllers/ProviderController")


const routes = new Router();

routes.get("/", Validation, ProviderController.read);

routes.post("/createprovider", ProviderController.createProvider);

routes.put("/putproviders/:provider", ProviderController.read);

routes.delete("/deleteproviders/:id", ProviderController.read);

module.exports = routes;