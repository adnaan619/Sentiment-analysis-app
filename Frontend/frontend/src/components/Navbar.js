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
          height: "80px",
          position: "sticky",
          top: 0,
          zIndex: 1000,
          boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)', // Added shadow for depth
        }}
      >
        <Grid
          container
          alignItems="center"
          justifyContent="space-between" // Changed for space between
          style={{ height: "100%", paddingLeft: '20px', paddingRight: '20px' }} // Added padding for content inside navbar
        >
          <Typography
            variant="h5"
            fontWeight="bold"
            style={{
              color: "#ffffff",
              fontFamily: "Poppins",
              flexGrow: 1, // Allows the logo to take necessary space
            }}
          >
            SentimentX
          </Typography>
          <Box display="flex" justifyContent="space-between" flexGrow={2}> {/* Adjusted layout */}
            <Button
              style={{
                color: "#ffffff",
                textTransform: "none",
                '&:hover': { // Add hover effect
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                },
              }}
            >
              Home
            </Button>
            <Button
              style={{
                color: "#ffffff",
                textTransform: "none",
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                },
              }}
            >
              Support
            </Button>
            <Button
              style={{
                color: "#ffffff",
                textTransform: "none",
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                },
                marginRight: '100px'
              }}
            >
              Terms & Conditions
            </Button>
          </Box>
          <Box display="flex" alignItems="center">
            <Button
              style={{
                textTransform: "none",
                backgroundColor: "#ffffff",
                color: "#4361ee",
                borderRadius: "20px",
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                },
              }}
            >
              Log Out
            </Button>
            <AccountCircleIcon style={{ color: "#ffffff", marginLeft: '10px' }} />
          </Box>
        </Grid>
      </Container>
    </Fragment>
  );
}

export default Navbar;
