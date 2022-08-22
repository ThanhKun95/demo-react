import { RiUserFollowLine, RiUserUnfollowLine } from 'react-icons/ri';
import { useAppDispatch, useAppSelector } from '~/app/hooks';
import { personalActions } from '~/features/personal/PersonalSlice';

function FollowUser({ username }: { username: string }) {
	const dispatch = useAppDispatch();
	const { auth, personal } = useAppSelector((state) => state);
	const userNameCurr = auth.dataAuth.user.username;
	const following = personal.personal.profile?.following;
	const handleFollow = () => {
		if (following) {
			dispatch(personalActions.UNFOLLOW(username));
		}
		if (!following) {
			dispatch(personalActions.FOLLOW(username));
		}
	};
	return (
		<>
			{username !== userNameCurr && (
				<div className="sidebar-follow" onClick={handleFollow}>
					<span className="follow-icon">
						{following ? <RiUserFollowLine /> : <RiUserUnfollowLine />}
					</span>{' '}
					<span className="follow-text">{following ? 'Following' : 'Follow'}</span>
				</div>
			)}
		</>
	);
}

export default FollowUser;
