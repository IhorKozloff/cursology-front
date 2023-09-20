import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUserAuth, TransformedLoginServerResponse } from 'interfaces';
import storage from 'redux-persist/lib/storage'; 
import { persistReducer } from 'redux-persist';

interface IState {
    isLogIn: boolean;
    userAuthData: Pick<IUserAuth, 'email' | 'name' | 'token'>,
}

const initialState: IState = {
    isLogIn: false,
    userAuthData: {
        name: '',
        email: '',
        token: ''
    },
};

const persistedUserAuthClientData = {
    key: 'userAuthClientData',
    storage,
};

const userAuthClientData = createSlice({
    name: 'userAuthClientData',
    initialState,
    //Я знаю что под капотом иммер, по этому смело мутирую-немутирую стейт.
    reducers: {
        onLogInSuccess: (state, action: PayloadAction<TransformedLoginServerResponse>) => {
            state.userAuthData.email = action.payload.email;
            state.userAuthData.name = action.payload.name;
            state.userAuthData.token = action.payload.token;
            state.isLogIn = true;
        },

        onLogOutSuccess: (state) => {
            return state = initialState;
        }
    }
});

export const { 
    onLogInSuccess,
    onLogOutSuccess, 
} = userAuthClientData.actions;

export const persistedUserAuthClientDataSlice = persistReducer(persistedUserAuthClientData, userAuthClientData.reducer);