import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts } from "./contactsOps";

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        loading: false,
        error: null,
    },

    extraReducers: builder => {
        builder.addCase(fetchContacts.pending, (state) => {
            state.loading = true;
            state.error = false;
        }).addCase(fetchContacts.fulfilled, (state, action) => {
            state.items = action.payload;
            state.loading = false;
        }).addCase(fetchContacts.rejected, (state) => {
            state.loading = false;
            state.error = true;
        })

    }

    // reducers: {
    //     addContact: {
    //         reducer(state, action) {
    //             state.items.push(action.payload);
    //         },
    //         prepare({ name, number }) {
    //             return {
    //                 payload: {
    //                     name,
    //                     number,
    //                     id: crypto.randomUUID(),
    //                 }
    //             }
    //         }
    //     },
    //     deleteContact(state, action) {
    //         state.items = state.items.filter(contact => contact.id !== action.payload);
    //     },

    // }
})

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
export const selectContacts = state => state.contacts.items;
export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;