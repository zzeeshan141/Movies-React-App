import _ from 'lodash';

export function generateReleaseYearDummyData(){
    let releaseYear = [
        {
            id: 1,
            value: 2010   
        },
        {
            id: 2,
            value: 2011   
        },
        {
            id: 3,
            value: 2012   
        },
        {
            id: 4,
            value: 2013   
        },
        {
            id: 5,
            value: 2014   
        },
        {
            id: 6,
            value: 2015   
        },
        {
            id: 7,
            value: 2016   
        },
        {
            id: 8,
            value: 2017   
        },
        {
            id: 9,
            value: 2018   
        },
        {
            id: 10,
            value: 2019   
        },
        {
            id: 11,
            value: 2020   
        },
    ];

    return _.orderBy(releaseYear, ['value'], ['desc']);
}
