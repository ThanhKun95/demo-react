import React, { ReactNode } from 'react';
import { Layout, Menu, PageHeader } from 'antd';
import { NavLink } from 'react-router-dom';

interface Props {
  children?: ReactNode;
}

const { Content } = Layout;
export default function AppLayout({ children }: Props) {
  return (
    <Layout>
      <PageHeader
        style={{
          background: 'white',
          width: '100%'
        }}
        title={ (
          <Menu
            style={{border: 'none'}}
            theme={ 'light' }
            defaultSelectedKeys={ ['1'] }
            defaultOpenKeys={ ['1'] }
            mode={ 'horizontal' }
            items={ [
              {
                key: '1',
                label: (
                  <NavLink to={ '/' }>
                    Home
                  </NavLink>
                ),
              },
              {
                key: '2',
                label: (
                  <NavLink to={ '/editor' }>
                    New Article
                  </NavLink>
                ),
              },
              {
                key: '3',
                label: (
                  <NavLink to={ '/settings' }>
                    Settings
                  </NavLink>
                ),
              },
              {
                key: '4',
                label: (
                  <NavLink to={ '/user' }>
                    User
                  </NavLink>
                ),
              },
            ] }
          />
        ) }
      />
      <Content style={{ padding: '16px 50px' }}>
        { children }
      </Content>
    </Layout>
  );
}