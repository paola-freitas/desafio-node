const {Router} = require("express");
const Validation = require("./app/Middlewaves/validation");
const ProviderController = require("./app/Controllers/ProviderController")


const routes = new Router();

routes.get("/", Validation, ProviderController.readProviders);

routes.post("/createprovider", ProviderController.createProvider);

routes.patch("/updateproviders/:newId", ProviderController.updateProviders);

routes.delete("/deleteproviders/:id", ProviderController.deleteProviders);

module.exports = routes;