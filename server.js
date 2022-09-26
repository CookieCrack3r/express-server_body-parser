"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const IP = "127.0.0.1";
const PORT = 8081;

let app = express();

app.use(express.static("public"));

let heroes = ["Jessica Jones","Luke Cage","Odin"];

app.use(bodyParser.urlencoded({ extended: false }));

app.post("/new", (req,res) => {
    heroes.push(req.body.herofield);
    res.redirect("/");
});

app.get("/heroes", (req,res) => {
    res.send(heroes);
});


app.listen(PORT,IP, () => {
    console.log(`Server is rumming at http://${IP}:${PORT}`);
});