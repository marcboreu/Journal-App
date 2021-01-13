import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { startLoginEmailPassword, startGoogleLogin, startGitHubLogin, startFacebookLogin } from '../../actions/auth';

export const LoginScreen = () => {

    const dispatch = useDispatch();
    const { loading } = useSelector( state => state.ui );

    const [ formValues, handleInputChange ] = useForm({
        email: '',
        password: ''
    });

    const { email, password } = formValues;

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch( startLoginEmailPassword( email, password ) );
    }

    const handleGoogleLogin = () => {
        dispatch( startGoogleLogin() );
    }

    const handleFacebookLogin = () => {
        dispatch( startFacebookLogin() );
    }
    const handleGitHubLogin = () => {
        dispatch( startGitHubLogin() );
    }


    return (
        <>
            <h3 className="auth__title">Login</h3>

            <form 
                onSubmit={ handleLogin }
                className="animate__animated animate__fadeIn animate__faster"
            >

                <input 
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                />

                <input 
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    value={ password }
                    onChange={ handleInputChange }
                />


                <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    disabled={ loading }
                >
                    Login
                </button>

                
                <div className="auth__social-networks">
                    <p>Login with social networks</p>

                    <div 
                        className="google-btn"
                        onClick={ handleGoogleLogin }
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                    <div 
                        className="google-btn"
                        onClick={ handleFacebookLogin }
                    >
                        <div className="google-icon-wrapper">
                            <img className="facebook-icon" src="https://img1.freepng.es/20180319/iyw/kisspng-facebook-logo-social-media-computer-icons-icon-facebook-drawing-5ab02fb69f99c4.9538101315214959906537.jpg" alt="facebook button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with facebook</b>
                        </p>
                    </div>
                    <div 
                        className="google-btn"
                        onClick={ handleGitHubLogin }
                    >
                        <div className="google-icon-wrapper">
                            <img className="github-icon" src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-github-1.png" alt="github button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with github</b>
                        </p>
                    </div>
                </div>

                <Link 
                    to="/auth/register"
                    className="link message"
                >
                    Create new account    
                </Link>

            </form>
        </>
    )
}
