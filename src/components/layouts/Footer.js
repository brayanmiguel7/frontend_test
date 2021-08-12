import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

import '../css/footer.css';

export default function Footer(){

    return(

        <footer className='row text-white py-3'>
            <div className='col-md-4 text-center py-2 py-md-0'>
                <a className='mx-2'>
                    Términos y condiciones
                </a>
                <a className='mx-2'>
                    Privacidad y políticas
                </a>
            </div>
            <div className='col-md-4 text-center py-2 py-md-0'>
                Copyright © 2021 <span className='text-danger'>Company 123</span>
            </div>
            <div className='col-md-4 text-center py-3 py-md-0'>
                <a className='border border-circle p-2 mx-4'>
                    <FontAwesomeIcon icon={ faFacebook } />
                </a>
                <a className='border border-circle p-2 mx-4'>
                    <FontAwesomeIcon icon={ faInstagram } />
                </a>
                <a className='border border-circle p-2 mx-4'>
                    <FontAwesomeIcon icon={ faTwitter } />
                </a>
            </div>
        </footer>

    )

}