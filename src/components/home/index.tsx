import Blog from '../Blog';
import { useEffect } from 'react';
import './Home.scss';
import { useAppDispatch } from './../../app/hooks';
import { authenticationActions } from '../../features/authentication/AuthenticationSlice';
function Home() {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(authenticationActions.GET_AUTHENTICATION());
    }, [dispatch]);
    return (
        <div>
            <div>
                <Blog />
            </div>
        </div>
    );
}

export default Home;
