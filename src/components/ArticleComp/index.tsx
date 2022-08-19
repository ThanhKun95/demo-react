/* eslint-disable react-hooks/exhaustive-deps */
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '~/app/hooks';
import { articleActions } from '~/features/article/ArticleSlice';
import Blog from '../Blog';
function ArticleComp() {
	const { slugPage } = useParams();
	const dispatch = useAppDispatch();
	useEffect(() => {
		slugPage && dispatch(articleActions.GET_ARTICLE_BY_SLUG(slugPage));
	}, [slugPage]);
	const { articles } = useAppSelector((state) => state);
	const list = [articles.articles.article];
	const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

	return (
		<>
			{articles.articles.article ? (
				<Blog articles={list} />
			) : (
				<span className="spin-load">
					<Spin indicator={antIcon} />
				</span>
			)}
		</>
	);
}

export default ArticleComp;
