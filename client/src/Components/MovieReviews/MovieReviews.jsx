import React, { Component} from 'react';
import styles from './MovieReviews.module.scss'; // do not delete this line

function renderReviews(reviews){
    return reviews.map((review, index) => {
        return (<tr key={index}>
            <td>{review.author}</td>
            <td>{review.content}</td>
            <td><a href={review.url}>Full Review</a></td>
        </tr>)
    })
}

const MovieReviews = ({reviews}) => {

    return (
        <table>
            <tbody>
                <tr>
                    <th>Author</th>
                    <th>Excerpt</th>
                    <th>More</th>
                </tr>
                {renderReviews(reviews)}
            </tbody>
        </table>
    );
};

export default MovieReviews;