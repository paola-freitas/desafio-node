const { ConnectionCreatedEvent } = require("mongodb");
const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const Provider = new mongoose.Schema({
    id: {type: String, required: true},
    name: {type: String, required: true},
    company: {type: String, required: true},
    createat: {type: Date, required: true},
    amountproducts: {type: Number, required: true}
},
{
    Timestamp: true,
});

Provider.plugin(mongoosePaginate);

module.exports = mongoose.model("Provider", Provider);