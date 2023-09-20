import { useParams } from 'react-router-dom';
import { useCourseByIdData } from 'hooks';

export const useCurrentLessonData = () => {
    const { lesson } = useParams();

    const { data } = useCourseByIdData();

    const currentPart = data?.course_content?.find(item => item.lessons.find(less => less.lesson_number === +lesson!));
    const allLessons = data?.course_content?.flatMap(item => item.lessons);

    const currentLesson = allLessons?.find(less => less.lesson_number === +lesson!);
    const nextLesson = allLessons?.find(less => less.lesson_number === +lesson! + 1);
    const prevLesson = allLessons?.find(less => less.lesson_number === +lesson! - 1);

    return {
        partName: currentPart?.part_title,
        currentLesson,
        nextLesson,
        prevLesson
    };
};