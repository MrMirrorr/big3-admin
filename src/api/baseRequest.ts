import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store/store';

const baseQuery = fetchBaseQuery({
	baseUrl: 'http://dev.trainee.dex-it.ru/api',
	prepareHeaders: (headers, { getState }) => {
		const token = (getState() as RootState).authorization.token;
		if (token) {
			headers.set('authorization', `Bearer ${token}`);
		}
		return headers;
	},
});

// const baseQueryWithRetry = retry(baseQuery, { maxRetries: 1 });

export const api = createApi({
	reducerPath: 'splitApi',
	baseQuery: baseQuery,
	// tagTypes: ['Time', 'Posts', 'Counter'],
	endpoints: () => ({}),
});
