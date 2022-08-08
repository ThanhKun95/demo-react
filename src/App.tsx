import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Settings from './components/settings';
import Editor from './components/editor';
import User from './components/user';
import { NavLink } from 'react-router-dom';
function App() {
    return (
        <div className="App">
            <div className="background-main">
                <img src="https://wallpaperaccess.com/full/1841157.jpg" alt="" />
            </div>
            <NavLink to="/" className="logo-main">
                <div className="k">K</div>
                <div className="s">S</div>
                <div className="c">C</div>
            </NavLink>
            <Routes>
                <Route path={'/'} element={<Home />} />
                <Route path={'/settings'} element={<Settings />} />
                <Route path={'/editor'} element={<Editor />} />
                <Route path={'/user'} element={<User />} />
            </Routes>
        </div>
    );
}

export default App;
