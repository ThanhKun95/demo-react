import { Button, Input, Modal, Space, Typography } from 'antd';
import { useState } from 'react';
import './User.scss';
const { Link } = Typography;
function User() {
    const [loading, setLoading] = useState(false);
    const [modal, setModal] = useState('');

    const handleLoading = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setModal('');
        }, 3000);
    };

    return (
        <div className="user-container">
            {/* Nav */}
            <nav className="header__nav__menu mobile-menu">
                <ul>
                    <li
                        onClick={() => {
                            // setLogin(true);
                            setModal('login');
                        }}
                    >
                        <span className="underline-user">Login</span>
                    </li>
                    <li
                        onClick={() => {
                            // setRegister(true);
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
                title="Login"
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
                    <Input placeholder="Email" status="error" />
                    {modal === 'register' && (
                        <Input
                            placeholder="UserName"
                            status="error"
                            // className={`user-name ${modal === 'login' ? 'show-user' : 'hide-user'}`}
                        />
                    )}
                    <Input.Password placeholder="Password" />
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
                        style={{ width: '78px' }}
                    >
                        {modal === 'login' ? 'login' : 'register'}
                    </Button>
                </div>
            </Modal>
        </div>
    );
}

export default User;
