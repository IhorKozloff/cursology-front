import { Button, CoursesList } from 'components';
import { ICourseGeneral } from 'interfaces';

interface IProps {
    searchingData: ICourseGeneral[];
    setSearchQuery: (query: string) => void;
}

export const CoursesLibrarySearchResult = ({searchingData, setSearchQuery}: IProps) => {

    const handleResetResults = () => {
        setSearchQuery('');
    };

    return (

        <section className="library-page__recomended pt-18 pb-6">
            <div className="container relative">
                {searchingData.length !== 0 &&
                <>
                    <div className="flex items-start justify-between mb-8">
                        <h4 className="mt-1">Found by your search</h4>
                        <Button type="button" variant="tertiary" onClick={handleResetResults}>Reset results</Button>
                    </div>
                    <CoursesList data={searchingData}/>
                </>
                }
             
                {searchingData.length === 0 && 
                    <div className="no-results-wallpaper w-full h-110 flex items-start justify-end">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 p-5 rounded-full bg-White">
                            <h2>Nothing found for your request</h2>
                        </div>
                        <Button type="button" variant="tertiary" onClick={handleResetResults}>Reset</Button>
                    </div>
                }
            </div>
        </section>
    );
};