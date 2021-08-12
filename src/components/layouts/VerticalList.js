import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faHome, faVoicemail, faSeedling, faBoxes } from '@fortawesome/free-solid-svg-icons';

export default function VerticalList() {

    return(

        <div className='col-2 d-none d-md-inline-block' id='vertical-list'>
            <ul>
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