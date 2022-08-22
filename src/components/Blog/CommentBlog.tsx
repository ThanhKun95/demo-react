import { LoadingOutlined } from '@ant-design/icons';
import { Avatar, Card, Spin } from 'antd';
import moment from 'moment';
import { memo } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '~/app/hooks';
import { commentActions } from '~/features/comment/CommentSlice';
import { Comment as CommentIF } from '~/models';

const { Meta } = Card;
function CommentBlog() {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const { slugPage } = useParams();
	const { deleteCommentLoading, comments } = useAppSelector((state) => state.comments);
	const handleDelComment = (id: number) => {
		if (slugPage) {
			dispatch(commentActions.DELETE_COMMENT({ slug: slugPage, id }));
		}
	};
	const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

	return (
		<div style={{ width: '100%' }}>
			<ul className="list-comment">
				{' '}
				{comments &&
					comments.length > 0 &&
					comments.map((res: CommentIF) => {
						const { id, author, body, createdAt } = res;
						return (
							<div key={id} className="user-UserContent comment-item">
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
								/>
								<div className="comment-content">
									<span className="user">
										<span
											className="cursor-pointer username"
											onClick={() => {
												navigate(`/article/${author.username}`);
											}}
										>
											{author.username}
										</span>
										<Card
											bordered={false}
											style={{
												marginLeft: 12,
												background: 'transparent',
											}}
										>
											<p className="user-title">{body}</p>
										</Card>
									</span>
									<span className="option">
										<div className="option-time">
											{moment(createdAt).format('DD MMM YYYY')}
										</div>
										<span className="option-delete">
											{deleteCommentLoading && (
												<span className="spin-load">
													<Spin indicator={antIcon} />
												</span>
											)}
											<span
												onClick={() => {
													handleDelComment(id);
												}}
											>
												<AiOutlineDelete />
											</span>
										</span>
									</span>
								</div>
							</div>
						);
					})}
			</ul>
		</div>
	);
}

export default memo(CommentBlog);
