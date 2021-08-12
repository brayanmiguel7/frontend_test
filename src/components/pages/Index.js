import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import axios from 'axios';

import Navigation from '../layouts/Navigation';
import LoginForm from '../layouts/LoginForm';
import Footer from '../layouts/Footer';

import Users from '../sample/users.json';

export default function Index() {

    const [ users, setUsers ] = useState({});
    const [ error, setError ] = useState('');
    const [ userCreated, setUserCreated ] = useState(false);

    const getUsers = async() => {

        setUsers(Users.Usuarios);

    }

    const login = async(data) => {

        var logUser = users.filter(function(user) {

            return user.us_email === data.email && user.us_pass === data.pass;

        });

        if(logUser.length <= 0){

            setError('Usuario y/o contraseña incorrectos.');
            setTimeout(() => {

                setError('');

            }, 2500);

        } else {

            window.location.href = '/'+ logUser[0].id_usuario;
            localStorage.setItem('user', logUser[0].id_usuario);

        }

    }

    const newUser = (data) => {

        setUsers([

            ...users,
            data

        ]);

        setUserCreated('Usuario creado correctamente');
        setTimeout(() => {

            setUserCreated('');

        }, 2500);

    }

    useEffect(() => {

        getUsers();

    }, [ setUsers ])

    return(

        <div className='container-fluid align-items-center mt-1 mt-md-5 pt-md-4 d-flex'>
            <div className='col-12 px-0 ml-auto mt-5 bg-light'>
                <div className='col-md-12 ml-auto'>
                    <Navigation />
                </div>
                <div className='row align-items-center justify-content-center mx-0 mt-5 mb-4 pt-4'>
                    <LoginForm users={ users } submit={ login } error={ error } newUser={ newUser } userCreated={ userCreated } />
                    <div className='col-md-6 mx-2'>
                        <h3 className='text-center mt-4'>
                            Descubre la maravilla de tener <span className='text-danger'>al alcance de tus manos</span>,
aquello que estaba lejos
                        </h3>
                        <div className='col-10 border border-radius mx-auto mt-5 pt-5' style={{ 'height': '320px' }} id='image'>

                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>

    )

}