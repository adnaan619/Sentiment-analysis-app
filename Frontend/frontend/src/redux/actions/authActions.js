import axios from 'axios';
import {
    USER_LOADING,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
} from '../actionType'

// Set headers and token for requests
const config = {
    headers: {
        'Content-Type': 'application/json',
    },
};

// Check token and load user
export const loadUser = () => async (dispatch, getState) => {
    dispatch({ type: USER_LOADING });
    try {
        const res = await axios.get('/api/auth/user', tokenConfig(getState()));
        dispatch({
            type: USER_LOADED,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: AUTH_ERROR,
        });
    }
};

// Register User
export const register = ({ firstName, lastName, email, password }) => async dispatch => {
    const body = JSON.stringify({ firstName, lastName, email, password });
    try {
        const res = await axios.post('/api/users/register', body, config);
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: REGISTER_FAIL,
            payload: err.response ? err.response.data : { msg: 'Error occurred' },
        });
    }
};

// Login User
export const login = (email, password) => async dispatch => {
    const body = JSON.stringify({ email, password });
    try {
        const res = await axios.post('/api/auth/login', body, config);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: LOGIN_FAIL,
            payload: err.response ? err.response.data : { msg: 'Error occurred' },
        });
    }
};

// Logout User
export const logout = () => dispatch => {
    dispatch({
        type: LOGOUT_SUCCESS,
    });
};

// Setup config/headers and token
const tokenConfig = getState => {
    // Get token from the state
    const token = getState().auth.token;
    // Headers
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    // If token, add to headers
    if (token) {
        config.headers['x-auth-token'] = token;
    }
    return config;
};
