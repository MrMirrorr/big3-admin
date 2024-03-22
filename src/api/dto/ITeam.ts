export interface INewTeamRequest {
	name: string;
	foundationYear?: number;
	division?: string;
	conference?: string;
	imageUrl?: string | null;
}

export interface ITeamResponse extends INewTeamRequest {
	id: number;
}

export interface ITeamPageResult {
	data: ITeamResponse[] | [];
	count: number;
	page: number;
	size: number;
}
