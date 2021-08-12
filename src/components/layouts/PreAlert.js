import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

import { faTrash } from '@fortawesome/free-solid-svg-icons'; 

export default function PreAlert(props){

    console.log(props.alert.Discripcion)
    return(

        <tr className=''>
            <td className='p-2'>
                <img src={`/img/${props.alert.Tienda_img}`} />
            </td>
            <td>
                <strong className='d-block'>Legión Laptop</strong>
                <span className='d-block'>
                    { props.alert.Discripcion }
                </span>
                <a style={{ 'textDecoration': 'underline' }}>Ver más</a>
            </td>
            <td>
                <FontAwesomeIcon icon={ faTrash } />
            </td>
                
        </tr>

    )

}