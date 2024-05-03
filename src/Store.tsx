import { configureStore, createSlice } from '@reduxjs/toolkit';
// import Axios from 'axios';

const initialState = { value: "" };
const userSlice = createSlice({
    name:"user",
    initialState,
    reducers: {
        login: (state, action) =>{
            console.log(state.value = action.payload)
            // Axios.get('create_account').then((res) => {
            // if((state.value = action.payload) === (res.data)){
            //         console.log("match");
            //     } else {
            //         console.log("not match");
            //     }
            // }).catch((err) => console.log(err))
        },

        logout: (state) => {
            state.value = initialState.value;
        },
    }
});

export const { login, logout } = userSlice.actions;
export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
    },
});

