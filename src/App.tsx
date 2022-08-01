import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './styles/App.css';
import Home from './components/home';
import Settings from './components/settings';
import Editor from './components/editor';
import User from './components/user';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={ '/' } element={ <Home/> }/>
        <Route path={ '/settings' } element={ <Settings/> }/>
        <Route path={ '/editor' } element={ <Editor/> }/>
        <Route path={ '/user' } element={ <User/> }/>
      </Routes>
    </div>
  );
}

export default App;
