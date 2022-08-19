import { BackTop } from 'antd';
import { useEffect } from 'react';
import { FaAngleDoubleUp } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { useAppDispatch } from '~/app/hooks';
import { articleActions } from '~/features/article/ArticleSlice';
import { currUserActions } from '~/features/currUser/CurrUserSlice';
import './BackStage.scss';

function BackStage() {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(currUserActions.GET_USER_CURR());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<div className="background-main">
				{/* <img src="https://wallpaperaccess.com/full/1841157.jpg" alt="" /> */}
			</div>
			<span
				onClick={() => {
					dispatch(articleActions.GET_ARTICLE());
				}}
			>
				<NavLink to="/" className="logo-main">
					<img
						src="https://cdn.pixabay.com/photo/2017/03/27/06/32/flower-2177523_1280.png"
						alt=""
					/>
					<div className="k">K</div>
					<div className="s">S</div>
					<div className="c">C</div>
				</NavLink>
			</span>
			<BackTop>
				<div className="back-top">
					<FaAngleDoubleUp />
				</div>
			</BackTop>
		</>
	);
}

export default BackStage;
