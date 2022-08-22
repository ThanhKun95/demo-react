/* eslint-disable react-hooks/exhaustive-deps */
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '~/app/hooks';
import { articleActions } from '~/features/article/ArticleSlice';
import { personalActions } from '~/features/personal/PersonalSlice';
import Blog from '../Blog';
import './Personal.scss';
import SubSidebarProfile from './SubSidebarProfile';

function Personal() {
	const { auth, articles } = useAppSelector((state) => state);
	const { personalPage } = useParams();

	const dispatch = useAppDispatch();
	useEffect(() => {
		if (personalPage) {
			dispatch(personalActions.GET_PERSONAL(personalPage));
			dispatch(articleActions.GET_ARTICLE_BY_AUTHOR(personalPage));
			dispatch(articleActions.ARTICLE_RESET());
		}
		return () => {
			dispatch(personalActions.RESET_PERSONAL());
		};
	}, []);
	const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
	const listArticles = articles.articles.articles;
	const { authorSuccess, isLoading } = articles;

	return (
		<div className="personal-container">
			{auth.isLoggedIn && <SubSidebarProfile />}
			{listArticles && listArticles.length > 0 && authorSuccess && (
				<Blog articles={listArticles} more="Read more ..." />
			)}
			{isLoading === false && authorSuccess && listArticles.length === 0 && (
				<div className="no-article">No articles are here... yet.</div>
			)}
			{isLoading === true && (
				<span className="spin-load">
					<Spin indicator={antIcon} />
				</span>
			)}
		</div>
	);
}

export default Personal;
