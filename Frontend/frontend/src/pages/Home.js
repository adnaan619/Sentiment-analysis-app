import Grid from '@mui/material/Grid';
import ReviewForm from "../components/ReviewForm";



const Home = () => {

  return (
    <div className="home">
      <Grid container style={{marginTop: '130px'}}>
        <ReviewForm />
      </Grid>
    </div>
  );
};

export default Home;