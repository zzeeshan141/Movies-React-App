
export function extractPropertiedForRowOne(movie){
    return {'Runtime (min.)': movie.runtime, 'Release Date': movie.release_date};
}

export function extractPropertiedForRowTwo(movie){
    return {'Genre': movie.genres.map(genre => {return genre.name})};
}

export function extractPropertiedForRowThree(movie){
    return {'Spoken Langauge': movie.spoken_languages.map(language => {return language.name})};
}

export function extractPropertiedForRowFour(movie){
    return {'Production Companies': movie.production_companies.map(company => {return company.name})};
}