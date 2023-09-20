import { useCourseByIdData } from 'hooks/useCourseByIdData';
import { Icon } from 'components';

export const CourseByIdAchivements = () => {

    const { data } = useCourseByIdData();

    return (
        <div className="achivements p-8 bg-GreyLight w-[440px]">
            <h4 className="mb-8">What you’ll learn</h4>
            <ul>
                {data?.course_general_info.learning_achivements.map(item => {
                    return (
                        <li key={item} className="flex items-start gap-3 mb-6">
                            <Icon name="check" color="grey"/>
                            <p className="text-style__body2--regular">{item}</p>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};