import React, {Component, Fragment } from 'react';
import './Header.css';

classname Header extends Component {

    render(){
      
        return(
            <Fragment>
               <nav classname="navbar navbar-inverse">
                <div classname="container-fluid">
                    <div classname="navbar-header">
                    <button type="button" classname="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span classname="icon-bar"></span>
                        <span classname="icon-bar"></span>
                        <span classname="icon-bar"></span>                        
                    </button>
                    <a classname="navbar-brand">Developer Funnel</a>
                    </div>
                    <div classname="collapse navbar-collapse" id="myNavbar">
                    <ul classname="nav navbar-nav">
                        <li ><a >Home</a></li>
                        <li><a >Page 2</a></li>
                        <li><a>Page 3</a></li>
                    </ul>
                    <ul classname="nav navbar-nav navbar-right">
                        <li><a><span classname="glyphicon glyphicon-user"></span> Sign Up</a></li>
                        <li><a ><span classname="glyphicon glyphicon-log-in"></span> Login</a></li>
                    </ul>
                    </div>
                </div>
                </nav>
            </Fragment>
        )
    }
}


export default Header;
