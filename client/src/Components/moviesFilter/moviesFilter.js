import React, { Component} from 'react';
import LabelAndInput from './../sharedComponents/labelAndInput/labelAndInput';
import LabelAndSelect from './../sharedComponents/labelAndSelect/labelAndSelect';
import {sortByTopRated,
    sortByLatest} from './../../DummayData/sortBy';
import {generateGenreDummyData} from './../../DummayData/genre.js';
import {generateRatingDummyData} from './../../DummayData/rating';
import {generateSortByDummyData} from './../../DummayData/sortBy';
import {generateLanguageDummyData} from './../../DummayData/language';
import {generateReleaseYearDummyData} from './../../DummayData/releaseDate';
import './style/style.scss';

class MovieFilter extends Component{

    constructor(props){
        super(props);

        this.state = {
            titleSearch: '',
            genre: 0,
            releaseDate: 0,
            rating: 0,
            sortBy: 1,
            language: ''
        }

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onGenreChange = this.onGenreChange.bind(this);
        this.onReleaseYearChange = this.onReleaseYearChange.bind(this);
        this.onRatingChange = this.onRatingChange.bind(this);
        this.onLanguageChange = this.onLanguageChange.bind(this);
        this.onSortByChange = this.onSortByChange.bind(this);
    }

    componentDidMount(){
    }

    onTitleChange(title){
        let tempState = this.state;
        tempState.titleSearch = title;
        this.setState(tempState);
        if(title != undefined && title.length >= 3){
            this.props.onFilterChange(tempState);
        }
    }

    onGenreChange(genre, genreId){
        let tempState = this.state;
        tempState.genre = genre.toLowerCase() == 'all' ? 0 : parseInt(genreId);
        this.setState(tempState);
        if(genre != undefined && genre.length >= 0){
            this.props.onFilterChange(tempState);
        }
    }

    onReleaseYearChange(year){
        let tempState = this.state;
        tempState.releaseDate = year.toLowerCase() == 'all' ? 0 : parseInt(year);
        this.setState(tempState);
        if(year >= 0){
            this.props.onFilterChange(tempState);
        }
    }

    onRatingChange(rating){
        let tempState = this.state;
        tempState.rating = rating.toLowerCase() == 'all' ? 0 : parseInt(rating);
        this.setState(tempState);
        if(rating >= 0){
            this.props.onFilterChange(tempState);
        }
    }

    onLanguageChange(language){
        let tempState = this.state;
        tempState.language = language.toLowerCase() == 'all' ? '' : language;
        this.setState(tempState);
        if(language != undefined && language.length >= 0){
            this.props.onFilterChange(tempState);
        }
    }

    onSortByChange(sortBy, sortById){
        let tempState = this.state;
        tempState.sortBy = parseInt(sortById);
        this.setState(tempState);
        this.props.onFilterChange(tempState);
    }

    render(){
        return(
            <div className="filter-container">
                <div className="filter-container-row">
                    <LabelAndInput labelText="List Filtering: " value={this.state.titleSearch} placeholder="Title Search" onTitleChange={this.onTitleChange}/>
                    <LabelAndSelect labelText="Genre: " useDefaultOption={true} items={this.props.filtersRefData.genres} onChange={this.onGenreChange}/>
                </div>
                <div className="filter-container-row">
                    <LabelAndSelect labelText="Release Year: " useDefaultOption={true} items={this.props.filtersRefData.year} onChange={this.onReleaseYearChange}/>
                    <LabelAndSelect labelText="Ratings: " useDefaultOption={true} items={this.props.filtersRefData.ratings} onChange={this.onRatingChange}/>
                    <LabelAndSelect labelText="Sort By: " useDefaultOption={false} items={this.props.filtersRefData.sortBy} onChange={this.onSortByChange}/>
                    <LabelAndSelect labelText="Language: " useDefaultOption={true} items={this.props.filtersRefData.languages}  onChange={this.onLanguageChange}/>
                </div>
            </div>
        );
    }
};

export default MovieFilter;