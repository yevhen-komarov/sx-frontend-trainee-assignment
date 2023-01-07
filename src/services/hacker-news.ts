import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type Item = {
	id: number;
	type: 'job' | 'story' | 'comment' | 'poll' | 'pollopt';
	by: string;
	time: number;
	score: number;
	title?: string;
	parent?: number;
	kids?: number[];
	url?: string;
	text?: string;
};

export const hackerNewsApi = createApi({
	reducerPath: 'hackerNewsApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://hacker-news.firebaseio.com/v0/' }),
	tagTypes: ['items'],
	endpoints: (builder) => ({
		getNewstories: builder.query<number[], void>({
			query: () => 'newstories.json?print=pretty',
			transformResponse: (data: number[]) => data.slice(0, 100),
		}),
		getItem: builder.query<Item, number>({
			query: (id) => `item/${id}.json?print=pretty`,
			providesTags: (result, error, id) => (result ? [{ type: 'items', id }] : []),
		}),
		getUpdates: builder.mutation<{ items: number[] }, void>({
			query: () => ({ url: 'updates.json?print=pretty', method: 'GET' }),
			invalidatesTags: (result) => result?.items.map((id) => ({ type: 'items', id })) ?? [],
		}),
	}),
});

export const { useGetNewstoriesQuery, useGetItemQuery, useGetUpdatesMutation, useLazyGetNewstoriesQuery } = hackerNewsApi;
