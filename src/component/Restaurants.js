import React, { Fragment } from 'react';
import './Restaurants.css';

const RestaurantsDisplay = (props) => {
    console.log("Props is>>>>>",props)

    const renderList = ({datalist}) => {
       
        

    }


    return(
        <Fragment>
          {renderList(props)}
        </Fragment>
    )
}

export default RestaurantsDisplay;