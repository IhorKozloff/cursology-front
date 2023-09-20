import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { ICoursesGeneralResponse, ICourseGeneral, ICourseByIdResponse, ICourseContentResponse } from 'interfaces';
import { baseUrl } from 'constatnts/baseUrl';
import storage from 'redux-persist/lib/storage'; 
import { persistReducer } from 'redux-persist';

const persistCourses = {
    key: 'courses',
    storage,
};

export const coursesApi = createApi({
    reducerPath: 'coursesApi',

    baseQuery: fetchBaseQuery({ baseUrl }),
    tagTypes: ['Like'],

    endpoints: (builder) => ({
        getCoursesGeneralInfo: builder.query<ICourseGeneral[], void>({
            query: () => 'courses/all',
            transformResponse: (response: ICoursesGeneralResponse, meta, arg) => response.result,
        }),
        getCoursebyId: builder.query<ICourseContentResponse, string | undefined>({
            query: (id) => `courses/${id}`,
            providesTags: ['Like'],
            transformResponse: (response: ICourseByIdResponse, meta, arg) => response.result,
        }),
        likeCourse: builder.mutation<any, {courseId: string, email: string}>({
            query: ({courseId, email}) => ({
                url: `courses/${courseId}/like`,
                method: 'POST',
                body: {
                    email
                }
            }),
            invalidatesTags: ['Like']
        }),
    }),
});

export const { useGetCoursesGeneralInfoQuery, useGetCoursebyIdQuery, useLikeCourseMutation } = coursesApi;
export const persistetCourses = persistReducer(persistCourses, coursesApi.reducer);