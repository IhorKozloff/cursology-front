import { Link } from 'react-router-dom';
import { Icon } from 'components/ReusableComponents';
import { useIsCourseContentUserBar, useAppSelector } from 'hooks';

interface IProps {
    lesson_number: number;
    lesson_type: string;
    lesson_title: string;
    lesson_time_minutes: number;
}

export const LessonItem = ({lesson_number, lesson_type, lesson_title, lesson_time_minutes}: IProps) => {

    const { isCourseContentInUserBar, courseId, lesson } = useIsCourseContentUserBar();
    
    const lessonUniqueId = `${courseId}/${lesson_number}`;
    
    const userLessonData = useAppSelector(state => state.userProgressClientData.lessons_progress.find(item => item.lessonId === lessonUniqueId));

    const isCurrentLesson = lesson_number === +lesson!;

    const playGrey = lesson_type === 'video' && isCurrentLesson === false && (!userLessonData  || userLessonData?.isWatched === false);

    const articleGrey = lesson_type === 'article' && isCurrentLesson === false;

    const currentPlay = lesson_type === 'video' && isCurrentLesson && (!userLessonData  || (userLessonData?.isWatched === false && userLessonData?.isOnPlay === false));
    const currentArticle = lesson_type === 'article' && isCurrentLesson;

    const finishedGrey = lesson_type === 'video' && isCurrentLesson === false && userLessonData?.isWatched === true && userLessonData.isOnPlay === false && userLessonData.isOnPause === false;
    const finishedYellow = lesson_type === 'video' && isCurrentLesson === true && userLessonData?.isWatched === true && userLessonData.isOnPlay === false && userLessonData.isOnPause === false;

    const onPlayedYellow = lesson_type === 'video' && isCurrentLesson === true && userLessonData?.isOnPlay === true && userLessonData.isOnPause === false;

    return (

        <>
            <Link to={isCourseContentInUserBar ? `/course/${lessonUniqueId}` : `${lesson_number}`}>
                <div className="flex items-start gap-4 w-[408px]">

                    {playGrey && <Icon name="play" color="grey" wrapStyle="wrap-round-normal" wrapColor="grey"/>}
                    {articleGrey && <Icon name="file" color="grey" wrapStyle="wrap-round-normal" wrapColor="grey"/>}

                    {currentPlay && <Icon name="play" wrapStyle="wrap-round-normal" wrapColor="yellow"/>}
                    {currentArticle && <Icon name="file" wrapStyle="wrap-round-normal" wrapColor="yellow"/>}

                    {finishedGrey && <Icon name="check" color="grey" wrapStyle="wrap-round-normal" wrapColor="grey"/>}
                    {finishedYellow && <Icon name="check" wrapStyle="wrap-round-normal" wrapColor="yellow"/>}

                    {onPlayedYellow && <Icon name="pause" wrapStyle="wrap-round-normal" wrapColor="yellow"/>}

                    <div className="pt-1.5">
                        <span className="text-style__body2--medium mb-1">{lesson_number}. {lesson_title}</span>
                        <div className="text-Grey flex items-center gap-1.5 text-style__body3--regular">
                            <Icon name="clock" size="small"/>
                            {lesson_time_minutes} min
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
};