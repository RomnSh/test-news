import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



export const fetchNewsApi = createAsyncThunk(

    'news/fetchNewsApi',
    async function (_,{rejectWithValue}) {
        try {
            const response = await fetch(`https://newsapi.org/v2/everything?q=apple&pageSize=25&from=2023-02-24&to=2023-02-24&sortBy=popularity&language=en&apiKey=271888fcd610453ca28383e5c16c346e`)
            if (!response.ok) {
                throw new Error('Serwer Error')
            }
            const data = await response.json();
                return data;
            
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }     
)

const newsSlice = createSlice({
    name: 'news',
    initialState: {
        news: [],
        numberСards: 8,
        status: null,
        error: null,
    },
    reducers: {
        removeNews(state, action) {
            
            state.news = state.news.filter(news => news.publishedAt !== action.payload)
            console.log('state>', state.news);
            console.log('actions>', action.payload);

        },
        addNews(state, action){
            console.log(action.payload);
            state.numberСards = action.payload + 4
        }

    },
    extraReducers:{
        [fetchNewsApi.pending]: (state) => {
            state.status = 'loading'
            state.error = null
        },
        [fetchNewsApi.fulfilled]: (state, action) => {
            state.status = 'resolved'
            state.news = action.payload.articles

        },
        [fetchNewsApi.rejected]:  (state, action) => {
            state.status = "rejected"
            state.error = action.payload
        },
    }
    
})

export const {fetchNews, removeNews, addNews } = newsSlice.actions


export default newsSlice.reducer