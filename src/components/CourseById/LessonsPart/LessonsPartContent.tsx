import { ILesson } from 'interfaces';
import { LessonItem } from 'components';

interface IProps {
    lessons: ILesson[];
    setShowContent: (status: boolean) => void;
}

export const LessonsPartContent = ({lessons, setShowContent}:IProps) => {

    return (
        <>
            <ul className="mt-6">
                {lessons.map(({lesson_title, lesson_number, lesson_time_minutes, lesson_type}) => {
        
                    return (
                        <li key={lesson_number} className="mb-6 last:mb-0 cursor-pointer hover:bg-Black/2">
                            <LessonItem 
                                lesson_title={lesson_title}
                                lesson_number={lesson_number}
                                lesson_time_minutes={lesson_time_minutes}
                                lesson_type={lesson_type}
                            />
                        </li>
                    );
                })}
            </ul>
        </>
    );
};