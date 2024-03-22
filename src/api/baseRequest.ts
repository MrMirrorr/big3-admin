import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store/store';

const baseQuery = fetchBaseQuery({
	baseUrl: '/',
	prepareHeaders: (headers, { getState }) => {
		const token = (getState() as RootState).authorization.token;
		if (token) {
			headers.set('Authorization', `Bearer ${token}`);
		}
		return headers;
	},
});

// const baseQueryWithRetry = retry(baseQuery, { maxRetries: 1 });

export const api = createApi({
	reducerPath: 'splitApi',
	baseQuery: baseQuery,
	tagTypes: ['Teams', 'Players'],
	endpoints: () => ({}),
});
