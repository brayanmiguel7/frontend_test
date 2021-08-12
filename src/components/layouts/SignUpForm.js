import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faEye } from '@fortawesome/free-solid-svg-icons';

import '../css/body.css';

export default function SignUpForm(props) {

    const [ showPassword, setShowPassword ] = useState(false);
    const [ data, setData ] = useState({

        emailNew: '',
        passNew: ''

    });

    const showModal = () => {

        if(props.display === true){

            $('.modal').modal('show');

        } else {

            $('.modal').modal('hide');

        }

    }

    useEffect(() => {

        showModal();

    })

    const showPass = () => {

        if(showPassword === false){

            $('#passNew').attr('type', 'text');
            setShowPassword(true);

        } else {

            $('#passNew').attr('type', 'password');
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

        var user = {

            us_nombre: data.name,
            us_pass: data.passNew,
            us_email: data.emailNew

        }
        props.submit(user);
        e.preventDefault();
        e.target.reset();

    }

    return(

        <div className="modal" tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header bg-gradient text-center text-white">
                    <h5 className="modal-title col-12">Nueva Cuenta</h5>
                </div>
                <div className="modal-body">
                    <span className='text-success mb-2 d-block'>
                        { props.userCreated }
                    </span>
                    <form className='px-5' id='signUpForm' onSubmit={ handleSubmit }>
                        <div className='form-group'>
                            <input type='text' className='form-control' required name='name' id='name' placeholder='Nombre y Apellido' onChange={ handleChange } />
                        </div>
                        <div className='form-group'>
                            <input type='email' className='form-control' required name='emailNew' id='emailNew' placeholder='Correo Electrónico' onChange={ handleChange } />
                        </div>
                        <div className='input-group'>
                        <input type='password' className='form-control d-inline' placeholder='Contraseña' id='passNew' name='passNew' style={{ 'borderRight': 'none' }} onChange={ handleChange } required />
                        <div className="input-group-append">
                            <button className='btn text-white btn-outline-secondary btn-pass' type='button' style={{ 'borderRadius': '0px .25rem .25rem 0px', 'borderRight': '1px solid #ced4da', 'borderTop': '1px solid #ced4da', 'borderBottom': '1px solid #ced4da', 'borderLeft': 'none' }} onClick={ showPass }>
                                <FontAwesomeIcon icon={ faEye } style={{ 'color': 'gray' }} />
                            </button>
                        </div>
                        </div>
                    </form>
                </div>
                <div className="modal-footer bg-gradient">
                    <button type="submit" form='signUpForm' className="btn btn-primary">Registrarse</button>
                    <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={ props.closeModal }>Cerrar</button>
                </div>
                </div>
            </div>
        </div>

    )

}