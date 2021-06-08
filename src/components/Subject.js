/* eslint-disable */

import React, { useState } from 'react';

export default function Subject({name, address, phone}) {
    //console.log(props)
    const [like, setLike] = useState(0);
    const [disLike, setDisLike] = useState(0);

    const inCrementLike = () => {
        setLike(like + 1);
    }

    const inCrementDisLike = () => {
        setDisLike(disLike + 1);
    }

    return(
    <header>
        <h1>React App</h1>
        <h2><button onClick={inCrementLike}>😊</button>{like}</h2>
        <h2><button onClick={inCrementDisLike}>😡</button>{disLike}</h2>
        <p>Name : {name}</p>
        <p>address : {address}</p>
        <p>Phone : {phone}</p>
    </header>
    )
}