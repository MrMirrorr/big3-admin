import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import { useAppDispatch } from '../../../store/store';
import {
	useCreatePlayerMutation,
	useGetPlayerQuery,
	useUpdatePlayerMutation,
} from '../../../api/requests/player';
import { displayToast } from '../../../modules/ui/uiThunk';
import { useUploadImage } from './useUploadImagePlayer';
import { convertDateStringToISO, convertISOToDateString } from '../../../utils';

export interface Inputs {
	imageFile?: File | null;
	name: string;
	position: string;
	team?: number;
	height?: number;
	weight?: number;
	birthday?: string;
	number?: number;
}

export const usePlayerForm = () => {
	const { id } = useParams<{ id?: string }>();
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const { data: playerData } = useGetPlayerQuery(`id=${id}`, {
		skip: id === undefined,
	});
	const [createPlayer, { isLoading: isCreatePlayerLoading }] =
		useCreatePlayerMutation();
	const [updatePlayer, { isLoading: isUpdatePlayerLoading }] =
		useUpdatePlayerMutation();

	const {
		register,
		handleSubmit,
		setValue,
		trigger,
		control,
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
	} = useUploadImage(setValue, trigger);

	const isLoading =
		isUploadImgLoading || isCreatePlayerLoading || isUpdatePlayerLoading;

	useEffect(() => {
		if (playerData) {
			setPreviewUrl(playerData?.avatarUrl);
			setValue('name', playerData.name);
			setValue('position', playerData.position);
			setValue('team', playerData.team);
			setValue('height', playerData.height);
			setValue('weight', playerData.weight);
			setValue('birthday', convertISOToDateString(playerData.birthday || ''));
			setValue('number', playerData.number);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [playerData]);

	const onSubmit: SubmitHandler<Inputs> = async (data) => {
		try {
			const imageUrl = await handleImageUpload(data, setError, playerData);

			if (!imageUrl) return;

			const playerFormData = {
				name: data.name,
				number: data.number,
				position: data.position,
				team: data.team,
				height: data.height,
				weight: data.weight,
				birthday: convertDateStringToISO(data.birthday || ''),
				avatarUrl: imageUrl,
			};

			if (!id) {
				const responsePlayerData = await createPlayer(playerFormData).unwrap();

				dispatch(
					displayToast('The new player has been successfully created.', {
						variant: 'success',
					}),
				);
				navigate(`/players/${responsePlayerData.id}`);

				console.log('Данные нового игрока', responsePlayerData);
			} else {
				const responsePlayerData = await updatePlayer({
					...playerFormData,
					id: Number(id),
				}).unwrap();

				dispatch(
					displayToast('The new team has been successfully updated.', {
						variant: 'success',
					}),
				);
				navigate(`/players/${responsePlayerData.id}`);

				console.log('Updated team data', responsePlayerData);
			}
		} catch (err: any) {
			if (err?.originalStatus && err?.originalStatus === 409) {
				console.log('A player with the specified name already exists.');
				dispatch(
					displayToast('A player with the specified name already exists.', {
						variant: 'error',
					}),
				);
			} else {
				console.log('Unknown create plyer error', err);
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
		Controller,
		control,
	};
};
