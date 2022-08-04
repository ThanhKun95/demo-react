import { Button, Input, Modal, Space, Typography } from 'antd';
import { useState } from 'react';
import './User.scss';
const { Link } = Typography;
function User() {
    const [login, setLogin] = useState(false);
    const [register, setRegister] = useState(false);
    const [loading, setLoading] = useState(false);

    const showRegister = () => {
        setRegister(true);
    };

    const handleOk = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setRegister(false);
        }, 3000);
    };
    const handleRegister = () => {
        setRegister(false);
    };
    return (
        <div className="user-container">
            {/* Nav */}
            <nav className="header__nav__user mobile-menu">
                <ul>
                    <li
                        onClick={() => {
                            setLogin(true);
                        }}
                    >
                        <span>Login</span>
                    </li>
                    <li>
                        <span onClick={showRegister}>Register</span>
                    </li>
                </ul>
            </nav>

            {/* Modal Login */}
            <Modal title="Login" centered visible={login} onOk={() => setLogin(false)} onCancel={() => setLogin(false)}>
                <p>some contents...</p>
                <p>some contents...</p>
                <Space direction="vertical">
                    <Link>Have an account?</Link>
                </Space>
                <Button>Login</Button>
            </Modal>

            <>
                <Modal
                    visible={register}
                    title="Title"
                    onOk={handleOk}
                    onCancel={handleRegister}
                    footer={false}
                    width={400}
                >
                    <Space direction="vertical" style={{ marginBottom: '20px' }}>
                        <Input placeholder="Email" status="error" />
                        <Input.Password placeholder="Password" />
                    </Space>
                    <Space direction="vertical" style={{ margin: '20px 0' }}>
                        <Link>Have an account?</Link>
                    </Space>
                    <div className="btn-wrapper">
                        <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
                            Login
                        </Button>
                    </div>
                </Modal>
            </>
        </div>
    );
}

export default User;
