const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Defines structure
const quoteSchema = new Schema({
    text:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:false
    }
}, { timestamps:true });

//model name should be singular of the collection name we created
//on mongo db website
const Quote = mongoose.model('Quote', quoteSchema);

module.exports = Quote;