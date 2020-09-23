import React from 'react';
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";

import Header from './header/header';
import Home from './home/home';
import Favourites from './favourites/favourites';
import UpcomingMvies from './upcomingMovies/upcomingMovies';
import Search from './search/search';
import MovieDetail from './movieDetail/movieDetail';
import './app.css';


function App() {
  return (
    <div className="main-div">
      <Router>
        <div className="main-div">
            <Header />
            <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/favourites" exact component={Favourites}></Route>
                <Route path="/upcomingmovies" exact component={UpcomingMvies}></Route>
                <Route path="/search" exact component={Search}></Route>
                <Route path="/movie/:id" exact component={MovieDetail}></Route>
            </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
