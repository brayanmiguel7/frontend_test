import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';

import { faEye } from '@fortawesome/free-solid-svg-icons';

import '../css/btn.css';

import SignUpForm from './SignUpForm';

export default function LoginForm(props) {

    const [ showPassword, setShowPassword ] = useState(false);
    const [ data, setData ] = useState({

        email: '',
        pass: ''

    });
    const [ display, setDisplay ] = useState(false);

    const showPass = () => {

        if(showPassword === false){

            $('#pass').attr('type', 'text');
            setShowPassword(true);

        } else {

            $('#pass').attr('type', 'password');
            setShowPassword(false);

        }

    }

    const handleChange = e => {

        setData({

            ...data,
            [ e.target.name ] : e.target.value

        })

    }

    const handleSubmit = e => {

        props.submit(data);
        e.preventDefault();
        e.target.reset();

    }

    const showSignUpModal = () => {

        setDisplay(true);

    }

    const closeModal = () => {

        setDisplay(false);

    }

    const newUser = (data) => {

        props.newUser(data);

    }

    return(

        <div className='col-md-4 border border-radius text-center align-items-center py-3'>
            <SignUpForm display={ display } closeModal={ closeModal } submit={ newUser } userCreated={ props.userCreated } />
            <h5>
                Ingresa tus datos
            </h5>
            <span className='text-danger'>
                { props.error }
            </span>
            <form className='pt-0 p-0 px-5 py-md-5' onSubmit={ handleSubmit }>
                <div className='form-group mx-auto'>
                    <input type='email' className='form-control d-inline' placeholder='Correo' onChange={ handleChange } id='email' name='email' required />
                </div>
                <div className='input-group mx-auto mb-3'>
                    <input type='password' className='form-control d-inline' placeholder='Contraseña' id='pass' name='pass' style={{ 'borderRight': 'none' }} onChange={ handleChange } required />
                    <div className="input-group-append">
                        <button className='btn text-white btn-outline-secondary btn-pass' type='button' style={{ 'borderRadius': '0px .25rem .25rem 0px', 'borderRight': '1px solid #ced4da', 'borderTop': '1px solid #ced4da', 'borderBottom': '1px solid #ced4da', 'borderLeft': 'none', 'pointerEvents': 'none' }} onClick={ showPass }>
                            <FontAwesomeIcon icon={ faEye } style={{ 'color': 'gray' }} />
                        </button>
                    </div>
                    <a href='/' className='d-block w-100 text-danger text-left'>
                        ¿Olvidaste la contraseña?
                    </a>
                </div>
                <button type='submit' className='btn btn-danger w-100 mt-2'>
                    Ingresar
                </button>
                <a type='button' className='d-block w-100 text-danger text-center mt-2' onClick={ showSignUpModal }>
                    ¿No tienes cuenta aún? ¡Regístrate!
                </a>
            </form>
        </div>

    )

}