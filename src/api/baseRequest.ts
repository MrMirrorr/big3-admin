import { FetchArgs, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store/store';
import { logOut } from '../modules/authorization/authorizationSlice';

const baseQueryWithCheckAuth = async (args: FetchArgs, api: any, extraOptions: any) => {
	let result = await baseQuery(args, api, extraOptions);

	if (result?.error?.status === 401) {
		api.dispatch(logOut());
	}

	return result;
};

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

export const api = createApi({
	reducerPath: 'splitApi',
	baseQuery: (args, api, extraOptions) =>
		baseQueryWithCheckAuth(args, api, extraOptions),
	tagTypes: ['Teams', 'Players'],
	endpoints: () => ({}),
});
