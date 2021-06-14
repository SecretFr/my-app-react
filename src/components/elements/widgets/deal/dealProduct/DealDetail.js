/* eslint-disable */
import React, {Fragment , useState, useEffect, useRef} from 'react';

import ProductData from '../../../../../db/product.json';
import Rating from './Rating';

export default function DealDetail({categoryName}){
    // console.log(categoryName);
    const [newData, setNewData] = useState(ProductData);
    
    let category = newData.filter(item =>{        
        return ((item.category[1] === categoryName) || (item.category[0] === categoryName))
        // for(let i=0; i<item.category.length; i++){
        //     // console.log(item.category[i])
        //     return item.category[i] === categoryName
        // }
    })
    // console.log(category)

    // const prevNewData = usePrevious(newData)

    // function usePrevious(value){
    //     const ref = useRef();

    //     useEffect(() =>{
    //         ref.current = value;
    //     }, [value])

    //     return ref.current;
    // }

    const productList = newData.map(item => (
        <div key={item.id} className="col-12 col-md-3 mb-4">
            <div className="productImg"></div>
                <p className="productTitle">{item.name}</p>
                <p className="productScore">
                    {item.rating && item.rating > 0 ? (
                        <Rating ratingValue = {item.rating}/>
                    ) : (
                    ""
                    )}
                </p>
                <p className="productPrice">${item.price}<span>${(item.price * ((100 - item.discount)/100)).toFixed(2)}</span></p>
        </div>
    )).slice(0,8)

    return(
        <Fragment>
            <div className="row mt-5">
                {productList}        
            </div>
        </Fragment>
    )
}