import { Modal } from 'antd';
import { useState } from 'react';
import './User.scss';
function User() {
    const [login, setLogin] = useState(false);
    const [register, setRegister] = useState(false);
    return (
        <div className="user-container">
            <Modal title="Login" centered visible={login} onOk={() => setLogin(false)} onCancel={() => setLogin(false)}>
                <p>some contents...</p>
                <p>some contents...</p>
                <p>some contents...</p>
            </Modal>

            <Modal
                title="Register"
                centered
                visible={register}
                onOk={() => setRegister(false)}
                onCancel={() => setRegister(false)}
            >
                <p>some contents...</p>
                <p>some contents...</p>
                <p>some contents...</p>
            </Modal>

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
        </div>
    );
}

export default User;
