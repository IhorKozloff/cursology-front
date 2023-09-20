import { useAppSelector } from 'hooks';
import { useSaveUserActivityMutation } from 'store';
import { useEffect, useState } from 'react';

export const SaveUserClientsDataOnServer = () => {
    const [ saveAndSendUSerActivity ] = useSaveUserActivityMutation(); 

    const email = useAppSelector(state => state.userAuthClientData.userAuthData.email);
    const lessons_progress = useAppSelector(state => state.userProgressClientData.lessons_progress);
    const likedCoursesIds = useAppSelector(state => state.userFavClientData.fav_ids);

    const [timeToSend, setTimeToSend] = useState(false);
  
    useEffect(() => {

        const intervalID = setInterval(() => {

            if (timeToSend === true) {
                console.log('user activity data sent');
                saveAndSendUSerActivity({
                    email,
                    lessonsProgress: lessons_progress,
                    liked_courses_ids: likedCoursesIds
                });
                setTimeToSend(false);
                return;
            } else {
                setTimeToSend(true);
                return;
            }
            
        }, 30000);

        return () => clearInterval(intervalID);
    },[email, lessons_progress, likedCoursesIds, saveAndSendUSerActivity, timeToSend]);

    return <></>;
};