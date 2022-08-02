import { Menu, PageHeader } from 'antd';
import { NavLink } from 'react-router-dom';
import './MenuPC.scss';
import User from './User';

function MenuPC() {
    return (
        <>
            <PageHeader
                className="header__nav__menu mobile-menu nav-cua-tao"
                style={{
                    width: '100%',
                    background: 'black',
                    opacity: 0.9,
                    zIndex: 99,
                }}
                title={
                    <Menu
                        className="nav-list"
                        style={{ border: 'none', background: 'black', opacity: 0.9 }}
                        theme={'light'}
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['1']}
                        mode={'horizontal'}
                        items={[
                            {
                                key: '1',
                                label: (
                                    <div className="nav-item">
                                        <NavLink to={'/'} className="active">
                                            Home
                                        </NavLink>
                                    </div>
                                ),
                            },
                            {
                                key: '2',
                                label: (
                                    <div className="nav-item">
                                        <NavLink to={'/editor'}>New Article</NavLink>
                                    </div>
                                ),
                            },
                            {
                                key: '3',
                                label: (
                                    <div className="nav-item">
                                        <NavLink to={'/settings'}>Settings</NavLink>
                                    </div>
                                ),
                            },
                            {
                                key: '4',
                                label: (
                                    <div className="nav-item">
                                        <NavLink to={'/user'}>User</NavLink>
                                    </div>
                                ),
                            },
                        ]}
                    />
                }
            />
            <User />
        </>
    );
}

export default MenuPC;
