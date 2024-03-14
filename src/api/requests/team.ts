import { api } from '../baseRequest';
import { INewTeamRequest, INewTeamResponse, ITeamPageResult } from '../dto/ITeam';

export const teamApi = api.injectEndpoints({
	endpoints: (build) => ({
		getAllTeams: build.query<ITeamPageResult, string>({
			query: (params) => `api/Team/GetTeams?${params}`,
			providesTags: ['Teams'],
		}),
		createTeam: build.mutation<INewTeamResponse, INewTeamRequest>({
			query: (formData) => ({
				url: 'api/Team/Add',
				method: 'POST',
				body: formData,
			}),
			invalidatesTags: ['Teams'],
		}),
	}),
});

export const { useCreateTeamMutation, useGetAllTeamsQuery } = teamApi;
