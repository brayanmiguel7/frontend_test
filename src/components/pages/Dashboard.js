import React, { useEffect, useState } from 'react';
import 'popper.js'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faVolumeUp } from '@fortawesome/free-solid-svg-icons';

import NavigationDashBoard from '../layouts/NavigationDashBoard';
import VerticalList from '../layouts/VerticalList';
import VerticalListResponsive from '../layouts/VerticalListResponsive';
import PreAlertForm from '../layouts/PreAlertForm';
import PreAlerts from '../layouts/PreAlerts';

import '../css/vertical-list.css';  
import '../css/borders.css'; 

import Users from '../sample/users.json';
import Seedings from '../sample/seedings.json';

export default function Dashboard() {

    const [ seedings, setSeedings ] = useState([]);
    const [ user, setUser ] = useState({});

    const getUser = (id) => {

        var users = Users.Usuarios;  
        var u = users.filter(function(user){

            return user.id_usuario === id

        })
        setUser(u[0]);

    }

    const newPrealert = async(data) => {

        setSeedings([

            ...seedings,
            data

        ])
        console.log(seedings)

    }

    const getSeedings = async() => {

        setSeedings(Seedings.Envios);

    }

    useEffect(() => {

        getUser(localStorage.getItem('user'));
        getSeedings();

    }, [ setUser, setSeedings ])

    return(

        <div className='container-fluid align-items-center mt-1 mt-md-5 pt-md-4'>
            <div className='row'>
                <VerticalList />
                <VerticalListResponsive />
                <div className='col-10 px-0 ml-auto bg-light'>
                    {

                        user.us_nombre ? 

                            <NavigationDashBoard name={ user.us_nombre } />

                        :

                        ''

                    }
                    <div className='row mx-0 p-4'>
                        <div className='col-md-4 border border-radius p-3 mx-2'>
                            <h5>
                                <strong>
                                    <FontAwesomeIcon icon={ faVolumeUp } className='mr-2' />
                                    Nueva Pre-alerta
                                </strong>
                            </h5>
                            <PreAlertForm submit={ newPrealert } />
                        </div>
                        <div className='col-md-7'>
                            <div className='border-radius p-2 mb-2' style={{ 'borderLeft': '4px solid red', 'borderTop': '1px solid #dee2e6','borderBottom': '1px solid #dee2e6', 'borderRight': '1px solid #dee2e6' }}>
                                Prueba
                            </div>
                            <table className='table-responsive ml-0 border border-radius p-2' style={{ 'maxHeight': '600px', 'overflowY': 'auto' }}>
                                <tbody>
                                    <PreAlerts seedings={ seedings }/>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}