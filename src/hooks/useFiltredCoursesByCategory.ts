import { useGetCoursesGeneralInfoQuery } from 'store';
import { useEffect, useState } from 'react';

export const useFiltredCoursesByCategory = () => {
    const [ category, setCategory ] = useState('');
    const [topic, setTopic] = useState('');
    const { data, isLoading } = useGetCoursesGeneralInfoQuery();

    useEffect(() => {
        setTopic('');
    },[category]);

    if (category === '' && topic === '') {
        return {data: data || [], category, setCategory, setTopic, isLoading};
    } 
    if (category !== '' && topic === '') {

        const filteredData = data?.filter(item => item.categories.primary_direction.find(el => el === category));

        return {data: filteredData || [], category, setCategory, setTopic, isLoading };
    }
    if (category !== '' && topic !== '') {

        const filteredDataByCategory = data?.filter(item => item.categories.primary_direction.includes(category));
        const filteredDataByTopic = filteredDataByCategory?.filter(item => item.categories.secondary_direction.includes(topic));

        return {data: filteredDataByTopic || [], category, topic, setCategory, setTopic, isLoading };
    }

    if (category === '' && topic !== '') {

        const filteredDataByTopic = data?.filter(item => item.categories.secondary_direction.includes(topic));

        return {data: filteredDataByTopic || [], category, topic, setCategory, setTopic, isLoading };
    }

    return {data: [], category, topic, setCategory, setTopic, isLoading };
};