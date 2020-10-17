import React from 'react';
import Navbar from './components/Navbar.js';
import SchoolCard from './components/SchoolCard.js';
import data from './nycSchoolEnrollmentData.js';

import './App.css';

function App() {
let School1 = data.schools[0]

  return (
    <div className="App">
      <Navbar/>
      <div className="container">
        <div className="row">
            <SchoolCard name= {School1.ENTITY_NAME} />
        </div>
      </div>
    </div>
  );
}

export default App;
