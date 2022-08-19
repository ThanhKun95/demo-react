import { Avatar, Card, Layout, Menu } from 'antd';
import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import './Sidebar.scss';
import FollowUser from './Follow';

import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React, { useState } from 'react';

const { Meta } = Card;

const Sidebar = ({ dataSub }: any) => {
	const { username, image, sidebarItem } = dataSub;
	const navigate = useNavigate();

	const [collapsed, setCollapsed] = useState(false);

	const toggleCollapsed = () => {
		setCollapsed(!collapsed);
	};

	return (
		<div className="sidebar" style={{ padding: '0 30px', width: 256 }}>
			<div className="background-sidebar"></div>
			<Button
				type="primary"
				onClick={toggleCollapsed}
				style={{ marginBottom: 16 }}
				className="btn-menu"
			>
				{collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
			</Button>
			<div
				style={{
					paddingTop: 100,
					paddingBottom: 20,
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
			<FollowUser username={username} />

			<Menu
				mode="inline"
				inlineCollapsed={collapsed}
				style={{
					height: '100%',
					borderRight: 0,
					paddingTop: 10,
					background: 'transparent',
				}}
				items={sidebarItem}
			/>
		</div>
	);
};

export default memo(Sidebar);
