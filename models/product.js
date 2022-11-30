    //Name
    //email 
    //Image 
    //price 
    //discountPrice
    // ratings
    // totalReviews

    const mongoose = require('mongoose');
    const productSchema = new mongoose.Schema({
        Name: {
            type: String,
            required: true
        },
        Image: {
            type: String,
        },
        price: {
            type: Number,
            required: true,
        },
        discountPrice: {
            type: Number,
            required: true,
        },
        ratings: {
            type: Number,
            required: true,
        },
        totalReviews: {
            type: Number,
            required: true,
        }
    })
    
    module.exports = mongoose.model('Product',productSchema)