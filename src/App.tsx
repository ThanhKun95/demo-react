import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Settings from './components/settings';
import Editor from './components/editor';
import User from './components/user';
import { NavLink } from 'react-router-dom';
import Profile from './components/profile/index';
function App() {
    return (
        <div className="App">
            <div className="background-main">
                {/* <img src="https://wallpaperaccess.com/full/1841157.jpg" alt="" /> */}
            </div>
            <NavLink to="/" className="logo-main">
                <img src="https://cdn.pixabay.com/photo/2017/03/27/06/32/flower-2177523_1280.png" />
                <div className="k">K</div>
                <div className="s">S</div>
                <div className="c">C</div>
            </NavLink>
            <Routes>
                <Route path={'/'} element={<Home />} />
                <Route path={'/settings'} element={<Settings />} />
                <Route path={'/editor'} element={<Editor />} />
                <Route path={'/user'} element={<User />} />
                <Route path={'/:username'} element={<Profile />} />
                <Route path={'/article/:username'} element={<Home />} />
                <Route path={'/article/:username/follow'} element={<Home />} />
            </Routes>
        </div>
    );
}

export default App;
