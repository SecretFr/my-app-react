/* eslint-disable */
import React, {Fragment} from 'react';

import FooterCopyRight from '../elements/ui/footer/FooterCopyRight';
import FooterAbout from '../elements/ui/footer/FooterAbout';
import FooterContact from '../elements/ui/footer/FooterContact';
import FooterSub from '../elements/ui/footer/FooterSub';
import FooterFaqs from '../elements/ui/footer/FooterFaqs';

export default function Footer(){
    return(
        <Fragment>
            <footer>
            <div className="container-fluid" style={{padding:"0px"}}>
            <div className="footer">
                <div className="container">
                <div className="row">
                    <FooterCopyRight/>                    
                    <FooterAbout/>
                    <FooterFaqs/>
                    <FooterContact/>
                    <FooterSub/>
                </div>
                </div>
            </div>
            </div>
        </footer>
        </Fragment>
    )
}