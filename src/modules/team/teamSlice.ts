import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';
import { ITeamResponse } from '../../api/dto/ITeam';

export type ToastVariantType = 'success' | 'error';

interface ITeamState {
	team: ITeamResponse | null;
}

const initialState: ITeamState = {
	team: null,
};

const teamSlice = createSlice({
	name: 'team',
	initialState,
	reducers: {
		setTeam(state, action: PayloadAction<ITeamResponse>) {
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
