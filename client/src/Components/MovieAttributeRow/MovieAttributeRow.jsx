import React from 'react';
import styles from './MovieAttributeRow.module.scss';
import moment from 'moment';

function renderMovieAttributes(movieAttributes){
    return Object.keys(movieAttributes).map((key, index) => {
        return (<div key={index} className={styles["movie-detail-attr-main"]}>
                    <div className={styles["movie-detail-attr-name"]}><p>{key}</p></div>
                    {renderMovieAttributesValues(movieAttributes[key])}
                </div>);
        });
}

function renderMovieAttributesValues(movieAttributesValues){
    if(typeof movieAttributesValues == "object")
    {
        if(Array.isArray(movieAttributesValues)){
            return movieAttributesValues.map((movieAttributesValue, index) => {
                return (<div key={index} className={styles["movie-detail-attr-value"]}><p>{movieAttributesValue}</p></div>);
            });
        }
        if(movieAttributesValues instanceof Date)
            return (<div className={styles["movie-detail-attr-value"]}><p>{moment(movieAttributesValues.toDateString()).format('ll')}</p></div>);
            
    }
    return (<div className={styles["movie-detail-attr-value"]}><p>{movieAttributesValues}</p></div>)
}

const MovieAttributeRow = ({movieAttributes}) => {
    return (
        <div className={styles["movie-time-row"]}>
            {renderMovieAttributes(movieAttributes)}
        </div>
    );

};

export default MovieAttributeRow;