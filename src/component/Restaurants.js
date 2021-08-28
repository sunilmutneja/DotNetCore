import React, { Fragment } from 'react';
import './Restaurants.css';

const RestaurantsDisplay = (props) => {
    console.log("Props is>>>>>",props)

    const renderList = ({datalist}) => {
        if(datalist){
            return datalist.map((item,index) => {
                return(
                    <div classname="card col-md-2">
                            <div classname="row">
                            <img classname="card-img-top" src={item.thumb} alt="thumb"/>
                            <span classname="topTemp">{item.name}</span>
                            </div>
                            <div classname="card-body">
                            <span classname="max">{item.city}</span>   /
                                      <span classname="min">{item.locality}</span>
                                <h4 classname="card-title">2 Person = ₹{item.min_price}</h4>
                                
                            </div>
                        </div>
                )
            })
        }else{
            return(
                <div>
                    <center>
                    <img src="/loading.gif"/>
                    </center>
                </div>
               
            )
        }
        

    }


    return(
        <Fragment>
          {renderList(props)}
        </Fragment>
    )
}

export default RestaurantsDisplay;