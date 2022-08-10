import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MultipleArticles } from '~/models';

interface initial {
    articles: MultipleArticles;
    isLoading: boolean;
    isLoadingSuccess: boolean;
}

const initialState: initial = {
    articles: {} as MultipleArticles,
    isLoading: false,
    isLoadingSuccess: false,
};

const articleSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {
        GET_ARTICLE: (state) => {
            state.isLoading = true;
        },
        GET_ARTICLE_SUCCESS: (state, action: PayloadAction<MultipleArticles>) => {
            state.articles = action.payload;
            state.isLoading = false;
            state.isLoadingSuccess = true;
        },
        GET_ARTICLE_FAILED: (state) => {
            state.isLoadingSuccess = false;
        },
    },
});

// Actions
export const articleActions = articleSlice.actions;

// Reducer
const articleReducer = articleSlice.reducer;
export default articleReducer;
