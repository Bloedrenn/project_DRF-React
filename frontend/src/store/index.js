import { configureStore} from '@reduxjs/toolkit';
import { bankReducer } from './reducers/bankReducer';
import { customersReducer } from './reducers/customersReducer';

export const store = configureStore({
    reducer: {
        bank: bankReducer,
        customers: customersReducer
    }
});