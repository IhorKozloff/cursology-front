import ReactPlayer from 'react-player';
import { useAppDispatch, useAppSelector } from 'hooks';
import { useRef } from 'react';
import { addLessInfoOnPlay, addPausedFlagOnPause, addCurrentTimeOnProgress, addFinishedFlagOnEnd  } from 'store';
import { useParams } from 'react-router-dom';

interface IProps {
    link: string;
}

export const Player = ({link}: IProps) => {
    const dispatch = useAppDispatch();
    const { courseId, lesson } = useParams();

    const lessUniqueId = `${courseId}/${lesson}`;
    const userLessonData = useAppSelector(state => state.userProgressClientData.lessons_progress.find(item => item.lessonId === lessUniqueId));
    
    const refPlayer = useRef<ReactPlayer>(null);
    
    return (

        <ReactPlayer
            ref={refPlayer}
            url={link}
            width="100%"
            height="100%" 
            controls
            playing={true}
            progressInterval={3000}

            onPlay={() => {
                dispatch(addLessInfoOnPlay(lessUniqueId));
                
            }}

            onPause={() => {
                dispatch(addPausedFlagOnPause(lessUniqueId));
            }}

            onEnded={() => {
                dispatch(addFinishedFlagOnEnd(lessUniqueId));
            }}

            onProgress={(event) => {
                dispatch(addCurrentTimeOnProgress({lessonId: lessUniqueId,  progressTime: Math.floor(event.playedSeconds)}));
            }}

            onReady={() => {
                if(userLessonData?.progressTime) {
                    refPlayer?.current?.seekTo(userLessonData?.progressTime);
                } else {
                    refPlayer?.current?.seekTo(0);
                }
            }}
        /> 

    );
};