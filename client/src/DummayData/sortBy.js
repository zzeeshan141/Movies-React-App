
export const sortByPopularity = 'Popularity';
export const sortByTopRated = 'Top Rated';
export const sortByLatest = 'Latest';

export function generateSortByDummyData(){
    return [
        {
            id: 1,
            value: sortByPopularity   
        },
        {
            id: 2,
            value: sortByTopRated   
        },
        {
            id: 3,
            value: sortByLatest   
        }
    ];
}
