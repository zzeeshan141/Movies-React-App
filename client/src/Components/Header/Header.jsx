import React, { Component} from 'react';
import { Link } from "react-router-dom";
import styles from './Header.module.scss';

const Header = () => {
    return (
        <div className={styles["header-main"]}>
            <div className={styles["header-main-left"]}>
                <Link to="/" className={styles["header-item"]}><p>TMDB Client</p></Link>
            </div>
            <div className={styles["header-main-center"]}>
                <p>For the movie enthusiasts!!</p>
            </div>
            <div className={styles["header-main-right"]}>
                <Link to="/" className={styles["header-item"]}><p>Home</p></Link>
                <Link to="/favourites" className={styles["header-item"]}><p>Favourite Movies</p></Link>
                <Link to="/upcomingmovies" className={styles["header-item"]}><p>Upcoming Movies</p></Link>
                <Link to="/search" className={styles["header-item"]}><p>Search</p></Link>
            </div>  
                
        </div>
    );
}

export default Header;