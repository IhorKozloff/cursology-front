import { Button } from 'components';
import { useCourseByIdData, useAppSelector } from 'hooks';
import { useState, useEffect} from 'react';
import { OveralProgressLine } from './OverallProgress.styled';

interface IProps {
    onBtnClick: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

export const OverallProgress = ({onBtnClick}: IProps) => {

    const [progressLinePercent, setProgressLineWidth] = useState(0);

    const { data } = useCourseByIdData();
    const allLessonsInProgress = useAppSelector(state => state.userProgressClientData);

    useEffect(() => {

        const allLessons = data?.course_content.flatMap((item) => item.lessons);
        const onlyVideoLessons = allLessons?.filter(item => item.lesson_type === 'video');
        const finishedLessons = allLessonsInProgress.lessons_progress.filter(item => item.isWatched === true);

        if (finishedLessons.length !== 0 && onlyVideoLessons?.length) {
            setProgressLineWidth(Math.floor((finishedLessons.length * 100) / onlyVideoLessons?.length)); 
        }

    },[allLessonsInProgress, data?.course_content]);
    
    return (
        <div className="py-12.5 pl-12 pr-14 border-b border-Grey">

            <div className="flex items-center justify-between mb-7.5">
                <h3>Course content</h3>
                <Button type="button" variant="tertiary" onClick={onBtnClick}>Close</Button>
            </div>

            <div className="flex items-center justify-between mb-2.5">
                <span className="text-style_body-3--regular">Overall progress</span>
                <span className="text-style_body-3--bold">{progressLinePercent}%</span>
            </div>

            <div className="w-full h-0.5 bg-Grey relative">
                <OveralProgressLine width={progressLinePercent}/>
            </div>

        </div>
    );
};