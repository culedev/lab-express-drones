const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require('../models/Drone.model')

// GET "/drones" muestra todo el listado
router.get('/', async (req, res, next) => {
  // Iteration #2: List the drones
  try{
    
    const dronesList = await Drone.find()

    res.render('drones/list.hbs', {dronesList})

  }catch (err){
    next(err)
  }

  
});

router.get('/create', async (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form.hbs')
});

router.post('/create', async (req, res, next) => {
  // Iteration #3: Add a new drone
  const {name, propellers, maxSpeed } = req.body
  try {
    await Drone.create( {name, propellers, maxSpeed } )
    res.redirect('/') 
  } catch (error) {
      next(error)
  }
});

router.get('/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
