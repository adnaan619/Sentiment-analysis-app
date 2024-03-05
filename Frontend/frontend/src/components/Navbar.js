import React from "react";
import { Typography, Container, Grid, Button, Box } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle"; 
import { Fragment } from "react";

function Navbar() {
  return (
    <Fragment>
      <Container
        disableGutters
        maxWidth={false}
        style={{
          display: "flex",
          backgroundColor: "#4361ee",
          height: "80px", // Increased height
          position: "sticky", // Make header sticky
          top: 0, // Stick to the top of the page
          zIndex: 1000, // Ensure it stays on top of other content
        }}
      >
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          style={{ height: "100%" }}
        >
          <Grid
            item
            xs={12}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h5"
              fontWeight="bold"
              style={{
                color: "#ffffff",
                fontFamily: "Poppins",
                marginLeft: "20px", // Adjusted from marginLeft for centering purposes
              }}
            >
              SentimentX
            </Typography>
            <Box display="flex" flexGrow={1} justifyContent="center">
              {" "}
              {/* Change for spacing */}
              <Button
                style={{
                  color: "#ffffff",
                  textTransform: "none",
                  marginLeft: "0px",
                  marginRight: "200px",
                }}
              >
                Home
              </Button>
              <Button
                style={{
                  color: "#ffffff",
                  textTransform: "none",
                  marginLeft: "100px",
                  marginRight: "100px",
                }}
              >
                Support
              </Button>
              <Button
                style={{
                  color: "#ffffff",
                  textTransform: "none",
                  marginLeft: "190px",
                  marginRight: "20px",
                }}
              >
                Terms & Conditions
              </Button>
            </Box>
            <Box display="flex" alignItems="center">
              <Button
                style={{
                  textTransform: "none",
                  backgroundColor: "#000000", // Black background for logout
                  color: "#ffffff",
                  borderRadius: "20px", // Rounded corners
                  marginRight: "20px", // Adjust spacing
                  marginLeft: "20px", // Ensure spacing from nav links
                }}
              >
                Log Out
              </Button>
              <AccountCircleIcon
              style={{ color: "#ffffff", marginRight: "20px" }}
            />{" "}
              {/* Adjusted for spacing */}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
}

export default Navbar;
