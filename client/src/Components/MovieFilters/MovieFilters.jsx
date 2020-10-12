import React, { useState, useEffect} from 'react';
import LabelAndInput from './../shared/LabelAndInput';
import LabelAndSelect from './../shared/LabelAndSelect';
import styles from './MovieFilters.module.scss';

const MovieFilters = ({filtersRefData, onFilterChange, filterCurrentState}) => {
    const [titleSearch, setTitleSearch] = useState('');
    const [genre, setGenre] = useState(0);
    const [releaseDate, setReleaseDate] = useState(0);
    const [rating, setRating] = useState(0);
    const [sortBy, setSortBy] = useState(1);
    const [language, setLanguage] = useState('');

    useEffect(() => {
        if(titleSearch != undefined && titleSearch.length >= 3){
            onFilterChange({titleSearch, genre, releaseDate, rating, sortBy, language});
        }
    }, [titleSearch]);

    useEffect(() => {
        if(genre > 0){
            onFilterChange({titleSearch, genre, releaseDate, rating, sortBy, language});
        }
    }, [genre]);

    useEffect(() => {
        if(releaseDate >= 0){
            onFilterChange({titleSearch, genre, releaseDate, rating, sortBy, language});
        }
    }, [releaseDate]);

    useEffect(() => {
        if(rating >= 0){
            onFilterChange({titleSearch, genre, releaseDate, rating, sortBy, language});
        }
    }, [rating]);

    useEffect(() => {
        onFilterChange({titleSearch, genre, releaseDate, rating, sortBy, language});
    }, [sortBy]);

    useEffect(() => {
        if(language != undefined && language.length >= 0){
            onFilterChange({titleSearch, genre, releaseDate, rating, sortBy, language});
        }
    }, [language]);

    return(
        <div className={styles["filter-container"]}>
            <div className={styles["filter-container-row"]}>
                <LabelAndInput labelText="List Filtering: " value={titleSearch} placeholder="Title Search" onTitleChange={newTitle => setTitleSearch(newTitle)}/>
                <LabelAndSelect labelText="Genre: " useDefaultOption={true} items={filtersRefData.genres} onChange={(newGenre, newGenreId) => setGenre(newGenre.toLowerCase() === 'all' ? 0 : parseInt(newGenreId))}/>
            </div>
            <div className={styles["filter-container-row"]}>
                <LabelAndSelect labelText="Release Year: " useDefaultOption={true} items={filtersRefData.year} onChange={newReleaseDate => setReleaseDate(newReleaseDate.toLowerCase() === 'all' ? 0 : parseInt(newReleaseDate))}/>
                <LabelAndSelect labelText="Ratings: " useDefaultOption={true} items={filtersRefData.ratings} onChange={newRating => setRating(newRating.toLowerCase() === 'all' ? 0 : parseInt(newRating))}/>
                <LabelAndSelect labelText="Sort By: " useDefaultOption={false} items={filtersRefData.sortBy} onChange={(newSortBy, newSortById) => setSortBy(parseInt(newSortById))}/>
                <LabelAndSelect labelText="Language: " useDefaultOption={true} items={filtersRefData.languages} onChange={newLangauge => setLanguage(newLangauge.toLowerCase() === 'all' ? '' : newLangauge)}/>
            </div>
        </div>
    );
};

export default MovieFilters;