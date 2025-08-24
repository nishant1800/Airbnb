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
        default: "https://unsplash.com/photos/man-sit-in-front-projector-screen-MYlCex1M7Ok",
        set: (v) => v === "" ? "https://unsplash.com/photos/man-sit-in-front-projector-screen-MYlCex1M7Ok" : v,
    },
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
