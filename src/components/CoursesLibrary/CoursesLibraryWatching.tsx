import { useState } from 'react';
import { Button, CoursesList, CourseListPreloader } from 'components';
import { getRandomItemsFromArray } from 'heplers';
import { useViewing } from 'hooks';

export const CoursesLibraryWatching = () => {

    const { viewingData, isLoading } = useViewing();
    const [amountItems, setAmountItems] = useState(4);

    const exploreAllHandler = () => {
        if (viewingData) {
            setAmountItems(viewingData?.length);
        }
    };

    return (
        <section className="library-page__recomended pt-18 pb-6">
            <div className="container">
                <div className="flex items-start justify-between mb-8">
                    <h4 className="mt-1">Students are viewing</h4>
                    <Button type="button" variant="tertiary" onClick={exploreAllHandler}>Explore all</Button>
                </div>
                {viewingData && !isLoading && <CoursesList data={getRandomItemsFromArray(viewingData, amountItems)}/>}
                {isLoading && <CourseListPreloader/>}
            </div>
        </section>
    );
};