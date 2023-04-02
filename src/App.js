import React from 'react';
import NavBar from './componants/NavBar/NavBar';
import {orginals ,action} from './urls'
import './App.css'
import Banner from './componants/Banner/Banner';
import RowPost from './componants/RowPost/RowPost';

function App() {
  return (
    <div className="App">

     <NavBar />
     <Banner />
     <RowPost url={orginals} title='Netflix Orginals'   />
     <RowPost url={action} title='Action'  isSmall />

    </div>
  );
}

export default App;
