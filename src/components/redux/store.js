import { configureStore } from '@reduxjs/toolkit';
import contactsSlice from './features/contactSlice'

export const store = configureStore({
  reducer: {
    contacts:contactsSlice,
  },
})