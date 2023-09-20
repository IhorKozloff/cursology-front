import { CourseByIdContent, Footer, ModalWindowBackdrop } from 'components';
import { LessonPageHero, LessonPageTranscription, OverallProgress } from 'components/LessonPage';
import { useState } from 'react';

export default function LessonPage () {

    const [isLessonsBarOpen, setIsLessonsBarOpen] = useState(false);

    const handleLessBarBtn = () => {
        setIsLessonsBarOpen(!isLessonsBarOpen);
    };

    const onBackDropClick = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
        if (event.target === event.currentTarget) {
            setIsLessonsBarOpen(false);
        }
    };

    return (
        <>
            <LessonPageHero showLessonsHandler={handleLessBarBtn}/>
            
            <LessonPageTranscription/>
            
            {isLessonsBarOpen && 
                <ModalWindowBackdrop backDropAction={onBackDropClick}>
                    <div className="absolute z-50 right-0 top-0 w-[512px] h-screen animate-lessBarAppear bg-White pb-15">
                        <OverallProgress onBtnClick={handleLessBarBtn}/>
                        <div className="pt-12 pl-12 pr-14 h-4/5 overflow-y-scroll">
                            <CourseByIdContent lessBar/>
                        </div>
                    </div>
                </ModalWindowBackdrop>
            }

            <Footer/>
        </>
    );
}