import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../contexts/useAuth';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
const Login = () => {
    const { googleSignIn } = useAuth();
    const location = useLocation();
    // console.log('Came from', location.state?.from);
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';

    const [error, setError] = useState('');
    const [msg, setMsg] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    const auth = getAuth();

    const handleGoogleLogin = () => {
        googleSignIn()
            .then(result => {
                history.push(redirect_url);
            })
    }

    return (
        <div>
            <h1>This is Login</h1>
            <button onClick={handleGoogleLogin} className="btn btn-warning">Login with GOOGLE</button>
        </div>
    );
};

export default Login;