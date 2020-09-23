import React, { Component} from 'react';
import {
    Link
  } from "react-router-dom";
import './style/style.scss';

class Header extends Component{
    render(){
        return(
            <div className="header-main">
                <div className="header-main-left">
                    <Link to="/" className="header-item"><p>TMDB Client</p></Link>
                </div>
                <div className="header-main-center">
                    <p>For the movie enthusiasts!!</p>
                </div>
                <div className="header-main-right">
                    <Link to="/" className="header-item"><p>Home</p></Link>
                    <Link to="/favourites" className="header-item"><p>Favourite Movies</p></Link>
                    <Link to="/upcomingmovies" className="header-item"><p>Upcoming Movies</p></Link>
                    <Link to="/search" className="header-item"><p>Search</p></Link>
                </div>  
                
            </div>
        );
    }
};

export default Header;