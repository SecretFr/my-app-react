/* eslint-disable */
import React, {Fragment} from 'react';

//import component
import Logo from './Nav/Logo';
import CenterNavLink from './Nav/CenterNavLink';
import RightNavLink from './Nav/RightNavLink';

export default function Nav(){
    return(
        <Fragment>
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 border-bottom">
                <Logo/>
                <CenterNavLink/>
                <RightNavLink/>
            </header>
        </Fragment>
    )
}