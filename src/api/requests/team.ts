import { api } from '../baseRequest';
import { IPlayerPageResult } from '../dto/IPlayer';
import { INewTeamRequest, ITeamResponse, ITeamPageResult } from '../dto/ITeam';

export const teamApi = api.injectEndpoints({
	endpoints: (build) => ({
		getAllTeams: build.query<ITeamPageResult, string>({
			query: (params) => `api/Team/GetTeams?${params}`,
			providesTags: ['Teams'],
		}),
		getTeam: build.query<ITeamResponse, string>({
			query: (params) => `api/Team/Get?${params}`,
			providesTags: ['Teams'],
		}),
		createTeam: build.mutation<ITeamResponse, INewTeamRequest>({
			query: (formData) => ({
				url: 'api/Team/Add',
				method: 'POST',
				body: formData,
			}),
			invalidatesTags: ['Teams'],
		}),
		updateTeam: build.mutation<ITeamResponse, ITeamResponse>({
			query: (formData) => ({
				url: 'api/Team/Update',
				method: 'PUT',
				body: formData,
			}),
			invalidatesTags: ['Teams'],
		}),
		deleteTeam: build.mutation<ITeamResponse, number>({
			query: (id) => ({
				url: `api/Team/Delete?id=${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['Teams'],
		}),
		getTeamPlayers: build.query<IPlayerPageResult, string>({
			query: (params) => `api/Player/GetPlayers?${params}`,
			providesTags: ['Teams', 'Players'],
		}),
	}),
});

export const {
	useCreateTeamMutation,
	useUpdateTeamMutation,
	useDeleteTeamMutation,
	useGetAllTeamsQuery,
	useGetTeamQuery,
	useGetTeamPlayersQuery,
} = teamApi;
