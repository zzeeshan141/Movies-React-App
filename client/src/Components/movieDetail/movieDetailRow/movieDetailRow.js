import React, { Component} from 'react';
import './../style/style.scss';
import moment from 'moment';

class MovieDetailRow extends Component{

    renderMovieAttributes(movieAttributes){
        return Object.keys(movieAttributes).map((key, index) => {
            return (<div key={index} className="movie-detail-attr-main">
                        <div className="movie-detail-attr-name"><p>{key}</p></div>
                        {this.renderMovieAttributesValues(movieAttributes[key])}
                    </div>);
            });
    }
    
    renderMovieAttributesValues(movieAttributesValues){
        if(typeof movieAttributesValues == "object")
        {
            if(Array.isArray(movieAttributesValues)){
                return movieAttributesValues.map((movieAttributesValue, index) => {
                    return (<div key={index} className="movie-detail-attr-value"><p>{movieAttributesValue}</p></div>);
                });
            }
            if(movieAttributesValues instanceof Date)
                return (<div className="movie-detail-attr-value"><p>{moment(movieAttributesValues.toDateString()).format('ll')}</p></div>);
                
        }
        return (<div className="movie-detail-attr-value"><p>{movieAttributesValues}</p></div>)
    }

    render(){
        return (
            <div className="movie-time-row">
                {this.renderMovieAttributes(this.props.movieAttributes)}
            </div>
        );
    }
};

export default MovieDetailRow;