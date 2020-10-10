

export function getParametersString(filters){
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