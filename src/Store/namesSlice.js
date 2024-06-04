import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  names: JSON.parse(localStorage.getItem('names')) || [],
};

const namesSlice = createSlice({
  name: 'names',
  initialState,
  reducers: {
    addName: (state, action) => {
      state.names.push(action.payload);
      localStorage.setItem('names', JSON.stringify(state.names));
    },
    removeName: (state, action) => {
      state.names = state.names.filter(name => name !== action.payload);
      localStorage.setItem('names', JSON.stringify(state.names));
    },
  },
});

export const { addName, removeName } = namesSlice.actions;
export default namesSlice.reducer;