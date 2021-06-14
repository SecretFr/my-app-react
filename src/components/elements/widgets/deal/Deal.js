/* eslint-disable */
import React, {Fragment, useState} from 'react';

//import components
import DealTitle from '../../ui/deal/DealTitle';
import DealTapMenu from '../../ui/deal/DealTapMenu';
import DealDetail from './dealProduct/DealDetail';

export default function Deal(){
    const [categoryName, setCategoryName] = useState("");

    return(
        <Fragment>
            <section id="deal">
                <div className="container">
                    <DealTitle categoryName={categoryName}/>
                    <DealTapMenu setCategoryName={setCategoryName}/>
                    <DealDetail categoryName={categoryName}/>
                </div>
            </section>
        </Fragment>
    )
}