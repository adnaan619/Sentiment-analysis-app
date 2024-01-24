import React from "react";
import { Link } from "react-router-dom";
import { Typography, Container, Grid, Button } from "@mui/material";

function Navbar() {
  return (
    <Container
      disableGutters
      maxWidth={false}
      style={{ display: "flex", backgroundColor: "#4361ee", height: "100px" }}
    >
      {/* <Link to="/"> */}
      <Grid
        container
        xs={12}
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <Grid
          xs={8}
          style={{
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <Typography
            variant="h2"
            fontWeight="bold"
            style={{
              color: "#ffffff",
              fontFamily: "Poppins",
              fontSize: "40px",
              marginLeft: "120px",
            }}
          >
            SentimentX
          </Typography>
        </Grid>
        {/* </Link> */}
        <Grid
          xs={4}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            sx={{
              width: "100px",
              height: "30px",
              borderRadius: "15px",
              backgroundColor: "#2b35af",
              color: "#ffffff",
              marginRight: "10px",
              "&:hover": {
                backgroundColor: "#12086F",
              },
            }}
          >
            login
          </Button>
          <Button
            sx={{
              width: "100px",
              height: "30px",
              borderRadius: "15px",
              backgroundColor: "#2b35af",
              color: "#ffffff",
              marginLeft: "5x",
              "&:hover": {
                backgroundColor: "#12086F",
              },
              marginRight: "20px",
            }}
          >
            Signup
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Navbar;
