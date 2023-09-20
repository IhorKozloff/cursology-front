import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface IProps {
    itemsAmount?: number;
    isDark?: boolean;
}
export const CourseListPreloader = ({isDark = false, itemsAmount = 4}: IProps) => {

    const loaderArray = Array(itemsAmount).fill('');

    const customSkeleton = (height: number) => {
        return <Skeleton height={height}  baseColor={isDark ? '#454647' : '#ebebeb'} highlightColor={isDark ? '#606263' : '#f5f5f5'}/>;
    };

    return (
        <ul className="flex flex-wrap gap-8 w-full">
            {loaderArray.map((item, index) => {
                return(
                    <li key={index} className="flex flex-col items-start w-70">
                       
                        <div className="img-wrapper w-full mb-4 overflow-hidden rounded">
                            {customSkeleton(184)}
                        </div>

                        <div className="rating-stars w-30 mb-2">
                            {customSkeleton(24)}
                        </div>

                        <span className="title w-64">
                            {customSkeleton(24)}
                        </span>

                        <ul className="flex items-start gap-4">
                            <li className="w-30 flex gap-1.5">
                                <span className="icon w-4">{customSkeleton(24)}</span>
                                <span className="author w-25">{customSkeleton(24)}</span>
                            </li>
                            <li className="w-22 flex gap-1.5">
                                <span className="icon w-4">{customSkeleton(24)}</span>
                                <span className="lessons w-16">{customSkeleton(24)}</span>
                            </li>
                        </ul>
                  
                    </li>
                );
            })}
        </ul>
    );
};