const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        type: String,
        set: (v) => v === ""
            ? "https://unsplash.com/photos/a-woman-standing-on-a-rocky-beach-next-to-the-ocean-VJRruV21Fa8"
            : v,
    },
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.export = Listing;