import React, { Component} from 'react';
import './style/style.scss';
import tempImage from 'E:/Training/React Training NBS/Assignments/Assignment-02/TMDB/client/src/assets/images/Avengers Age of Ultron (2015).jpg';
import MovieDetailRow from './movieDetailRow/movieDetailRow';
import MovieReviews from './movieReviews/movieReviews';
import {getMovieById} from './../../DummayData/movie';
import axios from 'axios';
import {BaseUrl,
    ApiKey,
    ImageUrlPrefix} from './../../API/APIConfig';

class MovieDetail extends Component{

    constructor(props){
        super(props);

        this.state = {
            movie: undefined,
            reviews: [],
            showReviews: false
        }
    }

    componentDidMount(){
        axios.get(BaseUrl + '/movie/' + this.props.match.params.id + '?api_key=' + ApiKey)
        .then(res => {
            this.setState({movie: res.data});  
        });

        axios.get(BaseUrl + '/movie/' + this.props.match.params.id + '/reviews?api_key=' + ApiKey)
        .then(res => {
            this.setState({reviews: res.data.results});  
        });
        //this.setState({movie: getMovieById(this.props.match.params.id)});
    }

    extractPropertiedForRowOne(){
        // return {'Runtime (min.)': this.state.movie.runtime, 'Release Date': this.state.movie.releaseDate};
        return {'Runtime (min.)': this.state.movie.runtime, 'Release Date': this.state.movie.release_date};
    }

    extractPropertiedForRowTwo(){
        // return {'Genre': this.state.movie.genres};
        return {'Genre': this.state.movie.genres.map(genre => {return genre.name})};
    }

    extractPropertiedForRowThree(){
        // return {'Spoken Langauge': this.state.movie.languages};
        return {'Spoken Langauge': this.state.movie.spoken_languages.map(language => {return language.name})};
    }

    extractPropertiedForRowFour(){
        // return {'Publication Companies': this.state.movie.publicationCompanies};
        return {'Production Companies': this.state.movie.production_companies.map(company => {return company.name})};
    }

    showReviews(e){
        this.setState({showReviews: !this.state.showReviews});
    }

    render(){
        if(this.state.movie != undefined){
            return(
                <div className="movie-detail-main-container">
                    <div className="movie-detail-container">
                        <div className="left-main">
                            {/* <img src={this.state.movie.image} alt="" /> */}
                            <img src={ImageUrlPrefix + this.state.movie.poster_path} alt="" />
                        </div>
                        <div className="right-main">
                            <p className="movie-title">{this.state.movie.title}</p>
                            <p className="movie-overview-heading">Overview</p>
                            <p>{this.state.movie.overview}</p>
                            <MovieDetailRow movieAttributes={this.extractPropertiedForRowOne()}/>
                            <MovieDetailRow movieAttributes={this.extractPropertiedForRowTwo()}/>
                            <MovieDetailRow movieAttributes={this.extractPropertiedForRowThree()}/>
                            <MovieDetailRow movieAttributes={this.extractPropertiedForRowFour()}/>
                        </div>
                    </div>
                    <button onClick={(e) => this.showReviews(e)}>{this.state.showReviews ? 'Hide Review' : 'Show Reviews (Extracts)'}</button>
                    {this.state.showReviews && (<MovieReviews reviews={this.state.reviews}/>)}
                </div>
            );
        }
        return(
            <div className="movie-detail-main-container">
                <h2>Loading...</h2>
            </div>
        );
        
    }
};

export default MovieDetail;