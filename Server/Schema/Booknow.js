const mongoose = require("mongoose");

const mongooseSchema = new mongoose.Schema({


    name: {
        type: String,
        require: true
    },

    email: {
        type: String,
        require: true
    },

    phone: {
        type: Number,
        require: true
    },

    address: {
        type: String,
        require: true
    },

    service: {
        type: String,
        require: true
    }
})

const BooknowModel = mongoose.model("Booknow", mongooseSchema);

module.exports = BooknowModel