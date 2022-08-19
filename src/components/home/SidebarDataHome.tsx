import type { MenuProps } from 'antd';
import React from 'react';
import { FcLineChart, FcList } from 'react-icons/fc';
import { NavLink } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { useAppSelector } from '~/app/hooks';

type MenuItem = Required<MenuProps>['items'][number];

function SidebarDataHome() {
	const { auth, articles } = useAppSelector((state) => state);
	const { username, image } = auth.dataAuth?.user;

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
	const tagList: any = articles?.articles.articles.map((items) => {
		return items.tagList.map((item) =>
			getItem(<NavLink to={`/${items.slug}`}>{item}</NavLink>, uuid()),
		);
	});
	const hash: MenuItem[] = tagList.reduce((init: MenuItem[], curr: MenuItem) => {
		return init.concat(curr);
	}, []);

	const sidebarItem: MenuItem[] = [
		getItem(<NavLink to={'/editor'}>New Article</NavLink>, '1', <FcList />),
		getItem('Popular Tags', 'sub1', <FcLineChart />, hash),
	];
	return { username, image, sidebarItem };
}

export default SidebarDataHome;
