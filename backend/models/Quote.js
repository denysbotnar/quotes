const mongoose = require("mongoose")

const quoteSchema = new mongoose.Schema({
    id: String,
    text: {
        type: String,
        minlength: 3,
        lowercase: true,
        required: [true, "Please enter a quote text"],
    },
    author: {
        type: String,
        lowercase: true,
        required: [true, "Please enter an author name"],
    }
})

const Quote = mongoose.model("Quote", quoteSchema)

module.exports = Quote