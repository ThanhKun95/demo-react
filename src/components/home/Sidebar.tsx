import type { MenuProps } from 'antd';
import { Avatar, Card, Layout, Menu } from 'antd';
import React, { memo } from 'react';
import { FcLineChart, FcList } from 'react-icons/fc';
import { useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { useAppSelector } from '~/app/hooks';
const { Meta } = Card;
const { Sider } = Layout;
type MenuItem = Required<MenuProps>['items'][number];
const Sidebar = () => {
    const { auth, articles } = useAppSelector((state) => state);
    function getItem(label: React.ReactNode, key: React.Key, icon?: React.ReactNode, children?: MenuItem[]): MenuItem {
        return {
            key,
            icon,
            children,
            label,
        } as MenuItem;
    }
    const tagList: any = articles?.articles.articles.map((items) => {
        return items.tagList.map((item) => getItem(<NavLink to={`/${items.slug}`}>{item}</NavLink>, uuid()));
    });
    const hash: MenuItem[] = tagList.reduce((init: MenuItem[], curr: MenuItem) => {
        return init.concat(curr);
    }, []);

    const items: MenuItem[] = [
        getItem(<NavLink to={'/article'}>New Article</NavLink>, '1', <FcList />),
        getItem('Popular Tags', 'sub1', <FcLineChart />, hash),
    ];

    const { username, image } = auth.dataAuth.user;
    const navigate = useNavigate();
    return (
        <Sider width={200} className="sidebar">
            <div style={{ paddingTop: 64, background: 'white', display: 'flex', flexDirection: 'column' }}>
                <Meta
                    style={{ margin: ' auto' }}
                    avatar={
                        <span
                            className="cursor-pointer"
                            style={{ marginRight: -16 }}
                            onClick={() => {
                                navigate(`/${username}/`);
                            }}
                        >
                            <Avatar
                                src={image ? image : 'https://cdn-icons-png.flaticon.com/512/149/149071.png'}
                                style={{ width: 80, height: 80, padding: 0 }}
                            />{' '}
                        </span>
                    }
                />
                <span
                    className="cursor-pointer"
                    style={{ paddingTop: 10, margin: 'auto', fontWeight: 'bold', fontSize: '150%' }}
                    onClick={() => {
                        navigate(`/${username}/`);
                    }}
                >
                    {username}
                </span>
            </div>
            <Menu
                mode="inline"
                style={{
                    height: '100%',
                    borderRight: 0,
                    paddingTop: 10,
                }}
                items={items}
            />
        </Sider>
    );
};

export default memo(Sidebar);
