import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';
import { INewTeamResponse } from '../../api/dto/ITeam';

export type ToastVariantType = 'success' | 'error';

interface ITeamState {
	team: INewTeamResponse | null;
}

const initialState: ITeamState = {
	team: null,
};

const teamSlice = createSlice({
	name: 'team',
	initialState,
	reducers: {
		setTeam(state, action: PayloadAction<INewTeamResponse>) {
			state.team = action.payload;
		},
		resetTeam(state) {
			state.team = null;
		},
	},
});

export const { setTeam } = teamSlice.actions;

export const selectTeam = (state: RootState) => state.team.team;

export default teamSlice.reducer;
