import {
	BaseQueryFn,
	FetchArgs,
	FetchBaseQueryError,
	createApi,
	fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import { RootState } from '../store/store';
import { logOut } from '../modules/authorization/authorizationSlice';
import { showToast } from '../modules/ui/uiSlice';

const baseQueryWithCheckAuth: BaseQueryFn<
	string | FetchArgs,
	unknown,
	FetchBaseQueryError
> = async (args, api, extraOptions) => {
	let result = await baseQuery(args, api, extraOptions);

	if (result.error && result.error.status === 401) {
		api.dispatch(showToast({ message: 'Please log in', variant: 'success' }));
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
