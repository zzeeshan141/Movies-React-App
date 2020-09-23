import React, { Component} from 'react';
import './../style/style.scss';

class MovieReviews extends Component{

    renderReviews(reviews){
        return reviews.map((review, index) => {
            return (<tr key={index}>
                <td>{review.author}</td>
                <td>{review.content}</td>
                <td><a href={review.url}>Full Review</a></td>
            </tr>)
        })
    }

    render(){
        return (
            <table>
                <tbody>
                    <tr>
                        <th>Author</th>
                        <th>Excerpt</th>
                        <th>More</th>
                    </tr>
                    {this.renderReviews(this.props.reviews)}
                </tbody>
            </table>
        );
    }
};

export default MovieReviews;