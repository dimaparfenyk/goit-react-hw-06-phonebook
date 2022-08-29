import { configureStore } from '@reduxjs/toolkit';
import { createAction, createReducer, createSlice } from '@reduxjs/toolkit';

export const add = createAction('contact/add');
console.log(add(10));
export const remove =createAction('contact/remove');
console.log(remove(5));
console.log('Type -',remove(5).type);
console.log('Payload -',remove(5).payload);

const contactReducer = createReducer([], (builder) => {
  builder.addCase('contact/add', (state, action) => state.push(action.payload));
  builder.addCase('contact/remove', (state, action)=>state.filter(contact=> contact.id !==action.payload))
})

const contactSlice = createSlice({
  name: 'contact',
  initialState: [],
  reducers: {
    add(state) {
      
    },
    remove: {
      
    }
  }
})


export const store = configureStore({
  reducer: {
    contact:contactReducer,
  },
})