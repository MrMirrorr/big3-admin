import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ILoginResponse } from '../../api/dto/IAuthorization';
import { RootState } from '../../store/store';

const initialState: ILoginResponse = {
	name: null,
	avatarUrl: null,
	token: null,
};

const authorizationSlice = createSlice({
	name: 'authorization',
	initialState,
	reducers: {
		setCredentials: (
			state,
			{ payload: { name, avatarUrl, token } }: PayloadAction<ILoginResponse>,
		) => {
			localStorage.setItem('user', JSON.stringify({ name: name, token: token }));

			state.name = name;
			state.avatarUrl = avatarUrl;
			state.token = token;
		},
		logOut: (state) => {
			localStorage.setItem('user', JSON.stringify({}));

			state.name = null;
			state.avatarUrl = null;
			state.token = null;
		},
	},
});

export const { setCredentials, logOut } = authorizationSlice.actions;

export const selectCurrentUser = (state: RootState) => state.authorization;
export const selectIsAuthUser = (state: RootState) => Boolean(state.authorization.token);

export default authorizationSlice.reducer;
