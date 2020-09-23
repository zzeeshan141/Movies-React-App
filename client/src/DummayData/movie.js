import _ from 'lodash';

export function generateMovieDummyData(){
    return [
        {
            id: 11,
            title: 'The Martian',
            genres: ['Drama', 'Adventure', 'Sci-Fi'],
            image: require("E:/Training/React Training NBS/Assignments/Assignment-02/TMDB/client/src/assets/images/The Martian (2015).jpg"),
            releaseDate: new Date('2015-10-02'),
            rating: '8.0',
            languages: ['English'],
            overview: 'A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team. ',
            runtime: '122',
            publicationCompanies: ['DC Entertainment', 'Warner Bros. pictures', 'B Warner Bros. pictures', 'C Warner Bros. pictures', 'D Warner Bros. pictures', 'E Warner Bros. pictures', 'F Warner Bros. pictures', 'G Warner Bros. pictures', 'H Warner Bros. pictures'],
            reviews: [
                {
                    author: "Bruce Wayn",
                    excerpt: "Very Good Movie.",
                },
                {
                    author: "Bruce Wayn",
                    excerpt: "A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team. ",
                },
                {
                    author: "Bruce Wayn",
                    excerpt: "Very Good Movie.",
                },
                {
                    author: "Bruce Wayn",
                    excerpt: "Very Good Movie.",
                },
                {
                    author: "Bruce Wayn",
                    excerpt: "Very Good Movie.",
                },
                {
                    author: "Bruce Wayn",
                    excerpt: "Very Good Movie.",
                },
                {
                    author: "Bruce Wayn",
                    excerpt: "Very Good Movie.",
                },
                {
                    author: "Bruce Wayn",
                    excerpt: "Very Good Movie.",
                },
                {
                    author: "Bruce Wayn",
                    excerpt: "Very Good Movie.",
                },
                {
                    author: "Bruce Wayn",
                    excerpt: "Very Good Movie.",
                },
            ]
        },
        {
            id: 12,
            title: 'The Revenant',
            genres: ['Drama', 'Adventure', 'Action'],
            image: require("E:/Training/React Training NBS/Assignments/Assignment-02/TMDB/client/src/assets/images/The Revenant (2015).jpg"),
            releaseDate: new Date('2016-01-08'),
            rating: '8.0',
            languages: ['English'],
            overview: 'B frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team. ',
            runtime: '133',
            publicationCompanies: ['DC Entertainment', 'Warner Bros. pictures', 'B Warner Bros. pictures', 'C Warner Bros. pictures', 'D Warner Bros. pictures', 'E Warner Bros. pictures', 'F Warner Bros. pictures', 'G Warner Bros. pictures', 'H Warner Bros. pictures'],
            reviews: []
        },
        {
            id: 6,
            title: 'Lights Out',
            genres: ['Horror', 'Drama', 'Mystery'],
            image: require("E:/Training/React Training NBS/Assignments/Assignment-02/TMDB/client/src/assets/images/Lights Out (2016).jpg"),
            releaseDate: new Date('2016-07-22'),
            rating: '6.3',
            languages: ['English'],
            overview: 'C frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team. ',
            runtime: '222',
            publicationCompanies: ['DC Entertainment', 'Warner Bros. pictures', 'B Warner Bros. pictures', 'C Warner Bros. pictures', 'D Warner Bros. pictures', 'E Warner Bros. pictures', 'F Warner Bros. pictures', 'G Warner Bros. pictures', 'H Warner Bros. pictures'],
            reviews: []
        },
        {
            id: 1,
            title: 'Avengers: Age of Ultron',
            genres: ['Action', 'Adventure', 'Sci-Fi'],
            image: require("E:/Training/React Training NBS/Assignments/Assignment-02/TMDB/client/src/assets/images/Avengers Age of Ultron (2015).jpg"),
            releaseDate: new Date('2015-05-01'),
            rating: '7.3',
            languages: ['English', 'German', 'French'],
            overview: 'D frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team. ',
            runtime: '322',
            publicationCompanies: ['DC Entertainment', 'Warner Bros. pictures', 'B Warner Bros. pictures', 'C Warner Bros. pictures', 'D Warner Bros. pictures', 'E Warner Bros. pictures', 'F Warner Bros. pictures', 'G Warner Bros. pictures', 'H Warner Bros. pictures'],
            reviews: []
        },
        {
            id: 2,
            title: 'Captain America: Civil War',
            genres: ['Action', 'Adventure', 'Sci-Fi'],
            image: require("E:/Training/React Training NBS/Assignments/Assignment-02/TMDB/client/src/assets/images/Captain America Civil War (2016).jpg"),
            releaseDate: new Date('2016-05-06'),
            rating: '7.8',
            languages: ['English', 'German', 'French'],
            overview: 'E frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team. ',
            runtime: '422',
            publicationCompanies: ['DC Entertainment', 'Warner Bros. pictures', 'B Warner Bros. pictures', 'C Warner Bros. pictures', 'D Warner Bros. pictures', 'E Warner Bros. pictures', 'F Warner Bros. pictures', 'G Warner Bros. pictures', 'H Warner Bros. pictures']            ,
            reviews: []
        },
        {
            id: 3,
            title: 'Deadpool',
            genres: ['Action', 'Adventure', 'Comedy'],
            image: require("E:/Training/React Training NBS/Assignments/Assignment-02/TMDB/client/src/assets/images/Deadpool (2016).jpg"),
            releaseDate: new Date('2016-02-12'),
            rating: '8.0',
            languages: ['English'],
            overview: 'F frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team. ',
            runtime: '522',
            publicationCompanies: ['DC Entertainment', 'Warner Bros. pictures', 'B Warner Bros. pictures', 'C Warner Bros. pictures', 'D Warner Bros. pictures', 'E Warner Bros. pictures', 'F Warner Bros. pictures', 'G Warner Bros. pictures', 'H Warner Bros. pictures'],
            reviews: []
        },
        {
            id: 4,
            title: 'Get Out',
            genres: ['Horror', 'Mystery', 'Thriller'],
            image: require("E:/Training/React Training NBS/Assignments/Assignment-02/TMDB/client/src/assets/images/Get Out (2017).jpg"),
            releaseDate: new Date('2017-02-24'),
            rating: '7.7',
            languages: ['English'],
            overview: 'G frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team. ',
            runtime: '622',
            publicationCompanies: ['DC Entertainment', 'Warner Bros. pictures', 'B Warner Bros. pictures', 'C Warner Bros. pictures', 'D Warner Bros. pictures', 'E Warner Bros. pictures', 'F Warner Bros. pictures', 'G Warner Bros. pictures', 'H Warner Bros. pictures'],
            reviews: []
        },
        {
            id: 5,
            title: 'Life of Pi',
            genres: ['Adventure', 'Drama', 'Fantasy'],
            image: require("E:/Training/React Training NBS/Assignments/Assignment-02/TMDB/client/src/assets/images/Life of Pi (2012).jpg"),
            releaseDate: new Date('2012-11-21'),
            rating: '7.9',
            languages: ['English'],
            overview: 'H frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team. ',
            runtime: '722',
            publicationCompanies: ['DC Entertainment', 'Warner Bros. pictures', 'B Warner Bros. pictures', 'C Warner Bros. pictures', 'D Warner Bros. pictures', 'E Warner Bros. pictures', 'F Warner Bros. pictures', 'G Warner Bros. pictures', 'H Warner Bros. pictures'],
            reviews: []
        },
        {
            id: 7,
            title: 'Spider-Man: Homecoming',
            genres: ['Horror', 'Thriller'],
            image: require("E:/Training/React Training NBS/Assignments/Assignment-02/TMDB/client/src/assets/images/Spider man homecoming (2017).jpg"),
            releaseDate: new Date('2017-07-07'),
            rating: '7.4',
            languages: ['English'],
            overview: 'I frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team. ',
            runtime: '822',
            publicationCompanies: ['DC Entertainment', 'Warner Bros. pictures', 'B Warner Bros. pictures', 'C Warner Bros. pictures', 'D Warner Bros. pictures', 'E Warner Bros. pictures', 'F Warner Bros. pictures', 'G Warner Bros. pictures', 'H Warner Bros. pictures'],
            reviews: []
        },
        {
            id: 8,
            title: 'Split',
            genres: ['Action', 'Adventure', 'Sci-Fi'],
            image: require("E:/Training/React Training NBS/Assignments/Assignment-02/TMDB/client/src/assets/images/Split (2016).jpg"),
            releaseDate: new Date('2018-01-20'),
            rating: '7.3',
            languages: ['English'],
            overview: 'J frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team. ',
            runtime: '922',
            publicationCompanies: ['DC Entertainment', 'Warner Bros. pictures', 'B Warner Bros. pictures', 'C Warner Bros. pictures', 'D Warner Bros. pictures', 'E Warner Bros. pictures', 'F Warner Bros. pictures', 'G Warner Bros. pictures', 'H Warner Bros. pictures'],
            reviews: []
        },
        {
            id: 9,
            title: 'The Conjuring',
            genres: ['Horror', 'Mystery', 'Thriller'],
            image: require("E:/Training/React Training NBS/Assignments/Assignment-02/TMDB/client/src/assets/images/The Conjuring (2013).jpg"),
            releaseDate: new Date('2013-07-19'),
            rating: '7.5',
            languages: ['English'],
            overview: 'K frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team. ',
            runtime: '1022',
            publicationCompanies: ['DC Entertainment', 'Warner Bros. pictures', 'B Warner Bros. pictures', 'C Warner Bros. pictures', 'D Warner Bros. pictures', 'E Warner Bros. pictures', 'F Warner Bros. pictures', 'G Warner Bros. pictures', 'H Warner Bros. pictures'],
            reviews: []
        },
        {
            id: 10,
            title: 'The Imitation Game',
            genres: ['Biography', 'Drama', 'Thriller'],
            image: require("E:/Training/React Training NBS/Assignments/Assignment-02/TMDB/client/src/assets/images/The Imitation Game (2014).jpg"),
            releaseDate: new Date('2014-12-25'),
            rating: '8.0',
            languages: ['English'],
            overview: 'L frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team. ',
            runtime: '1122',
            publicationCompanies: ['DC Entertainment', 'Warner Bros. pictures', 'B Warner Bros. pictures', 'C Warner Bros. pictures', 'D Warner Bros. pictures', 'E Warner Bros. pictures', 'F Warner Bros. pictures', 'G Warner Bros. pictures', 'H Warner Bros. pictures'],
            reviews: []
        },
    ];
}

