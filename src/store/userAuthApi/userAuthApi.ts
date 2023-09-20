import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { IUserAuth,  IServerLoginResponse, TransformedLoginServerResponse, ServerRegisterResponse } from 'interfaces';
import { baseUrl } from 'constatnts/baseUrl';
import storage from 'redux-persist/lib/storage'; 
import { persistReducer } from 'redux-persist';

const persistUserAuthApi = {
    key: 'userAuthApi',
    storage,
};

export const userAuthApi = createApi({
    reducerPath: 'userAuthApi',

    baseQuery: fetchBaseQuery({ baseUrl }),

    endpoints: (builder) => ({
        register: builder.mutation<ServerRegisterResponse, Pick<IUserAuth, 'email' | 'password' | 'name'>>({
            query: (body) => ({
                url: 'user/register',
                method: 'POST',
                body
            }),
        }),
        login: builder.mutation<TransformedLoginServerResponse, Pick<IUserAuth, 'email' | 'password'>>({
            query: (body) => ({
                url: 'user/login',
                method: 'POST',
                body
            }),
            transformResponse: (response: IServerLoginResponse) => response.result,
        }),
        logout: builder.mutation<any, Pick<IUserAuth, 'email'>>({
            query: (body) => ({
                url: 'user/logout',
                method: 'POST',
                body
            }),
        }),
        saveUserActivity: builder.mutation<{status: number, message: string}, Pick<IUserAuth, 'email' | 'liked_courses_ids' | 'lessonsProgress'>>({
            query: (body) => ({
                url: 'user/save',
                method: 'PUT',
                body
            })
        })
    }),
});

export const { useRegisterMutation, useLoginMutation, useSaveUserActivityMutation, useLogoutMutation } = userAuthApi;
export const persistetUserAuth = persistReducer(persistUserAuthApi, userAuthApi.reducer);