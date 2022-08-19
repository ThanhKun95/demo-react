import { Dropdown, Menu, message, Space } from 'antd';
import { memo, useEffect } from 'react';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '~/app/hooks';
import { articleActions } from '~/features/article/ArticleSlice';

function MenuBlog({ slug }: { slug: string }) {
	const dispatch = useAppDispatch();
	const { articles } = useAppSelector((state) => state);

	const { isDelete, isDeleteSuccess, isDeleteFailed } = articles;

	// Handle Delete
	useEffect(() => {
		if (isDeleteSuccess) {
			dispatch(articleActions.ARTICLE_RESET());
		}
		if (isDeleteFailed) {
			message.success('Delete failed');
		}
	}, [isDeleteSuccess, isDeleteFailed]);
	const handleDelete = () => {
		if (!isDelete) {
			dispatch(articleActions.IS_DELETE(slug));
		}
	};

	const items = [
		{
			label: (
				<NavLink to={`/editor/${slug}`} className="flex-center">
					<AiOutlineEdit /> &nbsp; Edit Article
				</NavLink>
			),
			key: '1',
		},
		{
			label: (
				<div className="flex-center " onClick={handleDelete}>
					<AiOutlineDelete />
					&nbsp; Delete Article
				</div>
			),
			key: '2',
		},
	];

	return (
		<span style={{ margin: '20px 30px' }} className="cursor-pointer">
			<Space direction="vertical">
				<Space wrap>
					<Dropdown
						overlay={<Menu items={items} />}
						placement="bottomRight"
						trigger={['click']}
					>
						<span
							style={{
								width: 46,
								height: 46,
								objectFit: 'cover',
								borderRadius: 99,
							}}
						>
							<BiDotsHorizontalRounded />
						</span>
					</Dropdown>
				</Space>
			</Space>
		</span>
	);
}

export default memo(MenuBlog);
