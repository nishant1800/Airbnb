const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");

const MONGO_URL = "127.0.0.1:27017/wanderlust";

main
    .then(() => {
        console.log("connected to DB");
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect(MONGO_URL);
};

app.get("/", (req, res) => {
    res.send("Hii I am root");
});

app.get("/testListing", async (req, res) => {
    let sampleListing = new Listing({
        title: "My new villa",
        description: "By the beach",
        price: 1200,
        location: "Calangure, Goa",
        country: "India",
    });

    await sampleListing.save();
    console.log("sample was saved");
    res.send("successful testing");
});

app.listen(8080, () => {
    console.log("app is listening on port 8080");
});