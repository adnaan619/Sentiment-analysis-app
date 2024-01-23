const express = require('express');
const {
    createWorkout,
    getWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')
const router = express.Router();

//This is to get all workouts
router.get('/', getWorkouts);

//Get a single workout
router.get('/:id', getWorkout)

router.post('/', createWorkout)


router.delete('/:id', deleteWorkout);

router.patch('/:id', updateWorkout);



module.exports = router