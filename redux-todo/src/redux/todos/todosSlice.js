import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [
      { id: '1', title: 'Learn react', completed: true },
      { id: '2', title: 'Read a Book', completed: false },
    ],
  },
  reducers: {},
});

export default todoSlice.reducer;
