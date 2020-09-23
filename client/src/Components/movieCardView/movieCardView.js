import React, { Component} from 'react';
import './style/style.scss';
import default_poser from './../../assets/images/default_poser.jpg';
import calendarIcon from './../../assets/icons/calendar.png';
import starIcon from './../../assets/icons/star.png';
import moment from 'moment';
import {
    Link
} from "react-router-dom";
import {ImageUrlPrefix} from './../../API/APIConfig';


class MovieCardView extends Component{
    render(){
        return(
            <div className="movie-card-container">
                <div className="movie-image">
                    {/* <Link to={`/movie/${this.props.movie.id}`} ><img src={this.props.movie.image} alt="" /></Link> */}
                    {/* <a href="#"><img src={this.props.movie.image} alt="" /></a> */}
                    <Link to={`/movie/${this.props.movie.id}`} ><img src={this.props.movie.poster_path != null ? ImageUrlPrefix + this.props.movie.poster_path : default_poser} alt='' /></Link>
                </div>
                <div className="movie-title">
                    <Link to={`/movie/${this.props.movie.id}`}><p><b>{this.props.movie.title}</b></p></Link>
                    {/* <a href="#"><p><b>{this.props.movie.title}</b></p></a> */}
                </div>
                <div className="movie-row">
                    <a href="#"><img src={calendarIcon} alt=""/></a>
                    {/* <p>{moment(this.props.movie.releaseDate.toDateString()).format('ll')}</p> */}
                    <p>{this.props.movie.release_date}</p>
                </div>
                <div className="movie-row">
                    <a href="#"><img src={starIcon} alt=""/></a>
                    {/* <p>{this.props.movie.rating}</p> */}
                    <p>{this.props.movie.vote_average}</p>
                </div>
                <button className="">Add to Facourites</button>
            </div>
        );
    }
};

export default MovieCardView;