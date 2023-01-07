import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { hackerNewsApi } from './services/hacker-news';
import mainSlice from './services/main-slice';

const store = configureStore({
	reducer: {
		[hackerNewsApi.reducerPath]: hackerNewsApi.reducer,
		main: mainSlice,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(hackerNewsApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
