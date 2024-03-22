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
		getPositions: build.query<IPositionsResponse, void>({
			query: () => `api/Player/GetPositions`,
			providesTags: ['Players'],
		}),
	}),
});

export const {
	useCreatePlayerMutation,
	useGetAllPlayersQuery,
	useGetPlayerQuery,
	useGetPositionsQuery,
} = playerApi;
