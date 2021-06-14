/* eslint-disable */
import PropTypes from 'prop-types';
import React, {Fragment} from 'react';

const Rating = ({ratingValue}) => {
    // console.log(ratingValue);
    let rating = [];

    for(let i=0; i<5; i++){
        rating.push(<i key={i} className="far fa-star"></i>);
    }

    if(ratingValue && ratingValue > 0){
        for(let i=0; i <= ratingValue-1; i++){
            rating[i] = <i key={i} className="fas fa-star"></i>;
        }
    }
    return(
        <Fragment>
            {rating}
        </Fragment>
    )
};

Rating.propTypes = {
    ratingValue : PropTypes.number.isRequired
}

export default Rating;