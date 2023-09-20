import { useCallback, useRef } from 'react';
import ReactConfetti from 'react-canvas-confetti';
import { useParams } from 'react-router-dom';
import { useLikeCourseMutation, addCourseToLiked } from 'store';
import { useAppDispatch, useAppSelector } from 'hooks';
import classNames from 'classnames';

interface IProps {
  likes: number | undefined;
}

export const LikeBar = ({likes = 0}: IProps) => {
    const dispatch = useAppDispatch();
    const { courseId } = useParams();

    const email = useAppSelector(state => state.userAuthClientData.userAuthData.email);
    const likedCoursesIds = useAppSelector(state => state.userFavClientData.fav_ids);

    const [ likeAction, likeActionResult ] = useLikeCourseMutation();
    const refAnimationInstance = useRef<any | null>(null);
  
    const getInstance = useCallback((instance: any) => {
        refAnimationInstance.current = instance;
    }, []);

    const makeShot = () => {
        
        refAnimationInstance.current && refAnimationInstance.current({
			    spread: 80,
			    particleCount: 150,
			    startVelocity: 20,
			    scalar: 0.2
        });
        
        if (courseId) {
            likeAction({courseId, email});
            dispatch(addCourseToLiked(courseId));
        }
              
    };
  
    const isCurrentCourseLiked = likedCoursesIds.find(item => item === courseId);

    const btnClassNames = classNames('border  text-White py-2 px-5 z-40 rounded flex-center-center gap-x-2 active:scale-105 pointer-events-auto', {
        'border-Green/50 text-Green/90': isCurrentCourseLiked,
        'border-Grey/50': !isCurrentCourseLiked
    });
    return (
        <div className="absolute top-0 left-0 w-full h-full bg-transparent z-40 pointer-events-none">

            <div className="flex items-center gap-8 w-[440px] absolute top-[340px] right-0">
                {likeActionResult.isLoading !== true && <button onClick={makeShot} className={btnClassNames}>
                    <span>🎉</span>
                    {isCurrentCourseLiked ? <span>Liked</span> : <span>Like</span>}
                </button>}
                {likeActionResult.isLoading && <button onClick={makeShot} disabled className="opacity-50 pointer-events-none border border-Grey/50 text-White py-2 px-5 z-40 rounded flex-center-center gap-x-2 active:scale-105">
                    <span>🎉</span>
                    <span>Like</span>
                </button>}
                <span className="text-Grey">{likes} students liked the course</span>
                
            </div>

            <ReactConfetti width={400} height={400} refConfetti={getInstance} className={'pointer-events-none  absolute top-40 right-48 z-50'}/> 
        </div>
    );
};
