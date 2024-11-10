const {schema, default: mongoose} = require("mongoose") ;

const OrderSchema = new mongoose.Schema({
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    mode: String
}) ;

module.exports = { OrderSchema } ;