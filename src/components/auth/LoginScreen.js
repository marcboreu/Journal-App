import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import validator from "validator";
import { loginGoogle, startLoginEmailPassword } from '../../actions/auth';
import { setError, removeError } from '../../actions/ui';
import { useForm } from '../../hooks/useForm';

export const LoginScreen = () => {

    const dispatch = useDispatch();

    const {msgError, loading} = useSelector( state => state.ui );


    const [ formValues, handleInputChange ] = useForm({
        email: 'marc@gmail.com',
        password: '12345678'
    });

    const { email, password } = formValues;

    const handleSubmitLogin = (e) => {
        e.preventDefault();
        if ( isFormValid() ) {
            dispatch( startLoginEmailPassword(email, password) );
        }
    }

    const handleSubmitLoginGoogle = () => {
        dispatch( loginGoogle() );
    }

    const isFormValid = () => {
        
        if ( !validator.isEmail(email) ) {
            dispatch( setError('Email is not valid') );
            return false;
        }

        dispatch( removeError()) ;
        return true;
    }

    return (
        <>
            <h3 className="auth__title">Login</h3>

            {   
                msgError &&
                (
                    <div className="auth__alert-error">
                        {msgError}
                    </div>
                )
            }

            <form onSubmit={ handleSubmitLogin }>
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
                    className="btn btn-primary btn-block"
                    type="submit"
                    disabled={ loading }
                >
                    <p className="btn-text">
                        <b>Login</b>
                    </p>
                </button>
                
                <div className="auth__social-networks">
                    <p>Login with social networks</p>
                </div>

                <div 
                    className="google-btn mb-5" 
                    onClick={handleSubmitLoginGoogle}
                >
                    <div className="google-icon-wrapper">
                        <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                    </div>
                    <p className="btn-text">
                        <b>Sign in with google</b>
                    </p>
                </div>

                <Link 
                    className="link link-centered"
                    to="/auth/register"
                >
                    Create new account
                </Link>

            </form>
        </>
    )
}
