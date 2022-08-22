import { Avatar, Button, Card } from 'antd';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from '~/app/hooks';
const { Meta } = Card;
function HeaderEditor() {
	const { user } = useAppSelector((state) => state.auth.dataAuth);
	const { username, image } = user;

	return (
		<div className="editor-header">
			<img
				className="editor-header__background"
				src="https://anhdep123.com/wp-content/uploads/2021/02/hinh-nen-hot-girl-full-hd-cho-dien-thoai-dep.jpg"
				alt=""
			/>
			<div className="editor-header__avatar">
				<Meta
					style={{ display: 'flex', alignItems: 'center', width: '100%' }}
					avatar={
						<Avatar
							src={
								image
									? image
									: 'https://cdn-icons-png.flaticon.com/512/149/149071.png'
							}
							style={{ width: 150, height: 150, border: ' 4px solid white' }}
						/>
					}
					title={<span style={{ marginLeft: 50, fontSize: 30 }}>{username}</span>}
				/>
				<NavLink to="/settings">
					<Button>Edit Editor Settings</Button>
				</NavLink>
			</div>
		</div>
	);
}

export default HeaderEditor;
