const mongoose = require("mongoose");

const FavoriteSchema = new mongoose.Schema({   
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required: true,
    },
    movieId: {
        type: String,
        required: true,
    },
    title: {
        type:String,
        required: true,
    },
    runtime: {
        type:String,
    },
    image: {
        type:String,
    }
})

const Favorite = mongoose.model('Favorite',FavoriteSchema);

module.exports = Favorite;