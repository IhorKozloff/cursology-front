import { Button, CourseListPreloader, CoursesList } from 'components';
import { getRandomItemsFromArray } from 'heplers';
import { useState } from 'react';
import { useRecomended } from 'hooks';

export const CourseLibraryRecommended = () => {

    const { recommendedData, isLoading } = useRecomended();
    const [amountItems, setAmountItems] = useState(4);

    const exploreAllHandler = () => {
        if (recommendedData) {
            setAmountItems(recommendedData?.length);
        }
    };

    return (
        <section className="library-page__recomended pt-18 pb-6">
            <div className="container">
                <div className="flex items-start justify-between mb-8">
                    <h4 className="mt-1">Recommended for you</h4>
                    <Button type="button" variant="tertiary" onClick={exploreAllHandler}>Explore all</Button>
                </div>
                {recommendedData && !isLoading && <CoursesList data={getRandomItemsFromArray(recommendedData, amountItems)}/>}
                {isLoading && <CourseListPreloader/>}
            </div>
        </section>
    );
};