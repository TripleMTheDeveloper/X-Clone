import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed.js';
import Widgets from './components/Widgets.js';


function App() {
  return (
    //BEM
    <div className="app">
      <div className="app">
        <Sidebar />
        <Feed/>
        <Widgets/>
      </div>
    </div>
  );
}

export default App;
