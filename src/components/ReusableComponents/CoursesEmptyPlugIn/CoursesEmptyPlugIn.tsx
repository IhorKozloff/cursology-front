import classNames from 'classnames';

interface IProps {
    textStyle?: 'dark' | 'light'
}

export const CoursesEmptyPlugIn = ({textStyle = 'dark'}: IProps) => {

    const textClassnames = classNames('[&_span]:text-Blue', {
        'text-Black': textStyle === 'dark',
        'text-White': textStyle === 'light'

    });

    return (
        <div className="h-[283px] no-courses-by-category-wallpaper">
            <div className="w-1/2 pt-10">
                <h2 className={textClassnames}><span>Courses with a given category</span> will appear soon</h2>
            </div>
        </div>
    );
};