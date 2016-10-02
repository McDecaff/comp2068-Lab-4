/*
index.js
Nicholas Metcalf
Family Node Page
Routing instructions for different pages
*/
var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Family Node Site", message: "Hey" });
});

/* GET Nick page. */
router.get("/nick", function(req, res, next) {
  res.render("person", { title: "Nicholas P. Metcalf", message: "Nick is me. I am Nick. Computer programming student, " +
  "amateur artist and musician. White collar skillset, blue collar attitude. Magnanimous author of this site." });
});

/* GET Lisa page. */
router.get("/lisa", function(req, res, next) {
  res.render("person", { title: "Lisa Specht", message: "Mother, grandmother and customer service professional. Knit you a lovely scarf," +
  " then turn around and kick your ass at video games." });
});

/* GET Donald page. */
router.get("/donald", function(req, res, next) {
  res.render("person", { title: "Donald Specht", message: "Father. Grandfather. Avid hunter. Man of the world. From military training to construction work " +
  "to nuisance trapping, he's done it all. These days you'll find him hard at work training his show hound, Jazz." });
});

/* GET Nick page. */
router.get("/tyler", function(req, res, next) {
  res.render("person", { title: "Tyler Alexandria", message: "Older sister and mother of one lovely 5 year old. Professionally " +
  "trained in culinary arts and self trained in visual arts. Sci-fi and Fantasy fanatic." });
});

/* GET Nick page. */
router.get("/shannon", function(req, res, next) {
  res.render("person", { title: "Shannon Jennie", message: "Younger sister and apprentice stylist. Lover of the horror genre and " +
  "Kurt Cobain's biggest fan. Easy to scare and ripe for practical jokes, but always a good sport." });
});
module.exports = router;
