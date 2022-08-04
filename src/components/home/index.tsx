import UserContent from './UserContent';
import './Home.scss';
import { NavLink } from 'react-router-dom';
function Home() {
    return (
        <div>
            <div className="background-main">
                <img src="https://wallpaperaccess.com/full/1841157.jpg" alt="" />
            </div>
            <div>
                <UserContent />
            </div>
        </div>
    );
}

export default Home;
