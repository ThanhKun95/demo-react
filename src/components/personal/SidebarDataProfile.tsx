import type { MenuProps } from 'antd';
import React from 'react';
import { FcList } from 'react-icons/fc';
import { useAppDispatch, useAppSelector } from '~/app/hooks';
import { articleActions } from '~/features/article/ArticleSlice';

type MenuItem = Required<MenuProps>['items'][number];

function SidebarDataProfile() {
	const dispatch = useAppDispatch();
	const { personal } = useAppSelector((state) => state);

	const profile = personal.personal.profile;

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

	if (profile && Object.keys(profile)) {
		const sidebarItem: MenuItem[] = [
			getItem(
				<span
					onClick={() => {
						dispatch(articleActions.GET_ARTICLE_BY_AUTHOR(profile.username));
					}}
				>
					My Articles
				</span>,
				'1',
				<FcList />,
			),
			getItem(
				<span
					onClick={() => {
						dispatch(articleActions.FAVORITE_BY_USER(profile.username));
					}}
				>
					Favorited Articles
				</span>,
				'2',
				<FcList />,
			),
		];
		return { username: profile.username, image: profile.image, sidebarItem };
	}
}

export default SidebarDataProfile;
