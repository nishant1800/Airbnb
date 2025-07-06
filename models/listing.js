const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listing = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: String,
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.export = Listing;