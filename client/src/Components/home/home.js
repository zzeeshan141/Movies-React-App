import React, { Component} from 'react';
import MovieFilter from './../moviesFilter/moviesFilter';
import MoviesList from './../moviesList/moviesList';
import {getFilteredMovies,
    generateMovieDummyData} from './../../DummayData/movie';
import {BaseUrl,
    ApiKey} from './../../API/APIConfig'
import './style/style.scss';
import axios from 'axios';
import {generateGenreDummyData} from './../../DummayData/genre.js';
import {generateRatingDummyData} from './../../DummayData/rating';
import {generateSortByDummyData} from './../../DummayData/sortBy';
import {generateLanguageDummyData} from './../../DummayData/language';
import {generateReleaseYearDummyData} from './../../DummayData/releaseDate'
import { filter } from 'lodash';

class Home extends Component{

    constructor(props){
        super(props);

        this.state = {
            filters: {
                titleSearch: '',
                genre: 0,
                releaseDate: 0,
                rating: 0,
                sortBy: 1,
                language: ''
            },
            movies: [],
            filtersRefData: {
                genres: [],
                year: generateReleaseYearDummyData(),
                ratings: generateRatingDummyData(),
                sortBy: generateSortByDummyData(),
                languages: generateLanguageDummyData(),
            }
        }

        this.onFilterChange = this.onFilterChange.bind(this);
    }

    componentDidMount(){

        //loading genres from TMDB api
        axios.get(BaseUrl + '/genre/movie/list?api_key=' + ApiKey)
        .then(res => {
            let tempSatte = this.state;
            let tempGenres = res.data.genres.map(genre => {
                return {id: genre.id, value: genre.name}
            });
            tempSatte.filtersRefData.genres = tempGenres;
            this.setState(tempSatte);
        });

        axios.get(BaseUrl + '/discover/movie?api_key=' + ApiKey + this.getParametersString(this.state.filters))
        .then(res => {
            this.setState({movies: res.data.results});
        });
        

        //loading popular movies from TMDB api
        // axios.get(BaseUrl + '/movie/popular?api_key=' + ApiKey)
        // .then(res => {
        //     this.setState({movies: res.data.results});
        // });
        //this.setState({movies: generateMovieDummyData()})
    }

    getParametersString(filters){
        let queryString = '&include_adult=false&include_video=false&page=1';
        queryString += `&year=${filters.releaseDate > 0 ? filters.releaseDate : 2020}`;

        //set language iso
        if(filters.language == 'German'){
            queryString += '&language=de';
        }
        else if(filters.language == 'French'){
            queryString += '&language=fr';
        }
        else{
            queryString += '&language=en-US';
        }

        //set sortBy order
        if(filters.sortBy == 2){
            queryString += '&sort_by=vote_average.desc';
        }
        else if(filters.sortBy == 3){
            queryString += '&sort_by=release_date.desc';
        }
        else{
            queryString += '&sort_by=popularity.desc';
        }

        //set genre id
        if(filters.genre > 0){
            queryString += `&with_genres=${filters.genre}`
        }

        //set rating
        if(filters.rating > 0){
            queryString += `&vote_average.gte=${filters.rating}`
        }

        return queryString;
    }

    // isFiltersSetToDefaultValues(filters){
    //     if(filters.titleSearch == '' 
    //         && (filters.genre == '' || filters.genre.toLowerCase() == 'all') 
    //         && filters.releaseDate == 0 
    //         && filters.rating == 0 
    //         && filters.sortBy == 1 
    //         && filters.language == '')
    //         return true;
    //     return false;
    // }

    // isFilterValuesValid(filters){
    //     let result = false;
    //     if(filters.titleSearch != '' || filters.titleSearch.length >= 3)
    //         result = true;
    //     if(filters.genre != '')
    //         result = true;
    //     if(filters.releaseDate > 0)
    //         result = true;
    //     if(filters.rating > 0)
    //         result = true;
    //     if(filters.language != '')
    //         result = true;
    //     return result;
    // }

    validateFilterValueChanges(filters){
        if(this.state.filters.titleSearch != filters.titleSearch)
            return true;
        if(this.state.filters.genre != filters.genre)
            return true;
        if(this.state.filters.releaseDate != filters.releaseDate)
            return true;
        if(this.state.filters.rating != filters.rating)
            return true;
        if(this.state.filters.language != filters.language)
            return true;
        if(this.state.filters.sortBy != filters.sortBy)
            return true;
        return false;
    }

    onFilterChange(filters){
        if(filters.titleSearch && filters.titleSearch != this.state.titleSearch){
            axios.get(BaseUrl + '/search/movie?api_key=' + ApiKey + `&language=en-US&query=${filters.titleSearch.replace(' ', '%20')}&page=1&include_adult=false`)
            .then(res => {
                this.setState({movies: res.data.results, filters: filters});
            });
        }
        else if(this.validateFilterValueChanges(filters)){
            axios.get(BaseUrl + '/discover/movie?api_key=' + ApiKey + this.getParametersString(filters))
            .then(res => {
                this.setState({movies: res.data.results, filters: filters});
            });
        }

        // if(!this.isFiltersSetToDefaultValues(filters) && this.isFilterValuesValid(filters))
        //     this.setState({movies: getFilteredMovies(filters)})
        // else
        //     this.setState({movies: generateMovieDummyData()});
    }

    render(){
        return(
            <div className="home-container">
                <p className="label-movie-count">All Movies: <span className="movie-count-border">{this.state.movies.length}</span></p>
                <MovieFilter filters={this.state.filters} filtersRefData={this.state.filtersRefData} onFilterChange={this.onFilterChange}/>
                <MoviesList movies={this.state.movies}/>
            </div>
        );
    }
};

export default Home;