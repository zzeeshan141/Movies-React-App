import React from 'react';
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";

import Header from './Components/Header';
import Home from './Pages/Home';
import FavouriteMovies from './Pages/FavouriteMovies';
import UpcomingMovies from './Pages/UpcomingMovies';
import Search from './Pages/Search';
import MovieDetail from './Pages/MovieDetail';
import './App.module.css';


function App() {
  return (
    <div className="main-div">
      <Router>
        <div className="main-div">
            <Header />
            <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/favourites" exact component={FavouriteMovies}></Route>
                <Route path="/upcomingmovies" exact component={UpcomingMovies}></Route>
                <Route path="/search" exact component={Search}></Route>
                <Route path="/movie/:id" exact component={MovieDetail}></Route>
            </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
