const express = require('express');

const router = express.Router();

//This is to get all workouts
router.get('/', (req, res) => {
    res.json({msg: 'Get all workouts'})
});

//Get a single workout
router.get('/:id', (req, res) => {
    res.json({msg: 'Get a single workout'})
})

router.post('/', (req, res) => {
    res.json({msg: "Post a new workout"})
})

router.delete('/:id', (req, res) => {
    res.json({msg: 'Delete a workout'})
});

router.patch('/:id', (req, res) => {
    res.json({msg:'Update a new workout' })
})

module.exports = router