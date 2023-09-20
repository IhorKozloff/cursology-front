
import { Icon } from '../Icon/Icon';
import { PopularMark } from '../PopularMark/PopularMark';
import { RatingStars } from '../RatingStars/RatingStars';
import classNames from 'classnames';

interface IProps {
    poster_path: string;
    popularity: number;
    title: string;
    author: string;
    total_lessons: number;
    popularity_tag: boolean;
    isDark?: boolean;
    baseUrl: string;
}

export const CoursesListItem = ({ poster_path, popularity, popularity_tag, author, title, total_lessons, isDark = false, baseUrl}: IProps) => {

    const titleClasses = classNames('text-style__body2--bold mb-1.5', {
        ' text-White': isDark,
        ' text-Black': isDark === false,
    });

    return (
        
        <>
            <div className="w-full flex flex-col items-start">
                <div className="img-wrapper  flex-center-center w-full h-[184px] overflow-hidden mb-4 group cursor-pointer">
                    <img src={`${baseUrl ? baseUrl : ''}${poster_path}`} alt="software wallpaper"  className="w-full h-full object-cover mx-auto group-hover:scale-110 transition-all duration-300"/>
                </div>

                <div className="mb-2">
                    <RatingStars rating={popularity}/>
                </div>

                <span className={titleClasses}>{title}</span>

                <ul className="text-style__body3--regular text-Grey flex items-start gap-4">
                    <li className="flex gap-1.5">
                        <span><Icon size="small" name="user"/></span>
                        <span>{author}</span>
                    </li>
                    <li className="flex gap-1.5">
                        <span><Icon size="small" name="play"/></span>
                        <span>{total_lessons} lessons</span>
                    </li>
                </ul>
            </div>
            {popularity_tag && <div className="absolute top-4 left-4"><PopularMark/></div>}
        </>
    );
};