/* eslint-disable */
import React, {Fragment} from 'react';

import urlData from '../../../../db/nav.json';

export default function CenterNavLink(){
    //const [url, setUrl] = useState(urlData);
    
    const menuList = urlData.menu.map(item =>(
        <li key={item.id}><a href={item.url} className="nav-link">{item.name}</a></li>
    ))

    return(
        <Fragment>
            <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                {menuList}
            </ul>
        </Fragment>
    )
}