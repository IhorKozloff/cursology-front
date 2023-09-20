import { CoursesList, Button, CategorySelect, CourseListPreloader, CoursesEmptyPlugIn } from 'components';
import { useState } from 'react';
import { getRandomItemsFromArray } from 'heplers';
import { ICourseGeneral } from 'interfaces';

interface IProps {
    renderData: {
        data: ICourseGeneral[] | undefined;
        category: string;
        setCategory: (category: string) => void;
        isLoading: boolean;
    }
}
export const CoursesLibraryTopInCategory = ({renderData}: IProps) => {

    const [amountItems, setAmountItems] = useState(4);

    const exploreAllHandler = () => {
        if (renderData.data) {
            setAmountItems(renderData.data?.length);
        }
    };

    return (
        <section className="library-page__recomended pt-18 pb-6">
            <div className="container">
                <div className="flex items-start justify-between mb-8">
                    <div className="">
                        <h4 className="mt-1 flex items-center gap-2">
                            Top courses in
                            <span className="text-Blue relative">
                                <CategorySelect onSelectAction={renderData.setCategory} currentCategoryId={renderData.category}/>
                            </span>
                        </h4>
                        
                    </div>
                    {renderData.data && renderData.data.length > 4 && <Button type="button" variant="tertiary" onClick={exploreAllHandler}>Explore all</Button>}
                </div>
                {renderData.data && renderData.data.length !== 0 && !renderData.isLoading && <CoursesList data={getRandomItemsFromArray(renderData.data, amountItems)}/>}
                {renderData.isLoading && <CourseListPreloader/>}
                {renderData.data && renderData.data.length === 0  && <CoursesEmptyPlugIn/> }
            </div>
        </section>
    );
};