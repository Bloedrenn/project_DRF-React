import { configureStore} from '@reduxjs/toolkit';
import { cashReducer } from './reducers/cashReducer';

export const store = configureStore({
    reducer: cashReducer
});