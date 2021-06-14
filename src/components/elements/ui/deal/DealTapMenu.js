/* eslint-disable */
import React, {Fragment} from 'react';

import CategoryData from '../../../../db/nav.json';
// import DealDetail from '../../widgets/deal/dealProduct/DealDetail';

export default function DealTapMenu({setCategoryName}){

    // const categoryList = 

    const handleClick = (e) => {
        setCategoryName(e.target.value);
        // console.log(e.target.value)
    }

    return(
        <Fragment>
            <div className="row mb-5">
                <ul className="col-12 col-md-6 offset-md-3 nav justify-content-center">
                    {
                        CategoryData.category.map(item =>(
                            <li key={item.id}><button value={item.name} onClick={handleClick}>{item.name}</button></li>
                        ))
                    }
                </ul>
            </div>
        </Fragment>
    )
}