/* eslint-disable */
import React, {Fragment} from 'react';

//db
import urlData from '../../../../db/nav.json';

export default function RightNavLink() {
    const menuList = urlData.sidemenu.map(item =>(
        <li key={item.id} className="nav-link px-3"><a href={item.url}><i className={item.name}></i></a></li>
    ))
    return (
        <Fragment>
            <div className="col-md-2">
                <ul className="nav justify-content-center">
                    {menuList}
                </ul>
            </div>
        </Fragment>
    )
}