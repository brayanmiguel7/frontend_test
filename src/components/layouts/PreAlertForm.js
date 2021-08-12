import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faDollarSign, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

export default function PreAlertForm(props){

    const [ data, setData ] = useState({});

    const handleChange = e => {

        setData({

            ...data,
            [ e.target.name ] : e.target.value

        })

    }

    const handleSubmit = e => {

        const alert = {

            Tracking: data.tracking,
            Tipo_Envio: data.way,
            Fecha: new Date(),
            Discripcion: data.description,
            Tienda_img: data.enterprise + '.png'

        }
        props.submit(alert);
        e.preventDefault();
        e.target.reset();

    }

    return(

        <form className='mt-5 p-3' onSubmit={ handleSubmit }>
            <div className='form-group'>
                <input className='form-control' type='text' placeholder='Tienda de procedencia' id='store' name='store' onChange={ handleChange } required />
            </div>
            <div className='row justify-content-center'>
                <div className="form-group col-md-5 pl-0 mb-0 align-items-center">
                    <select name='enterprise' id='enterprise' className='form-control' onChange={ handleChange } required>
                        <option value=''>Empresa de envío</option>
                        <option value='amazon'>Amazon</option>
                        <option value='ebay'>Ebay</option>
                        <option value='MRW'>MRW</option>
                    </select>
                </div>
                <div className='input-group col-md-6 pr-0 align-items-center'>
                    <div className='input-group-prepend'>
                        <button className='btn btn-outline-secondary' type='button' id='search' style={{ 'borderRadius': '.25 0rem .0rem .25rem', 'borderRight': 'none', 'borderTop': '1px solid #ced4da', 'borderBottom': '1px solid #ced4da', 'borderLeft': '1px solid #ced4da', 'pointerEvents': 'none' }}>
                            <FontAwesomeIcon icon={ faDollarSign } />
                        </button>
                    </div>
                    <input className='form-control' type='number' step='1' placeholder='Valor del paquete' id='price' name='price' style={{ 'borderLeft': 'none' }} required onChange={ handleChange } />
                </div>
            </div>
            <div className='input-group my-3'>
                <input type='text' className='form-control d-inline' placeholder='Número de tracking' id='tracking' name='tracking' style={{ 'borderRight': 'none' }} required onChange={ handleChange } />
                <div className="input-group-append">
                    <button className='btn text-white btn-outline-secondary btn-pass' type='button' style={{ 'borderRadius': '0px .25rem .25rem 0px', 'borderRight': '1px solid #ced4da', 'borderTop': '1px solid #ced4da', 'borderBottom': '1px solid #ced4da', 'borderLeft': 'none', 'pointerEvents': 'none' }}>
                        <FontAwesomeIcon icon={ faExclamationCircle } style={{ 'color': 'gray' }} />
                    </button>
                </div>
            </div>
            <div className='form-group'>
                <select className='form-control' name='pack_type' id='pack_type' required onChange={ handleChange }>
                    <option value=''>Tipo de paquete</option>
                    <option value='liviano'>Liviano</option>
                    <option value='pesado'>Pesado</option>
                </select>
            </div>
            <div className='form-group'>
                <textarea className='form-control' id='description' name='description' placeholder='Descripción del paquete' onChange={ handleChange } required />
            </div>
            <div className='form-group'>
                <label className='text-secondary' htmlFor='way' style={{ 'fontSize': '14px' }}>¿Cómo te gustaría enviar el paquete a Venezuela?</label><br />
                <div class='text-center'>
                    <input className='mr-3' id='way' name='way' type='radio' value='aéreo' onChange={ handleChange } /> Aéreo
                    <input className='ml-3' id='way' name='way' type='radio' value='marítimo' onChange={ handleChange } /> Marítimo
                </div>
            </div>
            <span style={{ 'fontSize': '14px' }}>
                *El tipo de envío lo podrás modificar por medio de una <span class='text-danger' style={{ 'textDecoration': 'underline' }}>Solicitud especial</span> desde tu almacén.
            </span>
            <button type='submit' className='btn btn-danger w-100 mt-2'>
                Registrar Pre-alerta
            </button>
        </form>

    )

}