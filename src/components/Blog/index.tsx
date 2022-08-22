/* eslint-disable react-hooks/exhaustive-deps */
import { Avatar, Card, Input } from 'antd';
import moment from 'moment';
import { memo, useCallback, useEffect, useRef } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useAppDispatch, useAppSelector } from '~/app/hooks';
import { ArrowEnter, ButtonHeart, Comment, Share } from '~/components/Button';
import { articleActions } from '~/features/article/ArticleSlice';
import { commentActions } from '~/features/comment/CommentSlice';
import { Article } from '~/models';
import './Blog.scss';
import CommentBlog from './CommentBlog';
import MenuBlog from './MenuBlog';
const { Meta } = Card;

function Blog({ articles: articlesList, more }: any) {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const { slugPage } = useParams();
	const { comments, articles, auth } = useAppSelector((state) => state);

	useEffect(() => {
		return () => {
			dispatch(commentActions.UPDATE_COMMENT_RESET());
		};
	}, [slugPage]);

	useEffect(() => {
		if (slugPage) {
			dispatch(commentActions.GET_COMMENT(slugPage));
		}
	}, []);
	useEffect(() => {
		if (comments.comments.length > 0 && slugPage) {
			dispatch(commentActions.GET_COMMENT(slugPage));
		}
	}, [comments.comments.length]);
	const rand = useCallback(() => {
		return Math.floor(Math.random() * 90);
	}, []);
	const inputEl = useRef<any>();
	const handleUpdateComment = (slug: string) => {
		if (inputEl && inputEl.current.input.value !== '') {
			const data = inputEl && {
				slug,
				data: {
					comment: {
						body: inputEl.current.input.value,
					},
				},
			};
			dispatch(commentActions.UPDATE_COMMENT(data));
		}
	};
	const handleFavorite = (favorited: boolean, slug: string) => {
		if (!articles.isFavorite) {
			if (!favorited) {
				dispatch(articleActions.FAVORITE(slug));
			}
			if (favorited) {
				dispatch(articleActions.UNFAVORITE(slug));
			}
		}
	};
	return (
		<div style={{ marginTop: '70px' }}>
			{articlesList &&
				articlesList.length > 0 &&
				articlesList.map((article: Article) => {
					const {
						slug,
						title,
						description,
						tagList,
						createdAt,
						author,
						favorited,
						favoritesCount,
					} = article;

					const itemComment = () => {
						const item = slugPage ? (
							<span
								onClick={() => {
									inputEl.current.focus();
								}}
							>
								<Comment />
							</span>
						) : (
							<NavLink to={`/article/${slug}`}>
								<Comment />
							</NavLink>
						);
						return item;
					};
					return (
						<Card key={uuidv4()} className="card-container" style={{ padding: 0 }}>
							{/* User */}
							<div
								style={{
									display: 'flex',
									justifyContent: 'space-between',
								}}
							>
								<Meta
									avatar={
										<span
											className="cursor-pointer"
											onClick={() => {
												navigate(`/${author.username}`);
											}}
										>
											<Avatar
												src={author.image}
												style={{ width: '60px', height: '60px' }}
											/>{' '}
										</span>
									}
									title={
										<span
											className="cursor-pointer"
											onClick={() => {
												navigate(`/${author.username}`);
											}}
										>
											{author.username}
										</span>
									}
									description={moment(createdAt).format('DD MMMM YYYY')}
									style={{ padding: ' 24px' }}
								/>

								{/* Menu */}
								{auth.dataAuth?.user?.username === author.username && (
									<MenuBlog slug={slug} />
								)}
							</div>
							<div>
								<Card
									bordered={false}
									style={{
										padding: '0 24px ',
										textAlign: 'start',
										fontWeight: 'bold',
									}}
								>
									{title}
								</Card>
								<span
									style={{
										padding: '0 24px ',
										textAlign: 'start',
									}}
								>
									{tagList.map((tag: string) => (
										<NavLink to={`/article/${slug}`} key={tag}>
											{' '}
											#{tag}
										</NavLink>
									))}
								</span>
								<Card
									bordered={false}
									style={{ padding: '0 24px 24px 24px ', textAlign: 'start' }}
								>
									{description}
								</Card>
								{/* <!-- Card img --> */}
								<Card
									style={{ width: '100%', border: 'none' }}
									cover={
										<div className="img-container-blog">
											<img
												alt="example"
												className="img-container-item"
												src={
													'https://picsum.photos/' +
													(200 + rand()) +
													'/' +
													(200 + rand()) +
													'?random=1'
												}
											/>
										</div>
									}
								/>
							</div>
							{favoritesCount !== 0 && (
								<div className="favorite">
									<span className="favorite-icon">
										<AiFillHeart />
									</span>
									{favoritesCount}
								</div>
							)}
							<Card
								className="card-action"
								style={{ width: '100%', border: 0 }}
								actions={[
									<span
										onClick={() => {
											handleFavorite(favorited, slug);
										}}
									>
										<ButtonHeart liked={favorited} />
									</span>,
									itemComment(),
									<Share />,
								]}
							/>
							{slugPage && (
								<Input
									ref={inputEl}
									placeholder="White a comment..."
									addonAfter={
										<Card
											style={{
												height: '38px',
												border: 0,
												display: 'flex',
												alignItems: 'center',
												overflow: 'hidden',
											}}
											actions={[
												<span
													className="abc"
													style={{
														backgroundColor: '#eef0f2',
														padding: 0,
													}}
													onClick={() => {
														handleUpdateComment(slug);
													}}
												>
													<ArrowEnter />
												</span>,
											]}
										/>
									}
								/>
							)}
							{more && (
								<div
									style={{
										textAlign: 'start',
										padding: '0 0 20px 30px ',
										fontWeight: 700,
										color: '#65676b',
									}}
								>
									<NavLink
										to={`/article/${slug}`}
										className="cursor-pointer"
										style={{ color: 'var(--text-shadow' }}
										// onClick={() => {
										// 	dispatch(commentActions.GET_COMMENT(slug));
										// }}
									>
										{more}
									</NavLink>
								</div>
							)}
							<CommentBlog />
							{/* <!-- Card footer END --> */}
						</Card>
					);
				})}
		</div>
	);
}

export default memo(Blog);
