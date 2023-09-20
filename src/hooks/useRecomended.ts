import { createSelector } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { ICourseGeneral } from 'interfaces';
import { useGetCoursesGeneralInfoQuery } from 'store';

export const useRecomended = () => {
   
    const selectRecommendedData = useMemo(() => {
        return createSelector(
            [response  => response.data], 
            (data) => {
                return (
                    data?.filter((item: ICourseGeneral) => item.popularity_tags.includes('recommended')) ?? []
                );
            }
        );
    }, []);

    return useGetCoursesGeneralInfoQuery(undefined, {
        selectFromResult(result) {
            return {
                ...result,
                recommendedData: selectRecommendedData(result)
            };
        }
    });
};