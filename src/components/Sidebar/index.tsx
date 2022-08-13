import type { MenuProps } from 'antd';
import { Avatar, Card, Layout, Menu } from 'antd';
import { memo } from 'react';
import { useNavigate } from 'react-router';
import './Sidebar.scss';
const { Meta } = Card;
const { Sider } = Layout;
const Sidebar = ({ dataSub }: any) => {
	const { username, image, sidebarItem } = dataSub;

	const navigate = useNavigate();
	return (
		<Sider width={200} className="sidebar">
			<div className="background-sidebar">
				{' '}
				<img
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzAabnuSlBaJKTFZsh0UggvfKfqzCoRFbxUg&usqp=CAU"
					alt=""
				/>
			</div>
			<div
				style={{
					paddingTop: 60,
					background: 'white',
					display: 'flex',
					flexDirection: 'column',
				}}
			>
				<Meta
					style={{ margin: ' auto' }}
					avatar={
						<span
							className="cursor-pointer"
							style={{ marginRight: -16 }}
							onClick={() => {
								navigate(`/${username}/`);
							}}
						>
							<Avatar
								src={
									image
										? image
										: 'https://cdn-icons-png.flaticon.com/512/149/149071.png'
								}
								style={{ width: 80, height: 80, padding: 0 }}
							/>{' '}
						</span>
					}
				/>
				<span
					className="cursor-pointer"
					style={{
						paddingTop: 10,
						margin: 'auto',
						fontWeight: 'bold',
						fontSize: '150%',
						zIndex: 99,
					}}
					onClick={() => {
						navigate(`/${username}/`);
					}}
				>
					{username}
				</span>
			</div>
			<Menu
				mode="inline"
				style={{
					height: '100%',
					borderRight: 0,
					paddingTop: 10,
				}}
				items={sidebarItem}
			/>
		</Sider>
	);
};

export default memo(Sidebar);
