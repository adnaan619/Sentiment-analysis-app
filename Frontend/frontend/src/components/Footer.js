import React from "react";
import { Fragment } from "react";
import { Container, Grid, Typography } from "@mui/material/";

function Footer() {
  return (
    <Fragment>
      <Container maxWidth={false} disableGutters>
        <Grid
          container
          style={{
            display: "flex",
            backgroundColor: "#4361ee",
            height: "50px",
            justifyContent: "center",
            flexWrap: "nowrap",
            alignItems: "center",
            alignContent: "center",
            position: "fixed",
            bottom: 0,
          }}
        >
          <Grid
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Typography
              style={{
                fontFamily: "Poppins",
                color: "#ffffff",
                fontSize: "18px",
                fontWeight: 400,
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
