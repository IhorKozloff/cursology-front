
import { useLogoutMutation, onLogOutSuccess, setLikedCoursesInitalData, setLessonsProgressInitialData } from 'store';
import { useAppSelector, useAppDispatch } from 'hooks';
import { Button } from 'components';
import { SyncLoader } from 'react-spinners';

export const LogOutBtn = () => {

    const email = useAppSelector(state => state.userAuthClientData.userAuthData.email);

    const dispatch = useAppDispatch();

    const [ logoutServerAction, results ] = useLogoutMutation();

    const onLogoutBtnClick = () => {
        logoutServerAction({email}).then(() => {
            dispatch(onLogOutSuccess());
            dispatch(setLikedCoursesInitalData());
            dispatch(setLessonsProgressInitialData());
        });
    };

    return ( 
        <>
            {results.isLoading 
                ? <SyncLoader size={3} color={'#FFF'}/> 
                : <Button type="button" variant="secondary" size="small" color="white" onClick={onLogoutBtnClick}>
                    Log Out
                </Button>
            }
        </>
    );
};