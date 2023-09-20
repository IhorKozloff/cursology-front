import { createSelector } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { ICourseGeneral } from 'interfaces';
import { useGetCoursesGeneralInfoQuery } from 'store';

export const useViewing = () => {
   
    const selectViewingData = useMemo(() => {
        return createSelector(
            [response  => response.data], 
            (data) => {
                return (
                    data?.filter((item: ICourseGeneral) => item.popularity_tags.includes('watching')) ?? []
                );
            }
        );
    }, []);

    return useGetCoursesGeneralInfoQuery(undefined, {
        selectFromResult(result) {
            return {
                ...result,
                viewingData: selectViewingData(result)
            };
        }
    });
};