import { Avatar, Card, Input } from 'antd';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosClient from '~/api/axiosClient';
import { useAppDispatch, useAppSelector } from '~/app/hooks';
import { ButtonHeart, Comment, Share } from '../Button';

const { Meta } = Card;

interface Props {
	slug: string;
}
function CommentBlog({ slug }: Props) {
	const [show, setShow] = useState(false);
	const [res, setRes] = useState<any>();
	const navigate = useNavigate();
	const { auth } = useAppSelector((state) => state);

	const dispatch = useAppDispatch();
	useEffect(() => {
		axiosClient.get(`/articles/${slug}/comments`).then((res) => {
			setRes(res);
		});
	}, []);

	useEffect(() => {
		// slug && dispatch(commentActions.GET_COMMENT(slug));
	}, []);
	return (
		<div style={{ width: '100%' }}>
			<ul className="list-comment">
				<li className="comment-item">
					<Card
						className="card-action"
						style={{ width: '100%', border: 0 }}
						actions={[
							<ButtonHeart liked>15K</ButtonHeart>,
							<span
								onClick={() => {
									setShow(true);
								}}
							>
								<Comment>4000</Comment>
							</span>,
							<Share>20K</Share>,
						]}
					/>{' '}
					{auth.isLoggedIn && show && (
						<Input
							addonAfter={
								<Card
									style={{
										height: '38px',
										border: 0,
										display: 'flex',
										alignItems: 'center',
										overflow: 'hidden',
									}}
									actions={[<Comment />]}
								></Card>
							}
							defaultValue=""
							placeholder="White a comment..."
						/>
					)}
					{res &&
						show &&
						res.comments.map((res: any) => {
							const { id, author, body, createdAt } = res;
							return (
								<div key={id} style={{ marginBottom: 30 }}>
									<div className="user-UserContent">
										<Meta
											style={{ marginTop: '12px' }}
											avatar={
												<span
													className="cursor-pointer"
													onClick={() => {
														navigate(`/article/${author.username}`);
													}}
												>
													<Avatar
														src={
															author.image
																? author.image
																: 'https://cdn-icons-png.flaticon.com/512/149/149071.png'
														}
														style={{ width: '32px' }}
													/>
												</span>
											}
											title={
												<span
													className="cursor-pointer"
													onClick={() => {
														navigate(`/article/${author.username}`);
													}}
												>
													{author.username}
												</span>
											}
										/>
										<div>
											<Card
												bordered={false}
												style={{ margin: '12px 12px 12px 48px' }}
											>
												{body}
											</Card>
											<Card
												style={{ width: '100%', border: 0 }}
												actions={[
													<ButtonHeart />,
													<Comment />,
													<div>
														{moment(createdAt).format('DD MMMM YYYY')}
													</div>,
												]}
											></Card>
										</div>
									</div>
									<div
										className="cursor-pointer"
										style={{
											textAlign: 'start',
											marginLeft: '45px',
											fontWeight: 700,
											color: '#65676b',
										}}
									>
										Load more replies
									</div>
								</div>
							);
						})}
					{/* <!-- Load more replies --> */}
				</li>
				{show && (
					<div
						style={{
							textAlign: 'start',
							margin: '20px 0',
							fontWeight: 700,
							color: '#65676b',
						}}
					>
						Load more comments
					</div>
				)}
			</ul>
		</div>
	);
}

export default CommentBlog;
