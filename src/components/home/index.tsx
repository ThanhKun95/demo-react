import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '~/app/hooks';
import { articleActions } from '~/features/article/ArticleSlice';
import Blog from '../Blog';
import './Home.scss';
import SubSidebarHome from './SubSidebarHome';
import { updateUserActions } from './../../features/updateUser/UpdateUserSlice';
import { currUserActions } from '~/features/currUser/CurrUserSlice';
function Home() {
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(articleActions.GET_ARTICLE());
		dispatch(currUserActions.GET_USER_CURR());
		// dispatch(currUserActions.GET_USER_CURR());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	const { auth, articles } = useAppSelector((state) => state);
	const listArticles = articles.articles.articles;
	return (
		<div>
			{auth.isLoggedIn && <SubSidebarHome />}
			<Blog articles={listArticles} />
		</div>
	);
}

export default Home;
