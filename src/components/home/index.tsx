import Blog from '../Blog';
import { useEffect } from 'react';
import './Home.scss';
import { useAppDispatch } from './../../app/hooks';
import { authenticationActions } from '../../features/authentication/AuthenticationSlice';
function Home() {
    const dispatch = useAppDispatch();

    return (
        <div>
            <div>
                <Blog />
            </div>
        </div>
    );
}

export default Home;
