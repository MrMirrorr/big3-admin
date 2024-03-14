import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch } from '../../../store/store';
import { useUploadImageMutation } from '../../../api/requests/image';
import { useCreateTeamMutation } from '../../../api/requests/team';
import { prepareImageFormData } from '../../../utils/prepareImageFormData';
import { displayToast } from '../../../modules/ui/uiThunk';

interface Inputs {
	image: File | null;
	name: string;
	division: string;
	conference: string;
	year: number;
}

export const useTeamForm = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
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
			image: null,
			name: '',
			division: '',
			conference: '',
			year: 0,
		},
	});

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { files } = event.target;
		const selectedFiles = files as FileList;
		const file = selectedFiles[0];

		const reader = new FileReader();

		reader.onload = () => {
			if (typeof reader.result === 'string') {
				setPreviewUrl(reader.result);
				setValue('image', file);
				trigger('image');
			}
		};

		if (file) {
			reader.readAsDataURL(file);
		}
	};

	const onSubmit: SubmitHandler<Inputs> = async (data) => {
		try {
			const preparedImage = prepareImageFormData(data.image);
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

			const teamFormData = {
				name: data.name,
				division: data.division,
				conference: data.conference,
				foundationYear: data.year,
				imageUrl: responseImageUrl,
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
