import { Button, Input, Modal, Space, Typography } from 'antd';
import { useState } from 'react';
import './User.scss';
const { Link } = Typography;
function User() {
    const [login, setLogin] = useState(false);
    const [register, setRegister] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleLoading = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setRegister(false);
        }, 3000);
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
                        <span
                            onClick={() => {
                                setRegister(true);
                            }}
                        >
                            Register
                        </span>
                    </li>
                </ul>
            </nav>

            {/* Modal Login */}
            <Modal
                visible={login}
                title="Login"
                onOk={handleLoading}
                onCancel={() => {
                    setLogin(false);
                }}
                footer={false}
                width={'30%'}
                centered
            >
                <Space direction="vertical" style={{ marginBottom: '20px' }}>
                    <Input placeholder="Email" status="error" />
                    <Input.Password placeholder="Password" />
                </Space>
                <Space direction="vertical" style={{ margin: '20px 0' }}>
                    <Link>Need an account?</Link>
                </Space>
                <div className="btn-wrapper">
                    <Button key="submit" type="primary" loading={loading} onClick={handleLoading}>
                        Login
                    </Button>
                </div>
            </Modal>

            {/* Modal Register */}
            <Modal
                visible={register}
                title="Register"
                onOk={handleLoading}
                onCancel={() => {
                    setRegister(false);
                }}
                footer={false}
                width={'30%'}
                centered
            >
                <Space direction="vertical" style={{ marginBottom: '20px' }}>
                    <Input placeholder="Email" status="error" />
                    <Input placeholder="UserName" status="error" />
                    <Input.Password placeholder="Password" />
                </Space>
                <Space direction="vertical" style={{ margin: '20px 0' }}>
                    <Link>Have an account?</Link>
                </Space>
                <div className="btn-wrapper">
                    <Button key="submit" type="primary" loading={loading} onClick={handleLoading}>
                        Login
                    </Button>
                </div>
            </Modal>
        </div>
    );
}

export default User;
