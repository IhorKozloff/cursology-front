import { useParams } from 'react-router-dom';

export const useIsCourseContentUserBar = () => {
    const {courseId, lesson} = useParams();
    const isCourseContentInUserBar = lesson !== undefined ? true : false;

    return { isCourseContentInUserBar, courseId, lesson };
};