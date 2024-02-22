import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    books: [],
    isLoading: false,
    error: null
}

export const getBooks = createAsyncThunk(
    'books/GETBooks',
    async () => {
        try {
            const response = await axios.get('https://epibooks.onrender.com/')
            return await response.data
        } catch (e) {
            console.log(e)
            throw(e)
        }
    }
)

const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        filterBooks: (state, action) => {
            const lowerCasePayload = action.payload.toLowerCase()
            console.log(lowerCasePayload)
            state.books = state.books.filter((book) => {
                return book.title.toLowerCase().includes(lowerCasePayload)
            })
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getBooks.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getBooks.fulfilled, (state, action) => {
                state.isLoading = false
                state.books = action.payload
            })
            .addCase(getBooks.rejected, (state) => {
                state.isLoading = false
                state.error = 'OOps qualcosa è andato storto'
            })
    }
})

export const allBooks = (state) => state.booksData.books
export const isAllBooksLoading = (state) => state.booksData.isLoading
export const isAllBooksError = (state) => state.booksData.error
export const { filterBooks } = booksSlice.actions

export default booksSlice.reducer