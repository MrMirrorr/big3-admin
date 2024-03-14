import { api } from '../baseRequest';

export const imageApi = api.injectEndpoints({
	endpoints: (build) => ({
		uploadImage: build.mutation<string, FormData>({
			query: (formData) => ({
				url: 'api/Image/SaveImage',
				method: 'POST',
				body: formData,
			}),
		}),
	}),
});

export const { useUploadImageMutation } = imageApi;
