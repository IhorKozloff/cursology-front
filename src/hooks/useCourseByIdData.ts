import { useParams } from 'react-router-dom';
import { useGetCoursebyIdQuery } from 'store';

export const useCourseByIdData = () => {
    const {courseId} = useParams();

    const { data, isLoading } = useGetCoursebyIdQuery(courseId, {
        skip: courseId === undefined
    });

    return { data, isLoading };
};