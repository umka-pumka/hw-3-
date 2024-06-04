import { configureStore } from '@reduxjs/toolkit';
import namesReducer from './namesSlice';

const store = configureStore({
  reducer: {
    names: namesReducer,
  },
});

export default store;