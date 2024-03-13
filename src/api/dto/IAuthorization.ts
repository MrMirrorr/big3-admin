export interface IRegisterRequest {
	userName: string | null;
	login: string | null;
	password: string | null;
}

export interface ILoginRequest {
	login: string | null;
	password: string | null;
}

export interface ILoginResponse {
	name: string | null;
	avatarUrl: string | null;
	token: string | null;
}

export interface IUnauthorizedResult {
	statusCode: number;
}
