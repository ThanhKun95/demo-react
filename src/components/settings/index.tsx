/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Form, Input } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '~/app/hooks';

import { authActions } from '~/features/auth/AuthSlice';
import './Setting.scss';
const { TextArea } = Input;
export default function Settings() {
	const [loading, setLoading] = useState(false);
	const { dataAuth, updateUserSuccess, updateUserFailed } = useAppSelector((state) => state.auth);
	const user = dataAuth.user;
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const onFinish = (values: any) => {
		console.log(values);
		setLoading(true);

		dispatch(authActions.UPDATE_USER({ user: { ...values } }));
	};
	const [form] = Form.useForm();

	useEffect(() => {
		if (updateUserSuccess === true || updateUserFailed === true) {
			setLoading(false);
			dispatch(authActions.RESET_UPDATE());
			navigate('/');
		}
	}, [updateUserSuccess, updateUserFailed]);

	useEffect(() => {
		dispatch(authActions.RESET_UPDATE());
		form.setFieldsValue({ ...user });
	}, []);
	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo);
	};

	return (
		<div className="settings">
			<Form
				layout="horizontal"
				form={form}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
			>
				<Form.Item name="image">
					<Input placeholder="URL of profile picture" />
				</Form.Item>
				<Form.Item name="username">
					<Input placeholder="Username" />
				</Form.Item>
				<Form.Item name="bio">
					<TextArea rows={4} placeholder="Short bio about you" />
				</Form.Item>

				<Form.Item name="email">
					<Input placeholder="Email" />
				</Form.Item>
				<Form.Item name="password">
					<Input placeholder="New Password" type="password" />
				</Form.Item>

				<div style={{ display: 'flex', justifyContent: 'flex-end' }}>
					<Button type="primary" htmlType="submit" key="submit" loading={loading}>
						Update Settings
					</Button>
				</div>
			</Form>
		</div>
	);
}
