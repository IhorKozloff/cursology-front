import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'; 
import { persistReducer } from 'redux-persist';

interface IState {
    fav_ids: string[];
}

const initialState: IState = {
    fav_ids: []
};

const persistedUserFavClientData = {
    key: 'userFavClientData',
    storage,
};

export const userFavClientSlice = createSlice({
    name: 'userFavClientData',
    initialState,
    //Я знаю что под капотом иммер, по этому смело мутирую-немутирую стейт.
    reducers: {
        setLikedCoursesServerData: (state, action: PayloadAction<string[]>) => {
            state.fav_ids = action.payload;
        },
       
        addCourseToLiked: (state, action: PayloadAction<string>) => {
            const existingCourse = state.fav_ids.find(item => item === action.payload);

            if(existingCourse) {
                state.fav_ids = state.fav_ids.filter(item => item !== action.payload);
            } else {
                state.fav_ids = [...state.fav_ids, action.payload];
            }
        },

        setLikedCoursesInitalData: (state) => {
            state.fav_ids = [];
        }
    }
});

export const { addCourseToLiked, setLikedCoursesServerData, setLikedCoursesInitalData } = userFavClientSlice.actions;
export const persistedUserFavClientDataSlice = persistReducer(persistedUserFavClientData, userFavClientSlice.reducer);