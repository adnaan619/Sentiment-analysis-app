import React, { useState } from 'react';
import { Container, Paper, Typography, TextField, Button, Grid } from '@mui/material';
import { PersonAddOutlined as PersonAddOutlinedIcon } from '@mui/icons-material';
import backgroundImg from '../images/signup.webp';
import { Link } from 'react-router-dom';
import {  useDispatch, useSelector } from 'react-redux';
import { register as registerAction } from '../redux/actions/authActions';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

function SignUpPage() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const { firstName, lastName, email, password, confirmPassword } = formData;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        switch (name) {
            case 'firstName':
                setErrors({ ...errors, firstName: value.length < 2 ? 'First name must be at least 2 characters long' : '' });
                break;
            case 'lastName':
                setErrors({ ...errors, lastName: value.length < 2 ? 'Last name must be at least 2 characters long' : '' });
                break;
            case 'email':
                setErrors({ ...errors, email: !/\S+@\S+\.\S+/.test(value) ? 'Email address is invalid' : '' });
                break;
            case 'password':
                setErrors({ ...errors, password: value.length < 6 ? 'Password must be at least 6 characters long' : '' });
                break;
            case 'confirmPassword':
                setErrors({ ...errors, confirmPassword: value !== password ? 'Passwords do not match' : '' });
                break;
            default:
                break;
        }
    };
    const dispatch = useDispatch();
    //const { error } = useSelector((state) => state.auth);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check for any validation errors
        if (Object.values(errors).some((error) => error !== '')) {
            console.log('Validation errors:', errors);
            return;
        }

        if (password !== confirmPassword) {
            console.log('Passwords do not match');
            return; // Don't dispatch action if passwords don't match
        } else {
            dispatch(registerAction({ firstName, lastName, email, password }));
        }
    };

    const navigate = useNavigate()

    const { isAuthenticated, error } = useSelector((state) => state.auth);

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/');
        }
    }, [isAuthenticated, navigate]);

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
                        <form style={{ width: '100%', marginTop: '10px' }} onSubmit={handleSubmit}>
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
                                        value={firstName}
                                        onChange={handleChange}
                                        autoFocus
                                        error={!!errors.firstName}
                                        helperText={errors.firstName}
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
                                        value={lastName}
                                        onChange={handleChange}
                                        error={!!errors.lastName}
                                        helperText={errors.lastName}
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
                                        value={email}
                                        onChange={handleChange}
                                        error={!!errors.email}
                                        helperText={errors.email}
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
                                        value={password}
                                        onChange={handleChange}
                                        error={!!errors.password}
                                        helperText={errors.password}
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
                                        value={confirmPassword}
                                        onChange={handleChange}
                                        error={!!errors.confirmPassword}
                                        helperText={errors.confirmPassword}
                                        style={{ marginBottom: '20px', fontFamily: 'Poppins' }}
                                    />
                                </Grid>
                            </Grid>
                            {error && (
                                <Typography style={{ color: 'red', textAlign: 'center', marginBottom: '20px' }}>
                                    {error}
                                </Typography>
                            )}
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
                                <Link to="/login" variant="body2" style={{ textDecoration: 'none', color: '#3f51b5', fontWeight: 'bold', fontFamily: 'Poppins', marginLeft: '5px' }}>
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
