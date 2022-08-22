import { Dropdown, Menu, Space } from 'antd';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAppDispatch } from '~/app/hooks';
import { authActions } from '~/features/auth/AuthSlice';
import { AiOutlineProfile, AiOutlineLogout } from 'react-icons/ai';
import { IoSettingsOutline } from 'react-icons/io5';
import { useAppSelector } from '~/app/hooks';

const App: React.FC = () => {
	const dispatch = useAppDispatch();
	const { auth } = useAppSelector((state) => state);
	const { username, image } = auth.dataAuth.user;

	return (
		<Space direction="vertical">
			<Space wrap>
				<Dropdown
					overlay={
						<Menu
							items={[
								{
									label: (
										<NavLink
											to={'/settings'}
											className="flex-center avatar-menu"
										>
											<IoSettingsOutline /> &nbsp; Settings
										</NavLink>
									),
									key: '0',
								},
								{
									label: (
										<NavLink
											to={`/${username}`}
											className="flex-center avatar-menu"
										>
											<AiOutlineProfile /> &nbsp; Personal
										</NavLink>
									),
									key: '1',
								},
								{
									type: 'divider',
								},
								{
									label: (
										<div
											className="flex-center avatar-menu"
											onClick={() => {
												dispatch(authActions.LOG_OUT());
											}}
										>
											<AiOutlineLogout /> &nbsp; Logout
										</div>
									),
									key: '3',
								},
							]}
						/>
					}
					placement="bottomRight"
					trigger={['click']}
				>
					<img
						style={{ width: 46, height: 46, objectFit: 'cover', borderRadius: 99 }}
						src={
							image ? image : 'https://cdn-icons-png.flaticon.com/512/149/149071.png'
						}
						alt=""
					/>
				</Dropdown>
			</Space>
		</Space>
	);
};

export default App;
