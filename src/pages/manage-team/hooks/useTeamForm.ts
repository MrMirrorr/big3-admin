import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch } from '../../../store/store';
import { useUploadImageMutation } from '../../../api/requests/image';
import { useCreateTeamMutation, useGetTeamQuery } from '../../../api/requests/team';
import { prepareImageFormData } from '../../../utils/prepareImageFormData';
import { displayToast } from '../../../modules/ui/uiThunk';

interface Inputs {
	imageFile?: File | null;
	name: string;
	division: string;
	conference: string;
	year: number;
}

export const useTeamForm = () => {
	const { id } = useParams<{ id?: string }>();
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const { data: teamData } = useGetTeamQuery(id ?? `id=${id}`, {
		skip: id === undefined,
	});
	const [previewUrl, setPreviewUrl] = useState<string | null>(null);
	const [uploadImage, { isLoading: isUploadImgLoading }] = useUploadImageMutation();
	const [createTeam, { isLoading: isCreateTeamLoading }] = useCreateTeamMutation();
	const isLoading = isUploadImgLoading || isCreateTeamLoading;

	const {
		register,
		handleSubmit,
		setValue,
		trigger,
		formState: { errors },
	} = useForm<Inputs>({
		defaultValues: {
			imageFile: null,
			name: '',
			division: '',
			conference: '',
			year: 0,
		},
	});

	useEffect(() => {
		if (teamData) {
			setPreviewUrl(teamData.imageUrl);
			setValue('name', teamData.name);
			setValue('conference', teamData.conference);
			setValue('division', teamData.division);
			setValue('year', teamData.foundationYear);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [teamData]);

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { files } = event.target;
		const selectedFiles = files as FileList;
		const file = selectedFiles[0];

		const reader = new FileReader();

		reader.onload = () => {
			if (typeof reader.result === 'string') {
				setPreviewUrl(reader.result);
				setValue('imageFile', file);
				trigger('imageFile');
			}
		};

		if (file) {
			reader.readAsDataURL(file);
		}
	};

	const onSubmit: SubmitHandler<Inputs> = async (data) => {
		try {
			let imageUrl: string | undefined = teamData?.imageUrl ?? '';

			if (data.imageFile) {
				const preparedImage = prepareImageFormData(data.imageFile);
				const responseImageUrl = await uploadImage(preparedImage)
					.unwrap()
					.catch(() => {
						dispatch(
							displayToast('Invalid image upload', {
								variant: 'error',
							}),
						);
						throw new Error('Invalid image upload');
					});

				imageUrl = responseImageUrl;
			}

			const teamFormData = {
				name: data.name,
				division: data.division,
				conference: data.conference,
				foundationYear: data.year,
				imageUrl: imageUrl,
			};

			const responseTeamData = await createTeam(teamFormData)
				.unwrap()
				.then(() => {
					dispatch(
						displayToast('The new team has been successfully created.', {
							variant: 'success',
						}),
					);
					navigate('/teams');
				});

			console.log('Данные новой команды', responseTeamData);
		} catch (err: any) {
			if (err?.originalStatus && err?.originalStatus === 409) {
				console.log('A team with the specified name already exists.');
				dispatch(
					displayToast('A team with the specified name already exists.', {
						variant: 'error',
					}),
				);
			} else {
				console.log('Unknown create team error', err);
			}
		}
	};

	return {
		register,
		handleSubmit,
		onSubmit,
		errors,
		isLoading,
		previewUrl,
		handleFileChange,
	};
};
