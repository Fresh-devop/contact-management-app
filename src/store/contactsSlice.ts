import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export {};

interface Contact {
  id: string;
  name: string;
  // Add other contact properties
}

interface ContactsState {
  contacts: Contact[];
}

const initialState: ContactsState = {
  contacts: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    CreateContact: (state, action: PayloadAction<Contact>) => {
      state.contacts.push(action.payload);
    },
    updateContact: (state, action: PayloadAction<Contact>) => {
      const { id } = action.payload;
      const existingContact = state.contacts.find((contact) => contact.id === id);
      if (existingContact) {
        Object.assign(existingContact, action.payload);
      }
    },
    deleteContact: (state, action: PayloadAction<string>) => {
      state.contacts = state.contacts.filter((contact) => contact.id !== action.payload);
    },
  },
});

export const { CreateContact, updateContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
