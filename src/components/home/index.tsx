import Blog from '../Blog';
import './Home.scss';
import Sidebar from './Sidebar';
import { useAppSelector } from '~/app/hooks';

function Home() {
    const { auth } = useAppSelector((state) => state);

    return (
        <div>
            <div>
                {auth.isLoggedIn && <Sidebar />}

                <Blog />
            </div>
        </div>
    );
}

export default Home;
