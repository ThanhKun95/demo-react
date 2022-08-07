import { Button, Checkbox, Form, Input, Modal, Space, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '~/app/hooks';
import { authActions } from '~/features/auth/AuthSlice';
import { regisActions } from '~/features/regis/RegisSlice';
import './User.scss';
const { Link } = Typography;
function User() {
    const navigate = useNavigate();
    const { auth, regis } = useAppSelector((state) => state);
    const { isLoading, isLoadingSuccess } = regis;

    const [loading, setLoading] = useState(false);
    const [modal, setModal] = useState('');

    const [form, setForm] = useState({ email: '', username: 'false', password: 'false' });

    const dispatch = useAppDispatch();
    useEffect(() => {
        if (auth.isLoggedIn) {
            navigate('/user');
            setModal('');
        }
        if (!auth.isLoggedIn && !loading) {
            navigate('/');
            setModal('');
        }
    }, [auth.isLoggedIn]);
    useEffect(() => {
        if (isLoading === false && isLoadingSuccess === true && !loading) {
            setModal('login');
        }
    }, [isLoading, isLoadingSuccess, loading]);

    const onFinish = (values: any) => {
        console.log('Success:', values);
        const { email, username, password } = form;

        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
        if (modal === 'register') {
            dispatch(regisActions.GET_REGIS({ user: { username: username, email, password } }));
        }
        if (modal === 'login') {
            dispatch(authActions.GET_AUTH({ user: { email, password } }));
        }
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="user-container">
            <nav className="header__nav__menu mobile-menu">
                <ul>
                    <li
                        onClick={() => {
                            setModal('login');
                        }}
                    >
                        <span className="underline-user">Login</span>
                    </li>
                    <li
                        onClick={() => {
                            setModal('register');
                        }}
                    >
                        <span className="underline-user">Register</span>
                    </li>
                </ul>
            </nav>

            {/* Modal Login */}
            <Modal
                visible={modal === 'login' || modal === 'register'}
                title={modal}
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
                            { whitespace: true, message: 'Must not contain whitespace characters!' },
                            { type: 'email', message: 'Invalid email !' },
                        ]}
                    >
                        <Input
                            placeholder="Email"
                            // status={emailIsValid(email) ? '' : 'error'}
                            value={form.email}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                setForm((prev) => ({ ...prev, email: event.target.value.trim() }));
                            }}
                        />
                    </Form.Item>

                    {modal === 'register' && (
                        <Form.Item
                            name="username"
                            rules={[
                                { required: true, message: 'Please input your name!' },
                                { min: 6, message: 'Must be 6 characters above!' },
                            ]}
                        >
                            <Input
                                placeholder="UserName"
                                // className={`user-name ${modal === 'login' ? 'show-user' : 'hide-user'}`}
                                value={form.username}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                    setForm((prev) => ({ ...prev, username: event.target.value.trim() }));
                                }}
                            />
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
                        <Input.Password
                            placeholder="Password"
                            value={form.password}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                setForm((prev) => ({ ...prev, password: event.target.value.trim() }));
                            }}
                        />
                    </Form.Item>
                    <Form.Item>
                        {modal === 'login' && (
                            <Form.Item name="remember" valuePropName="checked" style={{ margin: 0 }}>
                                <Checkbox>Remember</Checkbox>
                            </Form.Item>
                        )}

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
                        {/* <Button
                            onClick={() => {
                                dispatch(authActions.LOG_OUT());
                            }}
                        >
                            Logout
                        </Button> */}

                        <Button
                            key="submit"
                            type="primary"
                            loading={loading}
                            style={{ width: '100px' }}
                            htmlType="submit"
                        >
                            {modal === 'login' ? 'login' : 'register'}
                        </Button>
                    </div>
                </Form>
            </Modal>
        </div>
    );
}

export default User;
