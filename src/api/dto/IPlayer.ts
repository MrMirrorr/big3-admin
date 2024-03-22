export interface INewPlayerRequest {
	name: string;
	number?: number;
	position: string;
	team?: number;
	birthday?: string;
	height?: number;
	weight?: number;
	avatarUrl?: string | null;
}

export interface IPlayerResponse extends INewPlayerRequest {
	id: number;
}

export interface IPlayerTeamNameResponse extends IPlayerResponse {
	teamName: string;
}

export interface IPlayerPageResult {
	data: IPlayerResponse[] | [];
	count: number;
	page: number;
	size: number;
}

export type IPositionsResponse = string[];
