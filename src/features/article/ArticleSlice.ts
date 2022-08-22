import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CreateArticle, UpdateArticle, MultipleArticles, Article, SingleArticle } from '~/models';

interface initial {
	articles: any;

	isLoading: boolean;
	isLoadingSuccess: boolean;
	isLoadingFailed: boolean;

	isCreateSuccess: boolean;
	isCreateFailed: boolean;

	isDelete: boolean;
	isDeleteSuccess: boolean;
	isDeleteFailed: boolean;
	deletePayload: string;

	updateSuccess: boolean;
	updateFailed: boolean;

	authorSuccess: boolean;

	isFavorite: boolean;

	favoriteByUserSuccess: boolean;
	favoriteByUserFailed: boolean;
}

const initialState: initial = {
	articles: {},

	isLoading: false,
	isLoadingSuccess: false,
	isLoadingFailed: false,

	isCreateSuccess: false,
	isCreateFailed: false,

	isDelete: false,
	isDeleteSuccess: false,
	isDeleteFailed: false,
	deletePayload: '',

	updateSuccess: false,
	updateFailed: false,

	authorSuccess: false,

	isFavorite: false,

	favoriteByUserSuccess: false,
	favoriteByUserFailed: false,
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
			state.isLoadingSuccess = true;
			state.isLoading = false;
		},
		GET_ARTICLE_FAILED: (state) => {
			state.isLoadingFailed = true;
		},
		ARTICLE_RESET: (state) => {
			state.isLoadingFailed = false;
			state.isLoadingSuccess = false;
			state.authorSuccess = false;
			state.isCreateSuccess = false;
			state.isCreateFailed = false;
			state.isDeleteSuccess = false;
			state.isCreateFailed = false;
			state.updateSuccess = false;
			state.updateFailed = false;
			state.favoriteByUserSuccess = false;
			state.favoriteByUserFailed = false;
		},

		GET_ARTICLE_BY_AUTHOR: (state, action: PayloadAction<string>) => {
			state.isLoading = true;
		},
		GET_ARTICLE_BY_AUTHOR_SUCCESS: (state) => {
			state.isLoading = false;
			state.authorSuccess = true;
		},

		GET_ARTICLE_BY_SLUG: (state, action: PayloadAction<string>) => {},

		IS_CREATE: (state, action: PayloadAction<CreateArticle>) => {},
		IS_CREATE_SUCCESS: (state) => {
			state.isCreateSuccess = true;
		},
		IS_CREATED_FAILED: (state) => {
			state.isCreateFailed = true;
		},

		IS_DELETE: (state, action: PayloadAction<string>) => {
			state.isDelete = true;
			state.deletePayload = action.payload;
		},
		IS_DELETE_SUCCESS: (state) => {
			state.isDelete = false;
			state.isDeleteSuccess = true;
			const x = state.articles.articles.filter(
				(article: any) => article.slug !== state.deletePayload,
			);
			state.articles.articles = x;
		},
		IS_DELETE_FAILED: (state) => {
			state.isDelete = false;
			state.isCreateFailed = true;
		},

		UPDATE: (state, action: PayloadAction<UpdateArticle>) => {},
		UPDATE_SUCCESS: (state) => {
			state.updateSuccess = true;
		},
		UPDATE_FAILED: (state) => {
			state.updateFailed = true;
		},
		FAVORITE: (state, action: PayloadAction<string>) => {
			state.isFavorite = true;
		},
		FAVORITE_SUCCESS: (state, action: PayloadAction<SingleArticle>) => {
			const x = state.articles.articles.find((item: Article) => {
				return item.slug === action.payload.article.slug;
			});

			x.favorited = true;
			x.favoritesCount += 1;
			state.isFavorite = false;
		},
		UNFAVORITE: (state, action: PayloadAction<string>) => {
			state.isFavorite = true;
		},
		UNFAVORITE_SUCCESS: (state, action: PayloadAction<SingleArticle>) => {
			const x = state.articles.articles.find(
				(item: any) => item.slug === action.payload.article.slug,
			);
			x.favorited = false;
			x.favoritesCount -= 1;
			state.isFavorite = false;
		},
		FAVORITE_BY_USER: (state, action: PayloadAction<string>) => {
			state.isLoading = true;
		},
		FAVORITE_BY_USER_SUCCESS: (state, action: PayloadAction<MultipleArticles>) => {
			state.articles = action.payload;
			state.isLoading = false;
			state.favoriteByUserSuccess = true;
		},
		FAVORITE_BY_USER_FAILED: (state) => {
			state.isLoading = false;
			state.favoriteByUserFailed = true;
		},
	},
});

// Actions
export const articleActions = articleSlice.actions;

// Reducer
const articleReducer = articleSlice.reducer;
export default articleReducer;
