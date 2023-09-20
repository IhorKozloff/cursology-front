
import { minutestoHoursConverter } from 'heplers';
import { LessonsPartItem } from 'components/CourseById';
import { Icon } from 'components';
import { useCourseByIdData } from 'hooks/useCourseByIdData';

interface IProps {
    lessBar?: boolean;
}

export const CourseByIdContent = ({lessBar = false}: IProps) => {
    
    const { data } = useCourseByIdData();
 
    const { h: hours, m: minutes } = minutestoHoursConverter(data?.course_general_info.total_time_minutes);

    return (
        <div>
            {lessBar === false && <div className="py-8">
                <h4 className="mb-3">Course content</h4>
                <ul className="text-Grey flex items-center gap-4 [&_li]:flex [&_li]:items-center [&_li]:gap-1.5">
                    <li>
                        <Icon name="folder" size="small"/>
                        <span>{data && data.course_general_info.total_sections}</span>
                        <span>sections</span>
                    </li>
                    <li>
                        <Icon name="play" size="small"/>
                        <span>{data && data.course_general_info.total_lessons}</span>
                        <span>lessons</span>
                    </li>
                    <li>
                        <Icon name="clock" size="small"/>
                        <span>{`${hours} hr ${minutes}`}</span>
                        <span>min total length</span>
                    </li>
                </ul>
            </div>}
            <ul className={lessBar ? 'w-full' : 'w-[652px]'}>
                {data?.course_content.map(item => {
                    
                    return (
                        
                        <li key={item.part_title} className="mt-6 first:mt-0">
                            <LessonsPartItem lessonsPartData={item}/>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};