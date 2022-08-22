/* eslint-disable react-hooks/exhaustive-deps */
import type { MenuProps } from 'antd';
import React, { useEffect } from 'react';
import { FcLineChart, FcList } from 'react-icons/fc';
import { NavLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '~/app/hooks';
import { tagsActions } from '~/features/tags/TagsSlice';

type MenuItem = Required<MenuProps>['items'][number];

function SidebarDataHome() {
	const { auth, tags } = useAppSelector((state) => state);
	const { username, image } = auth.dataAuth?.user;
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(tagsActions.GET_TAGS());
	}, []);
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

	let hash: MenuItem[] = [];
	tags.tags.forEach((tag) => {
		hash.push(
			getItem(
				<span
					onClick={() => {
						dispatch(tagsActions.SET_TAG(tag));
					}}
				>
					{tag}
				</span>,
				tag,
			),
		);
	});

	const sidebarItem: MenuItem[] = [
		getItem(<NavLink to={'/editor'}>New Article</NavLink>, '1', <FcList />),
		getItem('Popular Tags', 'sub1', <FcLineChart />, hash),
	];
	return { username, image, sidebarItem };
}

export default SidebarDataHome;
