const express = require("express");
const app = express();
const mongoose = require("mongoose");

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

app.listen(8080, () => {
    console.log("app is listening on port 8080");
});