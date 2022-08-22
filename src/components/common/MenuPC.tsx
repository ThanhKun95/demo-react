/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Form, Input, Menu, Modal, PageHeader, Typography } from 'antd';
import './Layout.scss';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '~/app/hooks';
import { authActions } from '~/features/auth/AuthSlice';
import { regisActions } from '~/features/regis/RegisSlice';

import Avatar from './Avatar';
import './Layout.scss';

const { Link } = Typography;
function MenuPC() {
	const dispatch = useAppDispatch();

	const navigate = useNavigate();
	const { auth } = useAppSelector((state) => state);

	const [loading, setLoading] = useState(false);
	const [modal, setModal] = useState('');

	useEffect(() => {
		if (auth.isLoggedIn) {
			navigate('/');
			setModal('');
		}
		if (!auth.isLoggedIn && !loading) {
			navigate('/');
			setModal('');
		}
	}, [auth.isLoggedIn]);

	const onFinish = (values: any) => {
		if (!auth.isLoggedIn) {
			setLoading(true);
			setTimeout(() => {
				setLoading(false);
			}, 2000);
			if (modal === 'register') {
				dispatch(regisActions.GET_REGIS({ user: values }));
			}
			if (modal === 'login') {
				dispatch(authActions.GET_AUTH({ user: values }));
			}
		}
	};

	const onFinishFailed = (errorInfo: any) => {};

	const item1 = [
		{
			key: '3',
			label: (
				<div
					className="nav-item"
					onClick={() => {
						setModal('login');
					}}
				>
					<span className="nav-item__text">Login</span>
				</div>
			),
		},
		{
			key: '4',
			label: (
				<div
					className="nav-item"
					onClick={() => {
						setModal('register');
					}}
				>
					<span className="nav-item__text">Register</span>
				</div>
			),
		},
	];
	const item2 = [
		{
			key: '3',
			label: (
				<span style={{ zIndex: 99999 }} className="header-avatar">
					<Avatar />
				</span>
			),
		},
	];
	const item = auth.isLoggedIn ? item2 : item1;
	return (
		<>
			<PageHeader
				className="header__nav__menu mobile-menu nav-other"
				style={{
					width: '100%',
					background: 'white',
					zIndex: 99,
				}}
				title={
					<Menu
						className="nav-list"
						style={{ border: 'none', background: 'white' }}
						theme={'light'}
						defaultSelectedKeys={['0']}
						defaultOpenKeys={['0']}
						// mode={'horizontal'}

						items={item}
						mode={'vertical'}
					/>
				}
			/>

			<Modal
				visible={modal === 'login' || modal === 'register'}
				title={modal.toUpperCase()}
				onOk={onFinish}
				onCancel={() => {
					setModal('');
				}}
				closable={modal === ''}
				footer={false}
				width={'400px'}
				centered
			>
				<Form
					name="basic"
					initialValues={{ remember: true }}
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
					autoComplete="off"
					style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
				>
					<Form.Item
						name="email"
						rules={[
							{ required: true, message: 'Please input your email!' },
							{
								whitespace: true,
								message: 'Must not contain whitespace characters!',
							},
							{ type: 'email', message: 'Invalid email !' },
						]}
					>
						<Input placeholder="Email" />
					</Form.Item>

					{modal === 'register' && (
						<Form.Item
							name="username"
							rules={[
								{ required: true, message: 'Please input your name!' },
								{ min: 6, message: 'Must be 6 characters above!' },
							]}
						>
							<Input placeholder="UserName" />
						</Form.Item>
					)}
					<Form.Item
						name="password"
						rules={[
							{ required: true, message: 'Please input your password!' },
							{ min: 6, message: 'Must be at least 6 characters!' },
							{ max: 20, message: 'Must be no longer than 20 characters!' },
						]}
					>
						<Input.Password placeholder="Password" />
					</Form.Item>
					<Form.Item>
						<Link
							style={{ margin: 'auto', marginRight: 0 }}
							onClick={() => {
								setModal(modal === 'login' ? 'register' : 'login');
							}}
						>
							{modal === 'login' ? 'Need an account? ' : 'Have an account?'}
						</Link>
					</Form.Item>
					<div className="btn-wrapper">
						<Button
							key="submit"
							type="primary"
							loading={loading}
							style={{ width: '100px' }}
							htmlType="submit"
							disabled={auth.isLoggedIn}
						>
							{modal.toUpperCase()}
						</Button>
					</div>
				</Form>
			</Modal>
		</>
	);
}

export default MenuPC;
