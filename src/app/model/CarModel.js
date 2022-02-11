const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Car = new Schema({
    // // author: ObjectId,
    // _id: { type: mongoose.ObjectId },
    brand: String,
    model: String,
    mfg: String,
    trim: String,
    price: String,
    engine: String,
    gearbox: String,
    extecolor: String,
    intecolor: String,
    fueltype: String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});


module.exports = mongoose.model('car', Car);