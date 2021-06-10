/* eslint-disable */
import React, { Fragment, useState } from 'react';
import data from '../db/dummy.json'

export default function DataView(){
    const day = 1;
    const [newData, setNewData] = useState(data);
    console.log(newData);
    const searchData = newData.words.filter(word => word.day === day);
    return(
        <Fragment>
            <ul>
                {
                    newData.days.map(item => (
                        <li key={item.id}>ID: {item.id} Day: {item.day}</li>
                    ))
                }
            </ul>
            <table>
                {
                    searchData.map(item => (
                        
                        <tr key={item.id}>
                            <td>{item.eng}</td>
                            <td>{item.kor}</td>
                        </tr>
                    ))
                }
            </table>

        </Fragment>
    )
}