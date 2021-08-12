import React, { useState } from 'react';

import PreAlert from './PreAlert';

export default function PreAlerts(props){

    const prealerts = props.seedings
    console.log(prealerts)
    return(

        prealerts.map(alert => <PreAlert alert={ alert } />)

    )

}