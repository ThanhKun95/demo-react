import { Card } from 'antd';
import { ButtonPrimary } from '~/components/Button';
import UserContent from './UserContent';
import './Home.scss';

function Home() {
    // console.log(cx);
    return (
        <div>
            <div className="background-main">
                <img src="https://wallpaperaccess.com/full/1841157.jpg" alt="" />
            </div>
            <div className="logo-main">
                <div className="k">K</div>
                <div className="s">S</div>
                <div className="c">C</div>
            </div>

            <div className="feed">
                <Card
                    className="feed-action"
                    style={{ width: 400, border: 0, background: 'transparent' }}
                    actions={[<ButtonPrimary>Your Feed</ButtonPrimary>, <ButtonPrimary>Global Feed</ButtonPrimary>]}
                ></Card>
            </div>
            <div>
                <UserContent />
            </div>
        </div>
    );
}

export default Home;
