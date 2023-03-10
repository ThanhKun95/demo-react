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
				opacity: 0.9,
				background: 'transparent',
			}}
		>
			<MenuPC />
			<Content>{children}</Content>
		</Layout>
	);
}
