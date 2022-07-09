import { configureStore } from '@reduxjs/toolkit';
import allowSlice from './allowSlice';

export default configureStore({
    reducer: {
        signIn: allowSlice,
    },
})