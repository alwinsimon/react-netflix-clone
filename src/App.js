import React from 'react';

import './App.css';

import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';

import { TMDB_MOVIES_SUGGESTION_URL, TMDB_MOVIES_ACTION_URL } from './constants/constants';


function App() {

  return (

    <div className="App">
      
      <NavBar/>

      <Banner/>

      <RowPost title="Netflix Originals" url={TMDB_MOVIES_SUGGESTION_URL} />

      <RowPost title="Netflix Action" url={TMDB_MOVIES_ACTION_URL} isSmall />

    </div>

  );

}

export default App;
