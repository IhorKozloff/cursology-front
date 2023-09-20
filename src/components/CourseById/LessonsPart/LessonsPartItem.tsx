import { Icon } from 'components';
import { ICourseContent } from 'interfaces';
import { useState, useEffect } from 'react';
import { LessonsPartContent } from './LessonsPartContent';
import { useIsCourseContentUserBar } from 'hooks';

interface IProps { 
    lessonsPartData: ICourseContent;
}

export const LessonsPartItem = ({lessonsPartData: {lessons, part_title, part_total_lessons, part_total_time_minutes}}: IProps) => {
    
    const { lesson } = useIsCourseContentUserBar();
    const [ showContent, setShowContent ] = useState(false);

    const handleCategoryClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setShowContent(!showContent); 
        if (event) {
            event.currentTarget.scrollIntoView({block: 'center', behavior: 'smooth'});
        }
        
    };

    useEffect(() => {
        
        if (!lesson) {
            return;
        }

        const existingLessonInPart = lessons.find(item => item.lesson_number === +lesson);

        if (existingLessonInPart !== undefined) {
            setShowContent(true);
        }
        
    },[lesson, lessons, setShowContent]);

    return (
        <div className="border-b border-Black/10 pb-6 relative">
            <div className="cursor-pointer" onClick={handleCategoryClick} >
                <div className="max-w-[360px]">
                    <h5>{part_title}</h5>       
                </div>
            
                <ul className="text-Grey flex items-center gap-4 [&_li]:flex [&_li]:items-center [&_li]:gap-1.5">
                    <li>
                        <Icon name="play" size="small"/>
                        <span>{part_total_lessons}</span>
                        <span>lessons</span>
                    </li>
                    <li>
                        <Icon name="clock" size="small"/>
                        <span>{part_total_time_minutes}</span>
                        <span>min total length</span>
                    </li>
                </ul>

                <div className="rotate-90 text-Grey absolute top-[5px] right-0">
                    {showContent === false && <Icon name="chevroneRight"/>}
                    {showContent && <Icon name="chevroneLeft"/>}
                </div>
            </div>
            {showContent && <LessonsPartContent lessons={lessons} setShowContent={setShowContent}/>}
        </div>
    );
};