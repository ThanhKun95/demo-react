import SubSidebarProfile from './SubSidebarProfile';
import './Profile.scss';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '~/app/hooks';
import Blog from '../Blog';
import { useEffect } from 'react';
import { profileActions } from '~/features/profile/ProfileSlice';
import { commentActions } from '~/features/comment/CommentSlice';
function Profile() {
	const { auth, profile } = useAppSelector((state) => state);

	const { username } = useParams();
	const dispatch = useAppDispatch();
	useEffect(() => {
		if (username) {
			dispatch(profileActions.GET_PROFILE(username));
			dispatch(commentActions.GET_COMMENT(username));
		}
	}, [username]);

	return (
		<div className="profile-container">
			{auth.isLoggedIn && auth.dataAuth.user.username === username && <SubSidebarProfile />}
			{/* <Blog/> */}
		</div>
	);
}

export default Profile;
