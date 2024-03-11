import React from "react";
import { Fragment } from "react";
import { Container, Grid, Typography, Box } from "@mui/material/";
import  Logo  from '../images/logo.webp'; 

function Footer() {
  return (
    <Fragment>
      <Container maxWidth={false} disableGutters>
        <Grid
          container
          sx={{
            backgroundColor: "#4361ee",
            height: "50px",
            justifyContent: "center",
            alignItems: "center",
            position: "fixed",
            bottom: 0,
            padding: '0 20px',
          }}
        >
          <Grid item 
            xs={12}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            {/* Optional Logo */}
            <Box marginRight={1} display="flex" alignItems="center">
              <img src={Logo} style={{ fill: '#ffffff', marginRight: 8 }} width="24" height="24" />
            </Box>

            <Typography
              variant="body2" 
              sx={{
                fontFamily: "Poppins",
                color: "#ffffff",
                fontWeight: 400,
                textAlign: 'center'
              }}
            >
              Sentiment X by Adnaan Fuard | 2024 ©
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
}

export default Footer;