import React, { useState } from 'react';
import './Sidebar.scss';
import { Avatar, Card, Layout, Menu } from 'antd';
import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
// import './Sidebar.scss';
import FollowUser from './Follow';
import { BiRightArrow, BiLeftArrow } from 'react-icons/bi';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Button } from 'antd';

const { Meta } = Card;

const Sidebar = ({ dataSub }: any) => {
	const { username, image, sidebarItem } = dataSub;
	const [collapsed, setCollapsed] = useState(false);
	const navigate = useNavigate();

	const toggleCollapsed = () => {
		setCollapsed(!collapsed);
	};

	return (
		<>
			<span className={`sidebar sidebar-custom ${collapsed && 'side-small'}`}>
				<Button
					className="btn-menu-sidebar"
					type="primary"
					onClick={toggleCollapsed}
					style={{}}
				>
					{collapsed ? <BiRightArrow /> : <BiLeftArrow />}
				</Button>
				<Meta
					className={`avatar ${!collapsed && 'center'}`}
					avatar={
						<div
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
						</div>
					}
				/>

				<div
					className={`cursor-pointer username ${!collapsed && 'center'}`}
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
				</div>

				<Menu
					className="menu"
					defaultSelectedKeys={['1']}
					defaultOpenKeys={['sub1']}
					mode="inline"
					// theme="dark"
					inlineCollapsed={collapsed}
					items={sidebarItem}
				/>
			</span>
		</>
	);
};

export default Sidebar;
