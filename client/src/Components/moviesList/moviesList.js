import React, { Component} from 'react';
import MovieCardView from './../movieCardView/movieCardView';
import './style/style.scss';
import {generateMovieDummyData} from './../../DummayData/movie';

class MoviesList extends Component{


    renderMovies(movies){
        return movies.map((movie, index) => {
            return (<MovieCardView key={movie.id} movie={movie}/>);
        });
    }

    render(){
        return(
            <div className="movielist-container">
                {this.renderMovies(this.props.movies)}
            </div>
        );
    }
};

export default MoviesList;