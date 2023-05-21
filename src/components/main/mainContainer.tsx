import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setErrorMessage } from '../snackbar/snackbarslice';
import { setLogout } from '../auth/authslice';
// import { fetchData } from './MainSlice';
import Main from './mainPresentation';
import { RootState, useAppSelector } from '../../store';

const MainContainer = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState<{}[]>([]);
    const { auth } = useAppSelector((state: RootState) => state);

    const getData = async () => {

        try {
            const resp = await fetch('https://api.sampleapis.com/coffee/hot');
            if (!resp.ok) {
                throw new Error('Failed to fetch data');
            }
            const json = await resp.json();
            setData(json);


        } catch (error: any) {
            dispatch(setErrorMessage(error.message));
        }
    }



    useEffect(() => {
        getData();
        const handleOnline = () => {
            getData()
        };
        window.addEventListener('online', handleOnline);
        return () => {
            window.removeEventListener('online', handleOnline);
        };
    }, [dispatch]);




    const handleLogout = () => {
        dispatch(setLogout());
    };

    return <Main handleLogout={handleLogout} data={data} username={auth.userData?.username} />;
};

export default MainContainer;
