import { useState } from 'react';
import { UseFormSetError, UseFormSetValue, UseFormTrigger } from 'react-hook-form';
import { useAppDispatch } from '../../../store/store';
import { useUploadImageMutation } from '../../../api/requests/image';
import { displayToast } from '../../../modules/ui/uiThunk';
import { prepareImageFormData } from '../../../utils/prepareImageFormData';
import { IPlayerTeamNameResponse } from '../../../api/dto/IPlayer';
import { Inputs } from './usePlayerForm';

export const useUploadImage = (
	setValue: UseFormSetValue<Inputs>,
	trigger: UseFormTrigger<Inputs>,
) => {
	const dispatch = useAppDispatch();
	const [previewUrl, setPreviewUrl] = useState<string | null | undefined>(null);
	const [uploadImage, { isLoading: isUploadImgLoading }] = useUploadImageMutation();

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

	const handleImageUpload = async (
		data: Inputs,
		setError: UseFormSetError<Inputs>,
		playerData?: IPlayerTeamNameResponse,
	) => {
		let imageUrl: string | undefined = playerData?.avatarUrl ?? '';

		if (!imageUrl && !data.imageFile) {
			setError('imageFile', {
				message: 'Required',
			});

			return;
		}

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

		return imageUrl;
	};

	return {
		previewUrl,
		setPreviewUrl,
		isUploadImgLoading,
		handleFileChange,
		handleImageUpload,
	};
};
