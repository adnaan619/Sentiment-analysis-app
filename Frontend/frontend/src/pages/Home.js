import Grid from '@mui/material/Grid';
import ReviewForm from "../components/ReviewForm";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {

  return (
    <div className="home">
      <Navbar/>
      <Grid container style={{marginTop: '130px'}}>
        <ReviewForm />
      </Grid>
      <Footer/>
    </div>
  );
};

export default Home;