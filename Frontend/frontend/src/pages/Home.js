import { useEffect } from "react";
// import { useWorkoutsContext } from "../Hooks/useWorkoutsContext";
import Grid from '@mui/material/Grid';
import ReviewTextbox from "../components/ReviewForm";
import UserFeedback from "../components/UserFeedback";


// components
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";

const Home = () => {
//   const { workouts, dispatch } = useWorkoutsContext();

//   useEffect(() => {
//     const fetchWorkouts = async () => {
//       const response = await fetch("/api/workouts");
//       const json = await response.json();

//       if (response.ok) {
//         dispatch({ type: "SET_WORKOUTS", payload: json });
//       }
//     };

//     fetchWorkouts();
//   }, [dispatch]);

  return (
    <div className="home">
      {/* <div className="workouts">
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails workout={workout} key={workout._id} />
          ))}
      </div>
      <WorkoutForm /> */}
      <Grid container style={{marginTop: '130px'}}>
        <ReviewTextbox />
      </Grid>
    </div>
  );
};

export default Home;