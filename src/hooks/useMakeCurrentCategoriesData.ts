import { primaryCategories, currentPrimaryCategoriesSet } from 'constatnts/primaryCategories';
import { useMemo } from 'react';

export const useMakeCurrentCategoriesData = () => {
    const result = useMemo(
        () => currentPrimaryCategoriesSet.flatMap(item => primaryCategories.filter(({categoryID}) => categoryID === item)),[]
    ); 
    return result;
};