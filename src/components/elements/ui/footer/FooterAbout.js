/* eslint-disable */
import React, {Fragment} from 'react';

export default function FooterAbout(){
    return(
        <Fragment>
            <div className="col-12 col-md-2">
                <p className="footerAbout">ABOUT US</p>
                <ul>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Store location</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Order Tracking</a></li>
                </ul>
            </div>
        </Fragment>
    )
}