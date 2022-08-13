import { Navigate, NavLink, Route, Routes, useParams } from 'react-router-dom';
import Editor from './components/editor';
import Home from './components/home';
import Profile from './components/profile/index';
import Settings from './components/settings';
import User from './components/user';
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
				<Route path={'*'} element={<Navigate replace to="/" />} />
			</Routes>
		</div>
	);
}

export default App;
