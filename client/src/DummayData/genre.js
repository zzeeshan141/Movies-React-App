import _ from 'lodash';

export function generateGenreDummyData(){
    let genre = [
        {
            id: 1,
            value: "Horror"   
        },
        {
            id: 2,
            value: "Thriller"   
        },
        {
            id: 3,
            value: "Sci-Fi"   
        },
        {
            id: 4,
            value: "Fantasy"   
        },
        {
            id: 5,
            value: "Action"   
        },
        {
            id: 6,
            value: "Drama"   
        },
        {
            id: 7,
            value: "Adventure"   
        },
        {
            id: 8,
            value: "Mystery"   
        },
        {
            id: 9,
            value: "Biography"   
        },
    ];

    return _.orderBy(genre, ['value'], ['asc']);
}
