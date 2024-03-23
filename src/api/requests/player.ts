import { api } from '../baseRequest';
import {
	INewPlayerRequest,
	IPlayerResponse,
	IPlayerPageResult,
	IPlayerTeamNameResponse,
	IPositionsResponse,
} from '../dto/IPlayer';

export const playerApi = api.injectEndpoints({
	endpoints: (build) => ({
		getAllPlayers: build.query<IPlayerPageResult, string>({
			query: (params) => `api/Player/GetPlayers?${params}`,
			providesTags: ['Players'],
		}),
		getPositions: build.query<IPositionsResponse, void>({
			query: () => `api/Player/GetPositions`,
			providesTags: ['Players'],
		}),
		getPlayer: build.query<IPlayerTeamNameResponse, string>({
			query: (params) => `api/Player/Get?${params}`,
			providesTags: ['Players'],
		}),
		createPlayer: build.mutation<IPlayerResponse, INewPlayerRequest>({
			query: (formData) => ({
				url: 'api/Player/Add',
				method: 'POST',
				body: formData,
			}),
			invalidatesTags: ['Players'],
		}),
		updatePlayer: build.mutation<IPlayerResponse, IPlayerResponse>({
			query: (formData) => ({
				url: 'api/Player/Update',
				method: 'PUT',
				body: formData,
			}),
			invalidatesTags: ['Players'],
		}),
		deletePlayer: build.mutation<IPlayerResponse, number>({
			query: (id) => ({
				url: `api/Player/Delete?id=${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['Players'],
		}),
	}),
});

export const {
	useCreatePlayerMutation,
	useUpdatePlayerMutation,
	useGetAllPlayersQuery,
	useGetPlayerQuery,
	useGetPositionsQuery,
	useDeletePlayerMutation,
} = playerApi;
