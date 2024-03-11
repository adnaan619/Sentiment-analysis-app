import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../redux/actions/authActions';
import { Container, Paper, Typography, TextField, Button, Grid } from '@mui/material';
import { LockOutlined as LockOutlinedIcon } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const authError = useSelector(state => state.auth.error);
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

    const onSubmit = async e => {
        e.preventDefault();
        dispatch(login(email, password));
    };

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/'); // or the path you want to redirect to after login
        }
    }, [isAuthenticated, navigate]);

    return (
        <Container component="main" maxWidth="md" style={{ marginTop: '5%', }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Paper elevation={6} style={{ padding: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center', fontFamily: 'Poppins' }}>
                        <LockOutlinedIcon style={{ margin: '20px', backgroundColor: '#3f51b5', color: 'white', borderRadius: '50%', padding: '15px', fontSize: '40px' }} />
                        <Typography component="h1" variant="h5" style={{ marginBottom: '20px', fontFamily: 'Poppins' }}>
                            Sign in
                        </Typography>
                        <form onSubmit={onSubmit} style={{ width: '100%', marginTop: '20px' }}>

                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                style={{ marginBottom: '20px', fontFamily: 'Poppins' }}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={password} // Bind state value
                                onChange={e => setPassword(e.target.value)}
                                style={{ marginBottom: '20px', fontFamily: 'Poppins' }}
                            />
                            {authError && (
                                <Typography color="error" style={{ margin: '10px 0' }}>
                                    {authError.msg || 'An error occurred'} 
                                </Typography>
                            )}
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                style={{ marginBottom: '20px', padding: '10px 0', textTransform: 'none', fontSize: '16px', fontFamily: 'Poppins' }}
                            >
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2" style={{ textDecoration: 'none', color: '#3f51b5', fontWeight: 'bold', fontFamily: 'Poppins', cursor: 'pointer' }}>
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link to="/sign-up" variant="body2" style={{ textDecoration: 'none', color: '#3f51b5', fontWeight: 'bold', fontFamily: 'Poppins', cursor: 'pointer' }}>
                                        {"Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </form>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} style={{ background: 'linear-gradient(45deg, #3f51b5 30%, #5c6bc0 90%)', color: 'white', padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center', fontFamily: 'Poppins' }}>
                    <Typography variant="h4" style={{ fontWeight: 'bold', marginBottom: '20px', fontFamily: 'Poppins' }}>SentimentX</Typography>
                    <Typography variant="body1" style={{ lineHeight: '1.5em', fontFamily: 'Poppins' }}>
                        Discover the voice of your customers with our cutting-edge sentiment analysis.
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
}

export default LoginPage;
