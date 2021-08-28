import React, { Fragment } from 'react';
import './Restaurants.css';

const RestaurantsDisplay = (props) => {
    console.log("Props is>>>>>",props)

    const renderList = ({datalist}) => {
        if(datalist){
            return datalist.map((item,index) => {
                return(
                    <div className="card col-md-2">
                            <div className="row">
                            <img className="card-img-top" src={item.thumb} alt="thumb"/>
                            <span className="topTemp">{item.name}</span>
                            </div>
                            <div className="card-body">
                            <span className="max">{item.city}</span>   /
                                      <span className="min">{item.locality}</span>
                                <h4 className="card-title">2 Person = ₹{item.min_price}</h4>
                                
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
