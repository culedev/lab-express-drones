const express = require("express");
const router = express.Router();

// require the Drone model here
const Drone = require("../models/Drone.model");

// GET "/drones" muestra todo el listado
router.get("/", async (req, res, next) => {
  // Iteration #2: List the drones
  try {
    const dronesList = await Drone.find();

    res.render("drones/list.hbs", { dronesList });
  } catch (err) {
    next(err);
  }
});

router.get("/create", async (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form.hbs");
});

router.post("/create", async (req, res, next) => {
  // Iteration #3: Add a new drone
  const { name, propellers, maxSpeed } = req.body;
  try {
    await Drone.create({ name, propellers, maxSpeed });
    res.redirect("/");
  } catch (error) {
    next(error);
  }
});

router.get("/:id/edit", async (req, res, next) => {
  // Iteration #4: Update the drone
  const { id } = req.params;

  try {
    const droneById = await Drone.findById(id);

    res.render("drones/update-form", { droneById });
  } catch (err) {
    next(err);
  }
});

router.post("/:id/edit", async (req, res, next) => {
  // Iteration #4: Update the drone
  const { id } = req.params;
  const { name, propellers, maxSpeed } = req.body;

  try {
    await Drone.findByIdAndUpdate(id, { name, propellers, maxSpeed });

    res.redirect("/drones");
  } catch (err) {
    next(err);
  }
});

router.post("/:id/delete", async (req, res, next) => {
  // Iteration #5: Delete the drone
  const {id} = req.params

  try {
      await Drone.findByIdAndDelete(id)
      res.redirect("/drones")

  } catch (err) {
    next(err)
  }


});

module.exports = router;