export function getFilteredMovies(filters){
    let movies = generateMovieDummyData();
    let filteredMovies = [];
    let alreadyAdded = false;
    movies.forEach((movie, index) => {
        alreadyAdded = false;
        if(filters.titleSearch != '' && filters.titleSearch.length > 0
            && movie.title.toLowerCase().includes(filters.titleSearch.toLowerCase())){
                filteredMovies.push(movie);
                alreadyAdded = true;
        }
        if(!alreadyAdded && filters.genre != ''
            && movie.genres.some((genre) => {return genre.toLowerCase() == filters.genre.toLowerCase()}) === true){
                filteredMovies.push(movie);
        }
        if(!alreadyAdded && filters.releaseDate > 0
            && movie.releaseDate.getFullYear() == filters.releaseDate){
                filteredMovies.push(movie);
        }
        if(!alreadyAdded && filters.rating > 0
            && movie.rating >= filters.rating){
                filteredMovies.push(movie);
        }
        if(!alreadyAdded && filters.language != '' && filters.language.length > 0
            && movie.languages.some((language) => {return language.toLowerCase() == filters.language.toLowerCase()}) === true){
                filteredMovies.push(movie);
        }
    });

    if(filters.sortBy == 2)
        return _.orderBy(filteredMovies, ['rating'], ['asc']);
    if(filters.sortBy == 3)
        return _.orderBy(filteredMovies, ['rating'], ['desc']);

    return filteredMovies;
}

export function getMovieById(id){
    let movies = generateMovieDummyData();
    return movies.find((movie) => {
        return movie.id == id;
    })
}
