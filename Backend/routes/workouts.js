const express = require('express');
const Workout = require('../models/WorkoutModel')

const router = express.Router();

//This is to get all workouts
router.get('/', (req, res) => {
    res.json({msg: 'Get all workouts'})
});

//Get a single workout
router.get('/:id', (req, res) => {
    res.json({msg: 'Get a single workout'})
})

router.post('/', async (req, res) => {
    const {title, load, reps} = req.body

    try{
        const workout = await Workout.create({title, load, reps});
        res.status(200).json(workout)
    } catch(error){
        res.status(400).json({error: error.message})
    }

    res.json({msg: "Post a new workout"})
})

router.delete('/:id', (req, res) => {
    res.json({msg: 'Delete a workout'})
});

router.patch('/:id', (req, res) => {
    res.json({msg:'Update a new workout' })
})

module.exports = router