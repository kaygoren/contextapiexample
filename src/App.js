import React from 'react';
import logo from './logo.svg';
import './App.css';

import PersonalList from "./components/PersonalList";
import WholeList from "./components/WholeList";
import {VideoProvider} from "./components/VideoContext";

function App() {
  return (
      <VideoProvider>
        <div className="App">
          <WholeList />
          <PersonalList/>
        </div>
      </VideoProvider>
  );
}

export default App;
