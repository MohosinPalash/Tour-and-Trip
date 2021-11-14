import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../contexts/useAuth';
import background from '../../../images/basic/login_bg.jpg';
import logo from '../../../images/basic/logo.png';
import './Login.css'
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
        <div style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', height: '650px', marginLeft: 'auto' }}>

            <div className="banner-grid">
                <div>

                </div>
                <div className="login-info">
                    <img src={logo} style={{ height: '250px', width: '250px' }} />
                    <h5 style={{ padding: '0px 20px' }}>Warning: To get our services, you must login with us. <br /> No complexity, No late! <br /> Just tap on the below button and<br />  Sign in with GOOGLE</h5>
                    <button onClick={handleGoogleLogin} className="btn btn-danger"><strong>Sign in with GOOGLE</strong></button>
                </div>
            </div>


        </div>
    );
};

export default Login;