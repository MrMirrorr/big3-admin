import { api } from '../baseRequest';
import { ILoginRequest, ILoginResponse, IRegisterRequest } from '../dto/IAuthorization';

export const authorizationApi = api.injectEndpoints({
	endpoints: (build) => ({
		register: build.mutation<ILoginResponse, IRegisterRequest>({
			query: (credentials) => ({
				url: 'api/Auth/SignUp',
				method: 'POST',
				body: credentials,
			}),
		}),
		login: build.mutation<ILoginResponse, ILoginRequest>({
			query: (credentials) => ({
				url: 'api/Auth/SignIn',
				method: 'POST',
				body: credentials,
			}),
		}),
	}),
});

export const { useRegisterMutation, useLoginMutation } = authorizationApi;
