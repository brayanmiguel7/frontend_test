import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import $ from 'jquery';

import { faEllipsisV, faHome, faVoicemail, faSeedling, faBoxes } from '@fortawesome/free-solid-svg-icons';

import '../css/vertical-responsive.css';
import '../css/borders.css';

export default function VerticalListResponsive() {

    const showMenu = () => {

        $('ul').toggleClass('show-menu');

    }

    return(

        <div className='col-2 d-md-none' id='menu-responsive'>
            <button type='button' className='btn text-dark' onClick={ showMenu }>
                <FontAwesomeIcon icon={ faEllipsisV } />
            </button>
            <ul className='pt-2 bg-light border border-dark border-bottom-right-radius' style={{ 'position': 'fixed', 'left': '-220px' }}>
                <li>
                    <a>
                        <FontAwesomeIcon icon={ faHome } className='mr-2' />
                        Home
                    </a>
                </li>
                <li>
                    <a>
                        <FontAwesomeIcon icon={ faVoicemail } className='mr-2' />
                        Lorem Ipsum
                    </a>
                </li>
                <li>
                    <a>
                        <FontAwesomeIcon icon={ faSeedling } className='mr-2' />
                        Lorem Ipsum
                    </a>
                </li>
                <li>
                    <a>
                        <FontAwesomeIcon icon={ faBoxes } className='mr-2' />
                        Lorem Ipsum
                    </a>
                </li>
            </ul>
        </div>

    )

}