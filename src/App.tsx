import { Navigate, Route, Routes } from 'react-router-dom';
import ArticleComp from './components/ArticleComp';
import BackStage from './components/backstage';
import Editor from './components/editor';
import Home from './components/home';
import Personal from './components/personal';

import Settings from './components/settings';
import User from './components/user';
function App() {
	return (
		<div className="App">
			<BackStage />
			<Routes>
				<Route path={'/'} element={<Home />} />
				<Route path={'/settings'} element={<Settings />} />
				<Route path={'/editor'} element={<Editor />} />
				<Route path={'/editor/:slugUpdate'} element={<Editor />} />

				<Route path={'/user'} element={<User />} />
				<Route path={'/:personalPage'} element={<Personal />} />
				<Route path={'/:personalPage/favorite'} element={<Personal />} />

				<Route path={'/article/:slugPage'} element={<ArticleComp />} />
				<Route path={'/article/:username/follow'} element={<Home />} />
				<Route path={'*'} element={<Navigate replace to="/" />} />
			</Routes>
		</div>
	);
}

export default App;
