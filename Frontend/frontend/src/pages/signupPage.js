import React from 'react';
import { Container, Paper, Typography, TextField, Button, Grid, Link } from '@mui/material';
import { PersonAddOutlined as PersonAddOutlinedIcon } from '@mui/icons-material';
import backgroundImg from '../images/signup.webp';

function SignUpPage() {
    return (
        <Container component="main" maxWidth="lg" style={{ marginTop: '2%' }}> {/* Reduce top margin */}
            <Grid container spacing={2} alignItems="center" style={{ minHeight: '80vh' }}> {/* Adjust minimum height for less extension downwards */}
            <Grid item xs={12} md={7} style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', height: '600px' }}>
                    <img src={backgroundImg} alt="Sentiment Analysis" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px', opacity: '0.8' }} />
                    <div style={{ position: 'absolute', color: 'white', padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', fontFamily: 'Poppins', textAlign: 'center' }}>
                        <Typography variant="h4" style={{ fontWeight: 'bold', marginBottom: '15px', fontFamily: 'Poppins' }}>Join SentimentX</Typography>
                        <Typography variant="body1" style={{ lineHeight: '1.5em', fontFamily: 'Poppins', marginBottom: '15px' }}>Empower your business with real-time customer sentiment analysis.</Typography>
                        <Typography variant="body2" style={{ lineHeight: '1.2em', fontFamily: 'Poppins' }}>Understand your customers better and improve your services.</Typography>
                    </div>
                </Grid>
                <Grid item xs={12} md={5}>
                    <Paper elevation={6} style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', fontFamily: 'Poppins', borderRadius: '8px', height: 'auto' }}> {/* Adjusted for dynamic height */}
                        <PersonAddOutlinedIcon style={{ margin: '20px', backgroundColor: '#3f51b5', color: 'white', borderRadius: '50%', padding: '15px', fontSize: '40px' }} />
                        <Typography component="h1" variant="h5" style={{ marginBottom: '15px', fontFamily: 'Poppins', fontWeight: '600' }}>Create Account</Typography> {/* Reduce bottom margin */}
                        <form style={{ width: '100%', marginTop: '10px' }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        autoComplete="fname"
                                        name="firstName"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="firstName"
                                        label="First Name"
                                        autoFocus
                                        style={{ marginBottom: '20px', fontFamily: 'Poppins' }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="lastName"
                                        label="Last Name"
                                        name="lastName"
                                        autoComplete="lname"
                                        style={{ marginBottom: '20px', fontFamily: 'Poppins' }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                        style={{ marginBottom: '20px', fontFamily: 'Poppins' }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="new-password"
                                        style={{ marginBottom: '20px', fontFamily: 'Poppins' }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        name="confirmPassword"
                                        label="Confirm Password"
                                        type="password"
                                        id="confirmPassword"
                                        autoComplete="new-password"
                                        style={{ marginBottom: '20px', fontFamily: 'Poppins' }}
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                style={{ marginTop: '20px', padding: '10px 0', textTransform: 'none', fontSize: '16px', fontFamily: 'Poppins' }}
                            >
                                Sign Up
                            </Button>
                            <Typography style={{ marginTop: '20px', fontFamily: 'Poppins', textAlign: 'center' }}>
                                Already have an account?
                                <Link href="#" variant="body2" style={{ textDecoration: 'none', color: '#3f51b5', fontWeight: 'bold', fontFamily: 'Poppins', marginLeft: '5px' }}>
                                    Sign in
                                </Link>
                            </Typography>
                        </form>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
}

export default SignUpPage;
