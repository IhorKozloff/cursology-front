import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { userLessonData } from 'interfaces';
import storage from 'redux-persist/lib/storage'; 
import { persistReducer } from 'redux-persist';

interface IState {
    lessons_progress: userLessonData[];
}

const initialState: IState = {
    lessons_progress: []
};

const persistedUserProgressClientData = {
    key: 'userFavClientData',
    storage,
};

export const userProgressClientSlice = createSlice({
    name: 'userProgressClientData',
    initialState,
    //Я знаю что под капотом иммер, по этому смело мутирую-немутирую стейт.
    reducers: {
        setLessonsProgressData: (state, action: PayloadAction<userLessonData[]>) => {
            state.lessons_progress = action.payload;
        },

        setLessonsProgressInitialData: (state) => {
            return state = initialState;
        },
    
        addLessInfoOnPlay: (state, action: PayloadAction<string>) => {

            const existingLessInfo = state.lessons_progress.find(item => item.lessonId === action.payload);

            if (existingLessInfo) {
                existingLessInfo.isOnPause = false;
                existingLessInfo.isOnPlay = true;
                return;
            }

            state.lessons_progress.push({
                lessonId: action.payload,
                progressTime: 0,
                isWatched: false,
                isOnPause: false,
                isOnPlay: true
            });
        },

        addCurrentTimeOnProgress: (state, action: PayloadAction<Pick<userLessonData, 'lessonId' | 'progressTime'>>) => {

            const existingLessInfo = state.lessons_progress.find(item => item.lessonId === action.payload.lessonId);

            if (existingLessInfo) {
                existingLessInfo.progressTime = action.payload.progressTime;
            }
        },

        addPausedFlagOnPause: (state, action: PayloadAction<string>) => {

            const existingLessInfo = state.lessons_progress.find(item => item.lessonId === action.payload);

            if (existingLessInfo) {
                existingLessInfo.isOnPause = true;
                existingLessInfo.isOnPlay = false;
            }
        },

        addFinishedFlagOnEnd: (state, action: PayloadAction<string>) => {

            const existingLessInfo = state.lessons_progress.find(item => item.lessonId === action.payload);

            if(existingLessInfo) {
                existingLessInfo.isWatched = true;
                existingLessInfo.isOnPlay = false;
                existingLessInfo.isOnPause = false;
            }
        },
    }
});

export const { 
    setLessonsProgressData,
    setLessonsProgressInitialData,

    addLessInfoOnPlay, 
    addPausedFlagOnPause, 
    addCurrentTimeOnProgress, 
    addFinishedFlagOnEnd, 
} = userProgressClientSlice.actions;

export const persistedUserProgressClientDataSlice = persistReducer(persistedUserProgressClientData, userProgressClientSlice.reducer);