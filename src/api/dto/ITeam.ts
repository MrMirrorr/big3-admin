export interface INewTeamRequest {
	name: string;
	foundationYear: number;
	division: string;
	conference: string;
	imageUrl: string;
}

export interface INewTeamResponse extends INewTeamRequest {
	id: number;
}

export interface ITeamPageResult {
	data: INewTeamResponse[] | [];
	count: number;
	page: number;
	size: number;
}
