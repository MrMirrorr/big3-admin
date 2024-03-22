import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch } from '../../../store/store';
import {
	useCreateTeamMutation,
	useUpdateTeamMutation,
	useGetTeamQuery,
} from '../../../api/requests/team';
import { displayToast } from '../../../modules/ui/uiThunk';
import { useUploadImageTeam } from './useUploadImageTeam';

export interface Inputs {
	imageFile?: File | null;
	name: string;
	division?: string;
	conference?: string;
	year?: number;
}

export const useTeamForm = () => {
	const { id } = useParams<{ id?: string }>();
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const { data: teamData } = useGetTeamQuery(`id=${id}`, {
		skip: id === undefined,
	});
	const [createTeam, { isLoading: isCreateTeamLoading }] = useCreateTeamMutation();
	const [updateTeam, { isLoading: isUpdateTeamLoading }] = useUpdateTeamMutation();

	const {
		register,
		handleSubmit,
		setValue,
		trigger,
		setError,
		formState: { errors },
	} = useForm<Inputs>({
		defaultValues: {
			imageFile: null,
		},
	});

	const {
		previewUrl,
		setPreviewUrl,
		isUploadImgLoading,
		handleFileChange,
		handleImageUpload,
	} = useUploadImageTeam(setValue, trigger);

	const isLoading = isUploadImgLoading || isCreateTeamLoading || isUpdateTeamLoading;

	useEffect(() => {
		if (teamData) {
			setPreviewUrl(teamData?.imageUrl);
			setValue('name', teamData.name);
			setValue('conference', teamData.conference);
			setValue('division', teamData.division);
			setValue('year', teamData.foundationYear);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [teamData]);

	const onSubmit: SubmitHandler<Inputs> = async (data) => {
		try {
			const imageUrl = await handleImageUpload(data, setError, teamData);

			const teamFormData = {
				name: data.name,
				division: data.division,
				conference: data.conference,
				foundationYear: data.year,
				imageUrl: imageUrl,
			};

			if (!id) {
				const responseTeamData = await createTeam(teamFormData).unwrap();

				dispatch(
					displayToast('The new team has been successfully created.', {
						variant: 'success',
					}),
				);
				navigate(`/teams/${responseTeamData.id}`);

				console.log('New team data', responseTeamData);
			} else {
				const responseTeamData = await updateTeam({
					...teamFormData,
					id: Number(id),
				}).unwrap();

				dispatch(
					displayToast('The new team has been successfully updated.', {
						variant: 'success',
					}),
				);
				navigate(`/teams/${responseTeamData.id}`);

				console.log('Updated team data', responseTeamData);
			}
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
