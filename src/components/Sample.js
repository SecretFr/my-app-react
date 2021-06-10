/* eslint-disable */

import React, { useState } from 'react';


export default function Sample() {
    //useState
    let [name, setName] = useState('');
    const [text, setText] = useState('');

    function handleClick(){
        name = text;
        setName(name);
    }

    function showText(event){
        setText(event.target.value);
    }

    return(
        <div>
            <h1>Good Morning!</h1>
            <input type="text" onChange={showText}></input>            
            <button onClick={handleClick}>Showname</button>
            <h2>{name}</h2>
        </div>
    )
}