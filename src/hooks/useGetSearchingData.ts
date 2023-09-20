import { useGetCoursesGeneralInfoQuery } from 'store';

export const useGetSearchingData = (query: string = '') => {

    const { data } = useGetCoursesGeneralInfoQuery();

    if (query === '') {
        return [];
    } else {
        const filteredData = data?.filter(item => item.title.toLowerCase().includes(query.toLowerCase()));
        console.log(filteredData);
        return filteredData;
    }
    
};