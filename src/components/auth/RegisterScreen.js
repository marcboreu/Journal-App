import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import validator from "validator";
import { registerLoginEmailPassword } from '../../actions/auth';
import { setError, removeError } from '../../actions/ui';
import { useForm } from '../../hooks/useForm';

export const RegisterScreen = () => {

    const dispatch = useDispatch();

    const {msgError, loading} = useSelector( state => state.ui );


    const [ formValues, handleInputChange ] = useForm({
        name: 'Hernando',
        email: 'nando@hmail.com',
        password: '123456',
        password2: '123456'
    })

    const { name, email, password, password2 } = formValues;

    const handleRegister = (e) => {
            e.preventDefault();
            if ( isFormValid() ) {
                dispatch(registerLoginEmailPassword(name, email, password))
            }
    }

    const isFormValid = () => {
        
        if ( name.trim().length === 0 ) {
            dispatch( setError('Name is required') );
            return false;
        } else if ( !validator.isEmail(email) ) {
            dispatch( setError('Email is not valid') );
            return false;
        } else if ( password !== password2 || password.length < 5 ) {
            dispatch( setError('Password should be at least characters and match each other') );
            return false;
        }

        dispatch( removeError()) ;
        return true;
    }

    return (
        <>
            <h3 className="auth__title">Register</h3>

            {   
                msgError &&
                (
                    <div className="auth__alert-error">
                        {msgError}
                    </div>
                )
            }

            <form onSubmit={handleRegister}>
                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    value={password}
                    onChange={handleInputChange}
                />
                <input
                    type="password"
                    placeholder="Confirm password"
                    name="password2"
                    className="auth__input"
                    value={password2}
                    onChange={handleInputChange}
                />
                <button
                    className="btn btn-primary btn-block mb-5"
                    type="submit"
                    disabled={loading}
                >
                    <p className="btn-text">
                        <b>Register</b>
                    </p>
                </button>
                <Link 
                    className="link link-centered"
                    to="/auth/login"
                >
                    Already registered? 
                </Link>

            </form>
        </>
    )
}
