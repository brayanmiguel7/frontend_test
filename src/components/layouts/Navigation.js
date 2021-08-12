import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import $ from 'jquery';

import { faPhoneAlt, faMailBulk, faAddressCard, faSearch } from '@fortawesome/free-solid-svg-icons';

import '../css/borders.css';

export default function Navigation() {

    return(

        <nav className='navbar px-0 d-flex align-items-center'>
            <div className='col-7 col-md-8 ml-md-auto mr-2 row'>
                <div className='col-4 px-0 my-auto d-flex justify-items-center'>
                    <span className='border-circle my-auto'>
                        <i className='bg-danger p-2 border-circle text-white mr-2 my-auto'>
                            <FontAwesomeIcon icon={ faPhoneAlt } />
                        </i>
                        <span className='d-none d-md-inline-flex'>
                            +1 (786)600.72.96
                        </span>
                    </span>
                </div>
                <div className='col-4 px-0 my-auto d-flex justify-items-center'>
                    <span className='border-circle my-auto'>
                        <i className='bg-danger p-2 border-circle text-white mr-2 my-auto'>
                            <FontAwesomeIcon icon={ faMailBulk } />
                        </i>
                        <span className='d-none d-md-inline-flex'>
                            miami@12345.com
                        </span>
                    </span>
                </div>
                <div className='col-4 px-0 my-auto'>
                    <span className='border-circle my-auto d-flex justify-items-center'>
                        <i className='bg-danger p-2 border-circle text-white mr-2 my-auto'>
                            <FontAwesomeIcon icon={ faAddressCard } />
                        </i>
                        <span className='d-none d-md-inline-flex'>
                            5989nw 102nd ave, Miami FL 33178, United States
                        </span>
                    </span>
                </div>
            </div>
            <div className='col-5 col-md-3 px-0'>
                <form>
                    <div className="input-group mb-0">
                        <input className='form-control col-8' type='text' placeholder='Búsqueda' id='search_input' />
                        <div className="input-group-append">
                            <button className='btn btn-danger text-white btn-outline-secondary' type='button' id='search'>
                                <FontAwesomeIcon icon={ faSearch } className='bg-danger text-white' />
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </nav>

    )

}