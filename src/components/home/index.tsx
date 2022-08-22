/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '~/app/hooks';
import { articleActions } from '~/features/article/ArticleSlice';
import Blog from '../Blog';
import './Home.scss';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import SubSidebarHome from './SubSidebarHome';
import { tagsActions } from '~/features/tags/TagsSlice';
function Home() {
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(articleActions.GET_ARTICLE());
		dispatch(articleActions.ARTICLE_RESET());
		return () => {
			dispatch(tagsActions.RESET_TAG());
		};
	}, []);

	const { auth, articles } = useAppSelector((state) => state);

	const listArticles = articles.articles.articles;
	const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

	return (
		<div>
			{auth.isLoggedIn && <SubSidebarHome />}
			{listArticles && listArticles.length > 0 ? (
				<Blog articles={listArticles} more="Read more ..." />
			) : (
				<span className="spin-load">
					<Spin indicator={antIcon} />
				</span>
			)}
		</div>
	);
}

export default Home;
