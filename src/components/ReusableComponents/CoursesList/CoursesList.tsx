import { ICourseGeneral } from 'interfaces';
import { CoursesListItem } from './CoursesListItem';
import { Link } from 'react-router-dom';
import { baseUrl } from 'constatnts/baseUrl';

interface IProps {
    data: ICourseGeneral[] | null;
    isDark?: boolean;
}
export const CoursesList = ({data, isDark = false}: IProps) => {

    return (
        <ul className="flex flex-wrap gap-8 w-full">
            {data && data.map(({author, popularity, id, poster_path, title, total_lessons, popularity_tags}) => {
                return(
                    <li key={title} className="w-70 relative">
                        <Link to={`/course/${id}`} style={{width: '100%'}}>
                            <CoursesListItem
                                author={author}
                                popularity={popularity}
                                poster_path={poster_path.ratio_normal}
                                title={title}
                                total_lessons={total_lessons}
                                popularity_tag={popularity_tags.includes('popular')}
                                isDark={isDark}
                                baseUrl={baseUrl}
                            />
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};