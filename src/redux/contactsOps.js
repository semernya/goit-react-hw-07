import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://66a40d4644aa637045833ecd.mockapi.io/'

export const fetchContacts = createAsyncThunk('contacts/getAll', async (_, thunkAPI) => {
    try {
        const response = await axios.get('contacts');
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue('Error fetching data!');
    }

});


export const addContact = createAsyncThunk('contacts/addContact', async (newContact, thunkAPI) => {
    try {
        const response = await axios.get('contacts', newContact);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue('Error fetching data!');
    }

});





