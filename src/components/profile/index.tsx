import './Profile.scss';
import { Avatar, Button, Card } from 'antd';
import { ButtonPrimary } from '../Button';
import { NavLink } from 'react-router-dom';
const { Meta } = Card;

function Profile() {
    return (
        <div className="profile">
            <div className="profile-header">
                <img
                    className="profile-header__background"
                    src="https://anhdep123.com/wp-content/uploads/2021/02/hinh-nen-hot-girl-full-hd-cho-dien-thoai-dep.jpg"
                    alt=""
                />
                <div className="profile-header__avatar">
                    <Meta
                        style={{ display: 'flex', alignItems: 'center', width: '100%' }}
                        avatar={
                            <Avatar
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLQ4LnUdYEXEiGsfskCc8DNKQiLFu2Djfy9A&usqp=CAU"
                                style={{ width: 150, height: 150, border: ' 4px solid white' }}
                            />
                        }
                        title={<span style={{ marginLeft: 50, fontSize: 30 }}>usename</span>}
                    />
                    <NavLink to="/settings">
                        <Button>Edit Profile Settings</Button>
                    </NavLink>
                </div>
            </div>
            <div className="profile-content">profile content</div>
        </div>
    );
}

export default Profile;
