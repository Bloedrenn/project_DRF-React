import { configureStore} from '@reduxjs/toolkit';
import { cashReducer } from './reducers/cashReducer';
import { customersReducer } from './reducers/customersReducer';

export const store = configureStore({
    reducer: {
        cash: cashReducer,
        customers: customersReducer
    }
});