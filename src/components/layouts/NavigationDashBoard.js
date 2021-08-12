import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faUser, faBell, faSearch } from '@fortawesome/free-solid-svg-icons';

import '../css/navigation-dash.css';

export default function NavigationDashBoard(props) {

    return(

        <div className='row col-12 text-right justify-content-end align-items-center d-flex' id='navigation'>
            <div className='d-none d-md-inline-block col-md-auto'>
                <FontAwesomeIcon icon={ faSearch } />
            </div>
            <div className='d-none d-md-inline-block col-md-auto'>
                <FontAwesomeIcon icon={ faBell } />
            </div>
            <div className='d-none d-md-inline-block col-md-auto'>
                <span className='text-warning'>
                    <strong>235.4789 pts</strong>
                </span>
            </div>
            <div className='col-6 col-md-auto'>
                <div className="btn-group">
                    <button type="button" className="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <FontAwesomeIcon icon={ faUser } className='mr-2' />
                            <span className='d-none d-md-inline'>{ props.name }</span>
                    </button>
                    <div className="dropdown-menu">
                        <a className="d-md-none dropdown-item" href="#">
                            <FontAwesomeIcon className='mr-2' icon={ faSearch } />
                            Buscar
                        </a>
                        <a className="d-md-none dropdown-item" href="#">
                            <FontAwesomeIcon className='mr-2' icon={ faBell } />
                            Notificaciones
                        </a>
                        <a className="d-md-none dropdown-item text-warning" href="#">
                            <strong>
                                235.4789 pts
                            </strong>
                        </a>
                        <div class="d-md-none dropdown-divider border-dark"></div>
                        <a className="dropdown-item" href="#">Cerrar Sesión</a>
                    </div>
                </div>
            </div>
        </div>

    )

}