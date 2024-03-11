import React from 'react';
import { Container, Paper, Typography, Button, Grid } from '@mui/material';

function TermsAndConditions() {
  return (
    <Container component="main" maxWidth="lg" style={{ marginTop: '2%', marginBottom: '2%' }}>
      <Grid container justifyContent="center">
        <Grid item xs={12}>
          <Paper elevation={6} style={{ padding: '40px', fontFamily: 'Poppins', borderRadius: '8px', lineHeight: '1.6' }}>
            <Typography variant="h4" style={{ marginBottom: '20px', fontFamily: 'Poppins', fontWeight: '600', color: '#333' }}>
              Terms and Conditions
            </Typography>
            <Typography variant="h6" style={{ marginBottom: '15px', fontFamily: 'Poppins', fontWeight: '500' }}>
              Welcome to SentimentX!
            </Typography>
            <Typography variant="body1" style={{ marginBottom: '15px', fontFamily: 'Poppins' }}>
              These terms and conditions outline the rules and regulations for the use of SentimentX's Website, located at SentimentX.com.
            </Typography>
            <Typography variant="body1" style={{ marginBottom: '15px', fontFamily: 'Poppins' }}>
              By accessing this website we assume you accept these terms and conditions. Do not continue to use SentimentX if you do not agree to take all of the terms and conditions stated on this page.
            </Typography>
            <Typography variant="body1" style={{ marginBottom: '15px', fontFamily: 'Poppins' }}>
              The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company's terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client's needs in respect of provision of the Company's stated services, in accordance with and subject to, prevailing law of [Jurisdiction]. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.
            </Typography>
            <Typography variant="h6" style={{ marginBottom: '15px', fontFamily: 'Poppins', fontWeight: '500' }}>
              Cookies
            </Typography>
            <Typography variant="body1" style={{ marginBottom: '15px', fontFamily: 'Poppins' }}>
              We employ the use of cookies. By accessing SentimentX, you agreed to use cookies in agreement with the SentimentX's Privacy Policy.
            </Typography>
            <Typography variant="body1" style={{ marginBottom: '15px', fontFamily: 'Poppins' }}>
              Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.
            </Typography>
            <Typography variant="h6" style={{ marginBottom: '15px', fontFamily: 'Poppins', fontWeight: '500' }}>
              License
            </Typography>
            <Typography variant="body1" style={{ marginBottom: '15px', fontFamily: 'Poppins' }}>
              Unless otherwise stated, SentimentX and/or its licensors own the intellectual property rights for all material on SentimentX. All intellectual property rights are reserved. You may access this from SentimentX for your own personal use subjected to restrictions set in these terms and conditions.
            </Typography>
            <Typography variant="body1" style={{ marginBottom: '15px', fontFamily: 'Poppins' }}>
              You must not: Republish material from SentimentX; Sell, rent or sub-license material from SentimentX; Reproduce, duplicate or copy material from SentimentX; Redistribute content from SentimentX.
            </Typography>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}> {/* This div aligns the button to the right */}
              <Button variant="contained" color="primary" href="#" style={{ marginTop: '20px', fontFamily: 'Poppins', textTransform: 'none' }}>
                Back to Home
              </Button>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default TermsAndConditions;
