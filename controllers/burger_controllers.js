/**
 * Created by hansel.tritama on 11/18/17.
 */
var burgerModel = require("../models/burger.js");
const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
    burgerModel.selectAll("burgers", function (data) {
        var obj = {
            burgers:data
        };
        res.render("index", obj);
    });
});

router.post("/burger/insert", function (req, res) {
    burgerModel.insertOne("burgers", "burgerName", "devouredStatus", "date", req.body.inputted_burger_name, function (data) {
        res.redirect("/");
    });
});

router.put("/burger/:burgerID", function (req, res) {
    burgerModel.updateOne("burgers", "devouredStatus", req.params.burgerID, function (data) {
        res.redirect("/");
    });
});

module.exports = router;