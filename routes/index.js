const express = require("express");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

const droneRoutes = require("./drones")
router.use('/drones', droneRoutes)

module.exports = router;
