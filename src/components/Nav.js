/* eslint-disable */
import React, { useState, Fragment } from 'react';

export default function Nav() {
    const [urlName, setUrlName] = useState([
        'https://www.naver.com',
        'https://www.google.com',
        'https://ko.reactjs.org/'
    ])

    return(
        <Fragment>
            <nav>
                <ul>
                    {
                        urlName.map((item, index) => {
                            return (
                                <li key={index}>{item}</li>
                            )
                        })                        
                    }
                </ul>
            </nav>
        </Fragment>
    )  
}