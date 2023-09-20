import { Footer } from 'components';
import { CoursesLibraryHero, CourseLibraryRecommended, CoursesLibraryWatching, CoursesLibraryTopInCategory, CoursesTopicsBar, CoursesLibrarySearchResult } from 'components/CoursesLibrary';

import { useGetSearchingData, useFiltredCoursesByCategory } from 'hooks';
import { useState } from 'react';

export default function CoursesLibrary () {

    const [searchQuery, setSearchQuery] = useState('');
    const searchingData = useGetSearchingData(searchQuery);

    const result = useFiltredCoursesByCategory();

    return (
        <>
            <CoursesLibraryHero setSearchQuery={setSearchQuery} setCategory={result.setCategory}/>
            {searchingData && searchQuery !== '' && <CoursesLibrarySearchResult searchingData={searchingData} setSearchQuery={setSearchQuery}/>}
            <CourseLibraryRecommended/>
            <CoursesLibraryWatching/>
            <CoursesTopicsBar primaryCategoryId={result.category} setTopic={result.setTopic}/>
            <CoursesLibraryTopInCategory renderData={result}/>
            <Footer/>
        </>
    );
}