import { Button, Icon, Player } from 'components';
import { useState, useEffect } from 'react';
import { useCurrentLessonData } from 'hooks';
import { Link, useParams } from 'react-router-dom';

interface IProps {
    showLessonsHandler: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

export const LessonPageHero = ({showLessonsHandler}: IProps) => {
 
    const {partName, currentLesson, nextLesson, prevLesson} = useCurrentLessonData();
    
    const { courseId, lesson } = useParams();

    const [showVideo, setShowVideo] = useState(false);

    const handleBtnClick = () => {
        setShowVideo(true);
    };
  
    useEffect(() => {
        setShowVideo(false);
    }, [lesson]);
    
    return (
        <section className="background-custom-gradient-black py-18">

            <div className="container pb-11">
                <div className="flex items-center justify-between">
                    <h3 className="text-White basis-3/5">{currentLesson?.lesson_title}</h3>
                    <Button type="button" variant="secondary" size="normal" color="yellow" onClick={showLessonsHandler}>Show lessons</Button>
                </div>
            </div>

            {currentLesson?.lesson_type === 'video' && 
            <div className="bg-White/5">
                <div className="container h-[690px] bg-White/20 flex-center-center">
                    {showVideo === false && <Button type="button" variant="primary" size="normalShortcut" color="yellow"  onClick={handleBtnClick}>
                        <div className="flex-center-center gap-2">
                            <Icon name="play"/>
                            <span>Watch video</span>
                        </div>
                    </Button>}

                    {showVideo && <Player
                        link={`www.youtube.com/watch?v=${currentLesson?.lesson_video_path}`}
                    />}
                </div>
            </div>}
            
            <div className="container pt-12 flex items-end justify-between">
                <div className="w-[592px]">
                    <div className="signature text-Grey text-style__body2--medium flex items-center gap-1.5 mb-3">
                        <span><span>{partName}</span> · <span>Lesson {currentLesson?.lesson_number}</span></span>
                    </div>
                    <h4 className="mb-6 text-White">{currentLesson?.lesson_title}</h4>
                    <p className="text-style__body2--regular text-Grey">{currentLesson?.lesson_preview_text}</p>
                </div>
                {nextLesson !== undefined && <div className="pt-6 pr-6 pl-9 pb-9 flex items-start justify-between w-[440px] border border-White/10 rounded-xl">

                    <div className="text-style__body2--regular text-Grey pt-3 [&_span]:block w-[220px]">
                        <span className="mb-1">Next · Lesson {nextLesson.lesson_number}</span>
                        <span className="text-style__body2--regular text-White mb-4">{nextLesson.lesson_title}</span>
                        <div className="flex items-center gap-1.5">
                            <Icon name="clock"/>
                            {nextLesson.lesson_time_minutes} min
                        </div>
                    </div>

                    <Link to={`/course/${courseId}/${nextLesson.lesson_number}`}>
                        <Button type="button" variant="secondary" size="medium" color="white">Next lesson</Button>
                    </Link>
                </div>}
                {nextLesson === undefined && <div className="pt-6 pr-6 pl-9 pb-9 flex items-start justify-between w-[440px] border border-White/10 rounded-xl">

                    <div className="text-style__body2--regular text-Grey pt-3 [&_span]:block w-[220px]">
                        <span className="mb-1">Next · Lesson {prevLesson?.lesson_number}</span>
                        <span className="text-style__body2--regular text-White mb-4">{prevLesson?.lesson_title}</span>
                        <div className="flex items-center gap-1.5">
                            <Icon name="clock"/>
                            {prevLesson?.lesson_time_minutes} min
                        </div>
                    </div>
                    <Link to={`/course/${courseId}/${prevLesson?.lesson_number}`}>
                        <Button type="button" variant="secondary" size="medium" color="white">Previous lesson</Button>
                    </Link>
                </div>}
            </div>
           
        </section>
    );
};