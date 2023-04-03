import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  filter: '',
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addNumber: (state, action) => {
      if (
        state.contacts.filter(e => e.name === action.payload.name).length !== 0
      ) {
        alert(`${action.payload.name}is already in contacts.`);
        return;
      }
      state.contacts.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    filterContacts: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addNumber, deleteContact, filterContacts } =
  contactSlice.actions;
export default contactSlice.reducer;
