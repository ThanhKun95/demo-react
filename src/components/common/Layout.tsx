import { Layout } from 'antd';
import { ReactNode } from 'react';
import MenuPC from './MenuPC';
interface Props {
    children?: ReactNode;
}

const { Content } = Layout;
export default function AppLayout({ children }: Props) {
    return (
        <Layout
            style={{
                width: '100%',
                background: 'black',
                opacity: 0.9,
            }}
        >
            <MenuPC />
            <Content>{children}</Content>
        </Layout>
    );
}
