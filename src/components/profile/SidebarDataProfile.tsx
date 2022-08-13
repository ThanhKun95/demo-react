import type { MenuProps } from 'antd';
import React from 'react';
import { FcList } from 'react-icons/fc';
import { useAppSelector } from '~/app/hooks';

type MenuItem = Required<MenuProps>['items'][number];

function SidebarDataProfile() {
	const { auth } = useAppSelector((state) => state);
	const { username, image } = auth?.dataAuth?.user;

	function getItem(
		label: React.ReactNode,
		key: React.Key,
		icon?: React.ReactNode,
		children?: MenuItem[],
	): MenuItem {
		return {
			key,
			icon,
			children,
			label,
		} as MenuItem;
	}

	const sidebarItem: MenuItem[] = [
		getItem('My Articles', '1', <FcList />),
		getItem('Favorited Articles', '2', <FcList />),
	];
	return { username, image, sidebarItem };
}

export default SidebarDataProfile;
