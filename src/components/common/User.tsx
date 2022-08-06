import { Button, Input, Modal, Space, Typography } from 'antd';
import React, { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '~/app/hooks';
import { authActions } from '~/features/auth/AuthSlice';
import { regisActions } from '~/features/regis/RegisSlice';
import './User.scss';
import { useNavigate } from 'react-router-dom';
const { Link } = Typography;
function User() {
    const navigate = useNavigate();
    const { auth, regis } = useAppSelector((state) => state);
    const { isLoading, isLoadingSuccess } = regis;

    const [loading, setLoading] = useState(false);
    const [modal, setModal] = useState('');

    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

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
    const handleLoading = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);

        if (modal === 'register') {
            dispatch(regisActions.GET_REGIS({ user: { username: userName, email, password } }));
        }
        if (modal === 'login') {
            dispatch(authActions.GET_AUTH({ user: { email, password } }));
        }
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
                onOk={handleLoading}
                onCancel={() => {
                    setModal('');
                }}
                closable={modal === ''}
                footer={false}
                width={'400px'}
                centered
            >
                <Space direction="vertical" style={{ marginBottom: '20px', height: '246px' }}>
                    <Input
                        placeholder="Email"
                        // status="error"
                        value={email}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setEmail(event.target.value);
                        }}
                    />
                    {modal === 'register' && (
                        <Input
                            placeholder="UserName"
                            // status="error"
                            // className={`user-name ${modal === 'login' ? 'show-user' : 'hide-user'}`}
                            value={userName}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                setUserName(event.target.value);
                            }}
                        />
                    )}
                    <Input.Password
                        placeholder="Password"
                        value={password}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setPassword(event.target.value);
                        }}
                    />
                    <Link
                        onClick={() => {
                            setModal(modal === 'login' ? 'register' : 'login');
                        }}
                    >
                        {modal === 'login' ? 'Need an account? ' : 'Have an account?'}
                    </Link>
                </Space>
                <Space direction="vertical" style={{ margin: '20px 0' }}></Space>
                <div className="btn-wrapper">
                    <Button
                        key="submit"
                        type="primary"
                        loading={loading}
                        onClick={handleLoading}
                        style={{ width: '100px' }}
                    >
                        {modal === 'login' ? 'login' : 'register'}
                    </Button>
                    <Button
                        onClick={() => {
                            dispatch(authActions.LOG_OUT());
                        }}
                    >
                        Logout
                    </Button>
                </div>
            </Modal>
        </div>
    );
}

export default User;
